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

    var reactExports, jsxRuntimeExports, Mail, MapPin, Phone, Clock, ExternalLink, CircleCheck, Send, useClub, HalabaCrest;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Mail = module.f;
        MapPin = module.e;
        Phone = module.P;
        Clock = module.g;
        ExternalLink = module.E;
        CircleCheck = module.l;
        Send = module.h;
      }, function (module) {
        useClub = module.u;
        HalabaCrest = module.H;
      }, null, null],
      execute: function execute() {
        var ContactPage = exports("ContactPage", function () {
          var _useClub = useClub(),
            t = _useClub.t,
            language = _useClub.language,
            clubInfo = _useClub.clubInfo;
          var _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            name = _reactExports$useStat2[0],
            setName = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            emailOrPhone = _reactExports$useStat4[0],
            setEmailOrPhone = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            subject = _reactExports$useStat6[0],
            setSubject = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            message = _reactExports$useStat8[0],
            setMessage = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            isSubmitting = _reactExports$useStat0[0],
            setIsSubmitting = _reactExports$useStat0[1];
          var _reactExports$useStat1 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            isSent = _reactExports$useStat10[0],
            setIsSent = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            error = _reactExports$useStat12[0],
            setError = _reactExports$useStat12[1];
          var handleSubmit = function handleSubmit(e) {
            e.preventDefault();
            if (!name.trim() || !emailOrPhone.trim() || !message.trim()) {
              setError(language === "am" ? "እባክዎ ስምዎን፣ የመገናኛ አድራሻዎን እና መልዕክትዎን ያስገቡ።" : "Please fill in your name, contact information, and message.");
              return;
            }
            setError("");
            setIsSubmitting(true);
            setTimeout(function () {
              setIsSubmitting(false);
              setIsSent(true);
              setName("");
              setEmailOrPhone("");
              setSubject("");
              setMessage("");
            }, 600);
          };
          var address = language === "am" ? "ሀላባ ስታዲየም የስፖርት ኮምፕሌክስ፣ ዋና ጎዳና፣ ሀላባ ቁሊቶ፣ ኢትዮጵያ" : clubInfo.contact.address;
          var officeHours = language === "am" ? "ከሰኞ - አርብ፡ 2:30 ጥዋት - 11:30 ከሰዓት (በጨዋታ ቀናት፡ 1:00 ጥዋት - 1:00 ምሽት)" : clubInfo.contact.hours;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Mail, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.officialCommunications
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                    className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider",
                    children: t.contactTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-sm mt-1 max-w-xl",
                    children: t.contactSubtitle
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                  size: 70,
                  showGlow: true
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-5 space-y-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider pb-3 border-b border-neutral-800",
                    children: t.clubHeadquarters
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-5 text-sm",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-9 h-9 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-white block text-sm",
                          children: t.addressLabel
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-neutral-400 text-xs sm:text-sm leading-relaxed",
                          children: address
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Phone, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-white block text-sm",
                          children: t.officialPhoneLabel
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-neutral-300 font-mono text-xs sm:text-sm block",
                          children: clubInfo.contact.phone
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-9 h-9 rounded-xl bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Mail, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-white block text-sm",
                          children: t.inquiriesPressLabel
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-neutral-300 font-mono text-xs sm:text-sm block",
                          children: [t.generalLabel, ": ", clubInfo.contact.email]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-neutral-400 font-mono text-xs block",
                          children: [t.mediaLabel, ": ", clubInfo.contact.mediaEmail]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-neutral-400 font-mono text-xs block",
                          children: [t.ticketsLabel, ": ", clubInfo.contact.ticketOffice]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-white block text-sm",
                          children: t.officeHoursLabel
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-neutral-400 text-xs leading-relaxed block",
                          children: officeHours
                        })]
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-bold text-xl text-white uppercase tracking-wider",
                    children: t.officialSocialChannels
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.telegram,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-sky-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "Telegram"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3.5 h-3.5 text-sky-400"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.facebook,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "Facebook"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3.5 h-3.5 text-blue-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.youtube,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-red-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "YouTube"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3.5 h-3.5 text-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.twitter,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-500/50 flex items-center justify-between text-xs font-semibold text-neutral-200 hover:text-white transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "X (Twitter)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3.5 h-3.5 text-neutral-400"
                      })]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "lg:col-span-7 space-y-6",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pb-4 border-b border-neutral-800 mb-6",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                      className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                      children: t.sendUsMessage
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-neutral-400 text-xs sm:text-sm mt-1",
                      children: language === "am" ? "ከክለቡ ሴክሬታሪያት፣ ከደጋፊዎች ግንኙነት ኦፊሰር ወይም ከሚዲያ ክፍል ጋር ይገናኙ።" : "Reach out to the club secretariat, fan liaison officer, or press department."
                    })]
                  }), isSent ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-8 text-center space-y-3 bg-emerald-950/40 border border-emerald-800/80 rounded-2xl animate-in fade-in",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                      className: "w-12 h-12 text-emerald-400 mx-auto"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                      className: "font-sports font-bold text-2xl text-white uppercase",
                      children: t.messageTransmitted
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-neutral-300 text-sm max-w-md mx-auto",
                      children: t.messageSentSuccess
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setIsSent(false);
                      },
                      className: "mt-4 px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-sports font-bold uppercase text-white transition-colors",
                      children: language === "am" ? "ሌላ መልዕክት ላክ" : "Send Another Message"
                    })]
                  }) : /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [error && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs font-semibold",
                      children: error
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1",
                        children: [t.yourName, " *"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: name,
                        onChange: function onChange(e) {
                          return setName(e.target.value);
                        },
                        placeholder: t.fullNamePlaceholder,
                        className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1",
                        children: [t.emailOrPhone, " *"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: emailOrPhone,
                        onChange: function onChange(e) {
                          return setEmailOrPhone(e.target.value);
                        },
                        placeholder: t.phonePlaceholder,
                        className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1",
                        children: t.messageSubject
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: subject,
                        onChange: function onChange(e) {
                          return setSubject(e.target.value);
                        },
                        placeholder: language === "am" ? "ለምሳሌ፡ የትኬት ጥያቄ፣ የአባልነት መረጃ..." : "e.g. Ticket Inquiry, Sponsorship, Fan Club...",
                        className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1",
                        children: [t.messageBody, " *"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                        rows: 4,
                        value: message,
                        onChange: function onChange(e) {
                          return setMessage(e.target.value);
                        },
                        placeholder: language === "am" ? "የመልዕክትዎን ዝርዝር እዚህ ይጻፉ..." : "Type your detailed inquiry here...",
                        className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 resize-none"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-bold uppercase tracking-wider text-sm shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Send, {
                        className: "w-4 h-4"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: isSubmitting ? t.submitting : t.sendMessageBtn
                      })]
                    })]
                  })]
                })
              })]
            })]
          });
        });
      }
    };
  });
})();
