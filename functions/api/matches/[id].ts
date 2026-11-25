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
import { MatchRow, mapMatchRow } from './index';

const VALID_STATUSES = new Set(['UPCOMING', 'LIVE', 'FINISHED', 'POSTPONED']);

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid match ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const row = await db
      .prepare(
        `SELECT id, competition, competition_name, match_date, kickoff_time, venue,
                home_team_json, away_team_json, status, score_json, halftime_score_json,
                round, attendance, referee, live_minute, live_period,
                live_events_json, scorers_json, summary, created_at, updated_at
         FROM matches WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<MatchRow>();

    if (!row) {
      return errorResponse('Match not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse({ success: true, match: mapMatchRow(row) }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch match.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid match ID.', 400, headers);
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
        `SELECT id, competition, competition_name, match_date, kickoff_time, venue,
                home_team_json, away_team_json, status, score_json, halftime_score_json,
                round, attendance, referee, live_minute, live_period,
                live_events_json, scorers_json, summary, created_at, updated_at
         FROM matches WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<MatchRow>();

    if (!existing) {
      return errorResponse('Match not found.', 404, headers);
    }

    const statusRaw =
      typeof updates.status === 'string' ? updates.status.trim().toUpperCase() : existing.status;
    const status = statusRaw && VALID_STATUSES.has(statusRaw) ? statusRaw : existing.status || 'UPCOMING';

    const competition =
      updates.competition !== undefined
        ? cleanString(updates.competition, 128) || existing.competition
        : existing.competition;
    const competitionName =
      updates.competitionName !== undefined
        ? cleanString(updates.competitionName, 256) || existing.competition_name
        : existing.competition_name;
    const matchDate =
      updates.date !== undefined
        ? cleanString(updates.date, 32) || existing.match_date
        : existing.match_date;
    const kickoffTime =
      updates.kickoffTime !== undefined
        ? cleanString(updates.kickoffTime, 32) || existing.kickoff_time
        : existing.kickoff_time;
    const venue =
      updates.venue !== undefined
        ? cleanString(updates.venue, 256) || existing.venue
        : existing.venue;

    const homeTeamJson =
      updates.homeTeam && typeof updates.homeTeam === 'object' && !Array.isArray(updates.homeTeam)
        ? JSON.stringify(updates.homeTeam)
        : existing.home_team_json;
    const awayTeamJson =
      updates.awayTeam && typeof updates.awayTeam === 'object' && !Array.isArray(updates.awayTeam)
        ? JSON.stringify(updates.awayTeam)
        : existing.away_team_json;
    const scoreJson =
      updates.score === null
        ? null
        : updates.score && typeof updates.score === 'object' && !Array.isArray(updates.score)
          ? JSON.stringify(updates.score)
          : existing.score_json;
    const halftimeScoreJson =
      updates.halftimeScore === null
        ? null
        : updates.halftimeScore && typeof updates.halftimeScore === 'object' && !Array.isArray(updates.halftimeScore)
          ? JSON.stringify(updates.halftimeScore)
          : existing.halftime_score_json;
    const round =
      updates.round !== undefined ? cleanString(updates.round, 128) || null : existing.round;
    const attendance =
      updates.attendance !== undefined ? cleanString(updates.attendance, 64) || null : existing.attendance;
    const referee =
      updates.referee !== undefined ? cleanString(updates.referee, 128) || null : existing.referee;
    const liveMinute =
      updates.liveMinute === null
        ? null
        : typeof updates.liveMinute === 'number' && Number.isFinite(updates.liveMinute)
          ? Math.max(0, Math.min(150, Math.trunc(updates.liveMinute)))
          : existing.live_minute;
    const livePeriod =
      updates.livePeriod !== undefined ? cleanString(updates.livePeriod, 16) || null : existing.live_period;
    const liveEventsJson =
      updates.liveEvents === null
        ? null
        : Array.isArray(updates.liveEvents)
          ? JSON.stringify(updates.liveEvents)
          : existing.live_events_json;
    const scorersJson =
      updates.scorers === null
        ? null
        : Array.isArray(updates.scorers)
          ? JSON.stringify(updates.scorers)
          : existing.scorers_json;
    const summary =
      updates.summary !== undefined ? cleanString(updates.summary, 4000) || null : existing.summary;
    const updatedAt = nowIso();

    await db
      .prepare(
        `UPDATE matches SET
          competition = ?,
          competition_name = ?,
          match_date = ?,
          kickoff_time = ?,
          venue = ?,
          home_team_json = ?,
          away_team_json = ?,
          status = ?,
          score_json = ?,
          halftime_score_json = ?,
          round = ?,
          attendance = ?,
          referee = ?,
          live_minute = ?,
          live_period = ?,
          live_events_json = ?,
          scorers_json = ?,
          summary = ?,
          updated_at = ?
         WHERE id = ?`
      )
      .bind(
        competition,
        competitionName,
        matchDate,
        kickoffTime,
        venue,
        homeTeamJson,
        awayTeamJson,
        status,
        scoreJson,
        halftimeScoreJson,
        round,
        attendance,
        referee,
        liveMinute,
        livePeriod,
        liveEventsJson,
        scorersJson,
        summary,
        updatedAt,
        id
      )
      .run();

    const updatedRow = await db
      .prepare(
        `SELECT id, competition, competition_name, match_date, kickoff_time, venue,
                home_team_json, away_team_json, status, score_json, halftime_score_json,
                round, attendance, referee, live_minute, live_period,
                live_events_json, scorers_json, summary, created_at, updated_at
         FROM matches WHERE id = ? LIMIT 1`
      )
      .bind(id)
      .first<MatchRow>();

    return jsonResponse(
      { success: true, match: updatedRow ? mapMatchRow(updatedRow) : null },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update match.';
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
    return errorResponse('Invalid match ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    await db.prepare('DELETE FROM matches WHERE id = ?').bind(id).run();
    return jsonResponse({ success: true, deletedId: id }, 200, headers);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete match.';
    return errorResponse(message, 500, headers);
  }
}
