function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
globalThis.clearImmediate = clearImmediateFallback;

// node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// node_modules/unenv/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate = class {
  _onImmediate;
  _timeout;
  constructor(callback, args) {
    this._onImmediate = callback;
    if ("setTimeout" in globalThis) {
      this._timeout = setTimeout(callback, 0, ...args);
    } else {
      callback(...args);
    }
  }
  ref() {
    this._timeout?.ref();
    return this;
  }
  unref() {
    this._timeout?.unref();
    return this;
  }
  hasRef() {
    return this._timeout?.hasRef() ?? false;
  }
  [Symbol.dispose]() {
    if ("clearTimeout" in globalThis) {
      clearTimeout(this._timeout);
    }
  }
};
__name(Immediate, "Immediate");

// node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
__name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
__name(setImmediateFallback, "setImmediateFallback");
setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
__name(clearImmediateFallback, "clearImmediateFallback");

// node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
globalThis.setImmediate = setImmediateFallback;

// node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";

// node_modules/unenv/runtime/mock/proxy.mjs
var fn = /* @__PURE__ */ __name(function() {
}, "fn");
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
__name(createMock, "createMock");
var proxy_default = createMock("mock");

// node_modules/unenv/runtime/node/console/index.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? notImplemented("console.createTask");
var assert = notImplemented("console.assert");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? proxy_default.__createMock__("console.Console");

// node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole = globalThis["console"];
var {
  assert: assert2,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler: noop_default,
  _stdout,
  _stdoutErrorHandler: noop_default,
  _times: proxy_default
});
var cloudflare_default = workerdConsole;

// node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
globalThis.console = cloudflare_default;

// node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes = [
  "event",
  // PerformanceEntry
  "mark",
  // PerformanceMark
  "measure",
  // PerformanceMeasure
  "resource"
  // PerformanceResourceTiming
];
var _PerformanceEntry = class {
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || performance.now();
    this.detail = options?.detail;
  }
  get duration() {
    return performance.now() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
__name(_PerformanceEntry, "_PerformanceEntry");
var PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
var _PerformanceMark = class extends _PerformanceEntry {
  entryType = "mark";
};
__name(_PerformanceMark, "_PerformanceMark");
var PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
var _PerformanceMeasure = class extends _PerformanceEntry {
  entryType = "measure";
};
__name(_PerformanceMeasure, "_PerformanceMeasure");
var PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
var _PerformanceResourceTiming = class extends _PerformanceEntry {
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
__name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
var PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;

// node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin = Date.now();
var _Performance = class {
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = proxy_default.__createMock__("PerformanceNavigation");
  timing = proxy_default.__createMock__("PerformanceTiming");
  onresourcetimingbufferfull = null;
  now() {
    if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
      return globalThis.performance.now();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter(
      (e) => e.entryType !== "resource" || e.entryType !== "navigation"
    );
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter(
      (e) => e.name === name && (!type || e.entryType === type)
    );
  }
  getEntriesByType(type) {
    return this._entries.filter(
      (e) => e.entryType === type
    );
  }
  mark(name, options) {
    const entry = new _PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
    }
    const entry = new _PerformanceMeasure(measureName, {
      startTime: start,
      detail: { start, end }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  toJSON() {
    return this;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
};
__name(_Performance, "_Performance");
var Performance = globalThis.Performance || _Performance;
var performance2 = globalThis.performance || new Performance();

// node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver = class {
  __unenv__ = true;
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
};
__name(_PerformanceObserver, "_PerformanceObserver");
__publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
var PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
var _PerformanceObserverEntryList = class {
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
__name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
var PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;

// node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
__name(getGlobal, "getGlobal");
var global_this_default = getGlobal();

// node_modules/unenv/runtime/polyfill/performance.mjs
global_this_default.performance = global_this_default.performance || performance2;
global_this_default.Performance = global_this_default.Performance || Performance;
global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
var performance_default = global_this_default.performance;

// node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
globalThis.performance = performance_default;

// node_modules/unenv/runtime/mock/empty.mjs
var empty_default = Object.freeze(
  Object.create(null, {
    __unenv__: { get: () => true }
  })
);

// node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim = /* @__PURE__ */ Object.create(null);
var _processEnv = globalThis.process?.env;
var _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
var env = new Proxy(_envShim, {
  get(_, prop) {
    const env22 = _getEnv();
    return env22[prop] ?? _envShim[prop];
  },
  has(_, prop) {
    const env22 = _getEnv();
    return prop in env22 || prop in _envShim;
  },
  set(_, prop, value) {
    const env22 = _getEnv(true);
    env22[prop] = value;
    return true;
  },
  deleteProperty(_, prop) {
    const env22 = _getEnv(true);
    delete env22[prop];
    return true;
  },
  ownKeys() {
    const env22 = _getEnv();
    return Object.keys(env22);
  }
});

// node_modules/unenv/runtime/node/process/internal/time.mjs
var hrtime = Object.assign(
  /* @__PURE__ */ __name(function hrtime2(startTime) {
    const now = Date.now();
    const seconds = Math.trunc(now / 1e3);
    const nanos = now % 1e3 * 1e6;
    if (startTime) {
      let diffSeconds = seconds - startTime[0];
      let diffNanos = nanos - startTime[0];
      if (diffNanos < 0) {
        diffSeconds = diffSeconds - 1;
        diffNanos = 1e9 + diffNanos;
      }
      return [diffSeconds, diffNanos];
    }
    return [seconds, nanos];
  }, "hrtime2"),
  {
    bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint")
  }
);
var nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
  globalThis.queueMicrotask(cb.bind(void 0, ...args));
} : _createNextTickWithTimeout();
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick22;
}
__name(_createNextTickWithTimeout, "_createNextTickWithTimeout");

// node_modules/unenv/runtime/node/process/internal/process.mjs
var title = "unenv";
var argv = [];
var version = "";
var versions = {
  ares: "",
  http_parser: "",
  icu: "",
  modules: "",
  node: "",
  openssl: "",
  uv: "",
  v8: "",
  zlib: ""
};
function noop() {
  return process;
}
__name(noop, "noop");
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = /* @__PURE__ */ __name(function emit2(event) {
  if (event === "message" || event === "multipleResolves") {
    return process;
  }
  return false;
}, "emit2");
var prependListener = noop;
var prependOnceListener = noop;
var listeners = /* @__PURE__ */ __name(function(name) {
  return [];
}, "listeners");
var listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
var binding = /* @__PURE__ */ __name(function(name) {
  throw new Error("[unenv] process.binding is not supported");
}, "binding");
var _cwd = "/";
var cwd = /* @__PURE__ */ __name(function cwd2() {
  return _cwd;
}, "cwd2");
var chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
  _cwd = dir3;
}, "chdir2");
var umask = /* @__PURE__ */ __name(function umask2() {
  return 0;
}, "umask2");
var getegid = /* @__PURE__ */ __name(function getegid2() {
  return 1e3;
}, "getegid2");
var geteuid = /* @__PURE__ */ __name(function geteuid2() {
  return 1e3;
}, "geteuid2");
var getgid = /* @__PURE__ */ __name(function getgid2() {
  return 1e3;
}, "getgid2");
var getuid = /* @__PURE__ */ __name(function getuid2() {
  return 1e3;
}, "getuid2");
var getgroups = /* @__PURE__ */ __name(function getgroups2() {
  return [];
}, "getgroups2");
var getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
var abort = notImplemented("process.abort");
var allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
var arch = "";
var argv0 = "";
var config = empty_default;
var connected = false;
var constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
var availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
var cpuUsage = notImplemented("process.cpuUsage");
var debugPort = 0;
var dlopen = notImplemented("process.dlopen");
var disconnect = noop;
var emitWarning = noop;
var eventNames = notImplemented("process.eventNames");
var execArgv = [];
var execPath = "";
var exit = notImplemented("process.exit");
var features = /* @__PURE__ */ Object.create({
  inspector: void 0,
  debug: void 0,
  uv: void 0,
  ipv6: void 0,
  tls_alpn: void 0,
  tls_sni: void 0,
  tls_ocsp: void 0,
  tls: void 0,
  cached_builtins: void 0
});
var getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
var getMaxListeners = notImplemented(
  "process.getMaxListeners"
);
var kill = notImplemented("process.kill");
var memoryUsage = Object.assign(
  () => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }),
  { rss: () => 0 }
);
var pid = 1e3;
var platform = "";
var ppid = 1e3;
var rawListeners = notImplemented(
  "process.rawListeners"
);
var release = /* @__PURE__ */ Object.create({
  name: "",
  lts: "",
  sourceUrl: void 0,
  headersUrl: void 0
});
var report = /* @__PURE__ */ Object.create({
  compact: void 0,
  directory: void 0,
  filename: void 0,
  getReport: notImplemented("process.report.getReport"),
  reportOnFatalError: void 0,
  reportOnSignal: void 0,
  reportOnUncaughtException: void 0,
  signal: void 0,
  writeReport: notImplemented("process.report.writeReport")
});
var resourceUsage = notImplemented(
  "process.resourceUsage"
);
var setegid = notImplemented("process.setegid");
var seteuid = notImplemented("process.seteuid");
var setgid = notImplemented("process.setgid");
var setgroups = notImplemented("process.setgroups");
var setuid = notImplemented("process.setuid");
var setMaxListeners = notImplemented(
  "process.setMaxListeners"
);
var setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
var stdout = proxy_default.__createMock__("process.stdout");
var stderr = proxy_default.__createMock__("process.stderr");
var stdin = proxy_default.__createMock__("process.stdin");
var traceDeprecation = false;
var uptime = /* @__PURE__ */ __name(() => 0, "uptime");
var exitCode = 0;
var setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
var hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
var sourceMapsEnabled = false;
var loadEnvFile = notImplemented(
  "process.loadEnvFile"
);
var mainModule = void 0;
var permission = {
  has: () => false
};
var channel = {
  ref() {
  },
  unref() {
  }
};
var throwDeprecation = false;
var finalization = {
  register() {
  },
  unregister() {
  },
  registerBeforeExit() {
  }
};
var assert3 = notImplemented("process.assert");
var openStdin = notImplemented("process.openStdin");
var _debugEnd = notImplemented("process._debugEnd");
var _debugProcess = notImplemented("process._debugProcess");
var _fatalException = notImplemented("process._fatalException");
var _getActiveHandles = notImplemented("process._getActiveHandles");
var _getActiveRequests = notImplemented("process._getActiveRequests");
var _kill = notImplemented("process._kill");
var _preload_modules = [];
var _rawDebug = notImplemented("process._rawDebug");
var _startProfilerIdleNotifier = notImplemented(
  "process._startProfilerIdleNotifier"
);
var _stopProfilerIdleNotifier = notImplemented(
  "process.__stopProfilerIdleNotifier"
);
var _tickCallback = notImplemented("process._tickCallback");
var _linkedBinding = notImplemented("process._linkedBinding");
var domain = void 0;
var initgroups = notImplemented("process.initgroups");
var moduleLoadList = [];
var reallyExit = noop;
var _exiting = false;
var _events = [];
var _eventsCount = 0;
var _maxListeners = 0;
var process = {
  // @ts-expect-error
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  exitCode,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  throwDeprecation,
  mainModule,
  permission,
  channel,
  arch,
  argv,
  argv0,
  assert: assert3,
  binding,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions
};

// node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess = globalThis["process"];
var getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule2("node:process");
var { env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess;
var _process = {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error (not typed)
  _debugEnd,
  _debugProcess,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _linkedBinding,
  _maxListeners,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert3,
  availableMemory,
  binding,
  chdir,
  config,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit: exit2,
  exitCode,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  moduleLoadList,
  off,
  on,
  once,
  openStdin,
  pid,
  platform: platform2,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  setUncaughtExceptionCaptureCallback,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  umask,
  uptime,
  version,
  versions,
  /**
   * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
   */
  env: env2,
  getBuiltinModule: getBuiltinModule2,
  nextTick: nextTick2
};
var cloudflare_default2 = _process;

// node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
globalThis.process = cloudflare_default2;

// src/_worker.ts
var worker_default = {
  async fetch(request, env3, ctx) {
    const ret = fetchHandler(request).catch(
      (err) => makeRes("cfworker error:\n" + err.stack, 502)
    );
    return await ret;
  }
};
var ASSET_URL = "https://asjdf.github.io/ghproxy/";
var PREFIX = "/";
var Config = {
  jsdelivr: 0
};
var whiteList = [];
var PREFLIGHT_INIT = {
  status: 204,
  headers: new Headers({
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS",
    "access-control-max-age": "1728000"
  })
};
var releaseExp = /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:releases|archive)\/.*$/i;
var fileExp = /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:blob|raw)\/.*$/i;
var infoExp = /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:info|git-).*$/i;
var rawExp = /^(?:https?:\/\/)?raw\.(?:githubusercontent|github)\.com\/.+?\/.+?\/.+?\/.+$/i;
var gistExp = /^(?:https?:\/\/)?gist\.(?:githubusercontent|github)\.com\/.+?\/.+?\/.+$/i;
var tagsPageExp = /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/tags.*$/i;
var apiExp = /^(?:https?:\/\/)?api\.github\.com\/.*$/i;
var oauthExp = /^(?:https?:\/\/)?github\.com\/login\/oauth\/.*$/i;
function makeRes(body, status = 200, headers = {}) {
  headers["access-control-allow-origin"] = "*";
  return new Response(body, { status, headers });
}
__name(makeRes, "makeRes");
function newUrl(urlStr) {
  try {
    return new URL(urlStr);
  } catch (err) {
    return null;
  }
}
__name(newUrl, "newUrl");
function checkUrl(u) {
  for (let i of [
    releaseExp,
    fileExp,
    infoExp,
    rawExp,
    gistExp,
    tagsPageExp,
    apiExp,
    oauthExp
  ]) {
    if (u.search(i) === 0) {
      return true;
    }
  }
  return false;
}
__name(checkUrl, "checkUrl");
async function fetchHandler(req) {
  const urlStr = req.url;
  const urlObj = new URL(urlStr);
  let path = urlObj.searchParams.get("q");
  if (path) {
    return Response.redirect("https://" + urlObj.host + PREFIX + path, 301);
  }
  path = urlObj.href.substr(urlObj.origin.length + PREFIX.length).replace(/^https?:\/+/, "https://");
  if (path.search(releaseExp) === 0 || path.search(gistExp) === 0 || path.search(tagsPageExp) === 0 || path.search(infoExp) === 0 || path.search(rawExp) === 0 || path.search(apiExp) === 0 || path.search(oauthExp) === 0) {
    return await httpHandler(req, path);
  } else if (path.search(fileExp) === 0) {
    if (Config.jsdelivr) {
      const newUrl2 = path.replace("/blob/", "@").replace(
        /^(?:https?:\/\/)?github\.com/,
        "https://cdn.jsdelivr.net/gh"
      );
      return Response.redirect(newUrl2, 302);
    } else {
      path = path.replace("/blob/", "/raw/");
      return await httpHandler(req, path);
    }
  } else if (path.search(rawExp) === 0) {
    const newUrl2 = path.replace(/(?<=com\/.+?\/.+?)\/(.+?\/)/, "@$1").replace(
      /^(?:https?:\/\/)?raw\.(?:githubusercontent|github)\.com/,
      "https://cdn.jsdelivr.net/gh"
    );
    return Response.redirect(newUrl2, 302);
  } else {
    return await fetch(ASSET_URL + path);
  }
}
__name(fetchHandler, "fetchHandler");
async function httpHandler(req, pathname) {
  const reqHdrRaw = req.headers;
  if (req.method === "OPTIONS" && reqHdrRaw.has("access-control-request-headers")) {
    return new Response(null, PREFLIGHT_INIT);
  }
  console.log(reqHdrRaw);
  const reqHdrNew = new Headers(reqHdrRaw);
  let urlStr = pathname;
  let flag = !Boolean(whiteList.length);
  for (let i of whiteList) {
    if (urlStr.includes(i)) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    return new Response("blocked", { status: 403 });
  }
  if (urlStr.search(/^https?:\/\//) !== 0) {
    urlStr = "https://" + urlStr;
  }
  const urlObj = newUrl(urlStr);
  const reqInit = {
    method: req.method,
    headers: reqHdrNew,
    redirect: "manual",
    body: req.body
  };
  return await proxy(urlObj, reqInit);
}
__name(httpHandler, "httpHandler");
async function proxy(urlObj, reqInit) {
  if (urlObj === null) {
    return new Response("invalid url", { status: 400 });
  }
  console.log(urlObj.href);
  const res = await fetch(urlObj.href, reqInit);
  const resHdrOld = res.headers;
  const resHdrNew = new Headers(resHdrOld);
  const status = res.status;
  if (resHdrNew.has("location")) {
    let _location = resHdrNew.get("location") || "";
    if (checkUrl(_location))
      resHdrNew.set("location", PREFIX + _location);
    else {
      reqInit.redirect = "follow";
      return proxy(newUrl(_location), reqInit);
    }
  }
  resHdrNew.set("access-control-expose-headers", "*");
  resHdrNew.set("access-control-allow-origin", "*");
  resHdrNew.delete("content-security-policy");
  resHdrNew.delete("content-security-policy-report-only");
  resHdrNew.delete("clear-site-data");
  return new Response(res.body, {
    status,
    headers: resHdrNew
  });
}
__name(proxy, "proxy");
export {
  worker_default as default
};
//# sourceMappingURL=_worker.js.map
