import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import {
  Match,
  NewsArticle,
  Player,
  StaffMember,
  StandingTeam,
  NewsCategory,
  Competition
} from '../types';
import {
  Lock,
  LogOut,
  Users,
  Newspaper,
  Calendar,
  Trophy,
  Settings,
  Plus,
  Trash2,
  Edit,
  Check,
  X,
  Download,
  AlertTriangle,
  RefreshCw,
  Search,
  CheckCircle2,
  Database,
  Zap,
  Radio,
  Clock,
  Play,
  Pause,
  Upload,
  Link,
  Image as ImageIcon
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    t,
    isAdminLoggedIn,
    adminUsername,
    loginAdmin,
    logoutAdmin,
    memberships,
    updateMembershipStatus,
    deleteMembership,
    news,
    addNewsArticle,
    updateNewsArticle,
    deleteNewsArticle,
    matches,
    addMatch,
    updateMatch,
    deleteMatch,
    standings,
    updateStanding,
    resetStandings,
    players,
    staff,
    addPlayer,
    updatePlayer,
    deletePlayer,
    clubInfo,
    updateClubInfo,
    resetAllDataToDefault,
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
    liveNotifications,
  } = useClub();

  // Login form state
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active admin tab
  const [adminTab, setAdminTab] = useState<
    'memberships' | 'news' | 'fixtures' | 'standings' | 'squad' | 'sync' | 'settings'
  >('memberships');

  // Search & filter states
  const [memberSearch, setMemberSearch] = useState('');
  const [memberStatusFilter, setMemberStatusFilter] = useState<'ALL' | 'APPROVED' | 'PENDING' | 'REJECTED'>('ALL');

  // News Modal state
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [newsTitleEn, setNewsTitleEn] = useState('');
  const [newsTitleAm, setNewsTitleAm] = useState('');
  const [newsTitleOm, setNewsTitleOm] = useState('');
  const [newsSummaryEn, setNewsSummaryEn] = useState('');
  const [newsSummaryAm, setNewsSummaryAm] = useState('');
  const [newsSummaryOm, setNewsSummaryOm] = useState('');
  const [newsContentEn, setNewsContentEn] = useState('');
  const [newsCategory, setNewsCategory] = useState<NewsCategory>('CLUB_NEWS');
  const [newsImageUrl, setNewsImageUrl] = useState('');
  const [imageSourceMode, setImageSourceMode] = useState<'url' | 'upload'>('url');

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please select a smaller photo file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        if (loadEvent.target?.result) {
          setNewsImageUrl(loadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Match Modal state
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [matchDate, setMatchDate] = useState('');
  const [matchTime, setMatchTime] = useState('15:00');
  const [matchVenue, setMatchVenue] = useState('Halaba Stadium, Halaba Kulito');
  const [matchHomeTeam, setMatchHomeTeam] = useState('HALABA City FC');
  const [matchAwayTeam, setMatchAwayTeam] = useState('');
  const [matchComp, setMatchComp] = useState<Competition>('ETHIOPIAN_HIGHER_LEAGUE');
  const [matchStatus, setMatchStatus] = useState<'UPCOMING' | 'LIVE' | 'FINISHED'>('UPCOMING');
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // Player state
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerNumber, setNewPlayerNumber] = useState(10);
  const [newPlayerPos, setNewPlayerPos] = useState<'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward'>('Midfielder');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = loginAdmin(usernameInput, passwordInput);
    if (!ok) {
      setLoginError('Invalid staff credentials. (Hint: username "staff", password "halaba1966")');
    } else {
      setLoginError('');
      setUsernameInput('');
      setPasswordInput('');
    }
  };

  const handleDemoFill = () => {
    setUsernameInput('staff');
    setPasswordInput('halaba1966');
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Reference', 'FullName', 'DOB', 'Gender', 'Phone', 'Email', 'CityRegion', 'Tier', 'Status', 'RegisteredAt'];
    const rows = memberships.map((m) => [
      m.referenceNumber,
      `"${m.fullName}"`,
      m.dateOfBirth,
      m.gender || '',
      m.phone,
      m.email || '',
      `"${m.cityOrRegion}"`,
      m.membershipType,
      m.status,
      m.registeredAt,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `halaba_fc_memberships_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Save News Article (Connected to Firebase Cloud)
  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitleEn.trim()) return;

    try {
      if (editingArticleId) {
        // Keep your existing local update function for edits
        updateNewsArticle(editingArticleId, {
          title: { en: newsTitleEn, am: newsTitleAm || newsTitleEn, om: newsTitleOm || newsTitleEn },
          summary: { en: newsSummaryEn, am: newsSummaryAm || newsSummaryEn, om: newsSummaryOm || newsSummaryEn },
          content: { en: newsContentEn, am: newsContentEn, om: newsContentEn },
          category: newsCategory,
          imageUrl: newsImageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
        });
      } else {
        // Save NEW article to Firebase Cloud Database (visible globally on all devices)
        await addDoc(collection(db, "news"), {
          title: { en: newsTitleEn, am: newsTitleAm || newsTitleEn, om: newsTitleOm || newsTitleEn },
          summary: { en: newsSummaryEn, am: newsSummaryAm || newsSummaryEn, om: newsSummaryOm || newsSummaryEn },
          content: { en: newsContentEn, am: newsContentEn, om: newsContentEn },
          category: newsCategory,
          date: new Date().toISOString().slice(0, 10),
          author: 'Club Administration',
          imageUrl: newsImageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
          readTime: '3 min read',
          createdAt: serverTimestamp(),
        });

        // Also update local state as a backup fallback
        addNewsArticle({
          title: { en: newsTitleEn, am: newsTitleAm || newsTitleEn, om: newsTitleOm || newsTitleEn },
          summary: { en: newsSummaryEn, am: newsSummaryAm || newsSummaryEn, om: newsSummaryOm || newsSummaryEn },
          content: { en: newsContentEn, am: newsContentEn, om: newsContentEn },
          category: newsCategory,
          date: new Date().toISOString().slice(0, 10),
          author: 'Club Administration',
          imageUrl: newsImageUrl || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
          readTime: '3 min read',
        });
      }

      // Reset modal state (Exactly as you had it before)
      setIsNewsModalOpen(false);
      setEditingArticleId(null);
      setNewsTitleEn('');
      setNewsTitleAm('');
      setNewsTitleOm('');
      setNewsSummaryEn('');
      setNewsSummaryAm('');
      setNewsSummaryOm('');
      setNewsContentEn('');
      setNewsImageUrl('');
    } catch (error) {
      console.error("Error saving article to Firebase: ", error);
      alert("Failed to publish to cloud. Please try again.");
    }
  };
  // Save Match
  const handleSaveMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matchAwayTeam.trim() || !matchDate) return;

    const isHome = matchHomeTeam.toLowerCase().includes('halaba');

    if (editingMatchId) {
      updateMatch(editingMatchId, {
        date: matchDate,
        kickoffTime: matchTime,
        venue: matchVenue,
        status: matchStatus,
        score: matchStatus === 'FINISHED' || matchStatus === 'LIVE' ? { home: Number(homeScore), away: Number(awayScore) } : undefined,
      });
    } else {
      addMatch({
        competition: matchComp,
        competitionName: matchComp.replace(/_/g, ' '),
        date: matchDate,
        kickoffTime: matchTime,
        venue: matchVenue,
        homeTeam: {
          id: isHome ? 'halaba' : 'opponent',
          name: matchHomeTeam,
          isHalaba: isHome,
        },
        awayTeam: {
          id: !isHome ? 'halaba' : 'opponent',
          name: matchAwayTeam,
          isHalaba: !isHome,
        },
        status: matchStatus,
        score: matchStatus === 'FINISHED' || matchStatus === 'LIVE' ? { home: Number(homeScore), away: Number(awayScore) } : undefined,
        round: 'Official League Match',
      });
    }

    setIsMatchModalOpen(false);
    setEditingMatchId(null);
  };

  // Add Player
  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlayerName.trim()) return;
    addPlayer({
      name: newPlayerName.trim(),
      number: Number(newPlayerNumber),
      position: newPlayerPos,
      nationality: 'Ethiopian',
      birthYear: 2002,
      appearances: 0,
      goals: 0,
    });
    setNewPlayerName('');
    setNewPlayerNumber(newPlayerNumber + 1);
  };

  /* IF NOT LOGGED IN - RENDER AUTH GATE */
  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="flex justify-center">
            <HalabaCrest size={70} showGlow />
          </div>

          <div>
            <h1 className="font-sports font-black text-3xl text-white uppercase tracking-wider">
              {t.adminLoginTitle}
            </h1>
            <p className="text-neutral-400 text-xs mt-1">
              Authorized club staff and website administrators only.
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs text-left">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                {t.adminUsername}
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Staff username"
                className="w-full px-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                {t.adminPassword}
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports shadow-lg shadow-red-950 transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{t.adminLoginBtn}</span>
            </button>
          </form>

          {/* Quick Demo Fill Helper */}
          <div className="pt-4 border-t border-neutral-800/80">
            <button
              onClick={handleDemoFill}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline block mx-auto"
            >
              Click here to auto-fill staff demo credentials
            </button>
            <span className="text-xxs text-neutral-500 block mt-1">
              Default: staff / halaba1966
            </span>
          </div>
        </div>
      </div>
    );
  }

  /* LOGGED IN DASHBOARD */
  const filteredMemberships = memberships.filter((m) => {
    if (memberStatusFilter !== 'ALL' && m.status !== memberStatusFilter) return false;
    if (memberSearch.trim() !== '') {
      const q = memberSearch.toLowerCase();
      return (
        m.fullName.toLowerCase().includes(q) ||
        m.referenceNumber.toLowerCase().includes(q) ||
        m.phone.includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Admin Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <HalabaCrest size={48} />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Staff Dashboard • Logged In as {adminUsername}
              </span>
            </div>
            <h1 className="font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider">
              {t.adminTitle}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={logoutAdmin}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>{t.adminLogoutBtn}</span>
          </button>
        </div>
      </div>

      {/* Demonstration Banner */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/80 text-xs text-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block text-amber-300 font-semibold">{t.demoNotice}</strong>
          <span className="text-amber-300/80">
            All modifications you make below are live and reactive on this site.
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs text-neutral-400 font-bold uppercase block">
            Registered Members
          </span>
          <span className="font-sports font-black text-3xl text-emerald-400 mt-1 block">
            {memberships.length}
          </span>
          <span className="text-xxs text-neutral-500">Live fan registrations</span>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs text-neutral-400 font-bold uppercase block">
            News Articles
          </span>
          <span className="font-sports font-black text-3xl text-white mt-1 block">
            {news.length}
          </span>
          <span className="text-xxs text-neutral-500">Published stories</span>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs text-neutral-400 font-bold uppercase block">
            Matches Scheduled
          </span>
          <span className="font-sports font-black text-3xl text-amber-400 mt-1 block">
            {matches.length}
          </span>
          <span className="text-xxs text-neutral-500">Fixtures & completed</span>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
          <span className="text-xs text-neutral-400 font-bold uppercase block">
            Squad Roster
          </span>
          <span className="font-sports font-black text-3xl text-red-400 mt-1 block">
            {players.length}
          </span>
          <span className="text-xxs text-neutral-500">First team players</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-2">
        <button
          onClick={() => setAdminTab('memberships')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'memberships'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{t.adminTabMembers} ({memberships.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('news')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'news'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span>{t.adminTabNews} ({news.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('fixtures')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'fixtures'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>{t.adminTabFixtures}</span>
        </button>

        <button
          onClick={() => setAdminTab('standings')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'standings'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>{t.adminTabStandings}</span>
        </button>

        <button
          onClick={() => setAdminTab('squad')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'squad'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{t.adminTabSquad}</span>
        </button>

        <button
          onClick={() => setAdminTab('sync')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'sync'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Auto-Update Engine</span>
        </button>

        <button
          onClick={() => setAdminTab('settings')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ${
            adminTab === 'settings'
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>{t.adminTabSettings}</span>
        </button>
      </div>

      {/* TAB CONTENT 1: MEMBERSHIPS */}
      {adminTab === 'memberships' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
                Official Membership Applications
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Verify supporter registrations, change statuses, and export database records.
              </p>
            </div>

            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 self-start sm:self-auto transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t.exportCsv}</span>
            </button>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={memberSearch}
                onChange={(e) => setMemberSearch(e.target.value)}
                placeholder="Search by name, ref, phone..."
                className="w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {(['ALL', 'APPROVED', 'PENDING', 'REJECTED'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setMemberStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                    memberStatusFilter === st
                      ? 'bg-neutral-800 text-white border border-neutral-700'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Members Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs whitespace-nowrap">
              <thead>
                <tr className="border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider">
                  <th className="py-3 px-3">Reference</th>
                  <th className="py-3 px-3">Full Name</th>
                  <th className="py-3 px-3">Phone</th>
                  <th className="py-3 px-3">Region</th>
                  <th className="py-3 px-3">Tier</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {filteredMemberships.map((m) => (
                  <tr key={m.id} className="hover:bg-neutral-800/40">
                    <td className="py-3 px-3 font-mono font-bold text-amber-400">
                      {m.referenceNumber}
                    </td>
                    <td className="py-3 px-3 font-semibold text-white">{m.fullName}</td>
                    <td className="py-3 px-3 text-neutral-300 font-mono">{m.phone}</td>
                    <td className="py-3 px-3 text-neutral-400">{m.cityOrRegion}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded text-xxs font-bold uppercase bg-neutral-950 text-neutral-200 border border-neutral-800">
                        {m.membershipType}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-xxs font-bold uppercase ${
                          m.status === 'APPROVED'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : m.status === 'PENDING'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {m.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right space-x-1.5">
                      {m.status !== 'APPROVED' && (
                        <button
                          onClick={() => updateMembershipStatus(m.id, 'APPROVED')}
                          className="px-2 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xxs font-bold uppercase"
                        >
                          Approve
                        </button>
                      )}
                      {m.status !== 'REJECTED' && (
                        <button
                          onClick={() => updateMembershipStatus(m.id, 'REJECTED')}
                          className="px-2 py-1 rounded bg-red-950 hover:bg-red-900 text-red-400 border border-red-800 text-xxs font-bold uppercase"
                        >
                          Reject
                        </button>
                      )}
                      <button
                        onClick={() => deleteMembership(m.id)}
                        className="p-1 rounded text-neutral-500 hover:text-red-400 transition-colors"
                        title="Delete application"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: NEWS MANAGEMENT */}
      {adminTab === 'news' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
                News Articles & Press Releases
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Publish new stories with multi-language headings and match reports.
              </p>
            </div>

            <button
              onClick={() => {
                setEditingArticleId(null);
                setNewsTitleEn('');
                setNewsTitleAm('');
                setNewsTitleOm('');
                setNewsSummaryEn('');
                setNewsContentEn('');
                setIsNewsModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Create Article</span>
            </button>
          </div>

          <div className="space-y-3">
            {news.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-16 h-12 object-cover rounded-lg shrink-0 border border-neutral-800"
                  />
                  <div>
                    <span className="text-xxs font-bold uppercase text-emerald-400 block font-sports">
                      {item.category.replace('_', ' ')} • {item.date}
                    </span>
                    <h4 className="font-bold text-sm text-white">{item.title.en}</h4>
                    <span className="text-xs text-neutral-500">{item.title.am}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingArticleId(item.id);
                      setNewsTitleEn(item.title.en);
                      setNewsTitleAm(item.title.am);
                      setNewsTitleOm(item.title.om);
                      setNewsSummaryEn(item.summary.en);
                      setNewsContentEn(item.content.en);
                      setNewsCategory(item.category);
                      setNewsImageUrl(item.imageUrl);
                      setIsNewsModalOpen(true);
                    }}
                    className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                    title="Edit article"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteNewsArticle(item.id)}
                    className="p-1.5 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400"
                    title="Delete article"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: FIXTURES & RESULTS */}
      {adminTab === 'fixtures' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
                Fixtures & Match Results Management
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Schedule new matches, update live scores, and enter final results.
              </p>
            </div>

            <button
              onClick={() => {
                setEditingMatchId(null);
                setMatchDate(new Date().toISOString().slice(0, 10));
                setMatchAwayTeam('');
                setIsMatchModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Fixture</span>
            </button>
          </div>

          <div className="space-y-3">
            {matches.map((m) => (
              <div
                key={m.id}
                className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-sports font-bold uppercase text-amber-400">
                      {m.competitionName}
                    </span>
                    <span className="text-neutral-500">• {m.date}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xxs font-bold uppercase ${
                        m.status === 'FINISHED'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : m.status === 'LIVE'
                          ? 'bg-red-950 text-red-400 border border-red-800'
                          : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>

                  <h4 className="font-sports font-bold text-lg text-white mt-1">
                    {m.homeTeam.name}{' '}
                    {m.score ? (
                      <span className="text-emerald-400 font-mono">
                        {m.score.home} - {m.score.away}
                      </span>
                    ) : (
                      'vs'
                    )}{' '}
                    {m.awayTeam.name}
                  </h4>
                  <span className="text-xs text-neutral-400">{m.venue}</span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => {
                      setEditingMatchId(m.id);
                      setMatchDate(m.date);
                      setMatchTime(m.kickoffTime);
                      setMatchVenue(m.venue);
                      setMatchHomeTeam(m.homeTeam.name);
                      setMatchAwayTeam(m.awayTeam.name);
                      setMatchComp(m.competition);
                      setMatchStatus(m.status as any);
                      if (m.score) {
                        setHomeScore(m.score.home);
                        setAwayScore(m.score.away);
                      }
                      setIsMatchModalOpen(true);
                    }}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                    title="Edit match"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteMatch(m.id)}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400"
                    title="Delete match"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: STANDINGS EDITOR */}
      {adminTab === 'standings' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
                League Standings Table Editor
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Edit team points, wins, draws, and goals. Tables auto-sort immediately.
              </p>
            </div>

            <button
              onClick={resetStandings}
              className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Standings</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs whitespace-nowrap">
              <thead>
                <tr className="border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider">
                  <th className="py-3 px-3">Pos</th>
                  <th className="py-3 px-3">Team</th>
                  <th className="py-3 px-2 text-center">P</th>
                  <th className="py-3 px-2 text-center">W</th>
                  <th className="py-3 px-2 text-center">D</th>
                  <th className="py-3 px-2 text-center">L</th>
                  <th className="py-3 px-2 text-center">GF</th>
                  <th className="py-3 px-2 text-center">GA</th>
                  <th className="py-3 px-3 text-center">Pts</th>
                  <th className="py-3 px-3 text-right">Quick Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {standings.map((st) => (
                  <tr
                    key={st.teamId}
                    className={st.isHalaba ? 'bg-red-950/40 font-bold' : 'hover:bg-neutral-800/40'}
                  >
                    <td className="py-3 px-3">{st.position}</td>
                    <td className="py-3 px-3 text-white font-sports text-sm">{st.teamName}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{st.played}</td>
                    <td className="py-3 px-2 text-center text-emerald-400 font-bold">{st.won}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{st.drawn}</td>
                    <td className="py-3 px-2 text-center text-red-400">{st.lost}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{st.goalsFor}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{st.goalsAgainst}</td>
                    <td className="py-3 px-3 text-center font-sports font-black text-white text-base">
                      {st.points}
                    </td>
                    <td className="py-3 px-3 text-right space-x-1">
                      <button
                        onClick={() =>
                          updateStanding(st.teamId, {
                            played: st.played + 1,
                            won: st.won + 1,
                            points: st.points + 3,
                            goalsFor: st.goalsFor + 1,
                          })
                        }
                        className="px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-xxs font-bold"
                        title="Add 1 Win (+3 Pts)"
                      >
                        + Win
                      </button>
                      <button
                        onClick={() =>
                          updateStanding(st.teamId, {
                            played: st.played + 1,
                            drawn: st.drawn + 1,
                            points: st.points + 1,
                          })
                        }
                        className="px-2 py-1 rounded bg-neutral-800 text-neutral-300 text-xxs font-bold"
                        title="Add 1 Draw (+1 Pt)"
                      >
                        + Draw
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: SQUAD & STAFF */}
      {adminTab === 'squad' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="pb-4 border-b border-neutral-800">
            <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
              Squad & Staff Roster
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Add new signings and update player numbers and statistics.
            </p>
          </div>

          {/* Quick Add Player Form */}
          <form
            onSubmit={handleAddPlayer}
            className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center gap-3"
          >
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Player Name (e.g. Dawit Fekadu)"
              className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-48"
            />
            <input
              type="number"
              value={newPlayerNumber}
              onChange={(e) => setNewPlayerNumber(Number(e.target.value))}
              placeholder="Jersey #"
              className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-20 text-center font-sports text-sm"
            />
            <select
              value={newPlayerPos}
              onChange={(e) => setNewPlayerPos(e.target.value as any)}
              className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none"
            >
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Forward">Forward</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase font-sports"
            >
              Add Player
            </button>
          </form>

          {/* Players List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {players.map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between"
              >
                <div>
                  <span className="font-sports font-bold text-lg text-red-500">#{p.number} </span>
                  <span className="font-semibold text-white text-sm">{p.name}</span>
                  <span className="block text-xxs text-neutral-400 font-sports uppercase">
                    {p.position}
                  </span>
                </div>
                <button
                  onClick={() => deletePlayer(p.id)}
                  className="p-1.5 text-neutral-500 hover:text-red-400"
                  title="Remove player"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: LIVE AUTO-UPDATE ENGINE */}
      {adminTab === 'sync' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-sports font-bold text-xs uppercase tracking-wider text-emerald-400">
                  Federation Live Sync & Simulator
                </span>
              </div>
              <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider mt-1">
                Live Matches & Standings Auto-Update Engine
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Control the real-time background refresh loop, simulate matchday scores, and test automatic standings recalculation.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={syncNow}
                disabled={isSyncing}
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all disabled:opacity-60"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
              </button>
            </div>
          </div>

          {/* Engine Status Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 font-bold uppercase block">
                  Background Auto-Update
                </span>
                <span
                  className={`font-sports font-black text-2xl mt-1 block ${
                    isAutoSyncEnabled ? 'text-emerald-400' : 'text-neutral-500'
                  }`}
                >
                  {isAutoSyncEnabled ? 'ENABLED' : 'PAUSED'}
                </span>
              </div>
              <button
                onClick={toggleAutoSync}
                className={`mt-3 py-1.5 px-3 rounded-lg text-xs font-bold uppercase font-sports flex items-center justify-center gap-1.5 transition-colors ${
                  isAutoSyncEnabled
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-amber-400'
                    : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                }`}
              >
                {isAutoSyncEnabled ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoSyncEnabled ? 'Pause Loop' : 'Resume Loop'}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 font-bold uppercase block">
                  Sync Frequency
                </span>
                <span className="font-sports font-black text-2xl text-white mt-1 block">
                  Every {autoSyncInterval}s
                </span>
              </div>
              <div className="mt-3 flex gap-1.5">
                {[15, 30, 60].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setAutoSyncInterval(sec)}
                    className={`flex-1 py-1 rounded text-xxs font-bold uppercase font-mono ${
                      autoSyncInterval === sec
                        ? 'bg-red-600 text-white'
                        : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                    }`}
                  >
                    {sec}s
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 font-bold uppercase block">
                  Next Refresh In
                </span>
                <span className="font-mono font-black text-3xl text-amber-400 mt-1 block">
                  {isAutoSyncEnabled ? `${secondsUntilNextSync}s` : 'Paused'}
                </span>
              </div>
              <span className="text-xxs text-neutral-500">
                Auto-ticks and refreshes client state
              </span>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 font-bold uppercase block">
                  Last Federation Sync
                </span>
                <span className="font-mono font-bold text-sm text-neutral-200 mt-2 block">
                  {lastSyncTime.toLocaleTimeString()}
                </span>
              </div>
              <span className="text-xxs text-emerald-400">
                Connected to local reactive state
              </span>
            </div>
          </div>

          {/* Interactive Simulation Action Buttons */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-950 to-green-950/40 border border-neutral-800 space-y-4">
            <h4 className="font-sports font-bold text-lg text-white uppercase flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Instant Test Actions (Immediate Effect)</span>
            </h4>
            <p className="text-xs text-neutral-300">
              Click either button below to immediately trigger live match action or advance the entire league table to test automatic updates.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={simulateLiveMatchAction}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all"
              >
                <Zap className="w-4 h-4 text-amber-200" />
                <span>Simulate Live Match Action (Goal / Minute Advance)</span>
              </button>

              <button
                onClick={advanceLeagueMatchday}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all"
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Advance Other League Matches (8 Teams)</span>
              </button>
            </div>
          </div>

          {/* Live Notifications Stream */}
          <div className="space-y-3">
            <h4 className="font-sports font-bold text-base text-neutral-300 uppercase tracking-wider">
              Recent Live Events & Notifications ({liveNotifications.length})
            </h4>

            {liveNotifications.length === 0 ? (
              <p className="text-xs text-neutral-500 py-3 italic">
                No new live notifications yet. Click "Simulate Live Match Action" above to trigger a live goal!
              </p>
            ) : (
              <div className="space-y-2">
                {liveNotifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-neutral-500 font-bold">{n.timestamp}</span>
                      <strong className="text-amber-400 uppercase font-sports tracking-wide">
                        {n.title}
                      </strong>
                      <span className="text-neutral-300 hidden sm:inline">{n.message}</span>
                    </div>
                    <span className="text-xxs px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase font-mono">
                      {n.type}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT 6: CLUB SETTINGS & DB INTEGRATION GUIDE */}
      {adminTab === 'settings' && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl">
          <div>
            <h3 className="font-sports font-black text-2xl text-white uppercase tracking-wider">
              Club Configuration & Production Database Guide
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Configuration details, official contacts, and cloud persistence deployment guide.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
            <h4 className="font-sports font-bold text-lg text-white uppercase flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-400" />
              <span>Production Database Status</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              The club portal is currently configured with high-performance persistent local storage for rapid prototype demonstration, allowing club staff to test all features (membership registrations, match schedules, league standings, news publications).
            </p>
            <div className="p-4 rounded-lg bg-neutral-900 text-xs text-neutral-300 space-y-2 border border-neutral-800">
              <strong className="text-amber-400 block font-sports text-sm uppercase">
                To connect a production Cloud Firestore or Cloud SQL database:
              </strong>
              <ol className="list-decimal list-inside space-y-1 text-neutral-400">
                <li>Run Firebase or Cloud SQL provisioning through AI Studio's integration manager.</li>
                <li>Configure Firestore rules: restrict membership queries to role 'admin', and allow public reads for news, fixtures, and standings.</li>
                <li>Deploy live rules with <code className="text-red-400">deploy_firebase</code>.</li>
              </ol>
            </div>
          </div>

          {/* Reset All Data Button */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-400">
              Reset all club data, matches, news, and registrations back to defaults.
            </span>
            <button
              onClick={() => {
                if (window.confirm('Reset all club data to default sample data?')) {
                  resetAllDataToDefault();
                }
              }}
              className="px-4 py-2 rounded-xl bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Everything</span>
            </button>
          </div>
        </div>
      )}

      {/* CREATE / EDIT NEWS MODAL */}
      {isNewsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="font-sports font-bold text-xl text-white uppercase">
                {editingArticleId ? 'Edit Article' : 'Create News Article'}
              </h4>
              <button
                onClick={() => setIsNewsModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-neutral-300 uppercase mb-1">
                  Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={newsTitleEn}
                  onChange={(e) => setNewsTitleEn(e.target.value)}
                  placeholder="Headline in English..."
                  className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">
                    Title (Amharic - አማርኛ)
                  </label>
                  <input
                    type="text"
                    value={newsTitleAm}
                    onChange={(e) => setNewsTitleAm(e.target.value)}
                    placeholder="ርዕስ በአማርኛ..."
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">
                    Title (Afaan Oromo)
                  </label>
                  <input
                    type="text"
                    value={newsTitleOm}
                    onChange={(e) => setNewsTitleOm(e.target.value)}
                    placeholder="Mata duree Afaan Oromootiin..."
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
                  <div>
                    <label className="block font-bold text-neutral-300 uppercase mb-1">
                      Category *
                    </label>
                    <select
                      value={newsCategory}
                      onChange={(e) => setNewsCategory(e.target.value as any)}
                      className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
                    >
                      <option value="CLUB_NEWS">Club News</option>
                      <option value="MATCH_REPORTS">Match Reports</option>
                      <option value="TRANSFERS">Transfers</option>
                      <option value="INTERVIEWS">Interviews</option>
                      <option value="ACADEMY">Youth Academy</option>
                      <option value="COMMUNITY">Community</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-300 uppercase mb-1">
                      Featured Image (Link URL or Device Upload)
                    </label>

                    {/* Unified Link + Device Upload Input */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <Link className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            value={newsImageUrl.startsWith('data:') ? 'Photo loaded from local device' : newsImageUrl}
                            onChange={(e) => {
                              setNewsImageUrl(e.target.value);
                            }}
                            placeholder="Paste image link URL (https://...)"
                            className="w-full pl-8 pr-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                          />
                        </div>

                        {/* Direct Browse / Upload button on the input */}
                        <label
                          htmlFor="news-image-unified-file-input"
                          className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg border border-neutral-700 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors shrink-0"
                          title="Select image from local device"
                        >
                          <Upload className="w-3.5 h-3.5 text-red-400" />
                          <span>Browse Device</span>
                          <input
                            id="news-image-unified-file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleImageFileUpload}
                            className="hidden"
                          />
                        </label>

                        {newsImageUrl && (
                          <button
                            type="button"
                            onClick={() => setNewsImageUrl('')}
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400 transition-colors shrink-0"
                            title="Clear image"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Drag & Drop File Zone */}
                      <label
                        htmlFor="news-image-unified-file-input"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          const file = e.dataTransfer.files?.[0];
                          if (file) {
                            if (file.size > 5 * 1024 * 1024) {
                              alert('File size exceeds 5MB limit. Please select a smaller photo file.');
                              return;
                            }
                            const reader = new FileReader();
                            reader.onload = (loadEv) => {
                              if (loadEv.target?.result) {
                                setNewsImageUrl(loadEv.target.result as string);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="py-1.5 px-3 rounded-lg border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-400 text-xxs flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                          <span>Or drag & drop photo here from your device</span>
                        </span>
                        <span className="text-red-400 font-bold uppercase font-sports">Choose File</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Attached Image Preview */}
                {newsImageUrl && (
                  <div className="mt-2.5 p-2.5 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-between gap-3 animate-in fade-in">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={newsImageUrl}
                        alt="Preview"
                        className="w-14 h-11 object-cover rounded-lg border border-neutral-700 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                      <div className="min-w-0">
                        <span className="text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Image Attached</span>
                        </span>
                        <span className="text-xxs text-neutral-400 truncate block max-w-xs sm:max-w-md mt-0.5">
                          {newsImageUrl.startsWith('data:')
                            ? 'Photo uploaded from device (ready to publish)'
                            : newsImageUrl}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setNewsImageUrl('')}
                      className="px-2.5 py-1 rounded bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold text-neutral-300 uppercase mb-1">Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={newsSummaryEn}
                  onChange={(e) => setNewsSummaryEn(e.target.value)}
                  placeholder="Brief summary sentence..."
                  className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-300 uppercase mb-1">Full Article Text *</label>
                <textarea
                  rows={5}
                  required
                  value={newsContentEn}
                  onChange={(e) => setNewsContentEn(e.target.value)}
                  placeholder="Write the full report or announcement..."
                  className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sans"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE / EDIT MATCH MODAL */}
      {isMatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-neutral-900 border border-neutral-700 w-full max-w-xl rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="font-sports font-bold text-xl text-white uppercase">
                {editingMatchId ? 'Update Match Details & Score' : 'Schedule New Fixture'}
              </h4>
              <button
                onClick={() => setIsMatchModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMatch} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">
                    Home Team *
                  </label>
                  <input
                    type="text"
                    required
                    value={matchHomeTeam}
                    onChange={(e) => setMatchHomeTeam(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">
                    Away Team *
                  </label>
                  <input
                    type="text"
                    required
                    value={matchAwayTeam}
                    onChange={(e) => setMatchAwayTeam(e.target.value)}
                    placeholder="Opponent Name"
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={matchDate}
                    onChange={(e) => setMatchDate(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">
                    Kickoff Time *
                  </label>
                  <input
                    type="text"
                    value={matchTime}
                    onChange={(e) => setMatchTime(e.target.value)}
                    placeholder="15:00"
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-300 uppercase mb-1">Venue *</label>
                <input
                  type="text"
                  required
                  value={matchVenue}
                  onChange={(e) => setMatchVenue(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">Status</label>
                  <select
                    value={matchStatus}
                    onChange={(e) => setMatchStatus(e.target.value as any)}
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                  >
                    <option value="UPCOMING">Upcoming</option>
                    <option value="LIVE">Live</option>
                    <option value="FINISHED">Finished (FT)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">Home Score</label>
                  <input
                    type="number"
                    min="0"
                    value={homeScore}
                    onChange={(e) => setHomeScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-300 uppercase mb-1">Away Score</label>
                  <input
                    type="number"
                    min="0"
                    value={awayScore}
                    onChange={(e) => setAwayScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsMatchModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm"
                >
                  Save Fixture
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
