/**
 * Browser polyfills and runtime patches for older Android mobile browsers,
 * WebViews (Android 4.4 - 9.0), and low-powered mobile devices.
 */

// 1. globalThis polyfill (Chrome < 71, Android < 10)
if (typeof globalThis === 'undefined') {
  (window as unknown as { globalThis: Window }).globalThis = window;
}

// 2. CustomEvent constructor polyfill (Android 4.4 - 5.1 WebViews throw "Illegal constructor")
if (typeof window !== 'undefined') {
  try {
    new window.CustomEvent('test');
  } catch {
    const CustomEventPolyfill = function (
      type: string,
      params?: { bubbles?: boolean; cancelable?: boolean; detail?: unknown }
    ) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      const evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        type,
        Boolean(params.bubbles),
        Boolean(params.cancelable),
        params.detail
      );
      return evt;
    };
    CustomEventPolyfill.prototype = (window as unknown as { Event: { prototype: unknown } }).Event.prototype;
    (window as unknown as { CustomEvent: unknown }).CustomEvent = CustomEventPolyfill;
  }
}

// 3. structuredClone fallback (Chrome < 98)
if (typeof window !== 'undefined' && typeof window.structuredClone !== 'function') {
  window.structuredClone = function <T>(value: T): T {
    if (value === undefined) return undefined as unknown as T;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch {
      return value;
    }
  };
}

// 4. window.requestIdleCallback polyfill (iOS Safari & older Android)
if (typeof window !== 'undefined') {
  if (typeof (window as unknown as { requestIdleCallback?: unknown }).requestIdleCallback !== 'function') {
    (window as unknown as { requestIdleCallback: (cb: (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void) => number }).requestIdleCallback = function (cb) {
      const start = Date.now();
      return window.setTimeout(() => {
        cb({
          didTimeout: false,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
        });
      }, 1);
    };
  }

  if (typeof (window as unknown as { cancelIdleCallback?: unknown }).cancelIdleCallback !== 'function') {
    (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback = function (id: number) {
      clearTimeout(id);
    };
  }
}

// 5. window.scrollTo smooth-scroll options object fallback (Android < 6.0 throws TypeError on options object)
if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
  const nativeScrollTo = window.scrollTo;
  window.scrollTo = function (optionsOrX?: unknown, y?: unknown) {
    try {
      if (typeof optionsOrX === 'object' && optionsOrX !== null) {
        const opts = optionsOrX as { top?: number; left?: number; x?: number; y?: number };
        const targetX = opts.left ?? opts.x ?? 0;
        const targetY = opts.top ?? opts.y ?? 0;
        nativeScrollTo.call(window, targetX, targetY);
      } else {
        nativeScrollTo.call(window, (optionsOrX as number) || 0, (y as number) || 0);
      }
    } catch {
      try {
        window.scroll(0, typeof optionsOrX === 'object' && optionsOrX !== null ? ((optionsOrX as { top?: number }).top || 0) : ((y as number) || 0));
      } catch {
        // Ignore unsupported scrolling environments
      }
    }
  };
}

// 6. String.prototype.replaceAll fallback (Chrome < 85)
if (typeof String.prototype.replaceAll !== 'function') {
  String.prototype.replaceAll = function (
    search: string | RegExp,
    replacement: string | ((substring: string, ...args: unknown[]) => string)
  ): string {
    if (Object.prototype.toString.call(search).toLowerCase() === '[object regexp]') {
      return this.replace(search as RegExp, replacement as string);
    }
    const escaped = String(search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.replace(new RegExp(escaped, 'g'), replacement as string);
  };
}

// 7. Promise.allSettled fallback (Chrome < 76)
if (typeof Promise.allSettled !== 'function') {
  Promise.allSettled = function <T>(promises: Iterable<T | PromiseLike<T>>) {
    return Promise.all(
      Array.from(promises).map((item) =>
        Promise.resolve(item).then(
          (value) => ({ status: 'fulfilled' as const, value }),
          (reason) => ({ status: 'rejected' as const, reason })
        )
      )
    );
  };
}

// 8. crypto.randomUUID fallback (Chrome < 92)
if (typeof window !== 'undefined') {
  const winCrypto = window.crypto as unknown as { randomUUID?: () => string };
  if (winCrypto && typeof winCrypto.randomUUID !== 'function') {
    winCrypto.randomUUID = function (): string {
      return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
        (
          Number(c) ^
          (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
        ).toString(16)
      );
    };
  }
}

// 9. matchMedia fallback (Older Android WebViews without window.matchMedia)
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  (window as unknown as { matchMedia: (query: string) => MediaQueryList }).matchMedia = function (query: string) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {
        return false;
      },
    } as unknown as MediaQueryList;
  };
}

export {};
