import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import { ClubImages } from '../assets/images';
import { initialMatches } from '../data/mockData';
import { Match } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  UserPlus,
  Flame,
  ArrowRight,
  Shield,
  Radio,
  Trophy,
  CheckCircle2,
  Check,
  Zap
} from 'lucide-react';

interface HomePageProps {
  onOpenMatchModal: (matchId: string) => void;
  onOpenArticleModal: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenMatchModal,
  onOpenArticleModal,
}) => {
  const { t, language, setCurrentPage, matches, standings, news, clubInfo } = useClub();

  // Active view tab for Halaba Ketema matches on Home Page
  const [matchViewTab, setMatchViewTab] = useState<'OVERVIEW' | 'UPCOMING' | 'RESULTS'>('OVERVIEW');

  // Filter strictly for Halaba Ketema matches only
  const isHalabaMatch = (m: Match): boolean => {
    if (!m) return false;
    const home = (m.homeTeam?.name || '').toLowerCase();
    const away = (m.awayTeam?.name || '').toLowerCase();
    return (
      Boolean(m.homeTeam?.isHalaba) ||
      Boolean(m.awayTeam?.isHalaba) ||
      home.includes('halaba') ||
      away.includes('halaba') ||
      home.includes('ሀላባ') ||
      away.includes('ሀላባ')
    );
  };

  const halabaMatches = matches.filter(isHalabaMatch);
  // Guarantee fallback to default Halaba matches if none found
  const allHalabaMatches = halabaMatches.length > 0 ? halabaMatches : initialMatches.filter(isHalabaMatch);

  // Live Halaba Ketema match if active
  const liveHalabaMatch = allHalabaMatches.find((m) => m.status === 'LIVE');

  // Halaba Ketema Upcoming Fixtures - sorted chronologically by date
  const upcomingHalabaMatches = allHalabaMatches
    .filter((m) => m.status === 'UPCOMING')
    .sort((a, b) => a.date.localeCompare(b.date) || (a.kickoffTime || '').localeCompare(b.kickoffTime || ''));

  // Next Halaba fixture: guaranteed to always be defined whenever the date is!
  const nextMatch: Match =
    upcomingHalabaMatches[0] ||
    initialMatches.find((m) => m.status === 'UPCOMING' && isHalabaMatch(m)) ||
    allHalabaMatches[0] ||
    initialMatches[0];

  // Halaba Ketema Finished Results
  const finishedHalabaMatches = allHalabaMatches.filter((m) => m.status === 'FINISHED');
  const latestResult = finishedHalabaMatches[0] || initialMatches.find((m) => m.status === 'FINISHED') || null;

  // Format date helper
  const formatMatchDateFull = (dateStr: string) => {
    try {
      const [year, month, day] = dateStr.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Latest 3 news items
  const recentNews = news.slice(0, 3);
  // Top 5 standings
  const topStandings = standings.slice(0, 5);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-red-950/40">
        {/* Background Image with Dark & Club Color Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={ClubImages.heroStadium}
            alt="Halaba Stadium Supporters"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-red-950/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-950/40 to-neutral-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16 flex flex-col items-center">
          {/* Official Crest */}
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
            <HalabaCrest size={130} showGlow />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              {t.heroTag}
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black tracking-widest uppercase backdrop-blur-md">
              <span>🏆 2026/27 EPL LEADERS • 1ST PLACE (4 PTS)</span>
            </div>
          </div>

          {/* Club Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase font-sports drop-shadow-lg">
            HALABA CITY FC
          </h1>

          {/* Nickname & Ethiopic Badge */}
          <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-emerald-400 to-amber-300 flex items-center justify-center gap-2">
            <span>“Berberewochu”</span>
            <span className="text-white font-ethiopic font-bold">({clubInfo.nickname.am})</span>
          </div>

          <p className="mt-4 max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {t.heroSubtitle}
          </p>

          {/* Halaba Next Fixture Spotlight Card in Hero */}
          {nextMatch && (
            <div
              onClick={() => onOpenMatchModal(nextMatch.id)}
              className="mt-6 w-full max-w-xl mx-auto cursor-pointer p-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-900 border border-red-500/60 hover:border-red-400 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.01] group text-left"
            >
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-sports font-black tracking-widest text-amber-300 uppercase text-xs">
                    NEXT HALABA FIXTURE • {nextMatch.round || 'EPL Matchday'}
                  </span>
                </div>
                <span className="font-mono text-xxs px-2 py-0.5 rounded bg-neutral-950 text-emerald-400 border border-emerald-900/60 font-bold">
                  {nextMatch.date}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  {nextMatch.homeTeam.isHalaba ? (
                    <HalabaCrest size={36} />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-xxs font-bold flex items-center justify-center text-neutral-300 shrink-0">
                      {nextMatch.homeTeam.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="truncate">
                    <span className={`font-sports font-bold text-sm sm:text-base block truncate ${nextMatch.homeTeam.isHalaba ? 'text-red-400 font-black' : 'text-white'}`}>
                      {nextMatch.homeTeam.name}
                    </span>
                    <span className="text-xxs text-neutral-500 uppercase">
                      {nextMatch.homeTeam.isHalaba ? 'Home (Fortress)' : 'Home'}
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-center font-sports font-black text-xs text-amber-400 shrink-0">
                  VS
                </div>

                <div className="flex items-center justify-end gap-2.5 flex-1 min-w-0 text-right">
                  <div className="truncate">
                    <span className={`font-sports font-bold text-sm sm:text-base block truncate ${nextMatch.awayTeam.isHalaba ? 'text-red-400 font-black' : 'text-white'}`}>
                      {nextMatch.awayTeam.name}
                    </span>
                    <span className="text-xxs text-neutral-500 uppercase">
                      {nextMatch.awayTeam.isHalaba ? 'Away (Halaba)' : 'Away'}
                    </span>
                  </div>
                  {nextMatch.awayTeam.isHalaba ? (
                    <HalabaCrest size={36} />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 text-xxs font-bold flex items-center justify-center text-neutral-300 shrink-0">
                      {nextMatch.awayTeam.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-300 pt-2 border-t border-neutral-800/80 gap-2">
                <div className="flex items-center gap-2 text-xxs sm:text-xs text-neutral-300 truncate">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{formatMatchDateFull(nextMatch.date)}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{nextMatch.kickoffTime} EAT</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                  <span className="text-xxs text-emerald-400 truncate max-w-[170px] sm:max-w-[200px]">
                    📍 {nextMatch.venue.split(',')[0]}
                  </span>
                  <span className="text-xxs font-sports font-bold uppercase text-red-400 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setCurrentPage('membership')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl shadow-red-950/80 flex items-center gap-2 transform active:scale-95 transition-all"
            >
              <UserPlus className="w-5 h-5" />
              <span>{t.heroBtnJoin}</span>
            </button>

            <button
              onClick={() => setCurrentPage('fixtures')}
              className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-sm sm:text-base tracking-wide uppercase font-sports backdrop-blur-md flex items-center gap-2 transition-all"
            >
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>{t.heroBtnFixtures}</span>
            </button>

            <button
              onClick={() => setCurrentPage('news')}
              className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-sm sm:text-base tracking-wide uppercase font-sports backdrop-blur-md flex items-center gap-2 transition-all"
            >
              <span>{t.heroBtnNews}</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Quick Club Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center sm:items-start p-2 border-r border-neutral-800/80">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
              {t.foundedLabel}
            </span>
            <span className="font-sports font-black text-2xl sm:text-3xl text-white mt-1">
              1966 E.C.
            </span>
            <span className="text-xs text-neutral-500">60+ Years of Glory</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-2 md:border-r border-neutral-800/80">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
              {t.homeGroundLabel}
            </span>
            <span className="font-sports font-black text-xl sm:text-2xl text-white mt-1 truncate max-w-full">
              Halaba Stadium
            </span>
            <span className="text-xs text-emerald-400">15,000 Capacity</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-2 border-r border-neutral-800/80">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
              League Standing
            </span>
            <span className="font-sports font-black text-2xl sm:text-3xl text-amber-400 mt-1">
              #1 in Premier League
            </span>
            <span className="text-xs text-emerald-400 font-bold">1st Place (4 Pts, GD +1)</span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-2">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
              Competition
            </span>
            <span className="font-sports font-black text-lg sm:text-xl text-red-400 mt-1">
              Ethiopian Premier League
            </span>
            <span className="text-xs text-neutral-400">Top Tier • 2026/27</span>
          </div>
        </div>
      </div>

      {/* 3. Halaba Ketema Exclusive Match Center (Fixtures & Results) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Halaba Ketema Match Center</span>
            </div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
              Halaba Ketema Fixtures & Results
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Official Ethiopian Premier League schedule, live scores, and verified results exclusively for Berberewochu.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setMatchViewTab('OVERVIEW')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sports uppercase tracking-wider transition-all ${
                matchViewTab === 'OVERVIEW'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Featured Overview
            </button>
            <button
              onClick={() => setMatchViewTab('UPCOMING')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sports uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                matchViewTab === 'UPCOMING'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Upcoming Fixtures</span>
              <span className="px-1.5 py-0.2 rounded-full text-xxs bg-neutral-800 font-mono text-amber-400">
                {upcomingHalabaMatches.length}
              </span>
            </button>
            <button
              onClick={() => setMatchViewTab('RESULTS')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sports uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                matchViewTab === 'RESULTS'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Past Results</span>
              <span className="px-1.5 py-0.2 rounded-full text-xxs bg-neutral-800 font-mono text-emerald-400">
                {finishedHalabaMatches.length}
              </span>
            </button>
          </div>
        </div>

        {/* Live Halaba Match Banner (If Currently in Progress) */}
        {liveHalabaMatch && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-neutral-900 to-red-950 border-2 border-red-600/80 shadow-2xl relative overflow-hidden animate-in fade-in">
            <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-widest font-sports animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>🔴 LIVE MATCHDAY ACTION • {liveHalabaMatch.liveMinute || 55}'</span>
                </div>
                <h3 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                  {liveHalabaMatch.homeTeam.name} vs {liveHalabaMatch.awayTeam.name}
                </h3>
                <p className="text-xs text-neutral-300">
                  {liveHalabaMatch.venue} • {liveHalabaMatch.competitionName}
                </p>
              </div>

              {/* Live Score Display */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 bg-neutral-950/90 border border-red-600/50 px-6 py-3 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <span className="font-sports font-bold text-sm text-neutral-400 block truncate max-w-[100px]">
                      {liveHalabaMatch.homeTeam.name}
                    </span>
                    <span className="font-sports font-black text-4xl text-white">
                      {liveHalabaMatch.score?.home ?? 0}
                    </span>
                  </div>
                  <span className="font-sports font-bold text-2xl text-red-500">:</span>
                  <div className="text-center">
                    <span className="font-sports font-bold text-sm text-neutral-400 block truncate max-w-[100px]">
                      {liveHalabaMatch.awayTeam.name}
                    </span>
                    <span className="font-sports font-black text-4xl text-white">
                      {liveHalabaMatch.score?.away ?? 0}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenMatchModal(liveHalabaMatch.id)}
                  className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950 transition-colors flex items-center gap-1.5"
                >
                  <span>Match Center</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 1: FEATURED OVERVIEW (NEXT MATCH & LATEST RESULT) */}
        {matchViewTab === 'OVERVIEW' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Next Halaba Match Card */}
              {nextMatch ? (
                <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-red-900/40 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <h3 className="font-sports font-bold text-lg text-white uppercase tracking-wider">
                          Next Halaba Ketema Fixture
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-amber-400 uppercase bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded">
                        {nextMatch.round || 'EPL Matchday'}
                      </span>
                    </div>

                    {/* Teams Display */}
                    <div className="py-6 flex items-center justify-around">
                      <div className="flex flex-col items-center text-center w-2/5">
                        {nextMatch.homeTeam.isHalaba ? (
                          <HalabaCrest size={68} showGlow />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-lg text-neutral-200">
                            {nextMatch.homeTeam.name.substring(0, 3).toUpperCase()}
                          </div>
                        )}
                        <span className={`font-sports font-bold text-base mt-2 ${nextMatch.homeTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                          {nextMatch.homeTeam.name}
                        </span>
                        <span className="text-xxs text-neutral-400 font-semibold uppercase tracking-wider">
                          {nextMatch.homeTeam.isHalaba ? 'Home (Fortress)' : 'Home'}
                        </span>
                      </div>

                      <div className="flex flex-col items-center px-2">
                        <span className="font-sports font-black text-2xl text-neutral-500">VS</span>
                        <span className="text-xs font-mono font-bold text-amber-400 mt-1 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 whitespace-nowrap">
                          {nextMatch.kickoffTime} EAT
                        </span>
                      </div>

                      <div className="flex flex-col items-center text-center w-2/5">
                        {nextMatch.awayTeam.isHalaba ? (
                          <HalabaCrest size={68} showGlow />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-lg text-neutral-200">
                            {nextMatch.awayTeam.name.substring(0, 3).toUpperCase()}
                          </div>
                        )}
                        <span className={`font-sports font-bold text-base mt-2 ${nextMatch.awayTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                          {nextMatch.awayTeam.name}
                        </span>
                        <span className="text-xxs text-neutral-400 font-semibold uppercase tracking-wider">
                          {nextMatch.awayTeam.isHalaba ? 'Away (Halaba)' : 'Away'}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-400 space-y-2 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/80">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-white font-medium">
                          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-semibold text-sm">{formatMatchDateFull(nextMatch.date)}</span>
                          <span className="text-neutral-500">•</span>
                          <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span className="font-mono text-amber-300 font-bold">{nextMatch.kickoffTime} EAT</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-xxs font-mono uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                          Next Matchday
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{nextMatch.venue}</span>
                        {nextMatch.homeTeam.isHalaba && (
                          <span className="text-xxs px-1.5 py-0.2 rounded bg-red-950/80 text-red-400 border border-red-800/60 font-semibold shrink-0">
                            Home Fortress
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenMatchModal(nextMatch.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider font-sports"
                    >
                      <span>{t.viewMatchDetails}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setMatchViewTab('UPCOMING')}
                      className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                    >
                      All Halaba Fixtures ({upcomingHalabaMatches.length})
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8 text-center flex flex-col items-center justify-center space-y-2">
                  <Calendar className="w-8 h-8 text-neutral-500" />
                  <span className="font-sports font-bold text-lg text-white">No Upcoming Halaba Fixtures</span>
                  <p className="text-xs text-neutral-400">Check back soon for upcoming match schedule updates.</p>
                </div>
              )}

              {/* Latest Halaba Result Card */}
              {latestResult ? (
                <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <h3 className="font-sports font-bold text-lg text-white uppercase tracking-wider">
                          Latest Halaba Ketema Result
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded">
                        FT Result • {latestResult.round || 'Round 2'}
                      </span>
                    </div>

                    {/* Scoreline */}
                    <div className="py-6 flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                        {latestResult.homeTeam.isHalaba ? (
                          <HalabaCrest size={68} showGlow />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-lg text-neutral-200">
                            {latestResult.homeTeam.name.substring(0, 3).toUpperCase()}
                          </div>
                        )}
                        <span className={`font-sports font-bold text-base mt-2 truncate max-w-full ${latestResult.homeTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                          {latestResult.homeTeam.name}
                        </span>
                      </div>

                      <div className="flex flex-col items-center justify-center shrink-0 px-2 sm:px-4">
                        <div className="font-sports font-black text-3xl sm:text-4xl text-emerald-400 whitespace-nowrap bg-neutral-950 px-5 py-1.5 rounded-xl border border-neutral-800 tracking-wider flex items-center justify-center gap-2 select-none shadow-md">
                          <span>{latestResult.score?.home ?? 0}</span>
                          <span className="text-neutral-500 font-normal text-2xl sm:text-3xl">-</span>
                          <span>{latestResult.score?.away ?? 0}</span>
                        </div>
                        <span className="text-xs text-neutral-400 mt-1 font-medium whitespace-nowrap">Full Time</span>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                        {latestResult.awayTeam.isHalaba ? (
                          <HalabaCrest size={68} showGlow />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-lg text-neutral-200">
                            {latestResult.awayTeam.name.substring(0, 3).toUpperCase()}
                          </div>
                        )}
                        <span className={`font-sports font-bold text-base mt-2 truncate max-w-full ${latestResult.awayTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                          {latestResult.awayTeam.name}
                        </span>
                      </div>
                    </div>

                    {/* Scorers preview */}
                    {latestResult.scorers && latestResult.scorers.length > 0 && (
                      <div className="bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80 text-xs text-neutral-300">
                        <span className="text-neutral-500 font-bold block mb-1 uppercase text-xxs tracking-wider">
                          Goal Scorers:
                        </span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {latestResult.scorers.map((s, idx) => (
                            <span key={idx} className="flex items-center gap-1 font-medium">
                              <span>⚽</span>
                              <span className="text-white">{s.player}</span>
                              <span className="text-neutral-400">({s.minute}')</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenMatchModal(latestResult.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider font-sports"
                    >
                      <span>{t.viewMatchDetails}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setMatchViewTab('RESULTS')}
                      className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                    >
                      All Halaba Results ({finishedHalabaMatches.length})
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8 text-center flex flex-col items-center justify-center space-y-2">
                  <Trophy className="w-8 h-8 text-neutral-500" />
                  <span className="font-sports font-bold text-lg text-white">No Previous Halaba Results</span>
                  <p className="text-xs text-neutral-400">Past match results will appear once fixtures conclude.</p>
                </div>
              )}
            </div>

            {/* Quick Preview Grid of other Halaba matches */}
            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sports font-bold text-base text-white uppercase tracking-wider">
                    Full Halaba Ketema Season Schedule & Record
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {upcomingHalabaMatches.length} Upcoming Fixtures • {finishedHalabaMatches.length} Completed League Matches
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setMatchViewTab('UPCOMING')}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold font-sports uppercase tracking-wider text-neutral-200 hover:text-white transition-colors"
                >
                  View All Fixtures
                </button>
                <button
                  onClick={() => setMatchViewTab('RESULTS')}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold font-sports uppercase tracking-wider text-neutral-200 hover:text-white transition-colors"
                >
                  View All Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ALL UPCOMING HALABA KETEMA FIXTURES */}
        {matchViewTab === 'UPCOMING' && (
          <div className="space-y-4 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingHalabaMatches.map((m) => {
                const isHome = m.homeTeam.isHalaba;
                const opponentName = isHome ? m.awayTeam.name : m.homeTeam.name;

                return (
                  <div
                    key={m.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 transition-all flex flex-col justify-between shadow-lg relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                        <span className="text-xxs font-bold uppercase font-sports tracking-wider px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800/60">
                          {m.round || 'League Match'}
                        </span>
                        <span className="text-xxs font-semibold uppercase text-neutral-400">
                          {isHome ? '🏠 Home' : '✈️ Away'}
                        </span>
                      </div>

                      <div className="py-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <HalabaCrest size={34} />
                            <span className="font-sports font-black text-base text-white">
                              Halaba Ketema
                            </span>
                          </div>
                          <span className="text-xxs font-bold uppercase px-2 py-0.5 rounded bg-neutral-800 text-amber-400">
                            {isHome ? 'Home' : 'Away'}
                          </span>
                        </div>

                        <div className="text-center py-0.5">
                          <span className="text-xs font-sports font-bold text-neutral-500 uppercase tracking-widest">
                            VS
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-sports font-bold text-xs text-neutral-300">
                              {opponentName.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="font-sports font-bold text-base text-neutral-200">
                              {opponentName}
                            </span>
                          </div>
                          <span className="text-xxs font-semibold uppercase text-neutral-500">
                            Opponent
                          </span>
                        </div>
                      </div>

                      <div className="bg-neutral-950/70 p-3 rounded-xl border border-neutral-800/80 text-xs space-y-1">
                        <div className="flex items-center gap-2 text-neutral-300">
                          <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{m.date}</span>
                          <span>•</span>
                          <Clock className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{m.kickoffTime} EAT</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400 truncate">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{m.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                      <button
                        onClick={() => onOpenMatchModal(m.id)}
                        className="text-xs font-bold text-red-400 hover:text-red-300 font-sports uppercase tracking-wider flex items-center gap-1"
                      >
                        <span>Match Center</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xxs text-neutral-500 font-mono">
                        EPL 2026/27
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setCurrentPage('fixtures')}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider font-sports text-neutral-300 hover:text-white border border-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                <span>View Full Fixtures & Calendar Page</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: ALL PAST HALABA KETEMA RESULTS */}
        {matchViewTab === 'RESULTS' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Always Visible Next Fixture Header Bar */}
            {nextMatch && (
              <div
                onClick={() => onOpenMatchModal(nextMatch.id)}
                className="cursor-pointer p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-neutral-900 border border-red-500/50 hover:border-red-400 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl transition-all group"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2.5 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 shrink-0">
                    <Calendar className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xxs uppercase font-sports font-black px-2 py-0.5 rounded bg-red-600 text-white">
                        UPCOMING MATCHDAY
                      </span>
                      <span className="text-xs text-amber-400 font-bold font-sports uppercase">
                        {nextMatch.round || 'EPL Matchday'}
                      </span>
                    </div>
                    <h4 className="font-sports font-bold text-base text-white mt-0.5 flex items-center gap-2">
                      <span>{nextMatch.homeTeam.name}</span>
                      <span className="text-neutral-500 text-xs">vs</span>
                      <span>{nextMatch.awayTeam.name}</span>
                    </h4>
                    <span className="text-xs text-neutral-300 block">
                      📅 {formatMatchDateFull(nextMatch.date)} • {nextMatch.kickoffTime} EAT • {nextMatch.venue}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenMatchModal(nextMatch.id);
                  }}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shrink-0 self-end sm:self-auto"
                >
                  <span>Match Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {finishedHalabaMatches.map((m) => {
                const isHome = m.homeTeam.isHalaba;
                const halabaGoals = isHome ? (m.score?.home ?? 0) : (m.score?.away ?? 0);
                const opponentGoals = isHome ? (m.score?.away ?? 0) : (m.score?.home ?? 0);
                const isWin = halabaGoals > opponentGoals;
                const isDraw = halabaGoals === opponentGoals;

                return (
                  <div
                    key={m.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-xxs font-black uppercase font-sports tracking-wider ${
                              isWin
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : isDraw
                                ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                : 'bg-red-950 text-red-400 border border-red-800'
                            }`}
                          >
                            {isWin ? 'WIN' : isDraw ? 'DRAW' : 'LOSS'}
                          </span>
                          <span className="text-xs text-neutral-400 font-sports font-bold uppercase">
                            {m.round || 'Round Match'}
                          </span>
                        </div>
                        <span className="text-xxs font-mono text-neutral-500">{m.date}</span>
                      </div>

                      {/* Teams & Score */}
                      <div className="py-4 flex items-center justify-between gap-3">
                        <div className="flex-1 flex items-center gap-2.5">
                          {m.homeTeam.isHalaba ? (
                            <HalabaCrest size={40} showGlow />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-sports font-bold text-xs text-neutral-300 shrink-0">
                              {m.homeTeam.name.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <span className={`font-sports font-bold text-base block ${m.homeTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                              {m.homeTeam.name}
                            </span>
                            <span className="text-xxs text-neutral-500 uppercase">Home</span>
                          </div>
                        </div>

                        <div className="px-3.5 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-center shrink-0">
                          <span className="font-sports font-black text-2xl text-emerald-400">
                            {m.score?.home ?? 0} - {m.score?.away ?? 0}
                          </span>
                          <span className="block text-xxs text-neutral-500 font-medium">FT</span>
                        </div>

                        <div className="flex-1 flex items-center justify-end gap-2.5 text-right">
                          <div>
                            <span className={`font-sports font-bold text-base block ${m.awayTeam.isHalaba ? 'text-red-400' : 'text-white'}`}>
                              {m.awayTeam.name}
                            </span>
                            <span className="text-xxs text-neutral-500 uppercase">Away</span>
                          </div>
                          {m.awayTeam.isHalaba ? (
                            <HalabaCrest size={40} showGlow />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-sports font-bold text-xs text-neutral-300 shrink-0">
                              {m.awayTeam.name.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Scorers */}
                      {m.scorers && m.scorers.length > 0 && (
                        <div className="bg-neutral-950/70 p-3 rounded-xl border border-neutral-800/80 text-xs text-neutral-300">
                          <span className="text-neutral-500 font-bold block mb-1 uppercase text-xxs tracking-wider">
                            Goal Scorers:
                          </span>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {m.scorers.map((s, idx) => (
                              <span key={idx} className="flex items-center gap-1 font-medium">
                                <span>⚽</span>
                                <span className="text-white">{s.player}</span>
                                <span className="text-neutral-400">({s.minute}')</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                      <button
                        onClick={() => onOpenMatchModal(m.id)}
                        className="text-xs font-bold text-red-400 hover:text-red-300 font-sports uppercase tracking-wider flex items-center gap-1"
                      >
                        <span>Match Report</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xxs text-neutral-400 truncate max-w-[200px]">
                        {m.venue}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setCurrentPage('fixtures')}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider font-sports text-neutral-300 hover:text-white border border-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                <span>View Full Results & Standings</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. Latest News Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800">
          <div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
              {t.latestClubNews}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">{t.newsSubtitle}</p>
          </div>
          <button
            onClick={() => setCurrentPage('news')}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 uppercase tracking-wider font-sports"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((article) => {
            const title = article.title[language] || article.title.en;
            const summary = article.summary[language] || article.summary.en;

            return (
              <div
                key={article.id}
                onClick={() => onOpenArticleModal(article.id)}
                className="group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/70 text-emerald-400 backdrop-blur-md">
                    {article.category.replace('_', ' ')}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">
                      {article.date} • {article.readTime}
                    </span>
                    <h3 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors mt-1 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                      {summary}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-red-400 flex items-center gap-1 uppercase tracking-wider font-sports pt-2">
                    <span>{t.readArticle}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. League Standings Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-3">
            <div>
              <h2 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.standingsPreviewTitle}
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Ethiopian Premier League (Top Tier) • 2026/27 Season (Halaba Ketema in 1st Place)
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('standings')}
              className="text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-wider self-start sm:self-auto font-sports"
            >
              <span>{t.fullStandingsBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-xs font-bold uppercase text-neutral-400">
                  <th className="py-3 px-3">{t.pos}</th>
                  <th className="py-3 px-3">{t.club}</th>
                  <th className="py-3 px-2 text-center">{t.played}</th>
                  <th className="py-3 px-2 text-center">{t.won}</th>
                  <th className="py-3 px-2 text-center">{t.drawn}</th>
                  <th className="py-3 px-2 text-center">{t.lost}</th>
                  <th className="py-3 px-2 text-center hidden sm:table-cell">{t.gd}</th>
                  <th className="py-3 px-3 text-right font-black">{t.pts}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {topStandings.map((team) => (
                  <tr
                    key={team.teamId}
                    className={`transition-colors ${
                      team.isHalaba
                        ? 'bg-red-950/40 border-l-4 border-l-red-500 font-semibold'
                        : 'hover:bg-neutral-800/30'
                    }`}
                  >
                    <td className="py-3 px-3 font-bold">
                      <span
                        className={`inline-block w-6 text-center text-xs py-0.5 rounded ${
                          team.position <= 2
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold'
                            : 'text-neutral-400'
                        }`}
                      >
                        {team.position}
                      </span>
                    </td>
                    <td className="py-3 px-3 flex items-center gap-2.5">
                      {team.isHalaba ? (
                        <HalabaCrest size={28} />
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-neutral-800 text-xxs font-bold flex items-center justify-center text-neutral-300">
                          {team.teamName.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span
                        className={`font-sports text-base tracking-wide ${
                          team.isHalaba ? 'text-red-300 font-black' : 'text-neutral-200'
                        }`}
                      >
                        {team.teamName}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center text-neutral-400">{team.played}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{team.won}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{team.drawn}</td>
                    <td className="py-3 px-2 text-center text-neutral-400">{team.lost}</td>
                    <td className="py-3 px-2 text-center text-neutral-400 hidden sm:table-cell">
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </td>
                    <td className="py-3 px-3 text-right font-sports font-black text-lg text-white">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Membership CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border border-red-800/40 p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Supporter Club</span>
            </div>

            <h2 className="font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider leading-tight">
              {t.membershipCtaTitle}
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.membershipCtaDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentPage('membership')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all"
              >
                <UserPlus className="w-5 h-5" />
                <span>{t.joinNowBtn}</span>
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-sm sm:text-base uppercase tracking-wider font-sports transition-colors"
              >
                <span>Learn Club History</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 opacity-25 hover:opacity-40 transition-opacity">
            <HalabaCrest size={280} />
          </div>
        </div>
      </section>
    </div>
  );
};
