import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
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
  ShopItem,
  ShopOrder,
  DonationRecord,
} from '../types';
import {
  initialClubInfo,
  initialMatches,
  initialStandings,
  initialNews,
  initialPlayers,
  initialStaff,
  initialMemberships,
  initialShopItems,
} from '../data/mockData';
import { translations } from '../translations';

export type PageRoute = 'home' | 'fixtures' | 'standings' | 'news' | 'membership' | 'shop' | 'about' | 'contact' | 'admin';

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
  addMatch: (match: Omit<Match, 'id'>) => Promise<void>;
  updateMatch: (id: string, match: Partial<Match>) => Promise<void>;
  deleteMatch: (id: string) => Promise<void>;

  // Standings
  standings: StandingTeam[];
  updateStanding: (teamId: string, updates: Partial<StandingTeam>) => Promise<void>;
  resetStandings: () => Promise<void>;

  // News
  news: NewsArticle[];
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, updates: Partial<NewsArticle>) => void;
  deleteNewsArticle: (id: string) => void;

  // Squad & Staff
  players: Player[];
  staff: StaffMember[];
  addPlayer: (player: Omit<Player, 'id'>) => Promise<void>;
  updatePlayer: (id: string, updates: Partial<Player>) => Promise<void>;
  deletePlayer: (id: string) => Promise<void>;
  addStaff: (staffMember: Omit<StaffMember, 'id'>) => Promise<void>;
  updateStaff: (id: string, updates: Partial<StaffMember>) => Promise<void>;
  deleteStaff: (id: string) => Promise<void>;

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
    amountPaid?: number | string;
    tx_ref?: string;
  }) => Promise<{ success: boolean; referenceNumber: string }>;
  recordVerifiedMembership: (data: {
    referenceNumber: string;
    fullName: string;
    dateOfBirth: string;
    gender?: string;
    phone: string;
    email?: string;
    cityOrRegion: string;
    membershipType: MembershipTier;
    preferredLanguage: Language;
    amountPaid: number | string;
    tx_ref: string;
  }) => Promise<MembershipApplication>;
  updateMembershipStatus: (id: string, status: 'APPROVED' | 'PENDING' | 'REJECTED') => Promise<void>;
  deleteMembership: (id: string) => Promise<void>;

  // Shop & Merchandise
  shopItems: ShopItem[];
  addShopItem: (item: Omit<ShopItem, 'id'>) => Promise<string | void> | void;
  updateShopItem: (id: string, updates: Partial<ShopItem>) => Promise<void> | void;
  deleteShopItem: (id: string) => Promise<void> | void;
  resetShopItems: () => Promise<void> | void;
  isProductsLoading: boolean;
  productsSyncError: string | null;
  shopOrders: ShopOrder[];
  recordShopOrder: (order: ShopOrder) => void;
  updateShopOrderStatus: (id: string, status: 'PENDING' | 'PAID' | 'DELIVERED') => void;

  // Checkout Modal
  isCheckoutModalOpen: boolean;
  checkoutItem: ShopItem | null;
  openCheckoutModal: (item: ShopItem) => void;
  closeCheckoutModal: () => void;

  // Donations
  donations: DonationRecord[];
  recordDonation: (donation: DonationRecord) => void;
  isDonationModalOpen: boolean;
  openDonationModal: () => void;
  closeDonationModal: () => void;

  // Admin Auth (Firebase Authentication)
  isAdminLoggedIn: boolean;
  adminUsername: string | null;
  adminUser: User | null;
  isAuthChecking: boolean;
  loginAdmin: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => Promise<void>;

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
  SHOP_ITEMS: 'halaba_shop_items_2026',
  SHOP_ORDERS: 'halaba_shop_orders_2026',
  DONATIONS: 'halaba_donations_2026',
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

  // Matches State & Real-Time Firebase Firestore Integration
  const [matches, setMatches] = useState<Match[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MATCHES);
    if (!saved) return initialMatches;
    try {
      const parsed: Match[] = JSON.parse(saved);
      const hasHalaba = parsed.some(
        (m) =>
          m.homeTeam?.isHalaba ||
          m.awayTeam?.isHalaba ||
          m.homeTeam?.name?.toLowerCase().includes('halaba') ||
          m.awayTeam?.name?.toLowerCase().includes('halaba')
      );
      if (!hasHalaba) {
        return initialMatches;
      }
      return parsed;
    } catch {
      return initialMatches;
    }
  });

  useEffect(() => {
    const matchesRef = collection(db, 'matches');
    const unsubscribe = onSnapshot(matchesRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem('hcfc_firestore_matches_seeded');
        if (!seeded) {
          try {
            for (const m of initialMatches) {
              await setDoc(doc(db, 'matches', m.id), { ...m, updatedAt: serverTimestamp() });
            }
            localStorage.setItem('hcfc_firestore_matches_seeded', 'true');
          } catch (err) {
            console.warn('Could not seed matches:', err);
          }
        }
        return;
      }
      const liveMatches: Match[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          competition: data.competition || 'ETHIOPIAN_PREMIER_LEAGUE',
          competitionName: data.competitionName || 'Ethiopian Premier League',
          date: data.date || '',
          kickoffTime: data.kickoffTime || '15:00',
          venue: data.venue || 'Halaba Stadium',
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
      });
      if (liveMatches.length > 0) {
        setMatches(liveMatches);
        localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(liveMatches));
        localStorage.setItem('hcfc_firestore_matches_seeded', 'true');
      }
    }, (error) => {
      console.error('Firebase real-time matches error:', error);
      handleFirestoreError(error, OperationType.LIST, 'matches');
    });
    return () => unsubscribe();
  }, []);

  const addMatch = async (matchData: Omit<Match, 'id'>) => {
    const matchId = `match-${Date.now()}`;
    const newMatch: Match = {
      ...matchData,
      id: matchId,
    };
    const updated = [newMatch, ...matches];
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'matches', matchId), {
        ...newMatch,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Firestore add match error:', error);
      handleFirestoreError(error, OperationType.CREATE, `matches/${matchId}`);
    }
  };

  const updateMatch = async (id: string, updates: Partial<Match>) => {
    const updated = matches.map((m) => (m.id === id ? { ...m, ...updates } : m));
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'matches', id), {
        ...updates,
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (error) {
      console.error('Firestore update match error:', error);
      handleFirestoreError(error, OperationType.UPDATE, `matches/${id}`);
    }
  };

  const deleteMatch = async (id: string) => {
    const updated = matches.filter((m) => m.id !== id);
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, 'matches', id));
    } catch (error) {
      console.error('Firestore delete match error:', error);
      handleFirestoreError(error, OperationType.DELETE, `matches/${id}`);
    }
  };

  // Standings State & Real-Time Firebase Firestore Integration
  const [standings, setStandings] = useState<StandingTeam[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STANDINGS);
    return saved ? JSON.parse(saved) : initialStandings;
  });

  useEffect(() => {
    const standingsRef = collection(db, 'standings');
    const unsubscribe = onSnapshot(standingsRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem('hcfc_firestore_standings_seeded');
        if (!seeded) {
          try {
            for (const item of initialStandings) {
              await setDoc(doc(db, 'standings', item.teamId), { ...item, updatedAt: serverTimestamp() });
            }
            localStorage.setItem('hcfc_firestore_standings_seeded', 'true');
          } catch (err) {
            console.warn('Could not seed standings:', err);
          }
        }
        return;
      }
      const liveStandings: StandingTeam[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          position: data.position || 1,
          teamId: data.teamId || docSnap.id,
          teamName: data.teamName || 'Team',
          played: data.played || 0,
          won: data.won || 0,
          drawn: data.drawn || 0,
          lost: data.lost || 0,
          goalsFor: data.goalsFor || 0,
          goalsAgainst: data.goalsAgainst || 0,
          goalDifference: data.goalDifference || 0,
          points: data.points || 0,
          form: data.form || [],
          isHalaba: Boolean(data.isHalaba),
        } as StandingTeam;
      });
      liveStandings.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
      const reordered = liveStandings.map((t, idx) => ({ ...t, position: idx + 1 }));
      if (reordered.length > 0) {
        setStandings(reordered);
        localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
        localStorage.setItem('hcfc_firestore_standings_seeded', 'true');
      }
    }, (error) => {
      console.error('Firebase real-time standings error:', error);
      handleFirestoreError(error, OperationType.LIST, 'standings');
    });
    return () => unsubscribe();
  }, []);

  const updateStanding = async (teamId: string, updates: Partial<StandingTeam>) => {
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
    try {
      const targetTeam = reordered.find((t) => t.teamId === teamId);
      if (targetTeam) {
        await setDoc(doc(db, 'standings', teamId), {
          ...targetTeam,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
    } catch (error) {
      console.error('Firestore update standing error:', error);
      handleFirestoreError(error, OperationType.UPDATE, `standings/${teamId}`);
    }
  };

  const resetStandings = async () => {
    setStandings(initialStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(initialStandings));
    try {
      for (const item of initialStandings) {
        await setDoc(doc(db, 'standings', item.teamId), {
          ...item,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
    } catch (error) {
      console.error('Firestore reset standings error:', error);
      handleFirestoreError(error, OperationType.WRITE, 'standings');
    }
  };

  // AUTOMATIC BACKGROUND SYNC FOR STANDINGS & FIXTURES FROM ETHIOPIAN PREMIER LEAGUE API & FIRESTORE
  useEffect(() => {
    let isMounted = true;

    const fetchSportsDB = async (endpoint: string) => {
      const primaryUrl = `https://www.thesportsdb.com/api/v1/json/123/${endpoint}`;
      try {
        const res = await fetch(primaryUrl, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          referrerPolicy: 'no-referrer',
        });
        if (res.ok) {
          const text = await res.text();
          if (!text.includes('permanently disabled') && !text.includes('Free Sports API key')) {
            return JSON.parse(text);
          }
        }
      } catch (err) {
        console.warn(`Direct fetch to TheSportsDB failed for ${endpoint}:`, err);
      }

      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(primaryUrl)}`;
        const proxyRes = await fetch(proxyUrl, {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });
        if (proxyRes.ok) {
          return await proxyRes.json();
        }
      } catch (proxyErr) {
        console.warn(`Proxy fetch failed for ${endpoint}:`, proxyErr);
      }

      return null;
    };

    const syncFromSportsDB = async () => {
      try {
        // 1. Fetch Ethiopian Premier League Standings (League ID 4959, Season 2026-2027)
        const standingsData = await fetchSportsDB('lookuptable.php?l=4959&s=2026-2027');

        if (isMounted && standingsData && Array.isArray(standingsData.table) && standingsData.table.length > 0) {
          const formattedStandings: StandingTeam[] = standingsData.table.map((item: any, idx: number) => {
            const isHalaba = item.strTeam?.toLowerCase().includes('halaba') || item.idTeam === '157333' || item.strTeam?.toLowerCase().includes('halaba ketema');
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

          formattedStandings.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
          const reordered = formattedStandings.map((t, idx) => ({ ...t, position: idx + 1 }));

          setStandings(reordered);
          localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));

          // Save to Firestore so all clients sync automatically
          for (const item of reordered) {
            try {
              await setDoc(doc(db, 'standings', item.teamId), {
                ...item,
                updatedAt: serverTimestamp(),
              }, { merge: true });
            } catch (fsErr) {
              console.warn('Could not persist EPL standings to Firestore:', fsErr);
            }
          }
        }

        // 2. Fetch Ethiopian Premier League Matches / Events
        const eventsData = await fetchSportsDB('eventsseason.php?id=4959&s=2026-2027');

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

          const currentMatchesStr = localStorage.getItem(STORAGE_KEYS.MATCHES);
          let currentMatches: Match[] = [];
          try {
            if (currentMatchesStr) {
              currentMatches = JSON.parse(currentMatchesStr);
            }
          } catch {
            currentMatches = matches;
          }
          const currentMap = new Map(currentMatches.map(m => [m.id, m]));

          const baseHalabaFixtures = currentMatches.filter(
            (m) =>
              m.homeTeam.isHalaba ||
              m.awayTeam.isHalaba ||
              m.homeTeam.name.toLowerCase().includes('halaba') ||
              m.awayTeam.name.toLowerCase().includes('halaba')
          );
          const halabaFixtures = baseHalabaFixtures.length > 0 ? baseHalabaFixtures : initialMatches.filter(
            (m) =>
              m.homeTeam.isHalaba ||
              m.awayTeam.isHalaba ||
              m.homeTeam.name.toLowerCase().includes('halaba') ||
              m.awayTeam.name.toLowerCase().includes('halaba')
          );

          const otherMatches = formattedMatches.filter(
            (m) =>
              !m.homeTeam.isHalaba &&
              !m.awayTeam.isHalaba &&
              !m.homeTeam.name.toLowerCase().includes('halaba') &&
              !m.awayTeam.name.toLowerCase().includes('halaba')
          );
          const mergedMatches = [...halabaFixtures, ...otherMatches];

          setMatches(mergedMatches);
          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(mergedMatches));

          // Only persist non-Halaba matches to Firestore from API sync. Halaba matches are 100% protected admin data.
          for (const m of otherMatches) {
            try {
              await setDoc(doc(db, 'matches', m.id), {
                ...m,
                updatedAt: serverTimestamp(),
              }, { merge: true });
            } catch (matchErr) {
              console.warn('Could not persist EPL match to Firestore:', matchErr);
            }
          }
        }
      } catch (error) {
        console.error('Error auto-syncing standings and fixtures from Ethiopian Premier League API:', error);
      }
    };

    syncFromSportsDB();

    return () => {
      isMounted = false;
    };
  }, []);

  // News State & Real-Time Firebase Firestore Integration
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

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveArticles: NewsArticle[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
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
      console.error("Firebase real-time news error:", error);
      handleFirestoreError(error, OperationType.LIST, 'news');
    });

    return () => unsubscribe();
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
      await deleteDoc(doc(db, "news", id));
    } catch (error) {
      console.warn("Could not delete news article from Firebase Cloud:", error);
    }
    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
  };

  // Players & Staff State & Real-Time Firebase Firestore Integration
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
    return saved ? JSON.parse(saved) : initialPlayers;
  });

  const [staff, setStaff] = useState<StaffMember[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STAFF);
    return saved ? JSON.parse(saved) : initialStaff;
  });

  useEffect(() => {
    const playersRef = collection(db, 'players');
    const unsubscribe = onSnapshot(playersRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem('hcfc_firestore_players_seeded');
        if (!seeded) {
          try {
            for (const p of initialPlayers) {
              await setDoc(doc(db, 'players', p.id), { ...p, updatedAt: serverTimestamp() });
            }
            localStorage.setItem('hcfc_firestore_players_seeded', 'true');
          } catch (err) {
            console.warn('Could not seed players:', err);
          }
        }
        return;
      }
      const livePlayers: Player[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          number: data.number || 10,
          name: data.name || 'Player',
          position: data.position || 'Midfielder',
          nationality: data.nationality || 'Ethiopian',
          birthYear: data.birthYear || 2000,
          appearances: data.appearances || 0,
          goals: data.goals || 0,
          assists: data.assists || 0,
          cleanSheets: data.cleanSheets || 0,
          isCaptain: Boolean(data.isCaptain),
          photoUrl: data.photoUrl,
        } as Player;
      });
      if (livePlayers.length > 0) {
        setPlayers(livePlayers);
        localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(livePlayers));
        localStorage.setItem('hcfc_firestore_players_seeded', 'true');
      }
    }, (error) => {
      console.error('Firebase real-time players error:', error);
      handleFirestoreError(error, OperationType.LIST, 'players');
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const staffRef = collection(db, 'staff');
    const unsubscribe = onSnapshot(staffRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem('hcfc_firestore_staff_seeded');
        if (!seeded) {
          try {
            for (const s of initialStaff) {
              await setDoc(doc(db, 'staff', s.id), { ...s, updatedAt: serverTimestamp() });
            }
            localStorage.setItem('hcfc_firestore_staff_seeded', 'true');
          } catch (err) {
            console.warn('Could not seed staff:', err);
          }
        }
        return;
      }
      const liveStaff: StaffMember[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: data.name || 'Staff',
          role: data.role || 'Coach',
          department: data.department || 'Coaching',
          nationality: data.nationality || 'Ethiopian',
          photoUrl: data.photoUrl,
        } as StaffMember;
      });
      if (liveStaff.length > 0) {
        setStaff(liveStaff);
        localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(liveStaff));
        localStorage.setItem('hcfc_firestore_staff_seeded', 'true');
      }
    }, (error) => {
      console.error('Firebase real-time staff error:', error);
      handleFirestoreError(error, OperationType.LIST, 'staff');
    });
    return () => unsubscribe();
  }, []);

  const addPlayer = async (p: Omit<Player, 'id'>) => {
    const id = `p-${Date.now()}`;
    const newP: Player = { ...p, id };
    const updated = [...players, newP];
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'players', id), { ...newP, updatedAt: serverTimestamp() });
    } catch (error) {
      console.error('Firestore add player error:', error);
      handleFirestoreError(error, OperationType.CREATE, `players/${id}`);
    }
  };

  const updatePlayer = async (id: string, updates: Partial<Player>) => {
    const updated = players.map((p) => (p.id === id ? { ...p, ...updates } : p));
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'players', id), { ...updates, updatedAt: serverTimestamp() }, { merge: true });
    } catch (error) {
      console.error('Firestore update player error:', error);
      handleFirestoreError(error, OperationType.UPDATE, `players/${id}`);
    }
  };

  const deletePlayer = async (id: string) => {
    const updated = players.filter((p) => p.id !== id);
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, 'players', id));
    } catch (error) {
      console.error('Firestore delete player error:', error);
      handleFirestoreError(error, OperationType.DELETE, `players/${id}`);
    }
  };

  const addStaff = async (s: Omit<StaffMember, 'id'>) => {
    const id = `s-${Date.now()}`;
    const newS: StaffMember = { ...s, id };
    const updated = [...staff, newS];
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'staff', id), { ...newS, updatedAt: serverTimestamp() });
    } catch (error) {
      console.error('Firestore add staff error:', error);
      handleFirestoreError(error, OperationType.CREATE, `staff/${id}`);
    }
  };

  const updateStaff = async (id: string, updates: Partial<StaffMember>) => {
    const updated = staff.map((s) => (s.id === id ? { ...s, ...updates } : s));
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'staff', id), { ...updates, updatedAt: serverTimestamp() }, { merge: true });
    } catch (error) {
      console.error('Firestore update staff error:', error);
      handleFirestoreError(error, OperationType.UPDATE, `staff/${id}`);
    }
  };

  const deleteStaff = async (id: string) => {
    const updated = staff.filter((s) => s.id !== id);
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, 'staff', id));
    } catch (error) {
      console.error('Firestore delete staff error:', error);
      handleFirestoreError(error, OperationType.DELETE, `staff/${id}`);
    }
  };

  // Memberships State & Real-Time Firebase Firestore Integration
  const [memberships, setMemberships] = useState<MembershipApplication[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MEMBERSHIPS);
    return saved ? JSON.parse(saved) : initialMemberships;
  });

  useEffect(() => {
    const membershipsRef = collection(db, 'memberships');
    const unsubscribe = onSnapshot(membershipsRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem('hcfc_firestore_memberships_seeded');
        if (!seeded) {
          try {
            for (const m of initialMemberships) {
              await setDoc(doc(db, 'memberships', m.id), { ...m, updatedAt: serverTimestamp() });
            }
            localStorage.setItem('hcfc_firestore_memberships_seeded', 'true');
          } catch (err) {
            console.warn('Could not seed memberships:', err);
          }
        }
        return;
      }
      const liveMemberships: MembershipApplication[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          referenceNumber: data.referenceNumber || 'HCFC-M1234',
          fullName: data.fullName || 'Supporter',
          dateOfBirth: data.dateOfBirth || '2000-01-01',
          gender: data.gender,
          phone: data.phone || '',
          email: data.email,
          cityOrRegion: data.cityOrRegion || 'Halaba',
          membershipType: data.membershipType || 'STANDARD',
          preferredLanguage: data.preferredLanguage || 'en',
          registeredAt: data.registeredAt || new Date().toISOString(),
          status: data.status || 'APPROVED',
          amountPaid: data.amountPaid,
          tx_ref: data.tx_ref,
          paymentStatus: data.paymentStatus,
          paymentDate: data.paymentDate,
          notes: data.notes,
        } as MembershipApplication;
      });
      if (liveMemberships.length > 0) {
        setMemberships(liveMemberships);
        localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(liveMemberships));
        localStorage.setItem('hcfc_firestore_memberships_seeded', 'true');
      }
    }, (error) => {
      console.error('Firebase real-time memberships error:', error);
      handleFirestoreError(error, OperationType.LIST, 'memberships');
    });
    return () => unsubscribe();
  }, []);

  const submitMembership = async (data: {
    fullName: string;
    dateOfBirth: string;
    gender?: string;
    phone: string;
    email?: string;
    cityOrRegion: string;
    membershipType: MembershipTier;
    preferredLanguage: Language;
    amountPaid?: number | string;
    tx_ref?: string;
  }): Promise<{ success: boolean; referenceNumber: string }> => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `HCFC-2026-M${randNum}`;
    const id = `mem-${Date.now()}`;

    const newApplication: MembershipApplication = {
      id,
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
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: 'PAID',
      paymentDate: new Date().toISOString(),
    };

    await new Promise((resolve) => setTimeout(resolve, 400));

    const updated = [newApplication, ...memberships];
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'memberships', id), {
        ...newApplication,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Firestore submit membership error:', error);
      handleFirestoreError(error, OperationType.CREATE, `memberships/${id}`);
    }

    return { success: true, referenceNumber };
  };

  const recordVerifiedMembership = async (data: {
    referenceNumber: string;
    fullName: string;
    dateOfBirth: string;
    gender?: string;
    phone: string;
    email?: string;
    cityOrRegion: string;
    membershipType: MembershipTier;
    preferredLanguage: Language;
    amountPaid: number | string;
    tx_ref: string;
  }): Promise<MembershipApplication> => {
    const id = `mem-${Date.now()}`;
    const newApplication: MembershipApplication = {
      id,
      referenceNumber: data.referenceNumber,
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
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: 'PAID',
      paymentDate: new Date().toISOString(),
    };

    const updated = [newApplication, ...memberships.filter((m) => m.referenceNumber !== data.referenceNumber && m.tx_ref !== data.tx_ref)];
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'memberships', id), {
        ...newApplication,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Firestore record verified membership error:', error);
      handleFirestoreError(error, OperationType.CREATE, `memberships/${id}`);
    }

    return newApplication;
  };

  const updateMembershipStatus = async (id: string, status: 'APPROVED' | 'PENDING' | 'REJECTED') => {
    const updated = memberships.map((m) => (m.id === id ? { ...m, status } : m));
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, 'memberships', id), {
        status,
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (error) {
      console.error('Firestore update membership status error:', error);
      handleFirestoreError(error, OperationType.UPDATE, `memberships/${id}`);
    }
  };

  const deleteMembership = async (id: string) => {
    const updated = memberships.filter((m) => m.id !== id);
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, 'memberships', id));
    } catch (error) {
      console.error('Firestore delete membership error:', error);
      handleFirestoreError(error, OperationType.DELETE, `memberships/${id}`);
    }
  };

  // Shop Items State & Real-Time Firebase Firestore Integration
  const [shopItems, setShopItems] = useState<ShopItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SHOP_ITEMS);
    return saved ? JSON.parse(saved) : initialShopItems;
  });
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);
  const [productsSyncError, setProductsSyncError] = useState<string | null>(null);

  useEffect(() => {
    const productsRef = collection(db, 'products');

    const unsubscribe = onSnapshot(productsRef, async (snapshot) => {
      setIsProductsLoading(false);
      setProductsSyncError(null);

      if (snapshot.empty) {
        const hasSeeded = localStorage.getItem('hcfc_firestore_products_seeded');
        if (!hasSeeded) {
          try {
            for (const item of initialShopItems) {
              await setDoc(doc(db, 'products', item.id), {
                name: item.name,
                description: item.description,
                price: item.price,
                imageUrl: item.imageUrl,
                availableSizes: item.availableSizes,
                category: item.category || 'JERSEY',
                inStock: item.inStock !== undefined ? item.inStock : true,
                featured: item.featured !== undefined ? item.featured : false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              });
            }
            localStorage.setItem('hcfc_firestore_products_seeded', 'true');
          } catch (seedErr) {
            console.warn('Could not auto-seed default products to Firestore:', seedErr);
          }
        } else {
          setShopItems([]);
          localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify([]));
        }
        return;
      }

      const liveProducts: ShopItem[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: typeof data.name === 'object' && data.name !== null
            ? { en: data.name.en || '', am: data.name.am || data.name.en || '', om: data.name.om || data.name.en || '' }
            : { en: String(data.name || ''), am: String(data.name || ''), om: String(data.name || '') },
          description: typeof data.description === 'object' && data.description !== null
            ? { en: data.description.en || '', am: data.description.am || data.description.en || '', om: data.description.om || data.description.en || '' }
            : { en: String(data.description || ''), am: String(data.description || ''), om: String(data.description || '') },
          price: typeof data.price === 'number' ? data.price : parseFloat(data.price) || 0,
          imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80',
          availableSizes: Array.isArray(data.availableSizes) && data.availableSizes.length > 0 ? data.availableSizes : ['S', 'M', 'L', 'XL'],
          category: (data.category as 'JERSEY' | 'KIT' | 'ACCESSORY') || 'JERSEY',
          inStock: data.inStock !== undefined ? Boolean(data.inStock) : true,
          featured: Boolean(data.featured),
        };
      });

      liveProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

      setShopItems(liveProducts);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(liveProducts));
      localStorage.setItem('hcfc_firestore_products_seeded', 'true');
    }, (error) => {
      console.error('Firebase real-time products sync error:', error);
      setProductsSyncError(error.message);
      handleFirestoreError(error, OperationType.LIST, 'products');
    });

    return () => unsubscribe();
  }, []);

  const addShopItem = async (item: Omit<ShopItem, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        availableSizes: item.availableSizes,
        category: item.category || 'JERSEY',
        inStock: item.inStock !== undefined ? item.inStock : true,
        featured: Boolean(item.featured),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      const newItem: ShopItem = {
        ...item,
        id: docRef.id,
      };
      setShopItems((prev) => [newItem, ...prev.filter((p) => p.id !== docRef.id)]);
      localStorage.setItem('hcfc_firestore_products_seeded', 'true');
      return docRef.id;
    } catch (error) {
      console.error('Firestore add product error, falling back locally:', error);
      handleFirestoreError(error, OperationType.CREATE, 'products');
      const fallbackId = `shop-${Date.now()}`;
      const newItem: ShopItem = { ...item, id: fallbackId };
      const updated = [newItem, ...shopItems];
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
      return fallbackId;
    }
  };

  const updateShopItem = async (id: string, updates: Partial<ShopItem>) => {
    try {
      const productRef = doc(db, 'products', id);
      await setDoc(productRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      }, { merge: true });

      const updated = shopItems.map((item) => (item.id === id ? { ...item, ...updates } : item));
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    } catch (error) {
      console.error('Firestore update product error, falling back locally:', error);
      handleFirestoreError(error, OperationType.UPDATE, `products/${id}`);
      const updated = shopItems.map((item) => (item.id === id ? { ...item, ...updates } : item));
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    }
  };

  const deleteShopItem = async (id: string) => {
    try {
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);

      const updated = shopItems.filter((item) => item.id !== id);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    } catch (error) {
      console.error('Firestore delete product error, falling back locally:', error);
      handleFirestoreError(error, OperationType.DELETE, `products/${id}`);
      const updated = shopItems.filter((item) => item.id !== id);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    }
  };

  const resetShopItems = async () => {
    try {
      for (const item of initialShopItems) {
        await setDoc(doc(db, 'products', item.id), {
          name: item.name,
          description: item.description,
          price: item.price,
          imageUrl: item.imageUrl,
          availableSizes: item.availableSizes,
          category: item.category || 'JERSEY',
          inStock: item.inStock !== undefined ? item.inStock : true,
          featured: item.featured !== undefined ? item.featured : false,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
      localStorage.setItem('hcfc_firestore_products_seeded', 'true');
    } catch (error) {
      console.error('Firestore reset products catalog error:', error);
    }
    setShopItems(initialShopItems);
    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
  };

  // Shop Orders State
  const [shopOrders, setShopOrders] = useState<ShopOrder[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SHOP_ORDERS);
    return saved ? JSON.parse(saved) : [];
  });

  const recordShopOrder = (order: ShopOrder) => {
    const updated = [order, ...shopOrders.filter((o) => o.orderNumber !== order.orderNumber && o.tx_ref !== order.tx_ref)];
    setShopOrders(updated);
    localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
  };

  const updateShopOrderStatus = (id: string, status: 'PENDING' | 'PAID' | 'DELIVERED') => {
    const updated = shopOrders.map((o) => (o.id === id || o.orderNumber === id ? { ...o, status } : o));
    setShopOrders(updated);
    localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
  };

  // Checkout Modal State
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<ShopItem | null>(null);

  const openCheckoutModal = (item: ShopItem) => {
    setCheckoutItem(item);
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
    setCheckoutItem(null);
  };

  // Supporter Donations State
  const [donations, setDonations] = useState<DonationRecord[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DONATIONS);
    return saved ? JSON.parse(saved) : [];
  });

  const recordDonation = (donation: DonationRecord) => {
    const updated = [donation, ...donations.filter((d) => d.donationNumber !== donation.donationNumber && d.tx_ref !== donation.tx_ref)];
    setDonations(updated);
    localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(updated));
  };

  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const openDonationModal = () => setIsDonationModalOpen(true);
  const closeDonationModal = () => setIsDonationModalOpen(false);

  // Admin Auth using Firebase Authentication
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });
  const [adminUsername, setAdminUsername] = useState<string | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdminUser(user);
        setIsAdminLoggedIn(true);
        setAdminUsername(user.displayName || user.email || 'Admin');
        localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      } else {
        setAdminUser(null);
        setIsAdminLoggedIn(false);
        setAdminUsername(null);
        localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
      }
      setIsAuthChecking(false);
    });

    return () => unsubscribe();
  }, []);

  const loginAdmin = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), pass);
      const user = userCredential.user;
      setAdminUser(user);
      setIsAdminLoggedIn(true);
      setAdminUsername(user.displayName || user.email || 'Admin');
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return { success: true };
    } catch (error: any) {
      console.error("Firebase signInWithEmailAndPassword error:", error);
      let errorMsg = 'Invalid email or password.';
      const code = error?.code || '';
      if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        errorMsg = 'Invalid email or password. Please verify your administrator credentials.';
      } else if (code === 'auth/invalid-email') {
        errorMsg = 'Please enter a valid email address.';
      } else if (code === 'auth/user-disabled') {
        errorMsg = 'This administrator account has been disabled.';
      } else if (code === 'auth/too-many-requests') {
        errorMsg = 'Too many failed login attempts. Access temporarily restricted. Please try again later.';
      } else if (code === 'auth/network-request-failed') {
        errorMsg = 'Network error. Please check your internet connection.';
      } else if (error?.message) {
        errorMsg = error.message;
      }
      return { success: false, error: errorMsg };
    }
  };

  const logoutAdmin = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase signOut error:", error);
    } finally {
      setAdminUser(null);
      setIsAdminLoggedIn(false);
      setAdminUsername(null);
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
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
    setShopItems(initialShopItems);
    setShopOrders([]);
    setDonations([]);
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
        addStaff,
        updateStaff,
        deleteStaff,
        memberships,
        submitMembership,
        recordVerifiedMembership,
        updateMembershipStatus,
        deleteMembership,
        shopItems,
        addShopItem,
        updateShopItem,
        deleteShopItem,
        resetShopItems,
        isProductsLoading,
        productsSyncError,
        shopOrders,
        recordShopOrder,
        updateShopOrderStatus,
        isCheckoutModalOpen,
        checkoutItem,
        openCheckoutModal,
        closeCheckoutModal,
        donations,
        recordDonation,
        isDonationModalOpen,
        openDonationModal,
        closeDonationModal,
        isAdminLoggedIn,
        adminUsername,
        adminUser,
        isAuthChecking,
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
