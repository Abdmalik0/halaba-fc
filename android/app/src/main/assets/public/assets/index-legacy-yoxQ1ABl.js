;
(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./vendor-react-legacy-0mKvI6Bt.js', './vendor-capacitor-legacy-DBOunZTQ.js', './vendor-firebase-legacy-BbBCOsOA.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Shield, Calendar, Trophy, Newspaper, ShoppingBag, UserPlus, Info, Phone, Smartphone, Lock, Globe, ChevronDown, Heart, X, Menu, ShieldCheck, MapPin, Mail, Clock, Send, ExternalLink, Download, Sparkles, LoaderCircle, CircleCheck, Share2, SquarePlus, Award, Play, Pause, ChevronLeft, ChevronRight, Layers, ArrowRight, Flame, Radio, RefreshCw, WifiOff, TriangleAlert, createRoot, __vitePreload, CapacitorUpdater, setLogLevel, getApps, getApp, initializeApp, initializeFirestore, getFirestore, getAuth, collection, onSnapshot, query, orderBy, onAuthStateChanged, setDoc, doc, serverTimestamp, deleteDoc, addDoc, signOut, signInWithEmailAndPassword;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Shield = module.S;
        Calendar = module.C;
        Trophy = module.T;
        Newspaper = module.N;
        ShoppingBag = module.a;
        UserPlus = module.U;
        Info = module.I;
        Phone = module.P;
        Smartphone = module.b;
        Lock = module.L;
        Globe = module.G;
        ChevronDown = module.c;
        Heart = module.H;
        X = module.X;
        Menu = module.M;
        ShieldCheck = module.d;
        MapPin = module.e;
        Mail = module.f;
        Clock = module.g;
        Send = module.h;
        ExternalLink = module.E;
        Download = module.D;
        Sparkles = module.i;
        LoaderCircle = module.k;
        CircleCheck = module.l;
        Share2 = module.m;
        SquarePlus = module.n;
        Award = module.A;
        Play = module.o;
        Pause = module.p;
        ChevronLeft = module.q;
        ChevronRight = module.s;
        Layers = module.t;
        ArrowRight = module.u;
        Flame = module.F;
        Radio = module.R;
        RefreshCw = module.v;
        WifiOff = module.W;
        TriangleAlert = module.w;
        createRoot = module.x;
      }, function (module) {
        __vitePreload = module._;
        CapacitorUpdater = module.C;
      }, function (module) {
        setLogLevel = module.s;
        getApps = module.g;
        getApp = module.a;
        initializeApp = module.i;
        initializeFirestore = module.b;
        getFirestore = module.c;
        getAuth = module.d;
        collection = module.e;
        onSnapshot = module.o;
        query = module.q;
        orderBy = module.f;
        onAuthStateChanged = module.h;
        setDoc = module.j;
        doc = module.k;
        serverTimestamp = module.l;
        deleteDoc = module.m;
        addDoc = module.n;
        signOut = module.p;
        signInWithEmailAndPassword = module.r;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-duration: initial;\n    }\n  }\n}\n\n@layer theme {\n  :root, :host {\n    --font-sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\",\n      \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n      \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\n      \"Courier New\", monospace;\n    --color-red-100: #fee2e2;\n    --color-red-200: #fecaca;\n    --color-red-300: #fca5a5;\n    --color-red-400: #f87171;\n    --color-red-500: #ef4444;\n    --color-red-600: #dc2626;\n    --color-red-700: #b91c1c;\n    --color-red-800: #991b1b;\n    --color-red-900: #7f1d1d;\n    --color-red-950: #450a0a;\n    --color-amber-200: #fde68a;\n    --color-amber-300: #fcd34d;\n    --color-amber-400: #fbbf24;\n    --color-amber-500: #f59e0b;\n    --color-amber-600: #d97706;\n    --color-amber-800: #92400e;\n    --color-amber-950: #451a03;\n    --color-green-600: #16a34a;\n    --color-green-700: #15803d;\n    --color-green-950: #052e16;\n    --color-emerald-200: #a7f3d0;\n    --color-emerald-300: #6ee7b7;\n    --color-emerald-400: #34d399;\n    --color-emerald-500: #10b981;\n    --color-emerald-600: #059669;\n    --color-emerald-700: #047857;\n    --color-emerald-800: #065f46;\n    --color-emerald-900: #064e3b;\n    --color-emerald-950: #022c22;\n    --color-teal-500: oklch(70.4% .14 182.503);\n    --color-teal-600: oklch(60% .118 184.704);\n    --color-cyan-300: #67e8f9;\n    --color-cyan-400: #22d3ee;\n    --color-cyan-500: #06b6d4;\n    --color-cyan-700: #0e7490;\n    --color-cyan-800: #155e75;\n    --color-cyan-900: #164e63;\n    --color-cyan-950: #083344;\n    --color-sky-400: oklch(74.6% .16 232.661);\n    --color-sky-500: oklch(68.5% .169 237.323);\n    --color-sky-600: oklch(58.8% .158 241.966);\n    --color-blue-200: #bfdbfe;\n    --color-blue-300: #93c5fd;\n    --color-blue-400: #60a5fa;\n    --color-blue-500: #3b82f6;\n    --color-blue-600: #2563eb;\n    --color-blue-800: #1e40af;\n    --color-blue-900: #1e3a8a;\n    --color-blue-950: #172554;\n    --color-purple-400: oklch(71.4% .203 305.504);\n    --color-neutral-100: #f5f5f5;\n    --color-neutral-200: #e5e5e5;\n    --color-neutral-300: #d4d4d4;\n    --color-neutral-400: #a3a3a3;\n    --color-neutral-500: #737373;\n    --color-neutral-600: #525252;\n    --color-neutral-700: #404040;\n    --color-neutral-800: #262626;\n    --color-neutral-900: #171717;\n    --color-neutral-950: #0a0a0a;\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: .25rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-7xl: 80rem;\n    --text-xs: .75rem;\n    --text-xs--line-height: calc(1 / .75);\n    --text-sm: .875rem;\n    --text-sm--line-height: calc(1.25 / .875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n    --tracking-tight: -.025em;\n    --tracking-wide: .025em;\n    --tracking-wider: .05em;\n    --tracking-widest: .1em;\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --radius-md: .375rem;\n    --radius-lg: .5rem;\n    --radius-xl: .75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --drop-shadow-sm: 0 1px 2px #00000026;\n    --drop-shadow-md: 0 3px 3px #0000001f;\n    --drop-shadow-lg: 0 4px 4px #00000026;\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-xl: 24px;\n    --blur-3xl: 64px;\n    --aspect-video: 16 / 9;\n    --default-transition-duration: .15s;\n    --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n\n@layer base {\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring:where(:not(iframe)) {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]) {\n    appearance: button;\n  }\n\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n\n@layer components;\n\n@layer utilities {\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n\n  .pointer-events-none {\n    pointer-events: none;\n  }\n\n  .absolute {\n    position: absolute;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .static {\n    position: static;\n  }\n\n  .sticky {\n    position: sticky;\n  }\n\n  .-inset-1 {\n    inset: calc(var(--spacing) * -1);\n  }\n\n  .-inset-2 {\n    inset: calc(var(--spacing) * -2);\n  }\n\n  .-inset-3\\.5 {\n    inset: calc(var(--spacing) * -3.5);\n  }\n\n  .inset-0 {\n    inset: 0;\n  }\n\n  .-top-24 {\n    top: calc(var(--spacing) * -24);\n  }\n\n  .top-0 {\n    top: 0;\n  }\n\n  .top-1\\/2 {\n    top: 50%;\n  }\n\n  .top-2 {\n    top: calc(var(--spacing) * 2);\n  }\n\n  .top-3 {\n    top: calc(var(--spacing) * 3);\n  }\n\n  .top-6 {\n    top: calc(var(--spacing) * 6);\n  }\n\n  .top-7 {\n    top: calc(var(--spacing) * 7);\n  }\n\n  .top-20 {\n    top: calc(var(--spacing) * 20);\n  }\n\n  .-right-1 {\n    right: calc(var(--spacing) * -1);\n  }\n\n  .-right-10 {\n    right: calc(var(--spacing) * -10);\n  }\n\n  .-right-24 {\n    right: calc(var(--spacing) * -24);\n  }\n\n  .right-0 {\n    right: 0;\n  }\n\n  .right-1\\/4 {\n    right: 25%;\n  }\n\n  .right-3 {\n    right: calc(var(--spacing) * 3);\n  }\n\n  .right-3\\.5 {\n    right: calc(var(--spacing) * 3.5);\n  }\n\n  .right-4 {\n    right: calc(var(--spacing) * 4);\n  }\n\n  .right-6 {\n    right: calc(var(--spacing) * 6);\n  }\n\n  .right-12 {\n    right: calc(var(--spacing) * 12);\n  }\n\n  .-bottom-1 {\n    bottom: calc(var(--spacing) * -1);\n  }\n\n  .-bottom-10 {\n    bottom: calc(var(--spacing) * -10);\n  }\n\n  .-bottom-24 {\n    bottom: calc(var(--spacing) * -24);\n  }\n\n  .bottom-0 {\n    bottom: 0;\n  }\n\n  .bottom-4 {\n    bottom: calc(var(--spacing) * 4);\n  }\n\n  .bottom-6 {\n    bottom: calc(var(--spacing) * 6);\n  }\n\n  .-left-24 {\n    left: calc(var(--spacing) * -24);\n  }\n\n  .left-0 {\n    left: 0;\n  }\n\n  .left-1\\/4 {\n    left: 25%;\n  }\n\n  .left-2 {\n    left: calc(var(--spacing) * 2);\n  }\n\n  .left-3 {\n    left: calc(var(--spacing) * 3);\n  }\n\n  .left-3\\.5 {\n    left: calc(var(--spacing) * 3.5);\n  }\n\n  .left-4 {\n    left: calc(var(--spacing) * 4);\n  }\n\n  .left-6 {\n    left: calc(var(--spacing) * 6);\n  }\n\n  .left-7 {\n    left: calc(var(--spacing) * 7);\n  }\n\n  .-z-10 {\n    z-index: calc(10 * -1);\n  }\n\n  .z-10 {\n    z-index: 10;\n  }\n\n  .z-30 {\n    z-index: 30;\n  }\n\n  .z-40 {\n    z-index: 40;\n  }\n\n  .z-50 {\n    z-index: 50;\n  }\n\n  .z-\\[100\\] {\n    z-index: 100;\n  }\n\n  .mx-auto {\n    margin-inline: auto;\n  }\n\n  .my-6 {\n    margin-block: calc(var(--spacing) * 6);\n  }\n\n  .my-8 {\n    margin-block: calc(var(--spacing) * 8);\n  }\n\n  .mt-0\\.5 {\n    margin-top: calc(var(--spacing) * .5);\n  }\n\n  .mt-1 {\n    margin-top: var(--spacing);\n  }\n\n  .mt-1\\.5 {\n    margin-top: calc(var(--spacing) * 1.5);\n  }\n\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n\n  .mt-2\\.5 {\n    margin-top: calc(var(--spacing) * 2.5);\n  }\n\n  .mt-3 {\n    margin-top: calc(var(--spacing) * 3);\n  }\n\n  .mt-3\\.5 {\n    margin-top: calc(var(--spacing) * 3.5);\n  }\n\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n\n  .mt-5 {\n    margin-top: calc(var(--spacing) * 5);\n  }\n\n  .mt-6 {\n    margin-top: calc(var(--spacing) * 6);\n  }\n\n  .mt-8 {\n    margin-top: calc(var(--spacing) * 8);\n  }\n\n  .mr-1 {\n    margin-right: var(--spacing);\n  }\n\n  .mb-1 {\n    margin-bottom: var(--spacing);\n  }\n\n  .mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5);\n  }\n\n  .mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n\n  .mb-2\\.5 {\n    margin-bottom: calc(var(--spacing) * 2.5);\n  }\n\n  .mb-3 {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n\n  .mb-4 {\n    margin-bottom: calc(var(--spacing) * 4);\n  }\n\n  .mb-5 {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n\n  .mb-6 {\n    margin-bottom: calc(var(--spacing) * 6);\n  }\n\n  .mb-8 {\n    margin-bottom: calc(var(--spacing) * 8);\n  }\n\n  .ml-0\\.5 {\n    margin-left: calc(var(--spacing) * .5);\n  }\n\n  .ml-1 {\n    margin-left: var(--spacing);\n  }\n\n  .ml-1\\.5 {\n    margin-left: calc(var(--spacing) * 1.5);\n  }\n\n  .ml-2 {\n    margin-left: calc(var(--spacing) * 2);\n  }\n\n  .ml-auto {\n    margin-left: auto;\n  }\n\n  .line-clamp-1 {\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .line-clamp-2 {\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .line-clamp-3 {\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .block {\n    display: block;\n  }\n\n  .contents {\n    display: contents;\n  }\n\n  .flex {\n    display: flex;\n  }\n\n  .grid {\n    display: grid;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .inline-block {\n    display: inline-block;\n  }\n\n  .inline-flex {\n    display: inline-flex;\n  }\n\n  .table {\n    display: table;\n  }\n\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n\n  .aspect-video {\n    aspect-ratio: var(--aspect-video);\n  }\n\n  .h-1\\.5 {\n    height: calc(var(--spacing) * 1.5);\n  }\n\n  .h-2 {\n    height: calc(var(--spacing) * 2);\n  }\n\n  .h-2\\.5 {\n    height: calc(var(--spacing) * 2.5);\n  }\n\n  .h-3 {\n    height: calc(var(--spacing) * 3);\n  }\n\n  .h-3\\.5 {\n    height: calc(var(--spacing) * 3.5);\n  }\n\n  .h-4 {\n    height: calc(var(--spacing) * 4);\n  }\n\n  .h-5 {\n    height: calc(var(--spacing) * 5);\n  }\n\n  .h-6 {\n    height: calc(var(--spacing) * 6);\n  }\n\n  .h-7 {\n    height: calc(var(--spacing) * 7);\n  }\n\n  .h-8 {\n    height: calc(var(--spacing) * 8);\n  }\n\n  .h-9 {\n    height: calc(var(--spacing) * 9);\n  }\n\n  .h-10 {\n    height: calc(var(--spacing) * 10);\n  }\n\n  .h-11 {\n    height: calc(var(--spacing) * 11);\n  }\n\n  .h-12 {\n    height: calc(var(--spacing) * 12);\n  }\n\n  .h-14 {\n    height: calc(var(--spacing) * 14);\n  }\n\n  .h-16 {\n    height: calc(var(--spacing) * 16);\n  }\n\n  .h-20 {\n    height: calc(var(--spacing) * 20);\n  }\n\n  .h-32 {\n    height: calc(var(--spacing) * 32);\n  }\n\n  .h-40 {\n    height: calc(var(--spacing) * 40);\n  }\n\n  .h-72 {\n    height: calc(var(--spacing) * 72);\n  }\n\n  .h-80 {\n    height: calc(var(--spacing) * 80);\n  }\n\n  .h-96 {\n    height: calc(var(--spacing) * 96);\n  }\n\n  .h-full {\n    height: 100%;\n  }\n\n  .max-h-72 {\n    max-height: calc(var(--spacing) * 72);\n  }\n\n  .max-h-\\[90vh\\] {\n    max-height: 90vh;\n  }\n\n  .max-h-\\[92vh\\] {\n    max-height: 92vh;\n  }\n\n  .max-h-full {\n    max-height: 100%;\n  }\n\n  .min-h-\\[50vh\\] {\n    min-height: 50vh;\n  }\n\n  .min-h-\\[60vh\\] {\n    min-height: 60vh;\n  }\n\n  .min-h-\\[200px\\] {\n    min-height: 200px;\n  }\n\n  .min-h-\\[250px\\] {\n    min-height: 250px;\n  }\n\n  .min-h-\\[300px\\] {\n    min-height: 300px;\n  }\n\n  .min-h-\\[580px\\] {\n    min-height: 580px;\n  }\n\n  .min-h-screen {\n    min-height: 100vh;\n  }\n\n  .w-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n  }\n\n  .w-1\\/3 {\n    width: 33.3333%;\n  }\n\n  .w-2 {\n    width: calc(var(--spacing) * 2);\n  }\n\n  .w-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n  }\n\n  .w-2\\/3 {\n    width: 66.6667%;\n  }\n\n  .w-3 {\n    width: calc(var(--spacing) * 3);\n  }\n\n  .w-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n  }\n\n  .w-4 {\n    width: calc(var(--spacing) * 4);\n  }\n\n  .w-5 {\n    width: calc(var(--spacing) * 5);\n  }\n\n  .w-6 {\n    width: calc(var(--spacing) * 6);\n  }\n\n  .w-7 {\n    width: calc(var(--spacing) * 7);\n  }\n\n  .w-8 {\n    width: calc(var(--spacing) * 8);\n  }\n\n  .w-9 {\n    width: calc(var(--spacing) * 9);\n  }\n\n  .w-10 {\n    width: calc(var(--spacing) * 10);\n  }\n\n  .w-11 {\n    width: calc(var(--spacing) * 11);\n  }\n\n  .w-12 {\n    width: calc(var(--spacing) * 12);\n  }\n\n  .w-14 {\n    width: calc(var(--spacing) * 14);\n  }\n\n  .w-16 {\n    width: calc(var(--spacing) * 16);\n  }\n\n  .w-20 {\n    width: calc(var(--spacing) * 20);\n  }\n\n  .w-24 {\n    width: calc(var(--spacing) * 24);\n  }\n\n  .w-32 {\n    width: calc(var(--spacing) * 32);\n  }\n\n  .w-40 {\n    width: calc(var(--spacing) * 40);\n  }\n\n  .w-48 {\n    width: calc(var(--spacing) * 48);\n  }\n\n  .w-72 {\n    width: calc(var(--spacing) * 72);\n  }\n\n  .w-80 {\n    width: calc(var(--spacing) * 80);\n  }\n\n  .w-96 {\n    width: calc(var(--spacing) * 96);\n  }\n\n  .w-full {\n    width: 100%;\n  }\n\n  .w-px {\n    width: 1px;\n  }\n\n  .max-w-2xl {\n    max-width: var(--container-2xl);\n  }\n\n  .max-w-3xl {\n    max-width: var(--container-3xl);\n  }\n\n  .max-w-4xl {\n    max-width: var(--container-4xl);\n  }\n\n  .max-w-5xl {\n    max-width: var(--container-5xl);\n  }\n\n  .max-w-7xl {\n    max-width: var(--container-7xl);\n  }\n\n  .max-w-\\[64px\\] {\n    max-width: 64px;\n  }\n\n  .max-w-\\[130px\\] {\n    max-width: 130px;\n  }\n\n  .max-w-\\[140px\\] {\n    max-width: 140px;\n  }\n\n  .max-w-\\[170px\\] {\n    max-width: 170px;\n  }\n\n  .max-w-\\[200px\\] {\n    max-width: 200px;\n  }\n\n  .max-w-\\[240px\\] {\n    max-width: 240px;\n  }\n\n  .max-w-full {\n    max-width: 100%;\n  }\n\n  .max-w-lg {\n    max-width: var(--container-lg);\n  }\n\n  .max-w-md {\n    max-width: var(--container-md);\n  }\n\n  .max-w-sm {\n    max-width: var(--container-sm);\n  }\n\n  .max-w-xl {\n    max-width: var(--container-xl);\n  }\n\n  .max-w-xs {\n    max-width: var(--container-xs);\n  }\n\n  .min-w-0 {\n    min-width: 0;\n  }\n\n  .min-w-\\[140px\\] {\n    min-width: 140px;\n  }\n\n  .min-w-\\[150px\\] {\n    min-width: 150px;\n  }\n\n  .flex-1 {\n    flex: 1;\n  }\n\n  .flex-shrink-0, .shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .scale-105 {\n    --tw-scale-x: 105%;\n    --tw-scale-y: 105%;\n    --tw-scale-z: 105%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .scale-125 {\n    --tw-scale-x: 125%;\n    --tw-scale-y: 125%;\n    --tw-scale-z: 125%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .scale-\\[1\\.01\\] {\n    scale: 1.01;\n  }\n\n  .transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n  }\n\n  .animate-\\[pulse_1\\.2s_ease-in-out_infinite\\] {\n    animation: 1.2s ease-in-out infinite pulse;\n  }\n\n  .animate-\\[spin_4s_linear_infinite_reverse\\] {\n    animation: 4s linear infinite reverse spin;\n  }\n\n  .animate-\\[spin_6s_linear_infinite\\] {\n    animation: 6s linear infinite spin;\n  }\n\n  .animate-bounce {\n    animation: var(--animate-bounce);\n  }\n\n  .animate-ping {\n    animation: var(--animate-ping);\n  }\n\n  .animate-pulse {\n    animation: var(--animate-pulse);\n  }\n\n  .animate-spin {\n    animation: var(--animate-spin);\n  }\n\n  .cursor-pointer {\n    cursor: pointer;\n  }\n\n  .resize {\n    resize: both;\n  }\n\n  .resize-none {\n    resize: none;\n  }\n\n  .list-inside {\n    list-style-position: inside;\n  }\n\n  .list-decimal {\n    list-style-type: decimal;\n  }\n\n  .list-disc {\n    list-style-type: disc;\n  }\n\n  .\\[appearance\\:textfield\\] {\n    appearance: textfield;\n  }\n\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .flex-col {\n    flex-direction: column;\n  }\n\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .items-baseline {\n    align-items: baseline;\n  }\n\n  .items-center {\n    align-items: center;\n  }\n\n  .items-end {\n    align-items: flex-end;\n  }\n\n  .items-start {\n    align-items: flex-start;\n  }\n\n  .items-stretch {\n    align-items: stretch;\n  }\n\n  .justify-around {\n    justify-content: space-around;\n  }\n\n  .justify-between {\n    justify-content: space-between;\n  }\n\n  .justify-center {\n    justify-content: center;\n  }\n\n  .justify-end {\n    justify-content: flex-end;\n  }\n\n  .justify-start {\n    justify-content: flex-start;\n  }\n\n  .gap-0 {\n    gap: 0;\n  }\n\n  .gap-1 {\n    gap: var(--spacing);\n  }\n\n  .gap-1\\.5 {\n    gap: calc(var(--spacing) * 1.5);\n  }\n\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n\n  .gap-2\\.5 {\n    gap: calc(var(--spacing) * 2.5);\n  }\n\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n\n  .gap-3\\.5 {\n    gap: calc(var(--spacing) * 3.5);\n  }\n\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n\n  .gap-6 {\n    gap: calc(var(--spacing) * 6);\n  }\n\n  .gap-8 {\n    gap: calc(var(--spacing) * 8);\n  }\n\n  .gap-10 {\n    gap: calc(var(--spacing) * 10);\n  }\n\n  :where(.space-y-0\\.5 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * .5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * .5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-1 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));\n    margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-1\\.5 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-2 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-2\\.5 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-3 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-4 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-5 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-6 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-8 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-10 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 10) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-12 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 12) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-16 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 16) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 16) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  .gap-x-4 {\n    column-gap: calc(var(--spacing) * 4);\n  }\n\n  :where(.space-x-1 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(var(--spacing) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(var(--spacing) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  :where(.space-x-1\\.5 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  :where(.space-x-3 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .gap-y-1 {\n    row-gap: var(--spacing);\n  }\n\n  :where(.divide-y > :not(:last-child)) {\n    --tw-divide-y-reverse: 0;\n    border-bottom-style: var(--tw-border-style);\n    border-top-style: var(--tw-border-style);\n    border-top-width: calc(1px * var(--tw-divide-y-reverse));\n    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  }\n\n  :where(.divide-neutral-800\\/60 > :not(:last-child)) {\n    border-color: #26262699;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    :where(.divide-neutral-800\\/60 > :not(:last-child)) {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);\n    }\n  }\n\n  :where(.divide-neutral-800\\/80 > :not(:last-child)) {\n    border-color: #262626cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    :where(.divide-neutral-800\\/80 > :not(:last-child)) {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n    }\n  }\n\n  .self-end {\n    align-self: flex-end;\n  }\n\n  .self-start {\n    align-self: flex-start;\n  }\n\n  .truncate {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .overflow-visible {\n    overflow: visible;\n  }\n\n  .overflow-x-auto {\n    overflow-x: auto;\n  }\n\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n\n  .rounded {\n    border-radius: .25rem;\n  }\n\n  .rounded-2xl {\n    border-radius: var(--radius-2xl);\n  }\n\n  .rounded-3xl {\n    border-radius: var(--radius-3xl);\n  }\n\n  .rounded-\\[22px\\] {\n    border-radius: 22px;\n  }\n\n  .rounded-full {\n    border-radius: 3.40282e38px;\n  }\n\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n\n  .rounded-xl {\n    border-radius: var(--radius-xl);\n  }\n\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n\n  .border-t {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n\n  .border-l-4 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 4px;\n  }\n\n  .border-dashed {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n\n  .border-amber-400 {\n    border-color: var(--color-amber-400);\n  }\n\n  .border-amber-400\\/30 {\n    border-color: #fbbf244d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-400\\/30 {\n      border-color: color-mix(in oklab, var(--color-amber-400) 30%, transparent);\n    }\n  }\n\n  .border-amber-500 {\n    border-color: var(--color-amber-500);\n  }\n\n  .border-amber-500\\/30 {\n    border-color: #f59e0b4d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-500\\/30 {\n      border-color: color-mix(in oklab, var(--color-amber-500) 30%, transparent);\n    }\n  }\n\n  .border-amber-500\\/40 {\n    border-color: #f59e0b66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-500\\/40 {\n      border-color: color-mix(in oklab, var(--color-amber-500) 40%, transparent);\n    }\n  }\n\n  .border-amber-500\\/50 {\n    border-color: #f59e0b80;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-500\\/50 {\n      border-color: color-mix(in oklab, var(--color-amber-500) 50%, transparent);\n    }\n  }\n\n  .border-amber-800 {\n    border-color: var(--color-amber-800);\n  }\n\n  .border-amber-800\\/60 {\n    border-color: #92400e99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-800\\/60 {\n      border-color: color-mix(in oklab, var(--color-amber-800) 60%, transparent);\n    }\n  }\n\n  .border-amber-800\\/80 {\n    border-color: #92400ecc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-amber-800\\/80 {\n      border-color: color-mix(in oklab, var(--color-amber-800) 80%, transparent);\n    }\n  }\n\n  .border-blue-400\\/40 {\n    border-color: #60a5fa66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-blue-400\\/40 {\n      border-color: color-mix(in oklab, var(--color-blue-400) 40%, transparent);\n    }\n  }\n\n  .border-blue-800 {\n    border-color: var(--color-blue-800);\n  }\n\n  .border-blue-900\\/40 {\n    border-color: #1e3a8a66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-blue-900\\/40 {\n      border-color: color-mix(in oklab, var(--color-blue-900) 40%, transparent);\n    }\n  }\n\n  .border-cyan-500\\/40 {\n    border-color: #06b6d466;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-cyan-500\\/40 {\n      border-color: color-mix(in oklab, var(--color-cyan-500) 40%, transparent);\n    }\n  }\n\n  .border-cyan-700\\/50 {\n    border-color: #0e749080;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-cyan-700\\/50 {\n      border-color: color-mix(in oklab, var(--color-cyan-700) 50%, transparent);\n    }\n  }\n\n  .border-cyan-800\\/40 {\n    border-color: #155e7566;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-cyan-800\\/40 {\n      border-color: color-mix(in oklab, var(--color-cyan-800) 40%, transparent);\n    }\n  }\n\n  .border-cyan-900\\/40 {\n    border-color: #164e6366;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-cyan-900\\/40 {\n      border-color: color-mix(in oklab, var(--color-cyan-900) 40%, transparent);\n    }\n  }\n\n  .border-emerald-500 {\n    border-color: var(--color-emerald-500);\n  }\n\n  .border-emerald-500\\/30 {\n    border-color: #10b9814d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-500\\/30 {\n      border-color: color-mix(in oklab, var(--color-emerald-500) 30%, transparent);\n    }\n  }\n\n  .border-emerald-500\\/40 {\n    border-color: #10b98166;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-500\\/40 {\n      border-color: color-mix(in oklab, var(--color-emerald-500) 40%, transparent);\n    }\n  }\n\n  .border-emerald-500\\/50 {\n    border-color: #10b98180;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-500\\/50 {\n      border-color: color-mix(in oklab, var(--color-emerald-500) 50%, transparent);\n    }\n  }\n\n  .border-emerald-600 {\n    border-color: var(--color-emerald-600);\n  }\n\n  .border-emerald-700 {\n    border-color: var(--color-emerald-700);\n  }\n\n  .border-emerald-800 {\n    border-color: var(--color-emerald-800);\n  }\n\n  .border-emerald-800\\/40 {\n    border-color: #065f4666;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-800\\/40 {\n      border-color: color-mix(in oklab, var(--color-emerald-800) 40%, transparent);\n    }\n  }\n\n  .border-emerald-800\\/60 {\n    border-color: #065f4699;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-800\\/60 {\n      border-color: color-mix(in oklab, var(--color-emerald-800) 60%, transparent);\n    }\n  }\n\n  .border-emerald-800\\/80 {\n    border-color: #065f46cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-800\\/80 {\n      border-color: color-mix(in oklab, var(--color-emerald-800) 80%, transparent);\n    }\n  }\n\n  .border-emerald-900\\/40 {\n    border-color: #064e3b66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-emerald-900\\/40 {\n      border-color: color-mix(in oklab, var(--color-emerald-900) 40%, transparent);\n    }\n  }\n\n  .border-neutral-700 {\n    border-color: var(--color-neutral-700);\n  }\n\n  .border-neutral-700\\/60 {\n    border-color: #40404099;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-700\\/60 {\n      border-color: color-mix(in oklab, var(--color-neutral-700) 60%, transparent);\n    }\n  }\n\n  .border-neutral-700\\/70 {\n    border-color: #404040b3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-700\\/70 {\n      border-color: color-mix(in oklab, var(--color-neutral-700) 70%, transparent);\n    }\n  }\n\n  .border-neutral-700\\/80 {\n    border-color: #404040cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-700\\/80 {\n      border-color: color-mix(in oklab, var(--color-neutral-700) 80%, transparent);\n    }\n  }\n\n  .border-neutral-800 {\n    border-color: var(--color-neutral-800);\n  }\n\n  .border-neutral-800\\/60 {\n    border-color: #26262699;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-800\\/60 {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);\n    }\n  }\n\n  .border-neutral-800\\/80 {\n    border-color: #262626cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-800\\/80 {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n    }\n  }\n\n  .border-neutral-800\\/90 {\n    border-color: #262626e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-neutral-800\\/90 {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 90%, transparent);\n    }\n  }\n\n  .border-neutral-900 {\n    border-color: var(--color-neutral-900);\n  }\n\n  .border-neutral-950 {\n    border-color: var(--color-neutral-950);\n  }\n\n  .border-red-400 {\n    border-color: var(--color-red-400);\n  }\n\n  .border-red-500 {\n    border-color: var(--color-red-500);\n  }\n\n  .border-red-500\\/30 {\n    border-color: #ef44444d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-500\\/30 {\n      border-color: color-mix(in oklab, var(--color-red-500) 30%, transparent);\n    }\n  }\n\n  .border-red-500\\/40 {\n    border-color: #ef444466;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-500\\/40 {\n      border-color: color-mix(in oklab, var(--color-red-500) 40%, transparent);\n    }\n  }\n\n  .border-red-500\\/50 {\n    border-color: #ef444480;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-500\\/50 {\n      border-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);\n    }\n  }\n\n  .border-red-700 {\n    border-color: var(--color-red-700);\n  }\n\n  .border-red-700\\/60 {\n    border-color: #b91c1c99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-700\\/60 {\n      border-color: color-mix(in oklab, var(--color-red-700) 60%, transparent);\n    }\n  }\n\n  .border-red-800 {\n    border-color: var(--color-red-800);\n  }\n\n  .border-red-800\\/40 {\n    border-color: #991b1b66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-800\\/40 {\n      border-color: color-mix(in oklab, var(--color-red-800) 40%, transparent);\n    }\n  }\n\n  .border-red-800\\/60 {\n    border-color: #991b1b99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-800\\/60 {\n      border-color: color-mix(in oklab, var(--color-red-800) 60%, transparent);\n    }\n  }\n\n  .border-red-800\\/80 {\n    border-color: #991b1bcc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-800\\/80 {\n      border-color: color-mix(in oklab, var(--color-red-800) 80%, transparent);\n    }\n  }\n\n  .border-red-900 {\n    border-color: var(--color-red-900);\n  }\n\n  .border-red-900\\/30 {\n    border-color: #7f1d1d4d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-900\\/30 {\n      border-color: color-mix(in oklab, var(--color-red-900) 30%, transparent);\n    }\n  }\n\n  .border-red-900\\/40 {\n    border-color: #7f1d1d66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-900\\/40 {\n      border-color: color-mix(in oklab, var(--color-red-900) 40%, transparent);\n    }\n  }\n\n  .border-red-950\\/40 {\n    border-color: #450a0a66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-red-950\\/40 {\n      border-color: color-mix(in oklab, var(--color-red-950) 40%, transparent);\n    }\n  }\n\n  .border-white {\n    border-color: var(--color-white);\n  }\n\n  .border-t-transparent {\n    border-top-color: #0000;\n  }\n\n  .border-l-amber-500 {\n    border-left-color: var(--color-amber-500);\n  }\n\n  .border-l-red-500 {\n    border-left-color: var(--color-red-500);\n  }\n\n  .bg-\\[\\#050b17\\] {\n    background-color: #050b17;\n  }\n\n  .bg-amber-400 {\n    background-color: var(--color-amber-400);\n  }\n\n  .bg-amber-500 {\n    background-color: var(--color-amber-500);\n  }\n\n  .bg-amber-500\\/10 {\n    background-color: #f59e0b1a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-amber-500\\/10 {\n      background-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);\n    }\n  }\n\n  .bg-amber-500\\/20 {\n    background-color: #f59e0b33;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-amber-500\\/20 {\n      background-color: color-mix(in oklab, var(--color-amber-500) 20%, transparent);\n    }\n  }\n\n  .bg-amber-600 {\n    background-color: var(--color-amber-600);\n  }\n\n  .bg-amber-950 {\n    background-color: var(--color-amber-950);\n  }\n\n  .bg-amber-950\\/60 {\n    background-color: #451a0399;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-amber-950\\/60 {\n      background-color: color-mix(in oklab, var(--color-amber-950) 60%, transparent);\n    }\n  }\n\n  .bg-amber-950\\/80 {\n    background-color: #451a03cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-amber-950\\/80 {\n      background-color: color-mix(in oklab, var(--color-amber-950) 80%, transparent);\n    }\n  }\n\n  .bg-black\\/70 {\n    background-color: #000000b3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/70 {\n      background-color: color-mix(in oklab, var(--color-black) 70%, transparent);\n    }\n  }\n\n  .bg-black\\/75 {\n    background-color: #000000bf;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/75 {\n      background-color: color-mix(in oklab, var(--color-black) 75%, transparent);\n    }\n  }\n\n  .bg-black\\/80 {\n    background-color: #000c;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/80 {\n      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);\n    }\n  }\n\n  .bg-black\\/85 {\n    background-color: #000000d9;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/85 {\n      background-color: color-mix(in oklab, var(--color-black) 85%, transparent);\n    }\n  }\n\n  .bg-blue-500\\/15 {\n    background-color: #3b82f626;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-blue-500\\/15 {\n      background-color: color-mix(in oklab, var(--color-blue-500) 15%, transparent);\n    }\n  }\n\n  .bg-blue-600\\/20 {\n    background-color: #2563eb33;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-blue-600\\/20 {\n      background-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n\n  .bg-blue-900\\/60 {\n    background-color: #1e3a8a99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-blue-900\\/60 {\n      background-color: color-mix(in oklab, var(--color-blue-900) 60%, transparent);\n    }\n  }\n\n  .bg-blue-950 {\n    background-color: var(--color-blue-950);\n  }\n\n  .bg-cyan-500\\/10 {\n    background-color: #06b6d41a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-cyan-500\\/10 {\n      background-color: color-mix(in oklab, var(--color-cyan-500) 10%, transparent);\n    }\n  }\n\n  .bg-cyan-950 {\n    background-color: var(--color-cyan-950);\n  }\n\n  .bg-cyan-950\\/50 {\n    background-color: #08334480;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-cyan-950\\/50 {\n      background-color: color-mix(in oklab, var(--color-cyan-950) 50%, transparent);\n    }\n  }\n\n  .bg-cyan-950\\/90 {\n    background-color: #083344e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-cyan-950\\/90 {\n      background-color: color-mix(in oklab, var(--color-cyan-950) 90%, transparent);\n    }\n  }\n\n  .bg-emerald-400 {\n    background-color: var(--color-emerald-400);\n  }\n\n  .bg-emerald-500 {\n    background-color: var(--color-emerald-500);\n  }\n\n  .bg-emerald-600 {\n    background-color: var(--color-emerald-600);\n  }\n\n  .bg-emerald-600\\/10 {\n    background-color: #0596691a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-600\\/10 {\n      background-color: color-mix(in oklab, var(--color-emerald-600) 10%, transparent);\n    }\n  }\n\n  .bg-emerald-600\\/20 {\n    background-color: #05966933;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-600\\/20 {\n      background-color: color-mix(in oklab, var(--color-emerald-600) 20%, transparent);\n    }\n  }\n\n  .bg-emerald-700 {\n    background-color: var(--color-emerald-700);\n  }\n\n  .bg-emerald-950 {\n    background-color: var(--color-emerald-950);\n  }\n\n  .bg-emerald-950\\/20 {\n    background-color: #022c2233;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/20 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 20%, transparent);\n    }\n  }\n\n  .bg-emerald-950\\/40 {\n    background-color: #022c2266;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/40 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 40%, transparent);\n    }\n  }\n\n  .bg-emerald-950\\/60 {\n    background-color: #022c2299;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/60 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 60%, transparent);\n    }\n  }\n\n  .bg-emerald-950\\/70 {\n    background-color: #022c22b3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/70 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 70%, transparent);\n    }\n  }\n\n  .bg-emerald-950\\/80 {\n    background-color: #022c22cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/80 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 80%, transparent);\n    }\n  }\n\n  .bg-emerald-950\\/90 {\n    background-color: #022c22e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-emerald-950\\/90 {\n      background-color: color-mix(in oklab, var(--color-emerald-950) 90%, transparent);\n    }\n  }\n\n  .bg-neutral-500 {\n    background-color: var(--color-neutral-500);\n  }\n\n  .bg-neutral-600 {\n    background-color: var(--color-neutral-600);\n  }\n\n  .bg-neutral-700 {\n    background-color: var(--color-neutral-700);\n  }\n\n  .bg-neutral-800 {\n    background-color: var(--color-neutral-800);\n  }\n\n  .bg-neutral-800\\/80 {\n    background-color: #262626cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-800\\/80 {\n      background-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n    }\n  }\n\n  .bg-neutral-800\\/90 {\n    background-color: #262626e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-800\\/90 {\n      background-color: color-mix(in oklab, var(--color-neutral-800) 90%, transparent);\n    }\n  }\n\n  .bg-neutral-900 {\n    background-color: var(--color-neutral-900);\n  }\n\n  .bg-neutral-900\\/40 {\n    background-color: #17171766;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-900\\/40 {\n      background-color: color-mix(in oklab, var(--color-neutral-900) 40%, transparent);\n    }\n  }\n\n  .bg-neutral-900\\/60 {\n    background-color: #17171799;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-900\\/60 {\n      background-color: color-mix(in oklab, var(--color-neutral-900) 60%, transparent);\n    }\n  }\n\n  .bg-neutral-900\\/80 {\n    background-color: #171717cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-900\\/80 {\n      background-color: color-mix(in oklab, var(--color-neutral-900) 80%, transparent);\n    }\n  }\n\n  .bg-neutral-900\\/90 {\n    background-color: #171717e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-900\\/90 {\n      background-color: color-mix(in oklab, var(--color-neutral-900) 90%, transparent);\n    }\n  }\n\n  .bg-neutral-900\\/95 {\n    background-color: #171717f2;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-900\\/95 {\n      background-color: color-mix(in oklab, var(--color-neutral-900) 95%, transparent);\n    }\n  }\n\n  .bg-neutral-950 {\n    background-color: var(--color-neutral-950);\n  }\n\n  .bg-neutral-950\\/50 {\n    background-color: #0a0a0a80;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/50 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 50%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/60 {\n    background-color: #0a0a0a99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/60 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 60%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/70 {\n    background-color: #0a0a0ab3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/70 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 70%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/75 {\n    background-color: #0a0a0abf;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/75 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 75%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/80 {\n    background-color: #0a0a0acc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/80 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 80%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/90 {\n    background-color: #0a0a0ae6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/90 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 90%, transparent);\n    }\n  }\n\n  .bg-neutral-950\\/95 {\n    background-color: #0a0a0af2;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-950\\/95 {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 95%, transparent);\n    }\n  }\n\n  .bg-red-500 {\n    background-color: var(--color-red-500);\n  }\n\n  .bg-red-600 {\n    background-color: var(--color-red-600);\n  }\n\n  .bg-red-600\\/10 {\n    background-color: #dc26261a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-600\\/10 {\n      background-color: color-mix(in oklab, var(--color-red-600) 10%, transparent);\n    }\n  }\n\n  .bg-red-600\\/15 {\n    background-color: #dc262626;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-600\\/15 {\n      background-color: color-mix(in oklab, var(--color-red-600) 15%, transparent);\n    }\n  }\n\n  .bg-red-600\\/20 {\n    background-color: #dc262633;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-600\\/20 {\n      background-color: color-mix(in oklab, var(--color-red-600) 20%, transparent);\n    }\n  }\n\n  .bg-red-600\\/30 {\n    background-color: #dc26264d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-600\\/30 {\n      background-color: color-mix(in oklab, var(--color-red-600) 30%, transparent);\n    }\n  }\n\n  .bg-red-700 {\n    background-color: var(--color-red-700);\n  }\n\n  .bg-red-950 {\n    background-color: var(--color-red-950);\n  }\n\n  .bg-red-950\\/40 {\n    background-color: #450a0a66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/40 {\n      background-color: color-mix(in oklab, var(--color-red-950) 40%, transparent);\n    }\n  }\n\n  .bg-red-950\\/60 {\n    background-color: #450a0a99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/60 {\n      background-color: color-mix(in oklab, var(--color-red-950) 60%, transparent);\n    }\n  }\n\n  .bg-red-950\\/70 {\n    background-color: #450a0ab3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/70 {\n      background-color: color-mix(in oklab, var(--color-red-950) 70%, transparent);\n    }\n  }\n\n  .bg-red-950\\/80 {\n    background-color: #450a0acc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/80 {\n      background-color: color-mix(in oklab, var(--color-red-950) 80%, transparent);\n    }\n  }\n\n  .bg-red-950\\/90 {\n    background-color: #450a0ae6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/90 {\n      background-color: color-mix(in oklab, var(--color-red-950) 90%, transparent);\n    }\n  }\n\n  .bg-red-950\\/95 {\n    background-color: #450a0af2;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-950\\/95 {\n      background-color: color-mix(in oklab, var(--color-red-950) 95%, transparent);\n    }\n  }\n\n  .bg-transparent {\n    background-color: #0000;\n  }\n\n  .bg-white {\n    background-color: var(--color-white);\n  }\n\n  .bg-gradient-to-b {\n    --tw-gradient-position: to bottom in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-gradient-to-br {\n    --tw-gradient-position: to bottom right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-gradient-to-r {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-gradient-to-t {\n    --tw-gradient-position: to top in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-gradient-to-tr {\n    --tw-gradient-position: to top right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-\\[radial-gradient\\(\\#ffffff_1px\\,transparent_1px\\)\\] {\n    background-image: radial-gradient(#fff 1px, #0000 1px);\n  }\n\n  .from-blue-600 {\n    --tw-gradient-from: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-emerald-600 {\n    --tw-gradient-from: var(--color-emerald-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-emerald-950 {\n    --tw-gradient-from: var(--color-emerald-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-emerald-950\\/70 {\n    --tw-gradient-from: #022c22b3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-emerald-950\\/70 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-emerald-950) 70%, transparent);\n    }\n  }\n\n  .from-emerald-950\\/70 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-neutral-900 {\n    --tw-gradient-from: var(--color-neutral-900);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-neutral-900\\/90 {\n    --tw-gradient-from: #171717e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-neutral-900\\/90 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-neutral-900) 90%, transparent);\n    }\n  }\n\n  .from-neutral-900\\/90 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-neutral-950 {\n    --tw-gradient-from: var(--color-neutral-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-neutral-950\\/80 {\n    --tw-gradient-from: #0a0a0acc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-neutral-950\\/80 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-neutral-950) 80%, transparent);\n    }\n  }\n\n  .from-neutral-950\\/80 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-500 {\n    --tw-gradient-from: var(--color-red-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-600 {\n    --tw-gradient-from: var(--color-red-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-600\\/20 {\n    --tw-gradient-from: #dc262633;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-red-600\\/20 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-red-600) 20%, transparent);\n    }\n  }\n\n  .from-red-600\\/20 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-950 {\n    --tw-gradient-from: var(--color-red-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-950\\/40 {\n    --tw-gradient-from: #450a0a66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-red-950\\/40 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-red-950) 40%, transparent);\n    }\n  }\n\n  .from-red-950\\/40 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-red-950\\/80 {\n    --tw-gradient-from: #450a0acc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-red-950\\/80 {\n      --tw-gradient-from: color-mix(in oklab, var(--color-red-950) 80%, transparent);\n    }\n  }\n\n  .from-red-950\\/80 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .via-\\[\\#071322\\]\\/80 {\n    --tw-gradient-via: oklab(18.4378% -.0096317 -.0343279 / .8);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-amber-400 {\n    --tw-gradient-via: var(--color-amber-400);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-amber-500 {\n    --tw-gradient-via: var(--color-amber-500);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-amber-500\\/20 {\n    --tw-gradient-via: #f59e0b33;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .via-amber-500\\/20 {\n      --tw-gradient-via: color-mix(in oklab, var(--color-amber-500) 20%, transparent);\n    }\n  }\n\n  .via-amber-500\\/20 {\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-emerald-600 {\n    --tw-gradient-via: var(--color-emerald-600);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-neutral-900 {\n    --tw-gradient-via: var(--color-neutral-900);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-neutral-900\\/95 {\n    --tw-gradient-via: #171717f2;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .via-neutral-900\\/95 {\n      --tw-gradient-via: color-mix(in oklab, var(--color-neutral-900) 95%, transparent);\n    }\n  }\n\n  .via-neutral-900\\/95 {\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-neutral-950 {\n    --tw-gradient-via: var(--color-neutral-950);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .via-transparent {\n    --tw-gradient-via: transparent;\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n\n  .to-amber-600 {\n    --tw-gradient-to: var(--color-amber-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-400 {\n    --tw-gradient-to: var(--color-emerald-400);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-500 {\n    --tw-gradient-to: var(--color-emerald-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-600 {\n    --tw-gradient-to: var(--color-emerald-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-600\\/20 {\n    --tw-gradient-to: #05966933;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .to-emerald-600\\/20 {\n      --tw-gradient-to: color-mix(in oklab, var(--color-emerald-600) 20%, transparent);\n    }\n  }\n\n  .to-emerald-600\\/20 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-950 {\n    --tw-gradient-to: var(--color-emerald-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-emerald-950\\/60 {\n    --tw-gradient-to: #022c2299;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .to-emerald-950\\/60 {\n      --tw-gradient-to: color-mix(in oklab, var(--color-emerald-950) 60%, transparent);\n    }\n  }\n\n  .to-emerald-950\\/60 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-green-700 {\n    --tw-gradient-to: var(--color-green-700);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-green-950 {\n    --tw-gradient-to: var(--color-green-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-green-950\\/40 {\n    --tw-gradient-to: #052e1666;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .to-green-950\\/40 {\n      --tw-gradient-to: color-mix(in oklab, var(--color-green-950) 40%, transparent);\n    }\n  }\n\n  .to-green-950\\/40 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-neutral-900 {\n    --tw-gradient-to: var(--color-neutral-900);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-neutral-900\\/90 {\n    --tw-gradient-to: #171717e6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .to-neutral-900\\/90 {\n      --tw-gradient-to: color-mix(in oklab, var(--color-neutral-900) 90%, transparent);\n    }\n  }\n\n  .to-neutral-900\\/90 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-neutral-950 {\n    --tw-gradient-to: var(--color-neutral-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-red-500 {\n    --tw-gradient-to: var(--color-red-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-red-950 {\n    --tw-gradient-to: var(--color-red-950);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-sky-600 {\n    --tw-gradient-to: var(--color-sky-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-teal-600 {\n    --tw-gradient-to: var(--color-teal-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-transparent {\n    --tw-gradient-to: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .\\[background-size\\:16px_16px\\] {\n    background-size: 16px 16px;\n  }\n\n  .fill-current {\n    fill: currentColor;\n  }\n\n  .fill-emerald-400 {\n    fill: var(--color-emerald-400);\n  }\n\n  .fill-emerald-400\\/30 {\n    fill: #34d3994d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .fill-emerald-400\\/30 {\n      fill: color-mix(in oklab, var(--color-emerald-400) 30%, transparent);\n    }\n  }\n\n  .fill-neutral-800 {\n    fill: var(--color-neutral-800);\n  }\n\n  .fill-white {\n    fill: var(--color-white);\n  }\n\n  .object-contain {\n    object-fit: contain;\n  }\n\n  .object-cover {\n    object-fit: cover;\n  }\n\n  .object-center {\n    object-position: center;\n  }\n\n  .p-0 {\n    padding: 0;\n  }\n\n  .p-0\\.5 {\n    padding: calc(var(--spacing) * .5);\n  }\n\n  .p-1 {\n    padding: var(--spacing);\n  }\n\n  .p-1\\.5 {\n    padding: calc(var(--spacing) * 1.5);\n  }\n\n  .p-2 {\n    padding: calc(var(--spacing) * 2);\n  }\n\n  .p-2\\.5 {\n    padding: calc(var(--spacing) * 2.5);\n  }\n\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n\n  .p-3\\.5 {\n    padding: calc(var(--spacing) * 3.5);\n  }\n\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n\n  .p-4\\.5 {\n    padding: calc(var(--spacing) * 4.5);\n  }\n\n  .p-5 {\n    padding: calc(var(--spacing) * 5);\n  }\n\n  .p-6 {\n    padding: calc(var(--spacing) * 6);\n  }\n\n  .p-7 {\n    padding: calc(var(--spacing) * 7);\n  }\n\n  .p-8 {\n    padding: calc(var(--spacing) * 8);\n  }\n\n  .px-0\\.5 {\n    padding-inline: calc(var(--spacing) * .5);\n  }\n\n  .px-1\\.5 {\n    padding-inline: calc(var(--spacing) * 1.5);\n  }\n\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n\n  .px-2\\.5 {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n\n  .px-3 {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n\n  .px-3\\.5 {\n    padding-inline: calc(var(--spacing) * 3.5);\n  }\n\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n\n  .px-5 {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n\n  .px-8 {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n\n  .py-0\\.5 {\n    padding-block: calc(var(--spacing) * .5);\n  }\n\n  .py-1 {\n    padding-block: var(--spacing);\n  }\n\n  .py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n\n  .py-2\\.5 {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n\n  .py-3\\.5 {\n    padding-block: calc(var(--spacing) * 3.5);\n  }\n\n  .py-4 {\n    padding-block: calc(var(--spacing) * 4);\n  }\n\n  .py-5 {\n    padding-block: calc(var(--spacing) * 5);\n  }\n\n  .py-6 {\n    padding-block: calc(var(--spacing) * 6);\n  }\n\n  .py-10 {\n    padding-block: calc(var(--spacing) * 10);\n  }\n\n  .py-12 {\n    padding-block: calc(var(--spacing) * 12);\n  }\n\n  .py-16 {\n    padding-block: calc(var(--spacing) * 16);\n  }\n\n  .pt-0 {\n    padding-top: 0;\n  }\n\n  .pt-1 {\n    padding-top: var(--spacing);\n  }\n\n  .pt-2 {\n    padding-top: calc(var(--spacing) * 2);\n  }\n\n  .pt-3 {\n    padding-top: calc(var(--spacing) * 3);\n  }\n\n  .pt-3\\.5 {\n    padding-top: calc(var(--spacing) * 3.5);\n  }\n\n  .pt-4 {\n    padding-top: calc(var(--spacing) * 4);\n  }\n\n  .pt-6 {\n    padding-top: calc(var(--spacing) * 6);\n  }\n\n  .pt-10 {\n    padding-top: calc(var(--spacing) * 10);\n  }\n\n  .pt-12 {\n    padding-top: calc(var(--spacing) * 12);\n  }\n\n  .pr-3 {\n    padding-right: calc(var(--spacing) * 3);\n  }\n\n  .pr-3\\.5 {\n    padding-right: calc(var(--spacing) * 3.5);\n  }\n\n  .pr-4 {\n    padding-right: calc(var(--spacing) * 4);\n  }\n\n  .pr-14 {\n    padding-right: calc(var(--spacing) * 14);\n  }\n\n  .pb-1 {\n    padding-bottom: var(--spacing);\n  }\n\n  .pb-2 {\n    padding-bottom: calc(var(--spacing) * 2);\n  }\n\n  .pb-3 {\n    padding-bottom: calc(var(--spacing) * 3);\n  }\n\n  .pb-4 {\n    padding-bottom: calc(var(--spacing) * 4);\n  }\n\n  .pb-6 {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n\n  .pb-8 {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n\n  .pb-10 {\n    padding-bottom: calc(var(--spacing) * 10);\n  }\n\n  .pb-16 {\n    padding-bottom: calc(var(--spacing) * 16);\n  }\n\n  .pb-20 {\n    padding-bottom: calc(var(--spacing) * 20);\n  }\n\n  .pb-28 {\n    padding-bottom: calc(var(--spacing) * 28);\n  }\n\n  .pl-3\\.5 {\n    padding-left: calc(var(--spacing) * 3.5);\n  }\n\n  .pl-6 {\n    padding-left: calc(var(--spacing) * 6);\n  }\n\n  .pl-8 {\n    padding-left: calc(var(--spacing) * 8);\n  }\n\n  .pl-9 {\n    padding-left: calc(var(--spacing) * 9);\n  }\n\n  .pl-10 {\n    padding-left: calc(var(--spacing) * 10);\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .text-right {\n    text-align: right;\n  }\n\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n\n  .font-sans {\n    font-family: var(--font-sans);\n  }\n\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n\n  .text-3xl {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n\n  .text-4xl {\n    font-size: var(--text-4xl);\n    line-height: var(--tw-leading, var(--text-4xl--line-height));\n  }\n\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n\n  .text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .text-\\[9px\\] {\n    font-size: 9px;\n  }\n\n  .text-\\[10px\\] {\n    font-size: 10px;\n  }\n\n  .text-\\[11px\\] {\n    font-size: 11px;\n  }\n\n  .leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n\n  .leading-normal {\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n  }\n\n  .leading-relaxed {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n\n  .leading-snug {\n    --tw-leading: var(--leading-snug);\n    line-height: var(--leading-snug);\n  }\n\n  .leading-tight {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n\n  .font-black {\n    --tw-font-weight: var(--font-weight-black);\n    font-weight: var(--font-weight-black);\n  }\n\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n\n  .font-extrabold {\n    --tw-font-weight: var(--font-weight-extrabold);\n    font-weight: var(--font-weight-extrabold);\n  }\n\n  .font-medium {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .font-normal {\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n  }\n\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n\n  .tracking-tight {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n\n  .tracking-wide {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n\n  .tracking-wider {\n    --tw-tracking: var(--tracking-wider);\n    letter-spacing: var(--tracking-wider);\n  }\n\n  .tracking-widest {\n    --tw-tracking: var(--tracking-widest);\n    letter-spacing: var(--tracking-widest);\n  }\n\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .whitespace-pre-line {\n    white-space: pre-line;\n  }\n\n  .text-\\[\\#fbc45f\\] {\n    color: #fbc45f;\n  }\n\n  .text-amber-200 {\n    color: var(--color-amber-200);\n  }\n\n  .text-amber-300 {\n    color: var(--color-amber-300);\n  }\n\n  .text-amber-400 {\n    color: var(--color-amber-400);\n  }\n\n  .text-black {\n    color: var(--color-black);\n  }\n\n  .text-blue-200 {\n    color: var(--color-blue-200);\n  }\n\n  .text-blue-300 {\n    color: var(--color-blue-300);\n  }\n\n  .text-blue-400 {\n    color: var(--color-blue-400);\n  }\n\n  .text-blue-500 {\n    color: var(--color-blue-500);\n  }\n\n  .text-cyan-300 {\n    color: var(--color-cyan-300);\n  }\n\n  .text-cyan-400 {\n    color: var(--color-cyan-400);\n  }\n\n  .text-cyan-400\\/90 {\n    color: #22d3eee6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .text-cyan-400\\/90 {\n      color: color-mix(in oklab, var(--color-cyan-400) 90%, transparent);\n    }\n  }\n\n  .text-emerald-200 {\n    color: var(--color-emerald-200);\n  }\n\n  .text-emerald-300 {\n    color: var(--color-emerald-300);\n  }\n\n  .text-emerald-400 {\n    color: var(--color-emerald-400);\n  }\n\n  .text-emerald-600 {\n    color: var(--color-emerald-600);\n  }\n\n  .text-neutral-100 {\n    color: var(--color-neutral-100);\n  }\n\n  .text-neutral-200 {\n    color: var(--color-neutral-200);\n  }\n\n  .text-neutral-300 {\n    color: var(--color-neutral-300);\n  }\n\n  .text-neutral-400 {\n    color: var(--color-neutral-400);\n  }\n\n  .text-neutral-500 {\n    color: var(--color-neutral-500);\n  }\n\n  .text-neutral-600 {\n    color: var(--color-neutral-600);\n  }\n\n  .text-purple-400 {\n    color: var(--color-purple-400);\n  }\n\n  .text-red-200 {\n    color: var(--color-red-200);\n  }\n\n  .text-red-300 {\n    color: var(--color-red-300);\n  }\n\n  .text-red-400 {\n    color: var(--color-red-400);\n  }\n\n  .text-red-500 {\n    color: var(--color-red-500);\n  }\n\n  .text-red-600 {\n    color: var(--color-red-600);\n  }\n\n  .text-sky-400 {\n    color: var(--color-sky-400);\n  }\n\n  .text-white {\n    color: var(--color-white);\n  }\n\n  .uppercase {\n    text-transform: uppercase;\n  }\n\n  .italic {\n    font-style: italic;\n  }\n\n  .underline {\n    text-decoration-line: underline;\n  }\n\n  .underline-offset-4 {\n    text-underline-offset: 4px;\n  }\n\n  .antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .placeholder-neutral-500::placeholder {\n    color: var(--color-neutral-500);\n  }\n\n  .placeholder-neutral-600::placeholder {\n    color: var(--color-neutral-600);\n  }\n\n  .opacity-0 {\n    opacity: 0;\n  }\n\n  .opacity-10 {\n    opacity: .1;\n  }\n\n  .opacity-15 {\n    opacity: .15;\n  }\n\n  .opacity-20 {\n    opacity: .2;\n  }\n\n  .opacity-25 {\n    opacity: .25;\n  }\n\n  .opacity-60 {\n    opacity: .6;\n  }\n\n  .opacity-75 {\n    opacity: .75;\n  }\n\n  .opacity-80 {\n    opacity: .8;\n  }\n\n  .opacity-100 {\n    opacity: 1;\n  }\n\n  .shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, #00000040);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-inner {\n    --tw-shadow: inset 0 2px 4px 0 var(--tw-shadow-color, #0000000d);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-xl {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring, .ring-1 {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring-2 {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-amber-500\\/50 {\n    --tw-shadow-color: #f59e0b80;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-amber-500\\/50 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-amber-500) 50%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-amber-950 {\n    --tw-shadow-color: #451a03;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-amber-950 {\n      --tw-shadow-color: color-mix(in oklab, var(--color-amber-950) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-amber-950\\/40 {\n    --tw-shadow-color: #451a0366;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-amber-950\\/40 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-amber-950) 40%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-amber-950\\/60 {\n    --tw-shadow-color: #451a0399;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-amber-950\\/60 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-amber-950) 60%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-black\\/80 {\n    --tw-shadow-color: #000c;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-black\\/80 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 80%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-blue-950\\/60 {\n    --tw-shadow-color: #17255499;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-blue-950\\/60 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-blue-950) 60%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-cyan-950\\/50 {\n    --tw-shadow-color: #08334480;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-cyan-950\\/50 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-cyan-950) 50%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-cyan-950\\/60 {\n    --tw-shadow-color: #08334499;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-cyan-950\\/60 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-cyan-950) 60%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-emerald-950 {\n    --tw-shadow-color: #022c22;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-emerald-950 {\n      --tw-shadow-color: color-mix(in oklab, var(--color-emerald-950) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-emerald-950\\/40 {\n    --tw-shadow-color: #022c2266;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-emerald-950\\/40 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-emerald-950) 40%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-emerald-950\\/50 {\n    --tw-shadow-color: #022c2280;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-emerald-950\\/50 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-emerald-950) 50%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-emerald-950\\/60 {\n    --tw-shadow-color: #022c2299;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-emerald-950\\/60 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-emerald-950) 60%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-emerald-950\\/80 {\n    --tw-shadow-color: #022c22cc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-emerald-950\\/80 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-emerald-950) 80%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-900\\/30 {\n    --tw-shadow-color: #7f1d1d4d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-900\\/30 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-900) 30%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-900\\/40 {\n    --tw-shadow-color: #7f1d1d66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-900\\/40 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-900) 40%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-950 {\n    --tw-shadow-color: #450a0a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-950 {\n      --tw-shadow-color: color-mix(in oklab, var(--color-red-950) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-950\\/40 {\n    --tw-shadow-color: #450a0a66;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-950\\/40 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-950) 40%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-950\\/50 {\n    --tw-shadow-color: #450a0a80;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-950\\/50 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-950) 50%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-950\\/60 {\n    --tw-shadow-color: #450a0a99;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-950\\/60 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-950) 60%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .shadow-red-950\\/80 {\n    --tw-shadow-color: #450a0acc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .shadow-red-950\\/80 {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-950) 80%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n\n  .ring-amber-500 {\n    --tw-ring-color: var(--color-amber-500);\n  }\n\n  .ring-emerald-500 {\n    --tw-ring-color: var(--color-emerald-500);\n  }\n\n  .ring-emerald-500\\/40 {\n    --tw-ring-color: #10b98166;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .ring-emerald-500\\/40 {\n      --tw-ring-color: color-mix(in oklab, var(--color-emerald-500) 40%, transparent);\n    }\n  }\n\n  .ring-red-400 {\n    --tw-ring-color: var(--color-red-400);\n  }\n\n  .ring-red-500 {\n    --tw-ring-color: var(--color-red-500);\n  }\n\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .blur-3xl {\n    --tw-blur: blur(var(--blur-3xl));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .blur-xl {\n    --tw-blur: blur(var(--blur-xl));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .brightness-95 {\n    --tw-brightness: brightness(95%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .contrast-105 {\n    --tw-contrast: contrast(105%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow-\\[0_0_15px_rgba\\(239\\,68\\,68\\,0\\.4\\)\\] {\n    --tw-drop-shadow-size: drop-shadow(0 0 15px var(--tw-drop-shadow-color, #ef444466));\n    --tw-drop-shadow: var(--tw-drop-shadow-size);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow-lg {\n    --tw-drop-shadow-size: drop-shadow(0 4px 4px var(--tw-drop-shadow-color, #00000026));\n    --tw-drop-shadow: drop-shadow(var(--drop-shadow-lg));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow-md {\n    --tw-drop-shadow-size: drop-shadow(0 3px 3px var(--tw-drop-shadow-color, #0000001f));\n    --tw-drop-shadow: drop-shadow(var(--drop-shadow-md));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow-sm {\n    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, #00000026));\n    --tw-drop-shadow: drop-shadow(var(--drop-shadow-sm));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .filter {\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .backdrop-blur-\\[3px\\] {\n    --tw-backdrop-blur: blur(3px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-blur-md {\n    --tw-backdrop-blur: blur(var(--blur-md));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .duration-150 {\n    --tw-duration: .15s;\n    transition-duration: .15s;\n  }\n\n  .duration-200 {\n    --tw-duration: .2s;\n    transition-duration: .2s;\n  }\n\n  .duration-300 {\n    --tw-duration: .3s;\n    transition-duration: .3s;\n  }\n\n  .duration-500 {\n    --tw-duration: .5s;\n    transition-duration: .5s;\n  }\n\n  .duration-700 {\n    --tw-duration: .7s;\n    transition-duration: .7s;\n  }\n\n  .select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  @media (hover: hover) {\n    .group-hover\\:translate-x-0\\.5:is(:where(.group):hover *) {\n      --tw-translate-x: calc(var(--spacing) * .5);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n\n    .group-hover\\:translate-x-1:is(:where(.group):hover *) {\n      --tw-translate-x: var(--spacing);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n\n    .group-hover\\:scale-105:is(:where(.group):hover *) {\n      --tw-scale-x: 105%;\n      --tw-scale-y: 105%;\n      --tw-scale-z: 105%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n\n    .group-hover\\:bg-red-600:is(:where(.group):hover *) {\n      background-color: var(--color-red-600);\n    }\n\n    .group-hover\\:text-red-300:is(:where(.group):hover *) {\n      color: var(--color-red-300);\n    }\n\n    .group-hover\\:text-red-400:is(:where(.group):hover *) {\n      color: var(--color-red-400);\n    }\n\n    .group-hover\\:text-red-500:is(:where(.group):hover *) {\n      color: var(--color-red-500);\n    }\n\n    .group-hover\\:text-white:is(:where(.group):hover *) {\n      color: var(--color-white);\n    }\n  }\n\n  .selection\\:bg-red-600 ::selection {\n    background-color: var(--color-red-600);\n  }\n\n  .selection\\:bg-red-600::selection {\n    background-color: var(--color-red-600);\n  }\n\n  .selection\\:text-white ::selection {\n    color: var(--color-white);\n  }\n\n  .selection\\:text-white::selection {\n    color: var(--color-white);\n  }\n\n  @media (hover: hover) {\n    .hover\\:-translate-y-1:hover {\n      --tw-translate-y: calc(var(--spacing) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n\n    .hover\\:scale-102:hover {\n      --tw-scale-x: 102%;\n      --tw-scale-y: 102%;\n      --tw-scale-z: 102%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n\n    .hover\\:scale-105:hover {\n      --tw-scale-x: 105%;\n      --tw-scale-y: 105%;\n      --tw-scale-z: 105%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n\n    .hover\\:scale-\\[1\\.01\\]:hover {\n      scale: 1.01;\n    }\n\n    .hover\\:scale-\\[1\\.02\\]:hover {\n      scale: 1.02;\n    }\n\n    .hover\\:border-blue-500\\/50:hover {\n      border-color: #3b82f680;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-blue-500\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);\n      }\n    }\n\n    .hover\\:border-neutral-500\\/50:hover {\n      border-color: #73737380;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-neutral-500\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-neutral-500) 50%, transparent);\n      }\n    }\n\n    .hover\\:border-neutral-700:hover {\n      border-color: var(--color-neutral-700);\n    }\n\n    .hover\\:border-red-500\\/40:hover {\n      border-color: #ef444466;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-red-500\\/40:hover {\n        border-color: color-mix(in oklab, var(--color-red-500) 40%, transparent);\n      }\n    }\n\n    .hover\\:border-red-500\\/50:hover {\n      border-color: #ef444480;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-red-500\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);\n      }\n    }\n\n    .hover\\:border-red-600:hover {\n      border-color: var(--color-red-600);\n    }\n\n    .hover\\:border-red-600\\/50:hover {\n      border-color: #dc262680;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-red-600\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-red-600) 50%, transparent);\n      }\n    }\n\n    .hover\\:border-red-600\\/60:hover {\n      border-color: #dc262699;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-red-600\\/60:hover {\n        border-color: color-mix(in oklab, var(--color-red-600) 60%, transparent);\n      }\n    }\n\n    .hover\\:border-red-900\\/50:hover {\n      border-color: #7f1d1d80;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-red-900\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-red-900) 50%, transparent);\n      }\n    }\n\n    .hover\\:border-sky-500\\/50:hover {\n      border-color: #00a5ef80;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:border-sky-500\\/50:hover {\n        border-color: color-mix(in oklab, var(--color-sky-500) 50%, transparent);\n      }\n    }\n\n    .hover\\:bg-amber-400:hover {\n      background-color: var(--color-amber-400);\n    }\n\n    .hover\\:bg-blue-800:hover {\n      background-color: var(--color-blue-800);\n    }\n\n    .hover\\:bg-emerald-500:hover {\n      background-color: var(--color-emerald-500);\n    }\n\n    .hover\\:bg-emerald-600:hover {\n      background-color: var(--color-emerald-600);\n    }\n\n    .hover\\:bg-emerald-900:hover {\n      background-color: var(--color-emerald-900);\n    }\n\n    .hover\\:bg-neutral-500:hover {\n      background-color: var(--color-neutral-500);\n    }\n\n    .hover\\:bg-neutral-700:hover {\n      background-color: var(--color-neutral-700);\n    }\n\n    .hover\\:bg-neutral-800:hover {\n      background-color: var(--color-neutral-800);\n    }\n\n    .hover\\:bg-neutral-800\\/30:hover {\n      background-color: #2626264d;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-neutral-800\\/30:hover {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 30%, transparent);\n      }\n    }\n\n    .hover\\:bg-neutral-800\\/40:hover {\n      background-color: #26262666;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-neutral-800\\/40:hover {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 40%, transparent);\n      }\n    }\n\n    .hover\\:bg-neutral-800\\/60:hover {\n      background-color: #26262699;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-neutral-800\\/60:hover {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);\n      }\n    }\n\n    .hover\\:bg-neutral-800\\/80:hover {\n      background-color: #262626cc;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-neutral-800\\/80:hover {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n      }\n    }\n\n    .hover\\:bg-neutral-900:hover {\n      background-color: var(--color-neutral-900);\n    }\n\n    .hover\\:bg-neutral-950:hover {\n      background-color: var(--color-neutral-950);\n    }\n\n    .hover\\:bg-red-500:hover {\n      background-color: var(--color-red-500);\n    }\n\n    .hover\\:bg-red-600\\/50:hover {\n      background-color: #dc262680;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-red-600\\/50:hover {\n        background-color: color-mix(in oklab, var(--color-red-600) 50%, transparent);\n      }\n    }\n\n    .hover\\:bg-red-900:hover {\n      background-color: var(--color-red-900);\n    }\n\n    .hover\\:bg-red-900\\/80:hover {\n      background-color: #7f1d1dcc;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-red-900\\/80:hover {\n        background-color: color-mix(in oklab, var(--color-red-900) 80%, transparent);\n      }\n    }\n\n    .hover\\:bg-red-900\\/90:hover {\n      background-color: #7f1d1de6;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-red-900\\/90:hover {\n        background-color: color-mix(in oklab, var(--color-red-900) 90%, transparent);\n      }\n    }\n\n    .hover\\:bg-red-950:hover {\n      background-color: var(--color-red-950);\n    }\n\n    .hover\\:from-emerald-500:hover {\n      --tw-gradient-from: var(--color-emerald-500);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:from-red-500:hover {\n      --tw-gradient-from: var(--color-red-500);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-amber-500:hover {\n      --tw-gradient-to: var(--color-amber-500);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-emerald-500:hover {\n      --tw-gradient-to: var(--color-emerald-500);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-emerald-600:hover {\n      --tw-gradient-to: var(--color-emerald-600);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-green-600:hover {\n      --tw-gradient-to: var(--color-green-600);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-red-600:hover {\n      --tw-gradient-to: var(--color-red-600);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:to-teal-500:hover {\n      --tw-gradient-to: var(--color-teal-500);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n\n    .hover\\:text-amber-300:hover {\n      color: var(--color-amber-300);\n    }\n\n    .hover\\:text-amber-400:hover {\n      color: var(--color-amber-400);\n    }\n\n    .hover\\:text-emerald-300:hover {\n      color: var(--color-emerald-300);\n    }\n\n    .hover\\:text-neutral-300:hover {\n      color: var(--color-neutral-300);\n    }\n\n    .hover\\:text-red-100:hover {\n      color: var(--color-red-100);\n    }\n\n    .hover\\:text-red-300:hover {\n      color: var(--color-red-300);\n    }\n\n    .hover\\:text-red-400:hover {\n      color: var(--color-red-400);\n    }\n\n    .hover\\:text-white:hover {\n      color: var(--color-white);\n    }\n\n    .hover\\:opacity-40:hover {\n      opacity: .4;\n    }\n\n    .hover\\:shadow-xl:hover {\n      --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-black\\/60:hover {\n      --tw-shadow-color: #0009;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:shadow-black\\/60:hover {\n        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 60%, transparent) var(--tw-shadow-alpha), transparent);\n      }\n    }\n\n    .hover\\:shadow-red-800\\/40:hover {\n      --tw-shadow-color: #991b1b66;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:shadow-red-800\\/40:hover {\n        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-800) 40%, transparent) var(--tw-shadow-alpha), transparent);\n      }\n    }\n  }\n\n  .focus\\:border-amber-400:focus {\n    border-color: var(--color-amber-400);\n  }\n\n  .focus\\:border-emerald-500:focus {\n    border-color: var(--color-emerald-500);\n  }\n\n  .focus\\:border-red-500:focus {\n    border-color: var(--color-red-500);\n  }\n\n  .focus\\:bg-neutral-900:focus {\n    background-color: var(--color-neutral-900);\n  }\n\n  .focus\\:ring-emerald-500:focus {\n    --tw-ring-color: var(--color-emerald-500);\n  }\n\n  .focus\\:ring-red-500:focus {\n    --tw-ring-color: var(--color-red-500);\n  }\n\n  .focus\\:outline-none:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .active\\:scale-95:active {\n    --tw-scale-x: 95%;\n    --tw-scale-y: 95%;\n    --tw-scale-z: 95%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .disabled\\:pointer-events-none:disabled {\n    pointer-events: none;\n  }\n\n  .disabled\\:opacity-30:disabled {\n    opacity: .3;\n  }\n\n  .disabled\\:opacity-50:disabled {\n    opacity: .5;\n  }\n\n  .disabled\\:opacity-60:disabled {\n    opacity: .6;\n  }\n\n  .disabled\\:opacity-75:disabled {\n    opacity: .75;\n  }\n\n  @media (min-width: 40rem) {\n    .sm\\:right-6 {\n      right: calc(var(--spacing) * 6);\n    }\n\n    .sm\\:left-auto {\n      left: auto;\n    }\n\n    .sm\\:flex {\n      display: flex;\n    }\n\n    .sm\\:hidden {\n      display: none;\n    }\n\n    .sm\\:inline {\n      display: inline;\n    }\n\n    .sm\\:table-cell {\n      display: table-cell;\n    }\n\n    .sm\\:h-10 {\n      height: calc(var(--spacing) * 10);\n    }\n\n    .sm\\:h-48 {\n      height: calc(var(--spacing) * 48);\n    }\n\n    .sm\\:min-h-\\[230px\\] {\n      min-height: 230px;\n    }\n\n    .sm\\:min-h-\\[380px\\] {\n      min-height: 380px;\n    }\n\n    .sm\\:min-h-\\[660px\\] {\n      min-height: 660px;\n    }\n\n    .sm\\:w-10 {\n      width: calc(var(--spacing) * 10);\n    }\n\n    .sm\\:w-12 {\n      width: calc(var(--spacing) * 12);\n    }\n\n    .sm\\:w-48 {\n      width: calc(var(--spacing) * 48);\n    }\n\n    .sm\\:w-72 {\n      width: calc(var(--spacing) * 72);\n    }\n\n    .sm\\:w-auto {\n      width: auto;\n    }\n\n    .sm\\:max-w-md {\n      max-width: var(--container-md);\n    }\n\n    .sm\\:max-w-none {\n      max-width: none;\n    }\n\n    .sm\\:max-w-sm {\n      max-width: var(--container-sm);\n    }\n\n    .sm\\:grid-cols-2 {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .sm\\:grid-cols-3 {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .sm\\:grid-cols-4 {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .sm\\:flex-row {\n      flex-direction: row;\n    }\n\n    .sm\\:items-center {\n      align-items: center;\n    }\n\n    .sm\\:items-end {\n      align-items: flex-end;\n    }\n\n    .sm\\:gap-3 {\n      gap: calc(var(--spacing) * 3);\n    }\n\n    .sm\\:gap-4 {\n      gap: calc(var(--spacing) * 4);\n    }\n\n    .sm\\:gap-6 {\n      gap: calc(var(--spacing) * 6);\n    }\n\n    .sm\\:self-auto {\n      align-self: auto;\n    }\n\n    .sm\\:self-center {\n      align-self: center;\n    }\n\n    .sm\\:rounded-3xl {\n      border-radius: var(--radius-3xl);\n    }\n\n    .sm\\:p-6 {\n      padding: calc(var(--spacing) * 6);\n    }\n\n    .sm\\:p-7 {\n      padding: calc(var(--spacing) * 7);\n    }\n\n    .sm\\:p-8 {\n      padding: calc(var(--spacing) * 8);\n    }\n\n    .sm\\:p-10 {\n      padding: calc(var(--spacing) * 10);\n    }\n\n    .sm\\:p-12 {\n      padding: calc(var(--spacing) * 12);\n    }\n\n    .sm\\:px-3 {\n      padding-inline: calc(var(--spacing) * 3);\n    }\n\n    .sm\\:px-3\\.5 {\n      padding-inline: calc(var(--spacing) * 3.5);\n    }\n\n    .sm\\:px-4 {\n      padding-inline: calc(var(--spacing) * 4);\n    }\n\n    .sm\\:px-5 {\n      padding-inline: calc(var(--spacing) * 5);\n    }\n\n    .sm\\:px-6 {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n\n    .sm\\:py-1\\.5 {\n      padding-block: calc(var(--spacing) * 1.5);\n    }\n\n    .sm\\:py-6 {\n      padding-block: calc(var(--spacing) * 6);\n    }\n\n    .sm\\:pb-0 {\n      padding-bottom: 0;\n    }\n\n    .sm\\:pb-4 {\n      padding-bottom: calc(var(--spacing) * 4);\n    }\n\n    .sm\\:text-2xl {\n      font-size: var(--text-2xl);\n      line-height: var(--tw-leading, var(--text-2xl--line-height));\n    }\n\n    .sm\\:text-3xl {\n      font-size: var(--text-3xl);\n      line-height: var(--tw-leading, var(--text-3xl--line-height));\n    }\n\n    .sm\\:text-4xl {\n      font-size: var(--text-4xl);\n      line-height: var(--tw-leading, var(--text-4xl--line-height));\n    }\n\n    .sm\\:text-5xl {\n      font-size: var(--text-5xl);\n      line-height: var(--tw-leading, var(--text-5xl--line-height));\n    }\n\n    .sm\\:text-6xl {\n      font-size: var(--text-6xl);\n      line-height: var(--tw-leading, var(--text-6xl--line-height));\n    }\n\n    .sm\\:text-base {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n\n    .sm\\:text-lg {\n      font-size: var(--text-lg);\n      line-height: var(--tw-leading, var(--text-lg--line-height));\n    }\n\n    .sm\\:text-sm {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n\n    .sm\\:text-xl {\n      font-size: var(--text-xl);\n      line-height: var(--tw-leading, var(--text-xl--line-height));\n    }\n\n    .sm\\:text-xs {\n      font-size: var(--text-xs);\n      line-height: var(--tw-leading, var(--text-xs--line-height));\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .md\\:inline {\n      display: inline;\n    }\n\n    .md\\:table-cell {\n      display: table-cell;\n    }\n\n    .md\\:h-52 {\n      height: calc(var(--spacing) * 52);\n    }\n\n    .md\\:min-h-\\[260px\\] {\n      min-height: 260px;\n    }\n\n    .md\\:w-5\\/12 {\n      width: 41.6667%;\n    }\n\n    .md\\:w-72 {\n      width: calc(var(--spacing) * 72);\n    }\n\n    .md\\:grid-cols-2 {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .md\\:grid-cols-3 {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .md\\:grid-cols-4 {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .md\\:flex-row {\n      flex-direction: row;\n    }\n\n    .md\\:items-center {\n      align-items: center;\n    }\n\n    .md\\:self-auto {\n      align-self: auto;\n    }\n\n    .md\\:border-r {\n      border-right-style: var(--tw-border-style);\n      border-right-width: 1px;\n    }\n\n    .md\\:border-b-0 {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0;\n    }\n\n    .md\\:text-left {\n      text-align: left;\n    }\n\n    .md\\:text-3xl {\n      font-size: var(--text-3xl);\n      line-height: var(--tw-leading, var(--text-3xl--line-height));\n    }\n\n    .md\\:text-4xl {\n      font-size: var(--text-4xl);\n      line-height: var(--tw-leading, var(--text-4xl--line-height));\n    }\n\n    .md\\:text-7xl {\n      font-size: var(--text-7xl);\n      line-height: var(--tw-leading, var(--text-7xl--line-height));\n    }\n\n    .md\\:text-lg {\n      font-size: var(--text-lg);\n      line-height: var(--tw-leading, var(--text-lg--line-height));\n    }\n\n    .md\\:text-xl {\n      font-size: var(--text-xl);\n      line-height: var(--tw-leading, var(--text-xl--line-height));\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .lg\\:col-span-4 {\n      grid-column: span 4 / span 4;\n    }\n\n    .lg\\:col-span-5 {\n      grid-column: span 5 / span 5;\n    }\n\n    .lg\\:col-span-7 {\n      grid-column: span 7 / span 7;\n    }\n\n    .lg\\:col-span-8 {\n      grid-column: span 8 / span 8;\n    }\n\n    .lg\\:block {\n      display: block;\n    }\n\n    .lg\\:flex {\n      display: flex;\n    }\n\n    .lg\\:hidden {\n      display: none;\n    }\n\n    .lg\\:aspect-auto {\n      aspect-ratio: auto;\n    }\n\n    .lg\\:w-4\\/12 {\n      width: 33.3333%;\n    }\n\n    .lg\\:grid-cols-2 {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n\n    .lg\\:grid-cols-3 {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n\n    .lg\\:grid-cols-4 {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n\n    .lg\\:grid-cols-12 {\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n\n    .lg\\:flex-col {\n      flex-direction: column;\n    }\n\n    .lg\\:flex-row {\n      flex-direction: row;\n    }\n\n    .lg\\:items-center {\n      align-items: center;\n    }\n\n    .lg\\:px-8 {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n\n  .\\[\\&\\:\\:-webkit-inner-spin-button\\]\\:appearance-none::-webkit-inner-spin-button {\n    appearance: none;\n  }\n\n  .\\[\\&\\:\\:-webkit-outer-spin-button\\]\\:appearance-none::-webkit-outer-spin-button {\n    appearance: none;\n  }\n\n  .font-sports {\n    letter-spacing: .04em;\n    font-family: Barlow Condensed, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;\n  }\n\n  .font-ethiopic {\n    font-family: Noto Sans Ethiopic, Inter, -apple-system, BlinkMacSystemFont, sans-serif;\n  }\n\n  .text-xxs {\n    font-size: .68rem;\n    line-height: .9rem;\n  }\n}\n\n:root {\n  --color-neutral-50: #fafafa;\n  --color-neutral-100: #f5f5f5;\n  --color-neutral-200: #e5e5e5;\n  --color-neutral-300: #d4d4d4;\n  --color-neutral-400: #a3a3a3;\n  --color-neutral-500: #737373;\n  --color-neutral-600: #525252;\n  --color-neutral-700: #404040;\n  --color-neutral-800: #262626;\n  --color-neutral-900: #171717;\n  --color-neutral-950: #0a0a0a;\n  --color-red-100: #fee2e2;\n  --color-red-200: #fecaca;\n  --color-red-300: #fca5a5;\n  --color-red-400: #f87171;\n  --color-red-500: #ef4444;\n  --color-red-600: #dc2626;\n  --color-red-700: #b91c1c;\n  --color-red-800: #991b1b;\n  --color-red-900: #7f1d1d;\n  --color-red-950: #450a0a;\n  --color-emerald-200: #a7f3d0;\n  --color-emerald-300: #6ee7b7;\n  --color-emerald-400: #34d399;\n  --color-emerald-500: #10b981;\n  --color-emerald-600: #059669;\n  --color-emerald-700: #047857;\n  --color-emerald-800: #065f46;\n  --color-emerald-900: #064e3b;\n  --color-emerald-950: #022c22;\n  --color-green-600: #16a34a;\n  --color-green-700: #15803d;\n  --color-green-950: #052e16;\n  --color-amber-200: #fde68a;\n  --color-amber-300: #fcd34d;\n  --color-amber-400: #fbbf24;\n  --color-amber-500: #f59e0b;\n  --color-amber-600: #d97706;\n  --color-amber-700: #b45309;\n  --color-amber-800: #92400e;\n  --color-amber-950: #451a03;\n  --color-blue-200: #bfdbfe;\n  --color-blue-300: #93c5fd;\n  --color-blue-400: #60a5fa;\n  --color-blue-500: #3b82f6;\n  --color-blue-600: #2563eb;\n  --color-blue-800: #1e40af;\n  --color-blue-900: #1e3a8a;\n  --color-blue-950: #172554;\n  --color-cyan-300: #67e8f9;\n  --color-cyan-400: #22d3ee;\n  --color-cyan-500: #06b6d4;\n  --color-cyan-700: #0e7490;\n  --color-cyan-800: #155e75;\n  --color-cyan-900: #164e63;\n  --color-cyan-950: #083344;\n  --tw-gradient-position: to right;\n}\n\n.bg-gradient-to-t {\n  --tw-gradient-position: to top !important;\n}\n\n.bg-gradient-to-tr {\n  --tw-gradient-position: to top right !important;\n}\n\n.bg-gradient-to-r {\n  --tw-gradient-position: to right !important;\n}\n\n.bg-gradient-to-br {\n  --tw-gradient-position: to bottom right !important;\n}\n\n.bg-gradient-to-b {\n  --tw-gradient-position: to bottom !important;\n}\n\n.bg-gradient-to-bl {\n  --tw-gradient-position: to bottom left !important;\n}\n\n.bg-gradient-to-l {\n  --tw-gradient-position: to left !important;\n}\n\n.bg-gradient-to-tl {\n  --tw-gradient-position: to top left !important;\n}\n\nhtml {\n  -webkit-overflow-scrolling: touch;\n  scroll-behavior: smooth;\n  -webkit-tap-highlight-color: transparent;\n  color: #f5f5f5;\n  box-sizing: border-box;\n  background-color: #0a0a0a;\n  width: 100%;\n  height: 100%;\n  overflow: hidden auto;\n}\n\nbody {\n  -webkit-overflow-scrolling: touch;\n  color: #f5f5f5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #0a0a0a;\n  width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  overflow: hidden visible;\n}\n\n#root {\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  position: relative;\n}\n\n.overflow-y-auto, .overflow-x-auto {\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n}\n\ninput, textarea, select, [contenteditable=\"true\"], .selectable-text {\n  -webkit-user-select: text !important;\n  user-select: text !important;\n}\n\n@media (display-mode: standalone) {\n  body {\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n  }\n}\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n\n::-webkit-scrollbar-track {\n  background: #0a0a0a;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #262626;\n  border-radius: 9999px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #dc2626;\n}\n\n.hero-background {\n  pointer-events: none;\n  z-index: 0;\n  background-color: #0a0a0a;\n  background-image: linear-gradient(#0a0a0a94 0%, #1e0305a8 45%, #0a0a0aeb 85%, #0a0a0a 100%), url(\"" + new URL('../images/halaba_stadium_hero.jpg', module.meta.url).href + "\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  inset: 0;\n}\n\n.btn-primary-red {\n  color: #fff !important;\n  background-color: #dc2626 !important;\n  background-image: linear-gradient(to right, #dc2626, #ef4444) !important;\n}\n\n.btn-primary-red:hover {\n  background-color: #ef4444 !important;\n  background-image: linear-gradient(to right, #ef4444, #f87171) !important;\n}\n\n.btn-membership-join {\n  color: #fff !important;\n  background-color: #dc2626 !important;\n  background-image: linear-gradient(to right, #dc2626, #ea580c, #d97706) !important;\n}\n\n.btn-membership-join:hover {\n  background-color: #ef4444 !important;\n  background-image: linear-gradient(to right, #ef4444, #f97316, #f59e0b) !important;\n}\n\n.btn-donate-emerald {\n  color: #fff !important;\n  background-color: #059669 !important;\n  background-image: linear-gradient(to right, #059669, #10b981) !important;\n}\n\n.btn-donate-emerald:hover {\n  background-color: #10b981 !important;\n  background-image: linear-gradient(to right, #10b981, #059669) !important;\n}\n\n.btn-shop-neutral {\n  color: #fff !important;\n  background-color: #171717 !important;\n  border: 1px solid #404040 !important;\n}\n\n.btn-shop-neutral:hover {\n  background-color: #262626 !important;\n  border-color: #dc2626 !important;\n}\n\n.btn-secondary-amber {\n  color: #fff !important;\n  background-color: #d97706 !important;\n  background-image: linear-gradient(to right, #dc2626, #d97706) !important;\n}\n\n.btn-secondary-amber:hover {\n  background-color: #f59e0b !important;\n  background-image: linear-gradient(to right, #ef4444, #f59e0b) !important;\n}\n\n.standings-halaba-row {\n  background-color: #200a0a !important;\n  background-image: linear-gradient(to right, #450a0ad9 0%, #171717 50%, #022c2280 100%) !important;\n}\n\n.standings-pos-leader {\n  color: #0a0a0a !important;\n  background-color: #d97706 !important;\n  background-image: linear-gradient(to bottom right, #f59e0b, #b45309) !important;\n}\n\n.bg-neutral-950\\/95 {\n  background-color: #0a0a0af2 !important;\n}\n\n.bg-neutral-950\\/90 {\n  background-color: #0a0a0ae6 !important;\n}\n\n.bg-neutral-950\\/80 {\n  background-color: #0a0a0acc !important;\n}\n\n.bg-neutral-950\\/75 {\n  background-color: #0a0a0abf !important;\n}\n\n.bg-neutral-950\\/70 {\n  background-color: #0a0a0ab3 !important;\n}\n\n.bg-neutral-950\\/60 {\n  background-color: #0a0a0a99 !important;\n}\n\n.bg-neutral-950\\/50 {\n  background-color: #0a0a0a80 !important;\n}\n\n.bg-neutral-900\\/95 {\n  background-color: #171717f2 !important;\n}\n\n.bg-neutral-900\\/90 {\n  background-color: #171717e6 !important;\n}\n\n.bg-neutral-900\\/80 {\n  background-color: #171717cc !important;\n}\n\n.bg-neutral-900\\/60 {\n  background-color: #17171799 !important;\n}\n\n.bg-neutral-900\\/40 {\n  background-color: #17171766 !important;\n}\n\n.bg-neutral-800\\/90 {\n  background-color: #262626e6 !important;\n}\n\n.bg-neutral-800\\/80 {\n  background-color: #262626cc !important;\n}\n\n.bg-neutral-800\\/60 {\n  background-color: #26262699 !important;\n}\n\n.bg-neutral-800\\/40 {\n  background-color: #26262666 !important;\n}\n\n.bg-neutral-800\\/30 {\n  background-color: #2626264d !important;\n}\n\n.bg-red-950\\/95 {\n  background-color: #450a0af2 !important;\n}\n\n.bg-red-950\\/90 {\n  background-color: #450a0ae6 !important;\n}\n\n.bg-red-950\\/80 {\n  background-color: #450a0acc !important;\n}\n\n.bg-red-950\\/70 {\n  background-color: #450a0ab3 !important;\n}\n\n.bg-red-950\\/60 {\n  background-color: #450a0a99 !important;\n}\n\n.bg-red-950\\/40 {\n  background-color: #450a0a66 !important;\n}\n\n.bg-red-900\\/90 {\n  background-color: #7f1d1de6 !important;\n}\n\n.bg-red-900\\/80 {\n  background-color: #7f1d1dcc !important;\n}\n\n.bg-red-600\\/50 {\n  background-color: #dc262680 !important;\n}\n\n.bg-red-600\\/30 {\n  background-color: #dc26264d !important;\n}\n\n.bg-red-600\\/20 {\n  background-color: #dc262633 !important;\n}\n\n.bg-red-600\\/15 {\n  background-color: #dc262626 !important;\n}\n\n.bg-red-600\\/10 {\n  background-color: #dc26261a !important;\n}\n\n.bg-emerald-950\\/90 {\n  background-color: #022c22e6 !important;\n}\n\n.bg-emerald-950\\/80 {\n  background-color: #022c22cc !important;\n}\n\n.bg-emerald-950\\/70 {\n  background-color: #022c22b3 !important;\n}\n\n.bg-emerald-950\\/60 {\n  background-color: #022c2299 !important;\n}\n\n.bg-emerald-950\\/40 {\n  background-color: #022c2266 !important;\n}\n\n.bg-emerald-950\\/20 {\n  background-color: #022c2233 !important;\n}\n\n.bg-emerald-600\\/30 {\n  background-color: #0596694d !important;\n}\n\n.bg-emerald-600\\/20 {\n  background-color: #05966933 !important;\n}\n\n.bg-emerald-600\\/10 {\n  background-color: #0596691a !important;\n}\n\n.bg-amber-950\\/80 {\n  background-color: #451a03cc !important;\n}\n\n.bg-amber-950\\/60 {\n  background-color: #451a0399 !important;\n}\n\n.bg-amber-500\\/20 {\n  background-color: #f59e0b33 !important;\n}\n\n.bg-amber-500\\/10 {\n  background-color: #f59e0b1a !important;\n}\n\n.bg-blue-900\\/60 {\n  background-color: #1e3a8a99 !important;\n}\n\n.bg-blue-600\\/20 {\n  background-color: #2563eb33 !important;\n}\n\n.bg-blue-500\\/15 {\n  background-color: #3b82f626 !important;\n}\n\n.bg-cyan-950\\/90 {\n  background-color: #083344e6 !important;\n}\n\n.bg-cyan-950\\/50 {\n  background-color: #08334480 !important;\n}\n\n.bg-cyan-500\\/10 {\n  background-color: #06b6d41a !important;\n}\n\n.bg-black\\/95 {\n  background-color: #000000f2 !important;\n}\n\n.bg-black\\/90 {\n  background-color: #000000e6 !important;\n}\n\n.bg-black\\/85 {\n  background-color: #000000d9 !important;\n}\n\n.bg-black\\/80 {\n  background-color: #000c !important;\n}\n\n.bg-black\\/70 {\n  background-color: #000000b3 !important;\n}\n\n.bg-black\\/60 {\n  background-color: #0009 !important;\n}\n\n.bg-black\\/50 {\n  background-color: #00000080 !important;\n}\n\n.border-neutral-800\\/90 {\n  border-color: #262626e6 !important;\n}\n\n.border-neutral-800\\/80 {\n  border-color: #262626cc !important;\n}\n\n.border-neutral-800\\/60 {\n  border-color: #26262699 !important;\n}\n\n.border-neutral-700\\/80 {\n  border-color: #404040cc !important;\n}\n\n.border-neutral-700\\/70 {\n  border-color: #404040b3 !important;\n}\n\n.border-neutral-700\\/60 {\n  border-color: #40404099 !important;\n}\n\n.border-red-950\\/40 {\n  border-color: #450a0a66 !important;\n}\n\n.border-red-900\\/50 {\n  border-color: #7f1d1d80 !important;\n}\n\n.border-red-900\\/40 {\n  border-color: #7f1d1d66 !important;\n}\n\n.border-red-900\\/30 {\n  border-color: #7f1d1d4d !important;\n}\n\n.border-red-800\\/80 {\n  border-color: #991b1bcc !important;\n}\n\n.border-red-800\\/60 {\n  border-color: #991b1b99 !important;\n}\n\n.border-red-800\\/40 {\n  border-color: #991b1b66 !important;\n}\n\n.border-red-700\\/60 {\n  border-color: #b91c1c99 !important;\n}\n\n.border-red-600\\/60 {\n  border-color: #dc262699 !important;\n}\n\n.border-red-600\\/50 {\n  border-color: #dc262680 !important;\n}\n\n.border-red-500\\/50 {\n  border-color: #ef444480 !important;\n}\n\n.border-red-500\\/40 {\n  border-color: #ef444466 !important;\n}\n\n.border-red-500\\/30 {\n  border-color: #ef44444d !important;\n}\n\n.border-emerald-800\\/80 {\n  border-color: #065f46cc !important;\n}\n\n.border-emerald-800\\/60 {\n  border-color: #065f4699 !important;\n}\n\n.border-emerald-800\\/40 {\n  border-color: #065f4666 !important;\n}\n\n.border-emerald-500\\/50 {\n  border-color: #10b98180 !important;\n}\n\n.border-emerald-500\\/40 {\n  border-color: #10b98166 !important;\n}\n\n.border-emerald-500\\/30 {\n  border-color: #10b9814d !important;\n}\n\n.border-amber-800\\/80 {\n  border-color: #92400ecc !important;\n}\n\n.border-amber-800\\/60 {\n  border-color: #92400e99 !important;\n}\n\n.border-amber-500\\/50 {\n  border-color: #f59e0b80 !important;\n}\n\n.border-amber-500\\/40 {\n  border-color: #f59e0b66 !important;\n}\n\n.border-amber-500\\/30 {\n  border-color: #f59e0b4d !important;\n}\n\n[class*=\"backdrop-blur\"] {\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n\n@supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {\n  .backdrop-blur-md, .backdrop-blur-sm, .backdrop-blur-lg, .backdrop-blur-xl, [class*=\"backdrop-blur\"], header, nav, .bg-neutral-900\\/80, .bg-neutral-950\\/80, .bg-neutral-900\\/90, .bg-black\\/80, .bg-black\\/90 {\n    background-color: #121212 !important;\n  }\n}\n\n@media (max-width: 380px) {\n  .font-sports {\n    letter-spacing: .01em;\n  }\n\n  .container {\n    padding-left: .5rem;\n    padding-right: .5rem;\n  }\n}\n\n@property --tw-translate-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-scale-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-space-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-space-x-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-divide-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-gradient-position {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-gradient-from {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-via {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-to {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-stops {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-gradient-via-stops {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-gradient-from-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 0%;\n}\n\n@property --tw-gradient-via-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 50%;\n}\n\n@property --tw-gradient-to-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-tracking {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-blur {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-invert {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-duration {\n  syntax: \"*\";\n  inherits: false\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    animation-timing-function: cubic-bezier(.8, 0, 1, 1);\n    transform: translateY(-25%);\n  }\n\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, .2, 1);\n    transform: none;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("f", formatTeamName);
        false && function polyfill() {
          var relList = document.createElement("link").relList;
          if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(function (mutations) {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var mutation = _step2.value;
                if (mutation.type !== "childList") {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var node = _step3.value;
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            var fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";else fetchOpts.credentials = "same-origin";
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            var fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        if (typeof globalThis === "undefined") {
          window.globalThis = window;
        }
        if (typeof window !== "undefined") {
          try {
            new window.CustomEvent("test");
          } catch (_unused) {
            var CustomEventPolyfill = function CustomEventPolyfill(type, params) {
              params = params || {
                bubbles: false,
                cancelable: false,
                detail: null
              };
              var evt = document.createEvent("CustomEvent");
              evt.initCustomEvent(type, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
              return evt;
            };
            CustomEventPolyfill.prototype = window.Event.prototype;
            window.CustomEvent = CustomEventPolyfill;
          }
        }
        if (typeof window !== "undefined" && typeof window.structuredClone !== "function") {
          window.structuredClone = function (value) {
            if (value === void 0) return void 0;
            try {
              return JSON.parse(JSON.stringify(value));
            } catch (_unused2) {
              return value;
            }
          };
        }
        if (typeof window !== "undefined") {
          if (typeof window.requestIdleCallback !== "function") {
            window.requestIdleCallback = function (cb) {
              var start = Date.now();
              return window.setTimeout(function () {
                cb({
                  didTimeout: false,
                  timeRemaining: function timeRemaining() {
                    return Math.max(0, 50 - (Date.now() - start));
                  }
                });
              }, 1);
            };
          }
          if (typeof window.cancelIdleCallback !== "function") {
            window.cancelIdleCallback = function (id) {
              clearTimeout(id);
            };
          }
        }
        if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
          var nativeScrollTo = window.scrollTo;
          window.scrollTo = function (optionsOrX, y) {
            try {
              if (_typeof(optionsOrX) === "object" && optionsOrX !== null) {
                var _ref, _opts$left, _ref2, _opts$top;
                var opts = optionsOrX;
                var targetX = (_ref = (_opts$left = opts.left) !== null && _opts$left !== void 0 ? _opts$left : opts.x) !== null && _ref !== void 0 ? _ref : 0;
                var targetY = (_ref2 = (_opts$top = opts.top) !== null && _opts$top !== void 0 ? _opts$top : opts.y) !== null && _ref2 !== void 0 ? _ref2 : 0;
                nativeScrollTo.call(window, targetX, targetY);
              } else {
                nativeScrollTo.call(window, optionsOrX || 0, y || 0);
              }
            } catch (_unused3) {
              try {
                window.scroll(0, _typeof(optionsOrX) === "object" && optionsOrX !== null ? optionsOrX.top || 0 : y || 0);
              } catch (_unused4) {}
            }
          };
        }
        if (typeof String.prototype.replaceAll !== "function") {
          String.prototype.replaceAll = function (search, replacement) {
            if (Object.prototype.toString.call(search).toLowerCase() === "[object regexp]") {
              return this.replace(search, replacement);
            }
            var escaped = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            return this.replace(new RegExp(escaped, "g"), replacement);
          };
        }
        if (typeof Promise.allSettled !== "function") {
          Promise.allSettled = function (promises) {
            return Promise.all(Array.from(promises).map(function (item) {
              return Promise.resolve(item).then(function (value) {
                return {
                  status: "fulfilled",
                  value: value
                };
              }, function (reason) {
                return {
                  status: "rejected",
                  reason: reason
                };
              });
            }));
          };
        }
        if (typeof window !== "undefined") {
          var winCrypto = window.crypto;
          if (winCrypto && typeof winCrypto.randomUUID !== "function") {
            winCrypto.randomUUID = function () {
              return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (c) {
                return (Number(c) ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16);
              });
            };
          }
        }
        if (typeof window !== "undefined" && typeof window.matchMedia !== "function") {
          window.matchMedia = function (query) {
            return {
              matches: false,
              media: query,
              onchange: null,
              addListener: function addListener() {},
              removeListener: function removeListener() {},
              addEventListener: function addEventListener() {},
              removeEventListener: function removeEventListener() {},
              dispatchEvent: function dispatchEvent() {
                return false;
              }
            };
          };
        }
        setLogLevel("error");
        var firebaseConfig = {
          apiKey: "AIzaSyD1swjfbgCpvt0NI0uwTlaAwV2AAjo-69o",
          authDomain: "halabafc.firebaseapp.com",
          projectId: "halabafc",
          storageBucket: "halabafc.firebasestorage.app",
          messagingSenderId: "34931922331",
          appId: "1:34931922331:web:90c5af1703bba1fb83fd3e",
          measurementId: "G-PC0BB49XRK"
        };
        var app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
        var firestoreDb;
        try {
          firestoreDb = initializeFirestore(app, {
            experimentalForceLongPolling: true,
            ignoreUndefinedProperties: true
          });
        } catch (_unused5) {
          firestoreDb = getFirestore(app);
        }
        var db = firestoreDb;
        var auth = getAuth(app);
        var OperationType = /* @__PURE__ */function (OperationType2) {
          OperationType2["CREATE"] = "create";
          OperationType2["UPDATE"] = "update";
          OperationType2["DELETE"] = "delete";
          OperationType2["LIST"] = "list";
          OperationType2["GET"] = "get";
          OperationType2["WRITE"] = "write";
          return OperationType2;
        }(OperationType || {});
        function handleFirestoreError(error, operationType, path) {
          var _auth$currentUser, _auth$currentUser2;
          var errInfo = {
            error: error instanceof Error ? error.message : String(error),
            authInfo: {
              userId: ((_auth$currentUser = auth.currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) || null,
              email: ((_auth$currentUser2 = auth.currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.email) || null
            },
            operationType: operationType,
            path: path
          };
          console.warn("Firestore Operation Notice:", JSON.stringify(errInfo));
          return errInfo;
        }
        var heroStadiumWebp = "" + new URL('halaba_stadium_hero-DlRnnI6Q.webp', module.meta.url).href + "";
        var heroStadiumMobile = "" + new URL('halaba_stadium_hero_mobile-CNMbA7gS.webp', module.meta.url).href + "";
        var heroStadiumJpg = "" + new URL('halaba_stadium_hero-D7B7GHYf.jpg', module.meta.url).href + "";
        var matchAction = "" + new URL('halaba_match_action_1792217992379-BmsC7Yfv.webp', module.meta.url).href + "";
        var academyTraining = "" + new URL('halaba_academy_training_1792218005519-CP1FyldZ.webp', module.meta.url).href + "";
        var squadLineup = "" + new URL('halaba_squad_lineup_1792272200487-IwYXnxcU.webp', module.meta.url).href + "";
        var homeJersey = "" + new URL('halaba_home_jersey_1792356797619-DTn3NB0B.webp', module.meta.url).href + "";
        var awayJersey = "" + new URL('halaba_away_jersey_1792356797886-CuAyXANL.webp', module.meta.url).href + "";
        var newsFasilDraw = "" + new URL('halaba_news_fasil_draw-D0_u1s76.jpg', module.meta.url).href + "";
        var newsCrowdCelebration = "" + new URL('halaba_news_crowd_celebration-v-2uq95_.jpg', module.meta.url).href + "";
        var newsBahirDarWin = "" + new URL('halaba_news_bahirdar_win-Dck88CQr.jpg', module.meta.url).href + "";
        var newsMatchPoster = "" + new URL('halaba_news_match_poster-Bqlk84tk.webp', module.meta.url).href + "";
        var newsCoachInterview = "" + new URL('firestore_news_sxRTmExguBl4NTz4RYjR-DeahbIo_.jpg', module.meta.url).href + "";
        var newsWeWillBeBack = "" + new URL('firestore_news_news-1793126013273-D6VSJsb5.jpg', module.meta.url).href + "";
        var newsWolitaMatch = "" + new URL('firestore_news_news-1793035517021-BF-gYIw-.jpg', module.meta.url).href + "";
        var newsWolitaPreview = "" + new URL('firestore_news_news-1792836094704-IX4npG4d.jpg', module.meta.url).href + "";
        var jerseyHomeReal = "" + new URL('firestore_prod_jersey-home-2026-BFuGm9Jf.jpg', module.meta.url).href + "";
        var jerseyAwayReal = "" + new URL('firestore_prod_jersey-away-2026-CNqFQz0l.jpg', module.meta.url).href + "";
        var jerseyThirdReal = "" + new URL('firestore_prod_jersey-third-2026-DhrS3_as.jpg', module.meta.url).href + "";
        var netvibeLogoImg = "" + new URL('netvibe-logo-DoC7v5-c.jpeg', module.meta.url).href + "";
        var halabaLogoUrl = "" + new URL('halaba-city-fc-logo-ByVlNStd.png', module.meta.url).href + "";
        var ClubImages = exports("C", {
          heroStadium: heroStadiumWebp,
          heroStadiumWebp: heroStadiumWebp,
          heroStadiumMobile: heroStadiumMobile,
          heroStadiumJpg: heroStadiumJpg,
          matchAction: matchAction,
          academyTraining: academyTraining,
          squadLineup: squadLineup,
          homeJersey: homeJersey,
          awayJersey: awayJersey,
          newsFasilDraw: newsFasilDraw,
          newsCrowdCelebration: newsCrowdCelebration,
          newsBahirDarWin: newsBahirDarWin,
          newsMatchPoster: newsMatchPoster,
          newsCoachInterview: newsCoachInterview,
          newsWeWillBeBack: newsWeWillBeBack,
          newsWolitaMatch: newsWolitaMatch,
          newsWolitaPreview: newsWolitaPreview,
          jerseyHomeReal: jerseyHomeReal,
          jerseyAwayReal: jerseyAwayReal,
          jerseyThirdReal: jerseyThirdReal,
          netvibeLogo: netvibeLogoImg,
          clubLogo: halabaLogoUrl
        });
        var initialClubInfo = {
          name: "HALABA City FC",
          shortName: "HALABA FC",
          nickname: {
            en: "Berberewochu (The Chilies)",
            am: "በርበሬዎቹ",
            om: "Berberewochu (Mimmi’oowwan)"
          },
          founded: 1966,
          stadium: {
            name: "Halaba Stadium",
            capacity: "15,000 Seats",
            city: "Halaba Kulito",
            region: "Central Ethiopia Regional State",
            surface: "Natural Grass"
          },
          colors: {
            primary: "#c80815",
            // Scarlet Red
            secondary: "#056b2b",
            // Emerald Green
            accent: "#f5b800"
            // Gold
          },
          contact: {
            address: "Halaba Stadium Sports Complex, Main Boulevard, Halaba Kulito, Ethiopia",
            phone: "+251 46 226 0192 / +251 91 688 4422",
            email: "info@halabacityfc.et",
            mediaEmail: "press@halabacityfc.et",
            ticketOffice: "tickets@halabacityfc.et",
            hours: "Monday – Friday: 8:30 AM – 5:30 PM (Matchdays: 7:00 AM – 7:00 PM)"
          },
          socials: {
            facebook: "https://facebook.com/halabacityfc.official",
            telegram: "https://t.me/halabacityfc",
            youtube: "https://youtube.com/@halabacityfc",
            twitter: "https://x.com/halabacityfc"
          }
        };
        var initialMatches = [
        // Round 3 (Completed - Oct 20, 2026) [FT]
        {
          id: "m-epl-rd3",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League 2026/27 - Round 3",
          date: "2026-10-20",
          kickoffTime: "15:00",
          venue: "Halaba Stadium, Halaba Kulito",
          homeTeam: {
            id: "halaba",
            name: "Halaba Ketema",
            isHalaba: true
          },
          awayTeam: {
            id: "fasil",
            name: "Fasil Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 1
          },
          halftimeScore: {
            home: 1,
            away: 0
          },
          round: "Round 3",
          attendance: "15,000 (Capacity Crowd)",
          referee: "Eyasu Fanta (FIFA Referee)",
          scorers: [{
            player: "Kaleb Amankwah",
            minute: 10,
            team: "home"
          }, {
            player: "Romaric",
            minute: 50,
            team: "away"
          }],
          summary: "Halaba Ketema 1 - 1 Fasil Kenema (October 20, 2026). Kaleb Amankwah gave Halaba an early lead in the 10th minute before Romaric leveled for Fasil Kenema in a thrilling 1-1 draw at Halaba Stadium."
        },
        // Round 4 (Upcoming - Oct 26, 2026)
        {
          id: "m-epl-rd4",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League 2026/27 - Round 4",
          date: "2026-10-26",
          kickoffTime: "15:30",
          venue: "Wolaita Sodo Stadium, Wolaita Sodo",
          homeTeam: {
            id: "wolaitta",
            name: "Wolaitta Dicha",
            isHalaba: false
          },
          awayTeam: {
            id: "halaba",
            name: "Halaba Ketema",
            isHalaba: true
          },
          status: "UPCOMING",
          round: "Round 4",
          attendance: "Expected 16,000",
          referee: "Hailemariam Assefa",
          summary: "Halaba Ketema travel to Sodo to face regional rivals Wolaitta Dicha in Round 4 of the Ethiopian Premier League."
        },
        // Round 5 (Upcoming - Oct 30, 2026)
        {
          id: "m-epl-rd5",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League 2026/27 - Round 5",
          date: "2026-10-30",
          kickoffTime: "15:00",
          venue: "Halaba Stadium, Halaba Kulito",
          homeTeam: {
            id: "halaba",
            name: "Halaba Ketema",
            isHalaba: true
          },
          awayTeam: {
            id: "hosaena",
            name: "Hadiya Hosaena",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 5",
          attendance: "Expected 15,000 (Sold Out)",
          referee: "Tewodros Marcos",
          summary: "Round 5 brings high drama as the Berberewochu welcome Hadiya Hosaena to Halaba Stadium seeking to maintain their historic top-of-the-table form."
        },
        // Completed Round 2 (Oct 16, 2026) [FT]
        {
          id: "m-epl-rd2",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League 2026/27 - Round 2",
          date: "2026-10-16",
          kickoffTime: "15:00",
          venue: "Halaba Stadium, Halaba Kulito",
          homeTeam: {
            id: "halaba",
            name: "Halaba Ketema",
            isHalaba: true
          },
          awayTeam: {
            id: "bahirdar",
            name: "Bahir Dar Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 0
          },
          halftimeScore: {
            home: 0,
            away: 0
          },
          round: "Round 2",
          attendance: "14,800",
          referee: "Ephrem Debele",
          scorers: [{
            player: "Yonatan Hailu",
            minute: 47,
            team: "home"
          }],
          summary: "Halaba Ketema 1 - 0 Bahir Dar Kenema (October 16, 2026). Yonatan Hailu scored the winning goal in the 47th minute to secure Halaba Ketema’s historic first Premier League victory."
        },
        // Completed Round 1 (Oct 9, 2026) [FT]
        {
          id: "m-epl-rd1",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League 2026/27 - Round 1",
          date: "2026-10-09",
          kickoffTime: "15:00",
          venue: "Halaba Stadium, Halaba Kulito",
          homeTeam: {
            id: "halaba",
            name: "Halaba Ketema",
            isHalaba: true
          },
          awayTeam: {
            id: "welwalo",
            name: "Welwalo Adigrat University",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 1
          },
          halftimeScore: {
            home: 1,
            away: 0
          },
          round: "Round 1",
          attendance: "14,500",
          referee: "Dawit Yohannes",
          scorers: [{
            player: "Amanuel Tesfaye",
            minute: 34,
            team: "home"
          }, {
            player: "Bereket Desta",
            minute: 73,
            team: "away"
          }],
          summary: "Halaba Ketema 1 - 1 Welwalo Adigrat University (October 9, 2026). Playmaker Amanuel Tesfaye scored the opening goal in the 34th minute before Welwalo struck back in an electric season opener."
        },
        // Ethiopian Premier League Round 2 & 1 Matches Across the League
        {
          id: "2608726",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-11",
          kickoffTime: "12:00",
          venue: "Hawassa Stadium",
          homeTeam: {
            id: "hawassa",
            name: "Hawassa Kenema",
            isHalaba: false
          },
          awayTeam: {
            id: "defence",
            name: "Mechal (Defence Force)",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608727",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-11",
          kickoffTime: "15:00",
          venue: "Addis Ababa Stadium",
          homeTeam: {
            id: "bunna",
            name: "Ethiopian Bunna",
            isHalaba: false
          },
          awayTeam: {
            id: "shaggar",
            name: "Shaggar City",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608728",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-10",
          kickoffTime: "12:00",
          venue: "Addis Ababa Stadium",
          homeTeam: {
            id: "saintgeorge",
            name: "Kidus Giorgis",
            isHalaba: false
          },
          awayTeam: {
            id: "negelle",
            name: "Negelle Arsi",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608729",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-11",
          kickoffTime: "15:00",
          venue: "Hawassa Stadium",
          homeTeam: {
            id: "sidama",
            name: "Sidama Bunna",
            isHalaba: false
          },
          awayTeam: {
            id: "cbe_sa",
            name: "CBE SA",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608730",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-10",
          kickoffTime: "15:00",
          venue: "Wolaita Sodo Stadium",
          homeTeam: {
            id: "wolaitta",
            name: "Wolaitta Dicha",
            isHalaba: false
          },
          awayTeam: {
            id: "fasil",
            name: "Fasil Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 0
          },
          round: "Round 1"
        }, {
          id: "2608731",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-09",
          kickoffTime: "12:00",
          venue: "Adama Stadium",
          homeTeam: {
            id: "electric",
            name: "Ethio Electric",
            isHalaba: false
          },
          awayTeam: {
            id: "adama",
            name: "Adama Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608732",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-11",
          kickoffTime: "12:00",
          venue: "Hossana Stadium",
          homeTeam: {
            id: "hosaena",
            name: "Hadiya Hossana",
            isHalaba: false
          },
          awayTeam: {
            id: "bahirdar",
            name: "Bahir Dar Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 1
          },
          round: "Round 1"
        }, {
          id: "2608734",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-11",
          kickoffTime: "15:00",
          venue: "Chencha Stadium",
          homeTeam: {
            id: "gamochencha",
            name: "Gamo Chencha",
            isHalaba: false
          },
          awayTeam: {
            id: "insurance",
            name: "Ethiopian Medhin",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 2
          },
          round: "Round 1"
        }, {
          id: "2608735",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-16",
          kickoffTime: "15:00",
          venue: "Adama Stadium",
          homeTeam: {
            id: "adama",
            name: "Adama Kenema",
            isHalaba: false
          },
          awayTeam: {
            id: "shaggar",
            name: "Shaggar City",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 0
          },
          round: "Round 2"
        }, {
          id: "2608736",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-17",
          kickoffTime: "15:00",
          venue: "Hawassa University Stadium",
          homeTeam: {
            id: "hawassa",
            name: "Hawassa Kenema",
            isHalaba: false
          },
          awayTeam: {
            id: "insurance",
            name: "Ethiopian Medhin",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 1
          },
          round: "Round 2"
        }, {
          id: "2608737",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-17",
          kickoffTime: "12:00",
          venue: "Adama ASTU Stadium",
          homeTeam: {
            id: "saintgeorge",
            name: "Kidus Giorgis",
            isHalaba: false
          },
          awayTeam: {
            id: "bunna",
            name: "Ethiopian Bunna",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 2
          },
          round: "Round 2"
        }, {
          id: "2608740",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-16",
          kickoffTime: "12:00",
          venue: "Adama ASTU Stadium",
          homeTeam: {
            id: "electric",
            name: "Ethio Electric",
            isHalaba: false
          },
          awayTeam: {
            id: "negelle",
            name: "Negelle Arsi",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 0
          },
          round: "Round 2"
        },
        // Remaining Round 2 League Matches
        {
          id: "2608741",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-16",
          kickoffTime: "15:00",
          venue: "Abebe Bikila Stadium, Addis Ababa",
          homeTeam: {
            id: "defence",
            name: "Mechal (Defence Force)",
            isHalaba: false
          },
          awayTeam: {
            id: "fasil",
            name: "Fasil Kenema",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 2
          },
          round: "Round 2"
        }, {
          id: "2608742",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-17",
          kickoffTime: "12:00",
          venue: "Addis Ababa Stadium",
          homeTeam: {
            id: "cbe_sa",
            name: "Ethiopia Nigd Bank (CBE SA)",
            isHalaba: false
          },
          awayTeam: {
            id: "gamochencha",
            name: "Gamo Chencha",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 0
          },
          round: "Round 2"
        }, {
          id: "2608743",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-17",
          kickoffTime: "15:00",
          venue: "Tigray Stadium, Mekelle",
          homeTeam: {
            id: "welwalo",
            name: "Welwalo Adigrat Univ.",
            isHalaba: false
          },
          awayTeam: {
            id: "sidama",
            name: "Sidama Coffee SC",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 1
          },
          round: "Round 2"
        }, {
          id: "2608744",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-17",
          kickoffTime: "15:00",
          venue: "Wolaita Sodo Stadium",
          homeTeam: {
            id: "wolaitta",
            name: "Wolaitta Dicha",
            isHalaba: false
          },
          awayTeam: {
            id: "hosaena",
            name: "Hadiya Hossana",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 0,
            away: 0
          },
          round: "Round 2"
        },
        // Ethiopian Premier League Round 3 Matches Across the League
        // (Halaba, Fasil, Mechal, Welwalo, Bahir Dar & Electric have played 3 games; remaining 12 clubs on 2 games)
        {
          id: "2608753",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-21",
          kickoffTime: "15:00",
          venue: "Dire Dawa Stadium",
          homeTeam: {
            id: "defence",
            name: "Mechal (Defence Force)",
            isHalaba: false
          },
          awayTeam: {
            id: "welwalo",
            name: "Welwalo Adigrat Univ.",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 1,
            away: 0
          },
          round: "Round 3",
          summary: "Defence Force secure a tight 1-0 victory over Welwalo Adigrat in Round 3."
        }, {
          id: "2608754",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-21",
          kickoffTime: "18:00",
          venue: "Bahir Dar International Stadium",
          homeTeam: {
            id: "bahirdar",
            name: "Bahir Dar Kenema",
            isHalaba: false
          },
          awayTeam: {
            id: "electric",
            name: "Ethio Electric",
            isHalaba: false
          },
          status: "FINISHED",
          score: {
            home: 2,
            away: 1
          },
          round: "Round 3",
          summary: "Bahir Dar Kenema defeat Ethio Electric 2-1 to climb into 3rd position."
        }, {
          id: "2608750",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-24",
          kickoffTime: "15:00",
          venue: "Abebe Bikila Stadium, Addis Ababa",
          homeTeam: {
            id: "cbe_sa",
            name: "Ethiopia Nigd Bank (CBE SA)",
            isHalaba: false
          },
          awayTeam: {
            id: "adama",
            name: "Adama Kenema SC",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }, {
          id: "2608751",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-24",
          kickoffTime: "18:00",
          venue: "Addis Ababa Stadium",
          homeTeam: {
            id: "insurance",
            name: "Ethiopian Medhin (Insurance)",
            isHalaba: false
          },
          awayTeam: {
            id: "bunna",
            name: "Ethiopian Coffee SC (Bunna)",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }, {
          id: "2608752",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-25",
          kickoffTime: "15:00",
          venue: "Wolaita Sodo Stadium",
          homeTeam: {
            id: "wolaitta",
            name: "Wolaitta Dicha",
            isHalaba: false
          },
          awayTeam: {
            id: "saintgeorge",
            name: "Saint George SC",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }, {
          id: "2608755",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-25",
          kickoffTime: "15:00",
          venue: "Adama Stadium",
          homeTeam: {
            id: "shaggar",
            name: "Shaggar City FC",
            isHalaba: false
          },
          awayTeam: {
            id: "hawassa",
            name: "Hawassa Kenema SC",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }, {
          id: "2608756",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-25",
          kickoffTime: "15:00",
          venue: "Hossana Stadium",
          homeTeam: {
            id: "hosaena",
            name: "Hadiya Hossana",
            isHalaba: false
          },
          awayTeam: {
            id: "sidama",
            name: "Sidama Coffee SC",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }, {
          id: "2608757",
          competition: "ETHIOPIAN_PREMIER_LEAGUE",
          competitionName: "Ethiopian Premier League",
          date: "2026-10-25",
          kickoffTime: "15:00",
          venue: "Chencha Stadium",
          homeTeam: {
            id: "gamochencha",
            name: "Gamo Chencha",
            isHalaba: false
          },
          awayTeam: {
            id: "negelle",
            name: "Negele Arsi FC",
            isHalaba: false
          },
          status: "UPCOMING",
          round: "Round 3"
        }];
        var initialStandings = [{
          position: 1,
          teamId: "cbe_sa",
          teamName: "Ethiopia Nigd Bank (CBE SA)",
          played: 3,
          won: 2,
          drawn: 1,
          lost: 0,
          goalsFor: 3,
          goalsAgainst: 1,
          goalDifference: 2,
          points: 7,
          form: ["W", "W", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png"
        }, {
          position: 2,
          teamId: "bahirdar",
          teamName: "Bahir Dar Kenema",
          played: 3,
          won: 2,
          drawn: 0,
          lost: 1,
          goalsFor: 4,
          goalsAgainst: 2,
          goalDifference: 2,
          points: 6,
          form: ["W", "L", "W"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png"
        }, {
          position: 3,
          teamId: "defence",
          teamName: "Mechal (Defence Force)",
          played: 3,
          won: 2,
          drawn: 0,
          lost: 1,
          goalsFor: 2,
          goalsAgainst: 1,
          goalDifference: 1,
          points: 6,
          form: ["W", "L", "W"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/5760g91790265354.png"
        }, {
          position: 4,
          teamId: "negelle",
          teamName: "Negele Arsi FC",
          played: 3,
          won: 1,
          drawn: 2,
          lost: 0,
          goalsFor: 4,
          goalsAgainst: 1,
          goalDifference: 3,
          points: 5,
          form: ["D", "D", "W"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
        }, {
          position: 5,
          teamId: "halaba",
          teamName: "Halaba Ketema (በርበሬዎቹ)",
          played: 3,
          won: 1,
          drawn: 2,
          lost: 0,
          goalsFor: 3,
          goalsAgainst: 2,
          goalDifference: 1,
          points: 5,
          form: ["D", "W", "D"],
          isHalaba: true,
          badgeUrl: halabaLogoUrl
        }, {
          position: 6,
          teamId: "adama",
          teamName: "Adama Kenema SC",
          played: 3,
          won: 1,
          drawn: 2,
          lost: 0,
          goalsFor: 2,
          goalsAgainst: 1,
          goalDifference: 1,
          points: 5,
          form: ["W", "D", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png"
        }, {
          position: 7,
          teamId: "insurance",
          teamName: "Ethiopian Medhin (Insurance)",
          played: 2,
          won: 1,
          drawn: 1,
          lost: 0,
          goalsFor: 3,
          goalsAgainst: 1,
          goalDifference: 2,
          points: 4,
          form: ["W", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png"
        }, {
          position: 8,
          teamId: "shaggar",
          teamName: "Shaggar City FC (Sheger Ketema)",
          played: 3,
          won: 1,
          drawn: 1,
          lost: 1,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
          points: 4,
          form: ["W", "D", "L"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png"
        }, {
          position: 9,
          teamId: "electric",
          teamName: "Ethio Electric (EEPCO)",
          played: 3,
          won: 1,
          drawn: 1,
          lost: 1,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
          points: 4,
          form: ["L", "D", "W"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png"
        }, {
          position: 10,
          teamId: "bunna",
          teamName: "Ethiopian Coffee SC (Bunna)",
          played: 3,
          won: 1,
          drawn: 0,
          lost: 2,
          goalsFor: 2,
          goalsAgainst: 5,
          goalDifference: -3,
          points: 3,
          form: ["L", "W", "L"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png"
        }, {
          position: 11,
          teamId: "fasil",
          teamName: "Fasil Kenema",
          played: 2,
          won: 0,
          drawn: 2,
          lost: 0,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
          points: 2,
          form: ["D", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png"
        }, {
          position: 12,
          teamId: "saintgeorge",
          teamName: "Saint George SC (Kidus Giorgis)",
          played: 3,
          won: 0,
          drawn: 2,
          lost: 1,
          goalsFor: 3,
          goalsAgainst: 4,
          goalDifference: -1,
          points: 2,
          form: ["D", "L", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png"
        }, {
          position: 13,
          teamId: "hawassa",
          teamName: "Hawassa Kenema SC",
          played: 3,
          won: 0,
          drawn: 2,
          lost: 1,
          goalsFor: 2,
          goalsAgainst: 3,
          goalDifference: -1,
          points: 2,
          form: ["L", "D", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png"
        }, {
          position: 14,
          teamId: "wolaitta",
          teamName: "Wolaitta Dicha (Welayta Dicha)",
          played: 3,
          won: 0,
          drawn: 2,
          lost: 1,
          goalsFor: 2,
          goalsAgainst: 4,
          goalDifference: -2,
          points: 2,
          form: ["D", "D", "L"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/25m67g1790265481.png"
        }, {
          position: 15,
          teamId: "welwalo",
          teamName: "Welwalo Adigrat Univ.",
          played: 1,
          won: 0,
          drawn: 1,
          lost: 0,
          goalsFor: 1,
          goalsAgainst: 1,
          goalDifference: 0,
          points: 1,
          form: ["D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png"
        }, {
          position: 16,
          teamId: "hosaena",
          teamName: "Hadiya Hossana",
          played: 2,
          won: 0,
          drawn: 1,
          lost: 1,
          goalsFor: 1,
          goalsAgainst: 2,
          goalDifference: -1,
          points: 1,
          form: ["L", "D"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png"
        }, {
          position: 17,
          teamId: "sidama",
          teamName: "Sidama Coffee SC (Sidama Bunna)",
          played: 1,
          won: 0,
          drawn: 0,
          lost: 1,
          goalsFor: 0,
          goalsAgainst: 1,
          goalDifference: -1,
          points: 0,
          form: ["L"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png"
        }, {
          position: 18,
          teamId: "gamochencha",
          teamName: "Gamo Chencha",
          played: 2,
          won: 0,
          drawn: 0,
          lost: 2,
          goalsFor: 0,
          goalsAgainst: 3,
          goalDifference: -3,
          points: 0,
          form: ["L", "L"],
          isHalaba: false,
          badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png"
        }];
        var initialNews = [{
          id: "news-1793126013273",
          title: {
            en: "We will be back",
            am: "ተጠናክረን እንመለሳለን",
            om: "Cimnee Deebina"
          },
          summary: {
            en: "We will come back stronger from this setback. The season is long and our commitment to our club colors and supporters remains unwavering.",
            am: "ተጠናክረን እንመለሳለን! የሊጉ ጉዞ ረጅም ነው፤ ክለባችን ወደ አሸናፊነት ለመመለስ የሚያስፈልጉ ዝግጅቶችን እያደረገ ይገኛል።",
            om: "Cimnee deebina! Tapha itti aanuuf qophii gaarii taasisaa jirra."
          },
          content: {
            en: "We will come back stronger from this setback. The season is long and our commitment to our club colors and supporters remains unwavering. The technical team and players are united in working tirelessly to deliver the results our supporters deserve.",
            am: "ተጠናክረን እንመለሳለን! የሊጉ ጉዞ ረጅም ነው፤ ክለባችን ወደ አሸናፊነት ለመመለስ የሚያስፈልጉ ዝግጅቶችን እያደረገ ይገኛል። መላው ደጋፊ ከክለቡ ጎን እንዲቆም ጥሪ ቀርቧል።",
            om: "Cimnee deebina! Tapha itti aanuuf qophii gaarii taasisaa jirra."
          },
          category: "CLUB_NEWS",
          date: "2026-10-27",
          author: "Club Administration",
          imageUrl: ClubImages.newsWeWillBeBack,
          isFeatured: true,
          readTime: "3 min read"
        }, {
          id: "news-1793035517021",
          title: {
            en: "Wolita dicha 6 : 0 Halaba city",
            am: "ወላይታ ዲቻ 6 : 0 ሀላባ ከተማ",
            om: "Wolita dicha 6 : 0 Halaba city"
          },
          summary: {
            en: "CBE Ethiopian Premier League Round 4: Halaba City suffered a difficult 6-0 away defeat against Wolaita Dicha at Hawassa Stadium.",
            am: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡",
            om: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡"
          },
          content: {
            en: "CBE Ethiopian Premier League Round 4: Halaba City suffered a difficult 6-0 away defeat against Wolaita Dicha at Hawassa Stadium. The technical team has analyzed the errors and pledged immediate tactical adjustments for Round 5.",
            am: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡ አሰልጣኞችና ተጫዋቾች ለቀጣይ ጨዋታ ከፍተኛ ዝግጅት እያደረጉ ነው።",
            om: "CBE የኢትዮጵያ ፕርሚየር ሊግ 4ኛ ሳምንት መረሃ ግብር ዛሬ ምሽት 12፡00 በሀዋሳ ስታድየም በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ በወላይታ ዲቻ 6 ለ 0 በሆነ ውጤት ተረቷል፡፡"
          },
          category: "MATCH_REPORTS",
          date: "2026-10-26",
          author: "Club Administration",
          imageUrl: ClubImages.newsWolitaMatch,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "news-1792836094704",
          title: {
            en: "Halab City vs Wolaita Dicha",
            am: "ሀላባ ከተማ ከወላይታ ዲቻ",
            om: "Halab City vs Wolaita Dicha"
          },
          summary: {
            en: "The eagerly anticipated clash between Halaba City and regional rivals Wolaita Dicha in Round 4 of the Ethiopian Premier League.",
            am: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል",
            om: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል"
          },
          content: {
            en: "The eagerly anticipated clash between Halaba City and regional rivals Wolaita Dicha in Round 4 of the Ethiopian Premier League scheduled at Hawassa Stadium.",
            am: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል። ደጋፊዎች በስታዲየም ተገኝተው ድጋፍ እንዲሰጡ ጥሪ ቀርቧል።",
            om: "ሀላባ ከተማ ከወላይታ ዲቻ የሚያደርጉት ፍልሚያ በጉጉት ይጠበቃል"
          },
          category: "CLUB_NEWS",
          date: "2026-10-24",
          author: "Club Administration",
          imageUrl: ClubImages.newsWolitaPreview,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "sxRTmExguBl4NTz4RYjR",
          title: {
            en: "AFTER MATCH INTERVIEW OF THE HEAD COACH KHALID MOHAMMED",
            am: "አሰልጣኝ ካሊድ መሐመድ ከጨዋታ በኃላ የሰጡት አሰተያየት",
            om: "AFTER MATCH INTERVIEW OF THE HEAD COACH KHALID MOHAMMED"
          },
          summary: {
            en: 'Head Coach Khalid Mohammed speaks following the intense Ethiopian Premier League match at Halaba Stadium: "It was a demanding game following congested fixtures. We created multiple scoring chances and showed strong character."',
            am: "በጣም አስቼጋሪ የነበረ ጨዋታ ነው ተደራራቢ ከሆነ ጨዋታ ነው የመጣነው ተደራራቢ ጨዋታ ማድረግ ትንሽ ጫናዎች አሉ እንደዛም ሆኖ መጥፎ አይደለንም ብዙ የጎል አጋጣሚዎችን መፍጠር ችለናል...",
            om: 'Yaada leenjisaa olaanaa Khalid Mohammed tapha booda kenne: "Tapha baay’ee ulfaataa ture. Carraawwan goolii hedduu uumuu dandeenyeerra."'
          },
          content: {
            am: "በጣም አስቼጋሪ የነበረ ጨዋታ ነው ተደራራቢ ከሆነ ጨዋታ ነው የመጣነው ተደራራቢ ጨዋታ ማድረግ ትንሽ ጫናዎች አሉ እንደዛም ሆኖ መጥፎ አይደለንም ብዙ የጎል አጋጣሚዎችን መፍጠር ችለናል ማስቆጠር ብንችል ኖሮ ውጤቱ በዝሁ መልኩ አይጠናቀቅም ነበር ቀድመንም ጎል አስቆጥረን ነበር ጎል የተቆጠረበት ቡድን ጎል ለማስቆጠር እንድሁም ጎል ያስቆጠረ ቡድንም ትንሽ ወደኃላ ያፈገፍጋል በዛ ሁኔታ በተፈጠረ ክፍተት ጎል ልናስተናግድ ችለናል ጎሉ የተቆጠረው መንገድ በምንገምተው መንገድ ነው ነገር ግን እግር ኳስ ነው እግር ኳስ የሰጠውን ነው የምንቀበለው ሲል ሀሳቡን ገልጿል።\n\nጎል ለማስቆጠር ስነ-ልቦና ወሳኝ ነገር ነው መረጋጋትን ይፈልጋል ከጎል ማስቆጠር ጋር በተያያዘ በተደጋጋሚ ሥራዎችን ሰርተናል ወደ ጎል በመድረስ ከሌሎች ክለቡች አንፃር የተሻልን ነን ይሄም ትልቁ ጎናችን ነው ሌሎች ነገሮች የሚታረሙ እንድሁም የሚቀረፉ ናቸው እነዛን ነገሮች ደግሞ በስነ-ልቦና ላይ በመሥራት የምንፈታቸው ይሆናል በማለት ተናግሯል አሰልጣኝ ካሊድ መሐመድ ገልጿል።",
            en: 'Head Coach Khalid Mohammed shared detailed tactical analysis following the high-intensity fixture at Halaba Stadium: "It was an exceptionally demanding encounter coming off back-to-back congested fixtures. Despite the physical fatigue, our squad created multiple high-quality scoring chances and maintained structural discipline.\n\nScoring requires composure and psychological sharpness. We are creating chances at a higher volume than many top sides in the league, which demonstrates our tactical framework is sound. We will continue refining our finishing through targeted training sessions."',
            om: 'Yaada leenjisaa olaanaa Khalid Mohammed tapha booda kenne: "Tapha baay’ee ulfaataa ture. Carraawwan goolii hedduu uumuu dandeenyeerra."'
          },
          category: "INTERVIEWS",
          date: "2026-10-21",
          author: "Club Administration",
          imageUrl: ClubImages.newsCoachInterview,
          isFeatured: true,
          readTime: "3 min read"
        }, {
          id: "rkmyTcdZNFzBZq0dBA5Z",
          title: {
            en: "Halaba City 1 - 1 Fasil Kenema: Berberewochu Share Spoils in High-Voltage Stalemate",
            am: "ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡",
            om: "Halaba City 1:1 Fasil Kenema: Marsaa 3ffaa Liigichaatiin Qixa Xumuraniiru"
          },
          summary: {
            en: "Halaba Ketema and Fasil Kenema drew 1-1 in Round 3 of the Ethiopian Premier League on October 20, 2026. Kaleb Amankwah gave Halaba an early lead in the 10th minute before Romaric equalized in the 50th minute.",
            am: "በCBE የኢትዮጵያ ፕርሚየር ሊግ 3ኛ ሳምንት መረሃ ግብር ዛሬ በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡",
            om: "Dorgommii Liigii Piriimeeraa Itoophiyaa marsaa 3ffaa irratti Halaba Ketema fi Fasil Kenema 1-1n qixa ba’aniiru."
          },
          content: {
            am: "በCBE የኢትዮጵያ ፕርሚየር ሊግ 3ኛ ሳምንት መረሃ ግብር ዛሬ በተደረገው ጨዋታ ክለባችን ሀላባ ከተማ ከ ፋሲል ከነማ 1-1 በሆነ የአቻ ውጤት ተለያይተዋል፡፡\n\nጨዋታው በሁለቱም ክለቦች በኩል ጠንካራ ፉክክር የታየበት ሲሆን በ10 ደቂቃ ካሌብ አማንኩዋሃ ባስቆጠራት ጎል ሀላባ ከተማ የመጀመሪያው መሪ መሆን ቢችልም በሁለተኛው አጋማሽ 50ኛው ደቂቃ ሮማሪክ ባስቆጠራት ጎል ፋሲል ከነማ ነጥብ ተጋርቶ መውጣት ችሏል፡፡",
            en: "Halaba Stadium witnessed an electric atmosphere as Halaba Ketema fought to a hard-earned 1-1 draw against title contenders Fasil Kenema. Kaleb Amankwah struck in the 10th minute for the Berberewochu before Romaric equalized in the 50th minute for Fasil Kenema. With 5 points from their opening three games (1 Win, 2 Draws, 0 Losses), Halaba maintain second place in the Ethiopian Premier League table.",
            om: "Halaba Ketema tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa keessatti Fasil Kenema waliin 1-1n qixa baheera. Kaleb Amankwah daqiiqaa 10ffaa irratti goolii eegalchiisaa yoo galchu, Fasil Kenema daqiiqaa 50ffaa irratti deebiseera."
          },
          category: "MATCH_REPORTS",
          date: "2026-10-20",
          author: "Club Administration",
          imageUrl: ClubImages.newsFasilDraw,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "IysjLt9LbYkwAijEEFYJ",
          title: {
            en: "Next Match Official Announcement: Halaba City vs Fasil Kenema",
            am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ ",
            om: "Tapha Itti Aanu: Halaba City vs Fasil Kenema"
          },
          summary: {
            en: "Round 3 matchday announcement for the blockbuster clash between Halaba City and Fasil Kenema at Halaba Stadium.",
            am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ\n🗓️   ማክሰኞ ጥቅምት 10/2019\n🕙     10:00\n🏟  ሀላባ ኢንተርናሽናል ስታዲየም ",
            om: "Tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa Kibxata Onkoloolessa 10/2019 Istaadiyeemii Halabaa irratti."
          },
          content: {
            am: "ሐላባ ከተማ   🆚  ፋሲል ከነማ\n🗓️   ማክሰኞ ጥቅምት 10/2019\n🕙     10:00\n🏟  ሀላባ ኢንተርናሽናል ስታዲየም\n\nመላው የበርበሬዎቹ ደጋፊ በክለባችን ቀለማት ደምቆ በስታዲየም በመገኘት ክለቡን እንዲያበረታታ ጥሪ ቀርቧል!",
            en: "Halaba City vs Fasil Kenema in Round 3 of the Ethiopian Premier League. Match scheduled for Tuesday at Halaba Stadium.",
            om: "Tapha marsaa 3ffaa Liigii Piriimeeraa Itoophiyaa Istaadiyeemii Halabaa irratti gaggeeffama."
          },
          category: "CLUB_NEWS",
          date: "2026-10-18",
          author: "Club Administration",
          imageUrl: ClubImages.newsMatchPoster,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "V7xAHDdcH80pNECHAujH",
          title: {
            en: "Victorious Atmosphere: Halaba City Supporters Create Historic Scene at Halaba Stadium",
            am: "ድሉም ድባቡም ተጠናክሮ ይቀጥላል",
            om: "Mo’annaanis Miirris Cimee Itti Fufa"
          },
          summary: {
            en: "A heartfelt thank you to the thousands of passionate Berberewochu supporters who packed Halaba Stadium and cheered the club non-stop for 90 minutes to our first Premier League victory.",
            am: "በ CBE የኢትዮጵያ ፕርሚየር ሊግ 2ኛ ሳምንት መረሃ ግብር ክለባችን ሀላባ ከተማ የባህርዳር አቻውን 1-0 በሆነ ውጤት በረታበት በዛሬው ጨዋታ የሀላባ ኢንተርናሽናል ስታድየምን በሚመጥን መልኩ በማራኪ ድባብ ተውቦ ክለቡን 90 ደቂቃ ያለማቋረጥ በማበረታት ለሳያችሁት ድንቅ ድጋፍ ልዪ ክብር ይገባቹሀል!!\nድሉም ድባቡም ተጠናክሮ ይቀጥላል እናመሰግናለን!!❤️",
            om: "Deeggartoota keenya hundaaf galata guddaa qabna. Miirri mo’annaa kun cimee itti fufa!"
          },
          content: {
            am: "በ CBE የኢትዮጵያ ፕርሚየር ሊግ 2ኛ ሳምንት መረሃ ግብር ክለባችን ሀላባ ከተማ የባህርዳር አቻውን 1-0 በሆነ ውጤት በረታበት በዛሬው ጨዋታ የሀላባ ኢንተርናሽናል ስታድየምን በሚመጥን መልኩ በማራኪ ድባብ ተውቦ ክለቡን 90 ደቂቃ ያለማቋረጥ በማበረታት ለሳያችሁት ድንቅ ድጋፍ ልዪ ክብር ይገባቹሀል!!\nድሉም ድባቡም ተጠናክሮ ይቀጥላል እናመሰግናለን!!❤️",
            en: "In the second matchday of the CBE Ethiopian Premier League, HALABA City FC defeated Bahir Dar Kenema 1-0 in front of an electric, sold-out Halaba Stadium crowd. The management expresses deep gratitude to our loyal fans who cheered for 90 minutes straight.",
            om: "Deeggartoota keenya hundaaf galata guddaa qabna. Miirri mo’annaa kun cimee itti fufa!"
          },
          category: "CLUB_NEWS",
          date: "2026-10-18",
          author: "Club Administration",
          imageUrl: ClubImages.newsCrowdCelebration,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "UZeVeV14ya8by5rt1SJ4",
          title: {
            en: "HALABA CITY 1 : 0 BAHIRDAR CITY - Historic First Premier League Win",
            am: "ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!",
            om: "Halaba Ketema Bahir Dar Kenema 1 - 0 Mo’ate!"
          },
          summary: {
            en: "Yonatan Hailu scores the decisive 47th-minute winner against Bahir Dar Kenema to secure Halaba City FC’s historic first ever Ethiopian Premier League victory.",
            am: "በኢትዮጵያ ፕሪምየር ሊግ 2ኛ ሳምንት ጨዋታ ክለባችን ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!\nለበርበሬዎቹ ማሸነፊያዋን ጎል በ47ኛው ደቂቃ ዮናታን ሀይሉ አስቆጥሯል!",
            om: "Dorgommii Liigii Piriimeeraa Itoophiyaa marsaa 2ffaa irratti Halaba Ketema goolii Yonatan Hailu daqiiqaa 47ffaa irratti galcheen 1-0n mo’ateera."
          },
          content: {
            am: "በኢትዮጵያ ፕሪምየር ሊግ 2ኛ ሳምንት ጨዋታ ክለባችን ሀላባ ከተማ ባህርዳር ከተማን 1 - 0 በሆነ ውጤት አሸንፏል!\nለበርበሬዎቹ ማሸነፊያዋን ጎል በ47ኛው ደቂቃ ዮናታን ሀይሉ አስቆጥሯል!\n\nክለባችን በሜዳው በሀላባ ስታዲየም ባደረገው ጨዋታ በጠንካራ መከላከልና በማራኪ የመልሶ ማጥቃት ጨዋታ አስፈላጊውን 3 ነጥብ ይዞ ወጥቷል።",
            en: "In an unforgettable afternoon at Halaba Stadium, Yonatan Hailu struck in the 47th minute to hand HALABA City FC a famous 1-0 victory against Bahir Dar Kenema. The historic three points lifted the Berberewochu into the upper echelon of Ethiopian football.",
            om: "Tapha marsaa 2ffaa Liigii Piriimeeraa Itoophiyaa keessatti Halaba Ketema Bahir Dar Kenema 1-0n mo’achuun seenaa haaraa hojjeteera."
          },
          category: "MATCH_REPORTS",
          date: "2026-10-18",
          author: "Club Administration",
          imageUrl: ClubImages.newsBahirDarWin,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "news-membership",
          title: {
            en: "Official Supporter Membership 2026 Drive Launches with Digital Fan ID",
            am: "የ2026 ይፋዊ የደጋፊዎች አባልነት ምዝገባ በዲጂታል መታወቂያ ተጀመረ",
            om: "Duulli Galmee Miseensummaa Deeggartoota Bara 2026 Eegalame"
          },
          summary: {
            en: "Supporters in Halaba, across Ethiopia, and in the diaspora can now register as official club members through the newly launched portal.",
            am: "በሀላባ፣ በመላው ኢትዮጵያ እና በውጭ ሀገር የሚኖሩ ደጋፊዎች አሁን በአዲሱ ፖርታል አማካኝነት ይፋዊ አባል መሆን ይችላሉ።",
            om: "Deeggartoonni Halabaa fi biyya alaa jiran hundi karaa weebsaayitii seeraatiin miseensa ta’uu danda’u."
          },
          content: {
            en: 'HALABA City FC is proud to announce the official launch of the 2026 Supporter Membership Drive. For the first time in club history, supporters can register online and instantly generate an official Halaba Digital Fan ID.\n\nClub President Dr. Kassim Ahmed highlighted: "Our club belongs to its supporters. Through this membership initiative, every fan whether in Halaba Kulito, Addis Ababa, or abroad becomes a recognized pillar of HALABA City FC. Together, we are building a modern, sustainable sports institution."\n\nMembers receive matchday ticket priority, discounts on official merchandise, digital newsletters, and access to exclusive club forums.',
            am: 'ሀላባ ከተማ እግርኳስ ክለብ የደጋፊዎቹን ይፋዊ አባልነት ምዝገባ በይፋ አስጀምሯል። ደጋፊዎች በመመዝገብ የዲጂታል መታወቂያ ማግኘት ይችላሉ።\n\nየክለቡ ፕሬዝዳንት ዶ/ር ቃሲም አህመድ እንደገለጹት "ይህ ክለብ የደጋፊዎቹ ነው። በአባልነቱ አማካኝነት ክለቡን ወደ ዘመናዊ ተቋምነት ለማሳደግ በጋራ እንሰራለን" ብለዋል።',
            om: "Halaba City FC duula miseensummaa deeggartoota bara 2026 eegaleera. Deeggartoonni karaa intarneetiin galmaa’uun waraqaa eenyummaa dijitaalaa battalumatti argatu."
          },
          category: "CLUB_NEWS",
          date: "2026-10-08",
          author: "Club Secretariat",
          imageUrl: ClubImages.heroStadium,
          isFeatured: false,
          readTime: "3 min read"
        }, {
          id: "news-academy",
          title: {
            en: "Youth Academy Shines: Under-17 Talents Selected for Regional Development Squad",
            am: "የክለቡ ታዳጊ አካዳሚ ውጤታማነት፡ አራት ተጫዋቾች ለክልሉ ምርጥ ቡድን ተመረጡ",
            om: "Akaadaamiin Dargaggootaa Boonsaa Hojjechaa Jira: Taphattoonni 4 Filataman"
          },
          summary: {
            en: "Four standout prospects from the Halaba City FC Youth Academy have been named in the Central Ethiopia regional training squad.",
            am: "ከሀላባ ከተማ ታዳጊ አካዳሚ የወጡ አራት ተስፈኛ ወጣቶች ለማዕከላዊ ኢትዮጵያ ክልል ምርጥ ታዳጊ ቡድን ተመርጠዋል።",
            om: "Taphattoonni akaadaamii Halaba City FC afur garee qophii naannoo Itoophiyaa Giddugaleessaatiif filatamaniiru."
          },
          content: {
            en: "The investment in grassroots football in Halaba Kulito is bearing fruit. Yesterday, the regional football federation confirmed that four players from the Halaba City FC U-17 Academy have been selected for the regional training squad.\n\nAcademy Director Coach Melaku highlighted the dedication of local trainers and the immense natural talent found throughout the Halaba woreda and neighboring districts.\n\n\"We don't just develop footballers; we develop disciplined young ambassadors for Halaba,\" said Melaku.",
            am: "በሀላባ ቁሊቶ በታዳጊዎች ላይ የተደረገው ኢንቨስትመንት ውጤት እያስገኘ ነው። አራት የክለቡ ታዳጊዎች ለክልሉ ምርጥ ቡድን ተመረጡ። አካዳሚው ስነ-ምግባር የታነጹ ብቁ ተተኪዎችን በማፍራት ላይ ይገኛል።",
            om: "Leenjiin dargaggootaa magaalaa Halabaa keessatti kennamaa jiru bu’aa buusaadha. Taphattoonni afur garee qophiitiif filatamuun boona guddaadha."
          },
          category: "ACADEMY",
          date: "2026-10-02",
          author: "Academy Department",
          imageUrl: ClubImages.academyTraining,
          isFeatured: false,
          readTime: "3 min read"
        }];
        var initialPlayers = [
        // Goalkeepers
        {
          id: "p1",
          number: 1,
          name: "Biniam Teklu",
          position: "Goalkeeper",
          nationality: "Ethiopian",
          birthYear: 2e3,
          appearances: 28,
          goals: 0
        }, {
          id: "p2",
          number: 22,
          name: "Mekonnen Abera",
          position: "Goalkeeper",
          nationality: "Ethiopian",
          birthYear: 2003,
          appearances: 6,
          goals: 0
        },
        // Defenders
        {
          id: "p3",
          number: 4,
          name: "Henok Haile",
          position: "Defender",
          nationality: "Ethiopian",
          birthYear: 1998,
          appearances: 54,
          goals: 3,
          isCaptain: true
        }, {
          id: "p4",
          number: 5,
          name: "Biruk Tadesse",
          position: "Defender",
          nationality: "Ethiopian",
          birthYear: 2001,
          appearances: 32,
          goals: 1
        }, {
          id: "p5",
          number: 3,
          name: "Samson Fikru",
          position: "Defender",
          nationality: "Ethiopian",
          birthYear: 2002,
          appearances: 24,
          goals: 0
        }, {
          id: "p6",
          number: 18,
          name: "Kassahun Negash",
          position: "Defender",
          nationality: "Ethiopian",
          birthYear: 1999,
          appearances: 41,
          goals: 2
        }, {
          id: "p7",
          number: 2,
          name: "Mohammed Seid",
          position: "Defender",
          nationality: "Ethiopian",
          birthYear: 2004,
          appearances: 11,
          goals: 0
        },
        // Midfielders
        {
          id: "p8",
          number: 8,
          name: "Amanuel Tesfaye",
          position: "Midfielder",
          nationality: "Ethiopian",
          birthYear: 2e3,
          appearances: 38,
          goals: 9
        }, {
          id: "p9",
          number: 10,
          name: "Yohannes Bekele",
          position: "Midfielder",
          nationality: "Ethiopian",
          birthYear: 1999,
          appearances: 45,
          goals: 7
        }, {
          id: "p10",
          number: 6,
          name: "Desta Alemayehu",
          position: "Midfielder",
          nationality: "Ethiopian",
          birthYear: 2001,
          appearances: 30,
          goals: 2
        }, {
          id: "p11",
          number: 14,
          name: "Abdi Gemeda",
          position: "Midfielder",
          nationality: "Ethiopian",
          birthYear: 2003,
          appearances: 19,
          goals: 3
        }, {
          id: "p12",
          number: 16,
          name: "Elias Zewdu",
          position: "Midfielder",
          nationality: "Ethiopian",
          birthYear: 2002,
          appearances: 22,
          goals: 1
        },
        // Forwards
        {
          id: "p13",
          number: 9,
          name: "Mulugeta Wolde",
          position: "Forward",
          nationality: "Ethiopian",
          birthYear: 1999,
          appearances: 42,
          goals: 16
        }, {
          id: "p14",
          number: 11,
          name: "Biniam Getachew",
          position: "Forward",
          nationality: "Ethiopian",
          birthYear: 2001,
          appearances: 36,
          goals: 11
        }, {
          id: "p15",
          number: 7,
          name: "Tarekegn Assefa",
          position: "Forward",
          nationality: "Ethiopian",
          birthYear: 2002,
          appearances: 29,
          goals: 8
        }, {
          id: "p16",
          number: 19,
          name: "Fikadu Shiferaw",
          position: "Forward",
          nationality: "Ethiopian",
          birthYear: 2004,
          appearances: 14,
          goals: 4
        }];
        var initialStaff = [{
          id: "s1",
          name: "Dr. Kassim Ahmed",
          role: "Club President",
          department: "Management",
          nationality: "Ethiopian"
        }, {
          id: "s2",
          name: "Solomon Kebede",
          role: "Head Coach",
          department: "Coaching",
          nationality: "Ethiopian"
        }, {
          id: "s3",
          name: "Getachew Dinberu",
          role: "Assistant Coach",
          department: "Coaching",
          nationality: "Ethiopian"
        }, {
          id: "s4",
          name: "Worku Mengistu",
          role: "Goalkeeping Coach",
          department: "Coaching",
          nationality: "Ethiopian"
        }, {
          id: "s5",
          name: "Dr. Nahom Tsegaye",
          role: "Chief Medical Officer & Physiotherapist",
          department: "Medical",
          nationality: "Ethiopian"
        }, {
          id: "s6",
          name: "Melaku Belachew",
          role: "Academy Director & Youth Scout",
          department: "Coaching",
          nationality: "Ethiopian"
        }];
        var initialMemberships = [{
          id: "mem-1",
          referenceNumber: "HCFC-2026-M8849",
          fullName: "Jemal Kedir",
          dateOfBirth: "1995-04-12",
          gender: "Male",
          phone: "+251 91 144 2209",
          email: "jemal.k@example.com",
          cityOrRegion: "Halaba Kulito",
          membershipType: "PREMIUM",
          preferredLanguage: "am",
          registeredAt: "2026-10-12T14:32:00Z",
          status: "APPROVED",
          notes: "Long-time season ticket holder."
        }, {
          id: "mem-2",
          referenceNumber: "HCFC-2026-M8850",
          fullName: "Tirhas Hailu",
          dateOfBirth: "1998-09-20",
          gender: "Female",
          phone: "+251 92 388 1904",
          email: "tirhas.hailu@example.com",
          cityOrRegion: "Hawassa",
          membershipType: "STANDARD",
          preferredLanguage: "en",
          registeredAt: "2026-10-13T09:15:00Z",
          status: "APPROVED"
        }, {
          id: "mem-3",
          referenceNumber: "HCFC-2026-M8851",
          fullName: "Ahmedin Sultan",
          dateOfBirth: "2001-02-18",
          gender: "Male",
          phone: "+251 93 456 7890",
          cityOrRegion: "Halaba Kulito",
          membershipType: "SUPPORTER",
          preferredLanguage: "am",
          registeredAt: "2026-10-14T11:40:00Z",
          status: "PENDING"
        }];
        var initialShopItems = [{
          id: "jersey-home-2026",
          name: {
            en: "Official 2026/27 Home Jersey",
            am: "ይፋዊ የ2026/27 የሜዳ ማሊያ (ቀይ እና አረንጓዴ)",
            om: "Jeersii Seeraa 2026/27 Dirree (Diimaa & Magariisa)"
          },
          description: {
            en: "The iconic scarlet red and emerald green shirt worn by Berberewochu in the Ethiopian Premier League. Premium breathable athletic moisture-wicking fabric with embroidered official Halaba City FC crest.",
            am: "በኢትዮጵያ ፕሪሚየር ሊግ በርበሬዎቹ የሚለብሱት ደማቅ ቀይና አረንጓዴ ማሊያ። ከፍተኛ ጥራት ያለው የክለቡ አርማ የተጠለፈበት።",
            om: "Jeersii seeraa Berberewochu Liigii Piriimeeraa Itoophiyaa keessatti uffatamu. Fooyyee qulqullina olaanaa qabu."
          },
          price: 801,
          imageUrl: ClubImages.jerseyHomeReal,
          availableSizes: ["S", "M", "L", "XL", "XXL"],
          category: "JERSEY",
          inStock: true,
          featured: true
        }, {
          id: "jersey-away-2026",
          name: {
            en: "Official 2026/27 Away Jersey",
            am: "ይፋዊ የ2026/27 የውጪ ሜዳ ማሊያ (ነጭ)",
            om: "Jeersii Seeraa 2026/27 Dirree Alaa (Adii)"
          },
          description: {
            en: "Crisp white away jersey accented with Halaba red and emerald green dynamic sash. Lightweight performance wear engineered for speed, ventilation, and matchday pride.",
            am: "ንጹህ ነጭ የውጪ ሜዳ ማሊያ ከቀይና አረንጓዴ የክለቡ ቀለማት ጋር። በስታዲየምም ሆነ በዕለት ተዕለት ለመልበስ ተመራጭ።",
            om: "Jeersii alaa adii bareedaa mallattoo diimaa fi magariisa Halabaan miidhagfame."
          },
          price: 801,
          imageUrl: ClubImages.jerseyAwayReal,
          availableSizes: ["S", "M", "L", "XL", "XXL"],
          category: "JERSEY",
          inStock: true,
          featured: true
        }, {
          id: "jersey-third-2026",
          name: {
            en: "Official 2026/27 Third Kit (Onyx Edition)",
            am: "የ2026/27 ልዩ ነጭ ማሊያ (ኦኒክስ ኤዲሽን)",
            om: "Jeersii Addaa 2026/27 Gurraacha"
          },
          description: {
            en: "Limited edition midnight onyx match jersey featuring glowing emerald green piping and high-density Halaba City shield crest.",
            am: "ውሱን እትም ያለው ጥቁርና አረንጓዴ ማሊያ። ለደጋፊዎች ልዩ ክብርና ዘመናዊ ዲዛይን የተዘጋጀ።",
            om: "Jeersii daangeffamee qophaa’e gurraachaa fi magariisa calaqqisu qabu."
          },
          price: 901,
          imageUrl: ClubImages.jerseyThirdReal,
          availableSizes: ["M", "L", "XL"],
          category: "JERSEY",
          inStock: true,
          featured: true
        }, {
          id: "scarf-berbere-pride",
          name: {
            en: "Berberewochu Supporter Knit Scarf",
            am: "የበርበሬዎቹ ደጋፊዎች ሹራብ ሻርፕ",
            om: "Hagooggii Deggartoota Berberewochu"
          },
          description: {
            en: 'Double-sided woven jacquard acrylic fan scarf with fringed edges. Reads "HALABA CITY FC • BERBEREWOCHU" on one side and "1966 E.C. • PRIDE OF HALABA" on the reverse.',
            am: "ባለ ሁለት ገጽ የሀላባ ከተማ ደጋፊዎች ሻርፕ። በስታዲየም ድምቀትን ለመፍጠር ተወዳጅ።",
            om: "Hagooggii bareedaa deggartoota Halabaa kan fuula lamaan mallattoo qabu."
          },
          price: 650,
          imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
          availableSizes: ["One Size"],
          category: "ACCESSORY",
          inStock: true,
          featured: false
        }, {
          id: "jacket-anthem-pro",
          name: {
            en: "Halaba Anthem Warm-Up Jacket",
            am: "የሀላባ ከተማ ሞቃት የስፖርት ጃኬት",
            om: "Jaakkeettii Shaakalaa Halabaa"
          },
          description: {
            en: "Official player walkout anthem jacket with full zip, side zip pockets, water-repellent finish, and embroidered gold Halaba crest.",
            am: "ተጫዋቾች ወደ ሜዳ ሲገቡ የሚለብሱት ኦፊሴላዊ ሞቃት ጃኬት። ከዝናብና ብርድ የሚከላከል ዘመናዊ ጨርቅ።",
            om: "Jaakkeettii taphattoonni yeroo dirreetti seenan uffatan, qilleensa fi rooba kan dhowwu."
          },
          price: 2400,
          imageUrl: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
          availableSizes: ["S", "M", "L", "XL"],
          category: "KIT",
          inStock: true,
          featured: false
        }];
        var initialSponsors = [{
          id: "sponsor-netvibe",
          name: "NetVibe Digital Solutions",
          nameAm: "ኔትቫይብ ዲጂታል ሶሉሽንስ",
          nameOm: "NetVibe Furmaata Dijitaalaa",
          tier: "Technology Partner & App Developer",
          tierAm: "ኦፊሴላዊ የቴክኖሎጂ አጋር እና የመተግበሪያ አበልፃጊ",
          imageUrl: "/assets/aistudio/photo_2026-10-28_11.47.50_335eef24.jpeg",
          websiteUrl: "https://netvibesolutions.com",
          description: "Ideas • Code • Impact — Proudly architected & developed the official Halaba City FC digital platform & Android app.",
          descriptionAm: "ሀሳብ • ኮድ • ተፅዕኖ — የሀላባ ከተማ እግር ኳስ ክለብን ኦፊሴላዊ ድረ-ገጽ እና የሞባይል መተግበሪያ ያበለፀገ ድርጅት።",
          active: true,
          order: 1
        }, {
          id: "sponsor-halaba-union",
          name: "Halaba Agricultural & Berbere Union",
          nameAm: "የሀላባ በርበሬና ግብርና ህብረት ስራ ማህበር",
          nameOm: "Waldaa Hojii Gamtaa Qonnaa fi Mimmi’oo Halabaa",
          tier: "Principal Club Partner",
          tierAm: "ዋና የክለቡ አጋር",
          imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
          websiteUrl: "https://halabacity.gov.et",
          description: "Pride of Halaba — Cultivating the rich soil of our homeland and powering our champions on the national stage.",
          descriptionAm: "የበርበሬ ምድር ኩራት — የሀላባን ለም መሬትና የህዝባችንን ብርታት በመወከል ክለባችንን በታላቅ ኩራት እንደግፋለን።",
          active: true,
          order: 2
        }, {
          id: "sponsor-chapa",
          name: "Chapa Financial Technologies",
          nameAm: "ቻፓ የፋይናንስ ቴክኖሎጂስ",
          nameOm: "Chapa Teeknooloojii Faayinaansii",
          tier: "Official Digital Payment Partner",
          tierAm: "ኦፊሴላዊ የዲጂታል ክፍያ አጋር",
          imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
          websiteUrl: "https://chapa.co",
          description: "Fast, secure and seamless online payments for Halaba City FC memberships, donations, and official merchandise.",
          descriptionAm: "ለክለቡ አባላት ምዝገባ፣ እርዳታና ማሊያ ግዢ ፈጣንና አስተማማኝ የክፍያ አገልግሎት የሚሰጥ የቴክኖሎጂ አጋር።",
          active: true,
          order: 3
        }, {
          id: "sponsor-sports-commission",
          name: "Halaba City Sports & Youth Commission",
          nameAm: "የሀላባ ከተማ ወጣቶችና ስፖርት ኮሚሽን",
          nameOm: "Koomishinii Dargaggootaa fi Ispoortii Magaalaa Halabaa",
          tier: "Civic Governing Partner",
          tierAm: "ኦፊሴላዊ የመንግስትና ማህበረሰብ አጋር",
          imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
          websiteUrl: "https://halabacity.gov.et",
          description: "Building sports infrastructure, nurturing young talents, and uniting the community under one banner.",
          descriptionAm: "የስፖርት መሰረተ-ልማቶችን በማስፋፋት፣ ወጣት ተሰጥኦዎችን በማፍራትና ማህበረሰቡን በስፖርት አንድ የሚያደርግ ተቋም።",
          active: true,
          order: 4
        }];
        var translations = {
          en: {
            // Navigation
            navHome: "Home",
            navFixtures: "Fixtures & Results",
            navStandings: "Standings",
            navNews: "News & Media",
            navMembership: "Membership",
            navShop: "Shop",
            navDonate: "Donate",
            navAbout: "About Club",
            navContact: "Contact",
            navAdmin: "Admin Portal",
            navJoinBtn: "Join the Club",
            est1966: "Est. 1966",
            nativeApp: "Native App",
            installApp: "Install App",
            clubDossierBtn: "EPL Official Club Dossier",
            active: "Active",
            selectLanguage: "Select Language",
            // Hero
            heroTag: "OFFICIAL CLUB PORTAL",
            heroTitle: "HALABA CITY FC",
            heroNickname: "“Berberewochu” (በርበሬዎቹ)",
            heroSubtitle: "Passion, Pride & Football Heritage of Halaba Since 1966",
            heroBtnNews: "Latest News",
            heroBtnFixtures: "Fixtures & Results",
            heroBtnJoin: "Become a Member",
            // Quick Stats / Info banner
            foundedLabel: "Founded",
            foundedValue: "1966 E.C. / G.C.",
            homeGroundLabel: "Home Stadium",
            homeGroundValue: "Halaba Stadium, Halaba Kulito",
            leagueLabel: "Competition",
            leagueValue: "Ethiopian Premier League (Top Tier) • 1st Place",
            nicknameLabel: "Club Nickname",
            // Next match / match preview
            nextMatchTitle: "Upcoming Match",
            latestResultTitle: "Latest Result",
            matchCountdown: "Kickoff in",
            viewMatchDetails: "Match Details",
            allFixturesBtn: "View All Fixtures",
            fullStandingsBtn: "Full League Table",
            nextHalabaMatch: "Next Halaba Match:",
            nextHalabaGame: "Next Game: Halaba City FC",
            latestHalabaResult: "Latest Halaba Result",
            home: "Home",
            away: "Away",
            vs: "VS",
            fullTime: "Full Time",
            liveNow: "Live Now",
            upcoming: "Upcoming",
            eatTimezone: "EAT",
            matchesShown: "Matches Shown",
            // Home sections
            latestClubNews: "Latest Club News",
            newsSubtitle: "Stay updated with match reports, transfers, and official club announcements.",
            standingsPreviewTitle: "Ethiopian Premier League Standings",
            membershipCtaTitle: "Be Part of the Berberewochu Family",
            membershipCtaDesc: "Join thousands of passionate Halaba City FC supporters. Get official membership, priority tickets, digital fan ID, and exclusive club updates.",
            joinNowBtn: "Register as Member",
            // Match Center
            fixturesTitle: "Fixtures & Results",
            fixturesSubtitle: "Official 2026/27 Ethiopian Premier League match schedule, verified results, and match reports.",
            filterAll: "All Matches",
            filterUpcoming: "Upcoming",
            filterResults: "Results",
            filterCompetition: "Filter by Competition",
            allCompetitions: "All Competitions",
            matchDetailsModalTitle: "Official Match Center",
            matchVenue: "Venue",
            matchDate: "Date & Time",
            matchStatus: "Status",
            attendance: "Attendance",
            referee: "Referee",
            goalsSummary: "Goals & Key Events",
            noMatchesFound: "No matches found matching your filters.",
            officialEplFixtures: "Official EPL Fixtures",
            eplCampaign: "Ethiopian Premier League Campaign 2026 / 2027",
            matchScheduleHeadline: "HALABA City FC Match Schedule & Live Updates",
            liveAutoUpdateDesc: "Live score progress, goal notifications, and match minute simulation run automatically every 30 seconds.",
            clubDossier: "Club Dossier",
            simulateLiveAction: "Simulate Live Action",
            // Standings
            standingsTitle: "Ethiopian Premier League Table",
            standingsSubtitle: "Official 2026/27 season standings (Halaba Ketema undefeated with 5 points in Top 5).",
            pos: "Pos",
            club: "Club",
            played: "P",
            won: "W",
            drawn: "D",
            lost: "L",
            gf: "GF",
            ga: "GA",
            gd: "GD",
            pts: "Pts",
            form: "Form",
            zonePromotion: "League Leaders / CAF Champions League",
            zoneMidtable: "Mid-Table",
            zoneRelegation: "Relegation Zone",
            standingsEplBadge: "Official Ethiopian Premier League • Season 2026 / 2027 (18 Clubs)",
            syncTheSportsDb: "Sync TheSportsDB",
            resetTable: "Reset Table",
            officialLeagueStatus: "Official League Status:",
            firstPlace: "1st Place",
            secondPlace: "2nd Place",
            thirdPlace: "3rd Place",
            cafChampionsLeagueQual: "1st Place • CAF Champions League Qualification",
            cafConfedCupQual: "2nd Place • CAF Confederation Cup Qualification",
            relegationZoneDesc: "Relegation Zone (Positions 16–18)",
            officialClub: "Official Club",
            points: "Points",
            record: "Record",
            goalsGd: "Goals (GD)",
            // News
            newsTitle: "Club News & Media",
            searchNewsPlaceholder: "Search articles, match reports...",
            catAll: "All News",
            catClubNews: "Club News",
            catMatchReports: "Match Reports",
            catTransfers: "Transfers",
            catInterviews: "Interviews",
            catAcademy: "Youth Academy",
            catCommunity: "Community & Fans",
            readArticle: "Read Full Story",
            backToNews: "Back to News",
            publishedOn: "Published",
            author: "By",
            mediaCenterTag: "Halaba City FC Media Center",
            featuredStory: "Featured Story",
            allStories: "All Stories",
            noArticlesFound: "No articles found matching your criteria.",
            copied: "Copied!",
            mediaCommsFooter: "HALABA City FC Official Media & Communications",
            // Membership
            membershipTitle: "Official Supporter Membership",
            membershipSubtitle: "Support HALABA City FC directly. Official fan registry, membership ID card, and matchday privileges.",
            membershipPlansTitle: "Choose Your Membership Category",
            membershipSubtitleChoice: "Choose your membership tier. The corresponding payment amount (200, 500, or 1000 ETB) is initialized via Chapa.",
            tierSupporter: "Supporter Member",
            tierSupporterDesc: "Official digital membership for passionate fans worldwide (200 ETB). Official fan ID and club alerts.",
            tierStandard: "Standard Member",
            tierStandardDesc: "Official physical & digital member card, 10% merchandise discount, and priority matchday tickets at Halaba Stadium.",
            tierPremium: "Gold VIP Member",
            tierPremiumDesc: "VIP stadium access, annual official club jersey voucher, direct invitation to club general meetings, and special recognition.",
            selectTier: "Select Tier",
            selectedTier: "Selected",
            tier1: "Tier 1",
            tier2: "Tier 2",
            tier3: "Tier 3",
            popularChoice: "Popular Choice",
            etbPaid: "ETB PAID",
            memberName: "Member Name",
            regionLabel: "Region",
            seasonLabel: "Season",
            idPhoto: "ID PHOTO",
            idReference: "ID REFERENCE",
            verifiedPaid: "VERIFIED PAID",
            chapaTxRef: "Chapa TX Ref:",
            uploadPhotoLabel: "Upload Member Photo (Passport / Selfie)",
            photoHint: "PNG, JPG up to 5MB",
            chapaSecured: "Chapa Secured Payment",
            supportedPaymentMethods: "Supported methods: Telebirr, CBE Birr, Awash, Cards",
            // Form
            formTitle: "Membership Application Form",
            fullName: "Full Name",
            fullNamePlaceholder: "e.g. Abebe Bekele",
            dob: "Date of Birth",
            gender: "Gender (Optional)",
            genderMale: "Male",
            genderFemale: "Female",
            genderOther: "Prefer not to say",
            phone: "Phone Number",
            phonePlaceholder: "+251 91 234 5678",
            email: "Email Address (Optional)",
            emailPlaceholder: "you@example.com",
            cityOrRegion: "City / Region",
            cityPlaceholder: "e.g. Halaba Kulito / Hawassa / Addis Ababa",
            prefLanguage: "Preferred Communication Language",
            agreePrivacy: "I agree to the HALABA City FC membership terms and privacy policy.",
            submitApplication: "Submit Membership Application",
            submitting: "Processing Application...",
            registrationSuccessTitle: "Registration Successful!",
            registrationSuccessDesc: "Welcome to the Berberewochu family! Your official supporter registration has been recorded in the club database.",
            yourRefNumber: "Membership Reference Number",
            digitalCardTitle: "Official Halaba City FC Digital Fan ID",
            downloadCard: "Print / Save Fan Pass",
            newRegistrationBtn: "Register Another Supporter",
            // Validation
            errFullName: "Please enter your full name.",
            errDob: "Please select your date of birth.",
            errPhone: "Please provide a valid phone number (at least 9 digits).",
            errCity: "Please specify your city or region.",
            errAgree: "You must agree to the club terms to proceed.",
            // About Club
            aboutTitle: "About HALABA City FC",
            aboutSubtitle: "Our story, our cultural identity, and our journey in Ethiopian football.",
            clubHistoryTitle: "Club History & Origins",
            historyP1: "Founded in 1966 in Halaba Kulito, Central Ethiopia, HALABA City FC has stood as a beacon of sportsmanship, unity, and regional pride for over six decades.",
            historyP2: "The club represents the resilience, work ethic, and vibrant cultural heritage of the Halaba community. Competing across regional and national leagues, Halaba City FC continues to nurture raw Ethiopian talent and bring communities together.",
            identityTitle: "The Berberewochu Identity & Crest",
            identityDesc: "Halaba is renowned across Ethiopia as the premier capital of rich, aromatic red pepper (Berbere). Our nickname “Berberewochu” (The Chilies) reflects this spice, vigor, and fierce determination on the football pitch.",
            crestSymbolism: "The official crest features the iconic dual red chili peppers flanking the football, topped by the traditional woven Halaba hat, resting upon an emerald green and gold banner inscribed in Ge’ez: “ሀላባ ከተማ እግርኳስ ክለብ”.",
            stadiumTitle: "Home Ground: Halaba Stadium",
            stadiumDesc: "Halaba Stadium serves as the fortress of the Berberewochu, hosting up to 15,000 roaring supporters on matchdays with its electric atmosphere and passionate red-and-green crowds.",
            squadTitle: "First Team Squad",
            managementTitle: "Club Leadership & Coaching Staff",
            heritageBadge: "Football Heritage Since 1966",
            foundedEc: "Founded: 1966 E.C. (Ethiopian Calendar)",
            centralEthiopia: "Central Ethiopia",
            officialColorsDesc: "Official Colors: Scarlet Red, Emerald Green, Gold",
            prideOfHalaba: "Pride of Halaba",
            ourMission: "Our Mission",
            missionDesc: "To develop elite athletic talent in Halaba, champion fair play and sportsmanship, and compete at the highest level of the Ethiopian football pyramid while serving as an engine of youth empowerment.",
            ourVision: "Our Vision",
            visionDesc: "To establish HALABA City FC as an elite, self-sustaining modern football institution with state-of-the-art training facilities and a continuous pathway from grassroots academy to national team representation.",
            honorsTitle: "Honors & Milestones",
            honor1: "Regional Championship Winners",
            honor2: "Ethiopian Higher League Contender",
            honor3: "National Fair Play Award Finalist",
            honor4: "Over 6 Decades of Continuous Football",
            stadiumFortress: "Fortress of the Berberewochu",
            capacityLabel: "Capacity",
            pitchSurfaceLabel: "Pitch Surface",
            locationLabel: "Location",
            atmosphereLabel: "Atmosphere",
            electrifying: "Electrifying",
            naturalGrass: "Natural Grass",
            appearances: "Apps",
            goals: "Goals",
            captain: "Captain",
            // Contact
            contactTitle: "Contact HALABA City FC",
            contactSubtitle: "Reach out to the club headquarters, media relations, or ticket office.",
            officeAddress: "Club Headquarters: Halaba Kulito, Central Ethiopia Regional State",
            phoneLabel: "Telephone",
            emailLabel: "Email",
            sendUsMessage: "Send Us a Message",
            messageSubject: "Subject",
            messageBody: "Your Message",
            sendMessageBtn: "Send Message",
            messageSentSuccess: "Thank you! Your message has been received by Halaba City FC staff.",
            officialCommunications: "Official Communications",
            clubHeadquarters: "Club Headquarters",
            addressLabel: "Address",
            officialPhoneLabel: "Official Phone",
            inquiriesPressLabel: "Inquiries & Press",
            generalLabel: "General",
            mediaLabel: "Media",
            ticketsLabel: "Tickets",
            officeHoursLabel: "Office Hours",
            officialSocialChannels: "Official Social Channels",
            messageTransmitted: "Message Transmitted",
            yourName: "Your Name",
            emailOrPhone: "Email or Phone Number",
            // Admin
            adminTitle: "Club Administration Portal",
            adminSubtitle: "Authorized club staff dashboard for fixtures, news, squad, and membership data.",
            adminLoginTitle: "Club Staff Login",
            adminUsername: "Staff Username or Email",
            adminPassword: "Password",
            adminLoginBtn: "Access Dashboard",
            adminLogoutBtn: "Log Out",
            adminTabMembers: "Memberships",
            adminTabNews: "News Management",
            adminTabFixtures: "Fixtures & Scores",
            adminTabStandings: "Standings Editor",
            adminTabSquad: "Squad & Staff",
            adminTabSettings: "Club Config & DB",
            demoNotice: "Demonstration Mode: The website is currently operating with local and simulated storage. You can fully test editing news, updating match scores, approving memberships, and adjusting league standings. Connect your production Firebase / PostgreSQL database when ready for cloud deployment.",
            demoQuickLogin: "Demo Quick Fill (Staff)",
            approveBtn: "Approve",
            rejectBtn: "Reject",
            statusApproved: "Approved",
            statusPending: "Pending",
            statusRejected: "Rejected",
            exportCsv: "Export CSV",
            // Live Auto-Update
            liveAutoSyncActive: "Live Auto-Update Active",
            liveAutoSyncPaused: "Live Auto-Update Paused",
            nextSyncIn: "Next Refresh",
            syncingStatus: "Syncing...",
            syncNowBtn: "Sync Now",
            simulateGoalBtn: "Simulate Live Goal",
            syncOfficialLeagueBtn: "Sync Official League",
            updateFrequency: "Update Frequency",
            paused: "Paused",
            autoSyncEngineDesc: "Automated match schedule and standings recalculation engine",
            // Shop & Merchandise
            shopTitle: "Official Club Shop",
            shopSubtitle: "Wear the colors of Halaba City FC with authentic matchday jerseys, training kits, and supporter merchandise.",
            buyNowBtn: "Buy Now",
            itemPrice: "Price",
            availableSizesLabel: "Available Sizes",
            sizeGuide: "Size",
            selectSize: "Select Size",
            inStockLabel: "In Stock",
            outOfStockLabel: "Sold Out",
            deliveryAddressLabel: "Delivery Address",
            streetAddress: "Street Address / House No.",
            city: "City",
            subcityRegion: "Subcity / Kebele / Region",
            orderSummary: "Order Summary",
            checkoutTitle: "Jersey Order Checkout",
            checkoutSubtitle: "Enter your delivery details to proceed to secure Chapa payment.",
            proceedToPayment: "Pay with Chapa",
            orderSuccessTitle: "Order Placed Successfully!",
            orderSuccessMsg: "Your official Halaba City FC order has been confirmed. Our team will prepare delivery to your address.",
            shopBadge: "Official Halaba City FC Merchandise",
            perkAuthentic: "100% Authentic Club Licensing",
            perkDelivery: "Doorstep Delivery Across Ethiopia",
            perkPayment: "Instant Telebirr & CBE Payment",
            manageStoreAdmin: "Manage Store in Admin",
            liveFirestoreSync: "Live Firestore Sync",
            showing: "Showing",
            items: "items",
            noMerchFound: "No Merchandise Found",
            noMerchFoundDesc: "No items match the selected category. Check back soon for newly listed official match kits!",
            loadingInventory: "Loading Live Inventory...",
            officialTag: "2026/27 Official",
            shopCtaTitle: "Support the Club & Get 15% Off Official Merchandise",
            shopCtaDesc: "Official Halaba City FC registered supporters enjoy special discounts on matchday kits, priority ticket allocations, and digital fan cards.",
            donateNow: "Donate Now",
            etbCurrency: "ETB",
            // Donations
            donateTitle: "Support Halaba City FC",
            donateSubtitle: "Fuel the Berberewochu journey in the Ethiopian Premier League, youth development, and stadium facilities.",
            donateBtn: "Donate to Club",
            heroDonateBtn: "Support Club / Donate",
            selectDonationAmount: "Choose Donation Amount (ETB)",
            customAmountLabel: "Custom Amount (ETB)",
            enterAmountPlaceholder: "Enter custom amount...",
            donationPurposeLabel: "Donation Purpose",
            purposeGeneral: "General Club & Matchday Support",
            purposeAcademy: "Halaba Youth Academy & Equipment",
            purposeStadium: "Stadium & Fan Facility Improvement",
            donorNameLabel: "Your Full Name / Supporter Name",
            donorPhoneLabel: "Phone Number (Telebirr / CBE)",
            donorEmailLabel: "Email Address (Optional)",
            donationSuccessTitle: "Thank You for Your Generosity!",
            donationSuccessMsg: "Your support means everything to Halaba City FC and the Berberewochu community.",
            // Footer
            footerRights: "All Rights Reserved. Official Website of HALABA City FC (Berberewochu).",
            footerMotto: "Red & Green Forever • Strength, Pride, Passion",
            quickLinks: "Quick Links",
            socialMedia: "Follow Berberewochu",
            footerOfficeStadium: "Club Office & Stadium",
            footerAboutClub: "Official football club of Halaba Kulito, Central Ethiopia. Proudly nicknamed Berberewochu (በርበሬዎቹ), carrying the cultural spirit and athletic passion of our people.",
            authorizedStaff: "Authorized Staff",
            systemEnv: "System Environment:",
            systemEnvDesc: "Running with responsive client-side persistence and active simulated club database. Data modified in the Admin Dashboard is saved locally and immediately reflects across all pages.",
            openAdminDb: "Open Admin & DB Settings →",
            officialTelegram: "Official Telegram Channel",
            facebookPage: "Facebook Page",
            youtubeHighlights: "YouTube Match Highlights",
            halabaKulitoMotto: 'Halaba Kulito, Central Ethiopia • Proudly "Berberewochu"'
          },
          am: {
            // Navigation
            navHome: "ዋና ገጽ",
            navFixtures: "ጨዋታዎችና ውጤቶች",
            navStandings: "የደረጃ ሰንጠረዥ",
            navNews: "ዜና እና ሚዲያ",
            navMembership: "የደጋፊዎች አባልነት",
            navShop: "ሱቅ",
            navDonate: "ልገሳ",
            navAbout: "ስለ ክለቡ",
            navContact: "ያግኙን",
            navAdmin: "የአስተዳዳሪ ፖርታል",
            navJoinBtn: "አባል ይሁኑ",
            est1966: "በ1966 ዓ.ም ተመሠረተ",
            nativeApp: "ይፋዊ መተግበሪያ",
            installApp: "መተግበሪያውን ጫን",
            clubDossierBtn: "ይፋዊ የክለቡ ሰነድ",
            active: "ነቅቷል",
            selectLanguage: "ቋንቋ ይምረጡ",
            // Hero
            heroTag: "ይፋዊ የክለቡ ፖርታል",
            heroTitle: "ሀላባ ከተማ እግርኳስ ክለብ",
            heroNickname: "“በርበሬዎቹ”",
            heroSubtitle: "የሀላባ እግርኳስ ኩራትና ወኔ ከ1966 ጀምሮ",
            heroBtnNews: "የቅርብ ዜናዎች",
            heroBtnFixtures: "ጨዋታዎችና ውጤቶች",
            heroBtnJoin: "አባል ይሁኑ",
            // Quick Stats / Info banner
            foundedLabel: "የተመሰረተበት ዓመት",
            foundedValue: "1966 ዓ.ም",
            homeGroundLabel: "የሜዳ ስታዲየም",
            homeGroundValue: "ሀላባ ስታዲየም፣ ሀላባ ቁሊቶ",
            leagueLabel: "ውድድር",
            leagueValue: "የኢትዮጵያ ፕሪሚየር ሊግ (ከፍተኛ ዲቪዚዮን) • 1ኛ ደረጃ",
            nicknameLabel: "የክለቡ ቅጽል ስም",
            // Next match / match preview
            nextMatchTitle: "ቀጣይ ጨዋታ",
            latestResultTitle: "የቅርብ ውጤት",
            matchCountdown: "ጨዋታው ሊጀመር",
            viewMatchDetails: "የጨዋታው ዝርዝር",
            allFixturesBtn: "ሁሉንም ጨዋታዎች ይመልከቱ",
            fullStandingsBtn: "ሙሉ የደረጃ ሰንጠረዥ",
            nextHalabaMatch: "ቀጣይ የሀላባ ጨዋታ፡",
            nextHalabaGame: "ቀጣይ ጨዋታ፡ ሀላባ ከተማ",
            latestHalabaResult: "የቅርብ የሀላባ ውጤት",
            home: "የሜዳ",
            away: "የሜዳ ውጪ",
            vs: "ከ",
            fullTime: "ሙሉ ጊዜ",
            liveNow: "በቀጥታ በመካሄድ ላይ",
            upcoming: "የሚመጣ",
            eatTimezone: "የኢትዮጵያ ሰዓት",
            matchesShown: "ጨዋታዎች ታይተዋል",
            // Home sections
            latestClubNews: "የክለቡ አዳዲስ ዜናዎች",
            newsSubtitle: "የጨዋታ ሪፖርቶች፣ የዝውውር ዜናዎችና ይፋዊ መግለጫዎችን ይከታተሉ።",
            standingsPreviewTitle: "የኢትዮጵያ ፕሪሚየር ሊግ የደረጃ ሰንጠረዥ",
            membershipCtaTitle: "የበርበሬዎቹ ቤተሰብ ይሁኑ",
            membershipCtaDesc: "በሺዎች ከሚቆጠሩ ታማኝ የሀላባ ከተማ ደጋፊዎች ጋር ይቀላቀሉ። ይፋዊ አባልነት፣ የዲጂታል መታወቂያ እና ልዩ መረጃዎችን ያግኙ።",
            joinNowBtn: "አሁን ይመዝገቡ",
            // Match Center
            fixturesTitle: "ጨዋታዎችና ውጤቶች",
            fixturesSubtitle: "የ2026/2027 የኢትዮጵያ ፕሪሚየር ሊግ የውድድር ዘመን ሙሉ የጨዋታ መርሃ-ግብር እና ውጤቶች።",
            filterAll: "ሁሉም ጨዋታዎች",
            filterUpcoming: "የሚመጡ ጨዋታዎች",
            filterResults: "የተደረጉ ጨዋታዎች",
            filterCompetition: "በውድድር አይነት ይምረጡ",
            allCompetitions: "ሁሉም ውድድሮች",
            matchDetailsModalTitle: "ይፋዊ የጨዋታ ማዕከል",
            matchVenue: "የተደረገበት ሜዳ",
            matchDate: "ቀን እና ሰዓት",
            matchStatus: "ሁኔታ",
            attendance: "የተመልካች ቁጥር",
            referee: "ዋና ዳኛ",
            goalsSummary: "የተቆጠሩ ግቦች እና ክስተቶች",
            noMatchesFound: "የተመረጠውን መስፈርት የሚያሟላ ጨዋታ አልተገኘም።",
            officialEplFixtures: "ይፋዊ የፕሪሚየር ሊግ ጨዋታዎች",
            eplCampaign: "የኢትዮጵያ ፕሪሚየር ሊግ የውድድር ዘመን 2026 / 2027",
            matchScheduleHeadline: "የሀላባ ከተማ እግርኳስ ክለብ የጨዋታ መርሃ-ግብር እና የቀጥታ ውጤት",
            liveAutoUpdateDesc: "የቀጥታ ውጤት፣ የግብ ማሳወቂያዎች እና የጨዋታ ደቂቃ በየ30 ሰከንዱ በራስ-ሰር ይዘምናል።",
            clubDossier: "የክለቡ ሰነድ",
            simulateLiveAction: "የቀጥታ ጨዋታ ሙከራ",
            // Standings
            standingsTitle: "የኢትዮጵያ ፕሪሚየር ሊግ ደረጃ ሰንጠረዥ",
            standingsSubtitle: "የ2026/27 የውድድር ዘመን ይፋዊ የደረጃ ሰንጠረዥ (ሀላባ ከተማ በ5 ነጥብ ያለመሸነፍ ጉዞ)።",
            pos: "ደረጃ",
            club: "ክለብ",
            played: "ተ",
            won: "አ",
            drawn: "አቻ",
            lost: "ተሸ",
            gf: "የገባ",
            ga: "የተቆጠረ",
            gd: "ግብ ል",
            pts: "ነጥብ",
            form: "ቅጽ",
            zonePromotion: "የሊጉ መሪ / የካፍ ቻምፒየንስ ሊግ",
            zoneMidtable: "መካከለኛ ደረጃ",
            zoneRelegation: "የመውረድ ስጋት",
            standingsEplBadge: "ይፋዊ የኢትዮጵያ ፕሪሚየር ሊግ • የውድድር ዘመን 2026 / 2027 (18 ክለቦች)",
            syncTheSportsDb: "ከ TheSportsDB አድስ",
            resetTable: "ሰንጠረዡን ወደ ነበረበት መልስ",
            officialLeagueStatus: "ይፋዊ የሊግ ደረጃ፡",
            firstPlace: "1ኛ ደረጃ",
            secondPlace: "2ኛ ደረጃ",
            thirdPlace: "3ኛ ደረጃ",
            cafChampionsLeagueQual: "1ኛ ደረጃ • የካፍ ቻምፒየንስ ሊግ ማጣሪያ",
            cafConfedCupQual: "2ኛ ደረጃ • የካፍ ኮንፌዴሬሽን ዋንጫ ማጣሪያ",
            relegationZoneDesc: "የመውረድ ስጋት ዞን (ደረጃ 16–18)",
            officialClub: "ይፋዊ ክለብ",
            points: "ነጥብ",
            record: "ሪከርድ",
            goalsGd: "ግቦች (ልዩነት)",
            // News
            newsTitle: "የክለቡ ዜና እና መረጃዎች",
            searchNewsPlaceholder: "ዜናዎችን ይፈልጉ...",
            catAll: "ሁሉም ዜናዎች",
            catClubNews: "የክለብ ዜና",
            catMatchReports: "የጨዋታ ሪፖርት",
            catTransfers: "ዝውውሮች",
            catInterviews: "ቃለ-ምልልስ",
            catAcademy: "ታዳጊዎች አካዳሚ",
            catCommunity: "ደጋፊዎችና ማህበረሰብ",
            readArticle: "ሙሉውን አንብብ",
            backToNews: "ወደ ዜና ዝርዝር ተመለስ",
            publishedOn: "የወጣበት ቀን",
            author: "ጸሐፊ",
            mediaCenterTag: "የሀላባ ከተማ እግርኳስ ክለብ የሚዲያ ማዕከል",
            featuredStory: "ዋና ዜና",
            allStories: "ሁሉም ዜናዎች",
            noArticlesFound: "የተመረጠውን መስፈርት የሚያሟላ ዜና አልተገኘም።",
            copied: "ተቀድቷል!",
            mediaCommsFooter: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ ሚዲያ እና ኮሙኒኬሽን",
            // Membership
            membershipTitle: "የክለቡ ደጋፊዎች ይፋዊ አባልነት",
            membershipSubtitle: "ሀላባ ከተማ እግርኳስ ክለብን በቀጥታ ይደግፉ። ይፋዊ የደጋፊ መታወቂያ እና ልዩ መብቶች።",
            membershipPlansTitle: "የአባልነት ደረጃዎን ይምረጡ",
            membershipSubtitleChoice: "የአባልነት ደረጃዎን ይምረጡ። ክፍያው (200፣ 500 ወይም 1000 ብር) በቻፓ አማካኝነት ይፈጸማል።",
            tierSupporter: "የደጋፊ አባል (Supporter)",
            tierSupporterDesc: "ለሁሉም ደጋፊዎች ይፋዊ የዲጂታል አባልነት ካርድ እና የክለቡ መረጃዎች (200 ብር)።",
            tierStandard: "መደበኛ አባል (Standard)",
            tierStandardDesc: "የአባልነት ካርድ፣ የትኬት ቅድሚያ እና የ10% የክለብ መለያ ቅናሽ።",
            tierPremium: "ወርቅ ቪአይፒ አባል (Gold VIP)",
            tierPremiumDesc: "የቪአይፒ ስታዲየም መቀመጫ፣ ዓመታዊ ይፋዊ ማሊያ፣ እና በክለቡ ጠቅላላ ጉባዔ የመሳተፍ መብት።",
            selectTier: "ይህን ምረጥ",
            selectedTier: "ተመርጧል",
            tier1: "ደረጃ 1",
            tier2: "ደረጃ 2",
            tier3: "ደረጃ 3",
            popularChoice: "ተመራጭ ደረጃ",
            etbPaid: "ብር ተከፍሏል",
            memberName: "የአባሉ ስም",
            regionLabel: "ክልል",
            seasonLabel: "የውድድር ዘመን",
            idPhoto: "የመታወቂያ ፎቶ",
            idReference: "የመታወቂያ መለያ",
            verifiedPaid: "ክፍያው የተረጋገጠ",
            chapaTxRef: "የቻፓ የክፍያ መለያ ቁጥር፡",
            uploadPhotoLabel: "የአባሉን ፎቶ ይጫኑ (ፓስፖርት ወይም የራስ ፎቶ)",
            photoHint: "PNG ወይም JPG እስከ 5 ሜጋባይት",
            chapaSecured: "በቻፓ የተረጋገጠ ደህንነቱ የተጠበቀ ክፍያ",
            supportedPaymentMethods: "የሚደገፉ የክፍያ አማራጮች፡ ቴሌብር፣ የኢትዮጵያ ንግድ ባንክ፣ አዋሽ ባንክ እና ካርዶች",
            // Form
            formTitle: "የደጋፊዎች አባልነት ማመልከቻ",
            fullName: "ሙሉ ስም",
            fullNamePlaceholder: "ለምሳሌ፡ አበበ በቀለ",
            dob: "የትውልድ ቀን",
            gender: "ጾታ (አማራጭ)",
            genderMale: "ወንድ",
            genderFemale: "ሴት",
            genderOther: "መግለጽ አልፈልግም",
            phone: "ስልክ ቁጥር",
            phonePlaceholder: "+251 91 234 5678",
            email: "ኢሜይል (አማራጭ)",
            emailPlaceholder: "you@example.com",
            cityOrRegion: "ከተማ ወይም ክልል",
            cityPlaceholder: "ለምሳሌ፡ ሀላባ ቁሊቶ / ሀዋሳ / አዲስ አበባ",
            prefLanguage: "የመገናኛ ቋንቋ ምርጫ",
            agreePrivacy: "በሀላባ ከተማ እግርኳስ ክለብ የአባልነት ደንቦችና መመሪያዎች እስማማለሁ።",
            submitApplication: "የአባልነት ማመልከቻ አስገባ",
            submitting: "በማስኬድ ላይ...",
            registrationSuccessTitle: "ምዝገባው በተሳካ ሁኔታ ተጠናቋል!",
            registrationSuccessDesc: "እንኳን ወደ በርበሬዎቹ ቤተሰብ በደህና መጡ! ምዝገባዎ በክለቡ የውሂብ ጎታ ውስጥ ተመዝግቧል።",
            yourRefNumber: "የአባልነት መለያ ቁጥር",
            digitalCardTitle: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ ዲጂታል መታወቂያ",
            downloadCard: "መታወቂያውን አትም / አስቀምጥ",
            newRegistrationBtn: "ሌላ ደጋፊ መዝግብ",
            // Validation
            errFullName: "እባክዎ ሙሉ ስምዎን ያስገቡ።",
            errDob: "እባክዎ የትውልድ ቀንዎን ይምረጡ።",
            errPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።",
            errCity: "እባክዎ ከተማዎን ወይም ክልልዎን ይጥቀሱ።",
            errAgree: "ለመቀጠል በክለቡ ደንቦች መስማማት አለብዎት።",
            // About Club
            aboutTitle: "ስለ ሀላባ ከተማ እግርኳስ ክለብ",
            aboutSubtitle: "ታሪካችን፣ ባህላዊ መለያችን እና በኢትዮጵያ እግር ኳስ ጉዟችን።",
            clubHistoryTitle: "የክለቡ ታሪክ እና አመሰራረት",
            historyP1: "በ1966 ዓ.ም በሀላባ ቁሊቶ የተመሰረተው ሀላባ ከተማ እግርኳስ ክለብ ላለፉት ስድስት አስርት ዓመታት የስፖርታዊ ጨዋነት፣ የአንድነት እና የክልሉ ኩራት መገለጫ ሆኖ ቆይቷል።",
            historyP2: "ክለቡ የሀላባን ማህበረሰብ ጽናት፣ ታታሪነት እና ደማቅ ባህል በስፖርቱ መድረክ ይወክላል። በርካታ ተስፋ የተጣለባቸውን ወጣት ታዳጊዎችን በማፍራት ይታወቃል።",
            identityTitle: "የበርበሬዎቹ መለያ እና አርማ",
            identityDesc: "ሀላባ በመላው ኢትዮጵያ በጥራትና በመዓዛው በታወቀው ደማቁ ቀይ በርበሬ ትታወቃለች። የክለባችን ቅጽል ስም “በርበሬዎቹ” በሜዳ ላይ ያለንን ብርታትና ወኔ ያመለክታል።",
            crestSymbolism: "ይፋዊው አርማ ሁለቱ ታዋቂ ቀይ የበርበሬ ፍሬዎች፣ የሀላባ ባህላዊ ቆብ፣ እግር ኳስ እና አረንጓዴው ሪባን በግዕዝ ጽሁፍ “ሀላባ ከተማ እግርኳስ ክለብ” ተቀምጠውበታል።",
            stadiumTitle: "የሜዳ ስታዲየም፡ ሀላባ ስታዲየም",
            stadiumDesc: "ሀላባ ስታዲየም እስከ 15,000 የሚደርሱ ቀይና አረንጓዴ የለበሱ ደጋፊዎችን በደመቀ ሁኔታ የሚያስተናግድ የበርበሬዎቹ ምሽግ ነው።",
            squadTitle: "የዋናው ቡድን ተጫዋቾች",
            managementTitle: "የክለቡ አመራር እና የአሰልጣኝ ቡድን",
            heritageBadge: "የእግርኳስ ቅርስ ከ1966 ዓ.ም ጀምሮ",
            foundedEc: "የተመሰረተበት ዓመት፡ 1966 ዓ.ም (የኢትዮጵያ ዘመን አቆጣጠር)",
            centralEthiopia: "ማዕከላዊ ኢትዮጵያ",
            officialColorsDesc: "ይፋዊ ቀለማት፡ ደማቅ ቀይ፣ ኤመራልድ አረንጓዴ እና ወርቃማ",
            prideOfHalaba: "የሀላባ ኩራት",
            ourMission: "ተልዕኳችን",
            missionDesc: "በሀላባ ድንቅ ስፖርተኞችን ማፍራት፣ ስፖርታዊ ጨዋነትን ማስፈን፣ በከፍተኛው የኢትዮጵያ እግር ኳስ እርከን በብቃት መወዳደር እና የወጣቶች የትምህርትና የስራ አቅም መገንባት።",
            ourVision: "ራዕያችን",
            visionDesc: "ሀላባ ከተማ እግርኳስ ክለብን በዘመናዊ የስልጠና መሰረተ ልማት የታነጸ፣ ራሱን የቻለ እና ከታዳጊ አካዳሚ እስከ ብሔራዊ ቡድን የሚዘልቅ ቀጣይነት ያለው ተቋም ማድረግ።",
            honorsTitle: "ክብሮች እና ታሪካዊ ክስተቶች",
            honor1: "የክልል ሻምፒዮን ዋንጫ አሸናፊ",
            honor2: "የኢትዮጵያ ከፍተኛ ሊግ ጠንካራ ተፎካካሪ",
            honor3: "የብሔራዊ የስፖርታዊ ጨዋነት ተሸላሚ",
            honor4: "ከስድስት አስርት ዓመታት በላይ ቀጣይነት ያለው እግር ኳስ",
            stadiumFortress: "የበርበሬዎቹ ምሽግ",
            capacityLabel: "የተመልካች አቅም",
            pitchSurfaceLabel: "የሜዳው ሳር አይነት",
            locationLabel: "አድራሻ",
            atmosphereLabel: "የሜዳ ድባብ",
            electrifying: "ደማቅ እና አስደማሚ",
            naturalGrass: "ተፈጥሯዊ ሳር",
            appearances: "ተጫወተ",
            goals: "ግቦች",
            captain: "አምበል",
            // Contact
            contactTitle: "ሀላባ ከተማን ያግኙ",
            contactSubtitle: "ከክለቡ ዋና ቢሮ፣ የሚዲያ ክፍል ወይም የትኬት ቢሮ ጋር ይገናኙ።",
            officeAddress: "የክለቡ ዋና ጽ/ቤት፡ ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ",
            phoneLabel: "ስልክ",
            emailLabel: "ኢሜይል",
            sendUsMessage: "መልዕክት ይላኩልን",
            messageSubject: "ርዕስ",
            messageBody: "የመልዕክትዎ ዝርዝር",
            sendMessageBtn: "መልዕክት ላክ",
            messageSentSuccess: "እናመሰግናለን! መልዕክትዎ ለክለቡ ሰራተኞች ደርሷል።",
            officialCommunications: "ይፋዊ ግንኙነት",
            clubHeadquarters: "የክለቡ ዋና ቢሮ",
            addressLabel: "አድራሻ",
            officialPhoneLabel: "ይፋዊ ስልክ",
            inquiriesPressLabel: "ጥያቄዎች እና ሚዲያ",
            generalLabel: "አጠቃላይ",
            mediaLabel: "ሚዲያ",
            ticketsLabel: "ትኬት",
            officeHoursLabel: "የስራ ሰዓት",
            officialSocialChannels: "ይፋዊ የማህበራዊ ሚዲያ ገጾች",
            messageTransmitted: "መልዕክቱ ተልኳል",
            yourName: "ሙሉ ስምዎ",
            emailOrPhone: "ኢሜይል ወይም ስልክ ቁጥር",
            // Admin
            adminTitle: "የክለቡ አስተዳዳሪ ፖርታል",
            adminSubtitle: "የዜናዎች፣ የጨዋታዎች፣ የደረጃ ሰንጠረዥ እና የአባላት መረጃ ማስተዳደሪያ።",
            adminLoginTitle: "የክለቡ ሰራተኞች መግቢያ",
            adminUsername: "የተጠቃሚ ስም ወይም ኢሜይል",
            adminPassword: "የይለፍ ቃል",
            adminLoginBtn: "ግባ",
            adminLogoutBtn: "ውጣ",
            adminTabMembers: "የአባላት ዝርዝር",
            adminTabNews: "ዜናዎችን ማስተዳደር",
            adminTabFixtures: "ጨዋታዎችና ውጤቶች",
            adminTabStandings: "ደረጃ ሰንጠረዥ አርታኢ",
            adminTabSquad: "ተጫዋቾች እና አሰልጣኞች",
            adminTabSettings: "የክለቡ ቅንብሮች",
            demoNotice: "የሙከራ ሁነታ፡ ድረ-ገጹ በአሁኑ ጊዜ በሙከራና በቅድመ-ዕይታ ውሂብ እየሰራ ነው። ዜናዎችን ማከል፣ የጨዋታ ውጤቶችን ማስተካከል እና የአባላት ማመልከቻዎችን ማጽደቅ ይችላሉ።",
            demoQuickLogin: "ፈጣን የሙከራ መግቢያ",
            approveBtn: "አጽድቅ",
            rejectBtn: "ውድቅ አድርግ",
            statusApproved: "የጸደቀ",
            statusPending: "በመጠባበቅ ላይ",
            statusRejected: "ውድቅ የተደረገ",
            exportCsv: "በ-CSV አውርድ",
            // Live Auto-Update
            liveAutoSyncActive: "ቀጥታ አውቶማቲክ ማደስ ነቅቷል",
            liveAutoSyncPaused: "ቀጥታ ማደስ ቆሟል",
            nextSyncIn: "ቀጣይ ማደስ",
            syncingStatus: "በማደስ ላይ...",
            syncNowBtn: "አሁን አድስ",
            simulateGoalBtn: "የቀጥታ ግብ አስመስል",
            syncOfficialLeagueBtn: "ይፋዊ ሊግ አመሳስል",
            updateFrequency: "የማደሻ ድግግሞሽ",
            paused: "ቆሟል",
            autoSyncEngineDesc: "አውቶማቲክ የጨዋታ መርሃ-ግብር እና የሰንጠረዥ ማዘመኛ ሞተር",
            // Shop & Merchandise
            shopTitle: "ይፋዊ የክለቡ ሱቅ",
            shopSubtitle: "የበርበሬዎቹን ቀይና አረንጓዴ መለያ ማሊያዎች፣ የስፖርት ልብሶችና የደጋፊዎች ቁሳቁሶችን ይሸምቱ።",
            buyNowBtn: "አሁን ይግዙ",
            itemPrice: "ዋጋ",
            availableSizesLabel: "የሚገኙ መጠኖች",
            sizeGuide: "መጠን",
            selectSize: "መጠን ይምረጡ",
            inStockLabel: "አለቀቀረም (በክምችት አለ)",
            outOfStockLabel: "አልቋል",
            deliveryAddressLabel: "የመላኪያ አድራሻ",
            streetAddress: "የመንገድ አድራሻ / የቤት ቁጥር",
            city: "ከተማ",
            subcityRegion: "ክፍለ ከተማ / ቀበሌ / ክልል",
            orderSummary: "የትዕዛዝ ማጠቃለያ",
            checkoutTitle: "የማሊያ ትዕዛዝ ማጠቃለያ",
            checkoutSubtitle: "የመላኪያ መረጃዎችን በማስገባት በቻፓ በደህንነት ይክፈሉ።",
            proceedToPayment: "በቻፓ ይክፈሉ",
            orderSuccessTitle: "ትዕዛዝዎ በተሳካ ሁኔታ ተመዝግቧል!",
            orderSuccessMsg: "የሀላባ ከተማ ይፋዊ ትዕዛዝዎ ተረጋግጧል። በቅርቡ ወደ አድራሻዎ ይላካል።",
            shopBadge: "ይፋዊ የሀላባ ከተማ እግርኳስ ክለብ መገልገያዎች",
            perkAuthentic: "100% ይፋዊና ትክክለኛ የክለብ ምርት",
            perkDelivery: "በመላው ኢትዮጵያ አስተማማኝ ማድረስ",
            perkPayment: "በቴሌብርና በኢትዮጵያ ንግድ ባንክ ፈጣን ክፍያ",
            manageStoreAdmin: "መደብሩን በአስተዳዳሪ አስተዳድር",
            liveFirestoreSync: "ቀጥታ የፋየርቤዝ ማመሳሰል",
            showing: "በማሳየት ላይ",
            items: "እቃዎች",
            noMerchFound: "ምንም እቃ አልተገኘም",
            noMerchFoundDesc: "ከተመረጠው ምድብ ጋር የሚዛመድ እቃ አልተገኘም። በቅርቡ የሚጨመሩ አዳዲስ እቃዎችን ይመልከቱ!",
            loadingInventory: "ምርቶችን በመጫን ላይ...",
            officialTag: "የ2026/27 ይፋዊ",
            shopCtaTitle: "ክለቡን ይደግፉና በይፋዊ እቃዎች ላይ 15% ቅናሽ ያግኙ",
            shopCtaDesc: "የሀላባ ከተማ እግርኳስ ክለብ ይፋዊ አባላት በማሊያዎች ላይ ልዩ ቅናሽ፣ የትኬት ቅድሚያ እና ዲጂታል መታወቂያ ያገኛሉ።",
            donateNow: "አሁን ይለግሱ",
            etbCurrency: "ብር",
            // Donations
            donateTitle: "ሀላባ ከተማ እግርኳስ ክለብን ይደግፉ",
            donateSubtitle: "በርበሬዎቹ በፕሪሚየር ሊግ የሚያደርጉትን ጉዞ፣ የታዳጊዎች አካዳሚና የስታዲየም ግንባታን ያግዙ።",
            donateBtn: "ለክለቡ ይለግሱ",
            heroDonateBtn: "ክለቡን ይደግፉ / ይለግሱ",
            selectDonationAmount: "የልገሳ መጠን ይምረጡ (በብር)",
            customAmountLabel: "የራስዎ የልገሳ መጠን (በብር)",
            enterAmountPlaceholder: "የብር መጠን ያስገቡ...",
            donationPurposeLabel: "የልገሳ ዓላማ",
            purposeGeneral: "አጠቃላይ የክለብና የጨዋታ ድጋፍ",
            purposeAcademy: "የታዳጊዎች አካዳሚና ቁሳቁስ ድጋፍ",
            purposeStadium: "የስታዲየምና የደጋፊዎች መገልገያ ማሻሻያ",
            donorNameLabel: "ሙሉ ስምዎ",
            donorPhoneLabel: "ስልክ ቁጥር (ቴሌብር / ንግድ ባንክ)",
            donorEmailLabel: "ኢሜይል (አማራጭ)",
            donationSuccessTitle: "ለታላቁ ድጋፍዎ እናመሰግናለን!",
            donationSuccessMsg: "የእርስዎ ድጋፍ ለሀላባ ከተማ እግርኳስ ክለብና ለበርበሬዎቹ ትልቅ አቅም ነው።",
            // Footer
            footerRights: "መብቱ በህግ የተጠበቀ ነው። የሀላባ ከተማ እግርኳስ ክለብ (በርበሬዎቹ) ይፋዊ ድረ-ገጽ።",
            footerMotto: "ቀይና አረንጓዴ ለዘላለም • ጥንካሬ፣ ክብር፣ ፍቅር",
            quickLinks: "ፈጣን ማገናኛዎች",
            socialMedia: "በርበሬዎቹን ይከታተሉ",
            footerOfficeStadium: "የክለቡ ቢሮ እና ስታዲየም",
            footerAboutClub: "የሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ ይፋዊ እግር ኳስ ክለብ። በቅጽል ስማቸው በርበሬዎቹ በመባል የሚታወቁት፣ የማህበረሰባችንን ባህልና የስፖርት ፍቅር የሚወክሉ ኩሩዎች።",
            authorizedStaff: "ለተፈቀደላቸው ሰራተኞች",
            systemEnv: "የስርዓት ሁኔታ፡",
            systemEnvDesc: "ድረ-ገጹ ፈጣንና ቀጥታ የውሂብ ማስቀመጫን በመጠቀም እየሰራ ነው። በአስተዳዳሪ ፖርታል የሚደረጉ ማሻሻያዎች በሁሉም ገጾች ላይ ወዲያውኑ ይንጸባረቃሉ።",
            openAdminDb: "የአስተዳዳሪና ውሂብ ቅንብሮችን ክፈት →",
            officialTelegram: "ይፋዊ የቴሌግራም ቻናል",
            facebookPage: "የፌስቡክ ገጽ",
            youtubeHighlights: "የዩቲዩብ የጨዋታ አበይት ክስተቶች",
            halabaKulitoMotto: 'ሀላባ ቁሊቶ፣ ማዕከላዊ ኢትዮጵያ • ኩሩዎቹ "በርበሬዎቹ"'
          },
          om: {
            // Navigation
            navHome: "Fuula Duraa",
            navFixtures: "Taphawwan fi Bu’aawwan",
            navStandings: "Gabatee Sadarkaa",
            navNews: "Oduu & Miidiyaa",
            navMembership: "Miseensummaa",
            navShop: "Suuqii",
            navDonate: "Gumaacha",
            navAbout: "Waa’ee Garee",
            navContact: "Nu Qunnamaa",
            navAdmin: "Portaala Bulchiinsaa",
            navJoinBtn: "Miseensa Ta’aa",
            est1966: "Bara 1966 Hundeeffame",
            nativeApp: "Appilikeeshinii Seeraa",
            installApp: "Appilikeeshinii Fe’i",
            clubDossierBtn: "Sanada Seeraa Kilabichaa",
            active: "Hojjechaa Jira",
            selectLanguage: "Afaan Filadhaa",
            // Hero
            heroTag: "PORTAALA SEERAA KILABICHAA",
            heroTitle: "HALABA CITY FC",
            heroNickname: "“Berberewochu” (በርበሬዎቹ)",
            heroSubtitle: "Dhaala Kubbaa Miilaa fi Boona Halabaa Bara 1966 Kaasee",
            heroBtnNews: "Oduuwwan Haaraa",
            heroBtnFixtures: "Taphawwan & Bu’aawwan",
            heroBtnJoin: "Miseensa Ta’aa",
            // Quick Stats / Info banner
            foundedLabel: "Bara Hundeeffame",
            foundedValue: "Bara 1966",
            homeGroundLabel: "Dirree Dirree",
            homeGroundValue: "Istaadiyeemii Halabaa, Halaba Qulitoo",
            leagueLabel: "Dorgommii",
            leagueValue: "Liigii Piriimeeraa Itoophiyaa (Sadarkaa 1ffaa)",
            nicknameLabel: "Maqaa Masoo",
            // Next match / match preview
            nextMatchTitle: "Tapha Itti Aanu",
            latestResultTitle: "Bu’aa Dhihoo",
            matchCountdown: "Taphni Jalqabuuf",
            viewMatchDetails: "Bal’ina Taphaa",
            allFixturesBtn: "Taphawwan Hundumaa Ilaali",
            fullStandingsBtn: "Gabatee Sadarkaa Guutuu",
            nextHalabaMatch: "Tapha Halabaa Itti Aanu:",
            nextHalabaGame: "Tapha Itti Aanu: Halaba City FC",
            latestHalabaResult: "Bu’aa Halabaa Dhihoo",
            home: "Dirree",
            away: "Ala",
            vs: "Fi",
            fullTime: "Xumurameera",
            liveNow: "Kallattiin",
            upcoming: "Kanneen Dhufan",
            eatTimezone: "Sa’aatii Itoophiyaa",
            matchesShown: "Taphawwan Mul’atan",
            // Home sections
            latestClubNews: "Oduuwwan Kilabichaa Dhihoo",
            newsSubtitle: "Gabaasa taphootaa, jijjiirraa taphattootaa fi beeksisa seeraa hordofaa.",
            standingsPreviewTitle: "Gabatee Sadarkaa Liigii Piriimeeraa",
            membershipCtaTitle: "Maatii Berberewochu Ta’aa",
            membershipCtaDesc: "Deeggartoota Halaba City FC kumaatama waliin makamaa. Miseensummaa seeraa, waraqaa eenyummaa dijitaalaa fi odeeffannoo addaa argadhaa.",
            joinNowBtn: "Amma Galmaa’aa",
            // Match Center
            fixturesTitle: "Taphawwan fi Bu’aawwan",
            fixturesSubtitle: "Sagantaa taphoota Liigii Piriimeeraa Itoophiyaa bara 2026/2027 fi bu’aawwan seeraa.",
            filterAll: "Taphawwan Hundumaa",
            filterUpcoming: "Kanneen Dhufan",
            filterResults: "Bu’aawwan",
            filterCompetition: "Dorgommiidhaan Calali",
            allCompetitions: "Dorgommiiwwan Hunda",
            matchDetailsModalTitle: "Wiirtuu Tapha Seeraa",
            matchVenue: "Iddoo Taphaa",
            matchDate: "Guyyaa & Sa’aatii",
            matchStatus: "Haala",
            attendance: "Baay’ina Daawwattootaa",
            referee: "Abbaa Seeraa",
            goalsSummary: "Galchiiwwan fi Taateewwan Ijoo",
            noMatchesFound: "Taphni filannoo kessaniin walsimu hin argamne.",
            officialEplFixtures: "Taphawwan Liigii Piriimeeraa Seeraa",
            eplCampaign: "Dorgommii Liigii Piriimeeraa Itoophiyaa Bara 2026 / 2027",
            matchScheduleHeadline: "Sagantaa Taphoota Halaba City FC fi Haromsa Kallattii",
            liveAutoUpdateDesc: "Gooliiwwan, daqiiqaa taphaa fi qabxiilee kallattiin sekondii 30 keessatti haaromsama.",
            clubDossier: "Sanada Kilabichaa",
            simulateLiveAction: "Yaalii Tapha Kallattii",
            // Standings
            standingsTitle: "Gabatee Sadarkaa Liigii Piriimeeraa",
            standingsSubtitle: "Sadarkaa seeraa bara 2026/27 (Halaba Ketema qabxii 5n utuu hin mo’amin dura jira).",
            pos: "Sad",
            club: "Kilabii",
            played: "T",
            won: "M",
            drawn: "Q",
            lost: "A",
            gf: "GK",
            ga: "GT",
            gd: "GG",
            pts: "Qabxii",
            form: "Bocaa",
            zonePromotion: "Dursaa Liigichaa / CAF Champions League",
            zoneMidtable: "Giddu-galeessa",
            zoneRelegation: "Garee Gad Bu’u",
            standingsEplBadge: "Liigii Piriimeeraa Itoophiyaa Seeraa • Bara 2026 / 2027 (Kilaboota 18)",
            syncTheSportsDb: "TheSportsDB irraa Haaromsi",
            resetTable: "Gabatee Deebisi",
            officialLeagueStatus: "Haala Liigii Seeraa:",
            firstPlace: "Sadarkaa 1ffaa",
            secondPlace: "Sadarkaa 2ffaa",
            thirdPlace: "Sadarkaa 3ffaa",
            cafChampionsLeagueQual: "Sadarkaa 1ffaa • CAF Champions League Darbuuf",
            cafConfedCupQual: "Sadarkaa 2ffaa • Waancaa Konfedereeshinii CAF",
            relegationZoneDesc: "Sadarkaa Gad Bu’iinsaa (Sadarkaa 16–18)",
            officialClub: "Kilabii Seeraa",
            points: "Qabxii",
            record: "Galmee",
            goalsGd: "Goolii (Garaagarummaa)",
            // News
            newsTitle: "Oduu fi Miidiyaa Kilabichaa",
            searchNewsPlaceholder: "Oduuwwan, gabaasa taphaa barbaadi...",
            catAll: "Oduu Hunda",
            catClubNews: "Oduu Kilabii",
            catMatchReports: "Gabaasa Taphaa",
            catTransfers: "Jijjiirraa",
            catInterviews: "Gaaf-deebii",
            catAcademy: "Akaadaamii Dargaggootaa",
            catCommunity: "Hawaasa & Deeggartoota",
            readArticle: "Oduu Guutuu Dubbisi",
            backToNews: "Gara Oduutti Deebi’i",
            publishedOn: "Guyyaa Maxxansaa",
            author: "Barreessaan",
            mediaCenterTag: "Wiirtuu Miidiyaa Halaba City FC",
            featuredStory: "Oduu Ijoo",
            allStories: "Oduuwwan Hunda",
            noArticlesFound: "Oduun filannoo kessaniin walsimu hin argamne.",
            copied: "Koppii Ta’eera!",
            mediaCommsFooter: "Miidiyaa fi Quunnamtii Seeraa Halaba City FC",
            // Membership
            membershipTitle: "Miseensummaa Deeggartoota Seeraa",
            membershipSubtitle: "Halaba City FC kallattiin deeggaraa. Waraqaa eenyummaa dijitaalaa fi mirga addaa argadhaa.",
            membershipPlansTitle: "Sadarkaa Miseensummaa Filadhaa",
            membershipSubtitleChoice: "Sadarkaa miseensummaa keessanii filadhaa. Kaffaltiin (200, 500 ykn 1000 ETB) Chapa kaffalama.",
            tierSupporter: "Miseensa Deeggaraa (Supporter)",
            tierSupporterDesc: "Miseensummaa dijitaalaa deeggartoota addunyaa hundaaf (Qarshii 200).",
            tierStandard: "Miseensa Idilee (Standard)",
            tierStandardDesc: "Kaardii miseensummaa, dursa tikkeettii argachuu fi hir’ifama gatii uffata kilabichaa %10.",
            tierPremium: "Miseensa Warqee VIP (Gold VIP)",
            tierPremiumDesc: "Iddoo taa’umsa VIP, jeersii kilabichaa waggaa fi walga’ii waliigalaa kilabichaa irratti hirmaachuu.",
            selectTier: "Kuni Filadhu",
            selectedTier: "Filatameera",
            tier1: "Sadarkaa 1",
            tier2: "Sadarkaa 2",
            tier3: "Sadarkaa 3",
            popularChoice: "Filannoo Baay’ee",
            etbPaid: "ETB KAFFALAMEERA",
            memberName: "Maqaa Miseensaa",
            regionLabel: "Naannoo",
            seasonLabel: "Waggaa Taphaa",
            idPhoto: "Suuraa Eenyummaa",
            idReference: "Lakkoofsa Eenyummaa",
            verifiedPaid: "KAFFALTIIN MIRKANAA’E",
            chapaTxRef: "Lakk. Kaffaltii Chapa:",
            uploadPhotoLabel: "Suuraa Miseensaa Ol-fe’aa",
            photoHint: "PNG, JPG hanga 5MB",
            chapaSecured: "Kaffaltii Nagaa Chapa",
            supportedPaymentMethods: "Telebirr, CBE Birr, Awash Bank fi Kaardiiwwan",
            // Form
            formTitle: "Uunkaa Galmee Miseensummaa",
            fullName: "Maqaa Guutuu",
            fullNamePlaceholder: "Fkn. Tolosaa Dibaba",
            dob: "Guyyaa Dhalootaa",
            gender: "Kornyaa (Filannoo)",
            genderMale: "Dhiira",
            genderFemale: "Dhalaa",
            genderOther: "Ibsuu Hin Barbaadu",
            phone: "Lakkoofsa Bilbilaa",
            phonePlaceholder: "+251 91 234 5678",
            email: "Imeeyilii (Filannoo)",
            emailPlaceholder: "you@example.com",
            cityOrRegion: "Magaalaa ykn Naannoo",
            cityPlaceholder: "Fkn. Halaba Qulitoo / Hawaasaa / Finfinnee",
            prefLanguage: "Afaan Quunnamtii Filatame",
            agreePrivacy: "Waliigaltee fi seerota miseensummaa Halaba City FC nan fudhadha.",
            submitApplication: "Iyyannoo Miseensummaa Galchi",
            submitting: "Hojjetamaa jira...",
            registrationSuccessTitle: "Galmeen Milkaa’inaan Xumurameera!",
            registrationSuccessDesc: "Baga gara maatii Berberewochu dhuftan! Galmeen keessan kuusaa ragaa kilabichaa keessatti qabameera.",
            yourRefNumber: "Lakkoofsa Eenyummaa Miseensummaa",
            digitalCardTitle: "Waraqaa Eenyummaa Dijitaalaa Halaba City FC",
            downloadCard: "Waraqicha Maxxansi / Ol-kaa’i",
            newRegistrationBtn: "Nama Biraa Galmeessi",
            // Validation
            errFullName: "Maaloo maqaa keessan guutuu galchaa.",
            errDob: "Maaloo guyyaa dhalootaa filadhaa.",
            errPhone: "Maaloo lakkoofsa bilbilaa sirrii galchaa.",
            errCity: "Maaloo magaalaa ykn naannoo keessan ibsaa.",
            errAgree: "Itti fufuuf seera kilabichaa fudhachuu qabdu.",
            // About Club
            aboutTitle: "Waa’ee HALABA City FC",
            aboutSubtitle: "Seenaa keenya, eenyummaa aadaa keenya fi imala kubbaa miilaa keenya.",
            clubHistoryTitle: "Seenaa fi Hundeeffama Kilabichaa",
            historyP1: "Bara 1966 Magaalaa Halaba Qulitoo keessatti kan hundeeffame Halaba City FC, waggoota jaatamaaf fakkeenya ispoortii, tokkummaa fi boona naannichaa ta’ee tajaajileera.",
            historyP2: "Kilabichi jabinna, aadaa fi mul’ata hawaasa Halabaa kubbaa miilaatiin bakka bu’a. Dargaggoota hedduu gara taphattoota beekamootti guddisuu irratti cimee hojjeta.",
            identityTitle: "Eenyummaa Berberewochu & Asxaa",
            identityDesc: "Halabaan guutuu Itoophiyaa keessatti qulqullina fi mi’aa barbarree diimaa isheetiin beekamti. Maqaan masoo “Berberewochu” jedhus jabinna fi ho’ina dirree irratti qabnu calaqqisiisa.",
            crestSymbolism: "Asxaan seeraa mimmi’oo diimaa lameen, qophee aadaa Halabaa, kubbaa miilaa fi mallattoo magariisaa barreeffama Gi’iizii “ሀላባ ከተማ እግርኳስ ክለብ” of keessaa qaba.",
            stadiumTitle: "Dirree Keenya: Istaadiyeemii Halabaa",
            stadiumDesc: "Istaadiyeemiin Halabaa deeggartoota gara 15,000 uffata diimaa fi magariisa uffatan simachuun iddoo jabaa fi ho’aa kilabichaati.",
            squadTitle: "Taphattoota Garee Jalqabaa",
            managementTitle: "Hoggansa fi Leenjistoota Kilabichaa",
            heritageBadge: "Dhaala Ispoortii Bara 1966 Kaasee",
            foundedEc: "Bara Hundeeffame: Bara 1966 (Lakkoofsa Itoophiyaa)",
            centralEthiopia: "Itoophiyaa Giddugaleessaa",
            officialColorsDesc: "Halluuwwan Seeraa: Diimaa, Magariisa fi Warqee",
            prideOfHalaba: "Boona Halabaa",
            ourMission: "Ergama Keenya",
            missionDesc: "Dargaggoota dandeettii qaban guddisuu, seera ispoortii kabachiisuu fi sadarkaa ol’aanaa kubbaa miilaa Itoophiyaa irratti milkaa’uu.",
            ourVision: "Mul’ata Keenya",
            visionDesc: "Kilaba Halaba City FC gara dhaabbata ammayyaa fi dandeettii guutuu qabutti ceesisuu.",
            honorsTitle: "Milkaa’inawwan fi Seenaa",
            honor1: "Shaampiyoonaa Naannoo Mo’ate",
            honor2: "Liigii Ol’aanaa Itoophiyaa Irratti Falmataa",
            honor3: "Badhaasa Ispoortummaa Biyyaalessaa",
            honor4: "Waggoota 60 Ol Kubbaa Miilaa Ture",
            stadiumFortress: "Dahoo Berberewochu",
            capacityLabel: "Baay’ina Taa’umsaa",
            pitchSurfaceLabel: "Gosa Margaa",
            locationLabel: "Iddoo",
            atmosphereLabel: "Miira Dirree",
            electrifying: "Ho’aa fi Boonsaa",
            naturalGrass: "Marga Uumamaa",
            appearances: "Taphoota",
            goals: "Galchii",
            captain: "Kabiteenii",
            // Contact
            contactTitle: "Halaba City FC Qunnamaa",
            contactSubtitle: "Waajjira ol’aanaa, miidiyaa fi waajjira tikkeettii qunnamaa.",
            officeAddress: "Waajjira Ol’aanaa: Halaba Qulitoo, Naannoo Itoophiyaa Giddugaleessaa",
            phoneLabel: "Bilbila",
            emailLabel: "Imeeyilii",
            sendUsMessage: "Ergaa Nuuf Ergaa",
            messageSubject: "Mata-duree",
            messageBody: "Ergaa Keessan",
            sendMessageBtn: "Ergaa Ergi",
            messageSentSuccess: "Galatoomaa! Ergaan keessan hoggantoota kilabichaatiin ga’eera.",
            officialCommunications: "Quunnamtii Seeraa",
            clubHeadquarters: "Waajjira Ol’aanaa Kilabichaa",
            addressLabel: "Teessoo",
            officialPhoneLabel: "Bilbila Seeraa",
            inquiriesPressLabel: "Gaaffii fi Miidiyaa",
            generalLabel: "Waliigala",
            mediaLabel: "Miidiyaa",
            ticketsLabel: "Tikkeettii",
            officeHoursLabel: "Sa’aatii Hojii",
            officialSocialChannels: "Marsariitiiwwan Hawaasaa Seeraa",
            messageTransmitted: "Ergaan Ergameera",
            yourName: "Maqaa Guutuu",
            emailOrPhone: "Imeeyilii ykn Bilbila",
            // Admin
            adminTitle: "Portaala Bulchiinsa Kilabichaa",
            adminSubtitle: "Gabaasa taphootaa, oduuwwan, miseensota fi ragaalee kilabichaa bulchuuf.",
            adminLoginTitle: "Seensa Hojjettoota Kilabichaa",
            adminUsername: "Maqaa Fayyadamaa ykn Imeeyilii",
            adminPassword: "Jecha Darbii",
            adminLoginBtn: "Gara Keessaa Seeni",
            adminLogoutBtn: "Bahi",
            adminTabMembers: "Miseensota",
            adminTabNews: "Bulchiinsa Oduu",
            adminTabFixtures: "Taphawwan & Bu’aawwan",
            adminTabStandings: "Gulaallii Sadarkaa",
            adminTabSquad: "Garee & Hojjettoota",
            adminTabSettings: "Qindaa’ina Kilabichaa",
            demoNotice: "Haala Yaalii: Weebsaayitiin kun ammaan tana haala yaaliitiin dalagaa jira. Oduu gulaaluu, bu’aa taphaa haaromsuu fi miseensummaa mirkaneessuu dandeessu.",
            demoQuickLogin: "Seensa Yaalii Saffisaa",
            approveBtn: "Mirkaneessi",
            rejectBtn: "Kufaa Taasisi",
            statusApproved: "Mirkanaa’e",
            statusPending: "Eeggannoo Irra",
            statusRejected: "Kufaa Ta’e",
            exportCsv: "CSV Baasi",
            // Live Auto-Update
            liveAutoSyncActive: "Haromsa Kallattii Hojjechaa Jira",
            liveAutoSyncPaused: "Haromsa Dhaabbateera",
            nextSyncIn: "Haromsa Itti Aanu",
            syncingStatus: "Haromsaa jira...",
            syncNowBtn: "Amma Haromsi",
            simulateGoalBtn: "Goolii Kallattii Yaali",
            syncOfficialLeagueBtn: "Liigii Seeraa Haaromsi",
            updateFrequency: "Yeroo Haaromsaa",
            paused: "Dhaabbateera",
            autoSyncEngineDesc: "Mootara sagantaa taphaa fi shallaggii sadarkaa ofiin hojjetu",
            // Shop & Merchandise
            shopTitle: "Suuqii Seeraa Kilabichaa",
            shopSubtitle: "Halluuwwan Halaba City FC jeersiiwwan seeraa, meeshaalee deggartootaa fi uffata shaakalaa bitadhaa.",
            buyNowBtn: "Amma Biti",
            itemPrice: "Gatii",
            availableSizesLabel: "Hammoota Jiran",
            sizeGuide: "Hamma",
            selectSize: "Hamma Filadhaa",
            inStockLabel: "Gabaa irra Jira",
            outOfStockLabel: "Dhumateera",
            deliveryAddressLabel: "Teessoo Geessisaa",
            streetAddress: "Teessoo Daandii / Lakk. Manaa",
            city: "Magaalaa",
            subcityRegion: "Kutaa Magaalaa / Ganda / Naannoo",
            orderSummary: "Cuunfaa Ajajaa",
            checkoutTitle: "Ajaja Jeersii Xumuruu",
            checkoutSubtitle: "Odeeffannoo geessisaa galchuudhaan Chapa kaffaltii nagaa raawwadhaa.",
            proceedToPayment: "Chapa-n Kaffali",
            orderSuccessTitle: "Ajajni Keessan Milkaa’inaan Galmaa’eera!",
            orderSuccessMsg: "Ajajni seeraa Halaba City FC mirkanaa’eera. Dhihootti teessoo keessanitti isiniif ergama.",
            shopBadge: "Meeshaalee Seeraa Halaba City FC",
            perkAuthentic: "%100 Seera Qabeessa",
            perkDelivery: "Itoophiyaa Guutuu Qaqqabsiisa",
            perkPayment: "Kaffaltii Telebirr & CBE Saffisaa",
            manageStoreAdmin: "Suuqii Bulchiinsa Keessatti Gulaali",
            liveFirestoreSync: "Haromsa Firestore Kallattii",
            showing: "Mul’isaa jira",
            items: "meeshaalee",
            noMerchFound: "Meeshaan Hin Argamne",
            noMerchFoundDesc: "Meeshaan ramaddii kanaan walsimu hin argamne.",
            loadingInventory: "Meeshaalee fe’aa jira...",
            officialTag: "Seeraa 2026/27",
            shopCtaTitle: "Kilabicha Deeggaraa & Hir’ifama %15 Argadhaa",
            shopCtaDesc: "Miseensonni seeraa Halaba City FC hir’ifama addaa uffata taphaa irratti argatu.",
            donateNow: "Amma Gumaachaa",
            etbCurrency: "ETB",
            // Donations
            donateTitle: "Kilaba Halaba City FC Deeggaraa",
            donateSubtitle: "Imala Berberewochu Liigii Piriimeeraa, misooma dargaggootaa fi bu’uuraalee istaadiyeemii deeggaraa.",
            donateBtn: "Kilabichaaf Gumaachaa",
            heroDonateBtn: "Kilabicha Deeggaraa / Gumaachaa",
            selectDonationAmount: "Hamma Gumaachaa Filadhaa (ETB)",
            customAmountLabel: "Hamma Fedhii Keessanii (ETB)",
            enterAmountPlaceholder: "Hamma birrii galchaa...",
            donationPurposeLabel: "Kaayyoo Gumaachaa",
            purposeGeneral: "Deeggarsa Waliigalaa Kilabichaa",
            purposeAcademy: "Akaadaamii Dargaggootaa fi Meeshaalee",
            purposeStadium: "Istaadiyeemii fi Tajaajila Deggartootaa",
            donorNameLabel: "Maqaa Guutuu",
            donorPhoneLabel: "Lakk. Bilbilaa (Telebirr / CBE)",
            donorEmailLabel: "Imeelii (Filannoo)",
            donationSuccessTitle: "Gumaacha Keessaniif Galatoomaa!",
            donationSuccessMsg: "Deeggarsi keessan Halaba City FC fi hawaasa Berberewochuuf baay’ee barbaachisaadha.",
            // Footer
            footerRights: "Mirgi Qopheessaa Seeraan Eegameera. Weebsaayitii Seeraa HALABA City FC (Berberewochu).",
            footerMotto: "Diimaa fi Magariisa Bara Baraan • Jabina, Boona, Jaalala",
            quickLinks: "Liinkii Saffisaa",
            socialMedia: "Berberewochu Hordofaa",
            footerOfficeStadium: "Waajjira fi Istaadiyeemii Kilabichaa",
            footerAboutClub: "Kilaba kubbaa miilaa seeraa Halaba Qulitoo, Itoophiyaa Giddugaleessaa. Maqaa masoo Berberewochu (በርበሬዎቹ) jedhamuun beekama.",
            authorizedStaff: "Hojjettoota Hayyamameef",
            systemEnv: "Haala Sirnaa:",
            systemEnvDesc: "Sirni kun ragaalee saffisaan kuusuun kallattiin hojjeta.",
            openAdminDb: "Qindaa’ina Bulchiinsaa Bani →",
            officialTelegram: "Chaanalii Telegiraamii Seeraa",
            facebookPage: "Fuula Feesbuukii",
            youtubeHighlights: "Viidiyoo Taphoota Yuutuubii",
            halabaKulitoMotto: 'Halaba Qulitoo, Itoophiyaa Giddugaleessaa • "Berberewochu"'
          }
        };
        var defaultClubTemplates = {
          cbe_sa: {
            teamName: "Ethiopia Nigd Bank (CBE SA)",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png"
          },
          defence: {
            teamName: "Mechal (Defence Force)",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/5760g91790265354.png"
          },
          bahirdar: {
            teamName: "Bahir Dar Kenema",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png"
          },
          halaba: {
            teamName: "Halaba Ketema (በርበሬዎቹ)",
            isHalaba: true,
            badgeUrl: halabaLogoUrl
          },
          fasil: {
            teamName: "Fasil Kenema",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png"
          },
          insurance: {
            teamName: "Ethiopian Medhin (Insurance)",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png"
          },
          adama: {
            teamName: "Adama Kenema SC",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png"
          },
          shaggar: {
            teamName: "Shaggar City FC",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png"
          },
          electric: {
            teamName: "Ethio Electric",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png"
          },
          bunna: {
            teamName: "Ethiopian Coffee SC (Bunna)",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png"
          },
          welwalo: {
            teamName: "Welwalo Adigrat Univ.",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/w2p6k41790265538.png"
          },
          wolaitta: {
            teamName: "Wolaitta Dicha",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/25m67g1790265481.png"
          },
          negelle: {
            teamName: "Negele Arsi FC",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
          },
          saintgeorge: {
            teamName: "Saint George SC (Kidus Giorgis)",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9d201v1615830018.png"
          },
          hawassa: {
            teamName: "Hawassa Kenema SC",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png"
          },
          hosaena: {
            teamName: "Hadiya Hossana",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png"
          },
          sidama: {
            teamName: "Sidama Coffee SC",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/t0057h1615830065.png"
          },
          gamochencha: {
            teamName: "Gamo Chencha",
            isHalaba: false,
            badgeUrl: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png"
          }
        };
        function calculateStandingsFromMatches(matches) {
          var currentStandings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var statsMap = /* @__PURE__ */new Map();
          Object.entries(defaultClubTemplates).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              id = _ref4[0],
              meta = _ref4[1];
            var existing = currentStandings.find(function (s) {
              return s.teamId === id;
            });
            statsMap.set(id, {
              teamId: id,
              teamName: meta.teamName,
              played: 0,
              won: 0,
              drawn: 0,
              lost: 0,
              goalsFor: 0,
              goalsAgainst: 0,
              points: 0,
              form: [],
              isHalaba: meta.isHalaba,
              badgeUrl: meta.badgeUrl || (existing === null || existing === void 0 ? void 0 : existing.badgeUrl)
            });
          });
          var finishedMatches = matches.filter(function (m) {
            return m.status === "FINISHED" && m.score !== void 0;
          }).sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
          finishedMatches.forEach(function (m) {
            var homeId = normalizeEplTeamId(m.homeTeam.id, m.homeTeam.name);
            var awayId = normalizeEplTeamId(m.awayTeam.id, m.awayTeam.name);
            if (!statsMap.has(homeId)) {
              statsMap.set(homeId, {
                teamId: homeId,
                teamName: m.homeTeam.name,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0,
                form: [],
                isHalaba: homeId === "halaba" || m.homeTeam.isHalaba,
                badgeUrl: m.homeTeam.logo
              });
            }
            if (!statsMap.has(awayId)) {
              statsMap.set(awayId, {
                teamId: awayId,
                teamName: m.awayTeam.name,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0,
                form: [],
                isHalaba: awayId === "halaba" || m.awayTeam.isHalaba,
                badgeUrl: m.awayTeam.logo
              });
            }
            var homeStats = statsMap.get(homeId);
            var awayStats = statsMap.get(awayId);
            var homeGoals = Number(m.score.home) || 0;
            var awayGoals = Number(m.score.away) || 0;
            homeStats.played += 1;
            awayStats.played += 1;
            homeStats.goalsFor += homeGoals;
            homeStats.goalsAgainst += awayGoals;
            awayStats.goalsFor += awayGoals;
            awayStats.goalsAgainst += homeGoals;
            if (homeGoals > awayGoals) {
              homeStats.won += 1;
              homeStats.points += 3;
              homeStats.form.push("W");
              awayStats.lost += 1;
              awayStats.form.push("L");
            } else if (homeGoals < awayGoals) {
              awayStats.won += 1;
              awayStats.points += 3;
              awayStats.form.push("W");
              homeStats.lost += 1;
              homeStats.form.push("L");
            } else {
              homeStats.drawn += 1;
              homeStats.points += 1;
              homeStats.form.push("D");
              awayStats.drawn += 1;
              awayStats.points += 1;
              awayStats.form.push("D");
            }
          });
          var standingsList = Array.from(statsMap.values()).map(function (s) {
            return {
              position: 1,
              teamId: s.teamId,
              teamName: s.teamName,
              played: s.played,
              won: s.won,
              drawn: s.drawn,
              lost: s.lost,
              goalsFor: s.goalsFor,
              goalsAgainst: s.goalsAgainst,
              goalDifference: s.goalsFor - s.goalsAgainst,
              points: s.points,
              form: s.form.length > 0 ? s.form.slice(-5) : ["D", "W", "D"],
              isHalaba: s.isHalaba,
              badgeUrl: s.badgeUrl
            };
          });
          standingsList.sort(function (a, b) {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
            return a.teamName.localeCompare(b.teamName);
          });
          return standingsList.map(function (item, idx) {
            return _objectSpread(_objectSpread({}, item), {}, {
              position: idx + 1
            });
          });
        }
        var DB_NAME = "halaba_fc_offline_cache";
        var DB_VERSION = 1;
        var STORE_NAME = "news_cache";
        function getDb() {
          return new Promise(function (resolve, reject) {
            if (typeof window === "undefined" || !window.indexedDB) {
              reject(new Error("IndexedDB not supported in this environment"));
              return;
            }
            var request = window.indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = function () {
              var db = request.result;
              if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
              }
            };
            request.onsuccess = function () {
              return resolve(request.result);
            };
            request.onerror = function () {
              return reject(request.error);
            };
          });
        }
        function getIdbItem(_x) {
          return _getIdbItem.apply(this, arguments);
        }
        function _getIdbItem() {
          _getIdbItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee46(key) {
            var _db, _t50;
            return _regenerator().w(function (_context46) {
              while (1) switch (_context46.p = _context46.n) {
                case 0:
                  _context46.p = 0;
                  _context46.n = 1;
                  return getDb();
                case 1:
                  _db = _context46.v;
                  return _context46.a(2, new Promise(function (resolve) {
                    var tx = _db.transaction(STORE_NAME, "readonly");
                    var store = tx.objectStore(STORE_NAME);
                    var req = store.get(key);
                    req.onsuccess = function () {
                      var _req$result;
                      return resolve((_req$result = req.result) !== null && _req$result !== void 0 ? _req$result : null);
                    };
                    req.onerror = function () {
                      return resolve(null);
                    };
                  }));
                case 2:
                  _context46.p = 2;
                  _t50 = _context46.v;
                  return _context46.a(2, null);
              }
            }, _callee46, null, [[0, 2]]);
          }));
          return _getIdbItem.apply(this, arguments);
        }
        function setIdbItem(_x2, _x3) {
          return _setIdbItem.apply(this, arguments);
        }
        function _setIdbItem() {
          _setIdbItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee47(key, value) {
            var _db2, _t51;
            return _regenerator().w(function (_context47) {
              while (1) switch (_context47.p = _context47.n) {
                case 0:
                  _context47.p = 0;
                  _context47.n = 1;
                  return getDb();
                case 1:
                  _db2 = _context47.v;
                  return _context47.a(2, new Promise(function (resolve) {
                    var tx = _db2.transaction(STORE_NAME, "readwrite");
                    var store = tx.objectStore(STORE_NAME);
                    store.put(value, key);
                    tx.oncomplete = function () {
                      return resolve();
                    };
                    tx.onerror = function () {
                      return resolve();
                    };
                  }));
                case 2:
                  _context47.p = 2;
                  _t51 = _context47.v;
                case 3:
                  return _context47.a(2);
              }
            }, _callee47, null, [[0, 2]]);
          }));
          return _setIdbItem.apply(this, arguments);
        }
        function createThumbnail(dataUrl) {
          var maxWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 360;
          var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.55;
          return new Promise(function (resolve) {
            if (typeof window === "undefined" || !dataUrl || !dataUrl.startsWith("data:")) {
              resolve(dataUrl || "");
              return;
            }
            var img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = function () {
              try {
                var scale = Math.min(1, maxWidth / (img.width || maxWidth));
                var canvas = document.createElement("canvas");
                canvas.width = Math.max(1, Math.round((img.width || maxWidth) * scale));
                canvas.height = Math.max(1, Math.round((img.height || maxWidth * 0.56) * scale));
                var ctx = canvas.getContext("2d");
                if (!ctx) {
                  resolve(dataUrl);
                  return;
                }
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", quality));
              } catch (_unused6) {
                resolve(dataUrl);
              }
            };
            img.onerror = function () {
              return resolve(dataUrl);
            };
            img.src = dataUrl;
          });
        }
        var ClubContext = reactExports.createContext(void 0);
        try {
          if (typeof window !== "undefined") {
            localStorage.removeItem("halaba_official_epl_standings_v7_canonical");
            localStorage.removeItem("halaba_official_epl_standings_v3");
            localStorage.removeItem("halaba_official_epl_standings_v2");
            localStorage.removeItem("halaba_official_epl_standings");
            localStorage.removeItem("halaba_standings_epl_2026_27");
            localStorage.removeItem("halaba_standings_sportsdb_v2");
            localStorage.removeItem("hcfc_firestore_standings_seeded");
            localStorage.removeItem("hcfc_firestore_standings_seeded_v2");
            localStorage.removeItem("hcfc_firestore_standings_seeded_v3");
          }
        } catch (e) {}
        var normalizeEplTeamId = function normalizeEplTeamId(rawId, rawName) {
          var str = "".concat(rawId || "", " ").concat(rawName || "").toLowerCase();
          if (str.includes("halaba")) return "halaba";
          if (str.includes("cbe") || str.includes("nigd") || rawId === "149377") return "cbe_sa";
          if (str.includes("medhin") || str.includes("insurance") || rawId === "146921") return "insurance";
          if (str.includes("adama") || rawId === "141024") return "adama";
          if (str.includes("electric") || rawId === "146920") return "electric";
          if (str.includes("fasil") || rawId === "141026") return "fasil";
          if (str.includes("bahir") || rawId === "141025") return "bahirdar";
          if (str.includes("bunna") || str.includes("coffee") && !str.includes("sidama")) return "bunna";
          if (str.includes("george") || str.includes("giorgis")) return "saintgeorge";
          if (str.includes("defence") || str.includes("mekelakeya") || str.includes("mechal") || rawId === "143767") return "defence";
          if (str.includes("welwalo")) return "welwalo";
          if (str.includes("dicha") || str.includes("wolaitta")) return "wolaitta";
          if (str.includes("hosaena") || str.includes("hossana")) return "hosaena";
          if (str.includes("diredawa") || str.includes("dire dawa")) return "diredawa";
          if (str.includes("chencha") || str.includes("gamo")) return "gamochencha";
          if (str.includes("sidama")) return "sidama";
          if (str.includes("hawassa")) return "hawassa";
          if (str.includes("shaggar") || str.includes("sheger")) return "shaggar";
          if (str.includes("negelle") || str.includes("negele")) return "negelle";
          return (rawId || "").replace(/[^a-z0-9]/g, "") || "unknown";
        };
        var STORAGE_KEYS = {
          LANG: "halaba_lang",
          CLUB: "halaba_club_info_epl_26_27",
          MATCHES: "halaba_matches_epl_2026_27_v18",
          STANDINGS: "halaba_official_epl_standings_v12_real_table",
          NEWS: "halaba_news_epl_2026_27",
          PLAYERS: "halaba_players",
          STAFF: "halaba_staff",
          MEMBERSHIPS: "halaba_memberships",
          SHOP_ITEMS: "halaba_shop_items_2026",
          SHOP_ORDERS: "halaba_shop_orders_2026",
          DONATIONS: "halaba_donations_2026",
          ADMIN_AUTH: "halaba_admin_auth",
          SPONSORS: "halaba_sponsors_v2"
        };
        var ClubProvider = function ClubProvider(_ref5) {
          var children = _ref5.children;
          var _reactExports$useStat = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.LANG);
              if (saved === "en" || saved === "am" || saved === "om") return saved;
              return "en";
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            language = _reactExports$useStat2[0],
            setLanguageState = _reactExports$useStat2[1];
          var setLanguage = function setLanguage(lang) {
            setLanguageState(lang);
            localStorage.setItem(STORAGE_KEYS.LANG, lang);
          };
          var t = translations[language];
          var _reactExports$useStat3 = reactExports.useState(function () {
              return typeof navigator !== "undefined" ? navigator.onLine : true;
            }),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isOnline = _reactExports$useStat4[0],
            setIsOnline = _reactExports$useStat4[1];
          reactExports.useEffect(function () {
            var handleOnline = function handleOnline() {
              setIsOnline(true);
              console.info("[ClubContext] Network online: background sync active");
            };
            var handleOffline = function handleOffline() {
              setIsOnline(false);
              console.info("[ClubContext] Network offline: seamlessly serving cached data");
            };
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
            return function () {
              window.removeEventListener("online", handleOnline);
              window.removeEventListener("offline", handleOffline);
            };
          }, []);
          var getInitialPage = function getInitialPage() {
            if (typeof window !== "undefined" && window.location.hash) {
              var hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
              var validPages = ["home", "fixtures", "standings", "news", "membership", "shop", "about", "contact", "admin"];
              if (validPages.includes(hash)) return hash;
            }
            return "home";
          };
          var _reactExports$useStat5 = reactExports.useState(getInitialPage),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            currentPage = _reactExports$useStat6[0],
            setCurrentPageState = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(null),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            selectedArticleId = _reactExports$useStat8[0],
            setSelectedArticleId = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState(null),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            selectedMatchId = _reactExports$useStat0[0],
            setSelectedMatchId = _reactExports$useStat0[1];
          var setCurrentPage = function setCurrentPage(page) {
            setCurrentPageState(page);
            if (typeof window !== "undefined") {
              if (page === "home") {
                if (window.location.hash) {
                  history.replaceState(null, "", window.location.pathname + window.location.search);
                }
              } else {
                window.location.hash = page;
              }
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }
          };
          reactExports.useEffect(function () {
            var handleHashChange = function handleHashChange() {
              var hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
              var validPages = ["home", "fixtures", "standings", "news", "membership", "shop", "about", "contact", "admin"];
              if (validPages.includes(hash)) {
                setCurrentPageState(hash);
              } else if (!hash) {
                setCurrentPageState("home");
              }
            };
            window.addEventListener("hashchange", handleHashChange);
            return function () {
              return window.removeEventListener("hashchange", handleHashChange);
            };
          }, []);
          var _reactExports$useStat1 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.CLUB);
              return saved ? JSON.parse(saved) : initialClubInfo;
            }),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            clubInfo = _reactExports$useStat10[0],
            setClubInfo = _reactExports$useStat10[1];
          var updateClubInfo = function updateClubInfo(info) {
            setClubInfo(info);
            localStorage.setItem(STORAGE_KEYS.CLUB, JSON.stringify(info));
          };
          var _reactExports$useStat11 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.MATCHES);
              if (!saved) return initialMatches;
              try {
                var parsed = JSON.parse(saved);
                var hasHalaba = parsed.some(function (m) {
                  var _m$homeTeam, _m$awayTeam, _m$homeTeam2, _m$awayTeam2;
                  return ((_m$homeTeam = m.homeTeam) === null || _m$homeTeam === void 0 ? void 0 : _m$homeTeam.isHalaba) || ((_m$awayTeam = m.awayTeam) === null || _m$awayTeam === void 0 ? void 0 : _m$awayTeam.isHalaba) || ((_m$homeTeam2 = m.homeTeam) === null || _m$homeTeam2 === void 0 || (_m$homeTeam2 = _m$homeTeam2.name) === null || _m$homeTeam2 === void 0 ? void 0 : _m$homeTeam2.toLowerCase().includes("halaba")) || ((_m$awayTeam2 = m.awayTeam) === null || _m$awayTeam2 === void 0 || (_m$awayTeam2 = _m$awayTeam2.name) === null || _m$awayTeam2 === void 0 ? void 0 : _m$awayTeam2.toLowerCase().includes("halaba"));
                });
                if (!hasHalaba) {
                  return initialMatches;
                }
                return parsed;
              } catch (_unused7) {
                return initialMatches;
              }
            }),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            matches = _reactExports$useStat12[0],
            setMatches = _reactExports$useStat12[1];
          reactExports.useEffect(function () {
            var matchesRef = collection(db, "matches");
            var unsubscribe = onSnapshot(matchesRef, /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(snapshot) {
                var seeded, _i, _initialMatches, m, liveMatches, halabaPriority, autoComputed, _t;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.p = _context.n) {
                    case 0:
                      if (!snapshot.empty) {
                        _context.n = 7;
                        break;
                      }
                      seeded = localStorage.getItem("hcfc_firestore_matches_seeded");
                      if (seeded) {
                        _context.n = 6;
                        break;
                      }
                      _context.p = 1;
                      _i = 0, _initialMatches = initialMatches;
                    case 2:
                      if (!(_i < _initialMatches.length)) {
                        _context.n = 4;
                        break;
                      }
                      m = _initialMatches[_i];
                      _context.n = 3;
                      return setDoc(doc(db, "matches", m.id), _objectSpread(_objectSpread({}, m), {}, {
                        updatedAt: serverTimestamp()
                      }));
                    case 3:
                      _i++;
                      _context.n = 2;
                      break;
                    case 4:
                      localStorage.setItem("hcfc_firestore_matches_seeded", "true");
                      _context.n = 6;
                      break;
                    case 5:
                      _context.p = 5;
                      _t = _context.v;
                      console.warn("Could not seed matches:", _t);
                    case 6:
                      return _context.a(2);
                    case 7:
                      liveMatches = snapshot.docs.map(function (docSnap) {
                        var data = docSnap.data();
                        return {
                          id: docSnap.id,
                          competition: data.competition || "ETHIOPIAN_PREMIER_LEAGUE",
                          competitionName: data.competitionName || "Ethiopian Premier League",
                          date: data.date || "",
                          kickoffTime: data.kickoffTime || "15:00",
                          venue: data.venue || "Halaba Stadium",
                          homeTeam: data.homeTeam || {
                            id: "halaba",
                            name: "Halaba Ketema",
                            isHalaba: true
                          },
                          awayTeam: data.awayTeam || {
                            id: "away",
                            name: "Away Team",
                            isHalaba: false
                          },
                          status: data.status || "UPCOMING",
                          score: data.score,
                          halftimeScore: data.halftimeScore,
                          round: data.round,
                          attendance: data.attendance,
                          referee: data.referee,
                          scorers: data.scorers,
                          summary: data.summary || "",
                          liveMinute: data.liveMinute,
                          livePeriod: data.livePeriod,
                          liveEvents: data.liveEvents
                        };
                      });
                      initialMatches.forEach(function (initM) {
                        if (!liveMatches.some(function (m) {
                          return m.id === initM.id;
                        })) {
                          liveMatches.push(_objectSpread({}, initM));
                        }
                      });
                      if (liveMatches.length > 0) {
                        halabaPriority = ["m-epl-rd3", "m-epl-rd4", "m-epl-rd5", "m-epl-rd2", "m-epl-rd1"];
                        liveMatches.sort(function (a, b) {
                          var aIdx = halabaPriority.indexOf(a.id);
                          var bIdx = halabaPriority.indexOf(b.id);
                          if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
                          if (aIdx !== -1) return -1;
                          if (bIdx !== -1) return 1;
                          return new Date(b.date).getTime() - new Date(a.date).getTime();
                        });
                        setMatches(liveMatches);
                        try {
                          localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(liveMatches));
                        } catch (e) {
                          console.warn("LocalStorage error caching matches:", e);
                        }
                        localStorage.setItem("hcfc_firestore_matches_seeded", "true");
                        autoComputed = calculateStandingsFromMatches(liveMatches, initialStandings);
                        setStandings(function (prev) {
                          var hasLaggingTeam = prev.some(function (t2) {
                            return t2.played < 3;
                          });
                          if (hasLaggingTeam) {
                            localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(autoComputed));
                            return autoComputed;
                          }
                          return prev;
                        });
                      }
                    case 8:
                      return _context.a(2);
                  }
                }, _callee, null, [[1, 5]]);
              }));
              return function (_x4) {
                return _ref6.apply(this, arguments);
              };
            }(), function (error) {
              if (typeof navigator !== "undefined" && !navigator.onLine) {
                return;
              }
              console.warn("Firebase real-time matches note (serving cache):", error);
              handleFirestoreError(error, OperationType.LIST, "matches");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var addMatch = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(matchData) {
              var matchId, newMatch, updated, updatedStandings, _iterator4, _step4, st, _t2, _t3;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    matchId = "match-".concat(Date.now());
                    newMatch = _objectSpread(_objectSpread({}, matchData), {}, {
                      id: matchId
                    });
                    updated = [newMatch].concat(_toConsumableArray(matches));
                    setMatches(updated);
                    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
                    updatedStandings = calculateStandingsFromMatches(updated, standings);
                    setStandings(updatedStandings);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
                    _context2.p = 1;
                    _context2.n = 2;
                    return setDoc(doc(db, "matches", matchId), _objectSpread(_objectSpread({}, newMatch), {}, {
                      createdAt: serverTimestamp(),
                      updatedAt: serverTimestamp()
                    }));
                  case 2:
                    _iterator4 = _createForOfIteratorHelper(updatedStandings);
                    _context2.p = 3;
                    _iterator4.s();
                  case 4:
                    if ((_step4 = _iterator4.n()).done) {
                      _context2.n = 6;
                      break;
                    }
                    st = _step4.value;
                    _context2.n = 5;
                    return setDoc(doc(db, "standings", st.teamId), _objectSpread(_objectSpread({}, st), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 5:
                    _context2.n = 4;
                    break;
                  case 6:
                    _context2.n = 8;
                    break;
                  case 7:
                    _context2.p = 7;
                    _t2 = _context2.v;
                    _iterator4.e(_t2);
                  case 8:
                    _context2.p = 8;
                    _iterator4.f();
                    return _context2.f(8);
                  case 9:
                    _context2.n = 11;
                    break;
                  case 10:
                    _context2.p = 10;
                    _t3 = _context2.v;
                    console.error("Firestore add match error:", _t3);
                    handleFirestoreError(_t3, OperationType.CREATE, "matches/".concat(matchId));
                  case 11:
                    return _context2.a(2);
                }
              }, _callee2, null, [[3, 7, 8, 9], [1, 10]]);
            }));
            return function addMatch(_x5) {
              return _ref7.apply(this, arguments);
            };
          }();
          var updateMatch = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id, updates) {
              var updated, updatedStandings, cleanUpdates, _i2, _Object$entries, _Object$entries$_i, key, value, _iterator5, _step5, st, _t4, _t5;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    updated = matches.map(function (m) {
                      return m.id === id ? _objectSpread(_objectSpread({}, m), updates) : m;
                    });
                    setMatches(updated);
                    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
                    updatedStandings = calculateStandingsFromMatches(updated, standings);
                    setStandings(updatedStandings);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
                    _context3.p = 1;
                    cleanUpdates = {};
                    for (_i2 = 0, _Object$entries = Object.entries(updates); _i2 < _Object$entries.length; _i2++) {
                      _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                      if (value !== void 0) {
                        cleanUpdates[key] = value;
                      }
                    }
                    _context3.n = 2;
                    return setDoc(doc(db, "matches", id), _objectSpread(_objectSpread({}, cleanUpdates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 2:
                    _iterator5 = _createForOfIteratorHelper(updatedStandings);
                    _context3.p = 3;
                    _iterator5.s();
                  case 4:
                    if ((_step5 = _iterator5.n()).done) {
                      _context3.n = 6;
                      break;
                    }
                    st = _step5.value;
                    _context3.n = 5;
                    return setDoc(doc(db, "standings", st.teamId), _objectSpread(_objectSpread({}, st), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 5:
                    _context3.n = 4;
                    break;
                  case 6:
                    _context3.n = 8;
                    break;
                  case 7:
                    _context3.p = 7;
                    _t4 = _context3.v;
                    _iterator5.e(_t4);
                  case 8:
                    _context3.p = 8;
                    _iterator5.f();
                    return _context3.f(8);
                  case 9:
                    _context3.n = 11;
                    break;
                  case 10:
                    _context3.p = 10;
                    _t5 = _context3.v;
                    console.error("Firestore update match error:", _t5);
                    handleFirestoreError(_t5, OperationType.UPDATE, "matches/".concat(id));
                  case 11:
                    return _context3.a(2);
                }
              }, _callee3, null, [[3, 7, 8, 9], [1, 10]]);
            }));
            return function updateMatch(_x6, _x7) {
              return _ref8.apply(this, arguments);
            };
          }();
          var deleteMatch = /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
              var updated, updatedStandings, _t6;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.p = _context4.n) {
                  case 0:
                    updated = matches.filter(function (m) {
                      return m.id !== id;
                    });
                    setMatches(updated);
                    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updated));
                    updatedStandings = calculateStandingsFromMatches(updated, standings);
                    setStandings(updatedStandings);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(updatedStandings));
                    _context4.p = 1;
                    _context4.n = 2;
                    return deleteDoc(doc(db, "matches", id));
                  case 2:
                    _context4.n = 4;
                    break;
                  case 3:
                    _context4.p = 3;
                    _t6 = _context4.v;
                    console.error("Firestore delete match error:", _t6);
                    handleFirestoreError(_t6, OperationType.DELETE, "matches/".concat(id));
                  case 4:
                    return _context4.a(2);
                }
              }, _callee4, null, [[1, 3]]);
            }));
            return function deleteMatch(_x8) {
              return _ref9.apply(this, arguments);
            };
          }();
          var _reactExports$useStat13 = reactExports.useState(function () {
              try {
                var saved = localStorage.getItem(STORAGE_KEYS.STANDINGS);
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length >= 18) {
                    var hasHalaba = parsed.some(function (t2) {
                      return t2.isHalaba || t2.teamId === "halaba";
                    });
                    var hasCbe = parsed.some(function (t2) {
                      return t2.teamId === "cbe_sa";
                    });
                    if (hasHalaba && hasCbe) {
                      return parsed;
                    }
                  }
                }
              } catch (e) {}
              return initialStandings;
            }),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            standings = _reactExports$useStat14[0],
            setStandings = _reactExports$useStat14[1];
          reactExports.useEffect(function () {
            var standingsRef = collection(db, "standings");
            var unsubscribe = onSnapshot(standingsRef, /*#__PURE__*/function () {
              var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(snapshot) {
                var canonicalMap, list, reordered;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.n) {
                    case 0:
                      canonicalMap = /* @__PURE__ */new Map();
                      snapshot.docs.forEach(function (docSnap) {
                        var data = docSnap.data();
                        var canonicalId = normalizeEplTeamId(docSnap.id, data.teamName || data.teamId);
                        if (docSnap.id !== canonicalId) {
                          deleteDoc(doc(db, "standings", docSnap.id)).catch(function () {});
                        }
                        var teamItem = {
                          position: data.position || 1,
                          teamId: canonicalId,
                          teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : canonicalId === "shaggar" ? "Shaggar City FC" : canonicalId === "negelle" ? "Negele Arsi FC" : canonicalId === "hawassa" ? "Hawassa Kenema SC" : data.teamName || "Team",
                          played: Number(data.played) || 0,
                          won: Number(data.won) || 0,
                          drawn: Number(data.drawn) || 0,
                          lost: Number(data.lost) || 0,
                          goalsFor: Number(data.goalsFor) || 0,
                          goalsAgainst: Number(data.goalsAgainst) || 0,
                          goalDifference: (Number(data.goalsFor) || 0) - (Number(data.goalsAgainst) || 0),
                          points: Number(data.points) || 0,
                          form: Array.isArray(data.form) && data.form.length > 0 ? data.form : ["D", "W", "D"],
                          isHalaba: canonicalId === "halaba",
                          badgeUrl: data.badgeUrl || void 0
                        };
                        if (!canonicalMap.has(canonicalId)) {
                          canonicalMap.set(canonicalId, teamItem);
                        }
                      });
                      initialStandings.forEach(function (initT) {
                        if (!canonicalMap.has(initT.teamId)) {
                          canonicalMap.set(initT.teamId, _objectSpread({}, initT));
                        }
                      });
                      list = Array.from(canonicalMap.values());
                      list.sort(function (a, b) {
                        return b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor;
                      });
                      reordered = list.map(function (t2, idx) {
                        return _objectSpread(_objectSpread({}, t2), {}, {
                          position: idx + 1
                        });
                      });
                      if (reordered.length >= 18) {
                        setStandings(reordered);
                        localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
                      }
                    case 1:
                      return _context5.a(2);
                  }
                }, _callee5);
              }));
              return function (_x9) {
                return _ref0.apply(this, arguments);
              };
            }(), function (error) {
              if (typeof navigator !== "undefined" && !navigator.onLine) {
                return;
              }
              console.warn("Firebase real-time standings note:", error);
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var updateStanding = /*#__PURE__*/function () {
            var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(teamId, updates) {
              var updated, reordered, targetTeam, _t7;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.p = _context6.n) {
                  case 0:
                    updated = standings.map(function (item) {
                      if (item.teamId === teamId) {
                        var next = _objectSpread(_objectSpread({}, item), updates);
                        next.goalDifference = next.goalsFor - next.goalsAgainst;
                        return next;
                      }
                      return item;
                    });
                    updated.sort(function (a, b) {
                      return b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor;
                    });
                    reordered = updated.map(function (t2, idx) {
                      return _objectSpread(_objectSpread({}, t2), {}, {
                        position: idx + 1
                      });
                    });
                    setStandings(reordered);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(reordered));
                    _context6.p = 1;
                    targetTeam = reordered.find(function (t2) {
                      return t2.teamId === teamId;
                    });
                    if (!targetTeam) {
                      _context6.n = 2;
                      break;
                    }
                    _context6.n = 2;
                    return setDoc(doc(db, "standings", teamId), _objectSpread(_objectSpread({}, targetTeam), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 2:
                    _context6.n = 4;
                    break;
                  case 3:
                    _context6.p = 3;
                    _t7 = _context6.v;
                    console.error("Firestore update standing error:", _t7);
                    handleFirestoreError(_t7, OperationType.UPDATE, "standings/".concat(teamId));
                  case 4:
                    return _context6.a(2);
                }
              }, _callee6, null, [[1, 3]]);
            }));
            return function updateStanding(_x0, _x1) {
              return _ref1.apply(this, arguments);
            };
          }();
          var resetStandings = /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
              var _i3, _initialStandings, item, _t8;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.p = _context7.n) {
                  case 0:
                    localStorage.removeItem(STORAGE_KEYS.STANDINGS);
                    setStandings(initialStandings);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(initialStandings));
                    _context7.p = 1;
                    _i3 = 0, _initialStandings = initialStandings;
                  case 2:
                    if (!(_i3 < _initialStandings.length)) {
                      _context7.n = 4;
                      break;
                    }
                    item = _initialStandings[_i3];
                    _context7.n = 3;
                    return setDoc(doc(db, "standings", item.teamId), _objectSpread(_objectSpread({}, item), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 3:
                    _i3++;
                    _context7.n = 2;
                    break;
                  case 4:
                    _context7.n = 6;
                    break;
                  case 5:
                    _context7.p = 5;
                    _t8 = _context7.v;
                    console.error("Firestore reset standings error:", _t8);
                  case 6:
                    return _context7.a(2);
                }
              }, _callee7, null, [[1, 5]]);
            }));
            return function resetStandings() {
              return _ref10.apply(this, arguments);
            };
          }();
          var recalculateStandingsFromMatches = /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
              var computed, _iterator6, _step6, item, _t9, _t0;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.p = _context8.n) {
                  case 0:
                    computed = calculateStandingsFromMatches(matches, standings);
                    setStandings(computed);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(computed));
                    _context8.p = 1;
                    _iterator6 = _createForOfIteratorHelper(computed);
                    _context8.p = 2;
                    _iterator6.s();
                  case 3:
                    if ((_step6 = _iterator6.n()).done) {
                      _context8.n = 5;
                      break;
                    }
                    item = _step6.value;
                    _context8.n = 4;
                    return setDoc(doc(db, "standings", item.teamId), _objectSpread(_objectSpread({}, item), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 4:
                    _context8.n = 3;
                    break;
                  case 5:
                    _context8.n = 7;
                    break;
                  case 6:
                    _context8.p = 6;
                    _t9 = _context8.v;
                    _iterator6.e(_t9);
                  case 7:
                    _context8.p = 7;
                    _iterator6.f();
                    return _context8.f(7);
                  case 8:
                    _context8.n = 10;
                    break;
                  case 9:
                    _context8.p = 9;
                    _t0 = _context8.v;
                    console.warn("Firestore recalculate standings warning:", _t0);
                  case 10:
                    return _context8.a(2);
                }
              }, _callee8, null, [[2, 6, 7, 8], [1, 9]]);
            }));
            return function recalculateStandingsFromMatches() {
              return _ref11.apply(this, arguments);
            };
          }();
          reactExports.useEffect(function () {
            if (matches.length > 0) {
              localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(matches));
            }
          }, [matches]);
          var getCategoryFallbackImage = function getCategoryFallbackImage(category) {
            switch (category) {
              case "MATCH_REPORTS":
                return ClubImages.newsBahirDarWin;
              case "INTERVIEWS":
                return ClubImages.newsCoachInterview;
              case "ACADEMY":
                return ClubImages.academyTraining;
              case "TRANSFERS":
                return ClubImages.squadLineup;
              case "CLUB_NEWS":
              case "COMMUNITY":
              default:
                return ClubImages.heroStadium;
            }
          };
          var _reactExports$useStat15 = reactExports.useState(function () {
              try {
                var saved = localStorage.getItem(STORAGE_KEYS.NEWS);
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed.map(function (item) {
                      var initialMatch = initialNews.find(function (n) {
                        return n.id === item.id;
                      });
                      return _objectSpread(_objectSpread({}, item), {}, {
                        imageUrl: item.imageUrl || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.imageUrl) || getCategoryFallbackImage(item.category)
                      });
                    });
                  }
                }
              } catch (e) {}
              return initialNews;
            }),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            news = _reactExports$useStat16[0],
            setNews = _reactExports$useStat16[1];
          reactExports.useEffect(function () {
            getIdbItem("halaba_news_full_cache_v2").then(function (cached) {
              if (cached && Array.isArray(cached) && cached.length > 0) {
                setNews(function (currentNews) {
                  var currentMap = new Map(currentNews.map(function (n) {
                    return [n.id, n];
                  }));
                  var hasChanges = false;
                  var merged = cached.map(function (c) {
                    var live = currentMap.get(c.id);
                    if (!live) {
                      hasChanges = true;
                      return c;
                    }
                    if (!live.imageUrl || live.imageUrl.length < 5e3 && c.imageUrl && c.imageUrl.length > 5e3) {
                      hasChanges = true;
                      return _objectSpread(_objectSpread({}, live), {}, {
                        imageUrl: c.imageUrl
                      });
                    }
                    return live;
                  });
                  currentNews.forEach(function (n) {
                    if (!merged.some(function (m) {
                      return m.id === n.id;
                    })) {
                      merged.unshift(n);
                      hasChanges = true;
                    }
                  });
                  return hasChanges ? merged : currentNews;
                });
              }
            }).catch(function () {});
          }, []);
          reactExports.useEffect(function () {
            var q = query(collection(db, "news"), orderBy("createdAt", "desc"));
            var unsubscribe = onSnapshot(q, function (snapshot) {
              if (snapshot.empty) {
                return;
              }
              var liveArticles = snapshot.docs.map(function (docSnap) {
                var data = docSnap.data();
                var initialMatch = initialNews.find(function (n) {
                  return n.id === docSnap.id;
                });
                var resolvedImage = data.imageUrl || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.imageUrl) || getCategoryFallbackImage(data.category);
                return {
                  id: docSnap.id,
                  title: _typeof(data.title) === "object" && data.title !== null ? {
                    en: data.title.en || "",
                    am: data.title.am || data.title.en || "",
                    om: data.title.om || data.title.en || ""
                  } : initialMatch ? initialMatch.title : {
                    en: String(data.title || ""),
                    am: String(data.title || ""),
                    om: String(data.title || "")
                  },
                  summary: _typeof(data.summary) === "object" && data.summary !== null ? {
                    en: data.summary.en || "",
                    am: data.summary.am || data.summary.en || "",
                    om: data.summary.om || data.summary.en || ""
                  } : initialMatch ? initialMatch.summary : {
                    en: String(data.summary || ""),
                    am: String(data.summary || ""),
                    om: String(data.summary || "")
                  },
                  content: _typeof(data.content) === "object" && data.content !== null ? {
                    en: data.content.en || "",
                    am: data.content.am || data.content.en || "",
                    om: data.content.om || data.content.en || ""
                  } : initialMatch ? initialMatch.content : {
                    en: String(data.content || ""),
                    am: String(data.content || ""),
                    om: String(data.content || "")
                  },
                  category: data.category || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.category) || "CLUB_NEWS",
                  date: data.date || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.date) || (/* @__PURE__ */new Date()).toISOString().slice(0, 10),
                  author: data.author || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.author) || "Club Administration",
                  imageUrl: resolvedImage,
                  readTime: data.readTime || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.readTime) || "3 min read",
                  isFeatured: docSnap.id === "news-1793126013273" || docSnap.id === "sxRTmExguBl4NTz4RYjR" || Boolean(data.isFeatured || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.isFeatured))
                };
              });
              initialNews.forEach(function (initArt) {
                if (!liveArticles.some(function (a) {
                  return a.id === initArt.id;
                })) {
                  liveArticles.push(_objectSpread({}, initArt));
                }
              });
              if (liveArticles.length > 0) {
                setNews(liveArticles);
                setIdbItem("halaba_news_full_cache_v2", liveArticles);
                Promise.all(liveArticles.map(/*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(art) {
                    var thumb, _t1;
                    return _regenerator().w(function (_context9) {
                      while (1) switch (_context9.p = _context9.n) {
                        case 0:
                          if (!(art.imageUrl && art.imageUrl.startsWith("data:"))) {
                            _context9.n = 4;
                            break;
                          }
                          _context9.p = 1;
                          _context9.n = 2;
                          return createThumbnail(art.imageUrl, 360, 0.55);
                        case 2:
                          thumb = _context9.v;
                          return _context9.a(2, _objectSpread(_objectSpread({}, art), {}, {
                            imageUrl: thumb
                          }));
                        case 3:
                          _context9.p = 3;
                          _t1 = _context9.v;
                          return _context9.a(2, art);
                        case 4:
                          return _context9.a(2, art);
                      }
                    }, _callee9, null, [[1, 3]]);
                  }));
                  return function (_x10) {
                    return _ref12.apply(this, arguments);
                  };
                }())).then(function (thumbnailArticles) {
                  try {
                    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(thumbnailArticles));
                  } catch (e) {
                    console.warn("Could not cache news thumbnails in localStorage:", e);
                  }
                }).catch(function () {});
              }
            }, function (error) {
              console.error("Firebase real-time news error:", error);
              handleFirestoreError(error, OperationType.LIST, "news");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var addNewsArticle = /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(art) {
              var newId, newArticle, updated, _t10;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    newId = "news-".concat(Date.now());
                    newArticle = _objectSpread(_objectSpread({}, art), {}, {
                      id: newId,
                      imageUrl: art.imageUrl || getCategoryFallbackImage(art.category)
                    });
                    updated = [newArticle].concat(_toConsumableArray(news));
                    setNews(updated);
                    setIdbItem("halaba_news_full_cache_v2", updated);
                    createThumbnail(newArticle.imageUrl || "", 360, 0.55).then(function (thumb) {
                      try {
                        var cached = updated.map(function (a) {
                          return a.id === newId ? _objectSpread(_objectSpread({}, a), {}, {
                            imageUrl: thumb
                          }) : a;
                        });
                        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(cached));
                      } catch (_unused9) {}
                    });
                    _context0.p = 1;
                    _context0.n = 2;
                    return setDoc(doc(db, "news", newId), _objectSpread(_objectSpread({}, art), {}, {
                      createdAt: serverTimestamp()
                    }));
                  case 2:
                    _context0.n = 4;
                    break;
                  case 3:
                    _context0.p = 3;
                    _t10 = _context0.v;
                    console.warn("Could not sync added article to Firestore:", _t10);
                  case 4:
                    return _context0.a(2);
                }
              }, _callee0, null, [[1, 3]]);
            }));
            return function addNewsArticle(_x11) {
              return _ref13.apply(this, arguments);
            };
          }();
          var updateNewsArticle = /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(id, updates) {
              var updated, _t11;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.p = _context1.n) {
                  case 0:
                    updated = news.map(function (n) {
                      return n.id === id ? _objectSpread(_objectSpread({}, n), updates) : n;
                    });
                    setNews(updated);
                    setIdbItem("halaba_news_full_cache_v2", updated);
                    _context1.p = 1;
                    _context1.n = 2;
                    return setDoc(doc(db, "news", id), _objectSpread(_objectSpread({}, updates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 2:
                    _context1.n = 4;
                    break;
                  case 3:
                    _context1.p = 3;
                    _t11 = _context1.v;
                    console.warn("Could not sync updated article to Firestore:", _t11);
                  case 4:
                    return _context1.a(2);
                }
              }, _callee1, null, [[1, 3]]);
            }));
            return function updateNewsArticle(_x12, _x13) {
              return _ref14.apply(this, arguments);
            };
          }();
          var deleteNewsArticle = /*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(id) {
              var updated, _t12;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.p = _context10.n) {
                  case 0:
                    _context10.p = 0;
                    _context10.n = 1;
                    return deleteDoc(doc(db, "news", id));
                  case 1:
                    _context10.n = 3;
                    break;
                  case 2:
                    _context10.p = 2;
                    _t12 = _context10.v;
                    console.warn("Could not delete news article from Firebase Cloud:", _t12);
                  case 3:
                    updated = news.filter(function (n) {
                      return n.id !== id;
                    });
                    setNews(updated);
                    setIdbItem("halaba_news_full_cache_v2", updated);
                    try {
                      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
                    } catch (_unused0) {}
                  case 4:
                    return _context10.a(2);
                }
              }, _callee10, null, [[0, 2]]);
            }));
            return function deleteNewsArticle(_x14) {
              return _ref15.apply(this, arguments);
            };
          }();
          var _reactExports$useStat17 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.PLAYERS);
              return saved ? JSON.parse(saved) : initialPlayers;
            }),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            players = _reactExports$useStat18[0],
            setPlayers = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.STAFF);
              return saved ? JSON.parse(saved) : initialStaff;
            }),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            staff = _reactExports$useStat20[0],
            setStaff = _reactExports$useStat20[1];
          reactExports.useEffect(function () {
            var playersRef = collection(db, "players");
            var unsubscribe = onSnapshot(playersRef, /*#__PURE__*/function () {
              var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(snapshot) {
                var seeded, _i4, _initialPlayers, p, livePlayers, _t13;
                return _regenerator().w(function (_context11) {
                  while (1) switch (_context11.p = _context11.n) {
                    case 0:
                      if (!snapshot.empty) {
                        _context11.n = 7;
                        break;
                      }
                      seeded = localStorage.getItem("hcfc_firestore_players_seeded");
                      if (seeded) {
                        _context11.n = 6;
                        break;
                      }
                      _context11.p = 1;
                      _i4 = 0, _initialPlayers = initialPlayers;
                    case 2:
                      if (!(_i4 < _initialPlayers.length)) {
                        _context11.n = 4;
                        break;
                      }
                      p = _initialPlayers[_i4];
                      _context11.n = 3;
                      return setDoc(doc(db, "players", p.id), _objectSpread(_objectSpread({}, p), {}, {
                        updatedAt: serverTimestamp()
                      }));
                    case 3:
                      _i4++;
                      _context11.n = 2;
                      break;
                    case 4:
                      localStorage.setItem("hcfc_firestore_players_seeded", "true");
                      _context11.n = 6;
                      break;
                    case 5:
                      _context11.p = 5;
                      _t13 = _context11.v;
                      console.warn("Could not seed players:", _t13);
                    case 6:
                      return _context11.a(2);
                    case 7:
                      livePlayers = snapshot.docs.map(function (docSnap) {
                        var data = docSnap.data();
                        return {
                          id: docSnap.id,
                          number: data.number || 10,
                          name: data.name || "Player",
                          position: data.position || "Midfielder",
                          nationality: data.nationality || "Ethiopian",
                          birthYear: data.birthYear || 2e3,
                          appearances: data.appearances || 0,
                          goals: data.goals || 0,
                          assists: data.assists || 0,
                          cleanSheets: data.cleanSheets || 0,
                          isCaptain: Boolean(data.isCaptain),
                          photoUrl: data.photoUrl
                        };
                      });
                      if (livePlayers.length > 0) {
                        setPlayers(livePlayers);
                        localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(livePlayers));
                        localStorage.setItem("hcfc_firestore_players_seeded", "true");
                      }
                    case 8:
                      return _context11.a(2);
                  }
                }, _callee11, null, [[1, 5]]);
              }));
              return function (_x15) {
                return _ref16.apply(this, arguments);
              };
            }(), function (error) {
              console.error("Firebase real-time players error:", error);
              handleFirestoreError(error, OperationType.LIST, "players");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          reactExports.useEffect(function () {
            var staffRef = collection(db, "staff");
            var unsubscribe = onSnapshot(staffRef, /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(snapshot) {
                var seeded, _i5, _initialStaff, s, liveStaff, _t14;
                return _regenerator().w(function (_context12) {
                  while (1) switch (_context12.p = _context12.n) {
                    case 0:
                      if (!snapshot.empty) {
                        _context12.n = 7;
                        break;
                      }
                      seeded = localStorage.getItem("hcfc_firestore_staff_seeded");
                      if (seeded) {
                        _context12.n = 6;
                        break;
                      }
                      _context12.p = 1;
                      _i5 = 0, _initialStaff = initialStaff;
                    case 2:
                      if (!(_i5 < _initialStaff.length)) {
                        _context12.n = 4;
                        break;
                      }
                      s = _initialStaff[_i5];
                      _context12.n = 3;
                      return setDoc(doc(db, "staff", s.id), _objectSpread(_objectSpread({}, s), {}, {
                        updatedAt: serverTimestamp()
                      }));
                    case 3:
                      _i5++;
                      _context12.n = 2;
                      break;
                    case 4:
                      localStorage.setItem("hcfc_firestore_staff_seeded", "true");
                      _context12.n = 6;
                      break;
                    case 5:
                      _context12.p = 5;
                      _t14 = _context12.v;
                      console.warn("Could not seed staff:", _t14);
                    case 6:
                      return _context12.a(2);
                    case 7:
                      liveStaff = snapshot.docs.map(function (docSnap) {
                        var data = docSnap.data();
                        return {
                          id: docSnap.id,
                          name: data.name || "Staff",
                          role: data.role || "Coach",
                          department: data.department || "Coaching",
                          nationality: data.nationality || "Ethiopian",
                          photoUrl: data.photoUrl
                        };
                      });
                      if (liveStaff.length > 0) {
                        setStaff(liveStaff);
                        localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(liveStaff));
                        localStorage.setItem("hcfc_firestore_staff_seeded", "true");
                      }
                    case 8:
                      return _context12.a(2);
                  }
                }, _callee12, null, [[1, 5]]);
              }));
              return function (_x16) {
                return _ref17.apply(this, arguments);
              };
            }(), function (error) {
              console.error("Firebase real-time staff error:", error);
              handleFirestoreError(error, OperationType.LIST, "staff");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var addPlayer = /*#__PURE__*/function () {
            var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(p) {
              var id, newP, updated, _t15;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.p = _context13.n) {
                  case 0:
                    id = "p-".concat(Date.now());
                    newP = _objectSpread(_objectSpread({}, p), {}, {
                      id: id
                    });
                    updated = [].concat(_toConsumableArray(players), [newP]);
                    setPlayers(updated);
                    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
                    _context13.p = 1;
                    _context13.n = 2;
                    return setDoc(doc(db, "players", id), _objectSpread(_objectSpread({}, newP), {}, {
                      updatedAt: serverTimestamp()
                    }));
                  case 2:
                    _context13.n = 4;
                    break;
                  case 3:
                    _context13.p = 3;
                    _t15 = _context13.v;
                    console.error("Firestore add player error:", _t15);
                    handleFirestoreError(_t15, OperationType.CREATE, "players/".concat(id));
                  case 4:
                    return _context13.a(2);
                }
              }, _callee13, null, [[1, 3]]);
            }));
            return function addPlayer(_x17) {
              return _ref18.apply(this, arguments);
            };
          }();
          var updatePlayer = /*#__PURE__*/function () {
            var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(id, updates) {
              var updated, _t16;
              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.p = _context14.n) {
                  case 0:
                    updated = players.map(function (p) {
                      return p.id === id ? _objectSpread(_objectSpread({}, p), updates) : p;
                    });
                    setPlayers(updated);
                    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
                    _context14.p = 1;
                    _context14.n = 2;
                    return setDoc(doc(db, "players", id), _objectSpread(_objectSpread({}, updates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 2:
                    _context14.n = 4;
                    break;
                  case 3:
                    _context14.p = 3;
                    _t16 = _context14.v;
                    console.error("Firestore update player error:", _t16);
                    handleFirestoreError(_t16, OperationType.UPDATE, "players/".concat(id));
                  case 4:
                    return _context14.a(2);
                }
              }, _callee14, null, [[1, 3]]);
            }));
            return function updatePlayer(_x18, _x19) {
              return _ref19.apply(this, arguments);
            };
          }();
          var deletePlayer = /*#__PURE__*/function () {
            var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(id) {
              var updated, _t17;
              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.p = _context15.n) {
                  case 0:
                    updated = players.filter(function (p) {
                      return p.id !== id;
                    });
                    setPlayers(updated);
                    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(updated));
                    _context15.p = 1;
                    _context15.n = 2;
                    return deleteDoc(doc(db, "players", id));
                  case 2:
                    _context15.n = 4;
                    break;
                  case 3:
                    _context15.p = 3;
                    _t17 = _context15.v;
                    console.error("Firestore delete player error:", _t17);
                    handleFirestoreError(_t17, OperationType.DELETE, "players/".concat(id));
                  case 4:
                    return _context15.a(2);
                }
              }, _callee15, null, [[1, 3]]);
            }));
            return function deletePlayer(_x20) {
              return _ref20.apply(this, arguments);
            };
          }();
          var addStaff = /*#__PURE__*/function () {
            var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(s) {
              var id, newS, updated, _t18;
              return _regenerator().w(function (_context16) {
                while (1) switch (_context16.p = _context16.n) {
                  case 0:
                    id = "s-".concat(Date.now());
                    newS = _objectSpread(_objectSpread({}, s), {}, {
                      id: id
                    });
                    updated = [].concat(_toConsumableArray(staff), [newS]);
                    setStaff(updated);
                    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
                    _context16.p = 1;
                    _context16.n = 2;
                    return setDoc(doc(db, "staff", id), _objectSpread(_objectSpread({}, newS), {}, {
                      updatedAt: serverTimestamp()
                    }));
                  case 2:
                    _context16.n = 4;
                    break;
                  case 3:
                    _context16.p = 3;
                    _t18 = _context16.v;
                    console.error("Firestore add staff error:", _t18);
                    handleFirestoreError(_t18, OperationType.CREATE, "staff/".concat(id));
                  case 4:
                    return _context16.a(2);
                }
              }, _callee16, null, [[1, 3]]);
            }));
            return function addStaff(_x21) {
              return _ref21.apply(this, arguments);
            };
          }();
          var updateStaff = /*#__PURE__*/function () {
            var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(id, updates) {
              var updated, _t19;
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.p = _context17.n) {
                  case 0:
                    updated = staff.map(function (s) {
                      return s.id === id ? _objectSpread(_objectSpread({}, s), updates) : s;
                    });
                    setStaff(updated);
                    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
                    _context17.p = 1;
                    _context17.n = 2;
                    return setDoc(doc(db, "staff", id), _objectSpread(_objectSpread({}, updates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 2:
                    _context17.n = 4;
                    break;
                  case 3:
                    _context17.p = 3;
                    _t19 = _context17.v;
                    console.error("Firestore update staff error:", _t19);
                    handleFirestoreError(_t19, OperationType.UPDATE, "staff/".concat(id));
                  case 4:
                    return _context17.a(2);
                }
              }, _callee17, null, [[1, 3]]);
            }));
            return function updateStaff(_x22, _x23) {
              return _ref22.apply(this, arguments);
            };
          }();
          var deleteStaff = /*#__PURE__*/function () {
            var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(id) {
              var updated, _t20;
              return _regenerator().w(function (_context18) {
                while (1) switch (_context18.p = _context18.n) {
                  case 0:
                    updated = staff.filter(function (s) {
                      return s.id !== id;
                    });
                    setStaff(updated);
                    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(updated));
                    _context18.p = 1;
                    _context18.n = 2;
                    return deleteDoc(doc(db, "staff", id));
                  case 2:
                    _context18.n = 4;
                    break;
                  case 3:
                    _context18.p = 3;
                    _t20 = _context18.v;
                    console.error("Firestore delete staff error:", _t20);
                    handleFirestoreError(_t20, OperationType.DELETE, "staff/".concat(id));
                  case 4:
                    return _context18.a(2);
                }
              }, _callee18, null, [[1, 3]]);
            }));
            return function deleteStaff(_x24) {
              return _ref23.apply(this, arguments);
            };
          }();
          var _reactExports$useStat21 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.MEMBERSHIPS);
              return saved ? JSON.parse(saved) : initialMemberships;
            }),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            memberships = _reactExports$useStat22[0],
            setMemberships = _reactExports$useStat22[1];
          reactExports.useEffect(function () {
            var membershipsRef = collection(db, "memberships");
            var unsubscribe = onSnapshot(membershipsRef, /*#__PURE__*/function () {
              var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(snapshot) {
                var seeded, _i6, _initialMemberships, m, liveMemberships, _t21;
                return _regenerator().w(function (_context19) {
                  while (1) switch (_context19.p = _context19.n) {
                    case 0:
                      if (!snapshot.empty) {
                        _context19.n = 7;
                        break;
                      }
                      seeded = localStorage.getItem("hcfc_firestore_memberships_seeded");
                      if (seeded) {
                        _context19.n = 6;
                        break;
                      }
                      _context19.p = 1;
                      _i6 = 0, _initialMemberships = initialMemberships;
                    case 2:
                      if (!(_i6 < _initialMemberships.length)) {
                        _context19.n = 4;
                        break;
                      }
                      m = _initialMemberships[_i6];
                      _context19.n = 3;
                      return setDoc(doc(db, "memberships", m.id), _objectSpread(_objectSpread({}, m), {}, {
                        updatedAt: serverTimestamp()
                      }));
                    case 3:
                      _i6++;
                      _context19.n = 2;
                      break;
                    case 4:
                      localStorage.setItem("hcfc_firestore_memberships_seeded", "true");
                      _context19.n = 6;
                      break;
                    case 5:
                      _context19.p = 5;
                      _t21 = _context19.v;
                      console.warn("Could not seed memberships:", _t21);
                    case 6:
                      return _context19.a(2);
                    case 7:
                      liveMemberships = snapshot.docs.map(function (docSnap) {
                        var data = docSnap.data();
                        return {
                          id: docSnap.id,
                          referenceNumber: data.referenceNumber || "HCFC-M1234",
                          fullName: data.fullName || "Supporter",
                          dateOfBirth: data.dateOfBirth || "2000-01-01",
                          gender: data.gender,
                          phone: data.phone || "",
                          email: data.email,
                          cityOrRegion: data.cityOrRegion || "Halaba",
                          membershipType: data.membershipType || "STANDARD",
                          preferredLanguage: data.preferredLanguage || "en",
                          registeredAt: data.registeredAt || (/* @__PURE__ */new Date()).toISOString(),
                          status: data.status || "APPROVED",
                          amountPaid: data.amountPaid,
                          tx_ref: data.tx_ref,
                          paymentStatus: data.paymentStatus,
                          paymentDate: data.paymentDate,
                          notes: data.notes
                        };
                      });
                      if (liveMemberships.length > 0) {
                        setMemberships(liveMemberships);
                        localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(liveMemberships));
                        localStorage.setItem("hcfc_firestore_memberships_seeded", "true");
                      }
                    case 8:
                      return _context19.a(2);
                  }
                }, _callee19, null, [[1, 5]]);
              }));
              return function (_x25) {
                return _ref24.apply(this, arguments);
              };
            }(), function (error) {
              console.error("Firebase real-time memberships error:", error);
              handleFirestoreError(error, OperationType.LIST, "memberships");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var submitMembership = /*#__PURE__*/function () {
            var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(data) {
              var _data$email;
              var randNum, referenceNumber, id, newApplication, updated, _t22;
              return _regenerator().w(function (_context20) {
                while (1) switch (_context20.p = _context20.n) {
                  case 0:
                    randNum = Math.floor(1e3 + Math.random() * 9e3);
                    referenceNumber = "HCFC-2026-M".concat(randNum);
                    id = "mem-".concat(Date.now());
                    newApplication = {
                      id: id,
                      referenceNumber: referenceNumber,
                      fullName: data.fullName.trim(),
                      dateOfBirth: data.dateOfBirth,
                      gender: data.gender,
                      phone: data.phone.trim(),
                      email: ((_data$email = data.email) === null || _data$email === void 0 ? void 0 : _data$email.trim()) || void 0,
                      cityOrRegion: data.cityOrRegion.trim(),
                      membershipType: data.membershipType,
                      preferredLanguage: data.preferredLanguage,
                      registeredAt: (/* @__PURE__ */new Date()).toISOString(),
                      status: "APPROVED",
                      amountPaid: data.amountPaid,
                      tx_ref: data.tx_ref,
                      paymentStatus: "PAID",
                      paymentDate: (/* @__PURE__ */new Date()).toISOString()
                    };
                    _context20.n = 1;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 400);
                    });
                  case 1:
                    updated = [newApplication].concat(_toConsumableArray(memberships));
                    setMemberships(updated);
                    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
                    _context20.p = 2;
                    _context20.n = 3;
                    return setDoc(doc(db, "memberships", id), _objectSpread(_objectSpread({}, newApplication), {}, {
                      createdAt: serverTimestamp(),
                      updatedAt: serverTimestamp()
                    }));
                  case 3:
                    _context20.n = 5;
                    break;
                  case 4:
                    _context20.p = 4;
                    _t22 = _context20.v;
                    console.error("Firestore submit membership error:", _t22);
                    handleFirestoreError(_t22, OperationType.CREATE, "memberships/".concat(id));
                  case 5:
                    return _context20.a(2, {
                      success: true,
                      referenceNumber: referenceNumber
                    });
                }
              }, _callee20, null, [[2, 4]]);
            }));
            return function submitMembership(_x26) {
              return _ref25.apply(this, arguments);
            };
          }();
          var recordVerifiedMembership = /*#__PURE__*/function () {
            var _ref26 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(data) {
              var _data$email2;
              var id, newApplication, updated, _t23;
              return _regenerator().w(function (_context21) {
                while (1) switch (_context21.p = _context21.n) {
                  case 0:
                    id = "mem-".concat(Date.now());
                    newApplication = {
                      id: id,
                      referenceNumber: data.referenceNumber,
                      fullName: data.fullName.trim(),
                      dateOfBirth: data.dateOfBirth,
                      gender: data.gender,
                      phone: data.phone.trim(),
                      email: ((_data$email2 = data.email) === null || _data$email2 === void 0 ? void 0 : _data$email2.trim()) || void 0,
                      cityOrRegion: data.cityOrRegion.trim(),
                      membershipType: data.membershipType,
                      preferredLanguage: data.preferredLanguage,
                      registeredAt: (/* @__PURE__ */new Date()).toISOString(),
                      status: "APPROVED",
                      amountPaid: data.amountPaid,
                      tx_ref: data.tx_ref,
                      paymentStatus: "PAID",
                      paymentDate: (/* @__PURE__ */new Date()).toISOString()
                    };
                    updated = [newApplication].concat(_toConsumableArray(memberships.filter(function (m) {
                      return m.referenceNumber !== data.referenceNumber && m.tx_ref !== data.tx_ref;
                    })));
                    setMemberships(updated);
                    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
                    _context21.p = 1;
                    _context21.n = 2;
                    return setDoc(doc(db, "memberships", id), _objectSpread(_objectSpread({}, newApplication), {}, {
                      createdAt: serverTimestamp(),
                      updatedAt: serverTimestamp()
                    }));
                  case 2:
                    _context21.n = 4;
                    break;
                  case 3:
                    _context21.p = 3;
                    _t23 = _context21.v;
                    console.error("Firestore record verified membership error:", _t23);
                    handleFirestoreError(_t23, OperationType.CREATE, "memberships/".concat(id));
                  case 4:
                    return _context21.a(2, newApplication);
                }
              }, _callee21, null, [[1, 3]]);
            }));
            return function recordVerifiedMembership(_x27) {
              return _ref26.apply(this, arguments);
            };
          }();
          var updateMembershipStatus = /*#__PURE__*/function () {
            var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(id, status) {
              var updated, _t24;
              return _regenerator().w(function (_context22) {
                while (1) switch (_context22.p = _context22.n) {
                  case 0:
                    updated = memberships.map(function (m) {
                      return m.id === id ? _objectSpread(_objectSpread({}, m), {}, {
                        status: status
                      }) : m;
                    });
                    setMemberships(updated);
                    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
                    _context22.p = 1;
                    _context22.n = 2;
                    return setDoc(doc(db, "memberships", id), {
                      status: status,
                      updatedAt: serverTimestamp()
                    }, {
                      merge: true
                    });
                  case 2:
                    _context22.n = 4;
                    break;
                  case 3:
                    _context22.p = 3;
                    _t24 = _context22.v;
                    console.error("Firestore update membership status error:", _t24);
                    handleFirestoreError(_t24, OperationType.UPDATE, "memberships/".concat(id));
                  case 4:
                    return _context22.a(2);
                }
              }, _callee22, null, [[1, 3]]);
            }));
            return function updateMembershipStatus(_x28, _x29) {
              return _ref27.apply(this, arguments);
            };
          }();
          var deleteMembership = /*#__PURE__*/function () {
            var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(id) {
              var updated, _t25;
              return _regenerator().w(function (_context23) {
                while (1) switch (_context23.p = _context23.n) {
                  case 0:
                    updated = memberships.filter(function (m) {
                      return m.id !== id;
                    });
                    setMemberships(updated);
                    localStorage.setItem(STORAGE_KEYS.MEMBERSHIPS, JSON.stringify(updated));
                    _context23.p = 1;
                    _context23.n = 2;
                    return deleteDoc(doc(db, "memberships", id));
                  case 2:
                    _context23.n = 4;
                    break;
                  case 3:
                    _context23.p = 3;
                    _t25 = _context23.v;
                    console.error("Firestore delete membership error:", _t25);
                    handleFirestoreError(_t25, OperationType.DELETE, "memberships/".concat(id));
                  case 4:
                    return _context23.a(2);
                }
              }, _callee23, null, [[1, 3]]);
            }));
            return function deleteMembership(_x30) {
              return _ref28.apply(this, arguments);
            };
          }();
          var _reactExports$useStat23 = reactExports.useState(function () {
              try {
                var saved = localStorage.getItem(STORAGE_KEYS.SHOP_ITEMS);
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed.map(function (item) {
                      var initialMatch = initialShopItems.find(function (i) {
                        return i.id === item.id;
                      });
                      return _objectSpread(_objectSpread({}, item), {}, {
                        imageUrl: item.imageUrl || (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.imageUrl) || ClubImages.jerseyHomeReal
                      });
                    });
                  }
                }
              } catch (e) {}
              return initialShopItems;
            }),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            shopItems = _reactExports$useStat24[0],
            setShopItems = _reactExports$useStat24[1];
          var _reactExports$useStat25 = reactExports.useState(false),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            isProductsLoading = _reactExports$useStat26[0],
            setIsProductsLoading = _reactExports$useStat26[1];
          var _reactExports$useStat27 = reactExports.useState(null),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            productsSyncError = _reactExports$useStat28[0],
            setProductsSyncError = _reactExports$useStat28[1];
          reactExports.useEffect(function () {
            var productsRef = collection(db, "products");
            var unsubscribe = onSnapshot(productsRef, /*#__PURE__*/function () {
              var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(snapshot) {
                var hasSeeded, _i7, _initialShopItems, item, liveProducts, cacheSafeProds, _t26;
                return _regenerator().w(function (_context24) {
                  while (1) switch (_context24.p = _context24.n) {
                    case 0:
                      setIsProductsLoading(false);
                      setProductsSyncError(null);
                      if (!snapshot.empty) {
                        _context24.n = 9;
                        break;
                      }
                      hasSeeded = localStorage.getItem("hcfc_firestore_products_seeded");
                      if (hasSeeded) {
                        _context24.n = 7;
                        break;
                      }
                      _context24.p = 1;
                      _i7 = 0, _initialShopItems = initialShopItems;
                    case 2:
                      if (!(_i7 < _initialShopItems.length)) {
                        _context24.n = 4;
                        break;
                      }
                      item = _initialShopItems[_i7];
                      _context24.n = 3;
                      return setDoc(doc(db, "products", item.id), {
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        imageUrl: item.imageUrl,
                        availableSizes: item.availableSizes,
                        category: item.category || "JERSEY",
                        inStock: item.inStock !== void 0 ? item.inStock : true,
                        featured: item.featured !== void 0 ? item.featured : false,
                        createdAt: (/* @__PURE__ */new Date()).toISOString(),
                        updatedAt: (/* @__PURE__ */new Date()).toISOString()
                      });
                    case 3:
                      _i7++;
                      _context24.n = 2;
                      break;
                    case 4:
                      localStorage.setItem("hcfc_firestore_products_seeded", "true");
                      _context24.n = 6;
                      break;
                    case 5:
                      _context24.p = 5;
                      _t26 = _context24.v;
                      console.warn("Could not auto-seed default products to Firestore:", _t26);
                    case 6:
                      _context24.n = 8;
                      break;
                    case 7:
                      setShopItems(initialShopItems);
                      localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
                    case 8:
                      return _context24.a(2);
                    case 9:
                      liveProducts = snapshot.docs.map(function (docSnap) {
                        var data = docSnap.data();
                        var initialMatch = initialShopItems.find(function (i) {
                          return i.id === docSnap.id;
                        });
                        var resolvedImage = (initialMatch === null || initialMatch === void 0 ? void 0 : initialMatch.imageUrl) || data.imageUrl || ClubImages.jerseyHomeReal;
                        return {
                          id: docSnap.id,
                          name: _typeof(data.name) === "object" && data.name !== null ? {
                            en: data.name.en || "",
                            am: data.name.am || data.name.en || "",
                            om: data.name.om || data.name.en || ""
                          } : initialMatch ? initialMatch.name : {
                            en: String(data.name || ""),
                            am: String(data.name || ""),
                            om: String(data.name || "")
                          },
                          description: _typeof(data.description) === "object" && data.description !== null ? {
                            en: data.description.en || "",
                            am: data.description.am || data.description.en || "",
                            om: data.description.om || data.description.en || ""
                          } : initialMatch ? initialMatch.description : {
                            en: String(data.description || ""),
                            am: String(data.description || ""),
                            om: String(data.description || "")
                          },
                          price: typeof data.price === "number" ? data.price : initialMatch ? initialMatch.price : parseFloat(data.price) || 0,
                          imageUrl: resolvedImage,
                          availableSizes: Array.isArray(data.availableSizes) && data.availableSizes.length > 0 ? data.availableSizes : initialMatch ? initialMatch.availableSizes : ["S", "M", "L", "XL"],
                          category: data.category || (initialMatch ? initialMatch.category : "JERSEY"),
                          inStock: data.inStock !== void 0 ? Boolean(data.inStock) : true,
                          featured: Boolean(data.featured) || (initialMatch ? initialMatch.featured : false)
                        };
                      });
                      initialShopItems.forEach(function (initItem) {
                        if (!liveProducts.some(function (p) {
                          return p.id === initItem.id;
                        })) {
                          liveProducts.push(_objectSpread({}, initItem));
                        }
                      });
                      liveProducts.sort(function (a, b) {
                        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
                      });
                      setShopItems(liveProducts);
                      try {
                        cacheSafeProds = liveProducts.map(function (p) {
                          var _p$imageUrl;
                          return _objectSpread(_objectSpread({}, p), {}, {
                            imageUrl: (_p$imageUrl = p.imageUrl) !== null && _p$imageUrl !== void 0 && _p$imageUrl.startsWith("data:") ? "" : p.imageUrl
                          });
                        });
                        localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(cacheSafeProds));
                      } catch (e) {
                        console.warn("Could not cache shop items in localStorage:", e);
                      }
                      localStorage.setItem("hcfc_firestore_products_seeded", "true");
                    case 10:
                      return _context24.a(2);
                  }
                }, _callee24, null, [[1, 5]]);
              }));
              return function (_x31) {
                return _ref29.apply(this, arguments);
              };
            }(), function (error) {
              console.error("Firebase real-time products sync error:", error);
              setProductsSyncError(error.message);
              handleFirestoreError(error, OperationType.LIST, "products");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var addShopItem = /*#__PURE__*/function () {
            var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(item) {
              var docRef, newItem, fallbackId, _newItem, updated, _t27;
              return _regenerator().w(function (_context25) {
                while (1) switch (_context25.p = _context25.n) {
                  case 0:
                    _context25.p = 0;
                    _context25.n = 1;
                    return addDoc(collection(db, "products"), {
                      name: item.name,
                      description: item.description,
                      price: item.price,
                      imageUrl: item.imageUrl,
                      availableSizes: item.availableSizes,
                      category: item.category || "JERSEY",
                      inStock: item.inStock !== void 0 ? item.inStock : true,
                      featured: Boolean(item.featured),
                      createdAt: serverTimestamp(),
                      updatedAt: serverTimestamp()
                    });
                  case 1:
                    docRef = _context25.v;
                    newItem = _objectSpread(_objectSpread({}, item), {}, {
                      id: docRef.id
                    });
                    setShopItems(function (prev) {
                      return [newItem].concat(_toConsumableArray(prev.filter(function (p) {
                        return p.id !== docRef.id;
                      })));
                    });
                    localStorage.setItem("hcfc_firestore_products_seeded", "true");
                    return _context25.a(2, docRef.id);
                  case 2:
                    _context25.p = 2;
                    _t27 = _context25.v;
                    console.error("Firestore add product error, falling back locally:", _t27);
                    handleFirestoreError(_t27, OperationType.CREATE, "products");
                    fallbackId = "shop-".concat(Date.now());
                    _newItem = _objectSpread(_objectSpread({}, item), {}, {
                      id: fallbackId
                    });
                    updated = [_newItem].concat(_toConsumableArray(shopItems));
                    setShopItems(updated);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
                    return _context25.a(2, fallbackId);
                }
              }, _callee25, null, [[0, 2]]);
            }));
            return function addShopItem(_x32) {
              return _ref30.apply(this, arguments);
            };
          }();
          var updateShopItem = /*#__PURE__*/function () {
            var _ref31 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(id, updates) {
              var productRef, updated, _updated, _t28;
              return _regenerator().w(function (_context26) {
                while (1) switch (_context26.p = _context26.n) {
                  case 0:
                    _context26.p = 0;
                    productRef = doc(db, "products", id);
                    _context26.n = 1;
                    return setDoc(productRef, _objectSpread(_objectSpread({}, updates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 1:
                    updated = shopItems.map(function (item) {
                      return item.id === id ? _objectSpread(_objectSpread({}, item), updates) : item;
                    });
                    setShopItems(updated);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
                    _context26.n = 3;
                    break;
                  case 2:
                    _context26.p = 2;
                    _t28 = _context26.v;
                    console.error("Firestore update product error, falling back locally:", _t28);
                    handleFirestoreError(_t28, OperationType.UPDATE, "products/".concat(id));
                    _updated = shopItems.map(function (item) {
                      return item.id === id ? _objectSpread(_objectSpread({}, item), updates) : item;
                    });
                    setShopItems(_updated);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(_updated));
                  case 3:
                    return _context26.a(2);
                }
              }, _callee26, null, [[0, 2]]);
            }));
            return function updateShopItem(_x33, _x34) {
              return _ref31.apply(this, arguments);
            };
          }();
          var deleteShopItem = /*#__PURE__*/function () {
            var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(id) {
              var productRef, updated, _updated2, _t29;
              return _regenerator().w(function (_context27) {
                while (1) switch (_context27.p = _context27.n) {
                  case 0:
                    _context27.p = 0;
                    productRef = doc(db, "products", id);
                    _context27.n = 1;
                    return deleteDoc(productRef);
                  case 1:
                    updated = shopItems.filter(function (item) {
                      return item.id !== id;
                    });
                    setShopItems(updated);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(updated));
                    _context27.n = 3;
                    break;
                  case 2:
                    _context27.p = 2;
                    _t29 = _context27.v;
                    console.error("Firestore delete product error, falling back locally:", _t29);
                    handleFirestoreError(_t29, OperationType.DELETE, "products/".concat(id));
                    _updated2 = shopItems.filter(function (item) {
                      return item.id !== id;
                    });
                    setShopItems(_updated2);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(_updated2));
                  case 3:
                    return _context27.a(2);
                }
              }, _callee27, null, [[0, 2]]);
            }));
            return function deleteShopItem(_x35) {
              return _ref32.apply(this, arguments);
            };
          }();
          var resetShopItems = /*#__PURE__*/function () {
            var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
              var _i8, _initialShopItems2, item, _t30;
              return _regenerator().w(function (_context28) {
                while (1) switch (_context28.p = _context28.n) {
                  case 0:
                    _context28.p = 0;
                    _i8 = 0, _initialShopItems2 = initialShopItems;
                  case 1:
                    if (!(_i8 < _initialShopItems2.length)) {
                      _context28.n = 3;
                      break;
                    }
                    item = _initialShopItems2[_i8];
                    _context28.n = 2;
                    return setDoc(doc(db, "products", item.id), {
                      name: item.name,
                      description: item.description,
                      price: item.price,
                      imageUrl: item.imageUrl,
                      availableSizes: item.availableSizes,
                      category: item.category || "JERSEY",
                      inStock: item.inStock !== void 0 ? item.inStock : true,
                      featured: item.featured !== void 0 ? item.featured : false,
                      updatedAt: serverTimestamp()
                    }, {
                      merge: true
                    });
                  case 2:
                    _i8++;
                    _context28.n = 1;
                    break;
                  case 3:
                    localStorage.setItem("hcfc_firestore_products_seeded", "true");
                    _context28.n = 5;
                    break;
                  case 4:
                    _context28.p = 4;
                    _t30 = _context28.v;
                    console.error("Firestore reset products catalog error:", _t30);
                  case 5:
                    setShopItems(initialShopItems);
                    localStorage.setItem(STORAGE_KEYS.SHOP_ITEMS, JSON.stringify(initialShopItems));
                  case 6:
                    return _context28.a(2);
                }
              }, _callee28, null, [[0, 4]]);
            }));
            return function resetShopItems() {
              return _ref33.apply(this, arguments);
            };
          }();
          var _reactExports$useStat29 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.SHOP_ORDERS);
              return saved ? JSON.parse(saved) : [];
            }),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            shopOrders = _reactExports$useStat30[0],
            setShopOrders = _reactExports$useStat30[1];
          var recordShopOrder = function recordShopOrder(order) {
            var updated = [order].concat(_toConsumableArray(shopOrders.filter(function (o) {
              return o.orderNumber !== order.orderNumber && o.tx_ref !== order.tx_ref;
            })));
            setShopOrders(updated);
            localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
          };
          var updateShopOrderStatus = function updateShopOrderStatus(id, status) {
            var updated = shopOrders.map(function (o) {
              return o.id === id || o.orderNumber === id ? _objectSpread(_objectSpread({}, o), {}, {
                status: status
              }) : o;
            });
            setShopOrders(updated);
            localStorage.setItem(STORAGE_KEYS.SHOP_ORDERS, JSON.stringify(updated));
          };
          var _reactExports$useStat31 = reactExports.useState(false),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            isCheckoutModalOpen = _reactExports$useStat32[0],
            setIsCheckoutModalOpen = _reactExports$useStat32[1];
          var _reactExports$useStat33 = reactExports.useState(null),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            checkoutItem = _reactExports$useStat34[0],
            setCheckoutItem = _reactExports$useStat34[1];
          var openCheckoutModal = function openCheckoutModal(item) {
            setCheckoutItem(item);
            setIsCheckoutModalOpen(true);
          };
          var closeCheckoutModal = function closeCheckoutModal() {
            setIsCheckoutModalOpen(false);
            setCheckoutItem(null);
          };
          var _reactExports$useStat35 = reactExports.useState(function () {
              var saved = localStorage.getItem(STORAGE_KEYS.DONATIONS);
              return saved ? JSON.parse(saved) : [];
            }),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            donations = _reactExports$useStat36[0],
            setDonations = _reactExports$useStat36[1];
          var recordDonation = function recordDonation(donation) {
            var updated = [donation].concat(_toConsumableArray(donations.filter(function (d) {
              return d.donationNumber !== donation.donationNumber && d.tx_ref !== donation.tx_ref;
            })));
            setDonations(updated);
            localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(updated));
          };
          var _reactExports$useStat37 = reactExports.useState(false),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            isDonationModalOpen = _reactExports$useStat38[0],
            setIsDonationModalOpen = _reactExports$useStat38[1];
          var openDonationModal = function openDonationModal() {
            return setIsDonationModalOpen(true);
          };
          var closeDonationModal = function closeDonationModal() {
            return setIsDonationModalOpen(false);
          };
          var _reactExports$useStat39 = reactExports.useState(null),
            _reactExports$useStat40 = _slicedToArray(_reactExports$useStat39, 2),
            adminUser = _reactExports$useStat40[0],
            setAdminUser = _reactExports$useStat40[1];
          var _reactExports$useStat41 = reactExports.useState(function () {
              return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === "true";
            }),
            _reactExports$useStat42 = _slicedToArray(_reactExports$useStat41, 2),
            isAdminLoggedIn = _reactExports$useStat42[0],
            setIsAdminLoggedIn = _reactExports$useStat42[1];
          var _reactExports$useStat43 = reactExports.useState(null),
            _reactExports$useStat44 = _slicedToArray(_reactExports$useStat43, 2),
            adminUsername = _reactExports$useStat44[0],
            setAdminUsername = _reactExports$useStat44[1];
          var _reactExports$useStat45 = reactExports.useState(true),
            _reactExports$useStat46 = _slicedToArray(_reactExports$useStat45, 2),
            isAuthChecking = _reactExports$useStat46[0],
            setIsAuthChecking = _reactExports$useStat46[1];
          reactExports.useEffect(function () {
            var unsubscribe = onAuthStateChanged(auth, function (user) {
              if (user) {
                setAdminUser(user);
                setIsAdminLoggedIn(true);
                setAdminUsername(user.displayName || user.email || "Admin");
                localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, "true");
              } else {
                setAdminUser(null);
                setIsAdminLoggedIn(false);
                setAdminUsername(null);
                localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
              }
              setIsAuthChecking(false);
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var loginAdmin = /*#__PURE__*/function () {
            var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(email, pass) {
              var userCredential, user, errorMsg, code, _t31;
              return _regenerator().w(function (_context29) {
                while (1) switch (_context29.p = _context29.n) {
                  case 0:
                    _context29.p = 0;
                    _context29.n = 1;
                    return signInWithEmailAndPassword(auth, email.trim(), pass);
                  case 1:
                    userCredential = _context29.v;
                    user = userCredential.user;
                    setAdminUser(user);
                    setIsAdminLoggedIn(true);
                    setAdminUsername(user.displayName || user.email || "Admin");
                    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, "true");
                    return _context29.a(2, {
                      success: true
                    });
                  case 2:
                    _context29.p = 2;
                    _t31 = _context29.v;
                    console.error("Firebase signInWithEmailAndPassword error:", _t31);
                    errorMsg = "Invalid email or password.";
                    code = (_t31 === null || _t31 === void 0 ? void 0 : _t31.code) || "";
                    if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
                      errorMsg = "Invalid email or password. Please verify your administrator credentials.";
                    } else if (code === "auth/invalid-email") {
                      errorMsg = "Please enter a valid email address.";
                    } else if (code === "auth/user-disabled") {
                      errorMsg = "This administrator account has been disabled.";
                    } else if (code === "auth/too-many-requests") {
                      errorMsg = "Too many failed login attempts. Access temporarily restricted. Please try again later.";
                    } else if (code === "auth/network-request-failed") {
                      errorMsg = "Network error. Please check your internet connection.";
                    } else if (_t31 !== null && _t31 !== void 0 && _t31.message) {
                      errorMsg = _t31.message;
                    }
                    return _context29.a(2, {
                      success: false,
                      error: errorMsg
                    });
                }
              }, _callee29, null, [[0, 2]]);
            }));
            return function loginAdmin(_x36, _x37) {
              return _ref34.apply(this, arguments);
            };
          }();
          var logoutAdmin = /*#__PURE__*/function () {
            var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30() {
              var _t32;
              return _regenerator().w(function (_context30) {
                while (1) switch (_context30.p = _context30.n) {
                  case 0:
                    _context30.p = 0;
                    _context30.n = 1;
                    return signOut(auth);
                  case 1:
                    _context30.n = 3;
                    break;
                  case 2:
                    _context30.p = 2;
                    _t32 = _context30.v;
                    console.error("Firebase signOut error:", _t32);
                  case 3:
                    _context30.p = 3;
                    setAdminUser(null);
                    setIsAdminLoggedIn(false);
                    setAdminUsername(null);
                    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
                    return _context30.f(3);
                  case 4:
                    return _context30.a(2);
                }
              }, _callee30, null, [[0, 2, 3, 4]]);
            }));
            return function logoutAdmin() {
              return _ref35.apply(this, arguments);
            };
          }();
          var _reactExports$useStat47 = reactExports.useState(false),
            _reactExports$useStat48 = _slicedToArray(_reactExports$useStat47, 2),
            isDossierOpen = _reactExports$useStat48[0],
            setIsDossierOpen = _reactExports$useStat48[1];
          var openDossier = function openDossier() {
            return setIsDossierOpen(true);
          };
          var closeDossier = function closeDossier() {
            return setIsDossierOpen(false);
          };
          var _reactExports$useStat49 = reactExports.useState([]),
            _reactExports$useStat50 = _slicedToArray(_reactExports$useStat49, 2),
            liveNotifications = _reactExports$useStat50[0],
            setLiveNotifications = _reactExports$useStat50[1];
          var dismissNotification = function dismissNotification(id) {
            setLiveNotifications(function (prev) {
              return prev.filter(function (n) {
                return n.id !== id;
              });
            });
          };
          var _reactExports$useStat51 = reactExports.useState(true),
            _reactExports$useStat52 = _slicedToArray(_reactExports$useStat51, 2),
            isAutoSyncEnabled = _reactExports$useStat52[0],
            setIsAutoSyncEnabled = _reactExports$useStat52[1];
          var _reactExports$useStat53 = reactExports.useState(30),
            _reactExports$useStat54 = _slicedToArray(_reactExports$useStat53, 2),
            autoSyncInterval = _reactExports$useStat54[0],
            setAutoSyncIntervalState = _reactExports$useStat54[1];
          var _reactExports$useStat55 = reactExports.useState(30),
            _reactExports$useStat56 = _slicedToArray(_reactExports$useStat55, 2),
            secondsUntilNextSync = _reactExports$useStat56[0],
            setSecondsUntilNextSync = _reactExports$useStat56[1];
          var _reactExports$useStat57 = reactExports.useState(false),
            _reactExports$useStat58 = _slicedToArray(_reactExports$useStat57, 2),
            isSyncing = _reactExports$useStat58[0],
            setIsSyncing = _reactExports$useStat58[1];
          var _reactExports$useStat59 = reactExports.useState(function () {
              return /* @__PURE__ */new Date();
            }),
            _reactExports$useStat60 = _slicedToArray(_reactExports$useStat59, 2),
            lastSyncTime = _reactExports$useStat60[0],
            setLastSyncTime = _reactExports$useStat60[1];
          var toggleAutoSync = function toggleAutoSync() {
            return setIsAutoSyncEnabled(function (prev) {
              return !prev;
            });
          };
          var setAutoSyncInterval = function setAutoSyncInterval(interval) {
            setAutoSyncIntervalState(interval);
            setSecondsUntilNextSync(interval);
          };
          var syncNow = /*#__PURE__*/function () {
            var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31() {
              var freshStandings, syncSource, res, json, canonicalMap, list, directRes, data, _canonicalMap, mergedList, _iterator7, _step7, item, syncNotif, _t33, _t34, _t35, _t36, _t37;
              return _regenerator().w(function (_context31) {
                while (1) switch (_context31.p = _context31.n) {
                  case 0:
                    setIsSyncing(true);
                    freshStandings = null;
                    syncSource = "TheSportsDB Official EPL Feed";
                    _context31.p = 1;
                    _context31.p = 2;
                    _context31.n = 3;
                    return fetch("/api/standings/sportsdb");
                  case 3:
                    res = _context31.v;
                    if (!res.ok) {
                      _context31.n = 5;
                      break;
                    }
                    _context31.n = 4;
                    return res.json();
                  case 4:
                    json = _context31.v;
                    if (json.success && Array.isArray(json.standings) && json.standings.length > 0) {
                      canonicalMap = /* @__PURE__ */new Map();
                      initialStandings.forEach(function (initT) {
                        return canonicalMap.set(initT.teamId, _objectSpread({}, initT));
                      });
                      json.standings.forEach(function (t2) {
                        var canonicalId = normalizeEplTeamId(t2.teamId, t2.teamName);
                        var isHalaba = canonicalId === "halaba";
                        var existing = canonicalMap.get(canonicalId);
                        canonicalMap.set(canonicalId, {
                          position: t2.position || 1,
                          teamId: canonicalId,
                          teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : t2.teamName || (existing === null || existing === void 0 ? void 0 : existing.teamName) || "Team",
                          played: Number(t2.played) || (existing === null || existing === void 0 ? void 0 : existing.played) || 0,
                          won: Number(t2.won) || (existing === null || existing === void 0 ? void 0 : existing.won) || 0,
                          drawn: Number(t2.drawn) || (existing === null || existing === void 0 ? void 0 : existing.drawn) || 0,
                          lost: Number(t2.lost) || (existing === null || existing === void 0 ? void 0 : existing.lost) || 0,
                          goalsFor: Number(t2.goalsFor) || (existing === null || existing === void 0 ? void 0 : existing.goalsFor) || 0,
                          goalsAgainst: Number(t2.goalsAgainst) || (existing === null || existing === void 0 ? void 0 : existing.goalsAgainst) || 0,
                          goalDifference: (Number(t2.goalsFor) || 0) - (Number(t2.goalsAgainst) || 0),
                          points: Number(t2.points) || (existing === null || existing === void 0 ? void 0 : existing.points) || 0,
                          form: Array.isArray(t2.form) && t2.form.length > 0 ? t2.form : (existing === null || existing === void 0 ? void 0 : existing.form) || ["D", "W", "D"],
                          isHalaba: isHalaba,
                          badgeUrl: t2.badgeUrl || (existing === null || existing === void 0 ? void 0 : existing.badgeUrl)
                        });
                      });
                      list = Array.from(canonicalMap.values());
                      list.sort(function (a, b) {
                        return b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor;
                      });
                      freshStandings = list.map(function (st, i) {
                        return _objectSpread(_objectSpread({}, st), {}, {
                          position: i + 1
                        });
                      });
                    }
                  case 5:
                    _context31.n = 7;
                    break;
                  case 6:
                    _context31.p = 6;
                    _t33 = _context31.v;
                    console.warn("Backend proxy fetch failed, trying direct SportsDB...", _t33);
                  case 7:
                    if (!(!freshStandings || freshStandings.length < 14)) {
                      _context31.n = 13;
                      break;
                    }
                    _context31.p = 8;
                    _context31.n = 9;
                    return fetch("https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4959&s=2026-2027");
                  case 9:
                    directRes = _context31.v;
                    if (!directRes.ok) {
                      _context31.n = 11;
                      break;
                    }
                    _context31.n = 10;
                    return directRes.json();
                  case 10:
                    data = _context31.v;
                    _canonicalMap = /* @__PURE__ */new Map();
                    initialStandings.forEach(function (initT) {
                      return _canonicalMap.set(initT.teamId, _objectSpread({}, initT));
                    });
                    if (data !== null && data !== void 0 && data.table && Array.isArray(data.table) && data.table.length > 0) {
                      data.table.forEach(function (item) {
                        var canonicalId = normalizeEplTeamId(item.idTeam, item.strTeam);
                        var isHalaba = canonicalId === "halaba";
                        var formArr = (item.strForm || "DWD").split("").filter(function (c) {
                          return ["W", "D", "L"].includes(c);
                        });
                        var existing = _canonicalMap.get(canonicalId);
                        _canonicalMap.set(canonicalId, {
                          position: parseInt(item.intRank, 10) || 1,
                          teamId: canonicalId,
                          teamName: canonicalId === "cbe_sa" ? "Ethiopia Nigd Bank (CBE SA)" : canonicalId === "halaba" ? "Halaba Ketema (በርበሬዎቹ)" : canonicalId === "insurance" ? "Ethiopian Medhin (Insurance)" : canonicalId === "adama" ? "Adama Kenema SC" : canonicalId === "electric" ? "Ethio Electric" : item.strTeam || (existing === null || existing === void 0 ? void 0 : existing.teamName) || "Team",
                          played: parseInt(item.intPlayed, 10) || (existing === null || existing === void 0 ? void 0 : existing.played) || 0,
                          won: parseInt(item.intWin, 10) || (existing === null || existing === void 0 ? void 0 : existing.won) || 0,
                          drawn: parseInt(item.intDraw, 10) || (existing === null || existing === void 0 ? void 0 : existing.drawn) || 0,
                          lost: parseInt(item.intLoss, 10) || (existing === null || existing === void 0 ? void 0 : existing.lost) || 0,
                          goalsFor: parseInt(item.intGoalsFor, 10) || (existing === null || existing === void 0 ? void 0 : existing.goalsFor) || 0,
                          goalsAgainst: parseInt(item.intGoalsAgainst, 10) || (existing === null || existing === void 0 ? void 0 : existing.goalsAgainst) || 0,
                          goalDifference: parseInt(item.intGoalDifference, 10) || (existing === null || existing === void 0 ? void 0 : existing.goalDifference) || 0,
                          points: parseInt(item.intPoints, 10) || (existing === null || existing === void 0 ? void 0 : existing.points) || 0,
                          form: formArr.length > 0 ? formArr : (existing === null || existing === void 0 ? void 0 : existing.form) || ["D", "W", "D"],
                          isHalaba: isHalaba,
                          badgeUrl: item.strBadge ? item.strBadge.replace("/tiny", "") : existing === null || existing === void 0 ? void 0 : existing.badgeUrl
                        });
                      });
                    }
                    mergedList = Array.from(_canonicalMap.values());
                    mergedList.sort(function (a, b) {
                      return b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor;
                    });
                    freshStandings = mergedList.map(function (st, i) {
                      return _objectSpread(_objectSpread({}, st), {}, {
                        position: i + 1
                      });
                    });
                  case 11:
                    _context31.n = 13;
                    break;
                  case 12:
                    _context31.p = 12;
                    _t34 = _context31.v;
                    console.warn("Direct SportsDB fetch failed:", _t34);
                  case 13:
                    if (!freshStandings || freshStandings.length === 0) {
                      freshStandings = initialStandings;
                      syncSource = "Official SportsDB Seed";
                    }
                    setStandings(freshStandings);
                    localStorage.setItem(STORAGE_KEYS.STANDINGS, JSON.stringify(freshStandings));
                    _context31.p = 14;
                    _iterator7 = _createForOfIteratorHelper(freshStandings);
                    _context31.p = 15;
                    _iterator7.s();
                  case 16:
                    if ((_step7 = _iterator7.n()).done) {
                      _context31.n = 18;
                      break;
                    }
                    item = _step7.value;
                    _context31.n = 17;
                    return setDoc(doc(db, "standings", item.teamId), _objectSpread(_objectSpread({}, item), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 17:
                    _context31.n = 16;
                    break;
                  case 18:
                    _context31.n = 20;
                    break;
                  case 19:
                    _context31.p = 19;
                    _t35 = _context31.v;
                    _iterator7.e(_t35);
                  case 20:
                    _context31.p = 20;
                    _iterator7.f();
                    return _context31.f(20);
                  case 21:
                    _context31.n = 23;
                    break;
                  case 22:
                    _context31.p = 22;
                    _t36 = _context31.v;
                    console.warn("Firestore write warning:", _t36);
                  case 23:
                    setLastSyncTime(/* @__PURE__ */new Date());
                    setSecondsUntilNextSync(autoSyncInterval);
                    syncNotif = {
                      id: "sync-".concat(Date.now()),
                      type: "sync",
                      title: "TheSportsDB Official Feed Synced",
                      message: "Official Ethiopian Premier League table synchronized from ".concat(syncSource, "."),
                      timestamp: (/* @__PURE__ */new Date()).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                      })
                    };
                    setLiveNotifications(function (prev) {
                      return [syncNotif].concat(_toConsumableArray(prev.slice(0, 9)));
                    });
                    _context31.n = 25;
                    break;
                  case 24:
                    _context31.p = 24;
                    _t37 = _context31.v;
                    console.error("Error in syncNow:", _t37);
                  case 25:
                    _context31.p = 25;
                    setIsSyncing(false);
                    return _context31.f(25);
                  case 26:
                    return _context31.a(2);
                }
              }, _callee31, null, [[15, 19, 20, 21], [14, 22], [8, 12], [2, 6], [1, 24, 25, 26]]);
            }));
            return function syncNow() {
              return _ref36.apply(this, arguments);
            };
          }();
          var simulateLiveMatchAction = function simulateLiveMatchAction() {
            setMatches(function (prevMatches) {
              var live = prevMatches.find(function (m) {
                return m.status === "LIVE";
              });
              var updatedMatches = _toConsumableArray(prevMatches);
              if (!live) {
                var upcomingIdx = updatedMatches.findIndex(function (m) {
                  return m.status === "UPCOMING";
                });
                if (upcomingIdx >= 0) {
                  var m = updatedMatches[upcomingIdx];
                  var newLiveMatch = _objectSpread(_objectSpread({}, m), {}, {
                    status: "LIVE",
                    liveMinute: 54,
                    livePeriod: "2H",
                    score: {
                      home: 1,
                      away: 0
                    },
                    scorers: [{
                      player: "Dawit Fekadu",
                      minute: 34,
                      team: "home"
                    }],
                    liveEvents: [{
                      id: "evt-".concat(Date.now(), "-1"),
                      minute: 34,
                      text: "GOAL! Dawit Fekadu scores with a curled effort into the top corner!",
                      type: "goal",
                      team: "home"
                    }, {
                      id: "evt-".concat(Date.now(), "-2"),
                      minute: 46,
                      text: "Second half underway under the roaring Halaba crowd.",
                      type: "whistle"
                    }]
                  });
                  updatedMatches[upcomingIdx] = newLiveMatch;
                  live = newLiveMatch;
                  var notif = {
                    id: "notif-".concat(Date.now()),
                    type: "match_start",
                    title: "\uD83D\uDD34 LIVE NOW: ".concat(m.homeTeam.name, " vs ").concat(m.awayTeam.name),
                    message: "Halaba Stadium lights up as second half action kicks off!",
                    timestamp: (/* @__PURE__ */new Date()).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit"
                    })
                  };
                  setLiveNotifications(function (prev) {
                    return [notif].concat(_toConsumableArray(prev.slice(0, 9)));
                  });
                }
              } else {
                var liveIdx = updatedMatches.findIndex(function (m) {
                  return m.id === live.id;
                });
                var currentMin = live.liveMinute || 55;
                var nextMin = Math.min(90, currentMin + Math.floor(Math.random() * 8) + 4);
                var isHalabaGoal = Math.random() > 0.35;
                var currentScore = live.score || {
                  home: 1,
                  away: 0
                };
                var newScore = {
                  home: isHalabaGoal ? currentScore.home + 1 : currentScore.home,
                  away: !isHalabaGoal ? currentScore.away + 1 : currentScore.away
                };
                var scorerName = isHalabaGoal ? ["Dawit Fekadu", "Mulugeta Wolde", "Biniam Fikre", "Yared Bayeh"][Math.floor(Math.random() * 4)] : "Opponent Striker";
                var newEvents = [].concat(_toConsumableArray(live.liveEvents || []), [{
                  id: "evt-".concat(Date.now()),
                  minute: nextMin,
                  text: "GOAL! (".concat(nextMin, "') - ").concat(scorerName, " scores for ").concat(isHalabaGoal ? live.homeTeam.name : live.awayTeam.name, "!"),
                  type: "goal",
                  team: isHalabaGoal ? "home" : "away"
                }]);
                var updatedLiveMatch = _objectSpread(_objectSpread({}, live), {}, {
                  liveMinute: nextMin,
                  score: newScore,
                  liveEvents: newEvents,
                  status: nextMin >= 90 ? "FINISHED" : "LIVE",
                  scorers: [].concat(_toConsumableArray(live.scorers || []), [{
                    player: scorerName,
                    minute: nextMin,
                    team: isHalabaGoal ? "home" : "away"
                  }])
                });
                updatedMatches[liveIdx] = updatedLiveMatch;
                var _notif = {
                  id: "notif-".concat(Date.now()),
                  type: nextMin >= 90 ? "match_end" : "goal",
                  title: nextMin >= 90 ? "\uD83C\uDFC1 FULL TIME: ".concat(newScore.home, " - ").concat(newScore.away) : "\u26BD GOAL! (".concat(nextMin, "') ").concat(scorerName),
                  message: "".concat(live.homeTeam.name, " ").concat(newScore.home, " - ").concat(newScore.away, " ").concat(live.awayTeam.name),
                  timestamp: (/* @__PURE__ */new Date()).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                  })
                };
                setLiveNotifications(function (prev) {
                  return [_notif].concat(_toConsumableArray(prev.slice(0, 9)));
                });
              }
              localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(updatedMatches));
              return updatedMatches;
            });
          };
          var advanceLeagueMatchday = /*#__PURE__*/function () {
            var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32() {
              return _regenerator().w(function (_context32) {
                while (1) switch (_context32.n) {
                  case 0:
                    _context32.n = 1;
                    return syncNow();
                  case 1:
                    return _context32.a(2);
                }
              }, _callee32);
            }));
            return function advanceLeagueMatchday() {
              return _ref37.apply(this, arguments);
            };
          }();
          reactExports.useEffect(function () {
            if (!isAutoSyncEnabled) return;
            var timer = setInterval(function () {
              setSecondsUntilNextSync(function (prev) {
                if (prev <= 1) {
                  setLastSyncTime(/* @__PURE__ */new Date());
                  return autoSyncInterval;
                }
                return prev - 1;
              });
            }, 1e3);
            return function () {
              return clearInterval(timer);
            };
          }, [isAutoSyncEnabled, autoSyncInterval]);
          var _reactExports$useStat61 = reactExports.useState(function () {
              try {
                var saved = localStorage.getItem(STORAGE_KEYS.SPONSORS);
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                  }
                }
              } catch (e) {}
              return initialSponsors;
            }),
            _reactExports$useStat62 = _slicedToArray(_reactExports$useStat61, 2),
            sponsors = _reactExports$useStat62[0],
            setSponsors = _reactExports$useStat62[1];
          var _reactExports$useStat63 = reactExports.useState(true),
            _reactExports$useStat64 = _slicedToArray(_reactExports$useStat63, 2),
            isSponsorsLoading = _reactExports$useStat64[0],
            setIsSponsorsLoading = _reactExports$useStat64[1];
          var _reactExports$useStat65 = reactExports.useState(null),
            _reactExports$useStat66 = _slicedToArray(_reactExports$useStat65, 2),
            sponsorsSyncError = _reactExports$useStat66[0],
            setSponsorsSyncError = _reactExports$useStat66[1];
          reactExports.useEffect(function () {
            var sponsorsRef = collection(db, "sponsors");
            var unsubscribe = onSnapshot(sponsorsRef, /*#__PURE__*/function () {
              var _ref38 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(snapshot) {
                var _i9, _initialSponsors, initSponsor, liveSponsors, _t38;
                return _regenerator().w(function (_context33) {
                  while (1) switch (_context33.p = _context33.n) {
                    case 0:
                      setIsSponsorsLoading(false);
                      setSponsorsSyncError(null);
                      if (!snapshot.empty) {
                        _context33.n = 7;
                        break;
                      }
                      console.info("[Firebase Firestore] Initializing sponsors collection in Cloud Firestore...");
                      _context33.p = 1;
                      _i9 = 0, _initialSponsors = initialSponsors;
                    case 2:
                      if (!(_i9 < _initialSponsors.length)) {
                        _context33.n = 4;
                        break;
                      }
                      initSponsor = _initialSponsors[_i9];
                      _context33.n = 3;
                      return setDoc(doc(db, "sponsors", initSponsor.id), {
                        name: initSponsor.name,
                        nameAm: initSponsor.nameAm || "",
                        nameOm: initSponsor.nameOm || "",
                        tier: initSponsor.tier,
                        tierAm: initSponsor.tierAm || "",
                        imageUrl: initSponsor.imageUrl,
                        websiteUrl: initSponsor.websiteUrl || "",
                        description: initSponsor.description || "",
                        descriptionAm: initSponsor.descriptionAm || "",
                        active: initSponsor.active,
                        order: initSponsor.order,
                        createdAt: serverTimestamp(),
                        updatedAt: serverTimestamp()
                      });
                    case 3:
                      _i9++;
                      _context33.n = 2;
                      break;
                    case 4:
                      _context33.n = 6;
                      break;
                    case 5:
                      _context33.p = 5;
                      _t38 = _context33.v;
                      console.warn("[Firebase Firestore] Could not auto-seed sponsors:", _t38);
                    case 6:
                      return _context33.a(2);
                    case 7:
                      liveSponsors = [];
                      snapshot.docs.forEach(function (docSnap) {
                        var data = docSnap.data();
                        liveSponsors.push({
                          id: docSnap.id,
                          name: data.name || "Sponsor",
                          nameAm: data.nameAm || void 0,
                          nameOm: data.nameOm || void 0,
                          tier: data.tier || "Official Partner",
                          tierAm: data.tierAm || void 0,
                          imageUrl: data.imageUrl || "",
                          websiteUrl: data.websiteUrl || void 0,
                          description: data.description || void 0,
                          descriptionAm: data.descriptionAm || void 0,
                          active: data.active !== void 0 ? Boolean(data.active) : true,
                          order: typeof data.order === "number" ? data.order : 10
                        });
                      });
                      liveSponsors.sort(function (a, b) {
                        return (a.order || 0) - (b.order || 0);
                      });
                      setSponsors(liveSponsors);
                      try {
                        localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(liveSponsors));
                      } catch (e) {
                        console.warn("Could not cache sponsors in localStorage:", e);
                      }
                    case 8:
                      return _context33.a(2);
                  }
                }, _callee33, null, [[1, 5]]);
              }));
              return function (_x38) {
                return _ref38.apply(this, arguments);
              };
            }(), function (error) {
              console.error("Firebase real-time sponsors sync error:", error);
              setIsSponsorsLoading(false);
              setSponsorsSyncError(error.message);
              handleFirestoreError(error, OperationType.LIST, "sponsors");
            });
            return function () {
              return unsubscribe();
            };
          }, []);
          var addSponsor = /*#__PURE__*/function () {
            var _ref39 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(sponsorData) {
              var _sponsorData$order, _sponsorData$order2, docRef, newSponsor, updated, _sponsorData$order3, _sponsorData$active, fallbackId, _newSponsor, _updated3, _t39;
              return _regenerator().w(function (_context34) {
                while (1) switch (_context34.p = _context34.n) {
                  case 0:
                    _context34.p = 0;
                    _context34.n = 1;
                    return addDoc(collection(db, "sponsors"), {
                      name: sponsorData.name,
                      nameAm: sponsorData.nameAm || "",
                      nameOm: sponsorData.nameOm || "",
                      tier: sponsorData.tier,
                      tierAm: sponsorData.tierAm || "",
                      imageUrl: sponsorData.imageUrl,
                      websiteUrl: sponsorData.websiteUrl || "",
                      description: sponsorData.description || "",
                      descriptionAm: sponsorData.descriptionAm || "",
                      active: sponsorData.active !== void 0 ? sponsorData.active : true,
                      order: (_sponsorData$order = sponsorData.order) !== null && _sponsorData$order !== void 0 ? _sponsorData$order : sponsors.length + 1,
                      createdAt: serverTimestamp(),
                      updatedAt: serverTimestamp()
                    });
                  case 1:
                    docRef = _context34.v;
                    newSponsor = _objectSpread(_objectSpread({}, sponsorData), {}, {
                      id: docRef.id,
                      order: (_sponsorData$order2 = sponsorData.order) !== null && _sponsorData$order2 !== void 0 ? _sponsorData$order2 : sponsors.length + 1,
                      active: sponsorData.active !== void 0 ? sponsorData.active : true
                    });
                    updated = [].concat(_toConsumableArray(sponsors), [newSponsor]).sort(function (a, b) {
                      return (a.order || 0) - (b.order || 0);
                    });
                    setSponsors(updated);
                    try {
                      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
                    } catch (e) {
                      console.warn("Could not cache updated sponsors in localStorage:", e);
                    }
                    return _context34.a(2, docRef.id);
                  case 2:
                    _context34.p = 2;
                    _t39 = _context34.v;
                    console.error("Firestore add sponsor error, falling back locally:", _t39);
                    handleFirestoreError(_t39, OperationType.CREATE, "sponsors");
                    fallbackId = "sponsor-".concat(Date.now(), "-").concat(Math.random().toString(36).substring(2, 7));
                    _newSponsor = _objectSpread(_objectSpread({}, sponsorData), {}, {
                      id: fallbackId,
                      order: (_sponsorData$order3 = sponsorData.order) !== null && _sponsorData$order3 !== void 0 ? _sponsorData$order3 : sponsors.length + 1,
                      active: (_sponsorData$active = sponsorData.active) !== null && _sponsorData$active !== void 0 ? _sponsorData$active : true
                    });
                    _updated3 = [].concat(_toConsumableArray(sponsors), [_newSponsor]);
                    setSponsors(_updated3);
                    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(_updated3));
                    return _context34.a(2, fallbackId);
                }
              }, _callee34, null, [[0, 2]]);
            }));
            return function addSponsor(_x39) {
              return _ref39.apply(this, arguments);
            };
          }();
          var updateSponsor = /*#__PURE__*/function () {
            var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(id, updates) {
              var sponsorRef, updated, _updated4, _t40;
              return _regenerator().w(function (_context35) {
                while (1) switch (_context35.p = _context35.n) {
                  case 0:
                    _context35.p = 0;
                    sponsorRef = doc(db, "sponsors", id);
                    _context35.n = 1;
                    return setDoc(sponsorRef, _objectSpread(_objectSpread({}, updates), {}, {
                      updatedAt: serverTimestamp()
                    }), {
                      merge: true
                    });
                  case 1:
                    updated = sponsors.map(function (s) {
                      return s.id === id ? _objectSpread(_objectSpread({}, s), updates) : s;
                    });
                    setSponsors(updated);
                    try {
                      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
                    } catch (e) {
                      console.warn("Could not cache updated sponsors in localStorage:", e);
                    }
                    _context35.n = 3;
                    break;
                  case 2:
                    _context35.p = 2;
                    _t40 = _context35.v;
                    console.error("Firestore update sponsor error, falling back locally:", _t40);
                    handleFirestoreError(_t40, OperationType.UPDATE, "sponsors/".concat(id));
                    _updated4 = sponsors.map(function (s) {
                      return s.id === id ? _objectSpread(_objectSpread({}, s), updates) : s;
                    });
                    setSponsors(_updated4);
                    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(_updated4));
                  case 3:
                    return _context35.a(2);
                }
              }, _callee35, null, [[0, 2]]);
            }));
            return function updateSponsor(_x40, _x41) {
              return _ref40.apply(this, arguments);
            };
          }();
          var deleteSponsor = /*#__PURE__*/function () {
            var _ref41 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36(id) {
              var sponsorRef, updated, _updated5, _t41;
              return _regenerator().w(function (_context36) {
                while (1) switch (_context36.p = _context36.n) {
                  case 0:
                    _context36.p = 0;
                    sponsorRef = doc(db, "sponsors", id);
                    _context36.n = 1;
                    return deleteDoc(sponsorRef);
                  case 1:
                    updated = sponsors.filter(function (s) {
                      return s.id !== id;
                    });
                    setSponsors(updated);
                    try {
                      localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(updated));
                    } catch (e) {
                      console.warn("Could not cache sponsors after deletion:", e);
                    }
                    _context36.n = 3;
                    break;
                  case 2:
                    _context36.p = 2;
                    _t41 = _context36.v;
                    console.error("Firestore delete sponsor error, falling back locally:", _t41);
                    handleFirestoreError(_t41, OperationType.DELETE, "sponsors/".concat(id));
                    _updated5 = sponsors.filter(function (s) {
                      return s.id !== id;
                    });
                    setSponsors(_updated5);
                    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(_updated5));
                  case 3:
                    return _context36.a(2);
                }
              }, _callee36, null, [[0, 2]]);
            }));
            return function deleteSponsor(_x42) {
              return _ref41.apply(this, arguments);
            };
          }();
          var resetSponsors = /*#__PURE__*/function () {
            var _ref42 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37() {
              var _i0, _initialSponsors2, initS, _t42;
              return _regenerator().w(function (_context37) {
                while (1) switch (_context37.p = _context37.n) {
                  case 0:
                    _context37.p = 0;
                    _i0 = 0, _initialSponsors2 = initialSponsors;
                  case 1:
                    if (!(_i0 < _initialSponsors2.length)) {
                      _context37.n = 3;
                      break;
                    }
                    initS = _initialSponsors2[_i0];
                    _context37.n = 2;
                    return setDoc(doc(db, "sponsors", initS.id), {
                      name: initS.name,
                      nameAm: initS.nameAm || "",
                      nameOm: initS.nameOm || "",
                      tier: initS.tier,
                      tierAm: initS.tierAm || "",
                      imageUrl: initS.imageUrl,
                      websiteUrl: initS.websiteUrl || "",
                      description: initS.description || "",
                      descriptionAm: initS.descriptionAm || "",
                      active: initS.active,
                      order: initS.order,
                      updatedAt: serverTimestamp()
                    }, {
                      merge: true
                    });
                  case 2:
                    _i0++;
                    _context37.n = 1;
                    break;
                  case 3:
                    setSponsors(initialSponsors);
                    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
                    _context37.n = 5;
                    break;
                  case 4:
                    _context37.p = 4;
                    _t42 = _context37.v;
                    console.error("Firestore reset sponsors error, falling back locally:", _t42);
                    handleFirestoreError(_t42, OperationType.WRITE, "sponsors");
                    setSponsors(initialSponsors);
                    localStorage.setItem(STORAGE_KEYS.SPONSORS, JSON.stringify(initialSponsors));
                  case 5:
                    return _context37.a(2);
                }
              }, _callee37, null, [[0, 4]]);
            }));
            return function resetSponsors() {
              return _ref42.apply(this, arguments);
            };
          }();
          var resetAllDataToDefault = function resetAllDataToDefault() {
            localStorage.clear();
            setMatches(initialMatches);
            setStandings(initialStandings);
            setNews(initialNews);
            setPlayers(initialPlayers);
            setStaff(initialStaff);
            setMemberships(initialMemberships);
            setShopItems(initialShopItems);
            setShopOrders([]);
            setDonations([]);
            setClubInfo(initialClubInfo);
            setSponsors(initialSponsors);
            setIsAdminLoggedIn(false);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(ClubContext.Provider, {
            value: {
              language: language,
              setLanguage: setLanguage,
              t: t,
              currentPage: currentPage,
              setCurrentPage: setCurrentPage,
              selectedArticleId: selectedArticleId,
              setSelectedArticleId: setSelectedArticleId,
              selectedMatchId: selectedMatchId,
              setSelectedMatchId: setSelectedMatchId,
              isDossierOpen: isDossierOpen,
              openDossier: openDossier,
              closeDossier: closeDossier,
              liveNotifications: liveNotifications,
              dismissNotification: dismissNotification,
              isAutoSyncEnabled: isAutoSyncEnabled,
              toggleAutoSync: toggleAutoSync,
              autoSyncInterval: autoSyncInterval,
              setAutoSyncInterval: setAutoSyncInterval,
              secondsUntilNextSync: secondsUntilNextSync,
              isSyncing: isSyncing,
              lastSyncTime: lastSyncTime,
              syncNow: syncNow,
              simulateLiveMatchAction: simulateLiveMatchAction,
              advanceLeagueMatchday: advanceLeagueMatchday,
              clubInfo: clubInfo,
              updateClubInfo: updateClubInfo,
              matches: matches,
              addMatch: addMatch,
              updateMatch: updateMatch,
              deleteMatch: deleteMatch,
              standings: standings,
              updateStanding: updateStanding,
              resetStandings: resetStandings,
              recalculateStandingsFromMatches: recalculateStandingsFromMatches,
              news: news,
              addNewsArticle: addNewsArticle,
              updateNewsArticle: updateNewsArticle,
              deleteNewsArticle: deleteNewsArticle,
              players: players,
              staff: staff,
              addPlayer: addPlayer,
              updatePlayer: updatePlayer,
              deletePlayer: deletePlayer,
              addStaff: addStaff,
              updateStaff: updateStaff,
              deleteStaff: deleteStaff,
              memberships: memberships,
              submitMembership: submitMembership,
              recordVerifiedMembership: recordVerifiedMembership,
              updateMembershipStatus: updateMembershipStatus,
              deleteMembership: deleteMembership,
              shopItems: shopItems,
              addShopItem: addShopItem,
              updateShopItem: updateShopItem,
              deleteShopItem: deleteShopItem,
              resetShopItems: resetShopItems,
              isProductsLoading: isProductsLoading,
              productsSyncError: productsSyncError,
              shopOrders: shopOrders,
              recordShopOrder: recordShopOrder,
              updateShopOrderStatus: updateShopOrderStatus,
              isCheckoutModalOpen: isCheckoutModalOpen,
              checkoutItem: checkoutItem,
              openCheckoutModal: openCheckoutModal,
              closeCheckoutModal: closeCheckoutModal,
              donations: donations,
              recordDonation: recordDonation,
              isDonationModalOpen: isDonationModalOpen,
              openDonationModal: openDonationModal,
              closeDonationModal: closeDonationModal,
              isAdminLoggedIn: isAdminLoggedIn,
              adminUsername: adminUsername,
              adminUser: adminUser,
              isAuthChecking: isAuthChecking,
              loginAdmin: loginAdmin,
              logoutAdmin: logoutAdmin,
              sponsors: sponsors,
              addSponsor: addSponsor,
              updateSponsor: updateSponsor,
              deleteSponsor: deleteSponsor,
              resetSponsors: resetSponsors,
              isSponsorsLoading: isSponsorsLoading,
              sponsorsSyncError: sponsorsSyncError,
              isOnline: isOnline,
              resetAllDataToDefault: resetAllDataToDefault
            },
            children: children
          });
        };
        var useClub = exports("u", function () {
          var context = reactExports.useContext(ClubContext);
          if (!context) {
            throw new Error("useClub must be used within a ClubProvider");
          }
          return context;
        });
        var HalabaCrest = exports("H", function (_ref43) {
          var _ref43$className = _ref43.className,
            className = _ref43$className === void 0 ? "" : _ref43$className,
            _ref43$size = _ref43.size,
            size = _ref43$size === void 0 ? 64 : _ref43$size,
            _ref43$showGlow = _ref43.showGlow,
            showGlow = _ref43$showGlow === void 0 ? false : _ref43$showGlow;
          var _reactExports$useStat67 = reactExports.useState(false),
            _reactExports$useStat68 = _slicedToArray(_reactExports$useStat67, 2),
            hasError = _reactExports$useStat68[0],
            setHasError = _reactExports$useStat68[1];
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "relative inline-flex items-center justify-center select-none shrink-0 ".concat(className),
            style: {
              width: size,
              height: size
            },
            title: "HALABA City FC (በርበሬዎቹ) - Official Club Crest",
            children: [showGlow && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "absolute inset-0 rounded-full pointer-events-none scale-125",
              style: {
                background: "radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(220, 38, 38, 0.18) 50%, rgba(220, 38, 38, 0) 75%)"
              },
              "aria-hidden": "true"
            }), !hasError ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              src: halabaLogoUrl,
              alt: "HALABA City FC official crest",
              className: "w-full h-full object-contain relative z-10 drop-shadow-md transition-opacity duration-200",
              loading: "eager",
              decoding: "async",
              onError: function onError() {
                return setHasError(true);
              }
            }) : (/* Zero-latency Vector SVG Crest Fallback if PNG fails */
            /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
              viewBox: "0 0 500 540",
              className: "w-full h-full drop-shadow-md overflow-visible relative z-10",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "shieldRed",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#e51821"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "45%",
                    stopColor: "#c80815"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#96000a"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "shieldRim",
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "100%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#ff4d4d"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "50%",
                    stopColor: "#b3000b"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#550005"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "ribbonGreen",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#088c3a"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "50%",
                    stopColor: "#056b2b"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#02431a"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "goldTrim",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#ffd857"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "40%",
                    stopColor: "#f5b800"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "70%",
                    stopColor: "#e09e00"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#ffd857"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("radialGradient", {
                  id: "chiliGlow",
                  cx: "40%",
                  cy: "30%",
                  r: "70%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#ff4538"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "60%",
                    stopColor: "#d30909"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#7a0000"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                  id: "gloss",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "80%",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "0%",
                    stopColor: "#ffffff",
                    stopOpacity: "0.4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "40%",
                    stopColor: "#ffffff",
                    stopOpacity: "0.08"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                    offset: "100%",
                    stopColor: "#ffffff",
                    stopOpacity: "0"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 140 40 Q 250 65 360 40 C 430 70 470 190 420 350 C 380 435 290 495 250 515 C 210 495 120 435 80 350 C 30 190 70 70 140 40 Z",
                fill: "url(#shieldRed)",
                stroke: "url(#shieldRim)",
                strokeWidth: "6"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 145 48 Q 250 70 355 48 C 410 80 440 180 410 280 C 330 240 200 160 145 48 Z",
                fill: "url(#gloss)"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 140 200 Q 250 205 360 200 C 400 280 380 375 250 430 C 120 375 100 280 140 200 Z",
                fill: "#ffffff"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("text", {
                x: "250",
                y: "112",
                textAnchor: "middle",
                fill: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: "900",
                fontSize: "44",
                letterSpacing: "4",
                children: "HALABA"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("text", {
                x: "250",
                y: "156",
                textAnchor: "middle",
                fill: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: "900",
                fontSize: "38",
                letterSpacing: "5",
                children: "CITY FC"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 200 172 Q 250 178 300 172 L 310 200 Q 250 208 190 200 Z",
                fill: "#ffffff",
                stroke: "#e2e8f0",
                strokeWidth: "1.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("text", {
                x: "250",
                y: "194",
                textAnchor: "middle",
                fill: "#111827",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: "900",
                fontSize: "24",
                letterSpacing: "3",
                children: "1966"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 230 270 C 232 230 240 215 250 215 C 260 215 268 230 270 270 Z",
                fill: "#e2ca9b",
                stroke: "#a67c3b",
                strokeWidth: "2"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 232 260 Q 250 263 268 260 L 269 269 Q 250 272 231 269 Z",
                fill: "#e6007e"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("ellipse", {
                cx: "250",
                cy: "275",
                rx: "46",
                ry: "14",
                fill: "#ecd8b3",
                stroke: "#b08a4c",
                strokeWidth: "2.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 240 218 C 215 220 185 245 188 285 C 190 325 210 365 235 375 C 220 365 210 330 212 285 C 214 248 230 228 240 218 Z",
                fill: "url(#chiliGlow)",
                stroke: "#990000",
                strokeWidth: "1.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 260 218 C 285 220 315 245 312 285 C 310 325 290 365 265 375 C 280 365 290 330 288 285 C 286 248 270 228 260 218 Z",
                fill: "url(#chiliGlow)",
                stroke: "#990000",
                strokeWidth: "1.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("circle", {
                cx: "250",
                cy: "370",
                r: "32",
                fill: "#ffffff",
                stroke: "#1f2937",
                strokeWidth: "2.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("polygon", {
                points: "250,358 261,366 257,380 243,380 239,366",
                fill: "#111827"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M 85 405 Q 250 490 415 405 L 415 445 Q 250 535 85 445 Z",
                fill: "url(#ribbonGreen)",
                stroke: "url(#goldTrim)",
                strokeWidth: "4"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("text", {
                x: "250",
                y: "450",
                textAnchor: "middle",
                fill: "#ffffff",
                fontFamily: "'Noto Sans Ethiopic', system-ui, sans-serif",
                fontWeight: "bold",
                fontSize: "26",
                letterSpacing: "2",
                children: "ሀላባ ከተማ እግርኳስ ክለብ"
              })]
            }))]
          });
        });
        var Navbar = function Navbar(_ref44) {
          var onOpenInstallModal = _ref44.onOpenInstallModal,
            _ref44$isInstalled = _ref44.isInstalled,
            isInstalled = _ref44$isInstalled === void 0 ? false : _ref44$isInstalled;
          var _useClub = useClub(),
            language = _useClub.language,
            setLanguage = _useClub.setLanguage,
            t = _useClub.t,
            currentPage = _useClub.currentPage,
            setCurrentPage = _useClub.setCurrentPage,
            isAdminLoggedIn = _useClub.isAdminLoggedIn,
            openDossier = _useClub.openDossier,
            openDonationModal = _useClub.openDonationModal;
          var _reactExports$useStat69 = reactExports.useState(false),
            _reactExports$useStat70 = _slicedToArray(_reactExports$useStat69, 2),
            mobileMenuOpen = _reactExports$useStat70[0],
            setMobileMenuOpen = _reactExports$useStat70[1];
          var _reactExports$useStat71 = reactExports.useState(false),
            _reactExports$useStat72 = _slicedToArray(_reactExports$useStat71, 2),
            langDropdownOpen = _reactExports$useStat72[0],
            setLangDropdownOpen = _reactExports$useStat72[1];
          var navItems = [{
            id: "home",
            label: t.navHome,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Shield, {
              className: "w-4 h-4"
            })
          }, {
            id: "fixtures",
            label: t.navFixtures,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
              className: "w-4 h-4"
            })
          }, {
            id: "standings",
            label: t.navStandings,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Trophy, {
              className: "w-4 h-4"
            })
          }, {
            id: "news",
            label: t.navNews,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Newspaper, {
              className: "w-4 h-4"
            })
          }, {
            id: "shop",
            label: t.navShop,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
              className: "w-4 h-4"
            })
          }, {
            id: "membership",
            label: t.navMembership,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
              className: "w-4 h-4"
            })
          }, {
            id: "about",
            label: t.navAbout,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Info, {
              className: "w-4 h-4"
            })
          }, {
            id: "contact",
            label: t.navContact,
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Phone, {
              className: "w-4 h-4"
            })
          }];
          var handleNavClick = function handleNavClick(page) {
            setCurrentPage(page);
            setMobileMenuOpen(false);
          };
          var handleLangChange = function handleLangChange(lang) {
            setLanguage(lang);
            setLangDropdownOpen(false);
          };
          var languageLabels = {
            en: {
              label: "English",
              sub: "EN"
            },
            am: {
              label: "አማርኛ",
              sub: "AM"
            },
            om: {
              label: "Afaan Oromo",
              sub: "OM"
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("header", {
            className: "sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 text-white shadow-xl",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 text-xs px-4 py-1.5 border-b border-neutral-800/60 hidden sm:flex justify-between items-center text-neutral-300",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  className: "inline-flex items-center gap-1.5 font-semibold text-red-400",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                  }), t.heroNickname]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-neutral-500",
                  children: "•"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t.homeGroundValue
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-neutral-500",
                  children: "•"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-amber-400 font-medium",
                  children: t.est1966
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3",
                children: [!isInstalled && onOpenInstallModal && /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: onOpenInstallModal,
                  className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full btn-secondary-amber text-white text-xs font-bold transition-all shadow-sm active:scale-95",
                  title: "Download official Halaba City FC App (Android APK / iOS)",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Smartphone, {
                    className: "w-3 h-3 text-amber-300"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "መተግበሪያ አውርድ" : "Get App"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: openDossier,
                  className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/30 hover:bg-red-600/50 border border-red-500/50 text-red-200 text-xs font-bold transition-all shadow-sm active:scale-95",
                  title: "Exact Information about Halaba City FC in the Ethiopian Premier League",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Trophy, {
                    className: "w-3 h-3 text-amber-300"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.clubDossierBtn
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return handleNavClick("admin");
                  },
                  className: "flex items-center gap-1.5 px-2 py-0.5 rounded text-xs transition-colors ".concat(currentPage === "admin" ? "bg-red-700 text-white font-medium" : "text-neutral-400 hover:text-white"),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                    className: "w-3 h-3 text-amber-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.navAdmin
                  }), isAdminLoggedIn && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400",
                    title: t.active
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return handleNavClick("home");
                  },
                  className: "flex items-center gap-3 group text-left focus:outline-none",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 52,
                    showGlow: true
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-col",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-red-400 transition-colors uppercase font-sports",
                      children: "HALABA CITY FC"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "text-xs font-semibold tracking-wide text-emerald-400 flex items-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "በርበሬዎቹ"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 font-normal",
                        children: "|"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-amber-400",
                        children: language === "am" ? "ይፋዊ ድረ-ገጽ" : "Berberewochu"
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("nav", {
                  className: "hidden lg:flex items-center space-x-1",
                  children: navItems.map(function (item) {
                    var isActive = currentPage === item.id;
                    return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return handleNavClick(item.id);
                      },
                      className: "px-3 py-2 rounded-md text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 ".concat(isActive ? "bg-red-600 text-white shadow-md shadow-red-900/40" : "text-neutral-200 hover:text-white hover:bg-neutral-800/80"),
                      children: item.label
                    }, item.id);
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "hidden sm:flex items-center space-x-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "relative",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      onClick: function onClick() {
                        return setLangDropdownOpen(!langDropdownOpen);
                      },
                      className: "flex items-center gap-1.5 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-sm font-medium text-neutral-200 transition-colors",
                      "aria-label": "Select language",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Globe, {
                        className: "w-4 h-4 text-emerald-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "uppercase font-bold text-xs",
                        children: language
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-400 text-xs hidden md:inline",
                        children: languageLabels[language].label
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ChevronDown, {
                        className: "w-3.5 h-3.5 text-neutral-400 ml-0.5"
                      })]
                    }), langDropdownOpen && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "absolute right-0 mt-2 w-48 bg-neutral-900 rounded-lg shadow-2xl border border-neutral-700 py-1 z-50 animate-in fade-in zoom-in-95",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "px-3 py-1.5 text-xs text-neutral-400 uppercase font-bold tracking-wider border-b border-neutral-800",
                        children: t.selectLanguage
                      }), ["en", "am", "om"].map(function (lng) {
                        return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                          onClick: function onClick() {
                            return handleLangChange(lng);
                          },
                          className: "w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors ".concat(language === lng ? "bg-red-600/20 text-red-400 font-bold border-l-4 border-red-500" : "text-neutral-200 hover:bg-neutral-800"),
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: languageLabels[lng].label
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xs uppercase text-neutral-400 font-mono",
                            children: languageLabels[lng].sub
                          })]
                        }, lng);
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: openDonationModal,
                    className: "px-3.5 py-2 rounded-md btn-donate-emerald font-bold text-sm tracking-wide transition-all active:scale-95 flex items-center gap-1.5 font-sports uppercase",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                      className: "w-3.5 h-3.5 fill-emerald-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.navDonate
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return handleNavClick("membership");
                    },
                    className: "px-4 py-2 rounded-md btn-membership-join font-bold text-sm tracking-wide shadow-md shadow-red-950/60 hover:shadow-red-800/40 transition-all transform active:scale-95 flex items-center gap-1.5 font-sports uppercase",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.navJoinBtn
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2 lg:hidden",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      var nextLang = {
                        en: "am",
                        am: "om",
                        om: "en"
                      };
                      setLanguage(nextLang[language]);
                    },
                    className: "px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-xs font-bold text-emerald-400 uppercase flex items-center gap-1",
                    title: "Switch language",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Globe, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language.toUpperCase()
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setMobileMenuOpen(!mobileMenuOpen);
                    },
                    className: "p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none",
                    "aria-label": "Toggle Navigation Menu",
                    children: mobileMenuOpen ? /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-6 h-6"
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(Menu, {
                      className: "w-6 h-6"
                    })
                  })]
                })]
              })
            }), mobileMenuOpen && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between pb-2 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs font-bold uppercase tracking-wider text-neutral-400",
                  children: t.selectLanguage
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex gap-1.5",
                  children: ["en", "am", "om"].map(function (lng) {
                    return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return handleLangChange(lng);
                      },
                      className: "px-2 py-1 text-xs font-bold rounded ".concat(language === lng ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"),
                      children: lng.toUpperCase()
                    }, lng);
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "space-y-1",
                children: [navItems.map(function (item) {
                  var isActive = currentPage === item.id;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return handleNavClick(item.id);
                    },
                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-left transition-colors ".concat(isActive ? "bg-red-600 text-white" : "text-neutral-200 hover:bg-neutral-900 hover:text-white"),
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: isActive ? "text-white" : "text-neutral-400",
                      children: item.icon
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: item.label
                    })]
                  }, item.id);
                }), !isInstalled && onOpenInstallModal && /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    onOpenInstallModal();
                    setMobileMenuOpen(false);
                  },
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors text-emerald-400 hover:bg-neutral-900 border border-emerald-900/40 bg-emerald-950/20",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Smartphone, {
                    className: "w-4 h-4 text-emerald-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "የክለቡን መተግበሪያ አውርድ (APK / iOS)" : "Download Club App (APK / iOS)"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return handleNavClick("admin");
                  },
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors ".concat(currentPage === "admin" ? "bg-red-950 text-red-200 border border-red-800" : "text-neutral-400 hover:bg-neutral-900 hover:text-white"),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                    className: "w-4 h-4 text-amber-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.navAdmin
                  }), isAdminLoggedIn && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "ml-auto text-xs text-emerald-400 font-normal",
                    children: t.active
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "pt-2 space-y-2",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return handleNavClick("membership");
                  },
                  className: "w-full py-3 px-4 rounded-lg btn-membership-join text-white font-bold text-center tracking-wide shadow-lg uppercase font-sports flex items-center justify-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
                    className: "w-5 h-5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.navJoinBtn
                  })]
                })
              })]
            })]
          });
        };
        var NetVibeSvgEmblem = exports("N", function (_ref45) {
          var _ref45$sizePx = _ref45.sizePx,
            sizePx = _ref45$sizePx === void 0 ? 48 : _ref45$sizePx,
            _ref45$className = _ref45.className,
            className = _ref45$className === void 0 ? "" : _ref45$className;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("svg", {
            width: sizePx,
            height: sizePx,
            viewBox: "0 0 120 120",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "shrink-0 ".concat(className),
            "aria-label": "NetVibe Digital Solutions Logo",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("defs", {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("radialGradient", {
                id: "nvBgGlow",
                cx: "50%",
                cy: "50%",
                r: "50%",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0%",
                  stopColor: "#0a2540",
                  stopOpacity: "0.8"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "100%",
                  stopColor: "#030712",
                  stopOpacity: "1"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: "nvCyanBlue",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "100%",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0%",
                  stopColor: "#00E5FF"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "50%",
                  stopColor: "#0091FF"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "100%",
                  stopColor: "#0055FF"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("linearGradient", {
                id: "nvRingGlow",
                x1: "0%",
                y1: "100%",
                x2: "100%",
                y2: "0%",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "0%",
                  stopColor: "#00E5FF"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "70%",
                  stopColor: "#38BDF8"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("stop", {
                  offset: "100%",
                  stopColor: "#0284C7"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("filter", {
                id: "nvGlowFilter",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("feGaussianBlur", {
                  stdDeviation: "3",
                  result: "blur"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("feComposite", {
                  in: "SourceGraphic",
                  in2: "blur",
                  operator: "over"
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              width: "120",
              height: "120",
              rx: "24",
              fill: "url(#nvBgGlow)"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
              x: "1.5",
              y: "1.5",
              width: "117",
              height: "117",
              rx: "22.5",
              stroke: "#00E5FF",
              strokeOpacity: "0.25",
              strokeWidth: "1.5"
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("g", {
              transform: "translate(10, 10)",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("ellipse", {
                cx: "50",
                cy: "48",
                rx: "44",
                ry: "20",
                transform: "rotate(-28 50 48)",
                stroke: "url(#nvRingGlow)",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeDasharray: "180 80",
                strokeDashoffset: "30",
                filter: "url(#nvGlowFilter)"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M32 30 C32 23 37 19 44 23 L44 76 C36 76 32 72 32 65 Z",
                fill: "url(#nvCyanBlue)"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M36 24 L68 70 C72 76 68 81 60 81 L46 81 L32 60 Z",
                fill: "#0091FF"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                d: "M58 35 L68 35 C74 35 77 39 77 46 L77 78 C70 81 64 77 64 70 Z",
                fill: "url(#nvCyanBlue)"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("ellipse", {
                cx: "50",
                cy: "48",
                rx: "44",
                ry: "20",
                transform: "rotate(-28 50 48)",
                stroke: "url(#nvRingGlow)",
                strokeWidth: "4.5",
                strokeLinecap: "round",
                strokeDasharray: "90 170",
                strokeDashoffset: "140"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "74",
                y: "16",
                width: "6",
                height: "6",
                rx: "1.2",
                fill: "#00E5FF",
                opacity: "0.9"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "83",
                y: "21",
                width: "5",
                height: "5",
                rx: "1",
                fill: "#38BDF8",
                opacity: "0.8"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("rect", {
                x: "73",
                y: "25",
                width: "5",
                height: "5",
                rx: "1",
                fill: "#0284C7",
                opacity: "0.85"
              })]
            })]
          });
        });
        var NetVibeLogo = function NetVibeLogo(_ref46) {
          var _ref46$className = _ref46.className,
            className = _ref46$className === void 0 ? "" : _ref46$className,
            _ref46$imgClassName = _ref46.imgClassName,
            imgClassName = _ref46$imgClassName === void 0 ? "" : _ref46$imgClassName,
            _ref46$size = _ref46.size,
            size = _ref46$size === void 0 ? "md" : _ref46$size,
            _ref46$showText = _ref46.showText,
            showText = _ref46$showText === void 0 ? false : _ref46$showText,
            _ref46$language = _ref46.language,
            language = _ref46$language === void 0 ? "en" : _ref46$language;
          var _reactExports$useStat73 = reactExports.useState(false),
            _reactExports$useStat74 = _slicedToArray(_reactExports$useStat73, 2),
            hasError = _reactExports$useStat74[0],
            setHasError = _reactExports$useStat74[1];
          var sizeDimensions = {
            xs: {
              px: 28,
              box: "w-7 h-7"
            },
            sm: {
              px: 36,
              box: "w-9 h-9"
            },
            md: {
              px: 48,
              box: "w-12 h-12"
            },
            lg: {
              px: 64,
              box: "w-16 h-16"
            }
          }[size];
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "flex items-center gap-3 ".concat(className),
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "".concat(sizeDimensions.box, " rounded-xl overflow-hidden bg-[#050b17] border border-cyan-500/40 p-0.5 shadow-md shadow-cyan-950/60 shrink-0 flex items-center justify-center"),
              children: !hasError ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: netvibeLogoImg,
                alt: "NetVibe Digital Solutions",
                onError: function onError() {
                  return setHasError(true);
                },
                className: "w-full h-full object-contain rounded-lg ".concat(imgClassName),
                loading: "eager",
                decoding: "async"
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(NetVibeSvgEmblem, {
                sizePx: sizeDimensions.px,
                className: "w-full h-full"
              })
            }), showText && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex flex-col text-left",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-bold text-sm text-white tracking-wide",
                  children: language === "am" ? "የመተግበሪያ አዘጋጅ: NetVibe Digital Solutions" : language === "om" ? "Misoomsituu Appii: NetVibe Digital Solutions" : "Developed by NetVibe Digital Solutions"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-700/50",
                  children: "Tech Partner"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                className: "text-xs text-neutral-400 mt-0.5",
                children: language === "am" ? "IDEAS • CODE • IMPACT — ለሀላባ ከተማ እግርኳስ ክለብ በልዩ ጥራት የተዘጋጀ ይፋዊ መተግበሪያ" : language === "om" ? "IDEAS • CODE • IMPACT — Appilikeeshinii fi waltajjii dijitaalaa seera-qabeessa" : "IDEAS • CODE • IMPACT — Official digital portal & mobile application partner"
              })]
            })]
          });
        };
        var Footer = function Footer() {
          var _useClub2 = useClub(),
            t = _useClub2.t,
            language = _useClub2.language,
            setCurrentPage = _useClub2.setCurrentPage,
            clubInfo = _useClub2.clubInfo;
          var handleNav = function handleNav(p) {
            setCurrentPage(p);
          };
          var address = language === "am" ? "ሀላባ ስታዲየም የስፖርት ኮምፕሌክስ፣ ዋና ጎዳና፣ ሀላባ ቁሊቶ፣ ኢትዮጵያ" : clubInfo.contact.address;
          var officeHours = language === "am" ? "ከሰኞ - አርብ፡ 2:30 ጥዋት - 11:30 ከሰዓት (በጨዋታ ቀናት፡ 1:00 ጥዋት - 1:00 ምሽት)" : clubInfo.contact.hours;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("footer", {
            className: "bg-neutral-950 text-neutral-300 border-t border-neutral-800",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "h-1.5 w-full flex",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-1/3 bg-red-600"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-1/3 bg-emerald-600"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-1/3 bg-amber-500"
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-neutral-800/80",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                      size: 56,
                      showGlow: true
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                        className: "font-sports font-black text-2xl tracking-wider text-white uppercase",
                        children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA CITY FC"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("p", {
                        className: "text-xs font-semibold text-emerald-400",
                        children: [clubInfo.nickname.am, " • Berberewochu"]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-amber-400 font-mono",
                        children: language === "am" ? "በ1966 ዓ.ም ተመሰረተ" : "Founded 1966"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-sm text-neutral-400 leading-relaxed",
                    children: t.footerAboutClub
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "pt-2",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/60",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                        className: "w-3.5 h-3.5 text-red-400"
                      }), t.footerMotto]
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2",
                    children: t.quickLinks
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("ul", {
                    className: "space-y-2 text-sm",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("fixtures");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-red-500 rounded-full"
                        }), t.navFixtures]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("standings");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-emerald-500 rounded-full"
                        }), t.navStandings]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("news");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-amber-500 rounded-full"
                        }), t.navNews]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("membership");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-red-500 rounded-full"
                        }), t.navMembership]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("about");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-neutral-500 rounded-full"
                        }), t.navAbout]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("contact");
                        },
                        className: "hover:text-red-400 transition-colors flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-neutral-500 rounded-full"
                        }), t.navContact]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleNav("admin");
                        },
                        className: "hover:text-amber-400 transition-colors flex items-center gap-2 text-neutral-400 text-xs mt-3 pt-2 border-t border-neutral-900",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-1.5 h-1.5 bg-amber-400 rounded-full"
                        }), t.navAdmin, " ", t.authorizedStaff]
                      })
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2",
                    children: t.footerOfficeStadium
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2.5 text-xs sm:text-sm text-neutral-400",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-2.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                        className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: address
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Phone, {
                        className: "w-4 h-4 text-emerald-400 shrink-0"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-mono",
                        children: clubInfo.contact.phone
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Mail, {
                        className: "w-4 h-4 text-emerald-400 shrink-0"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-mono",
                        children: clubInfo.contact.email
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-2.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                        className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs",
                        children: officeHours
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-lg text-white uppercase tracking-wider border-b border-neutral-800 pb-2",
                    children: t.socialMedia
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400",
                    children: language === "am" ? "አዳዲስ ዜናዎችንና ቪዲዮዎችን ለማግኘት ይፋዊ የሀላባ ከተማ የዲጂታል ገጾችን ይቀላቀሉ።" : "Join the official digital channels of Halaba City FC for breaking news and videos."
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-col gap-2 pt-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.telegram,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Send, {
                          className: "w-3.5 h-3.5 text-sky-400"
                        }), t.officialTelegram]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3 h-3 text-neutral-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.facebook,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-3.5 h-3.5 font-bold text-blue-500 flex items-center justify-center",
                          children: "f"
                        }), t.facebookPage]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3 h-3 text-neutral-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: clubInfo.socials.youtube,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-colors text-xs font-medium",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-3.5 h-3.5 font-bold text-red-500 flex items-center justify-center",
                          children: "▶"
                        }), t.youtubeHighlights]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3 h-3 text-neutral-500"
                      })]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mt-8 p-4 rounded-xl bg-gradient-to-r from-neutral-900/90 via-[#071322]/80 to-neutral-900/90 border border-cyan-900/40 shadow-lg text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(NetVibeLogo, {
                  size: "md",
                  showText: true,
                  language: language,
                  className: "flex-1"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex items-center gap-2 shrink-0 self-end sm:self-center",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-[11px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-800/40",
                    children: "NetVibe Digital"
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mt-6 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("p", {
                  children: ["© ", (/* @__PURE__ */new Date()).getFullYear(), " HALABA City Football Club (ሀላባ ከተማ እግርኳስ ክለብ). ", t.footerRights]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-neutral-500",
                  children: t.halabaKulitoMotto
                })]
              })]
            })]
          });
        };
        var MobileFixedFooter = function MobileFixedFooter() {
          var _useClub3 = useClub(),
            t = _useClub3.t,
            currentPage = _useClub3.currentPage,
            setCurrentPage = _useClub3.setCurrentPage,
            openDonationModal = _useClub3.openDonationModal;
          var navButtons = [{
            id: "home",
            label: t.navHome || "Home",
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Shield, {
              className: "w-5 h-5"
            }),
            onClick: function onClick() {
              return setCurrentPage("home");
            },
            isActive: currentPage === "home"
          }, {
            id: "donate",
            label: t.navDonate || "Donate",
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
              className: "w-5 h-5 text-emerald-400 fill-emerald-400/30"
            }),
            onClick: openDonationModal,
            isActive: false
          }, {
            id: "membership",
            label: t.navMembership || "Membership",
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
              className: "w-5 h-5"
            }),
            onClick: function onClick() {
              return setCurrentPage("membership");
            },
            isActive: currentPage === "membership"
          }, {
            id: "about",
            label: t.navAbout || "About",
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Info, {
              className: "w-5 h-5"
            }),
            onClick: function onClick() {
              return setCurrentPage("about");
            },
            isActive: currentPage === "about"
          }, {
            id: "contact",
            label: t.navContact || "Contact",
            icon: /* @__PURE__ */jsxRuntimeExports.jsx(Phone, {
              className: "w-5 h-5"
            }),
            onClick: function onClick() {
              return setCurrentPage("contact");
            },
            isActive: currentPage === "contact"
          }];
          if (currentPage === "admin") return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("nav", {
            "aria-label": "Mobile Fixed Navigation",
            className: "fixed bottom-0 left-0 right-0 z-50 py-2 px-2 flex items-center justify-around sm:hidden shadow-2xl border-t",
            style: {
              backgroundColor: "#0a0a0a",
              borderColor: "#262626"
            },
            children: navButtons.map(function (btn) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: btn.onClick,
                className: "flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ".concat(btn.isActive ? "scale-105 font-bold" : "hover:text-white"),
                style: {
                  color: btn.isActive ? "#ef4444" : "#a3a3a3"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  style: {
                    color: btn.isActive ? "#ef4444" : btn.id === "donate" ? "#10b981" : "#d4d4d4"
                  },
                  children: btn.icon
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xxs uppercase font-sports tracking-wider mt-1 truncate max-w-[64px]",
                  style: {
                    color: btn.isActive ? "#ef4444" : "#d4d4d4"
                  },
                  children: btn.label
                })]
              }, btn.id);
            })
          });
        };
        var OFFICIAL_SPORTSDB_BADGES = {
          halaba: halabaLogoUrl,
          cbe_sa: "https://r2.thesportsdb.com/images/media/team/badge/fn7am21727368578.png",
          insurance: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png",
          medhin: "https://r2.thesportsdb.com/images/media/team/badge/oboroa1776295149.png",
          fasil: "https://r2.thesportsdb.com/images/media/team/badge/xivgrb1790265423.png",
          adama: "https://r2.thesportsdb.com/images/media/team/badge/4yijrk1615830040.png",
          electric: "https://r2.thesportsdb.com/images/media/team/badge/nywmq91790265280.png",
          bunna: "https://r2.thesportsdb.com/images/media/team/badge/welkj51790265316.png",
          bahirdar: "https://r2.thesportsdb.com/images/media/team/badge/o25wvi1790265058.png",
          saintgeorge: "https://r2.thesportsdb.com/images/media/team/badge/r5orqa1615830067.png",
          giorgis: "https://r2.thesportsdb.com/images/media/team/badge/r5orqa1615830067.png",
          defence: "https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png",
          mekelakeya: "https://r2.thesportsdb.com/images/media/team/badge/o1ig4m1760893133.png",
          welwalo: "https://r2.thesportsdb.com/images/media/team/badge/x1aihm1727368029.png",
          wolaitta: "https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png",
          dicha: "https://r2.thesportsdb.com/images/media/team/badge/zveh4e1615830076.png",
          hosaena: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png",
          hossana: "https://r2.thesportsdb.com/images/media/team/badge/9f0ozj1790265391.png",
          diredawa: "https://r2.thesportsdb.com/images/media/team/badge/70017i1615830053.png",
          gamochencha: "https://r2.thesportsdb.com/images/media/team/badge/o3yz391790265452.png",
          sidama: "https://r2.thesportsdb.com/images/media/team/badge/45f96b1790265577.png",
          hawassa: "https://r2.thesportsdb.com/images/media/team/badge/hawassa_city_sc.png",
          shaggar: "https://r2.thesportsdb.com/images/media/team/badge/shaggar_city_epl.png",
          negelle: "https://r2.thesportsdb.com/images/media/team/badge/negele_arsi_fc.png"
        };
        var CANONICAL_SEARCH_NAMES = {
          halaba: "Halaba Ketema",
          fasil: "Fasil Kenema",
          wolaitta: "Wolaitta Dicha",
          dicha: "Wolaitta Dicha",
          bahirdar: "Bahir Dar Kenema",
          cbe_sa: "Commercial Bank of Ethiopia",
          insurance: "Ethiopian Medhin",
          medhin: "Ethiopian Medhin",
          adama: "Adama Kenema",
          electric: "Ethio Electric",
          bunna: "Ethiopian Coffee",
          saintgeorge: "Kidus Giorgis",
          giorgis: "Kidus Giorgis",
          defence: "Mechal",
          mekelakeya: "Mechal",
          welwalo: "Welwalo Adigrat University",
          hosaena: "Hadiya Hossana",
          hossana: "Hadiya Hossana",
          diredawa: "Dire Dawa Kenema",
          gamochencha: "Gamo Chencha",
          sidama: "Sidama Bunna",
          hawassa: "Hawassa Kenema",
          shaggar: "Shaggar City",
          negelle: "Negelle Arsi"
        };
        var STORAGE_KEY = "thesportsdb_badges_v2";
        function loadPersistedBadges() {
          var map = /* @__PURE__ */new Map();
          Object.entries(OFFICIAL_SPORTSDB_BADGES).forEach(function (_ref47) {
            var _ref48 = _slicedToArray(_ref47, 2),
              k = _ref48[0],
              v = _ref48[1];
            map.set(k.toLowerCase().trim(), v);
          });
          try {
            if (typeof window !== "undefined" && window.localStorage) {
              var raw = localStorage.getItem(STORAGE_KEY);
              if (raw) {
                var parsed = JSON.parse(raw);
                Object.entries(parsed).forEach(function (_ref49) {
                  var _ref50 = _slicedToArray(_ref49, 2),
                    k = _ref50[0],
                    v = _ref50[1];
                  if (typeof v === "string" || v === null) {
                    map.set(k.toLowerCase().trim(), v);
                  }
                });
              }
            }
          } catch (_unused1) {}
          return map;
        }
        function persistBadge(key, badge) {
          try {
            if (typeof window !== "undefined" && window.localStorage) {
              var raw = localStorage.getItem(STORAGE_KEY);
              var parsed = raw ? JSON.parse(raw) : {};
              parsed[key] = badge;
              localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            }
          } catch (_unused10) {}
        }
        var badgeCache = loadPersistedBadges();
        var EthiopianClubLogo = exports("E", function (_ref51) {
          var _ref51$teamId = _ref51.teamId,
            teamId = _ref51$teamId === void 0 ? "" : _ref51$teamId,
            teamName = _ref51.teamName,
            _ref51$size = _ref51.size,
            size = _ref51$size === void 0 ? 36 : _ref51$size,
            badgeUrl = _ref51.badgeUrl,
            _ref51$priority = _ref51.priority,
            priority = _ref51$priority === void 0 ? false : _ref51$priority,
            _ref51$className = _ref51.className,
            className = _ref51$className === void 0 ? "" : _ref51$className;
          var normalizedKey = (teamId || teamName).toLowerCase().trim();
          if (normalizedKey.includes("halaba") || teamId === "halaba") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
              size: size,
              className: className
            });
          }
          var initialBadge = function initialBadge() {
            if (badgeUrl) return badgeUrl;
            if (badgeCache.has(normalizedKey)) {
              return badgeCache.get(normalizedKey) || null;
            }
            if (OFFICIAL_SPORTSDB_BADGES[normalizedKey]) {
              return OFFICIAL_SPORTSDB_BADGES[normalizedKey];
            }
            for (var _i1 = 0, _Object$entries2 = Object.entries(OFFICIAL_SPORTSDB_BADGES); _i1 < _Object$entries2.length; _i1++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i1], 2),
                key = _Object$entries2$_i[0],
                val = _Object$entries2$_i[1];
              if (normalizedKey.includes(key)) {
                return val;
              }
            }
            return null;
          };
          var _reactExports$useStat75 = reactExports.useState(initialBadge),
            _reactExports$useStat76 = _slicedToArray(_reactExports$useStat75, 2),
            badge = _reactExports$useStat76[0],
            setBadge = _reactExports$useStat76[1];
          var _reactExports$useStat77 = reactExports.useState(false),
            _reactExports$useStat78 = _slicedToArray(_reactExports$useStat77, 2),
            imgError = _reactExports$useStat78[0],
            setImgError = _reactExports$useStat78[1];
          var _reactExports$useStat79 = reactExports.useState(false),
            _reactExports$useStat80 = _slicedToArray(_reactExports$useStat79, 2),
            isLoaded = _reactExports$useStat80[0],
            setIsLoaded = _reactExports$useStat80[1];
          reactExports.useEffect(function () {
            if (badgeUrl) {
              setBadge(badgeUrl);
              setImgError(false);
              return;
            }
            var cached = badgeCache.get(normalizedKey);
            if (cached !== void 0) {
              setBadge(cached);
              return;
            }
            for (var _i10 = 0, _Object$entries3 = Object.entries(OFFICIAL_SPORTSDB_BADGES); _i10 < _Object$entries3.length; _i10++) {
              var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i10], 2),
                key = _Object$entries3$_i[0],
                val = _Object$entries3$_i[1];
              if (normalizedKey.includes(key)) {
                badgeCache.set(normalizedKey, val);
                setBadge(val);
                return;
              }
            }
            var isMounted = true;
            var fetchBadge = /*#__PURE__*/function () {
              var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
                var _data$teams, isNumericId, url, canonicalEnglish, searchTerm, response, data, teamObj, fetchedBadge, normalizedBadge, _t43;
                return _regenerator().w(function (_context38) {
                  while (1) switch (_context38.p = _context38.n) {
                    case 0:
                      _context38.p = 0;
                      isNumericId = /^\d+$/.test(teamId);
                      if (isNumericId) {
                        url = "https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=".concat(teamId);
                      } else {
                        canonicalEnglish = CANONICAL_SEARCH_NAMES[normalizedKey] || teamName.replace(/\(.*?\)/g, "").replace(/\[.*?\]/g, "").replace(/[^\x00-\x7F]/g, "").trim();
                        searchTerm = canonicalEnglish || teamId || teamName;
                        url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=".concat(encodeURIComponent(searchTerm));
                      }
                      _context38.n = 1;
                      return fetch(url);
                    case 1:
                      response = _context38.v;
                      if (response.ok) {
                        _context38.n = 2;
                        break;
                      }
                      throw new Error("HTTP ".concat(response.status));
                    case 2:
                      _context38.n = 3;
                      return response.json();
                    case 3:
                      data = _context38.v;
                      teamObj = data === null || data === void 0 || (_data$teams = data.teams) === null || _data$teams === void 0 ? void 0 : _data$teams[0];
                      fetchedBadge = (teamObj === null || teamObj === void 0 ? void 0 : teamObj.strBadge) || (teamObj === null || teamObj === void 0 ? void 0 : teamObj.strTeamBadge) || null;
                      normalizedBadge = fetchedBadge ? fetchedBadge.replace("/tiny", "") : null;
                      badgeCache.set(normalizedKey, normalizedBadge);
                      persistBadge(normalizedKey, normalizedBadge);
                      if (isMounted) {
                        setBadge(normalizedBadge);
                      }
                      _context38.n = 5;
                      break;
                    case 4:
                      _context38.p = 4;
                      _t43 = _context38.v;
                      badgeCache.set(normalizedKey, null);
                      persistBadge(normalizedKey, null);
                      if (isMounted) {
                        setBadge(null);
                      }
                    case 5:
                      return _context38.a(2);
                  }
                }, _callee38, null, [[0, 4]]);
              }));
              return function fetchBadge() {
                return _ref52.apply(this, arguments);
              };
            }();
            fetchBadge();
            return function () {
              isMounted = false;
            };
          }, [teamId, teamName, badgeUrl, normalizedKey]);
          if (badge && !imgError) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              style: {
                width: size,
                height: size
              },
              className: "relative rounded-full bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden select-none transition-transform duration-200 ".concat(className),
              title: teamName,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: badge,
                alt: teamName,
                className: "w-full h-full object-contain transition-opacity duration-300 ".concat(isLoaded ? "opacity-100" : "opacity-80"),
                onError: function onError() {
                  return setImgError(true);
                },
                onLoad: function onLoad() {
                  return setIsLoaded(true);
                },
                loading: priority || size >= 48 ? "eager" : "lazy",
                decoding: "async",
                referrerPolicy: "no-referrer"
              })
            });
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              width: size,
              height: size
            },
            className: "rounded-full bg-neutral-800/90 border border-neutral-700/80 p-1 flex items-center justify-center text-center shrink-0 overflow-hidden select-none text-neutral-300 font-semibold shadow-sm ".concat(className),
            title: teamName,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "truncate max-w-full leading-tight text-center px-0.5 tracking-tight font-medium",
              style: {
                fontSize: Math.max(9, Math.floor(size * 0.24))
              },
              children: teamName
            })
          });
        });
        var globalPromptEvent = null;
        if (typeof window !== "undefined") {
          window.addEventListener("beforeinstallprompt", function (e) {
            e.preventDefault();
            globalPromptEvent = e;
            window.dispatchEvent(new CustomEvent("pwa-prompt-ready"));
          });
          window.addEventListener("appinstalled", function () {
            globalPromptEvent = null;
            window.dispatchEvent(new CustomEvent("pwa-installed"));
          });
        }
        function usePWAInstall() {
          var _reactExports$useStat81 = reactExports.useState(function () {
              return globalPromptEvent;
            }),
            _reactExports$useStat82 = _slicedToArray(_reactExports$useStat81, 2),
            deferredPrompt = _reactExports$useStat82[0],
            setDeferredPrompt = _reactExports$useStat82[1];
          var _reactExports$useStat83 = reactExports.useState(false),
            _reactExports$useStat84 = _slicedToArray(_reactExports$useStat83, 2),
            isInstalled = _reactExports$useStat84[0],
            setIsInstalled = _reactExports$useStat84[1];
          var _reactExports$useStat85 = reactExports.useState(false),
            _reactExports$useStat86 = _slicedToArray(_reactExports$useStat85, 2),
            isIOS = _reactExports$useStat86[0],
            setIsIOS = _reactExports$useStat86[1];
          var _reactExports$useStat87 = reactExports.useState(false),
            _reactExports$useStat88 = _slicedToArray(_reactExports$useStat87, 2),
            isAndroid = _reactExports$useStat88[0],
            setIsAndroid = _reactExports$useStat88[1];
          var _reactExports$useStat89 = reactExports.useState(false),
            _reactExports$useStat90 = _slicedToArray(_reactExports$useStat89, 2),
            isInstallModalOpen = _reactExports$useStat90[0],
            setIsInstallModalOpen = _reactExports$useStat90[1];
          reactExports.useEffect(function () {
            var checkStandalone = function checkStandalone() {
              var _window$Capacitor, _window$Capacitor$isN, _document$referrer;
              if (typeof window === "undefined") return false;
              var isMediaStandalone = window.matchMedia("(display-mode: standalone)").matches;
              var isNavStandalone = window.navigator.standalone === true;
              var isCapacitorNative = Boolean((_window$Capacitor = window.Capacitor) === null || _window$Capacitor === void 0 || (_window$Capacitor$isN = _window$Capacitor.isNativePlatform) === null || _window$Capacitor$isN === void 0 ? void 0 : _window$Capacitor$isN.call(_window$Capacitor));
              var isQueryApp = window.location.search.includes("source=pwa") || window.location.search.includes("source=apk") || window.location.search.includes("mode=app") || window.location.search.includes("installed=true");
              var isReferrerApp = typeof document !== "undefined" && ((_document$referrer = document.referrer) === null || _document$referrer === void 0 ? void 0 : _document$referrer.includes("android-app://"));
              return isMediaStandalone || isNavStandalone || isCapacitorNative || isQueryApp || isReferrerApp;
            };
            setIsInstalled(checkStandalone());
            var ua = window.navigator.userAgent.toLowerCase();
            var isIOSDevice = /iphone|ipad|ipod/.test(ua) && !window.MSStream;
            var isAndroidDevice = /android/.test(ua);
            setIsIOS(isIOSDevice);
            setIsAndroid(isAndroidDevice);
            if (globalPromptEvent && !deferredPrompt) {
              setDeferredPrompt(globalPromptEvent);
            }
            var handlePromptReady = function handlePromptReady() {
              setDeferredPrompt(globalPromptEvent);
            };
            var handleBeforeInstallPrompt = function handleBeforeInstallPrompt(e) {
              e.preventDefault();
              globalPromptEvent = e;
              setDeferredPrompt(e);
            };
            var handleAppInstalled = function handleAppInstalled() {
              setIsInstalled(true);
              globalPromptEvent = null;
              setDeferredPrompt(null);
              setIsInstallModalOpen(false);
            };
            window.addEventListener("pwa-prompt-ready", handlePromptReady);
            window.addEventListener("pwa-installed", handleAppInstalled);
            window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
            window.addEventListener("appinstalled", handleAppInstalled);
            return function () {
              window.removeEventListener("pwa-prompt-ready", handlePromptReady);
              window.removeEventListener("pwa-installed", handleAppInstalled);
              window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
              window.removeEventListener("appinstalled", handleAppInstalled);
            };
          }, [deferredPrompt]);
          var triggerNativeInstall = /*#__PURE__*/function () {
            var _ref53 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39() {
              var promptToUse, choice, _t44;
              return _regenerator().w(function (_context39) {
                while (1) switch (_context39.p = _context39.n) {
                  case 0:
                    promptToUse = deferredPrompt || globalPromptEvent;
                    if (promptToUse) {
                      _context39.n = 1;
                      break;
                    }
                    console.warn("PWA: beforeinstallprompt is not available on this browser/session.");
                    return _context39.a(2, "unavailable");
                  case 1:
                    _context39.p = 1;
                    _context39.n = 2;
                    return promptToUse.prompt();
                  case 2:
                    _context39.n = 3;
                    return promptToUse.userChoice;
                  case 3:
                    choice = _context39.v;
                    if (!(choice.outcome === "accepted")) {
                      _context39.n = 4;
                      break;
                    }
                    setIsInstalled(true);
                    globalPromptEvent = null;
                    setDeferredPrompt(null);
                    return _context39.a(2, "accepted");
                  case 4:
                    return _context39.a(2, "dismissed");
                  case 5:
                    _context39.p = 5;
                    _t44 = _context39.v;
                    console.warn("PWA prompt execution error:", _t44);
                    return _context39.a(2, "unavailable");
                }
              }, _callee39, null, [[1, 5]]);
            }));
            return function triggerNativeInstall() {
              return _ref53.apply(this, arguments);
            };
          }();
          var openInstallModal = function openInstallModal() {
            return setIsInstallModalOpen(true);
          };
          var closeInstallModal = function closeInstallModal() {
            return setIsInstallModalOpen(false);
          };
          return {
            isInstallable: !!(deferredPrompt || globalPromptEvent) || isIOS,
            hasNativePrompt: !!(deferredPrompt || globalPromptEvent),
            isInstalled: isInstalled,
            isIOS: isIOS,
            isAndroid: isAndroid,
            isInstallModalOpen: isInstallModalOpen,
            openInstallModal: openInstallModal,
            closeInstallModal: closeInstallModal,
            triggerNativeInstall: triggerNativeInstall
          };
        }
        var DEFAULT_APK = {
          downloadUrl: "https://github.com/Abdmalik0/halaba-fc/releases/download/v1.0/HalabaCityFC-v1.0-debug.apk",
          fileName: "HalabaCityFC-v1.0-debug.apk",
          version: "v1.0",
          sizeFormatted: "22.3 MB"
        };
        var AppStoreInstallCard$1 = function AppStoreInstallCard$1(_ref54) {
          var _ref54$mode = _ref54.mode,
            mode = _ref54$mode === void 0 ? "embedded" : _ref54$mode,
            onClose = _ref54.onClose;
          var _useClub4 = useClub(),
            language = _useClub4.language;
          var _usePWAInstall = usePWAInstall(),
            isInstalled = _usePWAInstall.isInstalled,
            isIOS = _usePWAInstall.isIOS;
          if (isInstalled) {
            return null;
          }
          var _reactExports$useStat91 = reactExports.useState(function () {
              return isIOS ? "ios" : "android";
            }),
            _reactExports$useStat92 = _slicedToArray(_reactExports$useStat91, 2),
            selectedOS = _reactExports$useStat92[0],
            setSelectedOS = _reactExports$useStat92[1];
          var _reactExports$useStat93 = reactExports.useState(false),
            _reactExports$useStat94 = _slicedToArray(_reactExports$useStat93, 2),
            downloadStarted = _reactExports$useStat94[0],
            setDownloadStarted = _reactExports$useStat94[1];
          var _reactExports$useStat95 = reactExports.useState(DEFAULT_APK),
            _reactExports$useStat96 = _slicedToArray(_reactExports$useStat95, 2),
            apkInfo = _reactExports$useStat96[0],
            setApkInfo = _reactExports$useStat96[1];
          var _reactExports$useStat97 = reactExports.useState(false),
            _reactExports$useStat98 = _slicedToArray(_reactExports$useStat97, 2),
            isResolving = _reactExports$useStat98[0],
            setIsResolving = _reactExports$useStat98[1];
          reactExports.useEffect(function () {
            var isMounted = true;
            var fetchLatestApk = /*#__PURE__*/function () {
              var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40() {
                var res, data, ghRes, releases, _iterator8, _step8, _rel$assets, rel, asset, mb, _t45, _t46, _t47;
                return _regenerator().w(function (_context40) {
                  while (1) switch (_context40.p = _context40.n) {
                    case 0:
                      _context40.p = 0;
                      _context40.n = 1;
                      return fetch("/api/latest-apk");
                    case 1:
                      res = _context40.v;
                      if (!res.ok) {
                        _context40.n = 3;
                        break;
                      }
                      _context40.n = 2;
                      return res.json();
                    case 2:
                      data = _context40.v;
                      if (!(data && data.downloadUrl && isMounted)) {
                        _context40.n = 3;
                        break;
                      }
                      setApkInfo({
                        downloadUrl: data.downloadUrl,
                        fileName: data.fileName || DEFAULT_APK.fileName,
                        version: data.version || DEFAULT_APK.version,
                        sizeFormatted: data.sizeFormatted || DEFAULT_APK.sizeFormatted
                      });
                      return _context40.a(2);
                    case 3:
                      _context40.n = 5;
                      break;
                    case 4:
                      _context40.p = 4;
                      _t45 = _context40.v;
                      console.debug("Failed to fetch from /api/latest-apk, checking GitHub directly:", _t45);
                    case 5:
                      _context40.p = 5;
                      _context40.n = 6;
                      return fetch("https://api.github.com/repos/Abdmalik0/halaba-fc/releases", {
                        headers: {
                          Accept: "application/vnd.github.v3+json"
                        }
                      });
                    case 6:
                      ghRes = _context40.v;
                      if (!ghRes.ok) {
                        _context40.n = 14;
                        break;
                      }
                      _context40.n = 7;
                      return ghRes.json();
                    case 7:
                      releases = _context40.v;
                      if (!Array.isArray(releases)) {
                        _context40.n = 14;
                        break;
                      }
                      _iterator8 = _createForOfIteratorHelper(releases);
                      _context40.p = 8;
                      _iterator8.s();
                    case 9:
                      if ((_step8 = _iterator8.n()).done) {
                        _context40.n = 11;
                        break;
                      }
                      rel = _step8.value;
                      asset = (_rel$assets = rel.assets) === null || _rel$assets === void 0 ? void 0 : _rel$assets.find(function (a) {
                        return typeof (a === null || a === void 0 ? void 0 : a.name) === "string" && a.name.toLowerCase().endsWith(".apk");
                      });
                      if (!(asset && isMounted)) {
                        _context40.n = 10;
                        break;
                      }
                      mb = (asset.size / (1024 * 1024)).toFixed(1);
                      setApkInfo({
                        downloadUrl: asset.browser_download_url,
                        fileName: asset.name,
                        version: rel.tag_name || "Latest",
                        sizeFormatted: "".concat(mb, " MB")
                      });
                      return _context40.a(2);
                    case 10:
                      _context40.n = 9;
                      break;
                    case 11:
                      _context40.n = 13;
                      break;
                    case 12:
                      _context40.p = 12;
                      _t46 = _context40.v;
                      _iterator8.e(_t46);
                    case 13:
                      _context40.p = 13;
                      _iterator8.f();
                      return _context40.f(13);
                    case 14:
                      _context40.n = 16;
                      break;
                    case 15:
                      _context40.p = 15;
                      _t47 = _context40.v;
                      console.debug("Direct GitHub API check skipped/rate-limited:", _t47);
                    case 16:
                      return _context40.a(2);
                  }
                }, _callee40, null, [[8, 12, 13, 14], [5, 15], [0, 4]]);
              }));
              return function fetchLatestApk() {
                return _ref55.apply(this, arguments);
              };
            }();
            fetchLatestApk();
            return function () {
              isMounted = false;
            };
          }, []);
          var handleDownloadAPK = /*#__PURE__*/function () {
            var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
              var targetUrl, targetFileName, res, data, link, _t48;
              return _regenerator().w(function (_context41) {
                while (1) switch (_context41.p = _context41.n) {
                  case 0:
                    setIsResolving(true);
                    setDownloadStarted(true);
                    targetUrl = apkInfo.downloadUrl;
                    targetFileName = apkInfo.fileName;
                    _context41.p = 1;
                    if (!(!targetUrl || targetUrl === "/HalabaCityFC-v1.0-debug.apk")) {
                      _context41.n = 4;
                      break;
                    }
                    _context41.n = 2;
                    return fetch("/api/latest-apk");
                  case 2:
                    res = _context41.v;
                    if (!res.ok) {
                      _context41.n = 4;
                      break;
                    }
                    _context41.n = 3;
                    return res.json();
                  case 3:
                    data = _context41.v;
                    if (data !== null && data !== void 0 && data.downloadUrl) {
                      targetUrl = data.downloadUrl;
                      targetFileName = data.fileName || targetFileName;
                    }
                  case 4:
                    _context41.n = 6;
                    break;
                  case 5:
                    _context41.p = 5;
                    _t48 = _context41.v;
                    targetUrl = DEFAULT_APK.downloadUrl;
                  case 6:
                    _context41.p = 6;
                    setIsResolving(false);
                    return _context41.f(6);
                  case 7:
                    link = document.createElement("a");
                    link.href = targetUrl;
                    link.setAttribute("download", targetFileName);
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(function () {
                      if (document.body.contains(link)) {
                        document.body.removeChild(link);
                      }
                    }, 500);
                  case 8:
                    return _context41.a(2);
                }
              }, _callee41, null, [[1, 5, 6, 7]]);
            }));
            return function handleDownloadAPK() {
              return _ref56.apply(this, arguments);
            };
          }();
          var content = /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "w-full bg-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden font-sans",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900/90 backdrop-blur-md px-5 py-4 border-b border-neutral-800 flex items-center justify-between",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                  size: 36
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-sm text-white uppercase tracking-wider",
                    children: language === "am" ? "የሀላባ ከተማ ሞባይል መተግበሪያ" : "HALABA City FC App"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xxs text-emerald-400 font-medium",
                    children: language === "am" ? "ይፋዊ የስልክ መተግበሪያ" : "Official Club Mobile App"
                  })]
                })]
              }), onClose && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                onClick: onClose,
                className: "p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer",
                "aria-label": "Close",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                  className: "w-5 h-5"
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "p-6 sm:p-7 space-y-6",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "grid grid-cols-2 gap-3 p-1.5 bg-neutral-900 rounded-2xl border border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    setSelectedOS("android");
                    setDownloadStarted(false);
                  },
                  className: "py-3 px-4 rounded-xl font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ".concat(selectedOS === "android" ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-950/60 scale-[1.01]" : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("svg", {
                    className: "w-5 h-5 fill-current",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                      d: "M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4567c.1082-.1875.0441-.4282-.1434-.5364-.1878-.1082-.4283-.0441-.5365.1434l-2.0227 3.503c-1.5583-.7104-3.3242-1.1217-5.1749-1.1217-1.8507 0-3.6166.4113-5.1749 1.1217L4.8007 5.4717c-.1082-.1875-.3487-.2516-.5365-.1434-.1875.1082-.2516.3489-.1434.5364l1.996 3.4567C2.6885 11.1611.3438 14.9392.0001 19.3496h23.9998c-.3437-4.4104-2.6884-8.1885-6.1199-10.0282"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Android (APK)"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    setSelectedOS("ios");
                  },
                  className: "py-3 px-4 rounded-xl font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ".concat(selectedOS === "ios" ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-950/60 scale-[1.01]" : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("svg", {
                    className: "w-5 h-5 fill-current",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx("path", {
                      d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.9c.62-.75 1.04-1.8 0.92-2.9-.9.04-2 .6-2.65 1.35-.58.65-1.09 1.73-.95 2.8 1.01.08 2.06-.5 2.68-1.25z"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "iOS (iPhone)"
                  })]
                })]
              }), selectedOS === "android" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-4",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-5 rounded-2xl bg-neutral-900/90 border border-emerald-500/30 text-center space-y-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "w-14 h-14 mx-auto rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Download, {
                      className: "w-7 h-7"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                      className: "font-sports font-black text-lg text-white uppercase tracking-wide",
                      children: language === "am" ? "የአንድሮይድ መተግበሪያ (APK) አውርድ" : "Halaba City FC Android APK"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-center gap-2 mt-1.5 flex-wrap",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xxs font-bold",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                          className: "w-3 h-3"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: apkInfo.version
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-400 font-mono bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800",
                        children: apkInfo.sizeFormatted
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-400",
                        children: language === "am" ? "ይፋዊ የGitHub ስራ" : "GitHub Actions Release"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: handleDownloadAPK,
                    disabled: isResolving,
                    className: "w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-emerald-950/80 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 hover:scale-[1.01] cursor-pointer disabled:opacity-75",
                    children: [isResolving ? /* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                      className: "w-5 h-5 animate-spin"
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(Download, {
                      className: "w-5 h-5 animate-bounce"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: isResolving ? language === "am" ? "ፋይሉን በማገናኘት ላይ..." : "Connecting to GitHub..." : language === "am" ? "አሁን አውርድ (Direct APK Download)" : "Download Android APK"
                    })]
                  }), downloadStarted && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-left flex items-start gap-3 animate-in fade-in",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                      className: "w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-xs text-emerald-200",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                        className: "block text-white font-bold",
                        children: language === "am" ? "ማውረድ ተጀምሯል!" : "Download Started!"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "\u134B\u12ED\u1209 (".concat(apkInfo.fileName, ") \u12C8\u122D\u12F6 \u1232\u1320\u1293\u1240\u1245 \u121B\u1233\u12C8\u1242\u12EB\u12CD\u1295 (Notification) \u12C8\u12ED\u121D \u12E8\u1235\u120D\u12AD\u12CE\u1295 Downloads \u134E\u120D\u12F0\u122D \u12A8\u134D\u1270\u12CD Install \u12EB\u12F5\u122D\u1309\u1275\u1362") : "Once downloaded, open ".concat(apkInfo.fileName, " from your notifications or Downloads folder to install.")
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-2 text-left space-y-2 border-t border-neutral-800",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xxs font-bold text-neutral-400 uppercase tracking-wider",
                      children: language === "am" ? "የአጫጫን ቅደም ተከተል፡" : "Quick Install Steps:"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "space-y-1.5 text-xs text-neutral-300",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2 p-2 rounded-lg bg-neutral-950/80 border border-neutral-800",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center font-bold text-xxs shrink-0",
                          children: "1"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "የወረደውን APK ፋይል ይጫኑ" : "Tap the downloaded APK file"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2 p-2 rounded-lg bg-neutral-950/80 border border-neutral-800",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center font-bold text-xxs shrink-0",
                          children: "2"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "“Install” የሚለውን ይጫኑ (ፍቃድ ከጠየቀ “Allow from this source” ይምረጡ)" : 'Tap "Install" (Allow unknown apps if prompted)'
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "pt-2 text-center",
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: "https://github.com/Abdmalik0/halaba-fc/releases",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 text-xxs text-neutral-400 hover:text-white transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3 h-3 text-neutral-500"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "በGitHub Releases ለማየት" : "View GitHub Releases & Workflow"
                      })]
                    })
                  })]
                })
              }), selectedOS === "ios" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-4",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-5 rounded-2xl bg-neutral-900/90 border border-blue-900/40 space-y-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 text-blue-400 text-xs font-sports font-bold uppercase tracking-wider",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Smartphone, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "የአይፎን ሳፋሪ አጫጫን መመሪያ" : "Apple iOS Safari Installation (PWA)"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2.5 text-xs text-neutral-300",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5",
                        children: "1"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-bold text-white",
                          children: language === "am" ? "በሳፋሪ ታችኛው ክፍል የShare ምልክትን ይጫኑ" : "Tap the Safari Share button"
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-blue-400 font-semibold text-xxs mt-1.5",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(Share2, {
                            className: "w-3.5 h-3.5"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: language === "am" ? "Share (አጋራ)" : "Share"
                          })]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5",
                        children: "2"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-bold text-white",
                          children: language === "am" ? "ወደ ታች ዝቅ ብለው “Add to Home Screen” ይጫኑ" : 'Select "Add to Home Screen"'
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-xxs mt-1.5",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx(SquarePlus, {
                            className: "w-3.5 h-3.5 text-neutral-300"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: "Add to Home Screen"
                          })]
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-6 h-6 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5",
                        children: "3"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-bold text-white",
                          children: language === "am" ? "በቀኝ በኩል “Add” የሚለውን ይጫኑ" : 'Tap "Add" in top-right'
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                          className: "text-xxs text-neutral-400 mt-0.5",
                          children: language === "am" ? "ይፋዊው የሀላባ ከተማ ክለብ መተግበሪያ አርማ በስልክዎ ዋና ገጽ ላይ ይቀመጣል!" : "The Halaba City FC app icon will appear on your home screen and open in standalone mode!"
                        })]
                      })]
                    })]
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-center gap-1.5 text-xxs text-neutral-400 pt-1",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                  className: "w-3.5 h-3.5 text-emerald-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: language === "am" ? "የተረጋገጠ ይፋዊ የሀላባ ከተማ እግርኳስ ክለብ ሶፍትዌር" : "Verified Official Halaba City FC Software"
                })]
              })]
            })]
          });
          if (mode === "modal") {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "max-w-md w-full max-h-[92vh] overflow-y-auto",
                children: content
              })
            });
          }
          return content;
        };
        var AppStoreInstallCard$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          AppStoreInstallCard: AppStoreInstallCard$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        var SponsorAutoSlider = function SponsorAutoSlider(_ref57) {
          var _ref57$className = _ref57.className,
            className = _ref57$className === void 0 ? "" : _ref57$className,
            _ref57$autoPlayInterv = _ref57.autoPlayInterval,
            autoPlayInterval = _ref57$autoPlayInterv === void 0 ? 4500 : _ref57$autoPlayInterv;
          var _useClub5 = useClub(),
            sponsors = _useClub5.sponsors,
            language = _useClub5.language,
            setCurrentPage = _useClub5.setCurrentPage,
            isAdminLoggedIn = _useClub5.isAdminLoggedIn;
          var _reactExports$useStat99 = reactExports.useState(0),
            _reactExports$useStat100 = _slicedToArray(_reactExports$useStat99, 2),
            currentIndex = _reactExports$useStat100[0],
            setCurrentIndex = _reactExports$useStat100[1];
          var _reactExports$useStat101 = reactExports.useState(false),
            _reactExports$useStat102 = _slicedToArray(_reactExports$useStat101, 2),
            isPaused = _reactExports$useStat102[0],
            setIsPaused = _reactExports$useStat102[1];
          var _reactExports$useStat103 = reactExports.useState({}),
            _reactExports$useStat104 = _slicedToArray(_reactExports$useStat103, 2),
            imageErrorMap = _reactExports$useStat104[0],
            setImageErrorMap = _reactExports$useStat104[1];
          var timerRef = reactExports.useRef(null);
          var activeSponsors = sponsors.filter(function (s) {
            return s.active !== false;
          }).sort(function (a, b) {
            return (a.order || 0) - (b.order || 0);
          });
          var totalSponsors = activeSponsors.length;
          var handleNext = function handleNext() {
            if (totalSponsors <= 1) return;
            setCurrentIndex(function (prev) {
              return (prev + 1) % totalSponsors;
            });
          };
          var handlePrev = function handlePrev() {
            if (totalSponsors <= 1) return;
            setCurrentIndex(function (prev) {
              return (prev - 1 + totalSponsors) % totalSponsors;
            });
          };
          reactExports.useEffect(function () {
            if (isPaused || totalSponsors <= 1) return;
            timerRef.current = setInterval(function () {
              setCurrentIndex(function (prev) {
                return (prev + 1) % totalSponsors;
              });
            }, autoPlayInterval);
            return function () {
              if (timerRef.current) clearInterval(timerRef.current);
            };
          }, [isPaused, totalSponsors, autoPlayInterval, currentIndex]);
          reactExports.useEffect(function () {
            if (currentIndex >= totalSponsors && totalSponsors > 0) {
              setCurrentIndex(0);
            }
          }, [totalSponsors, currentIndex]);
          if (totalSponsors === 0) {
            return null;
          }
          var currentSponsor = activeSponsors[currentIndex] || activeSponsors[0];
          var isNetVibe = currentSponsor.id.includes("netvibe") || currentSponsor.name.toLowerCase().includes("netvibe");
          var localizedName = language === "am" && currentSponsor.nameAm ? currentSponsor.nameAm : language === "om" && currentSponsor.nameOm ? currentSponsor.nameOm : currentSponsor.name;
          var localizedTier = language === "am" && currentSponsor.tierAm ? currentSponsor.tierAm : currentSponsor.tier;
          var localizedDesc = language === "am" && currentSponsor.descriptionAm ? currentSponsor.descriptionAm : currentSponsor.description;
          var hasImageError = Boolean(imageErrorMap[currentSponsor.id]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "w-full max-w-5xl mx-auto my-6 select-none ".concat(className),
            onMouseEnter: function onMouseEnter() {
              return setIsPaused(true);
            },
            onMouseLeave: function onMouseLeave() {
              return setIsPaused(false);
            },
            role: "region",
            "aria-label": "Official Club Sponsors & Partners Carousel",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-between mb-2.5 px-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xxs font-sports font-bold uppercase tracking-wider",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Award, {
                    className: "w-3 h-3 text-amber-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "ይፋዊ የክለቡ ስፖንሰሮችና አጋሮች" : language === "om" ? "Ispoonsaroota fi Hiriyoota Seera Qabeeyyii" : "Official Club Sponsors & Partners"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  className: "text-xxs text-neutral-400 font-mono hidden sm:inline",
                  children: ["(", currentIndex + 1, " / ", totalSponsors, ")"]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: function onClick() {
                    return setIsPaused(!isPaused);
                  },
                  title: isPaused ? "Resume auto-play" : "Pause auto-play",
                  className: "p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 text-xxs transition-colors",
                  "aria-label": isPaused ? "Resume auto-play" : "Pause auto-play",
                  children: isPaused ? /* @__PURE__ */jsxRuntimeExports.jsx(Play, {
                    className: "w-3 h-3"
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx(Pause, {
                    className: "w-3 h-3"
                  })
                }), isAdminLoggedIn && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: function onClick() {
                    return setCurrentPage("admin");
                  },
                  className: "text-xxs text-amber-400 hover:text-amber-300 px-2 py-1 rounded bg-neutral-900 border border-amber-500/30 font-sports font-bold tracking-wider uppercase transition-colors",
                  children: language === "am" ? "ስፖንሰሮችን አርትዕ" : "Edit Posters"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: handlePrev,
                  className: "p-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all hover:scale-105 active:scale-95",
                  "aria-label": "Previous sponsor",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(ChevronLeft, {
                    className: "w-4 h-4"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: handleNext,
                  className: "p-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all hover:scale-105 active:scale-95",
                  "aria-label": "Next sponsor",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(ChevronRight, {
                    className: "w-4 h-4"
                  })
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 border border-neutral-700/70 shadow-2xl transition-all duration-500 hover:border-red-500/40",
              style: {
                backgroundColor: "#171717"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700",
                style: {
                  background: isNetVibe ? "radial-gradient(circle, #00d2ff, #0055ff)" : "radial-gradient(circle, #dc2626, #f59e0b)"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-15 transition-all duration-700",
                style: {
                  background: isNetVibe ? "radial-gradient(circle, #3b82f6, #1e3a8a)" : "radial-gradient(circle, #059669, #047857)"
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative z-10 flex flex-col md:flex-row items-stretch min-h-[200px] sm:min-h-[230px] md:min-h-[260px]",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "relative md:w-5/12 lg:w-4/12 bg-neutral-950/90 p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800/80 group",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "relative z-10 w-full h-40 sm:h-48 md:h-52 flex items-center justify-center rounded-2xl bg-neutral-900/80 border border-neutral-800 p-3 shadow-inner overflow-hidden",
                    children: [hasImageError ? (/* Fallback poster when image cannot be displayed */
                    /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-col items-center justify-center text-center p-4",
                      children: [isNetVibe ? /* @__PURE__ */jsxRuntimeExports.jsx(NetVibeSvgEmblem, {
                        sizePx: 72
                      }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-2",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                          className: "w-8 h-8"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-sports font-bold text-sm text-white uppercase mt-2",
                        children: localizedName
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-amber-400 font-semibold uppercase",
                        children: localizedTier
                      })]
                    })) : /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                      src: currentSponsor.imageUrl,
                      alt: "".concat(currentSponsor.name, " official poster"),
                      className: "max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105",
                      onError: function onError() {
                        setImageErrorMap(function (prev) {
                          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, currentSponsor.id, true));
                        });
                      },
                      loading: "eager"
                    }, currentSponsor.id), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-xxs text-neutral-300 font-semibold",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                        className: "w-2.5 h-2.5 text-amber-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "uppercase tracking-wider text-[10px]",
                        children: language === "am" ? "የተረጋገጠ አጋር" : "Verified Partner"
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex-1 p-5 sm:p-7 flex flex-col justify-between text-left",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-wrap items-center gap-2 mb-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sports font-bold tracking-wider uppercase border ".concat(isNetVibe ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-950/50" : "bg-red-600/15 border-red-500/40 text-red-300 shadow-sm shadow-red-950/50"),
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Award, {
                          className: "w-3.5 h-3.5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: localizedTier
                        })]
                      }), isNetVibe && /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-300 text-xxs font-bold uppercase",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                          className: "w-3 h-3 text-cyan-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: language === "am" ? "መተግበሪያውን ያበለፀገ" : "App Developer"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                      className: "text-2xl sm:text-3xl font-sports font-black text-white tracking-wide uppercase drop-shadow-sm",
                      children: localizedName
                    }), localizedDesc && /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-2xl",
                      children: localizedDesc
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2 text-xxs text-neutral-400",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "ኦፊሴላዊ የሀላባ ከተማ እግር ኳስ ክለብ አጋር" : "Official Halaba City FC Sponsor & Technology Partner"
                      })]
                    }), currentSponsor.websiteUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: currentSponsor.websiteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-secondary-amber text-white font-sports font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 transition-all hover:scale-102 active:scale-95 group",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "አጋሩን ይጎብኙ" : language === "om" ? "Dhaabbata Daawwadhaa" : "Visit Partner"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      })]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-950/70 border-t border-neutral-800/60 px-4 py-2 flex items-center justify-between",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex items-center gap-1.5",
                  children: activeSponsors.map(function (s, idx) {
                    return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setCurrentIndex(idx);
                      },
                      className: "transition-all duration-300 rounded-full ".concat(idx === currentIndex ? "w-6 h-2 btn-secondary-amber" : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"),
                      "aria-label": "Go to slide ".concat(idx + 1, ": ").concat(s.name)
                    }, s.id);
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-xxs text-neutral-400 font-mono flex items-center gap-1",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Layers, {
                    className: "w-3 h-3 text-neutral-500"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                    children: [language === "am" ? "ስፖንሰር" : "Sponsor", " ", currentIndex + 1, " / ", totalSponsors]
                  })]
                })]
              })]
            })]
          });
        };
        var teamTranslations = {
          halaba: {
            en: "Halaba Ketema (Berberewochu)",
            am: "ሀላባ ከተማ (በርበሬዎቹ)",
            om: "Halaba Ketema (Berberewochu)"
          },
          cbe_sa: {
            en: "Ethiopia Nigd Bank (CBE SA)",
            am: "ኢትዮጵያ ንግድ ባንክ",
            om: "Baankii Daldala Itoophiyaa (CBE)"
          },
          insurance: {
            en: "Ethiopian Medhin (Insurance)",
            am: "ኢትዮጵያ መድን",
            om: "Inshuraansii Itoophiyaa (Medhin)"
          },
          fasil: {
            en: "Fasil Kenema",
            am: "ፋሲል ከነማ",
            om: "Faasiil Kanamaa"
          },
          adama: {
            en: "Adama Kenema SC",
            am: "አዳማ ከነማ",
            om: "Adaamaa Kanamaa"
          },
          electric: {
            en: "Ethio Electric",
            am: "ኢትዮ ኤሌክትሪክ",
            om: "Ityoo Elektiriik"
          },
          bahirdar: {
            en: "Bahir Dar Kenema",
            am: "ባሕር ዳር ከነማ",
            om: "Baahir Daar Kanamaa"
          },
          bunna: {
            en: "Ethiopian Coffee SC",
            am: "የኢትዮጵያ ቡና",
            om: "Buna Itoophiyaa"
          },
          saintgeorge: {
            en: "Saint George SC (Kidus Giorgis)",
            am: "ቅዱስ ጊዮርጊስ",
            om: "Qulqulluu Giyoorgis"
          },
          defence: {
            en: "Defence Force SC (Mekelakeya)",
            am: "መከላከያ",
            om: "Garee Raayyaa Ittisaa"
          },
          sidama: {
            en: "Sidama Coffee SC",
            am: "ሲዳማ ቡና",
            om: "Buna Sidaamaa"
          },
          wolaitta: {
            en: "Wolaitta Dicha",
            am: "ወላይታ ድቻ",
            om: "Walaayittaa Dicha"
          },
          hosaena: {
            en: "Hadiya Hossana",
            am: "ሀዲያ ሆሳዕና",
            om: "Haadiyaa Hosaa’inaa"
          },
          diredawa: {
            en: "Dire Dawa Kenema",
            am: "ድሬዳዋ ከነማ",
            om: "Dirre Dhawaa Kanamaa"
          },
          gamochencha: {
            en: "Gamo Chencha",
            am: "ጋሞ ጬንቻ",
            om: "Gaamoo Cencaa"
          },
          welwalo: {
            en: "Welwalo Adigrat University",
            am: "ወልዋሎ ዓዲግራት ዩኒቨርሲቲ",
            om: "Walwaaloo Yuunivarsiitii Addigraat"
          },
          shaggar: {
            en: "Shaggar City",
            am: "ሻገር ከተማ",
            om: "Magaalaa Shaggar"
          },
          negelle: {
            en: "Negelle Arsi",
            am: "ነገሌ አርሲ",
            om: "Nageellee Arsii"
          },
          hawassa: {
            en: "Hawassa Kenema",
            am: "ሀዋሳ ከነማ",
            om: "Hawaasaa Kanamaa"
          }
        };
        var normalizeTeamKey$1 = function normalizeTeamKey$1(rawId, rawName) {
          var str = "".concat(rawId || "", " ").concat(rawName || "").toLowerCase();
          if (str.includes("halaba")) return "halaba";
          if (str.includes("cbe") || str.includes("nigd") || rawId === "149377") return "cbe_sa";
          if (str.includes("medhin") || str.includes("insurance") || rawId === "146921") return "insurance";
          if (str.includes("adama") || rawId === "141024") return "adama";
          if (str.includes("electric") || rawId === "146920") return "electric";
          if (str.includes("fasil") || rawId === "141026") return "fasil";
          if (str.includes("bahir") || rawId === "141025") return "bahirdar";
          if (str.includes("bunna") || str.includes("coffee") && !str.includes("sidama")) return "bunna";
          if (str.includes("george") || str.includes("giorgis")) return "saintgeorge";
          if (str.includes("defence") || str.includes("mekelakeya")) return "defence";
          if (str.includes("welwalo")) return "welwalo";
          if (str.includes("dicha") || str.includes("wolaitta")) return "wolaitta";
          if (str.includes("hosaena") || str.includes("hossana")) return "hosaena";
          if (str.includes("diredawa") || str.includes("dire dawa")) return "diredawa";
          if (str.includes("chencha") || str.includes("gamo")) return "gamochencha";
          if (str.includes("sidama")) return "sidama";
          if (str.includes("shaggar")) return "shaggar";
          if (str.includes("negelle")) return "negelle";
          if (str.includes("hawassa")) return "hawassa";
          return (rawId || "").replace(/[^a-z0-9]/g, "");
        };
        var getLocalizedTeamName = exports("a", function (teamId, teamName) {
          var _teamTranslations$key;
          var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en";
          var key = normalizeTeamKey$1(teamId, teamName);
          if ((_teamTranslations$key = teamTranslations[key]) !== null && _teamTranslations$key !== void 0 && _teamTranslations$key[lang]) {
            return teamTranslations[key][lang];
          }
          if (lang === "am" && teamName && /[\u1200-\u137F]/.test(teamName)) {
            return teamName;
          }
          return teamName || teamId || "Team";
        });
        var playerTranslations = {
          "Biniam Teklu": {
            en: "Biniam Teklu",
            am: "ቢንያም ተክሉ",
            om: "Biniyaam Takluu"
          },
          "Mekonnen Abera": {
            en: "Mekonnen Abera",
            am: "መኮንን አበራ",
            om: "Makonnin Abarraa"
          },
          "Henok Haile": {
            en: "Henok Haile",
            am: "ሄኖክ ኃይሌ",
            om: "Heenook Haayilee"
          },
          "Biruk Tadesse": {
            en: "Biruk Tadesse",
            am: "ብሩክ ታደሰ",
            om: "Biruk Taaddasaa"
          },
          "Samson Fikru": {
            en: "Samson Fikru",
            am: "ሳምሶን ፍቅሩ",
            om: "Saamsoon Fiqruu"
          },
          "Kassahun Negash": {
            en: "Kassahun Negash",
            am: "ካሳሁን ነጋሽ",
            om: "Kaassaahuun Nagaash"
          },
          "Mohammed Seid": {
            en: "Mohammed Seid",
            am: "መሀመድ ሰይድ",
            om: "Mahaammad Sa’iid"
          },
          "Amanuel Tesfaye": {
            en: "Amanuel Tesfaye",
            am: "አማኑኤል ተስፋዬ",
            om: "Amaanu’eel Tasfaayee"
          },
          "Yohannes Bekele": {
            en: "Yohannes Bekele",
            am: "ዮሐንስ በቀለ",
            om: "Yohaannis Baqqalaa"
          },
          "Desta Alemayehu": {
            en: "Desta Alemayehu",
            am: "ደስታ አለማየሁ",
            om: "Dastaa Alamayyahu"
          },
          "Abdi Gemeda": {
            en: "Abdi Gemeda",
            am: "አብዲ ገመዳ",
            om: "Abdi Gamadaa"
          },
          "Elias Zewdu": {
            en: "Elias Zewdu",
            am: "ኤልያስ ዘውዱ",
            om: "Eeliyaas Zawuduu"
          },
          "Mulugeta Wolde": {
            en: "Mulugeta Wolde",
            am: "ሙሉጌታ ወልዴ",
            om: "Muluugeetaa Waldee"
          },
          "Biniam Getachew": {
            en: "Biniam Getachew",
            am: "ቢንያም ጌታቸው",
            om: "Biniyaam Getaachoo"
          },
          "Tarekegn Assefa": {
            en: "Tarekegn Assefa",
            am: "ታሪከኝ አሰፋ",
            om: "Taarikaññ Asaffaa"
          },
          "Fikadu Shiferaw": {
            en: "Fikadu Shiferaw",
            am: "ፍቃዱ ሽፈራው",
            om: "Fiqaaduu Shifarraaw"
          },
          "Kaleb Amankwah": {
            en: "Kaleb Amankwah",
            am: "ካሌብ አማንክዋህ",
            om: "Kaaleeb Amaankwaa"
          },
          "Romaric": {
            en: "Romaric",
            am: "ሮማሪክ",
            om: "Roomaariik"
          },
          "Yonatan Hailu": {
            en: "Yonatan Hailu",
            am: "ዮናታን ኃይሉ",
            om: "Yoonaataan Haayiluu"
          },
          "Dr. Kassim Ahmed": {
            en: "Dr. Kassim Ahmed",
            am: "ዶ/ር ቃሲም አህመድ",
            om: "Dr. Qaasim Ahimad"
          },
          "Solomon Kebede": {
            en: "Solomon Kebede",
            am: "ሰለሞን ከበደ",
            om: "Solomoon Kabbadaa"
          },
          "Getachew Dinberu": {
            en: "Getachew Dinberu",
            am: "ጌታቸው ድንበሩ",
            om: "Getaachoo Dinbaruu"
          },
          "Worku Mengistu": {
            en: "Worku Mengistu",
            am: "ወርቁ መንግስቱ",
            om: "Warquu Mangistuu"
          },
          "Dr. Nahom Tsegaye": {
            en: "Dr. Nahom Tsegaye",
            am: "ዶ/ር ናሆም ፀጋዬ",
            om: "Dr. Naahoom Tsaggaayee"
          },
          "Melaku Belachew": {
            en: "Melaku Belachew",
            am: "መላኩ በላቸው",
            om: "Malaakuu Balaachoo"
          }
        };
        var getLocalizedPersonName = exports("i", function (name) {
          var _playerTranslations$n;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_playerTranslations$n = playerTranslations[name]) === null || _playerTranslations$n === void 0 ? void 0 : _playerTranslations$n[lang]) || name;
        });
        var positionTranslations = {
          Goalkeeper: {
            en: "Goalkeeper",
            am: "ግብ ጠባቂ",
            om: "Eegduu Galchii"
          },
          Defender: {
            en: "Defender",
            am: "ተከላካይ",
            om: "Ittisaa"
          },
          Midfielder: {
            en: "Midfielder",
            am: "አማካኝ",
            om: "Giddu-galeessa"
          },
          Forward: {
            en: "Forward",
            am: "አጥቂ",
            om: "Fuuldura"
          },
          ALL: {
            en: "All Positions",
            am: "ሁሉም ቦታዎች",
            om: "Bakka Hunda"
          }
        };
        var getLocalizedPosition = exports("h", function (pos) {
          var _positionTranslations;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_positionTranslations = positionTranslations[pos]) === null || _positionTranslations === void 0 ? void 0 : _positionTranslations[lang]) || pos;
        });
        var roleTranslations = {
          "Club President": {
            en: "Club President",
            am: "የክለቡ ፕሬዝዳንት",
            om: "Pirezidaantii Kilabichaa"
          },
          "Head Coach": {
            en: "Head Coach",
            am: "ዋና አሰልጣኝ",
            om: "Leenjisaa Ol’aanaa"
          },
          "Assistant Coach": {
            en: "Assistant Coach",
            am: "ረዳት አሰልጣኝ",
            om: "Gargaaraa Leenjisaa"
          },
          "Goalkeeping Coach": {
            en: "Goalkeeping Coach",
            am: "የግብ ጠባቂዎች አሰልጣኝ",
            om: "Leenjisaa Eegdota Galchii"
          },
          "Chief Medical Officer & Physiotherapist": {
            en: "Chief Medical Officer & Physiotherapist",
            am: "ዋና የህክምና ባለሙያና ፊዚዮቴራፒስት",
            om: "Ogeessa Fayyaa fi Fiiziyooteraapistii"
          },
          "Academy Director & Youth Scout": {
            en: "Academy Director & Youth Scout",
            am: "የአካዳሚ ዳይሬክተር እና የታዳጊዎች መልማይ",
            om: "Daayrektara Akaadaamii"
          }
        };
        var getLocalizedRole = exports("j", function (role) {
          var _roleTranslations$rol;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_roleTranslations$rol = roleTranslations[role]) === null || _roleTranslations$rol === void 0 ? void 0 : _roleTranslations$rol[lang]) || role;
        });
        var departmentTranslations = {
          Management: {
            en: "Management",
            am: "አመራር",
            om: "Hoggansa"
          },
          Coaching: {
            en: "Coaching",
            am: "አሰልጣኝ ቡድን",
            om: "Leenjii"
          },
          Medical: {
            en: "Medical",
            am: "ህክምና ክፍል",
            om: "Kutaa Fayyaa"
          }
        };
        var getLocalizedDepartment = exports("k", function (dept) {
          var _departmentTranslatio;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_departmentTranslatio = departmentTranslations[dept]) === null || _departmentTranslatio === void 0 ? void 0 : _departmentTranslatio[lang]) || dept;
        });
        var venueTranslations = {
          "Halaba Stadium, Halaba Kulito": {
            en: "Halaba Stadium, Halaba Kulito",
            am: "ሀላባ ስታዲየም፣ ሀላባ ቁሊቶ",
            om: "Istaadiyeemii Halabaa, Halaba Qulitoo"
          },
          "Halaba Stadium": {
            en: "Halaba Stadium",
            am: "ሀላባ ስታዲየም",
            om: "Istaadiyeemii Halabaa"
          },
          "Wolaita Sodo Stadium, Wolaita Sodo": {
            en: "Wolaita Sodo Stadium, Wolaita Sodo",
            am: "ወላይታ ሶዶ ስታዲየም፣ ወላይታ ሶዶ",
            om: "Istaadiyeemii Walaayittaa Soddoo"
          },
          "Hawassa University Stadium": {
            en: "Hawassa University Stadium",
            am: "ሀዋሳ ዩኒቨርሲቲ ስታዲየም",
            om: "Istaadiyeemii Yuunivarsiitii Hawaasaa"
          },
          "Adama Stadium": {
            en: "Adama Stadium",
            am: "አዳማ ስታዲየም",
            om: "Istaadiyeemii Adaamaa"
          },
          "Adama ASTU Stadium": {
            en: "Adama ASTU Stadium",
            am: "አዳማ አስቱ ስታዲየም",
            om: "Istaadiyeemii ASTU Adaamaa"
          },
          "Abebe Bikila Stadium, Addis Ababa": {
            en: "Abebe Bikila Stadium, Addis Ababa",
            am: "አበበ ቢቂላ ስታዲየም፣ አዲስ አበባ",
            om: "Istaadiyeemii Abbabaa Biqilaa, Finfinnee"
          }
        };
        var getLocalizedVenue = exports("b", function (venue) {
          var _venueTranslations$ve;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          if ((_venueTranslations$ve = venueTranslations[venue]) !== null && _venueTranslations$ve !== void 0 && _venueTranslations$ve[lang]) return venueTranslations[venue][lang];
          for (var _i11 = 0, _Object$entries4 = Object.entries(venueTranslations); _i11 < _Object$entries4.length; _i11++) {
            var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i11], 2),
              key = _Object$entries4$_i[0],
              val = _Object$entries4$_i[1];
            if (venue.includes(key)) return val[lang];
          }
          return venue;
        });
        var roundTranslations = {
          "Round 1": {
            en: "Round 1",
            am: "ሳምንት 1",
            om: "Marsaa 1"
          },
          "Round 2": {
            en: "Round 2",
            am: "ሳምንት 2",
            om: "Marsaa 2"
          },
          "Round 3": {
            en: "Round 3",
            am: "ሳምንት 3",
            om: "Marsaa 3"
          },
          "Round 4": {
            en: "Round 4",
            am: "ሳምንት 4",
            om: "Marsaa 4"
          },
          "Round 5": {
            en: "Round 5",
            am: "ሳምንት 5",
            om: "Marsaa 5"
          }
        };
        var getLocalizedRound = exports("c", function (round) {
          var _roundTranslations$ro;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          if (!round) return "";
          if ((_roundTranslations$ro = roundTranslations[round]) !== null && _roundTranslations$ro !== void 0 && _roundTranslations$ro[lang]) return roundTranslations[round][lang];
          var num = round.replace(/[^\d]/g, "");
          if (num) {
            if (lang === "am") return "\u1233\u121D\u1295\u1275 ".concat(num);
            if (lang === "om") return "Marsaa ".concat(num);
          }
          return round;
        });
        var competitionTranslations = {
          ETHIOPIAN_PREMIER_LEAGUE: {
            en: "Ethiopian Premier League",
            am: "የኢትዮጵያ ፕሪሚየር ሊግ",
            om: "Liigii Piriimeeraa Itoophiyaa"
          },
          "Ethiopian Premier League": {
            en: "Ethiopian Premier League",
            am: "የኢትዮጵያ ፕሪሚየር ሊግ",
            om: "Liigii Piriimeeraa Itoophiyaa"
          },
          ETHIOPIAN_CUP: {
            en: "Ethiopian Cup",
            am: "የኢትዮጵያ ዋንጫ",
            om: "Waancaa Itoophiyaa"
          },
          "Ethiopian Cup": {
            en: "Ethiopian Cup",
            am: "የኢትዮጵያ ዋንጫ",
            om: "Waancaa Itoophiyaa"
          },
          CAF_CONFEDERATION_CUP: {
            en: "CAF Confederation Cup",
            am: "የካፍ ኮንፌዴሬሽን ዋንጫ",
            om: "Waancaa Konfedereeshinii CAF"
          }
        };
        var getLocalizedCompetition = exports("g", function (comp) {
          var _competitionTranslati;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          if ((_competitionTranslati = competitionTranslations[comp]) !== null && _competitionTranslati !== void 0 && _competitionTranslati[lang]) return competitionTranslations[comp][lang];
          if (comp.includes("Premier League") || comp.includes("PREMIER_LEAGUE")) {
            if (lang === "am") return comp.replace(/Ethiopian Premier League/g, "የኢትዮጵያ ፕሪሚየር ሊግ").replace(/Round/g, "ሳምንት");
            if (lang === "om") return comp.replace(/Ethiopian Premier League/g, "Liigii Piriimeeraa Itoophiyaa").replace(/Round/g, "Marsaa");
          }
          return comp;
        });
        var categoryTranslations = {
          ALL: {
            en: "All Stories",
            am: "ሁሉም ዜናዎች",
            om: "Oduu Hunda"
          },
          CLUB_NEWS: {
            en: "Club News",
            am: "የክለብ ዜና",
            om: "Oduu Kilabii"
          },
          MATCH_REPORTS: {
            en: "Match Reports",
            am: "የጨዋታ ሪፖርት",
            om: "Gabaasa Taphaa"
          },
          TRANSFERS: {
            en: "Transfers",
            am: "ዝውውሮች",
            om: "Jijjiirraa"
          },
          INTERVIEWS: {
            en: "Interviews",
            am: "ቃለ-ምልልስ",
            om: "Gaaf-deebii"
          },
          ACADEMY: {
            en: "Youth Academy",
            am: "ታዳጊዎች አካዳሚ",
            om: "Akaadaamii Dargaggootaa"
          },
          COMMUNITY: {
            en: "Community & Fans",
            am: "ደጋፊዎችና ማህበረሰብ",
            om: "Hawaasa & Deeggartoota"
          }
        };
        var getLocalizedCategory = exports("e", function (cat) {
          var _categoryTranslations;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_categoryTranslations = categoryTranslations[cat]) === null || _categoryTranslations === void 0 ? void 0 : _categoryTranslations[lang]) || cat.replace(/_/g, " ");
        });
        var shopCategoryTranslations = {
          ALL: {
            en: "All Merchandise",
            am: "ሁሉም እቃዎች",
            om: "Meeshaalee Hunda"
          },
          JERSEY: {
            en: "Match Jerseys",
            am: "የጨዋታ ማሊያዎች",
            om: "Jeersiiwwan Taphaa"
          },
          KIT: {
            en: "Jackets & Training",
            am: "ጃኬቶችና የስልጠና ልብሶች",
            om: "Uffata Shaakalaa"
          },
          ACCESSORY: {
            en: "Accessories & Scarves",
            am: "የደጋፊዎች ሻርፕና ቁሳቁስ",
            om: "Meeshaalee Deggartootaa"
          }
        };
        var getLocalizedShopCategory = exports("l", function (cat) {
          var _shopCategoryTranslat;
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          return ((_shopCategoryTranslat = shopCategoryTranslations[cat]) === null || _shopCategoryTranslat === void 0 ? void 0 : _shopCategoryTranslat[lang]) || cat;
        });
        var getFormBadgeLocalized = exports("d", function (formChar) {
          var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
          if (lang === "am") {
            if (formChar === "W") return "አ";
            if (formChar === "D") return "አቻ";
            if (formChar === "L") return "ተ";
          }
          if (lang === "om") {
            if (formChar === "W") return "M";
            if (formChar === "D") return "Q";
            if (formChar === "L") return "A";
          }
          return formChar;
        });
        var SHORT_TEAM_NAMES = {
          halaba: {
            en: "Halaba City",
            am: "ሀላባ ከተማ",
            om: "Halaba City"
          },
          cbe_sa: {
            en: "CBE SA",
            am: "ንግድ ባንክ",
            om: "CBE SA"
          },
          insurance: {
            en: "Eth. Medhin",
            am: "ኢትዮጵያ መድን",
            om: "Eth. Medhin"
          },
          medhin: {
            en: "Eth. Medhin",
            am: "ኢትዮጵያ መድን",
            om: "Eth. Medhin"
          },
          fasil: {
            en: "Fasil Kenema",
            am: "ፋሲል ከነማ",
            om: "Faasiil"
          },
          adama: {
            en: "Adama City",
            am: "አዳማ ከነማ",
            om: "Adaamaa"
          },
          electric: {
            en: "Eth. Electric",
            am: "መብራት ኃይል",
            om: "Elektiriik"
          },
          bahirdar: {
            en: "Bahir Dar",
            am: "ባሕር ዳር",
            om: "Baahir Daar"
          },
          bunna: {
            en: "Eth. Coffee",
            am: "ኢትዮጵያ ቡና",
            om: "Buna Itoophiyaa"
          },
          saintgeorge: {
            en: "St. George",
            am: "ቅዱስ ጊዮርጊስ",
            om: "St. George"
          },
          giorgis: {
            en: "St. George",
            am: "ቅዱስ ጊዮርጊስ",
            om: "St. George"
          },
          defence: {
            en: "Defence Force",
            am: "መከላከያ",
            om: "Raayyaa Ittisaa"
          },
          mekelakeya: {
            en: "Defence Force",
            am: "መከላከያ",
            om: "Raayyaa Ittisaa"
          },
          sidama: {
            en: "Sidama Coffee",
            am: "ሲዳማ ቡና",
            om: "Buna Sidaamaa"
          },
          wolaitta: {
            en: "Wolaitta Dicha",
            am: "ወላይታ ድቻ",
            om: "Wolaitta Dicha"
          },
          dicha: {
            en: "Wolaitta Dicha",
            am: "ወላይታ ድቻ",
            om: "Wolaitta Dicha"
          },
          hosaena: {
            en: "Hadiya Hossana",
            am: "ሀዲያ ሆሳዕና",
            om: "Hadiya Hossana"
          },
          hossana: {
            en: "Hadiya Hossana",
            am: "ሀዲያ ሆሳዕና",
            om: "Hadiya Hossana"
          },
          diredawa: {
            en: "Dire Dawa",
            am: "ድሬዳዋ ከነማ",
            om: "Dirre Dhawaa"
          },
          gamochencha: {
            en: "Gamo Chencha",
            am: "ጋሞ ጬንቻ",
            om: "Gamo Chencha"
          },
          welwalo: {
            en: "Welwalo",
            am: "ወልዋሎ",
            om: "Walwaaloo"
          },
          hawassa: {
            en: "Hawassa City",
            am: "ሀዋሳ ከነማ",
            om: "Hawaasaa"
          },
          shaggar: {
            en: "Shaggar City",
            am: "ሻገር ከተማ",
            om: "Magaalaa Shaggar"
          },
          negelle: {
            en: "Negelle Arsi",
            am: "ነገሌ አርሲ",
            om: "Nageellee Arsii"
          },
          shire: {
            en: "Suhul Shire",
            am: "ሱሁል ሽሬ",
            om: "Suhul Shire"
          }
        };
        function normalizeTeamKey(id, name) {
          var combined = "".concat(id || "", " ").concat(name || "").toLowerCase();
          if (combined.includes("halaba")) return "halaba";
          if (combined.includes("cbe") || combined.includes("nigd") || combined.includes("commercial bank")) return "cbe_sa";
          if (combined.includes("insurance") || combined.includes("medhin")) return "insurance";
          if (combined.includes("fasil")) return "fasil";
          if (combined.includes("adama")) return "adama";
          if (combined.includes("electric") || combined.includes("mebrat")) return "electric";
          if (combined.includes("bahir")) return "bahirdar";
          if (combined.includes("saint") || combined.includes("george") || combined.includes("giorgis")) return "saintgeorge";
          if (combined.includes("defence") || combined.includes("defense") || combined.includes("mekelakeya") || combined.includes("mechal")) return "defence";
          if (combined.includes("sidama")) return "sidama";
          if (combined.includes("bunna") || combined.includes("coffee")) return "bunna";
          if (combined.includes("wolaitta") || combined.includes("dicha")) return "wolaitta";
          if (combined.includes("hosaena") || combined.includes("hossana") || combined.includes("hadiya")) return "hosaena";
          if (combined.includes("dire")) return "diredawa";
          if (combined.includes("gamo") || combined.includes("chencha")) return "gamochencha";
          if (combined.includes("welwalo") || combined.includes("adigrat")) return "welwalo";
          if (combined.includes("hawassa") || combined.includes("awassa")) return "hawassa";
          if (combined.includes("shaggar")) return "shaggar";
          if (combined.includes("negelle")) return "negelle";
          if (combined.includes("shire")) return "shire";
          return (id || "").toLowerCase().trim();
        }
        function formatTeamName(teamId, teamName) {
          var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en";
          var key = normalizeTeamKey(teamId, teamName);
          if (SHORT_TEAM_NAMES[key]) {
            return SHORT_TEAM_NAMES[key][language] || SHORT_TEAM_NAMES[key].en;
          }
          var clean = (teamName || teamId || "Club").trim();
          clean = clean.replace(/\(.*?\)/g, "").trim();
          clean = clean.replace(/\bFootball Club\b/gi, "").replace(/\bSport Club\b/gi, "").replace(/\bSports Club\b/gi, "").replace(/\bFC\b/g, "").replace(/\bSC\b/g, "").replace(/\s+/g, " ").trim();
          return clean || teamName || "Club";
        }
        var HomePage = function HomePage(_ref58) {
          var _nextMatch$homeTeam, _nextMatch$homeTeam2, _nextMatch$awayTeam, _nextMatch$awayTeam2, _nextMatch$homeTeam3, _nextMatch$awayTeam3, _latestResult$homeTea, _latestResult$homeTea2, _latestResult$awayTea, _latestResult$awayTea2, _latestResult$homeTea3, _latestResult$awayTea3, _clubInfo$nickname, _latestResult$score$h, _latestResult$score, _latestResult$score$a, _latestResult$score2;
          var onOpenMatchModal = _ref58.onOpenMatchModal,
            onOpenArticleModal = _ref58.onOpenArticleModal;
          var _useClub6 = useClub(),
            t = _useClub6.t,
            language = _useClub6.language,
            setCurrentPage = _useClub6.setCurrentPage,
            matches = _useClub6.matches,
            standings = _useClub6.standings,
            news = _useClub6.news,
            clubInfo = _useClub6.clubInfo,
            openDonationModal = _useClub6.openDonationModal,
            shopItems = _useClub6.shopItems,
            openCheckoutModal = _useClub6.openCheckoutModal;
          var _usePWAInstall2 = usePWAInstall(),
            isInstalled = _usePWAInstall2.isInstalled;
          var isHalabaMatch = function isHalabaMatch(m) {
            var _m$homeTeam3, _m$awayTeam3, _m$homeTeam4, _m$awayTeam4, _m$homeTeam5, _m$awayTeam5;
            return Boolean(m && (((_m$homeTeam3 = m.homeTeam) === null || _m$homeTeam3 === void 0 ? void 0 : _m$homeTeam3.isHalaba) || ((_m$awayTeam3 = m.awayTeam) === null || _m$awayTeam3 === void 0 ? void 0 : _m$awayTeam3.isHalaba) || ((_m$homeTeam4 = m.homeTeam) === null || _m$homeTeam4 === void 0 ? void 0 : _m$homeTeam4.id) === "halaba" || ((_m$awayTeam4 = m.awayTeam) === null || _m$awayTeam4 === void 0 ? void 0 : _m$awayTeam4.id) === "halaba" || ((_m$homeTeam5 = m.homeTeam) === null || _m$homeTeam5 === void 0 || (_m$homeTeam5 = _m$homeTeam5.name) === null || _m$homeTeam5 === void 0 ? void 0 : _m$homeTeam5.toLowerCase().includes("halaba")) || ((_m$awayTeam5 = m.awayTeam) === null || _m$awayTeam5 === void 0 || (_m$awayTeam5 = _m$awayTeam5.name) === null || _m$awayTeam5 === void 0 ? void 0 : _m$awayTeam5.toLowerCase().includes("halaba"))));
          };
          var upcomingHalabaMatches = matches.filter(function (m) {
            return (m.status === "UPCOMING" || m.status === "LIVE") && isHalabaMatch(m);
          }).sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
          var nextMatch = upcomingHalabaMatches[0] || matches.find(function (m) {
            return m.status === "UPCOMING" || m.status === "LIVE";
          }) || null;
          var finishedHalabaMatches = matches.filter(function (m) {
            return m.status === "FINISHED" && isHalabaMatch(m);
          }).sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
          var latestResult = finishedHalabaMatches[0] || matches.find(function (m) {
            return m.status === "FINISHED";
          }) || null;
          var recentNews = news.slice(0, 3);
          var topStandings = standings.slice(0, 5);
          var halabaStanding = standings.find(function (t2) {
            return t2.isHalaba;
          });
          var homeNextTeam = nextMatch ? getLocalizedTeamName((_nextMatch$homeTeam = nextMatch.homeTeam) === null || _nextMatch$homeTeam === void 0 ? void 0 : _nextMatch$homeTeam.id, (_nextMatch$homeTeam2 = nextMatch.homeTeam) === null || _nextMatch$homeTeam2 === void 0 ? void 0 : _nextMatch$homeTeam2.name, language) : "";
          var awayNextTeam = nextMatch ? getLocalizedTeamName((_nextMatch$awayTeam = nextMatch.awayTeam) === null || _nextMatch$awayTeam === void 0 ? void 0 : _nextMatch$awayTeam.id, (_nextMatch$awayTeam2 = nextMatch.awayTeam) === null || _nextMatch$awayTeam2 === void 0 ? void 0 : _nextMatch$awayTeam2.name, language) : "";
          var homeNextShort = nextMatch ? formatTeamName((_nextMatch$homeTeam3 = nextMatch.homeTeam) === null || _nextMatch$homeTeam3 === void 0 ? void 0 : _nextMatch$homeTeam3.id, homeNextTeam, language) : "";
          var awayNextShort = nextMatch ? formatTeamName((_nextMatch$awayTeam3 = nextMatch.awayTeam) === null || _nextMatch$awayTeam3 === void 0 ? void 0 : _nextMatch$awayTeam3.id, awayNextTeam, language) : "";
          var nextVenue = nextMatch ? getLocalizedVenue(nextMatch.venue, language) : "";
          var homeLatestTeam = latestResult ? getLocalizedTeamName((_latestResult$homeTea = latestResult.homeTeam) === null || _latestResult$homeTea === void 0 ? void 0 : _latestResult$homeTea.id, (_latestResult$homeTea2 = latestResult.homeTeam) === null || _latestResult$homeTea2 === void 0 ? void 0 : _latestResult$homeTea2.name, language) : "";
          var awayLatestTeam = latestResult ? getLocalizedTeamName((_latestResult$awayTea = latestResult.awayTeam) === null || _latestResult$awayTea === void 0 ? void 0 : _latestResult$awayTea.id, (_latestResult$awayTea2 = latestResult.awayTeam) === null || _latestResult$awayTea2 === void 0 ? void 0 : _latestResult$awayTea2.name, language) : "";
          var homeLatestShort = latestResult ? formatTeamName((_latestResult$homeTea3 = latestResult.homeTeam) === null || _latestResult$homeTea3 === void 0 ? void 0 : _latestResult$homeTea3.id, homeLatestTeam, language) : "";
          var awayLatestShort = latestResult ? formatTeamName((_latestResult$awayTea3 = latestResult.awayTeam) === null || _latestResult$awayTea3 === void 0 ? void 0 : _latestResult$awayTea3.id, awayLatestTeam, language) : "";
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "space-y-16 pb-16",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("section", {
              className: "relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-red-950/40",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "hero-background",
                style: {
                  backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 10, 0.58) 0%, rgba(30, 3, 5, 0.66) 45%, rgba(10, 10, 10, 0.92) 85%, #0a0a0a 100%), url(".concat(ClubImages.heroStadiumJpg, ")")
                },
                "aria-hidden": "true"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16 flex flex-col items-center",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "mb-6 transform hover:scale-105 transition-transform duration-300",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 130,
                    showGlow: true
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex flex-wrap items-center justify-center gap-2 mb-4",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "w-2 h-2 rounded-full bg-red-500 animate-ping"
                    }), t.heroTag]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                  className: "text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase font-sports drop-shadow-lg",
                  children: language === "am" ? "ሀላባ ከተማ እግርኳስ ክለብ" : "HALABA CITY FC"
                }), ((_clubInfo$nickname = clubInfo.nickname) === null || _clubInfo$nickname === void 0 ? void 0 : _clubInfo$nickname.am) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold flex items-center justify-center gap-2",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "font-ethiopic font-bold text-[#fbc45f]",
                    style: {
                      color: "#fbc45f",
                      borderColor: "#080808",
                      borderWidth: "0px",
                      borderStyle: "none"
                    },
                    children: clubInfo.nickname.am
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "mt-4 max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal",
                  children: t.heroSubtitle
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: openDonationModal,
                    className: "px-6 py-3.5 rounded-xl btn-donate-emerald font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all ring-2 ring-emerald-500/40 hover:scale-102",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                      className: "w-5 h-5 fill-white text-white"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.heroDonateBtn
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return setCurrentPage("membership");
                    },
                    className: "px-6 py-3.5 rounded-xl btn-membership-join font-bold text-sm sm:text-base tracking-wide uppercase font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
                      className: "w-5 h-5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.heroBtnJoin
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return setCurrentPage("shop");
                    },
                    className: "px-6 py-3.5 rounded-xl btn-shop-neutral font-bold text-sm sm:text-base tracking-wide uppercase font-sports flex items-center gap-2 transition-all hover:border-red-600/60",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                      className: "w-5 h-5 text-red-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.navShop
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-full mt-8 flex flex-col items-center",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(SponsorAutoSlider, {})
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [nextMatch && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-red-900/40 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "absolute top-0 right-0 w-32 h-32 pointer-events-none",
                    style: {
                      background: "radial-gradient(circle at top right, rgba(220, 38, 38, 0.15), transparent 70%)"
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                          className: "font-sports font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: t.nextHalabaGame
                          })
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs font-bold text-amber-400 uppercase bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded font-sports",
                        children: language === "am" ? "የኢትዮጵያ ፕሪሚየር ሊግ" : nextMatch.competitionName.split("-")[0]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex-1 min-w-0 flex flex-col items-center text-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: nextMatch.homeTeam.id,
                          teamName: homeNextTeam,
                          size: 56,
                          priority: true,
                          className: "shrink-0 flex-shrink-0"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block",
                          title: homeNextTeam,
                          children: homeNextShort
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400 font-semibold uppercase",
                          children: t.home
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "shrink-0 flex-shrink-0 flex flex-col items-center px-1.5 sm:px-3",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-xl sm:text-2xl text-neutral-500",
                          children: t.vs
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-xxs font-mono font-bold text-amber-400 mt-1 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 whitespace-nowrap",
                          children: [nextMatch.kickoffTime, " ", t.eatTimezone]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex-1 min-w-0 flex flex-col items-center text-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: nextMatch.awayTeam.id,
                          teamName: awayNextTeam,
                          size: 56,
                          priority: true,
                          className: "shrink-0 flex-shrink-0"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block",
                          title: awayNextTeam,
                          children: awayNextShort
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400 font-semibold uppercase",
                          children: t.away
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "text-xs text-neutral-400 space-y-1 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                          className: "w-3.5 h-3.5 text-neutral-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-neutral-300 font-medium",
                          children: nextMatch.date
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "•"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Clock, {
                          className: "w-3.5 h-3.5 text-neutral-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: nextMatch.kickoffTime
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(MapPin, {
                          className: "w-3.5 h-3.5 text-emerald-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: nextVenue
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      onClick: function onClick() {
                        return onOpenMatchModal(nextMatch.id);
                      },
                      className: "text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: t.viewMatchDetails
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ChevronRight, {
                        className: "w-3.5 h-3.5"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setCurrentPage("fixtures");
                      },
                      className: "text-xs text-neutral-400 hover:text-white transition-colors underline",
                      children: t.allFixturesBtn
                    })]
                  })]
                }), latestResult && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "w-2.5 h-2.5 rounded-full bg-emerald-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                          className: "font-sports font-bold text-lg text-white uppercase tracking-wider",
                          children: t.latestResultTitle
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs font-bold text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded",
                        children: t.fullTime
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "py-5 sm:py-6 flex items-center justify-between gap-2 w-full min-w-0",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex-1 min-w-0 flex flex-col items-center text-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: latestResult.homeTeam.id,
                          teamName: homeLatestTeam,
                          size: 56,
                          priority: true,
                          className: "shrink-0 flex-shrink-0"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block",
                          title: homeLatestTeam,
                          children: homeLatestShort
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "shrink-0 flex-shrink-0 flex flex-col items-center justify-center px-1.5 sm:px-3",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "font-sports font-black text-2xl sm:text-3xl md:text-4xl text-emerald-400 whitespace-nowrap bg-neutral-950 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-xl border border-neutral-800 tracking-wider flex items-center justify-center gap-2 select-none shadow-md",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: (_latestResult$score$h = (_latestResult$score = latestResult.score) === null || _latestResult$score === void 0 ? void 0 : _latestResult$score.home) !== null && _latestResult$score$h !== void 0 ? _latestResult$score$h : 0
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-neutral-500 font-normal text-xl sm:text-2xl",
                            children: "-"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            children: (_latestResult$score$a = (_latestResult$score2 = latestResult.score) === null || _latestResult$score2 === void 0 ? void 0 : _latestResult$score2.away) !== null && _latestResult$score$a !== void 0 ? _latestResult$score$a : 0
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400 mt-1 font-medium whitespace-nowrap",
                          children: t.fullTime
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex-1 min-w-0 flex flex-col items-center text-center",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                          teamId: latestResult.awayTeam.id,
                          teamName: awayLatestTeam,
                          size: 56,
                          priority: true,
                          className: "shrink-0 flex-shrink-0"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-sm sm:text-base text-white mt-2 truncate max-w-full block",
                          title: awayLatestTeam,
                          children: awayLatestShort
                        })]
                      })]
                    }), latestResult.scorers && latestResult.scorers.length > 0 && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80 text-xs text-neutral-300",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-neutral-500 font-bold block mb-1 uppercase text-xxs tracking-wider",
                        children: language === "am" ? "ጎል ያስቆጠሩ፡" : "Scorers:"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "flex flex-wrap gap-x-4 gap-y-1",
                        children: latestResult.scorers.map(function (s, idx) {
                          return /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "flex items-center gap-1 font-medium",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              children: "⚽"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-white",
                              children: getLocalizedPersonName(s.player, language)
                            }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                              className: "text-neutral-400",
                              children: ["(", s.minute, "')"]
                            })]
                          }, idx);
                        })
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      onClick: function onClick() {
                        return onOpenMatchModal(latestResult.id);
                      },
                      className: "text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: t.viewMatchDetails
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ChevronRight, {
                        className: "w-3.5 h-3.5"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setCurrentPage("fixtures");
                      },
                      className: "text-xs text-neutral-400 hover:text-white transition-colors underline",
                      children: t.allFixturesBtn
                    })]
                  })]
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between mb-8 pb-3 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "font-sports font-black text-3xl sm:text-4xl text-white uppercase tracking-wider",
                    children: t.latestClubNews
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-400 mt-1",
                    children: t.newsSubtitle
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setCurrentPage("news");
                  },
                  className: "flex items-center gap-1 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 uppercase tracking-wider font-sports",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "ሁሉንም ይመልከቱ" : "View All"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(ArrowRight, {
                    className: "w-4 h-4"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: recentNews.map(function (article) {
                  var title = article.title[language] || article.title.en;
                  var summary = article.summary[language] || article.summary.en;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    onClick: function onClick() {
                      return onOpenArticleModal(article.id);
                    },
                    className: "group cursor-pointer rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 shadow-lg",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative aspect-video overflow-hidden bg-neutral-950",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                        src: article.imageUrl || ClubImages.matchAction,
                        alt: title,
                        referrerPolicy: "no-referrer",
                        loading: "lazy",
                        onError: function onError(e) {
                          e.currentTarget.src = ClubImages.matchAction;
                        },
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/70 text-emerald-400 backdrop-blur-md",
                        children: getLocalizedCategory(article.category, language)
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-5 flex-1 flex flex-col justify-between space-y-3",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-xs text-neutral-500 font-medium block",
                          children: [article.date, " • ", article.readTime]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                          className: "font-bold text-lg text-white group-hover:text-red-400 transition-colors mt-1 line-clamp-2",
                          children: title
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                          className: "text-xs sm:text-sm text-neutral-400 line-clamp-2 mt-2 leading-relaxed",
                          children: summary
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-xs font-bold text-red-400 flex items-center gap-1 uppercase tracking-wider font-sports pt-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: t.readArticle
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(ChevronRight, {
                          className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })]
                      })]
                    })]
                  }, article.id);
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                      className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                      children: t.standingsPreviewTitle
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-neutral-400 mt-1",
                      children: language === "am" ? "\u12E8\u12A2\u1275\u12EE\u1335\u12EB \u1355\u122A\u121A\u12E8\u122D \u120A\u130D (\u12A8\u134D\u1270\u129B \u12F2\u126A\u12DA\u12EE\u1295) \u2022 \u12E82026/27 \u12E8\u12CD\u12F5\u12F5\u122D \u12D8\u1218\u1295 (\u1200\u120B\u1263 \u12A8\u1270\u121B \u1260".concat((halabaStanding === null || halabaStanding === void 0 ? void 0 : halabaStanding.position) || 4, "\u129B \u12F0\u1228\u1303 \u2022 ").concat((halabaStanding === null || halabaStanding === void 0 ? void 0 : halabaStanding.points) || 5, " \u1290\u1325\u1265)") : "Ethiopian Premier League (Top Tier) \u2022 2026/27 Season (Halaba Ketema in #".concat((halabaStanding === null || halabaStanding === void 0 ? void 0 : halabaStanding.position) || 4, " \u2022 ").concat((halabaStanding === null || halabaStanding === void 0 ? void 0 : halabaStanding.points) || 5, " Pts)")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: function onClick() {
                      return setCurrentPage("standings");
                    },
                    className: "text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 uppercase tracking-wider self-start sm:self-auto font-sports",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.fullStandingsBtn
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(ArrowRight, {
                      className: "w-4 h-4"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "mt-4 overflow-x-auto max-w-full rounded-xl",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("table", {
                    className: "w-full text-left text-sm whitespace-nowrap",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                        className: "border-b border-neutral-800 text-xs font-bold uppercase text-neutral-400",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3 text-center w-10",
                          children: t.pos
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3 min-w-[140px]",
                          children: t.club
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-2 text-center w-10",
                          children: t.played
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-2 text-center w-10",
                          children: t.won
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-2 text-center w-10",
                          children: t.drawn
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-2 text-center w-10",
                          children: t.lost
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-2 text-center w-12 hidden sm:table-cell",
                          children: t.gd
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3 text-right font-black w-12",
                          children: t.pts
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                      className: "divide-y divide-neutral-800/60",
                      children: topStandings.map(function (team) {
                        var localizedTeam = getLocalizedTeamName(team.teamId, team.teamName, language);
                        var shortName = formatTeamName(team.teamId, localizedTeam, language);
                        return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                          className: "transition-colors ".concat(team.isHalaba ? "bg-red-950/40 border-l-4 border-l-red-500 font-semibold" : "hover:bg-neutral-800/30"),
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 text-center font-bold",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "inline-block w-6 text-center text-xs py-0.5 rounded ".concat(team.position <= 2 ? "bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold" : "text-neutral-400"),
                              children: team.position
                            })
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3",
                            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-2.5 min-w-0",
                              children: [/* @__PURE__ */jsxRuntimeExports.jsx(EthiopianClubLogo, {
                                teamId: team.teamId,
                                teamName: localizedTeam,
                                size: 28,
                                badgeUrl: team.badgeUrl,
                                className: "shrink-0 flex-shrink-0"
                              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                className: "font-sports text-sm sm:text-base tracking-wide truncate max-w-[130px] sm:max-w-none block ".concat(team.isHalaba ? "text-red-300 font-black" : "text-neutral-200"),
                                title: localizedTeam,
                                children: shortName
                              })]
                            })
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-2 text-center text-neutral-400",
                            children: team.played
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-2 text-center text-neutral-400",
                            children: team.won
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-2 text-center text-neutral-400",
                            children: team.drawn
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-2 text-center text-neutral-400",
                            children: team.lost
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-2 text-center text-neutral-400 hidden sm:table-cell",
                            children: team.goalDifference > 0 ? "+".concat(team.goalDifference) : team.goalDifference
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 text-right font-sports font-black text-lg text-white",
                            children: team.points
                          })]
                        }, team.teamId);
                      })
                    })]
                  })
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: t.shopBadge
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider",
                    children: language === "am" ? "የበርበሬዎቹን ማሊያ ይልበሱ" : "Wear the Berberewochu Colors"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs sm:text-sm text-neutral-400 mt-1",
                    children: language === "am" ? "በኢትዮጵያ ፕሪሚየር ሊግ የሚለበሱ ይፋዊ ማሊያዎች። በቻፓ ፈጣን ክፍያ ይግዙ።" : "Official Ethiopian Premier League kits manufactured with breathable athletic fabric. Direct Chapa checkout."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setCurrentPage("shop");
                  },
                  className: "self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-sports font-bold uppercase text-xs tracking-wider transition-all hover:border-red-600",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "\u1219\u1209\u12CD\u1295 \u1231\u1245 \u12ED\u1218\u120D\u12A8\u1271 (".concat(shopItems.length, " \u12A5\u1243\u12CE\u127D)") : "Visit Full Shop (".concat(shopItems.length, " Items)")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(ArrowRight, {
                    className: "w-4 h-4 text-red-400"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: shopItems.slice(0, 3).map(function (item) {
                  var name = _typeof(item.name) === "object" ? item.name[language] || item.name.en : item.name;
                  var desc = _typeof(item.description) === "object" ? item.description[language] || item.description.en : item.description;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "group rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/50 flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative aspect-square w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                        src: item.imageUrl,
                        alt: name,
                        className: "w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                        className: "absolute top-6 left-6",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "px-2.5 py-1 rounded-lg bg-red-600 text-white text-xxs font-sports font-black uppercase tracking-wider shadow-md",
                          children: t.officialTag
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-5 flex-1 flex flex-col justify-between space-y-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                          className: "font-sports font-black text-lg text-white uppercase tracking-wide group-hover:text-red-400 transition-colors",
                          children: name
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                          className: "mt-1 text-xs text-neutral-400 line-clamp-2",
                          children: desc
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "mt-3 flex items-center gap-1.5",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-xxs uppercase font-bold text-neutral-400",
                            children: [t.sizeGuide, ":"]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                            className: "flex gap-1",
                            children: item.availableSizes.map(function (s) {
                              return /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                className: "px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 text-xxs font-sports font-bold uppercase",
                                children: s
                              }, s);
                            })
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "pt-3 border-t border-neutral-800/80 flex items-center justify-between",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "font-sports font-black text-xl text-emerald-400",
                          children: [item.price.toLocaleString(), " ", t.etbCurrency]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                          onClick: function onClick() {
                            return openCheckoutModal(item);
                          },
                          className: "px-4 py-2 rounded-xl btn-primary-red font-sports font-black uppercase tracking-wider text-xs shadow-md shadow-red-950/40 flex items-center gap-1.5 transition-all",
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
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950/70 via-neutral-900 to-neutral-950 border border-emerald-800/40 p-8 sm:p-10 shadow-2xl",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "max-w-xl space-y-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider font-sports",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                        className: "w-3.5 h-3.5 fill-emerald-400"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "ክለቡን ያጠናክሩ • በቻፓ ፈጣን ክፍያ" : "Empower the Club • Chapa Payment Integration"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                      className: "text-3xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider",
                      children: t.donateTitle
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xs sm:text-sm text-neutral-300 leading-relaxed",
                      children: t.donateSubtitle
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-wrap items-center gap-2 pt-1 text-xxs text-neutral-400",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold",
                        children: ["100 ", t.etbCurrency]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold",
                        children: ["500 ", t.etbCurrency]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 font-bold",
                        children: ["1,000 ", t.etbCurrency]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 font-bold",
                        children: t.customAmountLabel
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      onClick: openDonationModal,
                      className: "px-8 py-4 rounded-2xl btn-donate-emerald text-white font-sports font-black text-base uppercase tracking-wider shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 hover:scale-102",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                        className: "w-5 h-5 fill-white text-white"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: t.donateBtn
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs text-center text-neutral-400 font-medium",
                      children: language === "am" ? "ፈጣን ዲጂታል ደረሰኝ እና የተረጋገጠ የክፍያ መለያ" : "Instant digital receipt & verified transaction reference"
                    })]
                  })]
                })]
              })
            }), !isInstalled && /* @__PURE__ */jsxRuntimeExports.jsx("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "space-y-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800 pb-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-sports font-bold uppercase tracking-wider mb-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Smartphone, {
                        className: "w-3.5 h-3.5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "ይፋዊ የሞባይል መተግበሪያ" : "Official Mobile App"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                      className: "text-2xl sm:text-4xl font-sports font-black text-white uppercase tracking-wider",
                      children: language === "am" ? "የክለቡን መተግበሪያ ያውርዱ" : "Download Club App"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 max-w-md",
                    children: language === "am" ? "ለአንድሮይድ በቀጥታ APK ያውርዱ፤ ለአይፎን ደግሞ በሳፋሪ በቀላሉ ወደ ዋና ገጽ (Home Screen) ይጨምሩ።" : "Download the official Android APK file directly or add to iOS home screen for instant access."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AppStoreInstallCard$1, {
                  mode: "embedded"
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx("section", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-neutral-900 to-green-950 border border-red-800/40 p-8 sm:p-12 shadow-2xl",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "relative z-10 max-w-2xl space-y-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Flame, {
                      className: "w-3.5 h-3.5 text-amber-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ይፋዊ የደጋፊዎች ማህበር" : "Official Supporter Club"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                    className: "font-sports font-black text-3xl sm:text-5xl text-white uppercase tracking-wider leading-tight",
                    children: t.membershipCtaTitle
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-300 text-sm sm:text-base leading-relaxed",
                    children: t.membershipCtaDesc
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-2 flex flex-wrap items-center gap-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                      onClick: function onClick() {
                        return setCurrentPage("membership");
                      },
                      className: "px-6 py-3.5 rounded-xl btn-secondary-amber text-white font-bold text-sm sm:text-base uppercase tracking-wider font-sports shadow-xl flex items-center gap-2 transform active:scale-95 transition-all",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(UserPlus, {
                        className: "w-5 h-5"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: t.joinNowBtn
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setCurrentPage("about");
                      },
                      className: "px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-sm sm:text-base uppercase tracking-wider font-sports transition-colors",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "የክለቡን ታሪክ ይወቁ" : "Learn Club History"
                      })
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 opacity-25 hover:opacity-40 transition-opacity",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 280
                  })
                })]
              })
            })]
          });
        };
        var LiveNotificationToast = function LiveNotificationToast() {
          var _useClub7 = useClub(),
            liveNotifications = _useClub7.liveNotifications,
            dismissNotification = _useClub7.dismissNotification;
          if (liveNotifications.length === 0) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-sm sm:max-w-md w-full pointer-events-none",
            children: liveNotifications.map(function (n) {
              var isGoal = n.type === "goal";
              var isStandings = n.type === "standings";
              var isMatch = n.type === "match_start" || n.type === "match_end";
              return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "pointer-events-auto rounded-2xl border p-4 shadow-2xl backdrop-blur-md transition-all animate-in slide-in-from-top-4 duration-300 ".concat(isGoal ? "bg-red-950/95 border-red-500 text-white shadow-red-950/80 ring-1 ring-red-500" : isStandings ? "bg-neutral-900/95 border-emerald-500 text-white shadow-emerald-950/60 ring-1 ring-emerald-500" : isMatch ? "bg-neutral-900/95 border-amber-500 text-white shadow-amber-950/60 ring-1 ring-amber-500" : "bg-neutral-900/95 border-neutral-700 text-white"),
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-start justify-between gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold shadow-md ".concat(isGoal ? "bg-red-600 text-white animate-bounce" : isStandings ? "bg-emerald-600 text-white" : isMatch ? "bg-amber-500 text-black" : "bg-neutral-800 text-neutral-300"),
                      children: isGoal ? /* @__PURE__ */jsxRuntimeExports.jsx(Flame, {
                        className: "w-5 h-5 text-white"
                      }) : isStandings ? /* @__PURE__ */jsxRuntimeExports.jsx(Trophy, {
                        className: "w-5 h-5 text-white"
                      }) : isMatch ? /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                        className: "w-5 h-5"
                      }) : /* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                        className: "w-4 h-4 text-emerald-400"
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "space-y-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-black text-sm uppercase tracking-wider text-amber-400",
                          children: n.title
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400 font-mono",
                          children: n.timestamp
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-neutral-200 leading-snug font-medium",
                        children: n.message
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return dismissNotification(n.id);
                    },
                    className: "text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors",
                    "aria-label": "Dismiss notification",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-4 h-4"
                    })
                  })]
                })
              }, n.id);
            })
          });
        };
        function useOnlineStatus() {
          var _reactExports$useStat105 = reactExports.useState(function () {
              return typeof navigator !== "undefined" ? navigator.onLine : true;
            }),
            _reactExports$useStat106 = _slicedToArray(_reactExports$useStat105, 2),
            isOnline = _reactExports$useStat106[0],
            setIsOnline = _reactExports$useStat106[1];
          reactExports.useEffect(function () {
            var handleOnline = function handleOnline() {
              return setIsOnline(true);
            };
            var handleOffline = function handleOffline() {
              return setIsOnline(false);
            };
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
            return function () {
              window.removeEventListener("online", handleOnline);
              window.removeEventListener("offline", handleOffline);
            };
          }, []);
          return isOnline;
        }
        var OfflineInterruptedOverlay = function OfflineInterruptedOverlay() {
          var isOnline = useOnlineStatus();
          var _useClub8 = useClub(),
            language = _useClub8.language;
          var _reactExports$useStat107 = reactExports.useState(false),
            _reactExports$useStat108 = _slicedToArray(_reactExports$useStat107, 2),
            isBannerDismissed = _reactExports$useStat108[0],
            setIsBannerDismissed = _reactExports$useStat108[1];
          var _reactExports$useStat109 = reactExports.useState(false),
            _reactExports$useStat110 = _slicedToArray(_reactExports$useStat109, 2),
            showFullModal = _reactExports$useStat110[0],
            setShowFullModal = _reactExports$useStat110[1];
          if (isOnline) {
            return null;
          }
          var handleRetry = function handleRetry() {
            window.location.reload();
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [!isBannerDismissed && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slide-up",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-3.5 rounded-2xl bg-neutral-900/95 border border-red-500/40 text-white shadow-2xl backdrop-blur-md flex items-center justify-between gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "w-8 h-8 rounded-xl bg-red-950 border border-red-800 flex items-center justify-center text-red-400 shrink-0",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(WifiOff, {
                      className: "w-4 h-4 animate-pulse"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "min-w-0",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-sports font-bold text-xs uppercase tracking-wider text-red-400",
                        children: language === "am" ? "የኢንተርኔት ግንኙነት ተቋርጧል" : "Connection Interrupted"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xxs text-neutral-300 truncate",
                      children: language === "am" ? "ከመስመር ውጭ ሁነታ • የተቀመጡ መረጃዎች ይገኛሉ" : "Operating in Offline Mode • Cached standings & roster active"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-1 shrink-0",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setShowFullModal(true);
                    },
                    className: "px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xxs font-bold uppercase transition-colors cursor-pointer",
                    children: language === "am" ? "ዝርዝር" : "Details"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: handleRetry,
                    className: "p-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer",
                    title: language === "am" ? "እንደገና ሞክር" : "Retry Connection",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                      className: "w-3.5 h-3.5"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setIsBannerDismissed(true);
                    },
                    className: "p-1 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer",
                    "aria-label": "Dismiss banner",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-3.5 h-3.5"
                    })
                  })]
                })]
              })
            }), showFullModal && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "max-w-md w-full bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex justify-center",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "relative",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                      size: 64,
                      showGlow: true
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-red-600 border-2 border-neutral-950 flex items-center justify-center text-white",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(WifiOff, {
                        className: "w-3.5 h-3.5"
                      })
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-1",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider mb-1",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ከመስመር ውጭ የማገልገል ሞተር ነቅቷል" : "Native Offline Engine Active"
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: language === "am" ? "የኢንተርኔት ግንኙነት ተቋርጧል" : "Connection Interrupted"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-emerald-400 font-ethiopic text-xs",
                    children: language === "am" ? "የተቀመጡ የክለቡ መረጃዎች ያለማቋረጥ ይሰራሉ" : "የኢንተርኔት ግንኙነት ተቋርጧል • ከመስመር ውጭ"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left space-y-2 text-xs text-neutral-300",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 text-white font-bold font-sports uppercase",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                      className: "w-4 h-4 text-emerald-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ከመስመር ውጭ የሚያገኟቸው አገልግሎቶች፡" : "What remains available offline:"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("ul", {
                    className: "space-y-1 text-xxs text-neutral-400 pl-6 list-disc",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: language === "am" ? "የተቀመጠው የኢትዮጵያ ፕሪሚየር ሊግ ሰንጠረዥና ውጤቶች" : "Saved Premier League Table & Results"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: language === "am" ? "የተጫዋቾች ስብስብ መረጃ እና ስታቲስቲክስ" : "Player Squad Profiles & Statistics"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: language === "am" ? "ቀደም ሲል የተጫኑ የክለቡ ዜናዎችና የጨዋታ ዘገባዎች" : "Previously Loaded Club News & Match Previews"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: language === "am" ? "የዲጂታል ደጋፊ የአባልነት መታወቂያ ካርድ" : "Digital Supporter Membership Card"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xxs text-neutral-500 pt-1",
                    children: language === "am" ? "የኦንላይን ክፍያዎች (በቻፓ) እና የቀጥታ ዳታ ማመሳሰል ኢንተርኔት እንደተመለሰ ወዲያውኑ ይቀጥላሉ።" : "Online payment submissions (Chapa) and live Firestore publishing will resume as soon as internet connectivity returns."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-col gap-2 pt-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: handleRetry,
                    className: "w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-sports font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ግንኙነትን በድጋሚ ሞክር" : "Retry Connection"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setShowFullModal(false);
                    },
                    className: "w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-sports font-bold uppercase tracking-wider transition-colors cursor-pointer",
                    children: language === "am" ? "ከመስመር ውጭ ቀጥል" : "Continue in Offline Mode"
                  })]
                })]
              })
            })]
          });
        };
        var AppStartupLoader = function AppStartupLoader(_ref59) {
          var onLoaded = _ref59.onLoaded,
            _ref59$minDurationMs = _ref59.minDurationMs,
            minDurationMs = _ref59$minDurationMs === void 0 ? 1200 : _ref59$minDurationMs;
          var _reactExports$useStat111 = reactExports.useState(true),
            _reactExports$useStat112 = _slicedToArray(_reactExports$useStat111, 2),
            isVisible = _reactExports$useStat112[0],
            setIsVisible = _reactExports$useStat112[1];
          var _reactExports$useStat113 = reactExports.useState(false),
            _reactExports$useStat114 = _slicedToArray(_reactExports$useStat113, 2),
            isFadingOut = _reactExports$useStat114[0],
            setIsFadingOut = _reactExports$useStat114[1];
          reactExports.useEffect(function () {
            var fadeTimer = setTimeout(function () {
              setIsFadingOut(true);
            }, minDurationMs);
            var removeTimer = setTimeout(function () {
              setIsVisible(false);
              onLoaded === null || onLoaded === void 0 || onLoaded();
            }, minDurationMs + 500);
            return function () {
              clearTimeout(fadeTimer);
              clearTimeout(removeTimer);
            };
          }, [minDurationMs, onLoaded]);
          if (!isVisible) return null;
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            onClick: function onClick() {
              setIsFadingOut(true);
              setTimeout(function () {
                setIsVisible(false);
                onLoaded === null || onLoaded === void 0 || onLoaded();
              }, 300);
            },
            className: "fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 select-none cursor-pointer transition-opacity duration-500 ".concat(isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100", " bg-neutral-950/75 backdrop-blur-[3px]"),
            "aria-label": "Loading Halaba City FC Portal",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "relative flex flex-col items-center text-center p-7 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800/90 shadow-2xl shadow-black/80 max-w-xs sm:max-w-sm w-full mx-auto animate-in fade-in zoom-in-95 duration-300",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600/20 via-amber-500/20 to-emerald-600/20 blur-xl opacity-75 -z-10"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative mb-5 flex items-center justify-center",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "absolute -inset-3.5 rounded-full border-2 border-dashed border-red-500/50 animate-[spin_6s_linear_infinite]"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "absolute -inset-2 rounded-full border border-amber-400/30 animate-[spin_4s_linear_infinite_reverse]"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "relative rounded-full p-2 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-700/80 shadow-lg drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 68
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "absolute -bottom-1 -right-1 bg-red-600 text-white rounded-full p-1.5 shadow-md border border-red-400 animate-spin",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                    className: "w-3.5 h-3.5"
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                className: "font-sports font-black text-xl sm:text-2xl text-white tracking-wider uppercase mb-1 drop-shadow-sm",
                children: "Halaba City FC"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                className: "text-xs font-semibold text-amber-400 tracking-wide font-sports uppercase mb-3",
                children: "የኢትዮጵያ ፕሪሚየር ሊግ • 2026/27"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-40 sm:w-48 h-1.5 bg-neutral-800/90 rounded-full overflow-hidden p-0.5 border border-neutral-700/60 shadow-inner",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "h-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 rounded-full w-2/3 animate-[pulse_1.2s_ease-in-out_infinite]"
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                className: "text-xxs text-neutral-400 font-mono uppercase tracking-widest mt-3.5",
                children: "Loading Official Club Portal..."
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "mt-5 pt-3.5 border-t border-neutral-800/80 w-full flex items-center justify-center gap-2.5",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(NetVibeLogo, {
                  size: "xs"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-left",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "block text-[9px] text-neutral-400 font-semibold uppercase tracking-wider leading-none",
                    children: "Developed by"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xs font-bold text-sky-400 tracking-wide leading-tight",
                    children: "NetVibe Digital Solutions"
                  })]
                })]
              })]
            })
          });
        };
        var ErrorBoundary = /*#__PURE__*/function (_reactExports$Compone) {
          function ErrorBoundary(props) {
            var _this;
            _classCallCheck(this, ErrorBoundary);
            _this = _callSuper(this, ErrorBoundary, [props]);
            _this.handleReload = function () {
              try {
                localStorage.removeItem("halaba_official_epl_standings_v12_real_table");
              } catch (_unused13) {}
              window.location.reload();
            };
            _this.state = {
              hasError: false,
              errorMessage: ""
            };
            return _this;
          }
          _inherits(ErrorBoundary, _reactExports$Compone);
          return _createClass(ErrorBoundary, [{
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
              console.error("[ErrorBoundary caught an error]:", error, errorInfo);
            }
          }, {
            key: "render",
            value: function render() {
              if (this.state.hasError) {
                return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "min-h-screen w-full flex flex-col items-center justify-center p-6 bg-neutral-950 text-neutral-100 text-center select-none",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl space-y-5",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "flex justify-center",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                        size: 72,
                        showGlow: true
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "space-y-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-sports font-bold uppercase tracking-wider",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(TriangleAlert, {
                          className: "w-3.5 h-3.5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "ችግር ተከስቷል • Recovery Mode"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                        className: "text-xl sm:text-2xl font-sports font-black text-white uppercase tracking-wider",
                        children: "HALABA CITY FC PORTAL"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-neutral-400 leading-relaxed",
                        children: "ገጹን በመጫን ላይ ጊዜያዊ ችግር አጋጥሟል። እባክዎ ከታች ያለውን ቁልፍ በመጫን ገጹን ዳግም ያስጀምሩ።"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xxs text-neutral-500 font-mono",
                        children: this.state.errorMessage
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "pt-2",
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: this.handleReload,
                        className: "w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/60 active:scale-95 transition-all cursor-pointer",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                          className: "w-4 h-4"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "ገጹን ዳግም አስጀምር / Reload App"
                        })]
                      })
                    })]
                  })
                });
              }
              return this.props.children;
            }
          }], [{
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
              return {
                hasError: true,
                errorMessage: (error === null || error === void 0 ? void 0 : error.message) || "An unexpected rendering error occurred."
              };
            }
          }]);
        }(reactExports.Component);
        var PageFallbackLoader = function PageFallbackLoader() {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "min-h-[50vh] w-full flex flex-col items-center justify-center p-6 text-center select-none",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "relative mb-3 flex items-center justify-center",
              children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                size: 56
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-2 text-xs font-sports font-bold uppercase tracking-wider text-neutral-400",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                className: "w-3.5 h-3.5 animate-spin text-red-500"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: "በመጫን ላይ... / Loading..."
              })]
            })]
          });
        };
        var FixturesPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./FixturesPage-legacy-DRkOpVuI.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.FixturesPage
            };
          });
        });
        var StandingsPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./StandingsPage-legacy-DIjWRDBu.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.StandingsPage
            };
          });
        });
        var NewsPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./NewsPage-legacy-BkDio0ml.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.NewsPage
            };
          });
        });
        var MembershipPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./MembershipPage-legacy--t6tbtBT.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.MembershipPage
            };
          });
        });
        var AboutPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./AboutPage-legacy-U2qHz-0C.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.AboutPage
            };
          });
        });
        var ContactPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./ContactPage-legacy-Bl4DyWNf.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.ContactPage
            };
          });
        });
        var AdminPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./AdminPage-legacy-DLyDtTX2.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.AdminPage
            };
          });
        });
        var ShopPage = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./ShopPage-legacy-UYRlwjD3.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.ShopPage
            };
          });
        });
        var MatchDetailsModal = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./MatchDetailsModal-legacy-xvtmEuWB.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.MatchDetailsModal
            };
          });
        });
        var ArticleModal = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./ArticleModal-legacy-D_xpNyJq.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.ArticleModal
            };
          });
        });
        var ClubDossierModal = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./ClubDossierModal-legacy-2La6Ym95.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.ClubDossierModal
            };
          });
        });
        var DonationModal = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./DonationModal-legacy-BU0cmIre.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.DonationModal
            };
          });
        });
        var JerseyCheckoutModal = reactExports.lazy(function () {
          return __vitePreload(function () {
            return module.import('./JerseyCheckoutModal-legacy-CEKKnECL.js');
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.JerseyCheckoutModal
            };
          });
        });
        var AppStoreInstallCard = reactExports.lazy(function () {
          return __vitePreload(function () {
            return Promise.resolve().then(function () {
              return AppStoreInstallCard$2;
            });
          }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
            return {
              default: m.AppStoreInstallCard
            };
          });
        });
        var MainApp = function MainApp() {
          var _useClub9 = useClub(),
            currentPage = _useClub9.currentPage,
            matches = _useClub9.matches,
            news = _useClub9.news,
            isDossierOpen = _useClub9.isDossierOpen,
            closeDossier = _useClub9.closeDossier;
          var _usePWAInstall3 = usePWAInstall(),
            isInstalled = _usePWAInstall3.isInstalled,
            isInstallModalOpen = _usePWAInstall3.isInstallModalOpen,
            openInstallModal = _usePWAInstall3.openInstallModal,
            closeInstallModal = _usePWAInstall3.closeInstallModal;
          var _reactExports$useStat115 = reactExports.useState(null),
            _reactExports$useStat116 = _slicedToArray(_reactExports$useStat115, 2),
            selectedMatchId = _reactExports$useStat116[0],
            setSelectedMatchId = _reactExports$useStat116[1];
          var _reactExports$useStat117 = reactExports.useState(null),
            _reactExports$useStat118 = _slicedToArray(_reactExports$useStat117, 2),
            selectedArticleId = _reactExports$useStat118[0],
            setSelectedArticleId = _reactExports$useStat118[1];
          reactExports.useEffect(function () {
            var confirmAppReady = /*#__PURE__*/function () {
              var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42() {
                var _t49;
                return _regenerator().w(function (_context42) {
                  while (1) switch (_context42.p = _context42.n) {
                    case 0:
                      _context42.p = 0;
                      _context42.n = 1;
                      return CapacitorUpdater.notifyAppReady();
                    case 1:
                      console.log("[CapacitorUpdater] notifyAppReady() confirmed update stability");
                      _context42.n = 3;
                      break;
                    case 2:
                      _context42.p = 2;
                      _t49 = _context42.v;
                      console.debug("[CapacitorUpdater] notifyAppReady note:", _t49);
                    case 3:
                      return _context42.a(2);
                  }
                }, _callee42, null, [[0, 2]]);
              }));
              return function confirmAppReady() {
                return _ref60.apply(this, arguments);
              };
            }();
            confirmAppReady();
          }, []);
          var activeMatch = selectedMatchId ? matches.find(function (m) {
            return m.id === selectedMatchId;
          }) || null : null;
          var activeArticle = selectedArticleId ? news.find(function (n) {
            return n.id === selectedArticleId;
          }) || null : null;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "min-h-screen w-full flex flex-col bg-neutral-950 text-neutral-100 selection:bg-red-600 selection:text-white font-sans",
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(AppStartupLoader, {
              minDurationMs: 1200
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Navbar, {
              onOpenInstallModal: openInstallModal,
              isInstalled: isInstalled
            }), /* @__PURE__ */jsxRuntimeExports.jsx(LiveNotificationToast, {}), /* @__PURE__ */jsxRuntimeExports.jsx(OfflineInterruptedOverlay, {}), /* @__PURE__ */jsxRuntimeExports.jsx("main", {
              className: "flex-1 w-full pb-28 sm:pb-0",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Suspense, {
                fallback: /* @__PURE__ */jsxRuntimeExports.jsx(PageFallbackLoader, {}),
                children: [currentPage === "home" && /* @__PURE__ */jsxRuntimeExports.jsx(HomePage, {
                  onOpenMatchModal: function onOpenMatchModal(id) {
                    return setSelectedMatchId(id);
                  },
                  onOpenArticleModal: function onOpenArticleModal(id) {
                    return setSelectedArticleId(id);
                  }
                }), currentPage === "fixtures" && /* @__PURE__ */jsxRuntimeExports.jsx(FixturesPage, {
                  onOpenMatchModal: function onOpenMatchModal(id) {
                    return setSelectedMatchId(id);
                  }
                }), currentPage === "standings" && /* @__PURE__ */jsxRuntimeExports.jsx(StandingsPage, {}), currentPage === "news" && /* @__PURE__ */jsxRuntimeExports.jsx(NewsPage, {
                  onOpenArticleModal: function onOpenArticleModal(id) {
                    return setSelectedArticleId(id);
                  }
                }), currentPage === "membership" && /* @__PURE__ */jsxRuntimeExports.jsx(MembershipPage, {}), currentPage === "shop" && /* @__PURE__ */jsxRuntimeExports.jsx(ShopPage, {}), currentPage === "about" && /* @__PURE__ */jsxRuntimeExports.jsx(AboutPage, {}), currentPage === "contact" && /* @__PURE__ */jsxRuntimeExports.jsx(ContactPage, {}), currentPage === "admin" && /* @__PURE__ */jsxRuntimeExports.jsx(AdminPage, {})]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(MobileFixedFooter, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Footer, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Suspense, {
              fallback: null,
              children: [isInstallModalOpen && !isInstalled && /* @__PURE__ */jsxRuntimeExports.jsx(AppStoreInstallCard, {
                mode: "modal",
                onClose: closeInstallModal
              }), activeMatch && /* @__PURE__ */jsxRuntimeExports.jsx(MatchDetailsModal, {
                match: activeMatch,
                onClose: function onClose() {
                  return setSelectedMatchId(null);
                }
              }), activeArticle && /* @__PURE__ */jsxRuntimeExports.jsx(ArticleModal, {
                article: activeArticle,
                onClose: function onClose() {
                  return setSelectedArticleId(null);
                }
              }), isDossierOpen && /* @__PURE__ */jsxRuntimeExports.jsx(ClubDossierModal, {
                isOpen: isDossierOpen,
                onClose: closeDossier
              }), /* @__PURE__ */jsxRuntimeExports.jsx(DonationModal, {}), /* @__PURE__ */jsxRuntimeExports.jsx(JerseyCheckoutModal, {})]
            })]
          });
        };
        function App() {
          return /* @__PURE__ */jsxRuntimeExports.jsx(ErrorBoundary, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ClubProvider, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(MainApp, {})
            })
          });
        }
        function registerSW() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$immediate = options.immediate,
            immediate = _options$immediate === void 0 ? false : _options$immediate,
            onNeedReload = options.onNeedReload,
            onNeedRefresh = options.onNeedRefresh,
            onOfflineReady = options.onOfflineReady,
            onRegistered = options.onRegistered,
            onRegisteredSW = options.onRegisteredSW,
            onRegisterError = options.onRegisterError;
          var wb;
          var registerPromise;
          var updateServiceWorker = /*#__PURE__*/function () {
            var _ref61 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
              var _reloadPage,
                _args43 = arguments;
              return _regenerator().w(function (_context43) {
                while (1) switch (_context43.n) {
                  case 0:
                    _reloadPage = _args43.length > 0 && _args43[0] !== undefined ? _args43[0] : true;
                    _context43.n = 1;
                    return registerPromise;
                  case 1:
                    return _context43.a(2);
                }
              }, _callee43);
            }));
            return function updateServiceWorker() {
              return _ref61.apply(this, arguments);
            };
          }();
          function register() {
            return _register.apply(this, arguments);
          }
          function _register() {
            _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
              return _regenerator().w(function (_context45) {
                while (1) switch (_context45.n) {
                  case 0:
                    if (!("serviceWorker" in navigator)) {
                      _context45.n = 3;
                      break;
                    }
                    _context45.n = 1;
                    return __vitePreload(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44() {
                      var _yield$module$import, Workbox;
                      return _regenerator().w(function (_context44) {
                        while (1) switch (_context44.n) {
                          case 0:
                            _context44.n = 1;
                            return module.import('./workbox-window.prod.es5-legacy-BNpt71Kv.js');
                          case 1:
                            _yield$module$import = _context44.v;
                            Workbox = _yield$module$import.Workbox;
                            return _context44.a(2, {
                              Workbox: Workbox
                            });
                        }
                      }, _callee44);
                    })), false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (_ref63) {
                      var Workbox = _ref63.Workbox;
                      return new Workbox("./sw.js", {
                        scope: "./",
                        type: "classic"
                      });
                    }).catch(function (e) {
                      onRegisterError === null || onRegisterError === void 0 || onRegisterError(e);
                      return void 0;
                    });
                  case 1:
                    wb = _context45.v;
                    if (wb) {
                      _context45.n = 2;
                      break;
                    }
                    return _context45.a(2);
                  case 2:
                    wb.addEventListener("activated", function (event) {
                      if (event.isUpdate || event.isExternal) {
                        if (onNeedReload) onNeedReload();else window.location.reload();
                      }
                    });
                    wb.addEventListener("installed", function (event) {
                      if (!event.isUpdate) {
                        onOfflineReady === null || onOfflineReady === void 0 || onOfflineReady();
                      }
                    });
                    wb.register({
                      immediate: immediate
                    }).then(function (r) {
                      if (onRegisteredSW) onRegisteredSW("./sw.js", r);else onRegistered === null || onRegistered === void 0 || onRegistered(r);
                    }).catch(function (e) {
                      onRegisterError === null || onRegisterError === void 0 || onRegisterError(e);
                    });
                  case 3:
                    return _context45.a(2);
                }
              }, _callee45);
            }));
            return _register.apply(this, arguments);
          }
          registerPromise = register();
          return updateServiceWorker;
        }
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
          try {
            var updateSW = registerSW({
              onNeedRefresh: function onNeedRefresh() {
                console.log("HALABA City FC app update available. Applying update...");
                updateSW(true);
              },
              onOfflineReady: function onOfflineReady() {
                console.log("HALABA City FC is cached and ready for offline stealth execution.");
              }
            });
          } catch (err) {
            console.debug("PWA ServiceWorker registration note:", err);
          }
        }
        createRoot(document.getElementById("root")).render(/* @__PURE__ */jsxRuntimeExports.jsx(App, {}));
      }
    };
  });
})();
