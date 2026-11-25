import {
  PagesContext,
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
import { mapProductRow, resolveProductSchema, upsertProductRow } from './index';

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid product ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const schema = await resolveProductSchema(db);
    if (!schema) {
      return jsonResponse({ success: true, configured: false, product: null }, 200, headers);
    }

    const row = await db
      .prepare(`SELECT * FROM "${schema.tableName}" WHERE "id" = ? LIMIT 1`)
      .bind(id)
      .first<Record<string, unknown>>();

    if (!row) {
      return errorResponse('Product not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, configured: true, product: mapProductRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch product.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid product ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  const parsed = await parseRequestJson<Record<string, unknown>>(context.request);
  if (!parsed.ok) {
    return errorResponse(parsed.error, 400, headers);
  }

  try {
    const schema = await resolveProductSchema(db);
    if (!schema) {
      return errorResponse(
        'D1 products table does not exist yet. Review and apply migrations/0001_public_club_tables.sql.',
        501,
        headers,
        { configured: false }
      );
    }

    const existingRow = await db
      .prepare(`SELECT * FROM "${schema.tableName}" WHERE "id" = ? LIMIT 1`)
      .bind(id)
      .first<Record<string, unknown>>();

    const base = existingRow ? mapProductRow(existingRow) : {};
    const merged = {
      ...base,
      ...parsed.data,
      id,
    };

    await upsertProductRow(db, schema, merged, nowIso());

    const updated = await db
      .prepare(`SELECT * FROM "${schema.tableName}" WHERE "id" = ? LIMIT 1`)
      .bind(id)
      .first<Record<string, unknown>>();

    return jsonResponse(
      { success: true, configured: true, product: updated ? mapProductRow(updated) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update product.';
    return errorResponse(message, 400, headers);
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
    return errorResponse('Invalid product ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    const schema = await resolveProductSchema(db);
    if (!schema) {
      return errorResponse('D1 products table does not exist yet.', 501, headers, {
        configured: false,
      });
    }

    await db.prepare(`DELETE FROM "${schema.tableName}" WHERE "id" = ?`).bind(id).run();
    return jsonResponse({ success: true, configured: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete product.';
    return errorResponse(message, 500, headers);
  }
}
