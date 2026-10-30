export function __vite_legacy_guard(){import.meta.url;import("_").catch(()=>1);(async function*(){})().next()};var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$J = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$I = fails$J;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$I(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var fails$H = fails$J;

var functionBindNative = !fails$H(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$D = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var functionCall = NATIVE_BIND$3 ? call$D.bind(call$D) : function () {
  return call$D.apply(call$D, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$9 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$C = FunctionPrototype$2.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$C, call$C);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$C.apply(fn, arguments);
  };
};

var uncurryThis$Q = functionUncurryThis;

var toString$h = uncurryThis$Q({}.toString);
var stringSlice$b = uncurryThis$Q(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$b(toString$h(it), 8, -1);
};

var uncurryThis$P = functionUncurryThis;
var fails$G = fails$J;
var classof$i = classofRaw$2;

var $Object$4 = Object;
var split$3 = uncurryThis$P(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$G(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$i(it) === 'String' ? split$3(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$u = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (isNullOrUndefined$4(it)) throw new $TypeError$u("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$4 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$6 = function (it) {
  return IndexedObject$4(requireObjectCoercible$6(it));
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$x = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$w = isCallable$x;

var isObject$p = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$w(it);
};

var globalThis$Z = globalThis_1;
var isCallable$v = isCallable$x;

var aFunction = function (argument) {
  return isCallable$v(argument) ? argument : undefined;
};

var getBuiltIn$f = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$Z[namespace]) : globalThis$Z[namespace] && globalThis$Z[namespace][method];
};

var uncurryThis$O = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$O({}.isPrototypeOf);

var globalThis$Y = globalThis_1;

var navigator = globalThis$Y.navigator;
var userAgent$7 = navigator && navigator.userAgent;

var environmentUserAgent = userAgent$7 ? String(userAgent$7) : '';

var globalThis$X = globalThis_1;
var userAgent$6 = environmentUserAgent;

var process$3 = globalThis$X.process;
var Deno$1 = globalThis$X.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$6) {
  match = userAgent$6.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$6.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var environmentV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = environmentV8Version;
var fails$F = fails$J;
var globalThis$W = globalThis_1;

var $String$7 = globalThis$W.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$F(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$7(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$4 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$4 &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';

var getBuiltIn$e = getBuiltIn$f;
var isCallable$u = isCallable$x;
var isPrototypeOf$9 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$e('Symbol');
  return isCallable$u($Symbol) && isPrototypeOf$9($Symbol.prototype, $Object$3(it));
};

var $String$6 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$6(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$t = isCallable$x;
var tryToString$5 = tryToString$6;

var $TypeError$t = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$o = function (argument) {
  if (isCallable$t(argument)) return argument;
  throw new $TypeError$t(tryToString$5(argument) + ' is not a function');
};

var aCallable$n = aCallable$o;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$6 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$n(func);
};

var call$B = functionCall;
var isCallable$s = isCallable$x;
var isObject$o = isObject$p;

var $TypeError$s = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$s(fn = input.toString) && !isObject$o(val = call$B(fn, input))) return val;
  if (isCallable$s(fn = input.valueOf) && !isObject$o(val = call$B(fn, input))) return val;
  if (pref !== 'string' && isCallable$s(fn = input.toString) && !isObject$o(val = call$B(fn, input))) return val;
  throw new $TypeError$s("Can't convert object to primitive value");
};

var sharedStore = {exports: {}};

var isPure = false;

var globalThis$V = globalThis_1;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$9 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$9(globalThis$V, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis$V[key] = value;
  } return value;
};

var globalThis$U = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$U[SHARED] || defineGlobalProperty$2(SHARED, {});

(store$3.versions || (store$3.versions = [])).push({
  version: '3.51.0',
  mode: 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.exports;

var store$2 = sharedStoreExports;
// eslint-disable-next-line es/no-object-create -- safe
var create$9 = Object.create || Object;

var shared$4 = function (key, value) {
  return store$2[key] || (store$2[key] = value || create$9(null));
};

var requireObjectCoercible$5 = requireObjectCoercible$7;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$d = function (argument) {
  return $Object$2(requireObjectCoercible$5(argument));
};

var uncurryThis$N = functionUncurryThis;
var toObject$c = toObject$d;

var hasOwnProperty = uncurryThis$N({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$c(it), key);
};

var uncurryThis$M = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$g = uncurryThis$M(1.1.toString);

var uid$5 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$g(++id + postfix, 36);
};

var globalThis$T = globalThis_1;
var shared$3 = shared$4;
var hasOwn$o = hasOwnProperty_1;
var uid$4 = uid$5;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = globalThis$T.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

var wellKnownSymbol$q = function (name) {
  if (!hasOwn$o(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$3 && hasOwn$o(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$A = functionCall;
var isObject$n = isObject$p;
var isSymbol$4 = isSymbol$5;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$p = wellKnownSymbol$q;

var $TypeError$r = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$p('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$n(input) || isSymbol$4(input)) return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$A(exoticToPrim, input, pref);
    if (!isObject$n(result) || isSymbol$4(result)) return result;
    throw new $TypeError$r("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol$3 = isSymbol$5;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$3(key) ? key : key + '';
};

var globalThis$S = globalThis_1;
var isObject$m = isObject$p;

var document$3 = globalThis$S.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$m(document$3) && isObject$m(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$v = descriptors;
var fails$E = fails$J;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$v && !fails$E(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$u = descriptors;
var call$z = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$8 = createPropertyDescriptor$9;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$n = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$u ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$n(O, P)) return createPropertyDescriptor$8(!call$z(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$t = descriptors;
var fails$D = fails$J;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$t && fails$D(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$l = isObject$p;

var $String$5 = String;
var $TypeError$q = TypeError;

// `Assert: Type(argument) is Object`
var anObject$q = function (argument) {
  if (isObject$l(argument)) return argument;
  throw new $TypeError$q($String$5(argument) + ' is not an object');
};

var DESCRIPTORS$s = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$p = anObject$q;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$p = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$s ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$p(O);
  P = toPropertyKey$1(P);
  anObject$p(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$p(O);
  P = toPropertyKey$1(P);
  anObject$p(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$p('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$r = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$7 = createPropertyDescriptor$9;

var createNonEnumerableProperty$f = DESCRIPTORS$r ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$7(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$q = descriptors;
var hasOwn$m = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$q && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$m(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$q || (DESCRIPTORS$q && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$L = functionUncurryThis;
var isCallable$r = isCallable$x;
var store$1 = sharedStoreExports;

var functionToString = uncurryThis$L(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$r(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var globalThis$R = globalThis_1;
var isCallable$q = isCallable$x;

var WeakMap$2 = globalThis$R.WeakMap;

var weakMapBasicDetection = isCallable$q(WeakMap$2) && /native code/.test(String(WeakMap$2));

var shared$2 = shared$4;
var uid$3 = uid$5;

var keys$2 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$2[key] || (keys$2[key] = uid$3(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$Q = globalThis_1;
var isObject$k = isObject$p;
var createNonEnumerableProperty$e = createNonEnumerableProperty$f;
var hasOwn$l = hasOwnProperty_1;
var shared$1 = sharedStoreExports;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$8 = globalThis$Q.TypeError;
var WeakMap$1 = globalThis$Q.WeakMap;
var set$7, get$5, has$b;

var enforce = function (it) {
  return has$b(it) ? get$5(it) : set$7(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$k(it) || (state = get$5(it)).type !== TYPE) {
      throw new TypeError$8('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap$1());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$7 = function (it, metadata) {
    if (store.has(it)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$5 = function (it) {
    return store.get(it) || {};
  };
  has$b = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$7 = function (it, metadata) {
    if (hasOwn$l(it, STATE)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$e(it, STATE, metadata);
    return metadata;
  };
  get$5 = function (it) {
    return hasOwn$l(it, STATE) ? it[STATE] : {};
  };
  has$b = function (it) {
    return hasOwn$l(it, STATE);
  };
}

var internalState = {
  set: set$7,
  get: get$5,
  has: has$b,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$K = functionUncurryThis;
var fails$C = fails$J;
var isCallable$p = isCallable$x;
var hasOwn$k = hasOwnProperty_1;
var DESCRIPTORS$p = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$9 = internalState;

var enforceInternalState$3 = InternalStateModule$9.enforce;
var getInternalState$7 = InternalStateModule$9.get;
var $String$4 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$8 = Object.defineProperty;
var stringSlice$a = uncurryThis$K(''.slice);
var replace$b = uncurryThis$K(''.replace);
var join$6 = uncurryThis$K([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$p && !fails$C(function () {
  return defineProperty$8(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$a($String$4(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$b($String$4(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$k(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$p) defineProperty$8(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$k(options, 'arity') && value.length !== options.arity) {
    defineProperty$8(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$k(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$p) defineProperty$8(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$3(value);
  if (!hasOwn$k(state, 'source')) {
    state.source = join$6(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$p(this) && getInternalState$7(this).source || inspectSource$2(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$3.exports;

var isCallable$o = isCallable$x;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$e = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$o(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$8 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$8 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$a = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$9 = toIntegerOrInfinity$a;

var max$4 = Math.max;
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$9(index);
  return integer < 0 ? max$4(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$8 = toIntegerOrInfinity$a;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  var len = toIntegerOrInfinity$8(argument);
  return len > 0 ? min$3(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$i = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$h = lengthOfArrayLike$i;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$h(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$5(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$5(false)
};

var uncurryThis$J = functionUncurryThis;
var hasOwn$j = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$2 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$a = uncurryThis$J([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$j(hiddenKeys$2, key) && hasOwn$j(O, key) && push$a(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$j(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$a(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$d = getBuiltIn$f;
var uncurryThis$I = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$o = anObject$q;

var concat$2 = uncurryThis$I([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$d('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$o(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$i = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$5 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$i(target, key) && !(exceptions && hasOwn$i(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$B = fails$J;
var isCallable$n = isCallable$x;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$n(detection) ? fails$B(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var globalThis$P = globalThis_1;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$d = createNonEnumerableProperty$f;
var defineBuiltIn$d = defineBuiltIn$e;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$4 = copyConstructorProperties$5;
var isForced$2 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis$P;
  } else if (STATIC) {
    target = globalThis$P[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$P[TARGET] && globalThis$P[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$4(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$d(sourceProperty, 'sham', true);
    }
    defineBuiltIn$d(target, key, sourceProperty, options);
  }
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$5 = FunctionPrototype.apply;
var call$y = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$y.bind(apply$5) : function () {
  return call$y.apply(apply$5, arguments);
});

var uncurryThis$H = functionUncurryThis;
var aCallable$m = aCallable$o;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$H(aCallable$m(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isObject$j = isObject$p;

var isPossiblePrototype$1 = function (argument) {
  return isObject$j(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;

var $String$3 = String;
var $TypeError$o = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$o("Can't set " + $String$3(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor$3 = functionUncurryThisAccessor;
var isObject$i = isObject$p;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor$3(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible$4(O);
    aPossiblePrototype(proto);
    if (!isObject$i(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$7 = objectDefineProperty.f;

var proxyAccessor$2 = function (Target, Source, key) {
  key in Target || defineProperty$7(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var isCallable$m = isCallable$x;
var isObject$h = isObject$p;
var setPrototypeOf$7 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$5 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$7 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$m(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$h(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$7($this, NewTargetPrototype);
  return $this;
};

var wellKnownSymbol$o = wellKnownSymbol$q;

var TO_STRING_TAG$6 = wellKnownSymbol$o('toStringTag');
var test$2 = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test$2[TO_STRING_TAG$6] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$l = isCallable$x;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$n = wellKnownSymbol$q;

var TO_STRING_TAG$5 = wellKnownSymbol$n('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$h = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$5)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$l(O.callee) ? 'Arguments' : result;
};

var classof$g = classof$h;

var $String$2 = String;

var toString$f = function (argument) {
  if (classof$g(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$2(argument);
};

var toString$e = toString$f;

var normalizeStringArgument$3 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$e(argument);
};

var isObject$g = isObject$p;
var createNonEnumerableProperty$c = createNonEnumerableProperty$f;

// `InstallErrorCause` abstract operation
// https://tc39.es/ecma262/#sec-installerrorcause
var installErrorCause$1 = function (O, options) {
  if (isObject$g(options) && 'cause' in options) {
    createNonEnumerableProperty$c(O, 'cause', options.cause);
  }
};

var uncurryThis$G = functionUncurryThis;

var $Error$1 = Error;
var replace$a = uncurryThis$G(''.replace);

var TEST = (function (arg) { return String(new $Error$1(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
    while (dropEntries--) stack = replace$a(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$A = fails$J;
var createPropertyDescriptor$6 = createPropertyDescriptor$9;

var errorStackInstallable = !fails$A(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$6(1, 7));
  return error.stack !== 7;
});

var createNonEnumerableProperty$b = createNonEnumerableProperty$f;
var clearErrorStack$1 = errorStackClear;
var ERROR_STACK_INSTALLABLE$1 = errorStackInstallable;

// non-standard V8
// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
var captureStackTrace = Error.captureStackTrace;

var errorStackInstall = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE$1) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty$b(error, 'stack', clearErrorStack$1(stack, dropEntries));
  }
};

var getBuiltIn$c = getBuiltIn$f;
var hasOwn$h = hasOwnProperty_1;
var createNonEnumerableProperty$a = createNonEnumerableProperty$f;
var isPrototypeOf$8 = objectIsPrototypeOf;
var setPrototypeOf$6 = objectSetPrototypeOf;
var copyConstructorProperties$3 = copyConstructorProperties$5;
var proxyAccessor$1 = proxyAccessor$2;
var inheritIfRequired$4 = inheritIfRequired$5;
var normalizeStringArgument$2 = normalizeStringArgument$3;
var installErrorCause = installErrorCause$1;
var installErrorStack$1 = errorStackInstall;
var DESCRIPTORS$o = descriptors;

var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn$c.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (hasOwn$h(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn$c('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument$2(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty$a(result, 'message', message);
    installErrorStack$1(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf$8(OriginalErrorPrototype, this)) inheritIfRequired$4(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf$6) setPrototypeOf$6(WrappedError, BaseError);
    else copyConstructorProperties$3(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS$o && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor$1(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor$1(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties$3(WrappedError, OriginalError);

  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty$a(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $$_ = _export;
var globalThis$O = globalThis_1;
var apply$4 = functionApply;
var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis$O[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED$b = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$b);
  $$_({ global: true, constructor: true, arity: 1, forced: FORCED$b }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$b);
    $$_({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED$b }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply$4(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply$4(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply$4(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply$4(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply$4(init, this, arguments); };
});

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$3 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$n = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$n = anObject$q;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys$2 = objectKeys$3;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$n && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$n(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$2(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$b = getBuiltIn$f;

var html$2 = getBuiltIn$b('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$m = anObject$q;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$m(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$m = wellKnownSymbol$q;
var create$8 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$m('unscopables');
var ArrayPrototype$2 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$2[UNSCOPABLES] === undefined) {
  defineProperty$6(ArrayPrototype$2, UNSCOPABLES, {
    configurable: true,
    value: create$8(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$2[UNSCOPABLES][key] = true;
};

var $$Z = _export;
var $includes = arrayIncludes.includes;
var fails$z = fails$J;
var addToUnscopables$1 = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$z(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// Safari 26.4- bug
var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$z(function () {
  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
  return [, 1].includes(undefined, 1);
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$Z({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('includes');

var iterators = Object.create ? Object.create(null) : {};

var fails$y = fails$J;

var correctPrototypeGetter = !fails$y(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$g = hasOwnProperty_1;
var isCallable$k = isCallable$x;
var toObject$b = toObject$d;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$2 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$b(O);
  if (hasOwn$g(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$k(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype$2 : null;
};

var fails$x = fails$J;
var isCallable$j = isCallable$x;
var isObject$f = isObject$p;
var getPrototypeOf$5 = objectGetPrototypeOf;
var defineBuiltIn$c = defineBuiltIn$e;
var wellKnownSymbol$l = wellKnownSymbol$q;

var ITERATOR$8 = wellKnownSymbol$l('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$4, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$5(getPrototypeOf$5(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$f(IteratorPrototype$4) || fails$x(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$4[ITERATOR$8].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$j(IteratorPrototype$4[ITERATOR$8])) {
  defineBuiltIn$c(IteratorPrototype$4, ITERATOR$8, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$4,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$5 = objectDefineProperty.f;
var hasOwn$f = hasOwnProperty_1;
var wellKnownSymbol$k = wellKnownSymbol$q;

var TO_STRING_TAG$4 = wellKnownSymbol$k('toStringTag');

var setToStringTag$8 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$f(target, TO_STRING_TAG$4)) {
    defineProperty$5(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;
var create$7 = objectCreate;
var createPropertyDescriptor$5 = createPropertyDescriptor$9;
var setToStringTag$7 = setToStringTag$8;
var Iterators$3 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$7(IteratorPrototype$3, { next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next) });
  setToStringTag$7(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$Y = _export;
var call$x = functionCall;
var FunctionName$1 = functionName;
var isCallable$i = isCallable$x;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf$4 = objectGetPrototypeOf;
var setPrototypeOf$5 = objectSetPrototypeOf;
var setToStringTag$6 = setToStringTag$8;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$f;
var defineBuiltIn$b = defineBuiltIn$e;
var wellKnownSymbol$j = wellKnownSymbol$q;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype$2 = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$7 = wellKnownSymbol$j('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$7]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$4(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$4(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (setPrototypeOf$5) {
          setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (!isCallable$i(CurrentIteratorPrototype[ITERATOR$7])) {
          defineBuiltIn$b(CurrentIteratorPrototype, ITERATOR$7, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$6(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$9(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$x(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$b(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$Y({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
    defineBuiltIn$b(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$4 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables = addToUnscopables$2;
var Iterators$1 = iterators;
var InternalStateModule$8 = internalState;
var defineProperty$4 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$3 = createIterResultObject$4;
var DESCRIPTORS$m = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$7 = InternalStateModule$8.set;
var getInternalState$6 = InternalStateModule$8.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$7(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$6(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject$3(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject$3(index, false);
    case 'values': return createIterResultObject$3(target[index], false);
  } return createIterResultObject$3([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$1.Arguments = Iterators$1.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$m && values.name !== 'values') try {
  defineProperty$4(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

var classof$f = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$5 = Array.isArray || function isArray(argument) {
  return classof$f(argument) === 'Array';
};

var DESCRIPTORS$l = descriptors;
var isArray$4 = isArray$5;

var $TypeError$n = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$l && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray$4(O) && !getOwnPropertyDescriptor$2(O, 'length').writable) {
    throw new $TypeError$n('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError$m = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError$m('Maximum allowed index exceeded');
  return it;
};

var $$X = _export;
var toObject$a = toObject$d;
var lengthOfArrayLike$g = lengthOfArrayLike$i;
var setArrayLength$2 = arraySetLength;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var fails$w = fails$J;

var INCORRECT_TO_LENGTH = fails$w(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength$1 = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED$a = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$$X({ target: 'Array', proto: true, arity: 1, forced: FORCED$a }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$a(this);
    var len = lengthOfArrayLike$g(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$2(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$2(O, len);
    return len;
  }
});

var tryToString$4 = tryToString$6;

var $TypeError$l = TypeError;

var deletePropertyOrThrow$2 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$l('Cannot delete property ' + tryToString$4(P) + ' of ' + tryToString$4(O));
};

var $$W = _export;
var toObject$9 = toObject$d;
var lengthOfArrayLike$f = lengthOfArrayLike$i;
var setArrayLength$1 = arraySetLength;
var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED$9 = INCORRECT_RESULT || !properErrorOnNonWritableLength();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$$W({ target: 'Array', proto: true, arity: 1, forced: FORCED$9 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject$9(this);
    var len = lengthOfArrayLike$f(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger$1(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow$1(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength$1(O, len + argCount);
  }
});

var isPrototypeOf$7 = objectIsPrototypeOf;

var $TypeError$k = TypeError;

var anInstance$7 = function (it, Prototype) {
  if (isPrototypeOf$7(Prototype, it)) return it;
  throw new $TypeError$k('Incorrect invocation');
};

var makeBuiltIn = makeBuiltInExports;
var defineProperty$3 = objectDefineProperty;

var defineBuiltInAccessor$d = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$3.f(target, name, descriptor);
};

var DESCRIPTORS$k = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$9;

var createProperty$6 = function (object, key, value) {
  if (DESCRIPTORS$k) definePropertyModule$1.f(object, key, createPropertyDescriptor$4(0, value));
  else object[key] = value;
};

var $$V = _export;
var globalThis$N = globalThis_1;
var anInstance$6 = anInstance$7;
var anObject$l = anObject$q;
var isCallable$h = isCallable$x;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltInAccessor$c = defineBuiltInAccessor$d;
var createProperty$5 = createProperty$6;
var fails$v = fails$J;
var hasOwn$e = hasOwnProperty_1;
var wellKnownSymbol$i = wellKnownSymbol$q;
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var DESCRIPTORS$j = descriptors;

var CONSTRUCTOR = 'constructor';
var ITERATOR$6 = 'Iterator';
var TO_STRING_TAG$3 = wellKnownSymbol$i('toStringTag');

var $TypeError$j = TypeError;
var NativeIterator = globalThis$N[ITERATOR$6];

// FF56- have non-standard global helper `Iterator`
var FORCED$8 = !isCallable$h(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype$1
  // FF44- non-standard `Iterator` passes previous tests
  || !fails$v(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance$6(this, IteratorPrototype$1);
  if (getPrototypeOf$3(this) === IteratorPrototype$1) throw new $TypeError$j('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS$j) {
    defineBuiltInAccessor$c(IteratorPrototype$1, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject$l(this);
        if (this === IteratorPrototype$1) throw new $TypeError$j("You can't redefine this property");
        if (hasOwn$e(this, key)) this[key] = replacement;
        else createProperty$5(this, key, replacement);
      }
    });
  } else IteratorPrototype$1[key] = value;
};

if (!hasOwn$e(IteratorPrototype$1, TO_STRING_TAG$3)) defineIteratorPrototypeAccessor(TO_STRING_TAG$3, ITERATOR$6);

if (FORCED$8 || !hasOwn$e(IteratorPrototype$1, CONSTRUCTOR) || IteratorPrototype$1[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype$1;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$$V({ global: true, constructor: true, forced: FORCED$8 }, {
  Iterator: IteratorConstructor
});

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
var getIteratorDirect$9 = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};

var defineBuiltIn$a = defineBuiltIn$e;

var defineBuiltIns$3 = function (target, src, options) {
  for (var key in src) defineBuiltIn$a(target, key, src[key], options);
  return target;
};

var call$w = functionCall;
var anObject$k = anObject$q;
var getMethod$4 = getMethod$6;

var iteratorClose$e = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$k(iterator);
  try {
    innerResult = getMethod$4(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$w(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$k(innerResult);
  return value;
};

var iteratorClose$d = iteratorClose$e;

var iteratorCloseAll$1 = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose$d(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};

// release references held by exhausted / closed iterator helpers to allow GC of the source chain
var iteratorCleanupState = function (state) {
  state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
};

var call$v = functionCall;
var create$6 = objectCreate;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$f;
var defineBuiltIns$2 = defineBuiltIns$3;
var wellKnownSymbol$h = wellKnownSymbol$q;
var InternalStateModule$7 = internalState;
var getMethod$3 = getMethod$6;
var IteratorPrototype = iteratorsCore.IteratorPrototype;
var createIterResultObject$2 = createIterResultObject$4;
var iteratorClose$c = iteratorClose$e;
var iteratorCloseAll = iteratorCloseAll$1;
var cleanupState = iteratorCleanupState;

var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState$6 = InternalStateModule$7.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule$7.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns$2(create$6(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject$2(undefined, true);
      try {
        var result = state.nextHandler();
        if (state.done) cleanupState(state);
        return state.returnHandlerResult ? result : createIterResultObject$2(result, state.done);
      } catch (error) {
        state.done = true;
        cleanupState(state);
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var inner = state.inner;
      var openIters = state.openIters;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod$3(iterator, 'return');
        return returnMethod ? call$v(returnMethod, iterator) : createIterResultObject$2(undefined, true);
      }
      cleanupState(state);
      if (done) return createIterResultObject$2(undefined, true);
      if (inner) try {
        iteratorClose$c(inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose$c(iterator, THROW, error);
      }
      if (openIters) try {
        iteratorCloseAll(openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose$c(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose$c(iterator, NORMAL);
      return createIterResultObject$2(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty$8(IteratorHelperPrototype, TO_STRING_TAG$2, 'Iterator Helper');

var iteratorCreateProxy = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState$6(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};

var anObject$j = anObject$q;
var iteratorClose$b = iteratorClose$e;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$3 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$j(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$b(iterator, 'throw', error);
  }
};

// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
var iteratorHelperThrowsOnInvalidIterator$2 = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};

var globalThis$M = globalThis_1;

// https://github.com/tc39/ecma262/pull/3467
var iteratorHelperWithoutClosingOnEarlyError$7 = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis$M.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};

var $$U = _export;
var call$u = functionCall;
var aCallable$l = aCallable$o;
var anObject$i = anObject$q;
var getIteratorDirect$8 = getIteratorDirect$9;
var createIteratorProxy$1 = iteratorCreateProxy;
var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
var iteratorClose$a = iteratorClose$e;
var iteratorHelperThrowsOnInvalidIterator$1 = iteratorHelperThrowsOnInvalidIterator$2;
var iteratorHelperWithoutClosingOnEarlyError$6 = iteratorHelperWithoutClosingOnEarlyError$7;

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !iteratorHelperThrowsOnInvalidIterator$1('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError$6('filter', TypeError);

var FORCED$7 = FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy$1 = createIteratorProxy$1(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject$i(call$u(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing$2(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$$U({ target: 'Iterator', proto: true, real: true, forced: FORCED$7 }, {
  filter: function filter(predicate) {
    anObject$i(this);
    try {
      aCallable$l(predicate);
    } catch (error) {
      iteratorClose$a(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call$u(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy$1(getIteratorDirect$8(this), {
      predicate: predicate
    });
  }
});

var classofRaw = classofRaw$2;
var uncurryThis$F = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$F(fn);
};

var uncurryThis$E = functionUncurryThisClause;
var aCallable$k = aCallable$o;
var NATIVE_BIND = functionBindNative;

var bind$a = uncurryThis$E(uncurryThis$E.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$k(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$a(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var wellKnownSymbol$g = wellKnownSymbol$q;
var Iterators = iterators;

var ITERATOR$5 = wellKnownSymbol$g('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
};

var classof$e = classofRaw$2;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var getMethod$2 = getMethod$6;
var wellKnownSymbol$f = wellKnownSymbol$q;

var ITERATOR$4 = wellKnownSymbol$f('iterator');
var ArrayPrototype = Array.prototype;

var getIteratorMethodInternal = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$2(it, ITERATOR$4)
    || getMethod$2(it, '@@iterator')
    || (classof$e(it) === 'Arguments' ? ArrayPrototype[ITERATOR$4] : undefined);
};

var call$t = functionCall;
var isCallable$g = isCallable$x;
var anObject$h = anObject$q;
var tryToString$3 = tryToString$6;
var getIteratorMethod$4 = getIteratorMethodInternal;

var $TypeError$i = TypeError;

var getIteratorInternal = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (isCallable$g(iteratorMethod)) return anObject$h(call$t(iteratorMethod, argument));
  throw new $TypeError$i(tryToString$3(argument) + ' is not iterable');
};

var bind$9 = functionBindContext;
var call$s = functionCall;
var anObject$g = anObject$q;
var tryToString$2 = tryToString$6;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var lengthOfArrayLike$e = lengthOfArrayLike$i;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getIterator$3 = getIteratorInternal;
var getIteratorMethod$3 = getIteratorMethodInternal;
var iteratorClose$9 = iteratorClose$e;

var $TypeError$h = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$c = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$9(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose$9($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$g(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$3(iterable);
    if (!iterFn) throw new $TypeError$h(tryToString$2(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$2(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$e(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$3(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$s(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose$9(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
  } return new Result(false);
};

var $$T = _export;
var call$r = functionCall;
var iterate$b = iterate$c;
var aCallable$j = aCallable$o;
var anObject$f = anObject$q;
var getIteratorDirect$7 = getIteratorDirect$9;
var iteratorClose$8 = iteratorClose$e;
var iteratorHelperWithoutClosingOnEarlyError$5 = iteratorHelperWithoutClosingOnEarlyError$7;

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$5('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$$T({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject$f(this);
    try {
      aCallable$j(fn);
    } catch (error) {
      iteratorClose$8(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call$r(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect$7(this);
    var counter = 0;
    iterate$b(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});

var $$S = _export;
var call$q = functionCall;
var aCallable$i = aCallable$o;
var anObject$e = anObject$q;
var getIteratorDirect$6 = getIteratorDirect$9;
var createIteratorProxy = iteratorCreateProxy;
var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
var iteratorClose$7 = iteratorClose$e;
var iteratorHelperThrowsOnInvalidIterator = iteratorHelperThrowsOnInvalidIterator$2;
var iteratorHelperWithoutClosingOnEarlyError$4 = iteratorHelperWithoutClosingOnEarlyError$7;

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError$4('map', TypeError);

var FORCED$6 = MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject$e(call$q(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing$1(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$$S({ target: 'Iterator', proto: true, real: true, forced: FORCED$6 }, {
  map: function map(mapper) {
    anObject$e(this);
    try {
      aCallable$i(mapper);
    } catch (error) {
      iteratorClose$7(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call$q(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect$6(this), {
      mapper: mapper
    });
  }
});

var isObject$e = isObject$p;
var getInternalState$5 = internalState.get;

var isRawJson = function isRawJSON(O) {
  if (!isObject$e(O)) return false;
  var state = getInternalState$5(O);
  return !!state && state.type === 'RawJSON';
};

var uncurryThis$D = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$2 = uncurryThis$D(1.1.valueOf);

var uncurryThis$C = functionUncurryThis;
var hasOwn$d = hasOwnProperty_1;

var $SyntaxError = SyntaxError;
var $parseInt$1 = parseInt;
var fromCharCode$4 = String.fromCharCode;
var at$2 = uncurryThis$C(''.charAt);
var slice$4 = uncurryThis$C(''.slice);
var exec$8 = uncurryThis$C(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

var parseJsonString = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at$2(source, i);
    if (chr === '\\') {
      var twoChars = slice$4(source, i, i + 2);
      if (hasOwn$d(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice$4(source, i, i + 4);
        if (!exec$8(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode$4($parseInt$1(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec$8(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};

/* eslint-disable es/no-json -- safe */
var fails$u = fails$J;

var nativeRawJson = !fails$u(function () {
  var unsafeInt = '9007199254740993';
  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  var raw = JSON.rawJSON(unsafeInt);
  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});

var $$R = _export;
var getBuiltIn$a = getBuiltIn$f;
var call$p = functionCall;
var uncurryThis$B = functionUncurryThis;
var fails$t = fails$J;
var isArray$3 = isArray$5;
var isCallable$f = isCallable$x;
var isObject$d = isObject$p;
var create$5 = objectCreate;
var isRawJSON = isRawJson;
var isSymbol$2 = isSymbol$5;
var classof$d = classofRaw$2;
var thisNumberValue$1 = thisNumberValue$2;
var includes = arrayIncludes.includes;
var hasOwn$c = hasOwnProperty_1;
var toString$d = toString$f;
var parseJSONString$1 = parseJsonString;
var uid$2 = uid$5;
var NATIVE_SYMBOL$2 = symbolConstructorDetection;
var NATIVE_RAW_JSON = nativeRawJson;

var $String$1 = String;
var $TypeError$g = TypeError;
var $stringify = getBuiltIn$a('JSON', 'stringify');
var $BigInt = getBuiltIn$a('BigInt');
var stringValueOf = uncurryThis$B(''.valueOf);
var booleanValueOf = uncurryThis$B(true.valueOf);
var bigIntValueOf = $BigInt && uncurryThis$B($BigInt.prototype.valueOf);
var exec$7 = uncurryThis$B(/./.exec);
var charAt$a = uncurryThis$B(''.charAt);
var charCodeAt$2 = uncurryThis$B(''.charCodeAt);
var replace$9 = uncurryThis$B(''.replace);
var slice$3 = uncurryThis$B(''.slice);
var push$9 = uncurryThis$B([].push);
var pop$1 = uncurryThis$B([].pop);
var numberToString$2 = uncurryThis$B(1.1.toString);

var surrogates = /[\uD800-\uDFFF]/g;
var leadingSurrogates = /^[\uD800-\uDBFF]$/;
var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
var digits = /^\d+$/;

// a placeholder of a raw JSON value
var RAW_MARK = uid$2();
// a prefix of keys of a reordered object, see `createOrderedObject`
var KEY_MARK = uid$2();
// the last key of a reordered object, marks the end of its serialization
var END_MARK = uid$2();
var RAW_MARK_LENGTH = RAW_MARK.length;
var KEY_MARK_LENGTH = KEY_MARK.length;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$t(function () {
  var symbol = getBuiltIn$a('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails$t(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn$a('JSON', 'isRawJSON') : isRawJSON;

var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
  return $stringify(it, function (key, value) {
    var replaced = call$p(replacer, this, key, value);
    if (!isSymbol$2(replaced)) return replaced;
  }, space);
} : $stringify;

var fixIllFormedJSON = function (match, offset, string) {
  var prev = charAt$a(string, offset - 1);
  var next = charAt$a(string, offset + 1);
  if (
    (exec$7(leadingSurrogates, match) && !exec$7(trailingSurrogates, next)) ||
    (exec$7(trailingSurrogates, match) && !exec$7(leadingSurrogates, prev))
  ) {
    return '\\u' + numberToString$2(charCodeAt$2(match, 0), 16);
  } return match;
};

// `PropertyList` of `JSON.stringify`
// https://tc39.es/ecma262/#sec-json.stringify
var getPropertyList = function (replacer) {
  if (!isArray$3(replacer)) return;
  var rawLength = replacer.length;
  var propertyList = [];
  // a null prototype object is used as a set of already added keys to keep the deduplication linear
  var addedKeys = create$5(null);
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    var key;
    if (typeof element == 'string') key = element;
    else if (typeof element == 'number' || classof$d(element) === 'Number' || classof$d(element) === 'String') key = toString$d(element);
    else continue;
    if (!hasOwn$c(addedKeys, key)) {
      addedKeys[key] = true;
      push$9(propertyList, key);
    }
  }
  return propertyList;
};

// values with such an internal slot are unwrapped by `SerializeJSONProperty` instead of being serialized as objects
var hasInternalSlot = function (valueOf, it) {
  try {
    valueOf(it);
    return true;
  } catch (error) {
    return false;
  }
};

// the slot check is expensive, so it's performed only for the kind reported by the value itself -
// a value lying about its kind via `Symbol.toStringTag` is serialized as an ordinary object
var isBoxedPrimitive = function (it) {
  var kind = classof$d(it);
  return (kind === 'Number' && hasInternalSlot(thisNumberValue$1, it))
    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
};

// only objects serialized by `SerializeJSONObject` are affected by the property list
var isSerializedAsObject = function (it) {
  if (!isObject$d(it) || isCallable$f(it) || isArray$3(it)) return false;
  try {
    return !isBoxedPrimitive(it);
  // `classof` reads `Symbol.toStringTag`, so a proxy could throw - it has no internal slots anyway
  } catch (error) {
    return true;
  }
};

// the engine unwraps it in the same order as it would read the original property,
// so the property is read lazily and `toJSON` is called once and with the original key
var createElementHolder = function (holder, key) {
  return {
    toJSON: function () {
      var element = holder[key];
      if (isObject$d(element) || typeof element == 'bigint') {
        var elementToJSON = element.toJSON;
        if (isCallable$f(elementToJSON)) element = call$p(elementToJSON, element, key);
      } return element;
    }
  };
};

// own keys of objects are sorted - integer-like keys are moved to the beginning,
// so such keys should be marked and restored in the serialized string
var getKeyPrefix = function (propertyList) {
  for (var i = 0, length = propertyList.length; i < length; i++) {
    if (exec$7(digits, propertyList[i])) return KEY_MARK;
  } return '';
};

// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
var createOrderedObject = function (value, propertyList, keyPrefix) {
  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
  var ordered = create$5(null);
  for (var i = 0, length = propertyList.length; i < length; i++) {
    var key = propertyList[i];
    ordered[keyPrefix + key] = createElementHolder(value, key);
  }
  ordered[END_MARK] = null;
  return ordered;
};

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $$R({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = isCallable$f(replacer) ? replacer : undefined;
    var propertyList = replacerFunction ? undefined : getPropertyList(replacer);
    var keyPrefix = propertyList && getKeyPrefix(propertyList);
    var rawStrings = [];
    var openObjects = [];
    var parentOrdered = [];
    var currentOrdered;
    var marked = false;
    var root = true;

    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      key = $String$1(key);

      if (propertyList) {
        if (key === END_MARK) {
          pop$1(openObjects);
          currentOrdered = pop$1(parentOrdered);
          return;
        }
        if (root) root = false;
        // the innermost reordered object already contains only keys of the property list and arrays are not
        // affected by it, the rest of objects (like objects with a fake `Symbol.toStringTag`) are filtered here
        else if (this !== currentOrdered && !isArray$3(this) && !includes(propertyList, key)) return;
      } else if (replacerFunction) value = call$p(replacerFunction, this, key, value);

      if (isRawJSONValue(value)) {
        if (NATIVE_RAW_JSON) return value;
        marked = true;
        return RAW_MARK + (push$9(rawStrings, value.rawJSON) - 1);
      }

      if (propertyList && isSerializedAsObject(value)) {
        // reordered objects are new each time, so cycles should be detected before the engine does it
        if (includes(openObjects, value)) throw new $TypeError$g('Converting circular structure to JSON');
        var ordered = createOrderedObject(value, propertyList, keyPrefix);
        push$9(openObjects, value);
        push$9(parentOrdered, currentOrdered);
        currentOrdered = ordered;
        if (keyPrefix) marked = true;
        return ordered;
      }

      return value;
    }, space);

    if (typeof json != 'string') return json;

    if (ILL_FORMED_UNICODE) json = replace$9(json, surrogates, fixIllFormedJSON);

    if (!marked) return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = charAt$a(json, i);
      if (chr === '"') {
        var end = parseJSONString$1(json, ++i).end - 1;
        var string = slice$3(json, i, end);
        if (slice$3(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice$3(string, RAW_MARK_LENGTH)];
        else if (slice$3(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice$3(string, KEY_MARK_LENGTH) + '"';
        else result += '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});

var uncurryThis$A = functionUncurryThis;

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis$A(MapPrototype.set),
  get: uncurryThis$A(MapPrototype.get),
  has: uncurryThis$A(MapPrototype.has),
  remove: uncurryThis$A(MapPrototype['delete'])};

var $$Q = _export;
var MapHelpers$2 = mapHelpers;
var IS_PURE$3 = isPure;

var get$4 = MapHelpers$2.get;
var has$a = MapHelpers$2.has;
var set$6 = MapHelpers$2.set;

// `Map.prototype.getOrInsert` method
// https://tc39.es/ecma262/#sec-map.prototype.getorinsert
$$Q({ target: 'Map', proto: true, real: true, forced: IS_PURE$3 }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has$a(this, key)) return get$4(this, key);
    set$6(this, key, value);
    return value;
  }
});

var $$P = _export;
var aCallable$h = aCallable$o;
var MapHelpers$1 = mapHelpers;
var IS_PURE$2 = isPure;

var get$3 = MapHelpers$1.get;
var has$9 = MapHelpers$1.has;
var set$5 = MapHelpers$1.set;

// `Map.prototype.getOrInsertComputed` method
// https://tc39.es/ecma262/#sec-map.prototype.getorinsertcomputed
$$P({ target: 'Map', proto: true, real: true, forced: IS_PURE$2 }, {
  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
    var hasKey = has$9(this, key);
    aCallable$h(callbackfn);
    if (hasKey) return get$3(this, key);
    // CanonicalizeKeyedCollectionKey
    if (key === 0 && 1 / key === -Infinity) key = 0;
    var value = callbackfn(key);
    set$5(this, key, value);
    return value;
  }
});

/* global Bun, Deno -- detection */
var globalThis$L = globalThis_1;
var userAgent$5 = environmentUserAgent;
var classof$c = classofRaw$2;

var userAgentStartsWith = function (string) {
  return userAgent$5.slice(0, string.length) === string;
};

var environment = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis$L.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis$L.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof$c(globalThis$L.process) === 'process') return 'NODE';
  if (globalThis$L.window && globalThis$L.document) return 'BROWSER';
  return 'REST';
})();

var ENVIRONMENT$3 = environment;

var environmentIsNode = ENVIRONMENT$3 === 'NODE';

var globalThis$K = globalThis_1;

var path$1 = globalThis$K;

var getBuiltIn$9 = getBuiltIn$f;
var defineBuiltInAccessor$b = defineBuiltInAccessor$d;
var wellKnownSymbol$e = wellKnownSymbol$q;
var DESCRIPTORS$i = descriptors;

var SPECIES$4 = wellKnownSymbol$e('species');

var setSpecies$3 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$9(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$i && Constructor && !Constructor[SPECIES$4]) {
    defineBuiltInAccessor$b(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var uncurryThis$z = functionUncurryThis;
var fails$s = fails$J;
var isCallable$e = isCallable$x;
var classof$b = classof$h;
var getBuiltIn$8 = getBuiltIn$f;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var construct = getBuiltIn$8('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$6 = uncurryThis$z(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$e(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$e(argument)) return false;
  switch (classof$b(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$6(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$4 = !construct || fails$s(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$3 = isConstructor$4;
var tryToString$1 = tryToString$6;

var $TypeError$f = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$3(argument)) return argument;
  throw new $TypeError$f(tryToString$1(argument) + ' is not a constructor');
};

var anObject$d = anObject$q;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var wellKnownSymbol$d = wellKnownSymbol$q;

var SPECIES$3 = wellKnownSymbol$d('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$d(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$d(C)[SPECIES$3]) ? defaultConstructor : aConstructor$1(S);
};

var uncurryThis$y = functionUncurryThis;

var arraySlice$5 = uncurryThis$y([].slice);

var $TypeError$e = TypeError;

var validateArgumentsLength$8 = function (passed, required) {
  if (passed < required) throw new $TypeError$e('Not enough arguments');
  return passed;
};

var userAgent$4 = environmentUserAgent;

var environmentIsIos = /ipad|iphone|ipod/i.test(userAgent$4) && /applewebkit/i.test(userAgent$4);

var globalThis$J = globalThis_1;
var apply$3 = functionApply;
var bind$8 = functionBindContext;
var isCallable$d = isCallable$x;
var hasOwn$b = hasOwnProperty_1;
var fails$r = fails$J;
var html = html$2;
var arraySlice$4 = arraySlice$5;
var createElement = documentCreateElement$2;
var validateArgumentsLength$7 = validateArgumentsLength$8;
var IS_IOS$1 = environmentIsIos;
var IS_NODE$4 = environmentIsNode;

var set$4 = globalThis$J.setImmediate;
var clear = globalThis$J.clearImmediate;
var process$2 = globalThis$J.process;
var Dispatch = globalThis$J.Dispatch;
var Function$2 = globalThis$J.Function;
var MessageChannel = globalThis$J.MessageChannel;
var String$1 = globalThis$J.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel$1, port;

fails$r(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis$J.location;
});

var run = function (id) {
  if (hasOwn$b(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis$J.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$4 || !clear) {
  set$4 = function setImmediate(handler) {
    validateArgumentsLength$7(arguments.length, 1);
    var fn = isCallable$d(handler) ? handler : Function$2(handler);
    var args = arraySlice$4(arguments, 1);
    queue$2[++counter] = function () {
      apply$3(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$4) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel$1 = new MessageChannel();
    port = channel$1.port2;
    channel$1.port1.onmessage = eventListener;
    defer = bind$8(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis$J.addEventListener &&
    isCallable$d(globalThis$J.postMessage) &&
    !globalThis$J.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$r(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis$J.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set$4,
  clear: clear
};

var globalThis$I = globalThis_1;
var DESCRIPTORS$h = descriptors;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn$2 = function (name) {
  if (!DESCRIPTORS$h) return globalThis$I[name];
  var descriptor = getOwnPropertyDescriptor$1(globalThis$I, name);
  return descriptor && descriptor.value;
};

var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};

Queue$2.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$2;

var userAgent$3 = environmentUserAgent;

var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

var userAgent$2 = environmentUserAgent;

var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var globalThis$H = globalThis_1;
var safeGetBuiltIn$1 = safeGetBuiltIn$2;
var bind$7 = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = environmentIsIos;
var IS_IOS_PEBBLE = environmentIsIosPebble;
var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
var IS_NODE$3 = environmentIsNode;

var MutationObserver = globalThis$H.MutationObserver || globalThis$H.WebKitMutationObserver;
var document$2 = globalThis$H.document;
var process$1 = globalThis$H.process;
var Promise$1 = globalThis$H.Promise;
var microtask$2 = safeGetBuiltIn$1('queueMicrotask');
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$2) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$1.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$7(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$7(macrotask, globalThis$H);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$2 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$2;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$4 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var globalThis$G = globalThis_1;

var promiseNativeConstructor = globalThis$G.Promise;

var globalThis$F = globalThis_1;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var isCallable$c = isCallable$x;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$c = wellKnownSymbol$q;
var ENVIRONMENT$2 = environment;
var V8_VERSION = environmentV8Version;

NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var SPECIES$2 = wellKnownSymbol$c('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$c(globalThis$F.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$4(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT$2 === 'BROWSER' || ENVIRONMENT$2 === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$g = aCallable$o;

var $TypeError$d = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$d('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$g(resolve);
  this.reject = aCallable$g(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$O = _export;
var IS_NODE$2 = environmentIsNode;
var globalThis$E = globalThis_1;
var path = path$1;
var call$o = functionCall;
var defineBuiltIn$9 = defineBuiltIn$e;
var setPrototypeOf$4 = objectSetPrototypeOf;
var setToStringTag$5 = setToStringTag$8;
var setSpecies$2 = setSpecies$3;
var aCallable$f = aCallable$o;
var isCallable$b = isCallable$x;
var isObject$c = isObject$p;
var anInstance$5 = anInstance$7;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask$1 = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$3 = perform$4;
var Queue = queue$1;
var InternalStateModule$6 = internalState;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$6.getterFor(PROMISE);
var setInternalState$5 = InternalStateModule$6.set;
var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var PromiseConstructor = NativePromiseConstructor$3;
var PromisePrototype = NativePromisePrototype$2;
var TypeError$7 = globalThis$E.TypeError;
var document$1 = globalThis$E.document;
var process = globalThis$E.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$E.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$c(it) && isCallable$b(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError$7('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$o(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask$1(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis$E.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$E['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$o(task, globalThis$E, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$3(function () {
        if (IS_NODE$2) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$2 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$o(task, globalThis$E, function () {
    var promise = state.facade;
    if (IS_NODE$2) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$6 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError$7("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask$1(function () {
        var wrapper = { done: false };
        try {
          call$o(then, value,
            bind$6(internalResolve, wrapper, state),
            bind$6(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$5(this, PromisePrototype);
    aCallable$f(executor);
    call$o(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$6(internalResolve, state), bind$6(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$5(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$9(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$b(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$b(onRejected) && onRejected;
    reaction.domain = IS_NODE$2 ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask$1(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$6(internalResolve, state);
    this.reject = bind$6(internalReject, state);
  };

  newPromiseCapabilityModule$4.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$b(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
    nativeThen = NativePromisePrototype$2.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$9(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$o(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$2.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$4) {
      setPrototypeOf$4(NativePromisePrototype$2, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$$O({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

PromiseWrapper = path.Promise;

setToStringTag$5(PromiseConstructor, PROMISE, false);
setSpecies$2(PROMISE);

var wellKnownSymbol$b = wellKnownSymbol$q;

var ITERATOR$3 = wellKnownSymbol$b('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  iteratorWithReturn[ITERATOR$3] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    object[ITERATOR$3] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$2 = promiseNativeConstructor;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
  NativePromiseConstructor$2.all(iterable).then(undefined, function () { /* empty */ });
});

var $$N = _export;
var call$n = functionCall;
var aCallable$e = aCallable$o;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$4;
var iterate$a = iterate$c;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$N({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$e(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$a(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$n($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$M = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var getBuiltIn$7 = getBuiltIn$f;
var isCallable$a = isCallable$x;
var defineBuiltIn$8 = defineBuiltIn$e;

var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$M({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$a(NativePromiseConstructor$1)) {
  var method$1 = getBuiltIn$7('Promise').prototype['catch'];
  if (NativePromisePrototype$1['catch'] !== method$1) {
    defineBuiltIn$8(NativePromisePrototype$1, 'catch', method$1, { unsafe: true });
  }
}

var $$L = _export;
var call$m = functionCall;
var aCallable$d = aCallable$o;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$4;
var iterate$9 = iterate$c;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$L({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$d(C.resolve);
      iterate$9(iterable, function (promise) {
        call$m($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$K = _export;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$K({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$1.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

var anObject$c = anObject$q;
var isObject$b = isObject$p;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject$c(C);
  if (isObject$b(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$J = _export;
var getBuiltIn$6 = getBuiltIn$f;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;

getBuiltIn$6('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$J({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});

var $$I = _export;
var globalThis$D = globalThis_1;
var setToStringTag$4 = setToStringTag$8;

$$I({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag$4(globalThis$D.Reflect, 'Reflect', true);

var anObject$b = anObject$q;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$b(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$q = fails$J;
var globalThis$C = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = globalThis$C.RegExp;

var UNSUPPORTED_Y$2 = fails$q(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$q(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$q(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$p = fails$J;
var globalThis$B = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = globalThis$B.RegExp;

var regexpUnsupportedDotAll = fails$p(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

var fails$o = fails$J;
var globalThis$A = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis$A.RegExp;

var regexpUnsupportedNcg = fails$o(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$l = functionCall;
var uncurryThis$x = functionUncurryThis;
var toString$c = toString$f;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4;
var create$4 = objectCreate;
var getInternalState$4 = internalState.get;
var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$9 = uncurryThis$x(''.charAt);
var indexOf$1 = uncurryThis$x(''.indexOf);
var replace$8 = uncurryThis$x(''.replace);
var stringSlice$9 = uncurryThis$x(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$l(nativeExec, re1, 'a');
  call$l(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH$1 = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1;

var setGroups = function (re, groups) {
  var object = re.groups = create$4(null);
  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    object[group[0]] = re[group[1]];
  }
};

if (PATCH$1) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$4(re);
    var str = toString$c(string);
    var raw = state.raw;
    var result, reCopy, lastIndex;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$l(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;

      if (result && state.groups) setGroups(result, state.groups);

      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$l(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$8(flags, 'y', '');
      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$9(str, re.lastIndex);
      // Support anchored sticky behavior.
      var prevChar = re.lastIndex > 0 && charAt$9(str, re.lastIndex - 1);
      if (re.lastIndex > 0 &&
        (!re.multiline || re.multiline && prevChar !== '\n' && prevChar !== '\r' && prevChar !== '\u2028' && prevChar !== '\u2029')) {
        source = '(?: (?:' + source + '))';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    var match = call$l(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = str;
        match[0] = stringSlice$9(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$l(nativeReplace, match[0], reCopy, function () {
        for (var i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) setGroups(match, groups);

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$H = _export;
var exec$5 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$H({ target: 'RegExp', proto: true, forced: /./.exec !== exec$5 }, {
  exec: exec$5
});

var globalThis$z = globalThis_1;
var fails$n = fails$J;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = globalThis$z.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails$n(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp$1('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp$1.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

var regexpFlagsDetection = { correct: FLAGS_GETTER_IS_CORRECT };

var DESCRIPTORS$g = descriptors;
var defineBuiltInAccessor$a = defineBuiltInAccessor$d;
var regExpFlagsDetection$1 = regexpFlagsDetection;
var regExpFlagsGetterImplementation$1 = regexpFlags$1;

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS$g && !regExpFlagsDetection$1.correct) {
  defineBuiltInAccessor$a(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlagsGetterImplementation$1
  });

  regExpFlagsDetection$1.correct = true;
}

var uncurryThis$w = functionUncurryThis;

// eslint-disable-next-line es/no-set -- safe
var SetPrototype$1 = Set.prototype;

var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis$w(SetPrototype$1.add),
  has: uncurryThis$w(SetPrototype$1.has),
  remove: uncurryThis$w(SetPrototype$1['delete']),
  proto: SetPrototype$1
};

var has$8 = setHelpers.has;

// Perform ? RequireInternalSlot(M, [[SetData]])
var aSet$7 = function (it) {
  has$8(it);
  return it;
};

var call$k = functionCall;

var iterateSimple$7 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call$k(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};

var uncurryThis$v = functionUncurryThis;
var iterateSimple$6 = iterateSimple$7;
var SetHelpers$6 = setHelpers;

var Set$4 = SetHelpers$6.Set;
var SetPrototype = SetHelpers$6.proto;
var forEach$3 = uncurryThis$v(SetPrototype.forEach);
var keys$1 = uncurryThis$v(SetPrototype.keys);
var next = keys$1(new Set$4()).next;

var setIterate$1 = function (set, fn, interruptible) {
  return interruptible ? iterateSimple$6({ iterator: keys$1(set), next: next }, fn) : forEach$3(set, fn);
};

var SetHelpers$5 = setHelpers;
var iterate$8 = setIterate$1;

var Set$3 = SetHelpers$5.Set;
var add$3 = SetHelpers$5.add;

var setClone = function (set) {
  var result = new Set$3();
  iterate$8(set, function (it) {
    add$3(result, it);
  });
  return result;
};

var uncurryThisAccessor$2 = functionUncurryThisAccessor;
var SetHelpers$4 = setHelpers;

var setSize = uncurryThisAccessor$2(SetHelpers$4.proto, 'size', 'get') || function (set) {
  return set.size;
};

var aCallable$c = aCallable$o;
var anObject$a = anObject$q;
var call$j = functionCall;
var toIntegerOrInfinity$7 = toIntegerOrInfinity$a;
var getIteratorDirect$5 = getIteratorDirect$9;

var INVALID_SIZE = 'Invalid size';
var $RangeError$6 = RangeError;
var $TypeError$c = TypeError;
var max$3 = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max$3(intSize, 0);
  this.has = aCallable$c(set.has);
  this.keys = aCallable$c(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect$5(anObject$a(call$j(this.keys, this.set)));
  },
  includes: function (it) {
    return call$j(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
var getSetRecord$7 = function (obj) {
  anObject$a(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError$c(INVALID_SIZE);
  var intSize = toIntegerOrInfinity$7(numSize);
  if (intSize < 0) throw new $RangeError$6(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};

var aSet$6 = aSet$7;
var SetHelpers$3 = setHelpers;
var clone$2 = setClone;
var size$4 = setSize;
var getSetRecord$6 = getSetRecord$7;
var iterateSet$2 = setIterate$1;
var iterateSimple$5 = iterateSimple$7;

var has$7 = SetHelpers$3.has;
var remove$2 = SetHelpers$3.remove;

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
var setDifference = function difference(other) {
  var O = aSet$6(this);
  var otherRec = getSetRecord$6(other);
  var result = clone$2(O);
  if (size$4(result) <= otherRec.size) iterateSet$2(result, function (e) {
    if (otherRec.includes(e)) remove$2(result, e);
  });
  else iterateSimple$5(otherRec.getIterator(), function (e) {
    if (has$7(result, e)) remove$2(result, e);
  });
  return result;
};

var getBuiltIn$5 = getBuiltIn$f;

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var createSetLikeWithInfinitySize = function (size) {
  return {
    size: size,
    has: function () {
      return true;
    },
    keys: function () {
      throw new Error('e');
    }
  };
};

var setMethodAcceptSetLike$7 = function (name, callback) {
  var Set = getBuiltIn$5('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17 implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      // also covered engines with
      // https://bugs.webkit.org/show_bug.cgi?id=272679
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      if (!callback) return true;
      // early V8 implementation bug
      // https://issues.chromium.org/issues/351332634
      try {
        new Set()[name](createSetLikeWithInfinitySize(-Infinity));
        return false;
      } catch (error) {
        var set = new Set([1, 2]);
        return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
      }
    }
  } catch (error) {
    return false;
  }
};

var $$G = _export;
var difference = setDifference;
var fails$m = fails$J;
var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike$6('difference', function (result) {
  return result.size === 0;
});

var FORCED$5 = SET_LIKE_INCORRECT_BEHAVIOR || fails$m(function () {
  // https://bugs.webkit.org/show_bug.cgi?id=288595
  var setLike = {
    size: 1,
    has: function () { return true; },
    keys: function () {
      var index = 0;
      return {
        next: function () {
          var done = index++ > 1;
          if (baseSet.has(1)) baseSet.clear();
          return { done: done, value: 2 };
        }
      };
    }
  };
  // eslint-disable-next-line es/no-set -- testing
  var baseSet = new Set([1, 2, 3, 4]);
  // eslint-disable-next-line es/no-set-prototype-difference -- testing
  return baseSet.difference(setLike).size !== 3;
});

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$$G({ target: 'Set', proto: true, real: true, forced: FORCED$5 }, {
  difference: difference
});

var aSet$5 = aSet$7;
var SetHelpers$2 = setHelpers;
var size$3 = setSize;
var getSetRecord$5 = getSetRecord$7;
var iterateSet$1 = setIterate$1;
var iterateSimple$4 = iterateSimple$7;

var Set$2 = SetHelpers$2.Set;
var add$2 = SetHelpers$2.add;
var has$6 = SetHelpers$2.has;

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
var setIntersection = function intersection(other) {
  var O = aSet$5(this);
  var otherRec = getSetRecord$5(other);
  var result = new Set$2();

  if (size$3(O) > otherRec.size) {
    iterateSimple$4(otherRec.getIterator(), function (e) {
      if (has$6(O, e)) add$2(result, e);
    });
  } else {
    iterateSet$1(O, function (e) {
      if (otherRec.includes(e)) add$2(result, e);
    });
  }

  return result;
};

var $$F = _export;
var fails$l = fails$J;
var intersection = setIntersection;
var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;

var INCORRECT$3 = !setMethodAcceptSetLike$5('intersection', function (result) {
  return result.size === 2 && result.has(1) && result.has(2);
}) || fails$l(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$$F({ target: 'Set', proto: true, real: true, forced: INCORRECT$3 }, {
  intersection: intersection
});

var aSet$4 = aSet$7;
var has$5 = setHelpers.has;
var size$2 = setSize;
var getSetRecord$4 = getSetRecord$7;
var iterateSet = setIterate$1;
var iterateSimple$3 = iterateSimple$7;
var iteratorClose$6 = iteratorClose$e;

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
var setIsDisjointFrom = function isDisjointFrom(other) {
  var O = aSet$4(this);
  var otherRec = getSetRecord$4(other);
  if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple$3(iterator, function (e) {
    if (has$5(O, e)) return iteratorClose$6(iterator.iterator, 'normal', false);
  }) !== false;
};

var $$E = _export;
var isDisjointFrom = setIsDisjointFrom;
var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

var INCORRECT$2 = !setMethodAcceptSetLike$4('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$$E({ target: 'Set', proto: true, real: true, forced: INCORRECT$2 }, {
  isDisjointFrom: isDisjointFrom
});

var aSet$3 = aSet$7;
var size$1 = setSize;
var iterate$7 = setIterate$1;
var getSetRecord$3 = getSetRecord$7;

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
var setIsSubsetOf = function isSubsetOf(other) {
  var O = aSet$3(this);
  var otherRec = getSetRecord$3(other);
  if (size$1(O) > otherRec.size) return false;
  return iterate$7(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};

var $$D = _export;
var isSubsetOf = setIsSubsetOf;
var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

var INCORRECT$1 = !setMethodAcceptSetLike$3('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$$D({ target: 'Set', proto: true, real: true, forced: INCORRECT$1 }, {
  isSubsetOf: isSubsetOf
});

var aSet$2 = aSet$7;
var has$4 = setHelpers.has;
var size = setSize;
var getSetRecord$2 = getSetRecord$7;
var iterateSimple$2 = iterateSimple$7;
var iteratorClose$5 = iteratorClose$e;

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
var setIsSupersetOf = function isSupersetOf(other) {
  var O = aSet$2(this);
  var otherRec = getSetRecord$2(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple$2(iterator, function (e) {
    if (!has$4(O, e)) return iteratorClose$5(iterator.iterator, 'normal', false);
  }) !== false;
};

var $$C = _export;
var isSupersetOf = setIsSupersetOf;
var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

var INCORRECT = !setMethodAcceptSetLike$2('isSupersetOf', function (result) {
  return !result;
});

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$$C({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSupersetOf: isSupersetOf
});

var aSet$1 = aSet$7;
var SetHelpers$1 = setHelpers;
var clone$1 = setClone;
var getSetRecord$1 = getSetRecord$7;
var iterateSimple$1 = iterateSimple$7;

var add$1 = SetHelpers$1.add;
var has$3 = SetHelpers$1.has;
var remove$1 = SetHelpers$1.remove;

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
var setSymmetricDifference = function symmetricDifference(other) {
  var O = aSet$1(this);
  var keysIter = getSetRecord$1(other).getIterator();
  var result = clone$1(O);
  iterateSimple$1(keysIter, function (e) {
    if (has$3(O, e)) remove$1(result, e);
    else add$1(result, e);
  });
  return result;
};

// Should get iterator record of a set-like object before cloning this
// https://bugs.webkit.org/show_bug.cgi?id=289430
var setMethodGetKeysBeforeCloningDetection = function (METHOD_NAME) {
  try {
    // eslint-disable-next-line es/no-set -- needed for test
    var baseSet = new Set();
    var setLike = {
      size: 0,
      has: function () { return true; },
      keys: function () {
        // eslint-disable-next-line es/no-object-defineproperty -- needed for test
        return Object.defineProperty({}, 'next', {
          get: function () {
            baseSet.clear();
            baseSet.add(4);
            return function () {
              return { done: true };
            };
          }
        });
      }
    };
    var result = baseSet[METHOD_NAME](setLike);

    return result.size === 1 && result.values().next().value === 4;
  } catch (error) {
    return false;
  }
};

var $$B = _export;
var symmetricDifference = setSymmetricDifference;
var setMethodGetKeysBeforeCloning$1 = setMethodGetKeysBeforeCloningDetection;
var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

var FORCED$4 = !setMethodAcceptSetLike$1('symmetricDifference') || !setMethodGetKeysBeforeCloning$1('symmetricDifference');

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$$B({ target: 'Set', proto: true, real: true, forced: FORCED$4 }, {
  symmetricDifference: symmetricDifference
});

var aSet = aSet$7;
var add = setHelpers.add;
var clone = setClone;
var getSetRecord = getSetRecord$7;
var iterateSimple = iterateSimple$7;

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
var setUnion = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};

var $$A = _export;
var union = setUnion;
var setMethodGetKeysBeforeCloning = setMethodGetKeysBeforeCloningDetection;
var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

var FORCED$3 = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$$A({ target: 'Set', proto: true, real: true, forced: FORCED$3 }, {
  union: union
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var call$i = functionCall;
var defineBuiltIn$7 = defineBuiltIn$e;
var regexpExec$1 = regexpExec$2;
var fails$k = fails$J;
var wellKnownSymbol$a = wellKnownSymbol$q;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$f;

var SPECIES$1 = wellKnownSymbol$a('species');
var RegExpPrototype$3 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$a(KEY);

  var DELEGATES_TO_SYMBOL = !fails$k(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$k(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      var constructor = {};
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      constructor[SPECIES$1] = function () { return re; };
      re = { constructor: constructor, flags: '' };
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$3.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call$i(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call$i(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$7(String.prototype, KEY, methods[0]);
    defineBuiltIn$7(RegExpPrototype$3, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$7(RegExpPrototype$3[SYMBOL], 'sham', true);
};

var uncurryThis$u = functionUncurryThis;
var toIntegerOrInfinity$6 = toIntegerOrInfinity$a;
var toString$b = toString$f;
var requireObjectCoercible$3 = requireObjectCoercible$7;

var charAt$8 = uncurryThis$u(''.charAt);
var charCodeAt$1 = uncurryThis$u(''.charCodeAt);
var stringSlice$8 = uncurryThis$u(''.slice);

var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$b(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$6(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$8(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$8(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$4(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$4(true)
};

var charAt$7 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$7(S, index).length || 1 : 1);
};

var uncurryThis$t = functionUncurryThis;
var toObject$8 = toObject$d;

var floor$7 = Math.floor;
var charAt$6 = uncurryThis$t(''.charAt);
var replace$7 = uncurryThis$t(''.replace);
var stringSlice$7 = uncurryThis$t(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$2 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$8(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$7(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$6(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$7(str, 0, position);
      case "'": return stringSlice$7(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$7(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$7(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$6(ch, 1) : captures[f - 1] + charAt$6(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$h = functionCall;
var hasOwn$a = hasOwnProperty_1;
var isPrototypeOf$5 = objectIsPrototypeOf;
var regExpFlagsDetection = regexpFlagsDetection;
var regExpFlagsGetterImplementation = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = regExpFlagsDetection.correct ? function (it) {
  return it.flags;
} : function (it) {
  return (!regExpFlagsDetection.correct && isPrototypeOf$5(RegExpPrototype$2, it) && !hasOwn$a(it, 'flags'))
    ? call$h(regExpFlagsGetterImplementation, it)
    : it.flags;
};

var call$g = functionCall;
var anObject$9 = anObject$q;
var isCallable$9 = isCallable$x;
var classof$a = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$b = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$9(exec)) {
    var result = call$g(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$a(R) === 'RegExp') return call$g(regexpExec, R, S);
  throw new $TypeError$b('RegExp#exec called on incompatible receiver');
};

var apply$2 = functionApply;
var call$f = functionCall;
var uncurryThis$s = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$j = fails$J;
var anObject$8 = anObject$q;
var isCallable$8 = isCallable$x;
var isObject$a = isObject$p;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$a;
var toLength$2 = toLength$4;
var toString$a = toString$f;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$1;
var getMethod$1 = getMethod$6;
var getSubstitution$1 = getSubstitution$2;
var getRegExpFlags$3 = regexpGetFlags;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$9 = wellKnownSymbol$q;

var REPLACE$1 = wellKnownSymbol$9('replace');
var max$2 = Math.max;
var min$2 = Math.min;
var concat$1 = uncurryThis$s([].concat);
var push$8 = uncurryThis$s([].push);
var stringIndexOf$2 = uncurryThis$s(''.indexOf);
var stringSlice$6 = uncurryThis$s(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE$1]) {
    return /./[REPLACE$1]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$j(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = isObject$a(searchValue) ? getMethod$1(searchValue, REPLACE$1) : undefined;
      return replacer
        ? call$f(replacer, searchValue, O, replaceValue)
        : call$f(nativeReplace, toString$a(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$a(string);

      var functionalReplace = isCallable$8(replaceValue);
      if (!functionalReplace) replaceValue = toString$a(replaceValue);
      var flags = toString$a(getRegExpFlags$3(rx));

      if (
        typeof replaceValue == 'string' &&
        !~stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) &&
        !~stringIndexOf$2(replaceValue, '$<') &&
        !~stringIndexOf$2(flags, 'y')
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var global = !!~stringIndexOf$2(flags, 'g');
      var fullUnicode;
      if (global) {
        fullUnicode = !!~stringIndexOf$2(flags, 'u') || !!~stringIndexOf$2(flags, 'v');
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push$8(results, result);
        if (!global) break;

        var matchStr = toString$a(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$2(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$a(result[0]);
        var position = max$2(min$2(toIntegerOrInfinity$5(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$8(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== undefined) push$8(replacerArgs, namedCaptures);
          replacement = toString$a(apply$2(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$6(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$r = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var toString$9 = toString$f;
var whitespaces$1 = whitespaces$2;

var replace$6 = uncurryThis$r(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = toString$9(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$6(string, ltrim, '');
    if (TYPE & 2) string = replace$6(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var fails$i = fails$J;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$i(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$z = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$z({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var uncurryThis$q = functionUncurryThis;

// eslint-disable-next-line es/no-weak-map -- safe
var WeakMapPrototype = WeakMap.prototype;

var weakMapHelpers = {
  // eslint-disable-next-line es/no-weak-map -- safe
  WeakMap: WeakMap,
  set: uncurryThis$q(WeakMapPrototype.set),
  get: uncurryThis$q(WeakMapPrototype.get),
  has: uncurryThis$q(WeakMapPrototype.has),
  remove: uncurryThis$q(WeakMapPrototype['delete'])
};

var $$y = _export;
var WeakMapHelpers$2 = weakMapHelpers;
var IS_PURE$1 = isPure;

var get$2 = WeakMapHelpers$2.get;
var has$2 = WeakMapHelpers$2.has;
var set$3 = WeakMapHelpers$2.set;

// `WeakMap.prototype.getOrInsert` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsert
$$y({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE$1 }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has$2(this, key)) return get$2(this, key);
    set$3(this, key, value);
    return value;
  }
});

var has$1 = weakMapHelpers.has;

// Perform ? RequireInternalSlot(M, [[WeakMapData]])
var aWeakMap$1 = function (it) {
  has$1(it);
  return it;
};

var WeakMapHelpers$1 = weakMapHelpers;

var weakmap = new WeakMapHelpers$1.WeakMap();
var set$2 = WeakMapHelpers$1.set;
var remove = WeakMapHelpers$1.remove;

var aWeakKey$1 = function (key) {
  set$2(weakmap, key, 1);
  remove(weakmap, key);
  return key;
};

var $$x = _export;
var aCallable$b = aCallable$o;
var aWeakMap = aWeakMap$1;
var aWeakKey = aWeakKey$1;
var WeakMapHelpers = weakMapHelpers;

var get$1 = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set$1 = WeakMapHelpers.set;

var FORCED$2 = !function () {
  try {
    // eslint-disable-next-line es/no-weak-map, no-throw-literal -- testing
    if (WeakMap.prototype.getOrInsertComputed) new WeakMap().getOrInsertComputed(1, function () { throw 1; });
  } catch (error) {
    // FF144 Nightly - Beta 3 bug
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1988369
    return error instanceof TypeError;
  }
}();

// `WeakMap.prototype.getOrInsertComputed` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsertcomputed
$$x({ target: 'WeakMap', proto: true, real: true, forced: FORCED$2 }, {
  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
    aWeakMap(this);
    aWeakKey(key);
    aCallable$b(callbackfn);
    if (has(this, key)) return get$1(this, key);
    var value = callbackfn(key);
    set$1(this, key, value);
    return value;
  }
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var globalThis$y = globalThis_1;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$f;
var setToStringTag$3 = setToStringTag$8;
var wellKnownSymbol$8 = wellKnownSymbol$q;

var ITERATOR$2 = wellKnownSymbol$8('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty$6(CollectionPrototype, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$2] = ArrayValues;
    }
    setToStringTag$3(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$6(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis$y[COLLECTION_NAME] && globalThis$y[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var $$w = _export;
var globalThis$x = globalThis_1;
var clearImmediate = task$1.clear;

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$$w({ global: true, bind: true, enumerable: true, forced: globalThis$x.clearImmediate !== clearImmediate }, {
  clearImmediate: clearImmediate
});

var globalThis$w = globalThis_1;
var apply$1 = functionApply;
var isCallable$7 = isCallable$x;
var ENVIRONMENT$1 = environment;
var USER_AGENT = environmentUserAgent;
var arraySlice$3 = arraySlice$5;
var validateArgumentsLength$6 = validateArgumentsLength$8;

var Function$1 = globalThis$w.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT$1 === 'BUN' && (function () {
  var version = globalThis$w.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
var schedulersFix$1 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$6(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$7(handler) ? handler : Function$1(handler);
    var params = boundArgs ? arraySlice$3(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply$1(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$v = _export;
var globalThis$v = globalThis_1;
var setTask = task$1.set;
var schedulersFix = schedulersFix$1;

// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis$v.setImmediate ? schedulersFix(setTask, false) : setTask;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$$v({ global: true, bind: true, enumerable: true, forced: globalThis$v.setImmediate !== setImmediate }, {
  setImmediate: setImmediate
});

var $$u = _export;
var globalThis$u = globalThis_1;
var microtask = microtask_1;
var aCallable$a = aCallable$o;
var validateArgumentsLength$5 = validateArgumentsLength$8;
var fails$h = fails$J;
var DESCRIPTORS$f = descriptors;

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9249
var WRONG_ARITY$1 = fails$h(function () {
  // getOwnPropertyDescriptor for prevent experimental warning in Node 11
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  return DESCRIPTORS$f && Object.getOwnPropertyDescriptor(globalThis$u, 'queueMicrotask').value.length !== 1;
});

// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$$u({ global: true, enumerable: true, dontCallGetSet: true, forced: WRONG_ARITY$1 }, {
  queueMicrotask: function queueMicrotask(fn) {
    validateArgumentsLength$5(arguments.length, 1);
    microtask(aCallable$a(fn));
  }
});

var aCallable$9 = aCallable$o;
var toObject$7 = toObject$d;
var IndexedObject$3 = indexedObject;
var lengthOfArrayLike$d = lengthOfArrayLike$i;

var $TypeError$a = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$2 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject$7(that);
    var self = IndexedObject$3(O);
    var length = lengthOfArrayLike$d(O);
    aCallable$9(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError$a(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError$a(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$2(false)};

var fails$g = fails$J;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$g(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$t = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var CHROME_VERSION = environmentV8Version;
var IS_NODE$1 = environmentIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE$1 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$1 = CHROME_BUG || !arrayMethodIsStrict$1('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$t({ target: 'Array', proto: true, forced: FORCED$1 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var $$s = _export;
var globalThis$t = globalThis_1;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$s({ global: true, forced: globalThis$t.globalThis !== globalThis$t }, {
  globalThis: globalThis$t
});

var $$r = _export;
var call$e = functionCall;
var iterate$6 = iterate$c;
var aCallable$8 = aCallable$o;
var anObject$7 = anObject$q;
var getIteratorDirect$4 = getIteratorDirect$9;
var iteratorClose$4 = iteratorClose$e;
var iteratorHelperWithoutClosingOnEarlyError$3 = iteratorHelperWithoutClosingOnEarlyError$7;

var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$3('find', TypeError);

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$$r({ target: 'Iterator', proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
  find: function find(predicate) {
    anObject$7(this);
    try {
      aCallable$8(predicate);
    } catch (error) {
      iteratorClose$4(this, 'throw', error);
    }

    if (findWithoutClosingOnEarlyError) return call$e(findWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect$4(this);
    var counter = 0;
    return iterate$6(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});

var $$q = _export;
var iterate$5 = iterate$c;
var aCallable$7 = aCallable$o;
var anObject$6 = anObject$q;
var getIteratorDirect$3 = getIteratorDirect$9;
var iteratorClose$3 = iteratorClose$e;
var iteratorHelperWithoutClosingOnEarlyError$2 = iteratorHelperWithoutClosingOnEarlyError$7;
var apply = functionApply;
var fails$f = fails$J;

var $TypeError$9 = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails$f(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError$2('reduce', $TypeError$9);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$$q({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject$6(this);
    try {
      aCallable$7(reducer);
    } catch (error) {
      iteratorClose$3(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect$3(this);
    var counter = 0;
    iterate$5(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError$9('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});

var $$p = _export;
var DESCRIPTORS$e = descriptors;
var globalThis$s = globalThis_1;
var getBuiltIn$4 = getBuiltIn$f;
var uncurryThis$p = functionUncurryThis;
var call$d = functionCall;
var isCallable$6 = isCallable$x;
var isObject$9 = isObject$p;
var isArray$2 = isArray$5;
var hasOwn$9 = hasOwnProperty_1;
var toString$8 = toString$f;
var lengthOfArrayLike$c = lengthOfArrayLike$i;
var createProperty$4 = createProperty$6;
var fails$e = fails$J;
var parseJSONString = parseJsonString;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var JSON$1 = globalThis$s.JSON;
var Number$1 = globalThis$s.Number;
var SyntaxError$4 = globalThis$s.SyntaxError;
var nativeParse = JSON$1 && JSON$1.parse;
var enumerableOwnProperties = getBuiltIn$4('Object', 'keys');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var at$1 = uncurryThis$p(''.charAt);
var slice$2 = uncurryThis$p(''.slice);
var exec$4 = uncurryThis$p(/./.exec);
var push$7 = uncurryThis$p([].push);

var IS_DIGIT = /^\d$/;
var IS_NON_ZERO_DIGIT = /^[1-9]$/;
var IS_NUMBER_START = /^[\d-]$/;
var IS_WHITESPACE = /^[\t\n\r ]$/;

var PRIMITIVE = 0;
var OBJECT = 1;

var $parse = function (source, reviver) {
  source = toString$8(source);
  var context = new Context(source, 0);
  var root = context.parse();
  var value = root.value;
  var endIndex = context.skip(IS_WHITESPACE, root.end);
  if (endIndex < source.length) {
    throw new SyntaxError$4('Unexpected extra character: "' + at$1(source, endIndex) + '" after the parsed data at: ' + endIndex);
  }
  return isCallable$6(reviver) ? internalize({ '': value }, '', reviver, root) : value;
};

var internalize = function (holder, name, reviver, node) {
  var val = holder[name];
  var unmodified = node && val === node.value;
  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  var elementRecordsLen, keys, len, i, P;
  if (isObject$9(val)) {
    var nodeIsArray = isArray$2(val);
    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
    if (nodeIsArray) {
      elementRecordsLen = nodes.length;
      len = lengthOfArrayLike$c(val);
      for (i = 0; i < len; i++) {
        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
      }
    } else {
      keys = enumerableOwnProperties(val);
      len = lengthOfArrayLike$c(keys);
      for (i = 0; i < len; i++) {
        P = keys[i];
        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn$9(nodes, P) ? nodes[P] : undefined));
      }
    }
  }
  return call$d(reviver, holder, name, val, context);
};

var internalizeProperty = function (object, key, value) {
  if (DESCRIPTORS$e) {
    var descriptor = getOwnPropertyDescriptor(object, key);
    if (descriptor && !descriptor.configurable) return;
  }
  if (value === undefined) delete object[key];
  else createProperty$4(object, key, value);
};

var Node = function (value, end, source, nodes) {
  this.value = value;
  this.end = end;
  this.source = source;
  this.nodes = nodes;
};

var Context = function (source, index) {
  this.source = source;
  this.index = index;
};

// https://www.json.org/json-en.html
Context.prototype = {
  fork: function (nextIndex) {
    return new Context(this.source, nextIndex);
  },
  parse: function () {
    var source = this.source;
    var i = this.skip(IS_WHITESPACE, this.index);
    var fork = this.fork(i);
    var chr = at$1(source, i);
    if (exec$4(IS_NUMBER_START, chr)) return fork.number();
    switch (chr) {
      case '{':
        return fork.object();
      case '[':
        return fork.array();
      case '"':
        return fork.string();
      case 't':
        return fork.keyword(true);
      case 'f':
        return fork.keyword(false);
      case 'n':
        return fork.keyword(null);
    } throw new SyntaxError$4('Unexpected character: "' + chr + '" at: ' + i);
  },
  node: function (type, value, start, end, nodes) {
    return new Node(value, end, type ? null : slice$2(this.source, start, end), nodes);
  },
  object: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectKeypair = false;
    var object = {};
    var nodes = {};
    var closed = false;
    while (i < source.length) {
      i = this.until(['"', '}'], i);
      if (at$1(source, i) === '}' && !expectKeypair) {
        i++;
        closed = true;
        break;
      }
      // Parsing the key
      var result = this.fork(i).string();
      var key = result.value;
      i = result.end;
      i = this.until([':'], i) + 1;
      // Parsing value
      i = this.skip(IS_WHITESPACE, i);
      result = this.fork(i).parse();
      createProperty$4(nodes, key, result);
      createProperty$4(object, key, result.value);
      i = this.until([',', '}'], result.end);
      var chr = at$1(source, i);
      if (chr === ',') {
        expectKeypair = true;
        i++;
      } else if (chr === '}') {
        i++;
        closed = true;
        break;
      }
    }
    if (!closed) throw new SyntaxError$4('Unterminated object at: ' + i);
    return this.node(OBJECT, object, this.index, i, nodes);
  },
  array: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectElement = false;
    var array = [];
    var nodes = [];
    var closed = false;
    while (i < source.length) {
      i = this.skip(IS_WHITESPACE, i);
      if (at$1(source, i) === ']' && !expectElement) {
        i++;
        closed = true;
        break;
      }
      var result = this.fork(i).parse();
      push$7(nodes, result);
      push$7(array, result.value);
      i = this.until([',', ']'], result.end);
      if (at$1(source, i) === ',') {
        expectElement = true;
        i++;
      } else if (at$1(source, i) === ']') {
        i++;
        closed = true;
        break;
      }
    }
    if (!closed) throw new SyntaxError$4('Unterminated array at: ' + i);
    return this.node(OBJECT, array, this.index, i, nodes);
  },
  string: function () {
    var index = this.index;
    var parsed = parseJSONString(this.source, this.index + 1);
    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  },
  number: function () {
    var source = this.source;
    var startIndex = this.index;
    var i = startIndex;
    if (at$1(source, i) === '-') i++;
    if (at$1(source, i) === '0') i++;
    else if (exec$4(IS_NON_ZERO_DIGIT, at$1(source, i))) i = this.skip(IS_DIGIT, i + 1);
    else throw new SyntaxError$4('Failed to parse number at: ' + i);
    if (at$1(source, i) === '.') {
      var fractionStartIndex = i + 1;
      i = this.skip(IS_DIGIT, fractionStartIndex);
      if (fractionStartIndex === i) throw new SyntaxError$4("Failed to parse number's fraction at: " + i);
    }
    if (at$1(source, i) === 'e' || at$1(source, i) === 'E') {
      i++;
      if (at$1(source, i) === '+' || at$1(source, i) === '-') i++;
      var exponentStartIndex = i;
      i = this.skip(IS_DIGIT, i);
      if (exponentStartIndex === i) throw new SyntaxError$4("Failed to parse number's exponent value at: " + i);
    }
    return this.node(PRIMITIVE, Number$1(slice$2(source, startIndex, i)), startIndex, i);
  },
  keyword: function (value) {
    var keyword = '' + value;
    var index = this.index;
    var endIndex = index + keyword.length;
    if (slice$2(this.source, index, endIndex) !== keyword) throw new SyntaxError$4('Failed to parse value at: ' + index);
    return this.node(PRIMITIVE, value, index, endIndex);
  },
  skip: function (regex, i) {
    var source = this.source;
    for (; i < source.length; i++) if (!exec$4(regex, at$1(source, i))) break;
    return i;
  },
  until: function (array, i) {
    i = this.skip(IS_WHITESPACE, i);
    var chr = at$1(this.source, i);
    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
    throw new SyntaxError$4('Unexpected character: "' + chr + '" at: ' + i);
  }
};

var NO_SOURCE_SUPPORT = fails$e(function () {
  var unsafeInt = '9007199254740993';
  var source;
  nativeParse(unsafeInt, function (key, value, context) {
    source = context.source;
  });
  return source !== unsafeInt;
});

var PROPER_BASE_PARSE = NATIVE_SYMBOL$1 && !fails$e(function () {
  // Safari 9 bug
  return 1 / nativeParse('-0 \t') !== -Infinity;
});

// `JSON.parse` method
// https://tc39.es/ecma262/#sec-json.parse
// https://github.com/tc39/proposal-json-parse-with-source
$$p({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  parse: function parse(text, reviver) {
    return PROPER_BASE_PARSE && !isCallable$6(reviver) ? nativeParse(text) : $parse(text, reviver);
  }
});

var $$o = _export;
var call$c = functionCall;
var aCallable$6 = aCallable$o;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$4;
var iterate$4 = iterate$c;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$$o({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable$6(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$4(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$c(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$n = _export;
var globalThis$r = globalThis_1;
var defineBuiltInAccessor$9 = defineBuiltInAccessor$d;
var DESCRIPTORS$d = descriptors;

var $TypeError$8 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;
var INCORRECT_VALUE = globalThis$r.self !== globalThis$r;

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
  if (DESCRIPTORS$d) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var descriptor$1 = Object.getOwnPropertyDescriptor(globalThis$r, 'self');
    // some engines have `self`, but with incorrect descriptor
    // https://github.com/denoland/deno/issues/15765
    if (INCORRECT_VALUE || !descriptor$1 || !descriptor$1.get || !descriptor$1.enumerable) {
      defineBuiltInAccessor$9(globalThis$r, 'self', {
        get: function self() {
          return globalThis$r;
        },
        set: function self(value) {
          if (this !== globalThis$r) throw new $TypeError$8('Illegal invocation');
          defineProperty$2(globalThis$r, 'self', {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
          });
        },
        configurable: true,
        enumerable: true
      });
    }
  } else $$n({ global: true, simple: true, forced: INCORRECT_VALUE }, {
    self: globalThis$r
  });
} catch (error) { /* empty */ }

var charAt$5 = stringMultibyte.charAt;
var toString$7 = toString$f;
var InternalStateModule$5 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$4;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = InternalStateModule$5.set;
var getInternalState$3 = InternalStateModule$5.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: toString$7(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$3(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject$1(undefined, true);
  point = charAt$5(string, index);
  state.index += point.length;
  return createIterResultObject$1(point, false);
});

var fails$d = fails$J;
var wellKnownSymbol$7 = wellKnownSymbol$q;
var DESCRIPTORS$c = descriptors;
var IS_PURE = isPure;

var ITERATOR$1 = wellKnownSymbol$7('iterator');

var urlConstructorDetection = !fails$d(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'https://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
    || (!params.size && (IS_PURE || !DESCRIPTORS$c))
    || !params.sort
    || url.href !== 'https://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR$1]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('https://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('https://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('https://x', undefined).host !== 'x';
});

var DESCRIPTORS$b = descriptors;
var uncurryThis$o = functionUncurryThis;
var call$b = functionCall;
var fails$c = fails$J;
var objectKeys$1 = objectKeys$3;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$6 = toObject$d;
var IndexedObject$2 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat = uncurryThis$o([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$c(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$b && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$6(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$2(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$b || call$b(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var bind$5 = functionBindContext;
var call$a = functionCall;
var toObject$5 = toObject$d;
var callWithSafeIterationClosing = callWithSafeIterationClosing$3;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
var isConstructor$2 = isConstructor$4;
var lengthOfArrayLike$b = lengthOfArrayLike$i;
var createProperty$3 = createProperty$6;
var setArrayLength = arraySetLength;
var getIterator$2 = getIteratorInternal;
var getIteratorMethod$2 = getIteratorMethodInternal;
var iteratorClose$2 = iteratorClose$e;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;

var $Array$5 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var IS_CONSTRUCTOR = isConstructor$2(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$5(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var O = toObject$5(arrayLike);
  var iteratorMethod = getIteratorMethod$2(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$5 && isArrayIteratorMethod$1(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator$2(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call$a(next, iterator)).done; index++) {
      try {
        doesNotExceedSafeInteger(index);
      } catch (error) {
        iteratorClose$2(iterator, 'throw', error);
      }
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      try {
        createProperty$3(result, index, value);
      } catch (error) {
        iteratorClose$2(iterator, 'throw', error);
      }
    }
  } else {
    length = lengthOfArrayLike$b(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$5(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$3(result, index, value);
    }
  }
  setArrayLength(result, index);
  return result;
};

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis$n = functionUncurryThis;

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError$5 = RangeError;
var exec$3 = uncurryThis$n(regexSeparators.exec);
var floor$6 = Math.floor;
var fromCharCode$3 = String.fromCharCode;
var charCodeAt = uncurryThis$n(''.charCodeAt);
var join$5 = uncurryThis$n([].join);
var push$6 = uncurryThis$n([].push);
var replace$5 = uncurryThis$n(''.replace);
var split$2 = uncurryThis$n(''.split);
var toLowerCase$1 = uncurryThis$n(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
        push$6(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$6(output, value);
        counter--;
      }
    } else {
      push$6(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$6(delta / damp) : delta >> 1;
  delta += floor$6(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$6(delta / baseMinusTMin);
    k += base;
  }
  return floor$6(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode$1 = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$6(output, fromCharCode$3(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$6(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$6((maxInt - delta) / handledCPCountPlusOne)) {
      throw new $RangeError$5(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw new $RangeError$5(OVERFLOW_ERROR);
      }
      if (currentValue === n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$6(output, fromCharCode$3(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$6(qMinusT / baseMinusT);
          k += base;
        }

        push$6(output, fromCharCode$3(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join$5(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$5(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$6(encoded, exec$3(regexNonASCII, label) ? 'xn--' + encode$1(label) : label);
  }
  return join$5(encoded, '.');
};

var $$m = _export;
var uncurryThis$m = functionUncurryThis;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;

var $RangeError$4 = RangeError;
var fromCharCode$2 = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join$4 = uncurryThis$m([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$$m({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i];
      if (toAbsoluteIndex$2(code, 0x10FFFF) !== code) throw new $RangeError$4(code + ' is not a valid code point');
      elements[i++] = code < 0x10000
        ? fromCharCode$2(code)
        : fromCharCode$2(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join$4(elements, '');
  }
});

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var getBuiltIn$3 = getBuiltIn$f;
var uncurryThis$l = functionUncurryThis;

var fromCharCode$1 = String.fromCharCode;
var fromCodePoint = getBuiltIn$3('String', 'fromCodePoint');
var $encodeURIComponent = encodeURIComponent;
var $parseInt = parseInt;
var charAt$4 = uncurryThis$l(''.charAt);
var push$5 = uncurryThis$l([].push);
var replace$4 = uncurryThis$l(''.replace);
var stringSlice$5 = uncurryThis$l(''.slice);
var exec$2 = uncurryThis$l(/./.exec);

var FALLBACK_REPLACER = '\uFFFD';
var VALID_HEX = /^[0-9a-f]+$/i;
// a surrogate pair is matched first, so a one-unit match is always a lone surrogate
var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;

var parseHexOctet = function (string, start) {
  var substr = stringSlice$5(string, start, start + 2);
  if (!exec$2(VALID_HEX, substr)) return NaN;

  return $parseInt(substr, 16);
};

var getLeadingOnes = function (octet) {
  var count = 0;
  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
    count++;
  }
  return count;
};

var utf8Decode = function (octets) {
  var codePoint = null;
  var length = octets.length;

  switch (length) {
    case 1:
      codePoint = octets[0];
      break;
    case 2:
      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
      break;
    case 3:
      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
      break;
    case 4:
      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
      break;
  }

  // reject surrogates, overlong encodings, and out-of-range codepoints
  if (codePoint === null
    || codePoint > 0x10FFFF
    || (codePoint >= 0xD800 && codePoint <= 0xDFFF)
    || codePoint < (length > 3 ? 0x10000 : length > 2 ? 0x800 : length > 1 ? 0x80 : 0)
  ) return null;

  return codePoint;
};

var replaceLoneSurrogate = function (chunk) {
  return chunk.length === 2 ? chunk : FALLBACK_REPLACER;
};

// https://url.spec.whatwg.org/#percent-decode
/* eslint-disable max-depth -- ok */
var decode = function (input) {
  var length = input.length;
  var result = '';
  var i = 0;

  while (i < length) {
    var decodedChar = charAt$4(input, i);

    if (decodedChar === '%') {
      if (charAt$4(input, i + 1) === '%' || i + 3 > length) {
        result += '%';
        i++;
        continue;
      }

      var octet = parseHexOctet(input, i + 1);

      // eslint-disable-next-line no-self-compare -- NaN check
      if (octet !== octet) {
        result += decodedChar;
        i++;
        continue;
      }

      i += 2;
      var byteSequenceLength = getLeadingOnes(octet);

      if (byteSequenceLength === 0) {
        decodedChar = fromCharCode$1(octet);
      } else {
        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
          result += FALLBACK_REPLACER;
          i++;
          continue;
        }

        var octets = [octet];
        var sequenceIndex = 1;

        while (sequenceIndex < byteSequenceLength) {
          i++;
          if (i + 3 > length || charAt$4(input, i) !== '%') break;

          var nextByte = parseHexOctet(input, i + 1);

          // eslint-disable-next-line no-self-compare -- NaN check
          if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;

          // https://encoding.spec.whatwg.org/#utf-8-decoder - position-specific byte ranges
          if (sequenceIndex === 1) {
            if (octet === 0xE0 && nextByte < 0xA0) break;
            if (octet === 0xED && nextByte > 0x9F) break;
            if (octet === 0xF0 && nextByte < 0x90) break;
            if (octet === 0xF4 && nextByte > 0x8F) break;
          }

          push$5(octets, nextByte);
          i += 2;
          sequenceIndex++;
        }

        if (octets.length !== byteSequenceLength) {
          result += FALLBACK_REPLACER;
          continue;
        }

        var codePoint = utf8Decode(octets);
        if (codePoint === null) {
          for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
          i++;
          continue;
        } else {
          decodedChar = fromCodePoint(codePoint);
        }
      }
    }

    result += decodedChar;
    i++;
  }

  return result;
};
/* eslint-enable max-depth -- ok */

// https://url.spec.whatwg.org/#string-percent-encode-after-encoding
// a lone surrogate is the only input `encodeURIComponent` throws on, and the UTF-8
// encoder replaces it - so the throw selects the slow path instead of a per-call scan
var encode = function (input) {
  try {
    return $encodeURIComponent(input);
  } catch (error) {
    return $encodeURIComponent(replace$4(input, SURROGATE, replaceLoneSurrogate));
  }
};

var urlPercentCoding = {
  decode: decode,
  encode: encode
};

var arraySlice$2 = arraySlice$5;

var floor$5 = Math.floor;

var sort$1 = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor$5(length / 2);
    var left = sort$1(arraySlice$2(array, 0, middle), comparefn);
    var right = sort$1(arraySlice$2(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

var arraySort$1 = sort$1;

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$l = _export;
var globalThis$q = globalThis_1;
var safeGetBuiltIn = safeGetBuiltIn$2;
var call$9 = functionCall;
var uncurryThis$k = functionUncurryThis;
var DESCRIPTORS$a = descriptors;
var USE_NATIVE_URL$1 = urlConstructorDetection;
var percentCoding$1 = urlPercentCoding;
var defineBuiltIn$6 = defineBuiltIn$e;
var defineBuiltInAccessor$8 = defineBuiltInAccessor$d;
var defineBuiltIns$1 = defineBuiltIns$3;
var setToStringTag$2 = setToStringTag$8;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$4 = internalState;
var anInstance$4 = anInstance$7;
var isCallable$5 = isCallable$x;
var hasOwn$8 = hasOwnProperty_1;
var bind$4 = functionBindContext;
var classof$9 = classof$h;
var anObject$5 = anObject$q;
var isObject$8 = isObject$p;
var $toString$1 = toString$f;
var create$3 = objectCreate;
var createPropertyDescriptor$3 = createPropertyDescriptor$9;
var getIterator$1 = getIteratorInternal;
var getIteratorMethod$1 = getIteratorMethodInternal;
var createIterResultObject = createIterResultObject$4;
var validateArgumentsLength$4 = validateArgumentsLength$8;
var wellKnownSymbol$6 = wellKnownSymbol$q;
var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol$6('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$3 = InternalStateModule$4.set;
var getInternalParamsState = InternalStateModule$4.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$4.getterFor(URL_SEARCH_PARAMS_ITERATOR);
var percentDecode$1 = percentCoding$1.decode;
var percentEncode$1 = percentCoding$1.encode;

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var TypeError$6 = globalThis$q.TypeError;
var charAt$3 = uncurryThis$k(''.charAt);
var join$3 = uncurryThis$k([].join);
var push$4 = uncurryThis$k([].push);
var replace$3 = uncurryThis$k(''.replace);
var shift$1 = uncurryThis$k([].shift);
var splice = uncurryThis$k([].splice);
var split$1 = uncurryThis$k(''.split);
var stringSlice$4 = uncurryThis$k(''.slice);

var plus = /\+/g;

// https://url.spec.whatwg.org/#urlencoded-parsing - `+` decodes to a space
var decodeQueryComponent = function (input) {
  return percentDecode$1(replace$3(input, plus, ' '));
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$3(percentEncode$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$3(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    target: getInternalParamsState(params).entries,
    index: 0,
    kind: kind
  });
}, URL_SEARCH_PARAMS, function next() {
  var state = getInternalIteratorState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  var entry = target[index];
  switch (state.kind) {
    case 'keys': return createIterResultObject(entry.key, false);
    case 'values': return createIterResultObject(entry.value, false);
  } return createIterResultObject([entry.key, entry.value], false);
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject$8(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$3(init, 0) === '?' ? stringSlice$4(init, 1) : init : $toString$1(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var entries = this.entries;
    var iteratorMethod = getIteratorMethod$1(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator$1(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$9(next, iterator)).done) {
        entryIterator = getIterator$1(anObject$5(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$9(entryNext, entryIterator)).done ||
          (second = call$9(entryNext, entryIterator)).done ||
          !call$9(entryNext, entryIterator).done
        ) throw new TypeError$6('Expected sequence with length 2');
        push$4(entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$8(object, key)) {
      push$4(entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var entries = this.entries;
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$4(entries, {
            key: decodeQueryComponent(shift$1(entry)),
            value: decodeQueryComponent(join$3(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$4(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join$3(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$4(this, URLSearchParamsPrototype$3);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState$3(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS$a) this.size = state.entries.length;
};

var URLSearchParamsPrototype$3 = URLSearchParamsConstructor.prototype;

defineBuiltIns$1(URLSearchParamsPrototype$3, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$4(arguments.length, 2);
    push$4(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    if (!DESCRIPTORS$a) this.size++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength$4(arguments.length, 1);
    var entries = state.entries;
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
      } else index++;
    }
    if (!DESCRIPTORS$a) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$4(arguments.length, 1);
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$4(arguments.length, 1);
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$4(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength$4(arguments.length, 1);
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index++];
      if (entry.key === key && (value === undefined || entry.value === value)) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$4(arguments.length, 2);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$4(entries, { key: key, value: val });
    if (!DESCRIPTORS$a) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$4(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$6(URLSearchParamsPrototype$3, ITERATOR, URLSearchParamsPrototype$3.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$6(URLSearchParamsPrototype$3, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://url.spec.whatwg.org/#dom-urlsearchparams-size
if (DESCRIPTORS$a) defineBuiltInAccessor$8(URLSearchParamsPrototype$3, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag$2(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$l({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable$5(Headers)) {
  var headersHas = uncurryThis$k(HeadersPrototype.has);
  var headersSet = uncurryThis$k(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$8(init)) {
      var body = init.body;
      var headers;
      if (classof$9(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$3(init, {
          body: createPropertyDescriptor$3(0, $toString$1(body)),
          headers: createPropertyDescriptor$3(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$5(nativeFetch)) {
    $$l({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$5(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$4(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$l({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$k = _export;
var DESCRIPTORS$9 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var globalThis$p = globalThis_1;
var bind$3 = functionBindContext;
var uncurryThis$j = functionUncurryThis;
var defineBuiltIn$5 = defineBuiltIn$e;
var defineBuiltInAccessor$7 = defineBuiltInAccessor$d;
var anInstance$3 = anInstance$7;
var hasOwn$7 = hasOwnProperty_1;
var assign = objectAssign;
var arrayFrom = arrayFrom$1;
var arraySlice$1 = arraySlice$5;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var percentCoding = urlPercentCoding;
var $toString = toString$f;
var setToStringTag$1 = setToStringTag$8;
var validateArgumentsLength$3 = validateArgumentsLength$8;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule$3 = internalState;

var setInternalState$2 = InternalStateModule$3.set;
var getInternalURLState = InternalStateModule$3.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var percentDecode = percentCoding.decode;
var percentEncode = percentCoding.encode;

var NativeURL = globalThis$p.URL;
var TypeError$5 = globalThis$p.TypeError;
var parseInt$1 = globalThis$p.parseInt;
var floor$4 = Math.floor;
var pow$1 = Math.pow;
var fromCharCode = String.fromCharCode;
var charAt$2 = uncurryThis$j(''.charAt);
var exec$1 = uncurryThis$j(/./.exec);
var join$2 = uncurryThis$j([].join);
var numberToString$1 = uncurryThis$j(1.1.toString);
var pop = uncurryThis$j([].pop);
var push$3 = uncurryThis$j([].push);
var replace$2 = uncurryThis$j(''.replace);
var shift = uncurryThis$j([].shift);
var split = uncurryThis$j(''.split);
var stringIndexOf$1 = uncurryThis$j(''.indexOf);
var stringSlice$3 = uncurryThis$j(''.slice);
var toLowerCase = uncurryThis$j(''.toLowerCase);
var unshift = uncurryThis$j([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
var ALPHANUMERIC_PLUS_MINUS_DOT = /[\d+\-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
// https://url.spec.whatwg.org/#forbidden-domain-code-point
var FORBIDDEN_DOMAIN_CODE_POINT = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/;
// https://url.spec.whatwg.org/#forbidden-host-code-point
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
var NON_ASCII = /[^\u0000-\u007F]/;
/* eslint-enable regexp/no-control-character -- safe */
// UTS#46 maps these onto a string containing a forbidden domain code point, so a domain
// holding one is rejected - listing them is far smaller than shipping the mapping table
var MAPPED_ONTO_FORBIDDEN = '\u00A8\u00AF\u00B4\u00B8\u02D8\u02D9\u02DA\u02DB\u02DC\u02DD\u037A\u0384\u0385\u1FBD\u1FBF\u1FC0'
  + '\u1FC1\u1FCD\u1FCE\u1FCF\u1FDD\u1FDE\u1FDF\u1FED\u1FEE\u1FFD\u1FFE\u2017\u203E\u2047\u2048\u2049'
  + '\u2100\u2101\u2105\u2106\u2A74\u309B\u309C\uFC5E\uFC5F\uFC60\uFC61\uFC62\uFC63\uFDFA\uFDFB\uFE13'
  + '\uFE16\uFE47\uFE48\uFE49\uFE4A\uFE4B\uFE4C\uFE55\uFE56\uFE5F\uFE64\uFE65\uFE68\uFE6A\uFE6B\uFE70'
  + '\uFE72\uFE74\uFE76\uFE78\uFE7A\uFE7C\uFE7E\uFFE3';
// eslint-disable-next-line no-unassigned-vars -- expected `undefined` value
var EOF;

// https://www.unicode.org/reports/tr46/#IDNA_Mapping_Table
var isIgnoredCodePoint = function (code) {
  return code === 0xAD || code === 0x34F || code === 0x200B || code === 0x3164
    || code === 0xFEFF || code === 0xFFA0
    || (code >= 0x115F && code <= 0x1160)
    || (code >= 0x17B4 && code <= 0x17B5)
    || (code >= 0x180B && code <= 0x180F)
    || (code >= 0x2060 && code <= 0x2064) || (code >= 0x206A && code <= 0x206F)
    || (code >= 0xFE00 && code <= 0xFE0F)
    || (code >= 0xE0100 && code <= 0xE01EF);
};

var isDisallowedCodePoint = function (code) {
  return code === 0xFFFD
    // lone surrogate - a matched pair is a single code point and never lands here
    || (code >= 0xD800 && code <= 0xDFFF)
    // C1 controls
    || (code >= 0x80 && code <= 0x9F)
    // line and paragraph separators, bidirectional formatting characters
    || (code >= 0x200E && code <= 0x200F) || (code >= 0x2028 && code <= 0x2029)
    || (code >= 0x202A && code <= 0x202E) || (code >= 0x2065 && code <= 0x2069)
    // noncharacters
    || (code >= 0xFDD0 && code <= 0xFDEF) || (code & 0xFFFE) === 0xFFFE
    // private use
    || (code >= 0xE000 && code <= 0xF8FF) || (code >= 0xF0000 && code <= 0x10FFFD);
};

var mapCodePoint = function (code) {
  // full-width forms
  if (code >= 0xFF01 && code <= 0xFF5E) return code - 0xFEE0;
  // spaces and the listed code points collapse onto a forbidden domain code point; a space
  // stands in for the real mapping since either way the domain is rejected
  if (code === 0xA0 || code === 0x1680 || code === 0x202F || code === 0x205F || code === 0x3000) return 0x20;
  if (code >= 0x2000 && code <= 0x200A) return 0x20;
  // the list holds no supplementary code point, and `fromCharCode` would truncate one
  if (code <= 0xFFFF && stringIndexOf$1(MAPPED_ONTO_FORBIDDEN, fromCharCode(code)) > -1) return 0x20;
  return code;
};

// https://url.spec.whatwg.org/#concept-domain-to-ascii
// A subset of UTS#46 processing - the full mapping table is too large to ship. Covered are the
// entries cheap to express: the ignored and disallowed code points, full-width forms, and the
// code points mapping onto a forbidden domain code point. Not covered, so such domains are
// punycoded rather than mapped or rejected: unassigned code points, half-width forms,
// compatibility decompositions, NFC, CheckJoiners, CheckBidi, and labels that already arrive
// punycoded - those are not decoded back for validation.
var domainToASCII = function (domain) {
  // every mapped, ignored and disallowed code point is non-ASCII, so an ASCII domain
  // needs the punycode step only - this keeps the common case off the slow path
  if (!exec$1(NON_ASCII, domain)) return domain === '' ? null : toASCII(domain);
  var codePoints = arrayFrom(domain);
  var result = '';
  var index, code, mapped;
  for (index = 0; index < codePoints.length; index++) {
    code = codeAt(codePoints[index], 0);
    if (isDisallowedCodePoint(code)) return null;
    if (isIgnoredCodePoint(code)) continue;
    mapped = mapCodePoint(code);
    result += mapped === code ? codePoints[index] : fromCharCode(mapped);
  }
  return result === '' ? null : toASCII(result);
};

// https://url.spec.whatwg.org/#ends-in-a-number-checker
var endsInNumber = function (input) {
  var parts = split(input, '.');
  var last, hexPart;
  if (parts[parts.length - 1] === '') {
    if (parts.length === 1) return false;
    parts.length--;
  }
  last = parts[parts.length - 1];
  if (exec$1(DEC, last)) return true;
  if (exec$1(HEX_START, last)) {
    hexPart = stringSlice$3(last, 2);
    return hexPart === '' || !!exec$1(HEX, hexPart);
  }
  return false;
};

// https://url.spec.whatwg.org/#concept-ipv4-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] === '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return null;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part === '') return null;
    radix = 10;
    if (part.length > 1 && charAt$2(part, 0) === '0') {
      radix = exec$1(HEX_START, part) ? 16 : 8;
      part = stringSlice$3(part, radix === 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec$1(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
      number = parseInt$1(part, radix);
    }
    push$3(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index === partsLength - 1) {
      if (number >= pow$1(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow$1(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt$2(input, pointer);
  };

  if (chr() === ':') {
    if (charAt$2(input, 1) !== ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex === 8) return;
    if (chr() === ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec$1(HEX, chr())) {
      value = value * 16 + parseInt$1(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() === '.') {
      if (length === 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() === '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec$1(DIGIT, chr())) return;
        while (exec$1(DIGIT, chr())) {
          number = parseInt$1(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece === 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
      }
      if (numbersSeen !== 4) return;
      break;
    } else if (chr() === ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex !== 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  return currLength > maxLength ? currStart : maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;

  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor$4(host / 256);
    }
    return join$2(result, '.');
  }

  // ipv6
  if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString$1(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  }

  return host;
};

// https://url.spec.whatwg.org/#c0-control-percent-encode-set
// empty because the set is the code points outside U+0020..U+007E, which the range
// check below already covers; the sets extending it only add code points inside it
var C0ControlPercentEncodeSet = {};
var queryPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '#': 1, '<': 1, '>': 1
});
var specialQueryPercentEncodeSet = assign({}, queryPercentEncodeSet, {
  "'": 1
});
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1, '^': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

// https://url.spec.whatwg.org/#string-utf-8-percent-encode
var utf8PercentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  // percent-encoding leaves ' alone, but it belongs to the special-query percent-encode set
  return code >= 0x20 && code < 0x7F && !hasOwn$7(set, chr) ? chr : chr === "'" && hasOwn$7(set, chr) ? '%27' : percentEncode(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length === 2 && exec$1(ALPHA, charAt$2(string, 0))
    && ((second = charAt$2(string, 1)) === ':' || (!normalized && second === '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice$3(string, 0, 2)) && (
    string.length === 2 ||
    ((third = charAt$2(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw new TypeError$5(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw new TypeError$5(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace$2(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace$2(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace$2(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec$1(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && exec$1(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) {
            buffer += toLowerCase(chr);
          } else if (chr === ':') {
            if (stateOverride && (
              (url.isSpecial() !== hasOwn$7(specialSchemes, buffer)) ||
              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme === 'file' && url.host === '')
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme === 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] === '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push$3(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr === '#') {
            url.scheme = base.scheme;
            url.path = arraySlice$1(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme === 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr === '/' && codePoints[pointer + 1] === '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr === '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr === EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$1(base.path);
            url.query = base.query;
          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr === '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$1(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$1(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$1(base.path);
            if (url.path.length) url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr === '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr !== '/' || codePoints[pointer + 1] !== '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr !== '/' && chr !== '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr === '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint === ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = utf8PercentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer === '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme === 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr === ':' && !seenBracket) {
            if (buffer === '') return INVALID_HOST;
            if (stateOverride === HOSTNAME) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer === '') return INVALID_HOST;
            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr === '[') seenBracket = true;
            else if (chr === ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec$1(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer !== '') {
              var port = parseInt$1(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          url.host = '';
          if (chr === '/' || chr === '\\') state = FILE_SLASH;
          else if (base && base.scheme === 'file') {
            switch (chr) {
              case EOF:
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = base.query;
                break;
              case '?':
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = '';
                state = QUERY;
                break;
              case '#':
                url.host = base.host;
                url.path = arraySlice$1(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
                break;
              default:
                url.host = base.host;
                if (!startsWithWindowsDriveLetter(join$2(arraySlice$1(codePoints, pointer), ''))) {
                  url.path = arraySlice$1(base.path);
                  url.shortenPath();
                }
                state = PATH;
                continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr === '/' || chr === '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme === 'file') {
            url.host = base.host;
            if (!startsWithWindowsDriveLetter(join$2(arraySlice$1(codePoints, pointer), ''))
              && isWindowsDriveLetter(base.path[0], true)) push$3(url.path, base.path[0]);
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer === '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host === 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr !== '/' && chr !== '\\') continue;
          } else if (!stateOverride && chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            state = PATH;
            if (chr !== '/') continue;
          } break;

        case PATH:
          if (
            chr === EOF || chr === '/' ||
            (chr === '\\' && url.isSpecial()) ||
            (!stateOverride && (chr === '?' || chr === '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push$3(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push$3(url.path, '');
              }
            } else {
              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                // eslint-disable-next-line max-depth -- ok
                if (url.host !== null && url.host !== '') url.host = '';
                buffer = charAt$2(buffer, 0) + ':'; // normalize windows drive letter
              }
              push$3(url.path, buffer);
            }
            buffer = '';
            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += utf8PercentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            if (chr === ' ') {
              url.path[0] += codePoints[pointer + 1] === '?' || codePoints[pointer + 1] === '#' ? '%20' : ' ';
            } else {
              url.path[0] += utf8PercentEncode(chr, C0ControlPercentEncodeSet);
            }
          } break;

        case QUERY:
          if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            url.query += utf8PercentEncode(chr, url.isSpecial() ? specialQueryPercentEncodeSet : queryPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr !== EOF) url.fragment += utf8PercentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt$2(input, 0) === '[') {
      if (charAt$2(input, input.length - 1) !== ']') return INVALID_HOST;
      result = parseIPv6(stringSlice$3(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec$1(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += utf8PercentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = domainToASCII(percentDecode(input));
      if (input === null || exec$1(FORBIDDEN_DOMAIN_CODE_POINT, input)) return INVALID_HOST;
      if (endsInNumber(input)) {
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      } else {
        this.host = input;
      }
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return this.host === null || this.host === '' || this.cannotBeABaseURL || this.scheme === 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username !== '' || this.password !== '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn$7(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme === 'file') output += '//';
    if (host === null && !url.cannotBeABaseURL && path.length > 1 && path[0] === '') output += '/.';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join$2(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw new TypeError$5(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme === 'blob') try {
      return new URLConstructor(this.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme === 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port === '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join$2(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search === '') {
      this.query = null;
    } else {
      if (charAt$2(search, 0) === '?') search = stringSlice$3(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash === '') {
      this.fragment = null;
      return;
    }
    if (charAt$2(hash, 0) === '#') hash = stringSlice$3(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance$3(this, URLPrototype);
  var base = validateArgumentsLength$3(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState$2(that, new URLState(url, false, base));
  if (!DESCRIPTORS$9) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS$9) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor$7(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor$7(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor$7(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor$7(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor$7(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor$7(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor$7(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor$7(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor$7(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor$7(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor$7(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor$7(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn$5(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn$5(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn$5(URLConstructor, 'createObjectURL', bind$3(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn$5(URLConstructor, 'revokeObjectURL', bind$3(nativeRevokeObjectURL, NativeURL));
}

setToStringTag$1(URLConstructor, 'URL');

$$k({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS$9 }, {
  URL: URLConstructor
});

var globalThis$o = globalThis_1;

var getBuiltInPrototypeMethod$1 = function (CONSTRUCTOR, METHOD) {
  var Constructor = globalThis$o[CONSTRUCTOR];
  var Prototype = Constructor && Constructor.prototype;
  return Prototype && Prototype[METHOD];
};

var $$j = _export;
var call$8 = functionCall;
var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$1;

var toString$6 = getBuiltInPrototypeMethod('URL', 'toString');

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$$j({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call$8(toString$6, this);
  }
});

var defineBuiltIn$4 = defineBuiltIn$e;
var uncurryThis$i = functionUncurryThis;
var toString$5 = toString$f;
var validateArgumentsLength$2 = validateArgumentsLength$8;

var $URLSearchParams$1 = URLSearchParams;
var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
var append = uncurryThis$i(URLSearchParamsPrototype$2.append);
var $delete = uncurryThis$i(URLSearchParamsPrototype$2['delete']);
var forEach$2 = uncurryThis$i(URLSearchParamsPrototype$2.forEach);
var push$2 = uncurryThis$i([].push);
var params$1 = new $URLSearchParams$1('a=1&a=2&b=3');

params$1['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params$1['delete']('b', undefined);

if (params$1 + '' !== 'a=2') {
  defineBuiltIn$4(URLSearchParamsPrototype$2, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach$2(this, function (v, k) { // also validates `this`
      push$2(entries, { key: k, value: v });
    });
    validateArgumentsLength$2(length, 1);
    var key = toString$5(name);
    var value = toString$5($value);
    var index = 0;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index];
      $delete(this, entry.key);
      index++;
    }
    index = 0;
    while (index < entriesLength) {
      entry = entries[index++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}

var defineBuiltIn$3 = defineBuiltIn$e;
var uncurryThis$h = functionUncurryThis;
var toString$4 = toString$f;
var validateArgumentsLength$1 = validateArgumentsLength$8;

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype$1 = $URLSearchParams.prototype;
var getAll = uncurryThis$h(URLSearchParamsPrototype$1.getAll);
var $has = uncurryThis$h(URLSearchParamsPrototype$1.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn$3(URLSearchParamsPrototype$1, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength$1(length, 1);
    var value = toString$4($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}

var DESCRIPTORS$8 = descriptors;
var uncurryThis$g = functionUncurryThis;
var defineBuiltInAccessor$6 = defineBuiltInAccessor$d;

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach$1 = uncurryThis$g(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS$8 && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor$6(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach$1(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}

var $$i = _export;
var globalThis$n = globalThis_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf;
var copyConstructorProperties$2 = copyConstructorProperties$5;
var create$2 = objectCreate;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$f;
var createPropertyDescriptor$2 = createPropertyDescriptor$9;
var installErrorStack = errorStackInstall;
var normalizeStringArgument$1 = normalizeStringArgument$3;
var wellKnownSymbol$5 = wellKnownSymbol$q;
var fails$b = fails$J;

var NativeSuppressedError = globalThis$n.SuppressedError;
var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');
var $Error = Error;

// https://github.com/oven-sh/bun/issues/9282
var WRONG_ARITY = !!NativeSuppressedError && NativeSuppressedError.length !== 3;

// https://github.com/oven-sh/bun/issues/9283
var EXTRA_ARGS_SUPPORT = !!NativeSuppressedError && fails$b(function () {
  return new NativeSuppressedError(1, 2, 3, { cause: 4 }).cause === 4;
});

var PATCH = WRONG_ARITY || EXTRA_ARGS_SUPPORT;

var $SuppressedError = function SuppressedError(error, suppressed, message) {
  var isInstance = isPrototypeOf$4(SuppressedErrorPrototype, this);
  var that;
  if (setPrototypeOf$3) {
    that = PATCH && (!isInstance || getPrototypeOf$2(this) === SuppressedErrorPrototype)
      ? new NativeSuppressedError()
      : setPrototypeOf$3(new $Error(), isInstance ? getPrototypeOf$2(this) : SuppressedErrorPrototype);
  } else {
    that = isInstance ? this : create$2(SuppressedErrorPrototype);
    createNonEnumerableProperty$5(that, TO_STRING_TAG$1, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$5(that, 'message', normalizeStringArgument$1(message));
  installErrorStack(that, $SuppressedError, that.stack, 1);
  createNonEnumerableProperty$5(that, 'error', error);
  createNonEnumerableProperty$5(that, 'suppressed', suppressed);
  return that;
};

if (setPrototypeOf$3) setPrototypeOf$3($SuppressedError, $Error);
else copyConstructorProperties$2($SuppressedError, $Error, { name: true });

var SuppressedErrorPrototype = $SuppressedError.prototype = PATCH ? NativeSuppressedError.prototype : create$2($Error.prototype, {
  constructor: createPropertyDescriptor$2(1, $SuppressedError),
  message: createPropertyDescriptor$2(1, ''),
  name: createPropertyDescriptor$2(1, 'SuppressedError')
});

if (PATCH && true) SuppressedErrorPrototype.constructor = $SuppressedError;

// `SuppressedError` constructor
// https://github.com/tc39/proposal-explicit-resource-management
$$i({ global: true, constructor: true, arity: 3, forced: PATCH }, {
  SuppressedError: $SuppressedError
});

var $$h = _export;
var uncurryThis$f = functionUncurryThis;
var isArray$1 = isArray$5;

var nativeReverse = uncurryThis$f([].reverse);
var test$1 = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$$h({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray$1(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

var userAgent$1 = environmentUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var environmentFfVersion = !!firefox && +firefox[1];

var UA = environmentUserAgent;

var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = environmentUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var environmentWebkitVersion = !!webkit && +webkit[1];

var $$g = _export;
var uncurryThis$e = functionUncurryThis;
var aCallable$5 = aCallable$o;
var toObject$4 = toObject$d;
var lengthOfArrayLike$a = lengthOfArrayLike$i;
var deletePropertyOrThrow = deletePropertyOrThrow$2;
var toString$3 = toString$f;
var fails$a = fails$J;
var internalSort$1 = arraySort$1;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var FF$1 = environmentFfVersion;
var IE_OR_EDGE$1 = environmentIsIeOrEdge;
var V8$2 = environmentV8Version;
var WEBKIT$1 = environmentWebkitVersion;

var test = [];
var nativeSort$1 = uncurryThis$e(test.sort);
var push$1 = uncurryThis$e(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$a(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$a(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT$1 = !fails$a(function () {
  // feature detection can be too slow, so check engines versions
  if (V8$2) return V8$2 < 70;
  if (FF$1 && FF$1 > 3) return;
  if (IE_OR_EDGE$1) return true;
  if (WEBKIT$1) return WEBKIT$1 < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

var getSortCompare$1 = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    var xString = toString$3(x);
    var yString = toString$3(y);
    return xString === yString ? 0 : xString > yString ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$g({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$5(comparefn);

    var array = toObject$4(this);

    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$a(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$1(items, array[index]);
    }

    internalSort$1(items, getSortCompare$1(comparefn));

    itemsLength = lengthOfArrayLike$a(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var toIntegerOrInfinity$4 = toIntegerOrInfinity$a;
var toLength$1 = toLength$4;

var $RangeError$3 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$3 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$4(it);
  var length = toLength$1(number);
  if (number !== length) throw new $RangeError$3('Wrong length or index');
  return length;
};

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};

var EPSILON$1 = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON$1;

var mathRoundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

var sign = mathSign;
var roundTiesToEven = mathRoundTiesToEven;

var abs$1 = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON

var mathFloatRound = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs$1(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};

var floatRound = mathFloatRound;

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
var mathFround = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$4 = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor$3 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array$4(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$3(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[index - 1] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var toObject$3 = toObject$d;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$9 = lengthOfArrayLike$i;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
// eslint-disable-next-line es/no-array-prototype-fill -- fallback included
var arrayFill$1 = [].fill || function fill(value /* , start = 0, end = @length */) {
  var O = toObject$3(this);
  var length = lengthOfArrayLike$9(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var globalThis$m = globalThis_1;
var uncurryThis$d = functionUncurryThis;
var DESCRIPTORS$7 = descriptors;
var NATIVE_ARRAY_BUFFER$2 = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$f;
var defineBuiltInAccessor$5 = defineBuiltInAccessor$d;
var defineBuiltIns = defineBuiltIns$3;
var fails$9 = fails$J;
var anInstance$2 = anInstance$7;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$a;
var toIndex$2 = toIndex$3;
var fround = mathFround;
var IEEE754 = ieee754;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var arrayFill = arrayFill$1;
var arraySlice = arraySlice$5;
var inheritIfRequired$3 = inheritIfRequired$5;
var copyConstructorProperties$1 = copyConstructorProperties$5;
var setToStringTag = setToStringTag$8;
var InternalStateModule$2 = internalState;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$2.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule$2.getterFor(DATA_VIEW);
var setInternalState$1 = InternalStateModule$2.set;
var NativeArrayBuffer = globalThis$m[ARRAY_BUFFER];
var $ArrayBuffer$1 = NativeArrayBuffer;
var ArrayBufferPrototype$3 = $ArrayBuffer$1 && $ArrayBuffer$1[PROTOTYPE];
var $DataView = globalThis$m[DATA_VIEW];
var DataViewPrototype$2 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$1 = Object.prototype;
var Array$2 = globalThis$m.Array;
var RangeError$3 = globalThis$m.RangeError;
var fill = uncurryThis$d(arrayFill);
var reverse = uncurryThis$d([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter$1 = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor$5(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$2(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$2(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER$2) {
  $ArrayBuffer$1 = function ArrayBuffer(length) {
    anInstance$2(this, ArrayBufferPrototype$3);
    var byteLength = toIndex$2(length);
    setInternalState$1(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array$2(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$7) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$3 = $ArrayBuffer$1[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$2(this, DataViewPrototype$2);
    anInstance$2(buffer, ArrayBufferPrototype$3);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$3(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toIndex$2(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
    setInternalState$1(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$7) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$2 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$7) {
    addGetter$1($ArrayBuffer$1, 'byteLength', getInternalArrayBufferState);
    addGetter$1($DataView, 'buffer', getInternalDataViewState);
    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype$2, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
  if (!fails$9(function () {
    NativeArrayBuffer(1);
  }) || !fails$9(function () {
    new NativeArrayBuffer(-1);
  }) || fails$9(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new, sonarjs/inconsistent-function-call -- required for testing */
    $ArrayBuffer$1 = function ArrayBuffer(length) {
      anInstance$2(this, ArrayBufferPrototype$3);
      return inheritIfRequired$3(new NativeArrayBuffer(toIndex$2(length)), this, $ArrayBuffer$1);
    };

    $ArrayBuffer$1[PROTOTYPE] = ArrayBufferPrototype$3;

    ArrayBufferPrototype$3.constructor = $ArrayBuffer$1;

    copyConstructorProperties$1($ArrayBuffer$1, NativeArrayBuffer);
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$4(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$2 && getPrototypeOf$1(DataViewPrototype$2) !== ObjectPrototype$1) {
    setPrototypeOf$2(DataViewPrototype$2, ObjectPrototype$1);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer$1(2));
  var $setInt8 = uncurryThis$d(DataViewPrototype$2.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype$2, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer$1, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer$1,
  DataView: $DataView
};

var $$f = _export;
var uncurryThis$c = functionUncurryThisClause;
var fails$8 = fails$J;
var ArrayBufferModule$1 = arrayBuffer;
var anObject$4 = anObject$q;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toLength = toLength$4;

var ArrayBuffer$5 = ArrayBufferModule$1.ArrayBuffer;
var DataView$4 = ArrayBufferModule$1.DataView;
var DataViewPrototype$1 = DataView$4.prototype;
var nativeArrayBufferSlice = uncurryThis$c(ArrayBuffer$5.prototype.slice);
var getUint8 = uncurryThis$c(DataViewPrototype$1.getUint8);
var setUint8 = uncurryThis$c(DataViewPrototype$1.setUint8);

var INCORRECT_SLICE = fails$8(function () {
  return !new ArrayBuffer$5(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$f({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject$4(this), start); // FF fix
    }
    var length = anObject$4(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new ArrayBuffer$5(toLength(fin - first));
    var viewSource = new DataView$4(this);
    var viewTarget = new DataView$4(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});

var globalThis$l = globalThis_1;
var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var classof$8 = classofRaw$2;

var ArrayBuffer$4 = globalThis$l.ArrayBuffer;
var TypeError$4 = globalThis$l.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
var arrayBufferByteLength$2 = ArrayBuffer$4 && uncurryThisAccessor$1(ArrayBuffer$4.prototype, 'byteLength', 'get') || function (O) {
  if (classof$8(O) !== 'ArrayBuffer') throw new TypeError$4('ArrayBuffer expected');
  return O.byteLength;
};

var globalThis$k = globalThis_1;
var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
var arrayBufferByteLength$1 = arrayBufferByteLength$2;

var DataView$3 = globalThis$k.DataView;

var arrayBufferIsDetached = function (O) {
  if (!NATIVE_ARRAY_BUFFER$1 || arrayBufferByteLength$1(O) !== 0) return false;
  try {
    // eslint-disable-next-line no-new -- thrower
    new DataView$3(O);
    return false;
  } catch (error) {
    return true;
  }
};

var DESCRIPTORS$6 = descriptors;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$d;
var isDetached$1 = arrayBufferIsDetached;

var ArrayBufferPrototype$2 = ArrayBuffer.prototype;

// `ArrayBuffer.prototype.detached` getter
// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.detached
if (DESCRIPTORS$6 && !('detached' in ArrayBufferPrototype$2)) {
  defineBuiltInAccessor$4(ArrayBufferPrototype$2, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached$1(this);
    }
  });
}

var isDetached = arrayBufferIsDetached;

var $TypeError$7 = TypeError;

var arrayBufferNotDetached = function (it) {
  if (isDetached(it)) throw new $TypeError$7('ArrayBuffer is detached');
  return it;
};

var globalThis$j = globalThis_1;
var IS_NODE = environmentIsNode;

var getBuiltInNodeModule$1 = function (name) {
  if (IS_NODE) {
    try {
      return globalThis$j.process.getBuiltinModule(name);
    } catch (error) { /* empty */ }
    try {
      // eslint-disable-next-line no-new-func -- safe
      return Function('return require("' + name + '")')();
    } catch (error) { /* empty */ }
  }
};

var globalThis$i = globalThis_1;
var fails$7 = fails$J;
var V8$1 = environmentV8Version;
var ENVIRONMENT = environment;

var structuredClone$2 = globalThis$i.structuredClone;

var structuredCloneProperTransfer = !!structuredClone$2 && !fails$7(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((ENVIRONMENT === 'DENO' && V8$1 > 92) || (ENVIRONMENT === 'NODE' && V8$1 > 94) || (ENVIRONMENT === 'BROWSER' && V8$1 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$2(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});

var globalThis$h = globalThis_1;
var getBuiltInNodeModule = getBuiltInNodeModule$1;
var PROPER_STRUCTURED_CLONE_TRANSFER$2 = structuredCloneProperTransfer;

var structuredClone$1 = globalThis$h.structuredClone;
var $ArrayBuffer = globalThis$h.ArrayBuffer;
var $MessageChannel = globalThis$h.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER$2) {
  detach = function (transferable) {
    structuredClone$1(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = getBuiltInNodeModule('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

var detachTransferable$2 = detach;

var globalThis$g = globalThis_1;
var uncurryThis$b = functionUncurryThis;
var uncurryThisAccessor = functionUncurryThisAccessor;
var toIndex$1 = toIndex$3;
var notDetached$4 = arrayBufferNotDetached;
var arrayBufferByteLength = arrayBufferByteLength$2;
var detachTransferable$1 = detachTransferable$2;
var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;

var structuredClone = globalThis$g.structuredClone;
var ArrayBuffer$3 = globalThis$g.ArrayBuffer;
var DataView$2 = globalThis$g.DataView;
var max$1 = Math.max;
var min$1 = Math.min;
var ArrayBufferPrototype$1 = ArrayBuffer$3.prototype;
var DataViewPrototype = DataView$2.prototype;
var slice$1 = uncurryThis$b(ArrayBufferPrototype$1.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype$1, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype$1, 'maxByteLength', 'get');
var getInt8 = uncurryThis$b(DataViewPrototype.getInt8);
var setInt8 = uncurryThis$b(DataViewPrototype.setInt8);

var arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER$1 || detachTransferable$1) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex$1(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached$4(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice$1(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength
      ? { maxByteLength: max$1(newByteLength, maxByteLength(arrayBuffer)) }
      : undefined;
    newBuffer = new ArrayBuffer$3(newByteLength, options);
    var a = new DataView$2(arrayBuffer);
    var b = new DataView$2(newBuffer);
    var copyLength = min$1(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER$1) detachTransferable$1(arrayBuffer);
  return newBuffer;
};

var $$e = _export;
var $transfer$1 = arrayBufferTransfer;

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfer
if ($transfer$1) $$e({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
  }
});

var $$d = _export;
var $transfer = arrayBufferTransfer;

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $$d({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});

var $$c = _export;
var call$7 = functionCall;
var iterate$3 = iterate$c;
var aCallable$4 = aCallable$o;
var anObject$3 = anObject$q;
var getIteratorDirect$2 = getIteratorDirect$9;
var iteratorClose$1 = iteratorClose$e;
var iteratorHelperWithoutClosingOnEarlyError$1 = iteratorHelperWithoutClosingOnEarlyError$7;

var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$1('every', TypeError);

// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
$$c({ target: 'Iterator', proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
  every: function every(predicate) {
    anObject$3(this);
    try {
      aCallable$4(predicate);
    } catch (error) {
      iteratorClose$1(this, 'throw', error);
    }

    if (everyWithoutClosingOnEarlyError) return call$7(everyWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect$2(this);
    var counter = 0;
    return !iterate$3(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

var $$b = _export;
var call$6 = functionCall;
var iterate$2 = iterate$c;
var aCallable$3 = aCallable$o;
var anObject$2 = anObject$q;
var getIteratorDirect$1 = getIteratorDirect$9;
var iteratorClose = iteratorClose$e;
var iteratorHelperWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$7;

var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$$b({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
  some: function some(predicate) {
    anObject$2(this);
    try {
      aCallable$3(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (someWithoutClosingOnEarlyError) return call$6(someWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect$1(this);
    var counter = 0;
    return iterate$2(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

var $$a = _export;
var anObject$1 = anObject$q;
var createProperty$2 = createProperty$6;
var iterate$1 = iterate$c;
var getIteratorDirect = getIteratorDirect$9;

// `Iterator.prototype.toArray` method
// https://tc39.es/ecma262/#sec-iterator.prototype.toarray
$$a({ target: 'Iterator', proto: true, real: true }, {
  toArray: function toArray() {
    var result = [];
    var index = 0;
    iterate$1(getIteratorDirect(anObject$1(this)), function (element) {
      createProperty$2(result, index++, element);
    }, { IS_RECORD: true });
    return result;
  }
});

var $$9 = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$6 = fails$J;
var getBuiltIn$2 = getBuiltIn$f;
var isCallable$4 = isCallable$x;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;
var defineBuiltIn$2 = defineBuiltIn$e;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails$6(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$$9({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn$2('Promise'));
    var isFunction = isCallable$4(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (isCallable$4(NativePromiseConstructor)) {
  var method = getBuiltIn$2('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn$2(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}

var isObject$7 = isObject$p;
var classof$7 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$q;

var MATCH$1 = wellKnownSymbol$4('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$7(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$7(it) === 'RegExp');
};

var DESCRIPTORS$5 = descriptors;
var globalThis$f = globalThis_1;
var uncurryThis$a = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired$2 = inheritIfRequired$5;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$f;
var create$1 = objectCreate;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var isPrototypeOf$3 = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$2 = toString$f;
var getRegExpFlags$2 = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$2;
var defineBuiltIn$1 = defineBuiltIn$e;
var fails$5 = fails$J;
var hasOwn$6 = hasOwnProperty_1;
var enforceInternalState$2 = internalState.enforce;
var setSpecies$1 = setSpecies$3;
var wellKnownSymbol$3 = wellKnownSymbol$q;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol$3('match');
var NativeRegExp = globalThis$f.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError$3 = globalThis$f.SyntaxError;
var exec = uncurryThis$a(RegExpPrototype$1.exec);
var charAt$1 = uncurryThis$a(''.charAt);
var replace$1 = uncurryThis$a(''.replace);
var stringIndexOf = uncurryThis$a(''.indexOf);
var stringSlice$2 = uncurryThis$a(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$5 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG || fails$5(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index < length; index++) {
    chr = charAt$1(string, index);
    if (chr === '\\') {
      result += chr + charAt$1(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create$1(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index < length; index++) {
    chr = charAt$1(string, index);
    if (chr === '\\') {
      chr += charAt$1(string, ++index);
      // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
      if (!ncg && charAt$1(chr, 1) === '\\') {
        result += '\\x5c';
        continue;
      }
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        result += chr;
        if (exec(IS_NCG, stringSlice$2(string, index + 1))) {
          index += 2;
          ncg = true;
          groupid++;
        } else if (charAt$1(string, index + 1) !== '?') {
          groupid++;
        }
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$6(names, groupname)) {
          throw new SyntaxError$3('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  }
  // convert `\k<name>` backreferences to numbered backreferences
  for (var ni = 0; ni < named.length; ni++) {
    var backref = '\\k<' + named[ni][0] + '>';
    var numRef = '\\' + named[ni][1];
    while (stringIndexOf(result, backref) > -1) {
      result = replace$1(result, backref, numRef);
    }
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$3(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$3(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$2(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$2(pattern);
    flags = flags === undefined ? '' : toString$2(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace$1(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace$1(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$2(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$3(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$1(globalThis$f, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$1('RegExp');

var DESCRIPTORS$4 = descriptors;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var classof$6 = classofRaw$2;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$d;
var getInternalState$2 = internalState.get;

var RegExpPrototype = RegExp.prototype;
var $TypeError$6 = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS$4 && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor$3(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof$6(this) === 'RegExp') {
        return !!getInternalState$2(this).dotAll;
      }
      throw new $TypeError$6('Incompatible receiver, RegExp required');
    }
  });
}

var typedArrayConstructor = {exports: {}};

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$3 = descriptors;
var globalThis$e = globalThis_1;
var isCallable$3 = isCallable$x;
var isObject$6 = isObject$p;
var hasOwn$5 = hasOwnProperty_1;
var classof$5 = classof$h;
var tryToString = tryToString$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$f;
var defineBuiltIn = defineBuiltIn$e;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$d;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var wellKnownSymbol$2 = wellKnownSymbol$q;
var uid$1 = uid$5;
var InternalStateModule$1 = internalState;

var enforceInternalState$1 = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var Int8Array$3 = globalThis$e.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$3 && Int8Array$3.prototype;
var Uint8ClampedArray$1 = globalThis$e.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$3 && getPrototypeOf(Int8Array$3);
var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype = Object.prototype;
var TypeError$3 = globalThis$e.TypeError;

var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var TYPED_ARRAY_TAG$1 = uid$1('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$5(globalThis$e.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var getTypedArrayConstructor$3 = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$6(proto)) return;
  var state = getInternalState$1(proto);
  return (state && hasOwn$5(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$3(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$6(it)) return false;
  var klass = classof$5(it);
  return hasOwn$5(TypedArrayConstructorsList, klass)
    || hasOwn$5(BigIntArrayConstructorsList, klass);
};

var aTypedArray$9 = function (it) {
  if (isTypedArray$1(it)) return it;
  throw new TypeError$3('Target is not a typed array');
};

var aTypedArrayConstructor$1 = function (C) {
  if (isCallable$3(C) && (!setPrototypeOf$1 || isPrototypeOf$2(TypedArray$1, C))) return C;
  throw new TypeError$3(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$9 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$3) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = globalThis$e[ARRAY];
    if (TypedArrayConstructor && hasOwn$5(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$1[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype$1, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis$e[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis$e[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$3(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw new TypeError$3('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (globalThis$e[NAME]) setPrototypeOf$1(globalThis$e[NAME], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype) {
  TypedArrayPrototype$1 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (globalThis$e[NAME]) setPrototypeOf$1(globalThis$e[NAME].prototype, TypedArrayPrototype$1);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
}

if (DESCRIPTORS$3 && !hasOwn$5(TypedArrayPrototype$1, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$2(TypedArrayPrototype$1, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$6(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (globalThis$e[NAME]) {
    createNonEnumerableProperty$2(globalThis$e[NAME].prototype, TYPED_ARRAY_TAG$1, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
  aTypedArray: aTypedArray$9,
  aTypedArrayConstructor: aTypedArrayConstructor$1,
  exportTypedArrayMethod: exportTypedArrayMethod$9,
  getTypedArrayConstructor: getTypedArrayConstructor$3,
  isTypedArray: isTypedArray$1,
  TypedArray: TypedArray$1,
  TypedArrayPrototype: TypedArrayPrototype$1
};

/* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
var globalThis$d = globalThis_1;
var fails$4 = fails$J;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = globalThis$d.ArrayBuffer;
var Int8Array$2 = globalThis$d.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$4(function () {
  Int8Array$2(1);
}) || !fails$4(function () {
  new Int8Array$2(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$2();
  new Int8Array$2(null);
  new Int8Array$2(1.5);
  new Int8Array$2(iterable);
}, true) || fails$4(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var isObject$5 = isObject$p;

var floor$2 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$5(it) && isFinite(it) && floor$2(it) === it;
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$a;

var $RangeError$2 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$2(it);
  if (result < 0) throw new $RangeError$2("The argument can't be less than 0");
  return result;
};

var toPositiveInteger = toPositiveInteger$1;

var $RangeError$1 = RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError$1('Wrong offset');
  return offset;
};

var floor$1 = Math.floor;

// https://tc39.es/ecma262/#sec-touint8clamp
var toUint8Clamped$1 = function (it) {
  var number = +it;
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number <= 0) return 0;
  if (number >= 0xFF) return 0xFF;
  var f = floor$1(number);
  if (f + 0.5 < number) return f + 1;
  if (number < f + 0.5) return f;
  // round-half-to-even (banker's rounding)
  return f % 2 === 0 ? f : f + 1;
};

var classof$4 = classof$h;

var isBigIntArray$2 = function (it) {
  var klass = classof$4(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$5 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$3 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError$5("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$2 = functionBindContext;
var call$5 = functionCall;
var aCallable$2 = aCallable$o;
var aConstructor = aConstructor$2;
var toObject$2 = toObject$d;
var lengthOfArrayLike$8 = lengthOfArrayLike$i;
var getIterator = getIteratorInternal;
var getIteratorMethod = getIteratorMethodInternal;
var isArrayIteratorMethod = isArrayIteratorMethod$3;
var isBigIntArray$1 = isBigIntArray$2;
var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$2 = toBigInt$3;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) aCallable$2(mapfn);
  var O = toObject$2(source);
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$5(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$2(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$8(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray$1(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt$2(value) : +value;
  }
  return result;
};

var isArray = isArray$5;
var isConstructor$1 = isConstructor$4;
var isObject$4 = isObject$p;
var wellKnownSymbol$1 = wellKnownSymbol$q;

var SPECIES = wellKnownSymbol$1('species');
var $Array$3 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$1(C) && (C === $Array$3 || isArray(C.prototype))) C = undefined;
    else if (isObject$4(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$3 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$1 = functionBindContext;
var IndexedObject$1 = indexedObject;
var toObject$1 = toObject$d;
var lengthOfArrayLike$7 = lengthOfArrayLike$i;
var arraySpeciesCreate = arraySpeciesCreate$1;
var createProperty$1 = createProperty$6;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject$1($this);
    var self = IndexedObject$1(O);
    var length = lengthOfArrayLike$7(self);
    var boundFunction = bind$1(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty$1(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty$1(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty$1(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0)};

var lengthOfArrayLike$6 = lengthOfArrayLike$i;

var arrayFromConstructorAndList$2 = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike$6(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var $$8 = _export;
var globalThis$c = globalThis_1;
var call$4 = functionCall;
var DESCRIPTORS$2 = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$9 = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$1 = anInstance$7;
var createPropertyDescriptor$1 = createPropertyDescriptor$9;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$f;
var isIntegralNumber = isIntegralNumber$1;
var toIndex = toIndex$3;
var toOffset$1 = toOffset$2;
var toUint8Clamped = toUint8Clamped$1;
var toPropertyKey = toPropertyKey$3;
var hasOwn$4 = hasOwnProperty_1;
var classof$3 = classof$h;
var isObject$3 = isObject$p;
var isSymbol$1 = isSymbol$5;
var create = objectCreate;
var isPrototypeOf$1 = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies = setSpecies$3;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$d;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$2;
var InternalStateModule = internalState;
var inheritIfRequired$1 = inheritIfRequired$5;

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError$2 = globalThis$c.RangeError;
var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataView$1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$9.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore$9.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore$9.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore$9.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore$9.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var addGetter = function (it, key) {
  defineBuiltInAccessor$1(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf$1(ArrayBufferPrototype, it) || (klass = classof$3(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol$1(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor$1(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$3(descriptor)
    && hasOwn$4(descriptor, 'value')
    && !hasOwn$4(descriptor, 'get')
    && !hasOwn$4(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$4(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$4(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$2) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $$8({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = globalThis$c[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance$1(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$3(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer$1(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset$1(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError$2(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError$2(WRONG_LENGTH);
          } else {
            byteLength = toIndex($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return arrayFromConstructorAndList$1(TypedArrayConstructor, data);
        } else {
          return call$4(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView$1(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance$1(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired$1(function () {
          if (!isObject$3(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return arrayFromConstructorAndList$1(TypedArrayConstructor, data);
          return call$4(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$8({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else typedArrayConstructor.exports = function () { /* empty */ };

var typedArrayConstructorExports = typedArrayConstructor.exports;

var createTypedArrayConstructor = typedArrayConstructorExports;

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var ArrayBufferViewCore$8 = arrayBufferViewCore;
var lengthOfArrayLike$5 = lengthOfArrayLike$i;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$a;

var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
var exportTypedArrayMethod$8 = ArrayBufferViewCore$8.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod$8('at', function at(index) {
  var O = aTypedArray$8(this);
  var len = lengthOfArrayLike$5(O);
  var relativeIndex = toIntegerOrInfinity$1(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});

var ArrayBufferViewCore$7 = arrayBufferViewCore;
var $fill = arrayFill$1;
var toBigInt$1 = toBigInt$3;
var classof$2 = classof$h;
var call$3 = functionCall;
var uncurryThis$9 = functionUncurryThis;
var fails$3 = fails$J;

var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
var exportTypedArrayMethod$7 = ArrayBufferViewCore$7.exportTypedArrayMethod;
var slice = uncurryThis$9(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails$3(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod$7('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray$7(this);
  var actualValue = slice(classof$2(this), 0, 3) === 'Big' ? toBigInt$1(value) : +value;
  return call$3($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var bind = functionBindContext;
var IndexedObject = indexedObject;
var toObject = toObject$d;
var lengthOfArrayLike$4 = lengthOfArrayLike$i;

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike$4(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

var arrayIterationFromLast = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};

var ArrayBufferViewCore$6 = arrayBufferViewCore;
var $findLast = arrayIterationFromLast.findLast;

var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
var exportTypedArrayMethod$6 = ArrayBufferViewCore$6.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod$6('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$5 = arrayBufferViewCore;
var $findLastIndex = arrayIterationFromLast.findLastIndex;

var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
var exportTypedArrayMethod$5 = ArrayBufferViewCore$5.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod$5('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var globalThis$b = globalThis_1;
var call$2 = functionCall;
var ArrayBufferViewCore$4 = arrayBufferViewCore;
var lengthOfArrayLike$3 = lengthOfArrayLike$i;
var toOffset = toOffset$2;
var toIndexedObject = toObject$d;
var fails$2 = fails$J;

var RangeError$1 = globalThis$b.RangeError;
var Int8Array$1 = globalThis$b.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
var exportTypedArrayMethod$4 = ArrayBufferViewCore$4.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$2(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$2($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$4.NATIVE_ARRAY_BUFFER_VIEWS && fails$2(function () {
  var array = new Int8Array$1(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod$4('set', function set(arrayLike /* , offset */) {
  aTypedArray$4(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$2($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$3(src);
  var index = 0;
  if (len + offset > length) throw new RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var globalThis$a = globalThis_1;
var uncurryThis$8 = functionUncurryThisClause;
var fails$1 = fails$J;
var aCallable$1 = aCallable$o;
var internalSort = arraySort$1;
var ArrayBufferViewCore$3 = arrayBufferViewCore;
var FF = environmentFfVersion;
var IE_OR_EDGE = environmentIsIeOrEdge;
var V8 = environmentV8Version;
var WEBKIT = environmentWebkitVersion;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var Uint16Array = globalThis$a.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$8(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$1(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails$1(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails$1(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return x !== x ? 0 : -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 ? (1 / y > 0 ? 0 : 1) : (1 / y > 0 ? -1 : 0);
    return x > y ? 1 : x < y ? -1 : 0;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod$3('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable$1(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray$3(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

var lengthOfArrayLike$2 = lengthOfArrayLike$i;
var ArrayBufferViewCore$2 = arrayBufferViewCore;

var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
var getTypedArrayConstructor$2 = ArrayBufferViewCore$2.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod$2('toReversed', function toReversed() {
  var O = aTypedArray$2(this);
  var len = lengthOfArrayLike$2(O);
  var A = new (getTypedArrayConstructor$2(O))(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
});

var ArrayBufferViewCore$1 = arrayBufferViewCore;
var uncurryThis$7 = functionUncurryThis;
var aCallable = aCallable$o;
var arrayFromConstructorAndList = arrayFromConstructorAndList$2;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var sort = uncurryThis$7(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod$1('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray$1(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor$1(O), O);
  return sort(A, compareFn);
});

var ArrayBufferViewCore = arrayBufferViewCore;
var isBigIntArray = isBigIntArray$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$i;
var toIntegerOrInfinity = toIntegerOrInfinity$a;
var toBigInt = toBigInt$3;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var $RangeError = RangeError;

var PROPER_ORDER = function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// Bug in WebKit. It should truncate a negative fractional index to zero, but instead throws an error
var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && function () {
  try {
    // eslint-disable-next-line es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](-0.5, 1);
  } catch (error) {
    return true;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike$1(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  var numericValue = isBigIntArray(O) ? toBigInt(value) : +value;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new (getTypedArrayConstructor(O))(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? numericValue : O[k];
  return A;
} }['with'], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);

var isObject$2 = isObject$p;

var $String = String;
var $TypeError$4 = TypeError;

var anObjectOrUndefined$2 = function (argument) {
  if (argument === undefined || isObject$2(argument)) return argument;
  throw new $TypeError$4($String(argument) + ' is not an object or undefined');
};

var $TypeError$3 = TypeError;

var aString$2 = function (argument) {
  if (typeof argument == 'string') return argument;
  throw new $TypeError$3('Argument is not a string');
};

var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet$2 = commonAlphabet + '+/';
var base64UrlAlphabet$2 = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

var base64Map$2 = {
  i2c: base64Alphabet$2,
  c2i: inverse(base64Alphabet$2),
  i2cUrl: base64UrlAlphabet$2,
  c2iUrl: inverse(base64UrlAlphabet$2)
};

var $TypeError$2 = TypeError;

var getAlphabetOption$2 = function (options) {
  var alphabet = options && options.alphabet;
  if (alphabet === undefined || alphabet === 'base64' || alphabet === 'base64url') return alphabet || 'base64';
  throw new $TypeError$2('Incorrect `alphabet` option');
};

var globalThis$9 = globalThis_1;
var uncurryThis$6 = functionUncurryThis;
var anObjectOrUndefined$1 = anObjectOrUndefined$2;
var aString$1 = aString$2;
var hasOwn$3 = hasOwnProperty_1;
var base64Map$1 = base64Map$2;
var getAlphabetOption$1 = getAlphabetOption$2;
var notDetached$3 = arrayBufferNotDetached;

var base64Alphabet$1 = base64Map$1.c2i;
var base64UrlAlphabet$1 = base64Map$1.c2iUrl;

var SyntaxError$2 = globalThis$9.SyntaxError;
var TypeError$2 = globalThis$9.TypeError;
var $Array$2 = globalThis$9.Array;
var at = uncurryThis$6(''.charAt);
var floor = Math.floor;

var skipAsciiWhitespace = function (string, index) {
  var length = string.length;
  for (;index < length; index++) {
    var chr = at(string, index);
    if (chr !== ' ' && chr !== '\t' && chr !== '\n' && chr !== '\f' && chr !== '\r') break;
  } return index;
};

var decodeBase64Chunk = function (chunk, alphabet, throwOnExtraBits) {
  var chunkLength = chunk.length;

  if (chunkLength < 4) {
    chunk += chunkLength === 2 ? 'AA' : 'A';
  }

  var triplet = (alphabet[at(chunk, 0)] << 18)
    + (alphabet[at(chunk, 1)] << 12)
    + (alphabet[at(chunk, 2)] << 6)
    + alphabet[at(chunk, 3)];

  var chunkBytes = [
    (triplet >> 16) & 255,
    (triplet >> 8) & 255,
    triplet & 255
  ];

  if (chunkLength === 2) {
    if (throwOnExtraBits && chunkBytes[1] !== 0) {
      throw new SyntaxError$2('Extra bits');
    }
    return [chunkBytes[0]];
  }

  if (chunkLength === 3) {
    if (throwOnExtraBits && chunkBytes[2] !== 0) {
      throw new SyntaxError$2('Extra bits');
    }
    return [chunkBytes[0], chunkBytes[1]];
  }

  return chunkBytes;
};

var writeBytes = function (bytes, elements, written) {
  var elementsLength = elements.length;
  for (var index = 0; index < elementsLength; index++) {
    bytes[written + index] = elements[index];
  }
  return written + elementsLength;
};

/* eslint-disable max-statements, max-depth -- TODO */
var uint8FromBase64 = function (string, options, into, maxLength) {
  aString$1(string);
  anObjectOrUndefined$1(options);
  var alphabet = getAlphabetOption$1(options) === 'base64' ? base64Alphabet$1 : base64UrlAlphabet$1;
  var lastChunkHandling = options ? options.lastChunkHandling : undefined;

  if (lastChunkHandling === undefined) lastChunkHandling = 'loose';

  if (lastChunkHandling !== 'loose' && lastChunkHandling !== 'strict' && lastChunkHandling !== 'stop-before-partial') {
    throw new TypeError$2('Incorrect `lastChunkHandling` option');
  }

  if (into) notDetached$3(into.buffer);

  var stringLength = string.length;
  var bytes = into || $Array$2(floor(stringLength * 3 / 4));
  var written = 0;
  var read = 0;
  var chunk = '';
  var index = 0;

  if (maxLength) while (true) {
    index = skipAsciiWhitespace(string, index);
    if (index === stringLength) {
      if (chunk.length > 0) {
        if (lastChunkHandling === 'stop-before-partial') {
          break;
        }
        if (lastChunkHandling === 'loose') {
          if (chunk.length === 1) {
            throw new SyntaxError$2('Malformed padding: exactly one additional character');
          }
          written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        } else {
          throw new SyntaxError$2('Missing padding');
        }
      }
      read = stringLength;
      break;
    }
    var chr = at(string, index);
    ++index;
    if (chr === '=') {
      if (chunk.length < 2) {
        throw new SyntaxError$2('Padding is too early');
      }
      index = skipAsciiWhitespace(string, index);
      if (chunk.length === 2) {
        if (index === stringLength) {
          if (lastChunkHandling === 'stop-before-partial') {
            break;
          }
          throw new SyntaxError$2('Malformed padding: only one =');
        }
        if (at(string, index) === '=') {
          ++index;
          index = skipAsciiWhitespace(string, index);
        }
      }
      if (index < stringLength) {
        throw new SyntaxError$2('Unexpected character after padding');
      }
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === 'strict'), written);
      read = stringLength;
      break;
    }
    if (!hasOwn$3(alphabet, chr)) {
      throw new SyntaxError$2('Unexpected character');
    }
    var remainingBytes = maxLength - written;
    if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
      // special case: we can fit exactly the number of bytes currently represented by chunk, so we were just checking for `=`
      break;
    }

    chunk += chr;
    if (chunk.length === 4) {
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
      chunk = '';
      read = index;
      if (written === maxLength) {
        break;
      }
    }
  }
  if (!into) bytes.length = written;
  return { bytes: bytes, read: read, written: written };
};

var classof$1 = classof$h;

var $TypeError$1 = TypeError;

// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
var anUint8Array$4 = function (argument) {
  if (classof$1(argument) === 'Uint8Array') return argument;
  throw new $TypeError$1('Argument is not an Uint8Array');
};

var $$7 = _export;
var globalThis$8 = globalThis_1;
var $fromBase64 = uint8FromBase64;
var anUint8Array$3 = anUint8Array$4;

var Uint8Array$4 = globalThis$8.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$2 = !Uint8Array$4 || !Uint8Array$4.prototype.setFromBase64 || !function () {
  var target = new Uint8Array$4([255, 255, 255, 255, 255]);
  try {
    target.setFromBase64('', null);
    return;
  } catch (error) { /* empty */ }
  // Webkit not throw an error on odd length string
  try {
    target.setFromBase64('a');
    return;
  } catch (error) { /* empty */ }
  try {
    target.setFromBase64('MjYyZg===');
  } catch (error) {
    return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
  }
}();

// `Uint8Array.prototype.setFromBase64` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.setfrombase64
if (Uint8Array$4) $$7({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$2 }, {
  setFromBase64: function setFromBase64(string /* , options */) {
    anUint8Array$3(this);

    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, this, this.length);

    return { read: result.read, written: result.written };
  }
});

var globalThis$7 = globalThis_1;
var uncurryThis$5 = functionUncurryThis;

var Uint8Array$3 = globalThis$7.Uint8Array;
var SyntaxError$1 = globalThis$7.SyntaxError;
var min = Math.min;
var stringMatch = uncurryThis$5(''.match);

var uint8FromHex = function (string, into) {
  var stringLength = string.length;
  if (stringLength % 2 !== 0) throw new SyntaxError$1('String should be an even number of characters');
  var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
  var bytes = into || new Uint8Array$3(maxLength);
  var segments = stringMatch(string, /[\S\s]{2}/g);
  var written = 0;
  for (; written < maxLength; written++) {
    var result = +('0x' + segments[written] + '0');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (result !== result) {
      throw new SyntaxError$1('String should only contain hex characters');
    }
    bytes[written] = result >> 4;
  }
  return { bytes: bytes, read: written << 1 };
};

var $$6 = _export;
var globalThis$6 = globalThis_1;
var aString = aString$2;
var anUint8Array$2 = anUint8Array$4;
var notDetached$2 = arrayBufferNotDetached;
var $fromHex = uint8FromHex;

// Should not throw an error on length-tracking views over ResizableArrayBuffer
// https://issues.chromium.org/issues/454630441
function throwsOnLengthTrackingView() {
  try {
    // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- required for testing
    var rab = new ArrayBuffer(16, { maxByteLength: 1024 });
    // eslint-disable-next-line es/no-uint8array-prototype-setfromhex, es/no-typed-arrays -- required for testing
    new Uint8Array(rab).setFromHex('cafed00d');
  } catch (error) {
    return true;
  }
}

// `Uint8Array.prototype.setFromHex` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.setfromhex
if (globalThis$6.Uint8Array) $$6({ target: 'Uint8Array', proto: true, forced: throwsOnLengthTrackingView() }, {
  setFromHex: function setFromHex(string) {
    anUint8Array$2(this);
    aString(string);
    notDetached$2(this.buffer);
    var read = $fromHex(string, this).read;
    return { read: read, written: read / 2 };
  }
});

/* eslint-disable no-useless-assignment -- false positive for [index++] syntax */
var $$5 = _export;
var globalThis$5 = globalThis_1;
var uncurryThis$4 = functionUncurryThis;
var anObjectOrUndefined = anObjectOrUndefined$2;
var anUint8Array$1 = anUint8Array$4;
var notDetached$1 = arrayBufferNotDetached;
var base64Map = base64Map$2;
var getAlphabetOption = getAlphabetOption$2;

var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;
var $floor = Math.floor;
var $ceil = Math.ceil;

var charAt = uncurryThis$4(''.charAt);

var Uint8Array$2 = globalThis$5.Uint8Array;
var $Array$1 = globalThis$5.Array;
var join$1 = uncurryThis$4([].join);

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$1 = !Uint8Array$2 || !Uint8Array$2.prototype.toBase64 || !function () {
  try {
    var target = new Uint8Array$2();
    target.toBase64(null);
  } catch (error) {
    return true;
  }
}();

// `Uint8Array.prototype.toBase64` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.tobase64
if (Uint8Array$2) $$5({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$1 }, {
  toBase64: function toBase64(/* options */) {
    var array = anUint8Array$1(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
    var omitPadding = !!options && !!options.omitPadding;
    notDetached$1(this.buffer);

    var i = 0;
    var length = array.length;
    var result = $Array$1(omitPadding ? $floor(length / 3) * 4 + (length % 3 ? length % 3 + 1 : 0) : $ceil(length / 3) * 4);
    var written = 0;
    var triplet;

    var at = function (shift) {
      return charAt(alphabet, (triplet >> (6 * shift)) & 63);
    };

    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result[written++] = at(3);
      result[written++] = at(2);
      result[written++] = at(1);
      result[written++] = at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result[written++] = at(3);
      result[written++] = at(2);
      result[written++] = at(1);
      if (!omitPadding) result[written++] = '=';
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result[written++] = at(3);
      result[written++] = at(2);
      if (!omitPadding) {
        result[written++] = '=';
        result[written++] = '=';
      }
    }

    return join$1(result, '');
  }
});

var $$4 = _export;
var globalThis$4 = globalThis_1;
var uncurryThis$3 = functionUncurryThis;
var anUint8Array = anUint8Array$4;
var notDetached = arrayBufferNotDetached;

var numberToString = uncurryThis$3(1.1.toString);
var join = uncurryThis$3([].join);
var $Array = Array;

var Uint8Array$1 = globalThis$4.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array$1 || !Uint8Array$1.prototype.toHex || !(function () {
  try {
    var target = new Uint8Array$1([255, 255, 255, 255, 255, 255, 255, 255]);
    return target.toHex() === 'ffffffffffffffff';
  } catch (error) {
    return false;
  }
})();

// `Uint8Array.prototype.toHex` method
// https://tc39.es/ecma262/#sec-uint8array.prototype.tohex
if (Uint8Array$1) $$4({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  toHex: function toHex() {
    anUint8Array(this);
    notDetached(this.buffer);
    var result = $Array(this.length);
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result[i] = hex.length === 1 ? '0' + hex : hex;
    }
    return join(result, '');
  }
});

var domExceptionConstants = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};

var $$3 = _export;
var globalThis$3 = globalThis_1;
var getBuiltIn$1 = getBuiltIn$f;
var createPropertyDescriptor = createPropertyDescriptor$9;
var defineProperty = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var anInstance = anInstance$7;
var inheritIfRequired = inheritIfRequired$5;
var normalizeStringArgument = normalizeStringArgument$3;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = errorStackClear;
var DESCRIPTORS$1 = descriptors;

var DOM_EXCEPTION = 'DOMException';
var Error$2 = getBuiltIn$1('Error');
var NativeDOMException = getBuiltIn$1(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error$2(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error$2(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS$1 && Object.getOwnPropertyDescriptor(globalThis$3, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$$3({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn$1(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn$2(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn$2(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}

var $$2 = _export;
var DESCRIPTORS = descriptors;
var globalThis$2 = globalThis_1;
var call$1 = functionCall;
var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$2 = isCallable$x;
var isPrototypeOf = objectIsPrototypeOf;
var toString$1 = toString$f;
var defineBuiltInAccessor = defineBuiltInAccessor$d;
var copyConstructorProperties = copyConstructorProperties$5;

var NativeSymbol = globalThis$2.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable$2(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$1(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  // wrap Symbol.for for correct handling of empty string descriptions
  var nativeFor = SymbolWrapper['for'];
  SymbolWrapper['for'] = { 'for': function (key) {
    var stringKey = toString$1(key);
    var symbol = call$1(nativeFor, this, stringKey);
    if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
    return symbol;
  } }['for'];
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis$2(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$2(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis$2(''.replace);
  var stringSlice$1 = uncurryThis$2(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$1(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$2({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

var $$1 = _export;
var call = functionCall;
var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$7;
var isCallable$1 = isCallable$x;
var isObject$1 = isObject$p;
var isRegExp = isRegexp;
var toString = toString$f;
var getMethod = getMethod$6;
var getRegExpFlags$1 = regexpGetFlags;
var getSubstitution = getSubstitution$2;
var wellKnownSymbol = wellKnownSymbol$q;

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis$1(''.indexOf);
uncurryThis$1(''.replace);
var stringSlice = uncurryThis$1(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$$1({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (isObject$1(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags$1(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable$1(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});

var $ = _export;
var globalThis$1 = globalThis_1;
var getBuiltIn = getBuiltIn$f;
var uncurryThis = functionUncurryThis;
var fails = fails$J;
var uid = uid$5;
var isCallable = isCallable$x;
var isConstructor = isConstructor$4;
var isNullOrUndefined = isNullOrUndefined$5;
var isObject = isObject$p;
var isSymbol = isSymbol$5;
var iterate = iterate$c;
var anObject = anObject$q;
var classof = classof$h;
var hasOwn = hasOwnProperty_1;
var createProperty = createProperty$6;
var createNonEnumerableProperty = createNonEnumerableProperty$f;
var lengthOfArrayLike = lengthOfArrayLike$i;
var validateArgumentsLength = validateArgumentsLength$8;
var getRegExpFlags = regexpGetFlags;
var MapHelpers = mapHelpers;
var SetHelpers = setHelpers;
var setIterate = setIterate$1;
var detachTransferable = detachTransferable$2;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;

var Object$1 = globalThis$1.Object;
var Array$1 = globalThis$1.Array;
var Date = globalThis$1.Date;
var Error$1 = globalThis$1.Error;
var TypeError$1 = globalThis$1.TypeError;
var PerformanceMark = globalThis$1.PerformanceMark;
var DOMException = getBuiltIn('DOMException');
var Map$1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set$1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var setHas = SetHelpers.has;
var objectKeys = getBuiltIn('Object', 'keys');
var push = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1.1.valueOf);
var thisStringValue = uncurryThis(''.valueOf);
var thisTimeValue = uncurryThis(Date.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';

var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var set1 = new globalThis$1.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 === set1 || !set2.has(7) || !isObject(number) || +number !== 7;
  }) && structuredCloneImplementation;
};

var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
  return !fails(function () {
    var error = new $Error();
    var test = structuredCloneImplementation({ a: error, b: error });
    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
  });
};

// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
  return !fails(function () {
    var test = structuredCloneImplementation(new globalThis$1.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
    return test.name !== 'AggregateError' || test.errors[0] !== 1 || test.message !== PERFORMANCE_MARK || test.cause !== 3;
  });
};

// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF<103 and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// FF103 can clone errors, but `.stack` of clone is an empty string
// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
// FF104+ fixed it on usual errors, but not on DOMExceptions
// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
// Chrome <102 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// NodeJS implementation can't clone DOMExceptions
// https://github.com/nodejs/node/issues/41038
// only FF103+ supports new (html/5749) error cloning semantic
var nativeStructuredClone = globalThis$1.structuredClone;

var FORCED_REPLACEMENT = !checkErrorsCloning(nativeStructuredClone, Error$1)
  || !checkErrorsCloning(nativeStructuredClone, DOMException)
  || !checkNewErrorsCloningSemantic(nativeStructuredClone);

// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of those implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
});

var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};

var throwUnpolyfillable = function (type, action) {
  throw new DOMException((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};

var tryNativeRestrictedStructuredClone = function (value, type) {
  if (!nativeRestrictedStructuredClone) throwUnpolyfillable(type);
  return nativeRestrictedStructuredClone(value);
};

var createDataTransfer = function () {
  var dataTransfer;
  try {
    dataTransfer = new globalThis$1.DataTransfer();
  } catch (error) {
    try {
      dataTransfer = new globalThis$1.ClipboardEvent('').clipboardData;
    } catch (error2) { /* empty */ }
  }
  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};

var cloneBuffer = function (value, map, $type) {
  if (mapHas(map, value)) return mapGet(map, value);

  var type = $type || classof(value);
  var clone, length, options, source, target, i;

  if (type === 'SharedArrayBuffer') {
    if (nativeRestrictedStructuredClone) clone = nativeRestrictedStructuredClone(value);
    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
    else clone = value;
  } else {
    var DataView = globalThis$1.DataView;

    // `ArrayBuffer#slice` is not available in IE10
    // `ArrayBuffer#slice` and `DataView` are not available in old FF
    if (!DataView && !isCallable(value.slice)) throwUnpolyfillable('ArrayBuffer');
    // detached buffers throws in `DataView` and `.slice`
    try {
      if (isCallable(value.slice) && !value.resizable) {
        clone = value.slice(0);
      } else {
        length = value.byteLength;
        options = 'maxByteLength' in value ? { maxByteLength: value.maxByteLength } : undefined;
        // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
        clone = new ArrayBuffer(length, options);
        source = new DataView(value);
        target = new DataView(clone);
        for (i = 0; i < length; i++) {
          target.setUint8(i, source.getUint8(i));
        }
      }
    } catch (error) {
      throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
    }
  }

  mapSet(map, value, clone);

  return clone;
};

var cloneView = function (value, type, offset, length, map) {
  var C = globalThis$1[type];
  // in some old engines like Safari 9, typeof C is 'object'
  // on Uint8ClampedArray or some other constructors
  if (!isObject(C)) throwUnpolyfillable(type);
  return new C(cloneBuffer(value.buffer, map), offset, length);
};

var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject(value)) return value;
  // effectively preserves circular references
  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map$1();

  var type = classof(value);
  var C, name, cloned, dataTransfer, i, length, keys, key;

  switch (type) {
    case 'Array':
      cloned = Array$1(lengthOfArrayLike(value));
      break;
    case 'Object':
      cloned = {};
      break;
    case 'Map':
      cloned = new Map$1();
      break;
    case 'Set':
      cloned = new Set$1();
      break;
    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case 'Error':
      name = value.name;
      switch (name) {
        case 'AggregateError':
          cloned = new (getBuiltIn(name))([]);
          break;
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SuppressedError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
          cloned = new (getBuiltIn(name))();
          break;
        case 'CompileError':
        case 'LinkError':
        case 'RuntimeError':
          cloned = new (getBuiltIn('WebAssembly', name))();
          break;
        default:
          cloned = new Error$1();
      }
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      break;
    case 'ArrayBuffer':
    case 'SharedArrayBuffer':
      cloned = cloneBuffer(value, map, type);
      break;
    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float16Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      length = type === 'DataView' ? value.byteLength : value.length;
      cloned = cloneView(value, type, value.byteOffset, length, map);
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(
          structuredCloneInternal(value.p1, map),
          structuredCloneInternal(value.p2, map),
          structuredCloneInternal(value.p3, map),
          structuredCloneInternal(value.p4, map)
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      }
      break;
    case 'File':
      if (nativeRestrictedStructuredClone) try {
        cloned = nativeRestrictedStructuredClone(value);
        // NodeJS 20.0.0 bug, https://github.com/nodejs/node/issues/47612
        if (classof(cloned) !== type) cloned = undefined;
      } catch (error) { /* empty */ }
      if (!cloned) try {
        cloned = new File([value], value.name, value);
      } catch (error) { /* empty */ }
      if (!cloned) throwUnpolyfillable(type);
      break;
    case 'FileList':
      dataTransfer = createDataTransfer();
      if (dataTransfer) {
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }
        cloned = dataTransfer.files;
      } else cloned = tryNativeRestrictedStructuredClone(value, type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(
          structuredCloneInternal(value.data, map),
          value.width,
          value.height,
          { colorSpace: value.colorSpace }
        );
      } catch (error) {
        cloned = tryNativeRestrictedStructuredClone(value, type);
      } break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else switch (type) {
        case 'BigInt':
          // can be a 3rd party polyfill
          cloned = Object$1(value.valueOf());
          break;
        case 'Boolean':
          cloned = Object$1(thisBooleanValue(value));
          break;
        case 'Number':
          cloned = Object$1(thisNumberValue(value));
          break;
        case 'String':
          cloned = Object$1(thisStringValue(value));
          break;
        case 'Date':
          cloned = new Date(thisTimeValue(value));
          break;
        case 'Blob':
          try {
            cloned = value.slice(0, value.size, value.type);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMPoint':
        case 'DOMPointReadOnly':
          C = globalThis$1[type];
          try {
            cloned = C.fromPoint
              ? C.fromPoint(value)
              : new C(value.x, value.y, value.z, value.w);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMRect':
        case 'DOMRectReadOnly':
          C = globalThis$1[type];
          try {
            cloned = C.fromRect
              ? C.fromRect(value)
              : new C(value.x, value.y, value.width, value.height);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMMatrix':
        case 'DOMMatrixReadOnly':
          C = globalThis$1[type];
          try {
            cloned = C.fromMatrix
              ? C.fromMatrix(value)
              : new C(value);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable(value.clone)) throwUnpolyfillable(type);
          try {
            cloned = value.clone();
          } catch (error) {
            throwUncloneable(type);
          } break;
        case 'CropTarget':
        case 'CryptoKey':
        case 'FileSystemDirectoryHandle':
        case 'FileSystemFileHandle':
        case 'FileSystemHandle':
        case 'GPUCompilationInfo':
        case 'GPUCompilationMessage':
        case 'ImageBitmap':
        case 'RTCCertificate':
        case 'WebAssembly.Module':
          throwUnpolyfillable(type);
          // break omitted
        default:
          throwUncloneable(type);
      }
  }

  mapSet(map, value, cloned);

  switch (type) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        createProperty(cloned, key, structuredCloneInternal(value[key], map));
      } break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
      if (hasOwn(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }
      if (name === 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      } else if (name === 'SuppressedError') {
        cloned.error = structuredCloneInternal(value.error, map);
        cloned.suppressed = structuredCloneInternal(value.suppressed, map);
      } // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }
  }

  return cloned;
};

var tryToTransfer = function (rawTransfer, map) {
  if (!isObject(rawTransfer)) throw new TypeError$1('Transfer option cannot be converted to a sequence');

  var transfer = [];

  iterate(rawTransfer, function (value) {
    push(transfer, anObject(value));
  });

  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var buffers = new Set$1();
  var value, type, C, transferred, canvas, context;

  while (i < length) {
    value = transfer[i++];
    type = classof(value);
    transferred = undefined;

    if (type === 'ArrayBuffer' ? setHas(buffers, value) : mapHas(map, value)) {
      throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
    }

    if (type === 'ArrayBuffer') {
      setAdd(buffers, value);
      continue;
    }

    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      transferred = nativeStructuredClone(value, { transfer: [value] });
    } else switch (type) {
      case 'ImageBitmap':
        C = globalThis$1.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) { /* empty */ }
        break;
      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          transferred = value.clone();
          value.close();
        } catch (error) { /* empty */ }
        break;
      case 'MediaSourceHandle':
      case 'MessagePort':
      case 'MIDIAccess':
      case 'OffscreenCanvas':
      case 'ReadableStream':
      case 'RTCDataChannel':
      case 'TransformStream':
      case 'WebTransportReceiveStream':
      case 'WebTransportSendStream':
      case 'WritableStream':
        throwUnpolyfillable(type, TRANSFERRING);
    }

    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);

    mapSet(map, value, transferred);
  }

  return buffers;
};

var detachBuffers = function (buffers) {
  setIterate(buffers, function (buffer) {
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      nativeStructuredClone(buffer, { transfer: [buffer] });
    } else if (isCallable(buffer.transfer)) {
      buffer.transfer();
    } else if (detachTransferable) {
      detachTransferable(buffer);
    } else {
      throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
    }
  });
};

// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$({ global: true, enumerable: true, sham: !PROPER_STRUCTURED_CLONE_TRANSFER, forced: FORCED_REPLACEMENT }, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map, buffers;

    if (transfer !== undefined) {
      map = new Map$1();
      buffers = tryToTransfer(transfer, map);
    }

    var clone = structuredCloneInternal(value, map);

    // since of an issue with cloning views of transferred buffers, we a forced to detach them later
    // https://github.com/zloirock/core-js/issues/1265
    if (buffers) detachBuffers(buffers);

    return clone;
  }
});
