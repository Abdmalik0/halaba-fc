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
import { SponsorRow, mapSponsorRow } from './index';

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid sponsor ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, name, name_am, name_om, tier, tier_am, image_url, website_url,
                description, description_am, active, display_order, created_at, updated_at
         FROM sponsors WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<SponsorRow>();

    if (!row) {
      return errorResponse('Sponsor not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, sponsor: mapSponsorRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load sponsor.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid sponsor ID.', 400, headers);
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
        `SELECT id, name, name_am, name_om, tier, tier_am, image_url, website_url,
                description, description_am, active, display_order, created_at, updated_at
         FROM sponsors WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<SponsorRow>();

    if (!existing) {
      return errorResponse('Sponsor not found.', 404, headers);
    }

    const name =
      updates.name !== undefined ? cleanString(updates.name, 200) || existing.name : existing.name;
    const nameAm =
      updates.nameAm !== undefined ? cleanString(updates.nameAm, 200) ?? existing.name_am : existing.name_am;
    const nameOm =
      updates.nameOm !== undefined ? cleanString(updates.nameOm, 200) ?? existing.name_om : existing.name_om;
    const tier =
      updates.tier !== undefined ? cleanString(updates.tier, 160) || existing.tier : existing.tier;
    const tierAm =
      updates.tierAm !== undefined ? cleanString(updates.tierAm, 160) ?? existing.tier_am : existing.tier_am;
    const imageUrl =
      updates.imageUrl !== undefined
        ? cleanString(updates.imageUrl, 900000) || existing.image_url
        : existing.image_url;
    const websiteUrl =
      updates.websiteUrl !== undefined
        ? cleanString(updates.websiteUrl, 512) ?? existing.website_url
        : existing.website_url;
    const description =
      updates.description !== undefined
        ? cleanString(updates.description, 2000) ?? existing.description
        : existing.description;
    const descriptionAm =
      updates.descriptionAm !== undefined
        ? cleanString(updates.descriptionAm, 2000) ?? existing.description_am
        : existing.description_am;
    const active =
      updates.active !== undefined ? toDbBool(updates.active) : existing.active;
    const displayOrder =
      updates.order !== undefined && Number.isFinite(Number(updates.order))
        ? Math.trunc(Number(updates.order))
        : existing.display_order;
    const updatedAt = nowIso();

    await db
      .prepare(
        `UPDATE sponsors SET
          name = ?,
          name_am = ?,
          name_om = ?,
          tier = ?,
          tier_am = ?,
          image_url = ?,
          website_url = ?,
          description = ?,
          description_am = ?,
          active = ?,
          display_order = ?,
          updated_at = ?
         WHERE id = ?`
      )
      .bind(
        name,
        nameAm,
        nameOm,
        tier,
        tierAm,
        imageUrl,
        websiteUrl,
        description,
        descriptionAm,
        active,
        displayOrder,
        updatedAt,
        id
      )
      .run();

    const updatedRow = await db
      .prepare(
        `SELECT id, name, name_am, name_om, tier, tier_am, image_url, website_url,
                description, description_am, active, display_order, created_at, updated_at
         FROM sponsors WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<SponsorRow>();

    return jsonResponse(
      { success: true, sponsor: updatedRow ? mapSponsorRow(updatedRow) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update sponsor.';
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
    return errorResponse('Invalid sponsor ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    await db.prepare('DELETE FROM sponsors WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete sponsor.';
    return errorResponse(message, 500, headers);
  }
}
