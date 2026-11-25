import {
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  jsonResponse,
  normalizeLocalizedText,
  nowIso,
  parseRequestJson,
  safeJsonParse,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';

const CLUB_SETTINGS_ID = 'club';

interface ClubSettingsRow {
  id: string;
  name: string;
  short_name: string;
  nickname_json: string;
  founded: number;
  stadium_json: string;
  colors_json: string;
  contact_json: string;
  socials_json: string;
  updated_at: string | null;
}

const DEFAULT_STADIUM = {
  name: 'Halaba Stadium',
  capacity: '15,000 Seats',
  city: 'Halaba Kulito',
  region: 'Central Ethiopia Regional State',
  surface: 'Natural Grass',
};

const DEFAULT_COLORS = {
  primary: '#c80815',
  secondary: '#056b2b',
  accent: '#f5b800',
};

const DEFAULT_CONTACT = {
  address: 'Halaba Stadium Sports Complex, Main Boulevard, Halaba Kulito, Ethiopia',
  phone: '+251 46 226 0192 / +251 91 688 4422',
  email: 'info@halabacityfc.et',
  mediaEmail: 'press@halabacityfc.et',
  ticketOffice: 'tickets@halabacityfc.et',
  hours: 'Monday – Friday: 8:30 AM – 5:30 PM (Matchdays: 7:00 AM – 7:00 PM)',
};

const DEFAULT_SOCIALS = {
  facebook: 'https://facebook.com/halabacityfc.official',
  telegram: 'https://t.me/halabacityfc',
  youtube: 'https://youtube.com/@halabacityfc',
  twitter: 'https://x.com/halabacityfc',
};

function sanitizeJsonObject<T extends Record<string, unknown>>(raw: unknown, fallback: T): T {
  const parsed = safeJsonParse<unknown>(raw, null);
  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
    return { ...fallback, ...(parsed as Record<string, unknown>) } as T;
  }
  return fallback;
}

export function mapSettingsRow(row: ClubSettingsRow | Record<string, unknown>) {
  return {
    id: String(row.id || CLUB_SETTINGS_ID),
    name: String(row.name || 'HALABA City FC'),
    shortName: String(row.short_name || 'HALABA FC'),
    nickname: normalizeLocalizedText(row.nickname_json, 'Berberewochu (The Chilies)'),
    founded: Number(row.founded) || 1966,
    stadium: sanitizeJsonObject(row.stadium_json, DEFAULT_STADIUM),
    colors: sanitizeJsonObject(row.colors_json, DEFAULT_COLORS),
    contact: sanitizeJsonObject(row.contact_json, DEFAULT_CONTACT),
    socials: sanitizeJsonObject(row.socials_json, DEFAULT_SOCIALS),
    ...(row.updated_at ? { updatedAt: String(row.updated_at) } : {}),
  };
}

export async function onRequestOptions(context: PagesContext) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext) {
  const headers = getPublicCorsHeaders('public, max-age=120, s-maxage=300, stale-while-revalidate=600');
  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, name, short_name, nickname_json, founded,
                stadium_json, colors_json, contact_json, socials_json, updated_at
         FROM club_settings
         WHERE id = ?
         LIMIT 1`
      )
      .bind(CLUB_SETTINGS_ID)
      .first<ClubSettingsRow>();

    const clubInfo = row ? mapSettingsRow(row) : null;

    return jsonResponse(
      {
        success: true,
        configured: true,
        source: 'cloudflare-d1',
        clubInfo,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load club settings from D1.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleSave(context: PagesContext) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  const parsed = await parseRequestJson<Record<string, unknown>>(context.request);
  if (!parsed.ok) {
    return errorResponse(parsed.error, 400, headers);
  }

  try {
    const body = parsed.data;
    const name = cleanString(body.name, 200);
    if (!name) {
      return errorResponse('Club name is required.', 400, headers);
    }

    const shortName = cleanString(body.shortName ?? body.short_name, 80) || 'HALABA FC';
    const nickname = normalizeLocalizedText(body.nickname ?? body.nickname_json, 'Berberewochu (The Chilies)');

    const foundedNum = Number(body.founded);
    const founded =
      Number.isFinite(foundedNum) && foundedNum >= 1850 && foundedNum <= 2100
        ? Math.trunc(foundedNum)
        : 1966;

    const stadium = sanitizeJsonObject(body.stadium ?? body.stadium_json, DEFAULT_STADIUM);
    const colors = sanitizeJsonObject(body.colors ?? body.colors_json, DEFAULT_COLORS);
    const contact = sanitizeJsonObject(body.contact ?? body.contact_json, DEFAULT_CONTACT);
    const socials = sanitizeJsonObject(body.socials ?? body.socials_json, DEFAULT_SOCIALS);
    const timestamp = nowIso();

    await db
      .prepare(
        `INSERT INTO club_settings (
          id, name, short_name, nickname_json, founded,
          stadium_json, colors_json, contact_json, socials_json, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          name = excluded.name,
          short_name = excluded.short_name,
          nickname_json = excluded.nickname_json,
          founded = excluded.founded,
          stadium_json = excluded.stadium_json,
          colors_json = excluded.colors_json,
          contact_json = excluded.contact_json,
          socials_json = excluded.socials_json,
          updated_at = excluded.updated_at`
      )
      .bind(
        CLUB_SETTINGS_ID,
        name,
        shortName,
        JSON.stringify(nickname),
        founded,
        JSON.stringify(stadium),
        JSON.stringify(colors),
        JSON.stringify(contact),
        JSON.stringify(socials),
        timestamp
      )
      .run();

    const updated = await db
      .prepare(
        `SELECT id, name, short_name, nickname_json, founded,
                stadium_json, colors_json, contact_json, socials_json, updated_at
         FROM club_settings
         WHERE id = ?
         LIMIT 1`
      )
      .bind(CLUB_SETTINGS_ID)
      .first<ClubSettingsRow>();

    return jsonResponse(
      {
        success: true,
        configured: true,
        clubInfo: updated ? mapSettingsRow(updated) : null,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save club settings to D1.';
    return errorResponse(message, 500, headers);
  }
}

export async function onRequestPut(context: PagesContext) {
  return handleSave(context);
}

export async function onRequestPost(context: PagesContext) {
  return handleSave(context);
}
