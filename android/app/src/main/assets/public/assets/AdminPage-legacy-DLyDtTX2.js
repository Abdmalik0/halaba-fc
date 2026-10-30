;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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

    var reactExports, jsxRuntimeExports, CircleCheck, Award, RefreshCw, Plus, Database, LoaderCircle, ShieldCheck, Eye, EyeOff, ExternalLink, ArrowUp, ArrowDown, SquarePen, Trash2, X, Link, Upload, Image$1, Sparkles, Check, Lock, TriangleAlert, Mail, LogOut, Users, ShoppingBag, Newspaper, Calendar, Trophy, Zap, Settings, Download, Search, Heart, Calculator, Minus, Pause, Play, useClub, NetVibeSvgEmblem, HalabaCrest, ClubImages;
    return {
      setters: [function (module) {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        CircleCheck = module.l;
        Award = module.A;
        RefreshCw = module.v;
        Plus = module.a2;
        Database = module.a3;
        LoaderCircle = module.k;
        ShieldCheck = module.d;
        Eye = module.a4;
        EyeOff = module.a5;
        ExternalLink = module.E;
        ArrowUp = module.a6;
        ArrowDown = module.a7;
        SquarePen = module.a8;
        Trash2 = module.a9;
        X = module.X;
        Link = module.aa;
        Upload = module.ab;
        Image$1 = module.ac;
        Sparkles = module.i;
        Check = module.ad;
        Lock = module.L;
        TriangleAlert = module.w;
        Mail = module.f;
        LogOut = module.ae;
        Users = module.af;
        ShoppingBag = module.a;
        Newspaper = module.N;
        Calendar = module.C;
        Trophy = module.T;
        Zap = module.Z;
        Settings = module.ag;
        Download = module.D;
        Search = module.B;
        Heart = module.H;
        Calculator = module.z;
        Minus = module.ah;
        Pause = module.p;
        Play = module.o;
      }, function (module) {
        useClub = module.u;
        NetVibeSvgEmblem = module.N;
        HalabaCrest = module.H;
        ClubImages = module.C;
      }, null, null],
      execute: function execute() {
        var compressPosterImage = function compressPosterImage(file) {
          var maxDim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1200;
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
              var _readerEvent$target3;
              var img = new Image();
              img.onload = function () {
                var width = img.width,
                  height = img.height;
                if (width > maxDim || height > maxDim) {
                  if (width > height) {
                    height = Math.round(height * maxDim / width);
                    width = maxDim;
                  } else {
                    width = Math.round(width * maxDim / height);
                    height = maxDim;
                  }
                }
                var canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                if (!ctx) {
                  var _readerEvent$target;
                  resolve((_readerEvent$target = readerEvent.target) === null || _readerEvent$target === void 0 ? void 0 : _readerEvent$target.result);
                  return;
                }
                ctx.drawImage(img, 0, 0, width, height);
                var compressedDataUrl = canvas.toDataURL("image/jpeg", 0.88);
                resolve(compressedDataUrl);
              };
              img.onerror = function () {
                var _readerEvent$target2;
                return resolve((_readerEvent$target2 = readerEvent.target) === null || _readerEvent$target2 === void 0 ? void 0 : _readerEvent$target2.result);
              };
              img.src = (_readerEvent$target3 = readerEvent.target) === null || _readerEvent$target3 === void 0 ? void 0 : _readerEvent$target3.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        };
        var SponsorManager = function SponsorManager() {
          var _useClub = useClub(),
            sponsors = _useClub.sponsors,
            addSponsor = _useClub.addSponsor,
            updateSponsor = _useClub.updateSponsor,
            deleteSponsor = _useClub.deleteSponsor,
            resetSponsors = _useClub.resetSponsors,
            isSponsorsLoading = _useClub.isSponsorsLoading,
            sponsorsSyncError = _useClub.sponsorsSyncError,
            language = _useClub.language;
          var _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isModalOpen = _reactExports$useStat2[0],
            setIsModalOpen = _reactExports$useStat2[1];
          var _reactExports$useStat3 = reactExports.useState(null),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            editingSponsorId = _reactExports$useStat4[0],
            setEditingSponsorId = _reactExports$useStat4[1];
          var _reactExports$useStat5 = reactExports.useState(""),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            name = _reactExports$useStat6[0],
            setName = _reactExports$useStat6[1];
          var _reactExports$useStat7 = reactExports.useState(""),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            nameAm = _reactExports$useStat8[0],
            setNameAm = _reactExports$useStat8[1];
          var _reactExports$useStat9 = reactExports.useState("Technology Partner & App Developer"),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            tier = _reactExports$useStat0[0],
            setTier = _reactExports$useStat0[1];
          var _reactExports$useStat1 = reactExports.useState("ኦፊሴላዊ የቴክኖሎጂ አጋር እና የመተግበሪያ አበልፃጊ"),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            tierAm = _reactExports$useStat10[0],
            setTierAm = _reactExports$useStat10[1];
          var _reactExports$useStat11 = reactExports.useState(""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            imageUrl = _reactExports$useStat12[0],
            setImageUrl = _reactExports$useStat12[1];
          var _reactExports$useStat13 = reactExports.useState(""),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            websiteUrl = _reactExports$useStat14[0],
            setWebsiteUrl = _reactExports$useStat14[1];
          var _reactExports$useStat15 = reactExports.useState(""),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            description = _reactExports$useStat16[0],
            setDescription = _reactExports$useStat16[1];
          var _reactExports$useStat17 = reactExports.useState(""),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            descriptionAm = _reactExports$useStat18[0],
            setDescriptionAm = _reactExports$useStat18[1];
          var _reactExports$useStat19 = reactExports.useState(true),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            active = _reactExports$useStat20[0],
            setActive = _reactExports$useStat20[1];
          var _reactExports$useStat21 = reactExports.useState(null),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            uploadError = _reactExports$useStat22[0],
            setUploadError = _reactExports$useStat22[1];
          var _reactExports$useStat23 = reactExports.useState(false),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            isUploading = _reactExports$useStat24[0],
            setIsUploading = _reactExports$useStat24[1];
          var _reactExports$useStat25 = reactExports.useState(false),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            isSavingToFirestore = _reactExports$useStat26[0],
            setIsSavingToFirestore = _reactExports$useStat26[1];
          var _reactExports$useStat27 = reactExports.useState(null),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            toastMessage = _reactExports$useStat28[0],
            setToastMessage = _reactExports$useStat28[1];
          var showToast = function showToast(msg) {
            setToastMessage(msg);
            setTimeout(function () {
              return setToastMessage(null);
            }, 3500);
          };
          var openAddModal = function openAddModal() {
            setEditingSponsorId(null);
            setName("");
            setNameAm("");
            setTier("Official Partner");
            setTierAm("ኦፊሴላዊ አጋር");
            setImageUrl("");
            setWebsiteUrl("");
            setDescription("");
            setDescriptionAm("");
            setActive(true);
            setUploadError(null);
            setIsModalOpen(true);
          };
          var openEditModal = function openEditModal(sponsor) {
            setEditingSponsorId(sponsor.id);
            setName(sponsor.name);
            setNameAm(sponsor.nameAm || "");
            setTier(sponsor.tier);
            setTierAm(sponsor.tierAm || "");
            setImageUrl(sponsor.imageUrl);
            setWebsiteUrl(sponsor.websiteUrl || "");
            setDescription(sponsor.description || "");
            setDescriptionAm(sponsor.descriptionAm || "");
            setActive(sponsor.active);
            setUploadError(null);
            setIsModalOpen(true);
          };
          var handleFileUpload = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
              var _e$target$files;
              var file, dataUrl, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
                    if (!file) {
                      _context.n = 6;
                      break;
                    }
                    if (!(file.size > 15 * 1024 * 1024)) {
                      _context.n = 1;
                      break;
                    }
                    setUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
                    return _context.a(2);
                  case 1:
                    setUploadError(null);
                    setIsUploading(true);
                    _context.p = 2;
                    _context.n = 3;
                    return compressPosterImage(file);
                  case 3:
                    dataUrl = _context.v;
                    setImageUrl(dataUrl);
                    _context.n = 5;
                    break;
                  case 4:
                    _context.p = 4;
                    _t = _context.v;
                    setUploadError("Failed to read image file. Please try another image.");
                  case 5:
                    _context.p = 5;
                    setIsUploading(false);
                    return _context.f(5);
                  case 6:
                    return _context.a(2);
                }
              }, _callee, null, [[2, 4, 5, 6]]);
            }));
            return function handleFileUpload(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          var handleFileDrop = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
              var _e$dataTransfer$files;
              var file, dataUrl, _t2;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    e.preventDefault();
                    file = (_e$dataTransfer$files = e.dataTransfer.files) === null || _e$dataTransfer$files === void 0 ? void 0 : _e$dataTransfer$files[0];
                    if (!file) {
                      _context2.n = 6;
                      break;
                    }
                    if (!(file.size > 15 * 1024 * 1024)) {
                      _context2.n = 1;
                      break;
                    }
                    setUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
                    return _context2.a(2);
                  case 1:
                    setUploadError(null);
                    setIsUploading(true);
                    _context2.p = 2;
                    _context2.n = 3;
                    return compressPosterImage(file);
                  case 3:
                    dataUrl = _context2.v;
                    setImageUrl(dataUrl);
                    _context2.n = 5;
                    break;
                  case 4:
                    _context2.p = 4;
                    _t2 = _context2.v;
                    setUploadError("Failed to read image file. Please try another image.");
                  case 5:
                    _context2.p = 5;
                    setIsUploading(false);
                    return _context2.f(5);
                  case 6:
                    return _context2.a(2);
                }
              }, _callee2, null, [[2, 4, 5, 6]]);
            }));
            return function handleFileDrop(_x2) {
              return _ref2.apply(this, arguments);
            };
          }();
          var handleSave = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
              var _t3;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    e.preventDefault();
                    if (name.trim()) {
                      _context3.n = 1;
                      break;
                    }
                    setUploadError("Please enter a sponsor name.");
                    return _context3.a(2);
                  case 1:
                    if (imageUrl.trim()) {
                      _context3.n = 2;
                      break;
                    }
                    setUploadError("Please provide a poster image (upload local file or enter image link).");
                    return _context3.a(2);
                  case 2:
                    setIsSavingToFirestore(true);
                    setUploadError(null);
                    _context3.p = 3;
                    if (!editingSponsorId) {
                      _context3.n = 5;
                      break;
                    }
                    _context3.n = 4;
                    return updateSponsor(editingSponsorId, {
                      name: name.trim(),
                      nameAm: nameAm.trim() || void 0,
                      tier: tier.trim(),
                      tierAm: tierAm.trim() || void 0,
                      imageUrl: imageUrl.trim(),
                      websiteUrl: websiteUrl.trim() || void 0,
                      description: description.trim() || void 0,
                      descriptionAm: descriptionAm.trim() || void 0,
                      active: active
                    });
                  case 4:
                    showToast("Updated sponsor poster for \"".concat(name, "\" in Firebase Firestore."));
                    _context3.n = 7;
                    break;
                  case 5:
                    _context3.n = 6;
                    return addSponsor({
                      name: name.trim(),
                      nameAm: nameAm.trim() || void 0,
                      tier: tier.trim(),
                      tierAm: tierAm.trim() || void 0,
                      imageUrl: imageUrl.trim(),
                      websiteUrl: websiteUrl.trim() || void 0,
                      description: description.trim() || void 0,
                      descriptionAm: descriptionAm.trim() || void 0,
                      active: active,
                      order: sponsors.length + 1
                    });
                  case 6:
                    showToast("Added new sponsor poster for \"".concat(name, "\" to Firebase Firestore."));
                  case 7:
                    setIsModalOpen(false);
                    _context3.n = 9;
                    break;
                  case 8:
                    _context3.p = 8;
                    _t3 = _context3.v;
                    setUploadError((_t3 === null || _t3 === void 0 ? void 0 : _t3.message) || "Failed to save sponsor to Firebase Firestore.");
                  case 9:
                    _context3.p = 9;
                    setIsSavingToFirestore(false);
                    return _context3.f(9);
                  case 10:
                    return _context3.a(2);
                }
              }, _callee3, null, [[3, 8, 9, 10]]);
            }));
            return function handleSave(_x3) {
              return _ref3.apply(this, arguments);
            };
          }();
          var handleDelete = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id, sponsorName) {
              var _t4;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.p = _context4.n) {
                  case 0:
                    if (!window.confirm("Are you sure you want to remove the sponsor poster for \"".concat(sponsorName, "\" from Firebase Firestore?"))) {
                      _context4.n = 4;
                      break;
                    }
                    _context4.p = 1;
                    _context4.n = 2;
                    return deleteSponsor(id);
                  case 2:
                    showToast("Removed \"".concat(sponsorName, "\" from Firebase Firestore."));
                    _context4.n = 4;
                    break;
                  case 3:
                    _context4.p = 3;
                    _t4 = _context4.v;
                    showToast("Error deleting sponsor: ".concat((_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || "Failed"));
                  case 4:
                    return _context4.a(2);
                }
              }, _callee4, null, [[1, 3]]);
            }));
            return function handleDelete(_x4, _x5) {
              return _ref4.apply(this, arguments);
            };
          }();
          var handleToggleActive = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(sponsor) {
              var _t5;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.p = _context5.n) {
                  case 0:
                    _context5.p = 0;
                    _context5.n = 1;
                    return updateSponsor(sponsor.id, {
                      active: !sponsor.active
                    });
                  case 1:
                    showToast("".concat(sponsor.name, " poster set to ").concat(!sponsor.active ? "Active" : "Hidden", " in Firebase."));
                    _context5.n = 3;
                    break;
                  case 2:
                    _context5.p = 2;
                    _t5 = _context5.v;
                    showToast("Error updating visibility: ".concat((_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || "Failed"));
                  case 3:
                    return _context5.a(2);
                }
              }, _callee5, null, [[0, 2]]);
            }));
            return function handleToggleActive(_x6) {
              return _ref5.apply(this, arguments);
            };
          }();
          var handleMoveOrder = /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(index, direction) {
              var targetIndex, copy, temp, idx, _t6;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.p = _context6.n) {
                  case 0:
                    targetIndex = direction === "up" ? index - 1 : index + 1;
                    if (!(targetIndex < 0 || targetIndex >= sponsors.length)) {
                      _context6.n = 1;
                      break;
                    }
                    return _context6.a(2);
                  case 1:
                    copy = _toConsumableArray(sponsors);
                    temp = copy[index];
                    copy[index] = copy[targetIndex];
                    copy[targetIndex] = temp;
                    _context6.p = 2;
                    idx = 0;
                  case 3:
                    if (!(idx < copy.length)) {
                      _context6.n = 5;
                      break;
                    }
                    _context6.n = 4;
                    return updateSponsor(copy[idx].id, {
                      order: idx + 1
                    });
                  case 4:
                    idx++;
                    _context6.n = 3;
                    break;
                  case 5:
                    showToast("Updated slide display order in Firebase.");
                    _context6.n = 7;
                    break;
                  case 6:
                    _context6.p = 6;
                    _t6 = _context6.v;
                    showToast("Error saving order changes to Firebase.");
                  case 7:
                    return _context6.a(2);
                }
              }, _callee6, null, [[2, 6]]);
            }));
            return function handleMoveOrder(_x7, _x8) {
              return _ref6.apply(this, arguments);
            };
          }();
          var sortedSponsors = _toConsumableArray(sponsors).sort(function (a, b) {
            return (a.order || 0) - (b.order || 0);
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
            children: [toastMessage && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "p-3 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-200 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-2 animate-in fade-in",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                className: "w-4 h-4 text-emerald-400 shrink-0"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: toastMessage
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xxs font-sports font-bold uppercase tracking-wider mb-1",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Award, {
                    className: "w-3 h-3"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Official Club Partners & Posters"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                  className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                  children: language === "am" ? "የስፖንሰሮች ባነሮችና ፖስተሮች ማስተዳደሪያ" : "Sponsor Carousel & Poster Management"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-neutral-400 mt-1",
                  children: language === "am" ? "በመነሻ ገጽ ላይ የሚሽከረከሩትን የክለቡ ስፖንሰሮችና አጋሮች ፖስተሮች ከኮምፒውተርዎ ወይም ከስልክዎ ፋይል በመጫን በቀላሉ ያርትዑ።" : "Manage the large auto-sliding sponsor billboard shown on the club homepage. Upload posters directly from your local device."
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 shrink-0",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    if (window.confirm("Restore initial official club sponsors (NetVibe, Halaba Union, Chapa, etc.)?")) {
                      resetSponsors();
                      showToast("Restored default official club sponsors.");
                    }
                  },
                  className: "px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
                  title: "Restore default sponsors",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                    className: "w-3.5 h-3.5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Reset Defaults"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: openAddModal,
                  className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sports font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all hover:scale-102 cursor-pointer",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Plus, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "አዲስ ፖስተር ጫን" : "Add Sponsor Poster"
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-start gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Database, {
                  className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "space-y-0.5",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                      className: "text-white font-sports font-bold tracking-wide uppercase",
                      children: language === "am" ? "የፈርቤዝ ክላውድ ፋየርቤዝ ዳታቤዝ ተገናኝቷል" : "Firebase Cloud Firestore Linked"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                      }), "Live Cloud Sync Active"]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-xxs",
                    children: language === "am" ? "ሁሉም የስፖንሰር ፖስተሮች፣ ባነሮች እና መረጃዎች በቀጥታ በፈርቤዝ /sponsors ውስጥ ይቀመጣሉ።" : "All sponsor posters, tiers, descriptions, and uploaded images sync live with Cloud Firestore collection /sponsors."
                  })]
                })]
              }), isSponsorsLoading ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-1.5 text-amber-400 text-xxs font-mono shrink-0",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                  className: "w-3.5 h-3.5 animate-spin text-amber-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Syncing Firestore..."
                })]
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-1.5 text-neutral-400 text-xxs font-mono shrink-0",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                  className: "w-3.5 h-3.5 text-emerald-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  children: [sponsors.length, " Cloud Documents"]
                })]
              })]
            }), sponsorsSyncError && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "p-3 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs flex items-center gap-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                className: "w-4 h-4 text-amber-400 shrink-0"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                children: ["Offline fallback active: ", sponsorsSyncError]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: sortedSponsors.map(function (s, idx) {
                var isNetVibe = s.id.includes("netvibe") || s.name.toLowerCase().includes("netvibe");
                return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "rounded-2xl border p-4.5 flex flex-col justify-between transition-all ".concat(s.active ? "bg-neutral-950 border-neutral-800 hover:border-neutral-700" : "bg-neutral-950/50 border-neutral-900 opacity-60"),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                          className: "w-20 h-16 rounded-xl bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center shrink-0 overflow-hidden relative",
                          children: s.imageUrl ? /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                            src: s.imageUrl,
                            alt: s.name,
                            className: "max-h-full max-w-full object-contain",
                            onError: function onError(e) {
                              e.target.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80";
                            }
                          }) : /* @__PURE__ */jsxRuntimeExports.jsx(NetVibeSvgEmblem, {
                            sizePx: 32
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "min-w-0",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                              className: "text-xxs font-mono text-neutral-500 font-bold",
                              children: ["#", idx + 1]
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xxs px-2 py-0.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-300 font-sports font-bold uppercase truncate max-w-[170px]",
                              children: s.tier
                            }), isNetVibe && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xxs px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold uppercase",
                              children: "Developer"
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                            className: "font-sports font-bold text-base text-white mt-1 truncate",
                            title: s.name,
                            children: s.name
                          }), s.nameAm && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xs text-neutral-400 block font-ethiopic truncate",
                            children: s.nameAm
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return handleToggleActive(s);
                        },
                        className: "p-1.5 rounded-lg text-xxs font-bold uppercase flex items-center gap-1 transition-colors ".concat(s.active ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900" : "bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white"),
                        title: s.active ? "Click to hide from homepage" : "Click to display on homepage",
                        children: [s.active ? /* @__PURE__ */jsxRuntimeExports.jsx(Eye, {
                          className: "w-3.5 h-3.5"
                        }) : /* @__PURE__ */jsxRuntimeExports.jsx(EyeOff, {
                          className: "w-3.5 h-3.5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: s.active ? "Active" : "Hidden"
                        })]
                      })]
                    }), s.description && /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                      className: "text-xs text-neutral-400 line-clamp-2 leading-relaxed",
                      children: s.description
                    }), s.websiteUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                      href: s.websiteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-xxs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "truncate max-w-[240px]",
                        children: s.websiteUrl
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(ExternalLink, {
                        className: "w-2.5 h-2.5"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-3 mt-3 border-t border-neutral-850 flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-500 uppercase font-bold mr-1",
                        children: "Order:"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          return handleMoveOrder(idx, "up");
                        },
                        disabled: idx === 0,
                        className: "p-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                        title: "Move up",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(ArrowUp, {
                          className: "w-3 h-3"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          return handleMoveOrder(idx, "down");
                        },
                        disabled: idx === sortedSponsors.length - 1,
                        className: "p-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                        title: "Move down",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(ArrowDown, {
                          className: "w-3 h-3"
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return openEditModal(s);
                        },
                        className: "px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(SquarePen, {
                          className: "w-3.5 h-3.5"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "Edit"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          return handleDelete(s.id, s.name);
                        },
                        className: "p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 hover:text-red-100 transition-colors cursor-pointer",
                        title: "Delete sponsor",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                          className: "w-3.5 h-3.5"
                        })
                      })]
                    })]
                  })]
                }, s.id);
              })
            }), isModalOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pb-4 border-b border-neutral-800 mb-6",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xxs font-sports font-bold uppercase tracking-wider text-amber-400",
                      children: editingSponsorId ? "Edit Sponsor Poster" : "New Sponsor Poster"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                      className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                      children: editingSponsorId ? "Edit: ".concat(name) : "Upload Sponsor Poster"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "button",
                    onClick: function onClick() {
                      return setIsModalOpen(false);
                    },
                    className: "p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-5 h-5"
                    })
                  })]
                }), uploadError && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(X, {
                    className: "w-4 h-4 text-red-400 shrink-0"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: uploadError
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSave,
                  className: "space-y-4",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Sponsor Name (English) *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        required: true,
                        value: name,
                        onChange: function onChange(e) {
                          return setName(e.target.value);
                        },
                        placeholder: "e.g. NetVibe Digital Solutions",
                        className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-sports"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Sponsor Name (Amharic)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: nameAm,
                        onChange: function onChange(e) {
                          return setNameAm(e.target.value);
                        },
                        placeholder: "ለምሳሌ፡ ኔትቫይብ ዲጂታል ሶሉሽንስ",
                        className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-ethiopic"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Partnership Category / Tier *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        required: true,
                        value: tier,
                        onChange: function onChange(e) {
                          return setTier(e.target.value);
                        },
                        placeholder: "e.g. Technology Partner & App Developer",
                        className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Category (Amharic)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: tierAm,
                        onChange: function onChange(e) {
                          return setTierAm(e.target.value);
                        },
                        placeholder: "ለምሳሌ፡ ኦፊሴላዊ የቴክኖሎጂ አጋር",
                        className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-ethiopic"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2 pt-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider",
                        children: "Sponsor Poster Image * (Upload From File)"
                      }), imageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-xxs font-bold uppercase font-sports text-emerald-400 flex items-center gap-1",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                          className: "w-3 h-3 text-emerald-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: imageUrl.startsWith("data:") ? "Local File Loaded" : "Image Linked"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative flex-1",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                          className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "text",
                          required: true,
                          value: imageUrl.startsWith("data:") ? "Photo loaded from local device (ready to save)" : imageUrl,
                          onChange: function onChange(e) {
                            setImageUrl(e.target.value);
                            setUploadError(null);
                          },
                          placeholder: "Paste image URL (https://...) or click Browse",
                          className: "w-full pl-9 pr-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        htmlFor: "sponsor-file-upload-input",
                        className: "px-4 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white rounded-xl text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all hover:scale-102 shrink-0 active:scale-95 shadow-md",
                        title: "Select image from local device",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Upload, {
                          className: "w-4 h-4"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "Upload From File"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          id: "sponsor-file-upload-input",
                          type: "file",
                          accept: "image/*",
                          onChange: handleFileUpload,
                          className: "hidden"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      htmlFor: "sponsor-file-upload-input",
                      onDragOver: function onDragOver(e) {
                        return e.preventDefault();
                      },
                      onDrop: handleFileDrop,
                      className: "py-3 px-4 rounded-xl border-2 border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 hover:bg-neutral-950 text-neutral-400 text-xs flex items-center justify-between cursor-pointer transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image$1, {
                          className: "w-4 h-4 text-neutral-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: isUploading ? "Optimizing and compressing poster image..." : "Drag & drop image file here, or click Browse to select PNG/JPEG"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-red-400 font-sports font-bold uppercase text-xs",
                        children: "Choose Photo"
                      })]
                    }), imageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-3 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-between gap-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                          className: "w-20 h-16 rounded-xl bg-neutral-900 border border-neutral-700 p-1 flex items-center justify-center shrink-0 overflow-hidden",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
                            src: imageUrl,
                            alt: "Poster preview",
                            className: "max-h-full max-w-full object-contain"
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "min-w-0",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Sparkles, {
                              className: "w-3 h-3 text-emerald-400"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              children: "Poster Preview Ready"
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-400 truncate block max-w-xs mt-0.5",
                            children: imageUrl.startsWith("data:") ? "Image stored as high-res data URL" : imageUrl
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick() {
                          return setImageUrl("");
                        },
                        className: "px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                        children: "Clear"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                      children: "Website / Contact Link (Optional)"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "url",
                      value: websiteUrl,
                      onChange: function onChange(e) {
                        return setWebsiteUrl(e.target.value);
                      },
                      placeholder: "https://netvibesolutions.com",
                      className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Tagline / Description (English)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                        rows: 2,
                        value: description,
                        onChange: function onChange(e) {
                          return setDescription(e.target.value);
                        },
                        placeholder: "Ideas • Code • Impact — Official Technology Partner",
                        className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1",
                        children: "Tagline / Description (Amharic)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                        rows: 2,
                        value: descriptionAm,
                        onChange: function onChange(e) {
                          return setDescriptionAm(e.target.value);
                        },
                        placeholder: "ሀሳብ • ኮድ • ተፅዕኖ — የክለቡ ኦፊሴላዊ የቴክኖሎጂ አጋር",
                        className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500 font-ethiopic"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                    className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "checkbox",
                      checked: active,
                      onChange: function onChange(e) {
                        return setActive(e.target.checked);
                      },
                      className: "w-4 h-4 text-emerald-600 rounded bg-neutral-900 border-neutral-700 focus:ring-emerald-500"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-sports font-bold text-white uppercase block text-xs",
                        children: "Display on Homepage Billboard"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-400",
                        children: "When active, this poster appears in the auto-slide carousel on the club homepage"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-4 border-t border-neutral-800 flex items-center justify-end gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setIsModalOpen(false);
                      },
                      className: "px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider font-sports transition-colors",
                      children: "Cancel"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      disabled: isUploading || isSavingToFirestore,
                      className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-black text-sm uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center gap-2 transition-all hover:scale-102 active:scale-95 disabled:opacity-50",
                      children: isSavingToFirestore ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                          className: "w-4 h-4 animate-spin"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "Saving to Firestore..."
                        })]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                          className: "w-4 h-4"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: editingSponsorId ? "Save Changes" : "Publish Poster"
                        })]
                      })
                    })]
                  })]
                })]
              })
            })]
          });
        };
        var AdminPage = exports("AdminPage", function () {
          var _useClub2 = useClub(),
            t = _useClub2.t,
            language = _useClub2.language,
            isAdminLoggedIn = _useClub2.isAdminLoggedIn,
            adminUsername = _useClub2.adminUsername,
            adminUser = _useClub2.adminUser,
            isAuthChecking = _useClub2.isAuthChecking,
            loginAdmin = _useClub2.loginAdmin,
            logoutAdmin = _useClub2.logoutAdmin,
            setCurrentPage = _useClub2.setCurrentPage,
            memberships = _useClub2.memberships,
            updateMembershipStatus = _useClub2.updateMembershipStatus,
            deleteMembership = _useClub2.deleteMembership,
            news = _useClub2.news,
            addNewsArticle = _useClub2.addNewsArticle,
            updateNewsArticle = _useClub2.updateNewsArticle,
            deleteNewsArticle = _useClub2.deleteNewsArticle,
            matches = _useClub2.matches,
            addMatch = _useClub2.addMatch,
            updateMatch = _useClub2.updateMatch,
            deleteMatch = _useClub2.deleteMatch,
            standings = _useClub2.standings,
            updateStanding = _useClub2.updateStanding,
            resetStandings = _useClub2.resetStandings,
            recalculateStandingsFromMatches = _useClub2.recalculateStandingsFromMatches,
            players = _useClub2.players,
            staff = _useClub2.staff,
            addPlayer = _useClub2.addPlayer,
            updatePlayer = _useClub2.updatePlayer,
            deletePlayer = _useClub2.deletePlayer,
            clubInfo = _useClub2.clubInfo,
            updateClubInfo = _useClub2.updateClubInfo,
            resetAllDataToDefault = _useClub2.resetAllDataToDefault,
            shopItems = _useClub2.shopItems,
            addShopItem = _useClub2.addShopItem,
            updateShopItem = _useClub2.updateShopItem,
            deleteShopItem = _useClub2.deleteShopItem,
            resetShopItems = _useClub2.resetShopItems,
            shopOrders = _useClub2.shopOrders,
            updateShopOrderStatus = _useClub2.updateShopOrderStatus,
            donations = _useClub2.donations,
            isAutoSyncEnabled = _useClub2.isAutoSyncEnabled,
            toggleAutoSync = _useClub2.toggleAutoSync,
            autoSyncInterval = _useClub2.autoSyncInterval,
            setAutoSyncInterval = _useClub2.setAutoSyncInterval,
            secondsUntilNextSync = _useClub2.secondsUntilNextSync,
            isSyncing = _useClub2.isSyncing,
            lastSyncTime = _useClub2.lastSyncTime,
            syncNow = _useClub2.syncNow,
            simulateLiveMatchAction = _useClub2.simulateLiveMatchAction,
            advanceLeagueMatchday = _useClub2.advanceLeagueMatchday,
            liveNotifications = _useClub2.liveNotifications,
            sponsors = _useClub2.sponsors;
          var _reactExports$useStat29 = reactExports.useState(""),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            emailInput = _reactExports$useStat30[0],
            setEmailInput = _reactExports$useStat30[1];
          var _reactExports$useStat31 = reactExports.useState(""),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            passwordInput = _reactExports$useStat32[0],
            setPasswordInput = _reactExports$useStat32[1];
          var _reactExports$useStat33 = reactExports.useState(null),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            loginError = _reactExports$useStat34[0],
            setLoginError = _reactExports$useStat34[1];
          var _reactExports$useStat35 = reactExports.useState(false),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            isLoggingIn = _reactExports$useStat36[0],
            setIsLoggingIn = _reactExports$useStat36[1];
          var _reactExports$useStat37 = reactExports.useState(false),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            isLoggingOut = _reactExports$useStat38[0],
            setIsLoggingOut = _reactExports$useStat38[1];
          var _reactExports$useStat39 = reactExports.useState("memberships"),
            _reactExports$useStat40 = _slicedToArray(_reactExports$useStat39, 2),
            adminTab = _reactExports$useStat40[0],
            setAdminTab = _reactExports$useStat40[1];
          var _reactExports$useStat41 = reactExports.useState("items"),
            _reactExports$useStat42 = _slicedToArray(_reactExports$useStat41, 2),
            shopSubTab = _reactExports$useStat42[0],
            setShopSubTab = _reactExports$useStat42[1];
          var _reactExports$useStat43 = reactExports.useState(false),
            _reactExports$useStat44 = _slicedToArray(_reactExports$useStat43, 2),
            isShopModalOpen = _reactExports$useStat44[0],
            setIsShopModalOpen = _reactExports$useStat44[1];
          var _reactExports$useStat45 = reactExports.useState(null),
            _reactExports$useStat46 = _slicedToArray(_reactExports$useStat45, 2),
            editingShopItemId = _reactExports$useStat46[0],
            setEditingShopItemId = _reactExports$useStat46[1];
          var _reactExports$useStat47 = reactExports.useState(""),
            _reactExports$useStat48 = _slicedToArray(_reactExports$useStat47, 2),
            shopNameEn = _reactExports$useStat48[0],
            setShopNameEn = _reactExports$useStat48[1];
          var _reactExports$useStat49 = reactExports.useState(""),
            _reactExports$useStat50 = _slicedToArray(_reactExports$useStat49, 2),
            shopNameAm = _reactExports$useStat50[0],
            setShopNameAm = _reactExports$useStat50[1];
          var _reactExports$useStat51 = reactExports.useState(""),
            _reactExports$useStat52 = _slicedToArray(_reactExports$useStat51, 2),
            shopNameOm = _reactExports$useStat52[0],
            setShopNameOm = _reactExports$useStat52[1];
          var _reactExports$useStat53 = reactExports.useState(""),
            _reactExports$useStat54 = _slicedToArray(_reactExports$useStat53, 2),
            shopDescEn = _reactExports$useStat54[0],
            setShopDescEn = _reactExports$useStat54[1];
          var _reactExports$useStat55 = reactExports.useState(""),
            _reactExports$useStat56 = _slicedToArray(_reactExports$useStat55, 2),
            shopDescAm = _reactExports$useStat56[0],
            setShopDescAm = _reactExports$useStat56[1];
          var _reactExports$useStat57 = reactExports.useState(""),
            _reactExports$useStat58 = _slicedToArray(_reactExports$useStat57, 2),
            shopDescOm = _reactExports$useStat58[0],
            setShopDescOm = _reactExports$useStat58[1];
          var _reactExports$useStat59 = reactExports.useState(1800),
            _reactExports$useStat60 = _slicedToArray(_reactExports$useStat59, 2),
            shopPrice = _reactExports$useStat60[0],
            setShopPrice = _reactExports$useStat60[1];
          var _reactExports$useStat61 = reactExports.useState(""),
            _reactExports$useStat62 = _slicedToArray(_reactExports$useStat61, 2),
            shopImageUrl = _reactExports$useStat62[0],
            setShopImageUrl = _reactExports$useStat62[1];
          var _reactExports$useStat63 = reactExports.useState(["S", "M", "L", "XL"]),
            _reactExports$useStat64 = _slicedToArray(_reactExports$useStat63, 2),
            shopSizes = _reactExports$useStat64[0],
            setShopSizes = _reactExports$useStat64[1];
          var _reactExports$useStat65 = reactExports.useState("JERSEY"),
            _reactExports$useStat66 = _slicedToArray(_reactExports$useStat65, 2),
            shopCategory = _reactExports$useStat66[0],
            setShopCategory = _reactExports$useStat66[1];
          var _reactExports$useStat67 = reactExports.useState(true),
            _reactExports$useStat68 = _slicedToArray(_reactExports$useStat67, 2),
            shopInStock = _reactExports$useStat68[0],
            setShopInStock = _reactExports$useStat68[1];
          var _reactExports$useStat69 = reactExports.useState(false),
            _reactExports$useStat70 = _slicedToArray(_reactExports$useStat69, 2),
            shopFeatured = _reactExports$useStat70[0],
            setShopFeatured = _reactExports$useStat70[1];
          var _reactExports$useStat71 = reactExports.useState(null),
            _reactExports$useStat72 = _slicedToArray(_reactExports$useStat71, 2),
            shopUploadError = _reactExports$useStat72[0],
            setShopUploadError = _reactExports$useStat72[1];
          var _reactExports$useStat73 = reactExports.useState(false),
            _reactExports$useStat74 = _slicedToArray(_reactExports$useStat73, 2),
            isShopUploading = _reactExports$useStat74[0],
            setIsShopUploading = _reactExports$useStat74[1];
          var _reactExports$useStat75 = reactExports.useState(false),
            _reactExports$useStat76 = _slicedToArray(_reactExports$useStat75, 2),
            isSavingShopToFirestore = _reactExports$useStat76[0],
            setIsSavingShopToFirestore = _reactExports$useStat76[1];
          var _reactExports$useStat77 = reactExports.useState(null),
            _reactExports$useStat78 = _slicedToArray(_reactExports$useStat77, 2),
            deletingShopId = _reactExports$useStat78[0],
            setDeletingShopId = _reactExports$useStat78[1];
          var _reactExports$useStat79 = reactExports.useState(null),
            _reactExports$useStat80 = _slicedToArray(_reactExports$useStat79, 2),
            shopStatusToast = _reactExports$useStat80[0],
            setShopStatusToast = _reactExports$useStat80[1];
          var _reactExports$useStat81 = reactExports.useState(null),
            _reactExports$useStat82 = _slicedToArray(_reactExports$useStat81, 2),
            editingStandingTeam = _reactExports$useStat82[0],
            setEditingStandingTeam = _reactExports$useStat82[1];
          var _reactExports$useStat83 = reactExports.useState({
              played: 0,
              won: 0,
              drawn: 0,
              lost: 0,
              goalsFor: 0,
              goalsAgainst: 0,
              points: 0
            }),
            _reactExports$useStat84 = _slicedToArray(_reactExports$useStat83, 2),
            standingFormData = _reactExports$useStat84[0],
            setStandingFormData = _reactExports$useStat84[1];
          var openEditStanding = function openEditStanding(team) {
            setEditingStandingTeam(team);
            setStandingFormData({
              played: team.played,
              won: team.won,
              drawn: team.drawn,
              lost: team.lost,
              goalsFor: team.goalsFor,
              goalsAgainst: team.goalsAgainst,
              points: team.points
            });
          };
          var handleSaveStanding = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(e) {
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    e.preventDefault();
                    if (editingStandingTeam) {
                      _context7.n = 1;
                      break;
                    }
                    return _context7.a(2);
                  case 1:
                    _context7.n = 2;
                    return updateStanding(editingStandingTeam.teamId, {
                      played: Math.max(0, Number(standingFormData.played)),
                      won: Math.max(0, Number(standingFormData.won)),
                      drawn: Math.max(0, Number(standingFormData.drawn)),
                      lost: Math.max(0, Number(standingFormData.lost)),
                      goalsFor: Math.max(0, Number(standingFormData.goalsFor)),
                      goalsAgainst: Math.max(0, Number(standingFormData.goalsAgainst)),
                      points: Math.max(0, Number(standingFormData.points))
                    });
                  case 2:
                    setEditingStandingTeam(null);
                  case 3:
                    return _context7.a(2);
                }
              }, _callee7);
            }));
            return function handleSaveStanding(_x9) {
              return _ref7.apply(this, arguments);
            };
          }();
          var processImageFileToDataUrl = function processImageFileToDataUrl(file) {
            var maxDim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1200;
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onload = function (readerEvent) {
                var _readerEvent$target6;
                var img = new Image();
                img.onload = function () {
                  var width = img.width,
                    height = img.height;
                  if (width > maxDim || height > maxDim) {
                    if (width > height) {
                      height = Math.round(height * maxDim / width);
                      width = maxDim;
                    } else {
                      width = Math.round(width * maxDim / height);
                      height = maxDim;
                    }
                  }
                  var canvas = document.createElement("canvas");
                  canvas.width = width;
                  canvas.height = height;
                  var ctx = canvas.getContext("2d");
                  if (!ctx) {
                    var _readerEvent$target4;
                    resolve((_readerEvent$target4 = readerEvent.target) === null || _readerEvent$target4 === void 0 ? void 0 : _readerEvent$target4.result);
                    return;
                  }
                  ctx.drawImage(img, 0, 0, width, height);
                  var compressedDataUrl = canvas.toDataURL("image/jpeg", 0.88);
                  resolve(compressedDataUrl);
                };
                img.onerror = function () {
                  var _readerEvent$target5;
                  return resolve((_readerEvent$target5 = readerEvent.target) === null || _readerEvent$target5 === void 0 ? void 0 : _readerEvent$target5.result);
                };
                img.src = (_readerEvent$target6 = readerEvent.target) === null || _readerEvent$target6 === void 0 ? void 0 : _readerEvent$target6.result;
              };
              reader.onerror = reject;
              reader.readAsDataURL(file);
            });
          };
          var handleShopImageFileUpload = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e) {
              var _e$target$files2;
              var file, dataUrl, _t7;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.p = _context8.n) {
                  case 0:
                    file = (_e$target$files2 = e.target.files) === null || _e$target$files2 === void 0 ? void 0 : _e$target$files2[0];
                    if (!file) {
                      _context8.n = 6;
                      break;
                    }
                    if (!(file.size > 15 * 1024 * 1024)) {
                      _context8.n = 1;
                      break;
                    }
                    setShopUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
                    return _context8.a(2);
                  case 1:
                    setShopUploadError(null);
                    setIsShopUploading(true);
                    _context8.p = 2;
                    _context8.n = 3;
                    return processImageFileToDataUrl(file);
                  case 3:
                    dataUrl = _context8.v;
                    setShopImageUrl(dataUrl);
                    _context8.n = 5;
                    break;
                  case 4:
                    _context8.p = 4;
                    _t7 = _context8.v;
                    setShopUploadError("Failed to read image file. Please try another image.");
                  case 5:
                    _context8.p = 5;
                    setIsShopUploading(false);
                    return _context8.f(5);
                  case 6:
                    return _context8.a(2);
                }
              }, _callee8, null, [[2, 4, 5, 6]]);
            }));
            return function handleShopImageFileUpload(_x0) {
              return _ref8.apply(this, arguments);
            };
          }();
          var handleShopImageDrop = /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e) {
              var _e$dataTransfer$files2;
              var file, dataUrl, _t8;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.p = _context9.n) {
                  case 0:
                    e.preventDefault();
                    file = (_e$dataTransfer$files2 = e.dataTransfer.files) === null || _e$dataTransfer$files2 === void 0 ? void 0 : _e$dataTransfer$files2[0];
                    if (!file) {
                      _context9.n = 6;
                      break;
                    }
                    if (!(file.size > 15 * 1024 * 1024)) {
                      _context9.n = 1;
                      break;
                    }
                    setShopUploadError("File size exceeds 15MB limit. Please select a smaller photo file.");
                    return _context9.a(2);
                  case 1:
                    setShopUploadError(null);
                    setIsShopUploading(true);
                    _context9.p = 2;
                    _context9.n = 3;
                    return processImageFileToDataUrl(file);
                  case 3:
                    dataUrl = _context9.v;
                    setShopImageUrl(dataUrl);
                    _context9.n = 5;
                    break;
                  case 4:
                    _context9.p = 4;
                    _t8 = _context9.v;
                    setShopUploadError("Failed to read image file. Please try another image.");
                  case 5:
                    _context9.p = 5;
                    setIsShopUploading(false);
                    return _context9.f(5);
                  case 6:
                    return _context9.a(2);
                }
              }, _callee9, null, [[2, 4, 5, 6]]);
            }));
            return function handleShopImageDrop(_x1) {
              return _ref9.apply(this, arguments);
            };
          }();
          var _reactExports$useStat85 = reactExports.useState(""),
            _reactExports$useStat86 = _slicedToArray(_reactExports$useStat85, 2),
            memberSearch = _reactExports$useStat86[0],
            setMemberSearch = _reactExports$useStat86[1];
          var _reactExports$useStat87 = reactExports.useState("ALL"),
            _reactExports$useStat88 = _slicedToArray(_reactExports$useStat87, 2),
            memberStatusFilter = _reactExports$useStat88[0],
            setMemberStatusFilter = _reactExports$useStat88[1];
          var _reactExports$useStat89 = reactExports.useState(false),
            _reactExports$useStat90 = _slicedToArray(_reactExports$useStat89, 2),
            isNewsModalOpen = _reactExports$useStat90[0],
            setIsNewsModalOpen = _reactExports$useStat90[1];
          var _reactExports$useStat91 = reactExports.useState(null),
            _reactExports$useStat92 = _slicedToArray(_reactExports$useStat91, 2),
            editingArticleId = _reactExports$useStat92[0],
            setEditingArticleId = _reactExports$useStat92[1];
          var _reactExports$useStat93 = reactExports.useState(""),
            _reactExports$useStat94 = _slicedToArray(_reactExports$useStat93, 2),
            newsTitleEn = _reactExports$useStat94[0],
            setNewsTitleEn = _reactExports$useStat94[1];
          var _reactExports$useStat95 = reactExports.useState(""),
            _reactExports$useStat96 = _slicedToArray(_reactExports$useStat95, 2),
            newsTitleAm = _reactExports$useStat96[0],
            setNewsTitleAm = _reactExports$useStat96[1];
          var _reactExports$useStat97 = reactExports.useState(""),
            _reactExports$useStat98 = _slicedToArray(_reactExports$useStat97, 2),
            newsTitleOm = _reactExports$useStat98[0],
            setNewsTitleOm = _reactExports$useStat98[1];
          var _reactExports$useStat99 = reactExports.useState(""),
            _reactExports$useStat100 = _slicedToArray(_reactExports$useStat99, 2),
            newsSummaryEn = _reactExports$useStat100[0],
            setNewsSummaryEn = _reactExports$useStat100[1];
          var _reactExports$useStat101 = reactExports.useState(""),
            _reactExports$useStat102 = _slicedToArray(_reactExports$useStat101, 2),
            newsSummaryAm = _reactExports$useStat102[0],
            setNewsSummaryAm = _reactExports$useStat102[1];
          var _reactExports$useStat103 = reactExports.useState(""),
            _reactExports$useStat104 = _slicedToArray(_reactExports$useStat103, 2),
            newsSummaryOm = _reactExports$useStat104[0],
            setNewsSummaryOm = _reactExports$useStat104[1];
          var _reactExports$useStat105 = reactExports.useState(""),
            _reactExports$useStat106 = _slicedToArray(_reactExports$useStat105, 2),
            newsContentEn = _reactExports$useStat106[0],
            setNewsContentEn = _reactExports$useStat106[1];
          var _reactExports$useStat107 = reactExports.useState("CLUB_NEWS"),
            _reactExports$useStat108 = _slicedToArray(_reactExports$useStat107, 2),
            newsCategory = _reactExports$useStat108[0],
            setNewsCategory = _reactExports$useStat108[1];
          var _reactExports$useStat109 = reactExports.useState(""),
            _reactExports$useStat110 = _slicedToArray(_reactExports$useStat109, 2),
            newsImageUrl = _reactExports$useStat110[0],
            setNewsImageUrl = _reactExports$useStat110[1];
          var _reactExports$useStat111 = reactExports.useState("url"),
            _reactExports$useStat112 = _slicedToArray(_reactExports$useStat111, 2),
            imageSourceMode = _reactExports$useStat112[0],
            setImageSourceMode = _reactExports$useStat112[1];
          var _reactExports$useStat113 = reactExports.useState(null),
            _reactExports$useStat114 = _slicedToArray(_reactExports$useStat113, 2),
            newsUploadError = _reactExports$useStat114[0],
            setNewsUploadError = _reactExports$useStat114[1];
          var _reactExports$useStat115 = reactExports.useState(false),
            _reactExports$useStat116 = _slicedToArray(_reactExports$useStat115, 2),
            isConfirmResetOpen = _reactExports$useStat116[0],
            setIsConfirmResetOpen = _reactExports$useStat116[1];
          var handleImageFileUpload = function handleImageFileUpload(e) {
            var _e$target$files3;
            var file = (_e$target$files3 = e.target.files) === null || _e$target$files3 === void 0 ? void 0 : _e$target$files3[0];
            if (file) {
              if (file.size > 5 * 1024 * 1024) {
                setNewsUploadError("File size exceeds 5MB limit. Please select a smaller photo file.");
                return;
              }
              setNewsUploadError(null);
              var reader = new FileReader();
              reader.onload = function (loadEvent) {
                var _loadEvent$target;
                if ((_loadEvent$target = loadEvent.target) !== null && _loadEvent$target !== void 0 && _loadEvent$target.result) {
                  setNewsImageUrl(loadEvent.target.result);
                }
              };
              reader.readAsDataURL(file);
            }
          };
          var _reactExports$useStat117 = reactExports.useState(false),
            _reactExports$useStat118 = _slicedToArray(_reactExports$useStat117, 2),
            isMatchModalOpen = _reactExports$useStat118[0],
            setIsMatchModalOpen = _reactExports$useStat118[1];
          var _reactExports$useStat119 = reactExports.useState(null),
            _reactExports$useStat120 = _slicedToArray(_reactExports$useStat119, 2),
            editingMatchId = _reactExports$useStat120[0],
            setEditingMatchId = _reactExports$useStat120[1];
          var _reactExports$useStat121 = reactExports.useState(""),
            _reactExports$useStat122 = _slicedToArray(_reactExports$useStat121, 2),
            matchDate = _reactExports$useStat122[0],
            setMatchDate = _reactExports$useStat122[1];
          var _reactExports$useStat123 = reactExports.useState("15:00"),
            _reactExports$useStat124 = _slicedToArray(_reactExports$useStat123, 2),
            matchTime = _reactExports$useStat124[0],
            setMatchTime = _reactExports$useStat124[1];
          var _reactExports$useStat125 = reactExports.useState("Halaba Stadium, Halaba Kulito"),
            _reactExports$useStat126 = _slicedToArray(_reactExports$useStat125, 2),
            matchVenue = _reactExports$useStat126[0],
            setMatchVenue = _reactExports$useStat126[1];
          var _reactExports$useStat127 = reactExports.useState("HALABA City FC"),
            _reactExports$useStat128 = _slicedToArray(_reactExports$useStat127, 2),
            matchHomeTeam = _reactExports$useStat128[0],
            setMatchHomeTeam = _reactExports$useStat128[1];
          var _reactExports$useStat129 = reactExports.useState(""),
            _reactExports$useStat130 = _slicedToArray(_reactExports$useStat129, 2),
            matchAwayTeam = _reactExports$useStat130[0],
            setMatchAwayTeam = _reactExports$useStat130[1];
          var _reactExports$useStat131 = reactExports.useState("ETHIOPIAN_HIGHER_LEAGUE"),
            _reactExports$useStat132 = _slicedToArray(_reactExports$useStat131, 2),
            matchComp = _reactExports$useStat132[0],
            setMatchComp = _reactExports$useStat132[1];
          var _reactExports$useStat133 = reactExports.useState("UPCOMING"),
            _reactExports$useStat134 = _slicedToArray(_reactExports$useStat133, 2),
            matchStatus = _reactExports$useStat134[0],
            setMatchStatus = _reactExports$useStat134[1];
          var _reactExports$useStat135 = reactExports.useState(0),
            _reactExports$useStat136 = _slicedToArray(_reactExports$useStat135, 2),
            homeScore = _reactExports$useStat136[0],
            setHomeScore = _reactExports$useStat136[1];
          var _reactExports$useStat137 = reactExports.useState(0),
            _reactExports$useStat138 = _slicedToArray(_reactExports$useStat137, 2),
            awayScore = _reactExports$useStat138[0],
            setAwayScore = _reactExports$useStat138[1];
          var _reactExports$useStat139 = reactExports.useState(""),
            _reactExports$useStat140 = _slicedToArray(_reactExports$useStat139, 2),
            newPlayerName = _reactExports$useStat140[0],
            setNewPlayerName = _reactExports$useStat140[1];
          var _reactExports$useStat141 = reactExports.useState(10),
            _reactExports$useStat142 = _slicedToArray(_reactExports$useStat141, 2),
            newPlayerNumber = _reactExports$useStat142[0],
            setNewPlayerNumber = _reactExports$useStat142[1];
          var _reactExports$useStat143 = reactExports.useState("Midfielder"),
            _reactExports$useStat144 = _slicedToArray(_reactExports$useStat143, 2),
            newPlayerPos = _reactExports$useStat144[0],
            setNewPlayerPos = _reactExports$useStat144[1];
          var handleLogin = /*#__PURE__*/function () {
            var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
              var res, _t9;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    e.preventDefault();
                    setLoginError(null);
                    if (!(!emailInput.trim() || !passwordInput)) {
                      _context0.n = 1;
                      break;
                    }
                    setLoginError("Please enter both your administrator email and password.");
                    return _context0.a(2);
                  case 1:
                    setIsLoggingIn(true);
                    _context0.p = 2;
                    _context0.n = 3;
                    return loginAdmin(emailInput.trim(), passwordInput);
                  case 3:
                    res = _context0.v;
                    if (!res.success) {
                      setLoginError(res.error || "Invalid email or password.");
                    } else {
                      setLoginError(null);
                      setPasswordInput("");
                    }
                    _context0.n = 5;
                    break;
                  case 4:
                    _context0.p = 4;
                    _t9 = _context0.v;
                    setLoginError((_t9 === null || _t9 === void 0 ? void 0 : _t9.message) || "Authentication error. Please check your credentials.");
                  case 5:
                    _context0.p = 5;
                    setIsLoggingIn(false);
                    return _context0.f(5);
                  case 6:
                    return _context0.a(2);
                }
              }, _callee0, null, [[2, 4, 5, 6]]);
            }));
            return function handleLogin(_x10) {
              return _ref0.apply(this, arguments);
            };
          }();
          var handleLogout = /*#__PURE__*/function () {
            var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.p = _context1.n) {
                  case 0:
                    setIsLoggingOut(true);
                    _context1.p = 1;
                    _context1.n = 2;
                    return logoutAdmin();
                  case 2:
                    setEmailInput("");
                    setPasswordInput("");
                    setLoginError(null);
                  case 3:
                    _context1.p = 3;
                    setIsLoggingOut(false);
                    return _context1.f(3);
                  case 4:
                    return _context1.a(2);
                }
              }, _callee1, null, [[1,, 3, 4]]);
            }));
            return function handleLogout() {
              return _ref1.apply(this, arguments);
            };
          }();
          var handleExportCSV = function handleExportCSV() {
            var headers = ["Reference", "FullName", "DOB", "Gender", "Phone", "Email", "CityRegion", "Tier", "Status", "RegisteredAt"];
            var rows = memberships.map(function (m) {
              return [m.referenceNumber, "\"".concat(m.fullName, "\""), m.dateOfBirth, m.gender || "", m.phone, m.email || "", "\"".concat(m.cityOrRegion, "\""), m.membershipType, m.status, m.registeredAt];
            });
            var csvContent = "data:text/csv;charset=utf-8," + [headers.join(",")].concat(_toConsumableArray(rows.map(function (r) {
              return r.join(",");
            }))).join("\n");
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "halaba_fc_memberships_".concat((/* @__PURE__ */new Date()).toISOString().slice(0, 10), ".csv"));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };
          var handleSaveArticle = /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(e) {
              var _t0;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.p = _context10.n) {
                  case 0:
                    e.preventDefault();
                    if (newsTitleEn.trim()) {
                      _context10.n = 1;
                      break;
                    }
                    return _context10.a(2);
                  case 1:
                    _context10.p = 1;
                    if (!editingArticleId) {
                      _context10.n = 3;
                      break;
                    }
                    _context10.n = 2;
                    return updateNewsArticle(editingArticleId, {
                      title: {
                        en: newsTitleEn,
                        am: newsTitleAm || newsTitleEn,
                        om: newsTitleOm || newsTitleEn
                      },
                      summary: {
                        en: newsSummaryEn,
                        am: newsSummaryAm || newsSummaryEn,
                        om: newsSummaryOm || newsSummaryEn
                      },
                      content: {
                        en: newsContentEn,
                        am: newsContentEn,
                        om: newsContentEn
                      },
                      category: newsCategory,
                      imageUrl: newsImageUrl || ClubImages.newsCoachInterview
                    });
                  case 2:
                    _context10.n = 4;
                    break;
                  case 3:
                    _context10.n = 4;
                    return addNewsArticle({
                      title: {
                        en: newsTitleEn,
                        am: newsTitleAm || newsTitleEn,
                        om: newsTitleOm || newsTitleEn
                      },
                      summary: {
                        en: newsSummaryEn,
                        am: newsSummaryAm || newsSummaryEn,
                        om: newsSummaryOm || newsSummaryEn
                      },
                      content: {
                        en: newsContentEn,
                        am: newsContentEn,
                        om: newsContentEn
                      },
                      category: newsCategory,
                      date: (/* @__PURE__ */new Date()).toISOString().slice(0, 10),
                      author: "Club Administration",
                      imageUrl: newsImageUrl || ClubImages.newsCoachInterview,
                      readTime: "3 min read"
                    });
                  case 4:
                    setIsNewsModalOpen(false);
                    setEditingArticleId(null);
                    setNewsTitleEn("");
                    setNewsTitleAm("");
                    setNewsTitleOm("");
                    setNewsSummaryEn("");
                    setNewsSummaryAm("");
                    setNewsSummaryOm("");
                    setNewsContentEn("");
                    setNewsImageUrl("");
                    _context10.n = 6;
                    break;
                  case 5:
                    _context10.p = 5;
                    _t0 = _context10.v;
                    console.error("Error saving article: ", _t0);
                  case 6:
                    return _context10.a(2);
                }
              }, _callee10, null, [[1, 5]]);
            }));
            return function handleSaveArticle(_x11) {
              return _ref10.apply(this, arguments);
            };
          }();
          var handleSaveMatch = function handleSaveMatch(e) {
            e.preventDefault();
            if (!matchAwayTeam.trim() || !matchDate) return;
            var isHome = matchHomeTeam.toLowerCase().includes("halaba");
            if (editingMatchId) {
              var matchUpdates = {
                date: matchDate,
                kickoffTime: matchTime,
                venue: matchVenue,
                status: matchStatus,
                homeTeam: {
                  id: isHome ? "halaba" : "opponent",
                  name: matchHomeTeam,
                  isHalaba: isHome
                },
                awayTeam: {
                  id: !isHome ? "halaba" : "opponent",
                  name: matchAwayTeam,
                  isHalaba: !isHome
                },
                competition: matchComp,
                competitionName: matchComp.replace(/_/g, " ")
              };
              if (matchStatus === "FINISHED" || matchStatus === "LIVE") {
                matchUpdates.score = {
                  home: Number(homeScore),
                  away: Number(awayScore)
                };
              }
              updateMatch(editingMatchId, matchUpdates);
            } else {
              addMatch({
                competition: matchComp,
                competitionName: matchComp.replace(/_/g, " "),
                date: matchDate,
                kickoffTime: matchTime,
                venue: matchVenue,
                homeTeam: {
                  id: isHome ? "halaba" : "opponent",
                  name: matchHomeTeam,
                  isHalaba: isHome
                },
                awayTeam: {
                  id: !isHome ? "halaba" : "opponent",
                  name: matchAwayTeam,
                  isHalaba: !isHome
                },
                status: matchStatus,
                score: matchStatus === "FINISHED" || matchStatus === "LIVE" ? {
                  home: Number(homeScore),
                  away: Number(awayScore)
                } : void 0,
                round: "Official League Match"
              });
            }
            setIsMatchModalOpen(false);
            setEditingMatchId(null);
          };
          var handleAddPlayer = function handleAddPlayer(e) {
            e.preventDefault();
            if (!newPlayerName.trim()) return;
            addPlayer({
              name: newPlayerName.trim(),
              number: Number(newPlayerNumber),
              position: newPlayerPos,
              nationality: "Ethiopian",
              birthYear: 2002,
              appearances: 0,
              goals: 0
            });
            setNewPlayerName("");
            setNewPlayerNumber(newPlayerNumber + 1);
          };
          var handleOpenAddShopItem = function handleOpenAddShopItem() {
            setEditingShopItemId(null);
            setShopNameEn("");
            setShopNameAm("");
            setShopNameOm("");
            setShopDescEn("");
            setShopDescAm("");
            setShopDescOm("");
            setShopPrice(1800);
            setShopImageUrl("https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80");
            setShopSizes(["S", "M", "L", "XL"]);
            setShopCategory("JERSEY");
            setShopInStock(true);
            setShopFeatured(false);
            setShopUploadError(null);
            setIsShopUploading(false);
            setIsShopModalOpen(true);
          };
          var handleOpenEditShopItem = function handleOpenEditShopItem(item) {
            setEditingShopItemId(item.id);
            var nEn = _typeof(item.name) === "object" ? item.name.en : item.name;
            var nAm = _typeof(item.name) === "object" ? item.name.am : item.name;
            var nOm = _typeof(item.name) === "object" ? item.name.om : item.name;
            var dEn = _typeof(item.description) === "object" ? item.description.en : item.description;
            var dAm = _typeof(item.description) === "object" ? item.description.am : item.description;
            var dOm = _typeof(item.description) === "object" ? item.description.om : item.description;
            setShopNameEn(nEn);
            setShopNameAm(nAm);
            setShopNameOm(nOm);
            setShopDescEn(dEn);
            setShopDescAm(dAm);
            setShopDescOm(dOm);
            setShopPrice(item.price);
            setShopImageUrl(item.imageUrl);
            setShopSizes(item.availableSizes || ["M", "L"]);
            setShopCategory(item.category || "JERSEY");
            setShopInStock(item.inStock !== false);
            setShopFeatured(Boolean(item.featured));
            setShopUploadError(null);
            setIsShopUploading(false);
            setIsShopModalOpen(true);
          };
          var handleSaveShopItem = /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(e) {
              var payload, _t1;
              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.p = _context11.n) {
                  case 0:
                    e.preventDefault();
                    if (shopNameEn.trim()) {
                      _context11.n = 1;
                      break;
                    }
                    return _context11.a(2);
                  case 1:
                    setIsSavingShopToFirestore(true);
                    setShopUploadError(null);
                    payload = {
                      name: {
                        en: shopNameEn.trim(),
                        am: shopNameAm.trim() || shopNameEn.trim(),
                        om: shopNameOm.trim() || shopNameEn.trim()
                      },
                      description: {
                        en: shopDescEn.trim(),
                        am: shopDescAm.trim() || shopDescEn.trim(),
                        om: shopDescOm.trim() || shopDescEn.trim()
                      },
                      price: Number(shopPrice) || 1e3,
                      imageUrl: shopImageUrl.trim() || "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80",
                      availableSizes: shopSizes.length > 0 ? shopSizes : ["S", "M", "L", "XL"],
                      category: shopCategory,
                      inStock: shopInStock,
                      featured: shopFeatured
                    };
                    _context11.p = 2;
                    if (!editingShopItemId) {
                      _context11.n = 4;
                      break;
                    }
                    _context11.n = 3;
                    return updateShopItem(editingShopItemId, payload);
                  case 3:
                    setShopStatusToast({
                      message: "Product \"".concat(payload.name.en, "\" successfully updated in Firebase Firestore!"),
                      type: "success"
                    });
                    _context11.n = 6;
                    break;
                  case 4:
                    _context11.n = 5;
                    return addShopItem(payload);
                  case 5:
                    setShopStatusToast({
                      message: "\"".concat(payload.name.en, "\" published to Firebase Firestore and is live on the store!"),
                      type: "success"
                    });
                  case 6:
                    setTimeout(function () {
                      return setShopStatusToast(null);
                    }, 4500);
                    setIsShopModalOpen(false);
                    setEditingShopItemId(null);
                    _context11.n = 8;
                    break;
                  case 7:
                    _context11.p = 7;
                    _t1 = _context11.v;
                    console.error("Firestore shop error:", _t1);
                    setShopUploadError((_t1 === null || _t1 === void 0 ? void 0 : _t1.message) || "Failed to persist product to Firebase Firestore.");
                  case 8:
                    _context11.p = 8;
                    setIsSavingShopToFirestore(false);
                    return _context11.f(8);
                  case 9:
                    return _context11.a(2);
                }
              }, _callee11, null, [[2, 7, 8, 9]]);
            }));
            return function handleSaveShopItem(_x12) {
              return _ref11.apply(this, arguments);
            };
          }();
          var handleDeleteShopItem = /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(id, name) {
              var _t10;
              return _regenerator().w(function (_context12) {
                while (1) switch (_context12.p = _context12.n) {
                  case 0:
                    if (window.confirm("Are you sure you want to permanently delete \"".concat(name, "\" from Firebase Firestore?"))) {
                      _context12.n = 1;
                      break;
                    }
                    return _context12.a(2);
                  case 1:
                    setDeletingShopId(id);
                    _context12.p = 2;
                    _context12.n = 3;
                    return deleteShopItem(id);
                  case 3:
                    setShopStatusToast({
                      message: "Product \"".concat(name, "\" was permanently removed from Firebase Firestore."),
                      type: "success"
                    });
                    setTimeout(function () {
                      return setShopStatusToast(null);
                    }, 4e3);
                    _context12.n = 5;
                    break;
                  case 4:
                    _context12.p = 4;
                    _t10 = _context12.v;
                    setShopStatusToast({
                      message: (_t10 === null || _t10 === void 0 ? void 0 : _t10.message) || "Failed to delete product from Firestore.",
                      type: "error"
                    });
                  case 5:
                    _context12.p = 5;
                    setDeletingShopId(null);
                    return _context12.f(5);
                  case 6:
                    return _context12.a(2);
                }
              }, _callee12, null, [[2, 4, 5, 6]]);
            }));
            return function handleDeleteShopItem(_x13, _x14) {
              return _ref12.apply(this, arguments);
            };
          }();
          var handleResetCatalog = /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
              var _t11;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.p = _context13.n) {
                  case 0:
                    if (window.confirm("This will synchronize and restore all official Halaba jerseys and merchandise in Firebase Firestore. Continue?")) {
                      _context13.n = 1;
                      break;
                    }
                    return _context13.a(2);
                  case 1:
                    _context13.p = 1;
                    _context13.n = 2;
                    return resetShopItems();
                  case 2:
                    setShopStatusToast({
                      message: "Official Halaba merchandise catalog restored and synced in Firebase Firestore.",
                      type: "success"
                    });
                    setTimeout(function () {
                      return setShopStatusToast(null);
                    }, 4500);
                    _context13.n = 4;
                    break;
                  case 3:
                    _context13.p = 3;
                    _t11 = _context13.v;
                    setShopStatusToast({
                      message: (_t11 === null || _t11 === void 0 ? void 0 : _t11.message) || "Failed to restore default catalog.",
                      type: "error"
                    });
                  case 4:
                    return _context13.a(2);
                }
              }, _callee13, null, [[1, 3]]);
            }));
            return function handleResetCatalog() {
              return _ref13.apply(this, arguments);
            };
          }();
          var handleToggleShopSize = function handleToggleShopSize(size) {
            if (shopSizes.includes(size)) {
              if (shopSizes.length > 1) {
                setShopSizes(shopSizes.filter(function (s) {
                  return s !== size;
                }));
              }
            } else {
              setShopSizes([].concat(_toConsumableArray(shopSizes), [size]));
            }
          };
          if (isAuthChecking) {
            return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "min-h-[60vh] flex flex-col items-center justify-center space-y-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "relative",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                  size: 72,
                  showGlow: true
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 text-emerald-400 font-sports font-bold text-xs uppercase tracking-widest",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                  className: "w-4 h-4 animate-spin text-emerald-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Verifying Firebase Authentication Session..."
                })]
              })]
            });
          }
          if (!isAdminLoggedIn) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "max-w-md mx-auto px-4 py-16",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex justify-center",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                    size: 72,
                    showGlow: true
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-center space-y-1",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider mb-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                      className: "w-3 h-3"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "ይፋዊ የአስተዳዳሪ ፖርታል" : "Official Administrator Portal"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                    className: "font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-wider",
                    children: language === "am" ? "የአስተዳዳሪ መግቢያ" : "Admin Sign In"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-400 text-xs",
                    children: language === "am" ? "ለተፈቀደላቸው የሀላባ ከተማ እግር ኳስ ክለብ አመራሮች ብቻ የተፈቀደ።" : "Authorized HALABA City FC management and club IT personnel only."
                  })]
                }), loginError && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-3.5 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-start gap-2.5 shadow-sm",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TriangleAlert, {
                    className: "w-4 h-4 text-red-400 shrink-0 mt-0.5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "leading-relaxed",
                    children: loginError
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleLogin,
                  noValidate: true,
                  className: "space-y-4 text-left",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5",
                      children: language === "am" ? "የአስተዳዳሪ ኢሜይል *" : "Admin Email *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "email",
                        value: emailInput,
                        onChange: function onChange(e) {
                          return setEmailInput(e.target.value.trim());
                        },
                        placeholder: "admin@halabafc.et",
                        required: true,
                        autoComplete: "email",
                        className: "w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Mail, {
                        className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-3"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5",
                      children: language === "am" ? "የይለፍ ቃል *" : "Password *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "relative",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "password",
                        value: passwordInput,
                        onChange: function onChange(e) {
                          return setPasswordInput(e.target.value);
                        },
                        placeholder: "••••••••",
                        required: true,
                        autoComplete: "current-password",
                        className: "w-full pl-10 pr-4 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 placeholder-neutral-600 transition-colors"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                        className: "w-4 h-4 text-neutral-500 absolute left-3.5 top-3"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "submit",
                    disabled: isLoggingIn,
                    className: "w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider font-sports shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer",
                    style: {
                      backgroundColor: "#dc2626",
                      backgroundImage: "linear-gradient(to right, #dc2626, #ef4444)",
                      color: "#ffffff"
                    },
                    children: isLoggingIn ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                        className: "w-4 h-4 animate-spin"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "በፈርቤዝ በመግባት ላይ..." : "Signing In with Firebase..."
                      })]
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Lock, {
                        className: "w-4 h-4"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: language === "am" ? "ወደ ዳሽቦርድ ግባ" : "Sign In to Dashboard"
                      })]
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "pt-4 border-t border-neutral-800/80 space-y-2 text-center",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-center gap-1.5 text-neutral-400 text-xxs font-medium",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                      className: "w-3.5 h-3.5 text-emerald-400"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: language === "am" ? "በፈርቤዝ የተጠበቀ • አስተዳዳሪ ብቻ" : "Firebase Auth Protected • Login-Only Workflow"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-neutral-500 text-xxs",
                    children: language === "am" ? "የይለፍ ቃል ለመቀየር ወይም አዲስ መለያ ለማግኘት የክለቡን አስተዳደር ያነጋግሩ።" : "Self-service registration and password reset are strictly disabled. Contact club administration for access credentials."
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "button",
                    onClick: function onClick() {
                      return setCurrentPage("home");
                    },
                    className: "text-neutral-400 hover:text-white text-xs underline underline-offset-4 pt-1 transition-colors cursor-pointer",
                    children: language === "am" ? "ወደ ክለቡ ድረ-ገጽ ተመለስ" : "Return to Public Club Website"
                  })]
                })]
              })
            });
          }
          var filteredMemberships = memberships.filter(function (m) {
            if (memberStatusFilter !== "ALL" && m.status !== memberStatusFilter) return false;
            if (memberSearch.trim() !== "") {
              var q = memberSearch.toLowerCase();
              return m.fullName.toLowerCase().includes(q) || m.referenceNumber.toLowerCase().includes(q) || m.phone.includes(q);
            }
            return true;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(HalabaCrest, {
                  size: 48
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2 mb-1.5",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xxs font-bold uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                      }), "Firebase Authenticated Session"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs font-sports font-semibold text-neutral-300",
                      children: (adminUser === null || adminUser === void 0 ? void 0 : adminUser.email) || adminUsername
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                    className: "font-sports font-black text-2xl sm:text-4xl text-white uppercase tracking-wider",
                    children: t.adminTitle
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  onClick: function onClick() {
                    return setCurrentPage("home");
                  },
                  className: "px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports transition-colors cursor-pointer",
                  children: language === "am" ? "የክለቡ ድረ-ገጽ" : "Club Website"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: handleLogout,
                  disabled: isLoggingOut,
                  className: "px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-700/60 text-red-200 hover:text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 shadow-lg shadow-red-950/40 transition-all hover:scale-[1.02] disabled:opacity-50 cursor-pointer",
                  title: language === "am" ? "ከአስተዳዳሪ ውጣ" : "Sign out of Firebase Admin",
                  children: [isLoggingOut ? /* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                    className: "w-4 h-4 animate-spin text-red-400"
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx(LogOut, {
                    className: "w-4 h-4 text-red-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: language === "am" ? "ውጣ" : "Log Out"
                  })]
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-3",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShieldCheck, {
                className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "space-y-0.5",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                  className: "block text-white font-sports font-bold tracking-wide uppercase",
                  children: language === "am" ? "የፈርቤዝ ማረጋገጫ እና ቋሚ የክላውድ ዳታቤዝ ነቅቷል" : "Firebase Authentication & Firestore Persistent Storage Active"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-neutral-400",
                  children: language === "am" ? "በሱቁ፣ በዜናዎች እና በጨዋታዎች ላይ የሚደረጉ ለውጦች በሙሉ በቀጥታ በፈርቤዝ ይቀመጣሉ።" : "All additions, updates, and removals of shop merchandise, news, and club schedules persist permanently in Firebase Cloud and synchronize in real-time."
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-400 font-bold uppercase block",
                  children: language === "am" ? "የተመዘገቡ አባላት" : "Registered Members"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-sports font-black text-3xl text-emerald-400 mt-1 block",
                  children: memberships.length
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xxs text-neutral-500",
                  children: language === "am" ? "የደጋፊዎች ምዝገባዎች" : "Live fan registrations"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-400 font-bold uppercase block",
                  children: language === "am" ? "የዜና መጣጥፎች" : "News Articles"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-sports font-black text-3xl text-white mt-1 block",
                  children: news.length
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xxs text-neutral-500",
                  children: language === "am" ? "የታተሙ ዜናዎች" : "Published stories"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-400 font-bold uppercase block",
                  children: language === "am" ? "የተያዙ ጨዋታዎች" : "Matches Scheduled"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-sports font-black text-3xl text-amber-400 mt-1 block",
                  children: matches.length
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xxs text-neutral-500",
                  children: language === "am" ? "የተደረጉና የሚደረጉ" : "Fixtures & completed"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-4 rounded-xl bg-neutral-900 border border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-400 font-bold uppercase block",
                  children: language === "am" ? "የተጫዋቾች ስብስብ" : "Squad Roster"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "font-sports font-black text-3xl text-red-400 mt-1 block",
                  children: players.length
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xxs text-neutral-500",
                  children: language === "am" ? "የዋናው ቡድን ተጫዋቾች" : "First team players"
                })]
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "flex flex-wrap gap-2 border-b border-neutral-800 pb-2",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("memberships");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "memberships" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Users, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  children: [t.adminTabMembers, " (", memberships.length, ")"]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("shop");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "shop" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                  className: "w-4 h-4 text-amber-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  children: [language === "am" ? "የማሊያ ሱቅና ልገሳ" : "Jersey Shop & Donations", " (", shopItems.length, ")"]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("news");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "news" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Newspaper, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  children: [t.adminTabNews, " (", news.length, ")"]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("fixtures");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "fixtures" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calendar, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t.adminTabFixtures
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("standings");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "standings" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Trophy, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t.adminTabStandings
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("squad");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "squad" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Users, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t.adminTabSquad
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("sponsors");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all cursor-pointer ".concat(adminTab === "sponsors" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Award, {
                  className: "w-4 h-4 text-amber-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                  children: [language === "am" ? "ስፖንሰሮችና ፖስተሮች" : "Sponsors & Posters", " (", sponsors.length, ")"]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("sync");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "sync" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Zap, {
                  className: "w-4 h-4 text-amber-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: "Auto-Update Engine"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                onClick: function onClick() {
                  return setAdminTab("settings");
                },
                className: "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all ".concat(adminTab === "settings" ? "bg-red-600 text-white shadow-md" : "bg-neutral-900 text-neutral-400 hover:text-white"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Settings, {
                  className: "w-4 h-4"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: t.adminTabSettings
                })]
              })]
            }), adminTab === "memberships" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: "Official Membership Applications"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-1",
                    children: "Verify supporter registrations, change statuses, and export database records."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: handleExportCSV,
                  className: "px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 self-start sm:self-auto transition-colors",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Download, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: t.exportCsv
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-2",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "relative w-full sm:w-72",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Search, {
                    className: "w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                    type: "text",
                    value: memberSearch,
                    onChange: function onChange(e) {
                      return setMemberSearch(e.target.value);
                    },
                    placeholder: "Search by name, ref, phone...",
                    className: "w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex items-center gap-2 w-full sm:w-auto",
                  children: ["ALL", "APPROVED", "PENDING", "REJECTED"].map(function (st) {
                    return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setMemberStatusFilter(st);
                      },
                      className: "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-sports transition-all ".concat(memberStatusFilter === st ? "bg-neutral-800 text-white border border-neutral-700" : "text-neutral-500 hover:text-neutral-300"),
                      children: st
                    }, st);
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "overflow-x-auto",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("table", {
                  className: "w-full text-left text-xs whitespace-nowrap",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                      className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Reference"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Full Name"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Phone"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Region"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Tier"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Payment"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Status"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3 text-right",
                        children: "Actions"
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                    className: "divide-y divide-neutral-800/60",
                    children: filteredMemberships.map(function (m) {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                        className: "hover:bg-neutral-800/40",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 font-mono font-bold text-amber-400",
                          children: m.referenceNumber
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 font-semibold text-white",
                          children: m.fullName
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 text-neutral-300 font-mono",
                          children: m.phone
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 text-neutral-400",
                          children: m.cityOrRegion
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "px-2 py-0.5 rounded text-xxs font-bold uppercase bg-neutral-950 text-neutral-200 border border-neutral-800",
                            children: m.membershipType
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 font-mono text-emerald-400 font-bold",
                          children: m.amountPaid ? "".concat(m.amountPaid, " ETB") : m.membershipType === "PREMIUM" ? "1000 ETB" : m.membershipType === "STANDARD" ? "500 ETB" : "200 ETB"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3",
                          children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "px-2 py-0.5 rounded text-xxs font-bold uppercase ".concat(m.status === "APPROVED" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : m.status === "PENDING" ? "bg-amber-950 text-amber-400 border border-amber-800" : "bg-red-950 text-red-400 border border-red-800"),
                            children: m.status
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("td", {
                          className: "py-3 px-3 text-right space-x-1.5",
                          children: [m.status !== "APPROVED" && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                            onClick: function onClick() {
                              return updateMembershipStatus(m.id, "APPROVED");
                            },
                            className: "px-2 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xxs font-bold uppercase",
                            children: "Approve"
                          }), m.status !== "REJECTED" && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                            onClick: function onClick() {
                              return updateMembershipStatus(m.id, "REJECTED");
                            },
                            className: "px-2 py-1 rounded bg-red-950 hover:bg-red-900 text-red-400 border border-red-800 text-xxs font-bold uppercase",
                            children: "Reject"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                            onClick: function onClick() {
                              return deleteMembership(m.id);
                            },
                            className: "p-1 rounded text-neutral-500 hover:text-red-400 transition-colors",
                            title: "Delete application",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                              className: "w-3.5 h-3.5"
                            })
                          })]
                        })]
                      }, m.id);
                    })
                  })]
                })
              })]
            }), adminTab === "shop" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2 mb-1.5",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950 border border-red-800/60 text-red-400 text-xxs font-bold uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                        className: "w-3 h-3"
                      }), "Store & Fund Administration"]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xxs font-bold uppercase tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: "Firestore Persistent Cloud Sync"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: "Jersey Shop & Supporter Contributions"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-0.5",
                    children: "All shop items, edits, and deletions persist directly in Firebase Firestore and synchronize in real-time for any site visitor."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2 self-start sm:self-auto",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: handleResetCatalog,
                    className: "px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-sports font-bold uppercase tracking-wider transition-colors",
                    title: "Restore and sync official default club products to Firebase Firestore",
                    children: "Sync Official Catalog"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: handleOpenAddShopItem,
                    className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 shadow-lg shadow-red-950/50 transition-colors",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Plus, {
                      className: "w-4 h-4"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "Add Product"
                    })]
                  })]
                })]
              }), shopStatusToast && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-3 rounded-xl border text-xs font-sports font-bold flex items-center gap-2.5 transition-all ".concat(shopStatusToast.type === "success" ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-300" : "bg-red-950/70 border-red-500/40 text-red-300"),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                  className: "w-4 h-4 shrink-0 text-emerald-400"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  children: shopStatusToast.message
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setShopSubTab("items");
                  },
                  className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "items" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
                  children: ["Merchandise Products (", shopItems.length, ")"]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setShopSubTab("orders");
                  },
                  className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "orders" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
                  children: ["Customer Delivery Orders (", shopOrders.length, ")"]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setShopSubTab("donations");
                  },
                  className: "px-4 py-1.5 rounded-lg text-xs font-sports font-bold uppercase tracking-wider transition-all ".concat(shopSubTab === "donations" ? "bg-neutral-800 text-white border border-neutral-700 shadow-sm" : "text-neutral-400 hover:text-white"),
                  children: ["Supporter Donations (", donations.length, ")"]
                })]
              }), shopSubTab === "items" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-4",
                children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: shopItems.map(function (item) {
                    var name = _typeof(item.name) === "object" ? item.name.en : item.name;
                    var desc = _typeof(item.description) === "object" ? item.description.en : item.description;
                    return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-4",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex gap-3",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                          src: item.imageUrl,
                          alt: name,
                          className: "w-20 h-20 object-cover rounded-xl bg-neutral-900 border border-neutral-800 shrink-0",
                          onError: function onError(e) {
                            e.target.src = "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80";
                          }
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xxs px-2 py-0.5 rounded bg-neutral-900 text-amber-400 font-sports font-bold uppercase",
                              children: item.category || "JERSEY"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xxs px-2 py-0.5 rounded font-bold uppercase ".concat(item.inStock ? "bg-emerald-950 text-emerald-400 border border-emerald-800/60" : "bg-red-950 text-red-400 border border-red-800/60"),
                              children: item.inStock ? "In Stock" : "Out of Stock"
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                            className: "font-sports font-bold text-base text-white truncate mt-1",
                            children: name
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "font-sports font-black text-lg text-emerald-400 block mt-0.5",
                            children: [item.price.toLocaleString(), " ETB"]
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xxs text-neutral-400 line-clamp-2",
                        children: desc
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-500 uppercase font-bold",
                            children: "Sizes:"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-300 font-mono font-bold",
                            children: item.availableSizes.join(", ")
                          })]
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                            onClick: function onClick() {
                              return handleOpenEditShopItem(item);
                            },
                            className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors",
                            title: "Edit Product",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx(SquarePen, {
                              className: "w-3.5 h-3.5"
                            })
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                            onClick: function onClick() {
                              return handleDeleteShopItem(item.id, name);
                            },
                            disabled: deletingShopId === item.id,
                            className: "p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-400 border border-red-800/60 transition-colors disabled:opacity-50",
                            title: "Delete Product from Firestore",
                            children: deletingShopId === item.id ? /* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                              className: "w-3.5 h-3.5 animate-spin"
                            }) : /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                              className: "w-3.5 h-3.5"
                            })
                          })]
                        })]
                      })]
                    }, item.id);
                  })
                })
              }), shopSubTab === "orders" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-4",
                children: shopOrders.length === 0 ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-center py-12 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                    className: "w-10 h-10 text-neutral-600 mx-auto"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-lg text-white uppercase",
                    children: "No Customer Orders Yet"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 max-w-sm mx-auto",
                    children: "When supporters purchase jerseys through the shop and complete Chapa payment, their delivery orders appear here in real-time."
                  })]
                }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "overflow-x-auto",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("table", {
                    className: "w-full text-left text-xs whitespace-nowrap",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                        className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Order Ref"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Customer"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Phone"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Product & Size"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Delivery Address"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Amount"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Status"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3 text-right",
                          children: "Actions"
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                      className: "divide-y divide-neutral-800/60",
                      children: shopOrders.map(function (ord) {
                        return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                          className: "hover:bg-neutral-800/30",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-mono font-bold text-amber-400",
                            children: ord.orderNumber
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-semibold text-white",
                            children: ord.fullName
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-mono text-neutral-300",
                            children: ord.phone
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("td", {
                            className: "py-3 px-3",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "font-medium text-white",
                              children: ord.itemName
                            }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                              className: "ml-1.5 px-1.5 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-amber-400 font-sports font-bold uppercase text-xxs",
                              children: ["Size ", ord.size]
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("td", {
                            className: "py-3 px-3 text-neutral-300 max-w-xs truncate",
                            children: [ord.streetAddress, ", ", ord.city]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("td", {
                            className: "py-3 px-3 font-sports font-black text-emerald-400",
                            children: [ord.amount.toLocaleString(), " ETB"]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider ".concat(ord.status === "DELIVERED" ? "bg-blue-950 text-blue-400 border border-blue-800" : ord.status === "PAID" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-amber-950 text-amber-400 border border-amber-800"),
                              children: ord.status
                            })
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 text-right",
                            children: ord.status !== "DELIVERED" ? /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              onClick: function onClick() {
                                return updateShopOrderStatus(ord.id, "DELIVERED");
                              },
                              className: "px-2.5 py-1 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 text-xxs font-bold uppercase tracking-wider font-sports transition-colors",
                              children: "Mark Delivered"
                            }) : /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-xxs text-neutral-500 font-semibold",
                              children: "Complete"
                            })
                          })]
                        }, ord.id);
                      })
                    })]
                  })
                })
              }), shopSubTab === "donations" && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-4",
                children: donations.length === 0 ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "text-center py-12 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Heart, {
                    className: "w-10 h-10 text-neutral-600 mx-auto fill-neutral-800"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-lg text-white uppercase",
                    children: "No Donations Logged Yet"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 max-w-sm mx-auto",
                    children: "When fans make contributions via the homepage Donate button, verified transactions will appear in this ledger."
                  })]
                }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "overflow-x-auto",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("table", {
                    className: "w-full text-left text-xs whitespace-nowrap",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                      children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                        className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Receipt / Ref"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Donor Name"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Phone"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Amount"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Purpose"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Status"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                          className: "py-3 px-3",
                          children: "Date"
                        })]
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                      className: "divide-y divide-neutral-800/60",
                      children: donations.map(function (don) {
                        return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                          className: "hover:bg-neutral-800/30",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-mono font-bold text-amber-400",
                            children: don.donationNumber
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-semibold text-white",
                            children: don.fullName
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 font-mono text-neutral-300",
                            children: don.phone
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("td", {
                            className: "py-3 px-3 font-sports font-black text-emerald-400 text-sm",
                            children: [don.amount.toLocaleString(), " ETB"]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 text-emerald-300",
                            children: don.purpose
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3",
                            children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800",
                              children: don.status
                            })
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                            className: "py-3 px-3 text-neutral-400 text-xxs",
                            children: new Date(don.createdAt).toLocaleDateString()
                          })]
                        }, don.id);
                      })
                    })]
                  })
                })
              })]
            }), adminTab === "news" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: "News Articles & Press Releases"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-1",
                    children: "Publish new stories with multi-language headings and match reports."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    setEditingArticleId(null);
                    setNewsTitleEn("");
                    setNewsTitleAm("");
                    setNewsTitleOm("");
                    setNewsSummaryEn("");
                    setNewsContentEn("");
                    setIsNewsModalOpen(true);
                  },
                  className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Plus, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Create Article"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-3",
                children: news.map(function (item) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                        src: item.imageUrl,
                        alt: "",
                        className: "w-16 h-12 object-cover rounded-lg shrink-0 border border-neutral-800"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-xxs font-bold uppercase text-emerald-400 block font-sports",
                          children: [item.category.replace("_", " "), " • ", item.date]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                          className: "font-bold text-sm text-white",
                          children: item.title.en
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xs text-neutral-500",
                          children: item.title.am
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          setEditingArticleId(item.id);
                          setNewsTitleEn(item.title.en);
                          setNewsTitleAm(item.title.am);
                          setNewsTitleOm(item.title.om);
                          setNewsSummaryEn(item.summary.en);
                          setNewsContentEn(item.content.en);
                          setNewsCategory(item.category);
                          setNewsImageUrl(item.imageUrl);
                          setIsNewsModalOpen(true);
                        },
                        className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300",
                        title: "Edit article",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(SquarePen, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          return deleteNewsArticle(item.id);
                        },
                        className: "p-1.5 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400",
                        title: "Delete article",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                          className: "w-4 h-4"
                        })
                      })]
                    })]
                  }, item.id);
                })
              })]
            }), adminTab === "fixtures" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: "Fixtures & Match Results Management"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-1",
                    children: "Schedule new matches, update live scores, and enter final results."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    setEditingMatchId(null);
                    setMatchDate((/* @__PURE__ */new Date()).toISOString().slice(0, 10));
                    setMatchAwayTeam("");
                    setIsMatchModalOpen(true);
                  },
                  className: "px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Plus, {
                    className: "w-4 h-4"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Add Fixture"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "space-y-3",
                children: matches.map(function (m) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2 text-xs",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold uppercase text-amber-400",
                          children: m.competitionName
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-neutral-500",
                          children: ["• ", m.date]
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "px-2 py-0.5 rounded text-xxs font-bold uppercase ".concat(m.status === "FINISHED" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : m.status === "LIVE" ? "bg-red-950 text-red-400 border border-red-800" : "bg-neutral-800 text-neutral-300"),
                          children: m.status
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("h4", {
                        className: "font-sports font-bold text-lg text-white mt-1",
                        children: [m.homeTeam.name, " ", m.score ? /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "text-emerald-400 font-mono",
                          children: [m.score.home, " - ", m.score.away]
                        }) : "vs", " ", m.awayTeam.name]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xs text-neutral-400",
                        children: m.venue
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2 self-end sm:self-auto",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          setEditingMatchId(m.id);
                          setMatchDate(m.date);
                          setMatchTime(m.kickoffTime);
                          setMatchVenue(m.venue);
                          setMatchHomeTeam(m.homeTeam.name);
                          setMatchAwayTeam(m.awayTeam.name);
                          setMatchComp(m.competition);
                          setMatchStatus(m.status);
                          if (m.score) {
                            setHomeScore(m.score.home);
                            setAwayScore(m.score.away);
                          }
                          setIsMatchModalOpen(true);
                        },
                        className: "p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300",
                        title: "Edit match",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(SquarePen, {
                          className: "w-4 h-4"
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        onClick: function onClick() {
                          return deleteMatch(m.id);
                        },
                        className: "p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400",
                        title: "Delete match",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                          className: "w-4 h-4"
                        })
                      })]
                    })]
                  }, m.id);
                })
              })]
            }), adminTab === "standings" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                    children: "League Standings Table Editor"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-1",
                    children: "Edit team points, wins, draws, and goals. Tables auto-sort immediately."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: recalculateStandingsFromMatches,
                    className: "px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
                    title: "Automatically calculate points, goals, and positions from all finished match fixtures",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Calculator, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "Auto-Calculate from Fixtures"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: resetStandings,
                    className: "px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors cursor-pointer",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "Reset Standings"
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "overflow-x-auto",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("table", {
                  className: "w-full text-left text-xs whitespace-nowrap",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("thead", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                      className: "border-b border-neutral-800 uppercase text-neutral-400 font-sports tracking-wider",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Pos"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3",
                        children: "Team"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        title: "Games Played - use buttons or type directly to change",
                        children: "P (Played)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        children: "W"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        children: "D"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        children: "L"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        children: "GF"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-2 text-center",
                        children: "GA"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3 text-center",
                        children: "Pts"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("th", {
                        className: "py-3 px-3 text-right",
                        children: "Quick Actions"
                      })]
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("tbody", {
                    className: "divide-y divide-neutral-800/60",
                    children: standings.map(function (st) {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs("tr", {
                        className: st.isHalaba ? "bg-red-950/40 font-bold" : "hover:bg-neutral-800/40",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3",
                          children: st.position
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 text-white font-sports text-sm",
                          children: st.teamName
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-2.5 px-2 text-center",
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                            className: "inline-flex items-center justify-center gap-1 bg-neutral-950 px-1.5 py-1 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return updateStanding(st.teamId, {
                                  played: Math.max(0, st.played - 1)
                                });
                              },
                              className: "w-5 h-5 flex items-center justify-center rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                              title: "Decrease Games Played",
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(Minus, {
                                className: "w-3 h-3"
                              })
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                              type: "number",
                              min: 0,
                              max: 50,
                              value: st.played,
                              onChange: function onChange(e) {
                                var val = parseInt(e.target.value, 10);
                                updateStanding(st.teamId, {
                                  played: isNaN(val) ? 0 : Math.max(0, val)
                                });
                              },
                              className: "w-8 text-center bg-transparent font-mono font-bold text-white text-xs focus:outline-none focus:bg-neutral-900 rounded p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                              title: "Click to type games played directly"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return updateStanding(st.teamId, {
                                  played: st.played + 1
                                });
                              },
                              className: "w-5 h-5 flex items-center justify-center rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                              title: "Increase Games Played",
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(Plus, {
                                className: "w-3 h-3"
                              })
                            })]
                          })
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-2 text-center text-emerald-400 font-bold",
                          children: st.won
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-2 text-center text-neutral-400",
                          children: st.drawn
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-2 text-center text-red-400",
                          children: st.lost
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-2 text-center text-neutral-400",
                          children: st.goalsFor
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-2 text-center text-neutral-400",
                          children: st.goalsAgainst
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 text-center font-sports font-black text-white text-base",
                          children: st.points
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("td", {
                          className: "py-3 px-3 text-right",
                          children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                            className: "inline-flex items-center gap-1.5 justify-end",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return updateStanding(st.teamId, {
                                  played: st.played + 1,
                                  won: st.won + 1,
                                  points: st.points + 3,
                                  goalsFor: st.goalsFor + 1
                                });
                              },
                              className: "px-2 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xxs font-bold transition-colors cursor-pointer",
                              title: "Add 1 Win (+3 Pts, +1 GF)",
                              children: "+ Win"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return updateStanding(st.teamId, {
                                  played: st.played + 1,
                                  drawn: st.drawn + 1,
                                  points: st.points + 1
                                });
                              },
                              className: "px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 text-xxs font-bold transition-colors cursor-pointer",
                              title: "Add 1 Draw (+1 Pt)",
                              children: "+ Draw"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return updateStanding(st.teamId, {
                                  played: st.played + 1,
                                  lost: st.lost + 1,
                                  goalsAgainst: st.goalsAgainst + 1
                                });
                              },
                              className: "px-2 py-1 rounded bg-red-950/90 hover:bg-red-900 text-red-300 border border-red-800 text-xxs font-bold transition-colors cursor-pointer",
                              title: "Add 1 Loss (0 Pts, +1 GA)",
                              children: "+ Lose"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return openEditStanding(st);
                              },
                              className: "p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer ml-1",
                              title: "Edit all table stats for ".concat(st.teamName),
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(SquarePen, {
                                className: "w-3.5 h-3.5"
                              })
                            })]
                          })
                        })]
                      }, st.teamId);
                    })
                  })]
                })
              }), editingStandingTeam && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "bg-neutral-900 border border-neutral-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-5",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs uppercase tracking-wider text-red-400 font-sports font-bold",
                        children: "Edit League Standing"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                        className: "text-lg font-sports font-black text-white",
                        children: editingStandingTeam.teamName
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return setEditingStandingTeam(null);
                      },
                      className: "p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                        className: "w-4 h-4"
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                    onSubmit: handleSaveStanding,
                    className: "space-y-4",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-neutral-400 uppercase mb-1",
                          children: "Played (P)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.played,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              played: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-emerald-400 uppercase mb-1",
                          children: "Won (W)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.won,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              won: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-emerald-400 font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-neutral-400 uppercase mb-1",
                          children: "Drawn (D)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.drawn,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              drawn: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-red-400 uppercase mb-1",
                          children: "Lost (L)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.lost,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              lost: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-red-400 font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "grid grid-cols-3 gap-3",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-neutral-400 uppercase mb-1",
                          children: "Goals For (GF)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.goalsFor,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              goalsFor: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-neutral-400 uppercase mb-1",
                          children: "Goals Against (GA)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.goalsAgainst,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              goalsAgainst: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono font-bold text-sm focus:border-red-500 focus:outline-none"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block text-xxs font-bold text-amber-400 uppercase mb-1",
                          children: "Points (Pts)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          min: 0,
                          value: standingFormData.points,
                          onChange: function onChange(e) {
                            return setStandingFormData(_objectSpread(_objectSpread({}, standingFormData), {}, {
                              points: parseInt(e.target.value, 10) || 0
                            }));
                          },
                          className: "w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-amber-400 font-sports font-black text-base focus:border-red-500 focus:outline-none"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: ["Goal Diff:", " ", /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                          className: "font-bold font-mono text-white",
                          children: [standingFormData.goalsFor - standingFormData.goalsAgainst > 0 ? "+" : "", standingFormData.goalsFor - standingFormData.goalsAgainst]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            return setEditingStandingTeam(null);
                          },
                          className: "px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-sports font-bold uppercase transition-colors cursor-pointer text-xs",
                          children: "Cancel"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "submit",
                          className: "px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-sports font-black uppercase transition-colors cursor-pointer text-xs shadow-md",
                          children: "Save Standing"
                        })]
                      })]
                    })]
                  })]
                })
              })]
            }), adminTab === "squad" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                  className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                  children: "Squad & Staff Roster"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-neutral-400 mt-1",
                  children: "Add new signings and update player numbers and statistics."
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                onSubmit: handleAddPlayer,
                className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-wrap items-center gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                  type: "text",
                  value: newPlayerName,
                  onChange: function onChange(e) {
                    return setNewPlayerName(e.target.value);
                  },
                  placeholder: "Player Name (e.g. Dawit Fekadu)",
                  className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-48"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                  type: "number",
                  value: newPlayerNumber,
                  onChange: function onChange(e) {
                    return setNewPlayerNumber(Number(e.target.value));
                  },
                  placeholder: "Jersey #",
                  className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 w-20 text-center font-sports text-sm"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                  value: newPlayerPos,
                  onChange: function onChange(e) {
                    return setNewPlayerPos(e.target.value);
                  },
                  className: "px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: "Goalkeeper",
                    children: "Goalkeeper"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: "Defender",
                    children: "Defender"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: "Midfielder",
                    children: "Midfielder"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: "Forward",
                    children: "Forward"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  type: "submit",
                  className: "px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase font-sports",
                  children: "Add Player"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                children: players.map(function (p) {
                  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "font-sports font-bold text-lg text-red-500",
                        children: ["#", p.number, " "]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "font-semibold text-white text-sm",
                        children: p.name
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "block text-xxs text-neutral-400 font-sports uppercase",
                        children: p.position
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      onClick: function onClick() {
                        return deletePlayer(p.id);
                      },
                      className: "p-1.5 text-neutral-500 hover:text-red-400",
                      title: "Remove player",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(Trash2, {
                        className: "w-3.5 h-3.5"
                      })
                    })]
                  }, p.id);
                })
              })]
            }), adminTab === "sync" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-sports font-bold text-xs uppercase tracking-wider text-emerald-400",
                      children: "Federation Live Sync & Simulator"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                    className: "font-sports font-black text-2xl text-white uppercase tracking-wider mt-1",
                    children: "Live Matches & Standings Auto-Update Engine"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-neutral-400 mt-1",
                    children: "Control the real-time background refresh loop, simulate matchday scores, and test automatic standings recalculation."
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "flex items-center gap-2",
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: syncNow,
                    disabled: isSyncing,
                    className: "px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-2 transition-all disabled:opacity-60",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                      className: "w-3.5 h-3.5 text-emerald-400 ".concat(isSyncing ? "animate-spin" : "")
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: isSyncing ? "Syncing..." : "Sync Now"
                    })]
                  })
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-neutral-400 font-bold uppercase block",
                      children: "Background Auto-Update"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-sports font-black text-2xl mt-1 block ".concat(isAutoSyncEnabled ? "text-emerald-400" : "text-neutral-500"),
                      children: isAutoSyncEnabled ? "ENABLED" : "PAUSED"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: toggleAutoSync,
                    className: "mt-3 py-1.5 px-3 rounded-lg text-xs font-bold uppercase font-sports flex items-center justify-center gap-1.5 transition-colors ".concat(isAutoSyncEnabled ? "bg-neutral-800 hover:bg-neutral-700 text-amber-400" : "bg-emerald-700 hover:bg-emerald-600 text-white"),
                    children: [isAutoSyncEnabled ? /* @__PURE__ */jsxRuntimeExports.jsx(Pause, {
                      className: "w-3.5 h-3.5"
                    }) : /* @__PURE__ */jsxRuntimeExports.jsx(Play, {
                      className: "w-3.5 h-3.5"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: isAutoSyncEnabled ? "Pause Loop" : "Resume Loop"
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-neutral-400 font-bold uppercase block",
                      children: "Sync Frequency"
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                      className: "font-sports font-black text-2xl text-white mt-1 block",
                      children: ["Every ", autoSyncInterval, "s"]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "mt-3 flex gap-1.5",
                    children: [15, 30, 60].map(function (sec) {
                      return /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                        onClick: function onClick() {
                          return setAutoSyncInterval(sec);
                        },
                        className: "flex-1 py-1 rounded text-xxs font-bold uppercase font-mono ".concat(autoSyncInterval === sec ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"),
                        children: [sec, "s"]
                      }, sec);
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-neutral-400 font-bold uppercase block",
                      children: "Next Refresh In"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-mono font-black text-3xl text-amber-400 mt-1 block",
                      children: isAutoSyncEnabled ? "".concat(secondsUntilNextSync, "s") : "Paused"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xxs text-neutral-500",
                    children: "Auto-ticks and refreshes client state"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "text-xs text-neutral-400 font-bold uppercase block",
                      children: "Last Federation Sync"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: "font-mono font-bold text-sm text-neutral-200 mt-2 block",
                      children: lastSyncTime.toLocaleTimeString()
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xxs text-emerald-400",
                    children: "Connected to local reactive state"
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-6 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-950 to-green-950/40 border border-neutral-800 space-y-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h4", {
                  className: "font-sports font-bold text-lg text-white uppercase flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Zap, {
                    className: "w-5 h-5 text-amber-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Instant Test Actions (Immediate Effect)"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-neutral-300",
                  children: "Click either button below to immediately trigger live match action or advance the entire league table to test automatic updates."
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex flex-wrap items-center gap-3 pt-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: simulateLiveMatchAction,
                    className: "px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Zap, {
                      className: "w-4 h-4 text-amber-200"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "Simulate Live Match Action (Goal / Minute Advance)"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                    onClick: advanceLeagueMatchday,
                    className: "px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-sports font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Trophy, {
                      className: "w-4 h-4 text-amber-300"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      children: "Sync Official League Standings (TheSportsDB)"
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "space-y-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h4", {
                  className: "font-sports font-bold text-base text-neutral-300 uppercase tracking-wider",
                  children: ["Recent Live Events & Notifications (", liveNotifications.length, ")"]
                }), liveNotifications.length === 0 ? /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-neutral-500 py-3 italic",
                  children: 'No new live notifications yet. Click "Simulate Live Match Action" above to trigger a live goal!'
                }) : /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "space-y-2",
                  children: liveNotifications.map(function (n) {
                    return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-mono text-neutral-500 font-bold",
                          children: n.timestamp
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-amber-400 uppercase font-sports tracking-wide",
                          children: n.title
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-neutral-300 hidden sm:inline",
                          children: n.message
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase font-mono",
                        children: n.type
                      })]
                    }, n.id);
                  })
                })]
              })]
            }), adminTab === "sponsors" && /* @__PURE__ */jsxRuntimeExports.jsx(SponsorManager, {}), adminTab === "settings" && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-6 shadow-xl",
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("h3", {
                  className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                  children: "Club Configuration & Production Database Guide"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-neutral-400 mt-1",
                  children: "Configuration details, official contacts, and cloud persistence deployment guide."
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("h4", {
                  className: "font-sports font-bold text-lg text-white uppercase flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Database, {
                    className: "w-5 h-5 text-emerald-400"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Production Database Status"
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                  className: "text-xs sm:text-sm text-neutral-300 leading-relaxed",
                  children: "The club portal is currently configured with high-performance persistent local storage for rapid prototype demonstration, allowing club staff to test all features (membership registrations, match schedules, league standings, news publications)."
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "p-4 rounded-lg bg-neutral-900 text-xs text-neutral-300 space-y-2 border border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    className: "text-amber-400 block font-sports text-sm uppercase",
                    children: "To connect a production Cloud Firestore or Cloud SQL database:"
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("ol", {
                    className: "list-decimal list-inside space-y-1 text-neutral-400",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: "Run Firebase or Cloud SQL provisioning through AI Studio's integration manager."
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("li", {
                      children: "Configure Firestore rules: restrict membership queries to role 'admin', and allow public reads for news, fixtures, and standings."
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("li", {
                      children: ["Deploy live rules with ", /* @__PURE__ */jsxRuntimeExports.jsx("code", {
                        className: "text-red-400",
                        children: "deploy_firebase"
                      }), "."]
                    })]
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "text-xs text-neutral-400",
                  children: "Reset all club data, matches, news, and registrations back to defaults."
                }), isConfirmResetOpen ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    className: "text-xs text-red-300 font-bold",
                    children: "Confirm Reset?"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      resetAllDataToDefault();
                      setIsConfirmResetOpen(false);
                    },
                    className: "px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider font-sports transition-colors",
                    children: "Yes, Reset All"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setIsConfirmResetOpen(false);
                    },
                    className: "px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs transition-colors",
                    children: "Cancel"
                  })]
                }) : /* @__PURE__ */jsxRuntimeExports.jsxs("button", {
                  onClick: function onClick() {
                    return setIsConfirmResetOpen(true);
                  },
                  className: "px-4 py-2 rounded-xl bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-xs font-bold uppercase tracking-wider font-sports flex items-center gap-1.5 transition-colors",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RefreshCw, {
                    className: "w-3.5 h-3.5"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: "Reset Everything"
                  })]
                })]
              })]
            }), isNewsModalOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-xl text-white uppercase",
                    children: editingArticleId ? "Edit Article" : "Create News Article"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setIsNewsModalOpen(false);
                    },
                    className: "text-neutral-400 hover:text-white",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-5 h-5"
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSaveArticle,
                  className: "space-y-4 text-xs",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase mb-1",
                      children: "Title (English) *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "text",
                      required: true,
                      value: newsTitleEn,
                      onChange: function onChange(e) {
                        return setNewsTitleEn(e.target.value);
                      },
                      placeholder: "Headline in English...",
                      className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Title (Amharic - አማርኛ)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: newsTitleAm,
                        onChange: function onChange(e) {
                          return setNewsTitleAm(e.target.value);
                        },
                        placeholder: "ርዕስ በአማርኛ...",
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Title (Afaan Oromo)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: newsTitleOm,
                        onChange: function onChange(e) {
                          return setNewsTitleOm(e.target.value);
                        },
                        placeholder: "Mata duree Afaan Oromootiin...",
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3 items-start",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block font-bold text-neutral-300 uppercase mb-1",
                          children: "Category *"
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                          value: newsCategory,
                          onChange: function onChange(e) {
                            return setNewsCategory(e.target.value);
                          },
                          className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "CLUB_NEWS",
                            children: "Club News"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "MATCH_REPORTS",
                            children: "Match Reports"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "TRANSFERS",
                            children: "Transfers"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "INTERVIEWS",
                            children: "Interviews"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "ACADEMY",
                            children: "Youth Academy"
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                            value: "COMMUNITY",
                            children: "Community"
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                          className: "block font-bold text-neutral-300 uppercase mb-1",
                          children: "Featured Image (Link URL or Device Upload)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                              className: "relative flex-1",
                              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                                className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                              }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                                type: "text",
                                value: newsImageUrl.startsWith("data:") ? "Photo loaded from local device" : newsImageUrl,
                                onChange: function onChange(e) {
                                  setNewsImageUrl(e.target.value);
                                },
                                placeholder: "Paste image link URL (https://...)",
                                className: "w-full pl-8 pr-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                              })]
                            }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                              htmlFor: "news-image-unified-file-input",
                              className: "px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg border border-neutral-700 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors shrink-0",
                              title: "Select image from local device",
                              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Upload, {
                                className: "w-3.5 h-3.5 text-red-400"
                              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                children: "Browse Device"
                              }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                                id: "news-image-unified-file-input",
                                type: "file",
                                accept: "image/*",
                                onChange: handleImageFileUpload,
                                className: "hidden"
                              })]
                            }), newsImageUrl && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                              type: "button",
                              onClick: function onClick() {
                                return setNewsImageUrl("");
                              },
                              className: "p-2 rounded-lg bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400 transition-colors shrink-0",
                              title: "Clear image",
                              children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                                className: "w-4 h-4"
                              })
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                            htmlFor: "news-image-unified-file-input",
                            onDragOver: function onDragOver(e) {
                              return e.preventDefault();
                            },
                            onDrop: function onDrop(e) {
                              var _e$dataTransfer$files3;
                              e.preventDefault();
                              var file = (_e$dataTransfer$files3 = e.dataTransfer.files) === null || _e$dataTransfer$files3 === void 0 ? void 0 : _e$dataTransfer$files3[0];
                              if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                  setNewsUploadError("File size exceeds 5MB limit. Please select a smaller photo file.");
                                  return;
                                }
                                setNewsUploadError(null);
                                var reader = new FileReader();
                                reader.onload = function (loadEv) {
                                  var _loadEv$target;
                                  if ((_loadEv$target = loadEv.target) !== null && _loadEv$target !== void 0 && _loadEv$target.result) {
                                    setNewsImageUrl(loadEv.target.result);
                                  }
                                };
                                reader.readAsDataURL(file);
                              }
                            },
                            className: "py-1.5 px-3 rounded-lg border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-400 text-xxs flex items-center justify-between cursor-pointer transition-colors",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                              className: "flex items-center gap-1.5",
                              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image$1, {
                                className: "w-3.5 h-3.5 text-neutral-500"
                              }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                                children: "Or drag & drop photo here from your device"
                              })]
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              className: "text-red-400 font-bold uppercase font-sports",
                              children: "Choose File"
                            })]
                          })]
                        })]
                      })]
                    }), newsImageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "mt-2.5 p-2.5 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-between gap-3 animate-in fade-in",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                          src: newsImageUrl,
                          alt: "Preview",
                          className: "w-14 h-11 object-cover rounded-lg border border-neutral-700 shrink-0",
                          onError: function onError(e) {
                            e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80";
                          }
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "min-w-0",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                              className: "w-3 h-3 text-emerald-400"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              children: "Image Attached"
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-400 truncate block max-w-xs sm:max-w-md mt-0.5",
                            children: newsImageUrl.startsWith("data:") ? "Photo uploaded from device (ready to publish)" : newsImageUrl
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick() {
                          return setNewsImageUrl("");
                        },
                        className: "px-2.5 py-1 rounded bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                        children: "Remove"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase mb-1",
                      children: "Summary *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                      rows: 2,
                      required: true,
                      value: newsSummaryEn,
                      onChange: function onChange(e) {
                        return setNewsSummaryEn(e.target.value);
                      },
                      placeholder: "Brief summary sentence...",
                      className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase mb-1",
                      children: "Full Article Text *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                      rows: 5,
                      required: true,
                      value: newsContentEn,
                      onChange: function onChange(e) {
                        return setNewsContentEn(e.target.value);
                      },
                      placeholder: "Write the full report or announcement...",
                      className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sans"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-2 flex justify-end gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setIsNewsModalOpen(false);
                      },
                      className: "px-4 py-2 rounded-lg bg-neutral-800 text-white",
                      children: "Cancel"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      className: "px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm",
                      children: "Save & Publish"
                    })]
                  })]
                })]
              })
            }), isMatchModalOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-900 border border-neutral-700 w-full max-w-xl rounded-2xl p-6 shadow-2xl space-y-4",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pb-3 border-b border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                    className: "font-sports font-bold text-xl text-white uppercase",
                    children: editingMatchId ? "Update Match Details & Score" : "Schedule New Fixture"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    onClick: function onClick() {
                      return setIsMatchModalOpen(false);
                    },
                    className: "text-neutral-400 hover:text-white",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-5 h-5"
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSaveMatch,
                  className: "space-y-4 text-xs",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Home Team *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        required: true,
                        value: matchHomeTeam,
                        onChange: function onChange(e) {
                          return setMatchHomeTeam(e.target.value);
                        },
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Away Team *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        required: true,
                        value: matchAwayTeam,
                        onChange: function onChange(e) {
                          return setMatchAwayTeam(e.target.value);
                        },
                        placeholder: "Opponent Name",
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Date *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "date",
                        required: true,
                        value: matchDate,
                        onChange: function onChange(e) {
                          return setMatchDate(e.target.value);
                        },
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Kickoff Time *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: matchTime,
                        onChange: function onChange(e) {
                          return setMatchTime(e.target.value);
                        },
                        placeholder: "15:00",
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase mb-1",
                      children: "Venue *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "text",
                      required: true,
                      value: matchVenue,
                      onChange: function onChange(e) {
                        return setMatchVenue(e.target.value);
                      },
                      className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Status"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                        value: matchStatus,
                        onChange: function onChange(e) {
                          return setMatchStatus(e.target.value);
                        },
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "UPCOMING",
                          children: "Upcoming"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "LIVE",
                          children: "Live"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "FINISHED",
                          children: "Finished (FT)"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Home Score"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "number",
                        min: "0",
                        value: homeScore,
                        onChange: function onChange(e) {
                          return setHomeScore(Number(e.target.value));
                        },
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase mb-1",
                        children: "Away Score"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "number",
                        min: "0",
                        value: awayScore,
                        onChange: function onChange(e) {
                          return setAwayScore(Number(e.target.value));
                        },
                        className: "w-full px-3 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-white text-sm font-sports text-center"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-2 flex justify-end gap-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setIsMatchModalOpen(false);
                      },
                      className: "px-4 py-2 rounded-lg bg-neutral-800 text-white",
                      children: "Cancel"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      className: "px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase font-sports text-sm",
                      children: "Save Fixture"
                    })]
                  })]
                })]
              })
            }), isShopModalOpen && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto relative",
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pb-4 border-b border-neutral-800",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(ShoppingBag, {
                        className: "w-5 h-5"
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("h4", {
                        className: "font-sports font-black text-2xl text-white uppercase tracking-wider",
                        children: editingShopItemId ? "Edit Shop Merchandise" : "Add New Jersey / Product"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                        className: "text-xs text-neutral-400",
                        children: "Product appears instantly in the official store with Chapa checkout."
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                    type: "button",
                    onClick: function onClick() {
                      return setIsShopModalOpen(false);
                    },
                    className: "p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                      className: "w-5 h-5"
                    })
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSaveShopItem,
                  className: "space-y-4 text-xs",
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                      children: "Product / Jersey Name (English) *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                      type: "text",
                      required: true,
                      value: shopNameEn,
                      onChange: function onChange(e) {
                        return setShopNameEn(e.target.value);
                      },
                      placeholder: "e.g. Official 2026/27 Home Match Jersey",
                      className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 font-medium"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                        children: "Product Name (Amharic - አማርኛ)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: shopNameAm,
                        onChange: function onChange(e) {
                          return setShopNameAm(e.target.value);
                        },
                        placeholder: "ለምሳሌ፡ ይፋዊ የ2026/27 የሜዳ ማሊያ",
                        className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                        children: "Product Name (Afaan Oromo)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "text",
                        value: shopNameOm,
                        onChange: function onChange(e) {
                          return setShopNameOm(e.target.value);
                        },
                        placeholder: "fakkeenyaaf: Jeersii Seeraa 2026/27",
                        className: "w-full px-3.5 py-2 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                        children: "Price in Ethiopian Birr (ETB) *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "number",
                          required: true,
                          min: "1",
                          step: "10",
                          value: shopPrice,
                          onChange: function onChange(e) {
                            return setShopPrice(e.target.value);
                          },
                          placeholder: "1800",
                          className: "w-full pl-3.5 pr-14 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-base font-sports font-bold focus:outline-none focus:border-emerald-500"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-400 font-sports",
                          children: "ETB"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                        children: "Category *"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("select", {
                        value: shopCategory,
                        onChange: function onChange(e) {
                          return setShopCategory(e.target.value);
                        },
                        className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "JERSEY",
                          children: "Match Jersey (Home / Away / Third)"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "KIT",
                          children: "Kits, Training & Jackets"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                          value: "ACCESSORY",
                          children: "Supporter Accessories & Scarves"
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between mb-1.5",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "font-bold text-neutral-300 uppercase tracking-wider",
                        children: "Available Sizes * (Click to toggle)"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-xxs text-neutral-400",
                        children: ["Selected: ", /* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                          className: "text-amber-400",
                          children: shopSizes.join(", ") || "None"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                      className: "flex flex-wrap gap-2 p-2.5 bg-neutral-950 rounded-xl border border-neutral-800",
                      children: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "One Size"].map(function (size) {
                        var isSelected = shopSizes.includes(size);
                        return /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            return handleToggleShopSize(size);
                          },
                          className: "px-3 py-1.5 rounded-lg text-xs font-sports font-bold uppercase transition-all ".concat(isSelected ? "bg-red-600 text-white shadow-md shadow-red-900/40 ring-1 ring-red-400" : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"),
                          children: size
                        }, size);
                      })
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                        className: "block font-bold text-neutral-300 uppercase tracking-wider",
                        children: "Product Image (Upload Local File or Image Link) *"
                      }), shopImageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "text-xxs font-bold uppercase font-sports text-emerald-400 flex items-center gap-1",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                          className: "w-3 h-3 text-emerald-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: shopImageUrl.startsWith("data:") ? "Local Photo Ready" : "Web Image Linked"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "relative flex-1",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                          className: "w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          type: "text",
                          required: true,
                          value: shopImageUrl.startsWith("data:") ? "Photo loaded from local device (ready to save)" : shopImageUrl,
                          onChange: function onChange(e) {
                            setShopImageUrl(e.target.value);
                            setShopUploadError(null);
                          },
                          placeholder: "Paste image link URL (https://...) or choose local file",
                          className: "w-full pl-9 pr-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                        htmlFor: "shop-image-file-input",
                        className: "px-3.5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 hover:text-white rounded-xl border border-neutral-700 text-xs font-sports font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02] shrink-0 active:scale-95 shadow-md",
                        title: "Select image from local device",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Upload, {
                          className: "w-4 h-4 text-red-400"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "Upload Local File"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                          id: "shop-image-file-input",
                          type: "file",
                          accept: "image/*",
                          onChange: handleShopImageFileUpload,
                          className: "hidden"
                        })]
                      }), shopImageUrl && /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick() {
                          setShopImageUrl("");
                          setShopUploadError(null);
                        },
                        className: "p-2.5 rounded-xl bg-neutral-800 hover:bg-red-950 text-neutral-400 hover:text-red-400 transition-colors shrink-0 border border-neutral-700",
                        title: "Clear product image",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(X, {
                          className: "w-4 h-4"
                        })
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      htmlFor: "shop-image-file-input",
                      onDragOver: function onDragOver(e) {
                        return e.preventDefault();
                      },
                      onDrop: handleShopImageDrop,
                      className: "py-2.5 px-4 rounded-xl border border-dashed border-neutral-800 hover:border-red-600/60 bg-neutral-950/70 hover:bg-neutral-950 text-neutral-400 text-xs flex items-center justify-between cursor-pointer transition-all group",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image$1, {
                          className: "w-4 h-4 text-neutral-500 group-hover:text-red-400 transition-colors"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs sm:text-xs",
                          children: isShopUploading ? "Optimizing and loading local photo..." : "Drag & drop local jersey or merchandise photo here"
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "px-2.5 py-1 rounded-lg bg-neutral-900 group-hover:bg-red-600 text-neutral-300 group-hover:text-white font-sports font-bold uppercase text-xxs transition-colors",
                        children: isShopUploading ? "Processing..." : "Browse Computer"
                      })]
                    }), shopUploadError && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "p-2.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(TriangleAlert, {
                        className: "w-4 h-4 text-red-400 shrink-0"
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        children: shopUploadError
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "pt-1",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        className: "text-xxs text-neutral-400 block mb-1 font-semibold uppercase",
                        children: "Or Quick Select Official Club Kits:"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            setShopImageUrl(ClubImages.homeJersey);
                            setShopUploadError(null);
                          },
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-red-400 text-xxs font-bold uppercase",
                          children: "Official Home Kit"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            setShopImageUrl(ClubImages.awayJersey);
                            setShopUploadError(null);
                          },
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-emerald-400 text-xxs font-bold uppercase",
                          children: "Official Away Kit"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            setShopImageUrl("https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80");
                            setShopUploadError(null);
                          },
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-amber-400 text-xxs font-bold uppercase",
                          children: "Onyx Third Kit"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            setShopImageUrl("https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80");
                            setShopUploadError(null);
                          },
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xxs font-bold uppercase",
                          children: "Supporter Scarf"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                          type: "button",
                          onClick: function onClick() {
                            setShopImageUrl("https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80");
                            setShopUploadError(null);
                          },
                          className: "px-2.5 py-1 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-blue-400 text-xxs font-bold uppercase",
                          children: "Anthem Jacket"
                        })]
                      })]
                    }), shopImageUrl && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: "mt-2.5 p-3 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-between gap-3 animate-in fade-in",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                          src: shopImageUrl,
                          alt: "Product preview",
                          className: "w-14 h-14 object-cover rounded-xl border border-neutral-700 shrink-0 bg-neutral-900",
                          onError: function onError(e) {
                            e.target.src = "https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=800&q=80";
                          }
                        }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                          className: "min-w-0",
                          children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                            className: "text-xxs font-bold uppercase text-emerald-400 flex items-center gap-1 font-sports",
                            children: [/* @__PURE__ */jsxRuntimeExports.jsx(CircleCheck, {
                              className: "w-3.5 h-3.5 text-emerald-400"
                            }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                              children: shopImageUrl.startsWith("data:") ? "Local Photo Loaded & Ready" : "Image Loaded for Storefront"
                            })]
                          }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                            className: "text-xxs text-neutral-400 truncate block max-w-xs sm:max-w-md mt-0.5 font-mono",
                            children: shopImageUrl.startsWith("data:") ? "Uploaded from device (processed for store)" : shopImageUrl
                          })]
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: function onClick() {
                          setShopImageUrl("");
                          setShopUploadError(null);
                        },
                        className: "px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-red-950 border border-neutral-800 text-neutral-400 hover:text-red-400 text-xxs font-bold uppercase transition-colors shrink-0",
                        children: "Remove"
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                      children: "Description (English) *"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                      rows: 2,
                      required: true,
                      value: shopDescEn,
                      onChange: function onChange(e) {
                        return setShopDescEn(e.target.value);
                      },
                      placeholder: "Official breathable match jersey with embroidered crest...",
                      className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-sans"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("label", {
                      className: "block font-bold text-neutral-300 uppercase tracking-wider mb-1.5",
                      children: "Description (Amharic - አማርኛ)"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("textarea", {
                      rows: 2,
                      value: shopDescAm,
                      onChange: function onChange(e) {
                        return setShopDescAm(e.target.value);
                      },
                      placeholder: "የማሊያው መግለጫ በአማርኛ...",
                      className: "w-full px-3.5 py-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 font-sans"
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "checkbox",
                        checked: shopInStock,
                        onChange: function onChange(e) {
                          return setShopInStock(e.target.checked);
                        },
                        className: "w-4 h-4 text-emerald-600 rounded bg-neutral-900 border-neutral-700 focus:ring-emerald-500"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-white uppercase block text-xs",
                          children: "Available In Stock"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400",
                          children: "Customers can click Buy Now"
                        })]
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs("label", {
                      className: "flex items-center gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors",
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        type: "checkbox",
                        checked: shopFeatured,
                        onChange: function onChange(e) {
                          return setShopFeatured(e.target.checked);
                        },
                        className: "w-4 h-4 text-red-600 rounded bg-neutral-900 border-neutral-700 focus:ring-red-500"
                      }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "font-sports font-bold text-white uppercase block text-xs",
                          children: "Feature on Homepage"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          className: "text-xxs text-neutral-400",
                          children: "Show in top 3 store showcase"
                        })]
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    className: "pt-4 border-t border-neutral-800 flex items-center justify-end gap-3",
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setIsShopModalOpen(false);
                      },
                      className: "px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider font-sports transition-colors",
                      children: "Cancel"
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      disabled: isSavingShopToFirestore,
                      className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-sports font-black text-sm uppercase tracking-wider shadow-lg shadow-red-950/50 flex items-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50",
                      children: isSavingShopToFirestore ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoaderCircle, {
                          className: "w-4 h-4 animate-spin"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: "Saving to Firestore..."
                        })]
                      }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                          className: "w-4 h-4"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                          children: editingShopItemId ? "Save Changes" : "Publish Product"
                        })]
                      })
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
