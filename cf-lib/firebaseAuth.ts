/**
 * Edge-compatible Firebase Authentication ID token verifier for Cloudflare Pages Functions.
 * Verifies RS256 signatures against Google's published JWK public keys, validates standard
 * Firebase claims (iss, aud, exp, iat, sub), and enforces club administrator authorization.
 */

import { CloudflareEnv, errorResponse, getAuthenticatedCorsHeaders } from './d1';

const DEFAULT_FIREBASE_PROJECT_ID = 'halabafc';
const GOOGLE_SECURETOKEN_JWKS_URL =
  'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

const DEFAULT_AUTHORIZED_ADMIN_EMAILS = new Set<string>([
  'admin@halabafc.et',
  'halabacityfc@gmail.com',
  'abdpriin@gmail.com',
]);

interface GoogleJwk {
  kid: string;
  kty: string;
  alg?: string;
  use?: string;
  n: string;
  e: string;
}

interface JwksCache {
  keys: Map<string, CryptoKey>;
  expiresAt: number;
}

let jwksCache: JwksCache | null = null;

export interface VerifiedFirebaseUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  claims: Record<string, unknown>;
}

function base64UrlToUint8Array(input: string): Uint8Array {
  const padded = input.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(input.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function decodeBase64UrlJson<T = Record<string, unknown>>(segment: string): T | null {
  try {
    const bytes = base64UrlToUint8Array(segment);
    const jsonText = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(jsonText);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed as T;
  } catch {
    return null;
  }
}

function parseCacheMaxAge(cacheControlHeader: string | null): number {
  if (!cacheControlHeader) return 300;
  const match = cacheControlHeader.match(/max-age=(\d+)/i);
  if (!match) return 300;
  const seconds = parseInt(match[1], 10);
  return Number.isFinite(seconds) && seconds > 0 ? Math.min(seconds, 3600) : 300;
}

async function fetchGoogleJwks(forceRefresh = false): Promise<Map<string, CryptoKey>> {
  const now = Date.now();
  if (!forceRefresh && jwksCache && now < jwksCache.expiresAt && jwksCache.keys.size > 0) {
    return jwksCache.keys;
  }

  const res = await fetch(GOOGLE_SECURETOKEN_JWKS_URL, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Google Firebase public keys (HTTP ${res.status})`);
  }

  const data = (await res.json()) as { keys?: GoogleJwk[] };
  if (!data || !Array.isArray(data.keys)) {
    throw new Error('Malformed JWKS response from Google public key endpoint');
  }

  const importedKeys = new Map<string, CryptoKey>();
  for (const jwk of data.keys) {
    if (!jwk.kid || jwk.kty !== 'RSA' || !jwk.n || !jwk.e) continue;
    try {
      const cryptoKey = await crypto.subtle.importKey(
        'jwk',
        {
          kty: 'RSA',
          n: jwk.n,
          e: jwk.e,
          alg: 'RS256',
          ext: true,
        },
        { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
        false,
        ['verify']
      );
      importedKeys.set(jwk.kid, cryptoKey);
    } catch {
      // Skip unimportable key entry
    }
  }

  if (importedKeys.size === 0) {
    throw new Error('No valid RSA public keys imported from Google JWKS');
  }

  const maxAgeSeconds = parseCacheMaxAge(res.headers.get('Cache-Control'));
  jwksCache = {
    keys: importedKeys,
    expiresAt: now + maxAgeSeconds * 1000,
  };

  return importedKeys;
}

function getAuthorizedEmails(env?: CloudflareEnv): Set<string> {
  const allowed = new Set<string>(DEFAULT_AUTHORIZED_ADMIN_EMAILS);
  if (env?.ADMIN_EMAILS) {
    for (const raw of env.ADMIN_EMAILS.split(',')) {
      const clean = raw.trim().toLowerCase();
      if (clean) allowed.add(clean);
    }
  }
  return allowed;
}

export interface VerifyTokenResult {
  ok: boolean;
  user?: VerifiedFirebaseUser;
  reason?: string;
}

export async function verifyFirebaseIdToken(
  token: string,
  env?: CloudflareEnv
): Promise<VerifyTokenResult> {
  const parts = token.split('.');
  if (parts.length !== 3) {
    return { ok: false, reason: 'Malformed JWT token.' };
  }

  const header = decodeBase64UrlJson<{ alg?: unknown; kid?: unknown; typ?: unknown }>(parts[0]);
  const payload = decodeBase64UrlJson<Record<string, unknown>>(parts[1]);

  if (!header || !payload) {
    return { ok: false, reason: 'Invalid JWT encoding.' };
  }

  if (header.alg !== 'RS256' || typeof header.kid !== 'string' || !header.kid) {
    return { ok: false, reason: 'Unsupported JWT algorithm or missing key identifier.' };
  }

  const projectId = (env?.FIREBASE_PROJECT_ID || DEFAULT_FIREBASE_PROJECT_ID).trim();
  const expectedIssuer = `https://securetoken.google.com/${projectId}`;
  const nowSec = Math.floor(Date.now() / 1000);

  if (payload.aud !== projectId) {
    return { ok: false, reason: 'Invalid token audience.' };
  }
  if (payload.iss !== expectedIssuer) {
    return { ok: false, reason: 'Invalid token issuer.' };
  }
  if (typeof payload.exp !== 'number' || payload.exp <= nowSec) {
    return { ok: false, reason: 'Authentication token has expired.' };
  }
  if (typeof payload.iat !== 'number' || payload.iat > nowSec + 300) {
    return { ok: false, reason: 'Token issue time is invalid.' };
  }
  if (payload.auth_time !== undefined && (typeof payload.auth_time !== 'number' || payload.auth_time > nowSec + 300)) {
    return { ok: false, reason: 'Token auth_time is invalid.' };
  }
  if (typeof payload.sub !== 'string' || payload.sub.trim().length === 0) {
    return { ok: false, reason: 'Missing token subject.' };
  }

  let keys = await fetchGoogleJwks(false);
  let publicKey = keys.get(header.kid);
  if (!publicKey) {
    // Key may have rotated; refresh JWKS once
    keys = await fetchGoogleJwks(true);
    publicKey = keys.get(header.kid);
  }
  if (!publicKey) {
    return { ok: false, reason: 'Unable to match signing key for token.' };
  }

  const signingInput = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
  const signatureBytes = base64UrlToUint8Array(parts[2]);

  const isSignatureValid = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    publicKey,
    signatureBytes as BufferSource,
    signingInput as BufferSource
  );

  if (!isSignatureValid) {
    return { ok: false, reason: 'Invalid Firebase ID token signature.' };
  }

  const email = typeof payload.email === 'string' ? payload.email.toLowerCase().trim() : null;
  const emailVerified = payload.email_verified === true;

  return {
    ok: true,
    user: {
      uid: payload.sub,
      email,
      emailVerified,
      claims: payload,
    },
  };
}

export function isAuthorizedClubAdmin(user: VerifiedFirebaseUser, env?: CloudflareEnv): boolean {
  const firebaseInfo = user.claims.firebase as Record<string, unknown> | undefined;
  if (firebaseInfo && firebaseInfo.sign_in_provider === 'anonymous') {
    return false;
  }

  // Primary check: Firebase custom claims
  if (user.claims.admin === true || user.claims.role === 'admin') {
    return true;
  }

  // Secondary check: Established authorized administrator email allowlist
  if (user.email && getAuthorizedEmails(env).has(user.email)) {
    return true;
  }

  return false;
}

export interface AdminAuthResult {
  ok: boolean;
  user?: VerifiedFirebaseUser;
  response?: Response;
}

export async function requireAdminAuth(
  request: Request,
  env?: CloudflareEnv
): Promise<AdminAuthResult> {
  const headers = getAuthenticatedCorsHeaders(request, env);
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return {
      ok: false,
      response: errorResponse('Authentication required. Missing Authorization header.', 401, headers),
    };
  }

  const match = authHeader.match(/^Bearer\s+(\S+)$/i);
  if (!match) {
    return {
      ok: false,
      response: errorResponse('Invalid Authorization header format. Expected Bearer token.', 401, headers),
    };
  }

  try {
    const verified = await verifyFirebaseIdToken(match[1], env);
    if (!verified.ok || !verified.user) {
      return {
        ok: false,
        response: errorResponse(verified.reason || 'Invalid Firebase ID token.', 401, headers),
      };
    }

    if (!isAuthorizedClubAdmin(verified.user, env)) {
      return {
        ok: false,
        response: errorResponse(
          'Forbidden: Administrator privileges are required for this operation.',
          403,
          headers
        ),
      };
    }

    return { ok: true, user: verified.user };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Token verification failed.';
    return {
      ok: false,
      response: errorResponse(msg, 401, headers),
    };
  }
}
