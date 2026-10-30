;
(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./vendor-react-legacy-0mKvI6Bt.js', './index-legacy-yoxQ1ABl.js', './vendor-capacitor-legacy-DBOunZTQ.js', './vendor-firebase-legacy-BbBCOsOA.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Heart, X, CircleCheck, Sparkles, CircleAlert, useClub;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Heart = module.H;
        X = module.X;
        CircleCheck = module.l;
        Sparkles = module.i;
        CircleAlert = module.Q;
      }, function (module) {
        useClub = module.u;
      }, null, null],
      execute: function execute() {
        var DonationModal = exports("DonationModal", function () {
          var _useClub = useClub(),
            t = _useClub.t,
            language = _useClub.language,
            isDonationModalOpen = _useClub.isDonationModalOpen,
            closeDonationModal = _useClub.closeDonationModal,
            recordDonation = _useClub.recordDonation;
          var presetAmounts = [100, 500, 1e3, 2500];
          var _reactExports$useStat = reactExports.useState(500),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            selectedPreset = _reactExports$useStat2[0],
            setSelectedPreset = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isCustom = _reactExports$useStat4[0],
            setIsCustom = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            customAmount = _reactExports$useStat6[0],
            setCustomAmount = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            fullName = _reactExports$useStat8[0],
            setFullName = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(""),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            phone = _reactExports$useStat0[0],
            setPhone = _reactExports$useStat0[1];
          var _reactExports$useStat1 = reactExports.useState(""),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            email = _reactExports$useStat10[0],
            setEmail = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(t.purposeGeneral),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            purpose = _reactExports$useStat12[0],
            setPurpose = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            isSubmitting = _reactExports$useStat14[0],
            setIsSubmitting = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(null),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            errorMsg = _reactExports$useStat16[0],
            setErrorMsg = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(null),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            verifiedDonation = _reactExports$useStat18[0],
            setVerifiedDonation = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(null),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            sandboxTx = _reactExports$useStat20[0],
            setSandboxTx = _reactExports$useStat20[1];
          if (!isDonationModalOpen) return null;
          var currentAmount = isCustom ? Number(customAmount) || 0 : selectedPreset;
          var handleSelectPreset = function handleSelectPreset(amount) {
            setSelectedPreset(amount);
            setIsCustom(false);
            setErrorMsg(null);
          };
          var handleCustomChange = function handleCustomChange(val) {
            var clean = val.replace(/[^\d]/g, "");
            setCustomAmount(clean);
            setIsCustom(true);
            setErrorMsg(null);
          };
          var handleSubmit = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
              var txRef, res, data, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    e.preventDefault();
                    setErrorMsg(null);
                    if (!(currentAmount <= 0)) {
                      _context.n = 1;
                      break;
                    }
                    setErrorMsg(language === "am" ? "እባክዎ ትክክለኛ የልገሳ መጠን ይምረጡ ወይም ያስገቡ" : "Please select or enter a valid donation amount.");
                    return _context.a(2);
                  case 1:
                    if (!(!fullName.trim() || !phone.trim())) {
                      _context.n = 2;
                      break;
                    }
                    setErrorMsg(language === "am" ? "ሙሉ ስም እና ስልክ ቁጥር ማስገባት ግዴታ ነው" : "Full Name and Phone Number are required.");
                    return _context.a(2);
                  case 2:
                    setIsSubmitting(true);
                    _context.p = 3;
                    txRef = "halaba-donate-".concat(Date.now(), "-").concat(Math.floor(1e3 + Math.random() * 9e3));
                    _context.n = 4;
                    return fetch("/api/initialize-payment", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        amount: currentAmount,
                        type: "DONATION",
                        fullName: fullName.trim(),
                        phone: phone.trim(),
                        email: email.trim() || void 0,
                        cityOrRegion: "Halaba",
                        donationDetails: {
                          purpose: purpose,
                          supporterName: fullName.trim()
                        },
                        title: "Halaba City FC Donation - ".concat(purpose),
                        description: "Supporter donation to Halaba City FC (".concat(currentAmount, " ETB)"),
                        tx_ref: txRef
                      })
                    });
                  case 4:
                    res = _context.v;
                    _context.n = 5;
                    return res.json();
                  case 5:
                    data = _context.v;
                    if (!(!res.ok || !data.success)) {
                      _context.n = 6;
                      break;
                    }
                    throw new Error(data.error || (language === "am" ? "በቻፓ በኩል ልገሳ ማስጀመር አልተቻለም" : "Failed to initialize donation with Chapa"));
                  case 6:
                    if (!(data.checkout_url && !data.isSandbox && !data.checkout_url.includes("chapa_modal"))) {
                      _context.n = 7;
                      break;
                    }
                    window.location.href = data.checkout_url;
                    return _context.a(2);
                  case 7:
                    setSandboxTx({
                      txRef: data.tx_ref || txRef,
                      amount: currentAmount
                    });
                    setIsSubmitting(false);
                    _context.n = 9;
                    break;
                  case 8:
                    _context.p = 8;
                    _t = _context.v;
                    console.error("Error initiating donation:", _t);
                    setErrorMsg(_t.message || (language === "am" ? "ከክፍያ መግቢያ ጋር መገናኘት አልተቻለም" : "Error communicating with payment gateway."));
                    setIsSubmitting(false);
                  case 9:
                    return _context.a(2);
                }
              }, _callee, null, [[3, 8]]);
            }));
            return function handleSubmit(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          var handleCompleteSandboxPayment = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var res, data, randDon, _t2;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    if (sandboxTx) {
                      _context2.n = 1;
                      break;
                    }
                    return _context2.a(2);
                  case 1:
                    setIsSubmitting(true);
                    _context2.p = 2;
                    _context2.n = 3;
                    return fetch("/api/complete-sandbox-payment", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        tx_ref: sandboxTx.txRef,
                        method: "Telebirr"
                      })
                    });
                  case 3:
                    res = _context2.v;
                    _context2.n = 4;
                    return res.json();
                  case 4:
                    data = _context2.v;
                    if (data.verified && data.donation) {
                      recordDonation({
                        id: "don-".concat(Date.now()),
                        donationNumber: data.donation.donationNumber,
                        fullName: data.donation.fullName,
                        email: data.donation.email,
                        phone: data.donation.phone,
                        amount: data.donation.amount,
                        purpose: data.donation.purpose,
                        tx_ref: data.donation.tx_ref,
                        createdAt: (/* @__PURE__ */new Date()).toISOString(),
                        status: "COMPLETED",
                        verifiedAt: data.donation.verifiedAt
                      });
                      setVerifiedDonation({
                        donationNumber: data.donation.donationNumber,
                        amount: data.donation.amount,
                        fullName: data.donation.fullName,
                        purpose: data.donation.purpose,
                        date: (/* @__PURE__ */new Date()).toLocaleDateString()
                      });
                    }
                    _context2.n = 6;
                    break;
                  case 5:
                    _context2.p = 5;
                    _t2 = _context2.v;
                    console.error("Sandbox donation verification note:", _t2);
                    randDon = "DON-".concat(Date.now().toString().slice(-6));
                    recordDonation({
                      id: "don-".concat(Date.now()),
                      donationNumber: randDon,
                      fullName: fullName.trim(),
                      email: email.trim() || void 0,
                      phone: phone.trim(),
                      amount: currentAmount,
                      purpose: purpose,
                      tx_ref: sandboxTx.txRef,
                      createdAt: (/* @__PURE__ */new Date()).toISOString(),
                      status: "COMPLETED"
                    });
                    setVerifiedDonation({
                      donationNumber: randDon,
                      amount: currentAmount,
                      fullName: fullName.trim(),
                      purpose: purpose,
                      date: (/* @__PURE__ */new Date()).toLocaleDateString()
                    });
                  case 6:
                    _context2.p = 6;
                    setIsSubmitting(false);
                    setSandboxTx(null);
                    return _context2.f(6);
                  case 7:
                    return _context2.a(2);
                }
              }, _callee2, null, [[2, 5, 6, 7]]);
            }));
            return function handleCompleteSandboxPayment() {
              return _ref2.apply(this, arguments);
            };
          }();
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-6",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-6 bg-gradient-to-r from-emerald-950 via-neutral-900 to-red-950 border-b border-neutral-800 flex items-center justify-between",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "w-11 h-11 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                      className: "w-6 h-6 fill-emerald-400"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                      className: "font-sports font-black text-xl text-white uppercase tracking-wider",
                      children: t.donateTitle
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-neutral-400 mt-0.5",
                      children: t.donateSubtitle
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: closeDonationModal,
                  className: "w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                    className: "w-5 h-5"
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "p-6 sm:p-8 space-y-6",
                children: verifiedDonation ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-center py-6 space-y-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                      className: "w-10 h-10"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                    children: t.donationSuccessTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-300 max-w-md mx-auto",
                    children: t.donationSuccessMsg
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-4 rounded-2xl bg-neutral-950 border border-neutral-800 max-w-sm mx-auto text-left text-xs space-y-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between border-b border-neutral-800 pb-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400",
                        children: language === "am" ? "የልገሳ ቁጥር" : "Receipt No."
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-mono font-bold text-amber-400",
                        children: verifiedDonation.donationNumber
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400",
                        children: language === "am" ? "ለጋሽ" : "Donor"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-semibold text-white",
                        children: verifiedDonation.fullName
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400",
                        children: t.donationPurposeLabel
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-300",
                        children: verifiedDonation.purpose
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400",
                        children: language === "am" ? "የተለገሰ መጠን" : "Amount Contributed"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-bold text-emerald-400 text-sm",
                        children: [verifiedDonation.amount.toLocaleString(), " ", t.etbCurrency]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: closeDonationModal,
                    className: "mt-4 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sports font-bold uppercase tracking-wider text-xs shadow-xl transition-all",
                    children: language === "am" ? "ጨርስ" : "Done"
                  })]
                }) : sandboxTx ? (/* Simulator Screen */
                /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-6 py-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                      className: "w-5 h-5 text-emerald-400 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-xs",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-bold text-emerald-300 block",
                        children: language === "am" ? "የቻፓ ደህንነቱ የተጠበቀ ክፍያ" : "Chapa Instant Payment Gateway"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-300",
                        children: language === "am" ? "በቴሌብር ወይም በኢትዮጵያ ንግድ ባንክ ክፍያውን አጠናቅቀው ደረሰኝዎን ይቀበሉ።" : "Complete payment via Telebirr or CBE Birr."
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between text-neutral-400 pb-2 border-b border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "የክፍያ መለያ" : "Transaction Ref"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-mono text-amber-400 font-bold",
                        children: sandboxTx.txRef
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex justify-between text-sm",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-300",
                        children: language === "am" ? "የልገሳ መጠን" : "Donation Total"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-sports font-black text-xl text-emerald-400",
                        children: [sandboxTx.amount.toLocaleString(), " ", t.etbCurrency]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: handleCompleteSandboxPayment,
                    disabled: isSubmitting,
                    className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-sports font-black uppercase tracking-wider text-sm shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                      className: "w-5 h-5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: isSubmitting ? t.submitting : language === "am" ? "ልገሳውን አረጋግጥ" : "Confirm Donation Payment"
                    })]
                  })]
                })) : (/* Donation Form */
                /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSubmit,
                  className: "space-y-6",
                  children: [errorMsg && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleAlert, {
                      className: "w-4 h-4 shrink-0"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: errorMsg
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-2",
                      children: [t.selectDonationAmount, " *"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "grid grid-cols-4 gap-2 mb-3",
                      children: presetAmounts.map(function (amt) {
                        return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            return handleSelectPreset(amt);
                          },
                          className: "py-2.5 rounded-xl font-sports font-black text-sm uppercase transition-all ".concat(!isCustom && selectedPreset === amt ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/50" : "bg-neutral-950 text-neutral-300 hover:text-white border border-neutral-800"),
                          children: amt
                        }, amt);
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: customAmount,
                        onChange: function onChange(e) {
                          return handleCustomChange(e.target.value);
                        },
                        placeholder: t.enterAmountPlaceholder,
                        className: "w-full px-4 py-2.5 rounded-xl bg-neutral-950 border text-white text-xs font-mono focus:outline-none focus:border-emerald-500 ".concat(isCustom ? "border-emerald-500 ring-1 ring-emerald-500" : "border-neutral-800")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 font-bold text-xxs",
                        children: t.etbCurrency
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      className: "block text-xs font-sports font-bold uppercase tracking-wider text-neutral-300 mb-1.5",
                      children: [t.donationPurposeLabel, " *"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                      value: purpose,
                      onChange: function onChange(e) {
                        return setPurpose(e.target.value);
                      },
                      className: "w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-medium focus:outline-none focus:border-emerald-500",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                        value: t.purposeGeneral,
                        children: t.purposeGeneral
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                        value: t.purposeAcademy,
                        children: t.purposeAcademy
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                        value: t.purposeStadium,
                        children: t.purposeStadium
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1",
                        children: [t.donorNameLabel, " *"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        required: true,
                        value: fullName,
                        onChange: function onChange(e) {
                          return setFullName(e.target.value);
                        },
                        placeholder: t.fullNamePlaceholder,
                        className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        className: "block text-xxs font-sports font-bold uppercase tracking-wider text-neutral-400 mb-1",
                        children: [t.donorPhoneLabel, " *"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "tel",
                        required: true,
                        value: phone,
                        onChange: function onChange(e) {
                          return setPhone(e.target.value);
                        },
                        placeholder: t.phonePlaceholder,
                        className: "w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-4 border-t border-neutral-800 flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs uppercase tracking-wider text-neutral-400 block font-semibold",
                        children: language === "am" ? "የልገሳ ጠቅላላ" : "Total Donation"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-sports font-black text-2xl text-emerald-400",
                        children: [currentAmount.toLocaleString(), " ", t.etbCurrency]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      type: "submit",
                      disabled: isSubmitting || currentAmount <= 0,
                      className: "px-6 py-3 rounded-xl btn-donate-emerald text-white font-sports font-black uppercase tracking-wider text-xs shadow-xl flex items-center gap-2 transition-all disabled:opacity-50",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                        className: "w-4 h-4 fill-white"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: isSubmitting ? t.submitting : language === "am" ? "በቻፓ ይለግሱ" : "Donate with Chapa"
                      })]
                    })]
                  })]
                }))
              })]
            })
          });
        });
      }
    };
  });
})();
