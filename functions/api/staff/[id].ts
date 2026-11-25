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
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';
import { StaffRow, mapStaffRow } from './index';

const VALID_DEPARTMENTS = new Set(['Coaching', 'Medical', 'Management']);

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid staff ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, name, role, department, nationality, photo_url, created_at, updated_at
         FROM staff WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<StaffRow>();

    if (!row) {
      return errorResponse('Staff member not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, staffMember: mapStaffRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load staff member.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid staff ID.', 400, headers);
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
        `SELECT id, name, role, department, nationality, photo_url, created_at, updated_at
         FROM staff WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<StaffRow>();

    if (!existing) {
      return errorResponse('Staff member not found.', 404, headers);
    }

    const name =
      updates.name !== undefined ? cleanString(updates.name, 128) || existing.name : existing.name;
    const role =
      updates.role !== undefined ? cleanString(updates.role, 128) || existing.role : existing.role;
    const deptRaw =
      typeof updates.department === 'string' ? updates.department.trim() : existing.department;
    const department =
      deptRaw && VALID_DEPARTMENTS.has(deptRaw) ? deptRaw : existing.department || 'Coaching';
    const nationality =
      updates.nationality !== undefined
        ? cleanString(updates.nationality, 64) || existing.nationality
        : existing.nationality;
    const photoUrl =
      updates.photoUrl !== undefined
        ? cleanString(updates.photoUrl, 900000) ?? existing.photo_url
        : existing.photo_url;
    const updatedAt = nowIso();

    await db
      .prepare(
        `UPDATE staff SET
          name = ?,
          role = ?,
          department = ?,
          nationality = ?,
          photo_url = ?,
          updated_at = ?
         WHERE id = ?`
      )
      .bind(name, role, department, nationality, photoUrl, updatedAt, id)
      .run();

    const updatedRow = await db
      .prepare(
        `SELECT id, name, role, department, nationality, photo_url, created_at, updated_at
         FROM staff WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<StaffRow>();

    return jsonResponse(
      { success: true, staffMember: updatedRow ? mapStaffRow(updatedRow) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update staff member.';
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
    return errorResponse('Invalid staff ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    await db.prepare('DELETE FROM staff WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete staff member.';
    return errorResponse(message, 500, headers);
  }
}
