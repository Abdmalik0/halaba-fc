import React from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import { EthiopianClubLogo } from '../components/EthiopianClubLogo';
import { ClubImages } from '../assets/images';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  UserPlus,
  Flame,
  ArrowRight,
  Heart,
  ShoppingBag,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { AppStoreInstallCard } from '../components/pwa/AppStoreInstallCard';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { SponsorAutoSlider } from '../components/SponsorAutoSlider';
import {
  getLocalizedTeamName,
  getLocalizedVenue,
  getLocalizedCategory,
  getLocalizedPersonName,
} from '../utils/localization';
import { formatTeamName } from '../utils/formatTeamName';

interface HomePageProps {
  onOpenMatchModal: (matchId: string) => void;
  onOpenArticleModal: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenMatchModal,
  onOpenArticleModal,
}) => {
  const {
    t,
    language,
    setCurrentPage,
    matches,
    standings,
    news,
    clubInfo,
    openDonationModal,
    shopItems,
    openCheckoutModal,
  } = useClub();
  const { isInstalled } = usePWAInstall();

  // Helper to identify Halaba City FC matches
  const isHalabaMatch = (m: any) =>
    Boolean(
      m &&
      (m.homeTeam?.isHalaba ||
        m.awayTeam?.isHalaba ||
        m.homeTeam?.id === 'halaba' ||
        m.awayTeam?.id === 'halaba' ||
        m.homeTeam?.name?.toLowerCase().includes('halaba') ||
        m.awayTeam?.name?.toLowerCase().includes('halaba'))
    );

  // Find next upcoming fixture of Halaba City FC (strictly UPCOMING or LIVE, sorted by date ascending)
  const upcomingHalabaMatches = matches
    .filter((m) => (m.status === 'UPCOMING' || m.status === 'LIVE') && isHalabaMatch(m))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextMatch =
    upcomingHalabaMatches[0] ||
    matches.find((m) => (m.status === 'UPCOMING' || m.status === 'LIVE')) ||
    null;

  // Find latest finished match of Halaba City FC (strictly FINISHED, sorted by date descending)
  const finishedHalabaMatches = matches
    .filter((m) => m.status === 'FINISHED' && isHalabaMatch(m))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestResult = finishedHalabaMatches[0] || matches.find((m) => m.status === 'FINISHED') || null;
  // Latest 3 news items
  const recentNews = news.slice(0, 3);
  // Top 5 standings
  const topStandings = standings.slice(0, 5);
  const halabaStanding = standings.find((t) => t.isHalaba);

  const homeNextTeam = nextMatch ? getLocalizedTeamName(nextMatch.homeTeam?.id, nextMatch.homeTeam?.name, language) : '';
  const awayNextTeam = nextMatch ? getLocalizedTeamName(nextMatch.awayTeam?.id, nextMatch.awayTeam?.name, language) : '';
  const homeNextShort = nextMatch ? formatTeamName(nextMatch.homeTeam?.id, homeNextTeam, language) : '';
  const awayNextShort = nextMatch ? formatTeamName(nextMatch.awayTeam?.id, awayNextTeam, language) : '';
  const nextVenue = nextMatch ? getLocalizedVenue(nextMatch.venue, language) : '';

  const homeLatestTeam = latestResult ? getLocalizedTeamName(latestResult.homeTeam?.id, latestResult.homeTeam?.name, language) : '';
  const awayLatestTeam = latestResult ? getLocalizedTeamName(latestResult.awayTeam?.id, latestResult.awayTeam?.name, language) : '';
  const homeLatestShort = latestResult ? formatTeamName(latestResult.homeTeam?.id, homeLatestTeam, language) : '';
  const awayLatestShort = latestResult ? formatTeamName(latestResult.awayTeam?.id, awayLatestTeam, language) : '';

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-red-950/40">
        {/* Background Image with Dark & Club Color Gradients */}
        <div className="absolute inset-0 z-0 bg-neutral-950 overflow-hidden">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={ClubImages.heroStadiumMobile}
              type="image/webp"
            />
            <source
              srcSet={ClubImages.heroStadiumWebp || ClubImages.heroStadium}
              type="image/webp"
            />
            <img
              src={ClubImages.heroStadiumJpg || ClubImages.heroStadium}
              alt="Halaba Stadium Supporters"
              loading="eager"
              {...({ fetchpriority: 'high' } as any)}
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110 scale-105 transition-opacity duration-300"
            />
          </picture>
          {/* Robust cross-browser hero dark overlay */}
          <div className="hero-stadium-overlay" />
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
          </div>

          {/* Club Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase font-sports drop-shadow-lg">
            {language === 'am' ? 'ሀላባ ከተማ እግርኳስ ክለብ' : 'HALABA CITY FC'}
          </h1>

          {/* Nickname & Ethiopic Badge */}
          {clubInfo.nickname?.am && (
            <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold flex items-center justify-center gap-2">
              <span
                className="font-ethiopic font-bold text-[#fbc45f]"
                style={{ color: '#fbc45f', borderColor: '#080808', borderWidth: '0px', borderStyle: 'none' }}
              >
                {clubInfo.nickname.am}
              </span>
            </div>
          )}

          <p className="mt-4 max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {t.heroSubtitle}
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={openDonationModal}
              className="px-6 py-3.5 rounded-xl btn-donate-emerald font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all ring-2 ring-emerald-500/40 hover:scale-102"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>{t.heroDonateBtn}</span>
            </button>

            <button
              onClick={() => setCurrentPage('membership')}
              className="px-6 py-3.5 rounded-xl btn-membership-join font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all"
            >
              <UserPlus className="w-5 h-5" />
              <span>{t.heroBtnJoin}</span>
            </button>

            <button
              onClick={() => setCurrentPage('shop')}
              className="px-6 py-3.5 rounded-xl btn-shop-neutral font-bold text-sm sm:text-base tracking-wide uppercase font-sports flex items-center gap-2 transition-all hover:border-red-600/60"
            >
              <ShoppingBag className="w-5 h-5 text-red-400" />
              <span>{t.navShop}</span>
            </button>
          </div>

          {/* 5. Big Auto Slide Bar of Sponsor Posters */}
          <div className="w-full mt-8 flex flex-col items-center">
            <SponsorAutoSlider />
          </div>
        </div>
      </section>

      {/* 3. Match Center Preview (Next Match & Latest Result) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Next Match Card */}
          {nextMatch && (
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-red-900/40 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div 
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(220, 38, 38, 0.15), transparent 70%)'
                }}
              />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-sports font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2">
                      <span>{t.nextHalabaGame}</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-400 uppercase bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded font-sports">
                    {language === 'am' ? 'የኢትዮጵያ ፕሪሚየር ሊግ' : nextMatch.competitionName.split('-')[0]}
                  </span>
                </div>

                {/* Teams Display (Flexible 3-column layout) */}
                <div className="py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0">
                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <EthiopianClubLogo teamId={nextMatch.homeTeam.id} teamName={homeNextTeam} size={56} priority className="shrink-0 flex-shrink-0" />
                    <span className="font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block" title={homeNextTeam}>
                      {homeNextShort}
                    </span>
                    <span className="text-xxs text-neutral-400 font-semibold uppercase">{t.home}</span>
                  </div>

                  <div className="shrink-0 flex-shrink-0 flex flex-col items-center px-1.5 sm:px-3">
                    <span className="font-sports font-black text-xl sm:text-2xl text-neutral-500">{t.vs}</span>
                    <span className="text-xxs font-mono font-bold text-amber-400 mt-1 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 whitespace-nowrap">
                      {nextMatch.kickoffTime} {t.eatTimezone}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <EthiopianClubLogo teamId={nextMatch.awayTeam.id} teamName={awayNextTeam} size={56} priority className="shrink-0 flex-shrink-0" />
                    <span className="font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block" title={awayNextTeam}>
                      {awayNextShort}
                    </span>
                    <span className="text-xxs text-neutral-400 font-semibold uppercase">{t.away}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 space-y-1 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="text-neutral-300 font-medium">{nextMatch.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{nextMatch.kickoffTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{nextVenue}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => onOpenMatchModal(nextMatch.id)}
                  className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>{t.viewMatchDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setCurrentPage('fixtures')}
                  className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                >
                  {t.allFixturesBtn}
                </button>
              </div>
            </div>
          )}

          {/* Latest Result Card */}
          {latestResult && (
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h3 className="font-sports font-bold text-lg text-white uppercase tracking-wider">
                      {t.latestResultTitle}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded">
                    {t.fullTime}
                  </span>
                </div>

                {/* Scoreline (Flexible 3-column layout) */}
                <div className="py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0">
                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <EthiopianClubLogo teamId={latestResult.homeTeam.id} teamName={homeLatestTeam} size={56} priority className="shrink-0 flex-shrink-0" />
                    <span className="font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block" title={homeLatestTeam}>
                      {homeLatestShort}
                    </span>
                  </div>

                  <div className="shrink-0 flex-shrink-0 flex flex-col items-center justify-center px-1.5 sm:px-3">
                    <div className="font-sports font-black text-2xl sm:text-3xl md:text-4xl text-emerald-400 whitespace-nowrap bg-neutral-950 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-xl border border-neutral-800 tracking-wider flex items-center justify-center gap-2 select-none shadow-md">
                      <span>{latestResult.score?.home ?? 0}</span>
                      <span className="text-neutral-500 font-normal text-xl sm:text-2xl">-</span>
                      <span>{latestResult.score?.away ?? 0}</span>
                    </div>
                    <span className="text-xxs text-neutral-400 mt-1 font-medium whitespace-nowrap">{t.fullTime}</span>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <EthiopianClubLogo teamId={latestResult.awayTeam.id} teamName={awayLatestTeam} size={56} priority className="shrink-0 flex-shrink-0" />
                    <span className="font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block" title={awayLatestTeam}>
                      {awayLatestShort}
                    </span>
                  </div>
                </div>

                {/* Scorers preview */}
                {latestResult.scorers && latestResult.scorers.length > 0 && (
                  <div className="bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80 text-xs text-neutral-300">
                    <span className="text-neutral-500 font-bold block mb-1 uppercase text-xxs tracking-wider">
                      {language === 'am' ? 'ጎል ያስቆጠሩ፡' : 'Scorers:'}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {latestResult.scorers.map((s, idx) => (
                        <span key={idx} className="flex items-center gap-1 font-medium">
                          <span>⚽</span>
                          <span className="text-white">{getLocalizedPersonName(s.player, language)}</span>
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
                  className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>{t.viewMatchDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setCurrentPage('fixtures')}
                  className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                >
                  {t.allFixturesBtn}
                </button>
              </div>
            </div>
          )}
        </div>
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
            <span>{language === 'am' ? 'ሁሉንም ይመልከቱ' : 'View All'}</span>
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
                <div className="relative aspect-video overflow-hidden bg-neutral-950">
                  <img
                    src={article.imageUrl || ClubImages.matchAction}
                    alt={title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = ClubImages.matchAction;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/70 text-emerald-400 backdrop-blur-md">
                    {getLocalizedCategory(article.category, language)}
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
                {language === 'am'
                  ? `የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን) • የ2026/27 የውድድር ዘመን (ሀላባ ከተማ በ${halabaStanding?.position || 4}ኛ ደረጃ • ${halabaStanding?.points || 5} ነጥብ)`
                  : `Ethiopian Premier League (Top Tier) • 2026/27 Season (Halaba Ketema in #${halabaStanding?.position || 4} • ${halabaStanding?.points || 5} Pts)`}
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

          <div className="mt-4 overflow-x-auto max-w-full rounded-xl">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="border-b border-neutral-800 text-xs font-bold uppercase text-neutral-400">
                  <th className="py-3 px-3 text-center w-10">{t.pos}</th>
                  <th className="py-3 px-3 min-w-[140px]">{t.club}</th>
                  <th className="py-3 px-2 text-center w-10">{t.played}</th>
                  <th className="py-3 px-2 text-center w-10">{t.won}</th>
                  <th className="py-3 px-2 text-center w-10">{t.drawn}</th>
                  <th className="py-3 px-2 text-center w-10">{t.lost}</th>
                  <th className="py-3 px-2 text-center w-12 hidden sm:table-cell">{t.gd}</th>
                  <th className="py-3 px-3 text-right font-black w-12">{t.pts}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {topStandings.map((team) => {
                  const localizedTeam = getLocalizedTeamName(team.teamId, team.teamName, language);
                  const shortName = formatTeamName(team.teamId, localizedTeam, language);
                  return (
                    <tr
                      key={team.teamId}
                      className={`transition-colors ${
                        team.isHalaba
                          ? 'bg-red-950/40 border-l-4 border-l-red-500 font-semibold'
                          : 'hover:bg-neutral-800/30'
                      }`}
                    >
                      <td className="py-3 px-3 text-center font-bold">
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
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <EthiopianClubLogo teamId={team.teamId} teamName={localizedTeam} size={28} badgeUrl={team.badgeUrl} className="shrink-0 flex-shrink-0" />
                          <span
                            className={`font-sports text-sm sm:text-base tracking-wide truncate max-w-[130px] sm:max-w-none block ${
                              team.isHalaba ? 'text-red-300 font-black' : 'text-neutral-200'
                            }`}
                            title={localizedTeam}
                          >
                            {shortName}
                          </span>
                        </div>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Official Club Jersey Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.shopBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider">
              {language === 'am' ? 'የበርበሬዎቹን ማሊያ ይልበሱ' : 'Wear the Berberewochu Colors'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              {language === 'am'
                ? 'በኢትዮጵያ ፕሪሚየር ሊግ የሚለበሱ ይፋዊ ማሊያዎች። በቻፓ ፈጣን ክፍያ ይግዙ።'
                : 'Official Ethiopian Premier League kits manufactured with breathable athletic fabric. Direct Chapa checkout.'}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('shop')}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-sports font-bold uppercase text-xs tracking-wider transition-all hover:border-red-600"
          >
            <span>{language === 'am' ? `ሙሉውን ሱቅ ይመልከቱ (${shopItems.length} እቃዎች)` : `Visit Full Shop (${shopItems.length} Items)`}</span>
            <ArrowRight className="w-4 h-4 text-red-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItems.slice(0, 3).map((item) => {
            const name = typeof item.name === 'object'
              ? item.name[language] || item.name.en
              : item.name;

            const desc = typeof item.description === 'object'
              ? item.description[language] || item.description.en
              : item.description;

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/50 flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={item.imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white text-xxs font-sports font-black uppercase tracking-wider shadow-md">
                      {t.officialTag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-sports font-black text-lg text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-400 line-clamp-2">
                      {desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-xxs uppercase font-bold text-neutral-400">{t.sizeGuide}:</span>
                      <div className="flex gap-1">
                        {item.availableSizes.map((s) => (
                          <span
                            key={s}
                            className="px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-xxs font-sports font-bold uppercase"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                    <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="font-sports font-black text-xl text-emerald-400">
                      {item.price.toLocaleString()} {t.etbCurrency}
                    </span>
                    <button
                      onClick={() => openCheckoutModal(item)}
                      className="px-4 py-2 rounded-xl btn-primary-red font-sports font-black uppercase tracking-wider text-xs shadow-md shadow-red-950/40 flex items-center gap-1.5 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{t.buyNowBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Supporter Contribution & Donation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950/70 via-neutral-900 to-neutral-950 border border-emerald-800/40 p-8 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider font-sports">
                <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                <span>{language === 'am' ? 'ክለቡን ያጠናክሩ • በቻፓ ፈጣን ክፍያ' : 'Empower the Club • Chapa Payment Integration'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider">
                {t.donateTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {t.donateSubtitle}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xxs text-neutral-400">
                <span className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold">100 {t.etbCurrency}</span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold">500 {t.etbCurrency}</span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold">1,000 {t.etbCurrency}</span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 font-bold">{t.customAmountLabel}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={openDonationModal}
                className="px-8 py-4 rounded-2xl btn-donate-emerald text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 hover:scale-102"
              >
                <Heart className="w-5 h-5 fill-white text-white" />
                <span>{t.donateBtn}</span>
              </button>
              <span className="text-xxs text-center text-neutral-400 font-medium">
                {language === 'am' ? 'ፈጣን ዲጂታል ደረሰኝ እና የተረጋገጠ የክፍያ መለያ' : 'Instant digital receipt & verified transaction reference'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Official Mobile App Download Section (Only shown when not running inside installed mobile app) */}
      {!isInstalled && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-sports font-bold uppercase tracking-wider mb-2">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{language === 'am' ? 'ይፋዊ የሞባይል መተግበሪያ' : 'Official Mobile App'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider">
                  {language === 'am' ? 'የክለቡን መተግበሪያ ያውርዱ' : 'Download Club App'}
                </h2>
              </div>
              <p className="text-xs text-neutral-400 max-w-md">
                {language === 'am'
                  ? 'ለአንድሮይድ በቀጥታ APK ያውርዱ፤ ለአይፎን ደግሞ በሳፋሪ በቀላሉ ወደ ዋና ገጽ (Home Screen) ይጨምሩ።'
                  : 'Download the official Android APK file directly or add to iOS home screen for instant access.'}
              </p>
            </div>

            <AppStoreInstallCard mode="embedded" />
          </div>
        </section>
      )}

      {/* 8. Membership CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border border-red-800/40 p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'am' ? 'ይፋዊ የደጋፊዎች ማህበር' : 'Official Supporter Club'}</span>
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
                className="px-6 py-3.5 rounded-xl btn-secondary-amber text-white font-bold text-sm sm:text-base uppercase tracking-wider font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all"
              >
                <UserPlus className="w-5 h-5" />
                <span>{t.joinNowBtn}</span>
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-sm sm:text-base uppercase tracking-wider font-sports transition-colors"
              >
                <span>{language === 'am' ? 'የክለቡን ታሪክ ይወቁ' : 'Learn Club History'}</span>
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
