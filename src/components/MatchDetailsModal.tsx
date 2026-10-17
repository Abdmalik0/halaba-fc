import React from 'react';
import { Match } from '../types';
import { HalabaCrest } from './HalabaCrest';
import { useClub } from '../context/ClubContext';
import { X, Calendar, MapPin, User, Users, Shield, Clock } from 'lucide-react';

interface MatchDetailsModalProps {
  match: Match | null;
  onClose: () => void;
}

export const MatchDetailsModal: React.FC<MatchDetailsModalProps> = ({ match, onClose }) => {
  const { t } = useClub();

  if (!match) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="font-sports font-bold text-lg text-white uppercase tracking-wider">
              {match.competitionName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Scoreboard / Teams banner */}
          <div className="p-6 rounded-xl bg-gradient-to-b from-neutral-950 to-neutral-900/90 border border-neutral-800 flex items-center justify-between">
            {/* Home Team */}
            <div className="flex-1 flex flex-col items-center text-center">
              {match.homeTeam.isHalaba ? (
                <HalabaCrest size={64} showGlow />
              ) : (
                <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-xl text-neutral-200">
                  {match.homeTeam.name.substring(0, 3).toUpperCase()}
                </div>
              )}
              <h4 className="mt-3 font-sports font-bold text-base sm:text-lg text-white">
                {match.homeTeam.name}
              </h4>
              <span className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">
                Home
              </span>
            </div>

            {/* Match Center: Score / VS */}
            <div className="px-4 flex flex-col items-center">
              {match.status === 'FINISHED' && match.score ? (
                <div className="text-center">
                  <div className="font-sports font-black text-3xl sm:text-4xl text-white tracking-widest bg-neutral-800/80 px-4 py-1.5 rounded-lg border border-neutral-700">
                    {match.score.home} - {match.score.away}
                  </div>
                  {match.halftimeScore && (
                    <span className="text-xs text-neutral-400 block mt-1">
                      HT: {match.halftimeScore.home} - {match.halftimeScore.away}
                    </span>
                  )}
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Full Time
                  </span>
                </div>
              ) : match.status === 'LIVE' && match.score ? (
                <div className="text-center">
                  <div className="font-sports font-black text-3xl sm:text-4xl text-emerald-400 tracking-widest bg-neutral-800 px-4 py-1 rounded-lg">
                    {match.score.home} - {match.score.away}
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-red-950 text-red-400 border border-red-800 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    LIVE
                  </span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="font-sports font-black text-2xl sm:text-3xl text-neutral-400">
                    VS
                  </span>
                  <div className="mt-1 flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{match.kickoffTime}</span>
                  </div>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-neutral-800 text-neutral-300 border border-neutral-700">
                    Upcoming
                  </span>
                </div>
              )}
            </div>

            {/* Away Team */}
            <div className="flex-1 flex flex-col items-center text-center">
              {match.awayTeam.isHalaba ? (
                <HalabaCrest size={64} showGlow />
              ) : (
                <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center font-sports font-black text-xl text-neutral-200">
                  {match.awayTeam.name.substring(0, 3).toUpperCase()}
                </div>
              )}
              <h4 className="mt-3 font-sports font-bold text-base sm:text-lg text-white">
                {match.awayTeam.name}
              </h4>
              <span className="text-xs uppercase text-neutral-400 font-semibold tracking-wider">
                Away
              </span>
            </div>
          </div>

          {/* Match Metadata Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-neutral-400 block text-xs">{t.matchDate}</span>
                <span className="font-medium text-white">{match.date} • {match.kickoffTime} EAT</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-neutral-400 block text-xs">{t.matchVenue}</span>
                <span className="font-medium text-white">{match.venue}</span>
              </div>
            </div>

            {match.referee && (
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3">
                <User className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-xs">{t.referee}</span>
                  <span className="font-medium text-white">{match.referee}</span>
                </div>
              </div>
            )}

            {match.attendance && (
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-xs">{t.attendance}</span>
                  <span className="font-medium text-white">{match.attendance}</span>
                </div>
              </div>
            )}
          </div>

          {/* Goal Scorers (if finished/has scorers) */}
          {match.scorers && match.scorers.length > 0 && (
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <h5 className="font-sports font-bold text-sm uppercase text-neutral-300 tracking-wider mb-3">
                {t.goalsSummary}
              </h5>
              <div className="space-y-2">
                {match.scorers.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded bg-neutral-900 border border-neutral-800/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center text-xs font-bold">
                        ⚽
                      </span>
                      <span className="font-semibold text-white">{s.player}</span>
                      {s.isPenalty && (
                        <span className="text-xs text-amber-400 font-mono">(Pen)</span>
                      )}
                    </div>
                    <span className="font-mono text-neutral-400 font-bold">{s.minute}'</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary / Tactical Notes */}
          {match.summary && (
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <h5 className="font-sports font-bold text-sm uppercase text-neutral-300 tracking-wider mb-2">
                Match Report & Tactical Notes
              </h5>
              <p>{match.summary}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
