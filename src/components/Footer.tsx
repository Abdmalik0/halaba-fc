import React from 'react';
import { useClub, PageRoute } from '../context/ClubContext';
import { HalabaCrest } from './HalabaCrest';
import { NetVibeLogo } from './NetVibeLogo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, setCurrentPage, clubInfo } = useClub();

  const handleNav = (p: PageRoute) => {
    setCurrentPage(p);
  };

  const address = language === 'am'
    ? 'ሀላባ ስታዲየም የስፖርት ኮምፕሌክስ፣ ዋና ጎዳና፣ ሀላባ ቁሊቶ፣ ኢትዮጵያ'
    : clubInfo.contact.address;

  const officeHours = language === 'am'
    ? 'ከሰኞ - አርብ፡ 2:30 ጥዋት - 11:30 ከሰዓት (በጨዋታ ቀናት፡ 1:00 ጥዋት - 1:00 ምሽት)'
    : clubInfo.contact.hours;

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      {/* Top colorful Ethiopian sports stripes */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-red-600" />
        <div className="w-1/3 bg-emerald-600" />
        <div className="w-1/3 bg-amber-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-neutral-800/80">
          {/* Col 1: Club Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <HalabaCrest size={56} showGlow />
              <div>
                <h3 className="font-sports font-black text-2xl tracking-wider text-white uppercase">
                  {language === 'am' ? 'ሀላባ ከተማ እግርኳስ ክለብ' : 'HALABA CITY FC'}
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  {clubInfo.nickname.am} • Berberewochu
                </p>
                <p className="text-xs text-amber-400 font-mono">
                  {language === 'am' ? 'በ1966 ዓ.ም ተመሰረተ' : 'Founded 1966'}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {t.footerAboutClub}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                {t.footerMotto}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('fixtures')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {t.navFixtures}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('standings')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {t.navStandings}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  {t.navNews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('membership')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  {t.navMembership}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                  {t.navContact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admin')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-neutral-400 text-xs mt-3 pt-2 border-t border-neutral-900"
                >
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  {t.navAdmin} {t.authorizedStaff}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Stadium & Contact */}
          <div className="space-y-3">
            <h4 className="font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              {t.footerOfficeStadium}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{clubInfo.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{clubInfo.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs">{officeHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Community & Socials */}
          <div className="space-y-3">
            <h4 className="font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              {t.socialMedia}
            </h4>
            <p className="text-xs text-neutral-400">
              {language === 'am'
                ? 'አዳዲስ ዜናዎችንና ቪዲዮዎችን ለማግኘት ይፋዊ የሀላባ ከተማ የዲጂታል ገጾችን ይቀላቀሉ።'
                : 'Join the official digital channels of Halaba City FC for breaking news and videos.'}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={clubInfo.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  {t.officialTelegram}
                </span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={clubInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 font-bold text-blue-500 flex items-center justify-center">f</span>
                  {t.facebookPage}
                </span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={clubInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 font-bold text-red-500 flex items-center justify-center">▶</span>
                  {t.youtubeHighlights}
                </span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Attribution by NetVibe Digital Solutions */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-neutral-900/90 via-[#071322]/80 to-neutral-900/90 border border-cyan-900/40 shadow-lg text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NetVibeLogo
            size="md"
            showText={true}
            language={language}
            className="flex-1"
          />
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-800/40">
              NetVibe Digital
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} HALABA City Football Club (ሀላባ ከተማ እግርኳስ ክለብ). {t.footerRights}</p>
          <p className="text-neutral-500">
            {t.halabaKulitoMotto}
          </p>
        </div>
      </div>
    </footer>
  );
};
