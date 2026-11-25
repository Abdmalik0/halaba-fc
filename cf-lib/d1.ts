/**
 * Shared Cloudflare D1 & HTTP helpers for HALABA City FC Pages Functions.
 * Compatible with Cloudflare Pages Workers runtime (no Node-only dependencies).
 */

export interface D1PreparedStatement {
  bind: (...values: unknown[]) => D1PreparedStatement;
  first: <T = Record<string, unknown>>(colName?: string) => Promise<T | null>;
  run: <T = Record<string, unknown>>() => Promise<D1Result<T>>;
  all: <T = Record<string, unknown>>() => Promise<D1Result<T>>;
}

export interface D1Result<T = Record<string, unknown>> {
  results?: T[];
  success: boolean;
  error?: string;
  meta?: Record<string, unknown>;
}

export interface D1Database {
  prepare: (query: string) => D1PreparedStatement;
  batch?: <T = Record<string, unknown>>(statements: D1PreparedStatement[]) => Promise<D1Result<T>[]>;
}

export interface CloudflareEnv {
  DB: D1Database;
  FIREBASE_PROJECT_ID?: string;
  ADMIN_EMAILS?: string;
  ALLOWED_ORIGINS?: string;
}

export interface PagesContext<TParams extends Record<string, string> = Record<string, string>> {
  request: Request;
  env: CloudflareEnv;
  params: TParams;
}

const DEFAULT_PUBLIC_CACHE = 'public, max-age=60, s-maxage=120, stale-while-revalidate=300';

const ALLOWED_ORIGIN_PATTERNS: RegExp[] = [
  /^https:\/\/([a-z0-9-]+\.)?halaba-fc\.pages\.dev$/i,
  /^https:\/\/halaba-fc\.pages\.dev$/i,
  /^https:\/\/abdmalik0\.github\.io$/i,
  /^https?:\/\/localhost(:\d+)?$/i,
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/i,
  /^capacitor:\/\/localhost$/i,
  /^ionic:\/\/localhost$/i,
  /^https:\/\/[a-z0-9-]+\.europe-west2\.run\.app$/i,
  /^https:\/\/[a-z0-9-]+\.run\.app$/i,
];

export function resolveAllowedOrigin(request: Request, env?: CloudflareEnv): string | null {
  const origin = request.headers.get('Origin');
  if (!origin) return null;

  const requestUrl = new URL(request.url);
  if (origin === requestUrl.origin) {
    return origin;
  }

  if (env?.ALLOWED_ORIGINS) {
    const customOrigins = env.ALLOWED_ORIGINS.split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (customOrigins.includes(origin)) {
      return origin;
    }
  }

  for (const pattern of ALLOWED_ORIGIN_PATTERNS) {
    if (pattern.test(origin)) {
      return origin;
    }
  }

  return null;
}

export function getPublicCorsHeaders(cacheControl = DEFAULT_PUBLIC_CACHE): Record<string, string> {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': cacheControl,
  };
}

export function getAuthenticatedCorsHeaders(
  request: Request,
  env?: CloudflareEnv,
  methods = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Methods': methods,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Cache-Control': 'no-store',
    Vary: 'Origin',
  };

  const allowedOrigin = resolveAllowedOrigin(request, env);
  if (allowedOrigin) {
    headers['Access-Control-Allow-Origin'] = allowedOrigin;
    headers['Access-Control-Allow-Credentials'] = 'true';
  }

  return headers;
}

export function handleOptionsRequest(
  request: Request,
  env?: CloudflareEnv,
  allowCredentials = true
): Response {
  const headers = allowCredentials
    ? getAuthenticatedCorsHeaders(request, env)
    : getPublicCorsHeaders('no-store');
  return new Response(null, { status: 204, headers });
}

export function jsonResponse(
  payload: unknown,
  status = 200,
  headers: Record<string, string> = getPublicCorsHeaders()
): Response {
  return new Response(JSON.stringify(payload), { status, headers });
}

export function errorResponse(
  message: string,
  status = 500,
  headers: Record<string, string> = getPublicCorsHeaders('no-store'),
  extra?: Record<string, unknown>
): Response {
  return new Response(
    JSON.stringify({
      success: false,
      error: message,
      ...(extra || {}),
    }),
    { status, headers }
  );
}

export interface ParsedRequestJson<T = Record<string, unknown>> {
  ok: boolean;
  data?: T;
  error?: string;
}

export async function parseRequestJson<T = Record<string, unknown>>(
  request: Request
): Promise<ParsedRequestJson<T>> {
  try {
    const text = await request.text();
    if (!text || !text.trim()) {
      return { ok: false, error: 'Request body is required.' };
    }
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { ok: false, error: 'Request body must be a JSON object.' };
    }
    return { ok: true, data: parsed as T };
  } catch {
    return { ok: false, error: 'Invalid JSON request body.' };
  }
}

export function safeJsonParse<T>(raw: unknown, fallback: T): T {
  if (raw === null || raw === undefined) return fallback;
  if (typeof raw === 'object') return raw as T;
  if (typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  if (!trimmed) return fallback;
  try {
    return JSON.parse(trimmed) as T;
  } catch {
    return fallback;
  }
}

export function toDbBool(val: unknown): number {
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (typeof val === 'number') return val ? 1 : 0;
  if (typeof val === 'string') {
    const lower = val.trim().toLowerCase();
    return lower === 'true' || lower === '1' || lower === 'yes' ? 1 : 0;
  }
  return 0;
}

export function fromDbBool(val: unknown, defaultVal = false): boolean {
  if (val === null || val === undefined) return defaultVal;
  if (typeof val === 'boolean') return val;
  if (typeof val === 'number') return val !== 0;
  if (typeof val === 'string') {
    const lower = val.trim().toLowerCase();
    if (lower === 'true' || lower === '1') return true;
    if (lower === 'false' || lower === '0' || lower === '') return false;
  }
  return Boolean(val);
}

export function cleanString(val: unknown, maxLen = 20000): string | null {
  if (typeof val !== 'string') return null;
  const trimmed = val.trim();
  if (!trimmed) return '';
  return trimmed.length > maxLen ? trimmed.slice(0, maxLen) : trimmed;
}

export function isValidId(id: unknown): id is string {
  return typeof id === 'string' && /^[a-zA-Z0-9._-]{1,128}$/.test(id.trim());
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function normalizeLocalizedText(
  raw: unknown,
  fallbackEn = ''
): { en: string; am: string; om: string } {
  const parsed = typeof raw === 'string' ? safeJsonParse<unknown>(raw, raw) : raw;
  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
    const obj = parsed as Record<string, unknown>;
    const en = typeof obj.en === 'string' ? obj.en : fallbackEn;
    const am = typeof obj.am === 'string' && obj.am ? obj.am : en;
    const om = typeof obj.om === 'string' && obj.om ? obj.om : en;
    return { en, am, om };
  }
  const str = typeof parsed === 'string' ? parsed : fallbackEn;
  return { en: str, am: str, om: str };
}

interface SchemaCacheEntry {
  tableName: string | null;
  columns: string[];
  checkedAt: number;
}

const schemaCache = new Map<string, SchemaCacheEntry>();
const SCHEMA_CACHE_TTL_MS = 3 * 60 * 1000;

export function clearSchemaCache(cacheKey?: string): void {
  if (cacheKey) {
    schemaCache.delete(cacheKey);
  } else {
    schemaCache.clear();
  }
}

/**
 * Safely checks whether any allowlisted table name exists in D1 and returns its column names.
 * Only static, allowlisted SQL identifiers are ever interpolated after strict regex validation.
 * Missing tables (null) are never cached so newly provisioned tables are detected immediately.
 */
export async function detectTableSchema(
  db: D1Database,
  cacheKey: string,
  candidateTables: readonly string[]
): Promise<{ tableName: string | null; columns: string[] }> {
  const now = Date.now();
  const cached = schemaCache.get(cacheKey);
  if (cached && cached.tableName && now - cached.checkedAt < SCHEMA_CACHE_TTL_MS) {
    return { tableName: cached.tableName, columns: cached.columns };
  }

  for (const candidate of candidateTables) {
    if (!/^[a-z_][a-z0-9_]*$/.test(candidate)) continue;
    const existsRow = await db
      .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name = ? LIMIT 1")
      .bind(candidate)
      .first<{ name: string }>();

    if (existsRow?.name === candidate) {
      const pragmaRes = await db.prepare(`PRAGMA table_info("${candidate}")`).all<{ name: string }>();
      const columns = (pragmaRes.results || []).map((r) => r.name);
      schemaCache.set(cacheKey, { tableName: candidate, columns, checkedAt: now });
      return { tableName: candidate, columns };
    }
  }

  schemaCache.delete(cacheKey);
  return { tableName: null, columns: [] };
}

export async function executeBatch(
  db: D1Database,
  statements: D1PreparedStatement[],
  chunkSize = 50
): Promise<void> {
  if (statements.length === 0) return;
  if (typeof db.batch === 'function') {
    for (let i = 0; i < statements.length; i += chunkSize) {
      await db.batch(statements.slice(i, i + chunkSize));
    }
    return;
  }
  for (const stmt of statements) {
    await stmt.run();
  }
}

export async function executeAtomicBatch<T = Record<string, unknown>>(
  db: D1Database,
  statements: D1PreparedStatement[]
): Promise<D1Result<T>[]> {
  if (statements.length === 0) return [];
  if (typeof db.batch !== 'function') {
    throw new Error('Atomic D1 batch execution requires db.batch().');
  }
  return await db.batch<T>(statements);
}

export function ensureDb(env: CloudflareEnv | undefined): D1Database | null {
  if (!env || !env.DB || typeof env.DB.prepare !== 'function') {
    return null;
  }
  return env.DB;
}
