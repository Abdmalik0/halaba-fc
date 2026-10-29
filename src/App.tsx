import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { ClubProvider, useClub } from './context/ClubContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileFixedFooter } from './components/MobileFixedFooter';
import { HomePage } from './pages/HomePage';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { usePWAInstall } from './hooks/usePWAInstall';
import { OfflineInterruptedOverlay } from './components/pwa/OfflineInterruptedOverlay';
import { AppStartupLoader } from './components/AppStartupLoader';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageFallbackLoader } from './components/PageFallbackLoader';

// Code-split heavy routes to keep initial bundle tiny (<250KB) on low-RAM phones & 3G networks
const FixturesPage = lazy(() => import('./pages/FixturesPage').then((m) => ({ default: m.FixturesPage })));
const StandingsPage = lazy(() => import('./pages/StandingsPage').then((m) => ({ default: m.StandingsPage })));
const NewsPage = lazy(() => import('./pages/NewsPage').then((m) => ({ default: m.NewsPage })));
const MembershipPage = lazy(() => import('./pages/MembershipPage').then((m) => ({ default: m.MembershipPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then((m) => ({ default: m.AdminPage })));
const ShopPage = lazy(() => import('./pages/ShopPage').then((m) => ({ default: m.ShopPage })));

// Code-split modals so they only load when requested
const MatchDetailsModal = lazy(() => import('./components/MatchDetailsModal').then((m) => ({ default: m.MatchDetailsModal })));
const ArticleModal = lazy(() => import('./components/ArticleModal').then((m) => ({ default: m.ArticleModal })));
const ClubDossierModal = lazy(() => import('./components/ClubDossierModal').then((m) => ({ default: m.ClubDossierModal })));
const DonationModal = lazy(() => import('./components/DonationModal').then((m) => ({ default: m.DonationModal })));
const JerseyCheckoutModal = lazy(() => import('./components/JerseyCheckoutModal').then((m) => ({ default: m.JerseyCheckoutModal })));
const AppStoreInstallCard = lazy(() => import('./components/pwa/AppStoreInstallCard').then((m) => ({ default: m.AppStoreInstallCard })));

const MainApp: React.FC = () => {
  const { currentPage, matches, news, isDossierOpen, closeDossier } = useClub();
  const { isInstalled, isInstallModalOpen, openInstallModal, closeInstallModal } = usePWAInstall();

  // Modals state
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Free Over-The-Air Update: Confirm update stability upon successful mount to prevent rollbacks
  useEffect(() => {
    const confirmAppReady = async () => {
      try {
        await CapacitorUpdater.notifyAppReady();
        console.log('[CapacitorUpdater] notifyAppReady() confirmed update stability');
      } catch (err) {
        // Gracefully ignored in standard web/dev environments where native plugin is not active
        console.debug('[CapacitorUpdater] notifyAppReady note:', err);
      }
    };
    confirmAppReady();
  }, []);

  const activeMatch = selectedMatchId ? matches.find((m) => m.id === selectedMatchId) || null : null;
  const activeArticle = selectedArticleId ? news.find((n) => n.id === selectedArticleId) || null : null;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white font-sans overscroll-y-none">
      {/* App Opening Splash Screen with loading icon and translucent backdrop */}
      <AppStartupLoader minDurationMs={1200} />

      {/* Top Navigation */}
      <Navbar onOpenInstallModal={openInstallModal} isInstalled={isInstalled} />

      {/* Floating Live Goal & Standings Notifications */}
      <LiveNotificationToast />

      {/* Graceful Offline Interruption Layer */}
      <OfflineInterruptedOverlay />

      {/* Main Page Body with Suspense Fallback */}
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden pb-28 sm:pb-0">
        <Suspense fallback={<PageFallbackLoader />}>
          {currentPage === 'home' && (
            <HomePage
              onOpenMatchModal={(id) => setSelectedMatchId(id)}
              onOpenArticleModal={(id) => setSelectedArticleId(id)}
            />
          )}
          {currentPage === 'fixtures' && (
            <FixturesPage onOpenMatchModal={(id) => setSelectedMatchId(id)} />
          )}
          {currentPage === 'standings' && <StandingsPage />}
          {currentPage === 'news' && (
            <NewsPage onOpenArticleModal={(id) => setSelectedArticleId(id)} />
          )}
          {currentPage === 'membership' && <MembershipPage />}
          {currentPage === 'shop' && <ShopPage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'admin' && <AdminPage />}
        </Suspense>
      </main>

      {/* Mobile Fixed Footer */}
      <MobileFixedFooter />

      {/* Footer */}
      <Footer />

      {/* Suspense-guarded Modals */}
      <Suspense fallback={null}>
        {/* App Store Style Download Modal */}
        {isInstallModalOpen && !isInstalled && (
          <AppStoreInstallCard mode="modal" onClose={closeInstallModal} />
        )}

        {/* Dynamic Modals */}
        {activeMatch && (
          <MatchDetailsModal
            match={activeMatch}
            onClose={() => setSelectedMatchId(null)}
          />
        )}
        {activeArticle && (
          <ArticleModal
            article={activeArticle}
            onClose={() => setSelectedArticleId(null)}
          />
        )}
        {isDossierOpen && (
          <ClubDossierModal
            isOpen={isDossierOpen}
            onClose={closeDossier}
          />
        )}
        <DonationModal />
        <JerseyCheckoutModal />
      </Suspense>
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <ClubProvider>
        <MainApp />
      </ClubProvider>
    </ErrorBoundary>
  );
}
