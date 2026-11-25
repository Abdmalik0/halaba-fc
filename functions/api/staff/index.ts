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

export interface StaffRow {
  id: string;
  name: string | null;
  role: string | null;
  department: string | null;
  nationality: string | null;
  photo_url: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const VALID_DEPARTMENTS = new Set(['Coaching', 'Medical', 'Management']);

export function mapStaffRow(row: StaffRow) {
  return {
    id: row.id,
    name: row.name || 'Staff',
    role: row.role || 'Coach',
    department: VALID_DEPARTMENTS.has(row.department || '') ? row.department! : 'Coaching',
    nationality: row.nationality || 'Ethiopian',
    ...(row.photo_url ? { photoUrl: row.photo_url } : {}),
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
        `SELECT id, name, role, department, nationality, photo_url, created_at, updated_at
         FROM staff
         ORDER BY created_at ASC, name ASC`
      )
      .all<StaffRow>();

    const staff = (res.results || []).map(mapStaffRow);

    return jsonResponse(
      {
        success: true,
        source: 'cloudflare-d1',
        count: staff.length,
        staff,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load staff from D1.';
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

  const id = typeof body.id === 'string' && body.id.trim()
    ? body.id.trim()
    : `s-${Date.now()}`;
  if (!isValidId(id)) {
    return errorResponse('Invalid staff ID.', 400, headers);
  }

  const name = cleanString(body.name, 128);
  const role = cleanString(body.role, 128);
  if (!name || !role) {
    return errorResponse('Staff name and role are required.', 400, headers);
  }

  const deptRaw = typeof body.department === 'string' ? body.department.trim() : 'Coaching';
  const department = VALID_DEPARTMENTS.has(deptRaw) ? deptRaw : 'Coaching';
  const nationality = cleanString(body.nationality, 64) || 'Ethiopian';
  const photoUrl = cleanString(body.photoUrl, 900000) || null;
  const timestamp = nowIso();

  try {
    await db
      .prepare(
        `INSERT INTO staff (
          id, name, role, department, nationality, photo_url, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          name = excluded.name,
          role = excluded.role,
          department = excluded.department,
          nationality = excluded.nationality,
          photo_url = excluded.photo_url,
          updated_at = excluded.updated_at`
      )
      .bind(id, name, role, department, nationality, photoUrl, timestamp, timestamp)
      .run();

    const saved = await db
      .prepare(
        `SELECT id, name, role, department, nationality, photo_url, created_at, updated_at
         FROM staff WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<StaffRow>();

    return jsonResponse(
      { success: true, staffMember: saved ? mapStaffRow(saved) : null },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save staff member to D1.';
    return errorResponse(message, 500, headers);
  }
}
