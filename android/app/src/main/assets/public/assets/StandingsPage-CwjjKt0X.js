import { r as reactExports, j as jsxRuntimeExports, T as Trophy, l as CircleCheck, z as Calculator, v as RefreshCw, d as ShieldCheck, y as Filter } from "./vendor-react-BqvxpxOH.js";
import { u as useClub, a as getLocalizedTeamName, H as HalabaCrest, f as formatTeamName, E as EthiopianClubLogo, d as getFormBadgeLocalized } from "./index-DaWmYZcG.js";
import "./vendor-capacitor-CxZwZfQO.js";
import "./vendor-firebase-BFy01gyE.js";
const StandingsPage = () => {
  const { t, language, standings, isSyncing, syncNow, resetStandings, recalculateStandingsFromMatches, isOnline } = useClub();
  const [competition, setCompetition] = reactExports.useState("ETHIOPIAN_PREMIER_LEAGUE");
  const [recalculating, setRecalculating] = reactExports.useState(false);
  const [recalcSuccess, setRecalcSuccess] = reactExports.useState(false);
  const halabaStanding = standings.find((s) => s.isHalaba) || standings[0];
  halabaStanding ? getLocalizedTeamName(halabaStanding.teamId, halabaStanding.teamName, language) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.standingsEplBadge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider", children: t.standingsTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-400 text-sm mt-1 max-w-xl", children: t.standingsSubtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-2", children: !isOnline ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 text-xxs font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" }),
            language === "am" ? "የተቀመጠ መረጃ (ከመስመር ውጭ)" : "Instant Cache Active (Offline)"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xxs font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
            language === "am" ? "የቀጥታ ግንኙነት ነቅቷል" : "Live Cloud Connected"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 self-start md:self-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: async () => {
                setRecalculating(true);
                await recalculateStandingsFromMatches();
                setRecalculating(false);
                setRecalcSuccess(true);
                setTimeout(() => setRecalcSuccess(false), 3e3);
              },
              disabled: recalculating,
              className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl btn-donate-emerald font-sports font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-60",
              title: "Recalculate all 18 club points and goal differences from finished match fixtures",
              children: [
                recalcSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-3.5 h-3.5 ".concat(recalculating ? "animate-spin" : "") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: recalcSuccess ? language === "am" ? "ተዘምኗል!" : "Updated!" : language === "am" ? "ከውጤቶች አድስ" : "Update from Match Results" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: syncNow,
              disabled: isSyncing,
              className: "flex items-center gap-2 px-3.5 py-2 rounded-xl btn-secondary-amber font-sports font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 disabled:opacity-50",
              title: "Sync directly with TheSportsDB official data",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 ".concat(isSyncing ? "animate-spin" : "") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSyncing ? t.syncingStatus : t.syncTheSportsDb })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: async () => {
                await resetStandings();
                await syncNow();
              },
              className: "flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-sports font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-all active:scale-95",
              title: "Clear all local caches and re-seed official 18-club Premier League table",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.resetTable })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-4 h-4 text-neutral-400 ml-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: competition,
                onChange: (e) => setCompetition(e.target.value),
                className: "bg-transparent text-neutral-200 text-xs sm:text-sm font-semibold rounded-lg px-2 py-1.5 focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ETHIOPIAN_PREMIER_LEAGUE", children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን) • ይፋዊ" : "Ethiopian Premier League (Top Tier) • Official" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ETHIOPIAN_CUP", children: language === "am" ? "የኢትዮጵያ ዋንጫ 2026/27" : "Ethiopian Cup 2026/27" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      halabaStanding && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-xl bg-gradient-to-r from-red-950/80 via-neutral-950 to-emerald-950/60 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HalabaCrest, { size: 44, showGlow: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/50 text-amber-300 font-sports font-bold text-xs uppercase tracking-wider", children: [
                t.officialLeagueStatus,
                " ",
                halabaStanding.position === 1 ? t.firstPlace : halabaStanding.position === 2 ? t.secondPlace : halabaStanding.position === 3 ? t.thirdPlace : language === "am" ? "".concat(halabaStanding.position, "ኛ ደረጃ") : language === "om" ? "Sadarkaa ".concat(halabaStanding.position, "ffaa") : "".concat(halabaStanding.position, "th Place")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-400 text-xs font-bold uppercase tracking-wider hidden sm:inline", children: [
                "• ",
                language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን)" : "Ethiopian Premier League (Top Tier)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sports font-black text-white text-lg sm:text-xl mt-0.5", children: language === "am" ? halabaStanding.position === 1 ? "ሀላባ ከተማ (በርበሬዎቹ) የኢትዮጵያ ፕሪሚየር ሊግን ይመራል" : "ሀላባ ከተማ (በርበሬዎቹ) በደረጃ #".concat(halabaStanding.position, " ላይ ይገኛል (5 ነጥብ • ያለመሸነፍ ጉዞ)") : halabaStanding.position === 1 ? "Halaba Ketema (Berberewochu) leads the Ethiopian Premier League" : "Halaba Ketema (Berberewochu) stands in position #".concat(halabaStanding.position, " (5 Pts • Undefeated Campaign)") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-6 self-start md:self-auto bg-neutral-950/80 px-4 py-2 rounded-lg border border-neutral-800 text-xs font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 block text-xxs uppercase", children: t.points }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-400 font-black text-base", children: [
              halabaStanding.points,
              " ",
              t.pts
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-px bg-neutral-800" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 block text-xxs uppercase", children: t.record }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold", children: [
              halabaStanding.played,
              " (",
              halabaStanding.won,
              language === "am" ? "አ" : "W",
              " - ",
              halabaStanding.drawn,
              language === "am" ? "አቻ" : "D",
              " - ",
              halabaStanding.lost,
              language === "am" ? "ተ" : "L",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-px bg-neutral-800" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-400 block text-xxs uppercase", children: t.goalsGd }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-400 font-bold", children: [
              halabaStanding.goalsFor,
              " ",
              t.gf,
              " / ",
              halabaStanding.goalsAgainst,
              " ",
              t.ga,
              " (",
              halabaStanding.goalDifference > 0 ? "+".concat(halabaStanding.goalDifference) : halabaStanding.goalDifference,
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-amber-500 shadow-sm shadow-amber-500/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-300 font-medium", children: t.cafChampionsLeagueQual })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-300 font-medium", children: t.cafConfedCupQual })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-red-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.relegationZoneDesc })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl overflow-hidden max-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto max-w-full rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm whitespace-nowrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-neutral-950 border-b border-neutral-800 text-xs uppercase font-sports font-bold tracking-wider text-neutral-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-3 sm:px-4 text-center w-10 sm:w-12", children: t.pos }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-3 sm:px-4 min-w-[150px]", children: t.club }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10", children: t.played }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10", children: t.won }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10", children: t.drawn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10", children: t.lost }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10 hidden md:table-cell", children: t.gf }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-10 hidden md:table-cell", children: t.ga }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-2.5 sm:px-3 text-center w-12", children: t.gd }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-3 sm:px-4 text-center font-black w-12", children: t.pts }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3.5 px-3 sm:px-4 text-center hidden sm:table-cell w-24", children: t.form })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-neutral-800/80", children: standings.map((team) => {
        const isLeader = team.position === 1;
        const isConfed = team.position === 2;
        const isRelegation = team.position >= 16;
        const localizedName = getLocalizedTeamName(team.teamId, team.teamName, language);
        const shortName = formatTeamName(team.teamId, localizedName, language);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "transition-colors ".concat(team.isHalaba ? "standings-halaba-row border-l-4 border-l-amber-500 font-bold" : "hover:bg-neutral-800/40"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 sm:px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ".concat(isLeader ? "standings-pos-leader font-black shadow-md" : isConfed ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : isRelegation ? "bg-red-950/60 text-red-400 border border-red-900" : "text-neutral-400 bg-neutral-950/50"),
                  children: team.position
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-3 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 sm:gap-3 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(EthiopianClubLogo, { teamId: team.teamId, teamName: localizedName, size: 32, badgeUrl: team.badgeUrl, className: "shrink-0 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 truncate", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-sports text-sm sm:text-base tracking-wide truncate max-w-[140px] sm:max-w-none block ".concat(team.isHalaba ? "text-red-400 font-black text-base sm:text-lg" : "text-neutral-200"),
                      title: localizedName,
                      children: shortName
                    }
                  ),
                  team.isHalaba && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xxs uppercase tracking-wider text-emerald-400 font-sans truncate", children: t.officialClub })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-neutral-300", children: team.played }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-emerald-400 font-semibold", children: team.won }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-amber-300", children: team.drawn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-red-400", children: team.lost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-neutral-400 hidden md:table-cell", children: team.goalsFor }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center text-neutral-400 hidden md:table-cell", children: team.goalsAgainst }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3 text-center font-mono", children: team.goalDifference > 0 ? "+".concat(team.goalDifference) : team.goalDifference }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-center font-sports font-black text-lg text-white", children: team.points }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-4 text-center hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1", children: team.form.map((res, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-5 h-5 rounded flex items-center justify-center text-xxs font-bold text-white uppercase ".concat(res === "W" ? "bg-emerald-600" : res === "D" ? "bg-amber-600" : "bg-red-600"),
                  children: getFormBadgeLocalized(res, language)
                },
                i
              )) }) })
            ]
          },
          team.teamId
        );
      }) })
    ] }) }) })
  ] });
};
export {
  StandingsPage
};
