import React, { useState } from 'react';
import { useClub, PageRoute } from '../context/ClubContext';
import { HalabaCrest } from './HalabaCrest';
import { Language } from '../types';
import {
  Menu,
  X,
  Globe,
  Shield,
  Calendar,
  Trophy,
  Newspaper,
  UserPlus,
  ShoppingBag,
  Heart,
  Info,
  Phone,
  Lock,
  ChevronDown,
  Smartphone,
} from 'lucide-react';

interface NavbarProps {
  onOpenInstallModal?: () => void;
  isInstalled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInstallModal, isInstalled = false }) => {
  const { language, setLanguage, t, currentPage, setCurrentPage, isAdminLoggedIn, openDossier, openDonationModal } = useClub();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems: Array<{ id: PageRoute; label: string; icon: React.ReactNode }> = [
    { id: 'home', label: t.navHome, icon: <Shield className="w-4 h-4" /> },
    { id: 'fixtures', label: t.navFixtures, icon: <Calendar className="w-4 h-4" /> },
    { id: 'standings', label: t.navStandings, icon: <Trophy className="w-4 h-4" /> },
    { id: 'news', label: t.navNews, icon: <Newspaper className="w-4 h-4" /> },
    { id: 'shop', label: t.navShop, icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'membership', label: t.navMembership, icon: <UserPlus className="w-4 h-4" /> },
    { id: 'about', label: t.navAbout, icon: <Info className="w-4 h-4" /> },
    { id: 'contact', label: t.navContact, icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  const languageLabels: Record<Language, { label: string; sub: string }> = {
    en: { label: 'English', sub: 'EN' },
    am: { label: 'አማርኛ', sub: 'AM' },
    om: { label: 'Afaan Oromo', sub: 'OM' },
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 text-white shadow-xl">
      {/* Top micro bar for Ethiopian identity and quick info */}
      <div className="bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 text-xs px-4 py-1.5 border-b border-neutral-800/60 hidden sm:flex justify-between items-center text-neutral-300">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-semibold text-red-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t.heroNickname}
          </span>
          <span className="text-neutral-500">•</span>
          <span>{t.homeGroundValue}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-amber-400 font-medium">{t.est1966}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile App Download Trigger (Completely removed when app is already installed on mobile) */}
          {!isInstalled && onOpenInstallModal && (
            <button
              onClick={onOpenInstallModal}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full btn-secondary-amber text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              title="Download official Halaba City FC App (Android APK / iOS)"
            >
              <Smartphone className="w-3 h-3 text-amber-300" />
              <span>{language === 'am' ? 'መተግበሪያ አውርድ' : 'Get App'}</span>
            </button>
          )}

          <button
            onClick={openDossier}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 hover:bg-red-600/50 border border-red-500/50 text-red-200 text-xs font-bold transition-all shadow-sm active:scale-95"
            title="Exact Information about Halaba City FC in the Ethiopian Premier League"
          >
            <Trophy className="w-3 h-3 text-amber-300" />
            <span>{t.clubDossierBtn}</span>
          </button>

          <button
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs transition-colors ${
              currentPage === 'admin'
                ? 'bg-red-700 text-white font-medium'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Lock className="w-3 h-3 text-amber-400" />
            <span>{t.navAdmin}</span>
            {isAdminLoggedIn && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title={t.active} />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <HalabaCrest size={52} showGlow />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-red-400 transition-colors uppercase font-sports">
                HALABA CITY FC
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-400 flex items-center gap-1">
                <span>በርበሬዎቹ</span>
                <span className="text-neutral-400 font-normal">|</span>
                <span className="text-amber-400">{language === 'am' ? 'ይፋዊ ድረ-ገጽ' : 'Berberewochu'}</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                      : 'text-neutral-200 hover:text-white hover:bg-neutral-800/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language & Membership */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-sm font-medium text-neutral-200 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="uppercase font-bold text-xs">{language}</span>
                <span className="text-neutral-400 text-xs hidden md:inline">
                  {languageLabels[language].label}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 ml-0.5" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-900 rounded-lg shadow-2xl border border-neutral-700 py-1 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-xs text-neutral-400 uppercase font-bold tracking-wider border-b border-neutral-800">
                    {t.selectLanguage}
                  </div>
                  {(['en', 'am', 'om'] as Language[]).map((lng) => (
                    <button
                      key={lng}
                      onClick={() => handleLangChange(lng)}
                      className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors ${
                        language === lng
                          ? 'bg-red-600/20 text-red-400 font-bold border-l-4 border-red-500'
                          : 'text-neutral-200 hover:bg-neutral-800'
                      }`}
                    >
                      <span>{languageLabels[lng].label}</span>
                      <span className="text-xs uppercase text-neutral-400 font-mono">
                        {languageLabels[lng].sub}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate CTA Button */}
            <button
              onClick={openDonationModal}
              className="px-3.5 py-2 rounded-md btn-donate-emerald font-bold text-sm tracking-wide transition-all active:scale-95 flex items-center gap-1.5 font-sports uppercase"
            >
              <Heart className="w-3.5 h-3.5 fill-emerald-400" />
              <span>{t.navDonate}</span>
            </button>

            {/* Become a Member CTA */}
            <button
              onClick={() => handleNavClick('membership')}
              className="px-4 py-2 rounded-md btn-membership-join font-bold text-sm tracking-wide shadow-md shadow-red-950/60 hover:shadow-red-800/40 transition-all transform active:scale-95 flex items-center gap-1.5 font-sports uppercase"
            >
              <UserPlus className="w-4 h-4" />
              <span>{t.navJoinBtn}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Language Toggle on Mobile */}
            <button
              onClick={() => {
                const nextLang: Record<Language, Language> = { en: 'am', am: 'om', om: 'en' };
                setLanguage(nextLang[language]);
              }}
              className="px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-xs font-bold text-emerald-400 uppercase flex items-center gap-1"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              {t.selectLanguage}
            </span>
            <div className="flex gap-1.5">
              {(['en', 'am', 'om'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => handleLangChange(lng)}
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    language === lng
                      ? 'bg-red-600 text-white'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-neutral-200 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-neutral-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}

            {!isInstalled && onOpenInstallModal && (
              <button
                onClick={() => {
                  onOpenInstallModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors text-emerald-400 hover:bg-neutral-900 border border-emerald-900/40 bg-emerald-950/20"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>{language === 'am' ? 'የክለቡን መተግበሪያ አውርድ (APK / iOS)' : 'Download Club App (APK / iOS)'}</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('admin')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ${
                currentPage === 'admin'
                  ? 'bg-red-950 text-red-200 border border-red-800'
                  : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>{t.navAdmin}</span>
              {isAdminLoggedIn && (
                <span className="ml-auto text-xs text-emerald-400 font-normal">{t.active}</span>
              )}
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => handleNavClick('membership')}
              className="w-full py-3 px-4 rounded-lg btn-membership-join text-white font-bold text-center tracking-wide shadow-lg uppercase font-sports flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              <span>{t.navJoinBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
