import { auth } from '../firebase';

const PRODUCTION_API_BASE_URL = 'https://halaba-fc.pages.dev';

/**
 * Resolves the Cloudflare Pages API origin depending on runtime environment:
 * - Explicit VITE_API_BASE_URL override if provided
 * - Capacitor Android / iOS WebView or GitHub Pages static mirror -> https://halaba-fc.pages.dev
 * - Cloudflare Pages / local preview / Vite dev server -> same-origin relative '/api/...'
 */
export function getApiBaseUrl(): string {
  const envUrl =
    typeof import.meta !== 'undefined' &&
    (import.meta as any).env &&
    typeof (import.meta as any).env.VITE_API_BASE_URL === 'string'
      ? (import.meta as any).env.VITE_API_BASE_URL.trim().replace(/\/+$/, '')
      : '';

  if (envUrl) {
    return envUrl;
  }

  if (typeof window === 'undefined' || !window.location) {
    return '';
  }

  const win = window as any;
  const isCapacitorNative = Boolean(
    win.Capacitor &&
      typeof win.Capacitor.isNativePlatform === 'function' &&
      win.Capacitor.isNativePlatform()
  );

  const protocol = window.location.protocol || '';
  const hostname = (window.location.hostname || '').toLowerCase();
  const port = window.location.port || '';

  // Capacitor Android uses androidScheme: 'https' -> https://localhost with empty port
  const isCapacitorHost =
    isCapacitorNative ||
    protocol === 'capacitor:' ||
    protocol === 'ionic:' ||
    protocol === 'file:' ||
    (hostname === 'localhost' && port === '');

  const isGitHubPages = hostname.endsWith('.github.io');

  if (isCapacitorHost || isGitHubPages) {
    return PRODUCTION_API_BASE_URL;
  }

  return '';
}

export function resolveApiUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = getApiBaseUrl();
  return base ? `${base}${normalizedPath}` : normalizedPath;
}

export type ApiErrorKind = 'offline' | 'cors_or_network' | 'html_fallback' | 'http' | 'invalid_json';

export interface ApiFetchResult<T> {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string;
  isHtmlFallback?: boolean;
  isNetworkError?: boolean;
  isOffline?: boolean;
  errorKind?: ApiErrorKind;
}

export async function apiFetchJson<T = Record<string, unknown>>(
  path: string,
  init: RequestInit = {}
): Promise<ApiFetchResult<T>> {
  const url = resolveApiUrl(path);

  try {
    const headers = new Headers(init.headers || {});
    if (!headers.has('Accept')) {
      headers.set('Accept', 'application/json');
    }

    const res = await fetch(url, {
      ...init,
      headers,
    });

    const contentType = (res.headers.get('content-type') || '').toLowerCase();

    // Local Vite dev server (server.ts SPA fallback) and static mirrors return 200 text/html for unknown /api/* routes
    if (!contentType.includes('application/json')) {
      return {
        ok: false,
        status: res.status,
        data: null,
        error: `Non-JSON response (${res.status}) from ${path}`,
        isHtmlFallback: contentType.includes('text/html') || res.status === 200 || res.status === 404,
        errorKind: 'html_fallback',
      };
    }

    let parsed: any = null;
    try {
      parsed = await res.json();
    } catch {
      return {
        ok: false,
        status: res.status,
        data: null,
        error: 'Invalid JSON response payload.',
        errorKind: 'invalid_json',
      };
    }

    if (!res.ok) {
      const serverErr =
        parsed && typeof parsed.error === 'string' && parsed.error
          ? parsed.error
          : `Request failed with HTTP ${res.status}`;
      return {
        ok: false,
        status: res.status,
        data: parsed as T,
        error: serverErr,
        errorKind: 'http',
      };
    }

    return {
      ok: true,
      status: res.status,
      data: parsed as T,
    };
  } catch (err: any) {
    const isOffline = typeof navigator !== 'undefined' && navigator.onLine === false;
    return {
      ok: false,
      status: 0,
      data: null,
      error: isOffline
        ? 'You appear to be offline.'
        : err && err.message
        ? String(err.message)
        : 'CORS or network error reaching API.',
      isNetworkError: true,
      isOffline,
      errorKind: isOffline ? 'offline' : 'cors_or_network',
    };
  }
}

export async function getFirebaseAdminAuthHeaders(): Promise<Record<string, string>> {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('Unauthorized: No active Firebase administrator session.');
  }
  const idToken = await currentUser.getIdToken();
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${idToken}`,
  };
}

export async function adminApiFetchJson<T = Record<string, unknown>>(
  path: string,
  init: RequestInit = {}
): Promise<ApiFetchResult<T>> {
  let authHeaders: Record<string, string>;
  try {
    authHeaders = await getFirebaseAdminAuthHeaders();
  } catch (err: any) {
    return {
      ok: false,
      status: 401,
      data: null,
      error: err && err.message ? String(err.message) : 'Unauthorized: No active Firebase administrator session.',
      errorKind: 'http',
    };
  }

  const mergedHeaders = new Headers(init.headers || {});
  Object.keys(authHeaders).forEach((key) => {
    mergedHeaders.set(key, authHeaders[key]);
  });

  return apiFetchJson<T>(path, {
    ...init,
    headers: mergedHeaders,
  });
}
