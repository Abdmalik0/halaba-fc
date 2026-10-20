import React, { useState } from 'react';
import { useClub } from '../context/ClubContext';
import { HalabaCrest } from '../components/HalabaCrest';
import { EthiopianClubLogo } from '../components/EthiopianClubLogo';
import { Trophy, Filter, Info, ShieldCheck, Flame, TrendingUp } from 'lucide-react';

export const StandingsPage: React.FC = () => {
  const { t, standings } = useClub();
  const [competition, setCompetition] = useState('ETHIOPIAN_PREMIER_LEAGUE');

  const halabaStanding = standings.find((s) => s.isHalaba) || standings[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* 1. Header & Controls */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
              <Trophy className="w-4 h-4" />
              <span>Official Season 2026 / 2027 • Verified October 2026</span>
            </div>
            <h1 className="font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider">
              {t.standingsTitle}
            </h1>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">{t.standingsSubtitle}</p>
          </div>

          {/* Competition Selector */}
          <div className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800 self-start md:self-auto">
            <Filter className="w-4 h-4 text-neutral-400 ml-2" />
            <select
              value={competition}
              onChange={(e) => setCompetition(e.target.value)}
              className="bg-transparent text-neutral-200 text-xs sm:text-sm font-semibold rounded-lg px-2 py-1.5 focus:outline-none"
            >
              <option value="ETHIOPIAN_PREMIER_LEAGUE">Ethiopian Premier League (Top Tier) • Official</option>
              <option value="ETHIOPIAN_CUP">Ethiopian Cup 2026/27</option>
            </select>
          </div>
        </div>

        {/* Verified League Status Summary Card */}
        {halabaStanding && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-950/80 via-neutral-950 to-emerald-950/60 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HalabaCrest size={44} showGlow />
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/50 text-amber-300 font-sports font-bold text-xs uppercase tracking-wider">
                    Official League Status: 1st Place
                  </span>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider hidden sm:inline">
                    • Ethiopian Premier League (Top Tier)
                  </span>
                </div>
                <h3 className="font-sports font-black text-white text-lg sm:text-xl mt-0.5">
                  Halaba Ketema (በርበሬዎቹ) leads the Ethiopian Premier League
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 self-start md:self-auto bg-neutral-950/80 px-4 py-2 rounded-lg border border-neutral-800 text-xs font-mono">
              <div>
                <span className="text-neutral-400 block text-xxs uppercase">Points</span>
                <span className="text-amber-400 font-black text-base">{halabaStanding.points} Pts</span>
              </div>
              <div className="h-6 w-px bg-neutral-800" />
              <div>
                <span className="text-neutral-400 block text-xxs uppercase">Record</span>
                <span className="text-white font-bold">{halabaStanding.played} M ({halabaStanding.won}W - {halabaStanding.drawn}D - {halabaStanding.lost}L)</span>
              </div>
              <div className="h-6 w-px bg-neutral-800" />
              <div>
                <span className="text-neutral-400 block text-xxs uppercase">Goals (GD)</span>
                <span className="text-emerald-400 font-bold">{halabaStanding.goalsFor} GF / {halabaStanding.goalsAgainst} GA (+{halabaStanding.goalDifference})</span>
              </div>
            </div>
          </div>
        )}

        {/* Legend / Key */}
        <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-amber-500 shadow-sm shadow-amber-500/50" />
            <span className="text-neutral-300 font-medium">1st Place • Ethiopian Premier League Leaders (CAF Champions League Spot)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-emerald-500" />
            <span>2nd Place (CAF Confederation Cup Spot)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-600" />
            <span>Relegation Risk Zone (Positions 9-10)</span>
          </div>
        </div>
      </div>

      {/* Standings Table Card */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-neutral-950 border-b border-neutral-800 text-xs uppercase font-sports font-bold tracking-wider text-neutral-400">
                <th className="py-4 px-4 text-center w-12">{t.pos}</th>
                <th className="py-4 px-4">{t.club}</th>
                <th className="py-4 px-3 text-center">{t.played}</th>
                <th className="py-4 px-3 text-center">{t.won}</th>
                <th className="py-4 px-3 text-center">{t.drawn}</th>
                <th className="py-4 px-3 text-center">{t.lost}</th>
                <th className="py-4 px-3 text-center hidden md:table-cell">{t.gf}</th>
                <th className="py-4 px-3 text-center hidden md:table-cell">{t.ga}</th>
                <th className="py-4 px-3 text-center">{t.gd}</th>
                <th className="py-4 px-4 text-center font-black">{t.pts}</th>
                <th className="py-4 px-4 text-center hidden sm:table-cell">{t.form}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80">
              {standings.map((team) => {
                const isLeader = team.position === 1;
                const isConfed = team.position === 2;
                const isRelegation = team.position >= 9;

                return (
                  <tr
                    key={team.teamId}
                    className={`transition-colors ${
                      team.isHalaba
                        ? 'bg-gradient-to-r from-red-950/80 via-neutral-900 to-green-950/40 border-l-4 border-l-amber-500 font-bold'
                        : 'hover:bg-neutral-800/40'
                    }`}
                  >
                    {/* Position */}
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${
                          isLeader
                            ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-neutral-950 shadow-md shadow-amber-950 font-black'
                            : isConfed
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : isRelegation
                            ? 'bg-red-950/60 text-red-400 border border-red-900'
                            : 'text-neutral-400 bg-neutral-950/50'
                        }`}
                      >
                        {team.position}
                      </span>
                    </td>

                    {/* Club */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <EthiopianClubLogo teamId={team.teamId} teamName={team.teamName} size={34} />
                        <div>
                          <span
                            className={`font-sports text-base tracking-wide ${
                              team.isHalaba ? 'text-red-400 font-black text-lg' : 'text-neutral-200'
                            }`}
                          >
                            {team.teamName}
                          </span>
                          {team.isHalaba && (
                            <span className="block text-xxs uppercase tracking-wider text-emerald-400 font-sans">
                              Official Club
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Stats */}
                    <td className="py-4 px-3 text-center text-neutral-300">{team.played}</td>
                    <td className="py-4 px-3 text-center text-emerald-400 font-medium">
                      {team.won}
                    </td>
                    <td className="py-4 px-3 text-center text-neutral-400">{team.drawn}</td>
                    <td className="py-4 px-3 text-center text-red-400">{team.lost}</td>
                    <td className="py-4 px-3 text-center text-neutral-400 hidden md:table-cell">
                      {team.goalsFor}
                    </td>
                    <td className="py-4 px-3 text-center text-neutral-400 hidden md:table-cell">
                      {team.goalsAgainst}
                    </td>
                    <td className="py-4 px-3 text-center font-mono text-neutral-300">
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </td>

                    {/* Points */}
                    <td className="py-4 px-4 text-center">
                      <span className="font-sports font-black text-xl text-white bg-neutral-950 px-3 py-1 rounded-lg border border-neutral-800">
                        {team.points}
                      </span>
                    </td>

                    {/* Form (Last 5) */}
                    <td className="py-4 px-4 text-center hidden sm:table-cell">
                      <div className="flex items-center justify-center gap-1">
                        {team.form.map((res, i) => (
                          <span
                            key={i}
                            className={`w-5 h-5 rounded text-xxs font-bold flex items-center justify-center ${
                              res === 'W'
                                ? 'bg-emerald-600 text-white'
                                : res === 'D'
                                ? 'bg-amber-600 text-white'
                                : 'bg-neutral-700 text-neutral-300'
                            }`}
                          >
                            {res}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnote on rankings */}
        <div className="p-4 bg-neutral-950/80 border-t border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Rankings are updated following official match confirmation by the Ethiopian Football Federation (EFF).
          </span>
        </div>
      </div>
    </div>
  );
};
