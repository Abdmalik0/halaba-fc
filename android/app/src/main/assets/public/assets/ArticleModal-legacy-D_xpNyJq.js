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

    var reactExports, jsxRuntimeExports, Tag, Share2, X, Calendar, User, Clock, useClub, getLocalizedCategory;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Tag = module.al;
        Share2 = module.m;
        X = module.X;
        Calendar = module.C;
        User = module.ak;
        Clock = module.g;
      }, function (module) {
        useClub = module.u;
        getLocalizedCategory = module.e;
      }, null, null],
      execute: function execute() {
        var ArticleModal = exports("ArticleModal", function (_ref) {
          var article = _ref.article,
            onClose = _ref.onClose;
          var _useClub = useClub(),
            language = _useClub.language,
            t = _useClub.t;
          if (!article) return null;
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            copied = _reactExports$useStat2[0],
            setCopied = _reactExports$useStat2[1];
          var title = article.title[language] || article.title.en;
          var content = article.content[language] || article.content.en;
          var handleShare = function handleShare() {
            if (navigator.share) {
              navigator.share({
                title: title,
                text: title,
                url: window.location.href
              }).catch(function () {});
            } else {
              navigator.clipboard.writeText(window.location.href).catch(function () {});
              setCopied(true);
              setTimeout(function () {
                return setCopied(false);
              }, 2e3);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",
              role: "dialog",
              "aria-modal": "true",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "px-6 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Tag, {
                    className: "w-4 h-4 text-emerald-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xs font-bold uppercase tracking-wider text-emerald-400",
                    children: getLocalizedCategory(article.category, language)
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: handleShare,
                    className: "p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs",
                    title: "Share article",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Share2, {
                      className: "w-4 h-4"
                    }), copied && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-emerald-400 text-xs",
                      children: t.copied
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: onClose,
                    className: "p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors",
                    "aria-label": "Close",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-5 h-5"
                    })
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-6 overflow-y-auto space-y-6",
                children: [article.imageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "relative rounded-xl overflow-hidden aspect-video max-h-72 w-full border border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                    src: article.imageUrl,
                    alt: title,
                    onError: function onError(e) {
                      e.currentTarget.src = "/assets/images/halaba_match_action_1792217992379.webp";
                    },
                    className: "w-full h-full object-cover"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight",
                    children: title
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-400 border-b border-neutral-800 pb-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "flex items-center gap-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                        className: "w-3.5 h-3.5 text-neutral-500"
                      }), article.date]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "flex items-center gap-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(User, {
                        className: "w-3.5 h-3.5 text-neutral-500"
                      }), t.author, ": ", /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                        className: "text-neutral-300",
                        children: language === "am" ? "የክለቡ አስተዳደር" : article.author
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "flex items-center gap-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                        className: "w-3.5 h-3.5 text-neutral-500"
                      }), article.readTime]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "text-neutral-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal",
                  children: content
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-500",
                  children: t.mediaCommsFooter
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: onClose,
                  className: "px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold transition-colors",
                  children: t.backToNews
                })]
              })]
            })
          });
        });
      }
    };
  });
})();
