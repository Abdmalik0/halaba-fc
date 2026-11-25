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

export interface SponsorRow {
  id: string;
  name: string | null;
  name_am: string | null;
  name_om: string | null;
  tier: string | null;
  tier_am: string | null;
  image_url: string | null;
  website_url: string | null;
  description: string | null;
  description_am: string | null;
  active: number | boolean | string | null;
  display_order: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export function mapSponsorRow(row: SponsorRow) {
  return {
    id: row.id,
    name: row.name || 'Sponsor',
    ...(row.name_am ? { nameAm: row.name_am } : {}),
    ...(row.name_om ? { nameOm: row.name_om } : {}),
    tier: row.tier || 'Official Partner',
    ...(row.tier_am ? { tierAm: row.tier_am } : {}),
    imageUrl: row.image_url || '',
    ...(row.website_url ? { websiteUrl: row.website_url } : {}),
    ...(row.description ? { description: row.description } : {}),
    ...(row.description_am ? { descriptionAm: row.description_am } : {}),
    active: fromDbBool(row.active, true),
    order: typeof row.display_order === 'number' ? row.display_order : Number(row.display_order) || 10,
  };
}

function validateSponsorPayload(input: Record<string, unknown>, fallbackOrder = 10) {
  const id = typeof input.id === 'string' && input.id.trim()
    ? input.id.trim()
    : `sponsor-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  if (!isValidId(id)) {
    return { ok: false as const, error: 'Invalid sponsor ID.' };
  }

  const name = cleanString(input.name, 200);
  if (!name) {
    return { ok: false as const, error: 'Sponsor name is required.' };
  }

  const imageUrl = cleanString(input.imageUrl, 900000);
  if (!imageUrl) {
    return { ok: false as const, error: 'Sponsor imageUrl is required.' };
  }

  const orderNum =
    typeof input.order === 'number' && Number.isFinite(input.order)
      ? Math.trunc(input.order)
      : fallbackOrder;

  return {
    ok: true as const,
    record: {
      id,
      name,
      name_am: cleanString(input.nameAm, 200) || '',
      name_om: cleanString(input.nameOm, 200) || '',
      tier: cleanString(input.tier, 160) || 'Official Partner',
      tier_am: cleanString(input.tierAm, 160) || '',
      image_url: imageUrl,
      website_url: cleanString(input.websiteUrl, 512) || '',
      description: cleanString(input.description, 2000) || '',
      description_am: cleanString(input.descriptionAm, 2000) || '',
      active: input.active !== undefined ? toDbBool(input.active) : 1,
      display_order: orderNum,
    },
  };
}

export async function onRequestOptions(context: PagesContext) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext) {
  const headers = getPublicCorsHeaders('public, max-age=60, s-maxage=120, stale-while-revalidate=300');
  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const res = await db
      .prepare(
        `SELECT id, name, name_am, name_om, tier, tier_am, image_url, website_url,
                description, description_am, active, display_order, created_at, updated_at
         FROM sponsors
         ORDER BY display_order ASC, created_at ASC`
      )
      .all<SponsorRow>();

    const sponsors = (res.results || []).map(mapSponsorRow);

    return jsonResponse(
      {
        success: true,
        source: 'cloudflare-d1',
        count: sponsors.length,
        sponsors,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load sponsors from D1.';
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
    // Support resetting/restoring official sponsor posters cleanly without dropping custom columns
    if (body.action === 'reset' && Array.isArray(body.sponsors)) {
      const items = body.sponsors.slice(0, 50);
      const validList = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item || typeof item !== 'object') continue;
        const validated = validateSponsorPayload(item as Record<string, unknown>, i + 1);
        if (!validated.ok) {
          return errorResponse(validated.error, 400, headers);
        }
        validList.push(validated.record);
      }

      const stmt = db.prepare(
        `INSERT INTO sponsors (
          id, name, name_am, name_om, tier, tier_am, image_url, website_url,
          description, description_am, active, display_order, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          name = excluded.name,
          name_am = excluded.name_am,
          name_om = excluded.name_om,
          tier = excluded.tier,
          tier_am = excluded.tier_am,
          image_url = excluded.image_url,
          website_url = excluded.website_url,
          description = excluded.description,
          description_am = excluded.description_am,
          active = excluded.active,
          display_order = excluded.display_order,
          updated_at = excluded.updated_at`
      );

      const statements = validList.map((r) =>
        stmt.bind(
          r.id,
          r.name,
          r.name_am,
          r.name_om,
          r.tier,
          r.tier_am,
          r.image_url,
          r.website_url,
          r.description,
          r.description_am,
          r.active,
          r.display_order,
          timestamp,
          timestamp
        )
      );

      await executeBatch(db, statements);

      return jsonResponse({ success: true, restored: validList.length }, 200, headers);
    }

    const validated = validateSponsorPayload(body);
    if (!validated.ok) {
      return errorResponse(validated.error, 400, headers);
    }
    const r = validated.record;

    await db
      .prepare(
        `INSERT INTO sponsors (
          id, name, name_am, name_om, tier, tier_am, image_url, website_url,
          description, description_am, active, display_order, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          name = excluded.name,
          name_am = excluded.name_am,
          name_om = excluded.name_om,
          tier = excluded.tier,
          tier_am = excluded.tier_am,
          image_url = excluded.image_url,
          website_url = excluded.website_url,
          description = excluded.description,
          description_am = excluded.description_am,
          active = excluded.active,
          display_order = excluded.display_order,
          updated_at = excluded.updated_at`
      )
      .bind(
        r.id,
        r.name,
        r.name_am,
        r.name_om,
        r.tier,
        r.tier_am,
        r.image_url,
        r.website_url,
        r.description,
        r.description_am,
        r.active,
        r.display_order,
        timestamp,
        timestamp
      )
      .run();

    const saved = await db
      .prepare(
        `SELECT id, name, name_am, name_om, tier, tier_am, image_url, website_url,
                description, description_am, active, display_order, created_at, updated_at
         FROM sponsors WHERE id = ? LIMIT 1`
      )
      .bind(r.id)
      .first<SponsorRow>();

    return jsonResponse(
      { success: true, sponsor: saved ? mapSponsorRow(saved) : null },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save sponsor to D1.';
    return errorResponse(message, 500, headers);
  }
}
