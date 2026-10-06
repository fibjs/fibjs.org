# Module perf_hooks
Node.js compatibility entry point that exposes the [performance](performance.md) measurement API

`require('perf_hooks')` returns a [module](module.md) with exactly two members, `performance` and
`PerformanceObserver`; both are the same objects as the globals `performance` and
`PerformanceObserver`, so the [module](module.md) exists only so that code written for Node.js can keep its
`require('perf_hooks')` destructuring.

Concepts:

- **What is shared**: the [module](module.md) [object](../../object/ifs/object.md) itself is stateless; marks, measures and observers live on
  the isolate, so every reference to `performance` ([module](module.md), [global](global.md), sandbox) sees the same
  timeline.
- **Not provided**: Node.js also exports `Performance`, `PerformanceEntry`, `PerformanceMark`,
  `PerformanceMeasure`, `PerformanceObserverEntryList`, `PerformanceResourceTiming`,
  `monitorEventLoopDelay`, `eventLoopUtilization`, `timerify`, `createHistogram` and `constants`;
  fibjs exposes none of them. The entry classes exist internally but are not reachable by name,
  and resource timing is a no-op (see the [performance](performance.md) [module](module.md)).

Import:

```JavaScript
const {
    performance,
    PerformanceObserver
} = require('perf_hooks');
```

Example 1 — the [module](module.md) members are the globals:

```JavaScript
const perf_hooks = require('perf_hooks');

console.log(perf_hooks.performance === global.performance); // true
console.log(perf_hooks.PerformanceObserver === global.PerformanceObserver); // true
console.log(Object.keys(perf_hooks).sort().join(', ')); // PerformanceObserver, performance
```

Example 2 — a minimal Node.js style measurement:

```JavaScript
const {
    performance,
    PerformanceObserver
} = require('perf_hooks');

performance.clearMarks();
performance.mark('boot');
performance.mark('ready');
const observer = new PerformanceObserver(() => {});
observer.observe({
    entryTypes: ['measure']
});
performance.measure('boot-time', 'boot', 'ready');

const measure = observer.takeRecords()[0];
console.log(measure.name, measure.entryType); // boot-time measure
observer.disconnect();
```

## Objects
        
### PerformanceObserver
**The [PerformanceObserver](../../object/ifs/PerformanceObserver.md) class, identical to the [global](global.md) of the same name, see [PerformanceObserver](../../object/ifs/PerformanceObserver.md)**

```JavaScript
PerformanceObserver perf_hooks.PerformanceObserver;
```

Use it to subscribe to marks and measures as they are recorded:
`new [perf_hooks.PerformanceObserver](perf_hooks.md#PerformanceObserver)(callback)`.

--------------------------
### performance
**The [performance](performance.md) timeline [object](../../object/ifs/object.md), identical to the [global](global.md) `[performance](performance.md)`, see [performance](performance.md)**

```JavaScript
performance perf_hooks.performance;
```

Carries the `now`, `mark`, `measure` and `getEntries*` members described in the [performance](performance.md)
[module](module.md).

