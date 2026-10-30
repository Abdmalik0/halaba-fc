(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
		var runtime = (function (exports) {

		  var Op = Object.prototype;
		  var hasOwn = Op.hasOwnProperty;
		  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
		  var undefined$1; // More compressible than void 0.
		  var $Symbol = typeof Symbol === "function" ? Symbol : {};
		  var iteratorSymbol = $Symbol.iterator || "@@iterator";
		  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
		  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

		  function define(obj, key, value) {
		    Object.defineProperty(obj, key, {
		      value: value,
		      enumerable: true,
		      configurable: true,
		      writable: true
		    });
		    return obj[key];
		  }
		  try {
		    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
		    define({}, "");
		  } catch (err) {
		    define = function(obj, key, value) {
		      return obj[key] = value;
		    };
		  }

		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
		    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
		    var generator = Object.create(protoGenerator.prototype);
		    var context = new Context(tryLocsList || []);

		    // The ._invoke method unifies the implementations of the .next,
		    // .throw, and .return methods.
		    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

		    return generator;
		  }
		  exports.wrap = wrap;

		  // Try/catch helper to minimize deoptimizations. Returns a completion
		  // record like context.tryEntries[i].completion. This interface could
		  // have been (and was previously) designed to take a closure to be
		  // invoked without arguments, but in all the cases we care about we
		  // already have an existing method we want to call, so there's no need
		  // to create a new function object. We can even get away with assuming
		  // the method takes exactly one argument, since that happens to be true
		  // in every case, so we don't have to touch the arguments object. The
		  // only additional allocation required is the completion record, which
		  // has a stable shape and so hopefully should be cheap to allocate.
		  function tryCatch(fn, obj, arg) {
		    try {
		      return { type: "normal", arg: fn.call(obj, arg) };
		    } catch (err) {
		      return { type: "throw", arg: err };
		    }
		  }

		  var GenStateSuspendedStart = "suspendedStart";
		  var GenStateSuspendedYield = "suspendedYield";
		  var GenStateExecuting = "executing";
		  var GenStateCompleted = "completed";

		  // Returning this object from the innerFn has the same effect as
		  // breaking out of the dispatch switch statement.
		  var ContinueSentinel = {};

		  // Dummy constructor functions that we use as the .constructor and
		  // .constructor.prototype properties for functions that return Generator
		  // objects. For full spec compliance, you may wish to configure your
		  // minifier not to mangle the names of these two functions.
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}

		  // This is a polyfill for %IteratorPrototype% for environments that
		  // don't natively support it.
		  var IteratorPrototype = {};
		  define(IteratorPrototype, iteratorSymbol, function () {
		    return this;
		  });

		  var getProto = Object.getPrototypeOf;
		  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		  if (NativeIteratorPrototype &&
		      NativeIteratorPrototype !== Op &&
		      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
		    // This environment has a native %IteratorPrototype%; use it instead
		    // of the polyfill.
		    IteratorPrototype = NativeIteratorPrototype;
		  }

		  var Gp = GeneratorFunctionPrototype.prototype =
		    Generator.prototype = Object.create(IteratorPrototype);
		  GeneratorFunction.prototype = GeneratorFunctionPrototype;
		  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
		  defineProperty(
		    GeneratorFunctionPrototype,
		    "constructor",
		    { value: GeneratorFunction, configurable: true }
		  );
		  GeneratorFunction.displayName = define(
		    GeneratorFunctionPrototype,
		    toStringTagSymbol,
		    "GeneratorFunction"
		  );

		  // Helper for defining the .next, .throw, and .return methods of the
		  // Iterator interface in terms of a single ._invoke method.
		  function defineIteratorMethods(prototype) {
		    ["next", "throw", "return"].forEach(function(method) {
		      define(prototype, method, function(arg) {
		        return this._invoke(method, arg);
		      });
		    });
		  }

		  exports.isGeneratorFunction = function(genFun) {
		    var ctor = typeof genFun === "function" && genFun.constructor;
		    return ctor
		      ? ctor === GeneratorFunction ||
		        // For the native GeneratorFunction constructor, the best we can
		        // do is to check its .name property.
		        (ctor.displayName || ctor.name) === "GeneratorFunction"
		      : false;
		  };

		  exports.mark = function(genFun) {
		    if (Object.setPrototypeOf) {
		      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
		    } else {
		      genFun.__proto__ = GeneratorFunctionPrototype;
		      define(genFun, toStringTagSymbol, "GeneratorFunction");
		    }
		    genFun.prototype = Object.create(Gp);
		    return genFun;
		  };

		  // Within the body of any async function, `await x` is transformed to
		  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
		  // `hasOwn.call(value, "__await")` to determine if the yielded value is
		  // meant to be awaited.
		  exports.awrap = function(arg) {
		    return { __await: arg };
		  };

		  function AsyncIterator(generator, PromiseImpl) {
		    function invoke(method, arg, resolve, reject) {
		      var record = tryCatch(generator[method], generator, arg);
		      if (record.type === "throw") {
		        reject(record.arg);
		      } else {
		        var result = record.arg;
		        var value = result.value;
		        if (value &&
		            typeof value === "object" &&
		            hasOwn.call(value, "__await")) {
		          return PromiseImpl.resolve(value.__await).then(function(value) {
		            invoke("next", value, resolve, reject);
		          }, function(err) {
		            invoke("throw", err, resolve, reject);
		          });
		        }

		        return PromiseImpl.resolve(value).then(function(unwrapped) {
		          // When a yielded Promise is resolved, its final value becomes
		          // the .value of the Promise<{value,done}> result for the
		          // current iteration.
		          result.value = unwrapped;
		          resolve(result);
		        }, function(error) {
		          // If a rejected Promise was yielded, throw the rejection back
		          // into the async generator function so it can be handled there.
		          return invoke("throw", error, resolve, reject);
		        });
		      }
		    }

		    var previousPromise;

		    function enqueue(method, arg) {
		      function callInvokeWithMethodAndArg() {
		        return new PromiseImpl(function(resolve, reject) {
		          invoke(method, arg, resolve, reject);
		        });
		      }

		      return previousPromise =
		        // If enqueue has been called before, then we want to wait until
		        // all previous Promises have been resolved before calling invoke,
		        // so that results are always delivered in the correct order. If
		        // enqueue has not been called before, then it is important to
		        // call invoke immediately, without waiting on a callback to fire,
		        // so that the async generator function has the opportunity to do
		        // any necessary setup in a predictable way. This predictability
		        // is why the Promise constructor synchronously invokes its
		        // executor callback, and why async functions synchronously
		        // execute code before the first await. Since we implement simple
		        // async functions in terms of async generators, it is especially
		        // important to get this right, even though it requires care.
		        previousPromise ? previousPromise.then(
		          callInvokeWithMethodAndArg,
		          // Avoid propagating failures to Promises returned by later
		          // invocations of the iterator.
		          callInvokeWithMethodAndArg
		        ) : callInvokeWithMethodAndArg();
		    }

		    // Define the unified helper method that is used to implement .next,
		    // .throw, and .return (see defineIteratorMethods).
		    defineProperty(this, "_invoke", { value: enqueue });
		  }

		  defineIteratorMethods(AsyncIterator.prototype);
		  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
		    return this;
		  });
		  exports.AsyncIterator = AsyncIterator;

		  // Note that simple async functions are implemented on top of
		  // AsyncIterator objects; they just return a Promise for the value of
		  // the final result produced by the iterator.
		  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
		    if (PromiseImpl === void 0) PromiseImpl = Promise;

		    var iter = new AsyncIterator(
		      wrap(innerFn, outerFn, self, tryLocsList),
		      PromiseImpl
		    );

		    return exports.isGeneratorFunction(outerFn)
		      ? iter // If outerFn is a generator, return the full iterator.
		      : iter.next().then(function(result) {
		          return result.done ? result.value : iter.next();
		        });
		  };

		  function makeInvokeMethod(innerFn, self, context) {
		    var state = GenStateSuspendedStart;

		    return function invoke(method, arg) {
		      if (state === GenStateExecuting) {
		        throw new Error("Generator is already running");
		      }

		      if (state === GenStateCompleted) {
		        if (method === "throw") {
		          throw arg;
		        }

		        // Be forgiving, per GeneratorResume behavior specified since ES2015:
		        // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
		        // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
		        return doneResult();
		      }

		      context.method = method;
		      context.arg = arg;

		      while (true) {
		        var delegate = context.delegate;
		        if (delegate) {
		          var delegateResult = maybeInvokeDelegate(delegate, context);
		          if (delegateResult) {
		            if (delegateResult === ContinueSentinel) continue;
		            return delegateResult;
		          }
		        }

		        if (context.method === "next") {
		          // Setting context._sent for legacy support of Babel's
		          // function.sent implementation.
		          context.sent = context._sent = context.arg;

		        } else if (context.method === "throw") {
		          if (state === GenStateSuspendedStart) {
		            state = GenStateCompleted;
		            throw context.arg;
		          }

		          context.dispatchException(context.arg);

		        } else if (context.method === "return") {
		          context.abrupt("return", context.arg);
		        }

		        state = GenStateExecuting;

		        var record = tryCatch(innerFn, self, context);
		        if (record.type === "normal") {
		          // If an exception is thrown from innerFn, we leave state ===
		          // GenStateExecuting and loop back for another invocation.
		          state = context.done
		            ? GenStateCompleted
		            : GenStateSuspendedYield;

		          if (record.arg === ContinueSentinel) {
		            continue;
		          }

		          return {
		            value: record.arg,
		            done: context.done
		          };

		        } else if (record.type === "throw") {
		          state = GenStateCompleted;
		          // Dispatch the exception by looping back around to the
		          // context.dispatchException(context.arg) call above.
		          context.method = "throw";
		          context.arg = record.arg;
		        }
		      }
		    };
		  }

		  // Call delegate.iterator[context.method](context.arg) and handle the
		  // result, either by returning a { value, done } result from the
		  // delegate iterator, or by modifying context.method and context.arg,
		  // setting context.delegate to null, and returning the ContinueSentinel.
		  function maybeInvokeDelegate(delegate, context) {
		    var methodName = context.method;
		    var method = delegate.iterator[methodName];
		    if (method === undefined$1) {
		      // A .throw or .return when the delegate iterator has no .throw
		      // method, or a missing .next method, always terminate the
		      // yield* loop.
		      context.delegate = null;

		      // Note: ["return"] must be used for ES3 parsing compatibility.
		      if (methodName === "throw" && delegate.iterator["return"]) {
		        // If the delegate iterator has a return method, give it a
		        // chance to clean up.
		        context.method = "return";
		        context.arg = undefined$1;
		        maybeInvokeDelegate(delegate, context);

		        if (context.method === "throw") {
		          // If maybeInvokeDelegate(context) changed context.method from
		          // "return" to "throw", let that override the TypeError below.
		          return ContinueSentinel;
		        }
		      }
		      if (methodName !== "return") {
		        context.method = "throw";
		        context.arg = new TypeError(
		          "The iterator does not provide a '" + methodName + "' method");
		      }

		      return ContinueSentinel;
		    }

		    var record = tryCatch(method, delegate.iterator, context.arg);

		    if (record.type === "throw") {
		      context.method = "throw";
		      context.arg = record.arg;
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    var info = record.arg;

		    if (! info) {
		      context.method = "throw";
		      context.arg = new TypeError("iterator result is not an object");
		      context.delegate = null;
		      return ContinueSentinel;
		    }

		    if (info.done) {
		      // Assign the result of the finished delegate to the temporary
		      // variable specified by delegate.resultName (see delegateYield).
		      context[delegate.resultName] = info.value;

		      // Resume execution at the desired location (see delegateYield).
		      context.next = delegate.nextLoc;

		      // If context.method was "throw" but the delegate handled the
		      // exception, let the outer generator proceed normally. If
		      // context.method was "next", forget context.arg since it has been
		      // "consumed" by the delegate iterator. If context.method was
		      // "return", allow the original .return call to continue in the
		      // outer generator.
		      if (context.method !== "return") {
		        context.method = "next";
		        context.arg = undefined$1;
		      }

		    } else {
		      // Re-yield the result returned by the delegate method.
		      return info;
		    }

		    // The delegate iterator is finished, so forget it and continue with
		    // the outer generator.
		    context.delegate = null;
		    return ContinueSentinel;
		  }

		  // Define Generator.prototype.{next,throw,return} in terms of the
		  // unified ._invoke helper method.
		  defineIteratorMethods(Gp);

		  define(Gp, toStringTagSymbol, "Generator");

		  // A Generator should always return itself as the iterator object when the
		  // @@iterator function is called on it. Some browsers' implementations of the
		  // iterator prototype chain incorrectly implement this, causing the Generator
		  // object to not be returned from this call. This ensures that doesn't happen.
		  // See https://github.com/facebook/regenerator/issues/274 for more details.
		  define(Gp, iteratorSymbol, function() {
		    return this;
		  });

		  define(Gp, "toString", function() {
		    return "[object Generator]";
		  });

		  function pushTryEntry(locs) {
		    var entry = { tryLoc: locs[0] };

		    if (1 in locs) {
		      entry.catchLoc = locs[1];
		    }

		    if (2 in locs) {
		      entry.finallyLoc = locs[2];
		      entry.afterLoc = locs[3];
		    }

		    this.tryEntries.push(entry);
		  }

		  function resetTryEntry(entry) {
		    var record = entry.completion || {};
		    record.type = "normal";
		    delete record.arg;
		    entry.completion = record;
		  }

		  function Context(tryLocsList) {
		    // The root entry object (effectively a try statement without a catch
		    // or a finally block) gives us a place to store values thrown from
		    // locations where there is no enclosing try statement.
		    this.tryEntries = [{ tryLoc: "root" }];
		    tryLocsList.forEach(pushTryEntry, this);
		    this.reset(true);
		  }

		  exports.keys = function(val) {
		    var object = Object(val);
		    var keys = [];
		    for (var key in object) {
		      keys.push(key);
		    }
		    keys.reverse();

		    // Rather than returning an object with a next method, we keep
		    // things simple and return the next function itself.
		    return function next() {
		      while (keys.length) {
		        var key = keys.pop();
		        if (key in object) {
		          next.value = key;
		          next.done = false;
		          return next;
		        }
		      }

		      // To avoid creating an additional object, we just hang the .value
		      // and .done properties off the next function object itself. This
		      // also ensures that the minifier will not anonymize the function.
		      next.done = true;
		      return next;
		    };
		  };

		  function values(iterable) {
		    if (iterable != null) {
		      var iteratorMethod = iterable[iteratorSymbol];
		      if (iteratorMethod) {
		        return iteratorMethod.call(iterable);
		      }

		      if (typeof iterable.next === "function") {
		        return iterable;
		      }

		      if (!isNaN(iterable.length)) {
		        var i = -1, next = function next() {
		          while (++i < iterable.length) {
		            if (hasOwn.call(iterable, i)) {
		              next.value = iterable[i];
		              next.done = false;
		              return next;
		            }
		          }

		          next.value = undefined$1;
		          next.done = true;

		          return next;
		        };

		        return next.next = next;
		      }
		    }

		    throw new TypeError(typeof iterable + " is not iterable");
		  }
		  exports.values = values;

		  function doneResult() {
		    return { value: undefined$1, done: true };
		  }

		  Context.prototype = {
		    constructor: Context,

		    reset: function(skipTempReset) {
		      this.prev = 0;
		      this.next = 0;
		      // Resetting context._sent for legacy support of Babel's
		      // function.sent implementation.
		      this.sent = this._sent = undefined$1;
		      this.done = false;
		      this.delegate = null;

		      this.method = "next";
		      this.arg = undefined$1;

		      this.tryEntries.forEach(resetTryEntry);

		      if (!skipTempReset) {
		        for (var name in this) {
		          // Not sure about the optimal order of these conditions:
		          if (name.charAt(0) === "t" &&
		              hasOwn.call(this, name) &&
		              !isNaN(+name.slice(1))) {
		            this[name] = undefined$1;
		          }
		        }
		      }
		    },

		    stop: function() {
		      this.done = true;

		      var rootEntry = this.tryEntries[0];
		      var rootRecord = rootEntry.completion;
		      if (rootRecord.type === "throw") {
		        throw rootRecord.arg;
		      }

		      return this.rval;
		    },

		    dispatchException: function(exception) {
		      if (this.done) {
		        throw exception;
		      }

		      var context = this;
		      function handle(loc, caught) {
		        record.type = "throw";
		        record.arg = exception;
		        context.next = loc;

		        if (caught) {
		          // If the dispatched exception was caught by a catch block,
		          // then let that catch block handle the exception normally.
		          context.method = "next";
		          context.arg = undefined$1;
		        }

		        return !! caught;
		      }

		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        var record = entry.completion;

		        if (entry.tryLoc === "root") {
		          // Exception thrown outside of any try block that could handle
		          // it, so set the completion value of the entire function to
		          // throw the exception.
		          return handle("end");
		        }

		        if (entry.tryLoc <= this.prev) {
		          var hasCatch = hasOwn.call(entry, "catchLoc");
		          var hasFinally = hasOwn.call(entry, "finallyLoc");

		          if (hasCatch && hasFinally) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            } else if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else if (hasCatch) {
		            if (this.prev < entry.catchLoc) {
		              return handle(entry.catchLoc, true);
		            }

		          } else if (hasFinally) {
		            if (this.prev < entry.finallyLoc) {
		              return handle(entry.finallyLoc);
		            }

		          } else {
		            throw new Error("try statement without catch or finally");
		          }
		        }
		      }
		    },

		    abrupt: function(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc <= this.prev &&
		            hasOwn.call(entry, "finallyLoc") &&
		            this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }

		      if (finallyEntry &&
		          (type === "break" ||
		           type === "continue") &&
		          finallyEntry.tryLoc <= arg &&
		          arg <= finallyEntry.finallyLoc) {
		        // Ignore the finally entry if control is not jumping to a
		        // location outside the try/catch block.
		        finallyEntry = null;
		      }

		      var record = finallyEntry ? finallyEntry.completion : {};
		      record.type = type;
		      record.arg = arg;

		      if (finallyEntry) {
		        this.method = "next";
		        this.next = finallyEntry.finallyLoc;
		        return ContinueSentinel;
		      }

		      return this.complete(record);
		    },

		    complete: function(record, afterLoc) {
		      if (record.type === "throw") {
		        throw record.arg;
		      }

		      if (record.type === "break" ||
		          record.type === "continue") {
		        this.next = record.arg;
		      } else if (record.type === "return") {
		        this.rval = this.arg = record.arg;
		        this.method = "return";
		        this.next = "end";
		      } else if (record.type === "normal" && afterLoc) {
		        this.next = afterLoc;
		      }

		      return ContinueSentinel;
		    },

		    finish: function(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) {
		          this.complete(entry.completion, entry.afterLoc);
		          resetTryEntry(entry);
		          return ContinueSentinel;
		        }
		      }
		    },

		    "catch": function(tryLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc === tryLoc) {
		          var record = entry.completion;
		          if (record.type === "throw") {
		            var thrown = record.arg;
		            resetTryEntry(entry);
		          }
		          return thrown;
		        }
		      }

		      // The context.catch method must only be called with a location
		      // argument that corresponds to a known catch block.
		      throw new Error("illegal catch attempt");
		    },

		    delegateYield: function(iterable, resultName, nextLoc) {
		      this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      };

		      if (this.method === "next") {
		        // Deliberately forget the last sent value so that we don't
		        // accidentally pass it on to the delegate.
		        this.arg = undefined$1;
		      }

		      return ContinueSentinel;
		    }
		  };

		  // Regardless of whether this script is executing as a CommonJS module
		  // or not, return the runtime object so that we can declare the variable
		  // regeneratorRuntime in the outer scope, which allows this module to be
		  // injected easily by `bin/regenerator --include-runtime script.js`.
		  return exports;

		}(
		  // If this script is executing as a CommonJS module, use module.exports
		  // as the regeneratorRuntime namespace. Otherwise create a new empty
		  // object. Either way, the resulting object will be used to initialize
		  // the regeneratorRuntime variable at the top of this file.
		  module.exports 
		));

		try {
		  regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
		  // This module should not be running in strict mode, so the above
		  // assignment should always work unless something is misconfigured. Just
		  // in case runtime.js accidentally runs in strict mode, in modern engines
		  // we can explicitly access globalThis. In older engines we can escape
		  // strict mode using a global Function call. This could conceivably fail
		  // if a Content Security Policy forbids using Function, but in that case
		  // the proper solution is to fix the accidental strict mode problem. If
		  // you've misconfigured your bundler to force strict mode and applied a
		  // CSP to forbid Function, and you're not willing to fix either of those
		  // problems, please detail your unique predicament in a GitHub issue.
		  if (typeof globalThis === "object") {
		    globalThis.regeneratorRuntime = runtime;
		  } else {
		    Function("r", "regeneratorRuntime = r")(runtime);
		  }
		} 
	} (runtime));

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

	var globalThis$1a = globalThis_1;

	var path$3 = globalThis$1a;

	var fails$19 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$18 = fails$19;

	var functionBindNative = !fails$18(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = function () { /* empty */ }.bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$4 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$L = FunctionPrototype$2.call;
	// eslint-disable-next-line es/no-function-prototype-bind -- safe
	var uncurryThisWithBind = NATIVE_BIND$4 && FunctionPrototype$2.bind.bind(call$L, call$L);

	var functionUncurryThis = NATIVE_BIND$4 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$L.apply(fn, arguments);
	  };
	};

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$8 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$7 = isNullOrUndefined$8;

	var $TypeError$x = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$f = function (it) {
	  if (isNullOrUndefined$7(it)) throw new $TypeError$x("Can't call method on " + it);
	  return it;
	};

	var requireObjectCoercible$e = requireObjectCoercible$f;

	var $Object$5 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$k = function (argument) {
	  return $Object$5(requireObjectCoercible$e(argument));
	};

	var uncurryThis$1a = functionUncurryThis;
	var toObject$j = toObject$k;

	var hasOwnProperty = uncurryThis$1a({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$j(it), key);
	};

	var wellKnownSymbolWrapped = {};

	var sharedStore = {exports: {}};

	var isPure = false;

	var globalThis$19 = globalThis_1;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$e = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$e(globalThis$19, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    globalThis$19[key] = value;
	  } return value;
	};

	var globalThis$18 = globalThis_1;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = sharedStore.exports = globalThis$18[SHARED] || defineGlobalProperty$2(SHARED, {});

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
	var create$c = Object.create || Object;

	var shared$7 = function (key, value) {
	  return store$2[key] || (store$2[key] = value || create$c(null));
	};

	var uncurryThis$19 = functionUncurryThis;

	var id$2 = 0;
	var postfix = Math.random();
	var toString$v = uncurryThis$19(1.1.toString);

	var uid$7 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$v(++id$2 + postfix, 36);
	};

	var globalThis$17 = globalThis_1;

	var navigator = globalThis$17.navigator;
	var userAgent$8 = navigator && navigator.userAgent;

	var environmentUserAgent = userAgent$8 ? String(userAgent$8) : '';

	var globalThis$16 = globalThis_1;
	var userAgent$7 = environmentUserAgent;

	var process$3 = globalThis$16.process;
	var Deno$1 = globalThis$16.Deno;
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
	if (!version && userAgent$7) {
	  match = userAgent$7.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$7.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var environmentV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$3 = environmentV8Version;
	var fails$17 = fails$19;
	var globalThis$15 = globalThis_1;

	var $String$7 = globalThis$15.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$17(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$7(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$7 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$7 &&
	  !Symbol.sham &&
	  typeof Symbol.iterator == 'symbol';

	var globalThis$14 = globalThis_1;
	var shared$6 = shared$7;
	var hasOwn$z = hasOwnProperty_1;
	var uid$6 = uid$7;
	var NATIVE_SYMBOL$6 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var Symbol$3 = globalThis$14.Symbol;
	var WellKnownSymbolsStore$1 = shared$6('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$6;

	var wellKnownSymbol$z = function (name) {
	  if (!hasOwn$z(WellKnownSymbolsStore$1, name)) {
	    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$6 && hasOwn$z(Symbol$3, name)
	      ? Symbol$3[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore$1[name];
	};

	var wellKnownSymbol$y = wellKnownSymbol$z;

	wellKnownSymbolWrapped.f = wellKnownSymbol$y;

	var objectDefineProperty = {};

	var fails$16 = fails$19;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$16(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$z = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$y = isCallable$z;

	var isObject$D = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$y(it);
	};

	var globalThis$13 = globalThis_1;
	var isObject$C = isObject$D;

	var document$3 = globalThis$13.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$C(document$3) && isObject$C(document$3.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$G = descriptors;
	var fails$15 = fails$19;
	var createElement$1 = documentCreateElement$2;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$G && !fails$15(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$F = descriptors;
	var fails$14 = fails$19;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$F && fails$14(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$B = isObject$D;

	var $String$6 = String;
	var $TypeError$w = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$C = function (argument) {
	  if (isObject$B(argument)) return argument;
	  throw new $TypeError$w($String$6(argument) + ' is not an object');
	};

	var NATIVE_BIND$3 = functionBindNative;

	var call$K = Function.prototype.call;
	// eslint-disable-next-line es/no-function-prototype-bind -- safe
	var functionCall = NATIVE_BIND$3 ? call$K.bind(call$K) : function () {
	  return call$K.apply(call$K, arguments);
	};

	var globalThis$12 = globalThis_1;
	var isCallable$x = isCallable$z;

	var aFunction = function (argument) {
	  return isCallable$x(argument) ? argument : undefined;
	};

	var getBuiltIn$m = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(globalThis$12[namespace]) : globalThis$12[namespace] && globalThis$12[namespace][method];
	};

	var uncurryThis$18 = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$18({}.isPrototypeOf);

	var getBuiltIn$l = getBuiltIn$m;
	var isCallable$w = isCallable$z;
	var isPrototypeOf$b = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var $Object$4 = Object;

	var isSymbol$7 = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$l('Symbol');
	  return isCallable$w($Symbol) && isPrototypeOf$b($Symbol.prototype, $Object$4(it));
	};

	var $String$5 = String;

	var tryToString$7 = function (argument) {
	  try {
	    return $String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$v = isCallable$z;
	var tryToString$6 = tryToString$7;

	var $TypeError$v = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$p = function (argument) {
	  if (isCallable$v(argument)) return argument;
	  throw new $TypeError$v(tryToString$6(argument) + ' is not a function');
	};

	var aCallable$o = aCallable$p;
	var isNullOrUndefined$6 = isNullOrUndefined$8;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$9 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$6(func) ? undefined : aCallable$o(func);
	};

	var call$J = functionCall;
	var isCallable$u = isCallable$z;
	var isObject$A = isObject$D;

	var $TypeError$u = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$2 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$u(fn = input.toString) && !isObject$A(val = call$J(fn, input))) return val;
	  if (isCallable$u(fn = input.valueOf) && !isObject$A(val = call$J(fn, input))) return val;
	  if (pref !== 'string' && isCallable$u(fn = input.toString) && !isObject$A(val = call$J(fn, input))) return val;
	  throw new $TypeError$u("Can't convert object to primitive value");
	};

	var call$I = functionCall;
	var isObject$z = isObject$D;
	var isSymbol$6 = isSymbol$7;
	var getMethod$8 = getMethod$9;
	var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
	var wellKnownSymbol$x = wellKnownSymbol$z;

	var $TypeError$t = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$x('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$4 = function (input, pref) {
	  if (!isObject$z(input) || isSymbol$6(input)) return input;
	  var exoticToPrim = getMethod$8(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$I(exoticToPrim, input, pref);
	    if (!isObject$z(result) || isSymbol$6(result)) return result;
	    throw new $TypeError$t("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$1(input, pref);
	};

	var toPrimitive$3 = toPrimitive$4;
	var isSymbol$5 = isSymbol$7;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$5 = function (argument) {
	  var key = toPrimitive$3(argument, 'string');
	  return isSymbol$5(key) ? key : key + '';
	};

	var DESCRIPTORS$E = descriptors;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$B = anObject$C;
	var toPropertyKey$4 = toPropertyKey$5;

	var $TypeError$s = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$E ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$B(O);
	  P = toPropertyKey$4(P);
	  anObject$B(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$2(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$B(O);
	  P = toPropertyKey$4(P);
	  anObject$B(Attributes);
	  if (IE8_DOM_DEFINE$1) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$s('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var path$2 = path$3;
	var hasOwn$y = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$d = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$2.Symbol || (path$2.Symbol = {});
	  if (!hasOwn$y(Symbol, NAME)) defineProperty$d(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$3('iterator');

	var makeBuiltIn$3 = {exports: {}};

	var DESCRIPTORS$D = descriptors;
	var hasOwn$x = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$D && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$x(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$D || (DESCRIPTORS$D && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$17 = functionUncurryThis;
	var isCallable$t = isCallable$z;
	var store$1 = sharedStoreExports;

	var functionToString = uncurryThis$17(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$t(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var globalThis$11 = globalThis_1;
	var isCallable$s = isCallable$z;

	var WeakMap$2 = globalThis$11.WeakMap;

	var weakMapBasicDetection = isCallable$s(WeakMap$2) && /native code/.test(String(WeakMap$2));

	var createPropertyDescriptor$b = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var DESCRIPTORS$C = descriptors;
	var definePropertyModule$6 = objectDefineProperty;
	var createPropertyDescriptor$a = createPropertyDescriptor$b;

	var createNonEnumerableProperty$g = DESCRIPTORS$C ? function (object, key, value) {
	  return definePropertyModule$6.f(object, key, createPropertyDescriptor$a(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var shared$5 = shared$7;
	var uid$5 = uid$7;

	var keys$2 = shared$5('keys');

	var sharedKey$4 = function (key) {
	  return keys$2[key] || (keys$2[key] = uid$5(key));
	};

	var hiddenKeys$6 = {};

	var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
	var globalThis$10 = globalThis_1;
	var isObject$y = isObject$D;
	var createNonEnumerableProperty$f = createNonEnumerableProperty$g;
	var hasOwn$w = hasOwnProperty_1;
	var shared$4 = sharedStoreExports;
	var sharedKey$3 = sharedKey$4;
	var hiddenKeys$5 = hiddenKeys$6;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$a = globalThis$10.TypeError;
	var WeakMap$1 = globalThis$10.WeakMap;
	var set$7, get$5, has$b;

	var enforce = function (it) {
	  return has$b(it) ? get$5(it) : set$7(it, {});
	};

	var getterFor$1 = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$y(it) || (state = get$5(it)).type !== TYPE) {
	      throw new TypeError$a('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP$1 || shared$4.state) {
	  var store = shared$4.state || (shared$4.state = new WeakMap$1());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store.get = store.get;
	  store.has = store.has;
	  store.set = store.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set$7 = function (it, metadata) {
	    if (store.has(it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
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
	  var STATE = sharedKey$3('state');
	  hiddenKeys$5[STATE] = true;
	  set$7 = function (it, metadata) {
	    if (hasOwn$w(it, STATE)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$f(it, STATE, metadata);
	    return metadata;
	  };
	  get$5 = function (it) {
	    return hasOwn$w(it, STATE) ? it[STATE] : {};
	  };
	  has$b = function (it) {
	    return hasOwn$w(it, STATE);
	  };
	}

	var internalState = {
	  set: set$7,
	  get: get$5,
	  has: has$b,
	  enforce: enforce,
	  getterFor: getterFor$1
	};

	var uncurryThis$16 = functionUncurryThis;
	var fails$13 = fails$19;
	var isCallable$r = isCallable$z;
	var hasOwn$v = hasOwnProperty_1;
	var DESCRIPTORS$B = descriptors;
	var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
	var inspectSource$2 = inspectSource$3;
	var InternalStateModule$d = internalState;

	var enforceInternalState$4 = InternalStateModule$d.enforce;
	var getInternalState$a = InternalStateModule$d.get;
	var $String$4 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$c = Object.defineProperty;
	var stringSlice$f = uncurryThis$16(''.slice);
	var replace$c = uncurryThis$16(''.replace);
	var join$9 = uncurryThis$16([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$B && !fails$13(function () {
	  return defineProperty$c(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
	  if (stringSlice$f($String$4(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$c($String$4(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$v(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
	    if (DESCRIPTORS$B) defineProperty$c(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$v(options, 'arity') && value.length !== options.arity) {
	    defineProperty$c(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$v(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$B) defineProperty$c(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState$4(value);
	  if (!hasOwn$v(state, 'source')) {
	    state.source = join$9(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$2(function toString() {
	  return isCallable$r(this) && getInternalState$a(this).source || inspectSource$2(this);
	}, 'toString');

	var makeBuiltInExports = makeBuiltIn$3.exports;

	var isCallable$q = isCallable$z;
	var definePropertyModule$5 = objectDefineProperty;
	var makeBuiltIn$1 = makeBuiltInExports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$m = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$q(value)) makeBuiltIn$1(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$5.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var call$H = functionCall;
	var getBuiltIn$k = getBuiltIn$m;
	var wellKnownSymbol$w = wellKnownSymbol$z;
	var defineBuiltIn$l = defineBuiltIn$m;

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$k('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$w('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$l(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$H(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$2('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive$1();

	var objectGetOwnPropertyDescriptor = {};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$7 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$7(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$2;

	var uncurryThis$15 = functionUncurryThis;

	var toString$u = uncurryThis$15({}.toString);
	var stringSlice$e = uncurryThis$15(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$e(toString$u(it), 8, -1);
	};

	var uncurryThis$14 = functionUncurryThis;
	var fails$12 = fails$19;
	var classof$m = classofRaw$2;

	var $Object$3 = Object;
	var split$3 = uncurryThis$14(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$12(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$m(it) === 'String' ? split$3(it, '') : $Object$3(it);
	} : $Object$3;

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$4 = indexedObject;
	var requireObjectCoercible$d = requireObjectCoercible$f;

	var toIndexedObject$d = function (it) {
	  return IndexedObject$4(requireObjectCoercible$d(it));
	};

	var DESCRIPTORS$A = descriptors;
	var call$G = functionCall;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$9 = createPropertyDescriptor$b;
	var toIndexedObject$c = toIndexedObject$d;
	var toPropertyKey$3 = toPropertyKey$5;
	var hasOwn$u = hasOwnProperty_1;
	var IE8_DOM_DEFINE = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$A ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$c(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$u(O, P)) return createPropertyDescriptor$9(!call$G(propertyIsEnumerableModule$2.f, O, P), O[P]);
	};

	var objectGetOwnPropertyNames = {};

	var ceil$1 = Math.ceil;
	var floor$b = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$b : ceil$1)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$d = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$c = toIntegerOrInfinity$d;

	var max$6 = Math.max;
	var min$a = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$7 = function (index, length) {
	  var integer = toIntegerOrInfinity$c(index);
	  return integer < 0 ? max$6(integer + length, 0) : min$a(integer, length);
	};

	var toIntegerOrInfinity$b = toIntegerOrInfinity$d;

	var min$9 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$9 = function (argument) {
	  var len = toIntegerOrInfinity$b(argument);
	  return len > 0 ? min$9(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$8 = toLength$9;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$n = function (obj) {
	  return toLength$8(obj.length);
	};

	var toIndexedObject$b = toIndexedObject$d;
	var toAbsoluteIndex$6 = toAbsoluteIndex$7;
	var lengthOfArrayLike$m = lengthOfArrayLike$n;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$7 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$b($this);
	    var length = lengthOfArrayLike$m(O);
	    if (length === 0) return !IS_INCLUDES && -1;
	    var index = toAbsoluteIndex$6(fromIndex, length);
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
	  includes: createMethod$7(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$7(false)
	};

	var uncurryThis$13 = functionUncurryThis;
	var hasOwn$t = hasOwnProperty_1;
	var toIndexedObject$a = toIndexedObject$d;
	var indexOf$2 = arrayIncludes.indexOf;
	var hiddenKeys$4 = hiddenKeys$6;

	var push$e = uncurryThis$13([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$a(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$t(hiddenKeys$4, key) && hasOwn$t(O, key) && push$e(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$t(O, key = names[i++])) {
	    ~indexOf$2(result, key) || push$e(result, key);
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

	var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$3);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$j = getBuiltIn$m;
	var uncurryThis$12 = functionUncurryThis;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
	var anObject$A = anObject$C;

	var concat$3 = uncurryThis$12([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$2 = getBuiltIn$j('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$2.f(anObject$A(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
	  return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$s = hasOwnProperty_1;
	var ownKeys$1 = ownKeys$2;
	var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$4 = objectDefineProperty;

	var copyConstructorProperties$6 = function (target, source, exceptions) {
	  var keys = ownKeys$1(source);
	  var defineProperty = definePropertyModule$4.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$s(target, key) && !(exceptions && hasOwn$s(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$11 = fails$19;
	var isCallable$p = isCallable$z;

	var replacement = /#|\.prototype\./;

	var isForced$5 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$p(detection) ? fails$11(detection)
	    : !!detection;
	};

	var normalize = isForced$5.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$5.data = {};
	var NATIVE = isForced$5.NATIVE = 'N';
	var POLYFILL = isForced$5.POLYFILL = 'P';

	var isForced_1 = isForced$5;

	var globalThis$$ = globalThis_1;
	var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$e = createNonEnumerableProperty$g;
	var defineBuiltIn$k = defineBuiltIn$m;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties$5 = copyConstructorProperties$6;
	var isForced$4 = isForced_1;

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
	    target = globalThis$$;
	  } else if (STATIC) {
	    target = globalThis$$[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = globalThis$$[TARGET] && globalThis$$[TARGET].prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$6(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties$5(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$e(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$k(target, key, sourceProperty, options);
	  }
	};

	var NATIVE_BIND$2 = functionBindNative;

	var FunctionPrototype = Function.prototype;
	var apply$9 = FunctionPrototype.apply;
	var call$F = FunctionPrototype.call;

	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$2 ? call$F.bind(apply$9) : function () {
	  return call$F.apply(apply$9, arguments);
	});

	var uncurryThis$11 = functionUncurryThis;
	var aCallable$n = aCallable$p;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$11(aCallable$n(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isObject$x = isObject$D;

	var isPossiblePrototype$1 = function (argument) {
	  return isObject$x(argument) || argument === null;
	};

	var isPossiblePrototype = isPossiblePrototype$1;

	var $String$3 = String;
	var $TypeError$r = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError$r("Can't set " + $String$3(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor$3 = functionUncurryThisAccessor;
	var isObject$w = isObject$D;
	var requireObjectCoercible$c = requireObjectCoercible$f;
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
	    requireObjectCoercible$c(O);
	    aPossiblePrototype(proto);
	    if (!isObject$w(O)) return O;
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var defineProperty$b = objectDefineProperty.f;

	var proxyAccessor$2 = function (Target, Source, key) {
	  key in Target || defineProperty$b(Target, key, {
	    configurable: true,
	    get: function () { return Source[key]; },
	    set: function (it) { Source[key] = it; }
	  });
	};

	var isCallable$o = isCallable$z;
	var isObject$v = isObject$D;
	var setPrototypeOf$8 = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$7 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf$8 &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable$o(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$v(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf$8($this, NewTargetPrototype);
	  return $this;
	};

	var wellKnownSymbol$v = wellKnownSymbol$z;

	var TO_STRING_TAG$6 = wellKnownSymbol$v('toStringTag');
	var test$2 = {};
	// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	test$2[TO_STRING_TAG$6] = 'z';

	var toStringTagSupport = String(test$2) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$n = isCallable$z;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$u = wellKnownSymbol$z;

	var TO_STRING_TAG$5 = wellKnownSymbol$u('toStringTag');
	var $Object$2 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$l = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$5)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    // ES3 arguments fallback
	    : (result = classofRaw$1(O)) === 'Object' && isCallable$n(O.callee) ? 'Arguments' : result;
	};

	var classof$k = classof$l;

	var $String$2 = String;

	var toString$t = function (argument) {
	  if (classof$k(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$2(argument);
	};

	var toString$s = toString$t;

	var normalizeStringArgument$5 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$s(argument);
	};

	var isObject$u = isObject$D;
	var createNonEnumerableProperty$d = createNonEnumerableProperty$g;

	// `InstallErrorCause` abstract operation
	// https://tc39.es/ecma262/#sec-installerrorcause
	var installErrorCause$1 = function (O, options) {
	  if (isObject$u(options) && 'cause' in options) {
	    createNonEnumerableProperty$d(O, 'cause', options.cause);
	  }
	};

	var uncurryThis$10 = functionUncurryThis;

	var $Error$1 = Error;
	var replace$b = uncurryThis$10(''.replace);

	var TEST = (function (arg) { return String(new $Error$1(arg).stack); })('zxcasd');
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace$b(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var fails$10 = fails$19;
	var createPropertyDescriptor$8 = createPropertyDescriptor$b;

	var errorStackInstallable = !fails$10(function () {
	  var error = new Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$8(1, 7));
	  return error.stack !== 7;
	});

	var createNonEnumerableProperty$c = createNonEnumerableProperty$g;
	var clearErrorStack$2 = errorStackClear;
	var ERROR_STACK_INSTALLABLE$1 = errorStackInstallable;

	// non-standard V8
	// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
	var captureStackTrace = Error.captureStackTrace;

	var errorStackInstall = function (error, C, stack, dropEntries) {
	  if (ERROR_STACK_INSTALLABLE$1) {
	    if (captureStackTrace) captureStackTrace(error, C);
	    else createNonEnumerableProperty$c(error, 'stack', clearErrorStack$2(stack, dropEntries));
	  }
	};

	var getBuiltIn$i = getBuiltIn$m;
	var hasOwn$r = hasOwnProperty_1;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$g;
	var isPrototypeOf$a = objectIsPrototypeOf;
	var setPrototypeOf$7 = objectSetPrototypeOf;
	var copyConstructorProperties$4 = copyConstructorProperties$6;
	var proxyAccessor$1 = proxyAccessor$2;
	var inheritIfRequired$6 = inheritIfRequired$7;
	var normalizeStringArgument$4 = normalizeStringArgument$5;
	var installErrorCause = installErrorCause$1;
	var installErrorStack$1 = errorStackInstall;
	var DESCRIPTORS$z = descriptors;

	var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
	  var STACK_TRACE_LIMIT = 'stackTraceLimit';
	  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
	  var path = FULL_NAME.split('.');
	  var ERROR_NAME = path[path.length - 1];
	  var OriginalError = getBuiltIn$i.apply(null, path);

	  if (!OriginalError) return;

	  var OriginalErrorPrototype = OriginalError.prototype;

	  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
	  if (hasOwn$r(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

	  if (!FORCED) return OriginalError;

	  var BaseError = getBuiltIn$i('Error');

	  var WrappedError = wrapper(function (a, b) {
	    var message = normalizeStringArgument$4(IS_AGGREGATE_ERROR ? b : a, undefined);
	    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
	    if (message !== undefined) createNonEnumerableProperty$b(result, 'message', message);
	    installErrorStack$1(result, WrappedError, result.stack, 2);
	    if (this && isPrototypeOf$a(OriginalErrorPrototype, this)) inheritIfRequired$6(result, this, WrappedError);
	    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
	    return result;
	  });

	  WrappedError.prototype = OriginalErrorPrototype;

	  if (ERROR_NAME !== 'Error') {
	    if (setPrototypeOf$7) setPrototypeOf$7(WrappedError, BaseError);
	    else copyConstructorProperties$4(WrappedError, BaseError, { name: true });
	  } else if (DESCRIPTORS$z && STACK_TRACE_LIMIT in OriginalError) {
	    proxyAccessor$1(WrappedError, OriginalError, STACK_TRACE_LIMIT);
	    proxyAccessor$1(WrappedError, OriginalError, 'prepareStackTrace');
	  }

	  copyConstructorProperties$4(WrappedError, OriginalError);

	  try {
	    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
	    if (OriginalErrorPrototype.name !== ERROR_NAME) {
	      createNonEnumerableProperty$b(OriginalErrorPrototype, 'name', ERROR_NAME);
	    }
	    OriginalErrorPrototype.constructor = WrappedError;
	  } catch (error) { /* empty */ }

	  return WrappedError;
	};

	/* eslint-disable no-unused-vars -- required for functions `.length` */
	var $$1H = _export;
	var globalThis$_ = globalThis_1;
	var apply$8 = functionApply;
	var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;

	var WEB_ASSEMBLY = 'WebAssembly';
	var WebAssembly = globalThis$_[WEB_ASSEMBLY];

	// eslint-disable-next-line es/no-error-cause -- feature detection
	var FORCED$o = new Error('e', { cause: 7 }).cause !== 7;

	var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
	  var O = {};
	  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$o);
	  $$1H({ global: true, constructor: true, arity: 1, forced: FORCED$o }, O);
	};

	var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
	  if (WebAssembly && WebAssembly[ERROR_NAME]) {
	    var O = {};
	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$o);
	    $$1H({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED$o }, O);
	  }
	};

	// https://tc39.es/ecma262/#sec-nativeerror
	exportGlobalErrorCauseWrapper('Error', function (init) {
	  return function Error(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('EvalError', function (init) {
	  return function EvalError(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('RangeError', function (init) {
	  return function RangeError(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
	  return function ReferenceError(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
	  return function SyntaxError(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('TypeError', function (init) {
	  return function TypeError(message) { return apply$8(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('URIError', function (init) {
	  return function URIError(message) { return apply$8(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
	  return function CompileError(message) { return apply$8(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
	  return function LinkError(message) { return apply$8(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
	  return function RuntimeError(message) { return apply$8(init, this, arguments); };
	});

	var DESCRIPTORS$y = descriptors;
	var fails$$ = fails$19;
	var anObject$z = anObject$C;
	var normalizeStringArgument$3 = normalizeStringArgument$5;

	var nativeErrorToString = Error.prototype.toString;

	var INCORRECT_TO_STRING$2 = fails$$(function () {
	  if (DESCRIPTORS$y) {
	    // Chrome 32- incorrectly call accessor
	    // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
	    var object = Object.create(Object.defineProperty({}, 'name', { get: function () {
	      return this === object;
	    } }));
	    if (nativeErrorToString.call(object) !== 'true') return true;
	  }
	  // FF10- does not properly handle non-strings
	  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
	    // IE8 does not properly handle defaults
	    || nativeErrorToString.call({}) !== 'Error';
	});

	var errorToString$2 = INCORRECT_TO_STRING$2 ? function toString() {
	  var O = anObject$z(this);
	  var name = normalizeStringArgument$3(O.name, 'Error');
	  var message = normalizeStringArgument$3(O.message);
	  return !name ? message : !message ? name : name + ': ' + message;
	} : nativeErrorToString;

	var defineBuiltIn$j = defineBuiltIn$m;
	var errorToString$1 = errorToString$2;

	var ErrorPrototype$1 = Error.prototype;

	// `Error.prototype.toString` method fix
	// https://tc39.es/ecma262/#sec-error.prototype.tostring
	if (ErrorPrototype$1.toString !== errorToString$1) {
	  defineBuiltIn$j(ErrorPrototype$1, 'toString', errorToString$1);
	}

	var classof$j = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$8 = Array.isArray || function isArray(argument) {
	  return classof$j(argument) === 'Array';
	};

	var $TypeError$q = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$5 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw new $TypeError$q('Maximum allowed index exceeded');
	  return it;
	};

	var DESCRIPTORS$x = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$7 = createPropertyDescriptor$b;

	var createProperty$a = function (object, key, value) {
	  if (DESCRIPTORS$x) definePropertyModule$3.f(object, key, createPropertyDescriptor$7(0, value));
	  else object[key] = value;
	};

	var DESCRIPTORS$w = descriptors;
	var isArray$7 = isArray$8;

	var $TypeError$p = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$w && !function () {
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
	  if (isArray$7(O) && !getOwnPropertyDescriptor$5(O, 'length').writable) {
	    throw new $TypeError$p('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var uncurryThis$$ = functionUncurryThis;
	var fails$_ = fails$19;
	var isCallable$m = isCallable$z;
	var classof$i = classof$l;
	var getBuiltIn$h = getBuiltIn$m;
	var inspectSource$1 = inspectSource$3;

	var noop = function () { /* empty */ };
	var construct$1 = getBuiltIn$h('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$a = uncurryThis$$(constructorRegExp.exec);
	var INCORRECT_TO_STRING$1 = !constructorRegExp.test(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$m(argument)) return false;
	  try {
	    construct$1(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$m(argument)) return false;
	  switch (classof$i(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING$1 || !!exec$a(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$5 = !construct$1 || fails$_(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$6 = isArray$8;
	var isConstructor$4 = isConstructor$5;
	var isObject$t = isObject$D;
	var wellKnownSymbol$t = wellKnownSymbol$z;

	var SPECIES$6 = wellKnownSymbol$t('species');
	var $Array$7 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$6(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$4(C) && (C === $Array$7 || isArray$6(C.prototype))) C = undefined;
	    else if (isObject$t(C)) {
	      C = C[SPECIES$6];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$7 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$3 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$Z = fails$19;
	var wellKnownSymbol$s = wellKnownSymbol$z;
	var V8_VERSION$2 = environmentV8Version;

	var SPECIES$5 = wellKnownSymbol$s('species');

	var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$Z(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$5] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$1G = _export;
	var fails$Y = fails$19;
	var isArray$5 = isArray$8;
	var isObject$s = isObject$D;
	var toObject$i = toObject$k;
	var lengthOfArrayLike$l = lengthOfArrayLike$n;
	var doesNotExceedSafeInteger$4 = doesNotExceedSafeInteger$5;
	var createProperty$9 = createProperty$a;
	var setArrayLength$5 = arraySetLength;
	var arraySpeciesCreate$2 = arraySpeciesCreate$3;
	var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
	var wellKnownSymbol$r = wellKnownSymbol$z;
	var V8_VERSION$1 = environmentV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$r('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$Y(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject$s(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$5(O);
	};

	var FORCED$n = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$1G({ target: 'Array', proto: true, arity: 1, forced: FORCED$n }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$i(this);
	    var A = arraySpeciesCreate$2(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$l(E);
	        doesNotExceedSafeInteger$4(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$9(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$4(n + 1);
	        createProperty$9(A, n++, E);
	      }
	    }
	    setArrayLength$5(A, n);
	    return A;
	  }
	});

	var classofRaw = classofRaw$2;
	var uncurryThis$_ = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis$_(fn);
	};

	var uncurryThis$Z = functionUncurryThisClause;
	var aCallable$m = aCallable$p;
	var NATIVE_BIND$1 = functionBindNative;

	var bind$c = uncurryThis$Z(uncurryThis$Z.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$m(fn);
	  return that === undefined ? fn : NATIVE_BIND$1 ? bind$c(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var bind$b = functionBindContext;
	var IndexedObject$3 = indexedObject;
	var toObject$h = toObject$k;
	var lengthOfArrayLike$k = lengthOfArrayLike$n;
	var arraySpeciesCreate$1 = arraySpeciesCreate$3;
	var createProperty$8 = createProperty$a;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$6 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that) {
	    var O = toObject$h($this);
	    var self = IndexedObject$3(O);
	    var length = lengthOfArrayLike$k(self);
	    var boundFunction = bind$b(callbackfn, that);
	    var index = 0;
	    var resIndex = 0;
	    var target = IS_MAP ? arraySpeciesCreate$1($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate$1($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) createProperty$8(target, index, result);    // map
	        else if (result) switch (TYPE) {
	          case 3: return true;                                // some
	          case 5: return value;                               // find
	          case 6: return index;                               // findIndex
	          case 2: createProperty$8(target, resIndex++, value);  // filter
	        } else switch (TYPE) {
	          case 4: return false;                               // every
	          case 7: createProperty$8(target, resIndex++, value);  // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$6(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$6(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$6(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$6(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$6(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$6(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$6(6)};

	var $$1F = _export;
	var $filter$1 = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$1F({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var call$E = functionCall;
	var anObject$y = anObject$C;
	var getMethod$7 = getMethod$9;

	var iteratorClose$e = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$y(iterator);
	  try {
	    innerResult = getMethod$7(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$E(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$y(innerResult);
	  return value;
	};

	var anObject$x = anObject$C;
	var iteratorClose$d = iteratorClose$e;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$3 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$x(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$d(iterator, 'throw', error);
	  }
	};

	var iterators = Object.create ? Object.create(null) : {};

	var wellKnownSymbol$q = wellKnownSymbol$z;
	var Iterators$3 = iterators;

	var ITERATOR$b = wellKnownSymbol$q('iterator');
	var ArrayPrototype$2 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$3 = function (it) {
	  return it !== undefined && (Iterators$3.Array === it || ArrayPrototype$2[ITERATOR$b] === it);
	};

	var classof$h = classofRaw$2;
	var isNullOrUndefined$5 = isNullOrUndefined$8;
	var getMethod$6 = getMethod$9;
	var wellKnownSymbol$p = wellKnownSymbol$z;

	var ITERATOR$a = wellKnownSymbol$p('iterator');
	var ArrayPrototype$1 = Array.prototype;

	var getIteratorMethodInternal = function (it) {
	  if (!isNullOrUndefined$5(it)) return getMethod$6(it, ITERATOR$a)
	    || getMethod$6(it, '@@iterator')
	    || (classof$h(it) === 'Arguments' ? ArrayPrototype$1[ITERATOR$a] : undefined);
	};

	var call$D = functionCall;
	var isCallable$l = isCallable$z;
	var anObject$w = anObject$C;
	var tryToString$5 = tryToString$7;
	var getIteratorMethod$4 = getIteratorMethodInternal;

	var $TypeError$o = TypeError;

	var getIteratorInternal = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
	  if (isCallable$l(iteratorMethod)) return anObject$w(call$D(iteratorMethod, argument));
	  throw new $TypeError$o(tryToString$5(argument) + ' is not iterable');
	};

	var bind$a = functionBindContext;
	var call$C = functionCall;
	var toObject$g = toObject$k;
	var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
	var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
	var isConstructor$3 = isConstructor$5;
	var lengthOfArrayLike$j = lengthOfArrayLike$n;
	var createProperty$7 = createProperty$a;
	var setArrayLength$4 = arraySetLength;
	var getIterator$3 = getIteratorInternal;
	var getIteratorMethod$3 = getIteratorMethodInternal;
	var iteratorClose$c = iteratorClose$e;
	var doesNotExceedSafeInteger$3 = doesNotExceedSafeInteger$5;

	var $Array$6 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var IS_CONSTRUCTOR = isConstructor$3(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind$a(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var O = toObject$g(arrayLike);
	  var iteratorMethod = getIteratorMethod$3(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$6 && isArrayIteratorMethod$2(iteratorMethod))) {
	    result = IS_CONSTRUCTOR ? new this() : [];
	    iterator = getIterator$3(O, iteratorMethod);
	    next = iterator.next;
	    for (;!(step = call$C(next, iterator)).done; index++) {
	      try {
	        doesNotExceedSafeInteger$3(index);
	      } catch (error) {
	        iteratorClose$c(iterator, 'throw', error);
	      }
	      value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
	      try {
	        createProperty$7(result, index, value);
	      } catch (error) {
	        iteratorClose$c(iterator, 'throw', error);
	      }
	    }
	  } else {
	    length = lengthOfArrayLike$j(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$6(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$7(result, index, value);
	    }
	  }
	  setArrayLength$4(result, index);
	  return result;
	};

	var wellKnownSymbol$o = wellKnownSymbol$z;

	var ITERATOR$9 = wellKnownSymbol$o('iterator');
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
	  iteratorWithReturn[ITERATOR$9] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	    object[ITERATOR$9] = function () {
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

	var $$1E = _export;
	var from = arrayFrom$1;
	var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$3(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$1E({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$5 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$v = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$v = anObject$C;
	var toIndexedObject$9 = toIndexedObject$d;
	var objectKeys$4 = objectKeys$5;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$v && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$v(O);
	  var props = toIndexedObject$9(Properties);
	  var keys = objectKeys$4(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$g = getBuiltIn$m;

	var html$2 = getBuiltIn$g('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */
	var anObject$u = anObject$C;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$6;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$2 = sharedKey$4;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$2 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');

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
	  while (length--) delete NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$2] = anObject$u(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$2] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var wellKnownSymbol$n = wellKnownSymbol$z;
	var create$b = objectCreate;
	var defineProperty$a = objectDefineProperty.f;

	var UNSCOPABLES = wellKnownSymbol$n('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] === undefined) {
	  defineProperty$a(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create$b(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$4 = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $$1D = _export;
	var $includes$1 = arrayIncludes.includes;
	var fails$X = fails$19;
	var addToUnscopables$3 = addToUnscopables$4;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$X(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// Safari 26.4- bug
	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails$X(function () {
	  // eslint-disable-next-line no-sparse-arrays, es/no-array-prototype-includes -- detection
	  return [, 1].includes(undefined, 1);
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$1D({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$3('includes');

	var fails$W = fails$19;

	var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$W(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$1C = _export;
	var uncurryThis$Y = functionUncurryThisClause;
	var $indexOf$1 = arrayIncludes.indexOf;
	var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;

	var nativeIndexOf = uncurryThis$Y([].indexOf);

	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$m = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$4('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$1C({ target: 'Array', proto: true, forced: FORCED$m }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO$1
	      // convert -0 to +0
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf$1(this, searchElement, fromIndex);
	  }
	});

	var objectGetOwnPropertyNamesExternal = {};

	var uncurryThis$X = functionUncurryThis;

	var arraySlice$9 = uncurryThis$X([].slice);

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$g = classofRaw$2;
	var toIndexedObject$8 = toIndexedObject$d;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$8 = arraySlice$9;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$8(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$g(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$8(it));
	};

	var makeBuiltIn = makeBuiltInExports;
	var defineProperty$9 = objectDefineProperty;

	var defineBuiltInAccessor$h = function (target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
	  return defineProperty$9.f(target, name, descriptor);
	};

	var defineProperty$8 = objectDefineProperty.f;
	var hasOwn$q = hasOwnProperty_1;
	var wellKnownSymbol$m = wellKnownSymbol$z;

	var TO_STRING_TAG$4 = wellKnownSymbol$m('toStringTag');

	var setToStringTag$e = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$q(target, TO_STRING_TAG$4)) {
	    defineProperty$8(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
	  }
	};

	var $$1B = _export;
	var globalThis$Z = globalThis_1;
	var call$B = functionCall;
	var uncurryThis$W = functionUncurryThis;
	var DESCRIPTORS$u = descriptors;
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;
	var fails$V = fails$19;
	var hasOwn$p = hasOwnProperty_1;
	var isPrototypeOf$9 = objectIsPrototypeOf;
	var anObject$t = anObject$C;
	var toIndexedObject$7 = toIndexedObject$d;
	var toPropertyKey$2 = toPropertyKey$5;
	var $toString$3 = toString$t;
	var createPropertyDescriptor$6 = createPropertyDescriptor$b;
	var nativeObjectCreate = objectCreate;
	var objectKeys$3 = objectKeys$5;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$1 = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var defineBuiltIn$i = defineBuiltIn$m;
	var defineBuiltInAccessor$g = defineBuiltInAccessor$h;
	var shared$3 = shared$7;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$6;
	var uid$4 = uid$7;
	var wellKnownSymbol$l = wellKnownSymbol$z;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;
	var setToStringTag$d = setToStringTag$e;
	var InternalStateModule$c = internalState;
	var $forEach$2 = arrayIteration.forEach;

	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';

	var setInternalState$b = InternalStateModule$c.set;
	var getInternalState$9 = InternalStateModule$c.getterFor(SYMBOL);

	var ObjectPrototype$4 = Object[PROTOTYPE$1];
	var $Symbol = globalThis$Z.Symbol;
	var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE$1];
	var RangeError$4 = globalThis$Z.RangeError;
	var TypeError$9 = globalThis$Z.TypeError;
	var QObject = globalThis$Z.QObject;
	var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$3.f;
	var nativeDefineProperty$1 = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$d = uncurryThis$W([].push);

	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore = shared$3('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var fallbackDefineProperty = function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$4, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
	    nativeDefineProperty$1(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
	  } return O;
	};

	var setSymbolDescriptor = DESCRIPTORS$u && fails$V(function () {
	  return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
	  setInternalState$b(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$u) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$4) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$t(O);
	  var key = toPropertyKey$2(P);
	  anObject$t(Attributes);
	  if (hasOwn$p(AllSymbols, key)) {
	    // first definition - default non-enumerable; redefinition - preserve existing state
	    if (!('enumerable' in Attributes) ? !hasOwn$p(O, key) || (hasOwn$p(O, HIDDEN) && O[HIDDEN][key]) : !Attributes.enumerable) {
	      if (!hasOwn$p(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$6(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$p(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$6(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$t(O);
	  var properties = toIndexedObject$7(Properties);
	  var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$2(keys, function (key) {
	    if (!DESCRIPTORS$u || call$B($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$2(V);
	  var enumerable = call$B(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$4 && hasOwn$p(AllSymbols, P) && !hasOwn$p(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$p(this, P) || !hasOwn$p(AllSymbols, P) || hasOwn$p(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$7(O);
	  var key = toPropertyKey$2(P);
	  if (it === ObjectPrototype$4 && hasOwn$p(AllSymbols, key) && !hasOwn$p(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
	  if (descriptor && hasOwn$p(AllSymbols, key) && !(hasOwn$p(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$7(O));
	  var result = [];
	  $forEach$2(names, function (key) {
	    if (!hasOwn$p(AllSymbols, key) && !hasOwn$p(hiddenKeys$1, key)) push$d(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$7(O));
	  var result = [];
	  $forEach$2(names, function (key) {
	    if (hasOwn$p(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$p(ObjectPrototype$4, key))) {
	      push$d(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$5) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$9(SymbolPrototype$1, this)) throw new TypeError$9('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
	    var tag = uid$4(description);
	    var setter = function (value) {
	      var $this = this === undefined ? globalThis$Z : this;
	      if ($this === ObjectPrototype$4) call$B(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$p($this, HIDDEN) && hasOwn$p($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$6(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$4)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$u && USE_SETTER) setSymbolDescriptor(ObjectPrototype$4, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype$1 = $Symbol[PROTOTYPE$1];

	  defineBuiltIn$i(SymbolPrototype$1, 'toString', function toString() {
	    return getInternalState$9(this).tag;
	  });

	  defineBuiltIn$i($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$4(description), description);
	  });

	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
	  definePropertyModule$1.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$3.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$l(name), name);
	  };

	  if (DESCRIPTORS$u) {
	    // https://tc39.es/ecma262/#sec-symbol.prototype.description
	    defineBuiltInAccessor$g(SymbolPrototype$1, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$9(this).description;
	      }
	    });
	    {
	      defineBuiltIn$i(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$1, { unsafe: true });
	    }
	  }
	}

	$$1B({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$5, sham: !NATIVE_SYMBOL$5 }, {
	  Symbol: $Symbol
	});

	$forEach$2(objectKeys$3(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$1(name);
	});

	$$1B({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$1B({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5, sham: !DESCRIPTORS$u }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$1B({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$d($Symbol, SYMBOL);

	hiddenKeys$1[HIDDEN] = true;

	var NATIVE_SYMBOL$4 = symbolConstructorDetection;

	/* eslint-disable es/no-symbol -- safe */
	var symbolRegistryDetection = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$1A = _export;
	var getBuiltIn$f = getBuiltIn$m;
	var hasOwn$o = hasOwnProperty_1;
	var toString$r = toString$t;
	var shared$2 = shared$7;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$1A({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$r(key);
	    if (hasOwn$o(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$f('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$1z = _export;
	var hasOwn$n = hasOwnProperty_1;
	var isSymbol$4 = isSymbol$7;
	var tryToString$4 = tryToString$7;
	var shared$1 = shared$7;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$1z({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$4(sym)) throw new TypeError(tryToString$4(sym) + ' is not a symbol');
	    if (hasOwn$n(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var isObject$r = isObject$D;
	var getInternalState$8 = internalState.get;

	var isRawJson = function isRawJSON(O) {
	  if (!isObject$r(O)) return false;
	  var state = getInternalState$8(O);
	  return !!state && state.type === 'RawJSON';
	};

	var uncurryThis$V = functionUncurryThis;

	// `thisNumberValue` abstract operation
	// https://tc39.es/ecma262/#sec-thisnumbervalue
	var thisNumberValue$3 = uncurryThis$V(1.1.valueOf);

	var uncurryThis$U = functionUncurryThis;
	var hasOwn$m = hasOwnProperty_1;

	var $SyntaxError = SyntaxError;
	var $parseInt$3 = parseInt;
	var fromCharCode$5 = String.fromCharCode;
	var at$2 = uncurryThis$U(''.charAt);
	var slice$5 = uncurryThis$U(''.slice);
	var exec$9 = uncurryThis$U(/./.exec);

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
	      var twoChars = slice$5(source, i, i + 2);
	      if (hasOwn$m(codePoints, twoChars)) {
	        value += codePoints[twoChars];
	        i += 2;
	      } else if (twoChars === '\\u') {
	        i += 2;
	        var fourHexDigits = slice$5(source, i, i + 4);
	        if (!exec$9(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
	        value += fromCharCode$5($parseInt$3(fourHexDigits, 16));
	        i += 4;
	      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
	    } else if (chr === '"') {
	      unterminated = false;
	      i++;
	      break;
	    } else {
	      if (exec$9(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
	      value += chr;
	      i++;
	    }
	  }
	  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
	  return { value: value, end: i };
	};

	/* eslint-disable es/no-json -- safe */
	var fails$U = fails$19;

	var nativeRawJson = !fails$U(function () {
	  var unsafeInt = '9007199254740993';
	  // eslint-disable-next-line es/no-json-rawjson -- feature detection
	  var raw = JSON.rawJSON(unsafeInt);
	  // eslint-disable-next-line es/no-json-israwjson -- feature detection
	  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
	});

	var $$1y = _export;
	var getBuiltIn$e = getBuiltIn$m;
	var call$A = functionCall;
	var uncurryThis$T = functionUncurryThis;
	var fails$T = fails$19;
	var isArray$4 = isArray$8;
	var isCallable$k = isCallable$z;
	var isObject$q = isObject$D;
	var create$a = objectCreate;
	var isRawJSON = isRawJson;
	var isSymbol$3 = isSymbol$7;
	var classof$f = classofRaw$2;
	var thisNumberValue$2 = thisNumberValue$3;
	var includes = arrayIncludes.includes;
	var hasOwn$l = hasOwnProperty_1;
	var toString$q = toString$t;
	var parseJSONString$1 = parseJsonString;
	var uid$3 = uid$7;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var NATIVE_RAW_JSON = nativeRawJson;

	var $String$1 = String;
	var $TypeError$n = TypeError;
	var $stringify = getBuiltIn$e('JSON', 'stringify');
	var $BigInt = getBuiltIn$e('BigInt');
	var stringValueOf = uncurryThis$T(''.valueOf);
	var booleanValueOf = uncurryThis$T(true.valueOf);
	var bigIntValueOf = $BigInt && uncurryThis$T($BigInt.prototype.valueOf);
	var exec$8 = uncurryThis$T(/./.exec);
	var charAt$c = uncurryThis$T(''.charAt);
	var charCodeAt$3 = uncurryThis$T(''.charCodeAt);
	var replace$a = uncurryThis$T(''.replace);
	var slice$4 = uncurryThis$T(''.slice);
	var push$c = uncurryThis$T([].push);
	var pop$1 = uncurryThis$T([].pop);
	var numberToString$2 = uncurryThis$T(1.1.toString);

	var surrogates = /[\uD800-\uDFFF]/g;
	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
	var digits = /^\d+$/;

	// a placeholder of a raw JSON value
	var RAW_MARK = uid$3();
	// a prefix of keys of a reordered object, see `createOrderedObject`
	var KEY_MARK = uid$3();
	// the last key of a reordered object, marks the end of its serialization
	var END_MARK = uid$3();
	var RAW_MARK_LENGTH = RAW_MARK.length;
	var KEY_MARK_LENGTH = KEY_MARK.length;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$T(function () {
	  var symbol = getBuiltIn$e('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) !== '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$T(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn$e('JSON', 'isRawJSON') : isRawJSON;

	var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
	  return $stringify(it, function (key, value) {
	    var replaced = call$A(replacer, this, key, value);
	    if (!isSymbol$3(replaced)) return replaced;
	  }, space);
	} : $stringify;

	var fixIllFormedJSON = function (match, offset, string) {
	  var prev = charAt$c(string, offset - 1);
	  var next = charAt$c(string, offset + 1);
	  if (
	    (exec$8(leadingSurrogates, match) && !exec$8(trailingSurrogates, next)) ||
	    (exec$8(trailingSurrogates, match) && !exec$8(leadingSurrogates, prev))
	  ) {
	    return '\\u' + numberToString$2(charCodeAt$3(match, 0), 16);
	  } return match;
	};

	// `PropertyList` of `JSON.stringify`
	// https://tc39.es/ecma262/#sec-json.stringify
	var getPropertyList = function (replacer) {
	  if (!isArray$4(replacer)) return;
	  var rawLength = replacer.length;
	  var propertyList = [];
	  // a null prototype object is used as a set of already added keys to keep the deduplication linear
	  var addedKeys = create$a(null);
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    var key;
	    if (typeof element == 'string') key = element;
	    else if (typeof element == 'number' || classof$f(element) === 'Number' || classof$f(element) === 'String') key = toString$q(element);
	    else continue;
	    if (!hasOwn$l(addedKeys, key)) {
	      addedKeys[key] = true;
	      push$c(propertyList, key);
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
	  var kind = classof$f(it);
	  return (kind === 'Number' && hasInternalSlot(thisNumberValue$2, it))
	    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
	    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
	    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
	};

	// only objects serialized by `SerializeJSONObject` are affected by the property list
	var isSerializedAsObject = function (it) {
	  if (!isObject$q(it) || isCallable$k(it) || isArray$4(it)) return false;
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
	      if (isObject$q(element) || typeof element == 'bigint') {
	        var elementToJSON = element.toJSON;
	        if (isCallable$k(elementToJSON)) element = call$A(elementToJSON, element, key);
	      } return element;
	    }
	  };
	};

	// own keys of objects are sorted - integer-like keys are moved to the beginning,
	// so such keys should be marked and restored in the serialized string
	var getKeyPrefix = function (propertyList) {
	  for (var i = 0, length = propertyList.length; i < length; i++) {
	    if (exec$8(digits, propertyList[i])) return KEY_MARK;
	  } return '';
	};

	// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
	var createOrderedObject = function (value, propertyList, keyPrefix) {
	  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
	  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
	  var ordered = create$a(null);
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
	if ($stringify) $$1y({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
	  stringify: function stringify(text, replacer, space) {
	    var replacerFunction = isCallable$k(replacer) ? replacer : undefined;
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
	        else if (this !== currentOrdered && !isArray$4(this) && !includes(propertyList, key)) return;
	      } else if (replacerFunction) value = call$A(replacerFunction, this, key, value);

	      if (isRawJSONValue(value)) {
	        if (NATIVE_RAW_JSON) return value;
	        marked = true;
	        return RAW_MARK + (push$c(rawStrings, value.rawJSON) - 1);
	      }

	      if (propertyList && isSerializedAsObject(value)) {
	        // reordered objects are new each time, so cycles should be detected before the engine does it
	        if (includes(openObjects, value)) throw new $TypeError$n('Converting circular structure to JSON');
	        var ordered = createOrderedObject(value, propertyList, keyPrefix);
	        push$c(openObjects, value);
	        push$c(parentOrdered, currentOrdered);
	        currentOrdered = ordered;
	        if (keyPrefix) marked = true;
	        return ordered;
	      }

	      return value;
	    }, space);

	    if (typeof json != 'string') return json;

	    if (ILL_FORMED_UNICODE) json = replace$a(json, surrogates, fixIllFormedJSON);

	    if (!marked) return json;

	    var result = '';
	    var length = json.length;

	    for (var i = 0; i < length; i++) {
	      var chr = charAt$c(json, i);
	      if (chr === '"') {
	        var end = parseJSONString$1(json, ++i).end - 1;
	        var string = slice$4(json, i, end);
	        if (slice$4(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice$4(string, RAW_MARK_LENGTH)];
	        else if (slice$4(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice$4(string, KEY_MARK_LENGTH) + '"';
	        else result += '"' + string + '"';
	        i = end;
	      } else result += chr;
	    }

	    return result;
	  }
	});

	var $$1x = _export;
	var NATIVE_SYMBOL$2 = symbolConstructorDetection;
	var fails$S = fails$19;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var toObject$f = toObject$k;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$l = !NATIVE_SYMBOL$2 || fails$S(function () { getOwnPropertySymbolsModule$1.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$1x({ target: 'Object', stat: true, forced: FORCED$l }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$f(it)) : [];
	  }
	});

	var $$1w = _export;
	var DESCRIPTORS$t = descriptors;
	var globalThis$Y = globalThis_1;
	var call$z = functionCall;
	var uncurryThis$S = functionUncurryThis;
	var hasOwn$k = hasOwnProperty_1;
	var isCallable$j = isCallable$z;
	var isPrototypeOf$8 = objectIsPrototypeOf;
	var toString$p = toString$t;
	var defineBuiltInAccessor$f = defineBuiltInAccessor$h;
	var copyConstructorProperties$3 = copyConstructorProperties$6;

	var NativeSymbol = globalThis$Y.Symbol;
	var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

	if (DESCRIPTORS$t && isCallable$j(NativeSymbol) && (!('description' in SymbolPrototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$p(arguments[0]);
	    var result = isPrototypeOf$8(SymbolPrototype, this)
	      // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };

	  copyConstructorProperties$3(SymbolWrapper, NativeSymbol);
	  // wrap Symbol.for for correct handling of empty string descriptions
	  var nativeFor = SymbolWrapper['for'];
	  SymbolWrapper['for'] = { 'for': function (key) {
	    var stringKey = toString$p(key);
	    var symbol = call$z(nativeFor, this, stringKey);
	    if (stringKey === '') EmptyStringDescriptionStore[symbol] = true;
	    return symbol;
	  } }['for'];
	  SymbolWrapper.prototype = SymbolPrototype;
	  SymbolPrototype.constructor = SymbolWrapper;

	  var NATIVE_SYMBOL$1 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$S(SymbolPrototype.valueOf);
	  var symbolDescriptiveString = uncurryThis$S(SymbolPrototype.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$9 = uncurryThis$S(''.replace);
	  var stringSlice$d = uncurryThis$S(''.slice);

	  defineBuiltInAccessor$f(SymbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$k(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL$1 ? stringSlice$d(string, 7, -1) : replace$9(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $$1w({ global: true, constructor: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	var fails$R = fails$19;

	var correctPrototypeGetter = !fails$R(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$j = hasOwnProperty_1;
	var isCallable$i = isCallable$z;
	var toObject$e = toObject$k;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype$3 = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$e(O);
	  if (hasOwn$j(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$i(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$1 ? ObjectPrototype$3 : null;
	};

	var fails$Q = fails$19;
	var isCallable$h = isCallable$z;
	var isObject$p = isObject$D;
	var getPrototypeOf$6 = objectGetPrototypeOf$1;
	var defineBuiltIn$h = defineBuiltIn$m;
	var wellKnownSymbol$k = wellKnownSymbol$z;

	var ITERATOR$8 = wellKnownSymbol$k('iterator');
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
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$6(getPrototypeOf$6(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$p(IteratorPrototype$4) || fails$Q(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$4[ITERATOR$8].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$h(IteratorPrototype$4[ITERATOR$8])) {
	  defineBuiltIn$h(IteratorPrototype$4, ITERATOR$8, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$4,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;
	var create$9 = objectCreate;
	var createPropertyDescriptor$5 = createPropertyDescriptor$b;
	var setToStringTag$c = setToStringTag$e;
	var Iterators$2 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$9(IteratorPrototype$3, { next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$c(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$2[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$1v = _export;
	var call$y = functionCall;
	var FunctionName$1 = functionName;
	var isCallable$g = isCallable$z;
	var createIteratorConstructor$1 = iteratorCreateConstructor;
	var getPrototypeOf$5 = objectGetPrototypeOf$1;
	var setPrototypeOf$6 = objectSetPrototypeOf;
	var setToStringTag$b = setToStringTag$e;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$g;
	var defineBuiltIn$g = defineBuiltIn$m;
	var wellKnownSymbol$j = wellKnownSymbol$z;
	var Iterators$1 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
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
	    CurrentIteratorPrototype = getPrototypeOf$5(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf$5(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (setPrototypeOf$6) {
	          setPrototypeOf$6(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (!isCallable$g(CurrentIteratorPrototype[ITERATOR$7])) {
	          defineBuiltIn$g(CurrentIteratorPrototype, ITERATOR$7, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$b(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$3 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty$a(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$y(nativeIterator, this); };
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
	        defineBuiltIn$g(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$1v({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
	    defineBuiltIn$g(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$1[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$5 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$6 = toIndexedObject$d;
	var addToUnscopables$2 = addToUnscopables$4;
	var Iterators = iterators;
	var InternalStateModule$b = internalState;
	var defineProperty$7 = objectDefineProperty.f;
	var defineIterator$2 = iteratorDefine;
	var createIterResultObject$4 = createIterResultObject$5;
	var DESCRIPTORS$s = descriptors;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$a = InternalStateModule$b.set;
	var getInternalState$7 = InternalStateModule$b.getterFor(ARRAY_ITERATOR);

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
	var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$a(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$6(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$7(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = null;
	    return createIterResultObject$4(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$4(index, false);
	    case 'values': return createIterResultObject$4(target[index], false);
	  } return createIterResultObject$4([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators.Arguments = Iterators.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$2('keys');
	addToUnscopables$2('values');
	addToUnscopables$2('entries');

	// V8 ~ Chrome 45- bug
	if (DESCRIPTORS$s && values.name !== 'values') try {
	  defineProperty$7(values, 'name', { value: 'values' });
	} catch (error) { /* empty */ }

	var $$1u = _export;
	var $map$1 = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$1u({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1t = _export;
	var toObject$d = toObject$k;
	var lengthOfArrayLike$i = lengthOfArrayLike$n;
	var setArrayLength$3 = arraySetLength;
	var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$5;
	var fails$P = fails$19;

	var INCORRECT_TO_LENGTH = fails$P(function () {
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

	var FORCED$k = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

	// `Array.prototype.push` method
	// https://tc39.es/ecma262/#sec-array.prototype.push
	$$1t({ target: 'Array', proto: true, arity: 1, forced: FORCED$k }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  push: function push(item) {
	    var O = toObject$d(this);
	    var len = lengthOfArrayLike$i(O);
	    var argCount = arguments.length;
	    doesNotExceedSafeInteger$2(len + argCount);
	    for (var i = 0; i < argCount; i++) {
	      O[len] = arguments[i];
	      len++;
	    }
	    setArrayLength$3(O, len);
	    return len;
	  }
	});

	var $$1s = _export;
	var isArray$3 = isArray$8;
	var isConstructor$2 = isConstructor$5;
	var isObject$o = isObject$D;
	var toAbsoluteIndex$5 = toAbsoluteIndex$7;
	var lengthOfArrayLike$h = lengthOfArrayLike$n;
	var toIndexedObject$5 = toIndexedObject$d;
	var createProperty$6 = createProperty$a;
	var setArrayLength$2 = arraySetLength;
	var wellKnownSymbol$i = wellKnownSymbol$z;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
	var nativeSlice = arraySlice$9;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

	var SPECIES$4 = wellKnownSymbol$i('species');
	var $Array$5 = Array;
	var max$5 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$1s({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$5(this);
	    var length = lengthOfArrayLike$h(O);
	    var k = toAbsoluteIndex$5(start, length);
	    var fin = toAbsoluteIndex$5(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$3(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$2(Constructor) && (Constructor === $Array$5 || isArray$3(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$o(Constructor)) {
	        Constructor = Constructor[SPECIES$4];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$5 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$5 : Constructor)(max$5(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$6(result, n, O[k]);
	    setArrayLength$2(result, n);
	    return result;
	  }
	});

	var tryToString$3 = tryToString$7;

	var $TypeError$m = TypeError;

	var deletePropertyOrThrow$4 = function (O, P) {
	  if (!delete O[P]) throw new $TypeError$m('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
	};

	var $$1r = _export;
	var toObject$c = toObject$k;
	var toAbsoluteIndex$4 = toAbsoluteIndex$7;
	var toIntegerOrInfinity$a = toIntegerOrInfinity$d;
	var lengthOfArrayLike$g = lengthOfArrayLike$n;
	var setArrayLength$1 = arraySetLength;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$5;
	var arraySpeciesCreate = arraySpeciesCreate$3;
	var createProperty$5 = createProperty$a;
	var deletePropertyOrThrow$3 = deletePropertyOrThrow$4;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

	var max$4 = Math.max;
	var min$8 = Math.min;

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$1r({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$c(this);
	    var len = lengthOfArrayLike$g(O);
	    var actualStart = toAbsoluteIndex$4(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$8(max$4(toIntegerOrInfinity$a(deleteCount), 0), len - actualStart);
	    }
	    doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$5(A, k, O[from]);
	    }
	    setArrayLength$1(A, actualDeleteCount);
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow$3(O, to);
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow$3(O, k - 1);
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow$3(O, to);
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    setArrayLength$1(O, len - actualDeleteCount + insertCount);
	    return A;
	  }
	});

	var $$1q = _export;
	var toObject$b = toObject$k;
	var lengthOfArrayLike$f = lengthOfArrayLike$n;
	var setArrayLength = arraySetLength;
	var deletePropertyOrThrow$2 = deletePropertyOrThrow$4;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$5;

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

	var FORCED$j = INCORRECT_RESULT || !properErrorOnNonWritableLength();

	// `Array.prototype.unshift` method
	// https://tc39.es/ecma262/#sec-array.prototype.unshift
	$$1q({ target: 'Array', proto: true, arity: 1, forced: FORCED$j }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  unshift: function unshift(item) {
	    var O = toObject$b(this);
	    var len = lengthOfArrayLike$f(O);
	    var argCount = arguments.length;
	    if (argCount) {
	      doesNotExceedSafeInteger(len + argCount);
	      var k = len;
	      while (k--) {
	        var to = k + argCount;
	        if (k in O) O[to] = O[k];
	        else deletePropertyOrThrow$2(O, to);
	      }
	      for (var j = 0; j < argCount; j++) {
	        O[j] = arguments[j];
	      }
	    } return setArrayLength(O, len + argCount);
	  }
	});

	var $$1p = _export;
	var fails$O = fails$19;
	var toObject$a = toObject$k;
	var toPrimitive$2 = toPrimitive$4;

	var FORCED$i = fails$O(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	});

	// `Date.prototype.toJSON` method
	// https://tc39.es/ecma262/#sec-date.prototype.tojson
	$$1p({ target: 'Date', proto: true, forced: FORCED$i }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  toJSON: function toJSON(key) {
	    var O = toObject$a(this);
	    var pv = toPrimitive$2(O, 'number');
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

	var anObject$s = anObject$C;
	var ordinaryToPrimitive = ordinaryToPrimitive$2;

	var $TypeError$l = TypeError;

	// `Date.prototype[@@toPrimitive](hint)` method implementation
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	var dateToPrimitive$1 = function (hint) {
	  anObject$s(this);
	  if (hint === 'string' || hint === 'default') hint = 'string';
	  else if (hint !== 'number') throw new $TypeError$l('Incorrect hint');
	  return ordinaryToPrimitive(this, hint);
	};

	var hasOwn$i = hasOwnProperty_1;
	var defineBuiltIn$f = defineBuiltIn$m;
	var dateToPrimitive = dateToPrimitive$1;
	var wellKnownSymbol$h = wellKnownSymbol$z;

	var TO_PRIMITIVE = wellKnownSymbol$h('toPrimitive');
	var DatePrototype = Date.prototype;

	// `Date.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	if (!hasOwn$i(DatePrototype, TO_PRIMITIVE)) {
	  defineBuiltIn$f(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
	}

	var isPrototypeOf$7 = objectIsPrototypeOf;

	var $TypeError$k = TypeError;

	var anInstance$b = function (it, Prototype) {
	  if (isPrototypeOf$7(Prototype, it)) return it;
	  throw new $TypeError$k('Incorrect invocation');
	};

	var $$1o = _export;
	var globalThis$X = globalThis_1;
	var anInstance$a = anInstance$b;
	var anObject$r = anObject$C;
	var isCallable$f = isCallable$z;
	var getPrototypeOf$4 = objectGetPrototypeOf$1;
	var defineBuiltInAccessor$e = defineBuiltInAccessor$h;
	var createProperty$4 = createProperty$a;
	var fails$N = fails$19;
	var hasOwn$h = hasOwnProperty_1;
	var wellKnownSymbol$g = wellKnownSymbol$z;
	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var DESCRIPTORS$r = descriptors;

	var CONSTRUCTOR = 'constructor';
	var ITERATOR$6 = 'Iterator';
	var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');

	var $TypeError$j = TypeError;
	var NativeIterator = globalThis$X[ITERATOR$6];

	// FF56- have non-standard global helper `Iterator`
	var FORCED$h = !isCallable$f(NativeIterator)
	  || NativeIterator.prototype !== IteratorPrototype$1
	  // FF44- non-standard `Iterator` passes previous tests
	  || !fails$N(function () { NativeIterator({}); });

	var IteratorConstructor = function Iterator() {
	  anInstance$a(this, IteratorPrototype$1);
	  if (getPrototypeOf$4(this) === IteratorPrototype$1) throw new $TypeError$j('Abstract class Iterator not directly constructable');
	};

	var defineIteratorPrototypeAccessor = function (key, value) {
	  if (DESCRIPTORS$r) {
	    defineBuiltInAccessor$e(IteratorPrototype$1, key, {
	      configurable: true,
	      get: function () {
	        return value;
	      },
	      set: function (replacement) {
	        anObject$r(this);
	        if (this === IteratorPrototype$1) throw new $TypeError$j("You can't redefine this property");
	        if (hasOwn$h(this, key)) this[key] = replacement;
	        else createProperty$4(this, key, replacement);
	      }
	    });
	  } else IteratorPrototype$1[key] = value;
	};

	if (!hasOwn$h(IteratorPrototype$1, TO_STRING_TAG$3)) defineIteratorPrototypeAccessor(TO_STRING_TAG$3, ITERATOR$6);

	if (FORCED$h || !hasOwn$h(IteratorPrototype$1, CONSTRUCTOR) || IteratorPrototype$1[CONSTRUCTOR] === Object) {
	  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
	}

	IteratorConstructor.prototype = IteratorPrototype$1;

	// `Iterator` constructor
	// https://tc39.es/ecma262/#sec-iterator
	$$1o({ global: true, constructor: true, forced: FORCED$h }, {
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

	var defineBuiltIn$e = defineBuiltIn$m;

	var defineBuiltIns$6 = function (target, src, options) {
	  for (var key in src) defineBuiltIn$e(target, key, src[key], options);
	  return target;
	};

	var iteratorClose$b = iteratorClose$e;

	var iteratorCloseAll$1 = function (iters, kind, value) {
	  for (var i = iters.length - 1; i >= 0; i--) {
	    if (iters[i] === undefined) continue;
	    try {
	      value = iteratorClose$b(iters[i].iterator, kind, value);
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

	var call$x = functionCall;
	var create$8 = objectCreate;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$g;
	var defineBuiltIns$5 = defineBuiltIns$6;
	var wellKnownSymbol$f = wellKnownSymbol$z;
	var InternalStateModule$a = internalState;
	var getMethod$5 = getMethod$9;
	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var createIterResultObject$3 = createIterResultObject$5;
	var iteratorClose$a = iteratorClose$e;
	var iteratorCloseAll = iteratorCloseAll$1;
	var cleanupState = iteratorCleanupState;

	var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');
	var ITERATOR_HELPER = 'IteratorHelper';
	var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
	var NORMAL = 'normal';
	var THROW = 'throw';
	var setInternalState$9 = InternalStateModule$a.set;

	var createIteratorProxyPrototype = function (IS_ITERATOR) {
	  var getInternalState = InternalStateModule$a.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

	  return defineBuiltIns$5(create$8(IteratorPrototype), {
	    next: function next() {
	      var state = getInternalState(this);
	      // for simplification:
	      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
	      //   for `%IteratorHelperPrototype%.next` - just a value
	      if (IS_ITERATOR) return state.nextHandler();
	      if (state.done) return createIterResultObject$3(undefined, true);
	      try {
	        var result = state.nextHandler();
	        if (state.done) cleanupState(state);
	        return state.returnHandlerResult ? result : createIterResultObject$3(result, state.done);
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
	        var returnMethod = getMethod$5(iterator, 'return');
	        return returnMethod ? call$x(returnMethod, iterator) : createIterResultObject$3(undefined, true);
	      }
	      cleanupState(state);
	      if (done) return createIterResultObject$3(undefined, true);
	      if (inner) try {
	        iteratorClose$a(inner.iterator, NORMAL);
	      } catch (error) {
	        return iteratorClose$a(iterator, THROW, error);
	      }
	      if (openIters) try {
	        iteratorCloseAll(openIters, NORMAL);
	      } catch (error) {
	        if (iterator) return iteratorClose$a(iterator, THROW, error);
	        throw error;
	      }
	      if (iterator) iteratorClose$a(iterator, NORMAL);
	      return createIterResultObject$3(undefined, true);
	    }
	  });
	};

	var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
	var IteratorHelperPrototype = createIteratorProxyPrototype(false);

	createNonEnumerableProperty$9(IteratorHelperPrototype, TO_STRING_TAG$2, 'Iterator Helper');

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
	    setInternalState$9(this, state);
	  };

	  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

	  return IteratorProxy;
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

	var globalThis$W = globalThis_1;

	// https://github.com/tc39/ecma262/pull/3467
	var iteratorHelperWithoutClosingOnEarlyError$7 = function (METHOD_NAME, ExpectedError) {
	  var Iterator = globalThis$W.Iterator;
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

	var $$1n = _export;
	var call$w = functionCall;
	var aCallable$l = aCallable$p;
	var anObject$q = anObject$C;
	var getIteratorDirect$8 = getIteratorDirect$9;
	var createIteratorProxy$1 = iteratorCreateProxy;
	var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
	var iteratorClose$9 = iteratorClose$e;
	var iteratorHelperThrowsOnInvalidIterator$1 = iteratorHelperThrowsOnInvalidIterator$2;
	var iteratorHelperWithoutClosingOnEarlyError$6 = iteratorHelperWithoutClosingOnEarlyError$7;

	var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !iteratorHelperThrowsOnInvalidIterator$1('filter', function () { /* empty */ });
	var filterWithoutClosingOnEarlyError = !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
	  && iteratorHelperWithoutClosingOnEarlyError$6('filter', TypeError);

	var FORCED$g = FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

	var IteratorProxy$1 = createIteratorProxy$1(function () {
	  var iterator = this.iterator;
	  var predicate = this.predicate;
	  var next = this.next;
	  var result, done, value;
	  while (true) {
	    result = anObject$q(call$w(next, iterator));
	    done = this.done = !!result.done;
	    if (done) return;
	    value = result.value;
	    if (callWithSafeIterationClosing$1(iterator, predicate, [value, this.counter++], true)) return value;
	  }
	});

	// `Iterator.prototype.filter` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.filter
	$$1n({ target: 'Iterator', proto: true, real: true, forced: FORCED$g }, {
	  filter: function filter(predicate) {
	    anObject$q(this);
	    try {
	      aCallable$l(predicate);
	    } catch (error) {
	      iteratorClose$9(this, 'throw', error);
	    }

	    if (filterWithoutClosingOnEarlyError) return call$w(filterWithoutClosingOnEarlyError, this, predicate);

	    return new IteratorProxy$1(getIteratorDirect$8(this), {
	      predicate: predicate
	    });
	  }
	});

	var bind$9 = functionBindContext;
	var call$v = functionCall;
	var anObject$p = anObject$C;
	var tryToString$2 = tryToString$7;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
	var lengthOfArrayLike$e = lengthOfArrayLike$n;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var getIterator$2 = getIteratorInternal;
	var getIteratorMethod$2 = getIteratorMethodInternal;
	var iteratorClose$8 = iteratorClose$e;

	var $TypeError$i = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$f = function (iterable, unboundFunction, options) {
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
	    if ($iterator) iteratorClose$8($iterator, 'normal');
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$p(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$2(iterable);
	    if (!iterFn) throw new $TypeError$i(tryToString$2(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$e(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator$2(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$v(next, iterator)).done) {
	    // `IteratorValue` errors should propagate without closing the iterator
	    var value = step.value;
	    try {
	      result = callFn(value);
	    } catch (error) {
	      if (iterator) iteratorClose$8(iterator, 'throw', error);
	      else throw error;
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var $$1m = _export;
	var call$u = functionCall;
	var iterate$e = iterate$f;
	var aCallable$k = aCallable$p;
	var anObject$o = anObject$C;
	var getIteratorDirect$7 = getIteratorDirect$9;
	var iteratorClose$7 = iteratorClose$e;
	var iteratorHelperWithoutClosingOnEarlyError$5 = iteratorHelperWithoutClosingOnEarlyError$7;

	var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$5('forEach', TypeError);

	// `Iterator.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
	$$1m({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
	  forEach: function forEach(fn) {
	    anObject$o(this);
	    try {
	      aCallable$k(fn);
	    } catch (error) {
	      iteratorClose$7(this, 'throw', error);
	    }

	    if (forEachWithoutClosingOnEarlyError) return call$u(forEachWithoutClosingOnEarlyError, this, fn);

	    var record = getIteratorDirect$7(this);
	    var counter = 0;
	    iterate$e(record, function (value) {
	      fn(value, counter++);
	    }, { IS_RECORD: true });
	  }
	});

	var $$1l = _export;
	var call$t = functionCall;
	var aCallable$j = aCallable$p;
	var anObject$n = anObject$C;
	var getIteratorDirect$6 = getIteratorDirect$9;
	var createIteratorProxy = iteratorCreateProxy;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$3;
	var iteratorClose$6 = iteratorClose$e;
	var iteratorHelperThrowsOnInvalidIterator = iteratorHelperThrowsOnInvalidIterator$2;
	var iteratorHelperWithoutClosingOnEarlyError$4 = iteratorHelperWithoutClosingOnEarlyError$7;

	var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
	var mapWithoutClosingOnEarlyError = !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
	  && iteratorHelperWithoutClosingOnEarlyError$4('map', TypeError);

	var FORCED$f = MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

	var IteratorProxy = createIteratorProxy(function () {
	  var iterator = this.iterator;
	  var result = anObject$n(call$t(this.next, iterator));
	  var done = this.done = !!result.done;
	  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
	});

	// `Iterator.prototype.map` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.map
	$$1l({ target: 'Iterator', proto: true, real: true, forced: FORCED$f }, {
	  map: function map(mapper) {
	    anObject$n(this);
	    try {
	      aCallable$j(mapper);
	    } catch (error) {
	      iteratorClose$6(this, 'throw', error);
	    }

	    if (mapWithoutClosingOnEarlyError) return call$t(mapWithoutClosingOnEarlyError, this, mapper);

	    return new IteratorProxy(getIteratorDirect$6(this), {
	      mapper: mapper
	    });
	  }
	});

	var internalMetadata = {exports: {}};

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails$M = fails$19;

	var arrayBufferNonExtensible = fails$M(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$L = fails$19;
	var isObject$n = isObject$D;
	var classof$e = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$3 = fails$L(function () { $isExtensible(1); });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$3 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$n(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$e(it) === 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var fails$K = fails$19;

	var freezing = !fails$K(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$1k = _export;
	var uncurryThis$R = functionUncurryThis;
	var hiddenKeys = hiddenKeys$6;
	var isObject$m = isObject$D;
	var hasOwn$g = hasOwnProperty_1;
	var defineProperty$6 = objectDefineProperty.f;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible$1 = objectIsExtensible;
	var uid$2 = uid$7;
	var FREEZING$2 = freezing;

	var REQUIRED = false;
	var METADATA = uid$2('meta');
	var id$1 = 0;

	var setMetadata = function (it) {
	  defineProperty$6(it, METADATA, { value: {
	    objectID: 'O' + id$1++, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey$1 = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$m(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$g(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData$1 = function (it, create) {
	  if (!hasOwn$g(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze$1 = function (it) {
	  if (FREEZING$2 && REQUIRED && isExtensible$1(it) && !hasOwn$g(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () { /* empty */ };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis$R([].splice);
	  var test = {};
	  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };

	    $$1k({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};

	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData$1,
	  onFreeze: onFreeze$1
	};

	hiddenKeys[METADATA] = true;

	var internalMetadataExports = internalMetadata.exports;

	var $$1j = _export;
	var globalThis$V = globalThis_1;
	var uncurryThis$Q = functionUncurryThis;
	var isForced$3 = isForced_1;
	var defineBuiltIn$d = defineBuiltIn$m;
	var InternalMetadataModule$1 = internalMetadataExports;
	var iterate$d = iterate$f;
	var anInstance$9 = anInstance$b;
	var isCallable$e = isCallable$z;
	var isNullOrUndefined$4 = isNullOrUndefined$8;
	var isObject$l = isObject$D;
	var fails$J = fails$19;
	var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
	var setToStringTag$a = setToStringTag$e;
	var inheritIfRequired$5 = inheritIfRequired$7;

	var collection$4 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = globalThis$V[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var uncurriedNativeMethod = uncurryThis$Q(NativePrototype[KEY]);
	    defineBuiltIn$d(NativePrototype, KEY,
	      KEY === 'add' ? function add(value) {
	        uncurriedNativeMethod(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY === 'delete' ? function (key) {
	        return IS_WEAK && !isObject$l(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'get' ? function get(key) {
	        return IS_WEAK && !isObject$l(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'has' ? function has(key) {
	        return IS_WEAK && !isObject$l(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  var REPLACE = isForced$3(
	    CONSTRUCTOR_NAME,
	    !isCallable$e(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$J(function () {
	      new NativeConstructor().entries().next();
	    }))
	  );

	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.enable();
	  } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails$J(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails$J(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$9(dummy, NativePrototype);
	        var that = inheritIfRequired$5(new NativeConstructor(), dummy, Constructor);
	        if (!isNullOrUndefined$4(iterable)) iterate$d(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$1j({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

	  setToStringTag$a(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var getBuiltIn$d = getBuiltIn$m;
	var defineBuiltInAccessor$d = defineBuiltInAccessor$h;
	var wellKnownSymbol$e = wellKnownSymbol$z;
	var DESCRIPTORS$q = descriptors;

	var SPECIES$3 = wellKnownSymbol$e('species');

	var setSpecies$5 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$d(CONSTRUCTOR_NAME);

	  if (DESCRIPTORS$q && Constructor && !Constructor[SPECIES$3]) {
	    defineBuiltInAccessor$d(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var create$7 = objectCreate;
	var defineBuiltInAccessor$c = defineBuiltInAccessor$h;
	var defineBuiltIns$4 = defineBuiltIns$6;
	var bind$8 = functionBindContext;
	var anInstance$8 = anInstance$b;
	var isNullOrUndefined$3 = isNullOrUndefined$8;
	var iterate$c = iterate$f;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$2 = createIterResultObject$5;
	var setSpecies$4 = setSpecies$5;
	var DESCRIPTORS$p = descriptors;
	var fastKey = internalMetadataExports.fastKey;
	var InternalStateModule$9 = internalState;

	var setInternalState$8 = InternalStateModule$9.set;
	var internalStateGetterFor$1 = InternalStateModule$9.getterFor;

	var collectionStrong$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$8(that, Prototype);
	      setInternalState$8(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create$7(null),
	        first: null,
	        last: null,
	        size: 0
	      });
	      if (!DESCRIPTORS$p) that.size = 0;
	      if (!isNullOrUndefined$3(iterable)) iterate$c(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: null,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$p) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key === key) return entry;
	      }
	    };

	    defineBuiltIns$4(Prototype, {
	      // `{ Map, Set }.prototype.clear()` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.clear
	      // https://tc39.es/ecma262/#sec-set.prototype.clear
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = null;
	          entry = entry.next;
	        }
	        state.first = state.last = null;
	        state.index = create$7(null);
	        if (DESCRIPTORS$p) state.size = 0;
	        else that.size = 0;
	      },
	      // `{ Map, Set }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.delete
	      // https://tc39.es/ecma262/#sec-set.prototype.delete
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first === entry) state.first = next;
	          if (state.last === entry) state.last = prev;
	          if (DESCRIPTORS$p) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // `{ Map, Set}.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.has
	      // https://tc39.es/ecma262/#sec-set.prototype.has
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    defineBuiltIns$4(Prototype, IS_MAP ? {
	      // `Map.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.get
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // `Map.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.set
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // `Set.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-set.prototype.add
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$p) defineBuiltInAccessor$c(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
	    // https://tc39.es/ecma262/#sec-map.prototype.entries
	    // https://tc39.es/ecma262/#sec-map.prototype.keys
	    // https://tc39.es/ecma262/#sec-map.prototype.values
	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
	    // https://tc39.es/ecma262/#sec-set.prototype.entries
	    // https://tc39.es/ecma262/#sec-set.prototype.keys
	    // https://tc39.es/ecma262/#sec-set.prototype.values
	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
	    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$8(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: null
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = null;
	        return createIterResultObject$2(undefined, true);
	      }
	      // return step by kind
	      if (kind === 'keys') return createIterResultObject$2(entry.key, false);
	      if (kind === 'values') return createIterResultObject$2(entry.value, false);
	      return createIterResultObject$2([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // `{ Map, Set }.prototype[@@species]` accessors
	    // https://tc39.es/ecma262/#sec-get-map-@@species
	    // https://tc39.es/ecma262/#sec-get-set-@@species
	    setSpecies$4(CONSTRUCTOR_NAME);
	  }
	};

	var collection$3 = collection$4;
	var collectionStrong$1 = collectionStrong$2;

	// `Map` constructor
	// https://tc39.es/ecma262/#sec-map-objects
	collection$3('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong$1);

	var uncurryThis$P = functionUncurryThis;

	// eslint-disable-next-line es/no-map -- safe
	var MapPrototype = Map.prototype;

	var mapHelpers = {
	  // eslint-disable-next-line es/no-map -- safe
	  Map: Map,
	  set: uncurryThis$P(MapPrototype.set),
	  get: uncurryThis$P(MapPrototype.get),
	  has: uncurryThis$P(MapPrototype.has),
	  remove: uncurryThis$P(MapPrototype['delete'])};

	var $$1i = _export;
	var MapHelpers$2 = mapHelpers;
	var IS_PURE$4 = isPure;

	var get$4 = MapHelpers$2.get;
	var has$a = MapHelpers$2.has;
	var set$6 = MapHelpers$2.set;

	// `Map.prototype.getOrInsert` method
	// https://tc39.es/ecma262/#sec-map.prototype.getorinsert
	$$1i({ target: 'Map', proto: true, real: true, forced: IS_PURE$4 }, {
	  getOrInsert: function getOrInsert(key, value) {
	    if (has$a(this, key)) return get$4(this, key);
	    set$6(this, key, value);
	    return value;
	  }
	});

	var $$1h = _export;
	var aCallable$i = aCallable$p;
	var MapHelpers$1 = mapHelpers;
	var IS_PURE$3 = isPure;

	var get$3 = MapHelpers$1.get;
	var has$9 = MapHelpers$1.has;
	var set$5 = MapHelpers$1.set;

	// `Map.prototype.getOrInsertComputed` method
	// https://tc39.es/ecma262/#sec-map.prototype.getorinsertcomputed
	$$1h({ target: 'Map', proto: true, real: true, forced: IS_PURE$3 }, {
	  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
	    var hasKey = has$9(this, key);
	    aCallable$i(callbackfn);
	    if (hasKey) return get$3(this, key);
	    // CanonicalizeKeyedCollectionKey
	    if (key === 0 && 1 / key === -Infinity) key = 0;
	    var value = callbackfn(key);
	    set$5(this, key, value);
	    return value;
	  }
	});

	var $$1g = _export;

	var floor$a = Math.floor;
	var log$1 = Math.log;
	var LOG2E = Math.LOG2E;

	// `Math.clz32` method
	// https://tc39.es/ecma262/#sec-math.clz32
	$$1g({ target: 'Math', stat: true }, {
	  clz32: function clz32(x) {
	    var n = x >>> 0;
	    return n ? 31 - floor$a(log$1(n + 0.5) * LOG2E) : 32;
	  }
	});

	// a string of all valid unicode whitespaces
	var whitespaces$5 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$O = functionUncurryThis;
	var requireObjectCoercible$b = requireObjectCoercible$f;
	var toString$o = toString$t;
	var whitespaces$4 = whitespaces$5;

	var replace$8 = uncurryThis$O(''.replace);
	var ltrim = RegExp('^[' + whitespaces$4 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$4 + '])[' + whitespaces$4 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$5 = function (TYPE) {
	  return function ($this) {
	    var string = toString$o(requireObjectCoercible$b($this));
	    if (TYPE & 1) string = replace$8(string, ltrim, '');
	    if (TYPE & 2) string = replace$8(string, rtrim, '$1');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$5(3)
	};

	var $$1f = _export;
	var IS_PURE$2 = isPure;
	var DESCRIPTORS$o = descriptors;
	var globalThis$U = globalThis_1;
	var path$1 = path$3;
	var uncurryThis$N = functionUncurryThis;
	var isForced$2 = isForced_1;
	var hasOwn$f = hasOwnProperty_1;
	var inheritIfRequired$4 = inheritIfRequired$7;
	var isPrototypeOf$5 = objectIsPrototypeOf;
	var isSymbol$2 = isSymbol$7;
	var toPrimitive$1 = toPrimitive$4;
	var fails$I = fails$19;
	var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$5 = objectDefineProperty.f;
	var thisNumberValue$1 = thisNumberValue$3;
	var trim$2 = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = globalThis$U[NUMBER];
	path$1[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$8 = globalThis$U.TypeError;
	var stringSlice$c = uncurryThis$N(''.slice);
	var charCodeAt$2 = uncurryThis$N(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function (value) {
	  var primValue = toPrimitive$1(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive$1(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol$2(it)) throw new TypeError$8('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim$2(it);
	    first = charCodeAt$2(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt$2(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt$2(it, 1)) {
	        // fast equal of /^0b[01]+$/i
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal of /^0o[0-7]+$/i
	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        default:
	          return +it;
	      }
	      digits = stringSlice$c(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt$2(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	var FORCED$e = isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

	var calledWithNew = function (dummy) {
	  // includes check on 1..constructor(foo) case
	  return isPrototypeOf$5(NumberPrototype, dummy) && fails$I(function () { thisNumberValue$1(dummy); });
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	var NumberWrapper = function Number(value) {
	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	  return calledWithNew(this) ? inheritIfRequired$4(Object(n), this, NumberWrapper) : n;
	};

	NumberWrapper.prototype = NumberPrototype;
	if (FORCED$e && !IS_PURE$2) NumberPrototype.constructor = NumberWrapper;

	$$1f({ global: true, constructor: true, wrap: true, forced: FORCED$e }, {
	  Number: NumberWrapper
	});

	// Use `internal/copy-constructor-properties` helper in `core-js@4`
	var copyConstructorProperties$2 = function (target, source) {
	  for (var keys = DESCRIPTORS$o ? getOwnPropertyNames$2(source) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn$f(source, key = keys[j]) && !hasOwn$f(target, key)) {
	      defineProperty$5(target, key, getOwnPropertyDescriptor$4(source, key));
	    }
	  }
	};
	if (FORCED$e || IS_PURE$2) copyConstructorProperties$2(path$1[NUMBER], NativeNumber);

	var DESCRIPTORS$n = descriptors;
	var uncurryThis$M = functionUncurryThis;
	var call$s = functionCall;
	var fails$H = fails$19;
	var objectKeys$2 = objectKeys$5;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$9 = toObject$k;
	var IndexedObject$2 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$4 = Object.defineProperty;
	var concat$2 = uncurryThis$M([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$H(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$n && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$4(this, 'b', {
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
	  return $assign({}, A)[symbol] !== 7 || objectKeys$2($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$9(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$2(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$2(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$n || call$s(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$1e = _export;
	var assign$1 = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$1e({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$1 }, {
	  assign: assign$1
	});

	var $$1d = _export;
	var DESCRIPTORS$m = descriptors;
	var defineProperties = objectDefineProperties.f;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	$$1d({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS$m }, {
	  defineProperties: defineProperties
	});

	var $$1c = _export;
	var DESCRIPTORS$l = descriptors;
	var defineProperty$3 = objectDefineProperty.f;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	$$1c({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$3, sham: !DESCRIPTORS$l }, {
	  defineProperty: defineProperty$3
	});

	var $$1b = _export;
	var fails$G = fails$19;
	var toIndexedObject$4 = toIndexedObject$d;
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$k = descriptors;

	var FORCED$d = !DESCRIPTORS$k || fails$G(function () { nativeGetOwnPropertyDescriptor$1(1); });

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	$$1b({ target: 'Object', stat: true, forced: FORCED$d, sham: !DESCRIPTORS$k }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject$4(it), key);
	  }
	});

	var $$1a = _export;
	var DESCRIPTORS$j = descriptors;
	var ownKeys = ownKeys$2;
	var toIndexedObject$3 = toIndexedObject$d;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
	var createProperty$3 = createProperty$a;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$1a({ target: 'Object', stat: true, sham: !DESCRIPTORS$j }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$3(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty$3(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var $$19 = _export;
	var toObject$8 = toObject$k;
	var nativeKeys = objectKeys$5;
	var fails$F = fails$19;

	var FAILS_ON_PRIMITIVES$2 = fails$F(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$19({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$8(it));
	  }
	});

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$d = classof$l;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$d(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineBuiltIn$c = defineBuiltIn$m;
	var toString$n = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  defineBuiltIn$c(Object.prototype, 'toString', toString$n, { unsafe: true });
	}

	/* global Bun, Deno -- detection */
	var globalThis$T = globalThis_1;
	var userAgent$6 = environmentUserAgent;
	var classof$c = classofRaw$2;

	var userAgentStartsWith = function (string) {
	  return userAgent$6.slice(0, string.length) === string;
	};

	var environment = (function () {
	  if (userAgentStartsWith('Bun/')) return 'BUN';
	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
	  if (userAgentStartsWith('Deno/')) return 'DENO';
	  if (userAgentStartsWith('Node.js/')) return 'NODE';
	  if (globalThis$T.Bun && typeof Bun.version == 'string') return 'BUN';
	  if (globalThis$T.Deno && typeof Deno.version == 'object') return 'DENO';
	  if (classof$c(globalThis$T.process) === 'process') return 'NODE';
	  if (globalThis$T.window && globalThis$T.document) return 'BROWSER';
	  return 'REST';
	})();

	var ENVIRONMENT$3 = environment;

	var environmentIsNode = ENVIRONMENT$3 === 'NODE';

	var isConstructor$1 = isConstructor$5;
	var tryToString$1 = tryToString$7;

	var $TypeError$h = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$3 = function (argument) {
	  if (isConstructor$1(argument)) return argument;
	  throw new $TypeError$h(tryToString$1(argument) + ' is not a constructor');
	};

	var anObject$m = anObject$C;
	var aConstructor$2 = aConstructor$3;
	var isNullOrUndefined$2 = isNullOrUndefined$8;
	var wellKnownSymbol$d = wellKnownSymbol$z;

	var SPECIES$2 = wellKnownSymbol$d('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$3 = function (O, defaultConstructor) {
	  var C = anObject$m(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$2(S = anObject$m(C)[SPECIES$2]) ? defaultConstructor : aConstructor$2(S);
	};

	var $TypeError$g = TypeError;

	var validateArgumentsLength$9 = function (passed, required) {
	  if (passed < required) throw new $TypeError$g('Not enough arguments');
	  return passed;
	};

	var userAgent$5 = environmentUserAgent;

	var environmentIsIos = /ipad|iphone|ipod/i.test(userAgent$5) && /applewebkit/i.test(userAgent$5);

	var globalThis$S = globalThis_1;
	var apply$7 = functionApply;
	var bind$7 = functionBindContext;
	var isCallable$d = isCallable$z;
	var hasOwn$e = hasOwnProperty_1;
	var fails$E = fails$19;
	var html = html$2;
	var arraySlice$7 = arraySlice$9;
	var createElement = documentCreateElement$2;
	var validateArgumentsLength$8 = validateArgumentsLength$9;
	var IS_IOS$1 = environmentIsIos;
	var IS_NODE$4 = environmentIsNode;

	var set$4 = globalThis$S.setImmediate;
	var clear = globalThis$S.clearImmediate;
	var process$2 = globalThis$S.process;
	var Dispatch = globalThis$S.Dispatch;
	var Function$2 = globalThis$S.Function;
	var MessageChannel = globalThis$S.MessageChannel;
	var String$1 = globalThis$S.String;
	var counter = 0;
	var queue$2 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel$1, port;

	fails$E(function () {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  $location = globalThis$S.location;
	});

	var run = function (id) {
	  if (hasOwn$e(queue$2, id)) {
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
	  globalThis$S.postMessage(String$1(id), $location.protocol + '//' + $location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$4 || !clear) {
	  set$4 = function setImmediate(handler) {
	    validateArgumentsLength$8(arguments.length, 1);
	    var fn = isCallable$d(handler) ? handler : Function$2(handler);
	    var args = arraySlice$7(arguments, 1);
	    queue$2[++counter] = function () {
	      apply$7(fn, undefined, args);
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
	    defer = bind$7(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    globalThis$S.addEventListener &&
	    isCallable$d(globalThis$S.postMessage) &&
	    !globalThis$S.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails$E(globalPostMessageDefer)
	  ) {
	    defer = globalPostMessageDefer;
	    globalThis$S.addEventListener('message', eventListener, false);
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

	var globalThis$R = globalThis_1;
	var DESCRIPTORS$i = descriptors;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	var safeGetBuiltIn$2 = function (name) {
	  if (!DESCRIPTORS$i) return globalThis$R[name];
	  var descriptor = getOwnPropertyDescriptor$3(globalThis$R, name);
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

	var userAgent$4 = environmentUserAgent;

	var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$4) && typeof Pebble != 'undefined';

	var userAgent$3 = environmentUserAgent;

	var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$3);

	var globalThis$Q = globalThis_1;
	var safeGetBuiltIn$1 = safeGetBuiltIn$2;
	var bind$6 = functionBindContext;
	var macrotask = task$1.set;
	var Queue$1 = queue$1;
	var IS_IOS = environmentIsIos;
	var IS_IOS_PEBBLE = environmentIsIosPebble;
	var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
	var IS_NODE$3 = environmentIsNode;

	var MutationObserver = globalThis$Q.MutationObserver || globalThis$Q.WebKitMutationObserver;
	var document$2 = globalThis$Q.document;
	var process$1 = globalThis$Q.process;
	var Promise$1 = globalThis$Q.Promise;
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
	    then = bind$6(promise.then, promise);
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
	    macrotask = bind$6(macrotask, globalThis$Q);
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

	var globalThis$P = globalThis_1;

	var promiseNativeConstructor = globalThis$P.Promise;

	var globalThis$O = globalThis_1;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var isCallable$c = isCallable$z;
	var isForced$1 = isForced_1;
	var inspectSource = inspectSource$3;
	var wellKnownSymbol$c = wellKnownSymbol$z;
	var ENVIRONMENT$2 = environment;
	var V8_VERSION = environmentV8Version;

	NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var SPECIES$1 = wellKnownSymbol$c('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$c(globalThis$O.PromiseRejectionEvent);

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
	    constructor[SPECIES$1] = FakePromise;
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

	var aCallable$h = aCallable$p;

	var $TypeError$f = TypeError;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError$f('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$h(resolve);
	  this.reject = aCallable$h(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$18 = _export;
	var IS_NODE$2 = environmentIsNode;
	var globalThis$N = globalThis_1;
	var path = path$3;
	var call$r = functionCall;
	var defineBuiltIn$b = defineBuiltIn$m;
	var setPrototypeOf$5 = objectSetPrototypeOf;
	var setToStringTag$9 = setToStringTag$e;
	var setSpecies$3 = setSpecies$5;
	var aCallable$g = aCallable$p;
	var isCallable$b = isCallable$z;
	var isObject$k = isObject$D;
	var anInstance$7 = anInstance$b;
	var speciesConstructor$2 = speciesConstructor$3;
	var task = task$1.set;
	var microtask$1 = microtask_1;
	var hostReportErrors = hostReportErrors$1;
	var perform$3 = perform$4;
	var Queue = queue$1;
	var InternalStateModule$8 = internalState;
	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;

	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$8.getterFor(PROMISE);
	var setInternalState$7 = InternalStateModule$8.set;
	var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
	var PromiseConstructor = NativePromiseConstructor$3;
	var PromisePrototype = NativePromisePrototype$2;
	var TypeError$7 = globalThis$N.TypeError;
	var document$1 = globalThis$N.document;
	var process = globalThis$N.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
	var newGenericPromiseCapability = newPromiseCapability$1;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$N.dispatchEvent);
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
	  return isObject$k(it) && isCallable$b(then = it.then) ? then : false;
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
	        call$r(then, result, resolve, reject);
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
	    globalThis$N.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$N['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  call$r(task, globalThis$N, function () {
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
	  call$r(task, globalThis$N, function () {
	    var promise = state.facade;
	    if (IS_NODE$2) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$5 = function (fn, state, unwrap) {
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
	          call$r(then, value,
	            bind$5(internalResolve, wrapper, state),
	            bind$5(internalReject, wrapper, state)
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
	    anInstance$7(this, PromisePrototype);
	    aCallable$g(executor);
	    call$r(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$5(internalResolve, state), bind$5(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };

	  PromisePrototype = PromiseConstructor.prototype;

	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$7(this, {
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
	  Internal.prototype = defineBuiltIn$b(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$2(this, PromiseConstructor));
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
	    this.resolve = bind$5(internalResolve, state);
	    this.reject = bind$5(internalReject, state);
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
	      defineBuiltIn$b(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          call$r(nativeThen, that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	      // https://github.com/zloirock/core-js/issues/640
	      }, { unsafe: true });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype$2.constructor;
	    } catch (error) { /* empty */ }

	    // make `instanceof Promise` work for native promise-based APIs
	    if (setPrototypeOf$5) {
	      setPrototypeOf$5(NativePromisePrototype$2, PromisePrototype);
	    }
	  }
	}

	// `Promise` constructor
	// https://tc39.es/ecma262/#sec-promise-executor
	$$18({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});

	PromiseWrapper = path.Promise;

	setToStringTag$9(PromiseConstructor, PROMISE, false);
	setSpecies$3(PROMISE);

	var NativePromiseConstructor$2 = promiseNativeConstructor;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
	  NativePromiseConstructor$2.all(iterable).then(undefined, function () { /* empty */ });
	});

	var $$17 = _export;
	var call$q = functionCall;
	var aCallable$f = aCallable$p;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$2 = perform$4;
	var iterate$b = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

	// `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all
	$$17({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$3.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var $promiseResolve = aCallable$f(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$b(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$q($promiseResolve, C, promise).then(function (value) {
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

	var $$16 = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var getBuiltIn$c = getBuiltIn$m;
	var isCallable$a = isCallable$z;
	var defineBuiltIn$a = defineBuiltIn$m;

	var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

	// `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch
	$$16({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	if (isCallable$a(NativePromiseConstructor$1)) {
	  var method$1 = getBuiltIn$c('Promise').prototype['catch'];
	  if (NativePromisePrototype$1['catch'] !== method$1) {
	    defineBuiltIn$a(NativePromisePrototype$1, 'catch', method$1, { unsafe: true });
	  }
	}

	var $$15 = _export;
	var call$p = functionCall;
	var aCallable$e = aCallable$p;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$1 = perform$4;
	var iterate$a = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

	// `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race
	$$15({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var $promiseResolve = aCallable$e(C.resolve);
	      iterate$a(iterable, function (promise) {
	        call$p($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$14 = _export;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

	// `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject
	$$14({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$1.f(this);
	    var capabilityReject = capability.reject;
	    capabilityReject(r);
	    return capability.promise;
	  }
	});

	var anObject$l = anObject$C;
	var isObject$j = isObject$D;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$2 = function (C, x) {
	  anObject$l(C);
	  if (isObject$j(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$13 = _export;
	var getBuiltIn$b = getBuiltIn$m;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$1 = promiseResolve$2;

	getBuiltIn$b('Promise');

	// `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve
	$$13({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
	  resolve: function resolve(x) {
	    return promiseResolve$1(this, x);
	  }
	});

	var uncurryThis$L = functionUncurryThis;
	var aCallable$d = aCallable$p;
	var isObject$i = isObject$D;
	var hasOwn$d = hasOwnProperty_1;
	var arraySlice$6 = arraySlice$9;
	var NATIVE_BIND = functionBindNative;

	var $Function = Function;
	var concat$1 = uncurryThis$L([].concat);
	var join$8 = uncurryThis$L([].join);
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!hasOwn$d(factories, argsLength)) {
	    var list = [];
	    var i = 0;
	    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join$8(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	// eslint-disable-next-line es/no-function-prototype-bind -- detection
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable$d(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice$6(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat$1(partArgs, arraySlice$6(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject$i(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var $$12 = _export;
	var getBuiltIn$a = getBuiltIn$m;
	var apply$6 = functionApply;
	var bind$4 = functionBind;
	var aConstructor$1 = aConstructor$3;
	var anObject$k = anObject$C;
	var isObject$h = isObject$D;
	var create$6 = objectCreate;
	var fails$D = fails$19;

	var nativeConstruct = getBuiltIn$a('Reflect', 'construct');
	var ObjectPrototype$2 = Object.prototype;
	var push$b = [].push;

	// `Reflect.construct` method
	// https://tc39.es/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails$D(function () {
	  function F() { /* empty */ }
	  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
	});

	var ARGS_BUG = !fails$D(function () {
	  nativeConstruct(function () { /* empty */ });
	});

	var FORCED$c = NEW_TARGET_BUG || ARGS_BUG;

	$$12({ target: 'Reflect', stat: true, forced: FORCED$c, sham: FORCED$c }, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aConstructor$1(Target);
	    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
	    anObject$k(args);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target === newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      apply$6(push$b, $args, args);
	      return new (apply$6(bind$4, Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create$6(isObject$h(proto) ? proto : ObjectPrototype$2);
	    var result = apply$6(Target, instance, args);
	    return isObject$h(result) ? result : instance;
	  }
	});

	var $$11 = _export;
	var globalThis$M = globalThis_1;
	var setToStringTag$8 = setToStringTag$e;

	$$11({ global: true }, { Reflect: {} });

	// Reflect[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
	setToStringTag$8(globalThis$M.Reflect, 'Reflect', true);

	var anObject$j = anObject$C;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$j(this);
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

	var fails$C = fails$19;
	var globalThis$L = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = globalThis$L.RegExp;

	var UNSUPPORTED_Y$3 = fails$C(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') !== null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails$C(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$C(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') !== null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY$2,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$3
	};

	var fails$B = fails$19;
	var globalThis$K = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = globalThis$K.RegExp;

	var regexpUnsupportedDotAll = fails$B(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.test('\n') && re.flags === 's');
	});

	var fails$A = fails$19;
	var globalThis$J = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = globalThis$J.RegExp;

	var regexpUnsupportedNcg = fails$A(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$o = functionCall;
	var uncurryThis$K = functionUncurryThis;
	var toString$m = toString$t;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$2 = regexpStickyHelpers;
	var shared = shared$7;
	var create$5 = objectCreate;
	var getInternalState$6 = internalState.get;
	var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$b = uncurryThis$K(''.charAt);
	var indexOf$1 = uncurryThis$K(''.indexOf);
	var replace$7 = uncurryThis$K(''.replace);
	var stringSlice$b = uncurryThis$K(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$o(nativeExec, re1, 'a');
	  call$o(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$2 = stickyHelpers$2.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH$1 = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1;

	var setGroups = function (re, groups) {
	  var object = re.groups = create$5(null);
	  for (var i = 0; i < groups.length; i++) {
	    var group = groups[i];
	    object[group[0]] = re[group[1]];
	  }
	};

	if (PATCH$1) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$6(re);
	    var str = toString$m(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$o(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;

	      if (result && state.groups) setGroups(result, state.groups);

	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y$2 && re.sticky;
	    var flags = call$o(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace$7(flags, 'y', '');
	      if (indexOf$1(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$b(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      var prevChar = re.lastIndex > 0 && charAt$b(str, re.lastIndex - 1);
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

	    var match = call$o(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = str;
	        match[0] = stringSlice$b(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
	      call$o(nativeReplace, match[0], reCopy, function () {
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

	var $$10 = _export;
	var exec$7 = regexpExec$2;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$10({ target: 'RegExp', proto: true, forced: /./.exec !== exec$7 }, {
	  exec: exec$7
	});

	var globalThis$I = globalThis_1;
	var fails$z = fails$19;

	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
	var RegExp$1 = globalThis$I.RegExp;

	var FLAGS_GETTER_IS_CORRECT = !fails$z(function () {
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

	var DESCRIPTORS$h = descriptors;
	var defineBuiltInAccessor$b = defineBuiltInAccessor$h;
	var regExpFlagsDetection$1 = regexpFlagsDetection;
	var regExpFlagsGetterImplementation$1 = regexpFlags$1;

	// `RegExp.prototype.flags` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	if (DESCRIPTORS$h && !regExpFlagsDetection$1.correct) {
	  defineBuiltInAccessor$b(RegExp.prototype, 'flags', {
	    configurable: true,
	    get: regExpFlagsGetterImplementation$1
	  });

	  regExpFlagsDetection$1.correct = true;
	}

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var $$$ = _export;
	var call$n = functionCall;
	var isCallable$9 = isCallable$z;
	var anObject$i = anObject$C;
	var toString$l = toString$t;

	var DELEGATES_TO_EXEC = function () {
	  var execCalled = false;
	  var re = /[ac]/;
	  re.exec = function () {
	    execCalled = true;
	    return /./.exec.apply(this, arguments);
	  };
	  return re.test('abc') === true && execCalled;
	}();

	var nativeTest = /./.test;

	// `RegExp.prototype.test` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.test
	$$$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
	  test: function (S) {
	    var R = anObject$i(this);
	    var string = toString$l(S);
	    var exec = R.exec;
	    if (!isCallable$9(exec)) return call$n(nativeTest, R, string);
	    var result = call$n(exec, R, string);
	    if (result === null) return false;
	    anObject$i(result);
	    return true;
	  }
	});

	var call$m = functionCall;
	var hasOwn$c = hasOwnProperty_1;
	var isPrototypeOf$4 = objectIsPrototypeOf;
	var regExpFlagsDetection = regexpFlagsDetection;
	var regExpFlagsGetterImplementation = regexpFlags$1;

	var RegExpPrototype$5 = RegExp.prototype;

	var regexpGetFlags = regExpFlagsDetection.correct ? function (it) {
	  return it.flags;
	} : function (it) {
	  return (!regExpFlagsDetection.correct && isPrototypeOf$4(RegExpPrototype$5, it) && !hasOwn$c(it, 'flags'))
	    ? call$m(regExpFlagsGetterImplementation, it)
	    : it.flags;
	};

	var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
	var defineBuiltIn$9 = defineBuiltIn$m;
	var anObject$h = anObject$C;
	var $toString$2 = toString$t;
	var fails$y = fails$19;
	var getRegExpFlags$6 = regexpGetFlags;

	var TO_STRING = 'toString';
	var RegExpPrototype$4 = RegExp.prototype;
	var nativeToString = RegExpPrototype$4[TO_STRING];

	var NOT_GENERIC = fails$y(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = PROPER_FUNCTION_NAME$2 && nativeToString.name !== TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  defineBuiltIn$9(RegExpPrototype$4, TO_STRING, function toString() {
	    var R = anObject$h(this);
	    var pattern = $toString$2(R.source);
	    var flags = $toString$2(getRegExpFlags$6(R));
	    return '/' + pattern + '/' + flags;
	  }, { unsafe: true });
	}

	var collection$2 = collection$4;
	var collectionStrong = collectionStrong$2;

	// `Set` constructor
	// https://tc39.es/ecma262/#sec-set-objects
	collection$2('Set', function (init) {
	  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var uncurryThis$J = functionUncurryThis;

	// eslint-disable-next-line es/no-set -- safe
	var SetPrototype$1 = Set.prototype;

	var setHelpers = {
	  // eslint-disable-next-line es/no-set -- safe
	  Set: Set,
	  add: uncurryThis$J(SetPrototype$1.add),
	  has: uncurryThis$J(SetPrototype$1.has),
	  remove: uncurryThis$J(SetPrototype$1['delete']),
	  proto: SetPrototype$1
	};

	var has$8 = setHelpers.has;

	// Perform ? RequireInternalSlot(M, [[SetData]])
	var aSet$7 = function (it) {
	  has$8(it);
	  return it;
	};

	var call$l = functionCall;

	var iterateSimple$7 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
	  var next = record.next;
	  var step, result;
	  while (!(step = call$l(next, iterator)).done) {
	    result = fn(step.value);
	    if (result !== undefined) return result;
	  }
	};

	var uncurryThis$I = functionUncurryThis;
	var iterateSimple$6 = iterateSimple$7;
	var SetHelpers$6 = setHelpers;

	var Set$4 = SetHelpers$6.Set;
	var SetPrototype = SetHelpers$6.proto;
	var forEach$4 = uncurryThis$I(SetPrototype.forEach);
	var keys$1 = uncurryThis$I(SetPrototype.keys);
	var next = keys$1(new Set$4()).next;

	var setIterate$1 = function (set, fn, interruptible) {
	  return interruptible ? iterateSimple$6({ iterator: keys$1(set), next: next }, fn) : forEach$4(set, fn);
	};

	var SetHelpers$5 = setHelpers;
	var iterate$9 = setIterate$1;

	var Set$3 = SetHelpers$5.Set;
	var add$3 = SetHelpers$5.add;

	var setClone = function (set) {
	  var result = new Set$3();
	  iterate$9(set, function (it) {
	    add$3(result, it);
	  });
	  return result;
	};

	var uncurryThisAccessor$2 = functionUncurryThisAccessor;
	var SetHelpers$4 = setHelpers;

	var setSize = uncurryThisAccessor$2(SetHelpers$4.proto, 'size', 'get') || function (set) {
	  return set.size;
	};

	var aCallable$c = aCallable$p;
	var anObject$g = anObject$C;
	var call$k = functionCall;
	var toIntegerOrInfinity$9 = toIntegerOrInfinity$d;
	var getIteratorDirect$5 = getIteratorDirect$9;

	var INVALID_SIZE = 'Invalid size';
	var $RangeError$7 = RangeError;
	var $TypeError$e = TypeError;
	var max$3 = Math.max;

	var SetRecord = function (set, intSize) {
	  this.set = set;
	  this.size = max$3(intSize, 0);
	  this.has = aCallable$c(set.has);
	  this.keys = aCallable$c(set.keys);
	};

	SetRecord.prototype = {
	  getIterator: function () {
	    return getIteratorDirect$5(anObject$g(call$k(this.keys, this.set)));
	  },
	  includes: function (it) {
	    return call$k(this.has, this.set, it);
	  }
	};

	// `GetSetRecord` abstract operation
	// https://tc39.es/proposal-set-methods/#sec-getsetrecord
	var getSetRecord$7 = function (obj) {
	  anObject$g(obj);
	  var numSize = +obj.size;
	  // NOTE: If size is undefined, then numSize will be NaN
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (numSize !== numSize) throw new $TypeError$e(INVALID_SIZE);
	  var intSize = toIntegerOrInfinity$9(numSize);
	  if (intSize < 0) throw new $RangeError$7(INVALID_SIZE);
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

	var getBuiltIn$9 = getBuiltIn$m;

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
	  var Set = getBuiltIn$9('Set');
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

	var $$_ = _export;
	var difference = setDifference;
	var fails$x = fails$19;
	var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

	var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike$6('difference', function (result) {
	  return result.size === 0;
	});

	var FORCED$b = SET_LIKE_INCORRECT_BEHAVIOR || fails$x(function () {
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
	$$_({ target: 'Set', proto: true, real: true, forced: FORCED$b }, {
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

	var $$Z = _export;
	var fails$w = fails$19;
	var intersection = setIntersection;
	var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;

	var INCORRECT$3 = !setMethodAcceptSetLike$5('intersection', function (result) {
	  return result.size === 2 && result.has(1) && result.has(2);
	}) || fails$w(function () {
	  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
	  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
	});

	// `Set.prototype.intersection` method
	// https://tc39.es/ecma262/#sec-set.prototype.intersection
	$$Z({ target: 'Set', proto: true, real: true, forced: INCORRECT$3 }, {
	  intersection: intersection
	});

	var aSet$4 = aSet$7;
	var has$5 = setHelpers.has;
	var size$2 = setSize;
	var getSetRecord$4 = getSetRecord$7;
	var iterateSet = setIterate$1;
	var iterateSimple$3 = iterateSimple$7;
	var iteratorClose$5 = iteratorClose$e;

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
	    if (has$5(O, e)) return iteratorClose$5(iterator.iterator, 'normal', false);
	  }) !== false;
	};

	var $$Y = _export;
	var isDisjointFrom = setIsDisjointFrom;
	var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

	var INCORRECT$2 = !setMethodAcceptSetLike$4('isDisjointFrom', function (result) {
	  return !result;
	});

	// `Set.prototype.isDisjointFrom` method
	// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
	$$Y({ target: 'Set', proto: true, real: true, forced: INCORRECT$2 }, {
	  isDisjointFrom: isDisjointFrom
	});

	var aSet$3 = aSet$7;
	var size$1 = setSize;
	var iterate$8 = setIterate$1;
	var getSetRecord$3 = getSetRecord$7;

	// `Set.prototype.isSubsetOf` method
	// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
	var setIsSubsetOf = function isSubsetOf(other) {
	  var O = aSet$3(this);
	  var otherRec = getSetRecord$3(other);
	  if (size$1(O) > otherRec.size) return false;
	  return iterate$8(O, function (e) {
	    if (!otherRec.includes(e)) return false;
	  }, true) !== false;
	};

	var $$X = _export;
	var isSubsetOf = setIsSubsetOf;
	var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

	var INCORRECT$1 = !setMethodAcceptSetLike$3('isSubsetOf', function (result) {
	  return result;
	});

	// `Set.prototype.isSubsetOf` method
	// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
	$$X({ target: 'Set', proto: true, real: true, forced: INCORRECT$1 }, {
	  isSubsetOf: isSubsetOf
	});

	var aSet$2 = aSet$7;
	var has$4 = setHelpers.has;
	var size = setSize;
	var getSetRecord$2 = getSetRecord$7;
	var iterateSimple$2 = iterateSimple$7;
	var iteratorClose$4 = iteratorClose$e;

	// `Set.prototype.isSupersetOf` method
	// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
	var setIsSupersetOf = function isSupersetOf(other) {
	  var O = aSet$2(this);
	  var otherRec = getSetRecord$2(other);
	  if (size(O) < otherRec.size) return false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple$2(iterator, function (e) {
	    if (!has$4(O, e)) return iteratorClose$4(iterator.iterator, 'normal', false);
	  }) !== false;
	};

	var $$W = _export;
	var isSupersetOf = setIsSupersetOf;
	var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

	var INCORRECT = !setMethodAcceptSetLike$2('isSupersetOf', function (result) {
	  return !result;
	});

	// `Set.prototype.isSupersetOf` method
	// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
	$$W({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
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

	var $$V = _export;
	var symmetricDifference = setSymmetricDifference;
	var setMethodGetKeysBeforeCloning$1 = setMethodGetKeysBeforeCloningDetection;
	var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

	var FORCED$a = !setMethodAcceptSetLike$1('symmetricDifference') || !setMethodGetKeysBeforeCloning$1('symmetricDifference');

	// `Set.prototype.symmetricDifference` method
	// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
	$$V({ target: 'Set', proto: true, real: true, forced: FORCED$a }, {
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

	var $$U = _export;
	var union = setUnion;
	var setMethodGetKeysBeforeCloning = setMethodGetKeysBeforeCloningDetection;
	var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

	var FORCED$9 = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

	// `Set.prototype.union` method
	// https://tc39.es/ecma262/#sec-set.prototype.union
	$$U({ target: 'Set', proto: true, real: true, forced: FORCED$9 }, {
	  union: union
	});

	var isObject$g = isObject$D;
	var classof$b = classofRaw$2;
	var wellKnownSymbol$b = wellKnownSymbol$z;

	var MATCH$2 = wellKnownSymbol$b('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$g(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$b(it) === 'RegExp');
	};

	var isRegExp$2 = isRegexp;

	var $TypeError$d = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp$2(it)) {
	    throw new $TypeError$d("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$a = wellKnownSymbol$z;

	var MATCH$1 = wellKnownSymbol$a('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$T = _export;
	var uncurryThis$H = functionUncurryThis;
	var notARegExp$2 = notARegexp;
	var requireObjectCoercible$a = requireObjectCoercible$f;
	var toString$k = toString$t;
	var correctIsRegExpLogic$2 = correctIsRegexpLogic;

	var stringIndexOf$5 = uncurryThis$H(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$T({ target: 'String', proto: true, forced: !correctIsRegExpLogic$2('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf$5(
	      toString$k(requireObjectCoercible$a(this)),
	      toString$k(notARegExp$2(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	var uncurryThis$G = functionUncurryThis;
	var toIntegerOrInfinity$8 = toIntegerOrInfinity$d;
	var toString$j = toString$t;
	var requireObjectCoercible$9 = requireObjectCoercible$f;

	var charAt$a = uncurryThis$G(''.charAt);
	var charCodeAt$1 = uncurryThis$G(''.charCodeAt);
	var stringSlice$a = uncurryThis$G(''.slice);

	var createMethod$4 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$j(requireObjectCoercible$9($this));
	    var position = toIntegerOrInfinity$8(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$a(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$a(S, position, position + 2)
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

	var charAt$9 = stringMultibyte.charAt;
	var toString$i = toString$t;
	var InternalStateModule$7 = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$5;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$6 = InternalStateModule$7.set;
	var getInternalState$5 = InternalStateModule$7.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$6(this, {
	    type: STRING_ITERATOR,
	    string: toString$i(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$5(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$1(undefined, true);
	  point = charAt$9(string, index);
	  state.index += point.length;
	  return createIterResultObject$1(point, false);
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var call$j = functionCall;
	var defineBuiltIn$8 = defineBuiltIn$m;
	var regexpExec$1 = regexpExec$2;
	var fails$v = fails$19;
	var wellKnownSymbol$9 = wellKnownSymbol$z;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$g;

	var SPECIES = wellKnownSymbol$9('species');
	var RegExpPrototype$3 = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$9(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$v(function () {
	    // String methods call symbol-named RegExp methods
	    var O = {};
	    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) !== 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$v(function () {
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
	      constructor[SPECIES] = function () { return re; };
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
	          return { done: true, value: call$j(nativeRegExpMethod, regexp, str, arg2) };
	        }
	        return { done: true, value: call$j(nativeMethod, str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    defineBuiltIn$8(String.prototype, KEY, methods[0]);
	    defineBuiltIn$8(RegExpPrototype$3, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty$8(RegExpPrototype$3[SYMBOL], 'sham', true);
	};

	var charAt$8 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$3 = function (S, index, unicode) {
	  return index + (unicode ? charAt$8(S, index).length || 1 : 1);
	};

	var call$i = functionCall;
	var anObject$f = anObject$C;
	var isCallable$8 = isCallable$z;
	var classof$a = classofRaw$2;
	var regexpExec = regexpExec$2;

	var $TypeError$c = TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable$8(exec)) {
	    var result = call$i(exec, R, S);
	    if (result !== null) anObject$f(result);
	    return result;
	  }
	  if (classof$a(R) === 'RegExp') return call$i(regexpExec, R, S);
	  throw new $TypeError$c('RegExp#exec called on incompatible receiver');
	};

	var call$h = functionCall;
	var uncurryThis$F = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
	var anObject$e = anObject$C;
	var isObject$f = isObject$D;
	var toLength$7 = toLength$9;
	var toString$h = toString$t;
	var requireObjectCoercible$8 = requireObjectCoercible$f;
	var getMethod$4 = getMethod$9;
	var advanceStringIndex$2 = advanceStringIndex$3;
	var getRegExpFlags$5 = regexpGetFlags;
	var regExpExec$3 = regexpExecAbstract;

	var stringIndexOf$4 = uncurryThis$F(''.indexOf);

	// @@match logic
	fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.es/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible$8(this);
	      var matcher = isObject$f(regexp) ? getMethod$4(regexp, MATCH) : undefined;
	      if (matcher) return call$h(matcher, regexp, O);
	      var S = toString$h(O);
	      return new RegExp(regexp)[MATCH](S);
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	    function (string) {
	      var rx = anObject$e(this);
	      var S = toString$h(string);
	      var res = maybeCallNative(nativeMatch, rx, S);

	      if (res.done) return res.value;

	      var flags = toString$h(getRegExpFlags$5(rx));

	      if (!~stringIndexOf$4(flags, 'g')) return regExpExec$3(rx, S);

	      var fullUnicode = !!~stringIndexOf$4(flags, 'u') || !!~stringIndexOf$4(flags, 'v');
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec$3(rx, S)) !== null) {
	        var matchStr = toString$h(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$7(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var uncurryThis$E = functionUncurryThis;
	var toObject$7 = toObject$k;

	var floor$9 = Math.floor;
	var charAt$7 = uncurryThis$E(''.charAt);
	var replace$6 = uncurryThis$E(''.replace);
	var stringSlice$9 = uncurryThis$E(''.slice);
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
	    namedCaptures = toObject$7(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace$6(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (charAt$7(ch, 0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return stringSlice$9(str, 0, position);
	      case "'": return stringSlice$9(str, tailPos);
	      case '<':
	        capture = namedCaptures[stringSlice$9(ch, 1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor$9(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? charAt$7(ch, 1) : captures[f - 1] + charAt$7(ch, 1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var apply$5 = functionApply;
	var call$g = functionCall;
	var uncurryThis$D = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
	var fails$u = fails$19;
	var anObject$d = anObject$C;
	var isCallable$7 = isCallable$z;
	var isObject$e = isObject$D;
	var toIntegerOrInfinity$7 = toIntegerOrInfinity$d;
	var toLength$6 = toLength$9;
	var toString$g = toString$t;
	var requireObjectCoercible$7 = requireObjectCoercible$f;
	var advanceStringIndex$1 = advanceStringIndex$3;
	var getMethod$3 = getMethod$9;
	var getSubstitution$1 = getSubstitution$2;
	var getRegExpFlags$4 = regexpGetFlags;
	var regExpExec$2 = regexpExecAbstract;
	var wellKnownSymbol$8 = wellKnownSymbol$z;

	var REPLACE$1 = wellKnownSymbol$8('replace');
	var max$2 = Math.max;
	var min$7 = Math.min;
	var concat = uncurryThis$D([].concat);
	var push$a = uncurryThis$D([].push);
	var stringIndexOf$3 = uncurryThis$D(''.indexOf);
	var stringSlice$8 = uncurryThis$D(''.slice);

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

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$u(function () {
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
	fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible$7(this);
	      var replacer = isObject$e(searchValue) ? getMethod$3(searchValue, REPLACE$1) : undefined;
	      return replacer
	        ? call$g(replacer, searchValue, O, replaceValue)
	        : call$g(nativeReplace, toString$g(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (string, replaceValue) {
	      var rx = anObject$d(this);
	      var S = toString$g(string);

	      var functionalReplace = isCallable$7(replaceValue);
	      if (!functionalReplace) replaceValue = toString$g(replaceValue);
	      var flags = toString$g(getRegExpFlags$4(rx));

	      if (
	        typeof replaceValue == 'string' &&
	        !~stringIndexOf$3(replaceValue, UNSAFE_SUBSTITUTE) &&
	        !~stringIndexOf$3(replaceValue, '$<') &&
	        !~stringIndexOf$3(flags, 'y')
	      ) {
	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	        if (res.done) return res.value;
	      }

	      var global = !!~stringIndexOf$3(flags, 'g');
	      var fullUnicode;
	      if (global) {
	        fullUnicode = !!~stringIndexOf$3(flags, 'u') || !!~stringIndexOf$3(flags, 'v');
	        rx.lastIndex = 0;
	      }

	      var results = [];
	      var result;
	      while (true) {
	        result = regExpExec$2(rx, S);
	        if (result === null) break;

	        push$a(results, result);
	        if (!global) break;

	        var matchStr = toString$g(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$6(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = toString$g(result[0]);
	        var position = max$2(min$7(toIntegerOrInfinity$7(result.index), S.length), 0);
	        var captures = [];
	        var replacement;
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) push$a(captures, maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = concat([matched], captures, position, S);
	          if (namedCaptures !== undefined) push$a(replacerArgs, namedCaptures);
	          replacement = toString$g(apply$5(replaceValue, undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += stringSlice$8(S, nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }

	      return accumulatedResult + stringSlice$8(S, nextSourcePosition);
	    }
	  ];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var fails$t = fails$19;
	var whitespaces$3 = whitespaces$5;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$t(function () {
	    return !!whitespaces$3[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME$1 && whitespaces$3[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $$S = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$S({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var uncurryThis$C = functionUncurryThis;
	var defineBuiltIns$3 = defineBuiltIns$6;
	var getWeakData = internalMetadataExports.getWeakData;
	var anInstance$6 = anInstance$b;
	var anObject$c = anObject$C;
	var isNullOrUndefined$1 = isNullOrUndefined$8;
	var isObject$d = isObject$D;
	var iterate$7 = iterate$f;
	var ArrayIterationModule = arrayIteration;
	var hasOwn$b = hasOwnProperty_1;
	var InternalStateModule$6 = internalState;

	var setInternalState$5 = InternalStateModule$6.set;
	var internalStateGetterFor = InternalStateModule$6.getterFor;
	var find$1 = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var splice$1 = uncurryThis$C([].splice);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (state) {
	  return state.frozen || (state.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find$1(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) splice$1(this.entries, index, 1);
	    return !!~index;
	  }
	};

	var collectionWeak$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$6(that, Prototype);
	      setInternalState$5(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: null
	      });
	      if (!isNullOrUndefined$1(iterable)) iterate$7(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject$c(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);
	      else data[state.id] = value;
	      return that;
	    };

	    defineBuiltIns$3(Prototype, {
	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject$d(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && hasOwn$b(data, state.id) && delete data[state.id];
	      },
	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject$d(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && hasOwn$b(data, state.id);
	      }
	    });

	    defineBuiltIns$3(Prototype, IS_MAP ? {
	      // `WeakMap.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject$d(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          if (data) return data[state.id];
	        }
	      },
	      // `WeakMap.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // `WeakSet.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });

	    return Constructor;
	  }
	};

	var FREEZING$1 = freezing;
	var globalThis$H = globalThis_1;
	var uncurryThis$B = functionUncurryThis;
	var defineBuiltIns$2 = defineBuiltIns$6;
	var InternalMetadataModule = internalMetadataExports;
	var collection$1 = collection$4;
	var collectionWeak$1 = collectionWeak$2;
	var isObject$c = isObject$D;
	var enforceInternalState$3 = internalState.enforce;
	var fails$s = fails$19;
	var NATIVE_WEAK_MAP = weakMapBasicDetection;

	var $Object = Object;
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = $Object.isExtensible;
	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen = $Object.isFrozen;
	// eslint-disable-next-line es/no-object-issealed -- safe
	var isSealed = $Object.isSealed;
	// eslint-disable-next-line es/no-object-freeze -- safe
	var freeze = $Object.freeze;
	// eslint-disable-next-line es/no-object-seal -- safe
	var seal = $Object.seal;

	var IS_IE11 = !globalThis$H.ActiveXObject && 'ActiveXObject' in globalThis$H;
	var InternalWeakMap;

	var wrapper = function (init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1);
	var WeakMapPrototype$1 = $WeakMap.prototype;
	var nativeSet = uncurryThis$B(WeakMapPrototype$1.set);

	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
	var hasMSEdgeFreezingBug = function () {
	  return FREEZING$1 && fails$s(function () {
	    var frozenArray = freeze([]);
	    nativeSet(new $WeakMap(), frozenArray, 1);
	    return !isFrozen(frozenArray);
	  });
	};

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP) if (IS_IE11) {
	  InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.enable();
	  var nativeDelete = uncurryThis$B(WeakMapPrototype$1['delete']);
	  var nativeHas = uncurryThis$B(WeakMapPrototype$1.has);
	  var nativeGet = uncurryThis$B(WeakMapPrototype$1.get);
	  defineBuiltIns$2(WeakMapPrototype$1, {
	    'delete': function (key) {
	      if (isObject$c(key) && !isExtensible(key)) {
	        var state = enforceInternalState$3(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete(this, key) || state.frozen['delete'](key);
	      } return nativeDelete(this, key);
	    },
	    has: function has(key) {
	      if (isObject$c(key) && !isExtensible(key)) {
	        var state = enforceInternalState$3(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) || state.frozen.has(key);
	      } return nativeHas(this, key);
	    },
	    get: function get(key) {
	      if (isObject$c(key) && !isExtensible(key)) {
	        var state = enforceInternalState$3(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
	      } return nativeGet(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject$c(key) && !isExtensible(key)) {
	        var state = enforceInternalState$3(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet(this, key, value);
	      return this;
	    }
	  });
	// Chakra Edge frozen keys fix
	} else if (hasMSEdgeFreezingBug()) {
	  defineBuiltIns$2(WeakMapPrototype$1, {
	    set: function set(key, value) {
	      var arrayIntegrityLevel;
	      if (isArray$2(key)) {
	        if (isFrozen(key)) arrayIntegrityLevel = freeze;
	        else if (isSealed(key)) arrayIntegrityLevel = seal;
	      }
	      nativeSet(this, key, value);
	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
	      return this;
	    }
	  });
	}

	var uncurryThis$A = functionUncurryThis;

	// eslint-disable-next-line es/no-weak-map -- safe
	var WeakMapPrototype = WeakMap.prototype;

	var weakMapHelpers = {
	  // eslint-disable-next-line es/no-weak-map -- safe
	  WeakMap: WeakMap,
	  set: uncurryThis$A(WeakMapPrototype.set),
	  get: uncurryThis$A(WeakMapPrototype.get),
	  has: uncurryThis$A(WeakMapPrototype.has),
	  remove: uncurryThis$A(WeakMapPrototype['delete'])
	};

	var $$R = _export;
	var WeakMapHelpers$2 = weakMapHelpers;
	var IS_PURE$1 = isPure;

	var get$2 = WeakMapHelpers$2.get;
	var has$2 = WeakMapHelpers$2.has;
	var set$3 = WeakMapHelpers$2.set;

	// `WeakMap.prototype.getOrInsert` method
	// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsert
	$$R({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE$1 }, {
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

	var $$Q = _export;
	var aCallable$b = aCallable$p;
	var aWeakMap = aWeakMap$1;
	var aWeakKey = aWeakKey$1;
	var WeakMapHelpers = weakMapHelpers;

	var get$1 = WeakMapHelpers.get;
	var has = WeakMapHelpers.has;
	var set$1 = WeakMapHelpers.set;

	var FORCED$8 = !function () {
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
	$$Q({ target: 'WeakMap', proto: true, real: true, forced: FORCED$8 }, {
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

	var collection = collection$4;
	var collectionWeak = collectionWeak$2;

	// `WeakSet` constructor
	// https://tc39.es/ecma262/#sec-weakset-constructor
	collection('WeakSet', function (init) {
	  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionWeak);

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
	var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

	var $forEach$1 = arrayIteration.forEach;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;

	var STRICT_METHOD$2 = arrayMethodIsStrict$3('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var globalThis$G = globalThis_1;
	var DOMIterables$1 = domIterables;
	var DOMTokenListPrototype$1 = domTokenListPrototype;
	var forEach$3 = arrayForEach;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$g;

	var handlePrototype$1 = function (CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach$3) try {
	    createNonEnumerableProperty$7(CollectionPrototype, 'forEach', forEach$3);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach$3;
	  }
	};

	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  if (DOMIterables$1[COLLECTION_NAME$1]) {
	    handlePrototype$1(globalThis$G[COLLECTION_NAME$1] && globalThis$G[COLLECTION_NAME$1].prototype);
	  }
	}

	handlePrototype$1(DOMTokenListPrototype$1);

	var globalThis$F = globalThis_1;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$g;
	var setToStringTag$7 = setToStringTag$e;
	var wellKnownSymbol$7 = wellKnownSymbol$z;

	var ITERATOR$5 = wellKnownSymbol$7('iterator');
	var ArrayValues = ArrayIteratorMethods.values;

	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
	      createNonEnumerableProperty$6(CollectionPrototype, ITERATOR$5, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$5] = ArrayValues;
	    }
	    setToStringTag$7(CollectionPrototype, COLLECTION_NAME, true);
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
	  handlePrototype(globalThis$F[COLLECTION_NAME] && globalThis$F[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}

	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var $$P = _export;
	var globalThis$E = globalThis_1;
	var clearImmediate = task$1.clear;

	// `clearImmediate` method
	// http://w3c.github.io/setImmediate/#si-clearImmediate
	$$P({ global: true, bind: true, enumerable: true, forced: globalThis$E.clearImmediate !== clearImmediate }, {
	  clearImmediate: clearImmediate
	});

	var globalThis$D = globalThis_1;
	var apply$4 = functionApply;
	var isCallable$6 = isCallable$z;
	var ENVIRONMENT$1 = environment;
	var USER_AGENT = environmentUserAgent;
	var arraySlice$5 = arraySlice$9;
	var validateArgumentsLength$7 = validateArgumentsLength$9;

	var Function$1 = globalThis$D.Function;
	// dirty IE9- and Bun 0.3.0- checks
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT$1 === 'BUN' && (function () {
	  var version = globalThis$D.Bun.version.split('.');
	  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
	})();

	// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	// https://github.com/oven-sh/bun/issues/1633
	var schedulersFix$1 = function (scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout /* , ...arguments */) {
	    var boundArgs = validateArgumentsLength$7(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable$6(handler) ? handler : Function$1(handler);
	    var params = boundArgs ? arraySlice$5(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply$4(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};

	var $$O = _export;
	var globalThis$C = globalThis_1;
	var setTask = task$1.set;
	var schedulersFix = schedulersFix$1;

	// https://github.com/oven-sh/bun/issues/1633
	var setImmediate = globalThis$C.setImmediate ? schedulersFix(setTask, false) : setTask;

	// `setImmediate` method
	// http://w3c.github.io/setImmediate/#si-setImmediate
	$$O({ global: true, bind: true, enumerable: true, forced: globalThis$C.setImmediate !== setImmediate }, {
	  setImmediate: setImmediate
	});

	var $$N = _export;
	var globalThis$B = globalThis_1;
	var microtask = microtask_1;
	var aCallable$a = aCallable$p;
	var validateArgumentsLength$6 = validateArgumentsLength$9;
	var fails$r = fails$19;
	var DESCRIPTORS$g = descriptors;

	// Bun ~ 1.0.30 bug
	// https://github.com/oven-sh/bun/issues/9249
	var WRONG_ARITY$2 = fails$r(function () {
	  // getOwnPropertyDescriptor for prevent experimental warning in Node 11
	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	  return DESCRIPTORS$g && Object.getOwnPropertyDescriptor(globalThis$B, 'queueMicrotask').value.length !== 1;
	});

	// `queueMicrotask` method
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
	$$N({ global: true, enumerable: true, dontCallGetSet: true, forced: WRONG_ARITY$2 }, {
	  queueMicrotask: function queueMicrotask(fn) {
	    validateArgumentsLength$6(arguments.length, 1);
	    microtask(aCallable$a(fn));
	  }
	});

	var getBuiltIn$8 = getBuiltIn$m;
	var defineWellKnownSymbol = wellKnownSymbolDefine;
	var setToStringTag$6 = setToStringTag$e;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$6(getBuiltIn$8('Symbol'), 'Symbol');

	var $$M = _export;
	var $find$1 = arrayIteration.find;
	var addToUnscopables$1 = addToUnscopables$4;

	var FIND = 'find';
	var SKIPS_HOLES$1 = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-find -- testing
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES$1 = false; });

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$M({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1(FIND);

	/* eslint-disable es/no-array-prototype-lastindexof -- safe */
	var apply$3 = functionApply;
	var toIndexedObject$2 = toIndexedObject$d;
	var toIntegerOrInfinity$6 = toIntegerOrInfinity$d;
	var lengthOfArrayLike$d = lengthOfArrayLike$n;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;

	var min$6 = Math.min;
	var $lastIndexOf$1 = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict$2('lastIndexOf');
	var FORCED$7 = NEGATIVE_ZERO || !STRICT_METHOD$1;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	var arrayLastIndexOf = FORCED$7 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return apply$3($lastIndexOf$1, this, arguments) || 0;
	  var O = toIndexedObject$2(this);
	  var length = lengthOfArrayLike$d(O);
	  if (length === 0) return -1;
	  var index = length - 1;
	  if (arguments.length > 1) index = min$6(index, toIntegerOrInfinity$6(arguments[1]));
	  if (index < 0) index = length + index;
	  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : $lastIndexOf$1;

	var $$L = _export;
	var lastIndexOf = arrayLastIndexOf;

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
	$$L({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
	  lastIndexOf: lastIndexOf
	});

	var aCallable$9 = aCallable$p;
	var toObject$6 = toObject$k;
	var IndexedObject$1 = indexedObject;
	var lengthOfArrayLike$c = lengthOfArrayLike$n;

	var $TypeError$b = TypeError;

	var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$3 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    var O = toObject$6(that);
	    var self = IndexedObject$1(O);
	    var length = lengthOfArrayLike$c(O);
	    aCallable$9(callbackfn);
	    if (length === 0 && argumentsLength < 2) throw new $TypeError$b(REDUCE_EMPTY);
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
	        throw new $TypeError$b(REDUCE_EMPTY);
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
	  left: createMethod$3(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$3(true)
	};

	var $$K = _export;
	var $reduce$1 = arrayReduce.left;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;
	var CHROME_VERSION = environmentV8Version;
	var IS_NODE$1 = environmentIsNode;

	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE$1 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
	var FORCED$6 = CHROME_BUG || !arrayMethodIsStrict$1('reduce');

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$K({ target: 'Array', proto: true, forced: FORCED$6 }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var length = arguments.length;
	    return $reduce$1(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$J = _export;
	var globalThis$A = globalThis_1;

	// `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis
	$$J({ global: true, forced: globalThis$A.globalThis !== globalThis$A }, {
	  globalThis: globalThis$A
	});

	var $$I = _export;
	var call$f = functionCall;
	var iterate$6 = iterate$f;
	var aCallable$8 = aCallable$p;
	var anObject$b = anObject$C;
	var getIteratorDirect$4 = getIteratorDirect$9;
	var iteratorClose$3 = iteratorClose$e;
	var iteratorHelperWithoutClosingOnEarlyError$3 = iteratorHelperWithoutClosingOnEarlyError$7;

	var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$3('find', TypeError);

	// `Iterator.prototype.find` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.find
	$$I({ target: 'Iterator', proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
	  find: function find(predicate) {
	    anObject$b(this);
	    try {
	      aCallable$8(predicate);
	    } catch (error) {
	      iteratorClose$3(this, 'throw', error);
	    }

	    if (findWithoutClosingOnEarlyError) return call$f(findWithoutClosingOnEarlyError, this, predicate);

	    var record = getIteratorDirect$4(this);
	    var counter = 0;
	    return iterate$6(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop(value);
	    }, { IS_RECORD: true, INTERRUPTED: true }).result;
	  }
	});

	var $$H = _export;
	var iterate$5 = iterate$f;
	var aCallable$7 = aCallable$p;
	var anObject$a = anObject$C;
	var getIteratorDirect$3 = getIteratorDirect$9;
	var iteratorClose$2 = iteratorClose$e;
	var iteratorHelperWithoutClosingOnEarlyError$2 = iteratorHelperWithoutClosingOnEarlyError$7;
	var apply$2 = functionApply;
	var fails$q = fails$19;

	var $TypeError$a = TypeError;

	// https://bugs.webkit.org/show_bug.cgi?id=291651
	var FAILS_ON_INITIAL_UNDEFINED = fails$q(function () {
	  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
	  [].keys().reduce(function () { /* empty */ }, undefined);
	});

	var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError$2('reduce', $TypeError$a);

	// `Iterator.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
	$$H({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
	  reduce: function reduce(reducer /* , initialValue */) {
	    anObject$a(this);
	    try {
	      aCallable$7(reducer);
	    } catch (error) {
	      iteratorClose$2(this, 'throw', error);
	    }

	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    if (reduceWithoutClosingOnEarlyError) {
	      return apply$2(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
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
	    if (noInitial) throw new $TypeError$a('Reduce of empty iterator with no initial value');
	    return accumulator;
	  }
	});

	var $$G = _export;
	var DESCRIPTORS$f = descriptors;
	var globalThis$z = globalThis_1;
	var getBuiltIn$7 = getBuiltIn$m;
	var uncurryThis$z = functionUncurryThis;
	var call$e = functionCall;
	var isCallable$5 = isCallable$z;
	var isObject$b = isObject$D;
	var isArray$1 = isArray$8;
	var hasOwn$a = hasOwnProperty_1;
	var toString$f = toString$t;
	var lengthOfArrayLike$b = lengthOfArrayLike$n;
	var createProperty$2 = createProperty$a;
	var fails$p = fails$19;
	var parseJSONString = parseJsonString;
	var NATIVE_SYMBOL = symbolConstructorDetection;

	var JSON$1 = globalThis$z.JSON;
	var Number$1 = globalThis$z.Number;
	var SyntaxError$4 = globalThis$z.SyntaxError;
	var nativeParse = JSON$1 && JSON$1.parse;
	var enumerableOwnProperties = getBuiltIn$7('Object', 'keys');
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
	var at$1 = uncurryThis$z(''.charAt);
	var slice$3 = uncurryThis$z(''.slice);
	var exec$6 = uncurryThis$z(/./.exec);
	var push$9 = uncurryThis$z([].push);

	var IS_DIGIT = /^\d$/;
	var IS_NON_ZERO_DIGIT = /^[1-9]$/;
	var IS_NUMBER_START = /^[\d-]$/;
	var IS_WHITESPACE = /^[\t\n\r ]$/;

	var PRIMITIVE = 0;
	var OBJECT = 1;

	var $parse = function (source, reviver) {
	  source = toString$f(source);
	  var context = new Context(source, 0);
	  var root = context.parse();
	  var value = root.value;
	  var endIndex = context.skip(IS_WHITESPACE, root.end);
	  if (endIndex < source.length) {
	    throw new SyntaxError$4('Unexpected extra character: "' + at$1(source, endIndex) + '" after the parsed data at: ' + endIndex);
	  }
	  return isCallable$5(reviver) ? internalize({ '': value }, '', reviver, root) : value;
	};

	var internalize = function (holder, name, reviver, node) {
	  var val = holder[name];
	  var unmodified = node && val === node.value;
	  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
	  var elementRecordsLen, keys, len, i, P;
	  if (isObject$b(val)) {
	    var nodeIsArray = isArray$1(val);
	    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
	    if (nodeIsArray) {
	      elementRecordsLen = nodes.length;
	      len = lengthOfArrayLike$b(val);
	      for (i = 0; i < len; i++) {
	        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
	      }
	    } else {
	      keys = enumerableOwnProperties(val);
	      len = lengthOfArrayLike$b(keys);
	      for (i = 0; i < len; i++) {
	        P = keys[i];
	        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn$a(nodes, P) ? nodes[P] : undefined));
	      }
	    }
	  }
	  return call$e(reviver, holder, name, val, context);
	};

	var internalizeProperty = function (object, key, value) {
	  if (DESCRIPTORS$f) {
	    var descriptor = getOwnPropertyDescriptor$2(object, key);
	    if (descriptor && !descriptor.configurable) return;
	  }
	  if (value === undefined) delete object[key];
	  else createProperty$2(object, key, value);
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
	    if (exec$6(IS_NUMBER_START, chr)) return fork.number();
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
	    return new Node(value, end, type ? null : slice$3(this.source, start, end), nodes);
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
	      createProperty$2(nodes, key, result);
	      createProperty$2(object, key, result.value);
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
	      push$9(nodes, result);
	      push$9(array, result.value);
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
	    else if (exec$6(IS_NON_ZERO_DIGIT, at$1(source, i))) i = this.skip(IS_DIGIT, i + 1);
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
	    return this.node(PRIMITIVE, Number$1(slice$3(source, startIndex, i)), startIndex, i);
	  },
	  keyword: function (value) {
	    var keyword = '' + value;
	    var index = this.index;
	    var endIndex = index + keyword.length;
	    if (slice$3(this.source, index, endIndex) !== keyword) throw new SyntaxError$4('Failed to parse value at: ' + index);
	    return this.node(PRIMITIVE, value, index, endIndex);
	  },
	  skip: function (regex, i) {
	    var source = this.source;
	    for (; i < source.length; i++) if (!exec$6(regex, at$1(source, i))) break;
	    return i;
	  },
	  until: function (array, i) {
	    i = this.skip(IS_WHITESPACE, i);
	    var chr = at$1(this.source, i);
	    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
	    throw new SyntaxError$4('Unexpected character: "' + chr + '" at: ' + i);
	  }
	};

	var NO_SOURCE_SUPPORT = fails$p(function () {
	  var unsafeInt = '9007199254740993';
	  var source;
	  nativeParse(unsafeInt, function (key, value, context) {
	    source = context.source;
	  });
	  return source !== unsafeInt;
	});

	var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails$p(function () {
	  // Safari 9 bug
	  return 1 / nativeParse('-0 \t') !== -Infinity;
	});

	// `JSON.parse` method
	// https://tc39.es/ecma262/#sec-json.parse
	// https://github.com/tc39/proposal-json-parse-with-source
	$$G({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
	  parse: function parse(text, reviver) {
	    return PROPER_BASE_PARSE && !isCallable$5(reviver) ? nativeParse(text) : $parse(text, reviver);
	  }
	});

	var globalThis$y = globalThis_1;
	var setToStringTag$5 = setToStringTag$e;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$5(globalThis$y.JSON, 'JSON', true);

	var setToStringTag$4 = setToStringTag$e;

	// Math[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-math-@@tostringtag
	setToStringTag$4(Math, 'Math', true);

	var DESCRIPTORS$e = descriptors;
	var fails$o = fails$19;
	var uncurryThis$y = functionUncurryThis;
	var objectGetPrototypeOf = objectGetPrototypeOf$1;
	var objectKeys$1 = objectKeys$5;
	var toIndexedObject$1 = toIndexedObject$d;
	var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

	var propertyIsEnumerable = uncurryThis$y($propertyIsEnumerable);
	var push$8 = uncurryThis$y([].push);

	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
	// of `null` prototype objects
	var IE_BUG = DESCRIPTORS$e && fails$o(function () {
	  // eslint-disable-next-line es/no-object-create -- safe
	  var O = Object.create(null);
	  O[2] = 2;
	  return !propertyIsEnumerable(O, 2);
	});

	// `Object.{ entries, values }` methods implementation
	var createMethod$2 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject$1(it);
	    var keys = objectKeys$1(O);
	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS$e || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
	        push$8(result, TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod$2(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod$2(false)
	};

	var $$F = _export;
	var $entries = objectToArray.entries;

	// `Object.entries` method
	// https://tc39.es/ecma262/#sec-object.entries
	$$F({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	var $$E = _export;
	var FREEZING = freezing;
	var fails$n = fails$19;
	var isObject$a = isObject$D;
	var onFreeze = internalMetadataExports.onFreeze;

	// eslint-disable-next-line es/no-object-freeze -- safe
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$1 = fails$n(function () { $freeze(1); });

	// `Object.freeze` method
	// https://tc39.es/ecma262/#sec-object.freeze
	$$E({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !FREEZING }, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$a(it) ? $freeze(onFreeze(it)) : it;
	  }
	});

	var $$D = _export;
	var fails$m = fails$19;
	var toObject$5 = toObject$k;
	var nativeGetPrototypeOf = objectGetPrototypeOf$1;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var FAILS_ON_PRIMITIVES = fails$m(function () { nativeGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	$$D({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$5(it));
	  }
	});

	var $$C = _export;
	var setPrototypeOf$4 = objectSetPrototypeOf;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	$$C({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf$4
	});

	var $$B = _export;
	var call$d = functionCall;
	var aCallable$6 = aCallable$p;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$4;
	var iterate$4 = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	$$B({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
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
	        call$d(promiseResolve, C, promise).then(function (value) {
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

	var $$A = _export;
	var uncurryThis$x = functionUncurryThisClause;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var toLength$5 = toLength$9;
	var toString$e = toString$t;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$6 = requireObjectCoercible$f;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic;

	var slice$2 = uncurryThis$x(''.slice);
	var min$5 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('endsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
	  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.endsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.endswith
	$$A({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = toString$e(requireObjectCoercible$6(this));
	    notARegExp$1(searchString);
	    var search = toString$e(searchString);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = that.length;
	    var end = endPosition === undefined ? len : min$5(toLength$5(endPosition), len);
	    return slice$2(that, end - search.length, end) === search;
	  }
	});

	var $$z = _export;
	var globalThis$x = globalThis_1;
	var defineBuiltInAccessor$a = defineBuiltInAccessor$h;
	var DESCRIPTORS$d = descriptors;

	var $TypeError$9 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;
	var INCORRECT_VALUE = globalThis$x.self !== globalThis$x;

	// `self` getter
	// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
	try {
	  if (DESCRIPTORS$d) {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    var descriptor$2 = Object.getOwnPropertyDescriptor(globalThis$x, 'self');
	    // some engines have `self`, but with incorrect descriptor
	    // https://github.com/denoland/deno/issues/15765
	    if (INCORRECT_VALUE || !descriptor$2 || !descriptor$2.get || !descriptor$2.enumerable) {
	      defineBuiltInAccessor$a(globalThis$x, 'self', {
	        get: function self() {
	          return globalThis$x;
	        },
	        set: function self(value) {
	          if (this !== globalThis$x) throw new $TypeError$9('Illegal invocation');
	          defineProperty$2(globalThis$x, 'self', {
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
	  } else $$z({ global: true, simple: true, forced: INCORRECT_VALUE }, {
	    self: globalThis$x
	  });
	} catch (error) { /* empty */ }

	var fails$l = fails$19;
	var wellKnownSymbol$6 = wellKnownSymbol$z;
	var DESCRIPTORS$c = descriptors;
	var IS_PURE = isPure;

	var ITERATOR$4 = wellKnownSymbol$6('iterator');

	var urlConstructorDetection = !fails$l(function () {
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
	    || !params[ITERATOR$4]
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

	// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
	var uncurryThis$w = functionUncurryThis;

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

	var $RangeError$6 = RangeError;
	var exec$5 = uncurryThis$w(regexSeparators.exec);
	var floor$8 = Math.floor;
	var fromCharCode$4 = String.fromCharCode;
	var charCodeAt = uncurryThis$w(''.charCodeAt);
	var join$7 = uncurryThis$w([].join);
	var push$7 = uncurryThis$w([].push);
	var replace$5 = uncurryThis$w(''.replace);
	var split$2 = uncurryThis$w(''.split);
	var toLowerCase$1 = uncurryThis$w(''.toLowerCase);

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
	        push$7(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        push$7(output, value);
	        counter--;
	      }
	    } else {
	      push$7(output, value);
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
	  delta = firstTime ? floor$8(delta / damp) : delta >> 1;
	  delta += floor$8(delta / numPoints);
	  while (delta > baseMinusTMin * tMax >> 1) {
	    delta = floor$8(delta / baseMinusTMin);
	    k += base;
	  }
	  return floor$8(k + (baseMinusTMin + 1) * delta / (delta + skew));
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
	      push$7(output, fromCharCode$4(currentValue));
	    }
	  }

	  var basicLength = output.length; // number of basic code points.
	  var handledCPCount = basicLength; // number of code points that have been handled;

	  // Finish the basic string with a delimiter unless it's empty.
	  if (basicLength) {
	    push$7(output, delimiter);
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
	    if (m - n > floor$8((maxInt - delta) / handledCPCountPlusOne)) {
	      throw new $RangeError$6(OVERFLOW_ERROR);
	    }

	    delta += (m - n) * handledCPCountPlusOne;
	    n = m;

	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];
	      if (currentValue < n && ++delta > maxInt) {
	        throw new $RangeError$6(OVERFLOW_ERROR);
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
	          push$7(output, fromCharCode$4(digitToBasic(t + qMinusT % baseMinusT)));
	          q = floor$8(qMinusT / baseMinusT);
	          k += base;
	        }

	        push$7(output, fromCharCode$4(digitToBasic(q)));
	        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
	        delta = 0;
	        handledCPCount++;
	      }
	    }

	    delta++;
	    n++;
	  }
	  return join$7(output, '');
	};

	var stringPunycodeToAscii = function (input) {
	  var encoded = [];
	  var labels = split$2(replace$5(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
	  var i, label;
	  for (i = 0; i < labels.length; i++) {
	    label = labels[i];
	    push$7(encoded, exec$5(regexNonASCII, label) ? 'xn--' + encode$1(label) : label);
	  }
	  return join$7(encoded, '.');
	};

	var $$y = _export;
	var uncurryThis$v = functionUncurryThis;
	var toAbsoluteIndex$3 = toAbsoluteIndex$7;

	var $RangeError$5 = RangeError;
	var fromCharCode$3 = String.fromCharCode;
	// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
	var $fromCodePoint = String.fromCodePoint;
	var join$6 = uncurryThis$v([].join);

	// length should be 1, old FF problem
	var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

	// `String.fromCodePoint` method
	// https://tc39.es/ecma262/#sec-string.fromcodepoint
	$$y({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  fromCodePoint: function fromCodePoint(x) {
	    var elements = [];
	    var length = arguments.length;
	    var i = 0;
	    var code;
	    while (length > i) {
	      code = +arguments[i];
	      if (toAbsoluteIndex$3(code, 0x10FFFF) !== code) throw new $RangeError$5(code + ' is not a valid code point');
	      elements[i++] = code < 0x10000
	        ? fromCharCode$3(code)
	        : fromCharCode$3(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
	    } return join$6(elements, '');
	  }
	});

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var getBuiltIn$6 = getBuiltIn$m;
	var uncurryThis$u = functionUncurryThis;

	var fromCharCode$2 = String.fromCharCode;
	var fromCodePoint = getBuiltIn$6('String', 'fromCodePoint');
	var $encodeURIComponent = encodeURIComponent;
	var $parseInt$2 = parseInt;
	var charAt$6 = uncurryThis$u(''.charAt);
	var push$6 = uncurryThis$u([].push);
	var replace$4 = uncurryThis$u(''.replace);
	var stringSlice$7 = uncurryThis$u(''.slice);
	var exec$4 = uncurryThis$u(/./.exec);

	var FALLBACK_REPLACER = '\uFFFD';
	var VALID_HEX = /^[0-9a-f]+$/i;
	// a surrogate pair is matched first, so a one-unit match is always a lone surrogate
	var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;

	var parseHexOctet = function (string, start) {
	  var substr = stringSlice$7(string, start, start + 2);
	  if (!exec$4(VALID_HEX, substr)) return NaN;

	  return $parseInt$2(substr, 16);
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
	    var decodedChar = charAt$6(input, i);

	    if (decodedChar === '%') {
	      if (charAt$6(input, i + 1) === '%' || i + 3 > length) {
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
	        decodedChar = fromCharCode$2(octet);
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
	          if (i + 3 > length || charAt$6(input, i) !== '%') break;

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

	          push$6(octets, nextByte);
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

	var arraySlice$4 = arraySlice$9;

	var floor$7 = Math.floor;

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
	    var middle = floor$7(length / 2);
	    var left = sort$1(arraySlice$4(array, 0, middle), comparefn);
	    var right = sort$1(arraySlice$4(array, middle), comparefn);
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

	var $$x = _export;
	var globalThis$w = globalThis_1;
	var safeGetBuiltIn = safeGetBuiltIn$2;
	var call$c = functionCall;
	var uncurryThis$t = functionUncurryThis;
	var DESCRIPTORS$b = descriptors;
	var USE_NATIVE_URL$1 = urlConstructorDetection;
	var percentCoding$1 = urlPercentCoding;
	var defineBuiltIn$7 = defineBuiltIn$m;
	var defineBuiltInAccessor$9 = defineBuiltInAccessor$h;
	var defineBuiltIns$1 = defineBuiltIns$6;
	var setToStringTag$3 = setToStringTag$e;
	var createIteratorConstructor = iteratorCreateConstructor;
	var InternalStateModule$5 = internalState;
	var anInstance$5 = anInstance$b;
	var isCallable$4 = isCallable$z;
	var hasOwn$9 = hasOwnProperty_1;
	var bind$3 = functionBindContext;
	var classof$9 = classof$l;
	var anObject$9 = anObject$C;
	var isObject$9 = isObject$D;
	var $toString$1 = toString$t;
	var create$4 = objectCreate;
	var createPropertyDescriptor$4 = createPropertyDescriptor$b;
	var getIterator$1 = getIteratorInternal;
	var getIteratorMethod$1 = getIteratorMethodInternal;
	var createIterResultObject = createIterResultObject$5;
	var validateArgumentsLength$5 = validateArgumentsLength$9;
	var wellKnownSymbol$5 = wellKnownSymbol$z;
	var arraySort = arraySort$1;

	var ITERATOR$3 = wellKnownSymbol$5('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState$4 = InternalStateModule$5.set;
	var getInternalParamsState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS_ITERATOR);
	var percentDecode$1 = percentCoding$1.decode;
	var percentEncode$1 = percentCoding$1.encode;

	var nativeFetch = safeGetBuiltIn('fetch');
	var NativeRequest = safeGetBuiltIn('Request');
	var Headers = safeGetBuiltIn('Headers');
	var RequestPrototype = NativeRequest && NativeRequest.prototype;
	var HeadersPrototype = Headers && Headers.prototype;
	var TypeError$6 = globalThis$w.TypeError;
	var charAt$5 = uncurryThis$t(''.charAt);
	var join$5 = uncurryThis$t([].join);
	var push$5 = uncurryThis$t([].push);
	var replace$3 = uncurryThis$t(''.replace);
	var shift$1 = uncurryThis$t([].shift);
	var splice = uncurryThis$t([].splice);
	var split$1 = uncurryThis$t(''.split);
	var stringSlice$6 = uncurryThis$t(''.slice);

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
	  setInternalState$4(this, {
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
	    if (isObject$9(init)) this.parseObject(init);
	    else this.parseQuery(typeof init == 'string' ? charAt$5(init, 0) === '?' ? stringSlice$6(init, 1) : init : $toString$1(init));
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
	      while (!(step = call$c(next, iterator)).done) {
	        entryIterator = getIterator$1(anObject$9(step.value));
	        entryNext = entryIterator.next;
	        if (
	          (first = call$c(entryNext, entryIterator)).done ||
	          (second = call$c(entryNext, entryIterator)).done ||
	          !call$c(entryNext, entryIterator).done
	        ) throw new TypeError$6('Expected sequence with length 2');
	        push$5(entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
	      }
	    } else for (var key in object) if (hasOwn$9(object, key)) {
	      push$5(entries, { key: key, value: $toString$1(object[key]) });
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
	          push$5(entries, {
	            key: decodeQueryComponent(shift$1(entry)),
	            value: decodeQueryComponent(join$5(entry, '='))
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
	      push$5(result, serialize(entry.key) + '=' + serialize(entry.value));
	    } return join$5(result, '&');
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
	  anInstance$5(this, URLSearchParamsPrototype$3);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var state = setInternalState$4(this, new URLSearchParamsState(init));
	  if (!DESCRIPTORS$b) this.size = state.entries.length;
	};

	var URLSearchParamsPrototype$3 = URLSearchParamsConstructor.prototype;

	defineBuiltIns$1(URLSearchParamsPrototype$3, {
	  // `URLSearchParams.prototype.append` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength$5(arguments.length, 2);
	    push$5(state.entries, { key: $toString$1(name), value: $toString$1(value) });
	    if (!DESCRIPTORS$b) this.size++;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.delete` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
	  'delete': function (name /* , value */) {
	    var state = getInternalParamsState(this);
	    var length = validateArgumentsLength$5(arguments.length, 1);
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
	    if (!DESCRIPTORS$b) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.get` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
	  get: function get(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength$5(arguments.length, 1);
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
	    validateArgumentsLength$5(arguments.length, 1);
	    var key = $toString$1(name);
	    var result = [];
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) push$5(result, entries[index].value);
	    }
	    return result;
	  },
	  // `URLSearchParams.prototype.has` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
	  has: function has(name /* , value */) {
	    var entries = getInternalParamsState(this).entries;
	    var length = validateArgumentsLength$5(arguments.length, 1);
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
	    validateArgumentsLength$5(arguments.length, 2);
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
	    if (!found) push$5(entries, { key: key, value: val });
	    if (!DESCRIPTORS$b) this.size = entries.length;
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
	    var boundFunction = bind$3(callback, arguments.length > 1 ? arguments[1] : undefined);
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
	defineBuiltIn$7(URLSearchParamsPrototype$3, ITERATOR$3, URLSearchParamsPrototype$3.entries, { name: 'entries' });

	// `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
	defineBuiltIn$7(URLSearchParamsPrototype$3, 'toString', function toString() {
	  return getInternalParamsState(this).serialize();
	}, { enumerable: true });

	// `URLSearchParams.prototype.size` getter
	// https://url.spec.whatwg.org/#dom-urlsearchparams-size
	if (DESCRIPTORS$b) defineBuiltInAccessor$9(URLSearchParamsPrototype$3, 'size', {
	  get: function size() {
	    return getInternalParamsState(this).entries.length;
	  },
	  configurable: true,
	  enumerable: true
	});

	setToStringTag$3(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

	$$x({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
	  URLSearchParams: URLSearchParamsConstructor
	});

	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
	if (!USE_NATIVE_URL$1 && isCallable$4(Headers)) {
	  var headersHas = uncurryThis$t(HeadersPrototype.has);
	  var headersSet = uncurryThis$t(HeadersPrototype.set);

	  var wrapRequestOptions = function (init) {
	    if (isObject$9(init)) {
	      var body = init.body;
	      var headers;
	      if (classof$9(body) === URL_SEARCH_PARAMS) {
	        headers = init.headers ? new Headers(init.headers) : new Headers();
	        if (!headersHas(headers, 'content-type')) {
	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	        return create$4(init, {
	          body: createPropertyDescriptor$4(0, $toString$1(body)),
	          headers: createPropertyDescriptor$4(0, headers)
	        });
	      }
	    } return init;
	  };

	  if (isCallable$4(nativeFetch)) {
	    $$x({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
	      fetch: function fetch(input /* , init */) {
	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	      }
	    });
	  }

	  if (isCallable$4(NativeRequest)) {
	    var RequestConstructor = function Request(input /* , init */) {
	      anInstance$5(this, RequestPrototype);
	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	    };

	    RequestPrototype.constructor = RequestConstructor;
	    RequestConstructor.prototype = RequestPrototype;

	    $$x({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
	      Request: RequestConstructor
	    });
	  }
	}

	var web_urlSearchParams_constructor = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var $$w = _export;
	var DESCRIPTORS$a = descriptors;
	var USE_NATIVE_URL = urlConstructorDetection;
	var globalThis$v = globalThis_1;
	var bind$2 = functionBindContext;
	var uncurryThis$s = functionUncurryThis;
	var defineBuiltIn$6 = defineBuiltIn$m;
	var defineBuiltInAccessor$8 = defineBuiltInAccessor$h;
	var anInstance$4 = anInstance$b;
	var hasOwn$8 = hasOwnProperty_1;
	var assign = objectAssign;
	var arrayFrom = arrayFrom$1;
	var arraySlice$3 = arraySlice$9;
	var codeAt = stringMultibyte.codeAt;
	var toASCII = stringPunycodeToAscii;
	var percentCoding = urlPercentCoding;
	var $toString = toString$t;
	var setToStringTag$2 = setToStringTag$e;
	var validateArgumentsLength$4 = validateArgumentsLength$9;
	var URLSearchParamsModule = web_urlSearchParams_constructor;
	var InternalStateModule$4 = internalState;

	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalURLState = InternalStateModule$4.getterFor('URL');
	var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;
	var percentDecode = percentCoding.decode;
	var percentEncode = percentCoding.encode;

	var NativeURL = globalThis$v.URL;
	var TypeError$5 = globalThis$v.TypeError;
	var parseInt$1 = globalThis$v.parseInt;
	var floor$6 = Math.floor;
	var pow$1 = Math.pow;
	var fromCharCode$1 = String.fromCharCode;
	var charAt$4 = uncurryThis$s(''.charAt);
	var exec$3 = uncurryThis$s(/./.exec);
	var join$4 = uncurryThis$s([].join);
	var numberToString$1 = uncurryThis$s(1.1.toString);
	var pop = uncurryThis$s([].pop);
	var push$4 = uncurryThis$s([].push);
	var replace$2 = uncurryThis$s(''.replace);
	var shift = uncurryThis$s([].shift);
	var split = uncurryThis$s(''.split);
	var stringIndexOf$2 = uncurryThis$s(''.indexOf);
	var stringSlice$5 = uncurryThis$s(''.slice);
	var toLowerCase = uncurryThis$s(''.toLowerCase);
	var unshift = uncurryThis$s([].unshift);

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
	  if (code <= 0xFFFF && stringIndexOf$2(MAPPED_ONTO_FORBIDDEN, fromCharCode$1(code)) > -1) return 0x20;
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
	  if (!exec$3(NON_ASCII, domain)) return domain === '' ? null : toASCII(domain);
	  var codePoints = arrayFrom(domain);
	  var result = '';
	  var index, code, mapped;
	  for (index = 0; index < codePoints.length; index++) {
	    code = codeAt(codePoints[index], 0);
	    if (isDisallowedCodePoint(code)) return null;
	    if (isIgnoredCodePoint(code)) continue;
	    mapped = mapCodePoint(code);
	    result += mapped === code ? codePoints[index] : fromCharCode$1(mapped);
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
	  if (exec$3(DEC, last)) return true;
	  if (exec$3(HEX_START, last)) {
	    hexPart = stringSlice$5(last, 2);
	    return hexPart === '' || !!exec$3(HEX, hexPart);
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
	    if (part.length > 1 && charAt$4(part, 0) === '0') {
	      radix = exec$3(HEX_START, part) ? 16 : 8;
	      part = stringSlice$5(part, radix === 8 ? 1 : 2);
	    }
	    if (part === '') {
	      number = 0;
	    } else {
	      if (!exec$3(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
	      number = parseInt$1(part, radix);
	    }
	    push$4(numbers, number);
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
	    return charAt$4(input, pointer);
	  };

	  if (chr() === ':') {
	    if (charAt$4(input, 1) !== ':') return;
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
	    while (length < 4 && exec$3(HEX, chr())) {
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
	        if (!exec$3(DIGIT, chr())) return;
	        while (exec$3(DIGIT, chr())) {
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
	      host = floor$6(host / 256);
	    }
	    return join$4(result, '.');
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
	  return code >= 0x20 && code < 0x7F && !hasOwn$8(set, chr) ? chr : chr === "'" && hasOwn$8(set, chr) ? '%27' : percentEncode(chr);
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
	  return string.length === 2 && exec$3(ALPHA, charAt$4(string, 0))
	    && ((second = charAt$4(string, 1)) === ':' || (!normalized && second === '|'));
	};

	// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
	var startsWithWindowsDriveLetter = function (string) {
	  var third;
	  return string.length > 1 && isWindowsDriveLetter(stringSlice$5(string, 0, 2)) && (
	    string.length === 2 ||
	    ((third = charAt$4(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
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
	          if (chr && exec$3(ALPHA, chr)) {
	            buffer += toLowerCase(chr);
	            state = SCHEME;
	          } else if (!stateOverride) {
	            state = NO_SCHEME;
	            continue;
	          } else return INVALID_SCHEME;
	          break;

	        case SCHEME:
	          if (chr && exec$3(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) {
	            buffer += toLowerCase(chr);
	          } else if (chr === ':') {
	            if (stateOverride && (
	              (url.isSpecial() !== hasOwn$8(specialSchemes, buffer)) ||
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
	              push$4(url.path, '');
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
	            url.path = arraySlice$3(base.path);
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
	            url.path = arraySlice$3(base.path);
	            url.query = base.query;
	          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
	            state = RELATIVE_SLASH;
	          } else if (chr === '?') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$3(base.path);
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$3(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            state = FRAGMENT;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$3(base.path);
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
	          if (exec$3(DIGIT, chr)) {
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
	                url.path = arraySlice$3(base.path);
	                url.query = base.query;
	                break;
	              case '?':
	                url.host = base.host;
	                url.path = arraySlice$3(base.path);
	                url.query = '';
	                state = QUERY;
	                break;
	              case '#':
	                url.host = base.host;
	                url.path = arraySlice$3(base.path);
	                url.query = base.query;
	                url.fragment = '';
	                state = FRAGMENT;
	                break;
	              default:
	                url.host = base.host;
	                if (!startsWithWindowsDriveLetter(join$4(arraySlice$3(codePoints, pointer), ''))) {
	                  url.path = arraySlice$3(base.path);
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
	            if (!startsWithWindowsDriveLetter(join$4(arraySlice$3(codePoints, pointer), ''))
	              && isWindowsDriveLetter(base.path[0], true)) push$4(url.path, base.path[0]);
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
	                push$4(url.path, '');
	              }
	            } else if (isSingleDot(buffer)) {
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push$4(url.path, '');
	              }
	            } else {
	              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	                // eslint-disable-next-line max-depth -- ok
	                if (url.host !== null && url.host !== '') url.host = '';
	                buffer = charAt$4(buffer, 0) + ':'; // normalize windows drive letter
	              }
	              push$4(url.path, buffer);
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
	    if (charAt$4(input, 0) === '[') {
	      if (charAt$4(input, input.length - 1) !== ']') return INVALID_HOST;
	      result = parseIPv6(stringSlice$5(input, 1, -1));
	      if (!result) return INVALID_HOST;
	      this.host = result;
	    // opaque host
	    } else if (!this.isSpecial()) {
	      if (exec$3(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
	      result = '';
	      codePoints = arrayFrom(input);
	      for (index = 0; index < codePoints.length; index++) {
	        result += utf8PercentEncode(codePoints[index], C0ControlPercentEncodeSet);
	      }
	      this.host = result;
	    } else {
	      input = domainToASCII(percentDecode(input));
	      if (input === null || exec$3(FORBIDDEN_DOMAIN_CODE_POINT, input)) return INVALID_HOST;
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
	    return hasOwn$8(specialSchemes, this.scheme);
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
	    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join$4(path, '/') : '';
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
	    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join$4(path, '/') : '';
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
	      if (charAt$4(search, 0) === '?') search = stringSlice$5(search, 1);
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
	    if (charAt$4(hash, 0) === '#') hash = stringSlice$5(hash, 1);
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
	  var that = anInstance$4(this, URLPrototype);
	  var base = validateArgumentsLength$4(arguments.length, 1) > 1 ? arguments[1] : undefined;
	  var state = setInternalState$3(that, new URLState(url, false, base));
	  if (!DESCRIPTORS$a) {
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

	if (DESCRIPTORS$a) {
	  // `URL.prototype.href` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-href
	  defineBuiltInAccessor$8(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
	  // `URL.prototype.origin` getter
	  // https://url.spec.whatwg.org/#dom-url-origin
	  defineBuiltInAccessor$8(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
	  // `URL.prototype.protocol` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  defineBuiltInAccessor$8(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
	  // `URL.prototype.username` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-username
	  defineBuiltInAccessor$8(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
	  // `URL.prototype.password` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-password
	  defineBuiltInAccessor$8(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
	  // `URL.prototype.host` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-host
	  defineBuiltInAccessor$8(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
	  // `URL.prototype.hostname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  defineBuiltInAccessor$8(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
	  // `URL.prototype.port` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-port
	  defineBuiltInAccessor$8(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
	  // `URL.prototype.pathname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  defineBuiltInAccessor$8(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
	  // `URL.prototype.search` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-search
	  defineBuiltInAccessor$8(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
	  // `URL.prototype.searchParams` getter
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  defineBuiltInAccessor$8(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
	  // `URL.prototype.hash` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hash
	  defineBuiltInAccessor$8(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
	}

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	defineBuiltIn$6(URLPrototype, 'toJSON', function toJSON() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	// `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior
	defineBuiltIn$6(URLPrototype, 'toString', function toString() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
	  // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  if (nativeCreateObjectURL) defineBuiltIn$6(URLConstructor, 'createObjectURL', bind$2(nativeCreateObjectURL, NativeURL));
	  // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  if (nativeRevokeObjectURL) defineBuiltIn$6(URLConstructor, 'revokeObjectURL', bind$2(nativeRevokeObjectURL, NativeURL));
	}

	setToStringTag$2(URLConstructor, 'URL');

	$$w({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS$a }, {
	  URL: URLConstructor
	});

	var globalThis$u = globalThis_1;

	var getBuiltInPrototypeMethod$1 = function (CONSTRUCTOR, METHOD) {
	  var Constructor = globalThis$u[CONSTRUCTOR];
	  var Prototype = Constructor && Constructor.prototype;
	  return Prototype && Prototype[METHOD];
	};

	var $$v = _export;
	var call$b = functionCall;
	var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$1;

	var toString$d = getBuiltInPrototypeMethod('URL', 'toString');

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	$$v({ target: 'URL', proto: true, enumerable: true }, {
	  toJSON: function toJSON() {
	    return call$b(toString$d, this);
	  }
	});

	var defineBuiltIn$5 = defineBuiltIn$m;
	var uncurryThis$r = functionUncurryThis;
	var toString$c = toString$t;
	var validateArgumentsLength$3 = validateArgumentsLength$9;

	var $URLSearchParams$1 = URLSearchParams;
	var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
	var append = uncurryThis$r(URLSearchParamsPrototype$2.append);
	var $delete = uncurryThis$r(URLSearchParamsPrototype$2['delete']);
	var forEach$2 = uncurryThis$r(URLSearchParamsPrototype$2.forEach);
	var push$3 = uncurryThis$r([].push);
	var params$1 = new $URLSearchParams$1('a=1&a=2&b=3');

	params$1['delete']('a', 1);
	// `undefined` case is a Chromium 117 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
	params$1['delete']('b', undefined);

	if (params$1 + '' !== 'a=2') {
	  defineBuiltIn$5(URLSearchParamsPrototype$2, 'delete', function (name /* , value */) {
	    var length = arguments.length;
	    var $value = length < 2 ? undefined : arguments[1];
	    if (length && $value === undefined) return $delete(this, name);
	    var entries = [];
	    forEach$2(this, function (v, k) { // also validates `this`
	      push$3(entries, { key: k, value: v });
	    });
	    validateArgumentsLength$3(length, 1);
	    var key = toString$c(name);
	    var value = toString$c($value);
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

	var defineBuiltIn$4 = defineBuiltIn$m;
	var uncurryThis$q = functionUncurryThis;
	var toString$b = toString$t;
	var validateArgumentsLength$2 = validateArgumentsLength$9;

	var $URLSearchParams = URLSearchParams;
	var URLSearchParamsPrototype$1 = $URLSearchParams.prototype;
	var getAll = uncurryThis$q(URLSearchParamsPrototype$1.getAll);
	var $has = uncurryThis$q(URLSearchParamsPrototype$1.has);
	var params = new $URLSearchParams('a=1');

	// `undefined` case is a Chromium 117 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
	if (params.has('a', 2) || !params.has('a', undefined)) {
	  defineBuiltIn$4(URLSearchParamsPrototype$1, 'has', function has(name /* , value */) {
	    var length = arguments.length;
	    var $value = length < 2 ? undefined : arguments[1];
	    if (length && $value === undefined) return $has(this, name);
	    var values = getAll(this, name); // also validates `this`
	    validateArgumentsLength$2(length, 1);
	    var value = toString$b($value);
	    var index = 0;
	    while (index < values.length) {
	      if (values[index++] === value) return true;
	    } return false;
	  }, { enumerable: true, unsafe: true });
	}

	var DESCRIPTORS$9 = descriptors;
	var uncurryThis$p = functionUncurryThis;
	var defineBuiltInAccessor$7 = defineBuiltInAccessor$h;

	var URLSearchParamsPrototype = URLSearchParams.prototype;
	var forEach$1 = uncurryThis$p(URLSearchParamsPrototype.forEach);

	// `URLSearchParams.prototype.size` getter
	// https://github.com/whatwg/url/pull/734
	if (DESCRIPTORS$9 && !('size' in URLSearchParamsPrototype)) {
	  defineBuiltInAccessor$7(URLSearchParamsPrototype, 'size', {
	    get: function size() {
	      var count = 0;
	      forEach$1(this, function () { count++; });
	      return count;
	    },
	    configurable: true,
	    enumerable: true
	  });
	}

	var $$u = _export;
	var globalThis$t = globalThis_1;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var getPrototypeOf$3 = objectGetPrototypeOf$1;
	var setPrototypeOf$3 = objectSetPrototypeOf;
	var copyConstructorProperties$1 = copyConstructorProperties$6;
	var create$3 = objectCreate;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$g;
	var createPropertyDescriptor$3 = createPropertyDescriptor$b;
	var installErrorStack = errorStackInstall;
	var normalizeStringArgument$2 = normalizeStringArgument$5;
	var wellKnownSymbol$4 = wellKnownSymbol$z;
	var fails$k = fails$19;

	var NativeSuppressedError = globalThis$t.SuppressedError;
	var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
	var $Error = Error;

	// https://github.com/oven-sh/bun/issues/9282
	var WRONG_ARITY$1 = !!NativeSuppressedError && NativeSuppressedError.length !== 3;

	// https://github.com/oven-sh/bun/issues/9283
	var EXTRA_ARGS_SUPPORT = !!NativeSuppressedError && fails$k(function () {
	  return new NativeSuppressedError(1, 2, 3, { cause: 4 }).cause === 4;
	});

	var PATCH = WRONG_ARITY$1 || EXTRA_ARGS_SUPPORT;

	var $SuppressedError = function SuppressedError(error, suppressed, message) {
	  var isInstance = isPrototypeOf$3(SuppressedErrorPrototype, this);
	  var that;
	  if (setPrototypeOf$3) {
	    that = PATCH && (!isInstance || getPrototypeOf$3(this) === SuppressedErrorPrototype)
	      ? new NativeSuppressedError()
	      : setPrototypeOf$3(new $Error(), isInstance ? getPrototypeOf$3(this) : SuppressedErrorPrototype);
	  } else {
	    that = isInstance ? this : create$3(SuppressedErrorPrototype);
	    createNonEnumerableProperty$5(that, TO_STRING_TAG$1, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty$5(that, 'message', normalizeStringArgument$2(message));
	  installErrorStack(that, $SuppressedError, that.stack, 1);
	  createNonEnumerableProperty$5(that, 'error', error);
	  createNonEnumerableProperty$5(that, 'suppressed', suppressed);
	  return that;
	};

	if (setPrototypeOf$3) setPrototypeOf$3($SuppressedError, $Error);
	else copyConstructorProperties$1($SuppressedError, $Error, { name: true });

	var SuppressedErrorPrototype = $SuppressedError.prototype = PATCH ? NativeSuppressedError.prototype : create$3($Error.prototype, {
	  constructor: createPropertyDescriptor$3(1, $SuppressedError),
	  message: createPropertyDescriptor$3(1, ''),
	  name: createPropertyDescriptor$3(1, 'SuppressedError')
	});

	if (PATCH && true) SuppressedErrorPrototype.constructor = $SuppressedError;

	// `SuppressedError` constructor
	// https://github.com/tc39/proposal-explicit-resource-management
	$$u({ global: true, constructor: true, arity: 3, forced: PATCH }, {
	  SuppressedError: $SuppressedError
	});

	var $$t = _export;
	var uncurryThis$o = functionUncurryThis;
	var isArray = isArray$8;

	var nativeReverse = uncurryThis$o([].reverse);
	var test$1 = [1, 2];

	// `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794
	$$t({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse(this);
	  }
	});

	var userAgent$2 = environmentUserAgent;

	var firefox = userAgent$2.match(/firefox\/(\d+)/i);

	var environmentFfVersion = !!firefox && +firefox[1];

	var UA = environmentUserAgent;

	var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

	var userAgent$1 = environmentUserAgent;

	var webkit = userAgent$1.match(/AppleWebKit\/(\d+)\./);

	var environmentWebkitVersion = !!webkit && +webkit[1];

	var $$s = _export;
	var uncurryThis$n = functionUncurryThis;
	var aCallable$5 = aCallable$p;
	var toObject$4 = toObject$k;
	var lengthOfArrayLike$a = lengthOfArrayLike$n;
	var deletePropertyOrThrow$1 = deletePropertyOrThrow$4;
	var toString$a = toString$t;
	var fails$j = fails$19;
	var internalSort$1 = arraySort$1;
	var arrayMethodIsStrict = arrayMethodIsStrict$5;
	var FF$1 = environmentFfVersion;
	var IE_OR_EDGE$1 = environmentIsIeOrEdge;
	var V8$2 = environmentV8Version;
	var WEBKIT$1 = environmentWebkitVersion;

	var test = [];
	var nativeSort$1 = uncurryThis$n(test.sort);
	var push$2 = uncurryThis$n(test.push);

	// IE8-
	var FAILS_ON_UNDEFINED = fails$j(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails$j(function () {
	  test.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD = arrayMethodIsStrict('sort');

	var STABLE_SORT$1 = !fails$j(function () {
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

	var FORCED$5 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

	var getSortCompare$1 = function (comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    var xString = toString$a(x);
	    var yString = toString$a(y);
	    return xString === yString ? 0 : xString > yString ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	$$s({ target: 'Array', proto: true, forced: FORCED$5 }, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable$5(comparefn);

	    var array = toObject$4(this);

	    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

	    var items = [];
	    var arrayLength = lengthOfArrayLike$a(array);
	    var itemsLength, index;

	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push$2(items, array[index]);
	    }

	    internalSort$1(items, getSortCompare$1(comparefn));

	    itemsLength = lengthOfArrayLike$a(items);
	    index = 0;

	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) deletePropertyOrThrow$1(array, index++);

	    return array;
	  }
	});

	// eslint-disable-next-line es/no-typed-arrays -- safe
	var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$d;
	var toLength$4 = toLength$9;

	var $RangeError$4 = RangeError;

	// `ToIndex` abstract operation
	// https://tc39.es/ecma262/#sec-toindex
	var toIndex$3 = function (it) {
	  if (it === undefined) return 0;
	  var number = toIntegerOrInfinity$5(it);
	  var length = toLength$4(number);
	  if (number !== length) throw new $RangeError$4('Wrong length or index');
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
	var floor$5 = Math.floor;
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
	    exponent = floor$5(log(number) / LN2);
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

	var toObject$3 = toObject$k;
	var toAbsoluteIndex$2 = toAbsoluteIndex$7;
	var lengthOfArrayLike$9 = lengthOfArrayLike$n;

	// `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	// eslint-disable-next-line es/no-array-prototype-fill -- fallback included
	var arrayFill$1 = [].fill || function fill(value /* , start = 0, end = @length */) {
	  var O = toObject$3(this);
	  var length = lengthOfArrayLike$9(O);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$2(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	var globalThis$s = globalThis_1;
	var uncurryThis$m = functionUncurryThis;
	var DESCRIPTORS$8 = descriptors;
	var NATIVE_ARRAY_BUFFER$2 = arrayBufferBasicDetection;
	var FunctionName = functionName;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$g;
	var defineBuiltInAccessor$6 = defineBuiltInAccessor$h;
	var defineBuiltIns = defineBuiltIns$6;
	var fails$i = fails$19;
	var anInstance$3 = anInstance$b;
	var toIntegerOrInfinity$4 = toIntegerOrInfinity$d;
	var toIndex$2 = toIndex$3;
	var fround = mathFround;
	var IEEE754 = ieee754;
	var getPrototypeOf$2 = objectGetPrototypeOf$1;
	var setPrototypeOf$2 = objectSetPrototypeOf;
	var arrayFill = arrayFill$1;
	var arraySlice$2 = arraySlice$9;
	var inheritIfRequired$3 = inheritIfRequired$7;
	var copyConstructorProperties = copyConstructorProperties$6;
	var setToStringTag$1 = setToStringTag$e;
	var InternalStateModule$3 = internalState;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var ARRAY_BUFFER$1 = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH$1 = 'Wrong length';
	var WRONG_INDEX = 'Wrong index';
	var getInternalArrayBufferState = InternalStateModule$3.getterFor(ARRAY_BUFFER$1);
	var getInternalDataViewState = InternalStateModule$3.getterFor(DATA_VIEW);
	var setInternalState$2 = InternalStateModule$3.set;
	var NativeArrayBuffer$1 = globalThis$s[ARRAY_BUFFER$1];
	var $ArrayBuffer$1 = NativeArrayBuffer$1;
	var ArrayBufferPrototype$3 = $ArrayBuffer$1 && $ArrayBuffer$1[PROTOTYPE];
	var $DataView = globalThis$s[DATA_VIEW];
	var DataViewPrototype$2 = $DataView && $DataView[PROTOTYPE];
	var ObjectPrototype$1 = Object.prototype;
	var Array$2 = globalThis$s.Array;
	var RangeError$3 = globalThis$s.RangeError;
	var fill = uncurryThis$m(arrayFill);
	var reverse = uncurryThis$m([].reverse);

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
	  defineBuiltInAccessor$6(Constructor[PROTOTYPE], key, {
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
	  var pack = arraySlice$2(bytes, start, start + count);
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
	    anInstance$3(this, ArrayBufferPrototype$3);
	    var byteLength = toIndex$2(length);
	    setInternalState$2(this, {
	      type: ARRAY_BUFFER$1,
	      bytes: fill(Array$2(byteLength), 0),
	      byteLength: byteLength
	    });
	    if (!DESCRIPTORS$8) {
	      this.byteLength = byteLength;
	      this.detached = false;
	    }
	  };

	  ArrayBufferPrototype$3 = $ArrayBuffer$1[PROTOTYPE];

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance$3(this, DataViewPrototype$2);
	    anInstance$3(buffer, ArrayBufferPrototype$3);
	    var bufferState = getInternalArrayBufferState(buffer);
	    var bufferLength = bufferState.byteLength;
	    var offset = toIntegerOrInfinity$4(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
	    byteLength = byteLength === undefined ? bufferLength - offset : toIndex$2(byteLength);
	    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
	    setInternalState$2(this, {
	      type: DATA_VIEW,
	      buffer: buffer,
	      byteLength: byteLength,
	      byteOffset: offset,
	      bytes: bufferState.bytes
	    });
	    if (!DESCRIPTORS$8) {
	      this.buffer = buffer;
	      this.byteLength = byteLength;
	      this.byteOffset = offset;
	    }
	  };

	  DataViewPrototype$2 = $DataView[PROTOTYPE];

	  if (DESCRIPTORS$8) {
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
	  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
	  /* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
	  if (!fails$i(function () {
	    NativeArrayBuffer$1(1);
	  }) || !fails$i(function () {
	    new NativeArrayBuffer$1(-1);
	  }) || fails$i(function () {
	    new NativeArrayBuffer$1();
	    new NativeArrayBuffer$1(1.5);
	    new NativeArrayBuffer$1(NaN);
	    return NativeArrayBuffer$1.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
	  })) {
	    /* eslint-enable no-new, sonarjs/inconsistent-function-call -- required for testing */
	    $ArrayBuffer$1 = function ArrayBuffer(length) {
	      anInstance$3(this, ArrayBufferPrototype$3);
	      return inheritIfRequired$3(new NativeArrayBuffer$1(toIndex$2(length)), this, $ArrayBuffer$1);
	    };

	    $ArrayBuffer$1[PROTOTYPE] = ArrayBufferPrototype$3;

	    ArrayBufferPrototype$3.constructor = $ArrayBuffer$1;

	    copyConstructorProperties($ArrayBuffer$1, NativeArrayBuffer$1);
	  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
	    createNonEnumerableProperty$4(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
	  }

	  // WebKit bug - the same parent prototype for typed arrays and data view
	  if (setPrototypeOf$2 && getPrototypeOf$2(DataViewPrototype$2) !== ObjectPrototype$1) {
	    setPrototypeOf$2(DataViewPrototype$2, ObjectPrototype$1);
	  }

	  // iOS Safari 7.x bug
	  var testView = new $DataView(new $ArrayBuffer$1(2));
	  var $setInt8 = uncurryThis$m(DataViewPrototype$2.setInt8);
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

	setToStringTag$1($ArrayBuffer$1, ARRAY_BUFFER$1);
	setToStringTag$1($DataView, DATA_VIEW);

	var arrayBuffer = {
	  ArrayBuffer: $ArrayBuffer$1,
	  DataView: $DataView
	};

	var $$r = _export;
	var globalThis$r = globalThis_1;
	var arrayBufferModule = arrayBuffer;
	var setSpecies$2 = setSpecies$5;

	var ARRAY_BUFFER = 'ArrayBuffer';
	var ArrayBuffer$6 = arrayBufferModule[ARRAY_BUFFER];
	var NativeArrayBuffer = globalThis$r[ARRAY_BUFFER];

	// `ArrayBuffer` constructor
	// https://tc39.es/ecma262/#sec-arraybuffer-constructor
	$$r({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer$6 }, {
	  ArrayBuffer: ArrayBuffer$6
	});

	setSpecies$2(ARRAY_BUFFER);

	var $$q = _export;
	var uncurryThis$l = functionUncurryThisClause;
	var fails$h = fails$19;
	var ArrayBufferModule$1 = arrayBuffer;
	var anObject$8 = anObject$C;
	var toAbsoluteIndex$1 = toAbsoluteIndex$7;
	var toLength$3 = toLength$9;

	var ArrayBuffer$5 = ArrayBufferModule$1.ArrayBuffer;
	var DataView$4 = ArrayBufferModule$1.DataView;
	var DataViewPrototype$1 = DataView$4.prototype;
	var nativeArrayBufferSlice = uncurryThis$l(ArrayBuffer$5.prototype.slice);
	var getUint8 = uncurryThis$l(DataViewPrototype$1.getUint8);
	var setUint8 = uncurryThis$l(DataViewPrototype$1.setUint8);

	var INCORRECT_SLICE = fails$h(function () {
	  return !new ArrayBuffer$5(2).slice(1, undefined).byteLength;
	});

	// `ArrayBuffer.prototype.slice` method
	// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
	$$q({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
	  slice: function slice(start, end) {
	    if (nativeArrayBufferSlice && end === undefined) {
	      return nativeArrayBufferSlice(anObject$8(this), start); // FF fix
	    }
	    var length = anObject$8(this).byteLength;
	    var first = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    var result = new ArrayBuffer$5(toLength$3(fin - first));
	    var viewSource = new DataView$4(this);
	    var viewTarget = new DataView$4(result);
	    var index = 0;
	    while (first < fin) {
	      setUint8(viewTarget, index++, getUint8(viewSource, first++));
	    } return result;
	  }
	});

	var globalThis$q = globalThis_1;
	var uncurryThisAccessor$1 = functionUncurryThisAccessor;
	var classof$8 = classofRaw$2;

	var ArrayBuffer$4 = globalThis$q.ArrayBuffer;
	var TypeError$4 = globalThis$q.TypeError;

	// Includes
	// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
	// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
	var arrayBufferByteLength$2 = ArrayBuffer$4 && uncurryThisAccessor$1(ArrayBuffer$4.prototype, 'byteLength', 'get') || function (O) {
	  if (classof$8(O) !== 'ArrayBuffer') throw new TypeError$4('ArrayBuffer expected');
	  return O.byteLength;
	};

	var globalThis$p = globalThis_1;
	var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
	var arrayBufferByteLength$1 = arrayBufferByteLength$2;

	var DataView$3 = globalThis$p.DataView;

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

	var DESCRIPTORS$7 = descriptors;
	var defineBuiltInAccessor$5 = defineBuiltInAccessor$h;
	var isDetached$1 = arrayBufferIsDetached;

	var ArrayBufferPrototype$2 = ArrayBuffer.prototype;

	// `ArrayBuffer.prototype.detached` getter
	// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.detached
	if (DESCRIPTORS$7 && !('detached' in ArrayBufferPrototype$2)) {
	  defineBuiltInAccessor$5(ArrayBufferPrototype$2, 'detached', {
	    configurable: true,
	    get: function detached() {
	      return isDetached$1(this);
	    }
	  });
	}

	var isDetached = arrayBufferIsDetached;

	var $TypeError$8 = TypeError;

	var arrayBufferNotDetached = function (it) {
	  if (isDetached(it)) throw new $TypeError$8('ArrayBuffer is detached');
	  return it;
	};

	var globalThis$o = globalThis_1;
	var IS_NODE = environmentIsNode;

	var getBuiltInNodeModule$2 = function (name) {
	  if (IS_NODE) {
	    try {
	      return globalThis$o.process.getBuiltinModule(name);
	    } catch (error) { /* empty */ }
	    try {
	      // eslint-disable-next-line no-new-func -- safe
	      return Function('return require("' + name + '")')();
	    } catch (error) { /* empty */ }
	  }
	};

	var globalThis$n = globalThis_1;
	var fails$g = fails$19;
	var V8$1 = environmentV8Version;
	var ENVIRONMENT = environment;

	var structuredClone$2 = globalThis$n.structuredClone;

	var structuredCloneProperTransfer = !!structuredClone$2 && !fails$g(function () {
	  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if ((ENVIRONMENT === 'DENO' && V8$1 > 92) || (ENVIRONMENT === 'NODE' && V8$1 > 94) || (ENVIRONMENT === 'BROWSER' && V8$1 > 97)) return false;
	  var buffer = new ArrayBuffer(8);
	  var clone = structuredClone$2(buffer, { transfer: [buffer] });
	  return buffer.byteLength !== 0 || clone.byteLength !== 8;
	});

	var globalThis$m = globalThis_1;
	var getBuiltInNodeModule$1 = getBuiltInNodeModule$2;
	var PROPER_STRUCTURED_CLONE_TRANSFER$2 = structuredCloneProperTransfer;

	var structuredClone$1 = globalThis$m.structuredClone;
	var $ArrayBuffer = globalThis$m.ArrayBuffer;
	var $MessageChannel = globalThis$m.MessageChannel;
	var detach = false;
	var WorkerThreads, channel, buffer, $detach;

	if (PROPER_STRUCTURED_CLONE_TRANSFER$2) {
	  detach = function (transferable) {
	    structuredClone$1(transferable, { transfer: [transferable] });
	  };
	} else if ($ArrayBuffer) try {
	  if (!$MessageChannel) {
	    WorkerThreads = getBuiltInNodeModule$1('worker_threads');
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

	var globalThis$l = globalThis_1;
	var uncurryThis$k = functionUncurryThis;
	var uncurryThisAccessor = functionUncurryThisAccessor;
	var toIndex$1 = toIndex$3;
	var notDetached$4 = arrayBufferNotDetached;
	var arrayBufferByteLength = arrayBufferByteLength$2;
	var detachTransferable$1 = detachTransferable$2;
	var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;

	var structuredClone = globalThis$l.structuredClone;
	var ArrayBuffer$3 = globalThis$l.ArrayBuffer;
	var DataView$2 = globalThis$l.DataView;
	var max$1 = Math.max;
	var min$4 = Math.min;
	var ArrayBufferPrototype$1 = ArrayBuffer$3.prototype;
	var DataViewPrototype = DataView$2.prototype;
	var slice$1 = uncurryThis$k(ArrayBufferPrototype$1.slice);
	var isResizable = uncurryThisAccessor(ArrayBufferPrototype$1, 'resizable', 'get');
	var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype$1, 'maxByteLength', 'get');
	var getInt8 = uncurryThis$k(DataViewPrototype.getInt8);
	var setInt8 = uncurryThis$k(DataViewPrototype.setInt8);

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
	    var copyLength = min$4(newByteLength, byteLength);
	    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
	  }
	  if (!PROPER_STRUCTURED_CLONE_TRANSFER$1) detachTransferable$1(arrayBuffer);
	  return newBuffer;
	};

	var $$p = _export;
	var $transfer$1 = arrayBufferTransfer;

	// `ArrayBuffer.prototype.transfer` method
	// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfer
	if ($transfer$1) $$p({ target: 'ArrayBuffer', proto: true }, {
	  transfer: function transfer() {
	    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
	  }
	});

	var $$o = _export;
	var $transfer = arrayBufferTransfer;

	// `ArrayBuffer.prototype.transferToFixedLength` method
	// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfertofixedlength
	if ($transfer) $$o({ target: 'ArrayBuffer', proto: true }, {
	  transferToFixedLength: function transferToFixedLength() {
	    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
	  }
	});

	var $$n = _export;
	var call$a = functionCall;
	var iterate$3 = iterate$f;
	var aCallable$4 = aCallable$p;
	var anObject$7 = anObject$C;
	var getIteratorDirect$2 = getIteratorDirect$9;
	var iteratorClose$1 = iteratorClose$e;
	var iteratorHelperWithoutClosingOnEarlyError$1 = iteratorHelperWithoutClosingOnEarlyError$7;

	var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$1('every', TypeError);

	// `Iterator.prototype.every` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.every
	$$n({ target: 'Iterator', proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
	  every: function every(predicate) {
	    anObject$7(this);
	    try {
	      aCallable$4(predicate);
	    } catch (error) {
	      iteratorClose$1(this, 'throw', error);
	    }

	    if (everyWithoutClosingOnEarlyError) return call$a(everyWithoutClosingOnEarlyError, this, predicate);

	    var record = getIteratorDirect$2(this);
	    var counter = 0;
	    return !iterate$3(record, function (value, stop) {
	      if (!predicate(value, counter++)) return stop();
	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
	  }
	});

	var $$m = _export;
	var call$9 = functionCall;
	var iterate$2 = iterate$f;
	var aCallable$3 = aCallable$p;
	var anObject$6 = anObject$C;
	var getIteratorDirect$1 = getIteratorDirect$9;
	var iteratorClose = iteratorClose$e;
	var iteratorHelperWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError$7;

	var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

	// `Iterator.prototype.some` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.some
	$$m({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
	  some: function some(predicate) {
	    anObject$6(this);
	    try {
	      aCallable$3(predicate);
	    } catch (error) {
	      iteratorClose(this, 'throw', error);
	    }

	    if (someWithoutClosingOnEarlyError) return call$9(someWithoutClosingOnEarlyError, this, predicate);

	    var record = getIteratorDirect$1(this);
	    var counter = 0;
	    return iterate$2(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop();
	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
	  }
	});

	var $$l = _export;
	var anObject$5 = anObject$C;
	var createProperty$1 = createProperty$a;
	var iterate$1 = iterate$f;
	var getIteratorDirect = getIteratorDirect$9;

	// `Iterator.prototype.toArray` method
	// https://tc39.es/ecma262/#sec-iterator.prototype.toarray
	$$l({ target: 'Iterator', proto: true, real: true }, {
	  toArray: function toArray() {
	    var result = [];
	    var index = 0;
	    iterate$1(getIteratorDirect(anObject$5(this)), function (element) {
	      createProperty$1(result, index++, element);
	    }, { IS_RECORD: true });
	    return result;
	  }
	});

	var isObject$8 = isObject$D;

	var floor$4 = Math.floor;

	// `IsIntegralNumber` abstract operation
	// https://tc39.es/ecma262/#sec-isintegralnumber
	// eslint-disable-next-line es/no-number-isinteger -- safe
	var isIntegralNumber$2 = Number.isInteger || function isInteger(it) {
	  return !isObject$8(it) && isFinite(it) && floor$4(it) === it;
	};

	var $$k = _export;
	var isIntegralNumber$1 = isIntegralNumber$2;

	// `Number.isInteger` method
	// https://tc39.es/ecma262/#sec-number.isinteger
	$$k({ target: 'Number', stat: true }, {
	  isInteger: isIntegralNumber$1
	});

	var $$j = _export;

	// `Number.MAX_SAFE_INTEGER` constant
	// https://tc39.es/ecma262/#sec-number.max_safe_integer
	$$j({ target: 'Number', stat: true, nonConfigurable: true, nonWritable: true }, {
	  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
	});

	var $$i = _export;

	// `Number.MIN_SAFE_INTEGER` constant
	// https://tc39.es/ecma262/#sec-number.min_safe_integer
	$$i({ target: 'Number', stat: true, nonConfigurable: true, nonWritable: true }, {
	  MIN_SAFE_INTEGER: -9007199254740991
	});

	var $$h = _export;
	var $values = objectToArray.values;

	// `Object.values` method
	// https://tc39.es/ecma262/#sec-object.values
	$$h({ target: 'Object', stat: true }, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var globalThis$k = globalThis_1;
	var fails$f = fails$19;
	var uncurryThis$j = functionUncurryThis;
	var toString$9 = toString$t;
	var trim$1 = stringTrim.trim;
	var whitespaces$2 = whitespaces$5;

	var $parseInt$1 = globalThis$k.parseInt;
	var Symbol$2 = globalThis$k.Symbol;
	var ITERATOR$2 = Symbol$2 && Symbol$2.iterator;
	var hex = /^[+-]?0x/i;
	var exec$2 = uncurryThis$j(hex.exec);
	var FORCED$4 = $parseInt$1(whitespaces$2 + '08') !== 8 || $parseInt$1(whitespaces$2 + '0x16') !== 22
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR$2 && !fails$f(function () { $parseInt$1(Object(ITERATOR$2)); }));

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
	  var S = trim$1(toString$9(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$g = _export;
	var $parseInt = numberParseInt;

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	$$g({ global: true, forced: parseInt !== $parseInt }, {
	  parseInt: $parseInt
	});

	var $$f = _export;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails$e = fails$19;
	var getBuiltIn$5 = getBuiltIn$m;
	var isCallable$3 = isCallable$z;
	var speciesConstructor$1 = speciesConstructor$3;
	var promiseResolve = promiseResolve$2;
	var defineBuiltIn$3 = defineBuiltIn$m;

	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromiseConstructor && fails$e(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	$$f({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor$1(this, getBuiltIn$5('Promise'));
	    var isFunction = isCallable$3(onFinally);
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
	if (isCallable$3(NativePromiseConstructor)) {
	  var method = getBuiltIn$5('Promise').prototype['finally'];
	  if (NativePromisePrototype['finally'] !== method) {
	    defineBuiltIn$3(NativePromisePrototype, 'finally', method, { unsafe: true });
	  }
	}

	var hasOwn$7 = hasOwnProperty_1;

	var isDataDescriptor$1 = function (descriptor) {
	  return descriptor !== undefined && (hasOwn$7(descriptor, 'value') || hasOwn$7(descriptor, 'writable'));
	};

	var $$e = _export;
	var call$8 = functionCall;
	var isObject$7 = isObject$D;
	var anObject$4 = anObject$C;
	var isDataDescriptor = isDataDescriptor$1;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var getPrototypeOf$1 = objectGetPrototypeOf$1;
	var toPropertyKey$1 = toPropertyKey$5;

	// `Reflect.get` method
	// https://tc39.es/ecma262/#sec-reflect.get
	var $get = function (target, propertyKey, receiver) {
	  if (anObject$4(target) === receiver) return target[propertyKey];
	  var descriptor = getOwnPropertyDescriptorModule$1.f(target, propertyKey);
	  if (descriptor) return isDataDescriptor(descriptor)
	    ? descriptor.value
	    : descriptor.get === undefined ? undefined : call$8(descriptor.get, receiver);
	  var prototype = getPrototypeOf$1(target);
	  if (isObject$7(prototype)) return $get(prototype, propertyKey, receiver);
	};

	$$e({ target: 'Reflect', stat: true }, {
	  get: function get(target, propertyKey /* , receiver */) {
	    return $get(anObject$4(target), toPropertyKey$1(propertyKey), arguments.length < 3 ? target : arguments[2]);
	  }
	});

	var DESCRIPTORS$6 = descriptors;
	var globalThis$j = globalThis_1;
	var uncurryThis$i = functionUncurryThis;
	var isForced = isForced_1;
	var inheritIfRequired$2 = inheritIfRequired$7;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$g;
	var create$2 = objectCreate;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var isRegExp$1 = isRegexp;
	var toString$8 = toString$t;
	var getRegExpFlags$3 = regexpGetFlags;
	var stickyHelpers$1 = regexpStickyHelpers;
	var proxyAccessor = proxyAccessor$2;
	var defineBuiltIn$2 = defineBuiltIn$m;
	var fails$d = fails$19;
	var hasOwn$6 = hasOwnProperty_1;
	var enforceInternalState$2 = internalState.enforce;
	var setSpecies$1 = setSpecies$5;
	var wellKnownSymbol$3 = wellKnownSymbol$z;
	var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var MATCH = wellKnownSymbol$3('match');
	var NativeRegExp = globalThis$j.RegExp;
	var RegExpPrototype$2 = NativeRegExp.prototype;
	var SyntaxError$3 = globalThis$j.SyntaxError;
	var exec$1 = uncurryThis$i(RegExpPrototype$2.exec);
	var charAt$3 = uncurryThis$i(''.charAt);
	var replace$1 = uncurryThis$i(''.replace);
	var stringIndexOf$1 = uncurryThis$i(''.indexOf);
	var stringSlice$4 = uncurryThis$i(''.slice);
	// TODO: Use only proper RegExpIdentifierName
	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

	var MISSED_STICKY$1 = stickyHelpers$1.MISSED_STICKY;
	var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;

	var BASE_FORCED = DESCRIPTORS$6 &&
	  (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG || fails$d(function () {
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
	    chr = charAt$3(string, index);
	    if (chr === '\\') {
	      result += chr + charAt$3(string, ++index);
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
	  var names = create$2(null);
	  var brackets = false;
	  var ncg = false;
	  var groupid = 0;
	  var groupname = '';
	  var chr;
	  for (; index < length; index++) {
	    chr = charAt$3(string, index);
	    if (chr === '\\') {
	      chr += charAt$3(string, ++index);
	      // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
	      if (!ncg && charAt$3(chr, 1) === '\\') {
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
	        if (exec$1(IS_NCG, stringSlice$4(string, index + 1))) {
	          index += 2;
	          ncg = true;
	          groupid++;
	        } else if (charAt$3(string, index + 1) !== '?') {
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
	    while (stringIndexOf$1(result, backref) > -1) {
	      result = replace$1(result, backref, numRef);
	    }
	  } return [result, named];
	};

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (isForced('RegExp', BASE_FORCED)) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = isPrototypeOf$2(RegExpPrototype$2, this);
	    var patternIsRegExp = isRegExp$1(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var groups = [];
	    var rawPattern = pattern;
	    var rawFlags, dotAll, sticky, handled, result, state;

	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
	      return pattern;
	    }

	    if (patternIsRegExp || isPrototypeOf$2(RegExpPrototype$2, pattern)) {
	      pattern = pattern.source;
	      if (flagsAreUndefined) flags = getRegExpFlags$3(rawPattern);
	    }

	    pattern = pattern === undefined ? '' : toString$8(pattern);
	    flags = flags === undefined ? '' : toString$8(flags);
	    rawPattern = pattern;

	    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
	      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
	      if (dotAll) flags = replace$1(flags, /s/g, '');
	    }

	    rawFlags = flags;

	    if (MISSED_STICKY$1 && 'sticky' in re1) {
	      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
	      if (sticky && UNSUPPORTED_Y$1) flags = replace$1(flags, /y/g, '');
	    }

	    if (UNSUPPORTED_NCG) {
	      handled = handleNCG(pattern);
	      pattern = handled[0];
	      groups = handled[1];
	    }

	    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

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

	  RegExpPrototype$2.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$2;
	  defineBuiltIn$2(globalThis$j, 'RegExp', RegExpWrapper, { constructor: true });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies$1('RegExp');

	var DESCRIPTORS$5 = descriptors;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var classof$7 = classofRaw$2;
	var defineBuiltInAccessor$4 = defineBuiltInAccessor$h;
	var getInternalState$4 = internalState.get;

	var RegExpPrototype$1 = RegExp.prototype;
	var $TypeError$7 = TypeError;

	// `RegExp.prototype.dotAll` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
	if (DESCRIPTORS$5 && UNSUPPORTED_DOT_ALL) {
	  defineBuiltInAccessor$4(RegExpPrototype$1, 'dotAll', {
	    configurable: true,
	    get: function dotAll() {
	      if (this === RegExpPrototype$1) return;
	      // We can't use InternalStateModule.getterFor because
	      // we don't add metadata for regexps created by a literal.
	      if (classof$7(this) === 'RegExp') {
	        return !!getInternalState$4(this).dotAll;
	      }
	      throw new $TypeError$7('Incompatible receiver, RegExp required');
	    }
	  });
	}

	var DESCRIPTORS$4 = descriptors;
	var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
	var classof$6 = classofRaw$2;
	var defineBuiltInAccessor$3 = defineBuiltInAccessor$h;
	var getInternalState$3 = internalState.get;

	var RegExpPrototype = RegExp.prototype;
	var $TypeError$6 = TypeError;

	// `RegExp.prototype.sticky` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
	if (DESCRIPTORS$4 && MISSED_STICKY) {
	  defineBuiltInAccessor$3(RegExpPrototype, 'sticky', {
	    configurable: true,
	    get: function sticky() {
	      if (this === RegExpPrototype) return;
	      // We can't use InternalStateModule.getterFor because
	      // we don't add metadata for regexps created by a literal.
	      if (classof$6(this) === 'RegExp') {
	        return !!getInternalState$3(this).sticky;
	      }
	      throw new $TypeError$6('Incompatible receiver, RegExp required');
	    }
	  });
	}

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$d;
	var toString$7 = toString$t;
	var requireObjectCoercible$5 = requireObjectCoercible$f;

	var $RangeError$3 = RangeError;
	var floor$3 = Math.floor;

	// `String.prototype.repeat` method implementation
	// https://tc39.es/ecma262/#sec-string.prototype.repeat
	var stringRepeat = function repeat(count) {
	  var str = toString$7(requireObjectCoercible$5(this));
	  var result = '';
	  var n = toIntegerOrInfinity$3(count);
	  if (n < 0 || n === Infinity) throw new $RangeError$3('Wrong number of repetitions');
	  for (;n > 0; (n = floor$3(n / 2)) && (str += str)) if (n % 2) result += str;
	  return result;
	};

	var uncurryThis$h = functionUncurryThis;
	var toLength$2 = toLength$9;
	var toString$6 = toString$t;
	var $repeat = stringRepeat;
	var requireObjectCoercible$4 = requireObjectCoercible$f;

	var repeat = uncurryThis$h($repeat);
	var stringSlice$3 = uncurryThis$h(''.slice);
	var ceil = Math.ceil;

	// `String.prototype.{ padStart, padEnd }` methods implementation
	var createMethod$1 = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = toString$6(requireObjectCoercible$4($this));
	    var intMaxLength = toLength$2(maxLength);
	    var stringLength = S.length;
	    if (intMaxLength <= stringLength) return S;
	    var fillStr = fillString === undefined ? ' ' : toString$6(fillString);
	    var fillLen, stringFiller;
	    if (fillStr === '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringSlice$3(stringFiller, 0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
	  start: createMethod$1(false)};

	// https://github.com/zloirock/core-js/issues/280
	var userAgent = environmentUserAgent;

	var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

	var $$d = _export;
	var $padStart = stringPad.start;
	var WEBKIT_BUG = stringPadWebkitBug;

	// `String.prototype.padStart` method
	// https://tc39.es/ecma262/#sec-string.prototype.padstart
	$$d({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `SameValue` abstract operation
	// https://tc39.es/ecma262/#sec-samevalue
	// eslint-disable-next-line es/no-object-is -- safe
	var sameValue$1 = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
	};

	var call$7 = functionCall;
	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$3 = anObject$C;
	var isObject$6 = isObject$D;
	var requireObjectCoercible$3 = requireObjectCoercible$f;
	var sameValue = sameValue$1;
	var toString$5 = toString$t;
	var getMethod$2 = getMethod$9;
	var regExpExec$1 = regexpExecAbstract;

	// @@search logic
	fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.es/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = requireObjectCoercible$3(this);
	      var searcher = isObject$6(regexp) ? getMethod$2(regexp, SEARCH) : undefined;
	      if (searcher) return call$7(searcher, regexp, O);
	      var S = toString$5(O);
	      return new RegExp(regexp)[SEARCH](S);
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	    function (string) {
	      var rx = anObject$3(this);
	      var S = toString$5(string);
	      var res = maybeCallNative(nativeSearch, rx, S);

	      if (res.done) return res.value;

	      var previousLastIndex = rx.lastIndex;
	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = regExpExec$1(rx, S);
	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});

	var $$c = _export;
	var uncurryThis$g = functionUncurryThisClause;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var toLength$1 = toLength$9;
	var toString$4 = toString$t;
	var notARegExp = notARegexp;
	var requireObjectCoercible$2 = requireObjectCoercible$f;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var stringSlice$2 = uncurryThis$g(''.slice);
	var min$3 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	$$c({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = toString$4(requireObjectCoercible$2(this));
	    notARegExp(searchString);
	    var search = toString$4(searchString);
	    var index = toLength$1(min$3(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    return stringSlice$2(that, index, index + search.length) === search;
	  }
	});

	var typedArrayConstructor = {exports: {}};

	var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
	var DESCRIPTORS$3 = descriptors;
	var globalThis$i = globalThis_1;
	var isCallable$2 = isCallable$z;
	var isObject$5 = isObject$D;
	var hasOwn$5 = hasOwnProperty_1;
	var classof$5 = classof$l;
	var tryToString = tryToString$7;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$g;
	var defineBuiltIn$1 = defineBuiltIn$m;
	var defineBuiltInAccessor$2 = defineBuiltInAccessor$h;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var getPrototypeOf = objectGetPrototypeOf$1;
	var setPrototypeOf$1 = objectSetPrototypeOf;
	var wellKnownSymbol$2 = wellKnownSymbol$z;
	var uid$1 = uid$7;
	var InternalStateModule$2 = internalState;

	var enforceInternalState$1 = InternalStateModule$2.enforce;
	var getInternalState$2 = InternalStateModule$2.get;
	var Int8Array$4 = globalThis$i.Int8Array;
	var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
	var Uint8ClampedArray$1 = globalThis$i.Uint8ClampedArray;
	var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
	var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
	var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
	var ObjectPrototype = Object.prototype;
	var TypeError$3 = globalThis$i.TypeError;

	var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
	var TYPED_ARRAY_TAG$1 = uid$1('TYPED_ARRAY_TAG');
	var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
	// Fixing native typed arrays in Opera Presto crashes the browser, see #595
	var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$5(globalThis$i.opera) !== 'Opera';
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

	var getTypedArrayConstructor$5 = function (it) {
	  var proto = getPrototypeOf(it);
	  if (!isObject$5(proto)) return;
	  var state = getInternalState$2(proto);
	  return (state && hasOwn$5(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$5(proto);
	};

	var isTypedArray$1 = function (it) {
	  if (!isObject$5(it)) return false;
	  var klass = classof$5(it);
	  return hasOwn$5(TypedArrayConstructorsList, klass)
	    || hasOwn$5(BigIntArrayConstructorsList, klass);
	};

	var aTypedArray$r = function (it) {
	  if (isTypedArray$1(it)) return it;
	  throw new TypeError$3('Target is not a typed array');
	};

	var aTypedArrayConstructor$1 = function (C) {
	  if (isCallable$2(C) && (!setPrototypeOf$1 || isPrototypeOf$1(TypedArray$1, C))) return C;
	  throw new TypeError$3(tryToString(C) + ' is not a typed array constructor');
	};

	var exportTypedArrayMethod$s = function (KEY, property, forced, options) {
	  if (!DESCRIPTORS$3) return;
	  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
	    var TypedArrayConstructor = globalThis$i[ARRAY];
	    if (TypedArrayConstructor && hasOwn$5(TypedArrayConstructor.prototype, KEY)) try {
	      delete TypedArrayConstructor.prototype[KEY];
	    } catch (error) {
	      // old WebKit bug - some methods are non-configurable
	      try {
	        TypedArrayConstructor.prototype[KEY] = property;
	      } catch (error2) { /* empty */ }
	    }
	  }
	  if (!TypedArrayPrototype$2[KEY] || forced) {
	    defineBuiltIn$1(TypedArrayPrototype$2, KEY, forced ? property
	      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
	  }
	};

	for (NAME in TypedArrayConstructorsList) {
	  Constructor = globalThis$i[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
	}

	for (NAME in BigIntArrayConstructorsList) {
	  Constructor = globalThis$i[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	}

	// WebKit bug - typed arrays constructors prototype is Object.prototype
	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$2(TypedArray$1) || TypedArray$1 === Function.prototype) {
	  // eslint-disable-next-line no-shadow -- safe
	  TypedArray$1 = function TypedArray() {
	    throw new TypeError$3('Incorrect invocation');
	  };
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (globalThis$i[NAME]) setPrototypeOf$1(globalThis$i[NAME], TypedArray$1);
	  }
	}

	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype) {
	  TypedArrayPrototype$2 = TypedArray$1.prototype;
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (globalThis$i[NAME]) setPrototypeOf$1(globalThis$i[NAME].prototype, TypedArrayPrototype$2);
	  }
	}

	// WebKit bug - one more object in Uint8ClampedArray prototype chain
	if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
	  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
	}

	if (DESCRIPTORS$3 && !hasOwn$5(TypedArrayPrototype$2, TO_STRING_TAG)) {
	  TYPED_ARRAY_TAG_REQUIRED = true;
	  defineBuiltInAccessor$2(TypedArrayPrototype$2, TO_STRING_TAG, {
	    configurable: true,
	    get: function () {
	      return isObject$5(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
	    }
	  });
	  for (NAME in TypedArrayConstructorsList) if (globalThis$i[NAME]) {
	    createNonEnumerableProperty$2(globalThis$i[NAME].prototype, TYPED_ARRAY_TAG$1, NAME);
	  }
	}

	var arrayBufferViewCore = {
	  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
	  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
	  aTypedArray: aTypedArray$r,
	  aTypedArrayConstructor: aTypedArrayConstructor$1,
	  exportTypedArrayMethod: exportTypedArrayMethod$s,
	  getTypedArrayConstructor: getTypedArrayConstructor$5,
	  isTypedArray: isTypedArray$1,
	  TypedArray: TypedArray$1,
	  TypedArrayPrototype: TypedArrayPrototype$2
	};

	/* eslint-disable no-new, sonarjs/inconsistent-function-call -- required for testing */
	var globalThis$h = globalThis_1;
	var fails$c = fails$19;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
	var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

	var ArrayBuffer$2 = globalThis$h.ArrayBuffer;
	var Int8Array$3 = globalThis$h.Int8Array;

	var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$c(function () {
	  Int8Array$3(1);
	}) || !fails$c(function () {
	  new Int8Array$3(-1);
	}) || !checkCorrectnessOfIteration(function (iterable) {
	  new Int8Array$3();
	  new Int8Array$3(null);
	  new Int8Array$3(1.5);
	  new Int8Array$3(iterable);
	}, true) || fails$c(function () {
	  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
	  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
	});

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$d;

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

	var floor$2 = Math.floor;

	// https://tc39.es/ecma262/#sec-touint8clamp
	var toUint8Clamped$1 = function (it) {
	  var number = +it;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (number !== number || number <= 0) return 0;
	  if (number >= 0xFF) return 0xFF;
	  var f = floor$2(number);
	  if (f + 0.5 < number) return f + 1;
	  if (number < f + 0.5) return f;
	  // round-half-to-even (banker's rounding)
	  return f % 2 === 0 ? f : f + 1;
	};

	var classof$4 = classof$l;

	var isBigIntArray$2 = function (it) {
	  var klass = classof$4(it);
	  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
	};

	var toPrimitive = toPrimitive$4;

	var $TypeError$5 = TypeError;

	// `ToBigInt` abstract operation
	// https://tc39.es/ecma262/#sec-tobigint
	var toBigInt$3 = function (argument) {
	  var prim = toPrimitive(argument, 'number');
	  if (typeof prim == 'number') throw new $TypeError$5("Can't convert number to bigint");
	  // eslint-disable-next-line es/no-bigint -- safe
	  return BigInt(prim);
	};

	var bind$1 = functionBindContext;
	var call$6 = functionCall;
	var aCallable$2 = aCallable$p;
	var aConstructor = aConstructor$3;
	var toObject$2 = toObject$k;
	var lengthOfArrayLike$8 = lengthOfArrayLike$n;
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
	    while (!(step = call$6(next, iterator)).done) {
	      O.push(step.value);
	    }
	  }
	  if (mapping && argumentsLength > 2) {
	    mapfn = bind$1(mapfn, arguments[2]);
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

	var lengthOfArrayLike$7 = lengthOfArrayLike$n;

	var arrayFromConstructorAndList$3 = function (Constructor, list, $length) {
	  var index = 0;
	  var length = arguments.length > 2 ? $length : lengthOfArrayLike$7(list);
	  var result = new Constructor(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	};

	var $$b = _export;
	var globalThis$g = globalThis_1;
	var call$5 = functionCall;
	var DESCRIPTORS$2 = descriptors;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
	var ArrayBufferViewCore$r = arrayBufferViewCore;
	var ArrayBufferModule = arrayBuffer;
	var anInstance$2 = anInstance$b;
	var createPropertyDescriptor$2 = createPropertyDescriptor$b;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$g;
	var isIntegralNumber = isIntegralNumber$2;
	var toIndex = toIndex$3;
	var toOffset$1 = toOffset$2;
	var toUint8Clamped = toUint8Clamped$1;
	var toPropertyKey = toPropertyKey$5;
	var hasOwn$4 = hasOwnProperty_1;
	var classof$3 = classof$l;
	var isObject$4 = isObject$D;
	var isSymbol$1 = isSymbol$7;
	var create$1 = objectCreate;
	var isPrototypeOf = objectIsPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var typedArrayFrom = typedArrayFrom$1;
	var forEach = arrayIteration.forEach;
	var setSpecies = setSpecies$5;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$h;
	var definePropertyModule = objectDefineProperty;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var arrayFromConstructorAndList$2 = arrayFromConstructorAndList$3;
	var InternalStateModule$1 = internalState;
	var inheritIfRequired$1 = inheritIfRequired$7;

	var getInternalState$1 = InternalStateModule$1.get;
	var setInternalState$1 = InternalStateModule$1.set;
	var enforceInternalState = InternalStateModule$1.enforce;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var RangeError$2 = globalThis$g.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var ArrayBufferPrototype = ArrayBuffer$1.prototype;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$r.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$r.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$r.TypedArray;
	var TypedArrayPrototype$1 = ArrayBufferViewCore$r.TypedArrayPrototype;
	var isTypedArray = ArrayBufferViewCore$r.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';

	var addGetter = function (it, key) {
	  defineBuiltInAccessor$1(it, key, {
	    configurable: true,
	    get: function () {
	      return getInternalState$1(this)[key];
	    }
	  });
	};

	var isArrayBuffer = function (it) {
	  var klass;
	  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$3(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
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
	    ? createPropertyDescriptor$2(2, target[key])
	    : nativeGetOwnPropertyDescriptor(target, key);
	};

	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  key = toPropertyKey(key);
	  if (isTypedArrayIndex(target, key)
	    && isObject$4(descriptor)
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
	    addGetter(TypedArrayPrototype$1, 'buffer');
	    addGetter(TypedArrayPrototype$1, 'byteOffset');
	    addGetter(TypedArrayPrototype$1, 'byteLength');
	    addGetter(TypedArrayPrototype$1, 'length');
	  }

	  $$b({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });

	  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = globalThis$g[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};

	    var getter = function (that, index) {
	      var data = getInternalState$1(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };

	    var setter = function (that, index, value) {
	      var data = getInternalState$1(that);
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
	        anInstance$2(that, TypedArrayConstructorPrototype);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;
	        if (!isObject$4(data)) {
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
	          return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
	        } else {
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
	        }
	        setInternalState$1(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });

	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$1(TypedArrayPrototype$1);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance$2(dummy, TypedArrayConstructorPrototype);
	        return inheritIfRequired$1(function () {
	          if (!isObject$4(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined
	            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
	            : typedArrayOffset !== undefined
	              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
	              : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
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

	    $$b({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

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

	var ArrayBufferViewCore$q = arrayBufferViewCore;
	var lengthOfArrayLike$6 = lengthOfArrayLike$n;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$d;

	var aTypedArray$q = ArrayBufferViewCore$q.aTypedArray;
	var exportTypedArrayMethod$r = ArrayBufferViewCore$q.exportTypedArrayMethod;

	// `%TypedArray%.prototype.at` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
	exportTypedArrayMethod$r('at', function at(index) {
	  var O = aTypedArray$q(this);
	  var len = lengthOfArrayLike$6(O);
	  var relativeIndex = toIntegerOrInfinity$1(index);
	  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	  return (k < 0 || k >= len) ? undefined : O[k];
	});

	var toObject$1 = toObject$k;
	var toAbsoluteIndex = toAbsoluteIndex$7;
	var lengthOfArrayLike$5 = lengthOfArrayLike$n;
	var deletePropertyOrThrow = deletePropertyOrThrow$4;

	var min$2 = Math.min;

	// `Array.prototype.copyWithin` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.copywithin
	// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
	var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject$1(this);
	  var len = lengthOfArrayLike$5(O);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else deletePropertyOrThrow(O, to);
	    to += inc;
	    from += inc;
	  } return O;
	};

	var uncurryThis$f = functionUncurryThis;
	var ArrayBufferViewCore$p = arrayBufferViewCore;
	var $ArrayCopyWithin = arrayCopyWithin;

	var u$ArrayCopyWithin = uncurryThis$f($ArrayCopyWithin);
	var aTypedArray$p = ArrayBufferViewCore$p.aTypedArray;
	var exportTypedArrayMethod$q = ArrayBufferViewCore$p.exportTypedArrayMethod;

	// `%TypedArray%.prototype.copyWithin` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
	exportTypedArrayMethod$q('copyWithin', function copyWithin(target, start /* , end */) {
	  return u$ArrayCopyWithin(aTypedArray$p(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	});

	var ArrayBufferViewCore$o = arrayBufferViewCore;
	var $every = arrayIteration.every;

	var aTypedArray$o = ArrayBufferViewCore$o.aTypedArray;
	var exportTypedArrayMethod$p = ArrayBufferViewCore$o.exportTypedArrayMethod;

	// `%TypedArray%.prototype.every` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
	exportTypedArrayMethod$p('every', function every(callbackfn /* , thisArg */) {
	  return $every(aTypedArray$o(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$n = arrayBufferViewCore;
	var $fill = arrayFill$1;
	var toBigInt$1 = toBigInt$3;
	var classof$2 = classof$l;
	var call$4 = functionCall;
	var uncurryThis$e = functionUncurryThis;
	var fails$b = fails$19;

	var aTypedArray$n = ArrayBufferViewCore$n.aTypedArray;
	var exportTypedArrayMethod$o = ArrayBufferViewCore$n.exportTypedArrayMethod;
	var slice = uncurryThis$e(''.slice);

	// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
	var CONVERSION_BUG = fails$b(function () {
	  var count = 0;
	  // eslint-disable-next-line es/no-typed-arrays -- safe
	  new Int8Array(2).fill({ valueOf: function () { return count++; } });
	  return count !== 1;
	});

	// `%TypedArray%.prototype.fill` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
	exportTypedArrayMethod$o('fill', function fill(value /* , start, end */) {
	  var length = arguments.length;
	  aTypedArray$n(this);
	  var actualValue = slice(classof$2(this), 0, 3) === 'Big' ? toBigInt$1(value) : +value;
	  return call$4($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
	}, CONVERSION_BUG);

	var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$3;
	var getTypedArrayConstructor$4 = arrayBufferViewCore.getTypedArrayConstructor;

	var typedArrayFromSameTypeAndList = function (instance, list) {
	  return arrayFromConstructorAndList$1(getTypedArrayConstructor$4(instance), list);
	};

	var ArrayBufferViewCore$m = arrayBufferViewCore;
	var $filter = arrayIteration.filter;
	var fromSameTypeAndList$1 = typedArrayFromSameTypeAndList;

	var aTypedArray$m = ArrayBufferViewCore$m.aTypedArray;
	var exportTypedArrayMethod$n = ArrayBufferViewCore$m.exportTypedArrayMethod;

	// `%TypedArray%.prototype.filter` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
	exportTypedArrayMethod$n('filter', function filter(callbackfn /* , thisArg */) {
	  var list = $filter(aTypedArray$m(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  return fromSameTypeAndList$1(this, list);
	});

	var ArrayBufferViewCore$l = arrayBufferViewCore;
	var $find = arrayIteration.find;

	var aTypedArray$l = ArrayBufferViewCore$l.aTypedArray;
	var exportTypedArrayMethod$m = ArrayBufferViewCore$l.exportTypedArrayMethod;

	// `%TypedArray%.prototype.find` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
	exportTypedArrayMethod$m('find', function find(predicate /* , thisArg */) {
	  return $find(aTypedArray$l(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$k = arrayBufferViewCore;
	var $findIndex$1 = arrayIteration.findIndex;

	var aTypedArray$k = ArrayBufferViewCore$k.aTypedArray;
	var exportTypedArrayMethod$l = ArrayBufferViewCore$k.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
	exportTypedArrayMethod$l('findIndex', function findIndex(predicate /* , thisArg */) {
	  return $findIndex$1(aTypedArray$k(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var bind = functionBindContext;
	var IndexedObject = indexedObject;
	var toObject = toObject$k;
	var lengthOfArrayLike$4 = lengthOfArrayLike$n;

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

	var ArrayBufferViewCore$j = arrayBufferViewCore;
	var $findLast = arrayIterationFromLast.findLast;

	var aTypedArray$j = ArrayBufferViewCore$j.aTypedArray;
	var exportTypedArrayMethod$k = ArrayBufferViewCore$j.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findLast` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
	exportTypedArrayMethod$k('findLast', function findLast(predicate /* , thisArg */) {
	  return $findLast(aTypedArray$j(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$i = arrayBufferViewCore;
	var $findLastIndex = arrayIterationFromLast.findLastIndex;

	var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
	var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findLastIndex` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
	exportTypedArrayMethod$j('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
	  return $findLastIndex(aTypedArray$i(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$h = arrayBufferViewCore;
	var $forEach = arrayIteration.forEach;

	var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
	var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod;

	// `%TypedArray%.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
	exportTypedArrayMethod$i('forEach', function forEach(callbackfn /* , thisArg */) {
	  $forEach(aTypedArray$h(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$g = arrayBufferViewCore;
	var $includes = arrayIncludes.includes;

	var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
	var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod;

	// `%TypedArray%.prototype.includes` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
	exportTypedArrayMethod$h('includes', function includes(searchElement /* , fromIndex */) {
	  return $includes(aTypedArray$g(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$f = arrayBufferViewCore;
	var $indexOf = arrayIncludes.indexOf;

	var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
	var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod;

	// `%TypedArray%.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
	exportTypedArrayMethod$g('indexOf', function indexOf(searchElement /* , fromIndex */) {
	  return $indexOf(aTypedArray$f(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var globalThis$f = globalThis_1;
	var fails$a = fails$19;
	var uncurryThis$d = functionUncurryThis;
	var ArrayBufferViewCore$e = arrayBufferViewCore;
	var ArrayIterators = es_array_iterator;
	var wellKnownSymbol$1 = wellKnownSymbol$z;

	var ITERATOR$1 = wellKnownSymbol$1('iterator');
	var Uint8Array$6 = globalThis$f.Uint8Array;
	var arrayValues = uncurryThis$d(ArrayIterators.values);
	var arrayKeys = uncurryThis$d(ArrayIterators.keys);
	var arrayEntries = uncurryThis$d(ArrayIterators.entries);
	var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
	var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod;
	var TypedArrayPrototype = Uint8Array$6 && Uint8Array$6.prototype;

	var GENERIC = !fails$a(function () {
	  TypedArrayPrototype[ITERATOR$1].call([1]);
	});

	var ITERATOR_IS_VALUES = !!TypedArrayPrototype
	  && TypedArrayPrototype.values
	  && TypedArrayPrototype[ITERATOR$1] === TypedArrayPrototype.values
	  && TypedArrayPrototype.values.name === 'values';

	var typedArrayValues = function values() {
	  return arrayValues(aTypedArray$e(this));
	};

	// `%TypedArray%.prototype.entries` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
	exportTypedArrayMethod$f('entries', function entries() {
	  return arrayEntries(aTypedArray$e(this));
	}, GENERIC);
	// `%TypedArray%.prototype.keys` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
	exportTypedArrayMethod$f('keys', function keys() {
	  return arrayKeys(aTypedArray$e(this));
	}, GENERIC);
	// `%TypedArray%.prototype.values` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
	exportTypedArrayMethod$f('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
	// `%TypedArray%.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
	exportTypedArrayMethod$f(ITERATOR$1, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });

	var ArrayBufferViewCore$d = arrayBufferViewCore;
	var uncurryThis$c = functionUncurryThis;

	var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
	var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;
	var $join = uncurryThis$c([].join);

	// `%TypedArray%.prototype.join` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
	exportTypedArrayMethod$e('join', function join(separator) {
	  return $join(aTypedArray$d(this), separator);
	});

	var ArrayBufferViewCore$c = arrayBufferViewCore;
	var apply$1 = functionApply;
	var $lastIndexOf = arrayLastIndexOf;

	var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
	var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;

	// `%TypedArray%.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
	exportTypedArrayMethod$d('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
	  var length = arguments.length;
	  return apply$1($lastIndexOf, aTypedArray$c(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
	});

	var ArrayBufferViewCore$b = arrayBufferViewCore;
	var $map = arrayIteration.map;
	var fromSameTypeAndList = typedArrayFromSameTypeAndList;

	var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
	var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;

	// `%TypedArray%.prototype.map` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
	exportTypedArrayMethod$c('map', function map(mapfn /* , thisArg */) {
	  var list = $map(aTypedArray$b(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	  return fromSameTypeAndList(this, list);
	});

	var ArrayBufferViewCore$a = arrayBufferViewCore;
	var $reduce = arrayReduce.left;

	var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
	var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;

	// `%TypedArray%.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
	exportTypedArrayMethod$b('reduce', function reduce(callbackfn /* , initialValue */) {
	  var length = arguments.length;
	  return $reduce(aTypedArray$a(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$9 = arrayBufferViewCore;
	var $reduceRight = arrayReduce.right;

	var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
	var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;

	// `%TypedArray%.prototype.reduceRight` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
	exportTypedArrayMethod$a('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
	  var length = arguments.length;
	  return $reduceRight(aTypedArray$9(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$8 = arrayBufferViewCore;

	var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
	var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;
	var floor$1 = Math.floor;

	// `%TypedArray%.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
	exportTypedArrayMethod$9('reverse', function reverse() {
	  var that = this;
	  var length = aTypedArray$8(that).length;
	  var middle = floor$1(length / 2);
	  var index = 0;
	  var value;
	  while (index < middle) {
	    value = that[index];
	    that[index++] = that[--length];
	    that[length] = value;
	  } return that;
	});

	var globalThis$e = globalThis_1;
	var call$3 = functionCall;
	var ArrayBufferViewCore$7 = arrayBufferViewCore;
	var lengthOfArrayLike$3 = lengthOfArrayLike$n;
	var toOffset = toOffset$2;
	var toIndexedObject = toObject$k;
	var fails$9 = fails$19;

	var RangeError$1 = globalThis$e.RangeError;
	var Int8Array$2 = globalThis$e.Int8Array;
	var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
	var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
	var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
	var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

	var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$9(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  var array = new Uint8ClampedArray(2);
	  call$3($set, array, { length: 1, 0: 3 }, 1);
	  return array[1] !== 3;
	});

	// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
	var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$7.NATIVE_ARRAY_BUFFER_VIEWS && fails$9(function () {
	  var array = new Int8Array$2(2);
	  array.set(1);
	  array.set('2', 1);
	  return array[0] !== 0 || array[1] !== 2;
	});

	// `%TypedArray%.prototype.set` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
	exportTypedArrayMethod$8('set', function set(arrayLike /* , offset */) {
	  aTypedArray$7(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var src = toIndexedObject(arrayLike);
	  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$3($set, this, src, offset);
	  var length = this.length;
	  var len = lengthOfArrayLike$3(src);
	  var index = 0;
	  if (len + offset > length) throw new RangeError$1('Wrong length');
	  while (index < len) this[offset + index] = src[index++];
	}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

	var ArrayBufferViewCore$6 = arrayBufferViewCore;
	var fails$8 = fails$19;
	var arraySlice$1 = arraySlice$9;

	var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
	var getTypedArrayConstructor$3 = ArrayBufferViewCore$6.getTypedArrayConstructor;
	var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;

	var FORCED$3 = fails$8(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  new Int8Array(1).slice();
	});

	// `%TypedArray%.prototype.slice` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
	exportTypedArrayMethod$7('slice', function slice(start, end) {
	  var list = arraySlice$1(aTypedArray$6(this), start, end);
	  var C = getTypedArrayConstructor$3(this);
	  var index = 0;
	  var length = list.length;
	  var result = new C(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	}, FORCED$3);

	var ArrayBufferViewCore$5 = arrayBufferViewCore;
	var $some = arrayIteration.some;

	var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
	var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;

	// `%TypedArray%.prototype.some` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
	exportTypedArrayMethod$6('some', function some(callbackfn /* , thisArg */) {
	  return $some(aTypedArray$5(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var globalThis$d = globalThis_1;
	var uncurryThis$b = functionUncurryThisClause;
	var fails$7 = fails$19;
	var aCallable$1 = aCallable$p;
	var internalSort = arraySort$1;
	var ArrayBufferViewCore$4 = arrayBufferViewCore;
	var FF = environmentFfVersion;
	var IE_OR_EDGE = environmentIsIeOrEdge;
	var V8 = environmentV8Version;
	var WEBKIT = environmentWebkitVersion;

	var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
	var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;
	var Uint16Array = globalThis$d.Uint16Array;
	var nativeSort = Uint16Array && uncurryThis$b(Uint16Array.prototype.sort);

	// WebKit
	var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$7(function () {
	  nativeSort(new Uint16Array(2), null);
	}) && fails$7(function () {
	  nativeSort(new Uint16Array(2), {});
	}));

	var STABLE_SORT = !!nativeSort && !fails$7(function () {
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
	exportTypedArrayMethod$5('sort', function sort(comparefn) {
	  if (comparefn !== undefined) aCallable$1(comparefn);
	  if (STABLE_SORT) return nativeSort(this, comparefn);

	  return internalSort(aTypedArray$4(this), getSortCompare(comparefn));
	}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

	var globalThis$c = globalThis_1;
	var apply = functionApply;
	var ArrayBufferViewCore$3 = arrayBufferViewCore;
	var fails$6 = fails$19;
	var arraySlice = arraySlice$9;

	var Int8Array$1 = globalThis$c.Int8Array;
	var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
	var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
	var $toLocaleString = [].toLocaleString;

	// iOS Safari 6.x fails here
	var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$6(function () {
	  $toLocaleString.call(new Int8Array$1(1));
	});

	var FORCED$2 = fails$6(function () {
	  return [1, 2].toLocaleString() !== new Int8Array$1([1, 2]).toLocaleString();
	}) || !fails$6(function () {
	  Int8Array$1.prototype.toLocaleString.call([1, 2]);
	});

	// `%TypedArray%.prototype.toLocaleString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
	exportTypedArrayMethod$4('toLocaleString', function toLocaleString() {
	  return apply(
	    $toLocaleString,
	    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray$3(this)) : aTypedArray$3(this),
	    arraySlice(arguments)
	  );
	}, FORCED$2);

	var lengthOfArrayLike$2 = lengthOfArrayLike$n;
	var ArrayBufferViewCore$2 = arrayBufferViewCore;

	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
	var getTypedArrayConstructor$2 = ArrayBufferViewCore$2.getTypedArrayConstructor;

	// `%TypedArray%.prototype.toReversed` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
	exportTypedArrayMethod$3('toReversed', function toReversed() {
	  var O = aTypedArray$2(this);
	  var len = lengthOfArrayLike$2(O);
	  var A = new (getTypedArrayConstructor$2(O))(len);
	  var k = 0;
	  for (; k < len; k++) A[k] = O[len - k - 1];
	  return A;
	});

	var ArrayBufferViewCore$1 = arrayBufferViewCore;
	var uncurryThis$a = functionUncurryThis;
	var aCallable = aCallable$p;
	var arrayFromConstructorAndList = arrayFromConstructorAndList$3;

	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;
	var sort = uncurryThis$a(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

	// `%TypedArray%.prototype.toSorted` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
	exportTypedArrayMethod$2('toSorted', function toSorted(compareFn) {
	  if (compareFn !== undefined) aCallable(compareFn);
	  var O = aTypedArray$1(this);
	  var A = arrayFromConstructorAndList(getTypedArrayConstructor$1(O), O);
	  return sort(A, compareFn);
	});

	var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
	var fails$5 = fails$19;
	var globalThis$b = globalThis_1;
	var uncurryThis$9 = functionUncurryThis;

	var Uint8Array$5 = globalThis$b.Uint8Array;
	var Uint8ArrayPrototype = Uint8Array$5 && Uint8Array$5.prototype || {};
	var arrayToString = [].toString;
	var join$3 = uncurryThis$9([].join);

	if (fails$5(function () { arrayToString.call({}); })) {
	  arrayToString = function toString() {
	    return join$3(this);
	  };
	}

	var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

	// `%TypedArray%.prototype.toString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
	exportTypedArrayMethod$1('toString', arrayToString, IS_NOT_ARRAY_METHOD);

	var ArrayBufferViewCore = arrayBufferViewCore;
	var isBigIntArray = isBigIntArray$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$n;
	var toIntegerOrInfinity = toIntegerOrInfinity$d;
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

	var isObject$3 = isObject$D;

	var $String = String;
	var $TypeError$4 = TypeError;

	var anObjectOrUndefined$2 = function (argument) {
	  if (argument === undefined || isObject$3(argument)) return argument;
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

	var globalThis$a = globalThis_1;
	var uncurryThis$8 = functionUncurryThis;
	var anObjectOrUndefined$1 = anObjectOrUndefined$2;
	var aString$1 = aString$2;
	var hasOwn$3 = hasOwnProperty_1;
	var base64Map$1 = base64Map$2;
	var getAlphabetOption$1 = getAlphabetOption$2;
	var notDetached$3 = arrayBufferNotDetached;

	var base64Alphabet$1 = base64Map$1.c2i;
	var base64UrlAlphabet$1 = base64Map$1.c2iUrl;

	var SyntaxError$2 = globalThis$a.SyntaxError;
	var TypeError$2 = globalThis$a.TypeError;
	var $Array$3 = globalThis$a.Array;
	var at = uncurryThis$8(''.charAt);
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
	  var bytes = into || $Array$3(floor(stringLength * 3 / 4));
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

	var classof$1 = classof$l;

	var $TypeError$1 = TypeError;

	// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
	// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
	var anUint8Array$4 = function (argument) {
	  if (classof$1(argument) === 'Uint8Array') return argument;
	  throw new $TypeError$1('Argument is not an Uint8Array');
	};

	var $$a = _export;
	var globalThis$9 = globalThis_1;
	var $fromBase64 = uint8FromBase64;
	var anUint8Array$3 = anUint8Array$4;

	var Uint8Array$4 = globalThis$9.Uint8Array;

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
	if (Uint8Array$4) $$a({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$2 }, {
	  setFromBase64: function setFromBase64(string /* , options */) {
	    anUint8Array$3(this);

	    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, this, this.length);

	    return { read: result.read, written: result.written };
	  }
	});

	var globalThis$8 = globalThis_1;
	var uncurryThis$7 = functionUncurryThis;

	var Uint8Array$3 = globalThis$8.Uint8Array;
	var SyntaxError$1 = globalThis$8.SyntaxError;
	var min$1 = Math.min;
	var stringMatch = uncurryThis$7(''.match);

	var uint8FromHex = function (string, into) {
	  var stringLength = string.length;
	  if (stringLength % 2 !== 0) throw new SyntaxError$1('String should be an even number of characters');
	  var maxLength = into ? min$1(into.length, stringLength / 2) : stringLength / 2;
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

	var $$9 = _export;
	var globalThis$7 = globalThis_1;
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
	if (globalThis$7.Uint8Array) $$9({ target: 'Uint8Array', proto: true, forced: throwsOnLengthTrackingView() }, {
	  setFromHex: function setFromHex(string) {
	    anUint8Array$2(this);
	    aString(string);
	    notDetached$2(this.buffer);
	    var read = $fromHex(string, this).read;
	    return { read: read, written: read / 2 };
	  }
	});

	/* eslint-disable no-useless-assignment -- false positive for [index++] syntax */
	var $$8 = _export;
	var globalThis$6 = globalThis_1;
	var uncurryThis$6 = functionUncurryThis;
	var anObjectOrUndefined = anObjectOrUndefined$2;
	var anUint8Array$1 = anUint8Array$4;
	var notDetached$1 = arrayBufferNotDetached;
	var base64Map = base64Map$2;
	var getAlphabetOption = getAlphabetOption$2;

	var base64Alphabet = base64Map.i2c;
	var base64UrlAlphabet = base64Map.i2cUrl;
	var $floor = Math.floor;
	var $ceil = Math.ceil;

	var charAt$2 = uncurryThis$6(''.charAt);

	var Uint8Array$2 = globalThis$6.Uint8Array;
	var $Array$2 = globalThis$6.Array;
	var join$2 = uncurryThis$6([].join);

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
	if (Uint8Array$2) $$8({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS$1 }, {
	  toBase64: function toBase64(/* options */) {
	    var array = anUint8Array$1(this);
	    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
	    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
	    var omitPadding = !!options && !!options.omitPadding;
	    notDetached$1(this.buffer);

	    var i = 0;
	    var length = array.length;
	    var result = $Array$2(omitPadding ? $floor(length / 3) * 4 + (length % 3 ? length % 3 + 1 : 0) : $ceil(length / 3) * 4);
	    var written = 0;
	    var triplet;

	    var at = function (shift) {
	      return charAt$2(alphabet, (triplet >> (6 * shift)) & 63);
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

	    return join$2(result, '');
	  }
	});

	var $$7 = _export;
	var globalThis$5 = globalThis_1;
	var uncurryThis$5 = functionUncurryThis;
	var anUint8Array = anUint8Array$4;
	var notDetached = arrayBufferNotDetached;

	var numberToString = uncurryThis$5(1.1.toString);
	var join$1 = uncurryThis$5([].join);
	var $Array$1 = Array;

	var Uint8Array$1 = globalThis$5.Uint8Array;

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
	if (Uint8Array$1) $$7({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
	  toHex: function toHex() {
	    anUint8Array(this);
	    notDetached(this.buffer);
	    var result = $Array$1(this.length);
	    for (var i = 0, length = this.length; i < length; i++) {
	      var hex = numberToString(this[i], 16);
	      result[i] = hex.length === 1 ? '0' + hex : hex;
	    }
	    return join$1(result, '');
	  }
	});

	var $$6 = _export;
	var globalThis$4 = globalThis_1;
	var getBuiltIn$4 = getBuiltIn$m;
	var uncurryThis$4 = functionUncurryThis;
	var call$2 = functionCall;
	var fails$4 = fails$19;
	var toString$3 = toString$t;
	var validateArgumentsLength$1 = validateArgumentsLength$9;
	var c2i = base64Map$2.c2i;

	var disallowed = /[^\d+/a-z]/i;
	var whitespaces$1 = /[\t\n\f\r ]+/g;
	var finalEq = /[=]{1,2}$/;

	var $atob = getBuiltIn$4('atob');
	var $Array = Array;
	var fromCharCode = String.fromCharCode;
	var charAt$1 = uncurryThis$4(''.charAt);
	var replace = uncurryThis$4(''.replace);
	var join = uncurryThis$4([].join);
	var exec = uncurryThis$4(disallowed.exec);

	var BASIC = !!$atob && !fails$4(function () {
	  return $atob('aGk=') !== 'hi';
	});

	var NO_SPACES_IGNORE = BASIC && fails$4(function () {
	  return $atob(' ') !== '';
	});

	var NO_ENCODING_CHECK = BASIC && !fails$4(function () {
	  $atob('a');
	});

	var NO_ARG_RECEIVING_CHECK = BASIC && !fails$4(function () {
	  $atob();
	});

	var WRONG_ARITY = BASIC && $atob.length !== 1;

	var FORCED$1 = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

	// `atob` method
	// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
	$$6({ global: true, bind: true, enumerable: true, forced: FORCED$1 }, {
	  atob: function atob(data) {
	    validateArgumentsLength$1(arguments.length, 1);
	    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
	    if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call$2($atob, globalThis$4, data);
	    var string = replace(toString$3(data), whitespaces$1, '');
	    var position = 0;
	    var bc = 0;
	    var length, chr, bs;
	    if (!(string.length & 3)) {
	      string = replace(string, finalEq, '');
	    }
	    length = string.length;
	    var lenmod = length & 3;
	    if (lenmod === 1 || exec(disallowed, string)) {
	      throw new (getBuiltIn$4('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
	    }
	    // (length >> 2) is equivalent for length / 4 floored; * 3 then multiplies the
	    // number of bytes for full quanta
	    // lenmod is length % 4; if there's 2 or 3 bytes it's 1 or 2 bytes of extra output
	    // respectively, so -1, however use a ternary to ensure 0 does not get -1 onto length
	    var output = new $Array((length >> 2) * 3 + (lenmod ? lenmod - 1 : 0));
	    var outputIndex = 0;
	    while (position < length) {
	      chr = charAt$1(string, position++);
	      bs = bc & 3 ? (bs << 6) + c2i[chr] : c2i[chr];
	      if (bc++ & 3) output[outputIndex++] = fromCharCode(255 & bs >> (-2 * bc & 6));
	    }
	    return join(output, '');
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

	var $$5 = _export;
	var getBuiltIn$3 = getBuiltIn$m;
	var getBuiltInNodeModule = getBuiltInNodeModule$2;
	var fails$3 = fails$19;
	var create = objectCreate;
	var createPropertyDescriptor$1 = createPropertyDescriptor$b;
	var defineProperty$1 = objectDefineProperty.f;
	var defineBuiltIn = defineBuiltIn$m;
	var defineBuiltInAccessor = defineBuiltInAccessor$h;
	var hasOwn$2 = hasOwnProperty_1;
	var anInstance$1 = anInstance$b;
	var anObject$2 = anObject$C;
	var errorToString = errorToString$2;
	var normalizeStringArgument$1 = normalizeStringArgument$5;
	var DOMExceptionConstants$1 = domExceptionConstants;
	var clearErrorStack$1 = errorStackClear;
	var InternalStateModule = internalState;
	var DESCRIPTORS$1 = descriptors;

	var DOM_EXCEPTION$2 = 'DOMException';
	var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
	var Error$3 = getBuiltIn$3('Error');
	// NodeJS < 17.0 does not expose `DOMException` to global
	var NativeDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2) || (function () {
	  try {
	    // NodeJS < 15.0 does not expose `MessageChannel` to global
	    var MessageChannel = getBuiltIn$3('MessageChannel') || getBuiltInNodeModule('worker_threads').MessageChannel;
	    // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
	    new MessageChannel().port1.postMessage(new WeakMap());
	  } catch (error) {
	    if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
	  }
	})();
	var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
	var ErrorPrototype = Error$3.prototype;
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION$2);
	var HAS_STACK = 'stack' in new Error$3(DOM_EXCEPTION$2);

	var codeFor = function (name) {
	  return hasOwn$2(DOMExceptionConstants$1, name) && DOMExceptionConstants$1[name].m ? DOMExceptionConstants$1[name].c : 0;
	};

	var $DOMException$1 = function DOMException() {
	  anInstance$1(this, DOMExceptionPrototype$1);
	  var argumentsLength = arguments.length;
	  var message = normalizeStringArgument$1(argumentsLength < 1 ? undefined : arguments[0]);
	  var name = normalizeStringArgument$1(argumentsLength < 2 ? undefined : arguments[1], 'Error');
	  var code = codeFor(name);
	  setInternalState(this, {
	    type: DOM_EXCEPTION$2,
	    name: name,
	    message: message,
	    code: code
	  });
	  if (!DESCRIPTORS$1) {
	    this.name = name;
	    this.message = message;
	    this.code = code;
	  }
	  if (HAS_STACK) {
	    var error = new Error$3(message);
	    error.name = DOM_EXCEPTION$2;
	    defineProperty$1(this, 'stack', createPropertyDescriptor$1(1, clearErrorStack$1(error.stack, 1)));
	  }
	};

	var DOMExceptionPrototype$1 = $DOMException$1.prototype = create(ErrorPrototype);

	var createGetterDescriptor = function (get) {
	  return { enumerable: true, configurable: true, get: get };
	};

	var getterFor = function (key) {
	  return createGetterDescriptor(function () {
	    return getInternalState(this)[key];
	  });
	};

	if (DESCRIPTORS$1) {
	  // `DOMException.prototype.code` getter
	  defineBuiltInAccessor(DOMExceptionPrototype$1, 'code', getterFor('code'));
	  // `DOMException.prototype.message` getter
	  defineBuiltInAccessor(DOMExceptionPrototype$1, 'message', getterFor('message'));
	  // `DOMException.prototype.name` getter
	  defineBuiltInAccessor(DOMExceptionPrototype$1, 'name', getterFor('name'));
	}

	defineProperty$1(DOMExceptionPrototype$1, 'constructor', createPropertyDescriptor$1(1, $DOMException$1));

	// FF36- DOMException is a function, but can't be constructed
	var INCORRECT_CONSTRUCTOR = fails$3(function () {
	  return !(new NativeDOMException$1() instanceof Error$3);
	});

	// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
	var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails$3(function () {
	  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== '2: 1';
	});

	// Deno 1.6.3- DOMException.prototype.code just missed
	var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails$3(function () {
	  return new NativeDOMException$1(1, 'DataCloneError').code !== 25;
	});

	// Deno 1.6.3- DOMException constants just missed
	INCORRECT_CONSTRUCTOR
	  || NativeDOMException$1[DATA_CLONE_ERR] !== 25
	  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;

	var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR;

	// `DOMException` constructor
	// https://webidl.spec.whatwg.org/#idl-DOMException
	$$5({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR$1 }, {
	  DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
	});

	var PolyfilledDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2);
	var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;

	if (INCORRECT_TO_STRING && (NativeDOMException$1 === PolyfilledDOMException$1)) {
	  defineBuiltIn(PolyfilledDOMExceptionPrototype$1, 'toString', errorToString);
	}

	if (INCORRECT_CODE && DESCRIPTORS$1 && NativeDOMException$1 === PolyfilledDOMException$1) {
	  defineBuiltInAccessor(PolyfilledDOMExceptionPrototype$1, 'code', createGetterDescriptor(function () {
	    return codeFor(anObject$2(this).name);
	  }));
	}

	// `DOMException` constants
	for (var key$1 in DOMExceptionConstants$1) if (hasOwn$2(DOMExceptionConstants$1, key$1)) {
	  var constant$1 = DOMExceptionConstants$1[key$1];
	  var constantName$1 = constant$1.s;
	  var descriptor$1 = createPropertyDescriptor$1(6, constant$1.c);
	  if (!hasOwn$2(PolyfilledDOMException$1, constantName$1)) {
	    defineProperty$1(PolyfilledDOMException$1, constantName$1, descriptor$1);
	  }
	  if (!hasOwn$2(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
	    defineProperty$1(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor$1);
	  }
	}

	var $$4 = _export;
	var globalThis$3 = globalThis_1;
	var getBuiltIn$2 = getBuiltIn$m;
	var createPropertyDescriptor = createPropertyDescriptor$b;
	var defineProperty = objectDefineProperty.f;
	var hasOwn$1 = hasOwnProperty_1;
	var anInstance = anInstance$b;
	var inheritIfRequired = inheritIfRequired$7;
	var normalizeStringArgument = normalizeStringArgument$5;
	var DOMExceptionConstants = domExceptionConstants;
	var clearErrorStack = errorStackClear;
	var DESCRIPTORS = descriptors;

	var DOM_EXCEPTION$1 = 'DOMException';
	var Error$2 = getBuiltIn$2('Error');
	var NativeDOMException = getBuiltIn$2(DOM_EXCEPTION$1);

	var $DOMException = function DOMException() {
	  anInstance(this, DOMExceptionPrototype);
	  var argumentsLength = arguments.length;
	  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
	  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
	  var that = new NativeDOMException(message, name);
	  var error = new Error$2(message);
	  error.name = DOM_EXCEPTION$1;
	  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
	  inheritIfRequired(that, this, $DOMException);
	  return that;
	};

	var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

	var ERROR_HAS_STACK = 'stack' in new Error$2(DOM_EXCEPTION$1);
	var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis$3, DOM_EXCEPTION$1);

	// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
	// https://github.com/Jarred-Sumner/bun/issues/399
	var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

	var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

	// `DOMException` constructor patch for `.stack` where it's required
	// https://webidl.spec.whatwg.org/#es-DOMException-specialness
	$$4({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, { // TODO: fix export logic
	  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
	});

	var PolyfilledDOMException = getBuiltIn$2(DOM_EXCEPTION$1);
	var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

	if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
	  {
	    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
	  }

	  for (var key in DOMExceptionConstants) if (hasOwn$1(DOMExceptionConstants, key)) {
	    var constant = DOMExceptionConstants[key];
	    var constantName = constant.s;
	    if (!hasOwn$1(PolyfilledDOMException, constantName)) {
	      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
	    }
	  }
	}

	var getBuiltIn$1 = getBuiltIn$m;
	var setToStringTag = setToStringTag$e;

	var DOM_EXCEPTION = 'DOMException';

	// `DOMException.prototype[@@toStringTag]` property
	setToStringTag(getBuiltIn$1(DOM_EXCEPTION), DOM_EXCEPTION);

	var $$3 = _export;
	var $findIndex = arrayIteration.findIndex;
	var addToUnscopables = addToUnscopables$4;

	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-findindex -- testing
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

	// `Array.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-array.prototype.findindex
	$$3({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND_INDEX);

	var globalThis$2 = globalThis_1;
	var fails$2 = fails$19;
	var uncurryThis$3 = functionUncurryThis;
	var toString$2 = toString$t;
	var trim = stringTrim.trim;
	var whitespaces = whitespaces$5;

	var charAt = uncurryThis$3(''.charAt);
	var $parseFloat$1 = globalThis$2.parseFloat;
	var Symbol$1 = globalThis$2.Symbol;
	var ITERATOR = Symbol$1 && Symbol$1.iterator;
	var FORCED = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR && !fails$2(function () { $parseFloat$1(Object(ITERATOR)); }));

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED ? function parseFloat(string) {
	  var trimmedString = trim(toString$2(string));
	  var result = $parseFloat$1(trimmedString);
	  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
	} : $parseFloat$1;

	var $$2 = _export;
	var $parseFloat = numberParseFloat;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	$$2({ global: true, forced: parseFloat !== $parseFloat }, {
	  parseFloat: $parseFloat
	});

	var $$1 = _export;
	var call$1 = functionCall;
	var uncurryThis$2 = functionUncurryThis;
	var requireObjectCoercible$1 = requireObjectCoercible$f;
	var isCallable$1 = isCallable$z;
	var isObject$2 = isObject$D;
	var isRegExp = isRegexp;
	var toString$1 = toString$t;
	var getMethod$1 = getMethod$9;
	var getRegExpFlags$2 = regexpGetFlags;
	var getSubstitution = getSubstitution$2;
	var wellKnownSymbol = wellKnownSymbol$z;

	var REPLACE = wellKnownSymbol('replace');
	var $TypeError = TypeError;
	var indexOf = uncurryThis$2(''.indexOf);
	uncurryThis$2(''.replace);
	var stringSlice$1 = uncurryThis$2(''.slice);
	var max = Math.max;

	// `String.prototype.replaceAll` method
	// https://tc39.es/ecma262/#sec-string.prototype.replaceall
	$$1({ target: 'String', proto: true }, {
	  replaceAll: function replaceAll(searchValue, replaceValue) {
	    var O = requireObjectCoercible$1(this);
	    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
	    var endOfLastMatch = 0;
	    var result = '';
	    if (isObject$2(searchValue)) {
	      IS_REG_EXP = isRegExp(searchValue);
	      if (IS_REG_EXP) {
	        flags = toString$1(requireObjectCoercible$1(getRegExpFlags$2(searchValue)));
	        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
	      }
	      replacer = getMethod$1(searchValue, REPLACE);
	      if (replacer) return call$1(replacer, searchValue, O, replaceValue);
	    }
	    string = toString$1(O);
	    searchString = toString$1(searchValue);
	    functionalReplace = isCallable$1(replaceValue);
	    if (!functionalReplace) replaceValue = toString$1(replaceValue);
	    searchLength = searchString.length;
	    advanceBy = max(1, searchLength);
	    position = indexOf(string, searchString);
	    while (position !== -1) {
	      replacement = functionalReplace
	        ? toString$1(replaceValue(searchString, position, string))
	        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
	      result += stringSlice$1(string, endOfLastMatch, position) + replacement;
	      endOfLastMatch = position + searchLength;
	      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
	    }
	    if (endOfLastMatch < string.length) {
	      result += stringSlice$1(string, endOfLastMatch);
	    }
	    return result;
	  }
	});

	var $ = _export;
	var globalThis$1 = globalThis_1;
	var getBuiltIn = getBuiltIn$m;
	var uncurryThis$1 = functionUncurryThis;
	var fails$1 = fails$19;
	var uid = uid$7;
	var isCallable = isCallable$z;
	var isConstructor = isConstructor$5;
	var isNullOrUndefined = isNullOrUndefined$8;
	var isObject$1 = isObject$D;
	var isSymbol = isSymbol$7;
	var iterate = iterate$f;
	var anObject$1 = anObject$C;
	var classof = classof$l;
	var hasOwn = hasOwnProperty_1;
	var createProperty = createProperty$a;
	var createNonEnumerableProperty = createNonEnumerableProperty$g;
	var lengthOfArrayLike = lengthOfArrayLike$n;
	var validateArgumentsLength = validateArgumentsLength$9;
	var getRegExpFlags$1 = regexpGetFlags;
	var MapHelpers = mapHelpers;
	var SetHelpers = setHelpers;
	var setIterate = setIterate$1;
	var detachTransferable = detachTransferable$2;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;

	var Object$1 = globalThis$1.Object;
	var Array$1 = globalThis$1.Array;
	var Date$1 = globalThis$1.Date;
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
	var push$1 = uncurryThis$1([].push);
	var thisBooleanValue = uncurryThis$1(true.valueOf);
	var thisNumberValue = uncurryThis$1(1.1.valueOf);
	var thisStringValue = uncurryThis$1(''.valueOf);
	var thisTimeValue = uncurryThis$1(Date$1.prototype.getTime);
	var PERFORMANCE_MARK = uid('structuredClone');
	var DATA_CLONE_ERROR = 'DataCloneError';
	var TRANSFERRING = 'Transferring';

	var checkBasicSemantic = function (structuredCloneImplementation) {
	  return !fails$1(function () {
	    var set1 = new globalThis$1.Set([7]);
	    var set2 = structuredCloneImplementation(set1);
	    var number = structuredCloneImplementation(Object$1(7));
	    return set2 === set1 || !set2.has(7) || !isObject$1(number) || +number !== 7;
	  }) && structuredCloneImplementation;
	};

	var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
	  return !fails$1(function () {
	    var error = new $Error();
	    var test = structuredCloneImplementation({ a: error, b: error });
	    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
	  });
	};

	// https://github.com/whatwg/html/pull/5749
	var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
	  return !fails$1(function () {
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
	  if (!isObject$1(C)) throwUnpolyfillable(type);
	  return new C(cloneBuffer(value.buffer, map), offset, length);
	};

	var structuredCloneInternal = function (value, map) {
	  if (isSymbol(value)) throwUncloneable('Symbol');
	  if (!isObject$1(value)) return value;
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
	      cloned = new RegExp(value.source, getRegExpFlags$1(value));
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
	          cloned = new Date$1(thisTimeValue(value));
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
	  if (!isObject$1(rawTransfer)) throw new TypeError$1('Transfer option cannot be converted to a sequence');

	  var transfer = [];

	  iterate(rawTransfer, function (value) {
	    push$1(transfer, anObject$1(value));
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
	    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject$1(arguments[1]) : undefined;
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

	var call = functionCall;
	var uncurryThis = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var anObject = anObject$C;
	var isObject = isObject$D;
	var requireObjectCoercible = requireObjectCoercible$f;
	var speciesConstructor = speciesConstructor$3;
	var advanceStringIndex = advanceStringIndex$3;
	var toLength = toLength$9;
	var toString = toString$t;
	var getMethod = getMethod$9;
	var getRegExpFlags = regexpGetFlags;
	var regExpExec = regexpExecAbstract;
	var stickyHelpers = regexpStickyHelpers;
	var fails = fails$19;

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min = Math.min;
	var push = uncurryThis([].push);
	var stringSlice = uncurryThis(''.slice);
	var stringIndexOf = uncurryThis(''.indexOf);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  'test'.split(/(?:)/, -1).length !== 4 ||
	  'ab'.split(/(?:ab)*/).length !== 2 ||
	  '.'.split(/(.?)(.?)/).length !== 4 ||
	  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
	  '.'.split(/()()/).length > 1 ||
	  ''.split(/.?/).length;

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
	    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
	  } : nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = isObject(separator) ? getMethod(separator, SPLIT) : undefined;
	      return splitter
	        ? call(splitter, separator, O, limit)
	        : call(internalSplit, toString(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (string, limit) {
	      var rx = anObject(this);
	      var S = toString(string);

	      if (!BUGGY) {
	        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	        if (res.done) return res.value;
	      }

	      var C = speciesConstructor(rx, RegExp);
	      var flags = toString(getRegExpFlags(rx));
	      var unicodeMatching = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
	      if (UNSUPPORTED_Y) {
	        if (!~stringIndexOf(flags, 'g')) flags += 'g';
	      } else if (!~stringIndexOf(flags, 'y')) flags += 'y';
	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
	        var e;
	        if (
	          z === null ||
	          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          push(A, stringSlice(S, p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            push(A, z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      push(A, stringSlice(S, p));
	      return A;
	    }
	  ];
	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	/*!
	 * SJS 6.15.1
	 */

	!function(){function e(e,t){return (t||"")+" (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#"+e+")"}function t(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(S,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var r,n=t.slice(0,t.indexOf(":")+1);if(r="/"===t[n.length+1]?"file:"!==n?(r=t.slice(n.length+2)).slice(r.indexOf("/")+1):t.slice(8):t.slice(n.length+("/"===t[n.length])),"/"===e[0])return t.slice(0,t.length-r.length-1)+e;for(var i=r.slice(0,r.lastIndexOf("/")+1)+e,o=[],s=-1,c=0;c<i.length;c++) -1!==s?"/"===i[c]&&(o.push(i.slice(s,c+1)),s=-1):"."===i[c]?"."!==i[c+1]||"/"!==i[c+2]&&c+2!==i.length?"/"===i[c+1]||c+1===i.length?c+=1:s=c:(o.pop(),c+=2):s=c;return  -1!==s&&o.push(i.slice(s)),t.slice(0,t.length-r.length)+o.join("")}}function r(e,r){return t(e,r)||(-1!==e.indexOf(":")?e:t("./"+e,r))}function n(e,r,n,i,o){for(var s in e){var f=t(s,n)||s,a=e[s];if("string"==typeof a){var l=u(i,t(a,n)||a,o);l?r[f]=l:c("W1",s,a);}}}function i(e,t,i){var o;for(o in e.imports&&n(e.imports,i.imports,t,i,null),e.scopes||{}){var s=r(o,t);n(e.scopes[o],i.scopes[s]||(i.scopes[s]={}),t,i,s);}for(o in e.depcache||{})i.depcache[r(o,t)]=e.depcache[o];for(o in e.integrity||{})i.integrity[r(o,t)]=e.integrity[o];}function o(e,t){if(t[e])return e;var r=e.length;do{var n=e.slice(0,r+1);if(n in t)return n}while(-1!==(r=e.lastIndexOf("/",r-1)))}function s(e,t){var r=o(e,t);if(r){var n=t[r];if(null===n)return;if(!(e.length>r.length&&"/"!==n[n.length-1]))return n+e.slice(r.length);c("W2",r,n);}}function c(t,r,n){console.warn(e(t,[n,r].join(", ")));}function u(e,t,r){for(var n=e.scopes,i=r&&o(r,n);i;){var c=s(t,n[i]);if(c)return c;i=o(i.slice(0,i.lastIndexOf("/")),n);}return s(t,e.imports)||-1!==t.indexOf(":")&&t}function f(){this[b]={};}function a(t,r,n,i){var o=t[b][r];if(o)return o;var s=[],c=Object.create(null);j&&Object.defineProperty(c,j,{value:"Module"});var u=Promise.resolve().then((function(){return t.instantiate(r,n,i)})).then((function(n){if(!n)throw Error(e(2,r));var i=n[1]((function(e,t){o.h=true;var r=false;if("string"==typeof e)e in c&&c[e]===t||(c[e]=t,r=true);else {for(var n in e)t=e[n],n in c&&c[n]===t||(c[n]=t,r=true);e&&e.__esModule&&(c.__esModule=e.__esModule);}if(r)for(var i=0;i<s.length;i++){var u=s[i];u&&u(c);}return t}),2===n[1].length?{import:function(e,n){return t.import(e,r,n)},meta:t.createContext(r)}:void 0);return o.e=i.execute||function(){},[n[0],i.setters||[],n[2]||[]]}),(function(e){throw o.e=null,o.er=e,e})),f=u.then((function(e){return Promise.all(e[0].map((function(n,i){var o=e[1][i],s=e[2][i];return Promise.resolve(t.resolve(n,r)).then((function(e){var n=a(t,e,r,s);return Promise.resolve(n.I).then((function(){return o&&(n.i.push(o),!n.h&&n.I||o(n.n)),n}))}))}))).then((function(e){o.d=e;}))}));return o=t[b][r]={id:r,i:s,n:c,m:i,I:u,L:f,h:false,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0,p:void 0}}function l(e,t,r,n){if(!n[t.id])return n[t.id]=true,Promise.resolve(t.L).then((function(){return t.p&&null!==t.p.e||(t.p=r),Promise.all(t.d.map((function(t){return l(e,t,r,n)})))})).catch((function(e){if(t.er)throw e;throw t.e=null,e}))}function h(e,t){return t.C=l(e,t,t,{}).then((function(){return d(e,t,{})})).then((function(){return t.n}))}function d(e,t,r){function n(){try{var e=o.call(I);if(e)return e=e.then((function(){t.C=t.n,t.E=null;}),(function(e){throw t.er=e,t.E=null,e})),t.E=e;t.C=t.n,t.L=t.I=void 0;}catch(r){throw t.er=r,r}}if(!r[t.id]){if(r[t.id]=true,!t.e){if(t.er)throw t.er;return t.E?t.E:void 0}var i,o=t.e;return t.e=null,t.d.forEach((function(n){try{var o=d(e,n,r);o&&(i=i||[]).push(o);}catch(s){throw t.er=s,s}})),i?Promise.all(i).then(n):n()}}function v(){[].forEach.call(document.querySelectorAll("script"),(function(t){if(!t.sp)if("systemjs-module"===t.type){if(t.sp=true,!t.src)return;System.import("import:"===t.src.slice(0,7)?t.src.slice(7):r(t.src,p)).catch((function(e){if(e.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3")>-1){var r=document.createEvent("Event");r.initEvent("error",false,false),t.dispatchEvent(r);}return Promise.reject(e)}));}else if("systemjs-importmap"===t.type){t.sp=true;var n=t.src?(System.fetch||fetch)(t.src,{integrity:t.integrity,priority:t.fetchPriority,passThrough:true}).then((function(e){if(!e.ok)throw Error(e.status);return e.text()})).catch((function(r){return r.message=e("W4",t.src)+"\n"+r.message,console.warn(r),"function"==typeof t.onerror&&t.onerror(),"{}"})):t.innerHTML;M=M.then((function(){return n})).then((function(r){!function(t,r,n){var o={};try{o=JSON.parse(r);}catch(s){console.warn(Error(e("W5")));}i(o,n,t);}(R,r,t.src||p);}));}}));}var p,m="undefined"!=typeof Symbol,g="undefined"!=typeof self,y="undefined"!=typeof document,E=g?self:commonjsGlobal;if(y){var w=document.querySelector("base[href]");w&&(p=w.href);}if(!p&&"undefined"!=typeof location){var O=(p=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==O&&(p=p.slice(0,O+1));}var x,S=/\\/g,j=m&&Symbol.toStringTag,b=m?Symbol():"@",P=f.prototype;P.import=function(e,t,r){var n=this;return t&&"object"==typeof t&&(r=t,t=void 0),Promise.resolve(n.prepareImport()).then((function(){return n.resolve(e,t,r)})).then((function(e){var t=a(n,e,void 0,r);return t.C||h(n,t)}))},P.createContext=function(e){var t=this;return {url:e,resolve:function(r,n){return Promise.resolve(t.resolve(r,n||e))}}},P.register=function(e,t,r){x=[e,t,r];},P.getRegister=function(){var e=x;return x=void 0,e};var I=Object.freeze(Object.create(null));E.System=new f;var L,C,M=Promise.resolve(),R={imports:{},scopes:{},depcache:{},integrity:{}},T=y;if(P.prepareImport=function(e){return (T||e)&&(v(),T=false),M},P.getImportMap=function(){return JSON.parse(JSON.stringify(R))},y&&(v(),window.addEventListener("DOMContentLoaded",v)),P.addImportMap=function(e,t){i(e,t||p,R);},y){window.addEventListener("error",(function(e){J=e.filename,W=e.error;}));var _=location.origin;}P.createScript=function(e){var t=document.createElement("script");t.async=true,e.indexOf(_+"/")&&(t.crossOrigin="anonymous");var r=R.integrity[e];return r&&(t.integrity=r),t.src=e,t};var J,W,q={},N=P.register;P.register=function(e,t){if(y&&"loading"===document.readyState&&"string"!=typeof e){var r=document.querySelectorAll("script[src]"),n=r[r.length-1];if(n){L=e;var i=this;C=setTimeout((function(){q[n.src]=[e,t],i.import(n.src);}));}}else L=void 0;return N.call(this,e,t)},P.instantiate=function(t,r){var n=q[t];if(n)return delete q[t],n;var i=this;return Promise.resolve(P.createScript(t)).then((function(n){return new Promise((function(o,s){n.addEventListener("error",(function(){s(Error(e(3,[t,r].join(", "))));})),n.addEventListener("load",(function(){if(document.head.removeChild(n),J===t)s(W);else {var e=i.getRegister(t);e&&e[0]===L&&clearTimeout(C),o(e);}})),document.head.appendChild(n);}))}))},P.shouldFetch=function(){return  false},"undefined"!=typeof fetch&&(P.fetch=fetch);var k=P.instantiate,A=/^(text|application)\/(x-)?javascript(;|$)/;P.instantiate=function(t,r,n){var i=this;return this.shouldFetch(t,r,n)?this.fetch(t,{credentials:"same-origin",integrity:R.integrity[t],meta:n}).then((function(n){if(!n.ok)throw Error(e(7,[n.status,n.statusText,t,r].join(", ")));var o=n.headers.get("content-type");if(!o||!A.test(o))throw Error(e(4,o));return n.text().then((function(e){return e.indexOf("//# sourceURL=")<0&&(e+="\n//# sourceURL="+t),(0, eval)(e),i.getRegister(t)}))})):k.apply(this,arguments)},P.resolve=function(r,n){return u(R,t(r,n=n||p)||r,n)||function(t,r){throw Error(e(8,[t,r].join(", ")))}(r,n)};var F=P.instantiate;P.instantiate=function(e,t,r){var n=R.depcache[e];if(n)for(var i=0;i<n.length;i++)a(this,this.resolve(n[i],e),e);return F.call(this,e,t,r)},g&&"function"==typeof importScripts&&(P.instantiate=function(e){var t=this;return Promise.resolve().then((function(){return importScripts(e),t.getRegister(e)}))});}();

})();
