import { useState, useEffect, useCallback } from 'react';
import { Match } from '../types';
import { db } from '../firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { initialMatches } from '../data/mockData';

const FIXTURES_CACHE_KEY = 'halaba_matches_epl_2026_27_v18';

export interface UseFixturesResult {
  fixtures: Match[];
  matches: Match[];
  isOnline: boolean;
  isFetching: boolean;
  isCached: boolean;
  lastUpdated: Date | null;
  error: string | null;
  refresh: () => Promise<void>;
}

// Helper to strictly identify Halaba City FC matches
const isHalabaMatch = (m: any): boolean =>
  Boolean(
    m &&
    (m.homeTeam?.isHalaba ||
      m.awayTeam?.isHalaba ||
      m.homeTeam?.id === 'halaba' ||
      m.awayTeam?.id === 'halaba' ||
      m.homeTeam?.name?.toLowerCase().includes('halaba') ||
      m.awayTeam?.name?.toLowerCase().includes('halaba'))
  );

/**
 * Loads fixtures immediately from localStorage cache on initial render.
 * Synchronizes with TheSportsDB API endpoint (/api/fixtures/sportsdb) and Firestore in the background.
 * Strictly guarantees ONLY Halaba City FC fixtures and results are returned.
 */
export function useFixtures(): UseFixturesResult {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  const [fixtures, setFixtures] = useState<Match[]>(() => {
    // Instant synchronous cache retrieval on initial mount
    try {
      const cached = localStorage.getItem(FIXTURES_CACHE_KEY);
      if (cached) {
        const parsed: Match[] = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const halabaOnly = parsed.filter(isHalabaMatch);
          if (halabaOnly.length > 0) return halabaOnly;
        }
      }
    } catch (e) {
      console.warn('[useFixtures] Could not parse localStorage cache:', e);
    }
    return initialMatches.filter(isHalabaMatch);
  });

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isCached, setIsCached] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(() => new Date());
  const [error, setError] = useState<string | null>(null);

  // Background fetch function that safely updates state and overwrites localStorage
  const fetchFreshData = useCallback(async () => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      // Gracefully serve cached data without network error
      setIsFetching(false);
      return;
    }

    setIsFetching(true);
    setError(null);

    // 1. First priority: Fetch live synced data from TheSportsDB backend endpoint
    try {
      const res = await fetch('/api/fixtures/sportsdb');
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.fixtures) && json.fixtures.length > 0) {
          const halabaOnly: Match[] = json.fixtures.filter(isHalabaMatch);
          if (halabaOnly.length > 0) {
            setFixtures(halabaOnly);
            setIsCached(false);
            setLastUpdated(new Date());
            try {
              localStorage.setItem(FIXTURES_CACHE_KEY, JSON.stringify(halabaOnly));
            } catch (err) {
              console.warn('[useFixtures] Cache write notice:', err);
            }
            setIsFetching(false);
            return;
          }
        }
      }
    } catch (apiErr) {
      console.warn('[useFixtures] TheSportsDB endpoint fetch notice, checking fallback:', apiErr);
    }

    // 2. Second priority: Firestore real-time collection fallback
    try {
      const matchesRef = collection(db, 'matches');
      const snapshot = await getDocs(matchesRef);

      if (!snapshot.empty) {
        const remoteMatches: Match[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            competition: data.competition || 'ETHIOPIAN_PREMIER_LEAGUE',
            competitionName: data.competitionName || 'Ethiopian Premier League',
            date: data.date || '',
            kickoffTime: data.kickoffTime || '15:00',
            venue: data.venue || 'Hawassa University Stadium',
            homeTeam: data.homeTeam || { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
            awayTeam: data.awayTeam || { id: 'away', name: 'Away Team', isHalaba: false },
            status: data.status || 'UPCOMING',
            score: data.score,
            halftimeScore: data.halftimeScore,
            round: data.round,
            attendance: data.attendance,
            referee: data.referee,
            scorers: data.scorers,
            summary: data.summary || '',
            liveMinute: data.liveMinute,
            livePeriod: data.livePeriod,
            liveEvents: data.liveEvents,
          } as Match;
        }).filter(isHalabaMatch);

        // Ensure canonical round matches are present
        initialMatches.forEach((initMatch) => {
          if (!remoteMatches.some((m) => m.id === initMatch.id)) {
            remoteMatches.push({ ...initMatch });
          }
        });

        // Chronological sort
        remoteMatches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Update state and overwrite localStorage cache with fresh payload
        setFixtures(remoteMatches);
        setIsCached(false);
        setLastUpdated(new Date());

        try {
          localStorage.setItem(FIXTURES_CACHE_KEY, JSON.stringify(remoteMatches));
        } catch (storageErr) {
          console.warn('[useFixtures] localStorage write quota warning:', storageErr);
        }
      }
    } catch (fetchErr) {
      console.warn('[useFixtures] Background fetch notice (serving cache):', fetchErr);
      setError(fetchErr instanceof Error ? fetchErr.message : 'Network notice');
    } finally {
      setIsFetching(false);
    }
  }, []);

  // Online / offline event listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setError(null);
      fetchFreshData();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsFetching(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial background fetch upon mounting if online
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      fetchFreshData();
    }

    // Subscribe to Firestore updates
    let unsubscribeFirestore: (() => void) | undefined;
    try {
      const matchesRef = collection(db, 'matches');
      unsubscribeFirestore = onSnapshot(
        matchesRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: Match[] = snapshot.docs.map((docSnap) => {
              const data = docSnap.data();
              return {
                id: docSnap.id,
                competition: data.competition || 'ETHIOPIAN_PREMIER_LEAGUE',
                competitionName: data.competitionName || 'Ethiopian Premier League',
                date: data.date || '',
                kickoffTime: data.kickoffTime || '15:00',
                venue: data.venue || 'Hawassa University Stadium',
                homeTeam: data.homeTeam || { id: 'halaba', name: 'Halaba Ketema', isHalaba: true },
                awayTeam: data.awayTeam || { id: 'away', name: 'Away Team', isHalaba: false },
                status: data.status || 'UPCOMING',
                score: data.score,
                halftimeScore: data.halftimeScore,
                round: data.round,
                attendance: data.attendance,
                referee: data.referee,
                scorers: data.scorers,
                summary: data.summary || '',
                liveMinute: data.liveMinute,
                livePeriod: data.livePeriod,
                liveEvents: data.liveEvents,
              } as Match;
            }).filter(isHalabaMatch);

            initialMatches.forEach((initMatch) => {
              if (!list.some((m) => m.id === initMatch.id)) {
                list.push({ ...initMatch });
              }
            });

            list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

            setFixtures(list);
            setIsCached(false);
            setLastUpdated(new Date());

            try {
              localStorage.setItem(FIXTURES_CACHE_KEY, JSON.stringify(list));
            } catch (err) {
              // ignore
            }
          }
        },
        (error) => {
          if (typeof navigator !== 'undefined' && !navigator.onLine) {
            return;
          }
          console.debug('[useFixtures] Snapshot listener notice:', error);
        }
      );
    } catch {
      // ignore
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (unsubscribeFirestore) {
        unsubscribeFirestore();
      }
    };
  }, [fetchFreshData]);

  return {
    fixtures,
    matches: fixtures,
    isOnline,
    isFetching,
    isCached,
    lastUpdated,
    error,
    refresh: fetchFreshData,
  };
}
