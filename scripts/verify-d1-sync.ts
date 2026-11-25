/**
 * HALABA City FC — Real-SQLite D1 Synchronization, Concurrency & Transaction Verification Suite
 *
 * Uses Node's built-in SQLite engine (`node:sqlite` DatabaseSync) initialized with the exact
 * confirmed live D1 schemas (`standings`, `standings_settings`, `standings_history`, `club_settings`)
 * to verify real SQL conditional guards, atomic `db.batch()` transactions, deterministic interleavings,
 * Firebase RS256 admin JWT verification, match merge logic, and frontend API error classification.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createServer as createViteServer } from 'vite';
import type {
  CloudflareEnv,
  D1Database,
  D1PreparedStatement,
  D1Result,
  PagesContext,
} from '../cf-lib/d1';
import {
  DEFAULT_COMPETITION,
  DEFAULT_SEASON,
  onRequestGet as standingsGet,
  onRequestPost as standingsPost,
  onRequestPut as standingsPut,
} from '../functions/api/standings/index';
import {
  onRequestDelete as standingDelete,
  onRequestGet as standingGet,
  onRequestPut as standingPut,
} from '../functions/api/standings/[id]';
import {
  onRequestGet as clubSettingsGet,
  onRequestPut as clubSettingsPut,
} from '../functions/api/club-settings/index';

type BeforeBatchHook = (statements: D1PreparedStatement[]) => Promise<void> | void;

class SqliteBackedD1Database implements D1Database {
  sqlite: DatabaseSync;
  batchCalls = 0;
  lastBatchSize = 0;
  batchSizes: number[] = [];
  private beforeBatchHooks: BeforeBatchHook[] = [];

  constructor() {
    this.sqlite = new DatabaseSync(':memory:');
    this.sqlite.exec(`
      CREATE TABLE standings (
        id TEXT PRIMARY KEY,
        competition TEXT NOT NULL,
        season TEXT NOT NULL,
        position INTEGER NOT NULL,
        team_id TEXT,
        team_name TEXT NOT NULL,
        played INTEGER NOT NULL DEFAULT 0,
        won INTEGER NOT NULL DEFAULT 0,
        drawn INTEGER NOT NULL DEFAULT 0,
        lost INTEGER NOT NULL DEFAULT 0,
        goals_for INTEGER NOT NULL DEFAULT 0,
        goals_against INTEGER NOT NULL DEFAULT 0,
        goal_difference INTEGER NOT NULL DEFAULT 0,
        points INTEGER NOT NULL DEFAULT 0,
        form_json TEXT,
        is_halaba INTEGER NOT NULL DEFAULT 0,
        badge_url TEXT,
        updated_at TEXT,
        UNIQUE(competition, season, team_id)
      );

      CREATE TABLE standings_settings (
        competition TEXT NOT NULL,
        season TEXT NOT NULL,
        update_mode TEXT NOT NULL DEFAULT 'automatic' CHECK(update_mode IN ('automatic','manual')),
        updated_by TEXT,
        updated_at TEXT,
        PRIMARY KEY(competition, season)
      );

      CREATE TABLE standings_history (
        id TEXT PRIMARY KEY,
        competition TEXT NOT NULL,
        season TEXT NOT NULL,
        standings_json TEXT NOT NULL,
        changed_by TEXT,
        change_reason TEXT,
        created_at TEXT NOT NULL
      );

      CREATE TABLE club_settings (
        id TEXT PRIMARY KEY DEFAULT 'club',
        name TEXT NOT NULL,
        short_name TEXT NOT NULL,
        nickname_json TEXT NOT NULL,
        founded INTEGER NOT NULL,
        stadium_json TEXT NOT NULL,
        colors_json TEXT NOT NULL,
        contact_json TEXT NOT NULL,
        socials_json TEXT NOT NULL,
        updated_at TEXT
      );
    `);
  }

  queueBeforeNextBatch(hook: BeforeBatchHook): void {
    this.beforeBatchHooks.push(hook);
  }

  prepare(query: string): D1PreparedStatement {
    const sqlite = this.sqlite;
    const makeStmt = (
      boundValues: unknown[]
    ): D1PreparedStatement & { _execute: () => D1Result<any> } => {
      const executeRun = (): D1Result<any> => {
        const compiled = sqlite.prepare(query);
        const info = compiled.run(...(boundValues as any[]));
        return {
          success: true,
          results: [],
          meta: {
            changes: Number(info.changes),
            last_row_id: Number(info.lastInsertRowid),
          },
        };
      };

      return {
        _execute: executeRun,
        bind(...values: unknown[]) {
          for (let i = 0; i < values.length; i++) {
            if (values[i] === undefined) {
              throw new Error(`D1 bind error: parameter at index ${i} is undefined for query: ${query}`);
            }
          }
          return makeStmt(values);
        },
        async first<T = Record<string, unknown>>(colName?: string): Promise<T | null> {
          const compiled = sqlite.prepare(query);
          const row = compiled.get(...(boundValues as any[])) as Record<string, unknown> | undefined;
          if (!row) return null;
          if (colName) return (row[colName] ?? null) as T | null;
          return { ...row } as T;
        },
        async run<T = Record<string, unknown>>(): Promise<D1Result<T>> {
          return executeRun() as D1Result<T>;
        },
        async all<T = Record<string, unknown>>(): Promise<D1Result<T>> {
          const compiled = sqlite.prepare(query);
          const rows = compiled.all(...(boundValues as any[])).map((r) => ({ ...(r as object) }));
          return {
            success: true,
            results: rows as T[],
          };
        },
      };
    };

    return makeStmt([]);
  }

  async batch<T = Record<string, unknown>>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]> {
    const hook = this.beforeBatchHooks.shift();
    if (hook) {
      await hook(statements);
    }

    this.batchCalls++;
    this.lastBatchSize = statements.length;
    this.batchSizes.push(statements.length);

    this.sqlite.exec('BEGIN IMMEDIATE');
    try {
      const results: D1Result<T>[] = [];
      for (const stmt of statements) {
        results.push(await stmt.run<T>());
      }
      this.sqlite.exec('COMMIT');
      return results;
    } catch (err) {
      this.sqlite.exec('ROLLBACK');
      throw err;
    }
  }

  countHistory(competition = DEFAULT_COMPETITION, season = DEFAULT_SEASON): number {
    const row = this.sqlite
      .prepare('SELECT COUNT(*) AS c FROM standings_history WHERE competition = ? AND season = ?')
      .get(competition, season) as { c: number };
    return Number(row.c);
  }

  getHistoryRows(competition = DEFAULT_COMPETITION, season = DEFAULT_SEASON): Array<Record<string, any>> {
    return this.sqlite
      .prepare(
        'SELECT id, competition, season, standings_json, changed_by, change_reason, created_at FROM standings_history WHERE competition = ? AND season = ? ORDER BY created_at DESC, rowid DESC'
      )
      .all(competition, season)
      .map((r) => ({ ...(r as object) }));
  }

  getStandingRow(teamId: string, competition = DEFAULT_COMPETITION, season = DEFAULT_SEASON): Record<string, any> | null {
    const row = this.sqlite
      .prepare('SELECT * FROM standings WHERE competition = ? AND season = ? AND team_id = ? LIMIT 1')
      .get(competition, season, teamId) as Record<string, any> | undefined;
    return row ? { ...row } : null;
  }

  getSettingsRow(competition = DEFAULT_COMPETITION, season = DEFAULT_SEASON): Record<string, any> | null {
    const row = this.sqlite
      .prepare('SELECT * FROM standings_settings WHERE competition = ? AND season = ? LIMIT 1')
      .get(competition, season) as Record<string, any> | undefined;
    return row ? { ...row } : null;
  }
}

function toBase64Url(input: Uint8Array | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input, 'utf8') : Buffer.from(input);
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function createTestFirebaseJwtTools() {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  );

  const publicJwk = (await crypto.subtle.exportKey('jwk', keyPair.publicKey)) as Record<string, unknown>;
  const kid = 'test-firebase-kid-1';

  async function signAdminToken(email = 'admin@halabafc.et', uid = 'admin-uid-1'): Promise<string> {
    const nowSec = Math.floor(Date.now() / 1000);
    const header = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT', kid }));
    const payload = toBase64Url(
      JSON.stringify({
        aud: 'halabafc',
        iss: 'https://securetoken.google.com/halabafc',
        sub: uid,
        uid,
        email,
        email_verified: true,
        admin: true,
        role: 'admin',
        iat: nowSec - 10,
        auth_time: nowSec - 10,
        exp: nowSec + 3600,
      })
    );
    const signingInput = new TextEncoder().encode(`${header}.${payload}`);
    const sigBuffer = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', keyPair.privateKey, signingInput);
    return `${header}.${payload}.${toBase64Url(new Uint8Array(sigBuffer))}`;
  }

  return {
    jwksPayload: {
      keys: [
        {
          kid,
          kty: 'RSA',
          alg: 'RS256',
          use: 'sig',
          n: publicJwk.n,
          e: publicJwk.e,
        },
      ],
    },
    signAdminToken,
  };
}

function makePagesContext<TParams extends Record<string, string> = Record<string, string>>(
  request: Request,
  db: D1Database,
  params = {} as TParams
): PagesContext<TParams> {
  const env: CloudflareEnv = {
    DB: db,
    FIREBASE_PROJECT_ID: 'halabafc',
  };
  return { request, env, params };
}

function buildSportsDbTable(halabaPoints = 12, halabaPlayed = 6) {
  return {
    table: [
      {
        idTeam: '157333',
        strTeam: 'Halaba Ketema',
        intPlayed: String(halabaPlayed),
        intWin: '3',
        intDraw: '3',
        intLoss: '0',
        intGoalsFor: '10',
        intGoalsAgainst: '4',
        intGoalDifference: '6',
        intPoints: String(halabaPoints),
        strForm: 'WDWWW',
        strBadge: 'https://example.com/halaba.png',
      },
      {
        idTeam: '153585',
        strTeam: 'Negele Arsi FC',
        intPlayed: '6',
        intWin: '3',
        intDraw: '2',
        intLoss: '1',
        intGoalsFor: '8',
        intGoalsAgainst: '4',
        intGoalDifference: '4',
        intPoints: '11',
        strForm: 'WDWWD',
      },
      {
        idTeam: '143767',
        strTeam: 'Mechal (Defence Force)',
        intPlayed: '6',
        intWin: '3',
        intDraw: '1',
        intLoss: '2',
        intGoalsFor: '7',
        intGoalsAgainst: '5',
        intGoalDifference: '2',
        intPoints: '10',
        strForm: 'WLWWD',
      },
      {
        idTeam: '149377',
        strTeam: 'Ethiopia Nigd Bank',
        intPlayed: '5',
        intWin: '2',
        intDraw: '3',
        intLoss: '0',
        intGoalsFor: '6',
        intGoalsAgainst: '3',
        intGoalDifference: '3',
        intPoints: '9',
        strForm: 'WWDDD',
      },
      {
        idTeam: '141032',
        strTeam: 'Wolaitta Dicha',
        intPlayed: '6',
        intWin: '2',
        intDraw: '2',
        intLoss: '2',
        intGoalsFor: '10',
        intGoalsAgainst: '8',
        intGoalDifference: '2',
        intPoints: '8',
        strForm: 'DDLWW',
      },
      {
        idTeam: '141025',
        strTeam: 'Bahir Dar Kenema',
        intPlayed: '6',
        intWin: '2',
        intDraw: '2',
        intLoss: '2',
        intGoalsFor: '7',
        intGoalsAgainst: '6',
        intGoalDifference: '1',
        intPoints: '8',
        strForm: 'WLWDD',
      },
    ],
  };
}

type SportsDbMockHandler = (url: string) => Promise<Response> | Response;

async function run() {
  console.log('\n=============================================================================');
  console.log('HALABA CITY FC — REAL-SQLITE D1 CONCURRENCY & SYNC VERIFICATION TEST SUITE');
  console.log('=============================================================================\n');

  const jwtTools = await createTestFirebaseJwtTools();
  const adminToken = await jwtTools.signAdminToken();

  let sportsDbHandler: SportsDbMockHandler = async () =>
    new Response(JSON.stringify(buildSportsDbTable(12, 6)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

    if (url.includes('googleapis.com/service_accounts/v1/jwk/securetoken')) {
      return new Response(JSON.stringify(jwtTools.jwksPayload), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=300',
        },
      });
    }

    if (url.includes('thesportsdb.com')) {
      return sportsDbHandler(url);
    }

    return originalFetch(input, init);
  }) as typeof fetch;

  const viteServer = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'silent',
  });

  let passed = 0;
  let total = 0;

  async function scenario(name: string, fn: () => Promise<void> | void) {
    total++;
    try {
      await fn();
      passed++;
      console.log(`\x1b[32m[PASS] [Scenario ${total}] ${name}\x1b[0m`);
    } catch (err) {
      console.error(`\x1b[31m[FAIL] [Scenario ${total}] ${name}\x1b[0m`);
      console.error(err);
    }
  }

  function refreshReq(competition = DEFAULT_COMPETITION, season = DEFAULT_SEASON) {
    return new Request('https://halaba-fc.pages.dev/api/standings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ action: 'refresh', competition, season }),
    });
  }

  function setModeReq(
    updateMode: 'automatic' | 'manual',
    competition = DEFAULT_COMPETITION,
    season = DEFAULT_SEASON
  ) {
    return new Request('https://halaba-fc.pages.dev/api/standings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ action: 'setMode', updateMode, competition, season }),
    });
  }

  function teamPutReq(
    teamId: string,
    payload: Record<string, unknown>,
    competition = DEFAULT_COMPETITION,
    season = DEFAULT_SEASON
  ) {
    return new Request(`https://halaba-fc.pages.dev/api/standings/${teamId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ competition, season, ...payload }),
    });
  }

  try {
    // -------------------------------------------------------------------------
    // Scenario 1: Manual mode commits AFTER refresh's initial read & SportsDB fetch,
    // immediately BEFORE refresh's final db.batch()
    // -------------------------------------------------------------------------
    await scenario(
      'Manual mode committed right before refresh db.batch() blocks refresh via SQL guard (409)',
      async () => {
        const db = new SqliteBackedD1Database();
        // Seed initial automatic standings
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        const initRes = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(initRes.status, 200);
        const histCountAfterInit = db.countHistory();

        // Next SportsDB fetch returns higher points (22), AND we interleave setMode('manual')
        // right before the refresh's final db.batch() executes!
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(22, 9)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });

        db.queueBeforeNextBatch(async () => {
          const modeRes = await standingsPost(makePagesContext(setModeReq('manual'), db));
          assert.equal(modeRes.status, 200);
        });

        const raceRefreshRes = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(raceRefreshRes.status, 409);
        const raceJson = (await raceRefreshRes.json()) as any;
        assert.equal(raceJson.blocked, true);
        assert.equal(raceJson.mode, 'manual');

        // Points must remain 10 (not 22!), mode is manual, and only the setMode history row was added
        assert.equal(db.getStandingRow('halaba')?.points, 10);
        assert.equal(db.getSettingsRow()?.update_mode, 'manual');
        assert.equal(db.countHistory(), histCountAfterInit + 1);
        assert.equal(db.getHistoryRows()[0].change_reason, 'mode_switched_to_manual');
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 2: Manual mode is enabled while a refresh is waiting for SportsDB
    // -------------------------------------------------------------------------
    await scenario(
      'Manual mode enabled while refresh awaits SportsDB aborts automatic write (409)',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(11, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), db))).status, 200);

        let releaseSportsDb!: () => void;
        const sportsDbGate = new Promise<void>((r) => {
          releaseSportsDb = r;
        });
        let fetchEnteredResolve!: () => void;
        const fetchEntered = new Promise<void>((r) => {
          fetchEnteredResolve = r;
        });

        sportsDbHandler = async () => {
          fetchEnteredResolve();
          await sportsDbGate;
          return new Response(JSON.stringify(buildSportsDbTable(29, 10)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        };

        const refreshPromise = standingsPost(makePagesContext(refreshReq(), db));
        await fetchEntered;

        // Admin enables manual mode while SportsDB request is in flight
        const modeRes = await standingsPost(makePagesContext(setModeReq('manual'), db));
        assert.equal(modeRes.status, 200);

        releaseSportsDb();
        const refreshResult = await refreshPromise;
        assert.equal(refreshResult.status, 409);
        const json = (await refreshResult.json()) as any;
        assert.equal(json.blocked, true);
        assert.equal(db.getStandingRow('halaba')?.points, 11);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 3: Manual edit commits while a refresh is waiting for SportsDB
    // -------------------------------------------------------------------------
    await scenario(
      'Manual edit committed while refresh awaits SportsDB survives refresh (both with & without lockManual)',
      async () => {
        // Subcase A: Manual edit with lockManual: true
        const dbA = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), dbA))).status, 200);

        let releaseA!: () => void;
        const gateA = new Promise<void>((r) => (releaseA = r));
        let enteredARes!: () => void;
        const enteredA = new Promise<void>((r) => (enteredARes = r));
        sportsDbHandler = async () => {
          enteredARes();
          await gateA;
          return new Response(JSON.stringify(buildSportsDbTable(19, 8)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        };

        const refreshA = standingsPost(makePagesContext(refreshReq(), dbA));
        await enteredA;

        const editARes = await standingPut(
          makePagesContext(teamPutReq('halaba', { points: 55, lockManual: true }), dbA, { id: 'halaba' })
        );
        assert.equal(editARes.status, 200);
        releaseA();

        const refreshARes = await refreshA;
        assert.equal(refreshARes.status, 409);
        assert.equal(dbA.getStandingRow('halaba')?.points, 55);
        assert.equal(dbA.getSettingsRow()?.update_mode, 'manual');

        // Subcase B: Manual edit WITHOUT lockManual (mode stays 'automatic', stale version guard protects it)
        const dbB = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), dbB))).status, 200);

        let releaseB!: () => void;
        const gateB = new Promise<void>((r) => (releaseB = r));
        let enteredBRes!: () => void;
        const enteredB = new Promise<void>((r) => (enteredBRes = r));
        sportsDbHandler = async () => {
          enteredBRes();
          await gateB;
          return new Response(JSON.stringify(buildSportsDbTable(21, 8)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        };

        const refreshB = standingsPost(makePagesContext(refreshReq(), dbB));
        await enteredB;

        const editBRes = await standingPut(
          makePagesContext(teamPutReq('halaba', { points: 58 }), dbB, { id: 'halaba' })
        );
        assert.equal(editBRes.status, 200);
        releaseB();

        const refreshBRes = await refreshB;
        assert.equal(refreshBRes.status, 409);
        const refreshBJson = (await refreshBRes.json()) as any;
        assert.equal(refreshBJson.stale, true);
        assert.equal(dbB.getStandingRow('halaba')?.points, 58);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 4: Refresh begins while a manual edit is committing
    // -------------------------------------------------------------------------
    await scenario(
      'Refresh beginning while a manual edit is committing preserves transaction ordering & rejects stale batch',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), db))).status, 200);

        // Manual edit reads snapshot & prepares batch; right before its batch commits, a refresh runs and commits first!
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(16, 7)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });

        let interleavedRefreshStatus = 0;
        db.queueBeforeNextBatch(async () => {
          const r = await standingsPost(makePagesContext(refreshReq(), db));
          interleavedRefreshStatus = r.status;
        });

        const manualEditRes = await standingPut(
          makePagesContext(teamPutReq('halaba', { points: 62, lockManual: true }), db, { id: 'halaba' })
        );
        assert.equal(interleavedRefreshStatus, 200);
        // Manual edit read a now-stale snapshot and therefore aborts cleanly (409) without partial overwrite
        assert.equal(manualEditRes.status, 409);
        assert.equal(db.getStandingRow('halaba')?.points, 16);
        assert.equal(db.getSettingsRow()?.update_mode ?? 'automatic', 'automatic');

        // Conversely: if manual edit commits first while refresh is preparing its batch, refresh aborts (409)
        const histBefore = db.countHistory();
        db.queueBeforeNextBatch(async () => {
          const m = await standingPut(
            makePagesContext(teamPutReq('halaba', { points: 63, lockManual: true }), db, { id: 'halaba' })
          );
          assert.equal(m.status, 200);
        });
        const lateRefresh = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(lateRefresh.status, 409);
        assert.equal(db.getStandingRow('halaba')?.points, 63);
        assert.equal(db.countHistory(), histBefore + 1);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 5: Two manual edits target the same competition/season
    // -------------------------------------------------------------------------
    await scenario(
      'Two concurrent manual edits on the same scope never silently clobber newer edit or corrupt positions',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), db))).status, 200);
        const histBefore = db.countHistory();

        // Edit A reads snapshot, then before Edit A commits, Edit B runs and commits negelle=45!
        db.queueBeforeNextBatch(async () => {
          const editB = await standingPut(
            makePagesContext(teamPutReq('negelle', { points: 45, lockManual: true }), db, { id: 'negelle' })
          );
          assert.equal(editB.status, 200);
        });

        const editA = await standingPut(
          makePagesContext(teamPutReq('halaba', { points: 44, lockManual: true }), db, { id: 'halaba' })
        );

        // Edit A was built on pre-Edit-B snapshot -> SQL guard rejects Edit A (409 stale)
        assert.equal(editA.status, 409);
        const editAJson = (await editA.json()) as any;
        assert.equal(editAJson.stale, true);

        // Edit B's commit (negelle=45, pos=1) is completely intact and halaba was NOT overwritten from stale snapshot
        assert.equal(db.getStandingRow('negelle')?.points, 45);
        assert.equal(db.getStandingRow('negelle')?.position, 1);
        assert.equal(db.getStandingRow('halaba')?.points, 10);
        assert.equal(db.countHistory(), histBefore + 1);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 6: Manual deletion races with automatic refresh
    // -------------------------------------------------------------------------
    await scenario(
      'Manual deletion racing with automatic refresh preserves deletion and rejects stale refresh',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(10, 5)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), db))).status, 200);
        assert.ok(db.getStandingRow('gamochencha'), 'gamochencha seeded initially');

        // Refresh starts, fetches SportsDB, then DELETE /api/standings/gamochencha commits right before Refresh batch
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(18, 8)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });

        db.queueBeforeNextBatch(async () => {
          const delRes = await standingDelete(
            makePagesContext(
              new Request(
                `https://halaba-fc.pages.dev/api/standings/gamochencha?competition=${DEFAULT_COMPETITION}&season=${DEFAULT_SEASON}`,
                { method: 'DELETE', headers: { Authorization: `Bearer ${adminToken}` } }
              ),
              db,
              { id: 'gamochencha' }
            )
          );
          assert.equal(delRes.status, 200);
        });

        const raceRefresh = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(raceRefresh.status, 409);
        assert.equal(db.getStandingRow('gamochencha'), null, 'Deleted team must not be resurrected');
        assert.equal(db.getStandingRow('halaba')?.points, 10);

        const getRes = await standingsGet(
          makePagesContext(
            new Request(
              `https://halaba-fc.pages.dev/api/standings?competition=${DEFAULT_COMPETITION}&season=${DEFAULT_SEASON}`
            ),
            db
          )
        );
        const getJson = (await getRes.json()) as any;
        assert.equal(getJson.standings.length, 17);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 7: A rejected refresh creates NO misleading history record
    // -------------------------------------------------------------------------
    await scenario(
      'Rejected refreshes (manual block, stale guard, upstream 502) create zero history entries',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(12, 6)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        assert.equal((await standingsPost(makePagesContext(refreshReq(), db))).status, 200);
        const countAfterInit = db.countHistory();

        // Case 1: Upstream SportsDB 500 -> returns 502, zero history added
        sportsDbHandler = async () => new Response('Server Error', { status: 500 });
        const failRes = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(failRes.status, 502);
        assert.equal(db.countHistory(), countAfterInit);

        // Case 2: Switch to manual -> adds 1 history row; subsequent rejected refresh adds 0 rows
        assert.equal((await standingsPost(makePagesContext(setModeReq('manual'), db))).status, 200);
        const countAfterManual = db.countHistory();
        assert.equal(countAfterManual, countAfterInit + 1);

        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(30, 12)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        const blockedRes = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(blockedRes.status, 409);
        assert.equal(db.countHistory(), countAfterManual);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 8: A successful refresh commits standings and history atomically
    // -------------------------------------------------------------------------
    await scenario(
      'Successful refresh commits all standings rows and standings_history atomically in 1 batch',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(14, 6)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });

        const batchesBefore = db.batchCalls;
        const res = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(res.status, 200);
        assert.equal(db.batchCalls, batchesBefore + 1, 'Must commit in exactly 1 atomic db.batch()');
        assert.equal(db.lastBatchSize, 19, '1 guarded history + 18 guarded team upserts in 1 batch');

        const data = (await res.json()) as any;
        assert.equal(data.standings.length, 18);
        assert.equal(db.getStandingRow('halaba')?.points, 14);
        assert.equal(db.countHistory(), 1);
        const histRow = db.getHistoryRows()[0];
        assert.equal(histRow.change_reason, 'automatic_sportsdb_refresh');
        const parsedSnapshot = JSON.parse(histRow.standings_json);
        assert.equal(parsedSnapshot.length, 18);
        assert.equal(parsedSnapshot.find((t: any) => t.teamId === 'halaba')?.points, 14);

        // Two consecutive same-millisecond refreshes run cleanly because monotonic timestamp + historyId guard updates
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(17, 7)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        const res2 = await standingsPost(makePagesContext(refreshReq(), db));
        assert.equal(res2.status, 200);
        assert.equal(db.getStandingRow('halaba')?.points, 17);
        assert.equal(db.countHistory(), 2);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 9: >50 standings statements cannot be split into separate batches
    // -------------------------------------------------------------------------
    await scenario(
      'More than 50 standings statements execute inside ONE unchunked atomic db.batch() transaction',
      async () => {
        const db = new SqliteBackedD1Database();
        const fiftyFiveTeams = Array.from({ length: 55 }, (_, i) => ({
          teamId: `club_${i + 1}`,
          teamName: `Club ${i + 1}`,
          played: 10,
          won: 5,
          drawn: 2,
          lost: 3,
          goalsFor: 15,
          goalsAgainst: 10,
          points: 55 - i,
          form: ['W', 'D', 'W'],
          isHalaba: false,
        }));

        const batchesBefore = db.batchCalls;
        const autoBulkRes = await standingsPut(
          makePagesContext(
            new Request('https://halaba-fc.pages.dev/api/standings', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
              body: JSON.stringify({
                action: 'autoSync',
                source: 'sportsdb',
                competition: 'LARGE_LEAGUE',
                season: DEFAULT_SEASON,
                standings: fiftyFiveTeams,
              }),
            }),
            db
          )
        );

        assert.equal(autoBulkRes.status, 200);
        assert.equal(db.batchCalls, batchesBefore + 1, 'Must NOT split >50 statements across multiple batches');
        assert.equal(db.lastBatchSize, 56, '1 guard/history statement + 55 standings upserts in 1 batch');

        // Verify that if manual mode commits right before a 56-statement guarded autoSync batch,
        // ALL 56 statements are skipped atomically (0 rows overwritten)
        db.queueBeforeNextBatch(async () => {
          const m = await standingsPost(makePagesContext(setModeReq('manual', 'LARGE_LEAGUE', DEFAULT_SEASON), db));
          assert.equal(m.status, 200);
        });
        const blockedLargeRes = await standingsPut(
          makePagesContext(
            new Request('https://halaba-fc.pages.dev/api/standings', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
              body: JSON.stringify({
                action: 'autoSync',
                source: 'sportsdb',
                competition: 'LARGE_LEAGUE',
                season: DEFAULT_SEASON,
                standings: fiftyFiveTeams.map((t) => ({ ...t, points: 999 })),
              }),
            }),
            db
          )
        );
        assert.equal(blockedLargeRes.status, 409);
        assert.equal(db.getStandingRow('club_1', 'LARGE_LEAGUE', DEFAULT_SEASON)?.points, 55);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 10: Separate seasons & preserving rows across mode switch
    // -------------------------------------------------------------------------
    await scenario(
      'Different seasons stay isolated and switching manual -> automatic preserves existing rows',
      async () => {
        const db = new SqliteBackedD1Database();
        sportsDbHandler = async () =>
          new Response(JSON.stringify(buildSportsDbTable(15, 6)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });

        // Put custom 2025-2026 row in manual mode
        assert.equal(
          (
            await standingPut(
              makePagesContext(
                teamPutReq('halaba', { teamName: 'Halaba Ketema', points: 61, lockManual: true }, DEFAULT_COMPETITION, '2025-2026'),
                db,
                { id: 'halaba' }
              )
            )
          ).status,
          200
        );

        // Refresh 2026-2027 succeeds independently
        assert.equal((await standingsPost(makePagesContext(refreshReq(DEFAULT_COMPETITION, '2026-2027'), db))).status, 200);
        assert.equal(db.getStandingRow('halaba', DEFAULT_COMPETITION, '2026-2027')?.points, 15);

        // Switch 2025-2026 back to automatic -> preserves 61 pts
        const switchBack = await standingsPost(
          makePagesContext(setModeReq('automatic', DEFAULT_COMPETITION, '2025-2026'), db)
        );
        assert.equal(switchBack.status, 200);
        assert.equal(db.getStandingRow('halaba', DEFAULT_COMPETITION, '2025-2026')?.points, 61);
      }
    );

    // -------------------------------------------------------------------------
    // Scenario 11: Club settings 10-column schema round-trip
    // -------------------------------------------------------------------------
    await scenario('Club settings read and write use exact club_settings schema (id = "club", 10 columns)', async () => {
      const db = new SqliteBackedD1Database();
      const putRes = await clubSettingsPut(
        makePagesContext(
          new Request('https://halaba-fc.pages.dev/api/club-settings', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
            body: JSON.stringify({
              name: 'HALABA City Football Club',
              shortName: 'HALABA',
              nickname: { en: 'The Chilies', am: 'በርበሬዎቹ', om: 'Barbareewwan' },
              founded: 1966,
              stadium: { name: 'Halaba New Arena', capacity: '18,000 Seats', city: 'Halaba Kulito' },
              colors: { primary: '#c80815', secondary: '#056b2b', accent: '#f5b800' },
              contact: { email: 'contact@halabacityfc.et', phone: '+251 46 226 0192' },
              socials: { telegram: 'https://t.me/halabacityfc' },
            }),
          }),
          db
        )
      );
      assert.equal(putRes.status, 200);

      const getRes = await clubSettingsGet(
        makePagesContext(new Request('https://halaba-fc.pages.dev/api/club-settings'), db)
      );
      assert.equal(getRes.status, 200);
      const getData = (await getRes.json()) as any;
      assert.equal(getData.clubInfo.name, 'HALABA City Football Club');
      assert.equal(getData.clubInfo.shortName, 'HALABA');
      assert.equal(getData.clubInfo.stadium.name, 'Halaba New Arena');
    });

    // -------------------------------------------------------------------------
    // Scenario 12: Match startup merge & frontend error surfacing
    // -------------------------------------------------------------------------
    await scenario(
      'Match merge preserves custom D1 matches and frontend classifies online/offline/HTTP errors',
      async () => {
        const clubContextMod = await viteServer.ssrLoadModule('/src/context/ClubContext.tsx');
        const mergeMatchesPreservingCustom = clubContextMod.mergeMatchesPreservingCustom as (
          existingMatches: any[],
          incomingFixtures: any[]
        ) => { merged: any[]; toSync: any[] };

        const customMatch = {
          id: 'custom-friendly-2026',
          competition: { en: 'Halaba Cup', am: 'የሃላባ ዋንጫ', om: 'Waancaa Halaabaa' },
          date: '2026-12-01T15:00:00Z',
          venue: { en: 'Halaba Stadium', am: 'ሃላባ ስታዲየም', om: 'Istaadiyeemii Halaabaa' },
          homeTeam: { id: 'halaba', name: 'Halaba City FC', shortName: 'HAL', score: 3 },
          awayTeam: { id: 'hawassa', name: 'Hawassa Kenema', shortName: 'HAW', score: 1 },
          status: 'FINISHED',
          summary: { en: 'Custom D1 match notes preserved', am: 'Custom', om: 'Custom' },
        };

        const { merged } = mergeMatchesPreservingCustom([customMatch], []);
        assert.equal(merged.length, 1);
        assert.equal(merged[0].id, 'custom-friendly-2026');

        const apiMod = await viteServer.ssrLoadModule('/src/utils/api.ts');
        const apiFetchJson = apiMod.apiFetchJson as <T>(path: string, init?: RequestInit) => Promise<any>;

        const prevNavigator = globalThis.navigator;
        try {
          Object.defineProperty(globalThis, 'navigator', { value: { onLine: true }, configurable: true });
          const prevFetch = globalThis.fetch;
          globalThis.fetch = (async () => {
            throw new TypeError('Failed to fetch');
          }) as typeof fetch;
          const corsRes = await apiFetchJson('/api/standings');
          assert.equal(corsRes.isOffline, false);
          assert.equal(corsRes.errorKind, 'cors_or_network');

          Object.defineProperty(globalThis, 'navigator', { value: { onLine: false }, configurable: true });
          const offlineRes = await apiFetchJson('/api/standings');
          assert.equal(offlineRes.isOffline, true);
          assert.equal(offlineRes.errorKind, 'offline');
          globalThis.fetch = prevFetch;
        } finally {
          if (prevNavigator !== undefined) {
            Object.defineProperty(globalThis, 'navigator', { value: prevNavigator, configurable: true });
          }
        }

        const adminSrc = fs.readFileSync(path.resolve('src/pages/AdminPage.tsx'), 'utf8');
        const sponsorSrc = fs.readFileSync(path.resolve('src/components/admin/SponsorManager.tsx'), 'utf8');
        assert.ok(adminSrc.includes('showAdminFeedback'));
        assert.ok(sponsorSrc.includes('Error resetting sponsors:'));
      }
    );
  } finally {
    globalThis.fetch = originalFetch;
    await viteServer.close();
  }

  console.log('\n-----------------------------------------------------------------------------');
  console.log(`SUMMARY: ${passed} / ${total} D1 concurrency & sync scenarios PASSED.`);
  console.log('-----------------------------------------------------------------------------\n');

  if (passed !== total) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Unhandled error running verify-d1-sync.ts:', err);
  process.exit(1);
});
