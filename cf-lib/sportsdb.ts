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

export const BASE_EPL_STANDINGS: Omit<StandingTeamRecord, 'position'>[] = [
  { teamId: 'negelle', teamName: 'Negele Arsi FC', played: 5, won: 3, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 2, goalDifference: 5, points: 11, form: ['D', 'D', 'W', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/3vj7z31760913824.png' },
  { teamId: 'defence', teamName: 'Mechal (Defence Force)', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, points: 10, form: ['W', 'L', 'W', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png' },
  { teamId: 'wolaitta', teamName: 'Wolaitta Dicha (Welayta Dicha)', played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, points: 8, form: ['D', 'D', 'L', 'W', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png' },
  { teamId: 'cbe_sa', teamName: 'Ethiopia Nigd Bank (CBE SA)', played: 4, won: 2, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 1, goalDifference: 2, points: 8, form: ['W', 'W', 'D', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png' },
  { teamId: 'halaba', teamName: 'Halaba Ketema (በርበሬዎቹ)', played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 9, goalDifference: -4, points: 8, form: ['D', 'W', 'D', 'L', 'W'], isHalaba: true, badgeUrl: '/images/halaba-city-fc-logo.png' },
  { teamId: 'bahirdar', teamName: 'Bahir Dar Kenema', played: 4, won: 2, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 7, form: ['W', 'L', 'W', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png' },
  { teamId: 'electric', teamName: 'Ethio Electric (EEPCO)', played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 7, form: ['L', 'D', 'W', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png' },
  { teamId: 'saintgeorge', teamName: 'Saint George SC (Kidus Giorgis)', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 6, form: ['D', 'L', 'D', 'D', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png' },
  { teamId: 'adama', teamName: 'Adama Kenema SC', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 6, form: ['W', 'D', 'D', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png' },
  { teamId: 'hawassa', teamName: 'Hawassa Kenema SC', played: 4, won: 1, drawn: 2, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 5, form: ['L', 'D', 'D', 'W'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png' },
  { teamId: 'shaggar', teamName: 'Shaggar City FC (Sheger Ketema)', played: 5, won: 1, drawn: 2, lost: 2, goalsFor: 4, goalsAgainst: 5, goalDifference: -1, points: 5, form: ['W', 'D', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png' },
  { teamId: 'insurance', teamName: 'Ethiopian Medhin (Insurance)', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 4, form: ['W', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png' },
  { teamId: 'hosaena', teamName: 'Hadiya Hossana', played: 4, won: 1, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 4, form: ['L', 'D', 'W', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png' },
  { teamId: 'bunna', teamName: 'Ethiopian Coffee SC (Bunna)', played: 5, won: 1, drawn: 1, lost: 3, goalsFor: 2, goalsAgainst: 6, goalDifference: -4, points: 4, form: ['L', 'W', 'L', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png' },
  { teamId: 'fasil', teamName: 'Fasil Kenema', played: 4, won: 0, drawn: 3, lost: 1, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 3, form: ['D', 'D', 'L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png' },
  { teamId: 'sidama', teamName: 'Sidama Coffee SC (Sidama Bunna)', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 0, goalsAgainst: 1, goalDifference: -1, points: 1, form: ['L', 'D'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png' },
  { teamId: 'welwalo', teamName: 'Welwalo Adigrat Univ.', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, goalDifference: -2, points: 1, form: ['D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png' },
  { teamId: 'gamochencha', teamName: 'Gamo Chencha', played: 4, won: 0, drawn: 1, lost: 3, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, points: 1, form: ['L', 'L', 'D', 'L'], isHalaba: false, badgeUrl: 'https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png' },
];

export function normalizeEplId(strTeam: string, idTeam?: string): string {
  const s = (strTeam || '').toLowerCase();
  const id = String(idTeam || '');
  if (s.includes('halaba') || id === '157333') return 'halaba';
  if (s.includes('cbe') || s.includes('nigd') || id === '149377') return 'cbe_sa';
  if (s.includes('medhin') || s.includes('insurance') || id === '146921') return 'insurance';
  if (s.includes('adama') || id === '141024') return 'adama';
  if (s.includes('electric') || id === '146920') return 'electric';
  if (s.includes('bahir') || (id === '141026' && s.includes('bahir')) || id === '141025') return 'bahirdar';
  if (s.includes('fasil') || id === '141026') return 'fasil';
  if (s.includes('bunna') || (s.includes('coffee') && !s.includes('sidama'))) return 'bunna';
  if (s.includes('george') || s.includes('giorgis')) return 'saintgeorge';
  if (s.includes('defence') || s.includes('mekelakeya') || s.includes('mechal') || id === '143767') return 'defence';
  if (s.includes('welwalo')) return 'welwalo';
  if (s.includes('dicha') || s.includes('wolaitta')) return 'wolaitta';
  if (s.includes('hosaena') || s.includes('hossana') || s.includes('hadiya')) return 'hosaena';
  if (s.includes('diredawa') || s.includes('dire dawa')) return 'diredawa';
  if (s.includes('chencha') || s.includes('gamo')) return 'gamochencha';
  if (s.includes('sidama')) return 'sidama';
  if (s.includes('hawassa')) return 'hawassa';
  if (s.includes('shaggar') || s.includes('sheger')) return 'shaggar';
  if (s.includes('negelle') || s.includes('negele') || id === '153585') return 'negelle';
  return id || s.replace(/[^a-z0-9]/g, '');
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
    standingsMap.set(fb.teamId, { ...fb, position: idx + 1 });
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
      data = await response.json();
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
      badgeUrl: item.strBadge ? String(item.strBadge).replace('/tiny', '') : existing.badgeUrl,
    });
  });

  if (data.table.length <= 5) {
    try {
      const sportsDbTeamIdToCanonical: Record<string, string> = {
        '153585': 'negelle',
        '143767': 'defence',
        '141032': 'wolaitta',
        '149377': 'cbe_sa',
        '157333': 'halaba',
        '141026': 'bahirdar',
        '141024': 'adama',
        '146921': 'insurance',
        '153586': 'shaggar',
        '146920': 'electric',
        '141028': 'bunna',
        '141029': 'fasil',
        '141030': 'saintgeorge',
        '141025': 'hawassa',
        '149378': 'welwalo',
        '141033': 'hosaena',
        '141031': 'sidama',
        '157334': 'gamochencha',
      };

      for (let r = 1; r <= 5; r++) {
        const rRes = await doFetch(
          `https://www.thesportsdb.com/api/v1/json/123/eventsround.php?id=4959&r=${r}&s=${encodeURIComponent(season)}`
        );
        if (rRes.ok) {
          const rJson: any = await rRes.json();
          if (Array.isArray(rJson?.events)) {
            rJson.events.forEach((ev: any) => {
              if (ev.strStatus === 'FT' && ev.intHomeScore !== null && ev.intAwayScore !== null) {
                const homeCId =
                  sportsDbTeamIdToCanonical[String(ev.idHomeTeam)] || normalizeEplId(ev.strHomeTeam, ev.idHomeTeam);
                const awayCId =
                  sportsDbTeamIdToCanonical[String(ev.idAwayTeam)] || normalizeEplId(ev.strAwayTeam, ev.idAwayTeam);
                const homeRec = standingsMap.get(homeCId);
                const awayRec = standingsMap.get(awayCId);
                if (homeRec && ev.strHomeTeamBadge && !homeRec.badgeUrl?.includes('thesportsdb')) {
                  homeRec.badgeUrl = String(ev.strHomeTeamBadge).replace('/tiny', '');
                }
                if (awayRec && ev.strAwayTeamBadge && !awayRec.badgeUrl?.includes('thesportsdb')) {
                  awayRec.badgeUrl = String(ev.strAwayTeamBadge).replace('/tiny', '');
                }
              }
            });
          }
        }
      }
    } catch {
      // Ignore supplementary badge enrichment failures
    }
  }

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
