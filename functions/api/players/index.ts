import {
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
  executeBatch,
  fromDbBool,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  isValidId,
  jsonResponse,
  nowIso,
  parseRequestJson,
  toDbBool,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';

export interface PlayerRow {
  id: string;
  number: number | null;
  name: string | null;
  position: string | null;
  nationality: string | null;
  birth_year: number | null;
  appearances: number | null;
  goals: number | null;
  is_captain: number | boolean | string | null;
  image: string | null;
  assists: number | null;
  clean_sheets: number | null;
  photo_url: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const VALID_POSITIONS = new Set(['Goalkeeper', 'Defender', 'Midfielder', 'Forward']);

export function mapPlayerRow(row: PlayerRow) {
  const photo = row.photo_url || row.image || undefined;
  return {
    id: row.id,
    number: typeof row.number === 'number' ? row.number : Number(row.number) || 0,
    name: row.name || 'Player',
    position: VALID_POSITIONS.has(row.position || '') ? row.position! : 'Midfielder',
    nationality: row.nationality || 'Ethiopian',
    birthYear: typeof row.birth_year === 'number' ? row.birth_year : Number(row.birth_year) || 2000,
    appearances: typeof row.appearances === 'number' ? row.appearances : Number(row.appearances) || 0,
    goals: typeof row.goals === 'number' ? row.goals : Number(row.goals) || 0,
    isCaptain: fromDbBool(row.is_captain, false),
    ...(row.image ? { image: row.image } : {}),
    ...(photo ? { photoUrl: photo } : {}),
    ...(row.assists !== null && row.assists !== undefined ? { assists: Number(row.assists) || 0 } : {}),
    ...(row.clean_sheets !== null && row.clean_sheets !== undefined
      ? { cleanSheets: Number(row.clean_sheets) || 0 }
      : {}),
  };
}

function validatePlayerPayload(input: Record<string, unknown>) {
  const id = typeof input.id === 'string' && input.id.trim()
    ? input.id.trim()
    : `p-${Date.now()}`;
  if (!isValidId(id)) {
    return { ok: false as const, error: 'Invalid player ID.' };
  }

  const name = cleanString(input.name, 128);
  if (!name) {
    return { ok: false as const, error: 'Player name is required.' };
  }

  const posRaw = typeof input.position === 'string' ? input.position.trim() : 'Midfielder';
  const position = VALID_POSITIONS.has(posRaw) ? posRaw : 'Midfielder';

  const numberVal = typeof input.number === 'number' ? input.number : Number(input.number);
  const number = Number.isFinite(numberVal) ? Math.max(0, Math.min(999, Math.trunc(numberVal))) : 0;

  const birthYearVal = typeof input.birthYear === 'number' ? input.birthYear : Number(input.birthYear);
  const birth_year =
    Number.isFinite(birthYearVal) && birthYearVal >= 1950 && birthYearVal <= 2020
      ? Math.trunc(birthYearVal)
      : 2000;

  const appearances = Math.max(0, Math.trunc(Number(input.appearances) || 0));
  const goals = Math.max(0, Math.trunc(Number(input.goals) || 0));
  const assists =
    input.assists !== undefined && input.assists !== null
      ? Math.max(0, Math.trunc(Number(input.assists) || 0))
      : 0;
  const clean_sheets =
    input.cleanSheets !== undefined && input.cleanSheets !== null
      ? Math.max(0, Math.trunc(Number(input.cleanSheets) || 0))
      : 0;

  const photo_url = cleanString(input.photoUrl, 900000) || cleanString(input.image, 900000) || null;
  const image = cleanString(input.image, 900000) || photo_url;

  return {
    ok: true as const,
    record: {
      id,
      number,
      name,
      position,
      nationality: cleanString(input.nationality, 64) || 'Ethiopian',
      birth_year,
      appearances,
      goals,
      is_captain: toDbBool(input.isCaptain),
      image,
      assists,
      clean_sheets,
      photo_url,
    },
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
    const res = await db
      .prepare(
        `SELECT id, number, name, position, nationality, birth_year, appearances, goals,
                is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
         FROM players
         ORDER BY number ASC, name ASC`
      )
      .all<PlayerRow>();

    const players = (res.results || []).map(mapPlayerRow);

    return jsonResponse(
      {
        success: true,
        source: 'cloudflare-d1',
        count: players.length,
        players,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load players from D1.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

export async function onRequestPost(context: PagesContext) {
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
  const body = parsed.data;
  const timestamp = nowIso();

  try {
    // Non-destructive backfill of missing official players only (never overwrites existing rows)
    if (body.action === 'syncMissing' && Array.isArray(body.players)) {
      const items = body.players.slice(0, 60);
      const stmt = db.prepare(
        `INSERT INTO players (
          id, number, name, position, nationality, birth_year, appearances, goals,
          is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO NOTHING`
      );
      const statements = [];
      for (const item of items) {
        if (!item || typeof item !== 'object') continue;
        const validated = validatePlayerPayload(item as Record<string, unknown>);
        if (!validated.ok) continue;
        const r = validated.record;
        statements.push(
          stmt.bind(
            r.id,
            r.number,
            r.name,
            r.position,
            r.nationality,
            r.birth_year,
            r.appearances,
            r.goals,
            r.is_captain,
            r.image,
            r.assists,
            r.clean_sheets,
            r.photo_url,
            timestamp,
            timestamp
          )
        );
      }

      await executeBatch(db, statements);

      return jsonResponse({ success: true, processed: statements.length }, 200, headers);
    }

    const validated = validatePlayerPayload(body);
    if (!validated.ok) {
      return errorResponse(validated.error, 400, headers);
    }
    const r = validated.record;

    await db
      .prepare(
        `INSERT INTO players (
          id, number, name, position, nationality, birth_year, appearances, goals,
          is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          number = excluded.number,
          name = excluded.name,
          position = excluded.position,
          nationality = excluded.nationality,
          birth_year = excluded.birth_year,
          appearances = excluded.appearances,
          goals = excluded.goals,
          is_captain = excluded.is_captain,
          image = excluded.image,
          assists = excluded.assists,
          clean_sheets = excluded.clean_sheets,
          photo_url = excluded.photo_url,
          updated_at = excluded.updated_at`
      )
      .bind(
        r.id,
        r.number,
        r.name,
        r.position,
        r.nationality,
        r.birth_year,
        r.appearances,
        r.goals,
        r.is_captain,
        r.image,
        r.assists,
        r.clean_sheets,
        r.photo_url,
        timestamp,
        timestamp
      )
      .run();

    const saved = await db
      .prepare(
        `SELECT id, number, name, position, nationality, birth_year, appearances, goals,
                is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
         FROM players WHERE id = ? LIMIT 1`
      )
      .bind(r.id)
      .first<PlayerRow>();

    return jsonResponse(
      { success: true, player: saved ? mapPlayerRow(saved) : null },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save player to D1.';
    return errorResponse(message, 500, headers);
  }
}
