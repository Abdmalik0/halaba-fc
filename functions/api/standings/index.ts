import {
  D1Database,
  D1PreparedStatement,
  PagesContext,
  cleanString,
  ensureDb,
  errorResponse,
  executeAtomicBatch,
  fromDbBool,
  getAuthenticatedCorsHeaders,
  getPublicCorsHeaders,
  handleOptionsRequest,
  isValidId,
  jsonResponse,
  parseRequestJson,
  safeJsonParse,
  toDbBool,
} from '../../../cf-lib/d1';
import { requireAdminAuth } from '../../../cf-lib/firebaseAuth';
import { fetchOfficialSportsDbStandings } from '../../../cf-lib/sportsdb';

export const DEFAULT_COMPETITION = 'ETHIOPIAN_PREMIER_LEAGUE';
export const DEFAULT_SEASON = '2026-2027';

export type StandingsUpdateMode = 'automatic' | 'manual';

export interface StandingsSettingsRecord {
  competition: string;
  season: string;
  updateMode: StandingsUpdateMode;
  updatedBy: string | null;
  updatedAt: string | null;
}

export interface StandingsHistoryEntry {
  id: string;
  competition: string;
  season: string;
  changedBy: string | null;
  changeReason: string | null;
  createdAt: string;
  teamCount: number;
}

export interface ScopeGuardSnapshot {
  updateMode: StandingsUpdateMode;
  settingsUpdatedAt: string | null;
  maxUpdatedAt: string | null;
  latestHistoryId: string | null;
  latestHistoryCreatedAt: string | null;
}

let historyIdSequence = 0;

export function makeHistoryId(): string {
  historyIdSequence = (historyIdSequence + 1) % 1_000_000;
  return `sh-${Date.now()}-${historyIdSequence.toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function nextMonotonicTimestamp(...previous: Array<string | null | undefined>): string {
  let maxMs = Date.now();
  for (const val of previous) {
    if (!val) continue;
    const parsed = Date.parse(val);
    if (Number.isFinite(parsed) && parsed >= maxMs) {
      maxMs = parsed + 1;
    }
  }
  return new Date(maxMs).toISOString();
}

export function normalizeCompetition(raw: unknown): string {
  const cleaned = cleanString(raw, 64);
  if (cleaned && /^[A-Za-z0-9_-]{2,64}$/.test(cleaned)) {
    return cleaned;
  }
  return DEFAULT_COMPETITION;
}

export function normalizeSeason(raw: unknown): string {
  const cleaned = cleanString(raw, 32);
  if (cleaned && /^[A-Za-z0-9_-]{4,32}$/.test(cleaned)) {
    return cleaned;
  }
  return DEFAULT_SEASON;
}

export function makeStandingRowId(competition: string, season: string, teamId: string): string {
  return `${competition}::${season}::${teamId}`;
}

export function mapStandingRow(row: Record<string, unknown>) {
  const teamId = String(row.team_id ?? row.id ?? '').trim();
  const teamName = String(row.team_name ?? 'Team');
  const played = Number(row.played) || 0;
  const won = Number(row.won) || 0;
  const drawn = Number(row.drawn) || 0;
  const lost = Number(row.lost) || 0;
  const goalsFor = Number(row.goals_for) || 0;
  const goalsAgainst = Number(row.goals_against) || 0;
  const goalDifference =
    row.goal_difference !== undefined && row.goal_difference !== null
      ? Number(row.goal_difference)
      : goalsFor - goalsAgainst;
  const points = Number(row.points) || 0;

  const parsedForm = safeJsonParse<unknown>(row.form_json, ['D', 'W', 'D']);
  const form = Array.isArray(parsedForm)
    ? parsedForm.filter((c): c is 'W' | 'D' | 'L' => c === 'W' || c === 'D' || c === 'L')
    : ['D', 'W', 'D'];

  const isHalaba = teamId === 'halaba' || fromDbBool(row.is_halaba, false);
  const badgeUrl = typeof row.badge_url === 'string' && row.badge_url ? row.badge_url : undefined;

  return {
    id: String(row.id || ''),
    competition: String(row.competition || DEFAULT_COMPETITION),
    season: String(row.season || DEFAULT_SEASON),
    position: Number(row.position) || 1,
    teamId,
    teamName,
    played,
    won,
    drawn,
    lost,
    goalsFor,
    goalsAgainst,
    goalDifference,
    points,
    form: form.length > 0 ? form : (['D', 'W', 'D'] as ('W' | 'D' | 'L')[]),
    isHalaba,
    ...(badgeUrl ? { badgeUrl } : {}),
    ...(row.updated_at ? { updatedAt: String(row.updated_at) } : {}),
  };
}

export type MappedStandingRow = ReturnType<typeof mapStandingRow>;

export function sortAndRankStandings<T extends {
  points: number;
  goalDifference: number;
  goalsFor: number;
  position: number;
  teamName: string;
}>(rows: T[]): T[] {
  const copy = [...rows];
  copy.sort(
    (a, b) =>
      b.points - a.points ||
      b.goalDifference - a.goalDifference ||
      b.goalsFor - a.goalsFor ||
      a.position - b.position ||
      a.teamName.localeCompare(b.teamName)
  );
  return copy.map((item, idx) => ({
    ...item,
    position: idx + 1,
  }));
}

export async function getStandingsSettings(
  db: D1Database,
  competition: string,
  season: string
): Promise<StandingsSettingsRecord> {
  const row = await db
    .prepare(
      `SELECT competition, season, update_mode, updated_by, updated_at
       FROM standings_settings
       WHERE competition = ? AND season = ?
       LIMIT 1`
    )
    .bind(competition, season)
    .first<{
      competition: string;
      season: string;
      update_mode: string;
      updated_by: string | null;
      updated_at: string | null;
    }>();

  if (!row) {
    return {
      competition,
      season,
      updateMode: 'automatic',
      updatedBy: null,
      updatedAt: null,
    };
  }

  return {
    competition: row.competition,
    season: row.season,
    updateMode: row.update_mode === 'manual' ? 'manual' : 'automatic',
    updatedBy: row.updated_by || null,
    updatedAt: row.updated_at || null,
  };
}

async function getScopeMaxUpdatedAt(
  db: D1Database,
  competition: string,
  season: string
): Promise<string | null> {
  const row = await db
    .prepare(
      `SELECT MAX(updated_at) AS max_updated_at
       FROM standings
       WHERE competition = ? AND season = ?`
    )
    .bind(competition, season)
    .first<{ max_updated_at: string | null }>();
  return row?.max_updated_at ?? null;
}

async function getLatestHistoryRef(
  db: D1Database,
  competition: string,
  season: string
): Promise<{ id: string | null; createdAt: string | null }> {
  const row = await db
    .prepare(
      `SELECT id, created_at
       FROM standings_history
       WHERE competition = ? AND season = ?
       ORDER BY created_at DESC, rowid DESC
       LIMIT 1`
    )
    .bind(competition, season)
    .first<{ id: string; created_at: string }>();
  return {
    id: row?.id ?? null,
    createdAt: row?.created_at ?? null,
  };
}

export async function readScopeGuardSnapshot(
  db: D1Database,
  competition: string,
  season: string
): Promise<ScopeGuardSnapshot> {
  const [settings, maxUpdatedAt, latestHistory] = await Promise.all([
    getStandingsSettings(db, competition, season),
    getScopeMaxUpdatedAt(db, competition, season),
    getLatestHistoryRef(db, competition, season),
  ]);
  return {
    updateMode: settings.updateMode,
    settingsUpdatedAt: settings.updatedAt,
    maxUpdatedAt,
    latestHistoryId: latestHistory.id,
    latestHistoryCreatedAt: latestHistory.createdAt,
  };
}

export function buildGuardedHistoryStatement(
  db: D1Database,
  competition: string,
  season: string,
  standingsPayload: unknown[],
  changedBy: string,
  changeReason: string,
  timestamp: string,
  guard: ScopeGuardSnapshot,
  options: { requireAutomatic?: boolean; historyId?: string } = {}
): { historyId: string; statement: D1PreparedStatement } {
  const historyId = options.historyId || makeHistoryId();
  const requireAutomatic = Boolean(options.requireAutomatic);

  if (requireAutomatic) {
    const statement = db
      .prepare(
        `INSERT INTO standings_history (
          id, competition, season, standings_json, changed_by, change_reason, created_at
        )
        SELECT ?, ?, ?, ?, ?, ?, ?
        WHERE COALESCE(
          (SELECT update_mode FROM standings_settings WHERE competition = ? AND season = ?),
          'automatic'
        ) = 'automatic'
        AND (SELECT updated_at FROM standings_settings WHERE competition = ? AND season = ?) IS ?
        AND (SELECT MAX(updated_at) FROM standings WHERE competition = ? AND season = ?) IS ?
        AND (SELECT id FROM standings_history WHERE competition = ? AND season = ? ORDER BY created_at DESC, rowid DESC LIMIT 1) IS ?`
      )
      .bind(
        historyId,
        competition,
        season,
        JSON.stringify(standingsPayload),
        changedBy,
        changeReason,
        timestamp,
        competition,
        season,
        competition,
        season,
        guard.settingsUpdatedAt,
        competition,
        season,
        guard.maxUpdatedAt,
        competition,
        season,
        guard.latestHistoryId
      );
    return { historyId, statement };
  }

  const statement = db
    .prepare(
      `INSERT INTO standings_history (
        id, competition, season, standings_json, changed_by, change_reason, created_at
      )
      SELECT ?, ?, ?, ?, ?, ?, ?
      WHERE (SELECT updated_at FROM standings_settings WHERE competition = ? AND season = ?) IS ?
        AND (SELECT MAX(updated_at) FROM standings WHERE competition = ? AND season = ?) IS ?
        AND (SELECT id FROM standings_history WHERE competition = ? AND season = ? ORDER BY created_at DESC, rowid DESC LIMIT 1) IS ?`
    )
    .bind(
      historyId,
      competition,
      season,
      JSON.stringify(standingsPayload),
      changedBy,
      changeReason,
      timestamp,
      competition,
      season,
      guard.settingsUpdatedAt,
      competition,
      season,
      guard.maxUpdatedAt,
      competition,
      season,
      guard.latestHistoryId
    );
  return { historyId, statement };
}

export function buildGuardedSetModeStatement(
  db: D1Database,
  competition: string,
  season: string,
  updateMode: StandingsUpdateMode,
  updatedBy: string,
  timestamp: string,
  guardHistoryId: string
): D1PreparedStatement {
  return db
    .prepare(
      `INSERT INTO standings_settings (competition, season, update_mode, updated_by, updated_at)
       SELECT ?, ?, ?, ?, ?
       WHERE EXISTS (SELECT 1 FROM standings_history WHERE id = ?)
       ON CONFLICT(competition, season) DO UPDATE SET
         update_mode = excluded.update_mode,
         updated_by = excluded.updated_by,
         updated_at = excluded.updated_at`
    )
    .bind(competition, season, updateMode, updatedBy, timestamp, guardHistoryId);
}

export function normalizeStandingInput(
  competition: string,
  season: string,
  input: Record<string, unknown>,
  timestamp: string,
  existingRowId?: string
): MappedStandingRow {
  const teamId = cleanString(input.teamId ?? input.team_id ?? input.id, 64);
  if (!teamId || !isValidId(teamId)) {
    throw new Error('Invalid standing teamId.');
  }

  const goalsFor = Math.max(0, Math.trunc(Number(input.goalsFor ?? input.goals_for) || 0));
  const goalsAgainst = Math.max(0, Math.trunc(Number(input.goalsAgainst ?? input.goals_against) || 0));
  const goalDifference = goalsFor - goalsAgainst;

  const rawForm = input.form ?? input.form_json;
  const parsedForm = Array.isArray(rawForm)
    ? rawForm
    : safeJsonParse<unknown>(rawForm, ['D', 'W', 'D']);
  const formArr = Array.isArray(parsedForm)
    ? parsedForm.filter((c): c is 'W' | 'D' | 'L' => c === 'W' || c === 'D' || c === 'L').slice(0, 10)
    : (['D', 'W', 'D'] as ('W' | 'D' | 'L')[]);

  const position = Math.max(1, Math.trunc(Number(input.position) || 1));
  const teamName = cleanString(input.teamName ?? input.team_name, 160) || 'Team';
  const played = Math.max(0, Math.trunc(Number(input.played) || 0));
  const won = Math.max(0, Math.trunc(Number(input.won) || 0));
  const drawn = Math.max(0, Math.trunc(Number(input.drawn) || 0));
  const lost = Math.max(0, Math.trunc(Number(input.lost) || 0));
  const points = Math.max(0, Math.trunc(Number(input.points) || 0));
  const isHalaba = toDbBool(input.isHalaba ?? input.is_halaba ?? teamId === 'halaba');
  const badgeUrl = cleanString(input.badgeUrl ?? input.badge_url, 512) || undefined;
  const rowId = existingRowId || makeStandingRowId(competition, season, teamId);

  return {
    id: rowId,
    competition,
    season,
    position,
    teamId,
    teamName,
    played,
    won,
    drawn,
    lost,
    goalsFor,
    goalsAgainst,
    goalDifference,
    points,
    form: formArr.length > 0 ? formArr : (['D', 'W', 'D'] as ('W' | 'D' | 'L')[]),
    isHalaba: Boolean(isHalaba),
    ...(badgeUrl ? { badgeUrl } : {}),
    updatedAt: timestamp,
  };
}

export function prepareGuardedStandingUpsertStatement(
  db: D1Database,
  competition: string,
  season: string,
  input: Record<string, unknown>,
  timestamp: string,
  guardHistoryId: string,
  existingRowId?: string
): { teamId: string; normalized: MappedStandingRow; statement: D1PreparedStatement } {
  const normalized = normalizeStandingInput(competition, season, input, timestamp, existingRowId);
  const statement = db
    .prepare(
      `INSERT INTO standings (
        id, competition, season, position, team_id, team_name,
        played, won, drawn, lost, goals_for, goals_against, goal_difference,
        points, form_json, is_halaba, badge_url, updated_at
      )
      SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      WHERE EXISTS (SELECT 1 FROM standings_history WHERE id = ?)
      ON CONFLICT(competition, season, team_id) DO UPDATE SET
        position = excluded.position,
        team_name = excluded.team_name,
        played = excluded.played,
        won = excluded.won,
        drawn = excluded.drawn,
        lost = excluded.lost,
        goals_for = excluded.goals_for,
        goals_against = excluded.goals_against,
        goal_difference = excluded.goal_difference,
        points = excluded.points,
        form_json = excluded.form_json,
        is_halaba = excluded.is_halaba,
        badge_url = COALESCE(excluded.badge_url, standings.badge_url),
        updated_at = excluded.updated_at`
    )
    .bind(
      normalized.id,
      competition,
      season,
      normalized.position,
      normalized.teamId,
      normalized.teamName,
      normalized.played,
      normalized.won,
      normalized.drawn,
      normalized.lost,
      normalized.goalsFor,
      normalized.goalsAgainst,
      normalized.goalDifference,
      normalized.points,
      JSON.stringify(normalized.form),
      normalized.isHalaba ? 1 : 0,
      normalized.badgeUrl || null,
      timestamp,
      guardHistoryId
    );

  return { teamId: normalized.teamId, normalized, statement };
}

export async function readStandingsForScope(
  db: D1Database,
  competition: string,
  season: string
): Promise<MappedStandingRow[]> {
  const res = await db
    .prepare(
      `SELECT id, competition, season, position, team_id, team_name,
              played, won, drawn, lost, goals_for, goals_against, goal_difference,
              points, form_json, is_halaba, badge_url, updated_at
       FROM standings
       WHERE competition = ? AND season = ?`
    )
    .bind(competition, season)
    .all<Record<string, unknown>>();

  const mapped = (res.results || [])
    .map(mapStandingRow)
    .filter((t) => t.teamId && t.teamId !== 'diredawa');

  return sortAndRankStandings(mapped);
}

export async function readStandingsHistory(
  db: D1Database,
  competition: string,
  season: string,
  limit = 15
): Promise<StandingsHistoryEntry[]> {
  const safeLimit = Math.max(1, Math.min(50, Math.trunc(limit)));
  const res = await db
    .prepare(
      `SELECT id, competition, season, standings_json, changed_by, change_reason, created_at
       FROM standings_history
       WHERE competition = ? AND season = ?
       ORDER BY created_at DESC, rowid DESC
       LIMIT ?`
    )
    .bind(competition, season, safeLimit)
    .all<{
      id: string;
      competition: string;
      season: string;
      standings_json: string;
      changed_by: string | null;
      change_reason: string | null;
      created_at: string;
    }>();

  return (res.results || []).map((row) => {
    const parsed = safeJsonParse<unknown[]>(row.standings_json, []);
    return {
      id: row.id,
      competition: row.competition,
      season: row.season,
      changedBy: row.changed_by || null,
      changeReason: row.change_reason || null,
      createdAt: row.created_at,
      teamCount: Array.isArray(parsed) ? parsed.length : 0,
    };
  });
}

export async function onRequestOptions(context: PagesContext) {
  return handleOptionsRequest(context.request, context.env, true);
}

export async function onRequestGet(context: PagesContext) {
  const headers = getPublicCorsHeaders('public, max-age=30, s-maxage=60, stale-while-revalidate=180');
  const db = ensureDb(context.env);
  if (!db) {
    return errorResponse('D1 database binding is unavailable.', 503, getPublicCorsHeaders('no-store'));
  }

  try {
    const url = new URL(context.request.url);
    const competition = normalizeCompetition(url.searchParams.get('competition'));
    const season = normalizeSeason(url.searchParams.get('season'));
    const includeHistory =
      url.searchParams.get('includeHistory') === '1' ||
      url.searchParams.get('includeHistory') === 'true' ||
      url.searchParams.get('history') === '1';

    const [standings, settings, history] = await Promise.all([
      readStandingsForScope(db, competition, season),
      getStandingsSettings(db, competition, season),
      includeHistory ? readStandingsHistory(db, competition, season, 15) : Promise.resolve(undefined),
    ]);

    return jsonResponse(
      {
        success: true,
        configured: true,
        source: 'cloudflare-d1',
        competition,
        season,
        updateMode: settings.updateMode,
        settings,
        count: standings.length,
        standings,
        ...(history ? { history } : {}),
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load standings from D1.';
    return errorResponse(message, 500, getPublicCorsHeaders('no-store'));
  }
}

async function handleBulkOrAction(context: PagesContext) {
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
  const url = new URL(context.request.url);
  const competition = normalizeCompetition(body.competition ?? url.searchParams.get('competition'));
  const season = normalizeSeason(body.season ?? url.searchParams.get('season'));
  const changedBy = authResult.user.email || authResult.user.uid || 'admin';

  try {
    const action = typeof body.action === 'string' ? body.action.trim() : '';

    // 1. Switch automatic <-> manual mode atomically without losing rows or snapshot consistency
    if (action === 'setMode') {
      const requestedMode = body.updateMode ?? body.mode;
      if (requestedMode !== 'automatic' && requestedMode !== 'manual') {
        return errorResponse("updateMode must be either 'automatic' or 'manual'.", 400, headers);
      }

      let committedStandings: MappedStandingRow[] | null = null;
      for (let attempt = 0; attempt < 3; attempt++) {
        const [preSnapshot, existingStandings] = await Promise.all([
          readScopeGuardSnapshot(db, competition, season),
          readStandingsForScope(db, competition, season),
        ]);
        const timestamp = nextMonotonicTimestamp(
          preSnapshot.settingsUpdatedAt,
          preSnapshot.maxUpdatedAt,
          preSnapshot.latestHistoryCreatedAt
        );
        const { historyId, statement: historyStmt } = buildGuardedHistoryStatement(
          db,
          competition,
          season,
          existingStandings,
          changedBy,
          `mode_switched_to_${requestedMode}`,
          timestamp,
          preSnapshot,
          { requireAutomatic: false }
        );
        const modeStmt = buildGuardedSetModeStatement(
          db,
          competition,
          season,
          requestedMode,
          changedBy,
          timestamp,
          historyId
        );

        const batchResults = await executeAtomicBatch(db, [historyStmt, modeStmt]);
        if (Number(batchResults[0]?.meta?.changes ?? 0) > 0) {
          committedStandings = existingStandings;
          break;
        }
      }

      if (!committedStandings) {
        return errorResponse(
          'Standings changed concurrently while switching update mode; please retry.',
          409,
          headers,
          { stale: true, competition, season }
        );
      }

      const [settings, history] = await Promise.all([
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
          count: committedStandings.length,
          standings: committedStandings,
          history,
        },
        200,
        headers
      );
    }

    // 2. Automatic external SportsDB refresh protected purely by atomic D1 SQL guards
    if (action === 'refresh') {
      const preSnapshot = await readScopeGuardSnapshot(db, competition, season);
      if (preSnapshot.updateMode === 'manual') {
        return errorResponse(
          `Standings for ${competition} (${season}) are in manual mode. Automatic refresh is blocked.`,
          409,
          headers,
          { blocked: true, mode: 'manual', competition, season }
        );
      }

      const fetchResult = await fetchOfficialSportsDbStandings({
        season,
        requireLiveSuccess: true,
      });

      if (!fetchResult.ok || fetchResult.standings.length === 0) {
        return errorResponse(
          fetchResult.error || 'Upstream standings feed failed; existing D1 standings preserved.',
          502,
          headers,
          { preservedExisting: true, competition, season }
        );
      }

      const timestamp = nextMonotonicTimestamp(
        preSnapshot.settingsUpdatedAt,
        preSnapshot.maxUpdatedAt,
        preSnapshot.latestHistoryCreatedAt
      );
      const historyId = makeHistoryId();
      const sortedIncoming = [...fetchResult.standings]
        .filter((t) => t.teamId && t.teamId !== 'diredawa')
        .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor)
        .map((item, idx) => ({ ...item, position: idx + 1 }));

      const preparedItems = sortedIncoming.map((item) =>
        prepareGuardedStandingUpsertStatement(
          db,
          competition,
          season,
          item as unknown as Record<string, unknown>,
          timestamp,
          historyId
        )
      );

      const { statement: guardedHistoryStmt } = buildGuardedHistoryStatement(
        db,
        competition,
        season,
        preparedItems.map((p) => p.normalized),
        changedBy,
        'automatic_sportsdb_refresh',
        timestamp,
        preSnapshot,
        { requireAutomatic: true, historyId }
      );

      const statements: D1PreparedStatement[] = [
        guardedHistoryStmt,
        ...preparedItems.map((p) => p.statement),
      ];

      const batchResults = await executeAtomicBatch(db, statements);
      const guardChanges = Number(batchResults[0]?.meta?.changes ?? 0);

      if (guardChanges === 0) {
        const currentSettings = await getStandingsSettings(db, competition, season);
        if (currentSettings.updateMode === 'manual') {
          return errorResponse(
            `Standings for ${competition} (${season}) were switched to manual mode; automatic write aborted.`,
            409,
            headers,
            { blocked: true, mode: 'manual', competition, season }
          );
        }
        return errorResponse(
          'Standings changed concurrently while refresh was running; stale refresh aborted.',
          409,
          headers,
          { stale: true, competition, season }
        );
      }

      const [standings, postSettings, history] = await Promise.all([
        readStandingsForScope(db, competition, season),
        getStandingsSettings(db, competition, season),
        readStandingsHistory(db, competition, season, 15),
      ]);

      return jsonResponse(
        {
          success: true,
          configured: true,
          source: fetchResult.source,
          competition,
          season,
          updateMode: postSettings.updateMode,
          settings: postSettings,
          count: standings.length,
          standings,
          history,
        },
        200,
        headers
      );
    }

    // 3. Bulk write (automatic bulk sync requires automatic mode + optimistic version; manual bulk requires matching snapshot)
    const isAutomaticWrite =
      body.source === 'sportsdb' || body.source === 'automatic' || action === 'autoSync';

    const preSnapshot = await readScopeGuardSnapshot(db, competition, season);
    if (isAutomaticWrite && preSnapshot.updateMode === 'manual') {
      return errorResponse(
        `Standings for ${competition} (${season}) are in manual mode. Automatic updates are blocked.`,
        409,
        headers,
        { blocked: true, mode: 'manual', competition, season }
      );
    }

    const timestamp = nextMonotonicTimestamp(
      preSnapshot.settingsUpdatedAt,
      preSnapshot.maxUpdatedAt,
      preSnapshot.latestHistoryCreatedAt
    );

    if (Array.isArray(body.standings)) {
      const list = body.standings
        .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
        .slice(0, 100);

      const sortedList = [...list].sort((a, b) => {
        const ptsDiff = (Number(b.points) || 0) - (Number(a.points) || 0);
        if (ptsDiff !== 0) return ptsDiff;
        const gfA = Number(a.goalsFor ?? a.goals_for) || 0;
        const gaA = Number(a.goalsAgainst ?? a.goals_against) || 0;
        const gfB = Number(b.goalsFor ?? b.goals_for) || 0;
        const gaB = Number(b.goalsAgainst ?? b.goals_against) || 0;
        const gdDiff = (gfB - gaB) - (gfA - gaA);
        if (gdDiff !== 0) return gdDiff;
        return gfB - gfA;
      });

      const historyId = makeHistoryId();
      const preparedItems = sortedList.map((item, idx) =>
        prepareGuardedStandingUpsertStatement(
          db,
          competition,
          season,
          { ...item, position: idx + 1 },
          timestamp,
          historyId
        )
      );

      const changeReason =
        cleanString(body.reason, 120) ||
        (action === 'reset'
          ? 'manual_reset_standings'
          : isAutomaticWrite
            ? 'automatic_sportsdb_sync'
            : 'manual_bulk_save');

      const { statement: guardedHistoryStmt } = buildGuardedHistoryStatement(
        db,
        competition,
        season,
        preparedItems.map((p) => p.normalized),
        changedBy,
        changeReason,
        timestamp,
        preSnapshot,
        { requireAutomatic: isAutomaticWrite, historyId }
      );

      const statements: D1PreparedStatement[] = [
        guardedHistoryStmt,
        ...preparedItems.map((p) => p.statement),
      ];

      if (!isAutomaticWrite && body.lockManual === true) {
        statements.push(
          buildGuardedSetModeStatement(db, competition, season, 'manual', changedBy, timestamp, historyId)
        );
      }

      const batchResults = await executeAtomicBatch(db, statements);
      if (Number(batchResults[0]?.meta?.changes ?? 0) === 0) {
        const currentSettings = await getStandingsSettings(db, competition, season);
        if (isAutomaticWrite && currentSettings.updateMode === 'manual') {
          return errorResponse(
            `Standings for ${competition} (${season}) are in manual mode. Automatic updates are blocked.`,
            409,
            headers,
            { blocked: true, mode: 'manual', competition, season }
          );
        }
        return errorResponse(
          'Standings changed concurrently; bulk update aborted to protect newer changes.',
          409,
          headers,
          { stale: true, competition, season }
        );
      }

      const [standings, nextSettings, history] = await Promise.all([
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
          updateMode: nextSettings.updateMode,
          settings: nextSettings,
          count: standings.length,
          standings,
          history,
        },
        200,
        headers
      );
    }

    // 4. Single-team upsert via collection endpoint — single atomic D1 batch
    const existingRows = await readStandingsForScope(db, competition, season);
    const incomingId = cleanString(body.teamId ?? body.team_id ?? body.id, 64);
    if (!incomingId || !isValidId(incomingId)) {
      return errorResponse('Invalid standing teamId.', 400, headers);
    }

    const existingTarget = existingRows.find((r) => r.teamId === incomingId || r.id === incomingId);
    const canonicalTeamId = existingTarget?.teamId || incomingId;
    const mergedTarget = normalizeStandingInput(
      competition,
      season,
      { ...(existingTarget || {}), ...body, teamId: canonicalTeamId },
      timestamp,
      existingTarget?.id || undefined
    );

    const nextRows = sortAndRankStandings([
      ...existingRows.filter((r) => r.teamId !== canonicalTeamId),
      mergedTarget,
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

    const statements: D1PreparedStatement[] = [
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
      statements.push(
        buildGuardedSetModeStatement(db, competition, season, 'manual', changedBy, timestamp, historyId)
      );
    }

    const batchResults = await executeAtomicBatch(db, statements);
    if (Number(batchResults[0]?.meta?.changes ?? 0) === 0) {
      return errorResponse(
        'Standings changed concurrently; update aborted to protect newer changes.',
        409,
        headers,
        { stale: true, competition, season }
      );
    }

    const [standings, nextSettings, history] = await Promise.all([
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
        updateMode: nextSettings.updateMode,
        settings: nextSettings,
        standings,
        history,
      },
      200,
      headers
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save standings to D1.';
    return errorResponse(message, 500, headers);
  }
}

export async function onRequestPost(context: PagesContext) {
  return handleBulkOrAction(context);
}

export async function onRequestPut(context: PagesContext) {
  return handleBulkOrAction(context);
}
