import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
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
  ArrowRight,
  X,
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface AppStoreInstallCardProps {
  mode?: 'modal' | 'embedded';
  onClose?: () => void;
}

export const AppStoreInstallCard: React.FC<AppStoreInstallCardProps> = ({
  mode = 'embedded',
  onClose
}) => {
  const {
    isInstalled,
    isIOS,
    isAndroid,
    hasNativePrompt,
    triggerNativeInstall
  } = usePWAInstall();

  // Active marketplace view tab: 'playstore' or 'appstore'
  const [platformView, setPlatformView] = useState<'playstore' | 'appstore'>(() => {
    return isIOS ? 'appstore' : 'playstore';
  });

  // Simulated Download Progress State
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadPhase, setDownloadPhase] = useState('Connecting to Halaba CDN...');
  const [isCompleted, setIsCompleted] = useState(false);

  // Keep platform view synced with OS if it changes
  useEffect(() => {
    if (isIOS) {
      setPlatformView('appstore');
    }
  }, [isIOS]);

  const handleStartInstallation = async () => {
    if (platformView === 'appstore') {
      // On iOS, no programmatic install prompt exists; scroll to or open guided sheet
      return;
    }

    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadPhase('Verifying Berberewochu Native Package...');

    const steps = [
      { progress: 18, text: 'Fetching Club Engine & Graphics Assets...' },
      { progress: 38, text: 'Precaching 2026/27 Ethiopian Premier League...' },
      { progress: 62, text: 'Initializing Offline Database & Jersey Store...' },
      { progress: 84, text: 'Configuring Native Standalone Shell...' },
      { progress: 100, text: 'Finalizing Installation...' },
    ];

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 380));
      setDownloadProgress(step.progress);
      setDownloadPhase(step.text);
    }

    // Now trigger real browser install prompt
    if (hasNativePrompt) {
      await triggerNativeInstall();
    }

    setIsDownloading(false);
    setIsCompleted(true);
  };

  const content = (
    <div className="w-full bg-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden font-sans">
      {/* 1. App Store Header Toolbar */}
      <div className="bg-neutral-900/90 backdrop-blur-md px-5 py-3 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-xl bg-neutral-950 p-1 border border-neutral-800 text-xs">
            <button
              onClick={() => setPlatformView('playstore')}
              className={`px-3 py-1 rounded-lg text-xxs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                platformView === 'playstore'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.6 1.8c-.3.4-.4.9-.4 1.6v17.2c0 .7.1 1.2.4 1.6l.1.1 9.6-9.6v-.2L3.7 1.7l-.1.1zM17 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 4 2.3c1.1.6 1.1 1.6 0 2.3l-4.1 2.1zM13.3 12.1L3.7 21.7c.4.4.9.4 1.6.1l11.4-6.5-3.4-3.2zM13.3 11.9l3.4-3.2L5.3 2.2c-.7-.3-1.2-.3-1.6.1l9.6 9.6z" />
              </svg>
              <span>Google Play</span>
            </button>
            <button
              onClick={() => setPlatformView('appstore')}
              className={`px-3 py-1 rounded-lg text-xxs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                platformView === 'appstore'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.4.1-1.8-.8-3.4-.8-1.5 0-2.1.8-3.4.8-1.3-.1-2.2-1.3-3.1-2.5-1.7-2.5-3-7.1-1.3-10.1 1.1-1.9 3.1-3.1 5.2-3.1 1.6 0 3.1 1.1 4.1 1.1 1 0 2.8-1.4 4.8-1.2 1.9.1 3.5.8 4.6 2.3-2.9 1.7-2.4 5.5.4 6.7-1 2.2-2.3 4.4-3.9 6.8zM15.4 4.8C16.2 3.8 16.7 2.3 16.5 1c-1.3.1-2.8.9-3.6 1.9-.8.9-1.3 2.4-1.1 3.8 1.5.1 2.8-.9 3.6-1.9z" />
              </svg>
              <span>Apple App Store</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xxs px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-bold uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified PWA
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
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
                HALABA City FC
              </h2>
              <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800/60 font-sports font-bold text-xxs uppercase">
                Official
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5 truncate">
              Halaba Ketema SC • Berberewochu
            </p>

            <p className="text-xxs text-neutral-400 mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Official Ethiopian Premier League Club Software</span>
            </p>

            <div className="mt-2 flex items-center gap-2 text-xxs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Stealth Standalone Progressive Web App</span>
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
            <div className="text-xxs text-neutral-400 mt-0.5">18.4K reviews</div>
          </div>

          <div className="border-r border-neutral-800 pr-1">
            <div className="text-xs sm:text-sm font-bold text-white uppercase">8.2 MB</div>
            <div className="text-xxs text-neutral-400 mt-0.5">Instant PWA</div>
          </div>

          <div className="border-r border-neutral-800 pr-1">
            <div className="inline-block px-1.5 py-0.2 rounded border border-neutral-700 text-xxs font-bold text-neutral-300">
              3+
            </div>
            <div className="text-xxs text-neutral-400 mt-0.5">Rated for 3+</div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-bold text-emerald-400">100K+</div>
            <div className="text-xxs text-neutral-400 mt-0.5">Halaba Fans</div>
          </div>
        </div>

        {/* 4. Action Area: Download Simulator or iOS Guide */}
        {platformView === 'playstore' ? (
          /* ANDROID / CHROMIUM DOWNLOAD FLOW */
          <div className="space-y-3">
            {isInstalled ? (
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-1">
                <div className="inline-flex items-center gap-2 text-emerald-300 font-sports font-black text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Halaba City FC Native App Installed</span>
                </div>
                <p className="text-xs text-neutral-300">
                  You are already running or have installed the standalone stealth app on this device.
                </p>
              </div>
            ) : isDownloading ? (
              <div className="p-5 rounded-2xl bg-neutral-900 border border-red-900/50 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-sports font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    Downloading HALABA City FC...
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    {downloadProgress}%
                  </span>
                </div>

                {/* Simulated Progress Bar */}
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
            ) : isCompleted ? (
              <div className="space-y-2">
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-sports font-black text-sm text-white uppercase">
                      Installation Triggered Successfully!
                    </h4>
                    <p className="text-xs text-neutral-300">
                      Tap "Install" or "Add to Home Screen" on your device prompt to launch the native full-screen app.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleStartInstallation}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-red-950/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Install Official App (Google Play PWA)</span>
                </button>
                <p className="text-center text-xxs text-neutral-400">
                  Instant stealth install • No bulky download • Zero browser navigation bars
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
                <span>Apple iOS Safari Native Installation</span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-white">Tap the Safari Share Icon</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      In the bottom toolbar of Safari on your iPhone, tap the square with an arrow pointing up:
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-blue-400 font-semibold text-xxs mt-1.5">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-white">Select "Add to Home Screen"</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      Scroll down through the share sheet options and tap:
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-xxs mt-1.5">
                      <PlusSquare className="w-3.5 h-3.5 text-neutral-300" />
                      <span>Add to Home Screen</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-white">Tap "Add" in Top Right</span>
                    <p className="text-xxs text-neutral-400 mt-0.5">
                      Confirm by tapping <strong className="text-white">Add</strong>. The official Halaba City FC icon will appear on your home screen and open without any Safari address bar!
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
              Stealth App Features
            </h3>
            <span className="text-xxs text-emerald-400 font-bold uppercase">
              Full Native Experience
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Zap className="w-4 h-4 text-amber-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">Live Match Center</h4>
              <p className="text-xxs text-neutral-400 leading-tight">Instant Ethiopian Premier League live scores & tables</p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">Fan ID & Pass</h4>
              <p className="text-xxs text-neutral-400 leading-tight">Digital supporter membership with offline access</p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Sparkles className="w-4 h-4 text-red-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">Official Shop</h4>
              <p className="text-xxs text-neutral-400 leading-tight">Order official scarlet & green kits with Chapa</p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-left space-y-1">
              <Layers className="w-4 h-4 text-blue-400" />
              <h4 className="font-sports font-bold text-xs text-white uppercase">Offline Shield</h4>
              <p className="text-xxs text-neutral-400 leading-tight">Cached access when connectivity is interrupted</p>
            </div>
          </div>
        </div>

        {/* 6. Technical App Information Footer */}
        <div className="pt-3 border-t border-neutral-900 text-xxs text-neutral-500 space-y-1">
          <div className="flex items-center justify-between">
            <span>Version: 2.4.0 (2026/27 EPL Season)</span>
            <span>Developer: Halaba SC Digital Media</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Security: Firebase Firestore + Chapa Secure SSL</span>
            <span>Compat: Android 8+ • iOS 14+ • Chrome/Safari</span>
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
