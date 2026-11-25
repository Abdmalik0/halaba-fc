import {
  PagesContext,
  cleanString,
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
  toDbBool,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';

export interface NewsArticleRow {
  id: string;
  title_json: string | null;
  summary_json: string | null;
  content_json: string | null;
  category: string | null;
  article_date: string | null;
  author: string | null;
  image_url: string | null;
  is_featured: number | boolean | string | null;
  read_time: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const VALID_CATEGORIES = new Set([
  'CLUB_NEWS',
  'MATCH_REPORTS',
  'TRANSFERS',
  'INTERVIEWS',
  'ACADEMY',
  'COMMUNITY',
]);

export function mapNewsRow(row: NewsArticleRow) {
  const title = normalizeLocalizedText(row.title_json, '');
  const summary = normalizeLocalizedText(row.summary_json, title.en);
  const content = normalizeLocalizedText(row.content_json, summary.en);

  return {
    id: row.id,
    title,
    summary,
    content,
    category: row.category || 'CLUB_NEWS',
    date: row.article_date || (row.created_at ? row.created_at.slice(0, 10) : new Date().toISOString().slice(0, 10)),
    author: row.author || 'Club Administration',
    imageUrl: row.image_url || '',
    isFeatured:
      row.id === 'news-1793126013273' ||
      row.id === 'sxRTmExguBl4NTz4RYjR' ||
      fromDbBool(row.is_featured, false),
    readTime: row.read_time || '3 min read',
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
    const url = new URL(context.request.url);
    const limitParam = parseInt(url.searchParams.get('limit') || '50', 10);
    const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(100, limitParam)) : 50;

    const res = await db
      .prepare(
        `SELECT id, title_json, summary_json, content_json, category, article_date,
                author, image_url, is_featured, read_time, created_at, updated_at
         FROM news_articles
         WHERE id != 'n-hossana-summit-chase'
         ORDER BY article_date DESC, created_at DESC
         LIMIT ?`
      )
      .bind(limit)
      .all<NewsArticleRow>();

    const articles = (res.results || []).map(mapNewsRow);

    return jsonResponse(
      {
        success: true,
        source: 'cloudflare-d1',
        count: articles.length,
        articles,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load news articles from D1.';
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
    : `news-${Date.now()}`;
  if (!isValidId(id)) {
    return errorResponse('Invalid article ID.', 400, headers);
  }

  const title = normalizeLocalizedText(body.title, '');
  if (!title.en && !title.am && !title.om) {
    return errorResponse('Article title is required.', 400, headers);
  }
  const summary = normalizeLocalizedText(body.summary, title.en);
  const content = normalizeLocalizedText(body.content, summary.en || title.en);

  const rawCategory = typeof body.category === 'string' ? body.category.trim().toUpperCase() : 'CLUB_NEWS';
  const category = VALID_CATEGORIES.has(rawCategory) ? rawCategory : 'CLUB_NEWS';
  const articleDate = cleanString(body.date, 32) || new Date().toISOString().slice(0, 10);
  const author = cleanString(body.author, 128) || 'Club Administration';
  const imageUrl = cleanString(body.imageUrl, 900000) || '';
  const isFeatured = toDbBool(body.isFeatured);
  const readTime = cleanString(body.readTime, 64) || '3 min read';
  const timestamp = nowIso();

  try {
    await db
      .prepare(
        `INSERT INTO news_articles (
          id, title_json, summary_json, content_json, category, article_date,
          author, image_url, is_featured, read_time, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          title_json = excluded.title_json,
          summary_json = excluded.summary_json,
          content_json = excluded.content_json,
          category = excluded.category,
          article_date = excluded.article_date,
          author = excluded.author,
          image_url = excluded.image_url,
          is_featured = excluded.is_featured,
          read_time = excluded.read_time,
          updated_at = excluded.updated_at`
      )
      .bind(
        id,
        JSON.stringify(title),
        JSON.stringify(summary),
        JSON.stringify(content),
        category,
        articleDate,
        author,
        imageUrl,
        isFeatured,
        readTime,
        timestamp,
        timestamp
      )
      .run();

    const saved = await db
      .prepare(
        `SELECT id, title_json, summary_json, content_json, category, article_date,
                author, image_url, is_featured, read_time, created_at, updated_at
         FROM news_articles WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<NewsArticleRow>();

    return jsonResponse(
      {
        success: true,
        article: saved ? mapNewsRow(saved) : null,
      },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save news article to D1.';
    return errorResponse(message, 500, headers);
  }
}
