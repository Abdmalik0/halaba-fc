import React, { useState, useEffect } from 'react';

// In-memory cache for fetched badges across component instances
const badgeCache = new Map<string, string | null>();

export interface EthiopianClubLogoProps {
  teamId?: string;
  teamName: string;
  size?: number;
  badgeUrl?: string;
  className?: string;
}

export const EthiopianClubLogo: React.FC<EthiopianClubLogoProps> = ({
  teamId = '',
  teamName,
  size = 36,
  badgeUrl,
  className = '',
}) => {
  const [badge, setBadge] = useState<string | null>(() => {
    if (badgeUrl) return badgeUrl;
    const cacheKey = (teamId || teamName).toLowerCase().trim();
    if (badgeCache.has(cacheKey)) {
      return badgeCache.get(cacheKey) || null;
    }
    return null;
  });
  const [imgError, setImgError] = useState(false);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    // If a direct badgeUrl prop is provided, use it
    if (badgeUrl) {
      setBadge(badgeUrl);
      setImgError(false);
      return;
    }

    const cacheKey = (teamId || teamName).toLowerCase().trim();
    if (badgeCache.has(cacheKey)) {
      setBadge(badgeCache.get(cacheKey) || null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    const fetchBadge = async () => {
      try {
        // Clean team name for search (remove parentheticals if present)
        const cleanName = teamName
          .replace(/\(.*?\)/g, '')
          .replace(/\[.*?\]/g, '')
          .trim();

        // Check if teamId is numeric or search by name
        const isNumericId = /^\d+$/.test(teamId);
        const url = isNumericId
          ? `https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=${teamId}`
          : `https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${encodeURIComponent(cleanName || teamName)}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        const teamObj = data?.teams?.[0];
        const fetchedBadge = teamObj?.strBadge || teamObj?.strTeamBadge || null;
        const normalizedBadge = fetchedBadge ? fetchedBadge.replace('/tiny', '') : null;

        badgeCache.set(cacheKey, normalizedBadge);

        if (isMounted) {
          setBadge(normalizedBadge);
        }
      } catch {
        badgeCache.set(cacheKey, null);
        if (isMounted) {
          setBadge(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchBadge();

    return () => {
      isMounted = false;
    };
  }, [teamId, teamName, badgeUrl]);

  // If badge exists and image has not failed, render standard <img>
  if (badge && !imgError) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded-full bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden select-none ${className}`}
        title={teamName}
      >
        <img
          src={badge}
          alt={teamName}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Clean text fallback with the team name (no local images or design placeholder icons)
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full bg-neutral-800/90 border border-neutral-700/80 p-1 flex items-center justify-center text-center shrink-0 overflow-hidden select-none text-neutral-300 font-semibold ${className}`}
      title={teamName}
    >
      <span
        className="truncate max-w-full leading-tight text-center px-0.5 tracking-tight font-medium"
        style={{ fontSize: Math.max(9, Math.floor(size * 0.24)) }}
      >
        {teamName}
      </span>
    </div>
  );
};

export const TeamLogo = EthiopianClubLogo;
export default EthiopianClubLogo;
