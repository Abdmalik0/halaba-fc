import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface Match {
  id: string;
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  date: string;
  time: string;
  venue: string;
  status: 'UPCOMING' | 'LIVE' | 'FINISHED';
  score?: { home: number; away: number };
  competition: string;
}

export interface StandingTeam {
  position: number;
  teamId: string;
  teamName: { en: string; am: string; om: string };
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  isHalaba?: boolean;
}

interface ClubContextType {
  news: NewsItem[];
  matches: Match[];
  standings: StandingTeam[];
  addNewsArticle: (article: Omit<NewsItem, 'id' | 'date'>) => Promise<void>;
  deleteNewsArticle: (id: string) => Promise<void>;
}

const STORAGE_KEYS = {
  NEWS: 'halaba_news',
  MATCHES: 'halaba_matches',
  STANDINGS: 'halaba_standings',
};

const ClubContext = createContext<ClubContextType | undefined>(undefined);

export const ClubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [standings, setStandings] = useState<StandingTeam[]>([]);

  // 1. Firebase Firestore Real-time News Listener
  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveNews: NewsItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as NewsItem[];
      setNews(liveNews);
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(liveNews));
    });

    return () => unsubscribe();
  }, []);

  // 2. Automatic Background Sync: TheSportsDB (Halaba FC Games & EPL Table)
  useEffect(() => {
    const autoFetchHalabaData = async () => {
      try {
        // Fetch Standings / League Table
        const standingsRes = await fetch(
          'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4959&s=2026-2027'
        );
        const standingsData = await standingsRes.json();

        if (standingsData && standingsData.table) {
          const formattedStandings: StandingTeam[] = standingsData.table.map(
            (item: any, idx: number) => ({
              position: idx + 1,
              teamId: item.strTeam.toLowerCase().replace(/\s+/g, '-'),
              teamName: { en: item.strTeam, am: item.strTeam, om: item.strTeam },
              played: parseInt(item.intPlayed || '0'),
              won: parseInt(item.intWin || '0'),
              drawn: parseInt(item.intDraw || '0'),
              lost: parseInt(item.intLoss || '0'),
              goalsFor: parseInt(item.intGoalsFor || '0'),
              goalsAgainst: parseInt(item.intGoalsAgainst || '0'),
              goalDifference: parseInt(item.intGoalDifference || '0'),
              points: parseInt(item.intPoints || '0'),
              isHalaba: item.strTeam.toLowerCase().includes('halaba'),
            })
          );
          setStandings(formattedStandings);
          localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(formattedStandings));
        }

        // Fetch Season Fixtures & Filter ONLY Halaba City FC Games
        const fixturesRes = await fetch(
          'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4959&s=2026-2027'
        );
        const fixturesData = await fixturesRes.json();

        if (fixturesData && fixturesData.events) {
          const halabaOnlyEvents = fixturesData.events.filter((ev: any) => {
            const homeName = ev.strHomeTeam ? ev.strHomeTeam.toLowerCase() : '';
            const awayName = ev.strAwayTeam ? ev.strAwayTeam.toLowerCase() : '';
            return homeName.includes('halaba') || awayName.includes('halaba');
          });

          const formattedMatches: Match[] = halabaOnlyEvents.map((ev: any) => ({
            id: `match-${ev.idEvent}`,
            homeTeam: {
              name: ev.strHomeTeam,
              logo: ev.strHomeTeam.toLowerCase().includes('halaba')
                ? '/logo.png'
                : 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80',
            },
            awayTeam: {
              name: ev.strAwayTeam,
              logo: ev.strAwayTeam.toLowerCase().includes('halaba')
                ? '/logo.png'
                : 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=100&q=80',
            },
            date: ev.dateEvent || new Date().toISOString().slice(0, 10),
            time: ev.strTime ? ev.strTime.slice(0, 5) : '15:00',
            venue: ev.strVenue || 'Hawassa University Stadium',
            status:
              ev.strStatus === 'FT'
                ? 'FINISHED'
                : ev.strStatus === 'Live'
                ? 'LIVE'
                : 'UPCOMING',
            score:
              ev.intHomeScore !== null && ev.intHomeScore !== ''
                ? { home: parseInt(ev.intHomeScore), away: parseInt(ev.intAwayScore) }
                : undefined,
            competition: 'Ethiopian Premier League',
          }));

          setMatches(formattedMatches);
          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(formattedMatches));
        }
      } catch (error) {
        console.error('Automatic background match sync error:', error);
      }
    };

    autoFetchHalabaData();
  }, []);

  const addNewsArticle = async (article: Omit<NewsItem, 'id' | 'date'>) => {
    try {
      const docRef = await addDoc(collection(db, 'news'), {
        ...article,
        date: new Date().toISOString().slice(0, 10),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding news article: ', error);
    }
  };

  const deleteNewsArticle = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'news', id));
      const updated = news.filter((n) => n.id !== id);
      setNews(updated);
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
    } catch (error) {
      console.error('Error deleting news article from Firebase: ', error);
    }
  };

  return (
    <ClubContext.Provider
      value={{ news, matches, standings, addNewsArticle, deleteNewsArticle }}
    >
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error('useClub must be used within a ClubProvider');
  }
  return context;
};
