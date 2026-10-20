import React from 'react';
import { HalabaCrest } from './HalabaCrest';

interface EthiopianClubLogoProps {
  teamId?: string;
  teamName: string;
  size?: number;
  badgeUrl?: string;
}

export const EthiopianClubLogo: React.FC<EthiopianClubLogoProps> = ({ teamId = '', teamName, size = 36, badgeUrl }) => {
  if (teamId === 'halaba' || teamName.toLowerCase().includes('halaba')) {
    return <HalabaCrest size={size} />;
  }

  const [imgError, setImgError] = React.useState(false);

  if (badgeUrl && !imgError) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shrink-0 shadow-md overflow-hidden bg-neutral-950"
        title={teamName}
      >
        <img
          src={badgeUrl}
          alt={teamName}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  let bgGradient = 'from-neutral-800 via-neutral-900 to-neutral-950';
  let borderColor = 'border-neutral-700';
  let textColor = 'text-white';
  let abbreviation = teamName.substring(0, 3).toUpperCase();
  let iconSymbol = '🛡️';

  const lowerName = teamName.toLowerCase();
  if (lowerName.includes('cbe') || lowerName.includes('nigd') || teamId === 'cbe_sa' || teamId === 'nigd' || teamId === '149377') {
    bgGradient = 'from-purple-900 via-indigo-950 to-neutral-950';
    borderColor = 'border-purple-400';
    textColor = 'text-purple-200 font-black';
    abbreviation = 'CBE';
    iconSymbol = '🏦';
  } else if (lowerName.includes('medhin') || lowerName.includes('insurance') || teamId === 'insurance' || teamId === '146921') {
    bgGradient = 'from-sky-700 via-blue-900 to-neutral-950';
    borderColor = 'border-sky-400';
    textColor = 'text-sky-100 font-black';
    abbreviation = 'MED';
    iconSymbol = '🛡️';
  } else if (lowerName.includes('adama') || teamId === 'adama' || teamId === '141024') {
    bgGradient = 'from-amber-500 via-red-800 to-neutral-950';
    borderColor = 'border-amber-400';
    textColor = 'text-amber-100 font-black';
    abbreviation = 'ADA';
    iconSymbol = '⚡';
  } else if (lowerName.includes('electric') || teamId === 'electric' || teamId === '146920') {
    bgGradient = 'from-yellow-600 via-amber-700 to-neutral-950';
    borderColor = 'border-yellow-400';
    textColor = 'text-yellow-100 font-black';
    abbreviation = 'ELE';
    iconSymbol = '⚡';
  } else if (lowerName.includes('fasil') || teamId === 'fasil' || teamId === '141029') {
    bgGradient = 'from-amber-600 via-yellow-600 to-neutral-950';
    borderColor = 'border-amber-400';
    textColor = 'text-amber-100 font-black';
    abbreviation = 'FAS';
    iconSymbol = '👑';
  } else if (lowerName.includes('bahir dar') || teamId === 'bahirdar' || teamId === '141026') {
    bgGradient = 'from-blue-700 via-sky-600 to-blue-950';
    borderColor = 'border-blue-400';
    textColor = 'text-white';
    abbreviation = 'BAH';
    iconSymbol = '🌊';
  } else if (lowerName.includes('coffee') || lowerName.includes('bunna') || teamId === 'bunna' || teamId === '141028') {
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
  } else if (lowerName.includes('hosaena') || lowerName.includes('hossana') || teamId === 'hosaena' || teamId === '141033') {
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
