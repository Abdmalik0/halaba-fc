import {
  D1Database,
  PagesContext,
  cleanString,
  detectTableSchema,
  ensureDb,
  errorResponse,
  fromDbBool,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  isValidId,
  jsonResponse,
  normalizeLocalizedText,
  nowIso,
  parseRequestJson,
  safeJsonParse,
  toDbBool,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';

const CANDIDATE_TABLES = ['products', 'shop_products', 'shop_items', 'merchandise'] as const;
const VALID_CATEGORIES = new Set(['JERSEY', 'KIT', 'ACCESSORY']);

export interface ProductSchema {
  tableName: string;
  columns: Set<string>;
}

export async function resolveProductSchema(db: D1Database): Promise<ProductSchema | null> {
  const detected = await detectTableSchema(db, 'products_schema', CANDIDATE_TABLES);
  if (!detected.tableName || detected.columns.length === 0) return null;
  return {
    tableName: detected.tableName,
    columns: new Set(detected.columns),
  };
}

export function mapProductRow(row: Record<string, unknown>) {
  const nameObj = normalizeLocalizedText(row.name_json ?? row.name, '');
  if (!row.name_json && typeof row.name_am === 'string' && row.name_am) {
    nameObj.am = row.name_am;
  }
  if (!row.name_json && typeof row.name_om === 'string' && row.name_om) {
    nameObj.om = row.name_om;
  }

  const descObj = normalizeLocalizedText(row.description_json ?? row.description, nameObj.en);
  if (!row.description_json && typeof row.description_am === 'string' && row.description_am) {
    descObj.am = row.description_am;
  }
  if (!row.description_json && typeof row.description_om === 'string' && row.description_om) {
    descObj.om = row.description_om;
  }

  const sizesParsed = safeJsonParse<unknown>(
    row.available_sizes_json ?? row.available_sizes ?? row.availableSizes,
    ['S', 'M', 'L', 'XL']
  );
  const availableSizes = Array.isArray(sizesParsed)
    ? sizesParsed.map((s) => String(s)).filter(Boolean)
    : ['S', 'M', 'L', 'XL'];

  const rawCategory = typeof row.category === 'string' ? row.category.trim().toUpperCase() : 'JERSEY';
  const category = VALID_CATEGORIES.has(rawCategory) ? rawCategory : 'JERSEY';

  return {
    id: String(row.id || ''),
    name: nameObj,
    description: descObj,
    price: typeof row.price === 'number' ? row.price : Number(row.price) || 0,
    imageUrl: String(row.image_url ?? row.imageUrl ?? row.image ?? ''),
    availableSizes: availableSizes.length > 0 ? availableSizes : ['S', 'M', 'L', 'XL'],
    category,
    inStock: fromDbBool(row.in_stock ?? row.inStock, true),
    featured: fromDbBool(row.featured ?? row.is_featured ?? row.isFeatured, false),
  };
}

export async function upsertProductRow(
  db: D1Database,
  schema: ProductSchema,
  input: Record<string, unknown>,
  timestamp: string
) {
  const id =
    typeof input.id === 'string' && input.id.trim()
      ? input.id.trim()
      : `shop-${Date.now()}`;
  if (!isValidId(id)) {
    throw new Error('Invalid product ID.');
  }

  const nameObj = normalizeLocalizedText(input.name, '');
  if (!nameObj.en && !nameObj.am && !nameObj.om) {
    throw new Error('Product name is required.');
  }
  const descObj = normalizeLocalizedText(input.description, nameObj.en);
  const price = Number(input.price);
  if (!Number.isFinite(price) || price < 0) {
    throw new Error('Product price must be a non-negative number.');
  }

  const imageUrl = cleanString(input.imageUrl, 900000) || '';
  const availableSizes = Array.isArray(input.availableSizes)
    ? input.availableSizes.map((s) => String(s).trim()).filter(Boolean)
    : ['S', 'M', 'L', 'XL'];
  const rawCategory = typeof input.category === 'string' ? input.category.trim().toUpperCase() : 'JERSEY';
  const category = VALID_CATEGORIES.has(rawCategory) ? rawCategory : 'JERSEY';
  const inStock = input.inStock !== undefined ? toDbBool(input.inStock) : 1;
  const featured = input.featured !== undefined ? toDbBool(input.featured) : 0;

  const valueByColumn: Record<string, unknown> = {
    id,
    name_json: JSON.stringify(nameObj),
    name: schema.columns.has('name_json') ? nameObj.en : JSON.stringify(nameObj),
    name_am: nameObj.am,
    name_om: nameObj.om,
    description_json: JSON.stringify(descObj),
    description: schema.columns.has('description_json') ? descObj.en : JSON.stringify(descObj),
    description_am: descObj.am,
    description_om: descObj.om,
    price,
    image_url: imageUrl,
    imageUrl: imageUrl,
    image: imageUrl,
    available_sizes_json: JSON.stringify(availableSizes),
    available_sizes: JSON.stringify(availableSizes),
    availableSizes: JSON.stringify(availableSizes),
    category,
    in_stock: inStock,
    inStock: inStock,
    featured,
    is_featured: featured,
    isFeatured: featured,
    created_at: timestamp,
    updated_at: timestamp,
  };

  const colsToWrite = Array.from(schema.columns).filter(
    (col) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(col) && Object.prototype.hasOwnProperty.call(valueByColumn, col)
  );

  const existing = await db
    .prepare(`SELECT "id" FROM "${schema.tableName}" WHERE "id" = ? LIMIT 1`)
    .bind(id)
    .first();

  if (existing) {
    const updateCols = colsToWrite.filter((c) => c !== 'id' && c !== 'created_at');
    if (updateCols.length > 0) {
      const setClause = updateCols.map((c) => `"${c}" = ?`).join(', ');
      const values = updateCols.map((c) => valueByColumn[c]);
      await db
        .prepare(`UPDATE "${schema.tableName}" SET ${setClause} WHERE "id" = ?`)
        .bind(...values, id)
        .run();
    }
  } else {
    const colList = colsToWrite.map((c) => `"${c}"`).join(', ');
    const placeholders = colsToWrite.map(() => '?').join(', ');
    const values = colsToWrite.map((c) => valueByColumn[c]);
    await db
      .prepare(`INSERT INTO "${schema.tableName}" (${colList}) VALUES (${placeholders})`)
      .bind(...values)
      .run();
  }

  return id;
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
    const schema = await resolveProductSchema(db);
    if (!schema) {
      return jsonResponse(
        {
          success: true,
          configured: false,
          source: 'd1-table-not-configured',
          count: 0,
          products: [],
        },
        200,
        getPublicCorsHeaders('public, max-age=30')
      );
    }

    const res = await db
      .prepare(`SELECT * FROM "${schema.tableName}"`)
      .all<Record<string, unknown>>();

    const products = (res.results || []).map(mapProductRow);
    products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return jsonResponse(
      {
        success: true,
        configured: true,
        source: 'cloudflare-d1',
        count: products.length,
        products,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load products from D1.';
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

    const body = parsed.data;
    const timestamp = nowIso();

    if (body.action === 'reset' && Array.isArray(body.products)) {
      const list = body.products.slice(0, 100);
      let count = 0;
      for (const item of list) {
        if (!item || typeof item !== 'object') continue;
        await upsertProductRow(db, schema, item as Record<string, unknown>, timestamp);
        count++;
      }
      return jsonResponse({ success: true, configured: true, restored: count }, 200, headers);
    }

    const savedId = await upsertProductRow(db, schema, body, timestamp);
    const saved = await db
      .prepare(`SELECT * FROM "${schema.tableName}" WHERE "id" = ? LIMIT 1`)
      .bind(savedId)
      .first<Record<string, unknown>>();

    return jsonResponse(
      {
        success: true,
        configured: true,
        product: saved ? mapProductRow(saved) : null,
      },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save product to D1.';
    return errorResponse(message, 400, headers);
  }
}
