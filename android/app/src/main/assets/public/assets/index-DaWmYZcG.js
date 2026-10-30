const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FixturesPage-stVDyZZq.js","./vendor-react-BqvxpxOH.js","./vendor-capacitor-CxZwZfQO.js","./vendor-firebase-BFy01gyE.js","./StandingsPage-CwjjKt0X.js","./NewsPage-_Y95ptkS.js","./MembershipPage-CCNHAf1c.js","./AboutPage-BP3ow_G6.js","./ContactPage-t5cZvpbF.js","./AdminPage-DBWMeHdF.js","./ShopPage-i3jqH34S.js","./MatchDetailsModal-BEy2yFTC.js","./ArticleModal-BBYi0KiL.js","./ClubDossierModal-BQrobqMy.js","./DonationModal-CL5mMJUG.js","./JerseyCheckoutModal-B6-aT9JK.js"])))=>i.map(i=>d[i]);
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { r as reactExports, j as jsxRuntimeExports, S as Shield, C as Calendar, T as Trophy, N as Newspaper, a as ShoppingBag, U as UserPlus, I as Info, P as Phone, b as Smartphone, L as Lock, G as Globe, c as ChevronDown, H as Heart, X, M as Menu, d as ShieldCheck, e as MapPin, f as Mail, g as Clock, h as Send, E as ExternalLink, D as Download, i as Sparkles, k as LoaderCircle, l as CircleCheck, m as Share2, n as SquarePlus, A as Award, o as Play, p as Pause, q as ChevronLeft, s as ChevronRight, t as Layers, u as ArrowRight, F as Flame, R as Radio, v as RefreshCw, W as WifiOff, w as TriangleAlert, x as createRoot } from "./vendor-react-BqvxpxOH.js";
import { _ as __vitePreload, C as CapacitorUpdater } from "./vendor-capacitor-CxZwZfQO.js";
import { s as setLogLevel, g as getApps, a as getApp, i as initializeApp, b as initializeFirestore, c as getFirestore, d as getAuth, e as collection, o as onSnapshot, q as query, f as orderBy, h as onAuthStateChanged, j as setDoc, k as doc, l as serverTimestamp, m as deleteDoc, n as addDoc, p as signOut, r as signInWithEmailAndPassword } from "./vendor-firebase-BFy01gyE.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
if (typeof globalThis === "undefined") {
  window.globalThis = window;
}
if (typeof window !== "undefined") {
  try {
    new window.CustomEvent("test");
  } catch (e) {
    const CustomEventPolyfill = function(type, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        type,
        Boolean(params.bubbles),
        Boolean(params.cancelable),
        params.detail
      );
      return evt;
    };
    CustomEventPolyfill.prototype = window.Event.prototype;
    window.CustomEvent = CustomEventPolyfill;
  }
}
if (typeof window !== "undefined" && typeof window.structuredClone !== "function") {
  window.structuredClone = function(value) {
    if (value === void 0) return void 0;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (e) {
      return value;
    }
  };
}
if (typeof window !== "undefined") {
  if (typeof window.requestIdleCallback !== "function") {
    window.requestIdleCallback = function(cb) {
      const start = Date.now();
      return window.setTimeout(() => {
        cb({
          didTimeout: false,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
        });
      }, 1);
    };
  }
  if (typeof window.cancelIdleCallback !== "function") {
    window.cancelIdleCallback = function(id) {
      clearTimeout(id);
    };
  }
}
if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
  const nativeScrollTo = window.scrollTo;
  window.scrollTo = function(optionsOrX, y) {
    var _a, _b, _c, _d;
    try {
      if (typeof optionsOrX === "object" && optionsOrX !== null) {
        const opts = optionsOrX;
        const targetX = (_b = (_a = opts.left) != null ? _a : opts.x) != null ? _b : 0;
        const targetY = (_d = (_c = opts.top) != null ? _c : opts.y) != null ? _d : 0;
        nativeScrollTo.call(window, targetX, targetY);
      } else {
        nativeScrollTo.call(window, optionsOrX || 0, y || 0);
      }
    } catch (e) {
      try {
        window.scroll(0, typeof optionsOrX === "object" && optionsOrX !== null ? optionsOrX.top || 0 : y || 0);
      } catch (e2) {
      }
    }
  };
}
if (typeof String.prototype.replaceAll !== "function") {
  String.prototype.replaceAll = function(search, replacement) {
    if (Object.prototype.toString.call(search).toLowerCase() === "[object regexp]") {
      return this.replace(search, replacement);
    }
    const escaped = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return this.replace(new RegExp(escaped, "g"), replacement);
  };
}
if (typeof Promise.allSettled !== "function") {
  Promise.allSettled = function(promises) {
    return Promise.all(
      Array.from(promises).map(
        (item) => Promise.resolve(item).then(
          (value) => ({ status: "fulfilled", value }),
          (reason) => ({ status: "rejected", reason })
        )
      )
    );
  };
}
if (typeof window !== "undefined") {
  const winCrypto = window.crypto;
  if (winCrypto && typeof winCrypto.randomUUID !== "function") {
    winCrypto.randomUUID = function() {
      return "10000000-1000-4000-8000-100000000000".replace(
        /[018]/g,
        (c) => (Number(c) ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)
      );
    };
  }
}
if (typeof window !== "undefined" && typeof window.matchMedia !== "function") {
  window.matchMedia = function(query2) {
    return {
      matches: false,
      media: query2,
      onchange: null,
      addListener: function() {
      },
      removeListener: function() {
      },
      addEventListener: function() {
      },
      removeEventListener: function() {
      },
      dispatchEvent: function() {
        return false;
      }
    };
  };
}
setLogLevel("error");
const firebaseConfig = {
  apiKey: "AIzaSyD1swjfbgCpvt0NI0uwTlaAwV2AAjo-69o",
  authDomain: "halabafc.firebaseapp.com",
  projectId: "halabafc",
  storageBucket: "halabafc.firebasestorage.app",
  messagingSenderId: "34931922331",
  appId: "1:34931922331:web:90c5af1703bba1fb83fd3e",
  measurementId: "G-PC0BB49XRK"
};
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
let firestoreDb;
try {
  firestoreDb = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    ignoreUndefinedProperties: true
  });
} catch (e) {
  firestoreDb = getFirestore(app);
}
const db = firestoreDb;
const auth = getAuth(app);
var OperationType = /* @__PURE__ */ ((OperationType2) => {
  OperationType2["CREATE"] = "create";
  OperationType2["UPDATE"] = "update";
  OperationType2["DELETE"] = "delete";
  OperationType2["LIST"] = "list";
  OperationType2["GET"] = "get";
  OperationType2["WRITE"] = "write";
  return OperationType2;
})(OperationType || {});
function handleFirestoreError(error, operationType, path) {
  var _a, _b;
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: ((_a = auth.currentUser) == null ? void 0 : _a.uid) || null,
      email: ((_b = auth.currentUser) == null ? void 0 : _b.email) || null
    },
    operationType,
    path
  };
  console.warn("Firestore Operation Notice:", JSON.stringify(errInfo));
  return errInfo;
}
const heroStadiumWebp = "" + new URL("halaba_stadium_hero-DlRnnI6Q.webp", import.meta.url).href;
const heroStadiumMobile = "" + new URL("halaba_stadium_hero_mobile-CNMbA7gS.webp", import.meta.url).href;
const heroStadiumJpg = "" + new URL("halaba_stadium_hero-D7B7GHYf.jpg", import.meta.url).href;
const matchAction = "" + new URL("halaba_match_action_1792217992379-BmsC7Yfv.webp", import.meta.url).href;
const academyTraining = "" + new URL("halaba_academy_training_1792218005519-CP1FyldZ.webp", import.meta.url).href;
const squadLineup = "" + new URL("halaba_squad_lineup_1792272200487-IwYXnxcU.webp", import.meta.url).href;
const homeJersey = "" + new URL("halaba_home_jersey_1792356797619-DTn3NB0B.webp", import.meta.url).href;
const awayJersey = "" + new URL("halaba_away_jersey_1792356797886-CuAyXANL.webp", import.meta.url).href;
const newsFasilDraw = "" + new URL("halaba_news_fasil_draw-D0_u1s76.jpg", import.meta.url).href;
const newsCrowdCelebration = "" + new URL("halaba_news_crowd_celebration-v-2uq95_.jpg", import.meta.url).href;
const newsBahirDarWin = "" + new URL("halaba_news_bahirdar_win-Dck88CQr.jpg", import.meta.url).href;
const newsMatchPoster = "" + new URL("halaba_news_match_poster-Bqlk84tk.webp", import.meta.url).href;
const newsCoachInterview = "" + new URL("firestore_news_sxRTmExguBl4NTz4RYjR-DeahbIo_.jpg", import.meta.url).href;
const newsWeWillBeBack = "" + new URL("firestore_news_news-1793126013273-D6VSJsb5.jpg", import.meta.url).href;
const newsWolitaMatch = "" + new URL("firestore_news_news-1793035517021-BF-gYIw-.jpg", import.meta.url).href;
const newsWolitaPreview = "" + new URL("firestore_news_news-1792836094704-IX4npG4d.jpg", import.meta.url).href;
const jerseyHomeReal = "" + new URL("firestore_prod_jersey-home-2026-BFuGm9Jf.jpg", import.meta.url).href;
const jerseyAwayReal = "" + new URL("firestore_prod_jersey-away-2026-CNqFQz0l.jpg", import.meta.url).href;
const jerseyThirdReal = "" + new URL("firestore_prod_jersey-third-2026-DhrS3_as.jpg", import.meta.url).href;
const netvibeLogoImg = "" + new URL("netvibe-logo-DoC7v5-c.jpeg", import.meta.url).href;
const halabaLogoUrl = "" + new URL("halaba-city-fc-logo-ByVlNStd.png", import.meta.url).href;
const ClubImages = {
  heroStadium: heroStadiumWebp,
  heroStadiumWebp,
  heroStadiumMobile,
  heroStadiumJpg,
  matchAction,
  academyTraining,
  squadLineup,
  homeJersey,
  awayJersey,
  newsFasilDraw,
  newsCrowdCelebration,
  newsBahirDarWin,
  newsMatchPoster,
  newsCoachInterview,
  newsWeWillBeBack,
  newsWolitaMatch,
  newsWolitaPreview,
  jerseyHomeReal,
  jerseyAwayReal,
  jerseyThirdReal,
  netvibeLogo: netvibeLogoImg,
  clubLogo: halabaLogoUrl
};
const initialClubInfo = {
  name: "HALABA City FC",
  shortName: "HALABA FC",
  nickname: {
    en: "Berberewochu (The Chilies)",
    am: "በርበሬዎቹ",
    om: "Berberewochu (Mimmi’oowwan)"
  },
  founded: 1966,
  stadium: {
    name: "Halaba Stadium",
    capacity: "15,000 Seats",
    city: "Halaba Kulito",
    region: "Central Ethiopia Regional State",
    surface: "Natural Grass"
  },
  colors: {
    primary: "#c80815",
    // Scarlet Red
    secondary: "#056b2b",
    // Emerald Green
    accent: "#f5b800"
    // Gold
  },
  contact: {
    address: "Halaba Stadium Sports Complex, Main Boulevard, Halaba Kulito, Ethiopia",
    phone: "+251 46 226 0192 / +251 91 688 4422",
    email: "info@halabacityfc.et",
    mediaEmail: "press@halabacityfc.et",
    ticketOffice: "tickets@halabacityfc.et",
    hours: "Monday – Friday: 8:30 AM – 5:30 PM (Matchdays: 7:00 AM – 7:00 PM)"
  },
  socials: {
    facebook: "https://facebook.com/halabacityfc.official",
    telegram: "https://t.me/halabacityfc",
    youtube: "https://youtube.com/@halabacityfc",
    twitter: "https://x.com/halabacityfc"
  }
};
const initialMatches = [
  // Round 3 (Completed - Oct 20, 2026) [FT]
  {
    id: "m-epl-rd3",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League 2026/27 - Round 3",
    date: "2026-10-20",
    kickoffTime: "15:00",
    venue: "Halaba Stadium, Halaba Kulito",
    homeTeam: {
      id: "halaba",
      name: "Halaba Ketema",
      isHalaba: true
    },
    awayTeam: {
      id: "fasil",
      name: "Fasil Kenema",
      isHalaba: false
    },
    status: "FINISHED",
    score: {
      home: 1,
      away: 1
    },
    halftimeScore: {
      home: 1,
      away: 0
    },
    round: "Round 3",
    attendance: "15,000 (Capacity Crowd)",
    referee: "Eyasu Fanta (FIFA Referee)",
    scorers: [
      { player: "Kaleb Amankwah", minute: 10, team: "home" },
      { player: "Romaric", minute: 50, team: "away" }
    ],
    summary: "Halaba Ketema 1 - 1 Fasil Kenema (October 20, 2026). Kaleb Amankwah gave Halaba an early lead in the 10th minute before Romaric leveled for Fasil Kenema in a thrilling 1-1 draw at Halaba Stadium."
  },
  // Round 4 (Upcoming - Oct 26, 2026)
  {
    id: "m-epl-rd4",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League 2026/27 - Round 4",
    date: "2026-10-26",
    kickoffTime: "15:30",
    venue: "Wolaita Sodo Stadium, Wolaita Sodo",
    homeTeam: {
      id: "wolaitta",
      name: "Wolaitta Dicha",
      isHalaba: false
    },
    awayTeam: {
      id: "halaba",
      name: "Halaba Ketema",
      isHalaba: true
    },
    status: "UPCOMING",
    round: "Round 4",
    attendance: "Expected 16,000",
    referee: "Hailemariam Assefa",
    summary: "Halaba Ketema travel to Sodo to face regional rivals Wolaitta Dicha in Round 4 of the Ethiopian Premier League."
  },
  // Round 5 (Upcoming - Oct 30, 2026)
  {
    id: "m-epl-rd5",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League 2026/27 - Round 5",
    date: "2026-10-30",
    kickoffTime: "15:00",
    venue: "Halaba Stadium, Halaba Kulito",
    homeTeam: {
      id: "halaba",
      name: "Halaba Ketema",
      isHalaba: true
    },
    awayTeam: {
      id: "hosaena",
      name: "Hadiya Hosaena",
      isHalaba: false
    },
    status: "UPCOMING",
    round: "Round 5",
    attendance: "Expected 15,000 (Sold Out)",
    referee: "Tewodros Marcos",
    summary: "Round 5 brings high drama as the Berberewochu welcome Hadiya Hosaena to Halaba Stadium seeking to maintain their historic top-of-the-table form."
  },
  // Completed Round 2 (Oct 16, 2026) [FT]
  {
    id: "m-epl-rd2",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League 2026/27 - Round 2",
    date: "2026-10-16",
    kickoffTime: "15:00",
    venue: "Halaba Stadium, Halaba Kulito",
    homeTeam: {
      id: "halaba",
      name: "Halaba Ketema",
      isHalaba: true
    },
    awayTeam: {
      id: "bahirdar",
      name: "Bahir Dar Kenema",
      isHalaba: false
    },
    status: "FINISHED",
    score: {
      home: 1,
      away: 0
    },
    halftimeScore: {
      home: 0,
      away: 0
    },
    round: "Round 2",
    attendance: "14,800",
    referee: "Ephrem Debele",
    scorers: [
      { player: "Yonatan Hailu", minute: 47, team: "home" }
    ],
    summary: "Halaba Ketema 1 - 0 Bahir Dar Kenema (October 16, 2026). Yonatan Hailu scored the winning goal in the 47th minute to secure Halaba Ketema’s historic first Premier League victory."
  },
  // Completed Round 1 (Oct 9, 2026) [FT]
  {
    id: "m-epl-rd1",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League 2026/27 - Round 1",
    date: "2026-10-09",
    kickoffTime: "15:00",
    venue: "Halaba Stadium, Halaba Kulito",
    homeTeam: {
      id: "halaba",
      name: "Halaba Ketema",
      isHalaba: true
    },
    awayTeam: {
      id: "welwalo",
      name: "Welwalo Adigrat University",
      isHalaba: false
    },
    status: "FINISHED",
    score: {
      home: 1,
      away: 1
    },
    halftimeScore: {
      home: 1,
      away: 0
    },
    round: "Round 1",
    attendance: "14,500",
    referee: "Dawit Yohannes",
    scorers: [
      { player: "Amanuel Tesfaye", minute: 34, team: "home" },
      { player: "Bereket Desta", minute: 73, team: "away" }
    ],
    summary: "Halaba Ketema 1 - 1 Welwalo Adigrat University (October 9, 2026). Playmaker Amanuel Tesfaye scored the opening goal in the 34th minute before Welwalo struck back in an electric season opener."
  },
  // Ethiopian Premier League Round 2 & 1 Matches Across the League
  {
    id: "2608726",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-11",
    kickoffTime: "12:00",
    venue: "Hawassa Stadium",
    homeTeam: { id: "hawassa", name: "Hawassa Kenema", isHalaba: false },
    awayTeam: { id: "defence", name: "Mechal (Defence Force)", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608727",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-11",
    kickoffTime: "15:00",
    venue: "Addis Ababa Stadium",
    homeTeam: { id: "bunna", name: "Ethiopian Bunna", isHalaba: false },
    awayTeam: { id: "shaggar", name: "Shaggar City", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608728",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-10",
    kickoffTime: "12:00",
    venue: "Addis Ababa Stadium",
    homeTeam: { id: "saintgeorge", name: "Kidus Giorgis", isHalaba: false },
    awayTeam: { id: "negelle", name: "Negelle Arsi", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608729",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-11",
    kickoffTime: "15:00",
    venue: "Hawassa Stadium",
    homeTeam: { id: "sidama", name: "Sidama Bunna", isHalaba: false },
    awayTeam: { id: "cbe_sa", name: "CBE SA", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608730",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-10",
    kickoffTime: "15:00",
    venue: "Wolaita Sodo Stadium",
    homeTeam: { id: "wolaitta", name: "Wolaitta Dicha", isHalaba: false },
    awayTeam: { id: "fasil", name: "Fasil Kenema", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 0 },
    round: "Round 1"
  },
  {
    id: "2608731",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-09",
    kickoffTime: "12:00",
    venue: "Adama Stadium",
    homeTeam: { id: "electric", name: "Ethio Electric", isHalaba: false },
    awayTeam: { id: "adama", name: "Adama Kenema", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608732",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-11",
    kickoffTime: "12:00",
    venue: "Hossana Stadium",
    homeTeam: { id: "hosaena", name: "Hadiya Hossana", isHalaba: false },
    awayTeam: { id: "bahirdar", name: "Bahir Dar Kenema", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 1 },
    round: "Round 1"
  },
  {
    id: "2608734",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-11",
    kickoffTime: "15:00",
    venue: "Chencha Stadium",
    homeTeam: { id: "gamochencha", name: "Gamo Chencha", isHalaba: false },
    awayTeam: { id: "insurance", name: "Ethiopian Medhin", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 2 },
    round: "Round 1"
  },
  {
    id: "2608735",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-16",
    kickoffTime: "15:00",
    venue: "Adama Stadium",
    homeTeam: { id: "adama", name: "Adama Kenema", isHalaba: false },
    awayTeam: { id: "shaggar", name: "Shaggar City", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 0 },
    round: "Round 2"
  },
  {
    id: "2608736",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-17",
    kickoffTime: "15:00",
    venue: "Hawassa University Stadium",
    homeTeam: { id: "hawassa", name: "Hawassa Kenema", isHalaba: false },
    awayTeam: { id: "insurance", name: "Ethiopian Medhin", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 1 },
    round: "Round 2"
  },
  {
    id: "2608737",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-17",
    kickoffTime: "12:00",
    venue: "Adama ASTU Stadium",
    homeTeam: { id: "saintgeorge", name: "Kidus Giorgis", isHalaba: false },
    awayTeam: { id: "bunna", name: "Ethiopian Bunna", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 2 },
    round: "Round 2"
  },
  {
    id: "2608740",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-16",
    kickoffTime: "12:00",
    venue: "Adama ASTU Stadium",
    homeTeam: { id: "electric", name: "Ethio Electric", isHalaba: false },
    awayTeam: { id: "negelle", name: "Negelle Arsi", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 0 },
    round: "Round 2"
  },
  // Remaining Round 2 League Matches
  {
    id: "2608741",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-16",
    kickoffTime: "15:00",
    venue: "Abebe Bikila Stadium, Addis Ababa",
    homeTeam: { id: "defence", name: "Mechal (Defence Force)", isHalaba: false },
    awayTeam: { id: "fasil", name: "Fasil Kenema", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 2 },
    round: "Round 2"
  },
  {
    id: "2608742",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-17",
    kickoffTime: "12:00",
    venue: "Addis Ababa Stadium",
    homeTeam: { id: "cbe_sa", name: "Ethiopia Nigd Bank (CBE SA)", isHalaba: false },
    awayTeam: { id: "gamochencha", name: "Gamo Chencha", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 0 },
    round: "Round 2"
  },
  {
    id: "2608743",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-17",
    kickoffTime: "15:00",
    venue: "Tigray Stadium, Mekelle",
    homeTeam: { id: "welwalo", name: "Welwalo Adigrat Univ.", isHalaba: false },
    awayTeam: { id: "sidama", name: "Sidama Coffee SC", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 1 },
    round: "Round 2"
  },
  {
    id: "2608744",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-17",
    kickoffTime: "15:00",
    venue: "Wolaita Sodo Stadium",
    homeTeam: { id: "wolaitta", name: "Wolaitta Dicha", isHalaba: false },
    awayTeam: { id: "hosaena", name: "Hadiya Hossana", isHalaba: false },
    status: "FINISHED",
    score: { home: 0, away: 0 },
    round: "Round 2"
  },
  // Ethiopian Premier League Round 3 Matches Across the League
  // (Halaba, Fasil, Mechal, Welwalo, Bahir Dar & Electric have played 3 games; remaining 12 clubs on 2 games)
  {
    id: "2608753",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-21",
    kickoffTime: "15:00",
    venue: "Dire Dawa Stadium",
    homeTeam: { id: "defence", name: "Mechal (Defence Force)", isHalaba: false },
    awayTeam: { id: "welwalo", name: "Welwalo Adigrat Univ.", isHalaba: false },
    status: "FINISHED",
    score: { home: 1, away: 0 },
    round: "Round 3",
    summary: "Defence Force secure a tight 1-0 victory over Welwalo Adigrat in Round 3."
  },
  {
    id: "2608754",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-21",
    kickoffTime: "18:00",
    venue: "Bahir Dar International Stadium",
    homeTeam: { id: "bahirdar", name: "Bahir Dar Kenema", isHalaba: false },
    awayTeam: { id: "electric", name: "Ethio Electric", isHalaba: false },
    status: "FINISHED",
    score: { home: 2, away: 1 },
    round: "Round 3",
    summary: "Bahir Dar Kenema defeat Ethio Electric 2-1 to climb into 3rd position."
  },
  {
    id: "2608750",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-24",
    kickoffTime: "15:00",
    venue: "Abebe Bikila Stadium, Addis Ababa",
    homeTeam: { id: "cbe_sa", name: "Ethiopia Nigd Bank (CBE SA)", isHalaba: false },
    awayTeam: { id: "adama", name: "Adama Kenema SC", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  },
  {
    id: "2608751",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-24",
    kickoffTime: "18:00",
    venue: "Addis Ababa Stadium",
    homeTeam: { id: "insurance", name: "Ethiopian Medhin (Insurance)", isHalaba: false },
    awayTeam: { id: "bunna", name: "Ethiopian Coffee SC (Bunna)", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  },
  {
    id: "2608752",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-25",
    kickoffTime: "15:00",
    venue: "Wolaita Sodo Stadium",
    homeTeam: { id: "wolaitta", name: "Wolaitta Dicha", isHalaba: false },
    awayTeam: { id: "saintgeorge", name: "Saint George SC", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  },
  {
    id: "2608755",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-25",
    kickoffTime: "15:00",
    venue: "Adama Stadium",
    homeTeam: { id: "shaggar", name: "Shaggar City FC", isHalaba: false },
    awayTeam: { id: "hawassa", name: "Hawassa Kenema SC", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  },
  {
    id: "2608756",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-25",
    kickoffTime: "15:00",
    venue: "Hossana Stadium",
    homeTeam: { id: "hosaena", name: "Hadiya Hossana", isHalaba: false },
    awayTeam: { id: "sidama", name: "Sidama Coffee SC", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  },
  {
    id: "2608757",
    competition: "ETHIOPIAN_PREMIER_LEAGUE",
    competitionName: "Ethiopian Premier League",
    date: "2026-10-25",
    kickoffTime: "15:00",
    venue: "Chencha Stadium",
    homeTeam: { id: "gamochencha", name: "Gamo Chencha", isHalaba: false },
    awayTeam: { id: "negelle", name: "Negele Arsi FC", isHalaba: false },
    status: "UPCOMING",
    round: "Round 3"
  }
];
const initialStandings = [
  {
    position: 1,
    teamId: "cbe_sa",
    teamName: "Ethiopia Nigd Bank (CBE SA)",
    played: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 1,
    goalDifference: 2,
    points: 7,
    form: ["W", "W", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png"
  },
  {
    position: 2,
    teamId: "bahirdar",
    teamName: "Bahir Dar Kenema",
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 4,
    goalsAgainst: 2,
    goalDifference: 2,
    points: 6,
    form: ["W", "L", "W"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png"
  },
  {
    position: 3,
    teamId: "defence",
    teamName: "Mechal (Defence Force)",
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 2,
    goalsAgainst: 1,
    goalDifference: 1,
    points: 6,
    form: ["W", "L", "W"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/5760g91790265354.png"
  },
  {
    position: 4,
    teamId: "negelle",
    teamName: "Negele Arsi FC",
    played: 3,
    won: 1,
    drawn: 2,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 1,
    goalDifference: 3,
    points: 5,
    form: ["D", "D", "W"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
  },
  {
    position: 5,
    teamId: "halaba",
    teamName: "Halaba Ketema (በርበሬዎቹ)",
    played: 3,
    won: 1,
    drawn: 2,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 2,
    goalDifference: 1,
    points: 5,
    form: ["D", "W", "D"],
    isHalaba: true,
    badgeUrl: halabaLogoUrl
  },
  {
    position: 6,
    teamId: "adama",
    teamName: "Adama Kenema SC",
    played: 3,
    won: 1,
    drawn: 2,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 1,
    goalDifference: 1,
    points: 5,
    form: ["W", "D", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png"
  },
  {
    position: 7,
    teamId: "insurance",
    teamName: "Ethiopian Medhin (Insurance)",
    played: 2,
    won: 1,
    drawn: 1,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 1,
    goalDifference: 2,
    points: 4,
    form: ["W", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png"
  },
  {
    position: 8,
    teamId: "shaggar",
    teamName: "Shaggar City FC (Sheger Ketema)",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 4,
    form: ["W", "D", "L"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png"
  },
  {
    position: 9,
    teamId: "electric",
    teamName: "Ethio Electric (EEPCO)",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 4,
    form: ["L", "D", "W"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png"
  },
  {
    position: 10,
    teamId: "bunna",
    teamName: "Ethiopian Coffee SC (Bunna)",
    played: 3,
    won: 1,
    drawn: 0,
    lost: 2,
    goalsFor: 2,
    goalsAgainst: 5,
    goalDifference: -3,
    points: 3,
    form: ["L", "W", "L"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png"
  },
  {
    position: 11,
    teamId: "fasil",
    teamName: "Fasil Kenema",
    played: 2,
    won: 0,
    drawn: 2,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 2,
    form: ["D", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png"
  },
  {
    position: 12,
    teamId: "saintgeorge",
    teamName: "Saint George SC (Kidus Giorgis)",
    played: 3,
    won: 0,
    drawn: 2,
    lost: 1,
    goalsFor: 3,
    goalsAgainst: 4,
    goalDifference: -1,
    points: 2,
    form: ["D", "L", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png"
  },
  {
    position: 13,
    teamId: "hawassa",
    teamName: "Hawassa Kenema SC",
    played: 3,
    won: 0,
    drawn: 2,
    lost: 1,
    goalsFor: 2,
    goalsAgainst: 3,
    goalDifference: -1,
    points: 2,
    form: ["L", "D", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png"
  },
  {
    position: 14,
    teamId: "wolaitta",
    teamName: "Wolaitta Dicha (Welayta Dicha)",
    played: 3,
    won: 0,
    drawn: 2,
    lost: 1,
    goalsFor: 2,
    goalsAgainst: 4,
    goalDifference: -2,
    points: 2,
    form: ["D", "D", "L"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/25m67g1790265481.png"
  },
  {
    position: 15,
    teamId: "welwalo",
    teamName: "Welwalo Adigrat Univ.",
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 1,
    form: ["D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png"
  },
  {
    position: 16,
    teamId: "hosaena",
    teamName: "Hadiya Hossana",
    played: 2,
    won: 0,
    drawn: 1,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 2,
    goalDifference: -1,
    points: 1,
    form: ["L", "D"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png"
  },
  {
    position: 17,
    teamId: "sidama",
    teamName: "Sidama Coffee SC (Sidama Bunna)",
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 1,
    goalDifference: -1,
    points: 0,
    form: ["L"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png"
  },
  {
    position: 18,
    teamId: "gamochencha",
    teamName: "Gamo Chencha",
    played: 2,
    won: 0,
    drawn: 0,
    lost: 2,
    goalsFor: 0,
    goalsAgainst: 3,
    goalDifference: -3,
    points: 0,
    form: ["L", "L"],
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png"
  }
];
const initialNews = [
  {
    id: "news-1793126013273",
    title: {
      en: "We will be back",
      am: "ተጠናክረን እንመለሳለን",
      om: "Cimnee Deebina"
    },
    summary: {
      en: "We will come back stronger from this setback. The season is long and our commitment to our club colors and supporters remains unwavering.",
      am: "ተጠናክረን እንመለሳለን! የሊጉ ጉዞ ረጅም ነው፤ ክለባችን ወደ አሸናፊነት ለመመለስ የሚያስፈልጉ ዝግጅቶችን እያደረገ ይገኛል።",
      om: "Cimnee deebina! Tapha itti aanuuf qophii gaarii taasisaa jirra."
    },
    content: {
      en: "We will come back stronger from this setback. The season is long and our commitment to our club colors and supporters remains unwavering. The technical team and players are united in working tirelessly to deliver the results our supporters deserve.",
      am: "ተጠናክረን እንመለሳለን! የሊጉ ጉዞ ረጅም ነው፤ ክለባችን ወደ አሸናፊነት ለመመለስ የሚያስፈልጉ ዝግጅቶችን እያደረገ ይገኛል። መላው ደጋፊ ከክለቡ ጎን እንዲቆም ጥሪ ቀርቧል።",
      om: "Cimnee deebina! Tapha itti aanuuf qophii gaarii taasisaa jirra."
    },
    category: "CLUB_NEWS",
    date: "2026-10-27",
    author: "Club Administration",
    imageUrl: ClubImages.newsWeWillBeBack,
    isFeatured: true,
    readTime: "3 min read"
  },
  {
    id: "news-1793035517021",
    title: {
      en: "Wolita dicha 6 : 0 Halaba city",
      am: "ወላይታ ዲቻ 6 : 0 ሀላባ ከተማ",
      om: "Wolita dicha 6 : 0 Halaba city"
    },
    summary: {
      en: "CBE Ethiopian Premier League Round 4: Halaba City suffered a difficult 6-0 away defeat against Wolaita Dicha at Hawassa Stadium.",
      am: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡",
      om: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡"
    },
    content: {
      en: "CBE Ethiopian Premier League Round 4: Halaba City suffered a difficult 6-0 away defeat against Wolaita Dicha at Hawassa Stadium. The technical team has analyzed the errors and pledged immediate tactical adjustments for Round 5.",
      am: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡ አሰልጣኞችና ተጫዋቾች ለቀጣይ ጨዋታ ከፍተኛ ዝግጅት እያደረጉ ነው።",
      om: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡"
    },
    category: "MATCH_REPORTS",
    date: "2026-10-26",
    author: "Club Administration",
    imageUrl: ClubImages.newsWolitaMatch,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "news-1792836094704",
    title: {
      en: "Halab City vs Wolaita Dicha",
      am: "ሀላባ ከተማ ከወላይታ ዲቻ",
      om: "Halab City vs Wolaita Dicha"
    },
    summary: {
      en: "The eagerly anticipated clash between Halaba City and regional rivals Wolaita Dicha in Round 4 of the Ethiopian Premier League.",
      am: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል",
      om: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል"
    },
    content: {
      en: "The eagerly anticipated clash between Halaba City and regional rivals Wolaita Dicha in Round 4 of the Ethiopian Premier League scheduled at Hawassa Stadium.",
      am: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል። ደጋፊዎች በስታዲየም ተገኝተው ድጋፍ እንዲሰጡ ጥሪ ቀርቧል።",
      om: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል"
    },
    category: "CLUB_NEWS",
    date: "2026-10-24",
    author: "Club Administration",
    imageUrl: ClubImages.newsWolitaPreview,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "sxRTmExguBl4NTz4RYjR",
    title: {
      en: "AFTER MATCH INTERVIEW OF THE HEAD COACH KHALID MOHAMMED",
      am: "አሰልጣኝ ካሊድ መሐመድ ከጨዋታ በኃላ የሰጡት አሰተያየት",
      om: "AFTER MATCH INTERVIEW OF THE HEAD COACH KHALID MOHAMMED"
    },
    summary: {
      en: 'Head Coach Khalid Mohammed speaks following the intense Ethiopian Premier League match at Halaba Stadium: "It was a demanding game following congested fixtures. We created multiple scoring chances and showed strong character."',
      am: "በጣም አስቼጋሪ የነበረ ጨዋታ ነው ተደራራቢ ከሆነ ጨዋታ ነው የመጣነው ተደራራቢ ጨዋታ ማድረግ ትንሽ ጫናዎች አሉ እንደዛም ሆኖ መጥፎ አይደለንም ብዙ የጎል አጋጣሚዎችን መፍጠር ችለናል...",
      om: 'Yaada leenjisaa olaanaa Khalid Mohammed tapha booda kenne: "Tapha baay’ee ulfaataa ture. Carraawwan goolii hedduu uumuu dandeenyeerra."'
    },
    content: {
      am: "በጣም አስቼጋሪ የነበረ ጨዋታ ነው ተደራራቢ ከሆነ ጨዋታ ነው የመጣነው ተደራራቢ ጨዋታ ማድረግ ትንሽ ጫናዎች አሉ እንደዛም ሆኖ መጥፎ አይደለንም ብዙ የጎል አጋጣሚዎችን መፍጠር ችለናል ማስቆጠር ብንችል ኖሮ ውጤቱ በዝሁ መልኩ አይጠናቀቅም ነበር ቀድመንም ጎል አስቆጥረን ነበር ጎል የተቆጠረበት ቡድን ጎል ለማስቆጠር እንድሁም ጎል ያስቆጠረ ቡድንም ትንሽ ወደኃላ ያፈገፍጋል በዛ ሁኔታ በተፈጠረ ክፍተት ጎል ልናስተናግድ ችለናል ጎሉ የተቆጠረው መንገድ በምንገምተው መንገድ ነው ነገር ግን እግር ኳስ ነው እግር ኳስ የሰጠውን ነው የምንቀበለው ሲል ሀሳቡን ገልጿል።\n\nጎል ለማስቆጠር ስነ-ልቦና ወሳኝ ነገር ነው መረጋጋትን ይፈልጋል ከጎል ማስቆጠር ጋር በተያያዘ በተደጋጋሚ ሥራዎችን ሰርተናል ወደ ጎል በመድረስ ከሌሎች ክለቡች አንፃር የተሻልን ነን ይሄም ትልቁ ጎናችን ነው ሌሎች ነገሮች የሚታረሙ እንድሁም የሚቀረፉ ናቸው እነዛን ነገሮች ደግሞ በስነ-ልቦና ላይ በመሥራት የምንፈታቸው ይሆናል በማለት ተናግሯል አሰልጣኝ ካሊድ መሐመድ ገልጿል።",
      en: 'Head Coach Khalid Mohammed shared detailed tactical analysis following the high-intensity fixture at Halaba Stadium: "It was an exceptionally demanding encounter coming off back-to-back congested fixtures. Despite the physical fatigue, our squad created multiple high-quality scoring chances and maintained structural discipline.\n\nScoring requires composure and psychological sharpness. We are creating chances at a higher volume than many top sides in the league, which demonstrates our tactical framework is sound. We will continue refining our finishing through targeted training sessions."',
      om: 'Yaada leenjisaa olaanaa Khalid Mohammed tapha booda kenne: "Tapha baay’ee ulfaataa ture. Carraawwan goolii hedduu uumuu dandeenyeerra."'
    },
    category: "INTERVIEWS",
    date: "2026-10-21",
    author: "Club Administration",
    imageUrl: ClubImages.newsCoachInterview,
    isFeatured: true,
    readTime: "3 min read"
  },
  {
    id: "rkmyTcdZNFzBZq0dBA5Z",
    title: {
      en: "Halaba City 1 - 1 Fasil Kenema: Berberewochu Share Spoils in High-Voltage Stalemate",
      am: "ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡",
      om: "Halaba City 1:1 Fasil Kenema: Marsaa 3ffaa Liigichaatiin Qixa Xumuraniiru"
    },
    summary: {
      en: "Halaba Ketema and Fasil Kenema drew 1-1 in Round 3 of the Ethiopian Premier League on October 20, 2026. Kaleb Amankwah gave Halaba an early lead in the 10th minute before Romaric equalized in the 50th minute.",
      am: "በCBE የኢትዮጵያ ፕርሚየር ሊግ 3ኛ ሳምንት መረሃ ግብር ዛሬ በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡",
      om: "Dorgommii Liigii Piriimeeraa Itoophiyaa marsaa 3ffaa irratti Halaba Ketema fi Fasil Kenema 1-1n qixa ba’aniiru."
    },
    content: {
      am: "በCBE የኢትዮጵያ ፕርሚየር ሊግ 3ኛ ሳምንት መረሃ ግብር ዛሬ በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡\n\nጨዋታው በሁለቱም ክለቦች በኩል ጠንካራ ፉክክር የታየበት ሲሆን በ10 ደቂቃ ካሌብ አማንኩዋሃ ባስቆጠራት ጎል ሀላባ ከተማ የመጀመሪያው መሪ መሆን ቢችልም በሁለተኛው አጋማሽ 50ኛው ደቂቃ ሮማሪክ ባስቆጠራት ጎል ፋሲል ከነማ ነጥብ ተጋርቶ መውጣት ችሏል፡፡",
      en: "Halaba Stadium witnessed an electric atmosphere as Halaba Ketema fought to a hard-earned 1-1 draw against title contenders Fasil Kenema. Kaleb Amankwah struck in the 10th minute for the Berberewochu before Romaric equalized in the 50th minute for Fasil Kenema. With 5 points from their opening three games (1 Win, 2 Draws, 0 Losses), Halaba maintain second place in the Ethiopian Premier League table.",
      om: "Halaba Ketema tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa keessatti Fasil Kenema waliin 1-1n qixa baheera. Kaleb Amankwah daqiiqaa 10ffaa irratti goolii eegalchiisaa yoo galchu, Fasil Kenema daqiiqaa 50ffaa irratti deebiseera."
    },
    category: "MATCH_REPORTS",
    date: "2026-10-20",
    author: "Club Administration",
    imageUrl: ClubImages.newsFasilDraw,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "IysjLt9LbYkwAijEEFYJ",
    title: {
      en: "Next Match Official Announcement: Halaba City vs Fasil Kenema",
      am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ ",
      om: "Tapha Itti Aanu: Halaba City vs Fasil Kenema"
    },
    summary: {
      en: "Round 3 matchday announcement for the blockbuster clash between Halaba City and Fasil Kenema at Halaba Stadium.",
      am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ\n🗓️   ማክሰኞ ጥቅምት 10/2019\n🕙     10:00\n🏟  ሀላባ ኢንተርናሽናል ስታዲየም ",
      om: "Tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa Kibxata Onkoloolessa 10/2019 Istaadiyeemii Halabaa irratti."
    },
    content: {
      am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ\n🗓️   ማክሰኞ ጥቅምት 10/2019\n🕙     10:00\n🏟  ሀላባ ኢንተርናሽናል ስታዲየም\n\nመላው የበርበሬዎቹ ደጋፊ በክለባችን ቀለማት ደምቆ በስታዲየም በመገኘት ክለቡን እንዲያበረታታ ጥሪ ቀርቧል!",
      en: "Halaba City vs Fasil Kenema in Round 3 of the Ethiopian Premier League. Match scheduled for Tuesday at Halaba Stadium.",
      om: "Tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa Istaadiyeemii Halabaa irratti gaggeeffama."
    },
    category: "CLUB_NEWS",
    date: "2026-10-18",
    author: "Club Administration",
    imageUrl: ClubImages.newsMatchPoster,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "V7xAHDdcH80pNECHAujH",
    title: {
      en: "Victorious Atmosphere: Halaba City Supporters Create Historic Scene at Halaba Stadium",
      am: "ድሉም ድባቡም ተጠናክሮ ይቀጥላል",
      om: "Mo’annaanis Miirris Cimee Itti Fufa"
    },
    summary: {
      en: "A heartfelt thank you to the thousands of passionate Berberewochu supporters who packed Halaba Stadium and cheered the club non-stop for 90 minutes to our first Premier League victory.",
      am: "በ CBE የኢትዮጵያ ፕርሚየር ሊግ 2ኛ ሳምንት መረሃ ግብር ክለባችን ሀላባ ከተማ የባህርዳር አቻውን 1-0 በሆነ ውጤት በረታበት በዛሬው ጨዋታ የሀላባ ኢንተርናሽናል ስታድየምን በሚመጥን መልኩ በማራኪ ድባብ ተውቦ ክለቡን 90 ደቂቃ ያለማቋረጥ በማበረታት ለሳያችሁት ድንቅ ድጋፍ ልዪ ክብር ይገባቹሀል!!\nድሉም ድባቡም ተጠናክሮ ይቀጥላል እናመሰግናለን!!❤️",
      om: "Deeggartoota keenya hundaaf galata guddaa qabna. Miirri mo’annaa kun cimee itti fufa!"
    },
    content: {
      am: "በ CBE የኢትዮጵያ ፕርሚየር ሊግ 2ኛ ሳምንት መረሃ ግብር ክለባችን ሀላባ ከተማ የባህርዳር አቻውን 1-0 በሆነ ውጤት በረታበት በዛሬው ጨዋታ የሀላባ ኢንተርናሽናል ስታድየምን በሚመጥን መልኩ በማራኪ ድባብ ተውቦ ክለቡን 90 ደቂቃ ያለማቋረጥ በማበረታት ለሳያችሁት ድንቅ ድጋፍ ልዪ ክብር ይገባቹሀል!!\nድሉም ድባቡም ተጠናክሮ ይቀጥላል እናመሰግናለን!!❤️",
      en: "In the second matchday of the CBE Ethiopian Premier League, HALABA City FC defeated Bahir Dar Kenema 1-0 in front of an electric, sold-out Halaba Stadium crowd. The management expresses deep gratitude to our loyal fans who cheered for 90 minutes straight.",
      om: "Deeggartoota keenya hundaaf galata guddaa qabna. Miirri mo’annaa kun cimee itti fufa!"
    },
    category: "CLUB_NEWS",
    date: "2026-10-18",
    author: "Club Administration",
    imageUrl: ClubImages.newsCrowdCelebration,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "UZeVeV14ya8by5rt1SJ4",
    title: {
      en: "HALABA CITY 1 : 0 BAHIRDAR CITY - Historic First Premier League Win",
      am: "ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!",
      om: "Halaba Ketema Bahir Dar Kenema 1 - 0 Mo’ate!"
    },
    summary: {
      en: "Yonatan Hailu scores the decisive 47th-minute winner against Bahir Dar Kenema to secure Halaba City FC’s historic first ever Ethiopian Premier League victory.",
      am: "በኢትዮጵያ ፕሪምየር ሊግ 2ኛ ሳምንት ጨዋታ ክለባችን ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!\nለበርበሬዎቹ ማሸነፊያዋን ጎል በ47ኛው ደቂቃ ዮናታን ሀይሉ አስቆጥሯል!",
      om: "Dorgommii Liigii Piriimeeraa Itoophiyaa marsaa 2ffaa irratti Halaba Ketema goolii Yonatan Hailu daqiiqaa 47ffaa irratti galcheen 1-0n mo’ateera."
    },
    content: {
      am: "በኢትዮጵያ ፕሪምየር ሊግ 2ኛ ሳምንት ጨዋታ ክለባችን ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!\nለበርበሬዎቹ ማሸነፊያዋን ጎል በ47ኛው ደቂቃ ዮናታን ሀይሉ አስቆጥሯል!\n\nክለባችን በሜዳው በሀላባ ስታዲየም ባደረገው ጨዋታ በጠንካራ መከላከልና በማራኪ የመልሶ ማጥቃት ጨዋታ አስፈላጊውን 3 ነጥብ ይዞ ወጥቷል።",
      en: "In an unforgettable afternoon at Halaba Stadium, Yonatan Hailu struck in the 47th minute to hand HALABA City FC a famous 1-0 victory against Bahir Dar Kenema. The historic three points lifted the Berberewochu into the upper echelon of Ethiopian football.",
      om: "Tapha marsaa 2ffaa Liigii Piriimeeraa Itoophiyaa keessatti Halaba Ketema Bahir Dar Kenema 1-0n mo’achuun seenaa haaraa hojjeteera."
    },
    category: "MATCH_REPORTS",
    date: "2026-10-18",
    author: "Club Administration",
    imageUrl: ClubImages.newsBahirDarWin,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "news-membership",
    title: {
      en: "Official Supporter Membership 2026 Drive Launches with Digital Fan ID",
      am: "የ2026 ይፋዊ የደጋፊዎች አባልነት ምዝገባ በዲጂታል መታወቂያ ተጀመረ",
      om: "Duulli Galmee Miseensummaa Deeggartoota Bara 2026 Eegalame"
    },
    summary: {
      en: "Supporters in Halaba, across Ethiopia, and in the diaspora can now register as official club members through the newly launched portal.",
      am: "በሀላባ፣ በመላው ኢትዮጵያ እና በውጭ ሀገር የሚኖሩ ደጋፊዎች አሁን በአዲሱ ፖርታል አማካኝነት ይፋዊ አባል መሆን ይችላሉ።",
      om: "Deeggartoonni Halabaa fi biyya alaa jiran hundi karaa weebsaayitii seeraatiin miseensa ta’uu danda’u."
    },
    content: {
      en: 'HALABA City FC is proud to announce the official launch of the 2026 Supporter Membership Drive. For the first time in club history, supporters can register online and instantly generate an official Halaba Digital Fan ID.\n\nClub President Dr. Kassim Ahmed highlighted: "Our club belongs to its supporters. Through this membership initiative, every fan whether in Halaba Kulito, Addis Ababa, or abroad becomes a recognized pillar of HALABA City FC. Together, we are building a modern, sustainable sports institution."\n\nMembers receive matchday ticket priority, discounts on official merchandise, digital newsletters, and access to exclusive club forums.',
      am: 'ሀላባ ከተማ እግርኳስ ክለብ የደጋፊዎቹን ይፋዊ አባልነት ምዝገባ በይፋ አስጀምሯል። ደጋፊዎች በመመዝገብ የዲጂታል መታወቂያ ማግኘት ይችላሉ።\n\nየክለቡ ፕሬዝዳንት ዶ/ር ቃሲም አህመድ እንደገለጹት "ይህ ክለብ የደጋፊዎቹ ነው። በአባልነቱ አማካኝነት ክለቡን ወደ ዘመናዊ ተቋምነት ለማሳደግ በጋራ እንሰራለን" ብለዋል።',
      om: "Halaba City FC duula miseensummaa deeggartoota bara 2026 eegaleera. Deeggartoonni karaa intarneetiin galmaa’uun waraqaa eenyummaa dijitaalaa battalumatti argatu."
    },
    category: "CLUB_NEWS",
    date: "2026-10-08",
    author: "Club Secretariat",
    imageUrl: ClubImages.heroStadium,
    isFeatured: false,
    readTime: "3 min read"
  },
  {
    id: "news-academy",
    title: {
      en: "Youth Academy Shines: Under-17 Talents Selected for Regional Development Squad",
      am: "የክለቡ ታዳጊ አካዳሚ ውጤታማነት፡ አራት ተጫዋቾች ለክልሉ ምርጥ ቡድን ተመረጡ",
      om: "Akaadaamiin Dargaggootaa Boonsaa Hojjechaa Jira: Taphattoonni 4 Filataman"
    },
    summary: {
      en: "Four standout prospects from the Halaba City FC Youth Academy have been named in the Central Ethiopia regional training squad.",
      am: "ከሀላባ ከተማ ታዳጊ አካዳሚ የወጡ አራት ተስፈኛ ወጣቶች ለማዕከላዊ ኢትዮጵያ ክልል ምርጥ ታዳጊ ቡድን ተመርጠዋል።",
      om: "Taphattoonni akaadaamii Halaba City FC afur garee qophii naannoo Itoophiyaa Giddugaleessaatiif filatamaniiru."
    },
    content: {
      en: 'The investment in grassroots football in Halaba Kulito is bearing fruit. Yesterday, the regional football federation confirmed that four players from the Halaba City FC U-17 Academy have been selected for the regional training squad.\n\nAcademy Director Coach Melaku highlighted the dedication of local trainers and the immense natural talent found throughout the Halaba woreda and neighboring districts.\n\n"We don\'t just develop footballers; we develop disciplined young ambassadors for Halaba," said Melaku.',
      am: "በሀላባ ቁሊቶ በታዳጊዎች ላይ የተደረገው ኢንቨስትመንት ውጤት እያስገኘ ነው። አራት የክለቡ ታዳጊዎች ለክልሉ ምርጥ ቡድን ተመረጡ። አካዳሚው ስነ-ምግባር የታነጹ ብቁ ተተኪዎችን በማፍራት ላይ ይገኛል።",
      om: "Leenjiin dargaggootaa magaalaa Halabaa keessatti kennamaa jiru bu’aa buusaadha. Taphattoonni afur garee qophiitiif filatamuun boona guddaadha."
    },
    category: "ACADEMY",
    date: "2026-10-02",
    author: "Academy Department",
    imageUrl: ClubImages.academyTraining,
    isFeatured: false,
    readTime: "3 min read"
  }
];
const initialPlayers = [
  // Goalkeepers
  { id: "p1", number: 1, name: "Biniam Teklu", position: "Goalkeeper", nationality: "Ethiopian", birthYear: 2e3, appearances: 28, goals: 0 },
  { id: "p2", number: 22, name: "Mekonnen Abera", position: "Goalkeeper", nationality: "Ethiopian", birthYear: 2003, appearances: 6, goals: 0 },
  // Defenders
  { id: "p3", number: 4, name: "Henok Haile", position: "Defender", nationality: "Ethiopian", birthYear: 1998, appearances: 54, goals: 3, isCaptain: true },
  { id: "p4", number: 5, name: "Biruk Tadesse", position: "Defender", nationality: "Ethiopian", birthYear: 2001, appearances: 32, goals: 1 },
  { id: "p5", number: 3, name: "Samson Fikru", position: "Defender", nationality: "Ethiopian", birthYear: 2002, appearances: 24, goals: 0 },
  { id: "p6", number: 18, name: "Kassahun Negash", position: "Defender", nationality: "Ethiopian", birthYear: 1999, appearances: 41, goals: 2 },
  { id: "p7", number: 2, name: "Mohammed Seid", position: "Defender", nationality: "Ethiopian", birthYear: 2004, appearances: 11, goals: 0 },
  // Midfielders
  { id: "p8", number: 8, name: "Amanuel Tesfaye", position: "Midfielder", nationality: "Ethiopian", birthYear: 2e3, appearances: 38, goals: 9 },
  { id: "p9", number: 10, name: "Yohannes Bekele", position: "Midfielder", nationality: "Ethiopian", birthYear: 1999, appearances: 45, goals: 7 },
  { id: "p10", number: 6, name: "Desta Alemayehu", position: "Midfielder", nationality: "Ethiopian", birthYear: 2001, appearances: 30, goals: 2 },
  { id: "p11", number: 14, name: "Abdi Gemeda", position: "Midfielder", nationality: "Ethiopian", birthYear: 2003, appearances: 19, goals: 3 },
  { id: "p12", number: 16, name: "Elias Zewdu", position: "Midfielder", nationality: "Ethiopian", birthYear: 2002, appearances: 22, goals: 1 },
  // Forwards
  { id: "p13", number: 9, name: "Mulugeta Wolde", position: "Forward", nationality: "Ethiopian", birthYear: 1999, appearances: 42, goals: 16 },
  { id: "p14", number: 11, name: "Biniam Getachew", position: "Forward", nationality: "Ethiopian", birthYear: 2001, appearances: 36, goals: 11 },
  { id: "p15", number: 7, name: "Tarekegn Assefa", position: "Forward", nationality: "Ethiopian", birthYear: 2002, appearances: 29, goals: 8 },
  { id: "p16", number: 19, name: "Fikadu Shiferaw", position: "Forward", nationality: "Ethiopian", birthYear: 2004, appearances: 14, goals: 4 }
];
const initialStaff = [
  { id: "s1", name: "Dr. Kassim Ahmed", role: "Club President", department: "Management", nationality: "Ethiopian" },
  { id: "s2", name: "Solomon Kebede", role: "Head Coach", department: "Coaching", nationality: "Ethiopian" },
  { id: "s3", name: "Getachew Dinberu", role: "Assistant Coach", department: "Coaching", nationality: "Ethiopian" },
  { id: "s4", name: "Worku Mengistu", role: "Goalkeeping Coach", department: "Coaching", nationality: "Ethiopian" },
  { id: "s5", name: "Dr. Nahom Tsegaye", role: "Chief Medical Officer & Physiotherapist", department: "Medical", nationality: "Ethiopian" },
  { id: "s6", name: "Melaku Belachew", role: "Academy Director & Youth Scout", department: "Coaching", nationality: "Ethiopian" }
];
const initialMemberships = [
  {
    id: "mem-1",
    referenceNumber: "HCFC-2026-M8849",
    fullName: "Jemal Kedir",
    dateOfBirth: "1995-04-12",
    gender: "Male",
    phone: "+251 91 144 2209",
    email: "jemal.k@example.com",
    cityOrRegion: "Halaba Kulito",
    membershipType: "PREMIUM",
    preferredLanguage: "am",
    registeredAt: "2026-10-12T14:32:00Z",
    status: "APPROVED",
    notes: "Long-time season ticket holder."
  },
  {
    id: "mem-2",
    referenceNumber: "HCFC-2026-M8850",
    fullName: "Tirhas Hailu",
    dateOfBirth: "1998-09-20",
    gender: "Female",
    phone: "+251 92 388 1904",
    email: "tirhas.hailu@example.com",
    cityOrRegion: "Hawassa",
    membershipType: "STANDARD",
    preferredLanguage: "en",
    registeredAt: "2026-10-13T09:15:00Z",
    status: "APPROVED"
  },
  {
    id: "mem-3",
    referenceNumber: "HCFC-2026-M8851",
    fullName: "Ahmedin Sultan",
    dateOfBirth: "2001-02-18",
    gender: "Male",
    phone: "+251 93 456 7890",
    cityOrRegion: "Halaba Kulito",
    membershipType: "SUPPORTER",
    preferredLanguage: "am",
    registeredAt: "2026-10-14T11:40:00Z",
    status: "PENDING"
  }
];
const initialShopItems = [
  {
    id: "jersey-home-2026",
    name: {
      en: "Official 2026/27 Home Jersey",
      am: "ይፋዊ የ2026/27 የሜዳ ማሊያ (ቀይ እና አረንጓዴ)",
      om: "Jeersii Seeraa 2026/27 Dirree (Diimaa & Magariisa)"
    },
    description: {
      en: "The iconic scarlet red and emerald green shirt worn by Berberewochu in the Ethiopian Premier League. Premium breathable athletic moisture-wicking fabric with embroidered official Halaba City FC crest.",
      am: "በኢትዮጵያ ፕሪሚየር ሊግ በርበሬዎቹ የሚለብሱት ደማቅ ቀይና አረንጓዴ ማሊያ። ከፍተኛ ጥራት ያለው የክለቡ አርማ የተጠለፈበት።",
      om: "Jeersii seeraa Berberewochu Liigii Piriimeeraa Itoophiyaa keessatti uffatamu. Fooyyee qulqullina olaanaa qabu."
    },
    price: 801,
    imageUrl: ClubImages.jerseyHomeReal,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    category: "JERSEY",
    inStock: true,
    featured: true
  },
  {
    id: "jersey-away-2026",
    name: {
      en: "Official 2026/27 Away Jersey",
      am: "ይፋዊ የ2026/27 የውጪ ሜዳ ማሊያ (ነጭ)",
      om: "Jeersii Seeraa 2026/27 Dirree Alaa (Adii)"
    },
    description: {
      en: "Crisp white away jersey accented with Halaba red and emerald green dynamic sash. Lightweight performance wear engineered for speed, ventilation, and matchday pride.",
      am: "ንጹህ ነጭ የውጪ ሜዳ ማሊያ ከቀይና አረንጓዴ የክለቡ ቀለማት ጋር። በስታዲየምም ሆነ በዕለት ተዕለት ለመልበስ ተመራጭ።",
      om: "Jeersii alaa adii bareedaa mallattoo diimaa fi magariisa Halabaan miidhagfame."
    },
    price: 801,
    imageUrl: ClubImages.jerseyAwayReal,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    category: "JERSEY",
    inStock: true,
    featured: true
  },
  {
    id: "jersey-third-2026",
    name: {
      en: "Official 2026/27 Third Kit (Onyx Edition)",
      am: "የ2026/27 ልዩ ነጭ ማሊያ (ኦኒክስ ኤዲሽን)",
      om: "Jeersii Addaa 2026/27 Gurraacha"
    },
    description: {
      en: "Limited edition midnight onyx match jersey featuring glowing emerald green piping and high-density Halaba City shield crest.",
      am: "ውሱን እትም ያለው ጥቁርና አረንጓዴ ማሊያ። ለደጋፊዎች ልዩ ክብርና ዘመናዊ ዲዛይን የተዘጋጀ።",
      om: "Jeersii daangeffamee qophaa’e gurraachaa fi magariisa calaqqisu qabu."
    },
    price: 901,
    imageUrl: ClubImages.jerseyThirdReal,
    availableSizes: ["M", "L", "XL"],
    category: "JERSEY",
    inStock: true,
    featured: true
  },
  {
    id: "scarf-berbere-pride",
    name: {
      en: "Berberewochu Supporter Knit Scarf",
      am: "የበርበሬዎቹ ደጋፊዎች ሹራብ ሻርፕ",
      om: "Hagooggii Deggartoota Berberewochu"
    },
    description: {
      en: 'Double-sided woven jacquard acrylic fan scarf with fringed edges. Reads "HALABA CITY FC • BERBEREWOCHU" on one side and "1966 E.C. • PRIDE OF HALABA" on the reverse.',
      am: "ባለ ሁለት ገጽ የሀላባ ከተማ ደጋፊዎች ሻርፕ። በስታዲየም ድምቀትን ለመፍጠር ተወዳጅ።",
      om: "Hagooggii bareedaa deggartoota Halabaa kan fuula lamaan mallattoo qabu."
    },
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
    availableSizes: ["One Size"],
    category: "ACCESSORY",
    inStock: true,
    featured: false
  },
  {
    id: "jacket-anthem-pro",
    name: {
      en: "Halaba Anthem Warm-Up Jacket",
      am: "የሀላባ ከተማ ሞቃት የስፖርት ጃኬት",
      om: "Jaakkeettii Shaakalaa Halabaa"
    },
    description: {
      en: "Official player walkout anthem jacket with full zip, side zip pockets, water-repellent finish, and embroidered gold Halaba crest.",
      am: "ተጫዋቾች ወደ ሜዳ ሲገቡ የሚለብሱት ኦፊሴላዊ ሞቃት ጃኬት። ከዝናብና ብርድ የሚከላከል ዘመናዊ ጨርቅ።",
      om: "Jaakkeettii taphattoonni yeroo dirreetti seenan uffatan, qilleensa fi rooba kan dhowwu."
    },
    price: 2400,
    imageUrl: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    availableSizes: ["S", "M", "L", "XL"],
    category: "KIT",
    inStock: true,
    featured: false
  }
];
const initialSponsors = [
  {
    id: "sponsor-netvibe",
    name: "NetVibe Digital Solutions",
    nameAm: "ኔትቫይብ ዲጂታል ሶሉሽንስ",
    nameOm: "NetVibe Furmaata Dijitaalaa",
    tier: "Technology Partner & App Developer",
    tierAm: "ኦፊሴላዊ የቴክኖሎጂ አጋር እና የመተግበሪያ አበልፃጊ",
    imageUrl: "/assets/aistudio/photo_2026-10-28_11.47.50_335eef24.jpeg",
    websiteUrl: "https://netvibesolutions.com",
    description: "Ideas • Code • Impact — Proudly architected & developed the official Halaba City FC digital platform & Android app.",
    descriptionAm: "ሀሳብ • ኮድ • ተፅዕኖ — የሀላባ ከተማ እግር ኳስ ክለብን ኦፊሴላዊ ድረ-ገጽ እና የሞባይል መተግበሪያ ያበለፀገ ድርጅት።",
    active: true,
    order: 1
  },
  {
    id: "sponsor-halaba-union",
    name: "Halaba Agricultural & Berbere Union",
    nameAm: "የሀላባ በርበሬና ግብርና ህብረት ስራ ማህበር",
    nameOm: "Waldaa Hojii Gamtaa Qonnaa fi Mimmi’oo Halabaa",
    tier: "Principal Club Partner",
    tierAm: "ዋና የክለቡ አጋር",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://halabacity.gov.et",
    description: "Pride of Halaba — Cultivating the rich soil of our homeland and powering our champions on the national stage.",
    descriptionAm: "የበርበሬ ምድር ኩራት — የሀላባን ለም መሬትና የህዝባችንን ብርታት በመወከል ክለባችንን በታላቅ ኩራት እንደግፋለን።",
    active: true,
    order: 2
  },
  {
    id: "sponsor-chapa",
    name: "Chapa Financial Technologies",
    nameAm: "ቻፓ የፋይናንስ ቴክኖሎጂስ",
    nameOm: "Chapa Teeknooloojii Faayinaansii",
    tier: "Official Digital Payment Partner",
    tierAm: "ኦፊሴላዊ የዲጂታል ክፍያ አጋር",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://chapa.co",
    description: "Fast, secure and seamless online payments for Halaba City FC memberships, donations, and official merchandise.",
    descriptionAm: "ለክለቡ አባላት ምዝገባ፣ እርዳታና ማሊያ ግዢ ፈጣንና አስተማማኝ የክፍያ አገልግሎት የሚሰጥ የቴክኖሎጂ አጋር።",
    active: true,
    order: 3
  },
  {
    id: "sponsor-sports-commission",
    name: "Halaba City Sports & Youth Commission",
    nameAm: "የሀላባ ከተማ ወጣቶችና ስፖርት ኮሚሽን",
    nameOm: "Koomishinii Dargaggootaa fi Ispoortii Magaalaa Halabaa",
    tier: "Civic Governing Partner",
    tierAm: "ኦፊሴላዊ የመንግስትና ማህበረሰብ አጋር",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://halabacity.gov.et",
    description: "Building sports infrastructure, nurturing young talents, and uniting the community under one banner.",
    descriptionAm: "የስፖርት መሰረተ-ልማቶችን በማስፋፋት፣ ወጣት ተሰጥኦዎችን በማፍራትና ማህበረሰቡን በስፖርት አንድ የሚያደርግ ተቋም።",
    active: true,
    order: 4
  }
];
const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navFixtures: "Fixtures & Results",
    navStandings: "Standings",
    navNews: "News & Media",
    navMembership: "Membership",
    navShop: "Shop",
    navDonate: "Donate",
    navAbout: "About Club",
    navContact: "Contact",
    navAdmin: "Admin Portal",
    navJoinBtn: "Join the Club",
    est1966: "Est. 1966",
    nativeApp: "Native App",
    installApp: "Install App",
    clubDossierBtn: "EPL Official Club Dossier",
    active: "Active",
    selectLanguage: "Select Language",
    // Hero
    heroTag: "OFFICIAL CLUB PORTAL",
    heroTitle: "HALABA CITY FC",
    heroNickname: "“Berberewochu” (በርበሬዎቹ)",
    heroSubtitle: "Passion, Pride & Football Heritage of Halaba Since 1966",
    heroBtnNews: "Latest News",
    heroBtnFixtures: "Fixtures & Results",
    heroBtnJoin: "Become a Member",
    // Quick Stats / Info banner
    foundedLabel: "Founded",
    foundedValue: "1966 E.C. / G.C.",
    homeGroundLabel: "Home Stadium",
    homeGroundValue: "Halaba Stadium, Halaba Kulito",
    leagueLabel: "Competition",
    leagueValue: "Ethiopian Premier League (Top Tier) • 1st Place",
    nicknameLabel: "Club Nickname",
    // Next match / match preview
    nextMatchTitle: "Upcoming Match",
    latestResultTitle: "Latest Result",
    matchCountdown: "Kickoff in",
    viewMatchDetails: "Match Details",
    allFixturesBtn: "View All Fixtures",
    fullStandingsBtn: "Full League Table",
    nextHalabaMatch: "Next Halaba Match:",
    nextHalabaGame: "Next Game: Halaba City FC",
    latestHalabaResult: "Latest Halaba Result",
    home: "Home",
    away: "Away",
    vs: "VS",
    fullTime: "Full Time",
    liveNow: "Live Now",
    upcoming: "Upcoming",
    eatTimezone: "EAT",
    matchesShown: "Matches Shown",
    // Home sections
    latestClubNews: "Latest Club News",
    newsSubtitle: "Stay updated with match reports, transfers, and official club announcements.",
    standingsPreviewTitle: "Ethiopian Premier League Standings",
    membershipCtaTitle: "Be Part of the Berberewochu Family",
    membershipCtaDesc: "Join thousands of passionate Halaba City FC supporters. Get official membership, priority tickets, digital fan ID, and exclusive club updates.",
    joinNowBtn: "Register as Member",
    // Match Center
    fixturesTitle: "Fixtures & Results",
    fixturesSubtitle: "Official 2026/27 Ethiopian Premier League match schedule, verified results, and match reports.",
    filterAll: "All Matches",
    filterUpcoming: "Upcoming",
    filterResults: "Results",
    filterCompetition: "Filter by Competition",
    allCompetitions: "All Competitions",
    matchDetailsModalTitle: "Official Match Center",
    matchVenue: "Venue",
    matchDate: "Date & Time",
    matchStatus: "Status",
    attendance: "Attendance",
    referee: "Referee",
    goalsSummary: "Goals & Key Events",
    noMatchesFound: "No matches found matching your filters.",
    officialEplFixtures: "Official EPL Fixtures",
    eplCampaign: "Ethiopian Premier League Campaign 2026 / 2027",
    matchScheduleHeadline: "HALABA City FC Match Schedule & Live Updates",
    liveAutoUpdateDesc: "Live score progress, goal notifications, and match minute simulation run automatically every 30 seconds.",
    clubDossier: "Club Dossier",
    simulateLiveAction: "Simulate Live Action",
    // Standings
    standingsTitle: "Ethiopian Premier League Table",
    standingsSubtitle: "Official 2026/27 season standings (Halaba Ketema undefeated with 5 points in Top 5).",
    pos: "Pos",
    club: "Club",
    played: "P",
    won: "W",
    drawn: "D",
    lost: "L",
    gf: "GF",
    ga: "GA",
    gd: "GD",
    pts: "Pts",
    form: "Form",
    zonePromotion: "League Leaders / CAF Champions League",
    zoneMidtable: "Mid-Table",
    zoneRelegation: "Relegation Zone",
    standingsEplBadge: "Official Ethiopian Premier League • Season 2026 / 2027 (18 Clubs)",
    syncTheSportsDb: "Sync TheSportsDB",
    resetTable: "Reset Table",
    officialLeagueStatus: "Official League Status:",
    firstPlace: "1st Place",
    secondPlace: "2nd Place",
    thirdPlace: "3rd Place",
    cafChampionsLeagueQual: "1st Place • CAF Champions League Qualification",
    cafConfedCupQual: "2nd Place • CAF Confederation Cup Qualification",
    relegationZoneDesc: "Relegation Zone (Positions 16–18)",
    officialClub: "Official Club",
    points: "Points",
    record: "Record",
    goalsGd: "Goals (GD)",
    // News
    newsTitle: "Club News & Media",
    searchNewsPlaceholder: "Search articles, match reports...",
    catAll: "All News",
    catClubNews: "Club News",
    catMatchReports: "Match Reports",
    catTransfers: "Transfers",
    catInterviews: "Interviews",
    catAcademy: "Youth Academy",
    catCommunity: "Community & Fans",
    readArticle: "Read Full Story",
    backToNews: "Back to News",
    publishedOn: "Published",
    author: "By",
    mediaCenterTag: "Halaba City FC Media Center",
    featuredStory: "Featured Story",
    allStories: "All Stories",
    noArticlesFound: "No articles found matching your criteria.",
    copied: "Copied!",
    mediaCommsFooter: "HALABA City FC Official Media & Communications",
    // Membership
    membershipTitle: "Official Supporter Membership",
    membershipSubtitle: "Support HALABA City FC directly. Official fan registry, membership ID card, and matchday privileges.",
    membershipPlansTitle: "Choose Your Membership Category",
    membershipSubtitleChoice: "Choose your membership tier. The corresponding payment amount (200, 500, or 1000 ETB) is initialized via Chapa.",
    tierSupporter: "Supporter Member",
    tierSupporterDesc: "Official digital membership for passionate fans worldwide (200 ETB). Official fan ID and club alerts.",
    tierStandard: "Standard Member",
    tierStandardDesc: "Official physical & digital member card, 10% merchandise discount, and priority matchday tickets at Halaba Stadium.",
    tierPremium: "Gold VIP Member",
    tierPremiumDesc: "VIP stadium access, annual official club jersey voucher, direct invitation to club general meetings, and special recognition.",
    selectTier: "Select Tier",
    selectedTier: "Selected",
    tier1: "Tier 1",
    tier2: "Tier 2",
    tier3: "Tier 3",
    popularChoice: "Popular Choice",
    etbPaid: "ETB PAID",
    memberName: "Member Name",
    regionLabel: "Region",
    seasonLabel: "Season",
    idPhoto: "ID PHOTO",
    idReference: "ID REFERENCE",
    verifiedPaid: "VERIFIED PAID",
    chapaTxRef: "Chapa TX Ref:",
    uploadPhotoLabel: "Upload Member Photo (Passport / Selfie)",
    photoHint: "PNG, JPG up to 5MB",
    chapaSecured: "Chapa Secured Payment",
    supportedPaymentMethods: "Supported methods: Telebirr, CBE Birr, Awash, Cards",
    // Form
    formTitle: "Membership Application Form",
    fullName: "Full Name",
    fullNamePlaceholder: "e.g. Abebe Bekele",
    dob: "Date of Birth",
    gender: "Gender (Optional)",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Prefer not to say",
    phone: "Phone Number",
    phonePlaceholder: "+251 91 234 5678",
    email: "Email Address (Optional)",
    emailPlaceholder: "you@example.com",
    cityOrRegion: "City / Region",
    cityPlaceholder: "e.g. Halaba Kulito / Hawassa / Addis Ababa",
    prefLanguage: "Preferred Communication Language",
    agreePrivacy: "I agree to the HALABA City FC membership terms and privacy policy.",
    submitApplication: "Submit Membership Application",
    submitting: "Processing Application...",
    registrationSuccessTitle: "Registration Successful!",
    registrationSuccessDesc: "Welcome to the Berberewochu family! Your official supporter registration has been recorded in the club database.",
    yourRefNumber: "Membership Reference Number",
    digitalCardTitle: "Official Halaba City FC Digital Fan ID",
    downloadCard: "Print / Save Fan Pass",
    newRegistrationBtn: "Register Another Supporter",
    // Validation
    errFullName: "Please enter your full name.",
    errDob: "Please select your date of birth.",
    errPhone: "Please provide a valid phone number (at least 9 digits).",
    errCity: "Please specify your city or region.",
    errAgree: "You must agree to the club terms to proceed.",
    // About Club
    aboutTitle: "About HALABA City FC",
    aboutSubtitle: "Our story, our cultural identity, and our journey in Ethiopian football.",
    clubHistoryTitle: "Club History & Origins",
    historyP1: "Founded in 1966 in Halaba Kulito, Central Ethiopia, HALABA City FC has stood as a beacon of sportsmanship, unity, and regional pride for over six decades.",
    historyP2: "The club represents the resilience, work ethic, and vibrant cultural heritage of the Halaba community. Competing across regional and national leagues, Halaba City FC continues to nurture raw Ethiopian talent and bring communities together.",
    identityTitle: "The Berberewochu Identity & Crest",
    identityDesc: "Halaba is renowned across Ethiopia as the premier capital of rich, aromatic red pepper (Berbere). Our nickname “Berberewochu” (The Chilies) reflects this spice, vigor, and fierce determination on the football pitch.",
    crestSymbolism: "The official crest features the iconic dual red chili peppers flanking the football, topped by the traditional woven Halaba hat, resting upon an emerald green and gold banner inscribed in Ge’ez: “ሀላባ ከተማ እግርኳስ ክለብ”.",
    stadiumTitle: "Home Ground: Halaba Stadium",
    stadiumDesc: "Halaba Stadium serves as the fortress of the Berberewochu, hosting up to 15,000 roaring supporters on matchdays with its electric atmosphere and passionate red-and-green crowds.",
    squadTitle: "First Team Squad",
    managementTitle: "Club Leadership & Coaching Staff",
    heritageBadge: "Football Heritage Since 1966",
    foundedEc: "Founded: 1966 E.C. (Ethiopian Calendar)",
    centralEthiopia: "Central Ethiopia",
    officialColorsDesc: "Official Colors: Scarlet Red, Emerald Green, Gold",
    prideOfHalaba: "Pride of Halaba",
    ourMission: "Our Mission",
    missionDesc: "To develop elite athletic talent in Halaba, champion fair play and sportsmanship, and compete at the highest level of the Ethiopian football pyramid while serving as an engine of youth empowerment.",
    ourVision: "Our Vision",
    visionDesc: "To establish HALABA City FC as an elite, self-sustaining modern football institution with state-of-the-art training facilities and a continuous pathway from grassroots academy to national team representation.",
    honorsTitle: "Honors & Milestones",
    honor1: "Regional Championship Winners",
    honor2: "Ethiopian Higher League Contender",
    honor3: "National Fair Play Award Finalist",
    honor4: "Over 6 Decades of Continuous Football",
    stadiumFortress: "Fortress of the Berberewochu",
    capacityLabel: "Capacity",
    pitchSurfaceLabel: "Pitch Surface",
    locationLabel: "Location",
    atmosphereLabel: "Atmosphere",
    electrifying: "Electrifying",
    naturalGrass: "Natural Grass",
    appearances: "Apps",
    goals: "Goals",
    captain: "Captain",
    // Contact
    contactTitle: "Contact HALABA City FC",
    contactSubtitle: "Reach out to the club headquarters, media relations, or ticket office.",
    officeAddress: "Club Headquarters: Halaba Kulito, Central Ethiopia Regional State",
    phoneLabel: "Telephone",
    emailLabel: "Email",
    sendUsMessage: "Send Us a Message",
    messageSubject: "Subject",
    messageBody: "Your Message",
    sendMessageBtn: "Send Message",
    messageSentSuccess: "Thank you! Your message has been received by Halaba City FC staff.",
    officialCommunications: "Official Communications",
    clubHeadquarters: "Club Headquarters",
    addressLabel: "Address",
    officialPhoneLabel: "Official Phone",
    inquiriesPressLabel: "Inquiries & Press",
    generalLabel: "General",
    mediaLabel: "Media",
    ticketsLabel: "Tickets",
    officeHoursLabel: "Office Hours",
    officialSocialChannels: "Official Social Channels",
    messageTransmitted: "Message Transmitted",
    yourName: "Your Name",
    emailOrPhone: "Email or Phone Number",
    // Admin
    adminTitle: "Club Administration Portal",
    adminSubtitle: "Authorized club staff dashboard for fixtures, news, squad, and membership data.",
    adminLoginTitle: "Club Staff Login",
    adminUsername: "Staff Username or Email",
    adminPassword: "Password",
    adminLoginBtn: "Access Dashboard",
    adminLogoutBtn: "Log Out",
    adminTabMembers: "Memberships",
    adminTabNews: "News Management",
    adminTabFixtures: "Fixtures & Scores",
    adminTabStandings: "Standings Editor",
    adminTabSquad: "Squad & Staff",
    adminTabSettings: "Club Config & DB",
    demoNotice: "Demonstration Mode: The website is currently operating with local and simulated storage. You can fully test editing news, updating match scores, approving memberships, and adjusting league standings. Connect your production Firebase / PostgreSQL database when ready for cloud deployment.",
    demoQuickLogin: "Demo Quick Fill (Staff)",
    approveBtn: "Approve",
    rejectBtn: "Reject",
    statusApproved: "Approved",
    statusPending: "Pending",
    statusRejected: "Rejected",
    exportCsv: "Export CSV",
    // Live Auto-Update
    liveAutoSyncActive: "Live Auto-Update Active",
    liveAutoSyncPaused: "Live Auto-Update Paused",
    nextSyncIn: "Next Refresh",
    syncingStatus: "Syncing...",
    syncNowBtn: "Sync Now",
    simulateGoalBtn: "Simulate Live Goal",
    syncOfficialLeagueBtn: "Sync Official League",
    updateFrequency: "Update Frequency",
    paused: "Paused",
    autoSyncEngineDesc: "Automated match schedule and standings recalculation engine",
    // Shop & Merchandise
    shopTitle: "Official Club Shop",
    shopSubtitle: "Wear the colors of Halaba City FC with authentic matchday jerseys, training kits, and supporter merchandise.",
    buyNowBtn: "Buy Now",
    itemPrice: "Price",
    availableSizesLabel: "Available Sizes",
    sizeGuide: "Size",
    selectSize: "Select Size",
    inStockLabel: "In Stock",
    outOfStockLabel: "Sold Out",
    deliveryAddressLabel: "Delivery Address",
    streetAddress: "Street Address / House No.",
    city: "City",
    subcityRegion: "Subcity / Kebele / Region",
    orderSummary: "Order Summary",
    checkoutTitle: "Jersey Order Checkout",
    checkoutSubtitle: "Enter your delivery details to proceed to secure Chapa payment.",
    proceedToPayment: "Pay with Chapa",
    orderSuccessTitle: "Order Placed Successfully!",
    orderSuccessMsg: "Your official Halaba City FC order has been confirmed. Our team will prepare delivery to your address.",
    shopBadge: "Official Halaba City FC Merchandise",
    perkAuthentic: "100% Authentic Club Licensing",
    perkDelivery: "Doorstep Delivery Across Ethiopia",
    perkPayment: "Instant Telebirr & CBE Payment",
    manageStoreAdmin: "Manage Store in Admin",
    liveFirestoreSync: "Live Firestore Sync",
    showing: "Showing",
    items: "items",
    noMerchFound: "No Merchandise Found",
    noMerchFoundDesc: "No items match the selected category. Check back soon for newly listed official match kits!",
    loadingInventory: "Loading Live Inventory...",
    officialTag: "2026/27 Official",
    shopCtaTitle: "Support the Club & Get 15% Off Official Merchandise",
    shopCtaDesc: "Official Halaba City FC registered supporters enjoy special discounts on matchday kits, priority ticket allocations, and digital fan cards.",
    donateNow: "Donate Now",
    etbCurrency: "ETB",
    // Donations
    donateTitle: "Support Halaba City FC",
    donateSubtitle: "Fuel the Berberewochu journey in the Ethiopian Premier League, youth development, and stadium facilities.",
    donateBtn: "Donate to Club",
    heroDonateBtn: "Support Club / Donate",
    selectDonationAmount: "Choose Donation Amount (ETB)",
    customAmountLabel: "Custom Amount (ETB)",
    enterAmountPlaceholder: "Enter custom amount...",
    donationPurposeLabel: "Donation Purpose",
    purposeGeneral: "General Club & Matchday Support",
    purposeAcademy: "Halaba Youth Academy & Equipment",
    purposeStadium: "Stadium & Fan Facility Improvement",
    donorNameLabel: "Your Full Name / Supporter Name",
    donorPhoneLabel: "Phone Number (Telebirr / CBE)",
    donorEmailLabel: "Email Address (Optional)",
    donationSuccessTitle: "Thank You for Your Generosity!",
    donationSuccessMsg: "Your support means everything to Halaba City FC and the Berberewochu community.",
    // Footer
    footerRights: "All Rights Reserved. Official Website of HALABA City FC (Berberewochu).",
    footerMotto: "Red & Green Forever • Strength, Pride, Passion",
    quickLinks: "Quick Links",
    socialMedia: "Follow Berberewochu",
    footerOfficeStadium: "Club Office & Stadium",
    footerAboutClub: "Official football club of Halaba Kulito, Central Ethiopia. Proudly nicknamed Berberewochu (በርበሬዎቹ), carrying the cultural spirit and athletic passion of our people.",
    authorizedStaff: "Authorized Staff",
    systemEnv: "System Environment:",
    systemEnvDesc: "Running with responsive client-side persistence and active simulated club database. Data modified in the Admin Dashboard is saved locally and immediately reflects across all pages.",
    openAdminDb: "Open Admin & DB Settings →",
    officialTelegram: "Official Telegram Channel",
    facebookPage: "Facebook Page",
    youtubeHighlights: "YouTube Match Highlights",
    halabaKulitoMotto: 'Halaba Kulito, Central Ethiopia • Proudly "Berberewochu"'
  },
  am: {
    // Navigation
    navHome: "ዋና ገጽ",
    navFixtures: "ጨዋታዎችና ውጤቶች",
    navStandings: "የደረጃ ሰንጠረዥ",
    navNews: "ዜና እና ሚዲያ",
    navMembership: "የደጋፊዎች አባልነት",
    navShop: "ሱቅ",
    navDonate: "ልገሳ",
    navAbout: "ስለ ክለቡ",
    navContact: "ያግኙን",
    navAdmin: "የአስተዳዳሪ ፖርታል",
    navJoinBtn: "አባል ይሁኑ",
    est1966: "በ1966 ዓ.ም ተመሠረተ",
    nativeApp: "ይፋዊ መተግበሪያ",
    installApp: "መተግበሪያውን ጫን",
    clubDossierBtn: "ይፋዊ የክለቡ ሰነድ",
    active: "ነቅቷል",
    selectLanguage: "ቋንቋ ይምረጡ",
    // Hero
    heroTag: "ይፋዊ የክለቡ ፖርታል",
    heroTitle: "ሀላባ ከተማ እግርኳስ ክለብ",
    heroNickname: "“በርበሬዎቹ”",
    heroSubtitle: "የሀላባ እግርኳስ ኩራትና ወኔ ከ1966 ጀምሮ",
    heroBtnNews: "የቅርብ ዜናዎች",
    heroBtnFixtures: "ጨዋታዎችና ውጤቶች",
    heroBtnJoin: "አባል ይሁኑ",
    // Quick Stats / Info banner
    foundedLabel: "የተመሰረተበት ዓመት",
    foundedValue: "1966 ዓ.ም",
    homeGroundLabel: "የሜዳ ስታዲየም",
    homeGroundValue: "ሀላባ ስታዲየም፣ ሀላባ ቁሊቶ",
    leagueLabel: "ውድድር",
    leagueValue: "የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን) • 1ኛ ደረጃ",
    nicknameLabel: "የክለቡ ቅጽል ስም",
    // Next match / match preview
    nextMatchTitle: "ቀጣይ ጨዋታ",
    latestResultTitle: "የቅርብ ውጤት",
    matchCountdown: "ጨዋታው ሊጀመር",
    viewMatchDetails: "የጨዋታው ዝርዝር",
    allFixturesBtn: "ሁሉንም ጨዋታዎች ይመልከቱ",
    fullStandingsBtn: "ሙሉ የደረጃ ሰንጠረዥ",
    nextHalabaMatch: "ቀጣይ የሀላባ ጨዋታ፡",
    nextHalabaGame: "ቀጣይ ጨዋታ፡ ሀላባ ከተማ",
    latestHalabaResult: "የቅርብ የሀላባ ውጤት",
    home: "የሜዳ",
    away: "የሜዳ ውጪ",
    vs: "ከ",
    fullTime: "ሙሉ ጊዜ",
    liveNow: "በቀጥታ በመካሄድ ላይ",
    upcoming: "የሚመጣ",
    eatTimezone: "የኢትዮጵያ ሰዓት",
    matchesShown: "ጨዋታዎች ታይተዋል",
    // Home sections
    latestClubNews: "የክለቡ አዳዲስ ዜናዎች",
    newsSubtitle: "የጨዋታ ሪፖርቶች፣ የዝውውር ዜናዎችና ይፋዊ መግለጫዎችን ይከታተሉ።",
    standingsPreviewTitle: "የኢትዮጵያ ፕሪሚየር ሊግ የደረጃ ሰንጠረዥ",
    membershipCtaTitle: "የበርበሬዎቹ ቤተሰብ ይሁኑ",
    membershipCtaDesc: "በሺዎች ከሚቆጠሩ ታማኝ የሀላባ ከተማ ደጋፊዎች ጋር ይቀላቀሉ። ይፋዊ አባልነት፣ የዲጂታል መታወቂያ እና ልዩ መረጃዎችን ያግኙ።",
    joinNowBtn: "አሁን ይመዝገቡ",
    // Match Center
    fixturesTitle: "ጨዋታዎችና ውጤቶች",
    fixturesSubtitle: "የ2026/2027 የኢትዮጵያ ፕሪሚየር ሊግ የውድድር ዘመን ሙሉ የጨዋታ መርሃ-ግብር እና ውጤቶች።",
    filterAll: "ሁሉም ጨዋታዎች",
    filterUpcoming: "የሚመጡ ጨዋታዎች",
    filterResults: "የተደረጉ ጨዋታዎች",
    filterCompetition: "በውድድር አይነት ይምረጡ",
    allCompetitions: "ሁሉም ውድድሮች",
    matchDetailsModalTitle: "ይፋዊ የጨዋታ ማዕከል",
    matchVenue: "የተደረገበት ሜዳ",
    matchDate: "ቀን እና ሰዓት",
    matchStatus: "ሁኔታ",
    attendance: "የተመልካች ቁጥር",
    referee: "ዋና ዳኛ",
    goalsSummary: "የተቆጠሩ ግቦች እና ክስተቶች",
    noMatchesFound: "የተመረጠውን መስፈርት የሚያሟላ ጨዋታ አልተገኘም።",
    officialEplFixtures: "ይፋዊ የፕሪሚየር ሊግ ጨዋታዎች",
    eplCampaign: "የኢትዮጵያ ፕሪሚየር ሊግ የውድድር ዘመን 2026 / 2027",
    matchScheduleHeadline: "የሀላባ ከተማ እግርኳስ ክለብ የጨዋታ መርሃ-ግብር እና የቀጥታ ውጤት",
    liveAutoUpdateDesc: "የቀጥታ ውጤት፣ የግብ ማሳወቂያዎች እና የጨዋታ ደቂቃ በየ30 ሰከንዱ በራስ-ሰር ይዘምናል።",
    clubDossier: "የክለቡ ሰነድ",
    simulateLiveAction: "የቀጥታ ጨዋታ ሙከራ",
    // Standings
    standingsTitle: "የኢትዮጵያ ፕሪሚየር ሊግ ደረጃ ሰንጠረዥ",
    standingsSubtitle: "የ2026/27 የውድድር ዘመን ይፋዊ የደረጃ ሰንጠረዥ (ሀላባ ከተማ በ5 ነጥብ ያለመሸነፍ ጉዞ)።",
    pos: "ደረጃ",
    club: "ክለብ",
    played: "ተ",
    won: "አ",
    drawn: "አቻ",
    lost: "ተሸ",
    gf: "የገባ",
    ga: "የተቆጠረ",
    gd: "ግብ ል",
    pts: "ነጥብ",
    form: "ቅጽ",
    zonePromotion: "የሊጉ መሪ / የካፍ ቻምፒየንስ ሊግ",
    zoneMidtable: "መካከለኛ ደረጃ",
    zoneRelegation: "የመውረድ ስጋት",
    standingsEplBadge: "ይፋዊ የኢትዮጵያ ፕሪሚየር ሊግ • የውድድር ዘመን 2026 / 2027 (18 ክለቦች)",
    syncTheSportsDb: "ከ TheSportsDB አድስ",
    resetTable: "ሰንጠረዡን ወደ ነበረበት መልስ",
    officialLeagueStatus: "ይፋዊ የሊግ ደረጃ፡",
    firstPlace: "1ኛ ደረጃ",
    secondPlace: "2ኛ ደረጃ",
    thirdPlace: "3ኛ ደረጃ",
    cafChampionsLeagueQual: "1ኛ ደረጃ • የካፍ ቻምፒየንስ ሊግ ማጣሪያ",
    cafConfedCupQual: "2ኛ ደረጃ • የካፍ ኮንፌዴሬሽን ዋንጫ ማጣሪያ",
    relegationZoneDesc: "የመውረድ ስጋት ዞን (ደረጃ 16–18)",
    officialClub: "ይፋዊ ክለብ",
    points: "ነጥብ",
    record: "ሪከርድ",
    goalsGd: "ግቦች (ልዩነት)",
    // News
    newsTitle: "የክለቡ ዜና እና መረጃዎች",
    searchNewsPlaceholder: "ዜናዎችን ይፈልጉ...",
    catAll: "ሁሉም ዜናዎች",
    catClubNews: "የክለብ ዜና",
    catMatchReports: "የጨዋታ ሪፖርት",
    catTransfers: "ዝውውሮች",
    catInterviews: "ቃለ-ምልልስ",
    catAcademy: "ታዳጊዎች አካዳሚ",
    catCommunity: "ደጋፊዎችና ማህበረሰብ",
    readArticle: "ሙሉውን አንብብ",
    backToNews: "ወደ ዜና ዝርዝር ተመለስ",
    publishedOn: "የወጣበት ቀን",
    author: "ጸሐፊ",
    mediaCenterTag: "የሀላባ ከተማ እግርኳስ ክለብ የሚዲያ ማዕከል",
    featuredStory: "ዋና ዜና",
    allStories: "ሁሉም ዜናዎች",
    noArticlesFound: "የተመረጠውን መስፈርት የሚያሟላ ዜና አልተገኘም።",
    copied: "ተቀድቷል!",
    mediaCommsFooter: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ ሚዲያ እና ኮሙኒኬሽን",
    // Membership
    membershipTitle: "የክለቡ ደጋፊዎች ይፋዊ አባልነት",
    membershipSubtitle: "ሀላባ ከተማ እግርኳስ ክለብን በቀጥታ ይደግፉ። ይፋዊ የደጋፊ መታወቂያ እና ልዩ መብቶች።",
    membershipPlansTitle: "የአባልነት ደረጃዎን ይምረጡ",
    membershipSubtitleChoice: "የአባልነት ደረጃዎን ይምረጡ። ክፍያው (200፣ 500 ወይም 1000 ብር) በቻፓ አማካኝነት ይፈጸማል።",
    tierSupporter: "የደጋፊ አባል (Supporter)",
    tierSupporterDesc: "ለሁሉም ደጋፊዎች ይፋዊ የዲጂታል አባልነት ካርድ እና የክለቡ መረጃዎች (200 ብር)።",
    tierStandard: "መደበኛ አባል (Standard)",
    tierStandardDesc: "የአባልነት ካርድ፣ የትኬት ቅድሚያ እና የ10% የክለብ መለያ ቅናሽ።",
    tierPremium: "ወርቅ ቪአይፒ አባል (Gold VIP)",
    tierPremiumDesc: "የቪአይፒ ስታዲየም መቀመጫ፣ ዓመታዊ ይፋዊ ማሊያ፣ እና በክለቡ ጠቅላላ ጉባዔ የመሳተፍ መብት።",
    selectTier: "ይህን ምረጥ",
    selectedTier: "ተመርጧል",
    tier1: "ደረጃ 1",
    tier2: "ደረጃ 2",
    tier3: "ደረጃ 3",
    popularChoice: "ተመራጭ ደረጃ",
    etbPaid: "ብር ተከፍሏል",
    memberName: "የአባሉ ስም",
    regionLabel: "ክልል",
    seasonLabel: "የውድድር ዘመን",
    idPhoto: "የመታወቂያ ፎቶ",
    idReference: "የመታወቂያ መለያ",
    verifiedPaid: "ክፍያው የተረጋገጠ",
    chapaTxRef: "የቻፓ የክፍያ መለያ ቁጥር፡",
    uploadPhotoLabel: "የአባሉን ፎቶ ይጫኑ (ፓስፖርት ወይም የራስ ፎቶ)",
    photoHint: "PNG ወይም JPG እስከ 5 ሜጋባይት",
    chapaSecured: "በቻፓ የተረጋገጠ ደህንነቱ የተጠበቀ ክፍያ",
    supportedPaymentMethods: "የሚደገፉ የክፍያ አማራጮች፡ ቴሌብር፣ የኢትዮጵያ ንግድ ባንክ፣ አዋሽ ባንክ እና ካርዶች",
    // Form
    formTitle: "የደጋፊዎች አባልነት ማመልከቻ",
    fullName: "ሙሉ ስም",
    fullNamePlaceholder: "ለምሳሌ፡ አበበ በቀለ",
    dob: "የትውልድ ቀን",
    gender: "ጾታ (አማራጭ)",
    genderMale: "ወንድ",
    genderFemale: "ሴት",
    genderOther: "መግለጽ አልፈልግም",
    phone: "ስልክ ቁጥር",
    phonePlaceholder: "+251 91 234 5678",
    email: "ኢሜይል (አማራጭ)",
    emailPlaceholder: "you@example.com",
    cityOrRegion: "ከተማ ወይም ክልል",
    cityPlaceholder: "ለምሳሌ፡ ሀላባ ቁሊቶ / ሀዋሳ / አዲስ አበባ",
    prefLanguage: "የመገናኛ ቋንቋ ምርጫ",
    agreePrivacy: "በሀላባ ከተማ እግርኳስ ክለብ የአባልነት ደንቦችና መመሪያዎች እስማማለሁ።",
    submitApplication: "የአባልነት ማመልከቻ አስገባ",
    submitting: "በማስኬድ ላይ...",
    registrationSuccessTitle: "ምዝገባው በተሳካ ሁኔታ ተጠናቋል!",
    registrationSuccessDesc: "እንኳን ወደ በርበሬዎቹ ቤተሰብ በደህና መጡ! ምዝገባዎ በክለቡ የውሂብ ጎታ ውስጥ ተመዝግቧል።",
    yourRefNumber: "የአባልነት መለያ ቁጥር",
    digitalCardTitle: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ ዲጂታል መታወቂያ",
    downloadCard: "መታወቂያውን አትም / አስቀምጥ",
    newRegistrationBtn: "ሌላ ደጋፊ መዝግብ",
    // Validation
    errFullName: "እባክዎ ሙሉ ስምዎን ያስገቡ።",
    errDob: "እባክዎ የትውልድ ቀንዎን ይምረጡ።",
    errPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።",
    errCity: "እባክዎ ከተማዎን ወይም ክልልዎን ይጥቀሱ።",
    errAgree: "ለመቀጠል በክለቡ ደንቦች መስማማት አለብዎት።",
    // About Club
    aboutTitle: "ስለ ሀላባ ከተማ እግርኳስ ክለብ",
    aboutSubtitle: "ታሪካችን፣ ባህላዊ መለያችን እና በኢትዮጵያ እግር ኳስ ጉዟችን።",
    clubHistoryTitle: "የክለቡ ታሪክ እና አመሰራረት",
    historyP1: "በ1966 ዓ.ም በሀላባ ቁሊቶ የተመሰረተው ሀላባ ከተማ እግርኳስ ክለብ ላለፉት ስድስት አስርት ዓመታት የስፖርታዊ ጨዋነት፣ የአንድነት እና የክልሉ ኩራት መገለጫ ሆኖ ቆይቷል።",
    historyP2: "ክለቡ የሀላባን ማህበረሰብ ጽናት፣ ታታሪነት እና ደማቅ ባህል በስፖርቱ መድረክ ይወክላል። በርካታ ተስፋ የተጣለባቸውን ወጣት ታዳጊዎችን በማፍራት ይታወቃል።",
    identityTitle: "የበርበሬዎቹ መለያ እና አርማ",
    identityDesc: "ሀላባ በመላው ኢትዮጵያ በጥራትና በመዓዛው በታወቀው ደማቁ ቀይ በርበሬ ትታወቃለች። የክለባችን ቅጽል ስም “በርበሬዎቹ” በሜዳ ላይ ያለንን ብርታትና ወኔ ያመለክታል።",
    crestSymbolism: "ይፋዊው አርማ ሁለቱ ታዋቂ ቀይ የበርበሬ ፍሬዎች፣ የሀላባ ባህላዊ ቆብ፣ እግር ኳስ እና አረንጓዴው ሪባን በግዕዝ ጽሁፍ “ሀላባ ከተማ እግርኳስ ክለብ” ተቀምጠውበታል።",
    stadiumTitle: "የሜዳ ስታዲየም፡ ሀላባ ስታዲየም",
    stadiumDesc: "ሀላባ ስታዲየም እስከ 15,000 የሚደርሱ ቀይና አረንጓዴ የለበሱ ደጋፊዎችን በደመቀ ሁኔታ የሚያስተናግድ የበርበሬዎቹ ምሽግ ነው።",
    squadTitle: "የዋናው ቡድን ተጫዋቾች",
    managementTitle: "የክለቡ አመራር እና የአሰልጣኝ ቡድን",
    heritageBadge: "የእግርኳስ ቅርስ ከ1966 ዓ.ም ጀምሮ",
    foundedEc: "የተመሰረተበት ዓመት፡ 1966 ዓ.ም (የኢትዮጵያ ዘመን አቆጣጠር)",
    centralEthiopia: "ማዕከላዊ ኢትዮጵያ",
    officialColorsDesc: "ይፋዊ ቀለማት፡ ደማቅ ቀይ፣ ኤመራልድ አረንጓዴ እና ወርቃማ",
    prideOfHalaba: "የሀላባ ኩራት",
    ourMission: "ተልዕኳችን",
    missionDesc: "በሀላባ ድንቅ ስፖርተኞችን ማፍራት፣ ስፖርታዊ ጨዋነትን ማስፈን፣ በከፍተኛው የኢትዮጵያ እግር ኳስ እርከን በብቃት መወዳደር እና የወጣቶች የትምህርትና የስራ አቅም መገንባት።",
    ourVision: "ራዕያችን",
    visionDesc: "ሀላባ ከተማ እግርኳስ ክለብን በዘመናዊ የስልጠና መሰረተ ልማት የታነጸ፣ ራሱን የቻለ እና ከታዳጊ አካዳሚ እስከ ብሔራዊ ቡድን የሚዘልቅ ቀጣይነት ያለው ተቋም ማድረግ።",
    honorsTitle: "ክብሮች እና ታሪካዊ ክስተቶች",
    honor1: "የክልል ሻምፒዮን ዋንጫ አሸናፊ",
    honor2: "የኢትዮጵያ ከፍተኛ ሊግ ጠንካራ ተፎካካሪ",
    honor3: "የብሔራዊ የስፖርታዊ ጨዋነት ተሸላሚ",
    honor4: "ከስድስት አስርት ዓመታት በላይ ቀጣይነት ያለው እግር ኳስ",
    stadiumFortress: "የበርበሬዎቹ ምሽግ",
    capacityLabel: "የተመልካች አቅም",
    pitchSurfaceLabel: "የሜዳው ሳር አይነት",
    locationLabel: "አድራሻ",
    atmosphereLabel: "የሜዳ ድባብ",
    electrifying: "ደማቅ እና አስደማሚ",
    naturalGrass: "ተፈጥሯዊ ሳር",
    appearances: "ተጫወተ",
    goals: "ግቦች",
    captain: "አምበል",
    // Contact
    contactTitle: "ሀላባ ከተማን ያግኙ",
    contactSubtitle: "ከክለቡ ዋና ቢሮ፣ የሚዲያ ክፍል ወይም የትኬት ቢሮ ጋር ይገናኙ።",
    officeAddress: "የክለቡ ዋና ጽ/ቤት፡ ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ",
    phoneLabel: "ስልክ",
    emailLabel: "ኢሜይል",
    sendUsMessage: "መልዕክት ይላኩልን",
    messageSubject: "ርዕስ",
    messageBody: "የመልዕክትዎ ዝርዝር",
    sendMessageBtn: "መልዕክት ላክ",
    messageSentSuccess: "እናመሰግናለን! መልዕክትዎ ለክለቡ ሰራተኞች ደርሷል።",
    officialCommunications: "ይፋዊ ግንኙነት",
    clubHeadquarters: "የክለቡ ዋና ቢሮ",
    addressLabel: "አድራሻ",
    officialPhoneLabel: "ይፋዊ ስልክ",
    inquiriesPressLabel: "ጥያቄዎች እና ሚዲያ",
    generalLabel: "አጠቃላይ",
    mediaLabel: "ሚዲያ",
    ticketsLabel: "ትኬት",
    officeHoursLabel: "የስራ ሰዓት",
    officialSocialChannels: "ይፋዊ የማህበራዊ ሚዲያ ገጾች",
    messageTransmitted: "መልዕክቱ ተልኳል",
    yourName: "ሙሉ ስምዎ",
    emailOrPhone: "ኢሜይል ወይም ስልክ ቁጥር",
    // Admin
    adminTitle: "የክለቡ አስተዳዳሪ ፖርታል",
    adminSubtitle: "የዜናዎች፣ የጨዋታዎች፣ የደረጃ ሰንጠረዥ እና የአባላት መረጃ ማስተዳደሪያ።",
    adminLoginTitle: "የክለቡ ሰራተኞች መግቢያ",
    adminUsername: "የተጠቃሚ ስም ወይም ኢሜይል",
    adminPassword: "የይለፍ ቃል",
    adminLoginBtn: "ግባ",
    adminLogoutBtn: "ውጣ",
    adminTabMembers: "የአባላት ዝርዝር",
    adminTabNews: "ዜናዎችን ማስተዳደር",
    adminTabFixtures: "ጨዋታዎችና ውጤቶች",
    adminTabStandings: "ደረጃ ሰንጠረዥ አርታኢ",
    adminTabSquad: "ተጫዋቾች እና አሰልጣኞች",
    adminTabSettings: "የክለቡ ቅንብሮች",
    demoNotice: "የሙከራ ሁነታ፡ ድረ-ገጹ በአሁኑ ጊዜ በሙከራና በቅድመ-ዕይታ ውሂብ እየሰራ ነው። ዜናዎችን ማከል፣ የጨዋታ ውጤቶችን ማስተካከል እና የአባላት ማመልከቻዎችን ማጽደቅ ይችላሉ።",
    demoQuickLogin: "ፈጣን የሙከራ መግቢያ",
    approveBtn: "አጽድቅ",
    rejectBtn: "ውድቅ አድርግ",
    statusApproved: "የጸደቀ",
    statusPending: "በመጠባበቅ ላይ",
    statusRejected: "ውድቅ የተደረገ",
    exportCsv: "በ-CSV አውርድ",
    // Live Auto-Update
    liveAutoSyncActive: "ቀጥታ አውቶማቲክ ማደስ ነቅቷል",
    liveAutoSyncPaused: "ቀጥታ ማደስ ቆሟል",
    nextSyncIn: "ቀጣይ ማደስ",
    syncingStatus: "በማደስ ላይ...",
    syncNowBtn: "አሁን አድስ",
    simulateGoalBtn: "የቀጥታ ግብ አስመስል",
    syncOfficialLeagueBtn: "ይፋዊ ሊግ አመሳስል",
    updateFrequency: "የማደሻ ድግግሞሽ",
    paused: "ቆሟል",
    autoSyncEngineDesc: "አውቶማቲክ የጨዋታ መርሃ-ግብር እና የሰንጠረዥ ማዘመኛ ሞተር",
    // Shop & Merchandise
    shopTitle: "ይፋዊ የክለቡ ሱቅ",
    shopSubtitle: "የበርበሬዎቹን ቀይና አረንጓዴ መለያ ማሊያዎች፣ የስፖርት ልብሶችና የደጋፊዎች ቁሳቁሶችን ይሸምቱ።",
    buyNowBtn: "አሁን ይግዙ",
    itemPrice: "ዋጋ",
    availableSizesLabel: "የሚገኙ መጠኖች",
    sizeGuide: "መጠን",
    selectSize: "መጠን ይምረጡ",
    inStockLabel: "አለቀቀረም (በክምችት አለ)",
    outOfStockLabel: "አልቋል",
    deliveryAddressLabel: "የመላኪያ አድራሻ",
    streetAddress: "የመንገድ አድራሻ / የቤት ቁጥር",
    city: "ከተማ",
    subcityRegion: "ክፍለ ከተማ / ቀበሌ / ክልል",
    orderSummary: "የትዕዛዝ ማጠቃለያ",
    checkoutTitle: "የማሊያ ትዕዛዝ ማጠቃለያ",
    checkoutSubtitle: "የመላኪያ መረጃዎችን በማስገባት በቻፓ በደህንነት ይክፈሉ።",
    proceedToPayment: "በቻፓ ይክፈሉ",
    orderSuccessTitle: "ትዕዛዝዎ በተሳካ ሁኔታ ተመዝግቧል!",
    orderSuccessMsg: "የሀላባ ከተማ ይፋዊ ትዕዛዝዎ ተረጋግጧል። በቅርቡ ወደ አድራሻዎ ይላካል።",
    shopBadge: "ይፋዊ የሀላባ ከተማ እግርኳስ ክለብ መገልገያዎች",
    perkAuthentic: "100% ይፋዊና ትክክለኛ የክለብ ምርት",
    perkDelivery: "በመላው ኢትዮጵያ አስተማማኝ ማድረስ",
    perkPayment: "በቴሌብርና በኢትዮጵያ ንግድ ባንክ ፈጣን ክፍያ",
    manageStoreAdmin: "መደብሩን በአስተዳዳሪ አስተዳድር",
    liveFirestoreSync: "ቀጥታ የፋየርቤዝ ማመሳሰል",
    showing: "በማሳየት ላይ",
    items: "እቃዎች",
    noMerchFound: "ምንም እቃ አልተገኘም",
    noMerchFoundDesc: "ከተመረጠው ምድብ ጋር የሚዛመድ እቃ አልተገኘም። በቅርቡ የሚጨመሩ አዳዲስ እቃዎችን ይመልከቱ!",
    loadingInventory: "ምርቶችን በመጫን ላይ...",
    officialTag: "የ2026/27 ይፋዊ",
    shopCtaTitle: "ክለቡን ይደግፉና በይፋዊ እቃዎች ላይ 15% ቅናሽ ያግኙ",
    shopCtaDesc: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ አባላት በማሊያዎች ላይ ልዩ ቅናሽ፣ የትኬት ቅድሚያ እና ዲጂታል መታወቂያ ያገኛሉ።",
    donateNow: "አሁን ይለግሱ",
    etbCurrency: "ብር",
    // Donations
    donateTitle: "ሀላባ ከተማ እግርኳስ ክለብን ይደግፉ",
    donateSubtitle: "በርበሬዎቹ በፕሪሚየር ሊግ የሚያደርጉትን ጉዞ፣ የታዳጊዎች አካዳሚና የስታዲየም ግንባታን ያግዙ።",
    donateBtn: "ለክለቡ ይለግሱ",
    heroDonateBtn: "ክለቡን ይደግፉ / ይለግሱ",
    selectDonationAmount: "የልገሳ መጠን ይምረጡ (በብር)",
    customAmountLabel: "የራስዎ የልገሳ መጠን (በብር)",
    enterAmountPlaceholder: "የብር መጠን ያስገቡ...",
    donationPurposeLabel: "የልገሳ ዓላማ",
    purposeGeneral: "አጠቃላይ የክለብና የጨዋታ ድጋፍ",
    purposeAcademy: "የታዳጊዎች አካዳሚና ቁሳቁስ ድጋፍ",
    purposeStadium: "የስታዲየምና የደጋፊዎች መገልገያ ማሻሻያ",
    donorNameLabel: "ሙሉ ስምዎ",
    donorPhoneLabel: "ስልክ ቁጥር (ቴሌብር / ንግድ ባንክ)",
    donorEmailLabel: "ኢሜይል (አማራጭ)",
    donationSuccessTitle: "ለታላቁ ድጋፍዎ እናመሰግናለን!",
    donationSuccessMsg: "የእርስዎ ድጋፍ ለሀላባ ከተማ እግርኳስ ክለብና ለበርበሬዎቹ ትልቅ አቅም ነው።",
    // Footer
    footerRights: "መብቱ በህግ የተጠበቀ ነው። የሀላባ ከተማ እግርኳስ ክለብ (በርበሬዎቹ) ይፋዊ ድረ-ገጽ።",
    footerMotto: "ቀይና አረንጓዴ ለዘላለም • ጥንካሬ፣ ክብር፣ ፍቅር",
    quickLinks: "ፈጣን ማገናኛዎች",
    socialMedia: "በርበሬዎቹን ይከታተሉ",
    footerOfficeStadium: "የክለቡ ቢሮ እና ስታዲየም",
    footerAboutClub: "የሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ ይፋዊ እግር ኳስ ክለብ። በቅጽል ስማቸው በርበሬዎቹ በመባል የሚታወቁት፣ የማህበረሰባችንን ባህልና የስፖርት ፍቅር የሚወክሉ ኩሩዎች።",
    authorizedStaff: "ለተፈቀደላቸው ሰራተኞች",
    systemEnv: "የስርዓት ሁኔታ፡",
    systemEnvDesc: "ድረ-ገጹ ፈጣንና ቀጥታ የውሂብ ማስቀመጫን በመጠቀም እየሰራ ነው። በአስተዳዳሪ ፖርታል የሚደረጉ ማሻሻያዎች በሁሉም ገጾች ላይ ወዲያውኑ ይንጸባረቃሉ።",
    openAdminDb: "የአስተዳዳሪና ውሂብ ቅንብሮችን ክፈት →",
    officialTelegram: "ይፋዊ የቴሌግራም ቻናል",
    facebookPage: "የፌስቡክ ገጽ",
    youtubeHighlights: "የዩቲዩብ የጨዋታ አበይት ክስተቶች",
    halabaKulitoMotto: 'ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ • ኩሩዎቹ "በርበሬዎቹ"'
  },
  om: {
    // Navigation
    navHome: "Fuula Duraa",
    navFixtures: "Taphawwan fi Bu’aawwan",
    navStandings: "Gabatee Sadarkaa",
    navNews: "Oduu & Miidiyaa",
    navMembership: "Miseensummaa",
    navShop: "Suuqii",
    navDonate: "Gumaacha",
    navAbout: "Waa’ee Garee",
    navContact: "Nu Qunnamaa",
    navAdmin: "Portaala Bulchiinsaa",
    navJoinBtn: "Miseensa Ta’aa",
    est1966: "Bara 1966 Hundeeffame",
    nativeApp: "Appilikeeshinii Seeraa",
    installApp: "Appilikeeshinii Fe’i",
    clubDossierBtn: "Sanada Seeraa Kilabichaa",
    active: "Hojjechaa Jira",
    selectLanguage: "Afaan Filadhaa",
    // Hero
    heroTag: "PORTAALA SEERAA KILABICHAA",
    heroTitle: "HALABA CITY FC",
    heroNickname: "“Berberewochu” (በርበሬዎቹ)",
    heroSubtitle: "Dhaala Kubbaa Miilaa fi Boona Halabaa Bara 1966 Kaasee",
    heroBtnNews: "Oduuwwan Haaraa",
    heroBtnFixtures: "Taphawwan & Bu’aawwan",
    heroBtnJoin: "Miseensa Ta’aa",
    // Quick Stats / Info banner
    foundedLabel: "Bara Hundeeffame",
    foundedValue: "Bara 1966",
    homeGroundLabel: "Dirree Dirree",
    homeGroundValue: "Istaadiyeemii Halabaa, Halaba Qulitoo",
    leagueLabel: "Dorgommii",
    leagueValue: "Liigii Piriimeeraa Itoophiyaa (Sadarkaa 1ffaa)",
    nicknameLabel: "Maqaa Masoo",
    // Next match / match preview
    nextMatchTitle: "Tapha Itti Aanu",
    latestResultTitle: "Bu’aa Dhihoo",
    matchCountdown: "Taphni Jalqabuuf",
    viewMatchDetails: "Bal’ina Taphaa",
    allFixturesBtn: "Taphawwan Hundumaa Ilaali",
    fullStandingsBtn: "Gabatee Sadarkaa Guutuu",
    nextHalabaMatch: "Tapha Halabaa Itti Aanu:",
    nextHalabaGame: "Tapha Itti Aanu: Halaba City FC",
    latestHalabaResult: "Bu’aa Halabaa Dhihoo",
    home: "Dirree",
    away: "Ala",
    vs: "Fi",
    fullTime: "Xumurameera",
    liveNow: "Kallattiin",
    upcoming: "Kanneen Dhufan",
    eatTimezone: "Sa’aatii Itoophiyaa",
    matchesShown: "Taphawwan Mul’atan",
    // Home sections
    latestClubNews: "Oduuwwan Kilabichaa Dhihoo",
    newsSubtitle: "Gabaasa taphootaa, jijjiirraa taphattootaa fi beeksisa seeraa hordofaa.",
    standingsPreviewTitle: "Gabatee Sadarkaa Liigii Piriimeeraa",
    membershipCtaTitle: "Maatii Berberewochu Ta’aa",
    membershipCtaDesc: "Deeggartoota Halaba City FC kumaatama waliin makamaa. Miseensummaa seeraa, waraqaa eenyummaa dijitaalaa fi odeeffannoo addaa argadhaa.",
    joinNowBtn: "Amma Galmaa’aa",
    // Match Center
    fixturesTitle: "Taphawwan fi Bu’aawwan",
    fixturesSubtitle: "Sagantaa taphoota Liigii Piriimeeraa Itoophiyaa bara 2026/2027 fi bu’aawwan seeraa.",
    filterAll: "Taphawwan Hundumaa",
    filterUpcoming: "Kanneen Dhufan",
    filterResults: "Bu’aawwan",
    filterCompetition: "Dorgommiidhaan Calali",
    allCompetitions: "Dorgommiiwwan Hunda",
    matchDetailsModalTitle: "Wiirtuu Tapha Seeraa",
    matchVenue: "Iddoo Taphaa",
    matchDate: "Guyyaa & Sa’aatii",
    matchStatus: "Haala",
    attendance: "Baay’ina Daawwattootaa",
    referee: "Abbaa Seeraa",
    goalsSummary: "Galchiiwwan fi Taateewwan Ijoo",
    noMatchesFound: "Taphni filannoo kessaniin walsimu hin argamne.",
    officialEplFixtures: "Taphawwan Liigii Piriimeeraa Seeraa",
    eplCampaign: "Dorgommii Liigii Piriimeeraa Itoophiyaa Bara 2026 / 2027",
    matchScheduleHeadline: "Sagantaa Taphoota Halaba City FC fi Haromsa Kallattii",
    liveAutoUpdateDesc: "Gooliiwwan, daqiiqaa taphaa fi qabxiilee kallattiin sekondii 30 keessatti haaromsama.",
    clubDossier: "Sanada Kilabichaa",
    simulateLiveAction: "Yaalii Tapha Kallattii",
    // Standings
    standingsTitle: "Gabatee Sadarkaa Liigii Piriimeeraa",
    standingsSubtitle: "Sadarkaa seeraa bara 2026/27 (Halaba Ketema qabxii 5n utuu hin mo’amin dura jira).",
    pos: "Sad",
    club: "Kilabii",
    played: "T",
    won: "M",
    drawn: "Q",
    lost: "A",
    gf: "GK",
    ga: "GT",
    gd: "GG",
    pts: "Qabxii",
    form: "Bocaa",
    zonePromotion: "Dursaa Liigichaa / CAF Champions League",
    zoneMidtable: "Giddu-galeessa",
    zoneRelegation: "Garee Gad Bu’u",
    standingsEplBadge: "Liigii Piriimeeraa Itoophiyaa Seeraa • Bara 2026 / 2027 (Kilaboota 18)",
    syncTheSportsDb: "TheSportsDB irraa Haaromsi",
    resetTable: "Gabatee Deebisi",
    officialLeagueStatus: "Haala Liigii Seeraa:",
    firstPlace: "Sadarkaa 1ffaa",
    secondPlace: "Sadarkaa 2ffaa",
    thirdPlace: "Sadarkaa 3ffaa",
    cafChampionsLeagueQual: "Sadarkaa 1ffaa • CAF Champions League Darbuuf",
    cafConfedCupQual: "Sadarkaa 2ffaa • Waancaa Konfedereeshinii CAF",
    relegationZoneDesc: "Sadarkaa Gad Bu’iinsaa (Sadarkaa 16–18)",
    officialClub: "Kilabii Seeraa",
    points: "Qabxii",
    record: "Galmee",
    goalsGd: "Goolii (Garaagarummaa)",
    // News
    newsTitle: "Oduu fi Miidiyaa Kilabichaa",
    searchNewsPlaceholder: "Oduuwwan, gabaasa taphaa barbaadi...",
    catAll: "Oduu Hunda",
    catClubNews: "Oduu Kilabii",
    catMatchReports: "Gabaasa Taphaa",
    catTransfers: "Jijjiirraa",
    catInterviews: "Gaaf-deebii",
    catAcademy: "Akaadaamii Dargaggootaa",
    catCommunity: "Hawaasa & Deeggartoota",
    readArticle: "Oduu Guutuu Dubbisi",
    backToNews: "Gara Oduutti Deebi’i",
    publishedOn: "Guyyaa Maxxansaa",
    author: "Barreessaan",
    mediaCenterTag: "Wiirtuu Miidiyaa Halaba City FC",
    featuredStory: "Oduu Ijoo",
    allStories: "Oduuwwan Hunda",
    noArticlesFound: "Oduun filannoo kessaniin walsimu hin argamne.",
    copied: "Koppii Ta’eera!",
    mediaCommsFooter: "Miidiyaa fi Quunnamtii Seeraa Halaba City FC",
    // Membership
    membershipTitle: "Miseensummaa Deeggartoota Seeraa",
    membershipSubtitle: "Halaba City FC kallattiin deeggaraa. Waraqaa eenyummaa dijitaalaa fi mirga addaa argadhaa.",
    membershipPlansTitle: "Sadarkaa Miseensummaa Filadhaa",
    membershipSubtitleChoice: "Sadarkaa miseensummaa keessanii filadhaa. Kaffaltiin (200, 500 ykn 1000 ETB) Chapa kaffalama.",
    tierSupporter: "Miseensa Deeggaraa (Supporter)",
    tierSupporterDesc: "Miseensummaa dijitaalaa deeggartoota addunyaa hundaaf (Qarshii 200).",
    tierStandard: "Miseensa Idilee (Standard)",
    tierStandardDesc: "Kaardii miseensummaa, dursa tikkeettii argachuu fi hir’ifama gatii uffata kilabichaa %10.",
    tierPremium: "Miseensa Warqee VIP (Gold VIP)",
    tierPremiumDesc: "Iddoo taa’umsa VIP, jeersii kilabichaa waggaa fi walga’ii waliigalaa kilabichaa irratti hirmaachuu.",
    selectTier: "Kuni Filadhu",
    selectedTier: "Filatameera",
    tier1: "Sadarkaa 1",
    tier2: "Sadarkaa 2",
    tier3: "Sadarkaa 3",
    popularChoice: "Filannoo Baay’ee",
    etbPaid: "ETB KAFFALAMEERA",
    memberName: "Maqaa Miseensaa",
    regionLabel: "Naannoo",
    seasonLabel: "Waggaa Taphaa",
    idPhoto: "Suuraa Eenyummaa",
    idReference: "Lakkoofsa Eenyummaa",
    verifiedPaid: "KAFFALTIIN MIRKANAA’E",
    chapaTxRef: "Lakk. Kaffaltii Chapa:",
    uploadPhotoLabel: "Suuraa Miseensaa Ol-fe’aa",
    photoHint: "PNG, JPG hanga 5MB",
    chapaSecured: "Kaffaltii Nagaa Chapa",
    supportedPaymentMethods: "Telebirr, CBE Birr, Awash Bank fi Kaardiiwwan",
    // Form
    formTitle: "Uunkaa Galmee Miseensummaa",
    fullName: "Maqaa Guutuu",
    fullNamePlaceholder: "Fkn. Tolosaa Dibaba",
    dob: "Guyyaa Dhalootaa",
    gender: "Kornyaa (Filannoo)",
    genderMale: "Dhiira",
    genderFemale: "Dhalaa",
    genderOther: "Ibsuu Hin Barbaadu",
    phone: "Lakkoofsa Bilbilaa",
    phonePlaceholder: "+251 91 234 5678",
    email: "Imeeyilii (Filannoo)",
    emailPlaceholder: "you@example.com",
    cityOrRegion: "Magaalaa ykn Naannoo",
    cityPlaceholder: "Fkn. Halaba Qulitoo / Hawaasaa / Finfinnee",
    prefLanguage: "Afaan Quunnamtii Filatame",
    agreePrivacy: "Waliigaltee fi seerota miseensummaa Halaba City FC nan fudhadha.",
    submitApplication: "Iyyannoo Miseensummaa Galchi",
    submitting: "Hojjetamaa jira...",
    registrationSuccessTitle: "Galmeen Milkaa’inaan Xumurameera!",
    registrationSuccessDesc: "Baga gara maatii Berberewochu dhuftan! Galmeen keessan kuusaa ragaa kilabichaa keessatti qabameera.",
    yourRefNumber: "Lakkoofsa Eenyummaa Miseensummaa",
    digitalCardTitle: "Waraqaa Eenyummaa Dijitaalaa Halaba City FC",
    downloadCard: "Waraqicha Maxxansi / Ol-kaa’i",
    newRegistrationBtn: "Nama Biraa Galmeessi",
    // Validation
    errFullName: "Maaloo maqaa keessan guutuu galchaa.",
    errDob: "Maaloo guyyaa dhalootaa filadhaa.",
    errPhone: "Maaloo lakkoofsa bilbilaa sirrii galchaa.",
    errCity: "Maaloo magaalaa ykn naannoo keessan ibsaa.",
    errAgree: "Itti fufuuf seera kilabichaa fudhachuu qabdu.",
    // About Club
    aboutTitle: "Waa’ee HALABA City FC",
    aboutSubtitle: "Seenaa keenya, eenyummaa aadaa keenya fi imala kubbaa miilaa keenya.",
    clubHistoryTitle: "Seenaa fi Hundeeffama Kilabichaa",
    historyP1: "Bara 1966 Magaalaa Halaba Qulitoo keessatti kan hundeeffame Halaba City FC, waggoota jaatamaaf fakkeenya ispoortii, tokkummaa fi boona naannichaa ta’ee tajaajileera.",
    historyP2: "Kilabichi jabinna, aadaa fi mul’ata hawaasa Halabaa kubbaa miilaatiin bakka bu’a. Dargaggoota hedduu gara taphattoota beekamootti guddisuu irratti cimee hojjeta.",
    identityTitle: "Eenyummaa Berberewochu & Asxaa",
    identityDesc: "Halabaan guutuu Itoophiyaa keessatti qulqullina fi mi’aa barbarree diimaa isheetiin beekamti. Maqaan masoo “Berberewochu” jedhus jabinna fi ho’ina dirree irratti qabnu calaqqisiisa.",
    crestSymbolism: "Asxaan seeraa mimmi’oo diimaa lameen, qophee aadaa Halabaa, kubbaa miilaa fi mallattoo magariisaa barreeffama Gi’iizii “ሀላባ ከተማ እግርኳስ ክለብ” of keessaa qaba.",
    stadiumTitle: "Dirree Keenya: Istaadiyeemii Halabaa",
    stadiumDesc: "Istaadiyeemiin Halabaa deeggartoota gara 15,000 uffata diimaa fi magariisa uffatan simachuun iddoo jabaa fi ho’aa kilabichaati.",
    squadTitle: "Taphattoota Garee Jalqabaa",
    managementTitle: "Hoggansa fi Leenjistoota Kilabichaa",
    heritageBadge: "Dhaala Ispoortii Bara 1966 Kaasee",
    foundedEc: "Bara Hundeeffame: Bara 1966 (Lakkoofsa Itoophiyaa)",
    centralEthiopia: "Itoophiyaa Giddugaleessaa",
    officialColorsDesc: "Halluuwwan Seeraa: Diimaa, Magariisa fi Warqee",
    prideOfHalaba: "Boona Halabaa",
    ourMission: "Ergama Keenya",
    missionDesc: "Dargaggoota dandeettii qaban guddisuu, seera ispoortii kabachiisuu fi sadarkaa ol’aanaa kubbaa miilaa Itoophiyaa irratti milkaa’uu.",
    ourVision: "Mul’ata Keenya",
    visionDesc: "Kilaba Halaba City FC gara dhaabbata ammayyaa fi dandeettii guutuu qabutti ceesisuu.",
    honorsTitle: "Milkaa’inawwan fi Seenaa",
    honor1: "Shaampiyoonaa Naannoo Mo’ate",
    honor2: "Liigii Ol’aanaa Itoophiyaa Irratti Falmataa",
    honor3: "Badhaasa Ispoortummaa Biyyaalessaa",
    honor4: "Waggoota 60 Ol Kubbaa Miilaa Ture",
    stadiumFortress: "Dahoo Berberewochu",
    capacityLabel: "Baay’ina Taa’umsaa",
    pitchSurfaceLabel: "Gosa Margaa",
    locationLabel: "Iddoo",
    atmosphereLabel: "Miira Dirree",
    electrifying: "Ho’aa fi Boonsaa",
    naturalGrass: "Marga Uumamaa",
    appearances: "Taphoota",
    goals: "Galchii",
    captain: "Kabiteenii",
    // Contact
    contactTitle: "Halaba City FC Qunnamaa",
    contactSubtitle: "Waajjira ol’aanaa, miidiyaa fi waajjira tikkeettii qunnamaa.",
    officeAddress: "Waajjira Ol’aanaa: Halaba Qulitoo, Naannoo Itoophiyaa Giddugaleessaa",
    phoneLabel: "Bilbila",
    emailLabel: "Imeeyilii",
    sendUsMessage: "Ergaa Nuuf Ergaa",
    messageSubject: "Mata-duree",
    messageBody: "Ergaa Keessan",
    sendMessageBtn: "Ergaa Ergi",
    messageSentSuccess: "Galatoomaa! Ergaan keessan hoggantoota kilabichaatiin ga’eera.",
    officialCommunications: "Quunnamtii Seeraa",
    clubHeadquarters: "Waajjira Ol’aanaa Kilabichaa",
    addressLabel: "Teessoo",
    officialPhoneLabel: "Bilbila Seeraa",
    inquiriesPressLabel: "Gaaffii fi Miidiyaa",
    generalLabel: "Waliigala",
    mediaLabel: "Miidiyaa",
    ticketsLabel: "Tikkeettii",
    officeHoursLabel: "Sa’aatii Hojii",
    officialSocialChannels: "Marsariitiiwwan Hawaasaa Seeraa",
    messageTransmitted: "Ergaan Ergameera",
    yourName: "Maqaa Guutuu",
    emailOrPhone: "Imeeyilii ykn Bilbila",
    // Admin
    adminTitle: "Portaala Bulchiinsa Kilabichaa",
    adminSubtitle: "Gabaasa taphootaa, oduuwwan, miseensota fi ragaalee kilabichaa bulchuuf.",
    adminLoginTitle: "Seensa Hojjettoota Kilabichaa",
    adminUsername: "Maqaa Fayyadamaa ykn Imeeyilii",
    adminPassword: "Jecha Darbii",
    adminLoginBtn: "Gara Keessaa Seeni",
    adminLogoutBtn: "Bahi",
    adminTabMembers: "Miseensota",
    adminTabNews: "Bulchiinsa Oduu",
    adminTabFixtures: "Taphawwan & Bu’aawwan",
    adminTabStandings: "Gulaallii Sadarkaa",
    adminTabSquad: "Garee & Hojjettoota",
    adminTabSettings: "Qindaa’ina Kilabichaa",
    demoNotice: "Haala Yaalii: Weebsaayitiin kun ammaan tana haala yaaliitiin dalagaa jira. Oduu gulaaluu, bu’aa taphaa haaromsuu fi miseensummaa mirkaneessuu dandeessu.",
    demoQuickLogin: "Seensa Yaalii Saffisaa",
    approveBtn: "Mirkaneessi",
    rejectBtn: "Kufaa Taasisi",
    statusApproved: "Mirkanaa’e",
    statusPending: "Eeggannoo Irra",
    statusRejected: "Kufaa Ta’e",
    exportCsv: "CSV Baasi",
    // Live Auto-Update
    liveAutoSyncActive: "Haromsa Kallattii Hojjechaa Jira",
    liveAutoSyncPaused: "Haromsa Dhaabbateera",
    nextSyncIn: "Haromsa Itti Aanu",
    syncingStatus: "Haromsaa jira...",
    syncNowBtn: "Amma Haromsi",
    simulateGoalBtn: "Goolii Kallattii Yaali",
    syncOfficialLeagueBtn: "Liigii Seeraa Haaromsi",
    updateFrequency: "Yeroo Haaromsaa",
    paused: "Dhaabbateera",
    autoSyncEngineDesc: "Mootara sagantaa taphaa fi shallaggii sadarkaa ofiin hojjetu",
    // Shop & Merchandise
    shopTitle: "Suuqii Seeraa Kilabichaa",
    shopSubtitle: "Halluuwwan Halaba City FC jeersiiwwan seeraa, meeshaalee deggartootaa fi uffata shaakalaa bitadhaa.",
    buyNowBtn: "Amma Biti",
    itemPrice: "Gatii",
    availableSizesLabel: "Hammoota Jiran",
    sizeGuide: "Hamma",
    selectSize: "Hamma Filadhaa",
    inStockLabel: "Gabaa irra Jira",
    outOfStockLabel: "Dhumateera",
    deliveryAddressLabel: "Teessoo Geessisaa",
    streetAddress: "Teessoo Daandii / Lakk. Manaa",
    city: "Magaalaa",
    subcityRegion: "Kutaa Magaalaa / Ganda / Naannoo",
    orderSummary: "Cuunfaa Ajajaa",
    checkoutTitle: "Ajaja Jeersii Xumuruu",
    checkoutSubtitle: "Odeeffannoo geessisaa galchuudhaan Chapa kaffaltii nagaa raawwadhaa.",
    proceedToPayment: "Chapa-n Kaffali",
    orderSuccessTitle: "Ajajni Keessan Milkaa’inaan Galmaa’eera!",
    orderSuccessMsg: "Ajajni seeraa Halaba City FC mirkanaa’eera. Dhihootti teessoo keessanitti isiniif ergama.",
    shopBadge: "Meeshaalee Seeraa Halaba City FC",
    perkAuthentic: "%100 Seera Qabeessa",
    perkDelivery: "Itoophiyaa Guutuu Qaqqabsiisa",
    perkPayment: "Kaffaltii Telebirr & CBE Saffisaa",
    manageStoreAdmin: "Suuqii Bulchiinsa Keessatti Gulaali",
    liveFirestoreSync: "Haromsa Firestore Kallattii",
    showing: "Mul’isaa jira",
    items: "meeshaalee",
    noMerchFound: "Meeshaan Hin Argamne",
    noMerchFoundDesc: "Meeshaan ramaddii kanaan walsimu hin argamne.",
    loadingInventory: "Meeshaalee fe’aa jira...",
    officialTag: "Seeraa 2026/27",
    shopCtaTitle: "Kilabicha Deeggaraa & Hir’ifama %15 Argadhaa",
    shopCtaDesc: "Miseensonni seeraa Halaba City FC hir’ifama addaa uffata taphaa irratti argatu.",
    donateNow: "Amma Gumaachaa",
    etbCurrency: "ETB",
    // Donations
    donateTitle: "Kilaba Halaba City FC Deeggaraa",
    donateSubtitle: "Imala Berberewochu Liigii Piriimeeraa, misooma dargaggootaa fi bu’uuraalee istaadiyeemii deeggaraa.",
    donateBtn: "Kilabichaaf Gumaachaa",
    heroDonateBtn: "Kilabicha Deeggaraa / Gumaachaa",
    selectDonationAmount: "Hamma Gumaachaa Filadhaa (ETB)",
    customAmountLabel: "Hamma Fedhii Keessanii (ETB)",
    enterAmountPlaceholder: "Hamma birrii galchaa...",
    donationPurposeLabel: "Kaayyoo Gumaachaa",
    purposeGeneral: "Deeggarsa Waliigalaa Kilabichaa",
    purposeAcademy: "Akaadaamii Dargaggootaa fi Meeshaalee",
    purposeStadium: "Istaadiyeemii fi Tajaajila Deggartootaa",
    donorNameLabel: "Maqaa Guutuu",
    donorPhoneLabel: "Lakk. Bilbilaa (Telebirr / CBE)",
    donorEmailLabel: "Imeelii (Filannoo)",
    donationSuccessTitle: "Gumaacha Keessaniif Galatoomaa!",
    donationSuccessMsg: "Deeggarsi keessan Halaba City FC fi hawaasa Berberewochuuf baay’ee barbaachisaadha.",
    // Footer
    footerRights: "Mirgi Qopheessaa Seeraan Eegameera. Weebsaayitii Seeraa HALABA City FC (Berberewochu).",
    footerMotto: "Diimaa fi Magariisa Bara Baraan • Jabina, Boona, Jaalala",
    quickLinks: "Liinkii Saffisaa",
    socialMedia: "Berberewochu Hordofaa",
    footerOfficeStadium: "Waajjira fi Istaadiyeemii Kilabichaa",
    footerAboutClub: "Kilaba kubbaa miilaa seeraa Halaba Qulitoo, Itoophiyaa Giddugaleessaa. Maqaa masoo Berberewochu (በርበሬዎቹ) jedhamuun beekama.",
    authorizedStaff: "Hojjettoota Hayyamameef",
    systemEnv: "Haala Sirnaa:",
    systemEnvDesc: "Sirni kun ragaalee saffisaan kuusuun kallattiin hojjeta.",
    openAdminDb: "Qindaa’ina Bulchiinsaa Bani →",
    officialTelegram: "Chaanalii Telegiraamii Seeraa",
    facebookPage: "Fuula Feesbuukii",
    youtubeHighlights: "Viidiyoo Taphoota Yuutuubii",
    halabaKulitoMotto: 'Halaba Qulitoo, Itoophiyaa Giddugaleessaa • "Berberewochu"'
  }
};
const defaultClubTemplates = {
  cbe_sa: {
    teamName: "Ethiopia Nigd Bank (CBE SA)",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png"
  },
  defence: {
    teamName: "Mechal (Defence Force)",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/5760g91790265354.png"
  },
  bahirdar: {
    teamName: "Bahir Dar Kenema",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png"
  },
  halaba: {
    teamName: "Halaba Ketema (በርበሬዎቹ)",
    isHalaba: true,
    badgeUrl: halabaLogoUrl
  },
  fasil: {
    teamName: "Fasil Kenema",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png"
  },
  insurance: {
    teamName: "Ethiopian Medhin (Insurance)",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png"
  },
  adama: {
    teamName: "Adama Kenema SC",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png"
  },
  shaggar: {
    teamName: "Shaggar City FC",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png"
  },
  electric: {
    teamName: "Ethio Electric",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png"
  },
  bunna: {
    teamName: "Ethiopian Coffee SC (Bunna)",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png"
  },
  welwalo: {
    teamName: "Welwalo Adigrat Univ.",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png"
  },
  wolaitta: {
    teamName: "Wolaitta Dicha",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/25m67g1790265481.png"
  },
  negelle: {
    teamName: "Negele Arsi FC",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
  },
  saintgeorge: {
    teamName: "Saint George SC (Kidus Giorgis)",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png"
  },
  hawassa: {
    teamName: "Hawassa Kenema SC",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png"
  },
  hosaena: {
    teamName: "Hadiya Hossana",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png"
  },
  sidama: {
    teamName: "Sidama Coffee SC",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png"
  },
  gamochencha: {
    teamName: "Gamo Chencha",
    isHalaba: false,
    badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png"
  }
};
function calculateStandingsFromMatches(matches, currentStandings = []) {
  const statsMap = /* @__PURE__ */ new Map();
  Object.entries(defaultClubTemplates).forEach(([id, meta]) => {
    const existing = currentStandings.find((s) => s.teamId === id);
    statsMap.set(id, {
      teamId: id,
      teamName: meta.teamName,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
      form: [],
      isHalaba: meta.isHalaba,
      badgeUrl: meta.badgeUrl || (existing == null ? void 0 : existing.badgeUrl)
    });
  });
  const finishedMatches = matches.filter((m) => m.status === "FINISHED" && m.score !== void 0).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  finishedMatches.forEach((m) => {
    const homeId = normalizeEplTeamId(m.homeTeam.id, m.homeTeam.name);
    const awayId = normalizeEplTeamId(m.awayTeam.id, m.awayTeam.name);
    if (!statsMap.has(homeId)) {
      statsMap.set(homeId, {
        teamId: homeId,
        teamName: m.homeTeam.name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        form: [],
        isHalaba: homeId === "halaba" || m.homeTeam.isHalaba,
        badgeUrl: m.homeTeam.logo
      });
    }
    if (!statsMap.has(awayId)) {
      statsMap.set(awayId, {
        teamId: awayId,
        teamName: m.awayTeam.name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        form: [],
        isHalaba: awayId === "halaba" || m.awayTeam.isHalaba,
        badgeUrl: m.awayTeam.logo
      });
    }
    const homeStats = statsMap.get(homeId);
    const awayStats = statsMap.get(awayId);
    const homeGoals = Number(m.score.home) || 0;
    const awayGoals = Number(m.score.away) || 0;
    homeStats.played += 1;
    awayStats.played += 1;
    homeStats.goalsFor += homeGoals;
    homeStats.goalsAgainst += awayGoals;
    awayStats.goalsFor += awayGoals;
    awayStats.goalsAgainst += homeGoals;
    if (homeGoals > awayGoals) {
      homeStats.won += 1;
      homeStats.points += 3;
      homeStats.form.push("W");
      awayStats.lost += 1;
      awayStats.form.push("L");
    } else if (homeGoals < awayGoals) {
      awayStats.won += 1;
      awayStats.points += 3;
      awayStats.form.push("W");
      homeStats.lost += 1;
      homeStats.form.push("L");
    } else {
      homeStats.drawn += 1;
      homeStats.points += 1;
      homeStats.form.push("D");
      awayStats.drawn += 1;
      awayStats.points += 1;
      awayStats.form.push("D");
    }
  });
  const standingsList = Array.from(statsMap.values()).map((s) => ({
    position: 1,
    teamId: s.teamId,
    teamName: s.teamName,
    played: s.played,
    won: s.won,
    drawn: s.drawn,
    lost: s.lost,
    goalsFor: s.goalsFor,
    goalsAgainst: s.goalsAgainst,
    goalDifference: s.goalsFor - s.goalsAgainst,
    points: s.points,
    form: s.form.length > 0 ? s.form.slice(-5) : ["D", "W", "D"],
    isHalaba: s.isHalaba,
    badgeUrl: s.badgeUrl
  }));
  standingsList.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return a.teamName.localeCompare(b.teamName);
  });
  return standingsList.map((item, idx) => ({
    ...item,
    position: idx + 1
  }));
}
const DB_NAME = "halaba_fc_offline_cache";
const DB_VERSION = 1;
const STORE_NAME = "news_cache";
function getDb() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject(new Error("IndexedDB not supported in this environment"));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db2 = request.result;
      if (!db2.objectStoreNames.contains(STORE_NAME)) {
        db2.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function getIdbItem(key) {
  try {
    const db2 = await getDb();
    return new Promise((resolve) => {
      const tx = db2.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        var _a;
        return resolve((_a = req.result) != null ? _a : null);
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}
async function setIdbItem(key, value) {
  try {
    const db2 = await getDb();
    return new Promise((resolve) => {
      const tx = db2.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch (e) {
  }
}
function createThumbnail(dataUrl, maxWidth = 360, quality = 0.55) {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !dataUrl || !dataUrl.startsWith("data:")) {
      resolve(dataUrl || "");
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const scale = Math.min(1, maxWidth / (img.width || maxWidth));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round((img.width || maxWidth) * scale));
        canvas.height = Math.max(1, Math.round((img.height || maxWidth * 0.56) * scale));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      } catch (e) {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}
const ClubContext = reactExports.createContext(void 0);
try {
  if (typeof window !== "undefined") {
    localStorage.removeItem("halaba_official_epl_standings_v7_canonical");
    localStorage.removeItem("halaba_official_epl_standings_v3");
    localStorage.removeItem("halaba_official_epl_standings_v2");
    localStorage.removeItem("halaba_official_epl_standings");
    localStorage.removeItem("halaba_standings_epl_2026_27");
    localStorage.removeItem("halaba_standings_sportsdb_v2");
    localStorage.removeItem("hcfc_firestore_standings_seeded");
    localStorage.removeItem("hcfc_firestore_standings_seeded_v2");
    localStorage.removeItem("hcfc_firestore_standings_seeded_v3");
  }
} catch (e) {
}
const normalizeEplTeamId = (rawId, rawName) => {
  const str = "".concat(rawId || "", " ").concat(rawName || "").toLowerCase();
  if (str.includes("halaba")) return "halaba";
  if (str.includes("cbe") || str.includes("nigd") || rawId === "149377") return "cbe_sa";
  if (str.includes("medhin") || str.includes("insurance") || rawId === "146921") return "insurance";
  if (str.includes("adama") || rawId === "141024") return "adama";
  if (str.includes("electric") || rawId === "146920") return "electric";
  if (str.includes("fasil") || rawId === "141026") return "fasil";
  if (str.includes("bahir") || rawId === "141025") return "bahirdar";
  if (str.includes("bunna") || str.includes("coffee") && !str.includes("sidama")) return "bunna";
  if (str.includes("george") || str.includes("giorgis")) return "saintgeorge";
  if (str.includes("defence") || str.includes("mekelakeya") || str.includes("mechal") || rawId === "143767") return "defence";
  if (str.includes("welwalo")) return "welwalo";
  if (str.includes("dicha") || str.includes("wolaitta")) return "wolaitta";
  if (str.includes("hosaena") || str.includes("hossana")) return "hosaena";
  if (str.includes("diredawa") || str.includes("dire dawa")) return "diredawa";
  if (str.includes("chencha") || str.includes("gamo")) return "gamochencha";
  if (str.includes("sidama")) return "sidama";
  if (str.includes("hawassa")) return "hawassa";
  if (str.includes("shaggar") || str.includes("sheger")) return "shaggar";
  if (str.includes("negelle") || str.includes("negele")) return "negelle";
  return (rawId || "").replace(/[^a-z0-9]/g, "") || "unknown";
};
const STORAGE_KEYS = {
  LANG: "halaba_lang",
  CLUB: "halaba_club_info_epl_26_27",
  MATCHES: "halaba_matches_epl_2026_27_v18",
  STANDINGS: "halaba_official_epl_standings_v12_real_table",
  NEWS: "halaba_news_epl_2026_27",
  PLAYERS: "halaba_players",
  STAFF: "halaba_staff",
  MEMBERSHIPS: "halaba_memberships",
  SHOP_ITEMS: "halaba_shop_items_2026",
  SHOP_ORDERS: "halaba_shop_orders_2026",
  DONATIONS: "halaba_donations_2026",
  ADMIN_AUTH: "halaba_admin_auth",
  SPONSORS: "halaba_sponsors_v2"
};
const ClubProvider = ({ children }) => {
  const [language, setLanguageState] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    if (saved === "en" || saved === "am" || saved === "om") return saved;
    return "en";
  });
  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  };
  const t = translations[language];
  const [isOnline, setIsOnline] = reactExports.useState(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  });
  reactExports.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.info("[ClubContext] Network online: background sync active");
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.info("[ClubContext] Network offline: seamlessly serving cached data");
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const getInitialPage = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
      const validPages = ["home", "fixtures", "standings", "news", "membership", "shop", "about", "contact", "admin"];
      if (validPages.includes(hash)) return hash;
    }
    return "home";
  };
  const [currentPage, setCurrentPageState] = reactExports.useState(getInitialPage);
  const [selectedArticleId, setSelectedArticleId] = reactExports.useState(null);
  const [selectedMatchId, setSelectedMatchId] = reactExports.useState(null);
  const setCurrentPage = (page) => {
    setCurrentPageState(page);
    if (typeof window !== "undefined") {
      if (page === "home") {
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      } else {
        window.location.hash = page;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  reactExports.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
      const validPages = ["home", "fixtures", "standings", "news", "membership", "shop", "about", "contact", "admin"];
      if (validPages.includes(hash)) {
        setCurrentPageState(hash);
      } else if (!hash) {
        setCurrentPageState("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const [clubInfo, setClubInfo] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CLUB);
    return saved ? JSON.parse(saved) : initialClubInfo;
  });
  const updateClubInfo = (info) => {
    setClubInfo(info);
    localStorage.setItem(STORAGE_KEYS.CLUB, JSON.stringify(info));
  };
  const [matches, setMatches] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MATCHES);
    if (!saved) return initialMatches;
    try {
      const parsed = JSON.parse(saved);
      const hasHalaba = parsed.some(
        (m) => {
          var _a, _b, _c, _d, _e, _f;
          return ((_a = m.homeTeam) == null ? void 0 : _a.isHalaba) || ((_b = m.awayTeam) == null ? void 0 : _b.isHalaba) || ((_d = (_c = m.homeTeam) == null ? void 0 : _c.name) == null ? void 0 : _d.toLowerCase().includes("halaba")) || ((_f = (_e = m.awayTeam) == null ? void 0 : _e.name) == null ? void 0 : _f.toLowerCase().includes("halaba"));
        }
      );
      if (!hasHalaba) {
        return initialMatches;
      }
      return parsed;
    } catch (e) {
      return initialMatches;
    }
  });
  reactExports.useEffect(() => {
    const matchesRef = collection(db, "matches");
    const unsubscribe = onSnapshot(matchesRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem("hcfc_firestore_matches_seeded");
        if (!seeded) {
          try {
            for (const m of initialMatches) {
              await setDoc(doc(db, "matches", m.id), { ...m, updatedAt: serverTimestamp() });
            }
            localStorage.setItem("hcfc_firestore_matches_seeded", "true");
          } catch (err) {
            console.warn("Could not seed matches:", err);
          }
        }
        return;
      }
      const liveMatches = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          competition: data.competition || "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: data.competitionName || "Ethiopian Premier League",
          date: data.date || "",
          kickoffTime: data.kickoffTime || "15:00",
          venue: data.venue || "Halaba Stadium",
          homeTeam: data.homeTeam || { id: "halaba", name: "Halaba Ketema", isHalaba: true },
          awayTeam: data.awayTeam || { id: "away", name: "Away Team", isHalaba: false },
          status: data.status || "UPCOMING",
          score: data.score,
          halftimeScore: data.halftimeScore,
          round: data.round,
          attendance: data.attendance,
          referee: data.referee,
          scorers: data.scorers,
          summary: data.summary || "",
          liveMinute: data.liveMinute,
          livePeriod: data.livePeriod,
          liveEvents: data.liveEvents
        };
      });
      initialMatches.forEach((initM) => {
        if (!liveMatches.some((m) => m.id === initM.id)) {
          liveMatches.push({ ...initM });
        }
      });
      if (liveMatches.length > 0) {
        const halabaPriority = ["m-epl-rd3", "m-epl-rd4", "m-epl-rd5", "m-epl-rd2", "m-epl-rd1"];
        liveMatches.sort((a, b) => {
          const aIdx = halabaPriority.indexOf(a.id);
          const bIdx = halabaPriority.indexOf(b.id);
          if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
          if (aIdx !== -1) return -1;
          if (bIdx !== -1) return 1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setMatches(liveMatches);
        try {
          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(liveMatches));
        } catch (e) {
          console.warn("LocalStorage error caching matches:", e);
        }
        localStorage.setItem("hcfc_firestore_matches_seeded", "true");
        const autoComputed = calculateStandingsFromMatches(liveMatches, initialStandings);
        setStandings((prev) => {
          const hasLaggingTeam = prev.some((t2) => t2.played < 3);
          if (hasLaggingTeam) {
            localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(autoComputed));
            return autoComputed;
          }
          return prev;
        });
      }
    }, (error) => {
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        return;
      }
      console.warn("Firebase real-time matches note (serving cache):", error);
      handleFirestoreError(error, OperationType.LIST, "matches");
    });
    return () => unsubscribe();
  }, []);
  const addMatch = async (matchData) => {
    const matchId = "match-".concat(Date.now());
    const newMatch = {
      ...matchData,
      id: matchId
    };
    const updated = [newMatch, ...matches];
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    const updatedStandings = calculateStandingsFromMatches(updated, standings);
    setStandings(updatedStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
    try {
      await setDoc(doc(db, "matches", matchId), {
        ...newMatch,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      for (const st of updatedStandings) {
        await setDoc(doc(db, "standings", st.teamId), { ...st, updatedAt: serverTimestamp() }, { merge: true });
      }
    } catch (error) {
      console.error("Firestore add match error:", error);
      handleFirestoreError(error, OperationType.CREATE, "matches/".concat(matchId));
    }
  };
  const updateMatch = async (id, updates) => {
    const updated = matches.map((m) => m.id === id ? { ...m, ...updates } : m);
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    const updatedStandings = calculateStandingsFromMatches(updated, standings);
    setStandings(updatedStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
    try {
      const cleanUpdates = {};
      for (const [key, value] of Object.entries(updates)) {
        if (value !== void 0) {
          cleanUpdates[key] = value;
        }
      }
      await setDoc(doc(db, "matches", id), {
        ...cleanUpdates,
        updatedAt: serverTimestamp()
      }, { merge: true });
      for (const st of updatedStandings) {
        await setDoc(doc(db, "standings", st.teamId), { ...st, updatedAt: serverTimestamp() }, { merge: true });
      }
    } catch (error) {
      console.error("Firestore update match error:", error);
      handleFirestoreError(error, OperationType.UPDATE, "matches/".concat(id));
    }
  };
  const deleteMatch = async (id) => {
    const updated = matches.filter((m) => m.id !== id);
    setMatches(updated);
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
    const updatedStandings = calculateStandingsFromMatches(updated, standings);
    setStandings(updatedStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
    try {
      await deleteDoc(doc(db, "matches", id));
    } catch (error) {
      console.error("Firestore delete match error:", error);
      handleFirestoreError(error, OperationType.DELETE, "matches/".concat(id));
    }
  };
  const [standings, setStandings] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STANDINGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 18) {
          const hasHalaba = parsed.some((t2) => t2.isHalaba || t2.teamId === "halaba");
          const hasCbe = parsed.some((t2) => t2.teamId === "cbe_sa");
          if (hasHalaba && hasCbe) {
            return parsed;
          }
        }
      }
    } catch (e) {
    }
    return initialStandings;
  });
  reactExports.useEffect(() => {
    const standingsRef = collection(db, "standings");
    const unsubscribe = onSnapshot(standingsRef, async (snapshot) => {
      const canonicalMap = /* @__PURE__ */ new Map();
      snapshot.docs.forEach((docSnap) => {
        const data = docSnap.data();
        const canonicalId = normalizeEplTeamId(docSnap.id, data.teamName || data.teamId);
        if (docSnap.id !== canonicalId) {
          deleteDoc(doc(db, "standings", docSnap.id)).catch(() => {
          });
        }
        const teamItem = {
          position: data.position || 1,
          teamId: canonicalId,
          teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : canonicalId === "shaggar" ? "Shaggar City FC" : canonicalId === "negelle" ? "Negele Arsi FC" : canonicalId === "hawassa" ? "Hawassa Kenema SC" : data.teamName || "Team",
          played: Number(data.played) || 0,
          won: Number(data.won) || 0,
          drawn: Number(data.drawn) || 0,
          lost: Number(data.lost) || 0,
          goalsFor: Number(data.goalsFor) || 0,
          goalsAgainst: Number(data.goalsAgainst) || 0,
          goalDifference: (Number(data.goalsFor) || 0) - (Number(data.goalsAgainst) || 0),
          points: Number(data.points) || 0,
          form: Array.isArray(data.form) && data.form.length > 0 ? data.form : ["D", "W", "D"],
          isHalaba: canonicalId === "halaba",
          badgeUrl: data.badgeUrl || void 0
        };
        if (!canonicalMap.has(canonicalId)) {
          canonicalMap.set(canonicalId, teamItem);
        }
      });
      initialStandings.forEach((initT) => {
        if (!canonicalMap.has(initT.teamId)) {
          canonicalMap.set(initT.teamId, { ...initT });
        }
      });
      const list = Array.from(canonicalMap.values());
      list.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
      const reordered = list.map((t2, idx) => ({ ...t2, position: idx + 1 }));
      if (reordered.length >= 18) {
        setStandings(reordered);
        localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
      }
    }, (error) => {
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        return;
      }
      console.warn("Firebase real-time standings note:", error);
    });
    return () => unsubscribe();
  }, []);
  const updateStanding = async (teamId, updates) => {
    const updated = standings.map((item) => {
      if (item.teamId === teamId) {
        const next = { ...item, ...updates };
        next.goalDifference = next.goalsFor - next.goalsAgainst;
        return next;
      }
      return item;
    });
    updated.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
    const reordered = updated.map((t2, idx) => ({ ...t2, position: idx + 1 }));
    setStandings(reordered);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
    try {
      const targetTeam = reordered.find((t2) => t2.teamId === teamId);
      if (targetTeam) {
        await setDoc(doc(db, "standings", teamId), {
          ...targetTeam,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
    } catch (error) {
      console.error("Firestore update standing error:", error);
      handleFirestoreError(error, OperationType.UPDATE, "standings/".concat(teamId));
    }
  };
  const resetStandings = async () => {
    localStorage.removeItem(STORAGE_KEYS.STANDINGS);
    setStandings(initialStandings);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(initialStandings));
    try {
      for (const item of initialStandings) {
        await setDoc(doc(db, "standings", item.teamId), {
          ...item,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
    } catch (error) {
      console.error("Firestore reset standings error:", error);
    }
  };
  const recalculateStandingsFromMatches = async () => {
    const computed = calculateStandingsFromMatches(matches, standings);
    setStandings(computed);
    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(computed));
    try {
      for (const item of computed) {
        await setDoc(doc(db, "standings", item.teamId), {
          ...item,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
    } catch (error) {
      console.warn("Firestore recalculate standings warning:", error);
    }
  };
  reactExports.useEffect(() => {
    if (matches.length > 0) {
      localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(matches));
    }
  }, [matches]);
  const getCategoryFallbackImage = (category) => {
    switch (category) {
      case "MATCH_REPORTS":
        return ClubImages.newsBahirDarWin;
      case "INTERVIEWS":
        return ClubImages.newsCoachInterview;
      case "ACADEMY":
        return ClubImages.academyTraining;
      case "TRANSFERS":
        return ClubImages.squadLineup;
      case "CLUB_NEWS":
      case "COMMUNITY":
      default:
        return ClubImages.heroStadium;
    }
  };
  const [news, setNews] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const initialMatch = initialNews.find((n) => n.id === item.id);
            return {
              ...item,
              imageUrl: item.imageUrl || (initialMatch == null ? void 0 : initialMatch.imageUrl) || getCategoryFallbackImage(item.category)
            };
          });
        }
      }
    } catch (e) {
    }
    return initialNews;
  });
  reactExports.useEffect(() => {
    getIdbItem("halaba_news_full_cache_v2").then((cached) => {
      if (cached && Array.isArray(cached) && cached.length > 0) {
        setNews((currentNews) => {
          const currentMap = new Map(currentNews.map((n) => [n.id, n]));
          let hasChanges = false;
          const merged = cached.map((c) => {
            const live = currentMap.get(c.id);
            if (!live) {
              hasChanges = true;
              return c;
            }
            if (!live.imageUrl || live.imageUrl.length < 5e3 && c.imageUrl && c.imageUrl.length > 5e3) {
              hasChanges = true;
              return { ...live, imageUrl: c.imageUrl };
            }
            return live;
          });
          currentNews.forEach((n) => {
            if (!merged.some((m) => m.id === n.id)) {
              merged.unshift(n);
              hasChanges = true;
            }
          });
          return hasChanges ? merged : currentNews;
        });
      }
    }).catch(() => {
    });
  }, []);
  reactExports.useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        return;
      }
      const liveArticles = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        const initialMatch = initialNews.find((n) => n.id === docSnap.id);
        const resolvedImage = data.imageUrl || (initialMatch == null ? void 0 : initialMatch.imageUrl) || getCategoryFallbackImage(data.category);
        return {
          id: docSnap.id,
          title: typeof data.title === "object" && data.title !== null ? { en: data.title.en || "", am: data.title.am || data.title.en || "", om: data.title.om || data.title.en || "" } : initialMatch ? initialMatch.title : { en: String(data.title || ""), am: String(data.title || ""), om: String(data.title || "") },
          summary: typeof data.summary === "object" && data.summary !== null ? { en: data.summary.en || "", am: data.summary.am || data.summary.en || "", om: data.summary.om || data.summary.en || "" } : initialMatch ? initialMatch.summary : { en: String(data.summary || ""), am: String(data.summary || ""), om: String(data.summary || "") },
          content: typeof data.content === "object" && data.content !== null ? { en: data.content.en || "", am: data.content.am || data.content.en || "", om: data.content.om || data.content.en || "" } : initialMatch ? initialMatch.content : { en: String(data.content || ""), am: String(data.content || ""), om: String(data.content || "") },
          category: data.category || (initialMatch == null ? void 0 : initialMatch.category) || "CLUB_NEWS",
          date: data.date || (initialMatch == null ? void 0 : initialMatch.date) || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          author: data.author || (initialMatch == null ? void 0 : initialMatch.author) || "Club Administration",
          imageUrl: resolvedImage,
          readTime: data.readTime || (initialMatch == null ? void 0 : initialMatch.readTime) || "3 min read",
          isFeatured: docSnap.id === "news-1793126013273" || docSnap.id === "sxRTmExguBl4NTz4RYjR" || Boolean(data.isFeatured || (initialMatch == null ? void 0 : initialMatch.isFeatured))
        };
      });
      initialNews.forEach((initArt) => {
        if (!liveArticles.some((a) => a.id === initArt.id)) {
          liveArticles.push({ ...initArt });
        }
      });
      if (liveArticles.length > 0) {
        setNews(liveArticles);
        setIdbItem("halaba_news_full_cache_v2", liveArticles);
        Promise.all(
          liveArticles.map(async (art) => {
            if (art.imageUrl && art.imageUrl.startsWith("data:")) {
              try {
                const thumb = await createThumbnail(art.imageUrl, 360, 0.55);
                return { ...art, imageUrl: thumb };
              } catch (e) {
                return art;
              }
            }
            return art;
          })
        ).then((thumbnailArticles) => {
          try {
            localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(thumbnailArticles));
          } catch (e) {
            console.warn("Could not cache news thumbnails in localStorage:", e);
          }
        }).catch(() => {
        });
      }
    }, (error) => {
      console.error("Firebase real-time news error:", error);
      handleFirestoreError(error, OperationType.LIST, "news");
    });
    return () => unsubscribe();
  }, []);
  const addNewsArticle = async (art) => {
    const newId = "news-".concat(Date.now());
    const newArticle = {
      ...art,
      id: newId,
      imageUrl: art.imageUrl || getCategoryFallbackImage(art.category)
    };
    const updated = [newArticle, ...news];
    setNews(updated);
    setIdbItem("halaba_news_full_cache_v2", updated);
    createThumbnail(newArticle.imageUrl || "", 360, 0.55).then((thumb) => {
      try {
        const cached = updated.map((a) => a.id === newId ? { ...a, imageUrl: thumb } : a);
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(cached));
      } catch (e) {
      }
    });
    try {
      await setDoc(doc(db, "news", newId), {
        ...art,
        createdAt: serverTimestamp()
      });
    } catch (e) {
      console.warn("Could not sync added article to Firestore:", e);
    }
  };
  const updateNewsArticle = async (id, updates) => {
    const updated = news.map((n) => n.id === id ? { ...n, ...updates } : n);
    setNews(updated);
    setIdbItem("halaba_news_full_cache_v2", updated);
    try {
      await setDoc(doc(db, "news", id), {
        ...updates,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (e) {
      console.warn("Could not sync updated article to Firestore:", e);
    }
  };
  const deleteNewsArticle = async (id) => {
    try {
      await deleteDoc(doc(db, "news", id));
    } catch (error) {
      console.warn("Could not delete news article from Firebase Cloud:", error);
    }
    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    setIdbItem("halaba_news_full_cache_v2", updated);
    try {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
    } catch (e) {
    }
  };
  const [players, setPlayers] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
    return saved ? JSON.parse(saved) : initialPlayers;
  });
  const [staff, setStaff] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STAFF);
    return saved ? JSON.parse(saved) : initialStaff;
  });
  reactExports.useEffect(() => {
    const playersRef = collection(db, "players");
    const unsubscribe = onSnapshot(playersRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem("hcfc_firestore_players_seeded");
        if (!seeded) {
          try {
            for (const p of initialPlayers) {
              await setDoc(doc(db, "players", p.id), { ...p, updatedAt: serverTimestamp() });
            }
            localStorage.setItem("hcfc_firestore_players_seeded", "true");
          } catch (err) {
            console.warn("Could not seed players:", err);
          }
        }
        return;
      }
      const livePlayers = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          number: data.number || 10,
          name: data.name || "Player",
          position: data.position || "Midfielder",
          nationality: data.nationality || "Ethiopian",
          birthYear: data.birthYear || 2e3,
          appearances: data.appearances || 0,
          goals: data.goals || 0,
          assists: data.assists || 0,
          cleanSheets: data.cleanSheets || 0,
          isCaptain: Boolean(data.isCaptain),
          photoUrl: data.photoUrl
        };
      });
      if (livePlayers.length > 0) {
        setPlayers(livePlayers);
        localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(livePlayers));
        localStorage.setItem("hcfc_firestore_players_seeded", "true");
      }
    }, (error) => {
      console.error("Firebase real-time players error:", error);
      handleFirestoreError(error, OperationType.LIST, "players");
    });
    return () => unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    const staffRef = collection(db, "staff");
    const unsubscribe = onSnapshot(staffRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem("hcfc_firestore_staff_seeded");
        if (!seeded) {
          try {
            for (const s of initialStaff) {
              await setDoc(doc(db, "staff", s.id), { ...s, updatedAt: serverTimestamp() });
            }
            localStorage.setItem("hcfc_firestore_staff_seeded", "true");
          } catch (err) {
            console.warn("Could not seed staff:", err);
          }
        }
        return;
      }
      const liveStaff = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          name: data.name || "Staff",
          role: data.role || "Coach",
          department: data.department || "Coaching",
          nationality: data.nationality || "Ethiopian",
          photoUrl: data.photoUrl
        };
      });
      if (liveStaff.length > 0) {
        setStaff(liveStaff);
        localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(liveStaff));
        localStorage.setItem("hcfc_firestore_staff_seeded", "true");
      }
    }, (error) => {
      console.error("Firebase real-time staff error:", error);
      handleFirestoreError(error, OperationType.LIST, "staff");
    });
    return () => unsubscribe();
  }, []);
  const addPlayer = async (p) => {
    const id = "p-".concat(Date.now());
    const newP = { ...p, id };
    const updated = [...players, newP];
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "players", id), { ...newP, updatedAt: serverTimestamp() });
    } catch (error) {
      console.error("Firestore add player error:", error);
      handleFirestoreError(error, OperationType.CREATE, "players/".concat(id));
    }
  };
  const updatePlayer = async (id, updates) => {
    const updated = players.map((p) => p.id === id ? { ...p, ...updates } : p);
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "players", id), { ...updates, updatedAt: serverTimestamp() }, { merge: true });
    } catch (error) {
      console.error("Firestore update player error:", error);
      handleFirestoreError(error, OperationType.UPDATE, "players/".concat(id));
    }
  };
  const deletePlayer = async (id) => {
    const updated = players.filter((p) => p.id !== id);
    setPlayers(updated);
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, "players", id));
    } catch (error) {
      console.error("Firestore delete player error:", error);
      handleFirestoreError(error, OperationType.DELETE, "players/".concat(id));
    }
  };
  const addStaff = async (s) => {
    const id = "s-".concat(Date.now());
    const newS = { ...s, id };
    const updated = [...staff, newS];
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "staff", id), { ...newS, updatedAt: serverTimestamp() });
    } catch (error) {
      console.error("Firestore add staff error:", error);
      handleFirestoreError(error, OperationType.CREATE, "staff/".concat(id));
    }
  };
  const updateStaff = async (id, updates) => {
    const updated = staff.map((s) => s.id === id ? { ...s, ...updates } : s);
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "staff", id), { ...updates, updatedAt: serverTimestamp() }, { merge: true });
    } catch (error) {
      console.error("Firestore update staff error:", error);
      handleFirestoreError(error, OperationType.UPDATE, "staff/".concat(id));
    }
  };
  const deleteStaff = async (id) => {
    const updated = staff.filter((s) => s.id !== id);
    setStaff(updated);
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, "staff", id));
    } catch (error) {
      console.error("Firestore delete staff error:", error);
      handleFirestoreError(error, OperationType.DELETE, "staff/".concat(id));
    }
  };
  const [memberships, setMemberships] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MEMBERSHIPS);
    return saved ? JSON.parse(saved) : initialMemberships;
  });
  reactExports.useEffect(() => {
    const membershipsRef = collection(db, "memberships");
    const unsubscribe = onSnapshot(membershipsRef, async (snapshot) => {
      if (snapshot.empty) {
        const seeded = localStorage.getItem("hcfc_firestore_memberships_seeded");
        if (!seeded) {
          try {
            for (const m of initialMemberships) {
              await setDoc(doc(db, "memberships", m.id), { ...m, updatedAt: serverTimestamp() });
            }
            localStorage.setItem("hcfc_firestore_memberships_seeded", "true");
          } catch (err) {
            console.warn("Could not seed memberships:", err);
          }
        }
        return;
      }
      const liveMemberships = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          referenceNumber: data.referenceNumber || "HCFC-M1234",
          fullName: data.fullName || "Supporter",
          dateOfBirth: data.dateOfBirth || "2000-01-01",
          gender: data.gender,
          phone: data.phone || "",
          email: data.email,
          cityOrRegion: data.cityOrRegion || "Halaba",
          membershipType: data.membershipType || "STANDARD",
          preferredLanguage: data.preferredLanguage || "en",
          registeredAt: data.registeredAt || (/* @__PURE__ */ new Date()).toISOString(),
          status: data.status || "APPROVED",
          amountPaid: data.amountPaid,
          tx_ref: data.tx_ref,
          paymentStatus: data.paymentStatus,
          paymentDate: data.paymentDate,
          notes: data.notes
        };
      });
      if (liveMemberships.length > 0) {
        setMemberships(liveMemberships);
        localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(liveMemberships));
        localStorage.setItem("hcfc_firestore_memberships_seeded", "true");
      }
    }, (error) => {
      console.error("Firebase real-time memberships error:", error);
      handleFirestoreError(error, OperationType.LIST, "memberships");
    });
    return () => unsubscribe();
  }, []);
  const submitMembership = async (data) => {
    var _a;
    const randNum = Math.floor(1e3 + Math.random() * 9e3);
    const referenceNumber = "HCFC-2026-M".concat(randNum);
    const id = "mem-".concat(Date.now());
    const newApplication = {
      id,
      referenceNumber,
      fullName: data.fullName.trim(),
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      phone: data.phone.trim(),
      email: ((_a = data.email) == null ? void 0 : _a.trim()) || void 0,
      cityOrRegion: data.cityOrRegion.trim(),
      membershipType: data.membershipType,
      preferredLanguage: data.preferredLanguage,
      registeredAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "APPROVED",
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: "PAID",
      paymentDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    await new Promise((resolve) => setTimeout(resolve, 400));
    const updated = [newApplication, ...memberships];
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "memberships", id), {
        ...newApplication,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Firestore submit membership error:", error);
      handleFirestoreError(error, OperationType.CREATE, "memberships/".concat(id));
    }
    return { success: true, referenceNumber };
  };
  const recordVerifiedMembership = async (data) => {
    var _a;
    const id = "mem-".concat(Date.now());
    const newApplication = {
      id,
      referenceNumber: data.referenceNumber,
      fullName: data.fullName.trim(),
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      phone: data.phone.trim(),
      email: ((_a = data.email) == null ? void 0 : _a.trim()) || void 0,
      cityOrRegion: data.cityOrRegion.trim(),
      membershipType: data.membershipType,
      preferredLanguage: data.preferredLanguage,
      registeredAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "APPROVED",
      amountPaid: data.amountPaid,
      tx_ref: data.tx_ref,
      paymentStatus: "PAID",
      paymentDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    const updated = [newApplication, ...memberships.filter((m) => m.referenceNumber !== data.referenceNumber && m.tx_ref !== data.tx_ref)];
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "memberships", id), {
        ...newApplication,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Firestore record verified membership error:", error);
      handleFirestoreError(error, OperationType.CREATE, "memberships/".concat(id));
    }
    return newApplication;
  };
  const updateMembershipStatus = async (id, status) => {
    const updated = memberships.map((m) => m.id === id ? { ...m, status } : m);
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await setDoc(doc(db, "memberships", id), {
        status,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      console.error("Firestore update membership status error:", error);
      handleFirestoreError(error, OperationType.UPDATE, "memberships/".concat(id));
    }
  };
  const deleteMembership = async (id) => {
    const updated = memberships.filter((m) => m.id !== id);
    setMemberships(updated);
    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
    try {
      await deleteDoc(doc(db, "memberships", id));
    } catch (error) {
      console.error("Firestore delete membership error:", error);
      handleFirestoreError(error, OperationType.DELETE, "memberships/".concat(id));
    }
  };
  const [shopItems, setShopItems] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SHOP_ITEMS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const initialMatch = initialShopItems.find((i) => i.id === item.id);
            return {
              ...item,
              imageUrl: item.imageUrl || (initialMatch == null ? void 0 : initialMatch.imageUrl) || ClubImages.jerseyHomeReal
            };
          });
        }
      }
    } catch (e) {
    }
    return initialShopItems;
  });
  const [isProductsLoading, setIsProductsLoading] = reactExports.useState(false);
  const [productsSyncError, setProductsSyncError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const productsRef = collection(db, "products");
    const unsubscribe = onSnapshot(productsRef, async (snapshot) => {
      setIsProductsLoading(false);
      setProductsSyncError(null);
      if (snapshot.empty) {
        const hasSeeded = localStorage.getItem("hcfc_firestore_products_seeded");
        if (!hasSeeded) {
          try {
            for (const item of initialShopItems) {
              await setDoc(doc(db, "products", item.id), {
                name: item.name,
                description: item.description,
                price: item.price,
                imageUrl: item.imageUrl,
                availableSizes: item.availableSizes,
                category: item.category || "JERSEY",
                inStock: item.inStock !== void 0 ? item.inStock : true,
                featured: item.featured !== void 0 ? item.featured : false,
                createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                updatedAt: (/* @__PURE__ */ new Date()).toISOString()
              });
            }
            localStorage.setItem("hcfc_firestore_products_seeded", "true");
          } catch (seedErr) {
            console.warn("Could not auto-seed default products to Firestore:", seedErr);
          }
        } else {
          setShopItems(initialShopItems);
          localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
        }
        return;
      }
      const liveProducts = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        const initialMatch = initialShopItems.find((i) => i.id === docSnap.id);
        const resolvedImage = (initialMatch == null ? void 0 : initialMatch.imageUrl) || data.imageUrl || ClubImages.jerseyHomeReal;
        return {
          id: docSnap.id,
          name: typeof data.name === "object" && data.name !== null ? { en: data.name.en || "", am: data.name.am || data.name.en || "", om: data.name.om || data.name.en || "" } : initialMatch ? initialMatch.name : { en: String(data.name || ""), am: String(data.name || ""), om: String(data.name || "") },
          description: typeof data.description === "object" && data.description !== null ? { en: data.description.en || "", am: data.description.am || data.description.en || "", om: data.description.om || data.description.en || "" } : initialMatch ? initialMatch.description : { en: String(data.description || ""), am: String(data.description || ""), om: String(data.description || "") },
          price: typeof data.price === "number" ? data.price : initialMatch ? initialMatch.price : parseFloat(data.price) || 0,
          imageUrl: resolvedImage,
          availableSizes: Array.isArray(data.availableSizes) && data.availableSizes.length > 0 ? data.availableSizes : initialMatch ? initialMatch.availableSizes : ["S", "M", "L", "XL"],
          category: data.category || (initialMatch ? initialMatch.category : "JERSEY"),
          inStock: data.inStock !== void 0 ? Boolean(data.inStock) : true,
          featured: Boolean(data.featured) || (initialMatch ? initialMatch.featured : false)
        };
      });
      initialShopItems.forEach((initItem) => {
        if (!liveProducts.some((p) => p.id === initItem.id)) {
          liveProducts.push({ ...initItem });
        }
      });
      liveProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      setShopItems(liveProducts);
      try {
        const cacheSafeProds = liveProducts.map((p) => {
          var _a;
          return {
            ...p,
            imageUrl: ((_a = p.imageUrl) == null ? void 0 : _a.startsWith("data:")) ? "" : p.imageUrl
          };
        });
        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(cacheSafeProds));
      } catch (e) {
        console.warn("Could not cache shop items in localStorage:", e);
      }
      localStorage.setItem("hcfc_firestore_products_seeded", "true");
    }, (error) => {
      console.error("Firebase real-time products sync error:", error);
      setProductsSyncError(error.message);
      handleFirestoreError(error, OperationType.LIST, "products");
    });
    return () => unsubscribe();
  }, []);
  const addShopItem = async (item) => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        availableSizes: item.availableSizes,
        category: item.category || "JERSEY",
        inStock: item.inStock !== void 0 ? item.inStock : true,
        featured: Boolean(item.featured),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      const newItem = {
        ...item,
        id: docRef.id
      };
      setShopItems((prev) => [newItem, ...prev.filter((p) => p.id !== docRef.id)]);
      localStorage.setItem("hcfc_firestore_products_seeded", "true");
      return docRef.id;
    } catch (error) {
      console.error("Firestore add product error, falling back locally:", error);
      handleFirestoreError(error, OperationType.CREATE, "products");
      const fallbackId = "shop-".concat(Date.now());
      const newItem = { ...item, id: fallbackId };
      const updated = [newItem, ...shopItems];
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
      return fallbackId;
    }
  };
  const updateShopItem = async (id, updates) => {
    try {
      const productRef = doc(db, "products", id);
      await setDoc(productRef, {
        ...updates,
        updatedAt: serverTimestamp()
      }, { merge: true });
      const updated = shopItems.map((item) => item.id === id ? { ...item, ...updates } : item);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    } catch (error) {
      console.error("Firestore update product error, falling back locally:", error);
      handleFirestoreError(error, OperationType.UPDATE, "products/".concat(id));
      const updated = shopItems.map((item) => item.id === id ? { ...item, ...updates } : item);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    }
  };
  const deleteShopItem = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      await deleteDoc(productRef);
      const updated = shopItems.filter((item) => item.id !== id);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    } catch (error) {
      console.error("Firestore delete product error, falling back locally:", error);
      handleFirestoreError(error, OperationType.DELETE, "products/".concat(id));
      const updated = shopItems.filter((item) => item.id !== id);
      setShopItems(updated);
      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
    }
  };
  const resetShopItems = async () => {
    try {
      for (const item of initialShopItems) {
        await setDoc(doc(db, "products", item.id), {
          name: item.name,
          description: item.description,
          price: item.price,
          imageUrl: item.imageUrl,
          availableSizes: item.availableSizes,
          category: item.category || "JERSEY",
          inStock: item.inStock !== void 0 ? item.inStock : true,
          featured: item.featured !== void 0 ? item.featured : false,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
      localStorage.setItem("hcfc_firestore_products_seeded", "true");
    } catch (error) {
      console.error("Firestore reset products catalog error:", error);
    }
    setShopItems(initialShopItems);
    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
  };
  const [shopOrders, setShopOrders] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SHOP_ORDERS);
    return saved ? JSON.parse(saved) : [];
  });
  const recordShopOrder = (order) => {
    const updated = [order, ...shopOrders.filter((o) => o.orderNumber !== order.orderNumber && o.tx_ref !== order.tx_ref)];
    setShopOrders(updated);
    localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
  };
  const updateShopOrderStatus = (id, status) => {
    const updated = shopOrders.map((o) => o.id === id || o.orderNumber === id ? { ...o, status } : o);
    setShopOrders(updated);
    localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
  };
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = reactExports.useState(false);
  const [checkoutItem, setCheckoutItem] = reactExports.useState(null);
  const openCheckoutModal = (item) => {
    setCheckoutItem(item);
    setIsCheckoutModalOpen(true);
  };
  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
    setCheckoutItem(null);
  };
  const [donations, setDonations] = reactExports.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DONATIONS);
    return saved ? JSON.parse(saved) : [];
  });
  const recordDonation = (donation) => {
    const updated = [donation, ...donations.filter((d) => d.donationNumber !== donation.donationNumber && d.tx_ref !== donation.tx_ref)];
    setDonations(updated);
    localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(updated));
  };
  const [isDonationModalOpen, setIsDonationModalOpen] = reactExports.useState(false);
  const openDonationModal = () => setIsDonationModalOpen(true);
  const closeDonationModal = () => setIsDonationModalOpen(false);
  const [adminUser, setAdminUser] = reactExports.useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = reactExports.useState(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === "true";
  });
  const [adminUsername, setAdminUsername] = reactExports.useState(null);
  const [isAuthChecking, setIsAuthChecking] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdminUser(user);
        setIsAdminLoggedIn(true);
        setAdminUsername(user.displayName || user.email || "Admin");
        localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, "true");
      } else {
        setAdminUser(null);
        setIsAdminLoggedIn(false);
        setAdminUsername(null);
        localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
      }
      setIsAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);
  const loginAdmin = async (email, pass) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), pass);
      const user = userCredential.user;
      setAdminUser(user);
      setIsAdminLoggedIn(true);
      setAdminUsername(user.displayName || user.email || "Admin");
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, "true");
      return { success: true };
    } catch (error) {
      console.error("Firebase signInWithEmailAndPassword error:", error);
      let errorMsg = "Invalid email or password.";
      const code = (error == null ? void 0 : error.code) || "";
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        errorMsg = "Invalid email or password. Please verify your administrator credentials.";
      } else if (code === "auth/invalid-email") {
        errorMsg = "Please enter a valid email address.";
      } else if (code === "auth/user-disabled") {
        errorMsg = "This administrator account has been disabled.";
      } else if (code === "auth/too-many-requests") {
        errorMsg = "Too many failed login attempts. Access temporarily restricted. Please try again later.";
      } else if (code === "auth/network-request-failed") {
        errorMsg = "Network error. Please check your internet connection.";
      } else if (error == null ? void 0 : error.message) {
        errorMsg = error.message;
      }
      return { success: false, error: errorMsg };
    }
  };
  const logoutAdmin = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase signOut error:", error);
    } finally {
      setAdminUser(null);
      setIsAdminLoggedIn(false);
      setAdminUsername(null);
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  };
  const [isDossierOpen, setIsDossierOpen] = reactExports.useState(false);
  const openDossier = () => setIsDossierOpen(true);
  const closeDossier = () => setIsDossierOpen(false);
  const [liveNotifications, setLiveNotifications] = reactExports.useState([]);
  const dismissNotification = (id) => {
    setLiveNotifications((prev) => prev.filter((n) => n.id !== id));
  };
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = reactExports.useState(true);
  const [autoSyncInterval, setAutoSyncIntervalState] = reactExports.useState(30);
  const [secondsUntilNextSync, setSecondsUntilNextSync] = reactExports.useState(30);
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [lastSyncTime, setLastSyncTime] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const toggleAutoSync = () => setIsAutoSyncEnabled((prev) => !prev);
  const setAutoSyncInterval = (interval) => {
    setAutoSyncIntervalState(interval);
    setSecondsUntilNextSync(interval);
  };
  const syncNow = async () => {
    setIsSyncing(true);
    let freshStandings = null;
    let syncSource = "TheSportsDB Official EPL Feed";
    try {
      try {
        const res = await fetch("/api/standings/sportsdb");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.standings) && json.standings.length > 0) {
            const canonicalMap = /* @__PURE__ */ new Map();
            initialStandings.forEach((initT) => canonicalMap.set(initT.teamId, { ...initT }));
            json.standings.forEach((t2) => {
              const canonicalId = normalizeEplTeamId(t2.teamId, t2.teamName);
              const isHalaba = canonicalId === "halaba";
              const existing = canonicalMap.get(canonicalId);
              canonicalMap.set(canonicalId, {
                position: t2.position || 1,
                teamId: canonicalId,
                teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : t2.teamName || (existing == null ? void 0 : existing.teamName) || "Team",
                played: Number(t2.played) || (existing == null ? void 0 : existing.played) || 0,
                won: Number(t2.won) || (existing == null ? void 0 : existing.won) || 0,
                drawn: Number(t2.drawn) || (existing == null ? void 0 : existing.drawn) || 0,
                lost: Number(t2.lost) || (existing == null ? void 0 : existing.lost) || 0,
                goalsFor: Number(t2.goalsFor) || (existing == null ? void 0 : existing.goalsFor) || 0,
                goalsAgainst: Number(t2.goalsAgainst) || (existing == null ? void 0 : existing.goalsAgainst) || 0,
                goalDifference: (Number(t2.goalsFor) || 0) - (Number(t2.goalsAgainst) || 0),
                points: Number(t2.points) || (existing == null ? void 0 : existing.points) || 0,
                form: Array.isArray(t2.form) && t2.form.length > 0 ? t2.form : (existing == null ? void 0 : existing.form) || ["D", "W", "D"],
                isHalaba,
                badgeUrl: t2.badgeUrl || (existing == null ? void 0 : existing.badgeUrl)
              });
            });
            const list = Array.from(canonicalMap.values());
            list.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
            freshStandings = list.map((st, i) => ({ ...st, position: i + 1 }));
          }
        }
      } catch (err) {
        console.warn("Backend proxy fetch failed, trying direct SportsDB...", err);
      }
      if (!freshStandings || freshStandings.length < 14) {
        try {
          const directRes = await fetch("https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=2026-2027");
          if (directRes.ok) {
            const data = await directRes.json();
            const canonicalMap = /* @__PURE__ */ new Map();
            initialStandings.forEach((initT) => canonicalMap.set(initT.teamId, { ...initT }));
            if ((data == null ? void 0 : data.table) && Array.isArray(data.table) && data.table.length > 0) {
              data.table.forEach((item) => {
                const canonicalId = normalizeEplTeamId(item.idTeam, item.strTeam);
                const isHalaba = canonicalId === "halaba";
                const formArr = (item.strForm || "DWD").split("").filter((c) => ["W", "D", "L"].includes(c));
                const existing = canonicalMap.get(canonicalId);
                canonicalMap.set(canonicalId, {
                  position: parseInt(item.intRank, 10) || 1,
                  teamId: canonicalId,
                  teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : item.strTeam || (existing == null ? void 0 : existing.teamName) || "Team",
                  played: parseInt(item.intPlayed, 10) || (existing == null ? void 0 : existing.played) || 0,
                  won: parseInt(item.intWin, 10) || (existing == null ? void 0 : existing.won) || 0,
                  drawn: parseInt(item.intDraw, 10) || (existing == null ? void 0 : existing.drawn) || 0,
                  lost: parseInt(item.intLoss, 10) || (existing == null ? void 0 : existing.lost) || 0,
                  goalsFor: parseInt(item.intGoalsFor, 10) || (existing == null ? void 0 : existing.goalsFor) || 0,
                  goalsAgainst: parseInt(item.intGoalsAgainst, 10) || (existing == null ? void 0 : existing.goalsAgainst) || 0,
                  goalDifference: parseInt(item.intGoalDifference, 10) || (existing == null ? void 0 : existing.goalDifference) || 0,
                  points: parseInt(item.intPoints, 10) || (existing == null ? void 0 : existing.points) || 0,
                  form: formArr.length > 0 ? formArr : (existing == null ? void 0 : existing.form) || ["D", "W", "D"],
                  isHalaba,
                  badgeUrl: item.strBadge ? item.strBadge.replace("/tiny", "") : existing == null ? void 0 : existing.badgeUrl
                });
              });
            }
            const mergedList = Array.from(canonicalMap.values());
            mergedList.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
            freshStandings = mergedList.map((st, i) => ({ ...st, position: i + 1 }));
          }
        } catch (err) {
          console.warn("Direct SportsDB fetch failed:", err);
        }
      }
      if (!freshStandings || freshStandings.length === 0) {
        freshStandings = initialStandings;
        syncSource = "Official SportsDB Seed";
      }
      setStandings(freshStandings);
      localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(freshStandings));
      try {
        for (const item of freshStandings) {
          await setDoc(doc(db, "standings", item.teamId), {
            ...item,
            updatedAt: serverTimestamp()
          }, { merge: true });
        }
      } catch (fsErr) {
        console.warn("Firestore write warning:", fsErr);
      }
      setLastSyncTime(/* @__PURE__ */ new Date());
      setSecondsUntilNextSync(autoSyncInterval);
      const syncNotif = {
        id: "sync-".concat(Date.now()),
        type: "sync",
        title: "TheSportsDB Official Feed Synced",
        message: "Official Ethiopian Premier League table synchronized from ".concat(syncSource, "."),
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      };
      setLiveNotifications((prev) => [syncNotif, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error("Error in syncNow:", error);
    } finally {
      setIsSyncing(false);
    }
  };
  const simulateLiveMatchAction = () => {
    setMatches((prevMatches) => {
      let live = prevMatches.find((m) => m.status === "LIVE");
      const updatedMatches = [...prevMatches];
      if (!live) {
        const upcomingIdx = updatedMatches.findIndex((m) => m.status === "UPCOMING");
        if (upcomingIdx >= 0) {
          const m = updatedMatches[upcomingIdx];
          const newLiveMatch = {
            ...m,
            status: "LIVE",
            liveMinute: 54,
            livePeriod: "2H",
            score: { home: 1, away: 0 },
            scorers: [
              { player: "Dawit Fekadu", minute: 34, team: "home" }
            ],
            liveEvents: [
              { id: "evt-".concat(Date.now(), "-1"), minute: 34, text: "GOAL! Dawit Fekadu scores with a curled effort into the top corner!", type: "goal", team: "home" },
              { id: "evt-".concat(Date.now(), "-2"), minute: 46, text: "Second half underway under the roaring Halaba crowd.", type: "whistle" }
            ]
          };
          updatedMatches[upcomingIdx] = newLiveMatch;
          live = newLiveMatch;
          const notif = {
            id: "notif-".concat(Date.now()),
            type: "match_start",
            title: "🔴 LIVE NOW: ".concat(m.homeTeam.name, " vs ").concat(m.awayTeam.name),
            message: "Halaba Stadium lights up as second half action kicks off!",
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
          };
          setLiveNotifications((prev) => [notif, ...prev.slice(0, 9)]);
        }
      } else {
        const liveIdx = updatedMatches.findIndex((m) => m.id === live.id);
        const currentMin = live.liveMinute || 55;
        const nextMin = Math.min(90, currentMin + Math.floor(Math.random() * 8) + 4);
        const isHalabaGoal = Math.random() > 0.35;
        const currentScore = live.score || { home: 1, away: 0 };
        const newScore = {
          home: isHalabaGoal ? currentScore.home + 1 : currentScore.home,
          away: !isHalabaGoal ? currentScore.away + 1 : currentScore.away
        };
        const scorerName = isHalabaGoal ? ["Dawit Fekadu", "Mulugeta Wolde", "Biniam Fikre", "Yared Bayeh"][Math.floor(Math.random() * 4)] : "Opponent Striker";
        const newEvents = [
          ...live.liveEvents || [],
          {
            id: "evt-".concat(Date.now()),
            minute: nextMin,
            text: "GOAL! (".concat(nextMin, "') - ").concat(scorerName, " scores for ").concat(isHalabaGoal ? live.homeTeam.name : live.awayTeam.name, "!"),
            type: "goal",
            team: isHalabaGoal ? "home" : "away"
          }
        ];
        const updatedLiveMatch = {
          ...live,
          liveMinute: nextMin,
          score: newScore,
          liveEvents: newEvents,
          status: nextMin >= 90 ? "FINISHED" : "LIVE",
          scorers: [
            ...live.scorers || [],
            {
              player: scorerName,
              minute: nextMin,
              team: isHalabaGoal ? "home" : "away"
            }
          ]
        };
        updatedMatches[liveIdx] = updatedLiveMatch;
        const notif = {
          id: "notif-".concat(Date.now()),
          type: nextMin >= 90 ? "match_end" : "goal",
          title: nextMin >= 90 ? "🏁 FULL TIME: ".concat(newScore.home, " - ").concat(newScore.away) : "⚽ GOAL! (".concat(nextMin, "') ").concat(scorerName),
          message: "".concat(live.homeTeam.name, " ").concat(newScore.home, " - ").concat(newScore.away, " ").concat(live.awayTeam.name),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        };
        setLiveNotifications((prev) => [notif, ...prev.slice(0, 9)]);
      }
      localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updatedMatches));
      return updatedMatches;
    });
  };
  const advanceLeagueMatchday = async () => {
    await syncNow();
  };
  reactExports.useEffect(() => {
    if (!isAutoSyncEnabled) return;
    const timer = setInterval(() => {
      setSecondsUntilNextSync((prev) => {
        if (prev <= 1) {
          setLastSyncTime(/* @__PURE__ */ new Date());
          return autoSyncInterval;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, [isAutoSyncEnabled, autoSyncInterval]);
  const [sponsors, setSponsors] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SPONSORS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
    }
    return initialSponsors;
  });
  const [isSponsorsLoading, setIsSponsorsLoading] = reactExports.useState(true);
  const [sponsorsSyncError, setSponsorsSyncError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const sponsorsRef = collection(db, "sponsors");
    const unsubscribe = onSnapshot(
      sponsorsRef,
      async (snapshot) => {
        setIsSponsorsLoading(false);
        setSponsorsSyncError(null);
        if (snapshot.empty) {
          console.info("[Firebase Firestore] Initializing sponsors collection in Cloud Firestore...");
          try {
            for (const initSponsor of initialSponsors) {
              await setDoc(doc(db, "sponsors", initSponsor.id), {
                name: initSponsor.name,
                nameAm: initSponsor.nameAm || "",
                nameOm: initSponsor.nameOm || "",
                tier: initSponsor.tier,
                tierAm: initSponsor.tierAm || "",
                imageUrl: initSponsor.imageUrl,
                websiteUrl: initSponsor.websiteUrl || "",
                description: initSponsor.description || "",
                descriptionAm: initSponsor.descriptionAm || "",
                active: initSponsor.active,
                order: initSponsor.order,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
              });
            }
          } catch (seedErr) {
            console.warn("[Firebase Firestore] Could not auto-seed sponsors:", seedErr);
          }
          return;
        }
        const liveSponsors = [];
        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          liveSponsors.push({
            id: docSnap.id,
            name: data.name || "Sponsor",
            nameAm: data.nameAm || void 0,
            nameOm: data.nameOm || void 0,
            tier: data.tier || "Official Partner",
            tierAm: data.tierAm || void 0,
            imageUrl: data.imageUrl || "",
            websiteUrl: data.websiteUrl || void 0,
            description: data.description || void 0,
            descriptionAm: data.descriptionAm || void 0,
            active: data.active !== void 0 ? Boolean(data.active) : true,
            order: typeof data.order === "number" ? data.order : 10
          });
        });
        liveSponsors.sort((a, b) => (a.order || 0) - (b.order || 0));
        setSponsors(liveSponsors);
        try {
          localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(liveSponsors));
        } catch (e) {
          console.warn("Could not cache sponsors in localStorage:", e);
        }
      },
      (error) => {
        console.error("Firebase real-time sponsors sync error:", error);
        setIsSponsorsLoading(false);
        setSponsorsSyncError(error.message);
        handleFirestoreError(error, OperationType.LIST, "sponsors");
      }
    );
    return () => unsubscribe();
  }, []);
  const addSponsor = async (sponsorData) => {
    var _a, _b, _c, _d;
    try {
      const docRef = await addDoc(collection(db, "sponsors"), {
        name: sponsorData.name,
        nameAm: sponsorData.nameAm || "",
        nameOm: sponsorData.nameOm || "",
        tier: sponsorData.tier,
        tierAm: sponsorData.tierAm || "",
        imageUrl: sponsorData.imageUrl,
        websiteUrl: sponsorData.websiteUrl || "",
        description: sponsorData.description || "",
        descriptionAm: sponsorData.descriptionAm || "",
        active: sponsorData.active !== void 0 ? sponsorData.active : true,
        order: (_a = sponsorData.order) != null ? _a : sponsors.length + 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      const newSponsor = {
        ...sponsorData,
        id: docRef.id,
        order: (_b = sponsorData.order) != null ? _b : sponsors.length + 1,
        active: sponsorData.active !== void 0 ? sponsorData.active : true
      };
      const updated = [...sponsors, newSponsor].sort((a, b) => (a.order || 0) - (b.order || 0));
      setSponsors(updated);
      try {
        localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not cache updated sponsors in localStorage:", e);
      }
      return docRef.id;
    } catch (error) {
      console.error("Firestore add sponsor error, falling back locally:", error);
      handleFirestoreError(error, OperationType.CREATE, "sponsors");
      const fallbackId = "sponsor-".concat(Date.now(), "-").concat(Math.random().toString(36).substring(2, 7));
      const newSponsor = {
        ...sponsorData,
        id: fallbackId,
        order: (_c = sponsorData.order) != null ? _c : sponsors.length + 1,
        active: (_d = sponsorData.active) != null ? _d : true
      };
      const updated = [...sponsors, newSponsor];
      setSponsors(updated);
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
      return fallbackId;
    }
  };
  const updateSponsor = async (id, updates) => {
    try {
      const sponsorRef = doc(db, "sponsors", id);
      await setDoc(sponsorRef, {
        ...updates,
        updatedAt: serverTimestamp()
      }, { merge: true });
      const updated = sponsors.map((s) => s.id === id ? { ...s, ...updates } : s);
      setSponsors(updated);
      try {
        localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not cache updated sponsors in localStorage:", e);
      }
    } catch (error) {
      console.error("Firestore update sponsor error, falling back locally:", error);
      handleFirestoreError(error, OperationType.UPDATE, "sponsors/".concat(id));
      const updated = sponsors.map((s) => s.id === id ? { ...s, ...updates } : s);
      setSponsors(updated);
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
    }
  };
  const deleteSponsor = async (id) => {
    try {
      const sponsorRef = doc(db, "sponsors", id);
      await deleteDoc(sponsorRef);
      const updated = sponsors.filter((s) => s.id !== id);
      setSponsors(updated);
      try {
        localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not cache sponsors after deletion:", e);
      }
    } catch (error) {
      console.error("Firestore delete sponsor error, falling back locally:", error);
      handleFirestoreError(error, OperationType.DELETE, "sponsors/".concat(id));
      const updated = sponsors.filter((s) => s.id !== id);
      setSponsors(updated);
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
    }
  };
  const resetSponsors = async () => {
    try {
      for (const initS of initialSponsors) {
        await setDoc(doc(db, "sponsors", initS.id), {
          name: initS.name,
          nameAm: initS.nameAm || "",
          nameOm: initS.nameOm || "",
          tier: initS.tier,
          tierAm: initS.tierAm || "",
          imageUrl: initS.imageUrl,
          websiteUrl: initS.websiteUrl || "",
          description: initS.description || "",
          descriptionAm: initS.descriptionAm || "",
          active: initS.active,
          order: initS.order,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
      setSponsors(initialSponsors);
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
    } catch (error) {
      console.error("Firestore reset sponsors error, falling back locally:", error);
      handleFirestoreError(error, OperationType.WRITE, "sponsors");
      setSponsors(initialSponsors);
      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
    }
  };
  const resetAllDataToDefault = () => {
    localStorage.clear();
    setMatches(initialMatches);
    setStandings(initialStandings);
    setNews(initialNews);
    setPlayers(initialPlayers);
    setStaff(initialStaff);
    setMemberships(initialMemberships);
    setShopItems(initialShopItems);
    setShopOrders([]);
    setDonations([]);
    setClubInfo(initialClubInfo);
    setSponsors(initialSponsors);
    setIsAdminLoggedIn(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ClubContext.Provider,
    {
      value: {
        language,
        setLanguage,
        t,
        currentPage,
        setCurrentPage,
        selectedArticleId,
        setSelectedArticleId,
        selectedMatchId,
        setSelectedMatchId,
        isDossierOpen,
        openDossier,
        closeDossier,
        liveNotifications,
        dismissNotification,
        isAutoSyncEnabled,
        toggleAutoSync,
        autoSyncInterval,
        setAutoSyncInterval,
        secondsUntilNextSync,
        isSyncing,
        lastSyncTime,
        syncNow,
        simulateLiveMatchAction,
        advanceLeagueMatchday,
        clubInfo,
        updateClubInfo,
        matches,
        addMatch,
        updateMatch,
        deleteMatch,
        standings,
        updateStanding,
        resetStandings,
        recalculateStandingsFromMatches,
        news,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        players,
        staff,
        addPlayer,
        updatePlayer,
        deletePlayer,
        addStaff,
        updateStaff,
        deleteStaff,
        memberships,
        submitMembership,
        recordVerifiedMembership,
        updateMembershipStatus,
        deleteMembership,
        shopItems,
        addShopItem,
        updateShopItem,
        deleteShopItem,
        resetShopItems,
        isProductsLoading,
        productsSyncError,
        shopOrders,
        recordShopOrder,
        updateShopOrderStatus,
        isCheckoutModalOpen,
        checkoutItem,
        openCheckoutModal,
        closeCheckoutModal,
        donations,
        recordDonation,
        isDonationModalOpen,
        openDonationModal,
        closeDonationModal,
        isAdminLoggedIn,
        adminUsername,
        adminUser,
        isAuthChecking,
        loginAdmin,
        logoutAdmin,
        sponsors,
        addSponsor,
        updateSponsor,
        deleteSponsor,
        resetSponsors,
        isSponsorsLoading,
        sponsorsSyncError,
        isOnline,
        resetAllDataToDefault
      },
      children
    }
  );
};
const useClub = () => {
  const context = reactExports.useContext(ClubContext);
  if (!context) {
    throw new Error("useClub must be used within a ClubProvider");
  }
  return context;
};
const HalabaCrest = ({
  className = "",
  size = 64,
  showGlow = false
}) => {
  const [hasError, setHasError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative inline-flex items-center justify-center select-none shrink-0 ".concat(className),
      style: { width: size, height: size },
      title: "HALABA City FC (በርበሬዎቹ) - Official Club Crest",
      children: [
        showGlow && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-full pointer-events-none scale-125",
            style: {
              background: "radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(220, 38, 38, 0.18) 50%, rgba(220, 38, 38, 0) 75%)"
            },
            "aria-hidden": "true"
          }
        ),
        !hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: halabaLogoUrl,
            alt: "HALABA City FC official crest",
            className: "w-full h-full object-contain relative z-10 drop-shadow-md transition-opacity duration-200",
            loading: "eager",
            decoding: "async",
            onError: () => setHasError(true)
          }
        ) : (
          /* Zero-latency Vector SVG Crest Fallback if PNG fails */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 500 540",
              className: "w-full h-full drop-shadow-md overflow-visible relative z-10",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "shieldRed", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#e51821" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "45%", stopColor: "#c80815" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#96000a" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "shieldRim", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ff4d4d" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#b3000b" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#550005" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ribbonGreen", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#088c3a" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#056b2b" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#02431a" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "goldTrim", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffd857" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "40%", stopColor: "#f5b800" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: "#e09e00" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ffd857" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "chiliGlow", cx: "40%", cy: "30%", r: "70%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ff4538" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#d30909" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#7a0000" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gloss", x1: "0%", y1: "0%", x2: "100%", y2: "80%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffffff", stopOpacity: "0.4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "40%", stopColor: "#ffffff", stopOpacity: "0.08" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: "0" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 140 40 Q 250 65 360 40 C 430 70 470 190 420 350 C 380 435 290 495 250 515 C 210 495 120 435 80 350 C 30 190 70 70 140 40 Z",
                    fill: "url(#shieldRed)",
                    stroke: "url(#shieldRim)",
                    strokeWidth: "6"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 145 48 Q 250 70 355 48 C 410 80 440 180 410 280 C 330 240 200 160 145 48 Z",
                    fill: "url(#gloss)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 140 200 Q 250 205 360 200 C 400 280 380 375 250 430 C 120 375 100 280 140 200 Z",
                    fill: "#ffffff"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "250",
                    y: "112",
                    textAnchor: "middle",
                    fill: "#ffffff",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: "900",
                    fontSize: "44",
                    letterSpacing: "4",
                    children: "HALABA"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "250",
                    y: "156",
                    textAnchor: "middle",
                    fill: "#ffffff",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: "900",
                    fontSize: "38",
                    letterSpacing: "5",
                    children: "CITY FC"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 200 172 Q 250 178 300 172 L 310 200 Q 250 208 190 200 Z",
                    fill: "#ffffff",
                    stroke: "#e2e8f0",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "250",
                    y: "194",
                    textAnchor: "middle",
                    fill: "#111827",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: "900",
                    fontSize: "24",
                    letterSpacing: "3",
                    children: "1966"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 230 270 C 232 230 240 215 250 215 C 260 215 268 230 270 270 Z", fill: "#e2ca9b", stroke: "#a67c3b", strokeWidth: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 232 260 Q 250 263 268 260 L 269 269 Q 250 272 231 269 Z", fill: "#e6007e" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "250", cy: "275", rx: "46", ry: "14", fill: "#ecd8b3", stroke: "#b08a4c", strokeWidth: "2.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 240 218 C 215 220 185 245 188 285 C 190 325 210 365 235 375 C 220 365 210 330 212 285 C 214 248 230 228 240 218 Z",
                    fill: "url(#chiliGlow)",
                    stroke: "#990000",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 260 218 C 285 220 315 245 312 285 C 310 325 290 365 265 375 C 280 365 290 330 288 285 C 286 248 270 228 260 218 Z",
                    fill: "url(#chiliGlow)",
                    stroke: "#990000",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "370", r: "32", fill: "#ffffff", stroke: "#1f2937", strokeWidth: "2.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "250,358 261,366 257,380 243,380 239,366", fill: "#111827" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M 85 405 Q 250 490 415 405 L 415 445 Q 250 535 85 445 Z",
                    fill: "url(#ribbonGreen)",
                    stroke: "url(#goldTrim)",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "250",
                    y: "450",
                    textAnchor: "middle",
                    fill: "#ffffff",
                    fontFamily: "'Noto Sans Ethiopic', system-ui, sans-serif",
                    fontWeight: "bold",
                    fontSize: "26",
                    letterSpacing: "2",
                    children: "ሀላባ ከተማ እግርኳስ ክለብ"
                  }
                )
              ]
            }
          )
        )
      ]
    }
  );
};
const Navbar = ({ onOpenInstallModal, isInstalled = false }) => {
  const { language, setLanguage, t, currentPage, setCurrentPage, isAdminLoggedIn, openDossier, openDonationModal } = useClub();
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = reactExports.useState(false);
  const navItems = [
    { id: "home", label: t.navHome, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }) },
    { id: "fixtures", label: t.navFixtures, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }) },
    { id: "standings", label: t.navStandings, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }) },
    { id: "news", label: t.navNews, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-4 h-4" }) },
    { id: "shop", label: t.navShop, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }) },
    { id: "membership", label: t.navMembership, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }) },
    { id: "about", label: t.navAbout, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4" }) },
    { id: "contact", label: t.navContact, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }) }
  ];
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };
  const handleLangChange = (lang) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };
  const languageLabels = {
    en: { label: "English", sub: "EN" },
    am: { label: "አማርኛ", sub: "AM" },
    om: { label: "Afaan Oromo", sub: "OM" }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 text-white shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 text-xs px-4 py-1.5 border-b border-neutral-800/60 hidden sm:flex justify-between items-center text-neutral-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 font-semibold text-red-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
          t.heroNickname
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.homeGroundValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-medium", children: t.est1966 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        !isInstalled && onOpenInstallModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onOpenInstallModal,
            className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full btn-secondary-amber text-white text-xs font-bold transition-all shadow-sm active:scale-95",
            title: "Download official Halaba City FC App (Android APK / iOS)",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-3 h-3 text-amber-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "መተግበሪያ አውርድ" : "Get App" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: openDossier,
            className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 hover:bg-red-600/50 border border-red-500/50 text-red-200 text-xs font-bold transition-all shadow-sm active:scale-95",
            title: "Exact Information about Halaba City FC in the Ethiopian Premier League",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3 text-amber-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.clubDossierBtn })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleNavClick("admin"),
            className: "flex items-center gap-1.5 px-2 py-0.5 rounded text-xs transition-colors ".concat(currentPage === "admin" ? "bg-red-700 text-white font-medium" : "text-neutral-400 hover:text-white"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navAdmin }),
              isAdminLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400", title: t.active })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleNavClick("home"),
          className: "flex items-center gap-3 group text-left focus:outline-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 52, showGlow: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-red-400 transition-colors uppercase font-sports", children: "HALABA CITY FC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold tracking-wide text-emerald-400 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "በርበሬዎቹ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 font-normal", children: "|" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: language === "am" ? "ይፋዊ ድረ-ገጽ" : "Berberewochu" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center space-x-1", children: navItems.map((item) => {
        const isActive = currentPage === item.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleNavClick(item.id),
            className: "px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 ".concat(isActive ? "bg-red-600 text-white shadow-md shadow-red-900/40" : "text-neutral-200 hover:text-white hover:bg-neutral-800/80"),
            children: item.label
          },
          item.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setLangDropdownOpen(!langDropdownOpen),
              className: "flex items-center gap-1.5 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-sm font-medium text-neutral-200 transition-colors",
              "aria-label": "Select language",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-emerald-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase font-bold text-xs", children: language }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 text-xs hidden md:inline", children: languageLabels[language].label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-neutral-400 ml-0.5" })
              ]
            }
          ),
          langDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-neutral-900 rounded-lg shadow-2xl border border-neutral-700 py-1 z-50 animate-in fade-in zoom-in-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 text-xs text-neutral-400 uppercase font-bold tracking-wider border-b border-neutral-800", children: t.selectLanguage }),
            ["en", "am", "om"].map((lng) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleLangChange(lng),
                className: "w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors ".concat(language === lng ? "bg-red-600/20 text-red-400 font-bold border-l-4 border-red-500" : "text-neutral-200 hover:bg-neutral-800"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: languageLabels[lng].label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase text-neutral-400 font-mono", children: languageLabels[lng].sub })
                ]
              },
              lng
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: openDonationModal,
            className: "px-3.5 py-2 rounded-md btn-donate-emerald font-bold text-sm tracking-wide transition-all active:scale-95 flex items-center gap-1.5 font-sports uppercase",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 fill-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navDonate })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleNavClick("membership"),
            className: "px-4 py-2 rounded-md btn-membership-join font-bold text-sm tracking-wide shadow-md shadow-red-950/60 hover:shadow-red-800/40 transition-all transform active:scale-95 flex items-center gap-1.5 font-sports uppercase",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navJoinBtn })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              const nextLang = { en: "am", am: "om", om: "en" };
              setLanguage(nextLang[language]);
            },
            className: "px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-xs font-bold text-emerald-400 uppercase flex items-center gap-1",
            title: "Switch language",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language.toUpperCase() })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            className: "p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none",
            "aria-label": "Toggle Navigation Menu",
            children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] })
    ] }) }),
    mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-2 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-neutral-400", children: t.selectLanguage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["en", "am", "om"].map((lng) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleLangChange(lng),
            className: "px-2 py-1 text-xs font-bold rounded ".concat(language === lng ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"),
            children: lng.toUpperCase()
          },
          lng
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        navItems.map((item) => {
          const isActive = currentPage === item.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick(item.id),
              className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-left transition-colors ".concat(isActive ? "bg-red-600 text-white" : "text-neutral-200 hover:bg-neutral-900 hover:text-white"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isActive ? "text-white" : "text-neutral-400", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
              ]
            },
            item.id
          );
        }),
        !isInstalled && onOpenInstallModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              onOpenInstallModal();
              setMobileMenuOpen(false);
            },
            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors text-emerald-400 hover:bg-neutral-900 border border-emerald-900/40 bg-emerald-950/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የክለቡን መተግበሪያ አውርድ (APK / iOS)" : "Download Club App (APK / iOS)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleNavClick("admin"),
            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ".concat(currentPage === "admin" ? "bg-red-950 text-red-200 border border-red-800" : "text-neutral-400 hover:bg-neutral-900 hover:text-white"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navAdmin }),
              isAdminLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-emerald-400 font-normal", children: t.active })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleNavClick("membership"),
          className: "w-full py-3 px-4 rounded-lg btn-membership-join text-white font-bold text-center tracking-wide shadow-lg uppercase font-sports flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navJoinBtn })
          ]
        }
      ) })
    ] })
  ] });
};
const NetVibeSvgEmblem = ({
  sizePx = 48,
  className = ""
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: sizePx,
      height: sizePx,
      viewBox: "0 0 120 120",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "shrink-0 ".concat(className),
      "aria-label": "NetVibe Digital Solutions Logo",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "nvBgGlow", cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#0a2540", stopOpacity: "0.8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#030712", stopOpacity: "1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "nvCyanBlue", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#00E5FF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#0091FF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0055FF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "nvRingGlow", x1: "0%", y1: "100%", x2: "100%", y2: "0%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#00E5FF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: "#38BDF8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0284C7" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "nvGlowFilter", x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3", result: "blur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in: "SourceGraphic", in2: "blur", operator: "over" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "120", height: "120", rx: "24", fill: "url(#nvBgGlow)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "1.5",
            y: "1.5",
            width: "117",
            height: "117",
            rx: "22.5",
            stroke: "#00E5FF",
            strokeOpacity: "0.25",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(10, 10)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: "50",
              cy: "48",
              rx: "44",
              ry: "20",
              transform: "rotate(-28 50 48)",
              stroke: "url(#nvRingGlow)",
              strokeWidth: "4",
              strokeLinecap: "round",
              strokeDasharray: "180 80",
              strokeDashoffset: "30",
              filter: "url(#nvGlowFilter)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M32 30 C32 23 37 19 44 23 L44 76 C36 76 32 72 32 65 Z",
              fill: "url(#nvCyanBlue)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M36 24 L68 70 C72 76 68 81 60 81 L46 81 L32 60 Z",
              fill: "#0091FF"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M58 35 L68 35 C74 35 77 39 77 46 L77 78 C70 81 64 77 64 70 Z",
              fill: "url(#nvCyanBlue)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: "50",
              cy: "48",
              rx: "44",
              ry: "20",
              transform: "rotate(-28 50 48)",
              stroke: "url(#nvRingGlow)",
              strokeWidth: "4.5",
              strokeLinecap: "round",
              strokeDasharray: "90 170",
              strokeDashoffset: "140"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "74", y: "16", width: "6", height: "6", rx: "1.2", fill: "#00E5FF", opacity: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "83", y: "21", width: "5", height: "5", rx: "1", fill: "#38BDF8", opacity: "0.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "73", y: "25", width: "5", height: "5", rx: "1", fill: "#0284C7", opacity: "0.85" })
        ] })
      ]
    }
  );
};
const NetVibeLogo = ({
  className = "",
  imgClassName = "",
  size = "md",
  showText = false,
  language = "en"
}) => {
  const [hasError, setHasError] = reactExports.useState(false);
  const sizeDimensions = {
    xs: { px: 28, box: "w-7 h-7" },
    sm: { px: 36, box: "w-9 h-9" },
    md: { px: 48, box: "w-12 h-12" },
    lg: { px: 64, box: "w-16 h-16" }
  }[size];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 ".concat(className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "".concat(sizeDimensions.box, " rounded-xl overflow-hidden bg-[#050b17] border border-cyan-500/40 p-0.5 shadow-md shadow-cyan-950/60 shrink-0 flex items-center justify-center"),
        children: !hasError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: netvibeLogoImg,
            alt: "NetVibe Digital Solutions",
            onError: () => setHasError(true),
            className: "w-full h-full object-contain rounded-lg ".concat(imgClassName),
            loading: "eager",
            decoding: "async"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(NetVibeSvgEmblem, { sizePx: sizeDimensions.px, className: "w-full h-full" })
      }
    ),
    showText && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-white tracking-wide", children: language === "am" ? "የመተግበሪያ አዘጋጅ: NetVibe Digital Solutions" : language === "om" ? "Misoomsituu Appii: NetVibe Digital Solutions" : "Developed by NetVibe Digital Solutions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-700/50", children: "Tech Partner" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-0.5", children: language === "am" ? "IDEAS • CODE • IMPACT — ለሀላባ ከተማ እግርኳስ ክለብ በልዩ ጥራት የተዘጋጀ ይፋዊ መተግበሪያ" : language === "om" ? "IDEAS • CODE • IMPACT — Appilikeeshinii fi waltajjii dijitaalaa seera-qabeessa" : "IDEAS • CODE • IMPACT — Official digital portal & mobile application partner" })
    ] })
  ] });
};
const Footer = () => {
  const { t, language, setCurrentPage, clubInfo } = useClub();
  const handleNav = (p) => {
    setCurrentPage(p);
  };
  const address = language === "am" ? "ሀላባ ስታዲየም የስፖርት ኮምፕሌክስ፣ ዋና ጎዳና፣ ሀላባ ቁሊቶ፣ ኢትዮጵያ" : clubInfo.contact.address;
  const officeHours = language === "am" ? "ከሰኞ - አርብ፡ 2:30 ጥዋት - 11:30 ከሰዓት (በጨዋታ ቀናት፡ 1:00 ጥዋት - 1:00 ምሽት)" : clubInfo.contact.hours;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-neutral-950 text-neutral-300 border-t border-neutral-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-1.5 w-full flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/3 bg-red-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/3 bg-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/3 bg-amber-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-neutral-800/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 56, showGlow: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl tracking-wider text-white uppercase", children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA CITY FC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-emerald-400", children: [
                clubInfo.nickname.am,
                " • Berberewochu"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-400 font-mono", children: language === "am" ? "በ1966 ዓ.ም ተመሰረተ" : "Founded 1966" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neutral-400 leading-relaxed", children: t.footerAboutClub }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-red-400" }),
            t.footerMotto
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2", children: t.quickLinks }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("fixtures"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-red-500 rounded-full" }),
                  t.navFixtures
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("standings"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-emerald-500 rounded-full" }),
                  t.navStandings
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("news"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-amber-500 rounded-full" }),
                  t.navNews
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("membership"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-red-500 rounded-full" }),
                  t.navMembership
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("about"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-neutral-500 rounded-full" }),
                  t.navAbout
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("contact"),
                className: "hover:text-red-400 transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-neutral-500 rounded-full" }),
                  t.navContact
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleNav("admin"),
                className: "hover:text-amber-400 transition-colors flex items-center gap-2 text-neutral-400 text-xs mt-3 pt-2 border-t border-neutral-900",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-amber-400 rounded-full" }),
                  t.navAdmin,
                  " ",
                  t.authorizedStaff
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2", children: t.footerOfficeStadium }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs sm:text-sm text-neutral-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: address })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: clubInfo.contact.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: clubInfo.contact.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: officeHours })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2", children: t.socialMedia }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400", children: language === "am" ? "አዳዲስ ዜናዎችንና ቪዲዮዎችን ለማግኘት ይፋዊ የሀላባ ከተማ የዲጂታል ገጾችን ይቀላቀሉ።" : "Join the official digital channels of Halaba City FC for breaking news and videos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: clubInfo.socials.telegram,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5 text-sky-400" }),
                    t.officialTelegram
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-neutral-500" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: clubInfo.socials.facebook,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 font-bold text-blue-500 flex items-center justify-center", children: "f" }),
                    t.facebookPage
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-neutral-500" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: clubInfo.socials.youtube,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 font-bold text-red-500 flex items-center justify-center", children: "▶" }),
                    t.youtubeHighlights
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-neutral-500" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 rounded-xl bg-gradient-to-r from-neutral-900/90 via-[#071322]/80 to-neutral-900/90 border border-cyan-900/40 shadow-lg text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NetVibeLogo,
          {
            size: "md",
            showText: true,
            language,
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0 self-end sm:self-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-800/40", children: "NetVibe Digital" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " HALABA City Football Club (ሀላባ ከተማ እግርኳስ ክለብ). ",
          t.footerRights
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-500", children: t.halabaKulitoMotto })
      ] })
    ] })
  ] });
};
const MobileFixedFooter = () => {
  const { t, currentPage, setCurrentPage, openDonationModal } = useClub();
  const navButtons = [
    {
      id: "home",
      label: t.navHome || "Home",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
      onClick: () => setCurrentPage("home"),
      isActive: currentPage === "home"
    },
    {
      id: "donate",
      label: t.navDonate || "Donate",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-emerald-400 fill-emerald-400/30" }),
      onClick: openDonationModal,
      isActive: false
    },
    {
      id: "membership",
      label: t.navMembership || "Membership",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5" }),
      onClick: () => setCurrentPage("membership"),
      isActive: currentPage === "membership"
    },
    {
      id: "about",
      label: t.navAbout || "About",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
      onClick: () => setCurrentPage("about"),
      isActive: currentPage === "about"
    },
    {
      id: "contact",
      label: t.navContact || "Contact",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
      onClick: () => setCurrentPage("contact"),
      isActive: currentPage === "contact"
    }
  ];
  if (currentPage === "admin") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": "Mobile Fixed Navigation",
      className: "fixed bottom-0 left-0 right-0 z-50 py-2 px-2 flex items-center justify-around sm:hidden shadow-2xl border-t",
      style: {
        backgroundColor: "#0a0a0a",
        borderColor: "#262626"
      },
      children: navButtons.map((btn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: btn.onClick,
          className: "flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ".concat(btn.isActive ? "scale-105 font-bold" : "hover:text-white"),
          style: {
            color: btn.isActive ? "#ef4444" : "#a3a3a3"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: btn.isActive ? "#ef4444" : btn.id === "donate" ? "#10b981" : "#d4d4d4" }, children: btn.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xxs uppercase font-sports tracking-wider mt-1 truncate max-w-[64px]",
                style: { color: btn.isActive ? "#ef4444" : "#d4d4d4" },
                children: btn.label
              }
            )
          ]
        },
        btn.id
      ))
    }
  );
};
const OFFICIAL_SPORTSDB_BADGES = {
  halaba: halabaLogoUrl,
  cbe_sa: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png",
  insurance: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png",
  medhin: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png",
  fasil: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png",
  adama: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png",
  electric: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png",
  bunna: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png",
  bahirdar: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png",
  saintgeorge: "https://r2.thesportsdb.com/images/media/team/badge/r5orqa1615830067.png",
  giorgis: "https://r2.thesportsdb.com/images/media/team/badge/r5orqa1615830067.png",
  defence: "https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png",
  mekelakeya: "https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png",
  welwalo: "https://r2.thesportsdb.com/images/media/team/badge/x1aihm1727368029.png",
  wolaitta: "https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png",
  dicha: "https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png",
  hosaena: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png",
  hossana: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png",
  diredawa: "https://r2.thesportsdb.com/images/media/team/badge/70017i1615830053.png",
  gamochencha: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png",
  sidama: "https://r2.thesportsdb.com/images/media/team/badge/45f96b1790265577.png",
  hawassa: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png",
  shaggar: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png",
  negelle: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
};
const CANONICAL_SEARCH_NAMES = {
  halaba: "Halaba Ketema",
  fasil: "Fasil Kenema",
  wolaitta: "Wolaitta Dicha",
  dicha: "Wolaitta Dicha",
  bahirdar: "Bahir Dar Kenema",
  cbe_sa: "Commercial Bank of Ethiopia",
  insurance: "Ethiopian Medhin",
  medhin: "Ethiopian Medhin",
  adama: "Adama Kenema",
  electric: "Ethio Electric",
  bunna: "Ethiopian Coffee",
  saintgeorge: "Kidus Giorgis",
  giorgis: "Kidus Giorgis",
  defence: "Mechal",
  mekelakeya: "Mechal",
  welwalo: "Welwalo Adigrat University",
  hosaena: "Hadiya Hossana",
  hossana: "Hadiya Hossana",
  diredawa: "Dire Dawa Kenema",
  gamochencha: "Gamo Chencha",
  sidama: "Sidama Bunna",
  hawassa: "Hawassa Kenema",
  shaggar: "Shaggar City",
  negelle: "Negelle Arsi"
};
const STORAGE_KEY = "thesportsdb_badges_v2";
function loadPersistedBadges() {
  const map = /* @__PURE__ */ new Map();
  Object.entries(OFFICIAL_SPORTSDB_BADGES).forEach(([k, v]) => {
    map.set(k.toLowerCase().trim(), v);
  });
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.entries(parsed).forEach(([k, v]) => {
          if (typeof v === "string" || v === null) {
            map.set(k.toLowerCase().trim(), v);
          }
        });
      }
    }
  } catch (e) {
  }
  return map;
}
function persistBadge(key, badge) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      parsed[key] = badge;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
  } catch (e) {
  }
}
const badgeCache = loadPersistedBadges();
const EthiopianClubLogo = ({
  teamId = "",
  teamName,
  size = 36,
  badgeUrl,
  priority = false,
  className = ""
}) => {
  const normalizedKey = (teamId || teamName).toLowerCase().trim();
  if (normalizedKey.includes("halaba") || teamId === "halaba") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size, className });
  }
  const initialBadge = () => {
    if (badgeUrl) return badgeUrl;
    if (badgeCache.has(normalizedKey)) {
      return badgeCache.get(normalizedKey) || null;
    }
    if (OFFICIAL_SPORTSDB_BADGES[normalizedKey]) {
      return OFFICIAL_SPORTSDB_BADGES[normalizedKey];
    }
    for (const [key, val] of Object.entries(OFFICIAL_SPORTSDB_BADGES)) {
      if (normalizedKey.includes(key)) {
        return val;
      }
    }
    return null;
  };
  const [badge, setBadge] = reactExports.useState(initialBadge);
  const [imgError, setImgError] = reactExports.useState(false);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (badgeUrl) {
      setBadge(badgeUrl);
      setImgError(false);
      return;
    }
    const cached = badgeCache.get(normalizedKey);
    if (cached !== void 0) {
      setBadge(cached);
      return;
    }
    for (const [key, val] of Object.entries(OFFICIAL_SPORTSDB_BADGES)) {
      if (normalizedKey.includes(key)) {
        badgeCache.set(normalizedKey, val);
        setBadge(val);
        return;
      }
    }
    let isMounted = true;
    const fetchBadge = async () => {
      var _a;
      try {
        const isNumericId = /^\d+$/.test(teamId);
        let url;
        if (isNumericId) {
          url = "https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=".concat(teamId);
        } else {
          const canonicalEnglish = CANONICAL_SEARCH_NAMES[normalizedKey] || teamName.replace(/\(.*?\)/g, "").replace(/\[.*?\]/g, "").replace(/[^\x00-\x7F]/g, "").trim();
          const searchTerm = canonicalEnglish || teamId || teamName;
          url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=".concat(encodeURIComponent(searchTerm));
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("HTTP ".concat(response.status));
        }
        const data = await response.json();
        const teamObj = (_a = data == null ? void 0 : data.teams) == null ? void 0 : _a[0];
        const fetchedBadge = (teamObj == null ? void 0 : teamObj.strBadge) || (teamObj == null ? void 0 : teamObj.strTeamBadge) || null;
        const normalizedBadge = fetchedBadge ? fetchedBadge.replace("/tiny", "") : null;
        badgeCache.set(normalizedKey, normalizedBadge);
        persistBadge(normalizedKey, normalizedBadge);
        if (isMounted) {
          setBadge(normalizedBadge);
        }
      } catch (e) {
        badgeCache.set(normalizedKey, null);
        persistBadge(normalizedKey, null);
        if (isMounted) {
          setBadge(null);
        }
      }
    };
    fetchBadge();
    return () => {
      isMounted = false;
    };
  }, [teamId, teamName, badgeUrl, normalizedKey]);
  if (badge && !imgError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: { width: size, height: size },
        className: "relative rounded-full bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden select-none transition-transform duration-200 ".concat(className),
        title: teamName,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: badge,
            alt: teamName,
            className: "w-full h-full object-contain transition-opacity duration-300 ".concat(isLoaded ? "opacity-100" : "opacity-80"),
            onError: () => setImgError(true),
            onLoad: () => setIsLoaded(true),
            loading: priority || size >= 48 ? "eager" : "lazy",
            decoding: "async",
            referrerPolicy: "no-referrer"
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: { width: size, height: size },
      className: "rounded-full bg-neutral-800/90 border border-neutral-700/80 p-1 flex items-center justify-center text-center shrink-0 overflow-hidden select-none text-neutral-300 font-semibold shadow-sm ".concat(className),
      title: teamName,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "truncate max-w-full leading-tight text-center px-0.5 tracking-tight font-medium",
          style: { fontSize: Math.max(9, Math.floor(size * 0.24)) },
          children: teamName
        }
      )
    }
  );
};
let globalPromptEvent = null;
if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    globalPromptEvent = e;
    window.dispatchEvent(new CustomEvent("pwa-prompt-ready"));
  });
  window.addEventListener("appinstalled", () => {
    globalPromptEvent = null;
    window.dispatchEvent(new CustomEvent("pwa-installed"));
  });
}
function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = reactExports.useState(() => globalPromptEvent);
  const [isInstalled, setIsInstalled] = reactExports.useState(false);
  const [isIOS, setIsIOS] = reactExports.useState(false);
  const [isAndroid, setIsAndroid] = reactExports.useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkStandalone = () => {
      var _a, _b, _c;
      if (typeof window === "undefined") return false;
      const isMediaStandalone = window.matchMedia("(display-mode: standalone)").matches;
      const isNavStandalone = window.navigator.standalone === true;
      const isCapacitorNative = Boolean(
        (_b = (_a = window.Capacitor) == null ? void 0 : _a.isNativePlatform) == null ? void 0 : _b.call(_a)
      );
      const isQueryApp = window.location.search.includes("source=pwa") || window.location.search.includes("source=apk") || window.location.search.includes("mode=app") || window.location.search.includes("installed=true");
      const isReferrerApp = typeof document !== "undefined" && ((_c = document.referrer) == null ? void 0 : _c.includes("android-app://"));
      return isMediaStandalone || isNavStandalone || isCapacitorNative || isQueryApp || isReferrerApp;
    };
    setIsInstalled(checkStandalone());
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(ua) && !window.MSStream;
    const isAndroidDevice = /android/.test(ua);
    setIsIOS(isIOSDevice);
    setIsAndroid(isAndroidDevice);
    if (globalPromptEvent && !deferredPrompt) {
      setDeferredPrompt(globalPromptEvent);
    }
    const handlePromptReady = () => {
      setDeferredPrompt(globalPromptEvent);
    };
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      globalPromptEvent = e;
      setDeferredPrompt(e);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      globalPromptEvent = null;
      setDeferredPrompt(null);
      setIsInstallModalOpen(false);
    };
    window.addEventListener("pwa-prompt-ready", handlePromptReady);
    window.addEventListener("pwa-installed", handleAppInstalled);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener("pwa-prompt-ready", handlePromptReady);
      window.removeEventListener("pwa-installed", handleAppInstalled);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [deferredPrompt]);
  const triggerNativeInstall = async () => {
    const promptToUse = deferredPrompt || globalPromptEvent;
    if (!promptToUse) {
      console.warn("PWA: beforeinstallprompt is not available on this browser/session.");
      return "unavailable";
    }
    try {
      await promptToUse.prompt();
      const choice = await promptToUse.userChoice;
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
        globalPromptEvent = null;
        setDeferredPrompt(null);
        return "accepted";
      }
      return "dismissed";
    } catch (err) {
      console.warn("PWA prompt execution error:", err);
      return "unavailable";
    }
  };
  const openInstallModal = () => setIsInstallModalOpen(true);
  const closeInstallModal = () => setIsInstallModalOpen(false);
  return {
    isInstallable: !!(deferredPrompt || globalPromptEvent) || isIOS,
    hasNativePrompt: !!(deferredPrompt || globalPromptEvent),
    isInstalled,
    isIOS,
    isAndroid,
    isInstallModalOpen,
    openInstallModal,
    closeInstallModal,
    triggerNativeInstall
  };
}
const DEFAULT_APK = {
  downloadUrl: "https://github.com/Abdmalik0/halaba-fc/releases/download/v1.0/HalabaCityFC-v1.0-debug.apk",
  fileName: "HalabaCityFC-v1.0-debug.apk",
  version: "v1.0",
  sizeFormatted: "22.3 MB"
};
const AppStoreInstallCard$1 = ({
  mode = "embedded",
  onClose
}) => {
  const { language } = useClub();
  const { isInstalled, isIOS } = usePWAInstall();
  if (isInstalled) {
    return null;
  }
  const [selectedOS, setSelectedOS] = reactExports.useState(() => {
    return isIOS ? "ios" : "android";
  });
  const [downloadStarted, setDownloadStarted] = reactExports.useState(false);
  const [apkInfo, setApkInfo] = reactExports.useState(DEFAULT_APK);
  const [isResolving, setIsResolving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let isMounted = true;
    const fetchLatestApk = async () => {
      var _a;
      try {
        const res = await fetch("/api/latest-apk");
        if (res.ok) {
          const data = await res.json();
          if (data && data.downloadUrl && isMounted) {
            setApkInfo({
              downloadUrl: data.downloadUrl,
              fileName: data.fileName || DEFAULT_APK.fileName,
              version: data.version || DEFAULT_APK.version,
              sizeFormatted: data.sizeFormatted || DEFAULT_APK.sizeFormatted
            });
            return;
          }
        }
      } catch (err) {
        console.debug("Failed to fetch from /api/latest-apk, checking GitHub directly:", err);
      }
      try {
        const ghRes = await fetch("https://api.github.com/repos/Abdmalik0/halaba-fc/releases", {
          headers: { Accept: "application/vnd.github.v3+json" }
        });
        if (ghRes.ok) {
          const releases = await ghRes.json();
          if (Array.isArray(releases)) {
            for (const rel of releases) {
              const asset = (_a = rel.assets) == null ? void 0 : _a.find(
                (a) => typeof (a == null ? void 0 : a.name) === "string" && a.name.toLowerCase().endsWith(".apk")
              );
              if (asset && isMounted) {
                const mb = (asset.size / (1024 * 1024)).toFixed(1);
                setApkInfo({
                  downloadUrl: asset.browser_download_url,
                  fileName: asset.name,
                  version: rel.tag_name || "Latest",
                  sizeFormatted: "".concat(mb, " MB")
                });
                return;
              }
            }
          }
        }
      } catch (err) {
        console.debug("Direct GitHub API check skipped/rate-limited:", err);
      }
    };
    fetchLatestApk();
    return () => {
      isMounted = false;
    };
  }, []);
  const handleDownloadAPK = async () => {
    setIsResolving(true);
    setDownloadStarted(true);
    let targetUrl = apkInfo.downloadUrl;
    let targetFileName = apkInfo.fileName;
    try {
      if (!targetUrl || targetUrl === "/HalabaCityFC-v1.0-debug.apk") {
        const res = await fetch("/api/latest-apk");
        if (res.ok) {
          const data = await res.json();
          if (data == null ? void 0 : data.downloadUrl) {
            targetUrl = data.downloadUrl;
            targetFileName = data.fileName || targetFileName;
          }
        }
      }
    } catch (e) {
      targetUrl = DEFAULT_APK.downloadUrl;
    } finally {
      setIsResolving(false);
    }
    const link = document.createElement("a");
    link.href = targetUrl;
    link.setAttribute("download", targetFileName);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 500);
  };
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900/90 backdrop-blur-md px-5 py-4 border-b border-neutral-800 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 36 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-sm text-white uppercase tracking-wider", children: language === "am" ? "የሀላባ ከተማ ሞባይል መተግበሪያ" : "HALABA City FC App" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-emerald-400 font-medium", children: language === "am" ? "ይፋዊ የስልክ መተግበሪያ" : "Official Club Mobile App" })
        ] })
      ] }),
      onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer",
          "aria-label": "Close",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-7 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 p-1.5 bg-neutral-900 rounded-2xl border border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSelectedOS("android");
              setDownloadStarted(false);
            },
            className: "py-3 px-4 rounded-xl font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ".concat(selectedOS === "android" ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-950/60 scale-[1.01]" : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4567c.1082-.1875.0441-.4282-.1434-.5364-.1878-.1082-.4283-.0441-.5365.1434l-2.0227 3.503c-1.5583-.7104-3.3242-1.1217-5.1749-1.1217-1.8507 0-3.6166.4113-5.1749 1.1217L4.8007 5.4717c-.1082-.1875-.3487-.2516-.5365-.1434-.1875.1082-.2516.3489-.1434.5364l1.996 3.4567C2.6885 11.1611.3438 14.9392.0001 19.3496h23.9998c-.3437-4.4104-2.6884-8.1885-6.1199-10.0282" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Android (APK)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setSelectedOS("ios");
            },
            className: "py-3 px-4 rounded-xl font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ".concat(selectedOS === "ios" ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-950/60 scale-[1.01]" : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.9c.62-.75 1.04-1.8 0.92-2.9-.9.04-2 .6-2.65 1.35-.58.65-1.09 1.73-.95 2.8 1.01.08 2.06-.5 2.68-1.25z" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "iOS (iPhone)" })
            ]
          }
        )
      ] }),
      selectedOS === "android" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-neutral-900/90 border border-emerald-500/30 text-center space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sports font-black text-lg text-white uppercase tracking-wide", children: language === "am" ? "የአንድሮይድ መተግበሪያ (APK) አውርድ" : "Halaba City FC Android APK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mt-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xxs font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: apkInfo.version })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 font-mono bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800", children: apkInfo.sizeFormatted }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400", children: language === "am" ? "ይፋዊ የGitHub ስራ" : "GitHub Actions Release" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleDownloadAPK,
            disabled: isResolving,
            className: "w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-emerald-950/80 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 hover:scale-[1.01] cursor-pointer disabled:opacity-75",
            children: [
              isResolving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isResolving ? language === "am" ? "ፋይሉን በማገናኘት ላይ..." : "Connecting to GitHub..." : language === "am" ? "አሁን አውርድ (Direct APK Download)" : "Download Android APK" })
            ]
          }
        ),
        downloadStarted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-left flex items-start gap-3 animate-in fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-400 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-white font-bold", children: language === "am" ? "ማውረድ ተጀምሯል!" : "Download Started!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ፋይሉ (".concat(apkInfo.fileName, ") ወርዶ ሲጠናቀቅ ማሳወቂያውን (Notification) ወይም የስልክዎን Downloads ፎልደር ከፍተው Install ያድርጉት።") : "Once downloaded, open ".concat(apkInfo.fileName, " from your notifications or Downloads folder to install.") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 text-left space-y-2 border-t border-neutral-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs font-bold text-neutral-400 uppercase tracking-wider", children: language === "am" ? "የአጫጫን ቅደም ተከተል፡" : "Quick Install Steps:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-neutral-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 rounded-lg bg-neutral-950/80 border border-neutral-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center font-bold text-xxs shrink-0", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የወረደውን APK ፋይል ይጫኑ" : "Tap the downloaded APK file" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 rounded-lg bg-neutral-950/80 border border-neutral-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center font-bold text-xxs shrink-0", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "“Install” የሚለውን ይጫኑ (ፍቃድ ከጠየቀ “Allow from this source” ይምረጡ)" : 'Tap "Install" (Allow unknown apps if prompted)' })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/Abdmalik0/halaba-fc/releases",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 text-xxs text-neutral-400 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-neutral-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "በGitHub Releases ለማየት" : "View GitHub Releases & Workflow" })
            ]
          }
        ) })
      ] }) }),
      selectedOS === "ios" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-neutral-900/90 border border-blue-900/40 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-blue-400 text-xs font-sports font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የአይፎን ሳፋሪ አጫጫን መመሪያ" : "Apple iOS Safari Installation (PWA)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs text-neutral-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: language === "am" ? "በሳፋሪ ታችኛው ክፍል የShare ምልክትን ይጫኑ" : "Tap the Safari Share button" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-blue-400 font-semibold text-xxs mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "Share (አጋራ)" : "Share" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5", children: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: language === "am" ? "ወደ ታች ዝቅ ብለው “Add to Home Screen” ይጫኑ" : 'Select "Add to Home Screen"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-xxs mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePlus, { className: "w-3.5 h-3.5 text-neutral-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add to Home Screen" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: language === "am" ? "በቀኝ በኩል “Add” የሚለውን ይጫኑ" : 'Tap "Add" in top-right' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-neutral-400 mt-0.5", children: language === "am" ? "ይፋዊው የሀላባ ከተማ ክለብ መተግበሪያ አርማ በስልክዎ ዋና ገጽ ላይ ይቀመጣል!" : "The Halaba City FC app icon will appear on your home screen and open in standalone mode!" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-xxs text-neutral-400 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የተረጋገጠ ይፋዊ የሀላባ ከተማ እግርኳስ ክለብ ሶፍትዌር" : "Verified Official Halaba City FC Software" })
      ] })
    ] })
  ] });
  if (mode === "modal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md w-full max-h-[92vh] overflow-y-auto", children: content }) });
  }
  return content;
};
const AppStoreInstallCard$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppStoreInstallCard: AppStoreInstallCard$1
}, Symbol.toStringTag, { value: "Module" }));
const SponsorAutoSlider = ({
  className = "",
  autoPlayInterval = 4500
}) => {
  const { sponsors, language, setCurrentPage, isAdminLoggedIn } = useClub();
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const [imageErrorMap, setImageErrorMap] = reactExports.useState({});
  const timerRef = reactExports.useRef(null);
  const activeSponsors = sponsors.filter((s) => s.active !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
  const totalSponsors = activeSponsors.length;
  const handleNext = () => {
    if (totalSponsors <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalSponsors);
  };
  const handlePrev = () => {
    if (totalSponsors <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalSponsors) % totalSponsors);
  };
  reactExports.useEffect(() => {
    if (isPaused || totalSponsors <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSponsors);
    }, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSponsors, autoPlayInterval, currentIndex]);
  reactExports.useEffect(() => {
    if (currentIndex >= totalSponsors && totalSponsors > 0) {
      setCurrentIndex(0);
    }
  }, [totalSponsors, currentIndex]);
  if (totalSponsors === 0) {
    return null;
  }
  const currentSponsor = activeSponsors[currentIndex] || activeSponsors[0];
  const isNetVibe = currentSponsor.id.includes("netvibe") || currentSponsor.name.toLowerCase().includes("netvibe");
  const localizedName = language === "am" && currentSponsor.nameAm ? currentSponsor.nameAm : language === "om" && currentSponsor.nameOm ? currentSponsor.nameOm : currentSponsor.name;
  const localizedTier = language === "am" && currentSponsor.tierAm ? currentSponsor.tierAm : currentSponsor.tier;
  const localizedDesc = language === "am" && currentSponsor.descriptionAm ? currentSponsor.descriptionAm : currentSponsor.description;
  const hasImageError = Boolean(imageErrorMap[currentSponsor.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "w-full max-w-5xl mx-auto my-6 select-none ".concat(className),
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      role: "region",
      "aria-label": "Official Club Sponsors & Partners Carousel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5 px-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xxs font-sports font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3 h-3 text-amber-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የክለቡ ስፖንሰሮችና አጋሮች" : language === "om" ? "Ispoonsaroota fi Hiriyoota Seera Qabeeyyii" : "Official Club Sponsors & Partners" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs text-neutral-400 font-mono hidden sm:inline", children: [
              "(",
              currentIndex + 1,
              " / ",
              totalSponsors,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsPaused(!isPaused),
                title: isPaused ? "Resume auto-play" : "Pause auto-play",
                className: "p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 text-xxs transition-colors",
                "aria-label": isPaused ? "Resume auto-play" : "Pause auto-play",
                children: isPaused ? /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-3 h-3" })
              }
            ),
            isAdminLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setCurrentPage("admin"),
                className: "text-xxs text-amber-400 hover:text-amber-300 px-2 py-1 rounded bg-neutral-900 border border-amber-500/30 font-sports font-bold tracking-wider uppercase transition-colors",
                children: language === "am" ? "ስፖንሰሮችን አርትዕ" : "Edit Posters"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handlePrev,
                className: "p-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all hover:scale-105 active:scale-95",
                "aria-label": "Previous sponsor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleNext,
                className: "p-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all hover:scale-105 active:scale-95",
                "aria-label": "Next sponsor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 border border-neutral-700/70 shadow-2xl transition-all duration-500 hover:border-red-500/40",
            style: { backgroundColor: "#171717" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700",
                  style: {
                    background: isNetVibe ? "radial-gradient(circle, #00d2ff, #0055ff)" : "radial-gradient(circle, #dc2626, #f59e0b)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-15 transition-all duration-700",
                  style: {
                    background: isNetVibe ? "radial-gradient(circle, #3b82f6, #1e3a8a)" : "radial-gradient(circle, #059669, #047857)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row items-stretch min-h-[200px] sm:min-h-[230px] md:min-h-[260px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:w-5/12 lg:w-4/12 bg-neutral-950/90 p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800/80 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full h-40 sm:h-48 md:h-52 flex items-center justify-center rounded-2xl bg-neutral-900/80 border border-neutral-800 p-3 shadow-inner overflow-hidden", children: [
                    hasImageError ? (
                      /* Fallback poster when image cannot be displayed */
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4", children: [
                        isNetVibe ? /* @__PURE__ */ jsxRuntimeExports.jsx(NetVibeSvgEmblem, { sizePx: 72 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-8 h-8" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-sm text-white uppercase mt-2", children: localizedName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-amber-400 font-semibold uppercase", children: localizedTier })
                      ] })
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: currentSponsor.imageUrl,
                        alt: "".concat(currentSponsor.name, " official poster"),
                        className: "max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105",
                        onError: () => {
                          setImageErrorMap((prev) => ({ ...prev, [currentSponsor.id]: true }));
                        },
                        loading: "eager"
                      },
                      currentSponsor.id
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-xxs text-neutral-300 font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5 text-amber-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider text-[10px]", children: language === "am" ? "የተረጋገጠ አጋር" : "Verified Partner" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-5 sm:p-7 flex flex-col justify-between text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sports font-bold tracking-wider uppercase border ".concat(isNetVibe ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-950/50" : "bg-red-600/15 border-red-500/40 text-red-300 shadow-sm shadow-red-950/50"),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: localizedTier })
                          ]
                        }
                      ),
                      isNetVibe && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-300 text-xxs font-bold uppercase", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-cyan-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "መተግበሪያውን ያበለፀገ" : "App Developer" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-sports font-black text-white tracking-wide uppercase drop-shadow-sm", children: localizedName }),
                    localizedDesc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-2xl", children: localizedDesc })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xxs text-neutral-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ኦፊሴላዊ የሀላባ ከተማ እግር ኳስ ክለብ አጋር" : "Official Halaba City FC Sponsor & Technology Partner" })
                    ] }),
                    currentSponsor.websiteUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: currentSponsor.websiteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-secondary-amber text-white font-sports font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 transition-all hover:scale-102 active:scale-95 group",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "አጋሩን ይጎብኙ" : language === "om" ? "Dhaabbata Daawwadhaa" : "Visit Partner" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/70 border-t border-neutral-800/60 px-4 py-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: activeSponsors.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCurrentIndex(idx),
                    className: "transition-all duration-300 rounded-full ".concat(idx === currentIndex ? "w-6 h-2 btn-secondary-amber" : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"),
                    "aria-label": "Go to slide ".concat(idx + 1, ": ").concat(s.name)
                  },
                  s.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xxs text-neutral-400 font-mono flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3 text-neutral-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    language === "am" ? "ስፖንሰር" : "Sponsor",
                    " ",
                    currentIndex + 1,
                    " / ",
                    totalSponsors
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
};
const teamTranslations = {
  halaba: {
    en: "Halaba Ketema (Berberewochu)",
    am: "ሀላባ ከተማ (በርበሬዎቹ)",
    om: "Halaba Ketema (Berberewochu)"
  },
  cbe_sa: {
    en: "Ethiopia Nigd Bank (CBE SA)",
    am: "ኢትዮጵያ ንግድ ባንክ",
    om: "Baankii Daldala Itoophiyaa (CBE)"
  },
  insurance: {
    en: "Ethiopian Medhin (Insurance)",
    am: "ኢትዮጵያ መድን",
    om: "Inshuraansii Itoophiyaa (Medhin)"
  },
  fasil: {
    en: "Fasil Kenema",
    am: "ፋሲል ከነማ",
    om: "Faasiil Kanamaa"
  },
  adama: {
    en: "Adama Kenema SC",
    am: "አዳማ ከነማ",
    om: "Adaamaa Kanamaa"
  },
  electric: {
    en: "Ethio Electric",
    am: "ኢትዮ ኤሌክትሪክ",
    om: "Ityoo Elektiriik"
  },
  bahirdar: {
    en: "Bahir Dar Kenema",
    am: "ባሕር ዳር ከነማ",
    om: "Baahir Daar Kanamaa"
  },
  bunna: {
    en: "Ethiopian Coffee SC",
    am: "የኢትዮጵያ ቡና",
    om: "Buna Itoophiyaa"
  },
  saintgeorge: {
    en: "Saint George SC (Kidus Giorgis)",
    am: "ቅዱስ ጊዮርጊስ",
    om: "Qulqulluu Giyoorgis"
  },
  defence: {
    en: "Defence Force SC (Mekelakeya)",
    am: "መከላከያ",
    om: "Garee Raayyaa Ittisaa"
  },
  sidama: {
    en: "Sidama Coffee SC",
    am: "ሲዳማ ቡና",
    om: "Buna Sidaamaa"
  },
  wolaitta: {
    en: "Wolaitta Dicha",
    am: "ወላይታ ድቻ",
    om: "Walaayittaa Dicha"
  },
  hosaena: {
    en: "Hadiya Hossana",
    am: "ሀዲያ ሆሳዕና",
    om: "Haadiyaa Hosaa’inaa"
  },
  diredawa: {
    en: "Dire Dawa Kenema",
    am: "ድሬዳዋ ከነማ",
    om: "Dirre Dhawaa Kanamaa"
  },
  gamochencha: {
    en: "Gamo Chencha",
    am: "ጋሞ ጬንቻ",
    om: "Gaamoo Cencaa"
  },
  welwalo: {
    en: "Welwalo Adigrat University",
    am: "ወልዋሎ ዓዲግራት ዩኒቨርሲቲ",
    om: "Walwaaloo Yuunivarsiitii Addigraat"
  },
  shaggar: {
    en: "Shaggar City",
    am: "ሻገር ከተማ",
    om: "Magaalaa Shaggar"
  },
  negelle: {
    en: "Negelle Arsi",
    am: "ነገሌ አርሲ",
    om: "Nageellee Arsii"
  },
  hawassa: {
    en: "Hawassa Kenema",
    am: "ሀዋሳ ከነማ",
    om: "Hawaasaa Kanamaa"
  }
};
const normalizeTeamKey$1 = (rawId, rawName) => {
  const str = "".concat(rawId || "", " ").concat(rawName || "").toLowerCase();
  if (str.includes("halaba")) return "halaba";
  if (str.includes("cbe") || str.includes("nigd") || rawId === "149377") return "cbe_sa";
  if (str.includes("medhin") || str.includes("insurance") || rawId === "146921") return "insurance";
  if (str.includes("adama") || rawId === "141024") return "adama";
  if (str.includes("electric") || rawId === "146920") return "electric";
  if (str.includes("fasil") || rawId === "141026") return "fasil";
  if (str.includes("bahir") || rawId === "141025") return "bahirdar";
  if (str.includes("bunna") || str.includes("coffee") && !str.includes("sidama")) return "bunna";
  if (str.includes("george") || str.includes("giorgis")) return "saintgeorge";
  if (str.includes("defence") || str.includes("mekelakeya")) return "defence";
  if (str.includes("welwalo")) return "welwalo";
  if (str.includes("dicha") || str.includes("wolaitta")) return "wolaitta";
  if (str.includes("hosaena") || str.includes("hossana")) return "hosaena";
  if (str.includes("diredawa") || str.includes("dire dawa")) return "diredawa";
  if (str.includes("chencha") || str.includes("gamo")) return "gamochencha";
  if (str.includes("sidama")) return "sidama";
  if (str.includes("shaggar")) return "shaggar";
  if (str.includes("negelle")) return "negelle";
  if (str.includes("hawassa")) return "hawassa";
  return (rawId || "").replace(/[^a-z0-9]/g, "");
};
const getLocalizedTeamName = (teamId, teamName, lang = "en") => {
  var _a;
  const key = normalizeTeamKey$1(teamId, teamName);
  if ((_a = teamTranslations[key]) == null ? void 0 : _a[lang]) {
    return teamTranslations[key][lang];
  }
  if (lang === "am" && teamName && /[\u1200-\u137F]/.test(teamName)) {
    return teamName;
  }
  return teamName || teamId || "Team";
};
const playerTranslations = {
  "Biniam Teklu": { en: "Biniam Teklu", am: "ቢንያም ተክሉ", om: "Biniyaam Takluu" },
  "Mekonnen Abera": { en: "Mekonnen Abera", am: "መኮንን አበራ", om: "Makonnin Abarraa" },
  "Henok Haile": { en: "Henok Haile", am: "ሄኖክ ኃይሌ", om: "Heenook Haayilee" },
  "Biruk Tadesse": { en: "Biruk Tadesse", am: "ብሩክ ታደሰ", om: "Biruk Taaddasaa" },
  "Samson Fikru": { en: "Samson Fikru", am: "ሳምሶን ፍቅሩ", om: "Saamsoon Fiqruu" },
  "Kassahun Negash": { en: "Kassahun Negash", am: "ካሳሁን ነጋሽ", om: "Kaassaahuun Nagaash" },
  "Mohammed Seid": { en: "Mohammed Seid", am: "መሀመድ ሰይድ", om: "Mahaammad Sa’iid" },
  "Amanuel Tesfaye": { en: "Amanuel Tesfaye", am: "አማኑኤል ተስፋዬ", om: "Amaanu’eel Tasfaayee" },
  "Yohannes Bekele": { en: "Yohannes Bekele", am: "ዮሐንስ በቀለ", om: "Yohaannis Baqqalaa" },
  "Desta Alemayehu": { en: "Desta Alemayehu", am: "ደስታ አለማየሁ", om: "Dastaa Alamayyahu" },
  "Abdi Gemeda": { en: "Abdi Gemeda", am: "አብዲ ገመዳ", om: "Abdi Gamadaa" },
  "Elias Zewdu": { en: "Elias Zewdu", am: "ኤልያስ ዘውዱ", om: "Eeliyaas Zawuduu" },
  "Mulugeta Wolde": { en: "Mulugeta Wolde", am: "ሙሉጌታ ወልዴ", om: "Muluugeetaa Waldee" },
  "Biniam Getachew": { en: "Biniam Getachew", am: "ቢንያም ጌታቸው", om: "Biniyaam Getaachoo" },
  "Tarekegn Assefa": { en: "Tarekegn Assefa", am: "ታሪከኝ አሰፋ", om: "Taarikaññ Asaffaa" },
  "Fikadu Shiferaw": { en: "Fikadu Shiferaw", am: "ፍቃዱ ሽፈራው", om: "Fiqaaduu Shifarraaw" },
  "Kaleb Amankwah": { en: "Kaleb Amankwah", am: "ካሌብ አማንክዋህ", om: "Kaaleeb Amaankwaa" },
  "Romaric": { en: "Romaric", am: "ሮማሪክ", om: "Roomaariik" },
  "Yonatan Hailu": { en: "Yonatan Hailu", am: "ዮናታን ኃይሉ", om: "Yoonaataan Haayiluu" },
  "Dr. Kassim Ahmed": { en: "Dr. Kassim Ahmed", am: "ዶ/ር ቃሲም አህመድ", om: "Dr. Qaasim Ahimad" },
  "Solomon Kebede": { en: "Solomon Kebede", am: "ሰለሞን ከበደ", om: "Solomoon Kabbadaa" },
  "Getachew Dinberu": { en: "Getachew Dinberu", am: "ጌታቸው ድንበሩ", om: "Getaachoo Dinbaruu" },
  "Worku Mengistu": { en: "Worku Mengistu", am: "ወርቁ መንግስቱ", om: "Warquu Mangistuu" },
  "Dr. Nahom Tsegaye": { en: "Dr. Nahom Tsegaye", am: "ዶ/ር ናሆም ፀጋዬ", om: "Dr. Naahoom Tsaggaayee" },
  "Melaku Belachew": { en: "Melaku Belachew", am: "መላኩ በላቸው", om: "Malaakuu Balaachoo" }
};
const getLocalizedPersonName = (name, lang = "en") => {
  var _a;
  return ((_a = playerTranslations[name]) == null ? void 0 : _a[lang]) || name;
};
const positionTranslations = {
  Goalkeeper: { en: "Goalkeeper", am: "ግብ ጠባቂ", om: "Eegduu Galchii" },
  Defender: { en: "Defender", am: "ተከላካይ", om: "Ittisaa" },
  Midfielder: { en: "Midfielder", am: "አማካኝ", om: "Giddu-galeessa" },
  Forward: { en: "Forward", am: "አጥቂ", om: "Fuuldura" },
  ALL: { en: "All Positions", am: "ሁሉም ቦታዎች", om: "Bakka Hunda" }
};
const getLocalizedPosition = (pos, lang = "en") => {
  var _a;
  return ((_a = positionTranslations[pos]) == null ? void 0 : _a[lang]) || pos;
};
const roleTranslations = {
  "Club President": { en: "Club President", am: "የክለቡ ፕሬዝዳንት", om: "Pirezidaantii Kilabichaa" },
  "Head Coach": { en: "Head Coach", am: "ዋና አሰልጣኝ", om: "Leenjisaa Ol’aanaa" },
  "Assistant Coach": { en: "Assistant Coach", am: "ረዳት አሰልጣኝ", om: "Gargaaraa Leenjisaa" },
  "Goalkeeping Coach": { en: "Goalkeeping Coach", am: "የግብ ጠባቂዎች አሰልጣኝ", om: "Leenjisaa Eegdota Galchii" },
  "Chief Medical Officer & Physiotherapist": { en: "Chief Medical Officer & Physiotherapist", am: "ዋና የህክምና ባለሙያና ፊዚዮቴራፒስት", om: "Ogeessa Fayyaa fi Fiiziyooteraapistii" },
  "Academy Director & Youth Scout": { en: "Academy Director & Youth Scout", am: "የአካዳሚ ዳይሬክተር እና የታዳጊዎች መልማይ", om: "Daayrektara Akaadaamii" }
};
const getLocalizedRole = (role, lang = "en") => {
  var _a;
  return ((_a = roleTranslations[role]) == null ? void 0 : _a[lang]) || role;
};
const departmentTranslations = {
  Management: { en: "Management", am: "አመራር", om: "Hoggansa" },
  Coaching: { en: "Coaching", am: "አሰልጣኝ ቡድን", om: "Leenjii" },
  Medical: { en: "Medical", am: "ህክምና ክፍል", om: "Kutaa Fayyaa" }
};
const getLocalizedDepartment = (dept, lang = "en") => {
  var _a;
  return ((_a = departmentTranslations[dept]) == null ? void 0 : _a[lang]) || dept;
};
const venueTranslations = {
  "Halaba Stadium, Halaba Kulito": { en: "Halaba Stadium, Halaba Kulito", am: "ሀላባ ስታዲየም፣ ሀላባ ቁሊቶ", om: "Istaadiyeemii Halabaa, Halaba Qulitoo" },
  "Halaba Stadium": { en: "Halaba Stadium", am: "ሀላባ ስታዲየም", om: "Istaadiyeemii Halabaa" },
  "Wolaita Sodo Stadium, Wolaita Sodo": { en: "Wolaita Sodo Stadium, Wolaita Sodo", am: "ወላይታ ሶዶ ስታዲየም፣ ወላይታ ሶዶ", om: "Istaadiyeemii Walaayittaa Soddoo" },
  "Hawassa University Stadium": { en: "Hawassa University Stadium", am: "ሀዋሳ ዩኒቨርሲቲ ስታዲየም", om: "Istaadiyeemii Yuunivarsiitii Hawaasaa" },
  "Adama Stadium": { en: "Adama Stadium", am: "አዳማ ስታዲየም", om: "Istaadiyeemii Adaamaa" },
  "Adama ASTU Stadium": { en: "Adama ASTU Stadium", am: "አዳማ አስቱ ስታዲየም", om: "Istaadiyeemii ASTU Adaamaa" },
  "Abebe Bikila Stadium, Addis Ababa": { en: "Abebe Bikila Stadium, Addis Ababa", am: "አበበ ቢቂላ ስታዲየም፣ አዲስ አበባ", om: "Istaadiyeemii Abbabaa Biqilaa, Finfinnee" }
};
const getLocalizedVenue = (venue, lang = "en") => {
  var _a;
  if ((_a = venueTranslations[venue]) == null ? void 0 : _a[lang]) return venueTranslations[venue][lang];
  for (const [key, val] of Object.entries(venueTranslations)) {
    if (venue.includes(key)) return val[lang];
  }
  return venue;
};
const roundTranslations = {
  "Round 1": { en: "Round 1", am: "ሳምንት 1", om: "Marsaa 1" },
  "Round 2": { en: "Round 2", am: "ሳምንት 2", om: "Marsaa 2" },
  "Round 3": { en: "Round 3", am: "ሳምንት 3", om: "Marsaa 3" },
  "Round 4": { en: "Round 4", am: "ሳምንት 4", om: "Marsaa 4" },
  "Round 5": { en: "Round 5", am: "ሳምንት 5", om: "Marsaa 5" }
};
const getLocalizedRound = (round, lang = "en") => {
  var _a;
  if (!round) return "";
  if ((_a = roundTranslations[round]) == null ? void 0 : _a[lang]) return roundTranslations[round][lang];
  const num = round.replace(/[^\d]/g, "");
  if (num) {
    if (lang === "am") return "ሳምንት ".concat(num);
    if (lang === "om") return "Marsaa ".concat(num);
  }
  return round;
};
const competitionTranslations = {
  ETHIOPIAN_PREMIER_LEAGUE: { en: "Ethiopian Premier League", am: "የኢትዮጵያ ፕሪሚየር ሊግ", om: "Liigii Piriimeeraa Itoophiyaa" },
  "Ethiopian Premier League": { en: "Ethiopian Premier League", am: "የኢትዮጵያ ፕሪሚየር ሊግ", om: "Liigii Piriimeeraa Itoophiyaa" },
  ETHIOPIAN_CUP: { en: "Ethiopian Cup", am: "የኢትዮጵያ ዋንጫ", om: "Waancaa Itoophiyaa" },
  "Ethiopian Cup": { en: "Ethiopian Cup", am: "የኢትዮጵያ ዋንጫ", om: "Waancaa Itoophiyaa" },
  CAF_CONFEDERATION_CUP: { en: "CAF Confederation Cup", am: "የካፍ ኮንፌዴሬሽን ዋንጫ", om: "Waancaa Konfedereeshinii CAF" }
};
const getLocalizedCompetition = (comp, lang = "en") => {
  var _a;
  if ((_a = competitionTranslations[comp]) == null ? void 0 : _a[lang]) return competitionTranslations[comp][lang];
  if (comp.includes("Premier League") || comp.includes("PREMIER_LEAGUE")) {
    if (lang === "am") return comp.replace(/Ethiopian Premier League/g, "የኢትዮጵያ ፕሪሚየር ሊግ").replace(/Round/g, "ሳምንት");
    if (lang === "om") return comp.replace(/Ethiopian Premier League/g, "Liigii Piriimeeraa Itoophiyaa").replace(/Round/g, "Marsaa");
  }
  return comp;
};
const categoryTranslations = {
  ALL: { en: "All Stories", am: "ሁሉም ዜናዎች", om: "Oduu Hunda" },
  CLUB_NEWS: { en: "Club News", am: "የክለብ ዜና", om: "Oduu Kilabii" },
  MATCH_REPORTS: { en: "Match Reports", am: "የጨዋታ ሪፖርት", om: "Gabaasa Taphaa" },
  TRANSFERS: { en: "Transfers", am: "ዝውውሮች", om: "Jijjiirraa" },
  INTERVIEWS: { en: "Interviews", am: "ቃለ-ምልልስ", om: "Gaaf-deebii" },
  ACADEMY: { en: "Youth Academy", am: "ታዳጊዎች አካዳሚ", om: "Akaadaamii Dargaggootaa" },
  COMMUNITY: { en: "Community & Fans", am: "ደጋፊዎችና ማህበረሰብ", om: "Hawaasa & Deeggartoota" }
};
const getLocalizedCategory = (cat, lang = "en") => {
  var _a;
  return ((_a = categoryTranslations[cat]) == null ? void 0 : _a[lang]) || cat.replace(/_/g, " ");
};
const shopCategoryTranslations = {
  ALL: { en: "All Merchandise", am: "ሁሉም እቃዎች", om: "Meeshaalee Hunda" },
  JERSEY: { en: "Match Jerseys", am: "የጨዋታ ማሊያዎች", om: "Jeersiiwwan Taphaa" },
  KIT: { en: "Jackets & Training", am: "ጃኬቶችና የስልጠና ልብሶች", om: "Uffata Shaakalaa" },
  ACCESSORY: { en: "Accessories & Scarves", am: "የደጋፊዎች ሻርፕና ቁሳቁስ", om: "Meeshaalee Deggartootaa" }
};
const getLocalizedShopCategory = (cat, lang = "en") => {
  var _a;
  return ((_a = shopCategoryTranslations[cat]) == null ? void 0 : _a[lang]) || cat;
};
const getFormBadgeLocalized = (formChar, lang = "en") => {
  if (lang === "am") {
    if (formChar === "W") return "አ";
    if (formChar === "D") return "አቻ";
    if (formChar === "L") return "ተ";
  }
  if (lang === "om") {
    if (formChar === "W") return "M";
    if (formChar === "D") return "Q";
    if (formChar === "L") return "A";
  }
  return formChar;
};
const SHORT_TEAM_NAMES = {
  halaba: {
    en: "Halaba City",
    am: "ሀላባ ከተማ",
    om: "Halaba City"
  },
  cbe_sa: {
    en: "CBE SA",
    am: "ንግድ ባንክ",
    om: "CBE SA"
  },
  insurance: {
    en: "Eth. Medhin",
    am: "ኢትዮጵያ መድን",
    om: "Eth. Medhin"
  },
  medhin: {
    en: "Eth. Medhin",
    am: "ኢትዮጵያ መድን",
    om: "Eth. Medhin"
  },
  fasil: {
    en: "Fasil Kenema",
    am: "ፋሲል ከነማ",
    om: "Faasiil"
  },
  adama: {
    en: "Adama City",
    am: "አዳማ ከነማ",
    om: "Adaamaa"
  },
  electric: {
    en: "Eth. Electric",
    am: "መብራት ኃይል",
    om: "Elektiriik"
  },
  bahirdar: {
    en: "Bahir Dar",
    am: "ባሕር ዳር",
    om: "Baahir Daar"
  },
  bunna: {
    en: "Eth. Coffee",
    am: "ኢትዮጵያ ቡና",
    om: "Buna Itoophiyaa"
  },
  saintgeorge: {
    en: "St. George",
    am: "ቅዱስ ጊዮርጊስ",
    om: "St. George"
  },
  giorgis: {
    en: "St. George",
    am: "ቅዱስ ጊዮርጊስ",
    om: "St. George"
  },
  defence: {
    en: "Defence Force",
    am: "መከላከያ",
    om: "Raayyaa Ittisaa"
  },
  mekelakeya: {
    en: "Defence Force",
    am: "መከላከያ",
    om: "Raayyaa Ittisaa"
  },
  sidama: {
    en: "Sidama Coffee",
    am: "ሲዳማ ቡና",
    om: "Buna Sidaamaa"
  },
  wolaitta: {
    en: "Wolaitta Dicha",
    am: "ወላይታ ድቻ",
    om: "Wolaitta Dicha"
  },
  dicha: {
    en: "Wolaitta Dicha",
    am: "ወላይታ ድቻ",
    om: "Wolaitta Dicha"
  },
  hosaena: {
    en: "Hadiya Hossana",
    am: "ሀዲያ ሆሳዕና",
    om: "Hadiya Hossana"
  },
  hossana: {
    en: "Hadiya Hossana",
    am: "ሀዲያ ሆሳዕና",
    om: "Hadiya Hossana"
  },
  diredawa: {
    en: "Dire Dawa",
    am: "ድሬዳዋ ከነማ",
    om: "Dirre Dhawaa"
  },
  gamochencha: {
    en: "Gamo Chencha",
    am: "ጋሞ ጬንቻ",
    om: "Gamo Chencha"
  },
  welwalo: {
    en: "Welwalo",
    am: "ወልዋሎ",
    om: "Walwaaloo"
  },
  hawassa: {
    en: "Hawassa City",
    am: "ሀዋሳ ከነማ",
    om: "Hawaasaa"
  },
  shaggar: {
    en: "Shaggar City",
    am: "ሻገር ከተማ",
    om: "Magaalaa Shaggar"
  },
  negelle: {
    en: "Negelle Arsi",
    am: "ነገሌ አርሲ",
    om: "Nageellee Arsii"
  },
  shire: {
    en: "Suhul Shire",
    am: "ሱሁል ሽሬ",
    om: "Suhul Shire"
  }
};
function normalizeTeamKey(id, name) {
  const combined = "".concat(id || "", " ").concat(name || "").toLowerCase();
  if (combined.includes("halaba")) return "halaba";
  if (combined.includes("cbe") || combined.includes("nigd") || combined.includes("commercial bank")) return "cbe_sa";
  if (combined.includes("insurance") || combined.includes("medhin")) return "insurance";
  if (combined.includes("fasil")) return "fasil";
  if (combined.includes("adama")) return "adama";
  if (combined.includes("electric") || combined.includes("mebrat")) return "electric";
  if (combined.includes("bahir")) return "bahirdar";
  if (combined.includes("saint") || combined.includes("george") || combined.includes("giorgis")) return "saintgeorge";
  if (combined.includes("defence") || combined.includes("defense") || combined.includes("mekelakeya") || combined.includes("mechal")) return "defence";
  if (combined.includes("sidama")) return "sidama";
  if (combined.includes("bunna") || combined.includes("coffee")) return "bunna";
  if (combined.includes("wolaitta") || combined.includes("dicha")) return "wolaitta";
  if (combined.includes("hosaena") || combined.includes("hossana") || combined.includes("hadiya")) return "hosaena";
  if (combined.includes("dire")) return "diredawa";
  if (combined.includes("gamo") || combined.includes("chencha")) return "gamochencha";
  if (combined.includes("welwalo") || combined.includes("adigrat")) return "welwalo";
  if (combined.includes("hawassa") || combined.includes("awassa")) return "hawassa";
  if (combined.includes("shaggar")) return "shaggar";
  if (combined.includes("negelle")) return "negelle";
  if (combined.includes("shire")) return "shire";
  return (id || "").toLowerCase().trim();
}
function formatTeamName(teamId, teamName, language = "en") {
  const key = normalizeTeamKey(teamId, teamName);
  if (SHORT_TEAM_NAMES[key]) {
    return SHORT_TEAM_NAMES[key][language] || SHORT_TEAM_NAMES[key].en;
  }
  let clean = (teamName || teamId || "Club").trim();
  clean = clean.replace(/\(.*?\)/g, "").trim();
  clean = clean.replace(/\bFootball Club\b/gi, "").replace(/\bSport Club\b/gi, "").replace(/\bSports Club\b/gi, "").replace(/\bFC\b/g, "").replace(/\bSC\b/g, "").replace(/\s+/g, " ").trim();
  return clean || teamName || "Club";
}
const HomePage = ({
  onOpenMatchModal,
  onOpenArticleModal
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const {
    t,
    language,
    setCurrentPage,
    matches,
    standings,
    news,
    clubInfo,
    openDonationModal,
    shopItems,
    openCheckoutModal
  } = useClub();
  const { isInstalled } = usePWAInstall();
  const isHalabaMatch = (m) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    return Boolean(
      m && (((_a2 = m.homeTeam) == null ? void 0 : _a2.isHalaba) || ((_b2 = m.awayTeam) == null ? void 0 : _b2.isHalaba) || ((_c2 = m.homeTeam) == null ? void 0 : _c2.id) === "halaba" || ((_d2 = m.awayTeam) == null ? void 0 : _d2.id) === "halaba" || ((_f2 = (_e2 = m.homeTeam) == null ? void 0 : _e2.name) == null ? void 0 : _f2.toLowerCase().includes("halaba")) || ((_h2 = (_g2 = m.awayTeam) == null ? void 0 : _g2.name) == null ? void 0 : _h2.toLowerCase().includes("halaba")))
    );
  };
  const upcomingHalabaMatches = matches.filter((m) => (m.status === "UPCOMING" || m.status === "LIVE") && isHalabaMatch(m)).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextMatch = upcomingHalabaMatches[0] || matches.find((m) => m.status === "UPCOMING" || m.status === "LIVE") || null;
  const finishedHalabaMatches = matches.filter((m) => m.status === "FINISHED" && isHalabaMatch(m)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestResult = finishedHalabaMatches[0] || matches.find((m) => m.status === "FINISHED") || null;
  const recentNews = news.slice(0, 3);
  const topStandings = standings.slice(0, 5);
  const halabaStanding = standings.find((t2) => t2.isHalaba);
  const homeNextTeam = nextMatch ? getLocalizedTeamName((_a = nextMatch.homeTeam) == null ? void 0 : _a.id, (_b = nextMatch.homeTeam) == null ? void 0 : _b.name, language) : "";
  const awayNextTeam = nextMatch ? getLocalizedTeamName((_c = nextMatch.awayTeam) == null ? void 0 : _c.id, (_d = nextMatch.awayTeam) == null ? void 0 : _d.name, language) : "";
  const homeNextShort = nextMatch ? formatTeamName((_e = nextMatch.homeTeam) == null ? void 0 : _e.id, homeNextTeam, language) : "";
  const awayNextShort = nextMatch ? formatTeamName((_f = nextMatch.awayTeam) == null ? void 0 : _f.id, awayNextTeam, language) : "";
  const nextVenue = nextMatch ? getLocalizedVenue(nextMatch.venue, language) : "";
  const homeLatestTeam = latestResult ? getLocalizedTeamName((_g = latestResult.homeTeam) == null ? void 0 : _g.id, (_h = latestResult.homeTeam) == null ? void 0 : _h.name, language) : "";
  const awayLatestTeam = latestResult ? getLocalizedTeamName((_i = latestResult.awayTeam) == null ? void 0 : _i.id, (_j = latestResult.awayTeam) == null ? void 0 : _j.name, language) : "";
  const homeLatestShort = latestResult ? formatTeamName((_k = latestResult.homeTeam) == null ? void 0 : _k.id, homeLatestTeam, language) : "";
  const awayLatestShort = latestResult ? formatTeamName((_l = latestResult.awayTeam) == null ? void 0 : _l.id, awayLatestTeam, language) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-red-950/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hero-background",
          style: {
            backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 10, 0.58) 0%, rgba(30, 3, 5, 0.66) 45%, rgba(10, 10, 10, 0.92) 85%, #0a0a0a 100%), url(".concat(ClubImages.heroStadiumJpg, ")")
          },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 transform hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 130, showGlow: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 animate-ping" }),
          t.heroTag
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase font-sports drop-shadow-lg", children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA CITY FC" }),
        ((_m = clubInfo.nickname) == null ? void 0 : _m.am) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-ethiopic font-bold text-[#fbc45f]",
            style: { color: "#fbc45f", borderColor: "#080808", borderWidth: "0px", borderStyle: "none" },
            children: clubInfo.nickname.am
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal", children: t.heroSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: openDonationModal,
              className: "px-6 py-3.5 rounded-xl btn-donate-emerald font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all ring-2 ring-emerald-500/40 hover:scale-102",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 fill-white text-white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.heroDonateBtn })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCurrentPage("membership"),
              className: "px-6 py-3.5 rounded-xl btn-membership-join font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.heroBtnJoin })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCurrentPage("shop"),
              className: "px-6 py-3.5 rounded-xl btn-shop-neutral font-bold text-sm sm:text-base tracking-wide uppercase font-sports flex items-center gap-2 transition-all hover:border-red-600/60",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-red-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.navShop })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-8 flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorAutoSlider, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      nextMatch && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-red-900/40 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-32 h-32 pointer-events-none",
            style: {
              background: "radial-gradient(circle at top right, rgba(220, 38, 38, 0.15), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.nextHalabaGame }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-amber-400 uppercase bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded font-sports", children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ" : nextMatch.competitionName.split("-")[0] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: nextMatch.homeTeam.id, teamName: homeNextTeam, size: 56, priority: true, className: "shrink-0 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block", title: homeNextTeam, children: homeNextShort }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 font-semibold uppercase", children: t.home })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex-shrink-0 flex flex-col items-center px-1.5 sm:px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-xl sm:text-2xl text-neutral-500", children: t.vs }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs font-mono font-bold text-amber-400 mt-1 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 whitespace-nowrap", children: [
                nextMatch.kickoffTime,
                " ",
                t.eatTimezone
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: nextMatch.awayTeam.id, teamName: awayNextTeam, size: 56, priority: true, className: "shrink-0 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block", title: awayNextTeam, children: awayNextShort }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 font-semibold uppercase", children: t.away })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-neutral-400 space-y-1 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-neutral-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300 font-medium", children: nextMatch.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-neutral-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextMatch.kickoffTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextVenue })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => onOpenMatchModal(nextMatch.id),
              className: "text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.viewMatchDetails }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrentPage("fixtures"),
              className: "text-xs text-neutral-400 hover:text-white transition-colors underline",
              children: t.allFixturesBtn
            }
          )
        ] })
      ] }),
      latestResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-lg text-white uppercase tracking-wider", children: t.latestResultTitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded", children: t.fullTime })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: latestResult.homeTeam.id, teamName: homeLatestTeam, size: 56, priority: true, className: "shrink-0 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block", title: homeLatestTeam, children: homeLatestShort })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex-shrink-0 flex flex-col items-center justify-center px-1.5 sm:px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-sports font-black text-2xl sm:text-3xl md:text-4xl text-emerald-400 whitespace-nowrap bg-neutral-950 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-xl border border-neutral-800 tracking-wider flex items-center justify-center gap-2 select-none shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_o = (_n = latestResult.score) == null ? void 0 : _n.home) != null ? _o : 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 font-normal text-xl sm:text-2xl", children: "-" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_q = (_p = latestResult.score) == null ? void 0 : _p.away) != null ? _q : 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 mt-1 font-medium whitespace-nowrap", children: t.fullTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: latestResult.awayTeam.id, teamName: awayLatestTeam, size: 56, priority: true, className: "shrink-0 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block", title: awayLatestTeam, children: awayLatestShort })
            ] })
          ] }),
          latestResult.scorers && latestResult.scorers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80 text-xs text-neutral-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 font-bold block mb-1 uppercase text-xxs tracking-wider", children: language === "am" ? "ጎል ያስቆጠሩ፡" : "Scorers:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1", children: latestResult.scorers.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚽" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: getLocalizedPersonName(s.player, language) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neutral-400", children: [
                "(",
                s.minute,
                "')"
              ] })
            ] }, idx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => onOpenMatchModal(latestResult.id),
              className: "text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.viewMatchDetails }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrentPage("fixtures"),
              className: "text-xs text-neutral-400 hover:text-white transition-colors underline",
              children: t.allFixturesBtn
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8 pb-3 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider", children: t.latestClubNews }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 mt-1", children: t.newsSubtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCurrentPage("news"),
            className: "flex items-center gap-1 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 uppercase tracking-wider font-sports",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ሁሉንም ይመልከቱ" : "View All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: recentNews.map((article) => {
        const title = article.title[language] || article.title.en;
        const summary = article.summary[language] || article.summary.en;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => onOpenArticleModal(article.id),
            className: "group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 shadow-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden bg-neutral-950", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: article.imageUrl || ClubImages.matchAction,
                    alt: title,
                    referrerPolicy: "no-referrer",
                    loading: "lazy",
                    onError: (e) => {
                      e.currentTarget.src = ClubImages.matchAction;
                    },
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/70 text-emerald-400 backdrop-blur-md", children: getLocalizedCategory(article.category, language) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-neutral-500 font-medium block", children: [
                    article.date,
                    " • ",
                    article.readTime
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-white group-hover:text-red-400 transition-colors mt-1 line-clamp-2", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 line-clamp-2 mt-2 leading-relaxed", children: summary })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-red-400 flex items-center gap-1 uppercase tracking-wider font-sports pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.readArticle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })
                ] })
              ] })
            ]
          },
          article.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: t.standingsPreviewTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 mt-1", children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን) • የ2026/27 የውድድር ዘመን (ሀላባ ከተማ በ".concat((halabaStanding == null ? void 0 : halabaStanding.position) || 4, "ኛ ደረጃ • ").concat((halabaStanding == null ? void 0 : halabaStanding.points) || 5, " ነጥብ)") : "Ethiopian Premier League (Top Tier) • 2026/27 Season (Halaba Ketema in #".concat((halabaStanding == null ? void 0 : halabaStanding.position) || 4, " • ").concat((halabaStanding == null ? void 0 : halabaStanding.points) || 5, " Pts)") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCurrentPage("standings"),
            className: "text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-wider self-start sm:self-auto font-sports",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.fullStandingsBtn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-x-auto max-w-full rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-800 text-xs font-bold uppercase text-neutral-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-center w-10", children: t.pos }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 min-w-[140px]", children: t.club }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center w-10", children: t.played }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center w-10", children: t.won }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center w-10", children: t.drawn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center w-10", children: t.lost }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-2 text-center w-12 hidden sm:table-cell", children: t.gd }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 text-right font-black w-12", children: t.pts })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/60", children: topStandings.map((team) => {
          const localizedTeam = getLocalizedTeamName(team.teamId, team.teamName, language);
          const shortName = formatTeamName(team.teamId, localizedTeam, language);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "transition-colors ".concat(team.isHalaba ? "bg-red-950/40 border-l-4 border-l-red-500 font-semibold" : "hover:bg-neutral-800/30"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-center font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block w-6 text-center text-xs py-0.5 rounded ".concat(team.position <= 2 ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-neutral-400"),
                    children: team.position
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: team.teamId, teamName: localizedTeam, size: 28, badgeUrl: team.badgeUrl, className: "shrink-0 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-sports text-sm sm:text-base tracking-wide truncate max-w-[130px] sm:max-w-none block ".concat(team.isHalaba ? "text-red-300 font-black" : "text-neutral-200"),
                      title: localizedTeam,
                      children: shortName
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: team.played }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: team.won }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: team.drawn }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400", children: team.lost }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center text-neutral-400 hidden sm:table-cell", children: team.goalDifference > 0 ? "+".concat(team.goalDifference) : team.goalDifference }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-right font-sports font-black text-lg text-white", children: team.points })
              ]
            },
            team.teamId
          );
        }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.shopBadge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider", children: language === "am" ? "የበርበሬዎቹን ማሊያ ይልበሱ" : "Wear the Berberewochu Colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 mt-1", children: language === "am" ? "በኢትዮጵያ ፕሪሚየር ሊግ የሚለበሱ ይፋዊ ማሊያዎች። በቻፓ ፈጣን ክፍያ ይግዙ።" : "Official Ethiopian Premier League kits manufactured with breathable athletic fabric. Direct Chapa checkout." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCurrentPage("shop"),
            className: "self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-sports font-bold uppercase text-xs tracking-wider transition-all hover:border-red-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ሙሉውን ሱቅ ይመልከቱ (".concat(shopItems.length, " እቃዎች)") : "Visit Full Shop (".concat(shopItems.length, " Items)") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-red-400" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: shopItems.slice(0, 3).map((item) => {
        const name = typeof item.name === "object" ? item.name[language] || item.name.en : item.name;
        const desc = typeof item.description === "object" ? item.description[language] || item.description.en : item.description;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/50 flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.imageUrl,
                    alt: name,
                    className: "w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg bg-red-600 text-white text-xxs font-sports font-black uppercase tracking-wider shadow-md", children: t.officialTag }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-lg text-white uppercase tracking-wide group-hover:text-red-400 transition-colors", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-neutral-400 line-clamp-2", children: desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xxs uppercase font-bold text-neutral-400", children: [
                      t.sizeGuide,
                      ":"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: item.availableSizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-xxs font-sports font-bold uppercase",
                        children: s
                      },
                      s
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-neutral-800/80 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-xl text-emerald-400", children: [
                    item.price.toLocaleString(),
                    " ",
                    t.etbCurrency
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => openCheckoutModal(item),
                      className: "px-4 py-2 rounded-xl btn-primary-red font-sports font-black uppercase tracking-wider text-xs shadow-md shadow-red-950/40 flex items-center gap-1.5 transition-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.buyNowBtn })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          item.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950/70 via-neutral-900 to-neutral-950 border border-emerald-800/40 p-8 sm:p-10 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider font-sports", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 fill-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ክለቡን ያጠናክሩ • በቻፓ ፈጣን ክፍያ" : "Empower the Club • Chapa Payment Integration" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider", children: t.donateTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-300 leading-relaxed", children: t.donateSubtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-1 text-xxs text-neutral-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold", children: [
              "100 ",
              t.etbCurrency
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold", children: [
              "500 ",
              t.etbCurrency
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold", children: [
              "1,000 ",
              t.etbCurrency
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 font-bold", children: t.customAmountLabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: openDonationModal,
              className: "px-8 py-4 rounded-2xl btn-donate-emerald text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 hover:scale-102",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 fill-white text-white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.donateBtn })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-center text-neutral-400 font-medium", children: language === "am" ? "ፈጣን ዲጂታል ደረሰኝ እና የተረጋገጠ የክፍያ መለያ" : "Instant digital receipt & verified transaction reference" })
        ] })
      ] })
    ] }) }),
    !isInstalled && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-sports font-bold uppercase tracking-wider mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የሞባይል መተግበሪያ" : "Official Mobile App" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider", children: language === "am" ? "የክለቡን መተግበሪያ ያውርዱ" : "Download Club App" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 max-w-md", children: language === "am" ? "ለአንድሮይድ በቀጥታ APK ያውርዱ፤ ለአይፎን ደግሞ በሳፋሪ በቀላሉ ወደ ዋና ገጽ (Home Screen) ይጨምሩ።" : "Download the official Android APK file directly or add to iOS home screen for instant access." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppStoreInstallCard$1, { mode: "embedded" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border border-red-800/40 p-8 sm:p-12 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የደጋፊዎች ማህበር" : "Official Supporter Club" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider leading-tight", children: t.membershipCtaTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed", children: t.membershipCtaDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCurrentPage("membership"),
              className: "px-6 py-3.5 rounded-xl btn-secondary-amber text-white font-bold text-sm sm:text-base uppercase tracking-wider font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.joinNowBtn })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCurrentPage("about"),
              className: "px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-sm sm:text-base uppercase tracking-wider font-sports transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የክለቡን ታሪክ ይወቁ" : "Learn Club History" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 opacity-25 hover:opacity-40 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 280 }) })
    ] }) })
  ] });
};
const LiveNotificationToast = () => {
  const { liveNotifications, dismissNotification } = useClub();
  if (liveNotifications.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm sm:max-w-md w-full pointer-events-none", children: liveNotifications.map((n) => {
    const isGoal = n.type === "goal";
    const isStandings = n.type === "standings";
    const isMatch = n.type === "match_start" || n.type === "match_end";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-auto rounded-2xl border p-4 shadow-2xl backdrop-blur-md transition-all animate-in slide-in-from-top-4 duration-300 ".concat(isGoal ? "bg-red-950/95 border-red-500 text-white shadow-red-950/80 ring-1 ring-red-500" : isStandings ? "bg-neutral-900/95 border-emerald-500 text-white shadow-emerald-950/60 ring-1 ring-emerald-500" : isMatch ? "bg-neutral-900/95 border-amber-500 text-white shadow-amber-950/60 ring-1 ring-amber-500" : "bg-neutral-900/95 border-neutral-700 text-white"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold shadow-md ".concat(isGoal ? "bg-red-600 text-white animate-bounce" : isStandings ? "bg-emerald-600 text-white" : isMatch ? "bg-amber-500 text-black" : "bg-neutral-800 text-neutral-300"),
                children: isGoal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-white" }) : isStandings ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-5 h-5 text-white" }) : isMatch ? /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-emerald-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-black text-sm uppercase tracking-wider text-amber-400", children: n.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 font-mono", children: n.timestamp })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-200 leading-snug font-medium", children: n.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => dismissNotification(n.id),
              className: "text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors",
              "aria-label": "Dismiss notification",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] })
      },
      n.id
    );
  }) });
};
function useOnlineStatus() {
  const [isOnline, setIsOnline] = reactExports.useState(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  });
  reactExports.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
const OfflineInterruptedOverlay = () => {
  const isOnline = useOnlineStatus();
  const { language } = useClub();
  const [isBannerDismissed, setIsBannerDismissed] = reactExports.useState(false);
  const [showFullModal, setShowFullModal] = reactExports.useState(false);
  if (isOnline) {
    return null;
  }
  const handleRetry = () => {
    window.location.reload();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !isBannerDismissed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-2xl bg-neutral-900/95 border border-red-500/40 text-white shadow-2xl backdrop-blur-md flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-red-950 border border-red-800 flex items-center justify-center text-red-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-4 h-4 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sports font-bold text-xs uppercase tracking-wider text-red-400", children: language === "am" ? "የኢንተርኔት ግንኙነት ተቋርጧል" : "Connection Interrupted" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-neutral-300 truncate", children: language === "am" ? "ከመስመር ውጭ ሁነታ • የተቀመጡ መረጃዎች ይገኛሉ" : "Operating in Offline Mode • Cached standings & roster active" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setShowFullModal(true),
            className: "px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xxs font-bold uppercase transition-colors cursor-pointer",
            children: language === "am" ? "ዝርዝር" : "Details"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleRetry,
            className: "p-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer",
            title: language === "am" ? "እንደገና ሞክር" : "Retry Connection",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsBannerDismissed(true),
            className: "p-1 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer",
            "aria-label": "Dismiss banner",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
          }
        )
      ] })
    ] }) }),
    showFullModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 64, showGlow: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-red-600 border-2 border-neutral-950 flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-3.5 h-3.5" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ከመስመር ውጭ የማገልገል ሞተር ነቅቷል" : "Native Offline Engine Active" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-2xl text-white uppercase tracking-wider", children: language === "am" ? "የኢንተርኔት ግንኙነት ተቋርጧል" : "Connection Interrupted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-400 font-ethiopic text-xs", children: language === "am" ? "የተቀመጡ የክለቡ መረጃዎች ያለማቋረጥ ይሰራሉ" : "የኢንተርኔት ግንኙነት ተቋርጧል • ከመስመር ውጭ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-2 text-xs text-neutral-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white font-bold font-sports uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ከመስመር ውጭ የሚያገኟቸው አገልግሎቶች፡" : "What remains available offline:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xxs text-neutral-400 pl-6 list-disc", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: language === "am" ? "የተቀመጠው የኢትዮጵያ ፕሪሚየር ሊግ ሰንጠረዥና ውጤቶች" : "Saved Premier League Table & Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: language === "am" ? "የተጫዋቾች ስብስብ መረጃ እና ስታቲስቲክስ" : "Player Squad Profiles & Statistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: language === "am" ? "ቀደም ሲል የተጫኑ የክለቡ ዜናዎችና የጨዋታ ዘገባዎች" : "Previously Loaded Club News & Match Previews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: language === "am" ? "የዲጂታል ደጋፊ የአባልነት መታወቂያ ካርድ" : "Digital Supporter Membership Card" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-neutral-500 pt-1", children: language === "am" ? "የኦንላይን ክፍያዎች (በቻፓ) እና የቀጥታ ዳታ ማመሳሰል ኢንተርኔት እንደተመለሰ ወዲያውኑ ይቀጥላሉ።" : "Online payment submissions (Chapa) and live Firestore publishing will resume as soon as internet connectivity returns." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleRetry,
            className: "w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-sports font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ግንኙነትን በድጋሚ ሞክር" : "Retry Connection" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setShowFullModal(false),
            className: "w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-sports font-bold uppercase tracking-wider transition-colors cursor-pointer",
            children: language === "am" ? "ከመስመር ውጭ ቀጥል" : "Continue in Offline Mode"
          }
        )
      ] })
    ] }) })
  ] });
};
const AppStartupLoader = ({
  onLoaded,
  minDurationMs = 1200
}) => {
  const [isVisible, setIsVisible] = reactExports.useState(true);
  const [isFadingOut, setIsFadingOut] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, minDurationMs);
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoaded == null ? void 0 : onLoaded();
    }, minDurationMs + 500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [minDurationMs, onLoaded]);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick: () => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          onLoaded == null ? void 0 : onLoaded();
        }, 300);
      },
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 select-none cursor-pointer transition-opacity duration-500 ".concat(isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100", " bg-neutral-950/75 backdrop-blur-[3px]"),
      "aria-label": "Loading Halaba City FC Portal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center text-center p-7 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800/90 shadow-2xl shadow-black/80 max-w-xs sm:max-w-sm w-full mx-auto animate-in fade-in zoom-in-95 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600/20 via-amber-500/20 to-emerald-600/20 blur-xl opacity-75 -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3.5 rounded-full border-2 border-dashed border-red-500/50 animate-[spin_6s_linear_infinite]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-full border border-amber-400/30 animate-[spin_4s_linear_infinite_reverse]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-full p-2 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-700/80 shadow-lg drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 68 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 bg-red-600 text-white rounded-full p-1.5 shadow-md border border-red-400 animate-spin", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-xl sm:text-2xl text-white tracking-wider uppercase mb-1 drop-shadow-sm", children: "Halaba City FC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-400 tracking-wide font-sports uppercase mb-3", children: "የኢትዮጵያ ፕሪሚየር ሊግ • 2026/27" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-40 sm:w-48 h-1.5 bg-neutral-800/90 rounded-full overflow-hidden p-0.5 border border-neutral-700/60 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 rounded-full w-2/3 animate-[pulse_1.2s_ease-in-out_infinite]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xxs text-neutral-400 font-mono uppercase tracking-widest mt-3.5", children: "Loading Official Club Portal..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-3.5 border-t border-neutral-800/80 w-full flex items-center justify-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NetVibeLogo, { size: "xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-neutral-400 font-semibold uppercase tracking-wider leading-none", children: "Developed by" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-sky-400 tracking-wide leading-tight", children: "NetVibe Digital Solutions" })
          ] })
        ] })
      ] })
    }
  );
};
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.handleReload = () => {
      try {
        localStorage.removeItem("halaba_official_epl_standings_v12_real_table");
      } catch (e) {
      }
      window.location.reload();
    };
    this.state = { hasError: false, errorMessage: "" };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: (error == null ? void 0 : error.message) || "An unexpected rendering error occurred."
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("[ErrorBoundary caught an error]:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-neutral-100 text-center select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 72, showGlow: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-sports font-bold uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ችግር ተከስቷል • Recovery Mode" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-sports font-black text-white uppercase tracking-wider", children: "HALABA CITY FC PORTAL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-400 leading-relaxed", children: "ገጹን በመጫን ላይ ጊዜያዊ ችግር አጋጥሟል። እባክዎ ከታች ያለውን ቁልፍ በመጫን ገጹን ዳግም ያስጀምሩ።" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xxs text-neutral-500 font-mono", children: this.state.errorMessage })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: this.handleReload,
            className: "w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/60 active:scale-95 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ገጹን ዳግም አስጀምር / Reload App" })
            ]
          }
        ) })
      ] }) });
    }
    return this.props.children;
  }
}
const PageFallbackLoader = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[50vh] w-full flex flex-col items-center justify-center p-6 text-center select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-3 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 56 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-sports font-bold uppercase tracking-wider text-neutral-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin text-red-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "በመጫን ላይ... / Loading..." })
    ] })
  ] });
};
const FixturesPage = reactExports.lazy(() => __vitePreload(() => import("./FixturesPage-stVDyZZq.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.FixturesPage })));
const StandingsPage = reactExports.lazy(() => __vitePreload(() => import("./StandingsPage-CwjjKt0X.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.StandingsPage })));
const NewsPage = reactExports.lazy(() => __vitePreload(() => import("./NewsPage-_Y95ptkS.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.NewsPage })));
const MembershipPage = reactExports.lazy(() => __vitePreload(() => import("./MembershipPage-CCNHAf1c.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.MembershipPage })));
const AboutPage = reactExports.lazy(() => __vitePreload(() => import("./AboutPage-BP3ow_G6.js"), true ? __vite__mapDeps([7,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.AboutPage })));
const ContactPage = reactExports.lazy(() => __vitePreload(() => import("./ContactPage-t5cZvpbF.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.ContactPage })));
const AdminPage = reactExports.lazy(() => __vitePreload(() => import("./AdminPage-DBWMeHdF.js"), true ? __vite__mapDeps([9,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.AdminPage })));
const ShopPage = reactExports.lazy(() => __vitePreload(() => import("./ShopPage-i3jqH34S.js"), true ? __vite__mapDeps([10,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.ShopPage })));
const MatchDetailsModal = reactExports.lazy(() => __vitePreload(() => import("./MatchDetailsModal-BEy2yFTC.js"), true ? __vite__mapDeps([11,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.MatchDetailsModal })));
const ArticleModal = reactExports.lazy(() => __vitePreload(() => import("./ArticleModal-BBYi0KiL.js"), true ? __vite__mapDeps([12,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.ArticleModal })));
const ClubDossierModal = reactExports.lazy(() => __vitePreload(() => import("./ClubDossierModal-BQrobqMy.js"), true ? __vite__mapDeps([13,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.ClubDossierModal })));
const DonationModal = reactExports.lazy(() => __vitePreload(() => import("./DonationModal-CL5mMJUG.js"), true ? __vite__mapDeps([14,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.DonationModal })));
const JerseyCheckoutModal = reactExports.lazy(() => __vitePreload(() => import("./JerseyCheckoutModal-B6-aT9JK.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0, import.meta.url).then((m) => ({ default: m.JerseyCheckoutModal })));
const AppStoreInstallCard = reactExports.lazy(() => __vitePreload(() => Promise.resolve().then(() => AppStoreInstallCard$2), true ? void 0 : void 0, import.meta.url).then((m) => ({ default: m.AppStoreInstallCard })));
const MainApp = () => {
  const { currentPage, matches, news, isDossierOpen, closeDossier } = useClub();
  const { isInstalled, isInstallModalOpen, openInstallModal, closeInstallModal } = usePWAInstall();
  const [selectedMatchId, setSelectedMatchId] = reactExports.useState(null);
  const [selectedArticleId, setSelectedArticleId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const confirmAppReady = async () => {
      try {
        await CapacitorUpdater.notifyAppReady();
        console.log("[CapacitorUpdater] notifyAppReady() confirmed update stability");
      } catch (err) {
        console.debug("[CapacitorUpdater] notifyAppReady note:", err);
      }
    };
    confirmAppReady();
  }, []);
  const activeMatch = selectedMatchId ? matches.find((m) => m.id === selectedMatchId) || null : null;
  const activeArticle = selectedArticleId ? news.find((n) => n.id === selectedArticleId) || null : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppStartupLoader, { minDurationMs: 1200 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { onOpenInstallModal: openInstallModal, isInstalled }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveNotificationToast, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OfflineInterruptedOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 w-full pb-28 sm:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PageFallbackLoader, {}), children: [
      currentPage === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        HomePage,
        {
          onOpenMatchModal: (id) => setSelectedMatchId(id),
          onOpenArticleModal: (id) => setSelectedArticleId(id)
        }
      ),
      currentPage === "fixtures" && /* @__PURE__ */ jsxRuntimeExports.jsx(FixturesPage, { onOpenMatchModal: (id) => setSelectedMatchId(id) }),
      currentPage === "standings" && /* @__PURE__ */ jsxRuntimeExports.jsx(StandingsPage, {}),
      currentPage === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsPage, { onOpenArticleModal: (id) => setSelectedArticleId(id) }),
      currentPage === "membership" && /* @__PURE__ */ jsxRuntimeExports.jsx(MembershipPage, {}),
      currentPage === "shop" && /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPage, {}),
      currentPage === "about" && /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}),
      currentPage === "contact" && /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}),
      currentPage === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPage, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFixedFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
      isInstallModalOpen && !isInstalled && /* @__PURE__ */ jsxRuntimeExports.jsx(AppStoreInstallCard, { mode: "modal", onClose: closeInstallModal }),
      activeMatch && /* @__PURE__ */ jsxRuntimeExports.jsx(
        MatchDetailsModal,
        {
          match: activeMatch,
          onClose: () => setSelectedMatchId(null)
        }
      ),
      activeArticle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ArticleModal,
        {
          article: activeArticle,
          onClose: () => setSelectedArticleId(null)
        }
      ),
      isDossierOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ClubDossierModal,
        {
          isOpen: isDossierOpen,
          onClose: closeDossier
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DonationModal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(JerseyCheckoutModal, {})
    ] })
  ] });
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClubProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MainApp, {}) }) });
}
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedReload,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      wb = await __vitePreload(async () => {
        const { Workbox } = await import("./workbox-window.prod.es5-ZA_CIrj6.js");
        return { Workbox };
      }, true ? [] : void 0, import.meta.url).then(({ Workbox }) => {
        return new Workbox("./sw.js", { scope: "./", type: "classic" });
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
        return void 0;
      });
      if (!wb)
        return;
      {
        {
          wb.addEventListener("activated", (event) => {
            if (event.isUpdate || event.isExternal) {
              if (onNeedReload)
                onNeedReload();
              else
                window.location.reload();
            }
          });
          wb.addEventListener("installed", (event) => {
            if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("./sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  try {
    const updateSW = registerSW({
      onNeedRefresh() {
        console.log("HALABA City FC app update available. Applying update...");
        updateSW(true);
      },
      onOfflineReady() {
        console.log("HALABA City FC is cached and ready for offline stealth execution.");
      }
    });
  } catch (err) {
    console.debug("PWA ServiceWorker registration note:", err);
  }
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
export {
  ClubImages as C,
  EthiopianClubLogo as E,
  HalabaCrest as H,
  NetVibeSvgEmblem as N,
  __vite_legacy_guard,
  getLocalizedTeamName as a,
  getLocalizedVenue as b,
  getLocalizedRound as c,
  getFormBadgeLocalized as d,
  getLocalizedCategory as e,
  formatTeamName as f,
  getLocalizedCompetition as g,
  getLocalizedPosition as h,
  getLocalizedPersonName as i,
  getLocalizedRole as j,
  getLocalizedDepartment as k,
  getLocalizedShopCategory as l,
  useClub as u
};
