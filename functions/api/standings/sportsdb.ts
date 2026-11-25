/**
 * Cloudflare Pages Function: /api/standings/sportsdb
 * Fetches official Ethiopian Premier League standings from TheSportsDB (League ID 4959)
 * and normalizes club records, points, and badges for all 18 clubs.
 */

import { PagesContext } from '../../../cf-lib/d1';
import { fetchOfficialSportsDbStandings, StandingTeamRecord } from '../../../cf-lib/sportsdb';

// In-isolate cache with 3-minute TTL
let cachedStandings: StandingTeamRecord[] | null = null;
let cachedSeason = '2026-2027';
let lastStandingsSyncTime = 0;

export async function onRequestGet(context?: PagesContext): Promise<Response> {
  const jsonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=180, s-maxage=180',
  };

  try {
    const url = context?.request ? new URL(context.request.url) : null;
    const season = url?.searchParams.get('season')?.trim() || '2026-2027';
    const strict = url?.searchParams.get('strict') === '1' || url?.searchParams.get('strict') === 'true';
    const bypassCache = url?.searchParams.get('refresh') === '1' || strict;

    const now = Date.now();
    if (
      !bypassCache &&
      cachedStandings &&
      cachedStandings.length >= 18 &&
      cachedSeason === season &&
      now - lastStandingsSyncTime < 180000
    ) {
      return new Response(
        JSON.stringify({
          success: true,
          liveFetched: true,
          source: 'TheSportsDB (Cached)',
          league: 'Ethiopian Premier League',
          leagueId: '4959',
          season,
          round: 'Round 5 Completed',
          count: cachedStandings.length,
          standings: cachedStandings,
        }),
        { status: 200, headers: jsonHeaders }
      );
    }

    const result = await fetchOfficialSportsDbStandings({
      season,
      requireLiveSuccess: strict,
    });

    if (!result.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          liveFetched: false,
          error: result.error || 'Failed to sync standings from TheSportsDB',
        }),
        {
          status: 502,
          headers: {
            ...jsonHeaders,
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    if (result.liveFetched && result.standings.length >= 18) {
      cachedStandings = result.standings;
      cachedSeason = season;
      lastStandingsSyncTime = Date.now();
    }

    return new Response(
      JSON.stringify({
        success: true,
        liveFetched: result.liveFetched,
        source: result.source,
        league: 'Ethiopian Premier League',
        leagueId: '4959',
        season,
        round: 'Round 5 Completed',
        count: result.standings.length,
        standings: result.standings,
      }),
      { status: 200, headers: jsonHeaders }
    );
  } catch (err: any) {
    console.warn('[Notice fetching standings from TheSportsDB]:', err?.message || err);
    return new Response(
      JSON.stringify({
        success: false,
        liveFetched: false,
        error: err?.message || 'Failed to sync standings from TheSportsDB',
      }),
      {
        status: 500,
        headers: {
          ...jsonHeaders,
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}

export const onRequest = onRequestGet;
