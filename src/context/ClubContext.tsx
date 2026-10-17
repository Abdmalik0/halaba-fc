import React, { createContext, useContext, useState, useEffect } from 'react';
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
    // Sort by points desc, then goal difference desc
    updated.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
    // Re-assign position numbers
    const reordered = updated.map((t, idx) => ({ ...t, position: idx + 1 }));
    setStandings(reordered);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
  };

  const resetStandings = () => {
    setStandings(initialStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(initialStandings));
  };

  // News
  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
    return saved ? JSON.parse(saved) : initialNews;
  });

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

  const deleteNewsArticle = (id: string) => {
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
    // Generate official reference number format: HCFC-2026-M####
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
      status: 'APPROVED', // Default approved or pending
    };

    // Simulate real backend processing delay
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
    // Authorized club staff credentials (also shown as quick demo helper)
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
