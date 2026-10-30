;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
  function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var scriptRel = 'modulepreload';
        var assetsURL = function assetsURL(dep, importerUrl) {
          return new URL(dep, importerUrl).href;
        };
        var seen = {};
        var __vitePreload = exports("_", function preload(baseModule, deps, importerUrl) {
          var promise = Promise.resolve();
          if (false && deps && deps.length > 0) {
            var links = document.getElementsByTagName("link");
            var cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
            var cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute("nonce"));
            promise = Promise.allSettled(deps.map(function (dep) {
              dep = assetsURL(dep, importerUrl);
              if (dep in seen) return;
              seen[dep] = true;
              var isCss = dep.endsWith(".css");
              var cssSelector = isCss ? '[rel="stylesheet"]' : "";
              var isBaseRelative = !!importerUrl;
              if (isBaseRelative) {
                for (var i = links.length - 1; i >= 0; i--) {
                  var link2 = links[i];
                  if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
                    return;
                  }
                }
              } else if (document.querySelector("link[href=\"".concat(dep, "\"]").concat(cssSelector))) {
                return;
              }
              var link = document.createElement("link");
              link.rel = isCss ? "stylesheet" : scriptRel;
              if (!isCss) {
                link.as = "script";
              }
              link.crossOrigin = "";
              link.href = dep;
              if (cspNonce) {
                link.setAttribute("nonce", cspNonce);
              }
              document.head.appendChild(link);
              if (isCss) {
                return new Promise(function (res, rej) {
                  link.addEventListener("load", res);
                  link.addEventListener("error", function () {
                    return rej(new Error("Unable to preload CSS for ".concat(dep)));
                  });
                });
              }
            }));
          }
          function handlePreloadError(err) {
            var e = new Event("vite:preloadError", {
              cancelable: true
            });
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
              throw err;
            }
          }
          return promise.then(function (res) {
            var _iterator = _createForOfIteratorHelper(res || []),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                if (item.status !== "rejected") continue;
                handlePreloadError(item.reason);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return baseModule().catch(handlePreloadError);
          });
        });

        /*! Capacitor: https://capacitorjs.com/ - MIT License */
        var ExceptionCode;
        (function (ExceptionCode) {
          /**
           * API is not implemented.
           *
           * This usually means the API can't be used because it is not implemented for
           * the current platform.
           */
          ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
          /**
           * API is not available.
           *
           * This means the API can't be used right now because:
           *   - it is currently missing a prerequisite, such as network connectivity
           *   - it requires a particular platform or browser version
           */
          ExceptionCode["Unavailable"] = "UNAVAILABLE";
        })(ExceptionCode || (ExceptionCode = {}));
        var CapacitorException = /*#__PURE__*/function (_Error) {
          function CapacitorException(message, code, data) {
            var _this;
            _classCallCheck(this, CapacitorException);
            _this = _callSuper(this, CapacitorException, [message]);
            _this.message = message;
            _this.code = code;
            _this.data = data;
            return _this;
          }
          _inherits(CapacitorException, _Error);
          return _createClass(CapacitorException);
        }(/*#__PURE__*/_wrapNativeSuper(Error));
        var getPlatformId = function getPlatformId(win) {
          var _a, _b;
          if (win === null || win === void 0 ? void 0 : win.androidBridge) {
            return 'android';
          } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
            return 'ios';
          } else {
            return 'web';
          }
        };
        var createCapacitor = function createCapacitor(win) {
          var capCustomPlatform = win.CapacitorCustomPlatform || null;
          var cap = win.Capacitor || {};
          var Plugins = cap.Plugins = cap.Plugins || {};
          var getPlatform = function getPlatform() {
            return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
          };
          var isNativePlatform = function isNativePlatform() {
            return getPlatform() !== 'web';
          };
          var isPluginAvailable = function isPluginAvailable(pluginName) {
            var plugin = registeredPlugins.get(pluginName);
            if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
              // JS implementation available for the current platform.
              return true;
            }
            if (getPluginHeader(pluginName)) {
              // Native implementation available.
              return true;
            }
            return false;
          };
          var getPluginHeader = function getPluginHeader(pluginName) {
            var _a;
            return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
              return h.name === pluginName;
            });
          };
          var handleError = function handleError(err) {
            return win.console.error(err);
          };
          var registeredPlugins = new Map();
          var registerPlugin = function registerPlugin(pluginName) {
            var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var registeredPlugin = registeredPlugins.get(pluginName);
            if (registeredPlugin) {
              console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
              return registeredPlugin.proxy;
            }
            var platform = getPlatform();
            var pluginHeader = getPluginHeader(pluginName);
            var jsImplementation;
            var loadPluginImplementation = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                var _t, _t2;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.n = 4;
                        break;
                      }
                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.n = 2;
                        break;
                      }
                      _context.n = 1;
                      return jsImplementations[platform]();
                    case 1:
                      _t = jsImplementation = _context.v;
                      _context.n = 3;
                      break;
                    case 2:
                      _t = jsImplementation = jsImplementations[platform];
                    case 3:
                      jsImplementation = _t;
                      _context.n = 8;
                      break;
                    case 4:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.n = 8;
                        break;
                      }
                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.n = 6;
                        break;
                      }
                      _context.n = 5;
                      return jsImplementations['web']();
                    case 5:
                      _t2 = jsImplementation = _context.v;
                      _context.n = 7;
                      break;
                    case 6:
                      _t2 = jsImplementation = jsImplementations['web'];
                    case 7:
                      jsImplementation = _t2;
                    case 8:
                      return _context.a(2, jsImplementation);
                  }
                }, _callee);
              }));
              return function loadPluginImplementation() {
                return _ref.apply(this, arguments);
              };
            }();
            var createPluginMethod = function createPluginMethod(impl, prop) {
              var _a, _b;
              if (pluginHeader) {
                var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                  return prop === m.name;
                });
                if (methodHeader) {
                  if (methodHeader.rtype === 'promise') {
                    return function (options) {
                      return cap.nativePromise(pluginName, prop.toString(), options);
                    };
                  } else {
                    return function (options, callback) {
                      return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    };
                  }
                } else if (impl) {
                  return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
              } else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
              } else {
                throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
              }
            };
            var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
              var remove;
              var wrapper = function wrapper() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                var p = loadPluginImplementation().then(function (impl) {
                  var fn = createPluginMethod(impl, prop);
                  if (fn) {
                    var _p = fn.apply(void 0, args);
                    remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                    return _p;
                  } else {
                    throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
                  }
                });
                if (prop === 'addListener') {
                  p.remove = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                    return _regenerator().w(function (_context2) {
                      while (1) switch (_context2.n) {
                        case 0:
                          return _context2.a(2, remove());
                      }
                    }, _callee2);
                  }));
                }
                return p;
              };
              // Some flair ✨
              wrapper.toString = function () {
                return "".concat(prop.toString(), "() { [capacitor code] }");
              };
              Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false
              });
              return wrapper;
            };
            var addListener = createPluginMethodWrapper('addListener');
            var removeListener = createPluginMethodWrapper('removeListener');
            var addListenerNative = function addListenerNative(eventName, callback) {
              var call = addListener({
                eventName: eventName
              }, callback);
              var remove = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
                  var callbackId;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.n) {
                      case 0:
                        _context3.n = 1;
                        return call;
                      case 1:
                        callbackId = _context3.v;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);
                      case 2:
                        return _context3.a(2);
                    }
                  }, _callee3);
                }));
                return function remove() {
                  return _ref3.apply(this, arguments);
                };
              }();
              var p = new Promise(function (resolve) {
                return call.then(function () {
                  return resolve({
                    remove: remove
                  });
                });
              });
              p.remove = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.n = 1;
                      return remove();
                    case 1:
                      return _context4.a(2);
                  }
                }, _callee4);
              }));
              return p;
            };
            var proxy = new Proxy({}, {
              get: function get(_, prop) {
                switch (prop) {
                  // https://github.com/facebook/react/issues/20030
                  case '$$typeof':
                    return undefined;
                  case 'toJSON':
                    return function () {
                      return {};
                    };
                  case 'addListener':
                    return pluginHeader ? addListenerNative : addListener;
                  case 'removeListener':
                    return removeListener;
                  default:
                    return createPluginMethodWrapper(prop);
                }
              }
            });
            Plugins[pluginName] = proxy;
            registeredPlugins.set(pluginName, {
              name: pluginName,
              proxy: proxy,
              platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
            });
            return proxy;
          };
          // Add in convertFileSrc for web, it will already be available in native context
          if (!cap.convertFileSrc) {
            cap.convertFileSrc = function (filePath) {
              return filePath;
            };
          }
          cap.getPlatform = getPlatform;
          cap.handleError = handleError;
          cap.isNativePlatform = isNativePlatform;
          cap.isPluginAvailable = isPluginAvailable;
          cap.registerPlugin = registerPlugin;
          cap.Exception = CapacitorException;
          cap.DEBUG = !!cap.DEBUG;
          cap.isLoggingEnabled = !!cap.isLoggingEnabled;
          return cap;
        };
        var initCapacitorGlobal = function initCapacitorGlobal(win) {
          return win.Capacitor = createCapacitor(win);
        };
        var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
        var registerPlugin = Capacitor.registerPlugin;

        /**
         * Base class web plugins should extend.
         */
        var WebPlugin = /*#__PURE__*/function () {
          function WebPlugin() {
            _classCallCheck(this, WebPlugin);
            this.listeners = {};
            this.retainedEventArguments = {};
            this.windowListeners = {};
          }
          return _createClass(WebPlugin, [{
            key: "addListener",
            value: function addListener(eventName, listenerFunc) {
              var _this2 = this;
              var firstListener = false;
              var listeners = this.listeners[eventName];
              if (!listeners) {
                this.listeners[eventName] = [];
                firstListener = true;
              }
              this.listeners[eventName].push(listenerFunc);
              // If we haven't added a window listener for this event and it requires one,
              // go ahead and add it
              var windowListener = this.windowListeners[eventName];
              if (windowListener && !windowListener.registered) {
                this.addWindowListener(windowListener);
              }
              if (firstListener) {
                this.sendRetainedArgumentsForEvent(eventName);
              }
              var remove = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.n) {
                      case 0:
                        return _context5.a(2, _this2.removeListener(eventName, listenerFunc));
                    }
                  }, _callee5);
                }));
                return function remove() {
                  return _ref5.apply(this, arguments);
                };
              }();
              var p = Promise.resolve({
                remove: remove
              });
              return p;
            }
          }, {
            key: "removeAllListeners",
            value: function () {
              var _removeAllListeners = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
                var listener;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      this.listeners = {};
                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }
                      this.windowListeners = {};
                    case 1:
                      return _context6.a(2);
                  }
                }, _callee6, this);
              }));
              function removeAllListeners() {
                return _removeAllListeners.apply(this, arguments);
              }
              return removeAllListeners;
            }()
          }, {
            key: "notifyListeners",
            value: function notifyListeners(eventName, data, retainUntilConsumed) {
              var listeners = this.listeners[eventName];
              if (!listeners) {
                if (retainUntilConsumed) {
                  var args = this.retainedEventArguments[eventName];
                  if (!args) {
                    args = [];
                  }
                  args.push(data);
                  this.retainedEventArguments[eventName] = args;
                }
                return;
              }
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }, {
            key: "hasListeners",
            value: function hasListeners(eventName) {
              var _a;
              return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
            }
          }, {
            key: "registerWindowListener",
            value: function registerWindowListener(windowEventName, pluginEventName) {
              var _this3 = this;
              this.windowListeners[pluginEventName] = {
                registered: false,
                windowEventName: windowEventName,
                pluginEventName: pluginEventName,
                handler: function handler(event) {
                  _this3.notifyListeners(pluginEventName, event);
                }
              };
            }
          }, {
            key: "unimplemented",
            value: function unimplemented() {
              var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
              return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
            }
          }, {
            key: "unavailable",
            value: function unavailable() {
              var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
              return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
            }
          }, {
            key: "removeListener",
            value: function () {
              var _removeListener = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(eventName, listenerFunc) {
                var listeners, index;
                return _regenerator().w(function (_context7) {
                  while (1) switch (_context7.n) {
                    case 0:
                      listeners = this.listeners[eventName];
                      if (listeners) {
                        _context7.n = 1;
                        break;
                      }
                      return _context7.a(2);
                    case 1:
                      index = listeners.indexOf(listenerFunc);
                      if (index !== -1) {
                        this.listeners[eventName].splice(index, 1);
                      }
                      // If there are no more listeners for this type of event,
                      // remove the window listener
                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }
                    case 2:
                      return _context7.a(2);
                  }
                }, _callee7, this);
              }));
              function removeListener(_x, _x2) {
                return _removeListener.apply(this, arguments);
              }
              return removeListener;
            }()
          }, {
            key: "addWindowListener",
            value: function addWindowListener(handle) {
              window.addEventListener(handle.windowEventName, handle.handler);
              handle.registered = true;
            }
          }, {
            key: "removeWindowListener",
            value: function removeWindowListener(handle) {
              if (!handle) {
                return;
              }
              window.removeEventListener(handle.windowEventName, handle.handler);
              handle.registered = false;
            }
          }, {
            key: "sendRetainedArgumentsForEvent",
            value: function sendRetainedArgumentsForEvent(eventName) {
              var _this4 = this;
              var args = this.retainedEventArguments[eventName];
              if (!args) {
                return;
              }
              delete this.retainedEventArguments[eventName];
              args.forEach(function (arg) {
                _this4.notifyListeners(eventName, arg);
              });
            }
          }]);
        }();
        /******** END WEB VIEW PLUGIN ********/
        /******** COOKIES PLUGIN ********/
        /**
         * Safely web encode a string value (inspired by js-cookie)
         * @param str The string value to encode
         */
        var encode = function encode(str) {
          return encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        };
        /**
         * Safely web decode a string value (inspired by js-cookie)
         * @param str The string value to decode
         */
        var decode = function decode(str) {
          return str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        };
        var CapacitorCookiesPluginWeb = /*#__PURE__*/function (_WebPlugin) {
          function CapacitorCookiesPluginWeb() {
            _classCallCheck(this, CapacitorCookiesPluginWeb);
            return _callSuper(this, CapacitorCookiesPluginWeb, arguments);
          }
          _inherits(CapacitorCookiesPluginWeb, _WebPlugin);
          return _createClass(CapacitorCookiesPluginWeb, [{
            key: "getCookies",
            value: function () {
              var _getCookies = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
                var cookies, cookieMap;
                return _regenerator().w(function (_context8) {
                  while (1) switch (_context8.n) {
                    case 0:
                      cookies = document.cookie;
                      cookieMap = {};
                      cookies.split(';').forEach(function (cookie) {
                        if (cookie.length <= 0) return;
                        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
                        var _cookie$replace$split = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE'),
                          _cookie$replace$split2 = _slicedToArray(_cookie$replace$split, 2),
                          key = _cookie$replace$split2[0],
                          value = _cookie$replace$split2[1];
                        key = decode(key).trim();
                        value = decode(value).trim();
                        cookieMap[key] = value;
                      });
                      return _context8.a(2, cookieMap);
                  }
                }, _callee8);
              }));
              function getCookies() {
                return _getCookies.apply(this, arguments);
              }
              return getCookies;
            }()
          }, {
            key: "setCookie",
            value: function () {
              var _setCookie = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(options) {
                var encodedKey, encodedValue, expires, path, domain, _t3;
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.p = _context9.n) {
                    case 0:
                      _context9.p = 0;
                      // Safely Encoded Key/Value
                      encodedKey = encode(options.key);
                      encodedValue = encode(options.value); // Clean & sanitize options
                      expires = options.expires ? "; expires=".concat(options.expires.replace('expires=', '')) : '';
                      path = (options.path || '/').replace('path=', ''); // Default is "path=/"
                      domain = options.url != null && options.url.length > 0 ? "domain=".concat(options.url) : '';
                      document.cookie = "".concat(encodedKey, "=").concat(encodedValue || '').concat(expires, "; path=").concat(path, "; ").concat(domain, ";");
                      _context9.n = 2;
                      break;
                    case 1:
                      _context9.p = 1;
                      _t3 = _context9.v;
                      return _context9.a(2, Promise.reject(_t3));
                    case 2:
                      return _context9.a(2);
                  }
                }, _callee9, null, [[0, 1]]);
              }));
              function setCookie(_x3) {
                return _setCookie.apply(this, arguments);
              }
              return setCookie;
            }()
          }, {
            key: "deleteCookie",
            value: function () {
              var _deleteCookie = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(options) {
                var _t4;
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.p = _context0.n) {
                    case 0:
                      _context0.p = 0;
                      document.cookie = "".concat(options.key, "=; Max-Age=0");
                      _context0.n = 2;
                      break;
                    case 1:
                      _context0.p = 1;
                      _t4 = _context0.v;
                      return _context0.a(2, Promise.reject(_t4));
                    case 2:
                      return _context0.a(2);
                  }
                }, _callee0, null, [[0, 1]]);
              }));
              function deleteCookie(_x4) {
                return _deleteCookie.apply(this, arguments);
              }
              return deleteCookie;
            }()
          }, {
            key: "clearCookies",
            value: function () {
              var _clearCookies = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
                var cookies, _iterator2, _step2, cookie, _t5;
                return _regenerator().w(function (_context1) {
                  while (1) switch (_context1.p = _context1.n) {
                    case 0:
                      _context1.p = 0;
                      cookies = document.cookie.split(';') || [];
                      _iterator2 = _createForOfIteratorHelper(cookies);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          cookie = _step2.value;
                          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date().toUTCString(), ";path=/"));
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context1.n = 2;
                      break;
                    case 1:
                      _context1.p = 1;
                      _t5 = _context1.v;
                      return _context1.a(2, Promise.reject(_t5));
                    case 2:
                      return _context1.a(2);
                  }
                }, _callee1, null, [[0, 1]]);
              }));
              function clearCookies() {
                return _clearCookies.apply(this, arguments);
              }
              return clearCookies;
            }()
          }, {
            key: "clearAllCookies",
            value: function () {
              var _clearAllCookies = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
                var _t6;
                return _regenerator().w(function (_context10) {
                  while (1) switch (_context10.p = _context10.n) {
                    case 0:
                      _context10.p = 0;
                      _context10.n = 1;
                      return this.clearCookies();
                    case 1:
                      _context10.n = 3;
                      break;
                    case 2:
                      _context10.p = 2;
                      _t6 = _context10.v;
                      return _context10.a(2, Promise.reject(_t6));
                    case 3:
                      return _context10.a(2);
                  }
                }, _callee10, this, [[0, 2]]);
              }));
              function clearAllCookies() {
                return _clearAllCookies.apply(this, arguments);
              }
              return clearAllCookies;
            }()
          }]);
        }(WebPlugin);
        registerPlugin('CapacitorCookies', {
          web: function web() {
            return new CapacitorCookiesPluginWeb();
          }
        });
        // UTILITY FUNCTIONS
        /**
         * Read in a Blob value and return it as a base64 string
         * @param blob The blob value to convert to a base64 string
         */
        var readBlobAsBase64 = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(blob) {
            return _regenerator().w(function (_context11) {
              while (1) switch (_context11.n) {
                case 0:
                  return _context11.a(2, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function () {
                      var base64String = reader.result;
                      // remove prefix "data:application/pdf;base64,"
                      resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
                    };
                    reader.onerror = function (error) {
                      return reject(error);
                    };
                    reader.readAsDataURL(blob);
                  }));
              }
            }, _callee11);
          }));
          return function readBlobAsBase64(_x5) {
            return _ref6.apply(this, arguments);
          };
        }();
        /**
         * Normalize an HttpHeaders map by lowercasing all of the values
         * @param headers The HttpHeaders object to normalize
         */
        var normalizeHttpHeaders = function normalizeHttpHeaders() {
          var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var originalKeys = Object.keys(headers);
          var loweredKeys = Object.keys(headers).map(function (k) {
            return k.toLocaleLowerCase();
          });
          var normalized = loweredKeys.reduce(function (acc, key, index) {
            acc[key] = headers[originalKeys[index]];
            return acc;
          }, {});
          return normalized;
        };
        /**
         * Builds a string of url parameters that
         * @param params A map of url parameters
         * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
         */
        var buildUrlParams = function buildUrlParams(params) {
          var shouldEncode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          if (!params) return null;
          var output = Object.entries(params).reduce(function (accumulator, entry) {
            var _entry = _slicedToArray(entry, 2),
              key = _entry[0],
              value = _entry[1];
            var encodedValue;
            var item;
            if (Array.isArray(value)) {
              item = '';
              value.forEach(function (str) {
                encodedValue = shouldEncode ? encodeURIComponent(str) : str;
                item += "".concat(key, "=").concat(encodedValue, "&");
              });
              // last character will always be "&" so slice it off
              item.slice(0, -1);
            } else {
              encodedValue = shouldEncode ? encodeURIComponent(value) : value;
              item = "".concat(key, "=").concat(encodedValue);
            }
            return "".concat(accumulator, "&").concat(item);
          }, '');
          // Remove initial "&" from the reduce
          return output.substr(1);
        };
        /**
         * Build the RequestInit object based on the options passed into the initial request
         * @param options The Http plugin options
         * @param extra Any extra RequestInit values
         */
        var buildRequestInit = function buildRequestInit(options) {
          var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var output = Object.assign({
            method: options.method || 'GET',
            headers: options.headers
          }, extra);
          // Get the content-type
          var headers = normalizeHttpHeaders(options.headers);
          var type = headers['content-type'] || '';
          // If body is already a string, then pass it through as-is.
          if (typeof options.data === 'string') {
            output.body = options.data;
          }
          // Build request initializers based off of content-type
          else if (type.includes('application/x-www-form-urlencoded')) {
            var params = new URLSearchParams();
            for (var _i = 0, _Object$entries = Object.entries(options.data || {}); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              params.set(key, value);
            }
            output.body = params.toString();
          } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
            var form = new FormData();
            if (options.data instanceof FormData) {
              options.data.forEach(function (value, key) {
                form.append(key, value);
              });
            } else {
              for (var _i2 = 0, _Object$keys = Object.keys(options.data); _i2 < _Object$keys.length; _i2++) {
                var _key2 = _Object$keys[_i2];
                form.append(_key2, options.data[_key2]);
              }
            }
            output.body = form;
            var _headers = new Headers(output.headers);
            _headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
            output.headers = _headers;
          } else if (type.includes('application/json') || _typeof(options.data) === 'object') {
            output.body = JSON.stringify(options.data);
          }
          return output;
        };
        // WEB IMPLEMENTATION
        var CapacitorHttpPluginWeb = /*#__PURE__*/function (_WebPlugin2) {
          function CapacitorHttpPluginWeb() {
            _classCallCheck(this, CapacitorHttpPluginWeb);
            return _callSuper(this, CapacitorHttpPluginWeb, arguments);
          }
          _inherits(CapacitorHttpPluginWeb, _WebPlugin2);
          return _createClass(CapacitorHttpPluginWeb, [{
            key: "request",
            value: (
            /**
             * Perform an Http request given a set of options
             * @param options Options to build the HTTP request
             */
            function () {
              var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(options) {
                var requestInit, urlParams, url, response, contentType, _ref7, _ref7$responseType, responseType, data, blob, headers, _t7;
                return _regenerator().w(function (_context12) {
                  while (1) switch (_context12.n) {
                    case 0:
                      requestInit = buildRequestInit(options, options.webFetchExtra);
                      urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
                      url = urlParams ? "".concat(options.url, "?").concat(urlParams) : options.url;
                      _context12.n = 1;
                      return fetch(url, requestInit);
                    case 1:
                      response = _context12.v;
                      contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens
                      _ref7 = response.ok ? options : {}, _ref7$responseType = _ref7.responseType, responseType = _ref7$responseType === void 0 ? 'text' : _ref7$responseType; // If the response content-type is json, force the response to be json
                      if (contentType.includes('application/json')) {
                        responseType = 'json';
                      }
                      _t7 = responseType;
                      _context12.n = _t7 === 'arraybuffer' ? 2 : _t7 === 'blob' ? 2 : _t7 === 'json' ? 5 : _t7 === 'document' ? 7 : _t7 === 'text' ? 7 : 7;
                      break;
                    case 2:
                      _context12.n = 3;
                      return response.blob();
                    case 3:
                      blob = _context12.v;
                      _context12.n = 4;
                      return readBlobAsBase64(blob);
                    case 4:
                      data = _context12.v;
                      return _context12.a(3, 9);
                    case 5:
                      _context12.n = 6;
                      return response.json();
                    case 6:
                      data = _context12.v;
                      return _context12.a(3, 9);
                    case 7:
                      _context12.n = 8;
                      return response.text();
                    case 8:
                      data = _context12.v;
                    case 9:
                      // Convert fetch headers to Capacitor HttpHeaders
                      headers = {};
                      response.headers.forEach(function (value, key) {
                        headers[key] = value;
                      });
                      return _context12.a(2, {
                        data: data,
                        headers: headers,
                        status: response.status,
                        url: response.url
                      });
                  }
                }, _callee12);
              }));
              function request(_x6) {
                return _request.apply(this, arguments);
              }
              return request;
            }()
            /**
             * Perform an Http GET request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "get",
            value: (function () {
              var _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(options) {
                return _regenerator().w(function (_context13) {
                  while (1) switch (_context13.n) {
                    case 0:
                      return _context13.a(2, this.request(Object.assign(Object.assign({}, options), {
                        method: 'GET'
                      })));
                  }
                }, _callee13, this);
              }));
              function get(_x7) {
                return _get.apply(this, arguments);
              }
              return get;
            }()
            /**
             * Perform an Http POST request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "post",
            value: (function () {
              var _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(options) {
                return _regenerator().w(function (_context14) {
                  while (1) switch (_context14.n) {
                    case 0:
                      return _context14.a(2, this.request(Object.assign(Object.assign({}, options), {
                        method: 'POST'
                      })));
                  }
                }, _callee14, this);
              }));
              function post(_x8) {
                return _post.apply(this, arguments);
              }
              return post;
            }()
            /**
             * Perform an Http PUT request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "put",
            value: (function () {
              var _put = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(options) {
                return _regenerator().w(function (_context15) {
                  while (1) switch (_context15.n) {
                    case 0:
                      return _context15.a(2, this.request(Object.assign(Object.assign({}, options), {
                        method: 'PUT'
                      })));
                  }
                }, _callee15, this);
              }));
              function put(_x9) {
                return _put.apply(this, arguments);
              }
              return put;
            }()
            /**
             * Perform an Http PATCH request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "patch",
            value: (function () {
              var _patch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(options) {
                return _regenerator().w(function (_context16) {
                  while (1) switch (_context16.n) {
                    case 0:
                      return _context16.a(2, this.request(Object.assign(Object.assign({}, options), {
                        method: 'PATCH'
                      })));
                  }
                }, _callee16, this);
              }));
              function patch(_x0) {
                return _patch.apply(this, arguments);
              }
              return patch;
            }()
            /**
             * Perform an Http DELETE request given a set of options
             * @param options Options to build the HTTP request
             */
            )
          }, {
            key: "delete",
            value: (function () {
              var _delete2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(options) {
                return _regenerator().w(function (_context17) {
                  while (1) switch (_context17.n) {
                    case 0:
                      return _context17.a(2, this.request(Object.assign(Object.assign({}, options), {
                        method: 'DELETE'
                      })));
                  }
                }, _callee17, this);
              }));
              function _delete(_x1) {
                return _delete2.apply(this, arguments);
              }
              return _delete;
            }())
          }]);
        }(WebPlugin);
        registerPlugin('CapacitorHttp', {
          web: function web() {
            return new CapacitorHttpPluginWeb();
          }
        });
        /******** END HTTP PLUGIN ********/
        /******** SYSTEM BARS PLUGIN ********/
        /**
         * Available status bar styles.
         */
        var SystemBarsStyle;
        (function (SystemBarsStyle) {
          /**
           * Light system bar content on a dark background.
           *
           * @since 8.0.0
           */
          SystemBarsStyle["Dark"] = "DARK";
          /**
           * For dark system bar content on a light background.
           *
           * @since 8.0.0
           */
          SystemBarsStyle["Light"] = "LIGHT";
          /**
           * The style is based on the device appearance or the underlying content.
           * If the device is using Dark mode, the system bars content will be light.
           * If the device is using Light mode, the system bars content will be dark.
           *
           * @since 8.0.0
           */
          SystemBarsStyle["Default"] = "DEFAULT";
        })(SystemBarsStyle || (SystemBarsStyle = {}));
        /**
         * Available system bar types.
         */
        var SystemBarType;
        (function (SystemBarType) {
          /**
           * The top status bar on both Android and iOS.
           *
           * @since 8.0.0
           */
          SystemBarType["StatusBar"] = "StatusBar";
          /**
           * The navigation bar (or gesture bar on iOS) on both Android and iOS.
           *
           * @since 8.0.0
           */
          SystemBarType["NavigationBar"] = "NavigationBar";
        })(SystemBarType || (SystemBarType = {}));
        var SystemBarsPluginWeb = /*#__PURE__*/function (_WebPlugin3) {
          function SystemBarsPluginWeb() {
            _classCallCheck(this, SystemBarsPluginWeb);
            return _callSuper(this, SystemBarsPluginWeb, arguments);
          }
          _inherits(SystemBarsPluginWeb, _WebPlugin3);
          return _createClass(SystemBarsPluginWeb, [{
            key: "setStyle",
            value: function () {
              var _setStyle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
                return _regenerator().w(function (_context18) {
                  while (1) switch (_context18.n) {
                    case 0:
                      this.unavailable('not available for web');
                    case 1:
                      return _context18.a(2);
                  }
                }, _callee18, this);
              }));
              function setStyle() {
                return _setStyle.apply(this, arguments);
              }
              return setStyle;
            }()
          }, {
            key: "setAnimation",
            value: function () {
              var _setAnimation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
                return _regenerator().w(function (_context19) {
                  while (1) switch (_context19.n) {
                    case 0:
                      this.unavailable('not available for web');
                    case 1:
                      return _context19.a(2);
                  }
                }, _callee19, this);
              }));
              function setAnimation() {
                return _setAnimation.apply(this, arguments);
              }
              return setAnimation;
            }()
          }, {
            key: "show",
            value: function () {
              var _show = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
                return _regenerator().w(function (_context20) {
                  while (1) switch (_context20.n) {
                    case 0:
                      this.unavailable('not available for web');
                    case 1:
                      return _context20.a(2);
                  }
                }, _callee20, this);
              }));
              function show() {
                return _show.apply(this, arguments);
              }
              return show;
            }()
          }, {
            key: "hide",
            value: function () {
              var _hide = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
                return _regenerator().w(function (_context21) {
                  while (1) switch (_context21.n) {
                    case 0:
                      this.unavailable('not available for web');
                    case 1:
                      return _context21.a(2);
                  }
                }, _callee21, this);
              }));
              function hide() {
                return _hide.apply(this, arguments);
              }
              return hide;
            }()
          }]);
        }(WebPlugin);
        registerPlugin('SystemBars', {
          web: function web() {
            return new SystemBarsPluginWeb();
          }
        });

        /*
         * Maintains navigation history across Capgo-controlled reloads when keepUrlPathAfterReload is enabled.
         */
        var KEEP_FLAG_KEY = '__capgo_keep_url_path_after_reload';
        var HISTORY_STORAGE_KEY = '__capgo_history_stack__';
        var MAX_STACK_ENTRIES = 100;
        var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof history !== 'undefined';
        if (isBrowser) {
          var win = window;
          if (!win.__capgoHistoryPatched) {
            win.__capgoHistoryPatched = true;
            var isFeatureConfigured = function isFeatureConfigured() {
              try {
                if (win.__capgoKeepUrlPathAfterReload) {
                  return true;
                }
              } catch (_a) {
                // ignore access issues
              }
              try {
                return window.localStorage.getItem(KEEP_FLAG_KEY) === '1';
              } catch (_b) {
                return false;
              }
            };
            var readStored = function readStored() {
              try {
                var raw = window.sessionStorage.getItem(HISTORY_STORAGE_KEY);
                if (!raw) {
                  return {
                    stack: [],
                    index: -1
                  };
                }
                var parsed = JSON.parse(raw);
                if (!parsed || !Array.isArray(parsed.stack) || typeof parsed.index !== 'number') {
                  return {
                    stack: [],
                    index: -1
                  };
                }
                return parsed;
              } catch (_a) {
                return {
                  stack: [],
                  index: -1
                };
              }
            };
            var writeStored = function writeStored(stack, index) {
              try {
                window.sessionStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify({
                  stack: stack,
                  index: index
                }));
              } catch (_a) {
                // Storage might be unavailable; fail silently.
              }
            };
            var clearStored = function clearStored() {
              try {
                window.sessionStorage.removeItem(HISTORY_STORAGE_KEY);
              } catch (_a) {
                // ignore
              }
            };
            var normalize = function normalize(url) {
              try {
                var base = url !== null && url !== void 0 ? url : window.location.href;
                var parsed = new URL(base instanceof URL ? base.toString() : base, window.location.href);
                return "".concat(parsed.pathname).concat(parsed.search).concat(parsed.hash);
              } catch (_a) {
                return null;
              }
            };
            var trimStack = function trimStack(stack, index) {
              if (stack.length <= MAX_STACK_ENTRIES) {
                return {
                  stack: stack,
                  index: index
                };
              }
              var start = stack.length - MAX_STACK_ENTRIES;
              var trimmed = stack.slice(start);
              var adjustedIndex = Math.max(0, index - start);
              return {
                stack: trimmed,
                index: adjustedIndex
              };
            };
            var runWhenReady = function runWhenReady(fn) {
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                fn();
              } else {
                window.addEventListener('DOMContentLoaded', fn, {
                  once: true
                });
              }
            };
            var featureActive = false;
            var isRestoring = false;
            var restoreScheduled = false;
            var ensureCurrentTracked = function ensureCurrentTracked() {
              if (!featureActive) {
                return;
              }
              var stored = readStored();
              var current = normalize();
              if (!current) {
                return;
              }
              if (stored.stack.length === 0) {
                stored.stack.push(current);
                stored.index = 0;
                writeStored(stored.stack, stored.index);
                return;
              }
              if (stored.index < 0 || stored.index >= stored.stack.length) {
                stored.index = stored.stack.length - 1;
              }
              if (stored.stack[stored.index] !== current) {
                stored.stack[stored.index] = current;
                writeStored(stored.stack, stored.index);
              }
            };
            var record = function record(url, replace) {
              if (!featureActive || isRestoring) {
                return;
              }
              var normalized = normalize(url);
              if (!normalized) {
                return;
              }
              var _readStored = readStored(),
                stack = _readStored.stack,
                index = _readStored.index;
              if (stack.length === 0) {
                stack.push(normalized);
                index = stack.length - 1;
              } else if (replace) {
                if (index < 0 || index >= stack.length) {
                  index = stack.length - 1;
                }
                stack[index] = normalized;
              } else {
                if (index >= stack.length - 1) {
                  stack.push(normalized);
                  index = stack.length - 1;
                } else {
                  stack = stack.slice(0, index + 1);
                  stack.push(normalized);
                  index = stack.length - 1;
                }
              }
              var _trimStack = trimStack(stack, index);
              stack = _trimStack.stack;
              index = _trimStack.index;
              writeStored(stack, index);
            };
            var restoreHistory = function restoreHistory() {
              if (!featureActive || isRestoring) {
                return;
              }
              var stored = readStored();
              if (stored.stack.length === 0) {
                ensureCurrentTracked();
                return;
              }
              var targetIndex = stored.index >= 0 && stored.index < stored.stack.length ? stored.index : stored.stack.length - 1;
              var normalizedCurrent = normalize();
              if (stored.stack.length === 1 && normalizedCurrent === stored.stack[0]) {
                return;
              }
              var firstEntry = stored.stack[0];
              if (!firstEntry) {
                return;
              }
              isRestoring = true;
              try {
                history.replaceState(history.state, document.title, firstEntry);
                for (var i = 1; i < stored.stack.length; i += 1) {
                  history.pushState(history.state, document.title, stored.stack[i]);
                }
              } catch (_a) {
                isRestoring = false;
                return;
              }
              isRestoring = false;
              var currentIndex = stored.stack.length - 1;
              var offset = targetIndex - currentIndex;
              if (offset !== 0) {
                history.go(offset);
              } else {
                history.replaceState(history.state, document.title, stored.stack[targetIndex]);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            };
            var scheduleRestore = function scheduleRestore() {
              if (!featureActive || restoreScheduled) {
                return;
              }
              restoreScheduled = true;
              runWhenReady(function () {
                restoreScheduled = false;
                restoreHistory();
              });
            };
            var originalPushState = null;
            var originalReplaceState = null;
            var popstateHandler = function popstateHandler() {
              if (!featureActive || isRestoring) {
                return;
              }
              var normalized = normalize();
              if (!normalized) {
                return;
              }
              var stored = readStored();
              var idx = stored.stack.lastIndexOf(normalized);
              if (idx >= 0) {
                stored.index = idx;
              } else {
                stored.stack.push(normalized);
                stored.index = stored.stack.length - 1;
              }
              var trimmed = trimStack(stored.stack, stored.index);
              writeStored(trimmed.stack, trimmed.index);
            };
            var patchHistory = function patchHistory() {
              if (originalPushState && originalReplaceState) {
                return;
              }
              originalPushState = history.pushState;
              originalReplaceState = history.replaceState;
              history.pushState = function pushStatePatched(state, title, url) {
                var result = originalPushState === null || originalPushState === void 0 ? void 0 : originalPushState.call(history, state, title, url);
                record(url, false);
                return result;
              };
              history.replaceState = function replaceStatePatched(state, title, url) {
                var result = originalReplaceState === null || originalReplaceState === void 0 ? void 0 : originalReplaceState.call(history, state, title, url);
                record(url, true);
                return result;
              };
              window.addEventListener('popstate', popstateHandler);
            };
            var unpatchHistory = function unpatchHistory() {
              if (originalPushState) {
                history.pushState = originalPushState;
                originalPushState = null;
              }
              if (originalReplaceState) {
                history.replaceState = originalReplaceState;
                originalReplaceState = null;
              }
              window.removeEventListener('popstate', popstateHandler);
            };
            var setFeatureActive = function setFeatureActive(enabled) {
              if (featureActive === enabled) {
                if (featureActive) {
                  ensureCurrentTracked();
                  scheduleRestore();
                }
                return;
              }
              featureActive = enabled;
              if (featureActive) {
                patchHistory();
                ensureCurrentTracked();
                scheduleRestore();
              } else {
                unpatchHistory();
                clearStored();
              }
            };
            window.addEventListener('CapacitorUpdaterKeepUrlPathAfterReload', function (event) {
              var _a;
              var evt = event;
              var enabled = (_a = evt === null || evt === void 0 ? void 0 : evt.detail) === null || _a === void 0 ? void 0 : _a.enabled;
              if (typeof enabled === 'boolean') {
                win.__capgoKeepUrlPathAfterReload = enabled;
                setFeatureActive(enabled);
              } else {
                win.__capgoKeepUrlPathAfterReload = true;
                setFeatureActive(true);
              }
            });
            setFeatureActive(isFeatureConfigured());
          }
        }

        /*
         * This Source Code Form is subject to the terms of the Mozilla Public
         * License, v. 2.0. If a copy of the MPL was not distributed with this
         * file, You can obtain one at https://mozilla.org/MPL/2.0/.
         */
        /**
         * Update availability status.
         *
         * @since 8.0.0
         */
        var AppUpdateAvailability;
        (function (AppUpdateAvailability) {
          /**
           * Update availability is unknown.
           * This typically means the check hasn't completed or failed.
           */
          AppUpdateAvailability[AppUpdateAvailability["UNKNOWN"] = 0] = "UNKNOWN";
          /**
           * No update is available.
           * The installed version is the latest.
           */
          AppUpdateAvailability[AppUpdateAvailability["UPDATE_NOT_AVAILABLE"] = 1] = "UPDATE_NOT_AVAILABLE";
          /**
           * An update is available for download.
           */
          AppUpdateAvailability[AppUpdateAvailability["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
          /**
           * An update is currently being downloaded or installed.
           */
          AppUpdateAvailability[AppUpdateAvailability["UPDATE_IN_PROGRESS"] = 3] = "UPDATE_IN_PROGRESS";
        })(AppUpdateAvailability || (AppUpdateAvailability = {}));
        /**
         * Installation status for flexible updates (Android only).
         *
         * @since 8.0.0
         */
        var FlexibleUpdateInstallStatus;
        (function (FlexibleUpdateInstallStatus) {
          /**
           * Unknown install status.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["UNKNOWN"] = 0] = "UNKNOWN";
          /**
           * Download is pending and will start soon.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["PENDING"] = 1] = "PENDING";
          /**
           * Download is in progress.
           * Check `bytesDownloaded` and `totalBytesToDownload` for progress.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
          /**
           * The update is being installed.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["INSTALLING"] = 3] = "INSTALLING";
          /**
           * The update has been installed.
           * The app needs to be restarted to use the new version.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["INSTALLED"] = 4] = "INSTALLED";
          /**
           * The update failed to download or install.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["FAILED"] = 5] = "FAILED";
          /**
           * The update was canceled by the user.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["CANCELED"] = 6] = "CANCELED";
          /**
           * The update has been downloaded and is ready to install.
           * Call {@link CapacitorUpdaterPlugin.completeFlexibleUpdate} to install.
           */
          FlexibleUpdateInstallStatus[FlexibleUpdateInstallStatus["DOWNLOADED"] = 11] = "DOWNLOADED";
        })(FlexibleUpdateInstallStatus || (FlexibleUpdateInstallStatus = {}));
        /**
         * Result codes for app update operations.
         *
         * @since 8.0.0
         */
        var AppUpdateResultCode;
        (function (AppUpdateResultCode) {
          /**
           * The update completed successfully.
           */
          AppUpdateResultCode[AppUpdateResultCode["OK"] = 0] = "OK";
          /**
           * The user canceled the update.
           */
          AppUpdateResultCode[AppUpdateResultCode["CANCELED"] = 1] = "CANCELED";
          /**
           * The update failed.
           */
          AppUpdateResultCode[AppUpdateResultCode["FAILED"] = 2] = "FAILED";
          /**
           * No update is available.
           */
          AppUpdateResultCode[AppUpdateResultCode["NOT_AVAILABLE"] = 3] = "NOT_AVAILABLE";
          /**
           * The requested update type is not allowed.
           * For example, trying to perform an immediate update when only flexible is allowed.
           */
          AppUpdateResultCode[AppUpdateResultCode["NOT_ALLOWED"] = 4] = "NOT_ALLOWED";
          /**
           * Required information is missing.
           * This can happen if {@link CapacitorUpdaterPlugin.getAppUpdateInfo} wasn't called first.
           */
          AppUpdateResultCode[AppUpdateResultCode["INFO_MISSING"] = 5] = "INFO_MISSING";
        })(AppUpdateResultCode || (AppUpdateResultCode = {}));
        var CapacitorUpdater = exports("C", registerPlugin('CapacitorUpdater', {
          web: function web() {
            return __vitePreload(function () {
              return Promise.resolve().then(function () {
                return _web;
              });
            }, false ? __VITE_PRELOAD__ : void 0, module.meta.url).then(function (m) {
              return new m.CapacitorUpdaterWeb();
            });
          }
        }));

        /*
         * This Source Code Form is subject to the terms of the Mozilla Public
         * License, v. 2.0. If a copy of the MPL was not distributed with this
         * file, You can obtain one at https://mozilla.org/MPL/2.0/.
         */
        var BUNDLE_BUILTIN = {
          status: 'success',
          version: '',
          downloaded: '1970-01-01T00:00:00.000Z',
          id: 'builtin',
          checksum: ''
        };
        var CapacitorUpdaterWeb = /*#__PURE__*/function (_WebPlugin4) {
          function CapacitorUpdaterWeb() {
            _classCallCheck(this, CapacitorUpdaterWeb);
            return _callSuper(this, CapacitorUpdaterWeb, arguments);
          }
          _inherits(CapacitorUpdaterWeb, _WebPlugin4);
          return _createClass(CapacitorUpdaterWeb, [{
            key: "setStatsUrl",
            value: function () {
              var _setStatsUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(options) {
                return _regenerator().w(function (_context22) {
                  while (1) switch (_context22.n) {
                    case 0:
                      console.warn('Cannot setStatsUrl in web', options);
                      return _context22.a(2);
                  }
                }, _callee22);
              }));
              function setStatsUrl(_x10) {
                return _setStatsUrl.apply(this, arguments);
              }
              return setStatsUrl;
            }()
          }, {
            key: "setUpdateUrl",
            value: function () {
              var _setUpdateUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(options) {
                return _regenerator().w(function (_context23) {
                  while (1) switch (_context23.n) {
                    case 0:
                      console.warn('Cannot setUpdateUrl in web', options);
                      return _context23.a(2);
                  }
                }, _callee23);
              }));
              function setUpdateUrl(_x11) {
                return _setUpdateUrl.apply(this, arguments);
              }
              return setUpdateUrl;
            }()
          }, {
            key: "setChannelUrl",
            value: function () {
              var _setChannelUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(options) {
                return _regenerator().w(function (_context24) {
                  while (1) switch (_context24.n) {
                    case 0:
                      console.warn('Cannot setChannelUrl in web', options);
                      return _context24.a(2);
                  }
                }, _callee24);
              }));
              function setChannelUrl(_x12) {
                return _setChannelUrl.apply(this, arguments);
              }
              return setChannelUrl;
            }()
          }, {
            key: "download",
            value: function () {
              var _download = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(options) {
                return _regenerator().w(function (_context25) {
                  while (1) switch (_context25.n) {
                    case 0:
                      console.warn('Cannot download version in web', options);
                      return _context25.a(2, BUNDLE_BUILTIN);
                  }
                }, _callee25);
              }));
              function download(_x13) {
                return _download.apply(this, arguments);
              }
              return download;
            }()
          }, {
            key: "next",
            value: function () {
              var _next2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(options) {
                return _regenerator().w(function (_context26) {
                  while (1) switch (_context26.n) {
                    case 0:
                      console.warn('Cannot set next version in web', options);
                      return _context26.a(2, BUNDLE_BUILTIN);
                  }
                }, _callee26);
              }));
              function next(_x14) {
                return _next2.apply(this, arguments);
              }
              return next;
            }()
          }, {
            key: "isAutoUpdateEnabled",
            value: function () {
              var _isAutoUpdateEnabled = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
                return _regenerator().w(function (_context27) {
                  while (1) switch (_context27.n) {
                    case 0:
                      console.warn('Cannot get isAutoUpdateEnabled in web');
                      return _context27.a(2, {
                        enabled: false
                      });
                  }
                }, _callee27);
              }));
              function isAutoUpdateEnabled() {
                return _isAutoUpdateEnabled.apply(this, arguments);
              }
              return isAutoUpdateEnabled;
            }()
          }, {
            key: "set",
            value: function () {
              var _set = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(options) {
                return _regenerator().w(function (_context28) {
                  while (1) switch (_context28.n) {
                    case 0:
                      console.warn('Cannot set active bundle in web', options);
                      return _context28.a(2);
                  }
                }, _callee28);
              }));
              function set(_x15) {
                return _set.apply(this, arguments);
              }
              return set;
            }()
          }, {
            key: "startPreviewSession",
            value: function () {
              var _startPreviewSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(options) {
                return _regenerator().w(function (_context29) {
                  while (1) switch (_context29.n) {
                    case 0:
                      console.warn('Cannot start preview session in web', options);
                      return _context29.a(2);
                  }
                }, _callee29);
              }));
              function startPreviewSession(_x16) {
                return _startPreviewSession.apply(this, arguments);
              }
              return startPreviewSession;
            }()
          }, {
            key: "listPreviews",
            value: function () {
              var _listPreviews = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30() {
                return _regenerator().w(function (_context30) {
                  while (1) switch (_context30.n) {
                    case 0:
                      console.warn('Cannot list previews in web');
                      return _context30.a(2, {
                        previews: [],
                        currentBundle: BUNDLE_BUILTIN
                      });
                  }
                }, _callee30);
              }));
              function listPreviews() {
                return _listPreviews.apply(this, arguments);
              }
              return listPreviews;
            }()
          }, {
            key: "setPreview",
            value: function () {
              var _setPreview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(options) {
                return _regenerator().w(function (_context31) {
                  while (1) switch (_context31.n) {
                    case 0:
                      console.warn('Cannot set preview in web', options);
                      return _context31.a(2);
                  }
                }, _callee31);
              }));
              function setPreview(_x17) {
                return _setPreview.apply(this, arguments);
              }
              return setPreview;
            }()
          }, {
            key: "resetPreview",
            value: function () {
              var _resetPreview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32() {
                return _regenerator().w(function (_context32) {
                  while (1) switch (_context32.n) {
                    case 0:
                      console.warn('Cannot reset preview in web');
                      return _context32.a(2);
                  }
                }, _callee32);
              }));
              function resetPreview() {
                return _resetPreview.apply(this, arguments);
              }
              return resetPreview;
            }()
          }, {
            key: "deletePreview",
            value: function () {
              var _deletePreview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(options) {
                return _regenerator().w(function (_context33) {
                  while (1) switch (_context33.n) {
                    case 0:
                      console.warn('Cannot delete preview in web', options);
                      return _context33.a(2, {
                        removed: false,
                        deleted: false
                      });
                  }
                }, _callee33);
              }));
              function deletePreview(_x18) {
                return _deletePreview.apply(this, arguments);
              }
              return deletePreview;
            }()
          }, {
            key: "checkPreviewUpdate",
            value: function () {
              var _checkPreviewUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(options) {
                return _regenerator().w(function (_context34) {
                  while (1) switch (_context34.n) {
                    case 0:
                      console.warn('Cannot check preview update in web', options);
                      throw this.unimplemented('Preview updates are not available on web platform');
                    case 1:
                      return _context34.a(2);
                  }
                }, _callee34, this);
              }));
              function checkPreviewUpdate(_x19) {
                return _checkPreviewUpdate.apply(this, arguments);
              }
              return checkPreviewUpdate;
            }()
          }, {
            key: "updatePreview",
            value: function () {
              var _updatePreview = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(options) {
                return _regenerator().w(function (_context35) {
                  while (1) switch (_context35.n) {
                    case 0:
                      console.warn('Cannot update preview in web', options);
                      throw this.unimplemented('Preview updates are not available on web platform');
                    case 1:
                      return _context35.a(2);
                  }
                }, _callee35, this);
              }));
              function updatePreview(_x20) {
                return _updatePreview.apply(this, arguments);
              }
              return updatePreview;
            }()
          }, {
            key: "getDeviceId",
            value: function () {
              var _getDeviceId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
                return _regenerator().w(function (_context36) {
                  while (1) switch (_context36.n) {
                    case 0:
                      console.warn('Cannot get ID in web');
                      return _context36.a(2, {
                        deviceId: 'default'
                      });
                  }
                }, _callee36);
              }));
              function getDeviceId() {
                return _getDeviceId.apply(this, arguments);
              }
              return getDeviceId;
            }()
          }, {
            key: "getBuiltinVersion",
            value: function () {
              var _getBuiltinVersion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37() {
                return _regenerator().w(function (_context37) {
                  while (1) switch (_context37.n) {
                    case 0:
                      console.warn('Cannot get version in web');
                      return _context37.a(2, {
                        version: 'default'
                      });
                  }
                }, _callee37);
              }));
              function getBuiltinVersion() {
                return _getBuiltinVersion.apply(this, arguments);
              }
              return getBuiltinVersion;
            }()
          }, {
            key: "getPluginVersion",
            value: function () {
              var _getPluginVersion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
                return _regenerator().w(function (_context38) {
                  while (1) switch (_context38.n) {
                    case 0:
                      console.warn('Cannot get plugin version in web');
                      return _context38.a(2, {
                        version: 'default'
                      });
                  }
                }, _callee38);
              }));
              function getPluginVersion() {
                return _getPluginVersion.apply(this, arguments);
              }
              return getPluginVersion;
            }()
          }, {
            key: "delete",
            value: function () {
              var _delete3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39(options) {
                return _regenerator().w(function (_context39) {
                  while (1) switch (_context39.n) {
                    case 0:
                      console.warn('Cannot delete bundle in web', options);
                    case 1:
                      return _context39.a(2);
                  }
                }, _callee39);
              }));
              function _delete(_x21) {
                return _delete3.apply(this, arguments);
              }
              return _delete;
            }()
          }, {
            key: "setBundleError",
            value: function () {
              var _setBundleError = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40(options) {
                return _regenerator().w(function (_context40) {
                  while (1) switch (_context40.n) {
                    case 0:
                      console.warn('Cannot setBundleError in web', options);
                      return _context40.a(2, BUNDLE_BUILTIN);
                  }
                }, _callee40);
              }));
              function setBundleError(_x22) {
                return _setBundleError.apply(this, arguments);
              }
              return setBundleError;
            }()
          }, {
            key: "list",
            value: function () {
              var _list = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
                return _regenerator().w(function (_context41) {
                  while (1) switch (_context41.n) {
                    case 0:
                      console.warn('Cannot list bundles in web');
                      return _context41.a(2, {
                        bundles: []
                      });
                  }
                }, _callee41);
              }));
              function list() {
                return _list.apply(this, arguments);
              }
              return list;
            }()
          }, {
            key: "reset",
            value: function () {
              var _reset = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42(options) {
                return _regenerator().w(function (_context42) {
                  while (1) switch (_context42.n) {
                    case 0:
                      console.warn('Cannot reset version in web', options);
                    case 1:
                      return _context42.a(2);
                  }
                }, _callee42);
              }));
              function reset(_x23) {
                return _reset.apply(this, arguments);
              }
              return reset;
            }()
          }, {
            key: "current",
            value: function () {
              var _current = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
                return _regenerator().w(function (_context43) {
                  while (1) switch (_context43.n) {
                    case 0:
                      console.warn('Cannot get current bundle in web');
                      return _context43.a(2, {
                        bundle: BUNDLE_BUILTIN,
                        native: '0.0.0'
                      });
                  }
                }, _callee43);
              }));
              function current() {
                return _current.apply(this, arguments);
              }
              return current;
            }()
          }, {
            key: "reload",
            value: function () {
              var _reload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44() {
                return _regenerator().w(function (_context44) {
                  while (1) switch (_context44.n) {
                    case 0:
                      console.warn('Cannot reload current bundle in web');
                      return _context44.a(2);
                  }
                }, _callee44);
              }));
              function reload() {
                return _reload.apply(this, arguments);
              }
              return reload;
            }()
          }, {
            key: "getLatest",
            value: function () {
              var _getLatest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
                return _regenerator().w(function (_context45) {
                  while (1) switch (_context45.n) {
                    case 0:
                      console.warn('Cannot getLatest current bundle in web');
                      return _context45.a(2, {
                        version: '0.0.0',
                        message: 'Cannot getLatest current bundle in web'
                      });
                  }
                }, _callee45);
              }));
              function getLatest() {
                return _getLatest.apply(this, arguments);
              }
              return getLatest;
            }()
          }, {
            key: "triggerUpdateCheck",
            value: function () {
              var _triggerUpdateCheck = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee46() {
                return _regenerator().w(function (_context46) {
                  while (1) switch (_context46.n) {
                    case 0:
                      console.warn('Cannot triggerUpdateCheck in web');
                      return _context46.a(2, {
                        status: 'unavailable',
                        queued: false
                      });
                  }
                }, _callee46);
              }));
              function triggerUpdateCheck() {
                return _triggerUpdateCheck.apply(this, arguments);
              }
              return triggerUpdateCheck;
            }()
          }, {
            key: "getMissingBundleFiles",
            value: function () {
              var _getMissingBundleFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee47(options) {
                var _a, _b, _c, missing;
                return _regenerator().w(function (_context47) {
                  while (1) switch (_context47.n) {
                    case 0:
                      console.warn('Cannot inspect missing bundle files in web', {
                        manifestLength: (_b = (_a = options.manifest) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0
                      });
                      missing = (_c = options.manifest) !== null && _c !== void 0 ? _c : [];
                      return _context47.a(2, {
                        missing: missing,
                        total: missing.length,
                        missingCount: missing.length,
                        reusableCount: 0
                      });
                  }
                }, _callee47);
              }));
              function getMissingBundleFiles(_x24) {
                return _getMissingBundleFiles.apply(this, arguments);
              }
              return getMissingBundleFiles;
            }()
          }, {
            key: "getBundleDownloadSize",
            value: function () {
              var _getBundleDownloadSize = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee48(options) {
                var _a, _b, _c, _d, _e;
                return _regenerator().w(function (_context48) {
                  while (1) switch (_context48.n) {
                    case 0:
                      console.warn('Cannot estimate bundle download size in web', {
                        manifestLength: (_b = (_a = options.manifest) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0
                      });
                      return _context48.a(2, {
                        totalSize: 0,
                        knownFiles: 0,
                        unknownFiles: (_d = (_c = options.manifest) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0,
                        files: ((_e = options.manifest) !== null && _e !== void 0 ? _e : []).map(function (entry) {
                          return {
                            file_name: entry.file_name,
                            file_hash: entry.file_hash,
                            download_url: entry.download_url,
                            error: 'unavailable'
                          };
                        })
                      });
                  }
                }, _callee48);
              }));
              function getBundleDownloadSize(_x25) {
                return _getBundleDownloadSize.apply(this, arguments);
              }
              return getBundleDownloadSize;
            }()
          }, {
            key: "setChannel",
            value: function () {
              var _setChannel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee49(options) {
                return _regenerator().w(function (_context49) {
                  while (1) switch (_context49.n) {
                    case 0:
                      console.warn('Cannot setChannel in web', options);
                      return _context49.a(2, {
                        status: 'error',
                        error: 'Cannot setChannel in web'
                      });
                  }
                }, _callee49);
              }));
              function setChannel(_x26) {
                return _setChannel.apply(this, arguments);
              }
              return setChannel;
            }()
          }, {
            key: "unsetChannel",
            value: function () {
              var _unsetChannel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee50(options) {
                return _regenerator().w(function (_context50) {
                  while (1) switch (_context50.n) {
                    case 0:
                      console.warn('Cannot unsetChannel in web', options);
                      return _context50.a(2);
                  }
                }, _callee50);
              }));
              function unsetChannel(_x27) {
                return _unsetChannel.apply(this, arguments);
              }
              return unsetChannel;
            }()
          }, {
            key: "setCustomId",
            value: function () {
              var _setCustomId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee51(options) {
                return _regenerator().w(function (_context51) {
                  while (1) switch (_context51.n) {
                    case 0:
                      console.warn('Cannot setCustomId in web', options);
                      return _context51.a(2);
                  }
                }, _callee51);
              }));
              function setCustomId(_x28) {
                return _setCustomId.apply(this, arguments);
              }
              return setCustomId;
            }()
          }, {
            key: "getChannel",
            value: function () {
              var _getChannel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee52() {
                return _regenerator().w(function (_context52) {
                  while (1) switch (_context52.n) {
                    case 0:
                      console.warn('Cannot getChannel in web');
                      return _context52.a(2, {
                        status: 'error',
                        error: 'Cannot getChannel in web'
                      });
                  }
                }, _callee52);
              }));
              function getChannel() {
                return _getChannel.apply(this, arguments);
              }
              return getChannel;
            }()
          }, {
            key: "listChannels",
            value: function () {
              var _listChannels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee53() {
                return _regenerator().w(function (_context53) {
                  while (1) switch (_context53.n) {
                    case 0:
                      console.warn('Cannot listChannels in web');
                      throw {
                        message: 'Cannot listChannels in web',
                        error: 'platform_not_supported'
                      };
                    case 1:
                      return _context53.a(2);
                  }
                }, _callee53);
              }));
              function listChannels() {
                return _listChannels.apply(this, arguments);
              }
              return listChannels;
            }()
          }, {
            key: "notifyAppReady",
            value: function () {
              var _notifyAppReady = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee54() {
                return _regenerator().w(function (_context54) {
                  while (1) switch (_context54.n) {
                    case 0:
                      return _context54.a(2, {
                        bundle: BUNDLE_BUILTIN
                      });
                  }
                }, _callee54);
              }));
              function notifyAppReady() {
                return _notifyAppReady.apply(this, arguments);
              }
              return notifyAppReady;
            }()
          }, {
            key: "setMultiDelay",
            value: function () {
              var _setMultiDelay = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee55(options) {
                return _regenerator().w(function (_context55) {
                  while (1) switch (_context55.n) {
                    case 0:
                      console.warn('Cannot setMultiDelay in web', options === null || options === void 0 ? void 0 : options.delayConditions);
                      return _context55.a(2);
                  }
                }, _callee55);
              }));
              function setMultiDelay(_x29) {
                return _setMultiDelay.apply(this, arguments);
              }
              return setMultiDelay;
            }()
          }, {
            key: "cancelDelay",
            value: function () {
              var _cancelDelay = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee56() {
                return _regenerator().w(function (_context56) {
                  while (1) switch (_context56.n) {
                    case 0:
                      console.warn('Cannot cancelDelay in web');
                      return _context56.a(2);
                  }
                }, _callee56);
              }));
              function cancelDelay() {
                return _cancelDelay.apply(this, arguments);
              }
              return cancelDelay;
            }()
          }, {
            key: "isAutoUpdateAvailable",
            value: function () {
              var _isAutoUpdateAvailable = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee57() {
                return _regenerator().w(function (_context57) {
                  while (1) switch (_context57.n) {
                    case 0:
                      console.warn('Cannot isAutoUpdateAvailable in web');
                      return _context57.a(2, {
                        available: false
                      });
                  }
                }, _callee57);
              }));
              function isAutoUpdateAvailable() {
                return _isAutoUpdateAvailable.apply(this, arguments);
              }
              return isAutoUpdateAvailable;
            }()
          }, {
            key: "getCurrentBundle",
            value: function () {
              var _getCurrentBundle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee58() {
                return _regenerator().w(function (_context58) {
                  while (1) switch (_context58.n) {
                    case 0:
                      console.warn('Cannot get current bundle in web');
                      return _context58.a(2, BUNDLE_BUILTIN);
                  }
                }, _callee58);
              }));
              function getCurrentBundle() {
                return _getCurrentBundle.apply(this, arguments);
              }
              return getCurrentBundle;
            }()
          }, {
            key: "getNextBundle",
            value: function () {
              var _getNextBundle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee59() {
                return _regenerator().w(function (_context59) {
                  while (1) switch (_context59.n) {
                    case 0:
                      return _context59.a(2, Promise.resolve(null));
                  }
                }, _callee59);
              }));
              function getNextBundle() {
                return _getNextBundle.apply(this, arguments);
              }
              return getNextBundle;
            }()
          }, {
            key: "getFailedUpdate",
            value: function () {
              var _getFailedUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee60() {
                return _regenerator().w(function (_context60) {
                  while (1) switch (_context60.n) {
                    case 0:
                      console.warn('Cannot getFailedUpdate in web');
                      return _context60.a(2, null);
                  }
                }, _callee60);
              }));
              function getFailedUpdate() {
                return _getFailedUpdate.apply(this, arguments);
              }
              return getFailedUpdate;
            }()
          }, {
            key: "setShakeMenu",
            value: function () {
              var _setShakeMenu = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee61(_options) {
                return _regenerator().w(function (_context61) {
                  while (1) switch (_context61.n) {
                    case 0:
                      throw this.unimplemented('Shake menu not available on web platform');
                    case 1:
                      return _context61.a(2);
                  }
                }, _callee61, this);
              }));
              function setShakeMenu(_x30) {
                return _setShakeMenu.apply(this, arguments);
              }
              return setShakeMenu;
            }()
          }, {
            key: "isShakeMenuEnabled",
            value: function () {
              var _isShakeMenuEnabled = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee62() {
                return _regenerator().w(function (_context62) {
                  while (1) switch (_context62.n) {
                    case 0:
                      return _context62.a(2, Promise.resolve({
                        enabled: false,
                        gesture: 'shake'
                      }));
                  }
                }, _callee62);
              }));
              function isShakeMenuEnabled() {
                return _isShakeMenuEnabled.apply(this, arguments);
              }
              return isShakeMenuEnabled;
            }()
          }, {
            key: "setShakeChannelSelector",
            value: function () {
              var _setShakeChannelSelector = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee63(_options) {
                return _regenerator().w(function (_context63) {
                  while (1) switch (_context63.n) {
                    case 0:
                      throw this.unimplemented('Shake channel selector not available on web platform');
                    case 1:
                      return _context63.a(2);
                  }
                }, _callee63, this);
              }));
              function setShakeChannelSelector(_x31) {
                return _setShakeChannelSelector.apply(this, arguments);
              }
              return setShakeChannelSelector;
            }()
          }, {
            key: "isShakeChannelSelectorEnabled",
            value: function () {
              var _isShakeChannelSelectorEnabled = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee64() {
                return _regenerator().w(function (_context64) {
                  while (1) switch (_context64.n) {
                    case 0:
                      return _context64.a(2, Promise.resolve({
                        enabled: false
                      }));
                  }
                }, _callee64);
              }));
              function isShakeChannelSelectorEnabled() {
                return _isShakeChannelSelectorEnabled.apply(this, arguments);
              }
              return isShakeChannelSelectorEnabled;
            }()
          }, {
            key: "getAppId",
            value: function () {
              var _getAppId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee65() {
                return _regenerator().w(function (_context65) {
                  while (1) switch (_context65.n) {
                    case 0:
                      console.warn('Cannot getAppId in web');
                      return _context65.a(2, {
                        appId: 'default'
                      });
                  }
                }, _callee65);
              }));
              function getAppId() {
                return _getAppId.apply(this, arguments);
              }
              return getAppId;
            }()
          }, {
            key: "setAppId",
            value: function () {
              var _setAppId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee66(options) {
                return _regenerator().w(function (_context66) {
                  while (1) switch (_context66.n) {
                    case 0:
                      console.warn('Cannot setAppId in web', options);
                      return _context66.a(2);
                  }
                }, _callee66);
              }));
              function setAppId(_x32) {
                return _setAppId.apply(this, arguments);
              }
              return setAppId;
            }() // ============================================================================
            // App Store / Play Store Update Methods (Web stubs)
            // ============================================================================
          }, {
            key: "getAppUpdateInfo",
            value: function () {
              var _getAppUpdateInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee67(_options) {
                return _regenerator().w(function (_context67) {
                  while (1) switch (_context67.n) {
                    case 0:
                      console.warn('getAppUpdateInfo is not available on web platform');
                      return _context67.a(2, {
                        currentVersionName: '0.0.0',
                        currentVersionCode: '0',
                        updateAvailability: AppUpdateAvailability.UNKNOWN
                      });
                  }
                }, _callee67);
              }));
              function getAppUpdateInfo(_x33) {
                return _getAppUpdateInfo.apply(this, arguments);
              }
              return getAppUpdateInfo;
            }()
          }, {
            key: "openAppStore",
            value: function () {
              var _openAppStore = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee68(_options) {
                return _regenerator().w(function (_context68) {
                  while (1) switch (_context68.n) {
                    case 0:
                      throw this.unimplemented('openAppStore is not available on web platform');
                    case 1:
                      return _context68.a(2);
                  }
                }, _callee68, this);
              }));
              function openAppStore(_x34) {
                return _openAppStore.apply(this, arguments);
              }
              return openAppStore;
            }()
          }, {
            key: "performImmediateUpdate",
            value: function () {
              var _performImmediateUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee69() {
                return _regenerator().w(function (_context69) {
                  while (1) switch (_context69.n) {
                    case 0:
                      throw this.unimplemented('performImmediateUpdate is only available on Android');
                    case 1:
                      return _context69.a(2);
                  }
                }, _callee69, this);
              }));
              function performImmediateUpdate() {
                return _performImmediateUpdate.apply(this, arguments);
              }
              return performImmediateUpdate;
            }()
          }, {
            key: "startFlexibleUpdate",
            value: function () {
              var _startFlexibleUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee70() {
                return _regenerator().w(function (_context70) {
                  while (1) switch (_context70.n) {
                    case 0:
                      throw this.unimplemented('startFlexibleUpdate is only available on Android');
                    case 1:
                      return _context70.a(2);
                  }
                }, _callee70, this);
              }));
              function startFlexibleUpdate() {
                return _startFlexibleUpdate.apply(this, arguments);
              }
              return startFlexibleUpdate;
            }()
          }, {
            key: "completeFlexibleUpdate",
            value: function () {
              var _completeFlexibleUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee71() {
                return _regenerator().w(function (_context71) {
                  while (1) switch (_context71.n) {
                    case 0:
                      throw this.unimplemented('completeFlexibleUpdate is only available on Android');
                    case 1:
                      return _context71.a(2);
                  }
                }, _callee71, this);
              }));
              function completeFlexibleUpdate() {
                return _completeFlexibleUpdate.apply(this, arguments);
              }
              return completeFlexibleUpdate;
            }()
          }]);
        }(WebPlugin);
        var _web = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          CapacitorUpdaterWeb: CapacitorUpdaterWeb
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
      }
    };
  });
})();
