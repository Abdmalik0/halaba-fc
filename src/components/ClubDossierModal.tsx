import React from 'react';
import { HalabaCrest } from './HalabaCrest';
import { useClub } from '../context/ClubContext';
import {
  Trophy,
  History,
  MapPin,
  Calendar,
  Flame,
  Shield,
  Award,
  Users,
  CheckCircle2,
  X,
  Radio,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ClubDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClubDossierModal: React.FC<ClubDossierModalProps> = ({ isOpen, onClose }) => {
  const { clubInfo, matches, setCurrentPage } = useClub();

  if (!isOpen) return null;

  const premierLeagueMatches = matches.filter(
    (m) => m.competition === 'ETHIOPIAN_PREMIER_LEAGUE' || m.competitionName.includes('Premier')
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border-b border-neutral-800 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <HalabaCrest size={70} showGlow />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>Ethiopian Premier League Official Dossier</span>
              </div>
              <h2 className="font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider">
                HALABA City FC (ሀላባ ከተማ)
              </h2>
              <p className="text-amber-400 font-sports font-bold text-base sm:text-lg">
                Nickname: “Berberewochu” (በርበሬዎቹ) • Founded 1966 E.C.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-neutral-200">
          {/* Quick Facts Grid */}
          <div>
            <h3 className="font-sports font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              <span>Exact Club Information & Identity</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Official Name</span>
                <strong className="text-white text-base">HALABA City FC</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">Halaba Ketema (ሀላባ ከተማ እግር ኳስ ክለብ)</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Club Nickname</span>
                <strong className="text-amber-400 text-base">Berberewochu (በርበሬዎቹ)</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">"The Chilies" — Halaba is the Pepper Capital</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Year Founded</span>
                <strong className="text-white text-base">1966 E.C.</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">Embossed permanently on official crest</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Current League</span>
                <strong className="text-emerald-400 text-base">Ethiopian Premier League</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">Achieved promotion to Ethiopia's top flight</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Home Stadium</span>
                <strong className="text-white text-base">Halaba Stadium</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">Kulito Stadium (15,000 Seats) & Jimma/Hawassa</span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">Club Colors</span>
                <strong className="text-red-400 text-base">Scarlet Red, Emerald Green & Gold</strong>
                <span className="text-xs text-neutral-400 block mt-0.5">Symbolizing ripe Halaba peppers & stems</span>
              </div>
            </div>
          </div>

          {/* Promotion & Premier League Story */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-sports font-bold text-lg uppercase tracking-wider">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Historic Promotion to the Ethiopian Premier League</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Following outstanding seasons in the <strong>Ethiopian Higher League (Group B)</strong>, Halaba City FC
              earned historic promotion to the <strong>Ethiopian Premier League (EPL)</strong>. Known for one of the most
              passionate fanbases in southern and central Ethiopia, the Berberewochu bring an electric home atmosphere
              and intense attacking football to the nation's premier football competition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Premier League Debut:</strong> 1-1 draw vs Welwalo Adigrat University, earning their first-ever top flight point through an Amanuel Tesfaye goal.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Southern Derby:</strong> Fixtures against regional rivals Wolaita Dicha, Hawassa Kenema, and Sidama Coffee create huge regional football festivals.
                </span>
              </div>
            </div>
          </div>

          {/* Real Premier League Fixtures Calendar */}
          <div>
            <h3 className="font-sports font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Official Ethiopian Premier League Fixtures</span>
              </span>
              <span className="text-xs font-normal text-neutral-400 font-sans">
                Automatic real-time sync enabled
              </span>
            </h3>

            <div className="space-y-2.5">
              {premierLeagueMatches.map((m) => (
                <div
                  key={m.id}
                  className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded text-xxs font-bold uppercase ${
                        m.status === 'FINISHED'
                          ? 'bg-neutral-800 text-neutral-300'
                          : m.status === 'LIVE'
                          ? 'bg-red-950 text-red-400 border border-red-700 animate-pulse'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      }`}
                    >
                      {m.status === 'LIVE' ? `LIVE ${m.liveMinute}'` : m.status}
                    </span>

                    <div>
                      <div className="font-sports font-bold text-base text-white">
                        {m.homeTeam.name} vs {m.awayTeam.name}
                      </div>
                      <div className="text-xs text-neutral-400 flex items-center gap-2 mt-0.5">
                        <span>{m.date}</span>
                        <span>•</span>
                        <span>{m.kickoffTime} EAT</span>
                        <span>•</span>
                        <span className="truncate">{m.venue}</span>
                      </div>
                    </div>
                  </div>

                  {m.score ? (
                    <div className="font-sports font-black text-xl text-amber-400 bg-neutral-900 px-3 py-1 rounded-xl border border-neutral-800 self-start sm:self-center">
                      {m.score.home} - {m.score.away}
                    </div>
                  ) : (
                    <div className="text-xs text-emerald-400 font-bold bg-neutral-900 px-3 py-1 rounded-xl border border-neutral-800 self-start sm:self-center">
                      Upcoming EPL
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why "Berberewochu"? (The Peppers Story) */}
          <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-sports font-bold text-lg uppercase tracking-wider">
              <Flame className="w-5 h-5 text-red-500" />
              <span>Why the Nickname “Berberewochu” (በርበሬዎቹ)?</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Halaba is celebrated across Ethiopia and East Africa as the capital of chili peppers (Berbere). Red peppers are
              the lifeblood, cultural heritage, and economy of the Halaba community. The football club adopted the nickname
              <strong>“Berberewochu” (በርበሬዎቹ)</strong> to embody the fiery passion, spice, intensity, and unbeatable resilience
              of both the local crop and the people on the pitch. This is why the official club crest prominently features
              red chili peppers alongside the sunburst and football.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-neutral-400">
            Source: Ethiopian Football Federation (EFF) & Ethiopian Premier League Records
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                setCurrentPage('fixtures');
              }}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-sports font-bold text-xs uppercase tracking-wider transition-colors"
            >
              View Match Calendar
            </button>
            <button
              onClick={() => {
                onClose();
                setCurrentPage('standings');
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Open League Standings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
