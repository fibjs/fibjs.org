# Object StatsWatcher
[File](File.md) Stats watcher [object](object.md)

A StatsWatcher polls the status of one file on a timer, detects changes and
reports them as `(curStat, prevStat)` pairs, the same model as Node.js
[fs.watchFile](../../module/ifs/fs.md#watchFile). It is obtained from `[fs.watchFile](../../module/ifs/fs.md#watchFile)(target[, options], listener)`
and stops with close()/stop() or `fs.unwatchFile(target)`.

Concepts:

- **Polling**: the watcher calls stat on the target every `interval`
  milliseconds (default 5007, the Node.js default; values below 20 fall back
  to that default) and claims the [process](../../module/ifs/process.md) as long as it is active. It does not
  use inotify-style events, so a fast change can be missed between polls and a
  slow file system delays the report.
- **Change detection**: only the modification time (mtime) of the target is
  compared; a pure size or permission change with an unchanged mtime is not
  reported. The first poll always reports, with a zero [Stat](Stat.md) as prevStat (both
  values are zero when the target does not exist yet); after that, a created
  or re-created target reports once with the previous [Stat](Stat.md), and a deleted
  target reports nothing until it exists again.
- **Timestamp granularity**: mtime carries sub-millisecond precision but the
  file system stamps writes with a coarse clock, so a write made within the
  same tick as the previous poll keeps the same mtime and is missed. When a
  change must be observed, leave at least one interval between the initial
  callback and the write.
- **One watcher per [path](../../module/ifs/path.md)**: watchFile keeps a single watcher per resolved
  [path](../../module/ifs/path.md), so watching the same file twice returns the same [object](object.md) and adds a
  listener; interval and persistent only apply when the watcher is created.
  `fs.unwatchFile(target, listener)` removes one listener, and when the last
  one is gone the watcher closes; `fs.unwatchFile(target)` removes them all
  and closes the watcher.
- **Lifetime**: `ref()`/`unref()` add or drop the hold on the [process](../../module/ifs/process.md); a
  `persistent` watcher is already ref'd, so only call unref() when the watcher
  should not keep the [process](../../module/ifs/process.md) alive. close() stops polling, forgets the
  watcher and emits `close`.

Obtained from:
- `fs.watchFile(target[, options], listener)` — creates or reuses the watcher
  of the resolved [path](../../module/ifs/path.md) and binds listener to the `change` event;
- `fs.unwatchFile(target)` / `StatsWatcher#close` / `StatsWatcher#stop` — stop
  it again.

Example 1 — react to the first content change:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const coroutine = require('coroutine');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watchfile-'));
const file = path.join(dir, 'log.txt');
fs.writeFile(file, 'one');

const seen = new coroutine.Event();
const watcher = fs.watchFile(file, {
    interval: 50
}, (cur, prev) => {
    if (!seen.isSet()) {
        seen.set(); // the first poll reports the status already on disk
        return;
    }
    console.log(prev.size, '->', cur.size); // 3 -> 6
    watcher.close();
    fs.rmSync(dir, {
        recursive: true,
        force: true
    });
});

seen.wait();
coroutine.sleep(150); // let the first poll's timestamp age before the write
fs.writeFile(file, 'first!');
```

Example 2 — stop watching and release the [process](../../module/ifs/process.md):

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watchfile-'));
const file = path.join(dir, 'count.txt');
fs.writeFile(file, '0');

const watcher = fs.watchFile(file, {
    interval: 100
}, () => {});
console.log(watcher.unref() === watcher); // true, unref() is chainable
watcher.close(); // stops polling and forgets the watcher
console.log(watcher.close() === undefined); // close() is idempotent

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    StatsWatcher [tooltip="StatsWatcher", fillcolor="lightgray", id="me", label="{StatsWatcher|close()\lstop()\lref()\lunref()\l|event change\l}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> StatsWatcher [dir=back];
}
```

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object StatsWatcher.addAbortListener(EventEmitter signal,
    Function(Object ev) func);
```

Parameters:
* signal: [EventEmitter](EventEmitter.md), the [AbortSignal](AbortSignal.md) [object](object.md) to listen to
* func: Function(Object ev), the handler for the abort event

Returns:
* Object, returns a Disposable [object](object.md) containing a `[Symbol.dispose]` method

The handler is called at most once when the signal is aborted, and it is removed from the
signal afterwards. If the signal is already aborted the handler is invoked synchronously.
The returned [object](object.md) has a `[Symbol.dispose]()` method that removes the handler, so it can be
released before the abort happens.

Example — abort handling with automatic cleanup:

```JavaScript
const events = require('events');

const controller = new AbortController();
const disposable = events.addAbortListener(controller.signal,
    () => console.log('aborted'));

controller.abort(); // aborted
disposable[Symbol.dispose](); // safe to call after the listener fired
console.log(controller.signal.listenerCount('abort')); // 0
```

--------------------------
### once
**Creates a Promise resolved by the next occurrence of an event**

```JavaScript
static Object StatsWatcher.once(EventEmitter emitter,
    Value ev,
    Object options = {});
```

Parameters:
* emitter: [EventEmitter](EventEmitter.md), the event emitter [object](object.md) to listen to
* ev: Value, the event name to listen for
* options: Object, optional parameter [object](object.md)

Returns:
* Object, returns a Promise that resolves with the array of event parameters

The Promise resolves with the array of the emit arguments when the event fires; it rejects
when `error` is emitted while waiting, unless the waited event is `error` itself, or when
the signal option aborts. The temporary listeners are removed when the Promise settles.

options supports the following option:

```JavaScript
// fragment: options
({
    "signal": null // AbortSignal; aborting rejects the Promise with an AbortError
});
```

Example — awaiting the next occurrence of an event:

```JavaScript
const EventEmitter = require('events');

(async () => {
    const emitter = new EventEmitter();
    const waiting = EventEmitter.once(emitter, 'ready');

    emitter.emit('ready', 200, 'ok');
    console.log(JSON.stringify(await waiting)); // [200,"ok"]
})();
```

--------------------------
### on
**Creates an async iterator that yields event occurrences**

```JavaScript
static Object StatsWatcher.on(EventEmitter emitter,
    Value ev,
    Object options = {});
```

Parameters:
* emitter: [EventEmitter](EventEmitter.md), the event emitter [object](object.md) to listen to
* ev: Value, the event name to listen for
* options: Object, optional parameter [object](object.md)

Returns:
* Object, returns an AsyncIterator [object](object.md)

Each next() resolves with `{ value: [args...], done: false }` when the event fires and with
`{ done: true }` after an event named in the `close` option fires or the signal aborts; an
`error` event rejects the pending call. The listeners are registered when the iterator is
created and removed when the iteration ends or the signal aborts.

options supports the following options:

```JavaScript
// fragment: options
({
    "signal": null, // AbortSignal; aborting rejects pending and future next() calls
    "close": [] // event names; the first one to fire ends the iteration
});
```

Example — iterating the occurrences of an event:

```JavaScript
const EventEmitter = require('events');

(async () => {
    const emitter = new EventEmitter();
    const iterator = EventEmitter.on(emitter, 'data', {
        close: ['end']
    });

    emitter.emit('data', 1);
    emitter.emit('data', 2);
    emitter.emit('end');

    for await (const args of iterator)
    console.log(JSON.stringify(args)); // [1] then [2]
})();
```

## Static Properties
        
### defaultMaxListeners
**Integer, The [process](../../module/ifs/process.md)-wide default listener limit reported by getMaxListeners()**

```JavaScript
static Integer StatsWatcher.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Methods
        
### close
**Stops watching the target file [path](../../module/ifs/path.md) and clears the reference count (no longer holds the [process](../../module/ifs/process.md))**

```JavaScript
StatsWatcher.close();
```

Stops the timer, removes the watcher from the per-[path](../../module/ifs/path.md) table (so a later
[fs.watchFile](../../module/ifs/fs.md#watchFile) creates a fresh one) and emits `close`. Calling close() twice
is safe. The listener list is not cleared: close() is a one-way switch,
after which no change events are delivered.

Example — close from the change handler:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const coroutine = require('coroutine');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-close-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'x');

const watcher = fs.watchFile(file, {
    interval: 50
}, () => {});
coroutine.sleep(80);
watcher.close();
console.log(watcher.close() === undefined); // true
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### stop
**Stops watching the target file [path](../../module/ifs/path.md) and clears the reference count (no longer holds the [process](../../module/ifs/process.md)); equivalent to close()**

```JavaScript
StatsWatcher.stop();
```

An alias with the Node.js-style name; the behavior is exactly close().

Example — stop with the alias:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-stop-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'x');

const watcher = fs.watchFile(file, {
    interval: 50
}, () => {});
watcher.stop();

const again = fs.watchFile(file, {
    interval: 50
}, () => {});
console.log(again !== watcher); // true, the stopped watcher was forgotten
again.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### ref
**Increments the reference count, telling fibjs not to exit the [process](../../module/ifs/process.md) while the watcher is still in use,**

```JavaScript
StatsWatcher StatsWatcher.ref();
```

Returns:
* StatsWatcher, returns the StatsWatcher itself

A StatsWatcher obtained via `fs.watchFile()` has already called this method by default, so it holds the [process](../../module/ifs/process.md) by default.

   The watcher returned by [fs.watchFile](../../module/ifs/fs.md#watchFile) is created with `persistent: true` and
   is ref'd, so ref() is only needed after an unref() when the watcher must
   keep the [process](../../module/ifs/process.md) alive again. It returns the watcher itself, so calls can
   be chained.

   Example — ref after an unref:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-ref-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'x');

const watcher = fs.watchFile(file, {
    interval: 50
}, () => {});
console.log(watcher.unref() === watcher); // true
console.log(watcher.ref() === watcher); // true, the process is held again
watcher.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### unref
**Decrements the reference count**

```JavaScript
StatsWatcher StatsWatcher.unref();
```

Returns:
* StatsWatcher, returns the StatsWatcher itself

Drops one hold on the [process](../../module/ifs/process.md); once no hold is left fibjs may exit even
while the watcher is active, which is the Node.js `unref()` semantics. The
timer keeps running until close() when the [process](../../module/ifs/process.md) stays alive. Returns
the watcher itself.

Example — let the [process](../../module/ifs/process.md) exit with an active watcher:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-unref-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'x');

const watcher = fs.watchFile(file, {
    interval: 50
}, () => {});
console.log(watcher.unref() === watcher); // true, unref() is chainable
watcher.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### on
**Appends an event handler to the emitter**

```JavaScript
Object StatsWatcher.on(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function, called with the emit arguments

Returns:
* Object, returns the event [object](object.md) itself for chaining

The listener is called with the arguments of emit() and `this` set to the emitter; the
emitter itself is returned so registrations can be chained. The same function may be
registered several times for one event and each copy is called. See the class documentation
for the dispatch order.

--------------------------
**Appends several event handlers to the emitter**

```JavaScript
Object StatsWatcher.on(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Every enumerable property of the map whose value is a function is registered under its
property name. Properties are processed in order; a value that is not a function makes the
call fail with an invalid-type error while entries processed before it stay registered.

Example — registering several handlers at once:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on({
    connect: () => console.log('connect'),
    close: () => console.log('close')
});

emitter.emit('connect'); // connect
emitter.emit('close'); // close
```

--------------------------
### addListener
**Appends an event handler to the emitter**

```JavaScript
Object StatsWatcher.addListener(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of on(ev, func), provided for Node.js compatibility.

--------------------------
**Appends several event handlers to the emitter**

```JavaScript
Object StatsWatcher.addListener(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of on(map), provided for Node.js compatibility.

--------------------------
### addEventListener
**Appends an event handler to the emitter with an options [object](object.md)**

```JavaScript
Object StatsWatcher.addEventListener(Value ev,
    Function(...args) func,
    Object options = {});
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function, called with the emit arguments
* options: Object, the options of the event handler

Returns:
* Object, returns the event [object](object.md) itself for chaining

Web-style alias of on(); the only supported option is `once`, which registers a one-shot
handler exactly like once(). The listener receives the plain emit arguments and not an [Event](Event.md)
[object](object.md); see the [DOMEvent](DOMEvent.md) class for the DOM-style event [object](object.md) used by [AbortSignal](AbortSignal.md) and
fetch-style APIs.

options supports the following option:

```JavaScript
// fragment: options
({
    "once": false // when true, the handler is removed before its single invocation
});
```

Example — a one-shot DOM-style registration:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.addEventListener('ping', () => console.log('ping'), {
    once: true
});

emitter.emit('ping'); // ping
console.log(emitter.emit('ping')); // false
console.log(emitter.listenerCount('ping')); // 0
```

--------------------------
### prependListener
**Inserts an event handler at the front of the queue**

```JavaScript
Object StatsWatcher.prependListener(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

The listener is called before the listeners registered with on()/addListener() the next time
the event is emitted. When several prependListener() calls are made, the last one registered
is called first, because every call inserts at the same position.

Example — insertion at the front of the queue:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('order', () => console.log('on'));
emitter.prependListener('order', () => console.log('prepend'));

emitter.emit('order'); // prepend, then on
```

--------------------------
**Inserts several event handlers at the front of the queue**

```JavaScript
Object StatsWatcher.prependListener(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Map form of prependListener(); every function property is inserted at the front, so the
properties of the map are called in reverse order.

--------------------------
### once
**Appends a one-shot event handler to the emitter**

```JavaScript
Object StatsWatcher.once(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

The handler is wrapped and removes itself from the queue before it is called, so it runs at
most once. off() removes it when passed the original function, listeners() returns the
original function, and rawListeners() returns the internal wrapper whose `_func` property
holds the original. See Example 2 in the class documentation.

--------------------------
**Appends several one-shot event handlers to the emitter**

```JavaScript
Object StatsWatcher.once(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Map form of once(); every function property is registered as a one-shot listener under its
property name.

--------------------------
### prependOnceListener
**Inserts a one-shot event handler at the front of the queue**

```JavaScript
Object StatsWatcher.prependOnceListener(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to bind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

Combines prependListener() and once(): the handler is called first and only once, and it is
removed before its invocation.

--------------------------
**Inserts several one-shot event handlers at the front of the queue**

```JavaScript
Object StatsWatcher.prependOnceListener(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Map form of prependOnceListener(); every function property is inserted as a one-shot
listener, and the properties of the map are called in reverse order.

--------------------------
### off
**Removes an event handler from the emitter**

```JavaScript
Object StatsWatcher.off(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to unbind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

The first matching listener is removed; when the same function was registered several times
only one copy is removed per call, so repeat the call to remove the others. A once() wrapper
is matched by its original function as well. Removing a listener emits the `removeListener`
meta event after the removal.

--------------------------
**Removes all event handlers of one event**

```JavaScript
Object StatsWatcher.off(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Every listener of the event is removed and `removeListener` is emitted once per removed
listener. The call succeeds when the event has no listener.

Example — removing every listener of one event:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('data', () => console.log('first'));
emitter.on('data', () => console.log('second'));

emitter.off('data');
console.log(emitter.emit('data')); // false
```

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object StatsWatcher.off(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Every enumerable property of the map whose value is a function names an event from which
that function is removed (one copy per event). A value that is not a function makes the call
fail with an invalid-type error.

--------------------------
### removeListener
**Removes an event handler from the emitter**

```JavaScript
Object StatsWatcher.removeListener(Value ev,
    Function(...args) func);
```

Parameters:
* ev: Value, the event name to unbind
* func: Function(...args), the event handler function

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev, func), provided for Node.js compatibility.

--------------------------
**Removes all event handlers of one event**

```JavaScript
Object StatsWatcher.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object StatsWatcher.removeListener(Object map);
```

Parameters:
* map: Object, the event mapping; [object](object.md) property names are used as event names

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(map), provided for Node.js compatibility.

--------------------------
### removeEventListener
**Removes an event handler with an options [object](object.md)**

```JavaScript
Object StatsWatcher.removeEventListener(Value ev,
    Function(...args) func,
    Object options = {});
```

Parameters:
* ev: Value, the event name to unbind
* func: Function(...args), the event handler function
* options: Object, the options of the event handler, ignored

Returns:
* Object, returns the event [object](object.md) itself for chaining

Web-style alias of off(ev, func); the options [object](object.md) is accepted and ignored, and a once()
wrapper is matched by its original function like off().

--------------------------
### removeAllListeners
**Removes all listeners of one event**

```JavaScript
Object StatsWatcher.removeAllListeners(Value ev);
```

Parameters:
* ev: Value, the event name to remove

Returns:
* Object, returns the event [object](object.md) itself for chaining

Equivalent to off(ev): every listener of the event is removed, including once() wrappers
matched by their original function, and `removeListener` is emitted once per removal.

--------------------------
**Removes all listeners of the given events, or of the whole emitter**

```JavaScript
Object StatsWatcher.removeAllListeners(Array evs = []);
```

Parameters:
* evs: Array, the event names to remove

Returns:
* Object, returns the event [object](object.md) itself for chaining

An empty array — including the no-argument call, because the parameter defaults to [] —
clears every string-keyed event; symbol-keyed listeners are left in place, unlike Node.js
which removes them too. A non-empty array clears each named event as
removeAllListeners(ev) does.

Example — clearing selected events and the whole emitter:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('a', () => {});
emitter.on('b', () => {});
emitter.on('c', () => {});

emitter.removeAllListeners(['a', 'b']);
console.log(emitter.listenerCount('a'), emitter.listenerCount('c')); // 0 1

emitter.removeAllListeners();
console.log(emitter.eventNames().length); // 0
```

--------------------------
### setMaxListeners
**Stores a per-emitter listener limit**

```JavaScript
StatsWatcher.setMaxListeners(Integer n);
```

Parameters:
* n: Integer, the number of events

The value is reported by getMaxListeners() and is otherwise informational: fibjs never warns
when the number of listeners exceeds it. This member exists for Node.js compatibility. A
negative value throws; 0 is accepted and stored as-is, while Node.js treats 0 as unlimited.

--------------------------
### getMaxListeners
**Returns the listener limit of the emitter**

```JavaScript
Integer StatsWatcher.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array StatsWatcher.listeners(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Array, returns the listener array of the specified event

One-shot wrappers are unwrapped, so the result contains the functions passed to
on()/once() and can be passed to off(); an unknown event produces an empty array.

Example — once() listeners are returned unwrapped:

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();

function onTick() {
    console.log('tick');
}

emitter.once('tick', onTick);
console.log(emitter.listeners('tick')[0] === onTick); // true
console.log(emitter.rawListeners('tick')[0] === onTick); // false
```

--------------------------
### rawListeners
**Returns the internal listener array of an event**

```JavaScript
Array StatsWatcher.rawListeners(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Array, returns the listener array of the specified event

The array is not unwrapped: a listener registered with once() appears as the internal
wrapper function whose `_func` property holds the original function. An unknown event
produces an empty array.

--------------------------
### listenerCount
**Returns the number of listeners of an event**

```JavaScript
Integer StatsWatcher.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer StatsWatcher.listenerCount(Value o,
    Value ev);
```

Parameters:
* o: Value, the [object](object.md) to query
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

Counts without requiring the target to be an [EventEmitter](EventEmitter.md): any [object](object.md) with registered
events can be queried. The call is normally written as
`EventEmitter.listenerCount(target, 'data')`.

Example — counting the listeners of another [object](object.md):

```JavaScript
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('data', () => {});
emitter.on('data', () => {});

console.log(EventEmitter.listenerCount(emitter, 'data')); // 2
```

--------------------------
### eventNames
**Returns the names of the events with at least one listener**

```JavaScript
Array StatsWatcher.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean StatsWatcher.emit(Value ev,
    ...args);
```

Parameters:
* ev: Value, event name
* args: ..., event parameters, which are passed to the event handler

Returns:
* Boolean, returns whether the event had a listener to respond to it

Listeners are called as described by the dispatch model in the class documentation: the
first one runs synchronously on the current fiber, the remaining ones run in parallel
fibers, and the call returns after all of them finish; an exception raised by a listener is
thrown back to the caller. Emitting `error` with no listener throws instead of returning
false: an Error argument is thrown as-is and any other value is wrapped in
`Error("Unhandled error. (...)")`. [Event](Event.md) names are strings or symbols; `emit()` does not
match a listener registered with a numeric name.

--------------------------
### toString
**Returns the string form of the [object](object.md)**

```JavaScript
String StatsWatcher.toString();
```

Returns:
* String, returns the string form of the [object](object.md)

The base implementation reports an error: a native [object](object.md) has no implicit
text form, and only the classes whose value can be written as a string
override the member. [Buffer](Buffer.md) returns its content decoded with the given
[encoding](../../module/ifs/encoding.md), [HttpCookie](HttpCookie.md) returns "name=value", and so on; an override commonly
accepts optional arguments ([Buffer.toString](Buffer.md#toString) takes [encoding](../../module/ifs/encoding.md), start and
end) that are not part of this declaration.

Calling the member on a class that does not override it throws
"<Class>: the [object](object.md) can not be converted to string.", which is the
behavior to rely on when probing whether a value has a string form. See
toJSON for the serialization hook.

--------------------------
### toJSON
**Returns the JSON representation of the [object](object.md)**

```JavaScript
Value StatsWatcher.toJSON(String key = "");
```

Parameters:
* key: String, the property name of the value being serialized

Returns:
* Value, returns the JSON-serializable value

JSON.stringify(value) calls value.toJSON(key) when the member exists and
serializes the returned value in its place; the key argument carries the
property name of the value inside its parent [object](object.md) (an empty string at
the top level) and may be used to build a keyed form. The base
implementation returns a plain [object](object.md) holding the readable properties of
the instance, so a native [object](object.md) serializes without per-class code; a
class with a portable shape such as [Buffer](Buffer.md) overrides it, and a JavaScript
class may override it in the same way.

The member is normally reached through JSON.stringify rather than called
directly; calling it returns the same value JSON.stringify would
serialize.

## Events
        
### change
**Queries and binds the "file change" event, equivalent to on("change", func);**

```JavaScript
event StatsWatcher.change();
```

The listener receives the current [Stat](Stat.md) and the previous [Stat](Stat.md), in that
order, matching the Node.js [fs.watchFile](../../module/ifs/fs.md#watchFile) callback. The first invocation
always happens (with a zero previous [Stat](Stat.md)) on the first poll; later ones
only when mtime changed. Attaching with `on('change', fn)` behaves exactly
like passing the listener to [fs.watchFile](../../module/ifs/fs.md#watchFile).

Example — use the event form instead of the callback argument:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const coroutine = require('coroutine');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-change-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'x');

const firstDone = new coroutine.Event();
const watcher = fs.watchFile(file, {
    interval: 50
}, () => {});
watcher.on('change', (cur, prev) => {
    if (!firstDone.isSet()) {
        firstDone.set(); // the first poll reports the status already on disk
        return;
    }
    console.log(prev.size, '->', cur.size); // 1 -> 2
    watcher.close();
    fs.rmSync(dir, {
        recursive: true,
        force: true
    });
});

firstDone.wait();
coroutine.sleep(150); // let the first poll's timestamp age before the write
fs.writeFile(file, 'xy');
```

