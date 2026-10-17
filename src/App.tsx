import React, { useState } from 'react';
import { ClubProvider, useClub } from './context/ClubContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FixturesPage } from './pages/FixturesPage';
import { StandingsPage } from './pages/StandingsPage';
import { NewsPage } from './pages/NewsPage';
import { MembershipPage } from './pages/MembershipPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { MatchDetailsModal } from './components/MatchDetailsModal';
import { ArticleModal } from './components/ArticleModal';
import { ClubDossierModal } from './components/ClubDossierModal';
import { LiveSyncBar } from './components/LiveSyncBar';
import { LiveNotificationToast } from './components/LiveNotificationToast';

const MainApp: React.FC = () => {
  const { currentPage, matches, news, isDossierOpen, closeDossier } = useClub();

  // Modals state
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeMatch = selectedMatchId ? matches.find((m) => m.id === selectedMatchId) || null : null;
  const activeArticle = selectedArticleId ? news.find((n) => n.id === selectedArticleId) || null : null;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Real-time Match & Standings Auto-Update Bar */}
      <LiveSyncBar />

      {/* Floating Live Goal & Standings Notifications */}
      <LiveNotificationToast />

      {/* Main Page Body */}
      <main className="flex-1">
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
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </main>

      {/* Footer */}
      <Footer />

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
