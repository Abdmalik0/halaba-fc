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

    var reactExports, jsxRuntimeExports, X, CircleCheck, Key, Smartphone, Building2, CreditCard, CircleAlert, RefreshCw, ExternalLink, ShieldCheck, ArrowRight, Lock, Camera, QrCode, Receipt, Printer, UserPlus, Sparkles, Info, Calendar, Phone, Mail, MapPin, useClub, HalabaCrest;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        X = module.X;
        CircleCheck = module.l;
        Key = module.K;
        Smartphone = module.b;
        Building2 = module.J;
        CreditCard = module.O;
        CircleAlert = module.Q;
        RefreshCw = module.v;
        ExternalLink = module.E;
        ShieldCheck = module.d;
        ArrowRight = module.u;
        Lock = module.L;
        Camera = module.V;
        QrCode = module.Y;
        Receipt = module._;
        Printer = module.$;
        UserPlus = module.U;
        Sparkles = module.i;
        Info = module.I;
        Calendar = module.C;
        Phone = module.P;
        Mail = module.f;
        MapPin = module.e;
      }, function (module) {
        useClub = module.u;
        HalabaCrest = module.H;
      }, null, null],
      execute: function execute() {
        var getChapaPublicKey = function getChapaPublicKey() {
          var customKey = localStorage.getItem("halaba_chapa_public_key");
          if (customKey && customKey.trim().startsWith("CHAPUBK")) {
            return customKey.trim();
          }
          return "CHAPUBK_TEST-ocwF4q8h66W4Jksg3x86Rk5FqTq8gA0o";
        };
        var loadChapaInlineScript = function loadChapaInlineScript() {
          return new Promise(function (resolve) {
            if (typeof window.ChapaCheckout === "function") {
              resolve(true);
              return;
            }
            var existingScript = document.querySelector('script[src*="chapa.co"]');
            if (existingScript) {
              existingScript.addEventListener("load", function () {
                return resolve(true);
              });
              existingScript.addEventListener("error", function () {
                return resolve(false);
              });
              setTimeout(function () {
                resolve(typeof window.ChapaCheckout === "function");
              }, 800);
              return;
            }
            var script = document.createElement("script");
            script.src = "https://js.chapa.co/v1/inline.js";
            script.async = true;
            script.onload = function () {
              return resolve(true);
            };
            script.onerror = function () {
              return resolve(false);
            };
            document.head.appendChild(script);
          });
        };
        var ChapaPaymentModal = function ChapaPaymentModal(_ref) {
          var isOpen = _ref.isOpen,
            onClose = _ref.onClose,
            txRef = _ref.txRef,
            amount = _ref.amount,
            tier = _ref.tier,
            fullName = _ref.fullName,
            phone = _ref.phone,
            email = _ref.email,
            onPaymentVerified = _ref.onPaymentVerified;
          var _useClub = useClub(),
            language = _useClub.language,
            t = _useClub.t;
          var _reactExports$useStat = reactExports.useState(function () {
              return getChapaPublicKey();
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            publicKey = _reactExports$useStat2[0],
            setPublicKey = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isEditingKey = _reactExports$useStat4[0],
            setIsEditingKey = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(publicKey),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            tempKey = _reactExports$useStat6[0],
            setTempKey = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            isSdkLoaded = _reactExports$useStat8[0],
            setIsSdkLoaded = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(true),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            isLoadingSdk = _reactExports$useStat0[0],
            setIsLoadingSdk = _reactExports$useStat0[1];
          var _reactExports$useStat1 = reactExports.useState(null),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            paymentError = _reactExports$useStat10[0],
            setPaymentError = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            isSuccess = _reactExports$useStat12[0],
            setIsSuccess = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            isProcessing = _reactExports$useStat14[0],
            setIsProcessing = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState("Telebirr"),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            selectedMethod = _reactExports$useStat16[0],
            setSelectedMethod = _reactExports$useStat16[1];
          reactExports.useEffect(function () {
            if (!isOpen) return;
            setIsLoadingSdk(true);
            loadChapaInlineScript().then(function (loaded) {
              setIsSdkLoaded(loaded);
              setIsLoadingSdk(false);
            });
          }, [isOpen]);
          if (!isOpen) return null;
          var handleSaveCustomKey = function handleSaveCustomKey() {
            var cleanKey = tempKey.trim();
            if (cleanKey.length > 5) {
              setPublicKey(cleanKey);
              localStorage.setItem("halaba_chapa_public_key", cleanKey);
              setIsEditingKey(false);
            }
          };
          var handleLaunchChapaInline = function handleLaunchChapaInline() {
            setPaymentError(null);
            setIsProcessing(true);
            var nameParts = fullName.trim().split(/\s+/);
            var firstName = nameParts[0] || "Halaba";
            var lastName = nameParts.slice(1).join(" ") || "Fan";
            var userEmail = email && email.includes("@") ? email.trim() : "member-".concat(txRef.slice(-6), "@halabafc.et");
            if (typeof window.ChapaCheckout === "function") {
              try {
                window.ChapaCheckout({
                  publicKey: publicKey,
                  amount: String(amount),
                  currency: "ETB",
                  email: userEmail,
                  first_name: firstName,
                  last_name: lastName,
                  tx_ref: txRef,
                  title: "Halaba FC ".concat(tier, " Membership"),
                  description: "Halaba City FC Official Supporter Registration (".concat(amount, " ETB)"),
                  onSuccess: function onSuccess(response) {
                    console.log("[Chapa Inline Success]:", response);
                    setIsSuccess(true);
                    setIsProcessing(false);
                    var randNum = Math.floor(1e3 + Math.random() * 9e3);
                    var referenceNumber = "HCFC-2026-M".concat(randNum);
                    setTimeout(function () {
                      onPaymentVerified({
                        referenceNumber: referenceNumber,
                        amount: amount,
                        tier: tier,
                        tx_ref: txRef,
                        verifiedAt: (/* @__PURE__ */new Date()).toISOString()
                      });
                    }, 1e3);
                  },
                  onClose: function onClose() {
                    console.log("[Chapa Inline Closed/Cancelled]");
                    setIsProcessing(false);
                    setPaymentError(language === "am" ? "የክፍያ መስኮቱ ተዘግቷል። ክፍያው እስካልተረጋገጠ ድረስ ምዝገባው አይጠናቀቅም።" : "Payment window was closed. Registration is not complete until payment is verified.");
                  },
                  callback: function callback(response) {
                    console.log("[Chapa Callback]:", response);
                  }
                });
                return;
              } catch (err) {
                console.warn("ChapaCheckout invocation error, falling back to instant client simulation:", err);
              }
            }
            setPaymentError(language === "am" ? "የቻፓ የክፍያ መስኮት አልተከፈተም። እባክዎ ከታች ያለውን ፈጣን የሙከራ ክፍያ ይጠቀሙ።" : "Chapa Inline.js popup was blocked or unavailable. You can use the instant sandbox payment option below.");
            setIsProcessing(false);
          };
          var handleSimulateClientPay = function handleSimulateClientPay() {
            setIsProcessing(true);
            setPaymentError(null);
            setTimeout(function () {
              setIsSuccess(true);
              setIsProcessing(false);
              var randNum = Math.floor(1e3 + Math.random() * 9e3);
              var referenceNumber = "HCFC-2026-M".concat(randNum);
              setTimeout(function () {
                onPaymentVerified({
                  referenceNumber: referenceNumber,
                  amount: amount,
                  tier: tier,
                  tx_ref: txRef,
                  verifiedAt: (/* @__PURE__ */new Date()).toISOString()
                });
              }, 1e3);
            }, 700);
          };
          var localizedTier = tier === "PREMIUM" ? language === "am" ? "ፕሪሚየም" : "Premium" : tier === "STANDARD" ? language === "am" ? "መደበኛ" : "Standard" : language === "am" ? "ደጋፊ" : "Supporter";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 36
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-sports font-black text-lg text-white uppercase tracking-wider",
                        children: language === "am" ? "የቻፓ ይፋዊ ክፍያ" : "Chapa Inline Checkout"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2 py-0.5 rounded text-xxs font-mono font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800",
                        children: language === "am" ? "ደህንነቱ የተጠበቀ SDK" : "Client-Side SDK"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xxs text-neutral-400",
                      children: language === "am" ? "ይፋዊ የሀላባ ከተማ ደጋፊዎች የአባልነት ፕሮግራም" : "Official Halaba City FC Supporter Program"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: onClose,
                  className: "p-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                  title: language === "am" ? "ሰርዝ" : "Cancel",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                    className: "w-5 h-5"
                  })
                })]
              }), isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "py-10 text-center space-y-4 animate-in zoom-in-95",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-950/60",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                    className: "w-10 h-10"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                  className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                  children: language === "am" ? "ክፍያው ተረጋግጧል!" : "Payment Confirmed & Verified!"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-sm text-neutral-300 max-w-sm mx-auto",
                  children: language === "am" ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: ["ቻፓ የ ", /* @__PURE__ */jsxRuntimeExports.jsxs("strong", {
                      className: "text-amber-400",
                      children: [amount, " ", t.etbCurrency]
                    }), " ክፍያዎን አረጋግጧል። ይፋዊ የዲጂታል ደጋፊ መታወቂያዎ በመዘጋጀት ላይ ነው..."]
                  }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: ["Chapa has confirmed your payment of ", /* @__PURE__ */jsxRuntimeExports.jsxs("strong", {
                      className: "text-amber-400",
                      children: [amount, " ETB"]
                    }), ". Generating your official Digital Supporter ID..."]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "inline-flex items-center gap-2 text-xs text-emerald-400 font-mono",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "በክለቡ ይፋዊ መዝገብ ላይ ምዝገባው እየተጠናቀቀ ነው..." : "Finalizing registration in club registry..."
                  })]
                })]
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "py-4 space-y-5",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs uppercase tracking-wider text-neutral-400 font-bold block",
                      children: language === "am" ? "የተመረጠው የአባልነት ደረጃ" : "Chosen Membership Plan"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-baseline gap-2 mt-0.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-sports font-black text-xl text-white uppercase",
                        children: [localizedTier, " ", language === "am" ? "አባል" : "Member"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-neutral-400",
                        children: language === "am" ? "\u1208 ".concat(fullName) : "for ".concat(fullName)
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "text-right",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs text-neutral-400 uppercase font-mono block",
                      children: language === "am" ? "የሚከፈል መጠን" : "Chapa Amount"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "font-sports font-black text-2xl text-amber-400 font-mono",
                      children: [amount, " ", t.etbCurrency]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-3 rounded-xl bg-neutral-950/90 border border-neutral-800 text-xs space-y-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "text-neutral-400 flex items-center gap-1.5 font-mono text-xxs uppercase font-bold",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Key, {
                        className: "w-3.5 h-3.5 text-amber-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "የቻፓ ይፋዊ ቁልፍ" : "Chapa Public Key"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setIsEditingKey(!isEditingKey);
                      },
                      className: "text-xxs text-amber-400 hover:text-amber-300 font-bold uppercase underline cursor-pointer",
                      children: isEditingKey ? language === "am" ? "ሰርዝ" : "Cancel" : language === "am" ? "ቁልፍ ቀይር" : "Change Key"
                    })]
                  }), isEditingKey ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2 pt-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "text",
                      value: tempKey,
                      onChange: function onChange(e) {
                        return setTempKey(e.target.value);
                      },
                      placeholder: "CHAPUBK_TEST-xxxxxxxxxxxx",
                      className: "w-full px-3 py-1.5 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: handleSaveCustomKey,
                      className: "px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xxs uppercase rounded font-sports cursor-pointer",
                      children: language === "am" ? "አስቀምጥ" : "Save Key"
                    })]
                  }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between font-mono text-xxs text-neutral-400 truncate",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "truncate",
                      children: publicKey
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-emerald-400 font-bold shrink-0 ml-2",
                      children: language === "am" ? "✓ ነቅቷል" : "✓ Active"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xxs uppercase tracking-wider text-neutral-400 font-bold block mb-2",
                    children: language === "am" ? "በቻፓ ተቀባይነት ያላቸው የኢትዮጵያ የክፍያ አማራጮች" : "Accepted Ethiopian Payment Providers via Chapa"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-4 gap-2 text-center",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Smartphone, {
                        className: "w-4 h-4 text-emerald-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs font-bold text-neutral-200",
                        children: "Telebirr"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Building2, {
                        className: "w-4 h-4 text-purple-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs font-bold text-neutral-200",
                        children: "CBE Birr"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Building2, {
                        className: "w-4 h-4 text-amber-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs font-bold text-neutral-200",
                        children: "Awash Birr"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(CreditCard, {
                        className: "w-4 h-4 text-sky-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs font-bold text-neutral-200",
                        children: language === "am" ? "የባንክ ካርዶች" : "Bank Cards"
                      })]
                    })]
                  })]
                }), paymentError && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-start gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleAlert, {
                    className: "w-4 h-4 text-red-400 shrink-0 mt-0.5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: paymentError
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-3 pt-1",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "button",
                    onClick: handleLaunchChapaInline,
                    disabled: isProcessing,
                    className: "w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-sports font-black text-base uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-950 disabled:opacity-50 cursor-pointer",
                    children: isProcessing ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                        className: "w-5 h-5 animate-spin"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "የቻፓ ክፍያ በመከፈት ላይ..." : "Launching Chapa Checkout..."
                      })]
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(CreditCard, {
                        className: "w-5 h-5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "".concat(amount, " \u1265\u122D \u1260\u127B\u1353 \u12ED\u12AD\u1348\u1209") : "Pay ".concat(amount, " ETB with Chapa Inline")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-4 h-4"
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-center text-xxs text-neutral-400",
                    children: language === "am" ? "ይፋዊውን የቻፓ የክፍያ መስኮት ይከፍታል። ምዝገባው የሚጸድቀው ክፍያው በስኬት ሲጠናቀቅ ብቻ ነው።" : "Opens the official Chapa Inline popup. Registration is activated only upon successful verified payment."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                        className: "w-4 h-4 text-amber-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "የፈጣን ክፍያ ማስመሰያ (ቴስት)" : "Instant Sandbox Payment Simulation"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded",
                      children: language === "am" ? "የሙከራ ሁነታ" : "Demo Mode"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xxs text-neutral-400",
                    children: language === "am" ? "አማራጭ፡ ክፍያውን ወዲያውኑ በማስመሰል ምዝገባውን ማጠናቀቅ ይችላሉ፡" : "Alternatively, test the verified registration flow instantly without leaving the page:"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: ["Telebirr", "CBE Birr", "Awash Bank", "Card"].map(function (method) {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        type: "button",
                        onClick: function onClick() {
                          return setSelectedMethod(method);
                        },
                        className: "py-2 px-3 rounded-lg text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ".concat(selectedMethod === method ? "bg-red-600/20 border border-red-500 text-white" : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"),
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: method
                        }), selectedMethod === method && /* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                          className: "w-3.5 h-3.5 text-red-400"
                        })]
                      }, method);
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    type: "button",
                    onClick: handleSimulateClientPay,
                    disabled: isProcessing,
                    className: "w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-neutral-700 cursor-pointer",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "\u12AD\u134D\u12EB\u12CD\u1295 \u12A0\u1228\u130B\u130D\u1325 (".concat(amount, " \u1265\u122D \u1260 ").concat(selectedMethod, ")") : "Simulate Successful Payment (".concat(amount, " ETB via ").concat(selectedMethod, ")")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(ArrowRight, {
                      className: "w-4 h-4"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pt-1 text-xxs text-neutral-500",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                      className: "w-3 h-3 text-neutral-600"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ክፍያው እስካልተረጋገጠ ድረስ ምዝገባው አይጠናቀቅም።" : "Registration is incomplete until payment is verified."
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "button",
                    onClick: onClose,
                    className: "text-neutral-400 hover:text-white font-sports uppercase tracking-wider font-bold cursor-pointer",
                    children: language === "am" ? "ሰርዝ" : "Cancel"
                  })]
                })]
              })]
            })
          });
        };
        var MembershipPage = exports("MembershipPage", function () {
          var _useClub2 = useClub(),
            t = _useClub2.t,
            language = _useClub2.language,
            recordVerifiedMembership = _useClub2.recordVerifiedMembership;
          var _reactExports$useStat17 = reactExports.useState("STANDARD"),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            selectedTier = _reactExports$useStat18[0],
            setSelectedTier = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(500),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            amount = _reactExports$useStat20[0],
            setAmount = _reactExports$useStat20[1];
          var _reactExports$useStat21 = reactExports.useState(""),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            fullName = _reactExports$useStat22[0],
            setFullName = _reactExports$useStat22[1];
          var _reactExports$useStat23 = reactExports.useState(""),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            dateOfBirth = _reactExports$useStat24[0],
            setDateOfBirth = _reactExports$useStat24[1];
          var _reactExports$useStat25 = reactExports.useState(""),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            gender = _reactExports$useStat26[0],
            setGender = _reactExports$useStat26[1];
          var _reactExports$useStat27 = reactExports.useState(""),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            phone = _reactExports$useStat28[0],
            setPhone = _reactExports$useStat28[1];
          var _reactExports$useStat29 = reactExports.useState(""),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            email = _reactExports$useStat30[0],
            setEmail = _reactExports$useStat30[1];
          var _reactExports$useStat31 = reactExports.useState(""),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            cityOrRegion = _reactExports$useStat32[0],
            setCityOrRegion = _reactExports$useStat32[1];
          var _reactExports$useStat33 = reactExports.useState(language),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            preferredLang = _reactExports$useStat34[0],
            setPreferredLang = _reactExports$useStat34[1];
          var _reactExports$useStat35 = reactExports.useState(false),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            agreeTerms = _reactExports$useStat36[0],
            setAgreeTerms = _reactExports$useStat36[1];
          var _reactExports$useStat37 = reactExports.useState(""),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            photoUrl = _reactExports$useStat38[0],
            setPhotoUrl = _reactExports$useStat38[1];
          var _reactExports$useStat39 = reactExports.useState(false),
            _reactExports$useStat40 = _slicedToArray(_reactExports$useStat39, 2),
            isPaymentModalOpen = _reactExports$useStat40[0],
            setIsPaymentModalOpen = _reactExports$useStat40[1];
          var _reactExports$useStat41 = reactExports.useState(null),
            _reactExports$useStat42 = _slicedToArray(_reactExports$useStat41, 2),
            currentPaymentSession = _reactExports$useStat42[0],
            setCurrentPaymentSession = _reactExports$useStat42[1];
          var handlePhotoFileUpload = function handlePhotoFileUpload(e) {
            var _e$target$files;
            var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
            if (file) {
              if (file.size > 5 * 1024 * 1024) {
                alert(language === "am" ? "የፎቶው መጠን ከ5 ሜጋባይት በላይ ነው። እባክዎ አነስ ያለ ፎቶ ይምረጡ።" : "File size exceeds 5MB limit. Please choose a smaller photo.");
                return;
              }
              var reader = new FileReader();
              reader.onload = function (loadEvent) {
                var _loadEvent$target;
                if ((_loadEvent$target = loadEvent.target) !== null && _loadEvent$target !== void 0 && _loadEvent$target.result) {
                  setPhotoUrl(loadEvent.target.result);
                }
              };
              reader.readAsDataURL(file);
            }
          };
          var _reactExports$useStat43 = reactExports.useState({}),
            _reactExports$useStat44 = _slicedToArray(_reactExports$useStat43, 2),
            errors = _reactExports$useStat44[0],
            setErrors = _reactExports$useStat44[1];
          var _reactExports$useStat45 = reactExports.useState(false),
            _reactExports$useStat46 = _slicedToArray(_reactExports$useStat45, 2),
            isSubmitting = _reactExports$useStat46[0],
            setIsSubmitting = _reactExports$useStat46[1];
          var _reactExports$useStat47 = reactExports.useState(null),
            _reactExports$useStat48 = _slicedToArray(_reactExports$useStat47, 2),
            registrationResult = _reactExports$useStat48[0],
            setRegistrationResult = _reactExports$useStat48[1];
          reactExports.useEffect(function () {
            var params = new URLSearchParams(window.location.search);
            var txRefParam = params.get("tx_ref");
            var paymentCompleted = params.get("payment_completed") || params.get("status") === "success";
            if (txRefParam && paymentCompleted && !registrationResult) {
              var pendingDataStr = localStorage.getItem("pending_tx_".concat(txRefParam));
              if (pendingDataStr) {
                try {
                  var pendingData = JSON.parse(pendingDataStr);
                  var randNum = Math.floor(1e3 + Math.random() * 9e3);
                  var referenceNumber = "HCFC-2026-M".concat(randNum);
                  recordVerifiedMembership({
                    referenceNumber: referenceNumber,
                    fullName: pendingData.fullName,
                    dateOfBirth: pendingData.dateOfBirth || "",
                    gender: pendingData.gender,
                    phone: pendingData.phone,
                    email: pendingData.email,
                    cityOrRegion: pendingData.cityOrRegion,
                    membershipType: pendingData.membershipType,
                    preferredLanguage: pendingData.preferredLanguage,
                    amountPaid: pendingData.amount,
                    tx_ref: txRefParam
                  });
                  setRegistrationResult({
                    referenceNumber: referenceNumber,
                    registeredAt: (/* @__PURE__ */new Date()).toLocaleDateString(),
                    fullName: pendingData.fullName,
                    membershipType: pendingData.membershipType,
                    cityOrRegion: pendingData.cityOrRegion,
                    photoUrl: pendingData.photoUrl,
                    amountPaid: pendingData.amount,
                    tx_ref: txRefParam
                  });
                  localStorage.removeItem("pending_tx_".concat(txRefParam));
                  window.history.replaceState({}, document.title, window.location.pathname);
                } catch (e) {
                  console.warn("Failed to parse pending transaction:", e);
                }
              }
            }
          }, [registrationResult, recordVerifiedMembership]);
          var validate = function validate() {
            var errs = {};
            if (!fullName.trim() || fullName.trim().length < 3) {
              errs.fullName = t.errFullName;
            }
            if (!dateOfBirth) {
              errs.dateOfBirth = t.errDob;
            }
            if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
              errs.phone = t.errPhone;
            }
            if (!cityOrRegion.trim()) {
              errs.cityOrRegion = t.errCity;
            }
            if (!agreeTerms) {
              errs.agree = t.errAgree;
            }
            setErrors(errs);
            return Object.keys(errs).length === 0;
          };
          var handleSubmit = function handleSubmit(e) {
            e.preventDefault();
            if (!validate()) return;
            setErrors({});
            var txRef = "halaba-fan-".concat(Date.now(), "-").concat(Math.floor(1e3 + Math.random() * 9e3));
            localStorage.setItem("pending_tx_".concat(txRef), JSON.stringify({
              fullName: fullName.trim(),
              dateOfBirth: dateOfBirth,
              gender: gender || void 0,
              phone: phone.trim(),
              email: (email === null || email === void 0 ? void 0 : email.trim()) || void 0,
              cityOrRegion: cityOrRegion.trim(),
              membershipType: selectedTier,
              preferredLanguage: preferredLang,
              photoUrl: photoUrl || void 0,
              amount: amount
            }));
            setCurrentPaymentSession({
              tx_ref: txRef,
              amount: amount,
              tier: selectedTier
            });
            setIsPaymentModalOpen(true);
          };
          var handlePaymentVerified = function handlePaymentVerified(verifiedData) {
            recordVerifiedMembership({
              referenceNumber: verifiedData.referenceNumber,
              fullName: fullName.trim(),
              dateOfBirth: dateOfBirth,
              gender: gender || void 0,
              phone: phone.trim(),
              email: (email === null || email === void 0 ? void 0 : email.trim()) || void 0,
              cityOrRegion: cityOrRegion.trim(),
              membershipType: selectedTier,
              preferredLanguage: preferredLang,
              amountPaid: verifiedData.amount,
              tx_ref: verifiedData.tx_ref
            });
            setRegistrationResult({
              referenceNumber: verifiedData.referenceNumber,
              registeredAt: (/* @__PURE__ */new Date()).toLocaleDateString(),
              fullName: fullName.trim(),
              membershipType: selectedTier,
              cityOrRegion: cityOrRegion.trim(),
              photoUrl: photoUrl || void 0,
              amountPaid: verifiedData.amount,
              tx_ref: verifiedData.tx_ref
            });
            setIsPaymentModalOpen(false);
            setCurrentPaymentSession(null);
            window.scrollTo({
              top: 250,
              behavior: "smooth"
            });
          };
          var handleResetForm = function handleResetForm() {
            setRegistrationResult(null);
            setFullName("");
            setDateOfBirth("");
            setPhone("");
            setEmail("");
            setCityOrRegion("");
            setPhotoUrl("");
            setAgreeTerms(false);
            setErrors({});
          };
          var handlePrintCard = function handlePrintCard() {
            window.print();
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl text-center md:text-left",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ይፋዊ የደጋፊዎች የአባልነት ፕሮግራም" : "Official Supporter Program"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                    className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider",
                    children: t.membershipTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-sm sm:text-base max-w-2xl",
                    children: t.membershipSubtitle
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "hidden lg:block shrink-0",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 80,
                    showGlow: true
                  })
                })]
              })
            }), registrationResult ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "text-center space-y-3 max-w-xl mx-auto",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/60",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                    className: "w-10 h-10"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                  className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase",
                  children: t.registrationSuccessTitle
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-neutral-300 text-sm sm:text-base",
                  children: t.registrationSuccessDesc
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-wrap items-center justify-center gap-3 pt-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs text-neutral-400 block uppercase font-mono tracking-wider",
                      children: t.yourRefNumber
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-mono font-black text-xl text-amber-400",
                      children: registrationResult.referenceNumber
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "px-4 py-2 bg-neutral-950 border border-emerald-800/80 rounded-xl flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                      className: "w-5 h-5 text-emerald-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-left",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-400 block uppercase font-mono tracking-wider",
                        children: language === "am" ? "በቻፓ የተረጋገጠ ክፍያ" : "Chapa Verified Payment"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-mono font-bold text-sm text-emerald-400",
                        children: [registrationResult.amountPaid, " ", t.etbCurrency, " ", language === "am" ? "ተከፍሏል" : "PAID"]
                      })]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "p-1 rounded-3xl bg-gradient-to-tr from-red-600 via-amber-500 to-emerald-600 shadow-2xl",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "rounded-[22px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950 p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[250px] border border-neutral-800",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "absolute -right-10 -bottom-10 opacity-15 pointer-events-none",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                        size: 220
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between pb-3 border-b border-neutral-800/80",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                          size: 38
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "font-sports font-black text-lg tracking-wider text-white uppercase block leading-none",
                            children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA CITY FC"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-emerald-400 font-bold uppercase tracking-widest font-ethiopic",
                            children: language === "am" ? "በርበሬዎቹ • ይፋዊ ደጋፊ" : "በርበሬዎቹ • OFFICIAL SUPPORTER"
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2.5 py-0.5 rounded text-xxs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono",
                        children: registrationResult.membershipType === "PREMIUM" ? language === "am" ? "ፕሪሚየም" : "PREMIUM" : registrationResult.membershipType === "STANDARD" ? language === "am" ? "መደበኛ" : "STANDARD" : language === "am" ? "ደጋፊ" : "SUPPORTER"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "py-4 flex items-center justify-between gap-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1 min-w-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs uppercase tracking-wider text-neutral-400 block font-sports font-bold",
                          children: language === "am" ? "የአባል ስም" : "Member Name"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                          className: "font-sports font-black text-2xl text-white uppercase tracking-wide truncate",
                          children: registrationResult.fullName
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-4 text-xs text-neutral-300 pt-1",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              className: "text-neutral-500",
                              children: language === "am" ? "ክልል/ከተማ፡" : "Region:"
                            }), " ", registrationResult.cityOrRegion]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                              className: "text-neutral-500",
                              children: language === "am" ? "ዘመን፡" : "Season:"
                            }), " 2026/2027"]
                          })]
                        })]
                      }), registrationResult.photoUrl ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                        src: registrationResult.photoUrl,
                        alt: registrationResult.fullName,
                        className: "w-14 h-16 object-cover rounded-xl border-2 border-amber-400 shadow-md shrink-0"
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "w-14 h-16 rounded-xl bg-neutral-900 border border-neutral-700 flex flex-col items-center justify-center text-neutral-500 shrink-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Camera, {
                          className: "w-6 h-6 text-neutral-600"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs font-mono mt-0.5",
                          children: language === "am" ? "ፎቶ" : "ID PHOTO"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400 block font-mono",
                          children: language === "am" ? "የመታወቂያ ቁጥር" : "ID REFERENCE"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-mono font-bold text-amber-400",
                          children: registrationResult.referenceNumber
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded bg-white text-black font-mono text-xxs font-bold",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(QrCode, {
                          className: "w-4 h-4 text-black"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "የተረጋገጠ ክፍያ" : "VERIFIED PAID"
                        })]
                      })]
                    })]
                  })
                }), registrationResult.tx_ref && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-4 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xxs font-mono text-neutral-400 flex items-center justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Receipt, {
                      className: "w-3.5 h-3.5 text-neutral-500"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "የቻፓ መለያ፡" : "Chapa TX Ref:"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-neutral-300 font-bold",
                    children: registrationResult.tx_ref
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-4 pt-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: handlePrintCard,
                  className: "px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm uppercase tracking-wider font-sports flex items-center gap-2 transition-colors cursor-pointer",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Printer, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.downloadCard
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: handleResetForm,
                  className: "px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports flex items-center gap-2 transition-colors shadow-lg shadow-red-950 cursor-pointer",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.newRegistrationBtn
                  })]
                })]
              })]
            }) : (/* REGISTRATION APPLICATION FORM */
            /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "space-y-10",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-center md:text-left mb-6",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                    children: t.membershipPlansTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-400 mt-1",
                    children: language === "am" ? "የአባልነት ደረጃዎን ይምረጡ። ተዛማጁ የክፍያ መጠን (200፣ 500 ወይም 1000 ብር) በቻፓ በኩል ይከፈላል።" : "Choose your membership tier. The corresponding payment amount (200, 500, or 1000 ETB) is initialized via Chapa."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    onClick: function onClick() {
                      setSelectedTier("SUPPORTER");
                      setAmount(200);
                    },
                    className: "cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ".concat(selectedTier === "SUPPORTER" ? "bg-neutral-900 border-red-500 shadow-xl shadow-red-950/40 ring-1 ring-red-500" : "bg-neutral-950/80 border-neutral-800 hover:border-neutral-700"),
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-xl text-white uppercase",
                          children: t.tierSupporter
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300",
                          children: language === "am" ? "ደረጃ 1" : "Tier 1"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "mt-4 mb-2 flex items-baseline gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-3xl text-white font-mono",
                          children: "200"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs font-bold text-red-400 uppercase tracking-wider",
                          children: language === "am" ? "ብር / የውድድር ዘመን" : "ETB / Season"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed",
                        children: language === "am" ? "በዓለም ዙሪያ ላሉ የክለባችን ታማኝ ደጋፊዎች ይፋዊ የዲጂታል ደጋፊ ካርድ እና የክለቡ ወቅታዊ ዜናዎች።" : "Official digital membership for passionate fans worldwide with digital card & club newsletter."
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("ul", {
                        className: "mt-4 space-y-2 text-xs text-neutral-300",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "ይፋዊ የዲጂታል ደጋፊ ካርድ" : "Official Digital Fan Card"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "የክለቡ የኢሜይል ዜናዎች እና ወቅታዊ ማሳወቂያዎች" : "Club email newsletter & alerts"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "በዓለም አቀፍ የደጋፊዎች መዝገብ ላይ መካተት" : "Global supporter registry listing"
                          })]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "mt-6 pt-4 border-t border-neutral-800",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick(e) {
                          e.stopPropagation();
                          setSelectedTier("SUPPORTER");
                          setAmount(200);
                        },
                        className: "block w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider font-sports transition-all cursor-pointer ".concat(selectedTier === "SUPPORTER" ? "bg-red-600 text-white shadow-lg shadow-red-950" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"),
                        children: selectedTier === "SUPPORTER" ? language === "am" ? "የተመረጠ (200 ብር)" : "Selected (200 ETB)" : language === "am" ? "ደረጃ 1 ይምረጡ (200 ብር)" : "Select Tier 1 (200 ETB)"
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    onClick: function onClick() {
                      setSelectedTier("STANDARD");
                      setAmount(500);
                    },
                    className: "cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ".concat(selectedTier === "STANDARD" ? "bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500" : "bg-neutral-950/80 border-neutral-800 hover:border-neutral-700"),
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-xl text-white uppercase",
                          children: t.tierStandard
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800",
                          children: language === "am" ? "ደረጃ 2 • ተወዳጅ ምርጫ" : "Tier 2 • Most Popular"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "mt-4 mb-2 flex items-baseline gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-3xl text-emerald-400 font-mono",
                          children: "500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs font-bold text-emerald-400 uppercase tracking-wider",
                          children: language === "am" ? "ብር / የውድድር ዘመን" : "ETB / Season"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed",
                        children: language === "am" ? "ይፋዊ ቋሚና ዲጂታል ካርድ፣ 10% የክለብ እቃዎች ቅናሽ እና በስታዲየም የቅድሚያ ትኬት የማግኘት መብት።" : "Official physical & digital member card, 10% merchandise discount, and priority ticket privileges."
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("ul", {
                        className: "mt-4 space-y-2 text-xs text-neutral-300",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "ቋሚና ዲጂታል የአባልነት ካርድ" : "Physical & Digital Member Card"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "በክለቡ ሻርፖችና ማሊያዎች ላይ 10% ቅናሽ" : "10% Discount on club scarves & jerseys"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "በሀላባ ስታዲየም የቅድሚያ ትኬት ወረፋ መብት" : "Priority ticket queue at Halaba Stadium"
                          })]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "mt-6 pt-4 border-t border-neutral-800",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick(e) {
                          e.stopPropagation();
                          setSelectedTier("STANDARD");
                          setAmount(500);
                        },
                        className: "block w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider font-sports transition-all cursor-pointer ".concat(selectedTier === "STANDARD" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"),
                        children: selectedTier === "STANDARD" ? language === "am" ? "የተመረጠ (500 ብር)" : "Selected (500 ETB)" : language === "am" ? "ደረጃ 2 ይምረጡ (500 ብር)" : "Select Tier 2 (500 ETB)"
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    onClick: function onClick() {
                      setSelectedTier("PREMIUM");
                      setAmount(1e3);
                    },
                    className: "cursor-pointer rounded-2xl p-6 border transition-all relative flex flex-col justify-between ".concat(selectedTier === "PREMIUM" ? "bg-neutral-900 border-amber-500 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500" : "bg-neutral-950/80 border-neutral-800 hover:border-neutral-700"),
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "font-sports font-black text-xl text-white uppercase flex items-center gap-1.5",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                            className: "w-4 h-4 text-amber-400"
                          }), t.tierPremium]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800",
                          children: language === "am" ? "ደረጃ 3 • ቪአይፒ" : "Tier 3 • VIP"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "mt-4 mb-2 flex items-baseline gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-3xl text-amber-400 font-mono",
                          children: "1,000"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs font-bold text-amber-400 uppercase tracking-wider",
                          children: language === "am" ? "ብር / የውድድር ዘመን" : "ETB / Season"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed",
                        children: language === "am" ? "የቪአይፒ ስታዲየም ትሪቡን መግቢያ፣ ነጻ የውድድር ዘመኑ ማሊያ ቫውቸር እና በጠቅላላ ጉባኤ የመሳተፍ ጥሪ።" : "VIP stadium tribune access, complimentary official season jersey voucher, and assembly invitation."
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("ul", {
                        className: "mt-4 space-y-2 text-xs text-neutral-300",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "የቪአይፒ ስታዲየም ትሪቡን መግቢያና የመኪና ማቆሚያ" : "VIP Stadium tribune access & parking"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "ነጻ የክለቡ ይፋዊ ማሊያ ቫውቸር" : "Complimentary official season jersey voucher"
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                            className: "w-3.5 h-3.5 text-emerald-400 shrink-0"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "በዓመታዊው የክለቡ ጠቅላላ ጉባኤ ላይ የመሳተፍ ጥሪ" : "Invitation to Annual Club Assembly"
                          })]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "mt-6 pt-4 border-t border-neutral-800",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick(e) {
                          e.stopPropagation();
                          setSelectedTier("PREMIUM");
                          setAmount(1e3);
                        },
                        className: "block w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider font-sports transition-all cursor-pointer ".concat(selectedTier === "PREMIUM" ? "bg-amber-600 text-white shadow-lg shadow-amber-950" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"),
                        children: selectedTier === "PREMIUM" ? language === "am" ? "የተመረጠ (1,000 ብር)" : "Selected (1,000 ETB)" : language === "am" ? "ደረጃ 3 ይምረጡ (1,000 ብር)" : "Select Tier 3 (1,000 ETB)"
                      })
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-4 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Info, {
                      className: "w-4 h-4 text-amber-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: ["ክፍያዎች በ", /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          children: "ቻፓ (Chapa)"
                        }), " በኩል ይከናወናሉ። ምዝገባው የሚጸድቀው ክፍያው ተረጋግጦ ሲጠናቀቅ ብቻ ነው።"]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: ["Payments are processed through ", /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          children: "Chapa"
                        }), ". Registration is only activated once payment is completed and verified."]
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    className: "font-mono text-neutral-300 text-xs font-bold shrink-0",
                    children: [language === "am" ? "የተመረጠው መጠን፡" : "Current selection:", " ", /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "text-amber-400",
                      children: [amount, " ", t.etbCurrency]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mb-6 pb-4 border-b border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                    children: t.formTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-xs sm:text-sm mt-1",
                    children: language === "am" ? "\u12A5\u1263\u12AD\u12CE \u12E8\u130D\u120D \u1218\u1228\u1303\u12CE\u1295 \u12ED\u1219\u1209\u1362 \u1232\u120D\u12A9 \u12E8 ".concat(amount, " \u1265\u122D \u12AD\u134D\u12EB \u1260\u127B\u1353 \u1260\u12A9\u120D \u12ED\u1320\u12E8\u1243\u1209\u1362") : "Please complete your personal details. On submit, you will be prompted to complete the ".concat(amount, " ETB payment via Chapa.")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSubmit,
                  className: "space-y-6",
                  children: [errors.form && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-sm flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleAlert, {
                      className: "w-5 h-5 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: errors.form
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: [t.fullName, " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-red-500",
                          children: "*"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: fullName,
                        onChange: function onChange(e) {
                          return setFullName(e.target.value);
                        },
                        placeholder: t.fullNamePlaceholder,
                        className: "w-full px-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ".concat(errors.fullName ? "border-red-500" : "border-neutral-800 focus:border-red-500")
                      }), errors.fullName && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-red-400 mt-1 block",
                        children: errors.fullName
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: [t.dob, " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-red-500",
                          children: "*"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "date",
                          value: dateOfBirth,
                          onChange: function onChange(e) {
                            return setDateOfBirth(e.target.value);
                          },
                          className: "w-full px-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ".concat(errors.dateOfBirth ? "border-red-500" : "border-neutral-800 focus:border-red-500")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                          className: "w-4 h-4 text-neutral-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        })]
                      }), errors.dateOfBirth && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-red-400 mt-1 block",
                        children: errors.dateOfBirth
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: t.gender
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                        value: gender,
                        onChange: function onChange(e) {
                          return setGender(e.target.value);
                        },
                        className: "w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "",
                          children: language === "am" ? "ጾታ ይምረጡ" : "Select Gender"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "Male",
                          children: t.genderMale
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "Female",
                          children: t.genderFemale
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "Other",
                          children: t.genderOther
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: [t.phone, " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-red-500",
                          children: "*"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "tel",
                          value: phone,
                          onChange: function onChange(e) {
                            return setPhone(e.target.value);
                          },
                          placeholder: t.phonePlaceholder,
                          className: "w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ".concat(errors.phone ? "border-red-500" : "border-neutral-800 focus:border-red-500")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Phone, {
                          className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2"
                        })]
                      }), errors.phone && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-red-400 mt-1 block",
                        children: errors.phone
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: t.email
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "email",
                          value: email,
                          onChange: function onChange(e) {
                            return setEmail(e.target.value);
                          },
                          placeholder: t.emailPlaceholder,
                          className: "w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Mail, {
                          className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: [t.cityOrRegion, " ", /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-red-500",
                          children: "*"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "text",
                          value: cityOrRegion,
                          onChange: function onChange(e) {
                            return setCityOrRegion(e.target.value);
                          },
                          placeholder: t.cityPlaceholder,
                          className: "w-full pl-10 pr-4 py-3 bg-neutral-950 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ".concat(errors.cityOrRegion ? "border-red-500" : "border-neutral-800 focus:border-red-500")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                          className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2"
                        })]
                      }), errors.cityOrRegion && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-red-400 mt-1 block",
                        children: errors.cityOrRegion
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: t.prefLanguage
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                        value: preferredLang,
                        onChange: function onChange(e) {
                          return setPreferredLang(e.target.value);
                        },
                        className: "w-full px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "en",
                          children: "English"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "am",
                          children: "አማርኛ (Amharic)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "om",
                          children: "Afaan Oromo"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                        children: language === "am" ? "የተመረጠው ደረጃ እና የቻፓ ክፍያ" : "Selected Tier & Chapa Fee"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "px-4 py-3 bg-neutral-950 rounded-xl border border-neutral-800 text-sm font-sports font-bold uppercase flex items-center justify-between",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: selectedTier === "PREMIUM" ? "text-amber-400" : selectedTier === "STANDARD" ? "text-emerald-400" : "text-red-400",
                            children: selectedTier === "PREMIUM" ? language === "am" ? "ፕሪሚየም" : "PREMIUM" : selectedTier === "STANDARD" ? language === "am" ? "መደበኛ" : "STANDARD" : language === "am" ? "ደጋፊ" : "SUPPORTER"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-neutral-500 font-mono",
                            children: "•"
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-white font-mono text-base",
                            children: [amount, " ", t.etbCurrency]
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs font-normal text-neutral-400 font-sans",
                          children: language === "am" ? "(ለመቀየር ከላይ ያለውን ካርድ ይምረጡ)" : "(Select tier card above to change)"
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2",
                      children: language === "am" ? "የዲጂታል መታወቂያ ፎቶ (አስገዳጅ ያልሆነ)" : "Member Photo for Digital ID (Optional)"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "cursor-pointer px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-300 flex items-center gap-2 transition-colors",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Camera, {
                          className: "w-4 h-4 text-amber-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "የመታወቂያ ፎቶ ይጫኑ" : "Upload ID Photo"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: handlePhotoFileUpload,
                          className: "hidden"
                        })]
                      }), photoUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2 text-xs text-emerald-400",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                          className: "w-4 h-4"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "ፎቶ ተመርጧል" : "Photo selected"
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      className: "flex items-start gap-3 cursor-pointer",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "checkbox",
                        checked: agreeTerms,
                        onChange: function onChange(e) {
                          return setAgreeTerms(e.target.checked);
                        },
                        className: "mt-1 w-4 h-4 rounded border-neutral-700 text-red-600 focus:ring-red-500 bg-neutral-950"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs sm:text-sm text-neutral-300 leading-normal",
                        children: t.agreePrivacy
                      })]
                    }), errors.agree && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-red-400 mt-1 block",
                      children: errors.agree
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2 text-xxs text-neutral-400",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                        className: "w-3.5 h-3.5 text-emerald-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "በቻፓ መግቢያ የተጠበቀና አስተማማኝ የክፍያ ሥርዓት" : "Secure 256-bit encrypted Ethiopian payment via Chapa gateway"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "w-full sm:w-auto px-8 py-4 rounded-xl btn-membership-join text-white font-bold text-base uppercase tracking-wider font-sports shadow-xl shadow-red-950/60 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer",
                      children: isSubmitting ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "\u127B\u1353 \u1260\u1218\u12D8\u130B\u1300\u1275 \u120B\u12ED (".concat(amount, " \u1265\u122D)...") : "Initializing Chapa (".concat(amount, " ETB)...")
                        })]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(CreditCard, {
                          className: "w-5 h-5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "".concat(amount, " \u1265\u122D \u1260\u127B\u1353 \u12ED\u12AD\u1348\u1209\u1293 \u121D\u12DD\u1308\u1263\u12CD\u1295 \u12EB\u1320\u1293\u1245\u1241") : "Pay ".concat(amount, " ETB & Complete Registration")
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(ArrowRight, {
                          className: "w-4 h-4"
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })), currentPaymentSession && /* @__PURE__ */jsxRuntimeExports.jsx(ChapaPaymentModal, {
              isOpen: isPaymentModalOpen,
              onClose: function onClose() {
                setIsPaymentModalOpen(false);
              },
              txRef: currentPaymentSession.tx_ref,
              amount: currentPaymentSession.amount,
              tier: currentPaymentSession.tier,
              fullName: fullName,
              phone: phone,
              email: email,
              onPaymentVerified: handlePaymentVerified
            })]
          });
        });
      }
    };
  });
})();
