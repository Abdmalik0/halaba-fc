import {
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
  executeBatch,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  isValidId,
  jsonResponse,
  nowIso,
  parseRequestJson,
  safeJsonParse,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';

export interface MatchRow {
  id: string;
  competition: string | null;
  competition_name: string | null;
  match_date: string | null;
  kickoff_time: string | null;
  venue: string | null;
  home_team_json: string | null;
  away_team_json: string | null;
  status: string | null;
  score_json: string | null;
  halftime_score_json: string | null;
  round: string | null;
  attendance: string | null;
  referee: string | null;
  live_minute: number | null;
  live_period: string | null;
  live_events_json: string | null;
  scorers_json: string | null;
  summary: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const VALID_STATUSES = new Set(['UPCOMING', 'LIVE', 'FINISHED', 'POSTPONED']);

export function mapMatchRow(row: MatchRow) {
  const homeTeam = safeJsonParse(row.home_team_json, {
    id: 'halaba',
    name: 'Halaba Ketema',
    isHalaba: true,
  });
  const awayTeam = safeJsonParse(row.away_team_json, {
    id: 'away',
    name: 'Opponent',
    isHalaba: false,
  });
  const score = safeJsonParse<{ home: number; away: number } | undefined>(row.score_json, undefined);
  const halftimeScore = safeJsonParse<{ home: number; away: number } | undefined>(
    row.halftime_score_json,
    undefined
  );
  const liveEvents = safeJsonParse<unknown[] | undefined>(row.live_events_json, undefined);
  const scorers = safeJsonParse<unknown[] | undefined>(row.scorers_json, undefined);

  return {
    id: row.id,
    competition: row.competition || 'ETHIOPIAN_PREMIER_LEAGUE',
    competitionName: row.competition_name || 'Ethiopian Premier League',
    date: row.match_date || '',
    kickoffTime: row.kickoff_time || '15:00',
    venue: row.venue || 'Hawassa University Stadium',
    homeTeam,
    awayTeam,
    status: row.status || 'UPCOMING',
    ...(score ? { score } : {}),
    ...(halftimeScore ? { halftimeScore } : {}),
    ...(row.round ? { round: row.round } : {}),
    ...(row.attendance ? { attendance: row.attendance } : {}),
    ...(row.referee ? { referee: row.referee } : {}),
    ...(typeof row.live_minute === 'number' ? { liveMinute: row.live_minute } : {}),
    ...(row.live_period ? { livePeriod: row.live_period } : {}),
    ...(Array.isArray(liveEvents) ? { liveEvents } : {}),
    ...(Array.isArray(scorers) ? { scorers } : {}),
    ...(row.summary ? { summary: row.summary } : {}),
  };
}

function validateMatchPayload(input: Record<string, unknown>, requireId = false) {
  const id = typeof input.id === 'string' && input.id.trim()
    ? input.id.trim()
    : `match-${Date.now()}`;

  if (requireId && !isValidId(id)) {
    return { ok: false as const, error: 'Invalid match ID format.' };
  }
  if (!isValidId(id)) {
    return { ok: false as const, error: 'Invalid match ID format.' };
  }

  const date = cleanString(input.date, 32);
  if (!date) {
    return { ok: false as const, error: 'Match date is required.' };
  }

  if (!input.homeTeam || typeof input.homeTeam !== 'object' || Array.isArray(input.homeTeam)) {
    return { ok: false as const, error: 'homeTeam object is required.' };
  }
  if (!input.awayTeam || typeof input.awayTeam !== 'object' || Array.isArray(input.awayTeam)) {
    return { ok: false as const, error: 'awayTeam object is required.' };
  }

  const statusRaw = typeof input.status === 'string' ? input.status.trim().toUpperCase() : 'UPCOMING';
  const status = VALID_STATUSES.has(statusRaw) ? statusRaw : 'UPCOMING';

  const score =
    input.score && typeof input.score === 'object' && !Array.isArray(input.score)
      ? JSON.stringify(input.score)
      : null;
  const halftimeScore =
    input.halftimeScore && typeof input.halftimeScore === 'object' && !Array.isArray(input.halftimeScore)
      ? JSON.stringify(input.halftimeScore)
      : null;
  const liveEvents = Array.isArray(input.liveEvents) ? JSON.stringify(input.liveEvents) : null;
  const scorers = Array.isArray(input.scorers) ? JSON.stringify(input.scorers) : null;

  return {
    ok: true as const,
    record: {
      id,
      competition: cleanString(input.competition, 128) || 'ETHIOPIAN_PREMIER_LEAGUE',
      competition_name: cleanString(input.competitionName, 256) || 'Ethiopian Premier League',
      match_date: date,
      kickoff_time: cleanString(input.kickoffTime, 32) || '15:00',
      venue: cleanString(input.venue, 256) || 'Halaba Stadium, Halaba Kulito',
      home_team_json: JSON.stringify(input.homeTeam),
      away_team_json: JSON.stringify(input.awayTeam),
      status,
      score_json: score,
      halftime_score_json: halftimeScore,
      round: cleanString(input.round, 128) || null,
      attendance: cleanString(input.attendance, 64) || null,
      referee: cleanString(input.referee, 128) || null,
      live_minute:
        typeof input.liveMinute === 'number' && Number.isFinite(input.liveMinute)
          ? Math.max(0, Math.min(150, Math.trunc(input.liveMinute)))
          : null,
      live_period: cleanString(input.livePeriod, 16) || null,
      live_events_json: liveEvents,
      scorers_json: scorers,
      summary: cleanString(input.summary, 4000) || null,
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
        `SELECT id, competition, competition_name, match_date, kickoff_time, venue,
                home_team_json, away_team_json, status, score_json, halftime_score_json,
                round, attendance, referee, live_minute, live_period,
                live_events_json, scorers_json, summary, created_at, updated_at
         FROM matches
         ORDER BY match_date ASC, kickoff_time ASC`
      )
      .all<MatchRow>();

    const matches = (res.results || []).map(mapMatchRow);

    return jsonResponse(
      {
        success: true,
        source: 'cloudflare-d1',
        count: matches.length,
        matches,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load matches from D1.';
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

  const parsedBody = await parseRequestJson<Record<string, unknown>>(context.request);
  if (!parsedBody.ok) {
    return errorResponse(parsedBody.error, 400, headers);
  }

  const body = parsedBody.data;
  const timestamp = nowIso();

  try {
    // Support batch synchronization of SportsDB fixtures by authenticated admins
    if (body.action === 'bulkSync' && Array.isArray(body.matches)) {
      const items = body.matches.slice(0, 100);
      const validRecords = [];
      for (const item of items) {
        if (!item || typeof item !== 'object') continue;
        const validated = validateMatchPayload(item as Record<string, unknown>, true);
        if (!validated.ok) {
          return errorResponse(validated.error, 400, headers);
        }
        validRecords.push(validated.record);
      }

      if (validRecords.length === 0) {
        return jsonResponse({ success: true, synced: 0, matches: [] }, 200, headers);
      }

      const stmt = db.prepare(
        `INSERT INTO matches (
          id, competition, competition_name, match_date, kickoff_time, venue,
          home_team_json, away_team_json, status, score_json, halftime_score_json,
          round, attendance, referee, live_minute, live_period,
          live_events_json, scorers_json, summary, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          competition = excluded.competition,
          competition_name = excluded.competition_name,
          match_date = excluded.match_date,
          kickoff_time = excluded.kickoff_time,
          venue = excluded.venue,
          home_team_json = excluded.home_team_json,
          away_team_json = excluded.away_team_json,
          status = excluded.status,
          score_json = COALESCE(excluded.score_json, matches.score_json),
          halftime_score_json = COALESCE(excluded.halftime_score_json, matches.halftime_score_json),
          round = COALESCE(excluded.round, matches.round),
          attendance = COALESCE(excluded.attendance, matches.attendance),
          referee = COALESCE(excluded.referee, matches.referee),
          live_minute = COALESCE(excluded.live_minute, matches.live_minute),
          live_period = COALESCE(excluded.live_period, matches.live_period),
          live_events_json = COALESCE(excluded.live_events_json, matches.live_events_json),
          scorers_json = COALESCE(excluded.scorers_json, matches.scorers_json),
          summary = COALESCE(excluded.summary, matches.summary),
          updated_at = excluded.updated_at`
      );

      const statements = validRecords.map((r) =>
        stmt.bind(
          r.id,
          r.competition,
          r.competition_name,
          r.match_date,
          r.kickoff_time,
          r.venue,
          r.home_team_json,
          r.away_team_json,
          r.status,
          r.score_json,
          r.halftime_score_json,
          r.round,
          r.attendance,
          r.referee,
          r.live_minute,
          r.live_period,
          r.live_events_json,
          r.scorers_json,
          r.summary,
          timestamp,
          timestamp
        )
      );

      await executeBatch(db, statements);

      return jsonResponse(
        {
          success: true,
          synced: validRecords.length,
        },
        200,
        headers
      );
    }

    const validated = validateMatchPayload(body, false);
    if (!validated.ok) {
      return errorResponse(validated.error, 400, headers);
    }
    const r = validated.record;

    await db
      .prepare(
        `INSERT INTO matches (
          id, competition, competition_name, match_date, kickoff_time, venue,
          home_team_json, away_team_json, status, score_json, halftime_score_json,
          round, attendance, referee, live_minute, live_period,
          live_events_json, scorers_json, summary, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          competition = excluded.competition,
          competition_name = excluded.competition_name,
          match_date = excluded.match_date,
          kickoff_time = excluded.kickoff_time,
          venue = excluded.venue,
          home_team_json = excluded.home_team_json,
          away_team_json = excluded.away_team_json,
          status = excluded.status,
          score_json = excluded.score_json,
          halftime_score_json = excluded.halftime_score_json,
          round = excluded.round,
          attendance = excluded.attendance,
          referee = excluded.referee,
          live_minute = excluded.live_minute,
          live_period = excluded.live_period,
          live_events_json = excluded.live_events_json,
          scorers_json = excluded.scorers_json,
          summary = excluded.summary,
          updated_at = excluded.updated_at`
      )
      .bind(
        r.id,
        r.competition,
        r.competition_name,
        r.match_date,
        r.kickoff_time,
        r.venue,
        r.home_team_json,
        r.away_team_json,
        r.status,
        r.score_json,
        r.halftime_score_json,
        r.round,
        r.attendance,
        r.referee,
        r.live_minute,
        r.live_period,
        r.live_events_json,
        r.scorers_json,
        r.summary,
        timestamp,
        timestamp
      )
      .run();

    const saved = await db
      .prepare(
        `SELECT id, competition, competition_name, match_date, kickoff_time, venue,
                home_team_json, away_team_json, status, score_json, halftime_score_json,
                round, attendance, referee, live_minute, live_period,
                live_events_json, scorers_json, summary, created_at, updated_at
         FROM matches WHERE id = ? LIMIT 1`
      )
      .bind(r.id)
      .first<MatchRow>();

    return jsonResponse(
      {
        success: true,
        match: saved ? mapMatchRow(saved) : null,
      },
      201,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save match to D1.';
    return errorResponse(message, 500, headers);
  }
}
