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

export const AboutPage: React.FC = () => {
  const { t, clubInfo, players, staff } = useClub();
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
              <span>Football Heritage Since 1966</span>
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
            <span>Founded: 1966 E.C. (Ethiopian Calendar)</span>
            <span className="text-amber-400 font-bold font-mono">Central Ethiopia</span>
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
              <strong className="text-neutral-200 block mb-1">Crest Symbolism:</strong>
              {t.crestSymbolism}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Official Colors: Scarlet Red, Emerald Green, Gold</span>
            <span className="text-emerald-400 font-bold">Pride of Halaba</span>
          </div>
        </div>
      </div>

      {/* 3. Mission, Vision, and Club Honors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">Our Mission</h3>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            To develop elite athletic talent in Halaba, champion fair play and sportsmanship, and compete at the highest level of the Ethiopian football pyramid while serving as an engine of youth empowerment.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">Our Vision</h3>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            To establish HALABA City FC as an elite, self-sustaining modern football institution with state-of-the-art training facilities and a continuous pathway from grassroots academy to national team representation.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/60 text-red-400 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-sports font-bold text-xl text-white uppercase">Honors & Milestones</h3>
          <ul className="space-y-1.5 text-xs text-neutral-300">
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>Regional Championship Winners</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>Ethiopian Higher League Contender</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>National Fair Play Award Finalist</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">★</span>
              <span>Over 6 Decades of Continuous Football</span>
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
                <span>Fortress of the Berberewochu</span>
              </div>
              <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
                {t.stadiumTitle}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.stadiumDesc}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">Capacity</span>
                  <span className="font-bold text-white text-base font-sports">
                    {clubInfo.stadium.capacity}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">Pitch Surface</span>
                  <span className="font-bold text-emerald-400 text-base font-sports">
                    {clubInfo.stadium.surface}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">Location</span>
                  <span className="font-bold text-white text-base font-sports">
                    {clubInfo.stadium.city}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block uppercase">Atmosphere</span>
                  <span className="font-bold text-red-400 text-base font-sports">
                    Electrifying
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              Matchday tickets are available through official club booths in Halaba Kulito.
            </div>
          </div>
        </div>
      </div>

      {/* 5. First Team Squad Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
          <div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
              {t.squadTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Official roster of players representing HALABA City FC for the 2025/2026 season.
            </p>
          </div>

          {/* Position Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800 self-start sm:self-auto">
            {['ALL', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'].map((pos) => (
              <button
                key={pos}
                onClick={() => setSquadFilter(pos)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ${
                  squadFilter === pos
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {pos === 'ALL' ? 'All Squad' : `${pos}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-red-600/50 rounded-2xl p-4 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="font-sports font-black text-3xl text-red-500 group-hover:text-red-400">
                    #{player.number}
                  </span>
                  {player.isCaptain && (
                    <span className="px-2 py-0.5 rounded text-xxs font-bold uppercase bg-amber-950 text-amber-400 border border-amber-800">
                      Captain
                    </span>
                  )}
                </div>

                <div className="py-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center mx-auto text-xl font-sports font-black text-neutral-300">
                    {player.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h4 className="mt-3 font-sports font-bold text-lg text-white group-hover:text-red-400 transition-colors uppercase">
                    {player.name}
                  </h4>
                  <span className="text-xs text-emerald-400 font-medium uppercase font-sports">
                    {player.position}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Apps: <strong className="text-white">{player.appearances}</strong></span>
                <span>Goals: <strong className="text-amber-400">{player.goals}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Club Leadership & Coaching Staff */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-neutral-800">
          <h2 className="font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
            {t.managementTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Executive leadership, technical directors, and sports science staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-sports font-bold text-neutral-300 shrink-0">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-sports font-bold text-lg text-white uppercase">
                  {member.name}
                </h4>
                <p className="text-xs text-amber-400 font-medium">{member.role}</p>
                <span className="text-xxs uppercase tracking-wider text-neutral-500 font-mono">
                  {member.department}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
