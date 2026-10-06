# Module worker_threads
The worker_threads [module](module.md) runs JavaScript in real OS threads, one isolate per [Worker](../../object/ifs/Worker.md), and exchanges structured-clone messages with them

The [module](module.md) complements the fiber-based concurrency of the [coroutine](coroutine.md) [module](module.md): a [Worker](../../object/ifs/Worker.md) is a separate
JavaScript isolate on its own thread, so it can use multiple CPU cores and keep blocking native
calls away from the main thread. Use [Worker](../../object/ifs/Worker.md) for CPU-bound or isolation-sensitive work; use
[Fiber](../../object/ifs/Fiber.md)/[coroutine](coroutine.md) for lightweight, mostly IO-bound concurrency where objects are shared directly.

Main capabilities:

- **Thread class**: `Worker` creates and controls a child thread;
- **[Message](../../object/ifs/Message.md) channels**: `MessagePort` is one end of a channel, `MessageChannel` builds a
  connected pair, `parentPort` is the worker-side end of the implicit channel to its parent, and
  `receiveMessageOnPort` dequeues a queued message synchronously;
- **Context information**: `isMainThread`, `threadId` and `workerData` describe the current
  execution context;
- **Clone-control compatibility helpers**: `markAsUncloneable`, `markAsUntransferable` and
  `isMarkedAsUntransferable` are accepted but have no effect.

Concepts:

- **[Worker](../../object/ifs/Worker.md) isolate**: every [Worker](../../object/ifs/Worker.md) gets its own V8 isolate, [global](global.md) [object](../../object/ifs/object.md) and [module](module.md) cache on its
  own OS thread. Plain JavaScript objects are never shared, and a SharedArrayBuffer cannot be
  put into a message or into workerData, so all communication goes through messages.
- **workerData handoff**: `new [Worker](../../object/ifs/Worker.md)([path](path.md), { workerData })` structured-clones the value once,
  before the thread starts; the worker reads the clone as `workerData`, and later mutations on
  either side do not propagate.
- **[Message](../../object/ifs/Message.md) passing and structured clone**: `postMessage` serializes the value with V8's
  serializer and delivers a copy to the peer. Objects, arrays, Date, RegExp, Map, Set, Error,
  typed arrays and ArrayBuffer survive the round trip; functions, classes, native handles and
  SharedArrayBuffer do not, and throw `Error: <value> could not be cloned.` at the sender.
- **Transferables**: the optional transfer list detaches `ArrayBuffer` entries on the sender
  instead of copying them; entries of any other type are silently ignored.
- **Lifecycle**: a worker emits `online` when its isolate has started, `message` for each
  delivered message, `error` for an uncaught exception and `exit` once with the exit code;
  `terminate()` returns a promise that resolves with that code. A live [Worker](../../object/ifs/Worker.md) keeps the [process](process.md)
  alive until `unref()` or `terminate()`.
- **Main thread vs worker**: in the main thread `parentPort` and `workerData` are null and
  `threadId` is 0; inside a worker `parentPort` is the worker's end of the implicit channel and
  `threadId` is positive.

Import:

```JavaScript
const worker_threads = require('worker_threads');
```

Example 1 — run a worker script and exchange a message:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const worker_threads = require('worker_threads');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-worker-'));
const script = path.join(dir, 'echo.js');
fs.writeFile(script,
    'const { parentPort } = require("worker_threads");\n' +
    'parentPort.on("message", (value) => parentPort.postMessage(value + "!"));\n');

const worker = new worker_threads.Worker(script);
worker.on('message', (reply) => {
    console.log(reply); // hello!
    worker.terminate().then(() => fs.rmSync(dir, {
        recursive: true,
        force: true
    }));
});
worker.postMessage('hello');
```

Example 2 — hand a snapshot to an eval worker with workerData:

```JavaScript
const worker_threads = require('worker_threads');

const settings = {
    factor: 3,
    values: [1, 2]
};
const worker = new worker_threads.Worker(
    'const { parentPort, workerData } = require("worker_threads");\n' +
    'parentPort.postMessage(workerData.values.map((v) => v * workerData.factor));', {
        eval: true,
        workerData: settings
    });

settings.values.push(99); // the worker received a clone, so this does not matter
worker.on('message', (result) => {
    console.log(JSON.stringify(result)); // [3,6]
    worker.terminate();
});
```

Example 3 — decouple two parts of one isolate with a [MessageChannel](../../object/ifs/MessageChannel.md):

```JavaScript
const {
    MessageChannel,
    receiveMessageOnPort
} = require('worker_threads');

const {
    port1,
    port2
} = new MessageChannel();
port1.postMessage({
    id: 7
});
const received = receiveMessageOnPort(port2);
console.log(received.message.id); // 7
port1.close();
port2.close();
```

Notes:

- The classes are also installed as globals (`Worker`, `MessagePort`, `MessageChannel` and
  `MessageEvent`).
- Differences from Node.js: `worker.exitCode`, `worker.stdin`, `worker.stdout` and
  `worker.stderr` are not provided; a transfer list only detaches ArrayBuffers and a [MessagePort](../../object/ifs/MessagePort.md)
  cannot be transferred or used as workerData; the `markAs*` helpers are no-ops.
- Thread affinity: by default all JavaScript of one isolate runs on one dedicated OS thread
  (`--no-js-thread-affinity` disables this), matching the N-API contract that a napi_env belongs
  to a single thread. An extension using a blocking threadsafe function can self-deadlock in a
  worker, as it would block the Node.js event loop.

## Objects
        
### Worker
**Independent thread worker [object](../../object/ifs/object.md), see [Worker](../../object/ifs/Worker.md)**

```JavaScript
Worker worker_threads.Worker;
```

The class is shared with the [global](global.md) `Worker`: `new Worker([path](path.md), opts)` starts a real OS
thread with its own isolate.

--------------------------
### MessagePort
**One end of a message channel, see [MessagePort](../../object/ifs/MessagePort.md)**

```JavaScript
MessagePort worker_threads.MessagePort;
```

The class is shared with the [global](global.md) `MessagePort`; instances are obtained from
`new [MessageChannel](../../object/ifs/MessageChannel.md)()` or from `parentPort` inside a worker, never by construction.

--------------------------
### MessageChannel
**A pair of connected [MessagePort](../../object/ifs/MessagePort.md) objects, see [MessageChannel](../../object/ifs/MessageChannel.md)**

```JavaScript
MessageChannel worker_threads.MessageChannel;
```

The class is shared with the [global](global.md) `MessageChannel`; `new MessageChannel()` returns the
linked `port1`/`port2` pair.

## Static Methods
        
### receiveMessageOnPort
**Synchronously receives the next queued message on a [MessagePort](../../object/ifs/MessagePort.md)**

```JavaScript
static Value worker_threads.receiveMessageOnPort(MessagePort port);
```

Parameters:
* port: [MessagePort](../../object/ifs/MessagePort.md), the [MessagePort](../../object/ifs/MessagePort.md) [object](../../object/ifs/object.md) to receive messages from

Returns:
* Value, returns the received message [object](../../object/ifs/object.md), or undefined when the port is empty

Dequeues messages in FIFO order without starting the port and without invoking its `message`
listeners; returns `undefined` when the queue is empty. The result is an [object](../../object/ifs/object.md) with a single
`message` field holding the deserialized value. `port` must be a [MessagePort](../../object/ifs/MessagePort.md): as in Node.js
there is no `worker.port`, so use a channel created with `new [MessageChannel](../../object/ifs/MessageChannel.md)()` or a
`parentPort` inside a worker. A value that is not a [MessagePort](../../object/ifs/MessagePort.md) throws `TypeError`; fibjs
reports its native coercion error (`[20005] The argument could not be coerced to the
specified type.`) instead of Node.js's `ERR_INVALID_ARG_TYPE`.

Example — drain two messages without a listener:

```JavaScript
const {
    MessageChannel,
    receiveMessageOnPort
} = require('worker_threads');

const {
    port1,
    port2
} = new MessageChannel();
port1.postMessage('first');
port1.postMessage('second');
console.log(receiveMessageOnPort(port2).message); // first
console.log(receiveMessageOnPort(port2).message); // second
console.log(receiveMessageOnPort(port2) === undefined); // true
port1.close();
port2.close();
```

--------------------------
### markAsUncloneable
**Marks an [object](../../object/ifs/object.md) as uncloneable, a no-op in fibjs**

```JavaScript
static worker_threads.markAsUncloneable(Value object);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to mark

Node.js makes `postMessage` throw when a marked [object](../../object/ifs/object.md) is used as a message; fibjs
serializes with V8's ValueSerializer, which does not honor the mark, so the call has no
effect and never throws. It is provided because packages such as undici call it in Web API
constructors; primitives are accepted and ignored exactly like objects.

--------------------------
### markAsUntransferable
**Marks an [object](../../object/ifs/object.md) as untransferable, a no-op in fibjs**

```JavaScript
static worker_threads.markAsUntransferable(Value object);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to mark

fibjs only detaches ArrayBuffer entries of a transfer list, so the mark has nothing to
affect. The call is accepted for compatibility with Node.js callers and returns undefined.

--------------------------
### isMarkedAsUntransferable
**Checks whether an [object](../../object/ifs/object.md) is marked as untransferable, always false in fibjs**

```JavaScript
static Boolean worker_threads.isMarkedAsUntransferable(Value object);
```

Parameters:
* object: Value, the [object](../../object/ifs/object.md) to check

Returns:
* Boolean, returns whether the [object](../../object/ifs/object.md) is marked as untransferable; always false in fibjs

Because markAsUntransferable is a no-op, no [object](../../object/ifs/object.md) is ever marked; the function exists for
compatibility with Node.js callers and returns false for every value, primitives included.

## Static Properties
        
### isMainThread
**Boolean, Queries whether the current [Worker](../../object/ifs/Worker.md) is the main thread**

```JavaScript
static readonly Boolean worker_threads.isMainThread;
```

True in the main isolate and false in every [Worker](../../object/ifs/Worker.md), in both cases for the isolate that
evaluates the expression; Node.js exposes the same boolean.

--------------------------
### threadId
**Integer, Queries the logical worker identifier of the current execution context**

```JavaScript
static readonly Integer worker_threads.threadId;
```

Zero in the main thread; inside a [Worker](../../object/ifs/Worker.md), the positive id that is also available as
`[Worker](../../object/ifs/Worker.md)#threadId`. It is a logical fibjs isolate id (not an OS thread id) and is not stable
across runs; Node.js assigns small sequential ids from 1 in the same way.

--------------------------
### parentPort
**[MessagePort](../../object/ifs/MessagePort.md), Queries the worker-side [MessagePort](../../object/ifs/MessagePort.md) connected to the parent thread**

```JavaScript
static readonly MessagePort worker_threads.parentPort;
```

Null in the main thread. Inside a [Worker](../../object/ifs/Worker.md) it returns the worker's end of the implicit channel:
values posted to it arrive at the parent's `Worker` [object](../../object/ifs/object.md) (`worker.on('message')`), and
values posted by the parent arrive as raw values on its `message` event. The port starts
automatically with the first `message` listener.

--------------------------
### workerData
**Value, Queries the clone of the data passed to this thread by the parent thread through the [Worker](../../object/ifs/Worker.md) constructor**

```JavaScript
static readonly Value worker_threads.workerData;
```

Null in the main thread and in workers created without the `workerData` option. The value is
the structured clone made by the [Worker](../../object/ifs/Worker.md) constructor, so changing it inside the worker does
not affect the parent.

