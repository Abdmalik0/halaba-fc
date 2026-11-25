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
  normalizeLocalizedText,
  nowIso,
  parseRequestJson,
  toDbBool,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';
import { NewsArticleRow, mapNewsRow } from './index';

const VALID_CATEGORIES = new Set([
  'CLUB_NEWS',
  'MATCH_REPORTS',
  'TRANSFERS',
  'INTERVIEWS',
  'ACADEMY',
  'COMMUNITY',
]);

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid article ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, title_json, summary_json, content_json, category, article_date,
                author, image_url, is_featured, read_time, created_at, updated_at
         FROM news_articles WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<NewsArticleRow>();

    if (!row) {
      return errorResponse('News article not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, article: mapNewsRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load news article.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid article ID.', 400, headers);
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
        `SELECT id, title_json, summary_json, content_json, category, article_date,
                author, image_url, is_featured, read_time, created_at, updated_at
         FROM news_articles WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<NewsArticleRow>();

    if (!existing) {
      return errorResponse('News article not found.', 404, headers);
    }

    const titleJson =
      updates.title !== undefined
        ? JSON.stringify(normalizeLocalizedText(updates.title, ''))
        : existing.title_json;
    const summaryJson =
      updates.summary !== undefined
        ? JSON.stringify(normalizeLocalizedText(updates.summary, ''))
        : existing.summary_json;
    const contentJson =
      updates.content !== undefined
        ? JSON.stringify(normalizeLocalizedText(updates.content, ''))
        : existing.content_json;

    const rawCategory =
      typeof updates.category === 'string' ? updates.category.trim().toUpperCase() : existing.category;
    const category =
      rawCategory && VALID_CATEGORIES.has(rawCategory) ? rawCategory : existing.category || 'CLUB_NEWS';

    const articleDate =
      updates.date !== undefined
        ? cleanString(updates.date, 32) || existing.article_date
        : existing.article_date;
    const author =
      updates.author !== undefined
        ? cleanString(updates.author, 128) || existing.author
        : existing.author;
    const imageUrl =
      updates.imageUrl !== undefined
        ? cleanString(updates.imageUrl, 900000) ?? existing.image_url
        : existing.image_url;
    const isFeatured =
      updates.isFeatured !== undefined ? toDbBool(updates.isFeatured) : existing.is_featured;
    const readTime =
      updates.readTime !== undefined
        ? cleanString(updates.readTime, 64) || existing.read_time
        : existing.read_time;
    const updatedAt = nowIso();

    await db
      .prepare(
        `UPDATE news_articles SET
          title_json = ?,
          summary_json = ?,
          content_json = ?,
          category = ?,
          article_date = ?,
          author = ?,
          image_url = ?,
          is_featured = ?,
          read_time = ?,
          updated_at = ?
         WHERE id = ?`
      )
      .bind(
        titleJson,
        summaryJson,
        contentJson,
        category,
        articleDate,
        author,
        imageUrl,
        isFeatured,
        readTime,
        updatedAt,
        id
      )
      .run();

    const updatedRow = await db
      .prepare(
        `SELECT id, title_json, summary_json, content_json, category, article_date,
                author, image_url, is_featured, read_time, created_at, updated_at
         FROM news_articles WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<NewsArticleRow>();

    return jsonResponse(
      { success: true, article: updatedRow ? mapNewsRow(updatedRow) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update news article.';
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
    return errorResponse('Invalid article ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    await db.prepare('DELETE FROM news_articles WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete news article.';
    return errorResponse(message, 500, headers);
  }
}
