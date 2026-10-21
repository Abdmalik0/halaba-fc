import React from 'react';
import { HalabaCrest } from './HalabaCrest';
import { EthiopianClubLogo } from './EthiopianClubLogo';
import { useClub } from '../context/ClubContext';
import {
  Trophy,
  Shield,
  Award,
  CheckCircle2,
  X,
  Calendar,
} from 'lucide-react';
import {
  getLocalizedTeamName,
  getLocalizedVenue,
  getLocalizedRound,
  getLocalizedCompetition,
} from '../utils/localization';

interface ClubDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClubDossierModal: React.FC<ClubDossierModalProps> = ({ isOpen, onClose }) => {
  const { language, t, matches } = useClub();

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
                <span>{language === 'am' ? 'የኢትዮጵያ ፕሪሚየር ሊግ ይፋዊ የክለብ ሰነድ' : 'Ethiopian Premier League Official Dossier'}</span>
              </div>
              <h2 className="font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider">
                {language === 'am' ? 'ሀላባ ከተማ እግርኳስ ክለብ' : 'HALABA City FC (ሀላባ ከተማ)'}
              </h2>
              <p className="text-amber-400 font-sports font-bold text-base sm:text-lg">
                {language === 'am' ? 'ቅጽል ስም፡ “በርበሬዎቹ” • የተመሰረተበት ዓመት፡ 1966 ዓ.ም' : 'Nickname: “Berberewochu” (በርበሬዎቹ) • Founded 1966 E.C.'}
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
              <span>{language === 'am' ? 'ይፋዊ የክለቡ መረጃ እና ማንነት' : 'Exact Club Information & Identity'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'ይፋዊ ስም' : 'Official Name'}
                </span>
                <strong className="text-white text-base">
                  {language === 'am' ? 'ሀላባ ከተማ እግር ኳስ ክለብ' : 'HALABA City FC'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ' : 'Halaba Ketema (ሀላባ ከተማ እግር ኳስ ክለብ)'}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'የክለቡ ቅጽል ስም' : 'Club Nickname'}
                </span>
                <strong className="text-amber-400 text-base">
                  {language === 'am' ? 'በርበሬዎቹ' : 'Berberewochu (በርበሬዎቹ)'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'ሀላባ የደማቁ ቀይ በርበሬ መገኛ ከተማ ናት' : '"The Chilies" — Halaba is the Pepper Capital'}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'የተመሰረተበት ዓመት' : 'Year Founded'}
                </span>
                <strong className="text-white text-base">
                  {language === 'am' ? '1966 ዓ.ም' : '1966 E.C.'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'በይፋዊው አርማ ላይ በቋሚነት የተቀረጸ' : 'Embossed permanently on official crest'}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'የሚወዳደርበት ሊግ' : 'Current League'}
                </span>
                <strong className="text-emerald-400 text-base">
                  {language === 'am' ? 'የኢትዮጵያ ፕሪሚየር ሊግ' : 'Ethiopian Premier League'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'ወደ ሀገሪቱ ከፍተኛ ዲቪዚዮን ማደግ የቻለ' : "Achieved promotion to Ethiopia's top flight"}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'የሜዳ ስታዲየም' : 'Home Stadium'}
                </span>
                <strong className="text-white text-base">
                  {language === 'am' ? 'ሀላባ ስታዲየም' : 'Halaba Stadium'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'ቁሊቶ ስታዲየም (15,000 ተመልካች)' : 'Kulito Stadium (15,000 Seats)'}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 block mb-1">
                  {language === 'am' ? 'የክለቡ ቀለማት' : 'Club Colors'}
                </span>
                <strong className="text-red-400 text-base">
                  {language === 'am' ? 'ደማቅ ቀይ፣ አረንጓዴ እና ወርቃማ' : 'Scarlet Red, Emerald Green & Gold'}
                </strong>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  {language === 'am' ? 'የሀላባን የበሰለ በርበሬና አረንጓዴ ቅጠል ያመለክታል' : 'Symbolizing ripe Halaba peppers & stems'}
                </span>
              </div>
            </div>
          </div>

          {/* Promotion & Premier League Story */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-sports font-bold text-lg uppercase tracking-wider">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{language === 'am' ? 'ወደ ኢትዮጵያ ፕሪሚየር ሊግ ታሪካዊ እድገት' : 'Historic Promotion to the Ethiopian Premier League'}</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {language === 'am'
                ? 'በኢትዮጵያ ከፍተኛ ሊግ (ምድብ ለ) ባሳየው አስደናቂ አቋም፣ ሀላባ ከተማ እግር ኳስ ክለብ ታሪካዊውን ወደ ኢትዮጵያ ፕሪሚየር ሊግ የማደግ ውጤት አስመዝግቧል። በደቡብና በማዕከላዊ ኢትዮጵያ እጅግ ታማኝና ደማቅ ደጋፊዎች ያሉት በርበሬዎቹ፣ በሊጉ ላይ ጠንካራና ማራኪ የማጥቃት እግር ኳስ በማሳየት ላይ ይገኛል።'
                : 'Following outstanding seasons in the Ethiopian Higher League (Group B), Halaba City FC earned historic promotion to the Ethiopian Premier League (EPL). Known for one of the most passionate fanbases in southern and central Ethiopia, the Berberewochu bring an electric home atmosphere and intense attacking football to the nation\'s premier football competition.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'am'
                    ? 'የፕሪሚየር ሊግ የመጀመሪያ ጨዋታ፡ ከወልዋሎ ዓዲግራት ዩኒቨርሲቲ ጋር 1-1 አቻ በመለያየት የመጀመሪያውን የሊግ ነጥብ በአማኑኤል ተስፋዬ ግብ አስመዝግቧል።'
                    : 'Premier League Debut: 1-1 draw vs Welwalo Adigrat University, earning their first-ever top flight point through an Amanuel Tesfaye goal.'}
                </span>
              </div>
              <div className="flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {language === 'am'
                    ? 'የደቡብ ደርቢ፡ ከወላይታ ድቻ፣ ሀዋሳ ከነማ እና ሲዳማ ቡና ጋር የሚደረጉ ጨዋታዎች በታላቅ የደጋፊዎች ድባብና ደስታ ይታወሳሉ።'
                    : 'Southern Derby: Fixtures against regional rivals Wolaita Dicha, Hawassa Kenema, and Sidama Coffee create huge regional football festivals.'}
                </span>
              </div>
            </div>
          </div>

          {/* Real Premier League Fixtures Calendar */}
          <div>
            <h3 className="font-sports font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>{language === 'am' ? 'ይፋዊ የኢትዮጵያ ፕሪሚየር ሊግ ጨዋታዎች' : 'Official Ethiopian Premier League Fixtures'}</span>
              </span>
              <span className="text-xs font-normal text-neutral-400 font-sans">
                {language === 'am' ? 'ቀጥታ አውቶማቲክ ማመሳሰል ነቅቷል' : 'Automatic real-time sync enabled'}
              </span>
            </h3>

            <div className="space-y-2.5">
              {premierLeagueMatches.map((m) => {
                const homeName = getLocalizedTeamName(m.homeTeam?.id, m.homeTeam?.name, language);
                const awayName = getLocalizedTeamName(m.awayTeam?.id, m.awayTeam?.name, language);
                const venue = getLocalizedVenue(m.venue, language);
                const roundText = getLocalizedRound(m.round, language);

                return (
                  <div
                    key={m.id}
                    className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2.5 py-1 rounded text-xxs font-bold uppercase ${
                          m.status === 'FINISHED'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-neutral-800 text-neutral-300'
                        }`}
                      >
                        {m.status === 'FINISHED' ? t.fullTime : t.upcoming}
                      </span>
                      <div className="text-sm">
                        <strong className="text-white">
                          {homeName} {t.vs} {awayName}
                        </strong>
                        <span className="text-neutral-400 text-xs block">
                          {roundText} • {m.date} • {venue}
                        </span>
                      </div>
                    </div>

                    {m.score ? (
                      <div className="font-sports font-black text-lg text-emerald-400 bg-neutral-900 px-3 py-1 rounded-lg self-start sm:self-auto">
                        {m.score.home} - {m.score.away}
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-amber-400 bg-neutral-900 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                        {m.kickoffTime} {t.eatTimezone}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
