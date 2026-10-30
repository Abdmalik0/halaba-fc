;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./vendor-react-legacy-0mKvI6Bt.js', './index-legacy-yoxQ1ABl.js', './vendor-capacitor-legacy-DBOunZTQ.js', './vendor-firebase-legacy-BbBCOsOA.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Sparkles, ShieldCheck, Truck, Heart, CirclePlus, ShoppingBag, useClub, getLocalizedShopCategory, HalabaCrest;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Sparkles = module.i;
        ShieldCheck = module.d;
        Truck = module.ai;
        Heart = module.H;
        CirclePlus = module.aj;
        ShoppingBag = module.a;
      }, function (module) {
        useClub = module.u;
        getLocalizedShopCategory = module.l;
        HalabaCrest = module.H;
      }, null, null],
      execute: function execute() {
        var ShopPage = exports("ShopPage", function () {
          var _useClub = useClub(),
            t = _useClub.t,
            language = _useClub.language,
            shopItems = _useClub.shopItems,
            openCheckoutModal = _useClub.openCheckoutModal,
            openDonationModal = _useClub.openDonationModal,
            setCurrentPage = _useClub.setCurrentPage,
            isAdminLoggedIn = _useClub.isAdminLoggedIn,
            isProductsLoading = _useClub.isProductsLoading;
          var _reactExports$useStat = reactExports.useState("ALL"),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            selectedCategory = _reactExports$useStat2[0],
            setSelectedCategory = _reactExports$useStat2[1];
          var filteredItems = shopItems.filter(function (item) {
            if (selectedCategory === "ALL") return true;
            return item.category === selectedCategory;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "space-y-12 pb-20",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("section", {
              className: "relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-b border-red-950/40 pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "max-w-7xl mx-auto text-center relative z-10",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                    className: "w-3.5 h-3.5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.shopBadge
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                  className: "text-3xl sm:text-5xl font-sports font-black text-white uppercase tracking-wider",
                  children: t.shopTitle
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed",
                  children: t.shopSubtitle
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                      className: "w-4 h-4 text-emerald-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.perkAuthentic
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Truck, {
                      className: "w-4 h-4 text-amber-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.perkDelivery
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-sports font-black text-red-400",
                      children: "CHAPA"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.perkPayment
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-6 flex flex-wrap items-center justify-center gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: openDonationModal,
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-bold uppercase tracking-wider text-xs shadow-lg shadow-red-950/40 transition-all hover:scale-102",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                      className: "w-4 h-4 fill-white"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.heroDonateBtn
                    })]
                  }), isAdminLoggedIn && /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return setCurrentPage("admin");
                    },
                    className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-neutral-700 font-sports font-bold uppercase tracking-wider text-xs transition-all",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CirclePlus, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.manageStoreAdmin
                    })]
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2 overflow-x-auto pb-1 max-w-full",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return setSelectedCategory("ALL");
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(selectedCategory === "ALL" ? "bg-red-600 text-white shadow-lg shadow-red-900/30" : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"),
                    children: [getLocalizedShopCategory("ALL", language), " (", shopItems.length, ")"]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setSelectedCategory("JERSEY");
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(selectedCategory === "JERSEY" ? "bg-red-600 text-white shadow-lg shadow-red-900/30" : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"),
                    children: getLocalizedShopCategory("JERSEY", language)
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setSelectedCategory("KIT");
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(selectedCategory === "KIT" ? "bg-red-600 text-white shadow-lg shadow-red-900/30" : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"),
                    children: getLocalizedShopCategory("KIT", language)
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setSelectedCategory("ACCESSORY");
                    },
                    className: "px-4 py-2 rounded-xl text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(selectedCategory === "ACCESSORY" ? "bg-red-600 text-white shadow-lg shadow-red-900/30" : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"),
                    children: getLocalizedShopCategory("ACCESSORY", language)
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2.5 text-xs text-neutral-400",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xxs font-bold uppercase tracking-wider",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.liveFirestoreSync
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    children: [t.showing, " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-bold text-white",
                      children: filteredItems.length
                    }), " ", t.items]
                  })]
                })]
              }), filteredItems.length === 0 && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "text-center py-16 bg-neutral-900/60 rounded-3xl border border-neutral-800 p-8 space-y-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 mx-auto flex items-center justify-center text-red-500",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                    className: "w-8 h-8"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-xl text-white uppercase",
                    children: isProductsLoading ? t.loadingInventory : t.noMerchFound
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 max-w-md mx-auto mt-1",
                    children: isProductsLoading ? language === "am" ? "ከቀጥታ የዳታቤዝ አገልጋይ ጋር በመገናኘት ላይ..." : "Connecting to database..." : t.noMerchFoundDesc
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: filteredItems.map(function (item) {
                  var name = _typeof(item.name) === "object" ? item.name[language] || item.name.en : item.name;
                  var desc = _typeof(item.description) === "object" ? item.description[language] || item.description.en : item.description;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "group rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-red-900/50 flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative aspect-square w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                        src: item.imageUrl,
                        alt: name,
                        className: "w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105",
                        onError: function onError(e) {
                          e.target.src = "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80";
                        }
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "absolute top-7 left-7 flex flex-col gap-1.5",
                        children: [item.featured && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "px-2.5 py-1 rounded-lg bg-red-600 text-white text-xxs font-sports font-black uppercase tracking-wider shadow-md",
                          children: t.officialTag
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-emerald-400 text-xxs font-bold uppercase",
                          children: item.inStock ? t.inStockLabel : t.outOfStockLabel
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "absolute bottom-6 right-6",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                          className: "w-10 h-10 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 p-1 flex items-center justify-center shadow-lg",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                            size: 28
                          })
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-6 flex-1 flex flex-col justify-between space-y-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                          className: "flex items-baseline justify-between gap-2",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                            className: "font-sports font-black text-xl text-white uppercase tracking-wide group-hover:text-red-400 transition-colors",
                            children: name
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                          className: "mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed",
                          children: desc
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "mt-4 flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-xxs uppercase tracking-wider font-bold text-neutral-400",
                            children: [t.availableSizesLabel, ":"]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                            className: "flex flex-wrap gap-1",
                            children: item.availableSizes.map(function (s) {
                              return /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                className: "px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-xxs font-sports font-bold uppercase",
                                children: s
                              }, s);
                            })
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-4",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-400 uppercase font-semibold block",
                            children: t.itemPrice
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "font-sports font-black text-2xl text-emerald-400",
                            children: [item.price.toLocaleString(), " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xs text-neutral-400",
                              children: t.etbCurrency
                            })]
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                          onClick: function onClick() {
                            return openCheckoutModal(item);
                          },
                          disabled: !item.inStock,
                          className: "px-5 py-2.5 rounded-xl btn-primary-red font-sports font-black uppercase tracking-wider text-xs shadow-lg shadow-red-950/40 flex items-center gap-2 transition-all hover:scale-102 disabled:opacity-50",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                            className: "w-3.5 h-3.5"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: t.buyNowBtn
                          })]
                        })]
                      })]
                    })]
                  }, item.id);
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "rounded-3xl bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border border-neutral-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-2 text-center md:text-left",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xs font-sports font-bold tracking-widest text-emerald-400 uppercase",
                    children: t.membershipCtaTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "text-2xl sm:text-3xl font-sports font-black text-white uppercase tracking-wide",
                    children: t.shopCtaTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-300 max-w-xl",
                    children: t.shopCtaDesc
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-wrap items-center gap-3 shrink-0",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setCurrentPage("membership");
                    },
                    className: "px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-black uppercase tracking-wider text-sm shadow-xl transition-all",
                    children: t.navJoinBtn
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: openDonationModal,
                    className: "px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-emerald-400 font-sports font-bold uppercase tracking-wider text-sm shadow-lg transition-all flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                      className: "w-4 h-4 fill-emerald-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.donateNow
                    })]
                  })]
                })]
              })
            })]
          });
        });
      }
    };
  });
})();
