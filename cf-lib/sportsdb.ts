/**
 * Shared TheSportsDB standings fetcher & normalizer for HALABA City FC.
 * Supports strict validation so failed upstream API calls never overwrite stored D1 standings.
 */

export interface StandingTeamRecord {
  teamId: string;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
  isHalaba: boolean;
  badgeUrl?: string;
  position: number;
}

export interface FetchSportsDbStandingsResult {
  ok: boolean;
  liveFetched: boolean;
  source: string;
  standings: StandingTeamRecord[];
  error?: string;
}

export const BASE_EPL_CUTOFF_DATE = '2026-11-27';

export const BASE_EPL_STANDINGS: Omit<StandingTeamRecord, 'position'>[] = [
  { teamId: 'negelle', teamName: 'Negele Arsi FC', played: 6, won: 4, drawn: 2, lost: 0, goalsFor: 8, goalsAgainst: 2, goalDifference: 6, points: 14, form: ['D', 'W', 'W', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/3vj7z31760913824.png' },
  { teamId: 'bahirdar', teamName: 'Bahir Dar Kenema', played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 10, goalsAgainst: 6, goalDifference: 4, points: 11, form: ['L', 'W', 'D', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png' },
  { teamId: 'defence', teamName: 'Mechal (Defence Force)', played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 11, form: ['L', 'W', 'W', 'D', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png' },
  { teamId: 'cbe_sa', teamName: 'Ethiopia Nigd Bank (CBE SA)', played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 4, goalDifference: 1, points: 11, form: ['W', 'D', 'D', 'L', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png' },
  { teamId: 'electric', teamName: 'Ethio Electric', played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 2, goalDifference: 1, points: 10, form: ['D', 'W', 'W', 'L', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png' },
  { teamId: 'saintgeorge', teamName: 'Saint George SC (Kidus Giorgis)', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 9, form: ['L', 'D', 'D', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/r5orqa1615830067.png' },
  { teamId: 'halaba', teamName: 'Halaba Ketema (በርበሬዎቹ)', played: 7, won: 2, drawn: 3, lost: 2, goalsFor: 6, goalsAgainst: 11, goalDifference: -5, points: 9, form: ['D', 'L', 'W', 'L', 'D'], isHalaba: true, badgeUrl: '/images/halaba-city-fc-logo.png' },
  { teamId: 'wolaitta', teamName: 'Wolaitta Dicha (Welayta Dicha)', played: 6, won: 2, drawn: 2, lost: 2, goalsFor: 11, goalsAgainst: 6, goalDifference: 5, points: 8, form: ['D', 'L', 'W', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png' },
  { teamId: 'shaggar', teamName: 'Shaggar City FC (Sheger Ketema)', played: 6, won: 2, drawn: 2, lost: 2, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 8, form: ['D', 'L', 'D', 'L', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png' },
  { teamId: 'bunna', teamName: 'Ethiopian Coffee SC (Bunna)', played: 7, won: 2, drawn: 2, lost: 3, goalsFor: 5, goalsAgainst: 8, goalDifference: -3, points: 8, form: ['L', 'L', 'D', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png' },
  { teamId: 'insurance', teamName: 'Ethiopian Medhin (Insurance)', played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 8, goalsAgainst: 8, goalDifference: 0, points: 7, form: ['W', 'D', 'L', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png' },
  { teamId: 'adama', teamName: 'Adama Kenema SC', played: 6, won: 1, drawn: 3, lost: 2, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 6, form: ['D', 'D', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png' },
  { teamId: 'hawassa', teamName: 'Hawassa Kenema SC', played: 5, won: 1, drawn: 2, lost: 2, goalsFor: 5, goalsAgainst: 6, goalDifference: -1, points: 5, form: ['L', 'D', 'D', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png' },
  { teamId: 'sidama', teamName: 'Sidama Coffee SC (Sidama Bunna)', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 4, form: ['L', 'D', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png' },
  { teamId: 'hosaena', teamName: 'Hadiya Hossana', played: 5, won: 1, drawn: 1, lost: 3, goalsFor: 3, goalsAgainst: 6, goalDifference: -3, points: 4, form: ['L', 'D', 'W', 'L', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png' },
  { teamId: 'fasil', teamName: 'Fasil Kenema', played: 5, won: 0, drawn: 3, lost: 2, goalsFor: 3, goalsAgainst: 5, goalDifference: -2, points: 3, form: ['D', 'D', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png' },
  { teamId: 'welwalo', teamName: 'Welwalo Adigrat Univ.', played: 4, won: 0, drawn: 3, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDifference: -2, points: 3, form: ['D', 'L', 'D', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/x1aihm1727368029.png' },
  { teamId: 'gamochencha', teamName: 'Gamo Chencha', played: 5, won: 0, drawn: 1, lost: 4, goalsFor: 1, goalsAgainst: 6, goalDifference: -5, points: 1, form: ['L', 'L', 'D', 'L', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png' },
];

export function normalizeEplId(strTeam: string, idTeam?: string): string {
  const s = (strTeam || '').toLowerCase();
  const id = String(idTeam || '');
  if (s.includes('halaba')) return 'halaba';
  if (s.includes('cbe') || s.includes('nigd')) return 'cbe_sa';
  if (s.includes('medhin') || s.includes('insurance')) return 'insurance';
  if (s.includes('adama')) return 'adama';
  if (s.includes('electric')) return 'electric';
  if (s.includes('bahir')) return 'bahirdar';
  if (s.includes('fasil')) return 'fasil';
  if (s.includes('bunna') && !s.includes('sidama')) return 'bunna';
  if (s.includes('coffee') && !s.includes('sidama')) return 'bunna';
  if (s.includes('george') || s.includes('giorgis')) return 'saintgeorge';
  if (s.includes('defence') || s.includes('mekelakeya') || s.includes('mechal')) return 'defence';
  if (s.includes('welwalo')) return 'welwalo';
  if (s.includes('dicha') || s.includes('wolaitta')) return 'wolaitta';
  if (s.includes('hosaena') || s.includes('hossana') || s.includes('hadiya')) return 'hosaena';
  if (s.includes('diredawa') || s.includes('dire dawa')) return 'diredawa';
  if (s.includes('chencha') || s.includes('gamo')) return 'gamochencha';
  if (s.includes('sidama')) return 'sidama';
  if (s.includes('hawassa')) return 'hawassa';
  if (s.includes('shaggar') || s.includes('sheger')) return 'shaggar';
  if (s.includes('negelle') || s.includes('negele')) return 'negelle';

  switch (id) {
    case '157333':
      return 'halaba';
    case '149377':
      return 'cbe_sa';
    case '146921':
      return 'insurance';
    case '141024':
      return 'adama';
    case '146920':
      return 'electric';
    case '141026':
      return 'bahirdar';
    case '141029':
      return 'fasil';
    case '141028':
      return 'bunna';
    case '141030':
      return 'saintgeorge';
    case '143767':
      return 'defence';
    case '149378':
      return 'welwalo';
    case '141032':
      return 'wolaitta';
    case '141033':
      return 'hosaena';
    case '157334':
      return 'gamochencha';
    case '141031':
      return 'sidama';
    case '141025':
      return 'hawassa';
    case '153586':
      return 'shaggar';
    case '153585':
      return 'negelle';
    default:
      return id || s.replace(/[^a-z0-9]/g, '');
  }
}

function canonicalizeTeamName(canonicalId: string, strTeam: string): string {
  switch (canonicalId) {
    case 'cbe_sa':
      return 'Ethiopia Nigd Bank (CBE SA)';
    case 'halaba':
      return 'Halaba Ketema (በርበሬዎቹ)';
    case 'insurance':
      return 'Ethiopian Medhin (Insurance)';
    case 'adama':
      return 'Adama Kenema SC';
    case 'electric':
      return 'Ethio Electric';
    case 'hosaena':
      return 'Hadiya Hossana';
    default:
      return strTeam || 'Team';
  }
}

async function parseSafeJson(response: Response): Promise<any | null> {
  if (!response.ok) return null;
  const text = await response.text();
  if (!text || text.trim().startsWith('<')) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export interface ParsedSportsDbMatchState {
  status: 'UPCOMING' | 'LIVE' | 'FINISHED';
  score?: { home: number; away: number };
  liveMinute?: number;
  livePeriod?: string;
}

const EXPLICIT_FINISHED_STATUSES = new Set([
  'FT',
  'AOT',
  'AET',
  'AP',
  'FINISHED',
  'MATCH FINISHED',
  'AWARDED',
  'AWD',
]);

const EXPLICIT_NOT_STARTED_STATUSES = new Set([
  'NS',
  'NOT STARTED',
  'TBD',
  'PST',
  'POSTPONED',
  'CANC',
  'CANCELLED',
  'ABD',
  'ABANDONED',
  'SUSP',
  'SUSPENDED',
]);

const EXPLICIT_LIVE_STATUSES = new Set([
  '1H',
  '2H',
  'HT',
  'ET',
  'BT',
  'PT',
  'LIVE',
  'INPLAY',
  'IN PLAY',
  'INT',
  'PAUSED',
  'PEN',
  'EXTRA TIME',
  'HALFTIME',
  'HALF TIME',
]);

function parseKickoffUtcMs(dateEvent?: string, strTime?: string): number | null {
  if (!dateEvent || typeof dateEvent !== 'string') return null;
  const cleanDate = dateEvent.trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) return null;
  const cleanTime =
    strTime && /^\d{2}:\d{2}/.test(strTime.trim())
      ? `${strTime.trim().slice(0, 5)}:00`
      : '12:00:00';
  const parsed = Date.parse(`${cleanDate}T${cleanTime}Z`);
  return Number.isFinite(parsed) ? parsed : null;
}

export function parseSportsDbMatchStatus(
  ev: {
    strStatus?: string | null;
    strProgress?: string | null;
    intHomeScore?: string | number | null;
    intAwayScore?: string | number | null;
    dateEvent?: string | null;
    strTime?: string | null;
  },
  nowMs: number = Date.now()
): ParsedSportsDbMatchState {
  const rawStatus = String(ev?.strStatus || '').trim().toUpperCase();
  const rawProgress = String(ev?.strProgress || '').trim().toUpperCase();

  const hStr = ev?.intHomeScore === null || ev?.intHomeScore === undefined ? '' : String(ev.intHomeScore).trim();
  const aStr = ev?.intAwayScore === null || ev?.intAwayScore === undefined ? '' : String(ev.intAwayScore).trim();
  const homeScore = hStr !== '' ? Number.parseInt(hStr, 10) : Number.NaN;
  const awayScore = aStr !== '' ? Number.parseInt(aStr, 10) : Number.NaN;
  const hasValidScores = Number.isFinite(homeScore) && Number.isFinite(awayScore);

  const isMinuteString = (val: string) => /^\d{1,3}(\+\d{1,2})?'?$/.test(val);
  const extractMinute = (val: string): number | undefined => {
    const m = val.match(/^(\d{1,3})/);
    if (!m) return undefined;
    const parsed = Number.parseInt(m[1], 10);
    return Number.isFinite(parsed) ? parsed : undefined;
  };

  const explicitLive =
    EXPLICIT_LIVE_STATUSES.has(rawStatus) ||
    isMinuteString(rawStatus) ||
    (!EXPLICIT_FINISHED_STATUSES.has(rawStatus) &&
      !EXPLICIT_NOT_STARTED_STATUSES.has(rawStatus) &&
      (EXPLICIT_LIVE_STATUSES.has(rawProgress) || isMinuteString(rawProgress)));

  if (explicitLive) {
    let livePeriod: string | undefined;
    if (rawStatus === 'HT' || rawStatus === 'HALFTIME' || rawStatus === 'HALF TIME' || rawProgress === 'HT') {
      livePeriod = 'HT';
    } else if (rawStatus === '1H' || rawProgress === '1H') {
      livePeriod = '1H';
    } else if (rawStatus === '2H' || rawProgress === '2H') {
      livePeriod = '2H';
    } else if (rawStatus === 'ET' || rawStatus === 'EXTRA TIME' || rawProgress === 'ET') {
      livePeriod = 'ET';
    } else if (rawStatus === 'PEN' || rawProgress === 'PEN') {
      livePeriod = 'PEN';
    } else {
      livePeriod = 'LIVE';
    }

    const liveMinute = extractMinute(rawProgress) ?? extractMinute(rawStatus);
    return {
      status: 'LIVE',
      score: hasValidScores ? { home: homeScore, away: awayScore } : { home: 0, away: 0 },
      ...(liveMinute !== undefined ? { liveMinute } : {}),
      ...(livePeriod ? { livePeriod } : {}),
    };
  }

  if (EXPLICIT_FINISHED_STATUSES.has(rawStatus)) {
    return {
      status: 'FINISHED',
      score: hasValidScores ? { home: homeScore, away: awayScore } : undefined,
    };
  }

  if (!hasValidScores) {
    return { status: 'UPCOMING' };
  }

  const kickoffMs = parseKickoffUtcMs(ev?.dateEvent || undefined, ev?.strTime || undefined);
  const LIVE_WINDOW_MS = 135 * 60 * 1000; // 2h 15m from scheduled kickoff

  if (kickoffMs !== null) {
    if (nowMs < kickoffMs) {
      return { status: 'UPCOMING' };
    }
    if (nowMs < kickoffMs + LIVE_WINDOW_MS) {
      const elapsedMins = Math.max(1, Math.min(90, Math.floor((nowMs - kickoffMs) / 60000)));
      return {
        status: 'LIVE',
        score: { home: homeScore, away: awayScore },
        liveMinute: elapsedMins,
        livePeriod: elapsedMins <= 45 ? '1H' : elapsedMins <= 60 ? 'HT' : '2H',
      };
    }
    return {
      status: 'FINISHED',
      score: { home: homeScore, away: awayScore },
    };
  }

  const todayUtc = new Date(nowMs).toISOString().slice(0, 10);
  if (ev?.dateEvent && String(ev.dateEvent).slice(0, 10) >= todayUtc) {
    return {
      status: 'LIVE',
      score: { home: homeScore, away: awayScore },
      livePeriod: 'LIVE',
    };
  }

  return {
    status: 'FINISHED',
    score: { home: homeScore, away: awayScore },
  };
}

const ADDIS_ABABA_CLUBS = new Set([
  'bunna',
  'electric',
  'saintgeorge',
  'defence',
  'cbe_sa',
  'insurance',
]);

export function resolveAuthoritativeEplVenue(
  homeTeamId: string,
  sportsDbVenue?: string | null,
  existingVenue?: string | null
): string {
  if (homeTeamId === 'halaba') {
    return 'Halaba Stadium, Halaba Kulito';
  }
  if (ADDIS_ABABA_CLUBS.has(homeTeamId)) {
    return 'Addis Ababa Stadium';
  }
  if (homeTeamId === 'hosaena') {
    return existingVenue || 'Abiy Hersamo Stadium, Hossana';
  }
  if (homeTeamId === 'hawassa' || homeTeamId === 'sidama') {
    return 'Hawassa University Stadium';
  }
  if (homeTeamId === 'gamochencha') {
    return existingVenue || 'Arba Minch University Stadium';
  }
  return existingVenue || sportsDbVenue || 'Hawassa University Stadium';
}

export async function fetchOfficialSportsDbStandings(options?: {
  season?: string;
  requireLiveSuccess?: boolean;
  fetchImpl?: typeof fetch;
}): Promise<FetchSportsDbStandingsResult> {
  const season = options?.season || '2026-2027';
  const requireLiveSuccess = Boolean(options?.requireLiveSuccess);
  const doFetch = options?.fetchImpl || fetch;

  const standingsMap = new Map<string, StandingTeamRecord>();
  BASE_EPL_STANDINGS.forEach((fb, idx) => {
    standingsMap.set(fb.teamId, { ...fb, form: [...fb.form], position: idx + 1 });
  });

  let data: any = null;
  let fetchError: string | undefined;

  try {
    const response = await doFetch(
      `https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=${encodeURIComponent(season)}`
    );
    if (!response.ok) {
      fetchError = `Upstream SportsDB returned HTTP ${response.status}.`;
    } else {
      data = await parseSafeJson(response);
      if (!data) {
        fetchError = 'Upstream SportsDB returned a non-JSON response.';
      }
    }
  } catch (err: unknown) {
    fetchError = err instanceof Error ? err.message : 'Network error reaching TheSportsDB.';
  }

  const hasLiveTable = Boolean(data && Array.isArray(data.table) && data.table.length > 0);
  if (!hasLiveTable) {
    if (requireLiveSuccess) {
      return {
        ok: false,
        liveFetched: false,
        source: 'TheSportsDB',
        standings: [],
        error: fetchError || 'TheSportsDB returned an empty standings table; existing standings preserved.',
      };
    }

    const fallbackList = Array.from(standingsMap.values())
      .filter((t) => t.teamId !== 'diredawa')
      .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor)
      .slice(0, 18)
      .map((item, idx) => ({ ...item, position: idx + 1 }));

    return {
      ok: true,
      liveFetched: false,
      source: 'TheSportsDB Fallback Seed',
      standings: fallbackList,
      error: fetchError,
    };
  }

  // When TheSportsDB free tier truncates lookuptable to Top 5 teams,
  // also pull recent finished matches beyond BASE_EPL_CUTOFF_DATE to keep clubs 6–18 live.
  if (data.table.length <= 5) {
    try {
      const seenEvents = new Map<string, any>();
      const pastRes = await doFetch(
        'https://www.thesportsdb.com/api/v1/json/123/eventspastleague.php?id=4959'
      );
      const pastJson = await parseSafeJson(pastRes);
      if (Array.isArray(pastJson?.events)) {
        for (const ev of pastJson.events) {
          if (ev?.idEvent) seenEvents.set(String(ev.idEvent), ev);
        }
      }

      // Inspect Round 7 onward incrementally, stopping as soon as a round has no finished events
      for (let r = 7; r <= 12; r++) {
        const rRes = await doFetch(
          `https://www.thesportsdb.com/api/v1/json/123/eventsround.php?id=4959&r=${r}&s=${encodeURIComponent(season)}`
        );
        const rJson = await parseSafeJson(rRes);
        const events = Array.isArray(rJson?.events) ? rJson.events : [];
        let roundHasFinished = false;
        for (const ev of events) {
          if (ev?.idEvent) seenEvents.set(String(ev.idEvent), ev);
          if (ev?.strStatus === 'FT' || ev?.strStatus === 'AOT') {
            roundHasFinished = true;
          }
        }
        if (!roundHasFinished) break;
      }

      const newlyCompleted = Array.from(seenEvents.values())
        .filter((ev: any) => {
          const parsedState = parseSportsDbMatchStatus(ev);
          const eventDate = String(ev.dateEvent || '');
          const evSeason = String(ev.strSeason || season);
          return parsedState.status === 'FINISHED' && evSeason === season && eventDate > BASE_EPL_CUTOFF_DATE;
        })
        .sort((a: any, b: any) => String(a.dateEvent || '').localeCompare(String(b.dateEvent || '')));

      for (const ev of newlyCompleted) {
        const homeCId = normalizeEplId(ev.strHomeTeam, ev.idHomeTeam);
        const awayCId = normalizeEplId(ev.strAwayTeam, ev.idAwayTeam);
        const homeScore = Number.parseInt(String(ev.intHomeScore ?? ''), 10);
        const awayScore = Number.parseInt(String(ev.intAwayScore ?? ''), 10);
        if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore)) continue;

        const homeRec = standingsMap.get(homeCId);
        const awayRec = standingsMap.get(awayCId);

        if (homeRec) {
          homeRec.played += 1;
          homeRec.goalsFor += homeScore;
          homeRec.goalsAgainst += awayScore;
          homeRec.goalDifference = homeRec.goalsFor - homeRec.goalsAgainst;
          if (homeScore > awayScore) {
            homeRec.won += 1;
            homeRec.points += 3;
            homeRec.form = [...homeRec.form, 'W' as const].slice(-5);
          } else if (homeScore < awayScore) {
            homeRec.lost += 1;
            homeRec.form = [...homeRec.form, 'L' as const].slice(-5);
          } else {
            homeRec.drawn += 1;
            homeRec.points += 1;
            homeRec.form = [...homeRec.form, 'D' as const].slice(-5);
          }
          if (ev.strHomeTeamBadge && !homeRec.isHalaba && !homeRec.badgeUrl?.includes('thesportsdb')) {
            homeRec.badgeUrl = String(ev.strHomeTeamBadge).replace('/tiny', '');
          }
        }

        if (awayRec) {
          awayRec.played += 1;
          awayRec.goalsFor += awayScore;
          awayRec.goalsAgainst += homeScore;
          awayRec.goalDifference = awayRec.goalsFor - awayRec.goalsAgainst;
          if (awayScore > homeScore) {
            awayRec.won += 1;
            awayRec.points += 3;
            awayRec.form = [...awayRec.form, 'W' as const].slice(-5);
          } else if (awayScore < homeScore) {
            awayRec.lost += 1;
            awayRec.form = [...awayRec.form, 'L' as const].slice(-5);
          } else {
            awayRec.drawn += 1;
            awayRec.points += 1;
            awayRec.form = [...awayRec.form, 'D' as const].slice(-5);
          }
          if (ev.strAwayTeamBadge && !awayRec.isHalaba && !awayRec.badgeUrl?.includes('thesportsdb')) {
            awayRec.badgeUrl = String(ev.strAwayTeamBadge).replace('/tiny', '');
          }
        }
      }
    } catch {
      // Ignore supplementary round reconciliation failures
    }
  }

  // Overlay authoritative live lookuptable rows
  data.table.forEach((item: any) => {
    const canonicalId = normalizeEplId(item.strTeam, item.idTeam);
    if (!canonicalId || canonicalId === 'diredawa') return;
    const isHalaba = canonicalId === 'halaba';
    const formLetters = String(item.strForm || 'DWD')
      .split('')
      .filter((c: string): c is 'W' | 'D' | 'L' => c === 'W' || c === 'D' || c === 'L');

    const existing: StandingTeamRecord = standingsMap.get(canonicalId) || {
      position: 1,
      teamId: canonicalId,
      teamName: item.strTeam || 'Team',
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ['D', 'W', 'D'],
      isHalaba,
      badgeUrl: undefined,
    };

    const parsedGf = Number.parseInt(String(item.intGoalsFor ?? ''), 10);
    const parsedGa = Number.parseInt(String(item.intGoalsAgainst ?? ''), 10);
    const goalsFor = Number.isFinite(parsedGf) ? parsedGf : existing.goalsFor;
    const goalsAgainst = Number.isFinite(parsedGa) ? parsedGa : existing.goalsAgainst;
    const parsedGd = Number.parseInt(String(item.intGoalDifference ?? ''), 10);

    const parsedPlayed = Number.parseInt(String(item.intPlayed ?? ''), 10);
    const parsedWon = Number.parseInt(String(item.intWin ?? ''), 10);
    const parsedDrawn = Number.parseInt(String(item.intDraw ?? ''), 10);
    const parsedLost = Number.parseInt(String(item.intLoss ?? ''), 10);
    const parsedPts = Number.parseInt(String(item.intPoints ?? ''), 10);

    standingsMap.set(canonicalId, {
      ...existing,
      teamId: canonicalId,
      teamName: canonicalizeTeamName(canonicalId, item.strTeam),
      played: Number.isFinite(parsedPlayed) ? parsedPlayed : existing.played,
      won: Number.isFinite(parsedWon) ? parsedWon : existing.won,
      drawn: Number.isFinite(parsedDrawn) ? parsedDrawn : existing.drawn,
      lost: Number.isFinite(parsedLost) ? parsedLost : existing.lost,
      goalsFor,
      goalsAgainst,
      goalDifference: Number.isFinite(parsedGd) ? parsedGd : goalsFor - goalsAgainst,
      points: Number.isFinite(parsedPts) ? parsedPts : existing.points,
      form: formLetters.length > 0 ? formLetters : existing.form,
      isHalaba,
      badgeUrl: isHalaba
        ? existing.badgeUrl
        : item.strBadge
        ? String(item.strBadge).replace('/tiny', '')
        : existing.badgeUrl,
    });
  });

  const list = Array.from(standingsMap.values())
    .filter((t) => t.teamId !== 'diredawa')
    .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);

  const rankedStandings = list.slice(0, 18).map((item, idx) => ({
    ...item,
    position: idx + 1,
  }));

  return {
    ok: true,
    liveFetched: true,
    source: `TheSportsDB Official Season ${season}`,
    standings: rankedStandings,
  };
}
