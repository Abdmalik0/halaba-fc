import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import { ClubImages } from '../assets/images';
import {
  Trophy,
  History,
  Shield,
  MapPin,
  Users,
  Award,
  ChevronRight,
  Flame,
  Target
} from 'lucide-react';
import {
  getLocalizedPersonName,
  getLocalizedPosition,
  getLocalizedRole,
  getLocalizedDepartment
} from '../utils/localization';

export const AboutPage: React.FC = () => {
  const { t, language, clubInfo, players, staff } = useClub();
  const [squadFilter, setSquadFilter] = useState<string>('ALL');

  const filteredPlayers = players.filter((p) => {
    if (squadFilter === 'ALL') return true;
    return p.position === squadFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>{t.heritageBadge}</span>
            </div>
            <h1 className="font-sports font-black text-4xl sm:text-6xl text-white uppercase tracking-wider">
              {t.aboutTitle}
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">{t.aboutSubtitle}</p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <HalabaCrest size={150} showGlow />
          </div>
        </div>
      </div>

      {/* 2. Club History & The Berbere Identity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* History */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 border border-red-800 flex items-center justify-center">
                <History className="w-5 h-5" />
              </div>
              <h2 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.clubHistoryTitle}
              </h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.historyP1}
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.historyP2}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>{t.foundedEc}</span>
            <span className="text-amber-400 font-bold font-mono">{t.centralEthiopia}</span>
          </div>
        </div>

        {/* The Berberewochu Identity */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h2 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.identityTitle}
              </h2>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.identityDesc}
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed bg-neutral-950/70 p-4 rounded-xl border border-neutral-800">
              <strong className="text-neutral-200 block mb-1">
                {language === 'am' ? 'የአርማው ምልክት፡' : 'Crest Symbolism:'}
              </strong>
              {t.crestSymbolism}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>{t.officialColorsDesc}</span>
            <span className="text-emerald-400 font-bold">{t.prideOfHalaba}</span>
          </div>
        </div>
      </div>

      {/* 3. Mission, Vision, and Club Honors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">{t.ourMission}</h3>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            {t.missionDesc}
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">{t.ourVision}</h3>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            {t.visionDesc}
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/60 text-red-400 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">{t.honorsTitle}</h3>
          <ul className="space-y-1.5 text-xs text-neutral-300">
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>{t.honor1}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>{t.honor2}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>{t.honor3}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>{t.honor4}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Home Stadium Guide */}
      <div className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[300px] overflow-hidden">
            <img
              src={ClubImages.heroStadium}
              alt="Halaba Stadium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.stadiumFortress}</span>
              </div>
              <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
                {t.stadiumTitle}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.stadiumDesc}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">{t.capacityLabel}</span>
                  <span className="font-bold text-white text-base font-sports">
                    {language === 'am' ? '15,000 ተመልካች' : clubInfo.stadium.capacity}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">{t.pitchSurfaceLabel}</span>
                  <span className="font-bold text-emerald-400 text-base font-sports">
                    {t.naturalGrass}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">{t.locationLabel}</span>
                  <span className="font-bold text-white text-base font-sports">
                    {language === 'am' ? 'ሀላባ ቁሊቶ' : clubInfo.stadium.city}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">{t.atmosphereLabel}</span>
                  <span className="font-bold text-red-400 text-base font-sports">
                    {t.electrifying}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Squad Roster */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
          <div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
              {t.squadTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              {language === 'am'
                ? 'የ2026/27 የኢትዮጵያ ፕሪሚየር ሊግ የሀላባ ከተማ ይፋዊ ተጫዋቾች ዝርዝር።'
                : 'Official 2026/27 Ethiopian Premier League squad roster.'}
            </p>
          </div>

          {/* Filter positions */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'].map((pos) => (
              <button
                key={pos}
                onClick={() => setSquadFilter(pos)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                  squadFilter === pos
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {getLocalizedPosition(pos, language)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="group bg-neutral-900 border border-neutral-800 hover:border-red-600/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg relative overflow-hidden"
            >
              {player.isCaptain && (
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xxs font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                  {t.captain}
                </span>
              )}

              <div>
                <span className="font-sports font-black text-3xl text-neutral-600 group-hover:text-red-500 transition-colors">
                  #{player.number}
                </span>
                <h4 className="font-bold text-lg text-white group-hover:text-red-400 transition-colors mt-1">
                  {getLocalizedPersonName(player.name, language)}
                </h4>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-xxs font-bold uppercase bg-neutral-950 text-emerald-400 border border-neutral-800">
                  {getLocalizedPosition(player.position, language)}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>{player.appearances} {t.appearances}</span>
                <span>{player.goals} {t.goals}</span>
                <span>{player.birthYear}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Management & Staff */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-neutral-800">
          <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
            {t.managementTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {language === 'am'
              ? 'ክለቡን በብቃት የሚመሩ አስተዳዳሪዎች እና የቴክኒክ አሰልጣኞች።'
              : 'Dedicated leadership and technical experts guiding Halaba City FC.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-4 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-400 font-sports font-black text-lg shrink-0">
                {member.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base text-white truncate">
                  {getLocalizedPersonName(member.name, language)}
                </h4>
                <p className="text-xs text-amber-400 font-medium mt-0.5">
                  {getLocalizedRole(member.role, language)}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-xxs font-semibold uppercase bg-neutral-950 text-neutral-400 border border-neutral-800">
                  {getLocalizedDepartment(member.department, language)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
