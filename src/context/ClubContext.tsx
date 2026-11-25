import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { collection, onSnapshot, addDoc, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { apiFetchJson, adminApiFetchJson } from '../utils/api';
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
  Sponsor,
} from '../types';
import {
  initialClubInfo,
  initialStandings,
  initialNews,
  initialPlayers,
  initialStaff,
  initialMemberships,
  initialShopItems,
  initialSponsors,
} from '../data/mockData';
import { translations } from '../translations';
import { ClubImages } from '../assets/images';
import { getIdbItem, setIdbItem, createThumbnail } from '../utils/idb';

export type PageRoute = 'home' | 'fixtures' | 'standings' | 'news' | 'membership' | 'shop' | 'about' | 'contact' | 'admin';
export type StandingsUpdateMode = 'automatic' | 'manual';

export interface StandingsHistoryEntry {
  id: string;
  competition: string;
  season: string;
  changedBy: string | null;
  changeReason: string | null;
  createdAt: string;
  teamCount: number;
}

export const DEFAULT_STANDINGS_COMPETITION = 'ETHIOPIAN_PREMIER_LEAGUE';
export const DEFAULT_STANDINGS_SEASON = '2026-2027';

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
  syncNow: (isManual?: boolean) => Promise<void> | void;
  simulateLiveMatchAction: () => void;
  advanceLeagueMatchday: () => void;

  // Club Info
  clubInfo: ClubInfo;
  updateClubInfo: (info: ClubInfo) => Promise<void>;

  // Matches
  matches: Match[];
  addMatch: (match: Omit<Match, 'id'>) => Promise<void>;
  updateMatch: (id: string, match: Partial<Match>) => Promise<void>;
  deleteMatch: (id: string) => Promise<void>;

  // Standings
  standings: StandingTeam[];
  standingsCompetition: string;
  standingsSeason: string;
  standingsMode: StandingsUpdateMode;
  standingsHistory: StandingsHistoryEntry[];
  standingsError: string | null;
  d1SyncError: string | null;
  setStandingsScope: (competition: string, season?: string) => Promise<void>;
  setStandingsUpdateMode: (mode: StandingsUpdateMode) => Promise<void>;
  loadStandingsForScope: (competition?: string, season?: string, includeHistory?: boolean) => Promise<void>;
  updateStanding: (teamId: string, updates: Partial<StandingTeam>) => Promise<void>;
  resetStandings: () => Promise<void>;
  recalculateStandingsFromMatches: () => Promise<void>;

  // News
  news: NewsArticle[];
  addNewsArticle: (article: Omit<NewsArticle, 'id'>) => Promise<void>;
  updateNewsArticle: (id: string, updates: Partial<NewsArticle>) => Promise<void>;
  deleteNewsArticle: (id: string) => Promise<void>;

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

  // Sponsors & Partner Posters (Firebase Firestore Connected)
  sponsors: Sponsor[];
  addSponsor: (sponsor: Omit<Sponsor, 'id'>) => Promise<string | void> | string | void;
  updateSponsor: (id: string, updates: Partial<Sponsor>) => Promise<void> | void;
  deleteSponsor: (id: string) => Promise<void> | void;
  resetSponsors: () => Promise<void> | void;
  isSponsorsLoading: boolean;
  sponsorsSyncError: string | null;

  // Utility & Offline Resilience
  isOnline: boolean;
  resetAllDataToDefault: () => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

// The exact 18 official clubs of the Ethiopian Premier League
export const VALID_EPL_18_TEAM_IDS = new Set<string>([
  'cbe_sa',
  'bahirdar',
  'defence',
  'negelle',
  'halaba',
  'adama',
  'insurance',
  'shaggar',
  'electric',
  'bunna',
  'fasil',
  'saintgeorge',
  'hawassa',
  'wolaitta',
  'welwalo',
  'hosaena',
  'sidama',
  'gamochencha',
]);

try {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('halaba_official_epl_standings_v22_sportsdb');
    localStorage.removeItem('halaba_official_epl_standings_v21_sportsdb');
    localStorage.removeItem('halaba_official_epl_standings_v20_sportsdb');
    localStorage.removeItem('halaba_official_epl_standings_v19_sportsdb');
    localStorage.removeItem('halaba_official_epl_standings_v16_18_teams');
    localStorage.removeItem('halaba_official_epl_standings_v12_real_table');
    localStorage.removeItem('halaba_official_epl_standings_v7_canonical');
    localStorage.removeItem('halaba_official_epl_standings_v3');
    localStorage.removeItem('halaba_official_epl_standings_v2');
    localStorage.removeItem('halaba_official_epl_standings');
    localStorage.removeItem('halaba_standings_epl_2026_27');
    localStorage.removeItem('halaba_standings_sportsdb_v2');
    localStorage.removeItem('hcfc_firestore_standings_seeded');
    localStorage.removeItem('hcfc_firestore_standings_seeded_v2');
    localStorage.removeItem('hcfc_firestore_standings_seeded_v3');
  }
} catch (e) {
  // Ignore storage access errors
}

export const normalizeEplTeamId = (rawId?: string, rawName?: string): string => {
  const str = `${rawId || ''} ${rawName || ''}`.toLowerCase();
  if (str.includes('halaba')) return 'halaba';
  if (str.includes('cbe') || str.includes('nigd') || rawId === '149377') return 'cbe_sa';
  if (str.includes('medhin') || str.includes('insurance') || rawId === '146921') return 'insurance';
  if (str.includes('adama') || rawId === '141024') return 'adama';
  if (str.includes('electric') || rawId === '146920') return 'electric';
  if (str.includes('fasil') || rawId === '141026') return 'fasil';
  if (str.includes('bahir') || rawId === '141025') return 'bahirdar';
  if (str.includes('bunna') || (str.includes('coffee') && !str.includes('sidama'))) return 'bunna';
  if (str.includes('george') || str.includes('giorgis')) return 'saintgeorge';
  if (str.includes('defence') || str.includes('mekelakeya') || str.includes('mechal') || rawId === '143767') return 'defence';
  if (str.includes('welwalo')) return 'welwalo';
  if (str.includes('dicha') || str.includes('wolaitta')) return 'wolaitta';
  // Normalize both Hossana and Hadiya to the single canonical hosaena team
  if (str.includes('hosaena') || str.includes('hossana') || str.includes('hadiya')) return 'hosaena';
  if (str.includes('diredawa') || str.includes('dire dawa')) return 'diredawa';
  if (str.includes('chencha') || str.includes('gamo')) return 'gamochencha';
  if (str.includes('sidama')) return 'sidama';
  if (str.includes('hawassa')) return 'hawassa';
  if (str.includes('shaggar') || str.includes('sheger')) return 'shaggar';
  if (str.includes('negelle') || str.includes('negele')) return 'negelle';
  return (rawId || '').replace(/[^a-z0-9]/g, '') || 'unknown';
};

function makeMatchSignature(m: Match): string {
  const homeKey = normalizeEplTeamId(m.homeTeam?.id, m.homeTeam?.name);
  const awayKey = normalizeEplTeamId(m.awayTeam?.id, m.awayTeam?.name);
  return `${m.date || ''}::${homeKey}::${awayKey}`;
}

export function mergeMatchesPreservingCustom(
  existingMatches: Match[],
  incomingFixtures: Match[]
): { merged: Match[]; toSync: Match[] } {
  const merged = [...existingMatches];
  const byId = new Map<string, number>();
  const bySignature = new Map<string, number>();

  merged.forEach((m, idx) => {
    byId.set(m.id, idx);
    bySignature.set(makeMatchSignature(m), idx);
  });

  const toSync: Match[] = [];

  for (const incoming of incomingFixtures) {
    const sig = makeMatchSignature(incoming);
    const existingIdx = byId.has(incoming.id)
      ? byId.get(incoming.id)!
      : bySignature.has(sig)
      ? bySignature.get(sig)!
      : -1;

    if (existingIdx >= 0) {
      const current = merged[existingIdx];
      const updated: Match = {
        ...current,
        ...incoming,
        id: current.id,
        venue: incoming.venue || current.venue,
        summary: current.summary || incoming.summary,
        attendance: current.attendance || incoming.attendance,
        referee: current.referee || incoming.referee,
        scorers: current.scorers && current.scorers.length > 0 ? current.scorers : incoming.scorers,
        liveEvents:
          current.liveEvents && current.liveEvents.length > 0 ? current.liveEvents : incoming.liveEvents,
      };
      merged[existingIdx] = updated;
      toSync.push(updated);
    } else {
      merged.push(incoming);
      byId.set(incoming.id, merged.length - 1);
      bySignature.set(sig, merged.length - 1);
      toSync.push(incoming);
    }
  }

  merged.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return { merged, toSync };
}

const CANONICAL_TEAM_NAMES: Record<string, string> = {
  cbe_sa: 'Ethiopia Nigd Bank (CBE SA)',
  halaba: 'Halaba Ketema (በርበሬዎቹ)',
  insurance: 'Ethiopian Medhin (Insurance)',
  adama: 'Adama Kenema SC',
  electric: 'Ethio Electric',
  shaggar: 'Shaggar City FC',
  negelle: 'Negele Arsi FC',
  hawassa: 'Hawassa Kenema SC',
  hosaena: 'Hadiya Hossana',
};

export function normalizeStandingsScopeRows(
  rawRows: any[],
  competition: string,
  season: string
): StandingTeam[] {
  const isDefaultEpl =
    competition === DEFAULT_STANDINGS_COMPETITION && season === DEFAULT_STANDINGS_SEASON;

  if (!isDefaultEpl) {
    const map = new Map<string, StandingTeam>();
    rawRows.forEach((data: any) => {
      const rawId = String(data?.teamId ?? data?.team_id ?? data?.id ?? '').trim();
      const teamId = rawId || normalizeEplTeamId(rawId, data?.teamName);
      if (!teamId || teamId === 'diredawa') return;
      const gf = Number(data?.goalsFor) || 0;
      const ga = Number(data?.goalsAgainst) || 0;
      map.set(teamId, {
        position: Number(data?.position) || 1,
        teamId,
        teamName: String(data?.teamName || CANONICAL_TEAM_NAMES[teamId] || 'Team'),
        played: Number(data?.played) || 0,
        won: Number(data?.won) || 0,
        drawn: Number(data?.drawn) || 0,
        lost: Number(data?.lost) || 0,
        goalsFor: gf,
        goalsAgainst: ga,
        goalDifference: gf - ga,
        points: Number(data?.points) || 0,
        form: Array.isArray(data?.form) && data.form.length > 0 ? data.form : ['D', 'W', 'D'],
        isHalaba: teamId === 'halaba' || Boolean(data?.isHalaba),
        badgeUrl: data?.badgeUrl || undefined,
      });
    });

    const list = Array.from(map.values());
    list.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
    return list.map((t, idx) => ({ ...t, position: idx + 1 }));
  }

  const canonicalMap = new Map<string, StandingTeam>();
  rawRows.forEach((data: any) => {
    const canonicalId = normalizeEplTeamId(data?.teamId ?? data?.team_id, data?.teamName);
    if (!VALID_EPL_18_TEAM_IDS.has(canonicalId)) {
      return;
    }
    const gf = Number(data?.goalsFor) || 0;
    const ga = Number(data?.goalsAgainst) || 0;
    const teamItem: StandingTeam = {
      position: Number(data?.position) || 1,
      teamId: canonicalId,
      teamName: CANONICAL_TEAM_NAMES[canonicalId] || String(data?.teamName || 'Team'),
      played: Number(data?.played) || 0,
      won: Number(data?.won) || 0,
      drawn: Number(data?.drawn) || 0,
      lost: Number(data?.lost) || 0,
      goalsFor: gf,
      goalsAgainst: ga,
      goalDifference: gf - ga,
      points: Number(data?.points) || 0,
      form: Array.isArray(data?.form) && data.form.length > 0 ? data.form : ['D', 'W', 'D'],
      isHalaba: canonicalId === 'halaba',
      badgeUrl: data?.badgeUrl || undefined,
    };
    if (!canonicalMap.has(canonicalId)) {
      canonicalMap.set(canonicalId, teamItem);
    }
  });

  if (canonicalMap.size > 0) {
    initialStandings.forEach((initT) => {
      if (!canonicalMap.has(initT.teamId) && VALID_EPL_18_TEAM_IDS.has(initT.teamId)) {
        canonicalMap.set(initT.teamId, { ...initT });
      }
    });
  }

  const list = Array.from(canonicalMap.values())
    .filter((t) => VALID_EPL_18_TEAM_IDS.has(t.teamId) && t.teamId !== 'diredawa');
  list.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
  return list.slice(0, 18).map((t, idx) => ({ ...t, position: idx + 1 }));
}

const STORAGE_KEYS = {
  LANG: 'halaba_lang',
  CLUB: 'halaba_club_info_epl_26_27',
  MATCHES: 'halaba_matches_epl_2026_27_v18',
  STANDINGS: 'halaba_official_epl_standings_v25_all18_verified',
  NEWS: 'halaba_news_epl_2026_27',
  PLAYERS: 'halaba_players',
  STAFF: 'halaba_staff',
  MEMBERSHIPS: 'halaba_memberships',
  SHOP_ITEMS: 'halaba_shop_items_2026',
  SHOP_ORDERS: 'halaba_shop_orders_2026',
  DONATIONS: 'halaba_donations_2026',
  ADMIN_AUTH: 'halaba_admin_auth',
  SPONSORS: 'halaba_sponsors_v2',
};

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    if (saved === 'en' || saved === 'am' || saved === 'om') return saved;
    return 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  }, []);

  const t = useMemo(() => translations[language], [language]);

  // Network & Offline Connectivity Listener
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.info('[ClubContext] Network online: background sync active');
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.info('[ClubContext] Network offline: seamlessly serving cached data');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Routing (Hash / Memory Routing for local WebViews and PWAs)
  const getInitialPage = (): PageRoute => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase() as PageRoute;
      const validPages: PageRoute[] = ['home', 'fixtures', 'standings', 'news', 'membership', 'shop', 'about', 'contact', 'admin'];
      if (validPages.includes(hash)) return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPageState] = useState<PageRoute>(getInitialPage);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  const setCurrentPage = useCallback((page: PageRoute) => {
    setCurrentPageState(page);
    if (typeof window !== 'undefined') {
      if (page === 'home') {
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      } else {
        window.location.hash = page;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase() as PageRoute;
      const validPages: PageRoute[] = ['home', 'fixtures', 'standings', 'news', 'membership', 'shop', 'about', 'contact', 'admin'];
      if (validPages.includes(hash)) {
        setCurrentPageState(hash);
      } else if (!hash) {
        setCurrentPageState('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Admin Auth using Firebase Authentication with Custom Claims & Verified Role
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [adminUsername, setAdminUsername] = useState<string | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);

  // Helper to securely verify if a Firebase user has official club administrator rights
  const verifyAdminPrivileges = async (user: User | null): Promise<boolean> => {
    if (!user) return false;
    try {
      // 1. Primary check: Firebase Authentication custom claims (official standard)
      const tokenResult = await user.getIdTokenResult(true);
      if (tokenResult.claims.admin === true || tokenResult.claims.role === 'admin') {
        return true;
      }

      // 2. Fallback check: Preserves existing authorized administrator accounts
      const authorizedAdminEmails = [
        'admin@halabafc.et',
        'halabacityfc@gmail.com',
        'abdpriin@gmail.com',
      ];
      const userEmail = (user.email || '').toLowerCase().trim();
      if (userEmail && authorizedAdminEmails.includes(userEmail)) {
        return true;
      }

      return false;
    } catch (err) {
      console.warn('[ClubContext] Error verifying admin privileges:', err);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuthChecking(true);
      if (user) {
        setAdminUser(user);
        const hasAdminRole = await verifyAdminPrivileges(user);
        if (hasAdminRole) {
          setIsAdminLoggedIn(true);
          setAdminUsername(user.displayName || user.email || 'Admin');
        } else {
          // Normal authenticated user (not an administrator)
          setIsAdminLoggedIn(false);
          setAdminUsername(null);
        }
      } else {
        setAdminUser(null);
        setIsAdminLoggedIn(false);
        setAdminUsername(null);
      }
      setIsAuthChecking(false);
    });

    return () => unsubscribe();
  }, []);

  const loginAdmin = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim();
    if (!cleanEmail || !pass) {
      return { success: false, error: 'Please enter both email and password.' };
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, pass);
      const user = userCredential.user;
      const hasAdminRole = await verifyAdminPrivileges(user);

      if (!hasAdminRole) {
        // Authenticated with Firebase, but lacks administrator privileges!
        // Prevent unauthorized dashboard access and alert the user
        setAdminUser(user);
        setIsAdminLoggedIn(false);
        setAdminUsername(null);
        return {
          success: false,
          error: 'Access denied: This Firebase account does not have administrator privileges.',
        };
      }

      setAdminUser(user);
      setIsAdminLoggedIn(true);
      setAdminUsername(user.displayName || user.email || 'Admin');
      return { success: true };
    } catch (error: any) {
      const code = error?.code || '';
      console.warn("Firebase signInWithEmailAndPassword notice:", code || error?.message);

      let errorMsg = 'Invalid email or password.';
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
      console.warn("Firebase signOut notice:", error);
    } finally {
      setAdminUser(null);
      setIsAdminLoggedIn(false);
      setAdminUsername(null);
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  };

  const [d1SyncError, setD1SyncError] = useState<string | null>(null);

  // Club Info (Cloudflare D1 backed with localStorage offline fallback)
  const [clubInfo, setClubInfo] = useState<ClubInfo>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CLUB);
    return saved ? JSON.parse(saved) : initialClubInfo;
  });

  useEffect(() => {
    let isMounted = true;
    const loadClubSettings = async () => {
      const res = await apiFetchJson<{
        success: boolean;
        configured?: boolean;
        clubInfo?: ClubInfo | null;
      }>('/api/club-settings');

      if (!isMounted) return;
      if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
        setD1SyncError(res.error || 'Failed to load club settings from D1.');
        return;
      }
      if (res.ok && res.data?.configured && res.data.clubInfo && res.data.clubInfo.name) {
        setClubInfo(res.data.clubInfo);
        try {
          localStorage.setItem(STORAGE_KEYS.CLUB, JSON.stringify(res.data.clubInfo));
        } catch {
          // Ignore storage quota errors
        }
      }
    };
    loadClubSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  const updateClubInfo = async (info: ClubInfo): Promise<void> => {
    if (!isAdminLoggedIn) {
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson<{ success: boolean; clubInfo?: ClubInfo }>('/api/club-settings', {
      method: 'PUT',
      body: JSON.stringify(info),
    });

    if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
      const message = res.error || 'Failed to persist club settings.';
      setD1SyncError(message);
      throw new Error(message);
    }

    const saved = res.ok && res.data?.clubInfo ? res.data.clubInfo : info;
    setD1SyncError(null);
    setClubInfo(saved);
    try {
      localStorage.setItem(STORAGE_KEYS.CLUB, JSON.stringify(saved));
    } catch {
      // Ignore storage quota errors
    }
  };

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

  // Matches State (Cloudflare D1 authoritative with localStorage offline fallback)
  const [matches, setMatches] = useState<Match[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MATCHES);
    if (!saved) return [];
    try {
      const parsed: Match[] = JSON.parse(saved);
      const halabaOnly = parsed.filter(isHalabaMatch);
      if (halabaOnly.length > 0) {
        return halabaOnly;
      }
      return [];
    } catch {
      return [];
    }
  });
  const matchesRef = useRef<Match[]>(matches);
  matchesRef.current = matches;
  const d1MatchesPromiseRef = useRef<Promise<Match[] | null> | null>(null);

  // Load matches from Cloudflare D1 API (authoritative source of truth)
  useEffect(() => {
    let isMounted = true;
    const loadMatchesFromD1 = async (): Promise<Match[] | null> => {
      const res = await apiFetchJson<{ success: boolean; matches: any[] }>('/api/matches');
      if (!isMounted) return null;

      if (!res.ok) {
        if (!res.isHtmlFallback && !res.isOffline) {
          setD1SyncError(res.error || 'Failed to load matches from D1.');
        }
        return null;
      }

      if (!res.data || !Array.isArray(res.data.matches) || res.data.matches.length === 0) {
        return [];
      }

      const liveMatches: Match[] = res.data.matches
        .map((data: any) => ({
          id: data.id,
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
        }) as Match)
        .filter(isHalabaMatch);

      liveMatches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      if (liveMatches.length > 0) {
        matchesRef.current = liveMatches;
        setMatches(liveMatches);
        try {
          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(liveMatches));
        } catch (e) {
          console.warn('LocalStorage error caching matches:', e);
        }
      }
      return liveMatches;
    };

    d1MatchesPromiseRef.current = loadMatchesFromD1();
    return () => {
      isMounted = false;
    };
  }, []);

  const addMatch = async (matchData: Omit<Match, 'id'>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addMatch attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const matchId = `match-${Date.now()}`;
    const newMatch: Match = {
      ...matchData,
      id: matchId,
    };

    const res = await adminApiFetchJson<{ success: boolean; match?: Match }>('/api/matches', {
      method: 'POST',
      body: JSON.stringify(newMatch),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to add match.');
    }

    const savedMatch = res.ok && res.data?.match ? res.data.match : newMatch;
    const updated = [savedMatch, ...matches];
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  const updateMatch = async (id: string, updates: Partial<Match>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateMatch attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const cleanUpdates: Record<string, any> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        cleanUpdates[key] = value;
      }
    }

    const res = await adminApiFetchJson<{ success: boolean; match?: Match }>(
      `/api/matches/${encodeURIComponent(id)}`,
      {
        method: 'PUT',
        body: JSON.stringify(cleanUpdates),
      }
    );

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to update match.');
    }

    const updated = matches.map((m) =>
      m.id === id ? (res.ok && res.data?.match ? res.data.match : { ...m, ...updates }) : m
    );
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  const deleteMatch = async (id: string) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deleteMatch attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const res = await adminApiFetchJson(`/api/matches/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to delete match.');
    }

    const updated = matches.filter((m) => m.id !== id);
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
  };

  // Standings State (Cloudflare D1 backed with competition/season scope, manual lock, & history)
  const isLegacyCorruptedStandings = (list: any[]): boolean => {
    if (!Array.isArray(list) || list.length === 0) return true;
    const teamsWithZero = list.filter((t: any) => Number(t.played) === 0).length;
    if (list[0]?.teamId === 'halaba' && Number(list[0]?.points) === 8 && teamsWithZero > 10) return true;
    return false;
  };

  const getStandingsCacheKey = (competition: string, season: string) =>
    competition === DEFAULT_STANDINGS_COMPETITION && season === DEFAULT_STANDINGS_SEASON
      ? STORAGE_KEYS.STANDINGS
      : `halaba_standings_${competition}_${season}`;

  const [standingsCompetition, setStandingsCompetition] = useState<string>(DEFAULT_STANDINGS_COMPETITION);
  const [standingsSeason, setStandingsSeason] = useState<string>(DEFAULT_STANDINGS_SEASON);
  const [standingsMode, setStandingsMode] = useState<StandingsUpdateMode>('automatic');
  const [standingsHistory, setStandingsHistory] = useState<StandingsHistoryEntry[]>([]);
  const [standingsError, setStandingsError] = useState<string | null>(null);

  const standingsScopeRef = useRef({
    competition: DEFAULT_STANDINGS_COMPETITION,
    season: DEFAULT_STANDINGS_SEASON,
  });
  standingsScopeRef.current = { competition: standingsCompetition, season: standingsSeason };

  const standingsModeRef = useRef<StandingsUpdateMode>(standingsMode);
  standingsModeRef.current = standingsMode;

  const [standings, setStandings] = useState<StandingTeam[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STANDINGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 18 && !isLegacyCorruptedStandings(parsed)) {
          const hasHalaba = parsed.some((t) => t.isHalaba || t.teamId === 'halaba');
          const hasCbe = parsed.some((t) => t.teamId === 'cbe_sa');
          if (hasHalaba && hasCbe) {
            return parsed;
          }
        }
      }
    } catch {
      // Ignore
    }
    return initialStandings;
  });

  const persistStandingsCache = useCallback((competition: string, season: string, rows: StandingTeam[]) => {
    try {
      localStorage.setItem(getStandingsCacheKey(competition, season), JSON.stringify(rows));
    } catch {
      // Ignore storage quota errors
    }
  }, []);

  const loadStandingsForScope = useCallback(
    async (
      competitionArg?: string,
      seasonArg?: string,
      includeHistoryArg?: boolean
    ): Promise<void> => {
      const competition = competitionArg || standingsScopeRef.current.competition;
      const season = seasonArg || standingsScopeRef.current.season;
      const includeHistory = includeHistoryArg ?? isAdminLoggedIn;

      const query = new URLSearchParams({
        competition,
        season,
        ...(includeHistory ? { includeHistory: '1' } : {}),
      });

      const res = await apiFetchJson<{
        success: boolean;
        configured?: boolean;
        competition?: string;
        season?: string;
        updateMode?: StandingsUpdateMode;
        standings?: any[];
        history?: StandingsHistoryEntry[];
      }>(`/api/standings?${query.toString()}`);

      if (
        standingsScopeRef.current.competition !== competition ||
        standingsScopeRef.current.season !== season
      ) {
        return;
      }

      if (!res.ok) {
        if (!res.isHtmlFallback && !res.isOffline) {
          setStandingsError(res.error || 'Failed to load standings from D1.');
        }
        return;
      }

      if (!res.data || res.data.configured === false) {
        return;
      }

      const mode: StandingsUpdateMode = res.data.updateMode === 'manual' ? 'manual' : 'automatic';
      setStandingsMode(mode);
      standingsModeRef.current = mode;
      setStandingsError(null);

      if (Array.isArray(res.data.history)) {
        setStandingsHistory(res.data.history);
      }

      if (!Array.isArray(res.data.standings) || res.data.standings.length === 0) {
        if (
          competition !== DEFAULT_STANDINGS_COMPETITION ||
          season !== DEFAULT_STANDINGS_SEASON
        ) {
          setStandings([]);
          persistStandingsCache(competition, season, []);
        }
        return;
      }

      const normalized = normalizeStandingsScopeRows(res.data.standings, competition, season);
      setStandings(normalized);
      persistStandingsCache(competition, season, normalized);
    },
    [isAdminLoggedIn, persistStandingsCache]
  );

  // Load standings from Cloudflare D1 API if configured
  useEffect(() => {
    void loadStandingsForScope(standingsCompetition, standingsSeason, isAdminLoggedIn);
  }, [standingsCompetition, standingsSeason, isAdminLoggedIn, loadStandingsForScope]);

  const setStandingsScope = useCallback(
    async (competition: string, season?: string): Promise<void> => {
      const nextComp = competition || DEFAULT_STANDINGS_COMPETITION;
      const nextSeason = season || standingsScopeRef.current.season || DEFAULT_STANDINGS_SEASON;
      standingsScopeRef.current = { competition: nextComp, season: nextSeason };
      setStandingsCompetition(nextComp);
      setStandingsSeason(nextSeason);
      setStandingsError(null);

      try {
        const cached = localStorage.getItem(getStandingsCacheKey(nextComp, nextSeason));
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed)) {
            setStandings(parsed);
          }
        } else if (
          nextComp !== DEFAULT_STANDINGS_COMPETITION ||
          nextSeason !== DEFAULT_STANDINGS_SEASON
        ) {
          setStandings([]);
        }
      } catch {
        // Ignore cache read error
      }

      await loadStandingsForScope(nextComp, nextSeason, isAdminLoggedIn);
    },
    [isAdminLoggedIn, loadStandingsForScope]
  );

  const setStandingsUpdateMode = async (mode: StandingsUpdateMode): Promise<void> => {
    if (!isAdminLoggedIn) {
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const { competition, season } = standingsScopeRef.current;

    const res = await adminApiFetchJson<{
      success: boolean;
      updateMode?: StandingsUpdateMode;
      standings?: any[];
      history?: StandingsHistoryEntry[];
    }>('/api/standings', {
      method: 'POST',
      body: JSON.stringify({
        action: 'setMode',
        competition,
        season,
        updateMode: mode,
      }),
    });

    if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
      const message = res.error || 'Failed to update standings mode.';
      setStandingsError(message);
      throw new Error(message);
    }

    const nextMode = res.ok && res.data?.updateMode ? res.data.updateMode : mode;
    setStandingsMode(nextMode);
    standingsModeRef.current = nextMode;
    setStandingsError(null);

    if (res.ok && Array.isArray(res.data?.history)) {
      setStandingsHistory(res.data.history);
    }
  };

  const updateStanding = async (teamId: string, updates: Partial<StandingTeam>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateStanding attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const { competition, season } = standingsScopeRef.current;
    const updated = standings.map((item) => {
      if (item.teamId === teamId) {
        const next = { ...item, ...updates };
        next.goalDifference = next.goalsFor - next.goalsAgainst;
        return next;
      }
      return item;
    });
    updated.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
    const reordered = updated.map((t, idx) => ({ ...t, position: idx + 1 }));

    const targetTeam = reordered.find((t) => t.teamId === teamId);
    let finalStandings = reordered;

    if (targetTeam) {
      const res = await adminApiFetchJson<{
        success: boolean;
        updateMode?: StandingsUpdateMode;
        standings?: any[];
        history?: StandingsHistoryEntry[];
      }>(`/api/standings/${encodeURIComponent(teamId)}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...targetTeam,
          competition,
          season,
          lockManual: true,
        }),
      });

      if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
        const message = res.error || 'Failed to update standing.';
        setStandingsError(message);
        throw new Error(message);
      }

      if (res.ok && res.data) {
        if (Array.isArray(res.data.standings) && res.data.standings.length > 0) {
          finalStandings = normalizeStandingsScopeRows(res.data.standings, competition, season);
        }
        if (res.data.updateMode) {
          setStandingsMode(res.data.updateMode);
          standingsModeRef.current = res.data.updateMode;
        } else {
          setStandingsMode('manual');
          standingsModeRef.current = 'manual';
        }
        if (Array.isArray(res.data.history)) {
          setStandingsHistory(res.data.history);
        }
      } else {
        setStandingsMode('manual');
        standingsModeRef.current = 'manual';
      }
    }

    setStandingsError(null);
    setStandings(finalStandings);
    persistStandingsCache(competition, season, finalStandings);
  };

  const resetStandings = async () => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized resetStandings attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const { competition, season } = standingsScopeRef.current;

    const res = await adminApiFetchJson<{
      success: boolean;
      updateMode?: StandingsUpdateMode;
      standings?: any[];
      history?: StandingsHistoryEntry[];
    }>('/api/standings', {
      method: 'POST',
      body: JSON.stringify({
        action: 'reset',
        competition,
        season,
        standings: initialStandings,
      }),
    });

    if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
      const message = res.error || 'Failed to reset standings.';
      setStandingsError(message);
      throw new Error(message);
    }

    const nextRows =
      res.ok && Array.isArray(res.data?.standings) && res.data.standings.length > 0
        ? normalizeStandingsScopeRows(res.data.standings, competition, season)
        : initialStandings;

    setStandingsError(null);
    setStandings(nextRows);
    persistStandingsCache(competition, season, nextRows);

    if (res.ok && Array.isArray(res.data?.history)) {
      setStandingsHistory(res.data.history);
    }
  };

  const recalculateStandingsFromMatches = async () => {
    await syncNow(true);
  };


  // Real-time Firestore sync listener status
  useEffect(() => {
    // Keep local cache in sync and ensure authoritative Firestore data persists
    if (matches.length > 0) {
      localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(matches));
    }
  }, [matches]);


  // News State & Real-Time Firebase Firestore Integration with Instant Offline Cache
  const getCategoryFallbackImage = (category?: string): string => {
    switch (category) {
      case 'MATCH_REPORTS':
        return ClubImages.newsBahirDarWin || ClubImages.matchAction;
      case 'INTERVIEWS':
        return ClubImages.newsCoachInterview;
      case 'ACADEMY':
        return ClubImages.academyTraining;
      case 'TRANSFERS':
        return ClubImages.squadLineup;
      case 'CLUB_NEWS':
      case 'COMMUNITY':
      default:
        return ClubImages.heroStadium;
    }
  };

  const [news, setNews] = useState<NewsArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      if (saved) {
        const parsed: NewsArticle[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const initialMatch = initialNews.find((n) => n.id === item.id);
            return {
              ...item,
              imageUrl: item.imageUrl || initialMatch?.imageUrl || getCategoryFallbackImage(item.category),
            };
          });
        }
      }
    } catch (e) {
      // ignore
    }
    return initialNews;
  });

  // Rapidly hydrate full-resolution news & images from IndexedDB (runs in ~10ms on startup)
  useEffect(() => {
    getIdbItem<NewsArticle[]>('halaba_news_full_cache_v2')
      .then((cached) => {
        if (cached && Array.isArray(cached) && cached.length > 0) {
          setNews((currentNews) => {
            const currentMap = new Map(currentNews.map((n) => [n.id, n]));
            let hasChanges = false;

            const merged = cached.map((c) => {
              const live = currentMap.get(c.id);
              if (!live) {
                hasChanges = true;
                return c;
              }
              // If live item is missing image or only has low-res thumbnail, adopt cached full image
              if (!live.imageUrl || (live.imageUrl.length < 5000 && c.imageUrl && c.imageUrl.length > 5000)) {
                hasChanges = true;
                return { ...live, imageUrl: c.imageUrl };
              }
              return live;
            });

            currentNews.forEach((n) => {
              if (!merged.some((m) => m.id === n.id)) {
                merged.unshift(n);
                hasChanges = true;
              }
            });

            return hasChanges ? merged : currentNews;
          });
        }
      })
      .catch(() => {
        // ignore
      });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadNewsFromD1 = async () => {
      const limitCount = isAdminLoggedIn ? 50 : 24;
      const res = await apiFetchJson<{ success: boolean; articles: any[] }>(
        `/api/news?limit=${limitCount}`
      );

      if (!isMounted || !res.ok || !res.data || !Array.isArray(res.data.articles) || res.data.articles.length === 0) {
        return;
      }

      const liveArticles: NewsArticle[] = res.data.articles.map((data: any) => {
        const initialMatch = initialNews.find((n) => n.id === data.id);
        const resolvedImage = data.imageUrl || initialMatch?.imageUrl || getCategoryFallbackImage(data.category);

        return {
          id: data.id,
          title: typeof data.title === 'object' && data.title !== null
            ? { en: data.title.en || '', am: data.title.am || data.title.en || '', om: data.title.om || data.title.en || '' }
            : (initialMatch ? initialMatch.title : { en: String(data.title || ''), am: String(data.title || ''), om: String(data.title || '') }),
          summary: typeof data.summary === 'object' && data.summary !== null
            ? { en: data.summary.en || '', am: data.summary.am || data.summary.en || '', om: data.summary.om || data.summary.en || '' }
            : (initialMatch ? initialMatch.summary : { en: String(data.summary || ''), am: String(data.summary || ''), om: String(data.summary || '') }),
          content: typeof data.content === 'object' && data.content !== null
            ? { en: data.content.en || '', am: data.content.am || data.content.en || '', om: data.content.om || data.content.en || '' }
            : (initialMatch ? initialMatch.content : { en: String(data.content || ''), am: String(data.content || ''), om: String(data.content || '') }),
          category: data.category || initialMatch?.category || 'CLUB_NEWS',
          date: data.date || initialMatch?.date || new Date().toISOString().slice(0, 10),
          author: data.author || initialMatch?.author || 'Club Administration',
          imageUrl: resolvedImage,
          readTime: data.readTime || initialMatch?.readTime || '3 min read',
          isFeatured: data.id === 'news-1793126013273' || data.id === 'sxRTmExguBl4NTz4RYjR' || Boolean(data.isFeatured || initialMatch?.isFeatured),
        } as NewsArticle;
      });

      // Keep supplementary membership and academy stories present
      initialNews.forEach((initArt) => {
        if (!liveArticles.some((a) => a.id === initArt.id)) {
          liveArticles.push({ ...initArt });
        }
      });

      if (liveArticles.length > 0) {
        setNews(liveArticles);
        setIdbItem('halaba_news_full_cache_v2', liveArticles);

        Promise.all(
          liveArticles.map(async (art) => {
            if (art.imageUrl && art.imageUrl.startsWith('data:')) {
              try {
                const thumb = await createThumbnail(art.imageUrl, 360, 0.55);
                return { ...art, imageUrl: thumb };
              } catch {
                return art;
              }
            }
            return art;
          })
        ).then((thumbnailArticles) => {
          try {
            localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(thumbnailArticles));
          } catch (e) {
            console.warn('Could not cache news thumbnails in localStorage:', e);
          }
        }).catch(() => {
          // ignore
        });
      }
    };

    loadNewsFromD1();
    return () => {
      isMounted = false;
    };
  }, [isAdminLoggedIn]);

  const addNewsArticle = async (art: Omit<NewsArticle, 'id'>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addNewsArticle attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const newId = `news-${Date.now()}`;
    const newArticle: NewsArticle = {
      ...art,
      id: newId,
      imageUrl: art.imageUrl || getCategoryFallbackImage(art.category),
    };

    const res = await adminApiFetchJson<{ success: boolean; article?: NewsArticle }>('/api/news', {
      method: 'POST',
      body: JSON.stringify(newArticle),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to publish news article.');
    }

    const savedArticle = res.ok && res.data?.article ? res.data.article : newArticle;
    const updated = [savedArticle, ...news];
    setNews(updated);
    setIdbItem('halaba_news_full_cache_v2', updated);

    createThumbnail(savedArticle.imageUrl || '', 360, 0.55).then((thumb) => {
      try {
        const cached = updated.map((a) => (a.id === savedArticle.id ? { ...a, imageUrl: thumb } : a));
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(cached));
      } catch {
        // ignore
      }
    });
  };

  const updateNewsArticle = async (id: string, updates: Partial<NewsArticle>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateNewsArticle attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson<{ success: boolean; article?: NewsArticle }>(
      `/api/news/${encodeURIComponent(id)}`,
      {
        method: 'PUT',
        body: JSON.stringify(updates),
      }
    );

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to update news article.');
    }

    const updated = news.map((n) =>
      n.id === id ? (res.ok && res.data?.article ? res.data.article : { ...n, ...updates }) : n
    );
    setNews(updated);
    setIdbItem('halaba_news_full_cache_v2', updated);
  };

  const deleteNewsArticle = async (id: string) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deleteNewsArticle attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson(`/api/news/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to delete news article.');
    }

    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    setIdbItem('halaba_news_full_cache_v2', updated);
    try {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Helper to guarantee the official 30-player roster is completely populated.
  // Even if Firestore or local storage has partial/draft records (such as 14 players),
  // this merges custom stats/photos while ensuring all 30 squad members are included.
  const reconcileSquadWithOfficialList = (liveList: Player[]): Player[] => {
    const matchedLiveIds = new Set<string>();

    const mergedOfficial: Player[] = initialPlayers.map((official) => {
      // Find matching player in liveList by:
      // 1. Same id
      // 2. Same jersey number (most reliable for matchday squad)
      // 3. Normalized name equality
      const matched = liveList.find((lp) => {
        if (lp.id === official.id) return true;
        if (typeof lp.number === 'number' && lp.number === official.number) return true;
        const normLive = (lp.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const normOff = (official.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        return normLive === normOff && normOff.length > 0;
      });

      if (matched) {
        matchedLiveIds.add(matched.id);
        return {
          ...official,
          id: matched.id || official.id,
          photoUrl: matched.photoUrl || official.photoUrl,
          appearances: matched.appearances ?? official.appearances,
          goals: matched.goals ?? official.goals,
          assists: matched.assists ?? official.assists,
          cleanSheets: matched.cleanSheets ?? official.cleanSheets,
          birthYear: matched.birthYear || official.birthYear,
          // Guarantee official name, position, jersey number, and captaincy
          name: official.name,
          position: official.position,
          number: official.number,
          isCaptain: Boolean(official.isCaptain),
          nationality: official.nationality,
        };
      }

      return official;
    });

    // Also include any extra custom players added in Firestore that aren't in initialPlayers
    const extraLivePlayers = liveList.filter(
      (lp) => !matchedLiveIds.has(lp.id) && !initialPlayers.some((p) => p.number === lp.number)
    );

    return [...mergedOfficial, ...extraLivePlayers];
  };

  // Players & Staff State & Real-Time Firebase Firestore Integration
  const [players, setPlayers] = useState<Player[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= initialPlayers.length) {
          return parsed;
        }
        if (Array.isArray(parsed) && parsed.length > 0) {
          // If cached squad has fewer than 30 (e.g. legacy 14), reconcile it immediately
          return reconcileSquadWithOfficialList(parsed);
        }
      }
    } catch {
      // fallback
    }
    return initialPlayers;
  });

  const [staff, setStaff] = useState<StaffMember[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STAFF);
    return saved ? JSON.parse(saved) : initialStaff;
  });

  const hasLoadedPlayersRef = useRef<boolean>(false);
  const hasLoadedStaffRef = useRef<boolean>(false);
  const hasSyncedMissingPlayersRef = useRef<boolean>(false);

  useEffect(() => {
    // Only fetch players when viewing About/Admin pages or logged in as admin
    if (currentPage !== 'about' && currentPage !== 'admin' && !isAdminLoggedIn) {
      return;
    }

    if (!isAdminLoggedIn && hasLoadedPlayersRef.current && players.length >= initialPlayers.length) {
      return;
    }

    let isMounted = true;
    const loadPlayersFromD1 = async () => {
      const res = await apiFetchJson<{ success: boolean; players: any[] }>('/api/players');
      if (!isMounted || !res.ok || !res.data || !Array.isArray(res.data.players)) {
        return;
      }

      hasLoadedPlayersRef.current = true;
      const rawPlayers = res.data.players;

      if (rawPlayers.length === 0) {
        if (isAdminLoggedIn && !hasSyncedMissingPlayersRef.current) {
          hasSyncedMissingPlayersRef.current = true;
          adminApiFetchJson('/api/players', {
            method: 'POST',
            body: JSON.stringify({ action: 'syncMissing', players: initialPlayers }),
          }).catch(() => {});
        }
        setPlayers(initialPlayers);
        localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(initialPlayers));
        return;
      }

      const livePlayers: Player[] = rawPlayers.map((data: any) => ({
        id: data.id,
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
      }) as Player);

      const fullSquad = reconcileSquadWithOfficialList(livePlayers);
      setPlayers(fullSquad);
      localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(fullSquad));

      if (isAdminLoggedIn && !hasSyncedMissingPlayersRef.current && rawPlayers.length < initialPlayers.length) {
        hasSyncedMissingPlayersRef.current = true;
        const missingPlayers = fullSquad.filter(
          (player) => !rawPlayers.some((d: any) => d.id === player.id || d.number === player.number)
        );
        if (missingPlayers.length > 0) {
          adminApiFetchJson('/api/players', {
            method: 'POST',
            body: JSON.stringify({ action: 'syncMissing', players: missingPlayers }),
          }).catch(() => {});
        }
      }
    };

    loadPlayersFromD1();
    return () => {
      isMounted = false;
    };
  }, [currentPage, isAdminLoggedIn, players.length]);

  useEffect(() => {
    if (currentPage !== 'about' && currentPage !== 'admin' && !isAdminLoggedIn) {
      return;
    }

    if (!isAdminLoggedIn && hasLoadedStaffRef.current && staff.length > 0) {
      return;
    }

    let isMounted = true;
    const loadStaffFromD1 = async () => {
      const res = await apiFetchJson<{ success: boolean; staff: any[] }>('/api/staff');
      if (!isMounted || !res.ok || !res.data || !Array.isArray(res.data.staff)) {
        return;
      }

      hasLoadedStaffRef.current = true;
      if (res.data.staff.length === 0) {
        return;
      }

      const liveStaff: StaffMember[] = res.data.staff.map((data: any) => ({
        id: data.id,
        name: data.name || 'Staff',
        role: data.role || 'Coach',
        department: data.department || 'Coaching',
        nationality: data.nationality || 'Ethiopian',
        photoUrl: data.photoUrl,
      }) as StaffMember);

      if (liveStaff.length > 0) {
        setStaff(liveStaff);
        localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(liveStaff));
      }
    };

    loadStaffFromD1();
    return () => {
      isMounted = false;
    };
  }, [currentPage, isAdminLoggedIn, staff.length]);

  const addPlayer = async (p: Omit<Player, 'id'>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addPlayer attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const id = `p-${Date.now()}`;
    const newP: Player = { ...p, id };

    const res = await adminApiFetchJson<{ success: boolean; player?: Player }>('/api/players', {
      method: 'POST',
      body: JSON.stringify(newP),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to add player.');
    }

    const savedPlayer = res.ok && res.data?.player ? res.data.player : newP;
    const updated = [...players, savedPlayer];
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  const updatePlayer = async (id: string, updates: Partial<Player>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updatePlayer attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson<{ success: boolean; player?: Player }>(
      `/api/players/${encodeURIComponent(id)}`,
      {
        method: 'PUT',
        body: JSON.stringify(updates),
      }
    );

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to update player.');
    }

    const updated = players.map((p) =>
      p.id === id ? (res.ok && res.data?.player ? res.data.player : { ...p, ...updates }) : p
    );
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  const deletePlayer = async (id: string) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deletePlayer attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson(`/api/players/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to delete player.');
    }

    const updated = players.filter((p) => p.id !== id);
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
  };

  const addStaff = async (s: Omit<StaffMember, 'id'>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addStaff attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const id = `s-${Date.now()}`;
    const newS: StaffMember = { ...s, id };

    const res = await adminApiFetchJson<{ success: boolean; staffMember?: StaffMember }>('/api/staff', {
      method: 'POST',
      body: JSON.stringify(newS),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to add staff member.');
    }

    const savedStaff = res.ok && res.data?.staffMember ? res.data.staffMember : newS;
    const updated = [...staff, savedStaff];
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
  };

  const updateStaff = async (id: string, updates: Partial<StaffMember>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateStaff attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson<{ success: boolean; staffMember?: StaffMember }>(
      `/api/staff/${encodeURIComponent(id)}`,
      {
        method: 'PUT',
        body: JSON.stringify(updates),
      }
    );

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to update staff member.');
    }

    const updated = staff.map((s) =>
      s.id === id ? (res.ok && res.data?.staffMember ? res.data.staffMember : { ...s, ...updates }) : s
    );
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
  };

  const deleteStaff = async (id: string) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deleteStaff attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson(`/api/staff/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to delete staff member.');
    }

    const updated = staff.filter((s) => s.id !== id);
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
  };

  // Memberships State & Real-Time Firebase Firestore Integration
  const [memberships, setMemberships] = useState<MembershipApplication[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MEMBERSHIPS);
    return saved ? JSON.parse(saved) : initialMemberships;
  });

  useEffect(() => {
    // Supporter membership records are admin-only data.
    // Ordinary visitors never need to listen to all membership records.
    // This saves hundreds to thousands of reads per user session and prevents unauthorized read errors.
    if (!isAdminLoggedIn) {
      return;
    }

    const membershipsRef = collection(db, 'memberships');
    const unsubscribe = onSnapshot(membershipsRef, async (snapshot) => {
      if (snapshot.empty) {
        if (isAdminLoggedIn) {
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
      if (typeof navigator !== 'undefined' && !navigator.onLine) return;
      console.debug('Firebase real-time memberships notice (offline):', error);
      handleFirestoreError(error, OperationType.LIST, 'memberships');
    });
    return () => unsubscribe();
  }, [isAdminLoggedIn]);

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

    // Security: Only administrators can pre-approve applications. Public submissions start as PENDING.
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
      status: isAdminLoggedIn ? 'APPROVED' : 'PENDING',
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: isAdminLoggedIn ? 'PAID' : 'PENDING',
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
      status: isAdminLoggedIn ? 'APPROVED' : 'PENDING',
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: isAdminLoggedIn ? 'PAID' : 'PENDING',
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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized membership update blocked');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized membership delete blocked');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
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
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SHOP_ITEMS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const initialMatch = initialShopItems.find((i) => i.id === item.id);
            return {
              ...item,
              imageUrl: item.imageUrl || initialMatch?.imageUrl || ClubImages.jerseyHomeReal,
            };
          });
        }
      }
    } catch (e) {
      // ignore
    }
    return initialShopItems;
  });
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);
  const [productsSyncError, setProductsSyncError] = useState<string | null>(null);
  const hasLoadedProductsRef = useRef<boolean>(false);
  const productsBackendRef = useRef<'unknown' | 'd1' | 'firestore'>('unknown');
  const [useFirestoreProductsFallback, setUseFirestoreProductsFallback] = useState<boolean>(false);

  useEffect(() => {
    if (currentPage !== 'shop' && currentPage !== 'admin' && !isAdminLoggedIn) {
      return;
    }

    if (!isAdminLoggedIn && hasLoadedProductsRef.current && shopItems.length > 0) {
      return;
    }

    let isMounted = true;
    const loadProductsFromD1 = async () => {
      setIsProductsLoading(true);
      const res = await apiFetchJson<{
        success: boolean;
        configured?: boolean;
        products?: any[];
      }>('/api/products');

      if (!isMounted) return;

      if (res.ok && res.data?.configured === true) {
        productsBackendRef.current = 'd1';
        setUseFirestoreProductsFallback(false);
        hasLoadedProductsRef.current = true;
        setIsProductsLoading(false);
        setProductsSyncError(null);

        const rawProducts = Array.isArray(res.data.products) ? res.data.products : [];
        if (rawProducts.length === 0) {
          setShopItems(initialShopItems);
          localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
          return;
        }

        const liveProducts: ShopItem[] = rawProducts.map((data: any) => {
          const initialMatch = initialShopItems.find((i) => i.id === data.id);
          const resolvedImage = initialMatch?.imageUrl || data.imageUrl || ClubImages.jerseyHomeReal;

          return {
            id: data.id,
            name: typeof data.name === 'object' && data.name !== null
              ? { en: data.name.en || '', am: data.name.am || data.name.en || '', om: data.name.om || data.name.en || '' }
              : (initialMatch ? initialMatch.name : { en: String(data.name || ''), am: String(data.name || ''), om: String(data.name || '') }),
            description: typeof data.description === 'object' && data.description !== null
              ? { en: data.description.en || '', am: data.description.am || data.description.en || '', om: data.description.om || data.description.en || '' }
              : (initialMatch ? initialMatch.description : { en: String(data.description || ''), am: String(data.description || ''), om: String(data.description || '') }),
            price: typeof data.price === 'number' ? data.price : (initialMatch ? initialMatch.price : (parseFloat(data.price) || 0)),
            imageUrl: resolvedImage,
            availableSizes: Array.isArray(data.availableSizes) && data.availableSizes.length > 0 ? data.availableSizes : (initialMatch ? initialMatch.availableSizes : ['S', 'M', 'L', 'XL']),
            category: (data.category as 'JERSEY' | 'KIT' | 'ACCESSORY') || (initialMatch ? initialMatch.category : 'JERSEY'),
            inStock: data.inStock !== undefined ? Boolean(data.inStock) : true,
            featured: Boolean(data.featured) || (initialMatch ? initialMatch.featured : false),
          };
        });

        initialShopItems.forEach((initItem) => {
          if (!liveProducts.some((p) => p.id === initItem.id)) {
            liveProducts.push({ ...initItem });
          }
        });

        liveProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        setShopItems(liveProducts);
        try {
          const cacheSafeProds = liveProducts.map((p) => ({
            ...p,
            imageUrl: p.imageUrl?.startsWith('data:') ? '' : p.imageUrl,
          }));
          localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(cacheSafeProds));
        } catch (e) {
          console.warn('Could not cache shop items in localStorage:', e);
        }
        return;
      }

      if ((res.ok && res.data?.configured === false) || res.isHtmlFallback) {
        productsBackendRef.current = 'firestore';
        setUseFirestoreProductsFallback(true);
        return;
      }

      setIsProductsLoading(false);
    };

    loadProductsFromD1();
    return () => {
      isMounted = false;
    };
  }, [currentPage, isAdminLoggedIn, shopItems.length]);

  useEffect(() => {
    if (!useFirestoreProductsFallback) {
      return;
    }
    if (currentPage !== 'shop' && currentPage !== 'admin' && !isAdminLoggedIn) {
      return;
    }

    const productsRef = collection(db, 'products');

    const unsubscribe = onSnapshot(productsRef, async (snapshot) => {
      hasLoadedProductsRef.current = true;
      setIsProductsLoading(false);
      setProductsSyncError(null);

      if (snapshot.empty) {
        if (isAdminLoggedIn) {
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
            setShopItems(initialShopItems);
            localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
          }
        } else {
          setShopItems(initialShopItems);
          localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
        }
        return;
      }

      const liveProducts: ShopItem[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        const initialMatch = initialShopItems.find((i) => i.id === docSnap.id);
        const resolvedImage = initialMatch?.imageUrl || data.imageUrl || ClubImages.jerseyHomeReal;

        return {
          id: docSnap.id,
          name: typeof data.name === 'object' && data.name !== null
            ? { en: data.name.en || '', am: data.name.am || data.name.en || '', om: data.name.om || data.name.en || '' }
            : (initialMatch ? initialMatch.name : { en: String(data.name || ''), am: String(data.name || ''), om: String(data.name || '') }),
          description: typeof data.description === 'object' && data.description !== null
            ? { en: data.description.en || '', am: data.description.am || data.description.en || '', om: data.description.om || data.description.en || '' }
            : (initialMatch ? initialMatch.description : { en: String(data.description || ''), am: String(data.description || ''), om: String(data.description || '') }),
          price: typeof data.price === 'number' ? data.price : (initialMatch ? initialMatch.price : (parseFloat(data.price) || 0)),
          imageUrl: resolvedImage,
          availableSizes: Array.isArray(data.availableSizes) && data.availableSizes.length > 0 ? data.availableSizes : (initialMatch ? initialMatch.availableSizes : ['S', 'M', 'L', 'XL']),
          category: (data.category as 'JERSEY' | 'KIT' | 'ACCESSORY') || (initialMatch ? initialMatch.category : 'JERSEY'),
          inStock: data.inStock !== undefined ? Boolean(data.inStock) : true,
          featured: Boolean(data.featured) || (initialMatch ? initialMatch.featured : false),
        };
      });

      initialShopItems.forEach((initItem) => {
        if (!liveProducts.some((p) => p.id === initItem.id)) {
          liveProducts.push({ ...initItem });
        }
      });

      liveProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

      setShopItems(liveProducts);
      try {
        const cacheSafeProds = liveProducts.map((p) => ({
          ...p,
          imageUrl: p.imageUrl?.startsWith('data:') ? '' : p.imageUrl,
        }));
        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(cacheSafeProds));
      } catch (e) {
        console.warn('Could not cache shop items in localStorage:', e);
      }
      localStorage.setItem('hcfc_firestore_products_seeded', 'true');
    }, (error) => {
      if (typeof navigator !== 'undefined' && !navigator.onLine) return;
      console.debug('Firebase real-time products sync notice (offline):', error);
      setIsProductsLoading(false);
      setProductsSyncError(error.message);
      handleFirestoreError(error, OperationType.LIST, 'products');
    });

    return () => unsubscribe();
  }, [useFirestoreProductsFallback, currentPage, isAdminLoggedIn]);

  const addShopItem = async (item: Omit<ShopItem, 'id'>) => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addShopItem attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    if (productsBackendRef.current !== 'firestore') {
      const id = `shop-${Date.now()}`;
      const payload: ShopItem = { ...item, id };
      const res = await adminApiFetchJson<{ success: boolean; configured?: boolean; product?: ShopItem }>(
        '/api/products',
        {
          method: 'POST',
          body: JSON.stringify(payload),
        }
      );

      if (res.ok && res.data?.configured !== false) {
        productsBackendRef.current = 'd1';
        const savedItem = res.data?.product || payload;
        setShopItems((prev) => [savedItem, ...prev.filter((p) => p.id !== savedItem.id)]);
        return savedItem.id;
      }

      if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
        throw new Error(res.error || 'Failed to save product to D1.');
      }
    }

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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateShopItem attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    if (productsBackendRef.current !== 'firestore') {
      const existing = shopItems.find((item) => item.id === id);
      const res = await adminApiFetchJson<{ success: boolean; configured?: boolean; product?: ShopItem }>(
        `/api/products/${encodeURIComponent(id)}`,
        {
          method: 'PUT',
          body: JSON.stringify(existing ? { ...existing, ...updates } : updates),
        }
      );

      if (res.ok && res.data?.configured !== false) {
        productsBackendRef.current = 'd1';
        const updated = shopItems.map((item) =>
          item.id === id ? (res.data?.product || { ...item, ...updates }) : item
        );
        setShopItems(updated);
        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
        return;
      }

      if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
        throw new Error(res.error || 'Failed to update product in D1.');
      }
    }

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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deleteShopItem attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    if (productsBackendRef.current !== 'firestore') {
      const res = await adminApiFetchJson<{ success: boolean; configured?: boolean }>(
        `/api/products/${encodeURIComponent(id)}`,
        {
          method: 'DELETE',
        }
      );

      if (res.ok && res.data?.configured !== false) {
        productsBackendRef.current = 'd1';
        const updated = shopItems.filter((item) => item.id !== id);
        setShopItems(updated);
        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
        return;
      }

      if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
        throw new Error(res.error || 'Failed to delete product from D1.');
      }
    }

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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized resetShopItems attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    if (productsBackendRef.current !== 'firestore') {
      const res = await adminApiFetchJson<{ success: boolean; configured?: boolean }>(
        '/api/products',
        {
          method: 'POST',
          body: JSON.stringify({ action: 'reset', products: initialShopItems }),
        }
      );

      if (res.ok && res.data?.configured !== false) {
        productsBackendRef.current = 'd1';
        setShopItems(initialShopItems);
        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
        return;
      }

      if (!res.ok && res.status !== 501 && !res.isHtmlFallback && !res.isOffline) {
        throw new Error(res.error || 'Failed to reset products in D1.');
      }
    }

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
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateShopOrderStatus attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }
    const updated = shopOrders.map((o) => (o.id === id || o.orderNumber === id ? { ...o, status } : o));
    setShopOrders(updated);
    localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
  };

  // Checkout Modal State
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<ShopItem | null>(null);

  const openCheckoutModal = useCallback((item: ShopItem) => {
    setCheckoutItem(item);
    setIsCheckoutModalOpen(true);
  }, []);

  const closeCheckoutModal = useCallback(() => {
    setIsCheckoutModalOpen(false);
    setCheckoutItem(null);
  }, []);

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
  const openDonationModal = useCallback(() => setIsDonationModalOpen(true), []);
  const closeDonationModal = useCallback(() => setIsDonationModalOpen(false), []);

  // Club Dossier Modal
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const openDossier = useCallback(() => setIsDossierOpen(true), []);
  const closeDossier = useCallback(() => setIsDossierOpen(false), []);

  // Live Notifications
  const [liveNotifications, setLiveNotifications] = useState<LiveNotification[]>([]);
  const dismissNotification = useCallback((id: string) => {
    setLiveNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Live Auto-Sync & Simulation Engine
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = useState(false);
  const [autoSyncInterval, setAutoSyncIntervalState] = useState(30);
  const [secondsUntilNextSync, setSecondsUntilNextSync] = useState(30);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date>(() => new Date());

  const toggleAutoSync = useCallback(() => setIsAutoSyncEnabled((prev) => !prev), []);
  const setAutoSyncInterval = useCallback((interval: number) => {
    setAutoSyncIntervalState(interval);
    setSecondsUntilNextSync(interval);
  }, []);

  const inFlightSyncRef = useRef<boolean>(false);
  const syncRequestIdRef = useRef<number>(0);

  const syncNow = async (isManual: boolean = false) => {
    if (inFlightSyncRef.current) {
      if (isManual) {
        const msg = 'A standings & fixtures sync is already in progress.';
        setStandingsError(msg);
        throw new Error(msg);
      }
      return;
    }

    inFlightSyncRef.current = true;
    const reqId = ++syncRequestIdRef.current;
    const { competition, season } = standingsScopeRef.current;
    setIsSyncing(true);
    if (isManual) {
      setStandingsError(null);
    }

    let syncSource = 'TheSportsDB Official EPL Feed';

    try {
      // Ensure authoritative D1 matches finish initial load before merging SportsDB fixtures
      if (d1MatchesPromiseRef.current) {
        try {
          await d1MatchesPromiseRef.current;
        } catch {
          // Proceed with current state if initial load failed
        }
      }

      // 1. Synchronize Standings respecting Manual Mode & failure preservation
      if (isAdminLoggedIn) {
        const refreshRes = await adminApiFetchJson<{
          success: boolean;
          source?: string;
          updateMode?: StandingsUpdateMode;
          standings?: any[];
          history?: StandingsHistoryEntry[];
          blocked?: boolean;
          mode?: string;
          inProgress?: boolean;
          stale?: boolean;
          preservedExisting?: boolean;
        }>('/api/standings', {
          method: 'POST',
          body: JSON.stringify({
            action: 'refresh',
            competition,
            season,
          }),
        });

        if (
          reqId === syncRequestIdRef.current &&
          standingsScopeRef.current.competition === competition &&
          standingsScopeRef.current.season === season
        ) {
          if (refreshRes.ok && Array.isArray(refreshRes.data?.standings)) {
            const normalized = normalizeStandingsScopeRows(
              refreshRes.data.standings,
              competition,
              season
            );
            setStandings(normalized);
            persistStandingsCache(competition, season, normalized);
            const nextMode: StandingsUpdateMode =
              refreshRes.data.updateMode === 'manual' ? 'manual' : 'automatic';
            setStandingsMode(nextMode);
            standingsModeRef.current = nextMode;
            if (Array.isArray(refreshRes.data.history)) {
              setStandingsHistory(refreshRes.data.history);
            }
            setStandingsError(null);
            if (refreshRes.data.source) {
              syncSource = refreshRes.data.source;
            }
          } else if (refreshRes.status === 409) {
            if (refreshRes.data?.blocked || refreshRes.data?.mode === 'manual') {
              setStandingsMode('manual');
              standingsModeRef.current = 'manual';
            }
            const errMsg =
              refreshRes.error ||
              'Standings are in Manual Mode. Automatic refresh was blocked to preserve manual edits.';
            setStandingsError(errMsg);
            if (isManual) {
              throw new Error(errMsg);
            }
          } else if (!refreshRes.isHtmlFallback && !refreshRes.isOffline) {
            // 502 upstream SportsDB failure or server/CORS error -> preserve existing D1 standings!
            const errMsg =
              refreshRes.error ||
              'Upstream standings feed unavailable; existing D1 standings preserved.';
            setStandingsError(errMsg);
            if (isManual) {
              throw new Error(errMsg);
            }
          } else if (refreshRes.isHtmlFallback && standingsModeRef.current !== 'manual') {
            // Local Vite dev mode fallback when Pages Functions are absent
            const devSports = await apiFetchJson<{
              success: boolean;
              liveFetched?: boolean;
              standings?: any[];
            }>(`/api/standings/sportsdb?strict=1&season=${encodeURIComponent(season)}`);
            if (
              devSports.ok &&
              devSports.data?.liveFetched !== false &&
              Array.isArray(devSports.data?.standings) &&
              devSports.data.standings.length > 0
            ) {
              const normalized = normalizeStandingsScopeRows(
                devSports.data.standings,
                competition,
                season
              );
              setStandings(normalized);
              persistStandingsCache(competition, season, normalized);
            }
          }
        }
      } else {
        // Public visitor: check D1 standings & updateMode first so manual tables are never overwritten
        const d1Res = await apiFetchJson<{
          success: boolean;
          configured?: boolean;
          updateMode?: StandingsUpdateMode;
          standings?: any[];
        }>(
          `/api/standings?competition=${encodeURIComponent(competition)}&season=${encodeURIComponent(season)}`
        );

        if (
          reqId === syncRequestIdRef.current &&
          standingsScopeRef.current.competition === competition &&
          standingsScopeRef.current.season === season
        ) {
          const d1Mode: StandingsUpdateMode =
            d1Res.ok && d1Res.data?.updateMode === 'manual' ? 'manual' : 'automatic';

          if (d1Res.ok && d1Res.data?.configured) {
            setStandingsMode(d1Mode);
            standingsModeRef.current = d1Mode;
            if (Array.isArray(d1Res.data.standings) && d1Res.data.standings.length > 0) {
              const normalizedD1 = normalizeStandingsScopeRows(
                d1Res.data.standings,
                competition,
                season
              );
              setStandings(normalizedD1);
              persistStandingsCache(competition, season, normalizedD1);
            }
          }

          if (d1Mode === 'manual') {
            if (isManual) {
              const msg = 'Standings are locked in Manual Mode by club administrators.';
              setStandingsError(msg);
              throw new Error(msg);
            }
          } else if (competition === DEFAULT_STANDINGS_COMPETITION) {
            const sportsRes = await apiFetchJson<{
              success: boolean;
              liveFetched?: boolean;
              standings?: any[];
            }>(`/api/standings/sportsdb?strict=1&season=${encodeURIComponent(season)}`);

            if (
              sportsRes.ok &&
              sportsRes.data?.liveFetched !== false &&
              Array.isArray(sportsRes.data?.standings) &&
              sportsRes.data.standings.length > 0
            ) {
              const normalized = normalizeStandingsScopeRows(
                sportsRes.data.standings,
                competition,
                season
              );
              setStandings(normalized);
              persistStandingsCache(competition, season, normalized);
              setStandingsError(null);
            } else if (isManual && !sportsRes.isOffline && !sportsRes.isHtmlFallback) {
              const errMsg =
                sportsRes.error || 'Could not reach live SportsDB feed; showing saved D1 standings.';
              setStandingsError(errMsg);
              throw new Error(errMsg);
            }
          }
        }
      }

      // 2. Synchronize official Halaba City FC fixtures without overwriting custom D1 matches
      try {
        const fixturesRes = await apiFetchJson<{ success: boolean; fixtures?: Match[] }>(
          '/api/fixtures/sportsdb'
        );
        if (
          fixturesRes.ok &&
          fixturesRes.data?.success &&
          Array.isArray(fixturesRes.data.fixtures) &&
          fixturesRes.data.fixtures.length > 0
        ) {
          const halabaOnly: Match[] = fixturesRes.data.fixtures.filter(isHalabaMatch);
          if (halabaOnly.length > 0) {
            const { merged, toSync } = mergeMatchesPreservingCustom(
              matchesRef.current,
              halabaOnly
            );
            matchesRef.current = merged;
            setMatches(merged);
            try {
              localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(merged));
            } catch (e) {
              console.warn('LocalStorage error caching matches:', e);
            }
            if (isAdminLoggedIn && toSync.length > 0) {
              const bulkRes = await adminApiFetchJson('/api/matches', {
                method: 'POST',
                body: JSON.stringify({ action: 'bulkSync', matches: toSync }),
              });
              if (!bulkRes.ok && !bulkRes.isHtmlFallback && !bulkRes.isOffline) {
                console.warn('D1 bulkSync matches warning:', bulkRes.error);
              }
            }
          }
        }
      } catch (fErr) {
        console.warn('TheSportsDB fixtures sync notice:', fErr);
      }

      setLastSyncTime(new Date());
      setSecondsUntilNextSync(autoSyncInterval);

      if (isManual) {
        const syncNotif: LiveNotification = {
          id: `sync-${Date.now()}`,
          type: 'sync',
          title: 'TheSportsDB Official Feed Synced',
          message: `Official Ethiopian Premier League table, Halaba City fixtures & results synchronized from ${syncSource}.`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
        };
        setLiveNotifications((prev) => [syncNotif, ...prev.slice(0, 9)]);
      }
    } catch (error: any) {
      if (isManual) {
        throw error;
      }
      console.warn('Notice in syncNow:', error?.message || error);
    } finally {
      inFlightSyncRef.current = false;
      setIsSyncing(false);
    }
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

      }

      localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updatedMatches));
      return updatedMatches;
    });
  };

  const advanceLeagueMatchday = async () => {
    await syncNow(true);
  };

  // Automatically update standing table and results/fixtures from SportsDB ONLY when the app opens,
  // then uses that cache until the app is closed and reopened (persisting in sessionStorage per session).
  useEffect(() => {
    const sessionKey = 'halaba_sportsdb_app_session_synced_v23';
    const alreadySyncedThisSession = typeof window !== 'undefined' && sessionStorage.getItem(sessionKey) === 'true';

    if (!alreadySyncedThisSession) {
      syncNow(false).then(() => {
        try {
          sessionStorage.setItem(sessionKey, 'true');
        } catch {
          // ignore
        }
      });
    }
  }, []);

  // Sponsors & Partner Posters State (Cloudflare D1 backed with localStorage fallback)
  const [sponsors, setSponsors] = useState<Sponsor[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SPONSORS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      // Ignore
    }
    return initialSponsors;
  });

  const [isSponsorsLoading, setIsSponsorsLoading] = useState<boolean>(true);
  const [sponsorsSyncError, setSponsorsSyncError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadSponsorsFromD1 = async () => {
      const res = await apiFetchJson<{ success: boolean; sponsors: any[] }>('/api/sponsors');
      if (!isMounted) return;

      setIsSponsorsLoading(false);

      if (!res.ok) {
        if (!res.isHtmlFallback && !res.isOffline) {
          setSponsorsSyncError(res.error || 'Failed to load sponsors.');
        }
        return;
      }

      setSponsorsSyncError(null);
      const rawList = Array.isArray(res.data?.sponsors) ? res.data!.sponsors : [];

      if (rawList.length === 0) {
        if (isAdminLoggedIn) {
          try {
            await adminApiFetchJson('/api/sponsors', {
              method: 'POST',
              body: JSON.stringify({ action: 'reset', sponsors: initialSponsors }),
            });
          } catch {
            // ignore auto-seed notice
          }
        }
        return;
      }

      const liveSponsors: Sponsor[] = rawList.map((data: any) => ({
        id: data.id,
        name: data.name || 'Sponsor',
        nameAm: data.nameAm || undefined,
        nameOm: data.nameOm || undefined,
        tier: data.tier || 'Official Partner',
        tierAm: data.tierAm || undefined,
        imageUrl: data.imageUrl || '',
        websiteUrl: data.websiteUrl || undefined,
        description: data.description || undefined,
        descriptionAm: data.descriptionAm || undefined,
        active: data.active !== undefined ? Boolean(data.active) : true,
        order: typeof data.order === 'number' ? data.order : 10,
      }));

      liveSponsors.sort((a, b) => (a.order || 0) - (b.order || 0));

      setSponsors(liveSponsors);
      try {
        localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(liveSponsors));
      } catch (e) {
        console.warn('Could not cache sponsors in localStorage:', e);
      }
    };

    loadSponsorsFromD1();
    return () => {
      isMounted = false;
    };
  }, [isAdminLoggedIn]);

  const addSponsor = async (sponsorData: Omit<Sponsor, 'id'>): Promise<string> => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized addSponsor attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const generatedId = `sponsor-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const payload: Sponsor = {
      ...sponsorData,
      id: generatedId,
      order: sponsorData.order ?? (sponsors.length + 1),
      active: sponsorData.active !== undefined ? sponsorData.active : true,
    };

    const res = await adminApiFetchJson<{ success: boolean; sponsor?: Sponsor }>('/api/sponsors', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to save sponsor.');
    }

    const newSponsor = res.ok && res.data?.sponsor ? res.data.sponsor : payload;
    const updated = [...sponsors, newSponsor].sort((a, b) => (a.order || 0) - (b.order || 0));
    setSponsors(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not cache updated sponsors in localStorage:', e);
    }
    return newSponsor.id;
  };

  const updateSponsor = async (id: string, updates: Partial<Sponsor>): Promise<void> => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized updateSponsor attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson<{ success: boolean; sponsor?: Sponsor }>(
      `/api/sponsors/${encodeURIComponent(id)}`,
      {
        method: 'PUT',
        body: JSON.stringify(updates),
      }
    );

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to update sponsor.');
    }

    const updated = sponsors
      .map((s) => (s.id === id ? (res.ok && res.data?.sponsor ? res.data.sponsor : { ...s, ...updates }) : s))
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    setSponsors(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not cache updated sponsors in localStorage:', e);
    }
  };

  const deleteSponsor = async (id: string): Promise<void> => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized deleteSponsor attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson(`/api/sponsors/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to delete sponsor.');
    }

    const updated = sponsors.filter((s) => s.id !== id);
    setSponsors(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not cache sponsors after deletion:', e);
    }
  };

  const resetSponsors = async (): Promise<void> => {
    if (!isAdminLoggedIn) {
      console.warn('Unauthorized resetSponsors attempted');
      throw new Error('Unauthorized: Administrator privileges required.');
    }

    const res = await adminApiFetchJson('/api/sponsors', {
      method: 'POST',
      body: JSON.stringify({ action: 'reset', sponsors: initialSponsors }),
    });

    if (!res.ok && !res.isHtmlFallback && !res.isOffline) {
      throw new Error(res.error || 'Failed to reset sponsors.');
    }

    setSponsors(initialSponsors);
    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
  };

  const resetAllDataToDefault = () => {
    localStorage.clear();
    setMatches([]);
    setStandings(initialStandings);
    setNews(initialNews);
    setPlayers(initialPlayers);
    setStaff(initialStaff);
    setMemberships(initialMemberships);
    setShopItems(initialShopItems);
    setShopOrders([]);
    setDonations([]);
    setClubInfo(initialClubInfo);
    setSponsors(initialSponsors);
    setIsAdminLoggedIn(false);
  };

  const contextValue = useMemo(() => ({
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
    standingsCompetition,
    standingsSeason,
    standingsMode,
    standingsHistory,
    standingsError,
    d1SyncError,
    setStandingsScope,
    setStandingsUpdateMode,
    loadStandingsForScope,
    updateStanding,
    resetStandings,
    recalculateStandingsFromMatches,
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
    sponsors,
    addSponsor,
    updateSponsor,
    deleteSponsor,
    resetSponsors,
    isSponsorsLoading,
    sponsorsSyncError,
    isOnline,
    resetAllDataToDefault,
  }), [
    language,
    setLanguage,
    t,
    currentPage,
    setCurrentPage,
    selectedArticleId,
    selectedMatchId,
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
    clubInfo,
    matches,
    standings,
    standingsCompetition,
    standingsSeason,
    standingsMode,
    standingsHistory,
    standingsError,
    d1SyncError,
    setStandingsScope,
    setStandingsUpdateMode,
    loadStandingsForScope,
    updateStanding,
    resetStandings,
    recalculateStandingsFromMatches,
    updateClubInfo,
    syncNow,
    news,
    players,
    staff,
    memberships,
    shopItems,
    isProductsLoading,
    productsSyncError,
    shopOrders,
    isCheckoutModalOpen,
    checkoutItem,
    openCheckoutModal,
    closeCheckoutModal,
    donations,
    isDonationModalOpen,
    openDonationModal,
    closeDonationModal,
    isAdminLoggedIn,
    adminUsername,
    adminUser,
    isAuthChecking,
    sponsors,
    isSponsorsLoading,
    sponsorsSyncError,
    isOnline,
  ]);

  return (
    <ClubContext.Provider value={contextValue}>
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
