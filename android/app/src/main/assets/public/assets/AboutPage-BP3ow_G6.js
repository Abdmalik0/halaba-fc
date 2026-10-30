import { r as reactExports, j as jsxRuntimeExports, a0 as History, F as Flame, a1 as Target, S as Shield, T as Trophy, e as MapPin } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, H as HalabaCrest, C as ClubImages, h as getLocalizedPosition, i as getLocalizedPersonName, j as getLocalizedRole, k as getLocalizedDepartment } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const AboutPage = () => {
  const { t, language, clubInfo, players, staff } = useClub();
  const [squadFilter, setSquadFilter] = reactExports.useState("ALL");
  const filteredPlayers = players.filter((p) => {
    if (squadFilter === "ALL") return true;
    return p.position === squadFilter;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.heritageBadge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sports font-black text-4xl sm:text-6xl text-white uppercase tracking-wider", children: t.aboutTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-base sm:text-lg leading-relaxed", children: t.aboutSubtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 150, showGlow: true }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-red-950 text-red-400 border border-red-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: t.clubHistoryTitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed", children: t.historyP1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed", children: t.historyP2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.foundedEc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-bold font-mono", children: t.centralEthiopia })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider", children: t.identityTitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed", children: t.identityDesc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-neutral-400 text-xs sm:text-sm leading-relaxed bg-neutral-950/70 p-4 rounded-xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-neutral-200 block mb-1", children: language === "am" ? "የአርማው ምልክት፡" : "Crest Symbolism:" }),
            t.crestSymbolism
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.officialColorsDesc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: t.prideOfHalaba })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-xl text-white uppercase", children: t.ourMission }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-xs sm:text-sm leading-relaxed", children: t.missionDesc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-xl text-white uppercase", children: t.ourVision }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-xs sm:text-sm leading-relaxed", children: t.visionDesc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/60 text-red-400 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-bold text-xl text-white uppercase", children: t.honorsTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 text-xs text-neutral-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.honor1 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.honor2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.honor3 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.honor4 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 relative min-h-[300px] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: ClubImages.heroStadium,
            alt: "Halaba Stadium",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.stadiumFortress })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider", children: t.stadiumTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-sm sm:text-base leading-relaxed", children: t.stadiumDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block uppercase", children: t.capacityLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-base font-sports", children: language === "am" ? "15,000 ተመልካች" : clubInfo.stadium.capacity })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block uppercase", children: t.pitchSurfaceLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-400 text-base font-sports", children: t.naturalGrass })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block uppercase", children: t.locationLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-base font-sports", children: language === "am" ? "ሀላባ ቁሊቶ" : clubInfo.stadium.city })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block uppercase", children: t.atmosphereLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-400 text-base font-sports", children: t.electrifying })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider", children: t.squadTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 mt-1", children: language === "am" ? "የ2026/27 የኢትዮጵያ ፕሪሚየር ሊግ የሀላባ ከተማ ይፋዊ ተጫዋቾች ዝርዝር።" : "Official 2026/27 Ethiopian Premier League squad roster." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["ALL", "Goalkeeper", "Defender", "Midfielder", "Forward"].map((pos) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSquadFilter(pos),
            className: "px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ".concat(squadFilter === pos ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"),
            children: getLocalizedPosition(pos, language)
          },
          pos
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filteredPlayers.map((player) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group bg-neutral-900 border border-neutral-800 hover:border-red-600/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg relative overflow-hidden",
          children: [
            player.isCaptain && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 px-2 py-0.5 rounded text-xxs font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono", children: t.captain }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sports font-black text-3xl text-neutral-600 group-hover:text-red-500 transition-colors", children: [
                "#",
                player.number
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-white group-hover:text-red-400 transition-colors mt-1", children: getLocalizedPersonName(player.name, language) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1 px-2.5 py-0.5 rounded text-xxs font-bold uppercase bg-neutral-950 text-emerald-400 border border-neutral-800", children: getLocalizedPosition(player.position, language) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                player.appearances,
                " ",
                t.appearances
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                player.goals,
                " ",
                t.goals
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: player.birthYear })
            ] })
          ]
        },
        player.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 border-b border-neutral-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider", children: t.managementTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-neutral-400 mt-1", children: language === "am" ? "ክለቡን በብቃት የሚመሩ አስተዳዳሪዎች እና የቴክኒክ አሰልጣኞች።" : "Dedicated leadership and technical experts guiding Halaba City FC." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: staff.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-4 shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-400 font-sports font-black text-lg shrink-0", children: member.name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-base text-white truncate", children: getLocalizedPersonName(member.name, language) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-400 font-medium mt-0.5", children: getLocalizedRole(member.role, language) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-2 px-2 py-0.5 rounded text-xxs font-semibold uppercase bg-neutral-950 text-neutral-400 border border-neutral-800", children: getLocalizedDepartment(member.department, language) })
            ] })
          ]
        },
        member.id
      )) })
    ] })
  ] });
};
export {
  AboutPage
};
