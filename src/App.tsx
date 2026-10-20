import React, { useState } from 'react';
import { ClubProvider, useClub } from './context/ClubContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileFixedFooter } from './components/MobileFixedFooter';
import { HomePage } from './pages/HomePage';
import { FixturesPage } from './pages/FixturesPage';
import { StandingsPage } from './pages/StandingsPage';
import { NewsPage } from './pages/NewsPage';
import { MembershipPage } from './pages/MembershipPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { ShopPage } from './pages/ShopPage';
import { MatchDetailsModal } from './components/MatchDetailsModal';
import { ArticleModal } from './components/ArticleModal';
import { ClubDossierModal } from './components/ClubDossierModal';
import { LiveNotificationToast } from './components/LiveNotificationToast';
import { DonationModal } from './components/DonationModal';
import { JerseyCheckoutModal } from './components/JerseyCheckoutModal';
import { usePWAInstall } from './hooks/usePWAInstall';
import { AppStoreInstallCard } from './components/pwa/AppStoreInstallCard';
import { OfflineInterruptedOverlay } from './components/pwa/OfflineInterruptedOverlay';

const MainApp: React.FC = () => {
  const { currentPage, matches, news, isDossierOpen, closeDossier } = useClub();
  const { isInstalled, isInstallModalOpen, openInstallModal, closeInstallModal } = usePWAInstall();

  // Modals state
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeMatch = selectedMatchId ? matches.find((m) => m.id === selectedMatchId) || null : null;
  const activeArticle = selectedArticleId ? news.find((n) => n.id === selectedArticleId) || null : null;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white font-sans overscroll-y-none">
      {/* Top Navigation */}
      <Navbar onOpenInstallModal={openInstallModal} isInstalled={isInstalled} />

      {/* Floating Live Goal & Standings Notifications */}
      <LiveNotificationToast />

      {/* Graceful Offline Interruption Layer */}
      <OfflineInterruptedOverlay />

      {/* Main Page Body */}
      <main className="flex-1 pb-20 sm:pb-0">
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
      </main>

      {/* Mobile Fixed Footer */}
      <MobileFixedFooter />

      {/* Footer */}
      <Footer />

      {/* App Store Style Download Modal */}
      {isInstallModalOpen && (
        <AppStoreInstallCard mode="modal" onClose={closeInstallModal} />
      )}

      {/* Modals */}
      <MatchDetailsModal
        match={activeMatch}
        onClose={() => setSelectedMatchId(null)}
      />
      <ArticleModal
        article={activeArticle}
        onClose={() => setSelectedArticleId(null)}
      />
      <ClubDossierModal
        isOpen={isDossierOpen}
        onClose={closeDossier}
      />
      <DonationModal />
      <JerseyCheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <ClubProvider>
      <MainApp />
    </ClubProvider>
  );
}
