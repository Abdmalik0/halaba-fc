;
(function () {
  System.register(['./vendor-react-legacy-0mKvI6Bt.js', './index-legacy-yoxQ1ABl.js', './vendor-capacitor-legacy-DBOunZTQ.js', './vendor-firebase-legacy-BbBCOsOA.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, Shield, X, Clock, Calendar, MapPin, User, Users, useClub, getLocalizedTeamName, getLocalizedVenue, getLocalizedCompetition, EthiopianClubLogo, getLocalizedPersonName;
    return {
      setters: [function (module) {
        jsxRuntimeExports = module.j;
        Shield = module.S;
        X = module.X;
        Clock = module.g;
        Calendar = module.C;
        MapPin = module.e;
        User = module.ak;
        Users = module.af;
      }, function (module) {
        useClub = module.u;
        getLocalizedTeamName = module.a;
        getLocalizedVenue = module.b;
        getLocalizedCompetition = module.g;
        EthiopianClubLogo = module.E;
        getLocalizedPersonName = module.i;
      }, null, null],
      execute: function execute() {
        var MatchDetailsModal = exports("MatchDetailsModal", function (_ref) {
          var _match$homeTeam, _match$homeTeam2, _match$awayTeam, _match$awayTeam2;
          var match = _ref.match,
            onClose = _ref.onClose;
          var _useClub = useClub(),
            t = _useClub.t,
            language = _useClub.language;
          if (!match) return null;
          var homeName = getLocalizedTeamName((_match$homeTeam = match.homeTeam) === null || _match$homeTeam === void 0 ? void 0 : _match$homeTeam.id, (_match$homeTeam2 = match.homeTeam) === null || _match$homeTeam2 === void 0 ? void 0 : _match$homeTeam2.name, language);
          var awayName = getLocalizedTeamName((_match$awayTeam = match.awayTeam) === null || _match$awayTeam === void 0 ? void 0 : _match$awayTeam.id, (_match$awayTeam2 = match.awayTeam) === null || _match$awayTeam2 === void 0 ? void 0 : _match$awayTeam2.name, language);
          var venue = getLocalizedVenue(match.venue, language);
          var compName = getLocalizedCompetition(match.competitionName || match.competition, language);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
              role: "dialog",
              "aria-modal": "true",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "px-6 py-4 bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border-b border-neutral-800 flex items-center justify-between",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Shield, {
                    className: "w-5 h-5 text-red-500"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "font-sports font-bold text-lg text-white uppercase tracking-wider",
                    children: compName
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: onClose,
                  className: "p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors",
                  "aria-label": "Close modal",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                    className: "w-5 h-5"
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-6 overflow-y-auto space-y-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-6 rounded-xl bg-gradient-to-b from-neutral-950 to-neutral-900/90 border border-neutral-800 flex items-center justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex-1 flex flex-col items-center text-center",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                      teamId: match.homeTeam.id,
                      teamName: homeName,
                      size: 64
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                      className: "mt-3 font-sports font-bold text-base sm:text-lg text-white",
                      children: homeName
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs uppercase text-neutral-400 font-semibold tracking-wider",
                      children: t.home
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "px-4 flex flex-col items-center",
                    children: match.status === "FINISHED" && match.score ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-center",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "font-sports font-black text-3xl sm:text-4xl text-white tracking-widest bg-neutral-800/80 px-4 py-1.5 rounded-lg border border-neutral-700",
                        children: [match.score.home, " - ", match.score.away]
                      }), match.halftimeScore && /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-xs text-neutral-400 block mt-1",
                        children: [language === "am" ? "እረፍት" : "HT", ": ", match.halftimeScore.home, " - ", match.halftimeScore.away]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800",
                        children: t.fullTime
                      })]
                    }) : match.status === "LIVE" && match.score ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-center",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "font-sports font-black text-3xl sm:text-4xl text-emerald-400 tracking-widest bg-neutral-800 px-4 py-1 rounded-lg",
                        children: [match.score.home, " - ", match.score.away]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-red-950 text-red-400 border border-red-800 animate-pulse",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-2 h-2 rounded-full bg-red-500"
                        }), t.liveNow]
                      })]
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-center",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-sports font-black text-2xl sm:text-3xl text-neutral-400",
                        children: t.vs
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "mt-1 flex items-center gap-1 text-amber-400 text-xs font-bold",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                          className: "w-3.5 h-3.5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: match.kickoffTime
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-neutral-800 text-neutral-300 border border-neutral-700",
                        children: t.upcoming
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex-1 flex flex-col items-center text-center",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                      teamId: match.awayTeam.id,
                      teamName: awayName,
                      size: 64
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                      className: "mt-3 font-sports font-bold text-base sm:text-lg text-white",
                      children: awayName
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs uppercase text-neutral-400 font-semibold tracking-wider",
                      children: t.away
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                      className: "w-4 h-4 text-emerald-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 block text-xs",
                        children: t.matchDate
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-medium text-white",
                        children: [match.date, " • ", match.kickoffTime, " ", t.eatTimezone]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                      className: "w-4 h-4 text-emerald-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 block text-xs",
                        children: t.matchVenue
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-medium text-white",
                        children: venue
                      })]
                    })]
                  }), match.referee && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(User, {
                      className: "w-4 h-4 text-amber-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 block text-xs",
                        children: t.referee
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-medium text-white",
                        children: getLocalizedPersonName(match.referee.split("(")[0].trim(), language)
                      })]
                    })]
                  }), match.attendance && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Users, {
                      className: "w-4 h-4 text-amber-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 block text-xs",
                        children: t.attendance
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-medium text-white",
                        children: language === "am" ? "15,000 (ሙሉ በሙሉ የተሞላ)" : match.attendance
                      })]
                    })]
                  })]
                }), match.scorers && match.scorers.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950/80 border border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h5", {
                    className: "font-sports font-bold text-sm uppercase text-neutral-300 tracking-wider mb-3",
                    children: t.goalsSummary
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "space-y-2",
                    children: match.scorers.map(function (s, idx) {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded bg-neutral-900 border border-neutral-800/80",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: "⚽"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                            className: "text-white",
                            children: getLocalizedPersonName(s.player, language)
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-neutral-400 text-xs",
                            children: ["(", s.team === "home" ? homeName : awayName, ")"]
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "font-mono text-amber-400 font-bold",
                          children: [s.minute, "'"]
                        })]
                      }, idx);
                    })
                  })]
                }), match.summary && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    className: "text-white block mb-1 font-sports uppercase text-xs tracking-wider",
                    children: language === "am" ? "የጨዋታው ማጠቃለያ፡" : "Match Summary:"
                  }), language === "am" ? match.summary.replace(/Halaba Ketema/g, "ሀላባ ከተማ").replace(/Fasil Kenema/g, "ፋሲል ከነማ").replace(/Bahir Dar Kenema/g, "ባሕር ዳር ከነማ").replace(/Kaleb Amankwah/g, "ካሌብ አማንክዋህ").replace(/Romaric/g, "ሮማሪክ").replace(/Yonatan Hailu/g, "ዮናታን ኃይሉ").replace(/draw/g, "አቻ").replace(/Round/g, "ሳምንት") : match.summary]
                })]
              })]
            })
          });
        });
      }
    };
  });
})();
