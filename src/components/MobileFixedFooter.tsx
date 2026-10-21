import React from 'react';
import { useClub, PageRoute } from '../context/ClubContext';
import { Shield, Heart, UserPlus, Info, Phone } from 'lucide-react';

export const MobileFixedFooter: React.FC = () => {
  const { t, currentPage, setCurrentPage, openDonationModal } = useClub();

  const navButtons = [
    {
      id: 'home' as PageRoute,
      label: t.navHome || 'Home',
      icon: <Shield className="w-5 h-5" />,
      onClick: () => setCurrentPage('home'),
      isActive: currentPage === 'home',
    },
    {
      id: 'donate',
      label: t.navDonate || 'Donate',
      icon: <Heart className="w-5 h-5 text-emerald-400 fill-emerald-400/30" />,
      onClick: openDonationModal,
      isActive: false,
    },
    {
      id: 'membership' as PageRoute,
      label: t.navMembership || 'Membership',
      icon: <UserPlus className="w-5 h-5" />,
      onClick: () => setCurrentPage('membership'),
      isActive: currentPage === 'membership',
    },
    {
      id: 'about' as PageRoute,
      label: t.navAbout || 'About',
      icon: <Info className="w-5 h-5" />,
      onClick: () => setCurrentPage('about'),
      isActive: currentPage === 'about',
    },
    {
      id: 'contact' as PageRoute,
      label: t.navContact || 'Contact',
      icon: <Phone className="w-5 h-5" />,
      onClick: () => setCurrentPage('contact'),
      isActive: currentPage === 'contact',
    },
  ];

  if (currentPage === 'admin') return null;

  return (
    <nav 
      aria-label="Mobile Fixed Navigation" 
      className="fixed bottom-0 left-0 right-0 z-50 py-2 px-2 flex items-center justify-around sm:hidden shadow-2xl border-t"
      style={{
        backgroundColor: '#0a0a0a',
        borderColor: '#262626',
      }}
    >
      {navButtons.map((btn) => (
        <button
          key={btn.id}
          onClick={btn.onClick}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            btn.isActive
              ? 'scale-105 font-bold'
              : 'hover:text-white'
          }`}
          style={{
            color: btn.isActive ? '#ef4444' : '#a3a3a3',
          }}
        >
          <span style={{ color: btn.isActive ? '#ef4444' : btn.id === 'donate' ? '#10b981' : '#d4d4d4' }}>
            {btn.icon}
          </span>
          <span 
            className="text-xxs uppercase font-sports tracking-wider mt-1 truncate max-w-[64px]"
            style={{ color: btn.isActive ? '#ef4444' : '#d4d4d4' }}
          >
            {btn.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
