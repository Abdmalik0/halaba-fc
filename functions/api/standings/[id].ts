import {
  D1PreparedStatement,
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
  executeAtomicBatch,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  isValidId,
  jsonResponse,
  parseRequestJson,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';
import {
  buildGuardedHistoryStatement,
  buildGuardedSetModeStatement,
  getStandingsSettings,
  makeHistoryId,
  mapStandingRow,
  nextMonotonicTimestamp,
  normalizeCompetition,
  normalizeSeason,
  normalizeStandingInput,
  prepareGuardedStandingUpsertStatement,
  readScopeGuardSnapshot,
  readStandingsForScope,
  readStandingsHistory,
  sortAndRankStandings,
} from './index';

export async function onRequestOptions(context: PagesContext<{ id: string }>) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext<{ id: string }>) {
  const headers = getPublicCorsHeaders();
  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid team ID.', 400, getPublicCorsHeaders('no-store'));
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const url = new URL(context.request.url);
    const competition = normalizeCompetition(url.searchParams.get('competition'));
    const season = normalizeSeason(url.searchParams.get('season'));

    const row = await db
      .prepare(
        `SELECT id, competition, season, position, team_id, team_name,
                played, won, drawn, lost, goals_for, goals_against, goal_difference,
                points, form_json, is_halaba, badge_url, updated_at
         FROM standings
         WHERE competition = ? AND season = ? AND (team_id = ? OR id = ?)
         LIMIT 1`
      )
      .bind(competition, season, id, id)
      .first<Record<string, unknown>>();

    if (!row) {
      return errorResponse('Team standing not found.', 404, getPublicCorsHeaders('no-store'));
    }

    return jsonResponse(
      {
        success: true,
        configured: true,
        competition,
        season,
        standing: mapStandingRow(row),
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch team standing.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleUpdate(context: PagesContext<{ id: string }>) {
  const headers = getAuthenticatedCorsHeaders(context.request, context.env);
  const authResult = await requireAdminAuth(context.request, context.env);
  if (!authResult.ok) return authResult.response;

  const id = context.params?.id;
  if (!isValidId(id)) {
    return errorResponse('Invalid team ID.', 400, headers);
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
    const body = parsed.data;
    const url = new URL(context.request.url);
    const competition = normalizeCompetition(body.competition ?? url.searchParams.get('competition'));
    const season = normalizeSeason(body.season ?? url.searchParams.get('season'));
    const changedBy = authResult.user.email || authResult.user.uid || 'admin';

    // Read consistent scope guard & current standings snapshot in parallel
    const [preSnapshot, existingRows] = await Promise.all([
      readScopeGuardSnapshot(db, competition, season),
      readStandingsForScope(db, competition, season),
    ]);

    const timestamp = nextMonotonicTimestamp(
      preSnapshot.settingsUpdatedAt,
      preSnapshot.maxUpdatedAt,
      preSnapshot.latestHistoryCreatedAt
    );

    const existingTarget = existingRows.find((r) => r.teamId === id || r.id === id);
    const canonicalTeamId = existingTarget?.teamId || id;
    const mergedInput: Record<string, unknown> = {
      ...(existingTarget || {}),
      ...body,
      teamId: canonicalTeamId,
    };

    const updatedTarget = normalizeStandingInput(
      competition,
      season,
      mergedInput,
      timestamp,
      existingTarget?.id || undefined
    );

    const nextRows = sortAndRankStandings([
      ...existingRows.filter((r) => r.teamId !== canonicalTeamId),
      updatedTarget,
    ]);

    const historyId = makeHistoryId();
    const { statement: guardedHistoryStmt } = buildGuardedHistoryStatement(
      db,
      competition,
      season,
      nextRows,
      changedBy,
      cleanString(body.reason, 120) || `manual_team_edit:${canonicalTeamId}`,
      timestamp,
      preSnapshot,
      { requireAutomatic: false, historyId }
    );

    const batchStatements: D1PreparedStatement[] = [
      guardedHistoryStmt,
      ...nextRows.map(
        (row) =>
          prepareGuardedStandingUpsertStatement(
            db,
            competition,
            season,
            row as unknown as Record<string, unknown>,
            timestamp,
            historyId,
            row.id || undefined
          ).statement
      ),
    ];

    if (body.lockManual === true) {
      batchStatements.push(
        buildGuardedSetModeStatement(db, competition, season, 'manual', changedBy, timestamp, historyId)
      );
    }

    const batchResults = await executeAtomicBatch(db, batchStatements);
    if (Number(batchResults[0]?.meta?.changes ?? 0) === 0) {
      return errorResponse(
        'Standings changed concurrently while saving this team update; please reload and retry.',
        409,
        headers,
        { stale: true, competition, season }
      );
    }

    const [updatedRows, settings, history] = await Promise.all([
      readStandingsForScope(db, competition, season),
      getStandingsSettings(db, competition, season),
      readStandingsHistory(db, competition, season, 15),
    ]);

    const updatedStanding = updatedRows.find((r) => r.teamId === canonicalTeamId) || null;

    return jsonResponse(
      {
        success: true,
        configured: true,
        competition,
        season,
        updateMode: settings.updateMode,
        settings,
        standing: updatedStanding,
        standings: updatedRows,
        history,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update team standing.';
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
    return errorResponse('Invalid team ID.', 400, headers);
  }

  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, headers);
  }

  try {
    const url = new URL(context.request.url);
    const competition = normalizeCompetition(url.searchParams.get('competition'));
    const season = normalizeSeason(url.searchParams.get('season'));
    const changedBy = authResult.user.email || authResult.user.uid || 'admin';

    const [preSnapshot, existingRows] = await Promise.all([
      readScopeGuardSnapshot(db, competition, season),
      readStandingsForScope(db, competition, season),
    ]);

    const target = existingRows.find((r) => r.teamId === id || r.id === id);
    if (!target) {
      return errorResponse('Team standing not found.', 404, headers);
    }

    const timestamp = nextMonotonicTimestamp(
      preSnapshot.settingsUpdatedAt,
      preSnapshot.maxUpdatedAt,
      preSnapshot.latestHistoryCreatedAt
    );

    const remainingRows = sortAndRankStandings(
      existingRows.filter((r) => r.teamId !== target.teamId && r.id !== target.id)
    );

    const historyId = makeHistoryId();
    const { statement: guardedHistoryStmt } = buildGuardedHistoryStatement(
      db,
      competition,
      season,
      remainingRows,
      changedBy,
      `manual_team_delete:${target.teamId}`,
      timestamp,
      preSnapshot,
      { requireAutomatic: false, historyId }
    );

    const guardedDeleteStmt = db
      .prepare(
        `DELETE FROM standings
         WHERE competition = ? AND season = ? AND (team_id = ? OR id = ?)
           AND EXISTS (SELECT 1 FROM standings_history WHERE id = ?)`
      )
      .bind(competition, season, target.teamId, target.id, historyId);

    const statements: D1PreparedStatement[] = [
      guardedHistoryStmt,
      guardedDeleteStmt,
      ...remainingRows.map(
        (row) =>
          prepareGuardedStandingUpsertStatement(
            db,
            competition,
            season,
            row as unknown as Record<string, unknown>,
            timestamp,
            historyId,
            row.id || undefined
          ).statement
      ),
    ];

    const batchResults = await executeAtomicBatch(db, statements);
    if (Number(batchResults[0]?.meta?.changes ?? 0) === 0) {
      return errorResponse(
        'Standings changed concurrently while deleting this team; please reload and retry.',
        409,
        headers,
        { stale: true, competition, season }
      );
    }

    const [finalRows, settings, history] = await Promise.all([
      readStandingsForScope(db, competition, season),
      getStandingsSettings(db, competition, season),
      readStandingsHistory(db, competition, season, 15),
    ]);

    return jsonResponse(
      {
        success: true,
        configured: true,
        competition,
        season,
        updateMode: settings.updateMode,
        settings,
        deletedId: id,
        standings: finalRows,
        history,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete standing record.';
    return errorResponse(message, 500, headers);
  }
}
