;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./vendor-react-legacy-0mKvI6Bt.js', './index-legacy-yoxQ1ABl.js', './vendor-capacitor-legacy-DBOunZTQ.js', './vendor-firebase-legacy-BbBCOsOA.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Flame, Shield, Zap, Calendar, RefreshCw, Filter, Clock, MapPin, ChevronRight, useClub, getLocalizedCompetition, getLocalizedTeamName, formatTeamName, getLocalizedVenue, getLocalizedRound, HalabaCrest, EthiopianClubLogo;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Flame = module.F;
        Shield = module.S;
        Zap = module.Z;
        Calendar = module.C;
        RefreshCw = module.v;
        Filter = module.y;
        Clock = module.g;
        MapPin = module.e;
        ChevronRight = module.s;
      }, function (module) {
        useClub = module.u;
        getLocalizedCompetition = module.g;
        getLocalizedTeamName = module.a;
        formatTeamName = module.f;
        getLocalizedVenue = module.b;
        getLocalizedRound = module.c;
        HalabaCrest = module.H;
        EthiopianClubLogo = module.E;
      }, null, null],
      execute: function execute() {
        var FixturesPage = exports("FixturesPage", function (_ref) {
          var onOpenMatchModal = _ref.onOpenMatchModal;
          var _useClub = useClub(),
            t = _useClub.t,
            language = _useClub.language,
            matches = _useClub.matches,
            openDossier = _useClub.openDossier,
            simulateLiveMatchAction = _useClub.simulateLiveMatchAction,
            syncNow = _useClub.syncNow,
            isSyncing = _useClub.isSyncing,
            isOnline = _useClub.isOnline;
          var _reactExports$useStat = reactExports.useState("ALL"),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            activeTab = _reactExports$useStat2[0],
            setActiveTab = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState("ALL"),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            selectedComp = _reactExports$useStat4[0],
            setSelectedComp = _reactExports$useStat4[1];
          var competitionList = Array.from(new Set(matches.map(function (m) {
            return m.competition;
          })));
          var filteredMatches = matches.filter(function (m) {
            if (activeTab === "UPCOMING" && m.status !== "UPCOMING") return false;
            if (activeTab === "RESULTS" && m.status !== "FINISHED") return false;
            if (selectedComp !== "ALL" && m.competition !== selectedComp) return false;
            return true;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-gradient-to-r from-red-950 via-neutral-900 to-emerald-950 border border-red-800/60 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "p-2.5 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Flame, {
                    className: "w-6 h-6 text-red-400"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-sports font-bold text-xs uppercase px-2 py-0.5 rounded bg-red-600 text-white",
                      children: t.officialEplFixtures
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-neutral-400",
                      children: t.eplCampaign
                    }), !isOnline ? /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 text-xxs font-bold",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-amber-400"
                      }), language === "am" ? "ከመስመር ውጭ (የተቀመጠ)" : "Offline Cache"]
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-xxs font-bold",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                      }), language === "am" ? "የቀጥታ" : "Live Sync"]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-xl text-white uppercase tracking-wider mt-1",
                    children: t.matchScheduleHeadline
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-300",
                    children: t.liveAutoUpdateDesc
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 shrink-0",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: openDossier,
                  className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30 text-xs font-bold font-sports uppercase tracking-wider transition-all",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Shield, {
                    className: "w-4 h-4 text-amber-300"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.clubDossier
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: simulateLiveMatchAction,
                  className: "flex items-center gap-2 px-4 py-2.5 rounded-xl btn-secondary-amber text-white font-sports font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95",
                  title: "Simulate live kickoff or goal action",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Zap, {
                    className: "w-3.5 h-3.5 text-amber-200"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.simulateLiveAction
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "የጨዋታ መርሃ-ግብር 2026 / 2027" : "Match Schedule 2026 / 2027"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                    className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider",
                    children: t.fixturesTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-sm mt-1 max-w-xl",
                    children: t.fixturesSubtitle
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: syncNow,
                    disabled: isSyncing,
                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-semibold text-white transition-all disabled:opacity-50",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                      className: "w-3.5 h-3.5 text-emerald-400 ".concat(isSyncing ? "animate-spin" : "")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: isSyncing ? t.syncingStatus : t.syncNowBtn
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    className: "px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-semibold text-neutral-300",
                    children: [filteredMatches.length, " ", t.matchesShown]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mt-6 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center bg-neutral-950 p-1 rounded-xl border border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setActiveTab("ALL");
                    },
                    className: "px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase font-sports tracking-wider transition-all ".concat(activeTab === "ALL" ? "bg-red-600 text-white shadow-md" : "text-neutral-400 hover:text-white"),
                    children: t.filterAll
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setActiveTab("UPCOMING");
                    },
                    className: "px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase font-sports tracking-wider transition-all ".concat(activeTab === "UPCOMING" ? "bg-red-600 text-white shadow-md" : "text-neutral-400 hover:text-white"),
                    children: t.filterUpcoming
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setActiveTab("RESULTS");
                    },
                    className: "px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase font-sports tracking-wider transition-all ".concat(activeTab === "RESULTS" ? "bg-red-600 text-white shadow-md" : "text-neutral-400 hover:text-white"),
                    children: t.filterResults
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Filter, {
                    className: "w-4 h-4 text-neutral-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                    value: selectedComp,
                    onChange: function onChange(e) {
                      return setSelectedComp(e.target.value);
                    },
                    className: "bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs sm:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-red-500 font-medium",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                      value: "ALL",
                      children: t.allCompetitions
                    }), competitionList.map(function (comp) {
                      return /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                        value: comp,
                        children: getLocalizedCompetition(comp, language)
                      }, comp);
                    })]
                  })]
                })]
              })]
            }), filteredMatches.length === 0 ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                className: "text-neutral-400 text-base",
                children: t.noMatchesFound
              })
            }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "space-y-4",
              children: filteredMatches.map(function (match) {
                var _match$homeTeam, _match$homeTeam2, _match$awayTeam, _match$awayTeam2, _match$homeTeam3, _match$awayTeam3;
                var isCompleted = match.status === "FINISHED";
                var isLive = match.status === "LIVE";
                var homeName = getLocalizedTeamName((_match$homeTeam = match.homeTeam) === null || _match$homeTeam === void 0 ? void 0 : _match$homeTeam.id, (_match$homeTeam2 = match.homeTeam) === null || _match$homeTeam2 === void 0 ? void 0 : _match$homeTeam2.name, language);
                var awayName = getLocalizedTeamName((_match$awayTeam = match.awayTeam) === null || _match$awayTeam === void 0 ? void 0 : _match$awayTeam.id, (_match$awayTeam2 = match.awayTeam) === null || _match$awayTeam2 === void 0 ? void 0 : _match$awayTeam2.name, language);
                var homeShort = formatTeamName((_match$homeTeam3 = match.homeTeam) === null || _match$homeTeam3 === void 0 ? void 0 : _match$homeTeam3.id, homeName, language);
                var awayShort = formatTeamName((_match$awayTeam3 = match.awayTeam) === null || _match$awayTeam3 === void 0 ? void 0 : _match$awayTeam3.id, awayName, language);
                var venue = getLocalizedVenue(match.venue, language);
                var roundText = getLocalizedRound(match.round, language);
                var compName = getLocalizedCompetition(match.competitionName || match.competition, language);
                return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  onClick: function onClick() {
                    return onOpenMatchModal(match.id);
                  },
                  className: "group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 p-4 sm:p-6 transition-all duration-200 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-neutral-800/80 text-xs",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2 min-w-0 truncate",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-amber-400 uppercase tracking-wider font-sports text-sm truncate",
                        children: compName
                      }), roundText && /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-neutral-500 hidden sm:inline truncate",
                        children: ["• ", roundText]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "flex items-center gap-2 shrink-0 flex-shrink-0",
                      children: isCompleted ? /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800",
                        children: t.fullTime
                      }) : isLive ? /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-red-950 text-red-400 border border-red-800 animate-pulse",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-2 h-2 rounded-full bg-red-500"
                        }), t.liveNow]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-neutral-800 text-neutral-300 border border-neutral-700",
                        children: t.upcoming
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "py-5 sm:py-6 flex items-center justify-between gap-2 sm:gap-4 w-full min-w-0",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex-1 min-w-0 flex items-center justify-end gap-2 sm:gap-3 text-right",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex flex-col items-end min-w-0 truncate",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-sm sm:text-lg md:text-xl text-white group-hover:text-red-400 transition-colors uppercase truncate min-w-0 max-w-full block",
                          title: homeName,
                          children: homeShort
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs uppercase tracking-wider text-neutral-400 font-semibold truncate",
                          children: t.home
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "shrink-0 flex-shrink-0",
                        children: match.homeTeam.isHalaba ? /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                          size: 38,
                          className: "w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
                        }) : /* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: match.homeTeam.id,
                          teamName: homeName,
                          size: 38,
                          className: "w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "px-1.5 sm:px-4 text-center shrink-0 flex-shrink-0 flex flex-col items-center justify-center",
                      children: (isCompleted || isLive) && match.score ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "font-sports font-black text-xl sm:text-2xl md:text-3xl bg-neutral-950 px-2.5 sm:px-3.5 py-1 rounded-xl border tracking-wider whitespace-nowrap shadow-md ".concat(isLive ? "text-amber-400 border-red-700 shadow-red-950/60" : "text-emerald-400 border-neutral-800"),
                          children: [match.score.home, " - ", match.score.away]
                        }), isLive ? /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-xxs text-red-400 mt-1 font-mono font-bold flex items-center gap-1 whitespace-nowrap",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"
                          }), match.liveMinute, "' (", match.livePeriod || t.liveNow, ")"]
                        }) : match.halftimeScore ? /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-xxs text-neutral-500 mt-0.5 font-mono whitespace-nowrap",
                          children: ["(", language === "am" ? "እረፍት" : "HT", " ", match.halftimeScore.home, "-", match.halftimeScore.away, ")"]
                        }) : null]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-lg sm:text-2xl text-neutral-500",
                          children: t.vs
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-1 text-xs text-amber-400 font-mono mt-0.5 whitespace-nowrap",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                            className: "w-3 h-3 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: match.kickoffTime
                          })]
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex-1 min-w-0 flex items-center justify-start gap-2 sm:gap-3 text-left",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "shrink-0 flex-shrink-0",
                        children: match.awayTeam.isHalaba ? /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                          size: 38,
                          className: "w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
                        }) : /* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: match.awayTeam.id,
                          teamName: awayName,
                          size: 38,
                          className: "w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex flex-col items-start min-w-0 truncate",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-sm sm:text-lg md:text-xl text-white group-hover:text-red-400 transition-colors uppercase truncate min-w-0 max-w-full block",
                          title: awayName,
                          children: awayShort
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs uppercase tracking-wider text-neutral-400 font-semibold truncate",
                          children: t.away
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-wrap items-center gap-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                          className: "w-3.5 h-3.5 text-neutral-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-neutral-300",
                          children: match.date
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                          className: "w-3.5 h-3.5 text-emerald-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: venue
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1 font-sports font-bold text-red-400 uppercase tracking-wider group-hover:text-red-300 transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: t.viewMatchDetails
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ChevronRight, {
                        className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                      })]
                    })]
                  })]
                }, match.id);
              })
            })]
          });
        });
      }
    };
  });
})();
