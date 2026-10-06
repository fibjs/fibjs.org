# Module async_hooks
The async_hooks [module](module.md) exposes the Node.js compatible classes for tracking asynchronous context: [AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md) and [AsyncResource](../../object/ifs/AsyncResource.md)

The [module](module.md) is an export surface: it re-exports the two classes documented in
the [AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md) and [AsyncResource](../../object/ifs/AsyncResource.md) definitions, so code written for
Node.js can keep using `require('async_hooks')`. Both classes propagate their
context through [timers](timers.md), callbacks, promises and fibers created inside a
tracked scope.

Main capabilities:

- **[AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md)**: stores a value for an asynchronous call chain and reads it back
  from any callback created inside it; used for request-scoped data such as a request id,
  a user or a trace context;
- **[AsyncResource](../../object/ifs/AsyncResource.md)**: captures the context of the creating fiber and restores it around a
  callback that runs later, for wrapping third-party callback APIs.

Concepts:

- **What is implemented**: the [module](module.md) exports exactly the two classes;
  `AsyncLocalStorage` and `AsyncResource` are the same constructors as the definitions of
  the same names, and the [module](module.md) is also reachable as `require('node:async_hooks')`.
- **What is not implemented**: the Node.js `createHook` and its hook callbacks,
  `executionAsyncId()`, the [module](module.md)-level `triggerAsyncId()`, `asyncWrapProviders` and
  `defaults` are missing, so code that instruments the asynchronous lifecycle itself
  must be adapted. There are no destroy hooks, so `emitDestroy` is a no-op and the
  `requireManualDestroy` option is ignored.
- **Async ids**: `asyncId` and `triggerAsyncId` on resources are informational counters
  provided by the classes, not the ids of the Node.js async hooks subsystem; see the
  [AsyncResource](../../object/ifs/AsyncResource.md) definition for the exact values.
- **Context propagation**: [AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md) stores attach to the asynchronous context of
  the current fiber, and every asynchronous operation created inside `run` inherits the
  store. A manually created resource is the escape hatch for callbacks that fibjs cannot
  instrument by itself.

Import:

```JavaScript
const async_hooks = require('async_hooks'); // also require('node:async_hooks')
const {
    AsyncLocalStorage,
    AsyncResource
} = async_hooks;
```

Example 1 — request-scoped store across a timer:

```JavaScript
const {
    AsyncLocalStorage
} = require('async_hooks');
const als = new AsyncLocalStorage();

als.run({
    requestId: 'req-123'
}, () => {
    setTimeout(() => console.log(als.getStore().requestId), 10); // req-123
});
console.log(als.getStore()); // undefined, outside run()
```

Example 2 — wrap a callback API with [AsyncResource](../../object/ifs/AsyncResource.md):

```JavaScript
const {
    AsyncResource,
    AsyncLocalStorage
} = require('async_hooks');
const als = new AsyncLocalStorage();

function readLater(callback) {
    const resource = new AsyncResource('Read');
    setTimeout(() => resource.runInAsyncScope(callback, null, 'data'), 10);
}

als.run({
    requestId: 'req-9'
}, () => {
    readLater(() => console.log(als.getStore().requestId)); // req-9
});
```

Notes:

- The two classes are only reachable through this [module](module.md); they are not [global](global.md)
  variables and do not have their own [module](module.md) names, so
  `require('[AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md)')` fails with error 20024.
- The context-tracking API of both classes is complete; the differences from Node.js
  are limited to diagnostics (ids, missing hook callbacks, ignored options) and are
  documented in the class definitions.

## Objects
        
### AsyncLocalStorage
**The [AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md) class, see the [AsyncLocalStorage](../../object/ifs/AsyncLocalStorage.md) definition**

```JavaScript
AsyncLocalStorage async_hooks.AsyncLocalStorage;
```

This member is the constructor of the class, so
`new [async_hooks.AsyncLocalStorage](async_hooks.md#AsyncLocalStorage)([options])` creates an instance. The class stores
one value per asynchronous execution context and is the recommended way to carry
request-scoped data across callbacks, promises and fibers.

Example — set a store in place and hide it temporarily with exit:

```JavaScript
const {
    AsyncLocalStorage
} = require('async_hooks');
const als = new AsyncLocalStorage();

als.enterWith('A');
console.log(als.getStore()); // A
console.log(als.exit(() => als.getStore())); // undefined
console.log(als.getStore()); // A
```

Node.js comparison: this is the same class; the `withScope` helper for `using`
declarations is not provided.

--------------------------
### AsyncResource
**The [AsyncResource](../../object/ifs/AsyncResource.md) class, see the [AsyncResource](../../object/ifs/AsyncResource.md) definition**

```JavaScript
AsyncResource async_hooks.AsyncResource;
```

This member is the constructor of the class, so
`new [async_hooks.AsyncResource](async_hooks.md#AsyncResource)(type[, triggerAsyncId])` captures the asynchronous
context of the current fiber; use `runInAsyncScope` or the static `bind` to run a
completion callback inside the captured context. Use it when an operation outlives the
context that created it and fibjs cannot instrument the callback [path](path.md) itself.

Example — bind a function to the context that created it:

```JavaScript
const {
    AsyncResource,
    AsyncLocalStorage
} = require('async_hooks');
const als = new AsyncLocalStorage();

const read = als.run({
    id: 7
}, () => AsyncResource.bind(() => als.getStore().id));
console.log(read()); // 7

als.run({
    id: 8
}, () => console.log(read())); // 7
```

Node.js comparison: the constructor, runInAsyncScope, bind and the id accessors
match; `requireManualDestroy` is accepted but ignored because emitDestroy is a no-op.
See the [AsyncResource](../../object/ifs/AsyncResource.md) definition for details.

