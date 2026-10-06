# Object FSWatcher
Watches a file or directory with the platform notification service

Returned by [fs.watch](../../module/ifs/fs.md#watch). It reports which file changed and whether its content or its name
changed, so it is the tool for reacting to changes without polling; [fs.watchFile](../../module/ifs/fs.md#watchFile) polls the
status through a [StatsWatcher](StatsWatcher.md) instead and hands the before/after [Stat](Stat.md) objects to one
callback.

Events:

- `'change'` (eventType, filename) — any change of the target: eventType is 'change' for a
  content modification and 'rename' for a create, delete or rename. The callback passed to
  [fs.watch](../../module/ifs/fs.md#watch) is bound to this event only; `on('change', ...)` yields the same stream.
- `'changeonly'` (eventType, filename) — emitted together with 'change' when only the
  content changed; eventType is always 'change'. fibjs extension, Node.js has no such event.
- `'renameonly'` (eventType, filename) — emitted together with 'change' when only the name
  changed; eventType is always 'rename'. fibjs extension.
- `'close'` — emitted once when close() releases the watcher.
- `'error'` — emitted when the platform watch cannot start or fails later. When [fs.watch](../../module/ifs/fs.md#watch)
  cannot watch the target at all (for example a missing [path](../../module/ifs/path.md)) the event is emitted before
  [fs.watch](../../module/ifs/fs.md#watch) returns and the call itself also throws, so wrap [fs.watch](../../module/ifs/fs.md#watch) in try/catch.

Concepts:

- **[Event](Event.md) noise is normal**: the exact stream is platform dependent; one write can be
  reported as several 'change' events, and a delete can report a change followed by a
  rename. Handlers should be idempotent and may guard the first event with a flag.
- **filename**: the affected name relative to the watched directory, or the base name when
  a file is watched; a [Buffer](Buffer.md) when the watcher was created with `[encoding](../../module/ifs/encoding.md): 'buffer'`, and an
  empty string when the platform does not report a name. A recursive watch reports the [path](../../module/ifs/path.md)
  relative to the watched root.
- **Recursive watching**: `fs.watch(dir, { recursive: true })` is native on win32/darwin
  and emulated by fibjs on Linux; the emulation may coalesce or repeat events, so treat them
  as notifications, not as a complete transaction log.
- **Keep-alive**: with the default `persistent: true` the watcher refs the isolate and keeps
  the [process](../../module/ifs/process.md) alive; `unref()` or `persistent: false` releases it and `ref()` takes it back.
  close() releases the platform handle and the reference; a closed watcher cannot restart.

Obtained from:
- `fs.watch(target[, options][, callback])` — the only entry point. fibjs exposes neither a
  [global](../../module/ifs/global.md) FSWatcher constructor nor fs.FSWatcher (plans/compat-differences.md 2.18).

Example 1 — watch a directory and print what changes:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const coroutine = require('coroutine');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watch-'));
const watcher = fs.watch(dir, (eventType, filename) => {
    console.log(eventType, String(filename));
});
watcher.on('changeonly', () => console.log('content changed'));

coroutine.sleep(100); // let the platform watch start before the first change
fs.writeFile(path.join(dir, 'a.txt'), 'hello');
coroutine.sleep(300); // wait for the notification

watcher.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — watch one file with a one-shot guard:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const coroutine = require('coroutine');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watch-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'first');

let seen = false;
const watcher = fs.watch(file, (eventType, filename) => {
    if (seen)
        return; // a single change can be reported more than once
    seen = true;
    console.log(eventType, String(filename));
});

coroutine.sleep(100);
fs.writeFile(file, 'second');
coroutine.sleep(300);

watcher.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

A watcher must be closed to release the platform handle; with the default persistent option
it also keeps the [process](../../module/ifs/process.md) alive until then.

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    FSWatcher [tooltip="FSWatcher", fillcolor="lightgray", id="me", label="{FSWatcher|close()\lref()\lunref()\l|event change\levent changeonly\levent renameonly\levent close\levent error\l}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> FSWatcher [dir=back];
}
```

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object FSWatcher.addAbortListener(EventEmitter signal,
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
static Object FSWatcher.once(EventEmitter emitter,
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
static Object FSWatcher.on(EventEmitter emitter,
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
static Integer FSWatcher.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Methods
        
### close
**Closes the watcher and releases the platform handle**

```JavaScript
FSWatcher.close();
```

Stops the file change events and emits a single 'close' event; the watcher cannot be
started again. Calling close() twice is a no-op (Node.js behaves the same). A watcher
created with the default persistent option also keeps the [process](../../module/ifs/process.md) alive until close().

Example — close once and observe a single 'close' event:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watch-'));
const watcher = fs.watch(dir, () => {});
let closed = 0;
watcher.on('close', () => closed++);
watcher.close();
watcher.close(); // no second 'close' event
console.log(closed); // 1

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### ref
**Increments the reference count so the [process](../../module/ifs/process.md) stays alive**

```JavaScript
FSWatcher FSWatcher.ref();
```

Returns:
* FSWatcher, returns the FSWatcher itself

A watcher created with the default persistent option refs itself; ref() adds another
reference and returns the watcher so the call can be chained. Node.js behaves the same
way.

--------------------------
### unref
**Decrements the reference count so the [process](../../module/ifs/process.md) may exit**

```JavaScript
FSWatcher FSWatcher.unref();
```

Returns:
* FSWatcher, returns the FSWatcher itself

The watcher keeps receiving events while the [process](../../module/ifs/process.md) is running, but it no longer keeps
the [process](../../module/ifs/process.md) alive on its own; persistent: false does the same at creation. Returns the
watcher so the call can be chained.

Example — a watcher that does not hold the [process](../../module/ifs/process.md) open:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watch-'));
const watcher = fs.watch(dir, () => {}).unref();
watcher.ref(); // take the reference back; also returns the watcher
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
Object FSWatcher.on(Value ev,
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
Object FSWatcher.on(Object map);
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
Object FSWatcher.addListener(Value ev,
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
Object FSWatcher.addListener(Object map);
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
Object FSWatcher.addEventListener(Value ev,
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
Object FSWatcher.prependListener(Value ev,
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
Object FSWatcher.prependListener(Object map);
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
Object FSWatcher.once(Value ev,
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
Object FSWatcher.once(Object map);
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
Object FSWatcher.prependOnceListener(Value ev,
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
Object FSWatcher.prependOnceListener(Object map);
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
Object FSWatcher.off(Value ev,
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
Object FSWatcher.off(Value ev);
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
Object FSWatcher.off(Object map);
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
Object FSWatcher.removeListener(Value ev,
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
Object FSWatcher.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object FSWatcher.removeListener(Object map);
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
Object FSWatcher.removeEventListener(Value ev,
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
Object FSWatcher.removeAllListeners(Value ev);
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
Object FSWatcher.removeAllListeners(Array evs = []);
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
FSWatcher.setMaxListeners(Integer n);
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
Integer FSWatcher.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array FSWatcher.listeners(Value ev);
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
Array FSWatcher.rawListeners(Value ev);
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
Integer FSWatcher.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer FSWatcher.listenerCount(Value o,
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
Array FSWatcher.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean FSWatcher.emit(Value ev,
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
String FSWatcher.toString();
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
Value FSWatcher.toJSON(String key = "");
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
**Binds the "change" event, equivalent to on("change", func)**

```JavaScript
event FSWatcher.change(String eventType,
    String | Buffer filename);
```

Parameters:
* eventType: String, the event type, either 'change' or 'rename'
* filename: String | [Buffer](Buffer.md), the changed file name; a [Buffer](Buffer.md) when the 'buffer' [encoding](../../module/ifs/encoding.md) was set

Emitted for any change of the target: eventType is 'change' for a content modification
and 'rename' for a create, delete or rename. The callback passed to [fs.watch](../../module/ifs/fs.md#watch) is bound to
this event only. filename is '' when the platform does not report a name.

--------------------------
### changeonly
**Binds the "changeonly" event, equivalent to on("changeonly", func)**

```JavaScript
event FSWatcher.changeonly(String eventType,
    String | Buffer filename);
```

Parameters:
* eventType: String, the event type, always 'change'
* filename: String | [Buffer](Buffer.md), the changed file name; a [Buffer](Buffer.md) when the 'buffer' [encoding](../../module/ifs/encoding.md) was set

Emitted in addition to 'change' when the content was modified and the name did not
change; eventType is always 'change'. fibjs extension, Node.js has no such event.

--------------------------
### renameonly
**Binds the "renameonly" event, equivalent to on("renameonly", func)**

```JavaScript
event FSWatcher.renameonly(String eventType,
    String | Buffer filename);
```

Parameters:
* eventType: String, the event type, always 'rename'
* filename: String | [Buffer](Buffer.md), the renamed file name; a [Buffer](Buffer.md) when the 'buffer' [encoding](../../module/ifs/encoding.md) was set

Emitted in addition to 'change' when the name changed and the content did not;
eventType is always 'rename'. fibjs extension, Node.js has no such event.

--------------------------
### close
**Binds the "close" event, equivalent to on("close", func)**

```JavaScript
event FSWatcher.close();
```

Emitted once when close() releases the watcher; a second close() is a no-op and does not
emit again.

--------------------------
### error
**Binds the "error" event, equivalent to on("error", func)**

```JavaScript
event FSWatcher.error();
```

Carries the failure reported by the platform watch. A watcher that cannot start also
makes [fs.watch](../../module/ifs/fs.md#watch) throw and emits this event before the call returns, so a listener
attached afterwards may miss the first failure; guard [fs.watch](../../module/ifs/fs.md#watch) with try/catch.

