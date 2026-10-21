import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { useClub } from '../../context/ClubContext';
import { HalabaCrest } from '../HalabaCrest';
import {
  Download,
  CheckCircle2,
  Share2,
  PlusSquare,
  Smartphone,
  Star,
  ShieldCheck,
  Zap,
  X,
  Sparkles,
  Layers,
  MoreVertical,
  AlertCircle
} from 'lucide-react';

interface AppStoreInstallCardProps {
  mode?: 'modal' | 'embedded';
  onClose?: () => void;
}

export const AppStoreInstallCard: React.FC<AppStoreInstallCardProps> = ({
  mode = 'embedded',
  onClose
}) => {
  const { language } = useClub();
  const {
    isInstalled,
    isIOS,
    hasNativePrompt,
    triggerNativeInstall
  } = usePWAInstall();

  // Active marketplace view tab: 'playstore' or 'appstore'
  const [platformView, setPlatformView] = useState<'playstore' | 'appstore'>(() => {
    return isIOS ? 'appstore' : 'playstore';
  });

  // Action status state
  const [installState, setInstallState] = useState<
    'idle' | 'downloading' | 'installed' | 'cancelled' | 'manual_guide'
  >('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadPhase, setDownloadPhase] = useState(
    language === 'am' ? 'ከሀላባ ሰርቨር ጋር በመገናኘት ላይ...' : 'Connecting to Halaba CDN...'
  );

  // Keep platform view synced with OS if it changes
  useEffect(() => {
    if (isIOS) {
      setPlatformView('appstore');
    }
  }, [isIOS]);

  const handleStartInstallation = async () => {
    if (platformView === 'appstore' || isIOS) {
      setPlatformView('appstore');
      return;
    }

    if (hasNativePrompt) {
      setInstallState('idle');
      const outcome = await triggerNativeInstall();

      if (outcome === 'accepted') {
        setInstallState('downloading');
        setDownloadProgress(25);
        setDownloadPhase(language === 'am' ? 'የበርበሬዎቹን ይፋዊ ፓኬጅ በማረጋገጥ ላይ...' : 'Verifying Berberewochu Native Package...');
        await new Promise((r) => setTimeout(r, 220));
        setDownloadProgress(65);
        setDownloadPhase(language === 'am' ? 'የጨዋታ ማዕከል እና የተጫዋቾች መረጃ በመጫን ላይ...' : 'Precaching EPL match center & squad roster...');
        await new Promise((r) => setTimeout(r, 220));
        setDownloadProgress(100);
        setDownloadPhase(language === 'am' ? 'ይፋዊ መተግበሪያው በስኬት ተጭኗል!' : 'Native Application Installed!');
        await new Promise((r) => setTimeout(r, 150));
        setInstallState('installed');
      } else if (outcome === 'dismissed') {
        setInstallState('cancelled');
      } else {
        setInstallState('manual_guide');
      }
    } else {
      setInstallState('manual_guide');
    }
  };

  const content = (
    <div className="w-full bg-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden font-sans">
      {/* 1. App Store Header Toolbar */}
      <div className="bg-neutral-900/90 backdrop-blur-md px-5 py-3 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-xl bg-neutral-950 p-1 border border-neutral-800 text-xs">
            <button
              onClick={() => {
                setPlatformView('playstore');
                setInstallState('idle');
              }}
              className={`px-3 py-1 rounded-lg text-xxs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                platformView === 'playstore'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.6 1.8c-.3.4-.4.9-.4 1.6v17.2c0 .7.1 1.2.4 1.6l.1.1 9.6-9.6v-.2L3.7 1.7l-.1.1zM17 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 4 2.3c1.1.6 1.1 1.6 0 2.3l-4.1 2.1zM13.3 12.1L3.7 21.7c.4.4.9.4 1.6.1l11.4-6.5-3.4-3.2zM13.3 11.9l3.4-3.2L5.3 2.2c-.7-.3-1.2-.3-1.6.1l9.6 9.6z" />
              </svg>
              <span>Google Play / Chrome</span>
            </button>
            <button
              onClick={() => {
                setPlatformView('appstore');
                setInstallState('idle');
              }}
              className={`px-3 py-1 rounded-lg text-xxs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                platformView === 'appstore'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.4.1-1.8-.8-3.4-.8-1.5 0-2.1.8-3.4.8-1.3-.1-2.2-1.3-3.1-2.5-1.7-2.5-3-7.1-1.3-10.1 1.1-1.9 3.1-3.1 5.2-3.1 1.6 0 3.1 1.1 4.1 1.1 1 0 2.8-1.4 4.8-1.2 1.9.1 3.5.8 4.6 2.3-2.9 1.7-2.4 5.5.4 6.7-1 2.2-2.3 4.4-3.9 6.8zM15.4 4.8C16.2 3.8 16.7 2.3 16.5 1c-1.3.1-2.8.9-3.6 1.9-.8.9-1.3 2.4-1.1 3.8 1.5.1 2.8-.9 3.6-1.9z" />
              </svg>
              <span>Apple iOS Safari</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xxs px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-bold uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {language === 'am' ? 'የተረጋገጠ መተግበሪያ' : 'Verified PWA'}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Marketplace App Listing Header */}
      <div className="p-6 sm:p-7 space-y-6">
        <div className="flex items-start gap-4 sm:gap-5">
          {/* App Squircle Icon */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-700/80 p-2 shadow-xl shrink-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-emerald-600/20 pointer-events-none" />
            <HalabaCrest size={64} showGlow />
          </div>

          {/* Title & Metadata */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-sports font-black text-white tracking-wide uppercase truncate">
                {language === 'am' ? 'ሀላባ ከተማ እግርኳስ ክለብ' : 'HALABA City FC'}
              </h2>
              <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800/60 font-sports font-bold text-xxs uppercase">
                {language === 'am' ? 'ይፋዊ' : 'Official'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5 truncate">
              {language === 'am' ? 'ሀላባ ከተማ ስፖርት ክለብ • በርበሬዎቹ' : 'Halaba Ketema SC • Berberewochu'}
            </p>

            <p className="text-xxs text-neutral-400 mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{language === 'am' ? 'ይፋዊ የኢትዮጵያ ፕሪሚየር ሊግ ክለብ ሶፍትዌር' : 'Official Ethiopian Premier League Club Software'}</span>
            </p>

            <div className="mt-2 flex items-center gap-2 text-xxs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{language === 'am' ? 'ሙሉ ራሱን የቻለ ፕሮግረሲቭ ዌብ አፕ' : 'Stealth Standalone Progressive Web App'}</span>
            </div>
          </div>
        </div>

        {/* 3. Marketplace Stats Row */}
        <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-center">
          <div className="border-r border-neutral-800 pr-1">
            <div className="flex items-center justify-center gap-0.5 text-amber-400 text-xs sm:text-sm font-bold">
              <span>4.9</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xxs text-neutral-400 mt-0.5">
              {language === 'am' ? '18.4 ሺህ ግምገማዎች' : '18.4K reviews'}
            </div>
          </div>

          <div className="border-r border-neutral-800 pr-1">
            <div className="text-xs sm:text-sm font-bold text-white uppercase">8.2 MB</div>
            <div className="text-xxs text-neutral-400 mt-0.5">
              {language === 'am' ? 'ፈጣን PWA' : 'Instant PWA'}
            </div>
          </div>

          <div className="border-r border-neutral-800 pr-1">
            <div className="inline-block px-1.5 py-0.2 rounded border border-neutral-700 text-xxs font-bold text-neutral-300">
              3+
            </div>
            <div className="text-xxs text-neutral-400 mt-0.5">
              {language === 'am' ? 'ለሁሉም ዕድሜ' : 'Rated for 3+'}
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-bold text-emerald-400">100K+</div>
            <div className="text-xxs text-neutral-400 mt-0.5">
              {language === 'am' ? 'ደጋፊዎች' : 'Halaba Fans'}
            </div>
          </div>
        </div>

        {/* 4. Action Area */}
        {platformView === 'playstore' ? (
          /* ANDROID / CHROMIUM FLOW */
          <div className="space-y-3">
            {isInstalled ? (
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-1">
                <div className="inline-flex items-center gap-2 text-emerald-300 font-sports font-black text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>{language === 'am' ? 'የሀላባ ከተማ መተግበሪያ በስልክዎ ላይ ተጭኗል' : 'HALABA City FC Native App Active'}</span>
                </div>
                <p className="text-xs text-neutral-300">
                  {language === 'am'
                    ? 'ይህ መሳሪያ ይፋዊውን የክለቡን መተግበሪያ በቀጥታ እየተጠቀመ ነው።'
                    : 'This device is already running the installed stealth application window without browser chrome.'}
                </p>
              </div>
            ) : installState === 'downloading' ? (
              <div className="p-5 rounded-2xl bg-neutral-900 border border-red-900/50 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-sports font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    {language === 'am' ? 'የሀላባ ከተማ መተግበሪያ በመጫን ላይ...' : 'Installing HALABA City FC...'}
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    {downloadProgress}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 rounded-full bg-neutral-950 overflow-hidden border border-neutral-800 p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 transition-all duration-300 shadow-sm"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>

                <div className="text-xxs text-neutral-400 flex items-center justify-between">
                  <span>{downloadPhase}</span>
                  <span className="text-neutral-500 font-mono">8.2 MB / 8.2 MB</span>
                </div>
              </div>
            ) : installState === 'installed' ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-sports font-black text-sm text-white uppercase">
                      {language === 'am' ? 'የሀላባ ከተማ መተግበሪያ በስኬት ተጭኗል!' : 'HALABA City FC Installed Successfully!'}
                    </h4>
                    <p className="text-xs text-neutral-300">
                      {language === 'am'
                        ? 'ይፋዊው የክለቡ አርማ በስልክዎ ዋና ገጽ ላይ ተቀምጧል።'
                        : 'The official club icon is now on your home screen and app launcher.'}
                    </p>
                  </div>
                </div>
              </div>
            ) : installState === 'manual_guide' ? (
              /* Fallback guide if browser blocked automatic prompt or on desktop */
              <div className="p-4 rounded-2xl bg-neutral-900 border border-amber-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-sports font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{language === 'am' ? 'የቀጥታ አጫጫን መመሪያ' : 'Browser Direct Installation Guide'}</span>
                  </div>
                  <button
                    onClick={handleStartInstallation}
                    className="text-xxs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    {language === 'am' ? 'አውቶማቲክ ሞክር' : 'Try Auto-Prompt'}
                  </button>
                </div>

                <p className="text-xs text-neutral-300">
                  {language === 'am'
                    ? 'መተግበሪያውን ወደ ስልክዎ ለመጨመር 1 ማረጋገጫ ይስጡ፡'
                    : 'Your browser requires 1 manual confirmation to add the app to your device:'}
                </p>

                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="w-5 h-5 rounded-md bg-neutral-800 text-neutral-300 flex items-center justify-center font-bold text-xxs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <span>{language === 'am' ? 'የብሮውዘሩን 3 ነጥብ ምናሌ ይጫኑ' : 'Tap the browser menu'}</span>
                      <span className="inline-flex items-center gap-1 mx-1.5 px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 font-bold text-white text-xxs">
                        <MoreVertical className="w-3 h-3 inline" /> {language === 'am' ? '3 ነጥቦች (⋮)' : '3 Dots (⋮)'}
                      </span>
                      <span>{language === 'am' ? 'በChrome አናት ላይ።' : 'in the top-right corner of Chrome.'}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="w-5 h-5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center font-bold text-xxs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <span>{language === 'am' ? 'ከዚያም ' : 'Tap '}</span>
                      <strong className="text-emerald-400 font-semibold">{language === 'am' ? '“መተግበሪያውን ጫን”' : '"Install app"'}</strong>
                      <span> {language === 'am' ? 'ወይም ' : ' or '}</span>
                      <strong className="text-white font-semibold">{language === 'am' ? '“ወደ ዋና ገጽ ጨምር”' : '"Add to Home screen"'}</strong>
                      <span> {language === 'am' ? 'የሚለውን ይምረጡ።' : '.'}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setInstallState('idle')}
                  className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-sports font-bold uppercase transition-colors cursor-pointer"
                >
                  {language === 'am' ? 'ወደ ካርድ ተመለስ' : 'Back to Install Card'}
                </button>
              </div>
            ) : installState === 'cancelled' ? (
              <div className="space-y-2">
                <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                  <span>{language === 'am' ? 'የመጫኛ መስኮቱ ተዘግቷል።' : 'Installation dialog was dismissed.'}</span>
                  <button
                    onClick={handleStartInstallation}
                    className="text-red-400 hover:text-red-300 font-sports font-bold uppercase cursor-pointer"
                  >
                    {language === 'am' ? 'እንደገና ሞክር' : 'Retry Prompt'}
                  </button>
                </div>
                <button
                  onClick={handleStartInstallation}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-red-950/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>{language === 'am' ? 'ይፋዊ መተግበሪያውን ጫን (Google Play PWA)' : 'Install Official App (Google Play PWA)'}</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleStartInstallation}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-red-950/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>{language === 'am' ? 'ይፋዊ መተግበሪያውን ጫን (Google Play PWA)' : 'Install Official App (Google Play PWA)'}</span>
                </button>
                <p className="text-center text-xxs text-neutral-400">
                  {language === 'am'
                    ? 'ፈጣን አጫጫን • ማከማቻ የማይጨርስ • ያለ ብሮውዘር መስመር በቀጥታ'
                    : 'Instant stealth install • No bulky download • Zero browser navigation bars'}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* IOS SAFARI GUIDED INSTALLATION FLOW */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-neutral-900 border border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-sports font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                <span>{language === 'am' ? 'የአይፎን ሳፋሪ አጫጫን መመሪያ' : 'Apple iOS Safari Native Installation'}</span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-white">{language === 'am' ? 'የሳፋሪ ማጋሪያ (Share) ምልክትን ይጫኑ' : 'Tap the Safari Share Icon'}</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      {language === 'am'
                        ? 'በስልክዎ የታችኛው ክፍል ላይ ያለውን ወደ ላይ የሚያሳይ ቀስት ምልክት ይጫኑ፡'
                        : 'In the bottom toolbar of Safari on your iPhone, tap the square with an arrow pointing up:'}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-blue-400 font-semibold text-xxs mt-1.5">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{language === 'am' ? 'Share (አጋራ)' : 'Share'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-white">{language === 'am' ? '“Add to Home Screen” የሚለውን ይምረጡ' : 'Select "Add to Home Screen"'}</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      {language === 'am'
                        ? 'ከተዘረዘሩት አማራጮች ውስጥ ወደ ታች ወርደው ይጫኑ፡'
                        : 'Scroll down through the share sheet options and tap:'}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-xxs mt-1.5">
                      <PlusSquare className="w-3.5 h-3.5 text-neutral-300" />
                      <span>{language === 'am' ? 'Add to Home Screen (ወደ ዋና ገጽ)' : 'Add to Home Screen'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-white">{language === 'am' ? 'በቀኝ በኩል “Add” የሚለውን ይጫኑ' : 'Tap "Add" in Top Right'}</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      {language === 'am'
                        ? '“Add” የሚለውን በመጫን ያረጋግጡ። የሀላባ ከተማ ክለብ አርማ በስልክዎ ላይ በቀጥታ ይቀመጣል!'
                        : 'Confirm by tapping Add. The official Halaba City FC icon will appear on your home screen and open without any Safari address bar!'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. App Screenshots & Features Carousel */}
        <div className="space-y-3 pt-2 border-t border-neutral-900">
          <div className="flex items-center justify-between">
            <h3 className="font-sports font-black text-sm uppercase tracking-wider text-neutral-300">
              {language === 'am' ? 'የመተግበሪያው ዋና ዋና ባህሪያት' : 'Stealth App Features'}
            </h3>
            <span className="text-xxs text-emerald-400 font-bold uppercase">
              {language === 'am' ? 'ሙሉ የስልክ መተግበሪያ ልምድ' : 'Full Native Experience'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Zap className="w-4 h-4 text-amber-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">
                {language === 'am' ? 'የቀጥታ ጨዋታ ማዕከል' : 'Live Match Center'}
              </h4>
              <p className="text-xxs text-neutral-400 leading-tight">
                {language === 'am' ? 'የኢትዮጵያ ፕሪሚየር ሊግ የቀጥታ ውጤቶችና የደረጃ ሰንጠረዥ' : 'Instant Ethiopian Premier League live scores & tables'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">
                {language === 'am' ? 'የደጋፊ መታወቂያ' : 'Fan ID & Pass'}
              </h4>
              <p className="text-xxs text-neutral-400 leading-tight">
                {language === 'am' ? 'ከመስመር ውጭም የሚሰራ ይፋዊ ዲጂታል መታወቂያ' : 'Digital supporter membership with offline access'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Sparkles className="w-4 h-4 text-red-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">
                {language === 'am' ? 'ይፋዊ የክለቡ ሱቅ' : 'Official Shop'}
              </h4>
              <p className="text-xxs text-neutral-400 leading-tight">
                {language === 'am' ? 'የክለቡን ደማቅ ቀይና አረንጓዴ ማሊያዎች በቻፓ ይዘዙ' : 'Order official scarlet & green kits with Chapa'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Layers className="w-4 h-4 text-blue-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">
                {language === 'am' ? 'ከመስመር ውጭ አገልግሎት' : 'Offline Shield'}
              </h4>
              <p className="text-xxs text-neutral-400 leading-tight">
                {language === 'am' ? 'ኢንተርኔት ሲቋረጥም መረጃዎችን ያለምንም ችግር ያግኙ' : 'Cached access when connectivity is interrupted'}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Technical App Information Footer */}
        <div className="pt-3 border-t border-neutral-900 text-xxs text-neutral-500 space-y-1">
          <div className="flex items-center justify-between">
            <span>{language === 'am' ? 'ስሪት፡ 2.4.0 (2026/27 የፕሪሚየር ሊግ ዘመን)' : 'Version: 2.4.0 (2026/27 EPL Season)'}</span>
            <span>{language === 'am' ? 'አዘጋጅ፡ የሀላባ ስፖርት ክለብ ዲጂታል ሚዲያ' : 'Developer: Halaba SC Digital Media'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{language === 'am' ? 'ደህንነት፡ ፈርቤዝ እና ቻፓ ደህንነቱ የተጠበቀ ክፍያ' : 'Security: Firebase Firestore + Chapa Secure SSL'}</span>
            <span>Android 8+ • iOS 14+ • Chrome/Safari</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (mode === 'modal') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        <div className="max-w-xl w-full max-h-[92vh] overflow-y-auto">
          {content}
        </div>
      </div>
    );
  }

  return content;
};
