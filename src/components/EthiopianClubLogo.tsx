import React from 'react';
import { HalabaCrest } from './HalabaCrest';

interface EthiopianClubLogoProps {
  teamId?: string;
  teamName: string;
  size?: number;
}

export const EthiopianClubLogo: React.FC<EthiopianClubLogoProps> = ({ teamId = '', teamName, size = 36 }) => {
  if (teamId === 'halaba' || teamName.toLowerCase().includes('halaba')) {
    return <HalabaCrest size={size} />;
  }

  let bgGradient = 'from-neutral-800 via-neutral-900 to-neutral-950';
  let borderColor = 'border-neutral-700';
  let textColor = 'text-white';
  let abbreviation = teamName.substring(0, 3).toUpperCase();
  let iconSymbol = '🛡️';

  const lowerName = teamName.toLowerCase();
  if (lowerName.includes('fasil') || teamId === 'fasil') {
    bgGradient = 'from-amber-600 via-yellow-600 to-neutral-950';
    borderColor = 'border-amber-400';
    textColor = 'text-amber-100 font-black';
    abbreviation = 'FAS';
    iconSymbol = '👑';
  } else if (lowerName.includes('bahir dar') || teamId === 'bahirdar') {
    bgGradient = 'from-blue-700 via-sky-600 to-blue-950';
    borderColor = 'border-blue-400';
    textColor = 'text-white';
    abbreviation = 'BAH';
    iconSymbol = '🌊';
  } else if (lowerName.includes('coffee') || lowerName.includes('bunna') || teamId === 'bunna') {
    bgGradient = 'from-emerald-700 via-red-600 to-amber-600';
    borderColor = 'border-emerald-400';
    textColor = 'text-white';
    abbreviation = 'ETH';
    iconSymbol = '☕';
  } else if (lowerName.includes('saint george') || lowerName.includes('st. george') || teamId === 'saintgeorge') {
    bgGradient = 'from-yellow-400 via-amber-500 to-blue-900';
    borderColor = 'border-yellow-300';
    textColor = 'text-blue-950 font-black';
    abbreviation = 'GEO';
    iconSymbol = '🐎';
  } else if (lowerName.includes('welwalo') || teamId === 'welwalo') {
    bgGradient = 'from-emerald-800 via-teal-700 to-neutral-900';
    borderColor = 'border-emerald-400';
    textColor = 'text-white';
    abbreviation = 'WEL';
    iconSymbol = '🦁';
  } else if (lowerName.includes('wolaitta') || teamId === 'wolaitta') {
    bgGradient = 'from-orange-600 via-amber-600 to-neutral-900';
    borderColor = 'border-orange-400';
    textColor = 'text-white';
    abbreviation = 'WOL';
    iconSymbol = '🐆';
  } else if (lowerName.includes('hosaena') || teamId === 'hosaena') {
    bgGradient = 'from-blue-600 via-indigo-700 to-neutral-950';
    borderColor = 'border-blue-400';
    textColor = 'text-white';
    abbreviation = 'HOS';
    iconSymbol = '⭐';
  } else if (lowerName.includes('defence') || lowerName.includes('mekelakeya') || teamId === 'defence') {
    bgGradient = 'from-red-800 via-neutral-900 to-emerald-800';
    borderColor = 'border-red-500';
    textColor = 'text-white';
    abbreviation = 'DEF';
    iconSymbol = '🎖️';
  } else if (lowerName.includes('sidama') || teamId === 'sidama') {
    bgGradient = 'from-green-700 via-emerald-600 to-amber-600';
    borderColor = 'border-emerald-400';
    textColor = 'text-white';
    abbreviation = 'SID';
    iconSymbol = '☕';
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full bg-gradient-to-br ${bgGradient} border-2 ${borderColor} flex flex-col items-center justify-center shadow-md relative shrink-0 overflow-hidden group select-none`}
      title={teamName}
    >
      <span className="leading-none drop-shadow" style={{ fontSize: size * 0.38 }}>
        {iconSymbol}
      </span>
      <span className={`font-sports font-black leading-none mt-0.5 ${textColor}`} style={{ fontSize: size * 0.28 }}>
        {abbreviation}
      </span>
    </div>
  );
};
