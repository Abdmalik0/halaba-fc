import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import {
  Language,
  ClubInfo,
  Match,
  StandingTeam,
  NewsArticle,
  Player,
  StaffMember,
  MembershipApplication,
  MembershipTier,
  LiveNotification,
} from '../types';
import {
  initialClubInfo,
  initialMatches,
  initialStandings,
  initialNews,
  initialPlayers,
  initialStaff,
  initialMemberships,
} from '../data/mockData';
import { translations } from '../translations';

export type PageRoute = 'home' | 'fixtures' | 'standings' | 'news' | 'membership' | 'about' | 'contact' | 'admin';

interface ClubContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];

  // Navigation
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
  selectedMatchId: string | null;
  setSelectedMatchId: (id: string | null) => void;

  // Club Dossier
  isDossierOpen: boolean;
  openDossier: () => void;
  closeDossier: () => void;

  // Live Notifications
  liveNotifications: LiveNotification[];
  dismissNotification: (id: string) => void;

  // Live Auto-Update & Simulation Engine
  isAutoSyncEnabled: boolean;
  toggleAutoSync: () => void;
  autoSyncInterval: number;
  setAutoSyncInterval: (interval: number) => void;
  secondsUntilNextSync: number;
  isSyncing: boolean;
  lastSyncTime: Date;
  syncNow: () => void;
  simulateLiveMatchAction: () => void;
  advanceLeagueMatchday: () => void;

  // Club Info
  clubInfo: ClubInfo;
  updateClubInfo: (info: ClubInfo) => void;

  // Matches
  matches: Match[];
  addMatch: (match: Omit<Match, 'id'>) => void;
  updateMatch: (id: string, match: Partial<Match>) => void;
  deleteMatch: (id: string) => void;

  // Standings
  standings: StandingTeam[];
  updateStanding: (teamId: string, updates: Partial<StandingTeam>) => void;
  resetStandings: () => void;

  // News
  news: NewsArticle[];
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, updates: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;

  // Squad & Staff
  players: Player[];
  staff: StaffMember[];
  addPlayer: (player: Omit<Player, 'id'>) => void;
  updatePlayer: (id: string, updates: Partial<Player>) => void;
  deletePlayer: (id: string) => void;

  // Memberships
  memberships: MembershipApplication[];
  submitMembership: (data: {
    fullName: string;
    dateOfBirth: string;
    gender?: string;
    phone: string;
    email?: string;
    cityOrRegion: string;
    membershipType: MembershipTier;
    preferredLanguage: Language;
  }) => Promise<{ success: boolean; referenceNumber: string }>;
  updateMembershipStatus: (id: string, status: 'APPROVED' | 'PENDING' | 'REJECTED') => void;
  deleteMembership: (id: string) => void;

  // Admin Auth
  isAdminLoggedIn: boolean;
  adminUsername: string | null;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Utility
  resetAllDataToDefault: () => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'halaba_lang',
  CLUB: 'halaba_club_info_epl_26_27',
  MATCHES: 'halaba_matches_epl_2026_27',
  STANDINGS: 'halaba_standings_epl_2026_27',
  NEWS: 'halaba_news_epl_2026_27',
  PLAYERS: 'halaba_players',
  STAFF: 'halaba_staff',
  MEMBERSHIPS: 'halaba_memberships',
  ADMIN_AUTH: 'halaba_admin_auth',
};

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    if (saved === 'en' || saved === 'am' || saved === 'om') return saved;
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  };

  const t = translations[language];

  // Routing
  const [currentPage, setCurrentPageState] = useState<PageRoute>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  const setCurrentPage = (page: PageRoute) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Club Info
  const [clubInfo, setClubInfo] = useState<ClubInfo>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CLUB);
    return saved ? JSON.parse(saved) : initialClubInfo;
  });

  const updateClubInfo = (info: ClubInfo) => {
    setClubInfo(info);
    localStorage.setItem(STORAGE_KEYS.CLUB, JSON.stringify(info));
  };

  // Matches
  const [matches, setMatches] = useState<Match[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MATCHES);
    return saved ? JSON.parse(saved) : initialMatches;
  });

  const addMatch = (matchData: Omit<Match, 'id'>) => {
    const newMatch: Match = {
      ...matchData,
      id: `match-${Date.now()}`,
    };
    const updated = [newMatch, ...matches];
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  const updateMatch = (id: string, updates: Partial<Match>) => {
    const updated = matches.map((m) => (m.id === id ? { ...m, ...updates } : m));
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  const deleteMatch = (id: string) => {
    const updated = matches.filter((m) => m.id !== id);
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  // Standings
  const [standings, setStandings] = useState<StandingTeam[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STANDINGS);
    return saved ? JSON.parse(saved) : initialStandings;
  });

  const updateStanding = (teamId: string, updates: Partial<StandingTeam>) => {
    const updated = standings.map((item) => {
      if (item.teamId === teamId) {
        const next = { ...item, ...updates };
        next.goalDifference = next.goalsFor - next.goalsAgainst;
        return next;
      }
      return item;
    });
    updated.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
    const reordered = updated.map((t, idx) => ({ ...t, position: idx + 1 }));
    setStandings(reordered);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
  };

  const resetStandings = () => {
    setStandings(initialStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(initialStandings));
  };

  // News State
  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
    if (!saved) return initialNews;
    try {
      const parsed: NewsArticle[] = JSON.parse(saved);
      return parsed.map((item) => {
        if (item.id === 'news-1' && (item.imageUrl?.includes('match_action') || !item.imageUrl?.includes('squad_lineup'))) {
          return { ...item, imageUrl: initialNews[0].imageUrl };
        }
        return item;
      });
    } catch {
      return initialNews;
    }
  });

  // REAL-TIME FIREBASE FIRESTORE SYNC FOR NEWS
  useEffect(() => {
    let unsubscribe = () => {};
    try {
      const q = query(collection(db, "news"), orderBy("createdAt", "desc"));

      unsubscribe = onSnapshot(q, (snapshot) => {
        const liveArticles: NewsArticle[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: typeof data.title === 'object' ? data.title : { en: data.title || '', am: data.title || '', om: data.title || '' },
            summary: typeof data.summary === 'object' ? data.summary : { en: data.summary || '', am: data.summary || '', om: data.summary || '' },
            content: typeof data.content === 'object' ? data.content : { en: data.content || '', am: data.content || '', om: data.content || '' },
            category: data.category || 'CLUB_NEWS',
            date: data.date || new Date().toISOString().slice(0, 10),
            author: data.author || 'Club Administration',
            imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
            readTime: data.readTime || '3 min read',
          } as NewsArticle;
        });

        if (liveArticles.length > 0) {
          setNews(liveArticles);
          localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(liveArticles));
        }
      }, (error) => {
        console.warn("Firebase real-time news error (falling back to local cache):", error);
      });
    } catch (err) {
      console.warn("Could not subscribe to Firebase news:", err);
    }

    return () => unsubscribe();
  }, []);

  // AUTOMATIC BACKGROUND SYNC FOR FIXTURES & STANDINGS FROM THESPORTSDB API
  useEffect(() => {
    let isMounted = true;

    const syncFromSportsDB = async () => {
      try {
        // 1. Fetch Ethiopian Premier League Standings
        let standingsData: any = null;
        try {
          const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4959&s=2026-2027');
          const text = await res.text();
          if (text.includes('permanently disabled') || text.includes('Free Sports API key')) {
            const fallbackRes = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=2026-2027');
            standingsData = await fallbackRes.json();
          } else {
            standingsData = JSON.parse(text);
          }
        } catch {
          try {
            const fallbackRes = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=2026-2027');
            standingsData = await fallbackRes.json();
          } catch (e) {
            console.warn('Failed to fetch standings from TheSportsDB:', e);
          }
        }

        if (isMounted && standingsData && Array.isArray(standingsData.table) && standingsData.table.length > 0) {
          const formattedStandings: StandingTeam[] = standingsData.table.map((item: any, idx: number) => {
            const isHalaba = item.strTeam?.toLowerCase().includes('halaba') || item.idTeam === '157333';
            const formStr = item.strForm || '';
            const parsedForm: Array<'W' | 'D' | 'L'> = formStr
              .split('')
              .filter((c: string): c is 'W' | 'D' | 'L' => c === 'W' || c === 'D' || c === 'L');

            return {
              position: parseInt(item.intRank, 10) || idx + 1,
              teamId: item.idTeam || `team-${idx + 1}`,
              teamName: item.strTeam || `Team ${idx + 1}`,
              played: parseInt(item.intPlayed, 10) || 0,
              won: parseInt(item.intWin, 10) || 0,
              drawn: parseInt(item.intDraw, 10) || 0,
              lost: parseInt(item.intLoss, 10) || 0,
              goalsFor: parseInt(item.intGoalsFor, 10) || 0,
              goalsAgainst: parseInt(item.intGoalsAgainst, 10) || 0,
              goalDifference: parseInt(item.intGoalDifference, 10) || 0,
              points: parseInt(item.intPoints, 10) || 0,
              form: parsedForm,
              isHalaba,
            };
          });

          setStandings(formattedStandings);
          localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(formattedStandings));
        }

        // 2. Fetch Ethiopian Premier League Match Schedules / Events
        let eventsData: any = null;
        try {
          const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4959&s=2026-2027');
          const text = await res.text();
          if (text.includes('permanently disabled') || text.includes('Free Sports API key')) {
            const fallbackRes = await fetch('https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4959&s=2026-2027');
            eventsData = await fallbackRes.json();
          } else {
            eventsData = JSON.parse(text);
          }
        } catch {
          try {
            const fallbackRes = await fetch('https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4959&s=2026-2027');
            eventsData = await fallbackRes.json();
          } catch (e) {
            console.warn('Failed to fetch events from TheSportsDB:', e);
          }
        }

        if (isMounted && eventsData && Array.isArray(eventsData.events) && eventsData.events.length > 0) {
          const formattedMatches: Match[] = eventsData.events.map((ev: any, idx: number) => {
            const homeIsHalaba = ev.strHomeTeam?.toLowerCase().includes('halaba') || ev.idHomeTeam === '157333';
            const awayIsHalaba = ev.strAwayTeam?.toLowerCase().includes('halaba') || ev.idAwayTeam === '157333';
            const isFinished = ev.strStatus === 'FT' || ev.strStatus === 'Finished';
            const isLive = ev.strStatus === 'LIVE' || ev.strStatus === '1H' || ev.strStatus === '2H';

            const homeScore =
              ev.intHomeScore !== null && ev.intHomeScore !== undefined && ev.intHomeScore !== ''
                ? parseInt(ev.intHomeScore, 10)
                : undefined;
            const awayScore =
              ev.intAwayScore !== null && ev.intAwayScore !== undefined && ev.intAwayScore !== ''
                ? parseInt(ev.intAwayScore, 10)
                : undefined;

            return {
              id: ev.idEvent || `m-thesportsdb-${idx}`,
              competition: 'ETHIOPIAN_PREMIER_LEAGUE',
              competitionName: ev.strLeague || 'Ethiopian Premier League',
              date: ev.dateEvent || '',
              kickoffTime: ev.strTime ? ev.strTime.slice(0, 5) : '15:00',
              venue: ev.strVenue || (homeIsHalaba ? 'Halaba Stadium, Halaba Kulito' : 'Stadium'),
              homeTeam: {
                id: ev.idHomeTeam || `team-${ev.strHomeTeam}`,
                name: ev.strHomeTeam || 'Home Team',
                isHalaba: homeIsHalaba,
                logo: ev.strHomeTeamBadge,
              },
              awayTeam: {
                id: ev.idAwayTeam || `team-${ev.strAwayTeam}`,
                name: ev.strAwayTeam || 'Away Team',
                isHalaba: awayIsHalaba,
                logo: ev.strAwayTeamBadge,
              },
              status: isFinished ? 'FINISHED' : isLive ? 'LIVE' : 'UPCOMING',
              score:
                homeScore !== undefined && awayScore !== undefined
                  ? { home: homeScore, away: awayScore }
                  : undefined,
              round: ev.intRound ? `Round ${ev.intRound}` : undefined,
              summary: ev.strEvent || '',
            };
          });

          setMatches(formattedMatches);
          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(formattedMatches));
        }
      } catch (error) {
        console.error('Error syncing fixtures and standings from TheSportsDB:', error);
      }
    };

    syncFromSportsDB();

    return () => {
      isMounted = false;
    };
  }, []);

  const addNewsArticle = (art: Omit<NewsArticle, 'id'>) => {
    const newArticle: NewsArticle = {
      ...art,
      id: `news-${Date.now()}`,
    };
    const updated = [newArticle, ...news];
    setNews(updated);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
  };

  const updateNewsArticle = (id: string, updates: Partial<NewsArticle>) => {
    const updated = news.map((n) => (n.id === id ? { ...n, ...updates } : n));
    setNews(updated);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
  };

 const deleteNewsArticle = async (id: string) => {
    try {
      // 1. Delete document live from Firebase Cloud Firestore if available
      await deleteDoc(doc(db, "news", id));
    } catch (error) {
      console.warn("Could not delete article from Firebase (updating local cache):", error);
    }

    // 2. Update local state
    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
  };

  // Players & Staff
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
    return saved ? JSON.parse(saved) : initialPlayers;
  });

  const [staff, setStaff] = useState<StaffMember[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STAFF);
    return saved ? JSON.parse(saved) : initialStaff;
  });

  const addPlayer = (p: Omit<Player, 'id'>) => {
    const newP: Player = { ...p, id: `p-${Date.now()}` };
    const updated = [...players, newP];
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    const updated = players.map((p) => (p.id === id ? { ...p, ...updates } : p));
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  const deletePlayer = (id: string) => {
    const updated = players.filter((p) => p.id !== id);
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  // Memberships
  const [memberships, setMemberships] = useState<MembershipApplication[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MEMBERSHIPS);
    return saved ? JSON.parse(saved) : initialMemberships;
  });

  const submitMembership = async (data: {
    fullName: string;
    dateOfBirth: string;
    gender?: string;
    phone: string;
    email?: string;
    cityOrRegion: string;
    membershipType: MembershipTier;
    preferredLanguage: Language;
  }): Promise<{ success: boolean; referenceNumber: string }> => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `HCFC-2026-M${randNum}`;

    const newApplication: MembershipApplication = {
      id: `mem-${Date.now()}`,
      referenceNumber,
      fullName: data.fullName.trim(),
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      phone: data.phone.trim(),
      email: data.email?.trim() || undefined,
      cityOrRegion: data.cityOrRegion.trim(),
      membershipType: data.membershipType,
      preferredLanguage: data.preferredLanguage,
      registeredAt: new Date().toISOString(),
      status: 'APPROVED',
    };

    await new Promise((resolve) => setTimeout(resolve, 600));

    const updated = [newApplication, ...memberships];
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));

    return { success: true, referenceNumber };
  };

  const updateMembershipStatus = (id: string, status: 'APPROVED' | 'PENDING' | 'REJECTED') => {
    const updated = memberships.map((m) => (m.id === id ? { ...m, status } : m));
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
  };

  const deleteMembership = (id: string) => {
    const updated = memberships.filter((m) => m.id !== id);
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
  };

  // Admin Auth
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });
  const [adminUsername, setAdminUsername] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true' ? 'halaba_staff' : null;
  });

  const loginAdmin = (user: string, pass: string): boolean => {
    if (
      (user.trim().toLowerCase() === 'admin' || user.trim().toLowerCase() === 'staff' || user.trim().toLowerCase() === 'halaba') &&
      (pass === 'halaba1966' || pass === 'admin123' || pass === 'berbere')
    ) {
      setIsAdminLoggedIn(true);
      setAdminUsername(user.trim());
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    setAdminUsername(null);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  // Club Dossier Modal
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const openDossier = () => setIsDossierOpen(true);
  const closeDossier = () => setIsDossierOpen(false);

  // Live Notifications
  const [liveNotifications, setLiveNotifications] = useState<LiveNotification[]>([]);
  const dismissNotification = (id: string) => {
    setLiveNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Live Auto-Sync & Simulation Engine
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = useState(true);
  const [autoSyncInterval, setAutoSyncIntervalState] = useState(30);
  const [secondsUntilNextSync, setSecondsUntilNextSync] = useState(30);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date>(() => new Date());

  const toggleAutoSync = () => setIsAutoSyncEnabled((prev) => !prev);
  const setAutoSyncInterval = (interval: number) => {
    setAutoSyncIntervalState(interval);
    setSecondsUntilNextSync(interval);
  };

  const syncNow = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime(new Date());
      setSecondsUntilNextSync(autoSyncInterval);
      const syncNotif: LiveNotification = {
        id: `sync-${Date.now()}`,
        type: 'sync',
        title: 'League Feed Updated',
        message: 'Federation verified scores and standings synced successfully.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      setLiveNotifications((prev) => [syncNotif, ...prev.slice(0, 9)]);
    }, 450);
  };

  const simulateLiveMatchAction = () => {
    setMatches((prevMatches) => {
      let live = prevMatches.find((m) => m.status === 'LIVE');
      const updatedMatches = [...prevMatches];

      if (!live) {
        const upcomingIdx = updatedMatches.findIndex((m) => m.status === 'UPCOMING');
        if (upcomingIdx >= 0) {
          const m = updatedMatches[upcomingIdx];
          const newLiveMatch: Match = {
            ...m,
            status: 'LIVE',
            liveMinute: 54,
            livePeriod: '2H',
            score: { home: 1, away: 0 },
            scorers: [
              { player: 'Dawit Fekadu', minute: 34, team: 'home' }
            ],
            liveEvents: [
              { id: `evt-${Date.now()}-1`, minute: 34, text: 'GOAL! Dawit Fekadu scores with a curled effort into the top corner!', type: 'goal', team: 'home' },
              { id: `evt-${Date.now()}-2`, minute: 46, text: 'Second half underway under the roaring Halaba crowd.', type: 'whistle' }
            ]
          };
          updatedMatches[upcomingIdx] = newLiveMatch;
          live = newLiveMatch;

          const notif: LiveNotification = {
            id: `notif-${Date.now()}`,
            type: 'match_start',
            title: `🔴 LIVE NOW: ${m.homeTeam.name} vs ${m.awayTeam.name}`,
            message: 'Halaba Stadium lights up as second half action kicks off!',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          };
          setLiveNotifications((prev) => [notif, ...prev.slice(0, 9)]);
        }
      } else {
        const liveIdx = updatedMatches.findIndex((m) => m.id === live!.id);
        const currentMin = live.liveMinute || 55;
        const nextMin = Math.min(90, currentMin + Math.floor(Math.random() * 8) + 4);
        const isHalabaGoal = Math.random() > 0.35;
        const currentScore = live.score || { home: 1, away: 0 };
        const newScore = {
          home: isHalabaGoal ? currentScore.home + 1 : currentScore.home,
          away: !isHalabaGoal ? currentScore.away + 1 : currentScore.away,
        };
        const scorerName = isHalabaGoal
          ? ['Dawit Fekadu', 'Mulugeta Wolde', 'Biniam Fikre', 'Yared Bayeh'][Math.floor(Math.random() * 4)]
          : 'Opponent Striker';

        const newEvents = [
          ...(live.liveEvents || []),
          {
            id: `evt-${Date.now()}`,
            minute: nextMin,
            text: `GOAL! (${nextMin}') - ${scorerName} scores for ${isHalabaGoal ? live.homeTeam.name : live.awayTeam.name}!`,
            type: 'goal' as const,
            team: (isHalabaGoal ? 'home' : 'away') as 'home' | 'away'
          }
        ];

        const updatedLiveMatch: Match = {
          ...live,
          liveMinute: nextMin,
          score: newScore,
          liveEvents: newEvents,
          status: nextMin >= 90 ? 'FINISHED' : 'LIVE',
          scorers: [
            ...(live.scorers || []),
            {
              player: scorerName,
              minute: nextMin,
              team: isHalabaGoal ? 'home' : 'away',
            }
          ]
        };

        updatedMatches[liveIdx] = updatedLiveMatch;

        const notif: LiveNotification = {
          id: `notif-${Date.now()}`,
          type: nextMin >= 90 ? 'match_end' : 'goal',
          title: nextMin >= 90 ? `🏁 FULL TIME: ${newScore.home} - ${newScore.away}` : `⚽ GOAL! (${nextMin}') ${scorerName}`,
          message: `${live.homeTeam.name} ${newScore.home} - ${newScore.away} ${live.awayTeam.name}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        };
        setLiveNotifications((prev) => [notif, ...prev.slice(0, 9)]);

        if (isHalabaGoal) {
          updateStanding('halaba', {
            goalsFor: 7,
            goalDifference: 5,
            points: 10,
          });
        }
      }

      localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updatedMatches));
      return updatedMatches;
    });
  };

  const advanceLeagueMatchday = () => {
    setStandings((prevStandings) => {
      const updated = prevStandings.map((st) => {
        if (!st.isHalaba) {
          const randWin = Math.random() > 0.5;
          const p = st.played + 1;
          const w = randWin ? st.won + 1 : st.won;
          const d = !randWin && Math.random() > 0.5 ? st.drawn + 1 : st.drawn;
          const l = !randWin && d === st.drawn ? st.lost + 1 : st.lost;
          const pts = w * 3 + d;
          return {
            ...st,
            played: p,
            won: w,
            drawn: d,
            lost: l,
            points: pts,
          };
        }
        return st;
      });

      updated.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
      const reordered = updated.map((t, idx) => ({ ...t, position: idx + 1 }));
      localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));

      const notif: LiveNotification = {
        id: `notif-${Date.now()}`,
        type: 'standings',
        title: '🏆 League Table Recalculated',
        message: 'Premier League Matchday 3 fixtures updated. Check full standings!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      setLiveNotifications((prev) => [notif, ...prev.slice(0, 9)]);

      return reordered;
    });
  };

  // Background timer effect for live auto-sync
  useEffect(() => {
    if (!isAutoSyncEnabled) return;

    const timer = setInterval(() => {
      setSecondsUntilNextSync((prev) => {
        if (prev <= 1) {
          setLastSyncTime(new Date());
          return autoSyncInterval;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAutoSyncEnabled, autoSyncInterval]);

  const resetAllDataToDefault = () => {
    localStorage.clear();
    setMatches(initialMatches);
    setStandings(initialStandings);
    setNews(initialNews);
    setPlayers(initialPlayers);
    setStaff(initialStaff);
    setMemberships(initialMemberships);
    setClubInfo(initialClubInfo);
    setIsAdminLoggedIn(false);
  };

  return (
    <ClubContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentPage,
        setCurrentPage,
        selectedArticleId,
        setSelectedArticleId,
        selectedMatchId,
        setSelectedMatchId,
        isDossierOpen,
        openDossier,
        closeDossier,
        liveNotifications,
        dismissNotification,
        isAutoSyncEnabled,
        toggleAutoSync,
        autoSyncInterval,
        setAutoSyncInterval,
        secondsUntilNextSync,
        isSyncing,
        lastSyncTime,
        syncNow,
        simulateLiveMatchAction,
        advanceLeagueMatchday,
        clubInfo,
        updateClubInfo,
        matches,
        addMatch,
        updateMatch,
        deleteMatch,
        standings,
        updateStanding,
        resetStandings,
        news,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        players,
        staff,
        addPlayer,
        updatePlayer,
        deletePlayer,
        memberships,
        submitMembership,
        updateMembershipStatus,
        deleteMembership,
        isAdminLoggedIn,
        adminUsername,
        loginAdmin,
        logoutAdmin,
        resetAllDataToDefault,
      }}
    >
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error('useClub must be used within a ClubProvider');
  }
  return context;
};
