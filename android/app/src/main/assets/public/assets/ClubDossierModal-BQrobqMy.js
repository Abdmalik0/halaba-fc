import { j as jsxRuntimeExports, T as Trophy, X, S as Shield, A as Award, l as CircleCheck, C as Calendar } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, H as HalabaCrest, a as getLocalizedTeamName, b as getLocalizedVenue, c as getLocalizedRound } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const ClubDossierModal = ({ isOpen, onClose }) => {
  const { language, t, matches } = useClub();
  if (!isOpen) return null;
  const premierLeagueMatches = matches.filter(
    (m) => m.competition === "ETHIOPIAN_PREMIER_LEAGUE" || m.competitionName.includes("Premier")
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 sm:p-8 bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border-b border-neutral-800 flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 70, showGlow: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5 text-amber-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ ይፋዊ የክለብ ሰነድ" : "Ethiopian Premier League Official Dossier" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider", children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA City FC (ሀላባ ከተማ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400 font-sports font-bold text-base sm:text-lg", children: language === "am" ? "ቅጽል ስም፡ “በርበሬዎቹ” • የተመሰረተበት ዓመት፡ 1966 ዓ.ም" : "Nickname: “Berberewochu” (በርበሬዎቹ) • Founded 1966 E.C." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors shrink-0",
          "aria-label": "Close dossier",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-neutral-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-sports font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የክለቡ መረጃ እና ማንነት" : "Exact Club Information & Identity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "ይፋዊ ስም" : "Official Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white text-base", children: language === "am" ? "ሀላባ ከተማ እግር ኳስ ክለብ" : "HALABA City FC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ" : "Halaba Ketema (ሀላባ ከተማ እግር ኳስ ክለብ)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "የክለቡ ቅጽል ስም" : "Club Nickname" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-amber-400 text-base", children: language === "am" ? "በርበሬዎቹ" : "Berberewochu (በርበሬዎቹ)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "ሀላባ የደማቁ ቀይ በርበሬ መገኛ ከተማ ናት" : '"The Chilies" — Halaba is the Pepper Capital' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "የተመሰረተበት ዓመት" : "Year Founded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white text-base", children: language === "am" ? "1966 ዓ.ም" : "1966 E.C." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "በይፋዊው አርማ ላይ በቋሚነት የተቀረጸ" : "Embossed permanently on official crest" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "የሚወዳደርበት ሊግ" : "Current League" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-400 text-base", children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ" : "Ethiopian Premier League" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "ወደ ሀገሪቱ ከፍተኛ ዲቪዚዮን ማደግ የቻለ" : "Achieved promotion to Ethiopia's top flight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "የሜዳ ስታዲየም" : "Home Stadium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white text-base", children: language === "am" ? "ሀላባ ስታዲየም" : "Halaba Stadium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "ቁሊቶ ስታዲየም (15,000 ተመልካች)" : "Kulito Stadium (15,000 Seats)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase font-bold text-neutral-400 block mb-1", children: language === "am" ? "የክለቡ ቀለማት" : "Club Colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-red-400 text-base", children: language === "am" ? "ደማቅ ቀይ፣ አረንጓዴ እና ወርቃማ" : "Scarlet Red, Emerald Green & Gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-400 block mt-0.5", children: language === "am" ? "የሀላባን የበሰለ በርበሬና አረንጓዴ ቅጠል ያመለክታል" : "Symbolizing ripe Halaba peppers & stems" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-sports font-bold text-lg uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ወደ ኢትዮጵያ ፕሪሚየር ሊግ ታሪካዊ እድገት" : "Historic Promotion to the Ethiopian Premier League" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-neutral-300 leading-relaxed", children: language === "am" ? "በኢትዮጵያ ከፍተኛ ሊግ (ምድብ ለ) ባሳየው አስደናቂ አቋም፣ ሀላባ ከተማ እግር ኳስ ክለብ ታሪካዊውን ወደ ኢትዮጵያ ፕሪሚየር ሊግ የማደግ ውጤት አስመዝግቧል። በደቡብና በማዕከላዊ ኢትዮጵያ እጅግ ታማኝና ደማቅ ደጋፊዎች ያሉት በርበሬዎቹ፣ በሊጉ ላይ ጠንካራና ማራኪ የማጥቃት እግር ኳስ በማሳየት ላይ ይገኛል።" : "Following outstanding seasons in the Ethiopian Higher League (Group B), Halaba City FC earned historic promotion to the Ethiopian Premier League (EPL). Known for one of the most passionate fanbases in southern and central Ethiopia, the Berberewochu bring an electric home atmosphere and intense attacking football to the nation's premier football competition." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የፕሪሚየር ሊግ የመጀመሪያ ጨዋታ፡ ከወልዋሎ ዓዲግራት ዩኒቨርሲቲ ጋር 1-1 አቻ በመለያየት የመጀመሪያውን የሊግ ነጥብ በአማኑኤል ተስፋዬ ግብ አስመዝግቧል።" : "Premier League Debut: 1-1 draw vs Welwalo Adigrat University, earning their first-ever top flight point through an Amanuel Tesfaye goal." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "የደቡብ ደርቢ፡ ከወላይታ ድቻ፣ ሀዋሳ ከነማ እና ሲዳማ ቡና ጋር የሚደረጉ ጨዋታዎች በታላቅ የደጋፊዎች ድባብና ደስታ ይታወሳሉ።" : "Southern Derby: Fixtures against regional rivals Wolaita Dicha, Hawassa Kenema, and Sidama Coffee create huge regional football festivals." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-sports font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5 text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "am" ? "ይፋዊ የኢትዮጵያ ፕሪሚየር ሊግ ጨዋታዎች" : "Official Ethiopian Premier League Fixtures" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-neutral-400 font-sans", children: language === "am" ? "ቀጥታ አውቶማቲክ ማመሳሰል ነቅቷል" : "Automatic real-time sync enabled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: premierLeagueMatches.map((m) => {
          var _a, _b, _c, _d;
          const homeName = getLocalizedTeamName((_a = m.homeTeam) == null ? void 0 : _a.id, (_b = m.homeTeam) == null ? void 0 : _b.name, language);
          const awayName = getLocalizedTeamName((_c = m.awayTeam) == null ? void 0 : _c.id, (_d = m.awayTeam) == null ? void 0 : _d.name, language);
          const venue = getLocalizedVenue(m.venue, language);
          const roundText = getLocalizedRound(m.round, language);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-neutral-950 p-4 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2.5 py-1 rounded text-xxs font-bold uppercase ".concat(m.status === "FINISHED" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-neutral-800 text-neutral-300"),
                      children: m.status === "FINISHED" ? t.fullTime : t.upcoming
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-white", children: [
                      homeName,
                      " ",
                      t.vs,
                      " ",
                      awayName
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neutral-400 text-xs block", children: [
                      roundText,
                      " • ",
                      m.date,
                      " • ",
                      venue
                    ] })
                  ] })
                ] }),
                m.score ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-sports font-black text-lg text-emerald-400 bg-neutral-900 px-3 py-1 rounded-lg self-start sm:self-auto", children: [
                  m.score.home,
                  " - ",
                  m.score.away
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-amber-400 bg-neutral-900 px-2.5 py-1 rounded-lg self-start sm:self-auto", children: [
                  m.kickoffTime,
                  " ",
                  t.eatTimezone
                ] })
              ]
            },
            m.id
          );
        }) })
      ] })
    ] })
  ] }) });
};
export {
  ClubDossierModal
};
