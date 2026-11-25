import {
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
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
import { PlayerRow, mapPlayerRow } from './index';

const VALID_POSITIONS = new Set(['Goalkeeper', 'Defender', 'Midfielder', 'Forward']);

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid player ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, number, name, position, nationality, birth_year, appearances, goals,
                is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
         FROM players WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<PlayerRow>();

    if (!row) {
      return errorResponse('Player not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, player: mapPlayerRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch player.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid player ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  const parsed = await parseRequestJson<Record<string, unknown>>(context.request);
  if (!parsed.ok) {
    return errorResponse(parsed.error, 400, headers);
  }
  const updates = parsed.data;

  try {
    const existing = await db
      .prepare(
        `SELECT id, number, name, position, nationality, birth_year, appearances, goals,
                is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
         FROM players WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<PlayerRow>();

    if (!existing) {
      return errorResponse('Player not found.', 404, headers);
    }

    const name =
      updates.name !== undefined ? cleanString(updates.name, 128) || existing.name : existing.name;
    const number =
      updates.number !== undefined && Number.isFinite(Number(updates.number))
        ? Math.max(0, Math.min(999, Math.trunc(Number(updates.number))))
        : existing.number;
    const position =
      typeof updates.position === 'string' && VALID_POSITIONS.has(updates.position.trim())
        ? updates.position.trim()
        : existing.position;
    const nationality =
      updates.nationality !== undefined
        ? cleanString(updates.nationality, 64) || existing.nationality
        : existing.nationality;
    const birthYear =
      updates.birthYear !== undefined && Number.isFinite(Number(updates.birthYear))
        ? Math.trunc(Number(updates.birthYear))
        : existing.birth_year;
    const appearances =
      updates.appearances !== undefined && Number.isFinite(Number(updates.appearances))
        ? Math.max(0, Math.trunc(Number(updates.appearances)))
        : existing.appearances;
    const goals =
      updates.goals !== undefined && Number.isFinite(Number(updates.goals))
        ? Math.max(0, Math.trunc(Number(updates.goals)))
        : existing.goals;
    const isCaptain =
      updates.isCaptain !== undefined ? toDbBool(updates.isCaptain) : existing.is_captain;
    const assists =
      updates.assists !== undefined && Number.isFinite(Number(updates.assists))
        ? Math.max(0, Math.trunc(Number(updates.assists)))
        : existing.assists;
    const cleanSheets =
      updates.cleanSheets !== undefined && Number.isFinite(Number(updates.cleanSheets))
        ? Math.max(0, Math.trunc(Number(updates.cleanSheets)))
        : existing.clean_sheets;
    const photoUrl =
      updates.photoUrl !== undefined
        ? cleanString(updates.photoUrl, 900000) ?? existing.photo_url
        : existing.photo_url;
    const image =
      updates.image !== undefined
        ? cleanString(updates.image, 900000) ?? existing.image
        : existing.image || photoUrl;
    const updatedAt = nowIso();

    await db
      .prepare(
        `UPDATE players SET
          number = ?,
          name = ?,
          position = ?,
          nationality = ?,
          birth_year = ?,
          appearances = ?,
          goals = ?,
          is_captain = ?,
          image = ?,
          assists = ?,
          clean_sheets = ?,
          photo_url = ?,
          updated_at = ?
         WHERE id = ?`
      )
      .bind(
        number,
        name,
        position,
        nationality,
        birthYear,
        appearances,
        goals,
        isCaptain,
        image,
        assists,
        cleanSheets,
        photoUrl,
        updatedAt,
        id
      )
      .run();

    const updatedRow = await db
      .prepare(
        `SELECT id, number, name, position, nationality, birth_year, appearances, goals,
                is_captain, image, assists, clean_sheets, photo_url, created_at, updated_at
         FROM players WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<PlayerRow>();

    return jsonResponse(
      { success: true, player: updatedRow ? mapPlayerRow(updatedRow) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update player.';
    return errorResponse(message, 500, headers);
  }
}

export async function onRequestPut(context: PagesContext<{ id: string }>) {
  return handleUpdate(context);
}

export async function onRequestPatch(context: PagesContext<{ id: string }>) {
  return handleUpdate(context);
}

export async function onRequestDelete(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid player ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    await db.prepare('DELETE FROM players WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete player.';
    return errorResponse(message, 500, headers);
  }
}
