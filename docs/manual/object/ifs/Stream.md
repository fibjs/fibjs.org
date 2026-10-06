# Object Stream
The abstract byte-stream base class shared by every fibjs stream [object](object.md)

Stream defines the common byte-stream interface used across the runtime:
reading (`read`, `readBuffer`, `readAll`), writing (`write`, `writeBuffer`,
`end`), events (`data`, `readable`, `end`, `finish`, `close`, `error`,
`drain`), data movement (`copyTo`, `pipe`, `unpipe`) and lifecycle control
(`flush`, `close`, `destroy`, `ref`, `unref`). It cannot be constructed
directly; concrete classes put a transport or a storage behind the interface.

The concrete stream classes:
- `MemoryStream`, `RangeStream` and `BufferedStream` from the `io` [module](../../module/ifs/module.md);
- `FileStream` behind `fs.openFile`, `fs.createReadStream` and
  `fs.createWriteStream`, plus the `RangeStream` window of a read stream;
- `Socket`/`TLSSocket` from `net`/`tls`, `Http2Stream`, and the TTY streams
  of the `tty` [module](../../module/ifs/module.md);
- HTTP bodies, child [process](../../module/ifs/process.md) stdio and the [process](../../module/ifs/process.md) standard streams;
- `ZlibStream` codec streams returned by the `zlib` helpers.

Obtained from:
- `new [io.MemoryStream](../../module/ifs/io.md#MemoryStream)()` — an in-memory duplex stream;
- `new [io.BufferedStream](../../module/ifs/io.md#BufferedStream)(stm)`, `new [io.RangeStream](../../module/ifs/io.md#RangeStream)(stm, ...)` — wrappers;
- `fs.createReadStream([path](../../module/ifs/path.md)[, options])` / `fs.createWriteStream(...)` —
  file-backed streams (`fs.openFile` returns a seekable one);
- `new [net.Socket](../../module/ifs/net.md#Socket)([net.AF_INET](../../module/ifs/net.md#AF_INET))` after `connect` or `accept` — a TCP stream;
- `new [zlib.Gzip](../../module/ifs/zlib.md#Gzip)()` / `new [zlib.Inflate](../../module/ifs/zlib.md#Inflate)()` — compression streams;
- `process.stdin`/`stdout`/`stderr`, child [process](../../module/ifs/process.md) stdio and HTTP message
  bodies — streams owned by the runtime.

Concepts:

- **Pull reading**: without events the stream is in pull mode, and `read`/
  `readBuffer` ask the device for one chunk and wait for it. [File](File.md) and socket
  streams wait until the requested number of bytes is available or the peer
  ends; [MemoryStream](MemoryStream.md) returns what it holds and never blocks. `readAll` loops
  until the end of the stream. `read` returns null at the end of the stream
  or on a broken connection.
- **Push reading**: attaching a `data` or `readable` listener (or calling
  `resume`) switches the stream to flowing mode, in which the runtime reads
  ahead into an internal queue and emits `data`, or fills the queue and emits
  `readable`; `read`/`read(n)` then return immediately from that queue. The
  switch is permanent: `pause` stops delivery but does not return to pull
  mode.
- **Call styles**: every async member accepts the direct call (`const chunk =
  stm.read(4)`), a trailing callback (`stm.read(4, (err, chunk) => {})`) and
  the promise form through `await`. The direct form returns the documented
  value when the operation completes without waiting, otherwise it waits for
  the operation in the current fiber.
- **Encoding**: `setEncoding` installs a decoder used by `read` and by the
  `data` event, so they return strings; `readBuffer`, `readAll` and
  [StreamReader](StreamReader.md) always return Buffers.
- **Back pressure**: `write` returns false when the queued bytes reach the
  write high-water mark (16384 bytes); stop writing and wait for the `drain`
  event before writing more. `pipe` applies the same rule to its destination
  and pauses the source while the destination is full.
- **End of stream**: the read flow emits `end` at the end of the stream;
  when the write side has finished as well the stream auto-closes and emits
  `close`. A flowing read that ends emits `end`, `finish` and `close`; a
  plain `close()` call releases the handle without emitting `close`.
- **Destroy**: `destroy([err])` marks the stream unusable, optionally emits
  `error` (with the supplied value, usually an Error) and then `close`; it is
  idempotent. `ref`/`unref` control whether pending stream work keeps the
  fibjs [process](../../module/ifs/process.md) alive.

Example 1 — write, rewind and read an in-memory stream:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('hello '));
stm.write('world');
stm.rewind();

console.log(stm.read(5).toString()); // hello
console.log(stm.readAll().toString()); // world
```

Example 2 — copy a file into another file:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-stream-'));
const src = path.join(dir, 'src.txt');
const dst = path.join(dir, 'dst.txt');
fs.writeFile(src, 'streamed file content');

const reader = fs.createReadStream(src);
const writer = fs.createWriteStream(dst);
console.log(reader.copyTo(writer)); // 21
writer.close();

console.log(fs.readFile(dst, 'utf8')); // streamed file content
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 3 — read everything a TCP peer sends:

```JavaScript
const net = require('net');

const server = new net.Socket(net.AF_INET);
server.bind(0);
server.listen();

const client = new net.Socket(net.AF_INET);
client.connect(server.localPort, '127.0.0.1');
const conn = server.accept();

conn.write('Hello from the server');
conn.close();

console.log(client.readAll().toString()); // Hello from the server

server.close();
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    Stream [tooltip="Stream", fillcolor="lightgray", id="me", label="{Stream|fd\lwritable\lreadable\l_readableState\l_writableState\l|read()\lreadBuffer()\lreadAll()\lsetEncoding()\lwriteBuffer()\lwrite()\lresume()\lpause()\lpipe()\lunpipe()\lend()\lflush()\lclose()\lcopyTo()\lgetReader()\lref()\lunref()\ldestroy()\l|event data\levent close\levent error\l}"];
    BufferedStream [tooltip="BufferedStream", URL="BufferedStream.md", label="{BufferedStream}"];
    Http2Stream [tooltip="Http2Stream", URL="Http2Stream.md", label="{Http2Stream}"];
    SeekableStream [tooltip="SeekableStream", URL="SeekableStream.md", label="{SeekableStream}"];
    FileStream [tooltip="FileStream", URL="FileStream.md", label="{FileStream}"];
    MemoryStream [tooltip="MemoryStream", URL="MemoryStream.md", label="{MemoryStream}"];
    RangeStream [tooltip="RangeStream", URL="RangeStream.md", label="{RangeStream}"];
    Socket [tooltip="Socket", URL="Socket.md", label="{Socket}"];
    TLSSocket [tooltip="TLSSocket", URL="TLSSocket.md", label="{TLSSocket}"];
    TTYInputStream [tooltip="TTYInputStream", URL="TTYInputStream.md", label="{TTYInputStream}"];
    TTYOutputStream [tooltip="TTYOutputStream", URL="TTYOutputStream.md", label="{TTYOutputStream}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> Stream [dir=back];
    Stream -> BufferedStream [dir=back];
    Stream -> Http2Stream [dir=back];
    Stream -> SeekableStream [dir=back];
    SeekableStream -> FileStream [dir=back];
    SeekableStream -> MemoryStream [dir=back];
    SeekableStream -> RangeStream [dir=back];
    Stream -> Socket [dir=back];
    Stream -> TLSSocket [dir=back];
    Stream -> TTYInputStream [dir=back];
    Stream -> TTYOutputStream [dir=back];
}
```

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object Stream.addAbortListener(EventEmitter signal,
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
static Object Stream.once(EventEmitter emitter,
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
static Object Stream.on(EventEmitter emitter,
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
static Integer Stream.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Properties
        
### fd
**Integer, Queries the file descriptor value of the Stream**

```JavaScript
readonly Integer Stream.fd;
```

Only streams backed by an operating-system handle implement it:
[FileStream](FileStream.md) (and the streams returned by [fs.openFile](../../module/ifs/fs.md#openFile), [fs.createReadStream](../../module/ifs/fs.md#createReadStream)
and [fs.createWriteStream](../../module/ifs/fs.md#createWriteStream)) reports the file descriptor, [net.Socket](../../module/ifs/net.md#Socket) and
[TLSSocket](TLSSocket.md) the socket descriptor and the [process](../../module/ifs/process.md) standard streams 0/1/2.
Streams without a handle ([MemoryStream](MemoryStream.md), [RangeStream](RangeStream.md), [BufferedStream](BufferedStream.md)) throw
[20009] when the property is read. Node.js exposes `fd` on file streams
only and returns undefined elsewhere.

--------------------------
### writable
**Boolean, Queries whether the stream is writable**

```JavaScript
readonly Boolean Stream.writable;
```

Kept for Node compatibility: this reports whether the stream has not
ended, not whether the device accepts writes. It stays true after end()
and close() and turns false only when the flowing read loop reaches the
end of the stream or destroy() is called. Test the results of write()
and end() and watch the events instead of relying on this flag.

--------------------------
### readable
**Boolean, Queries whether the stream is readable**

```JavaScript
readonly Boolean Stream.readable;
```

Node-compatible flag with the same caveats as `writable`: true until the
flowing read loop reaches the end of the stream or destroy() is called.
It does not track pause(), close(), or pull-mode reads that reached the
end of the stream.

--------------------------
### _readableState
**Object, Queries the readable state [object](object.md) of the stream**

```JavaScript
readonly Object Stream._readableState;
```

A minimal Node-compatible view: an [object](object.md) with one `ended` property that
mirrors the internal ended flag, which becomes true when the flowing read
loop finishes or the stream is destroyed. It is not a full Node
ReadableState, and the other Node fields are absent.

--------------------------
### _writableState
**Object, Queries the writable state [object](object.md) of the stream**

```JavaScript
readonly Object Stream._writableState;
```

Compatibility stub: fibjs returns an empty [object](object.md) and keeps no Node
WritableState. Use the return value of write() and the `drain` event for
back pressure instead.

## Methods
        
### read
**Reads data of the specified size from the stream**

```JavaScript
Variant Stream.read(Integer bytes = -1) async;
```

Parameters:
* bytes: Integer, the amount of data to read; by default one chunk sized by the device

Returns:
* Variant, the data read from the stream; a string when an [encoding](../../module/ifs/encoding.md) is set,

In pull mode (no data/readable listener and no resume) the call asks the
device for one chunk: file and socket streams wait until `bytes` bytes are
available or the stream ends, while [MemoryStream](MemoryStream.md) returns the bytes it holds
(fewer than `bytes` is possible) without blocking. In flowing mode the data
has already been read ahead, so the call returns from the internal queue:
with `bytes` <= 0 all buffered data is merged into one [Buffer](Buffer.md), with
`bytes` > 0 exactly `bytes` are required, otherwise null. The result is a
[Buffer](Buffer.md), or a string when setEncoding was called; null is returned at the
end of the stream, on a broken connection or when a flowing read cannot be
satisfied. read(0) returns null. The call styles are `stm.read(4)`,
`stm.read(4, (err, data) => {})` and `await stm.read(4)`.

Example — read by size until the stream ends:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('0123456789'));
stm.rewind();

console.log(stm.read(4).toString()); // 0123
console.log(stm.read(4).toString()); // 4567
console.log(stm.read(4).toString()); // 89: the stream ends first
console.log(stm.read()); // null at the end of the stream
```

--------------------------
### readBuffer
**Reads data of the specified size from the stream, returned as a [Buffer](Buffer.md)**

```JavaScript
Buffer Stream.readBuffer(Integer bytes = -1) async;
```

Parameters:
* bytes: Integer, the amount of data to read; by default one chunk sized by the device

Returns:
* [Buffer](Buffer.md), returns the [Buffer](Buffer.md) data read from the stream; null when there is no data to read

Identical to `read` except that the result is always a [Buffer](Buffer.md): setEncoding
and the text decoder do not apply. Use it when the consumer needs binary
data regardless of the stream [encoding](../../module/ifs/encoding.md).

--------------------------
### readAll
**Reads all remaining data from the stream**

```JavaScript
Buffer Stream.readAll() async;
```

Returns:
* [Buffer](Buffer.md), the data read from the stream; null when nothing was read or the

Reads until the end of the stream and returns everything in one [Buffer](Buffer.md), or
null when no byte could be read (an empty stream is already at its end).
setEncoding is ignored. For a live socket the call waits until the peer
closes the connection; in flowing mode the read loop is already consuming
the device, so collect the `data` chunks instead.

Example — read a whole stream and detect its end:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('all at once'));
stm.rewind();
stm.setEncoding('utf8'); // readAll ignores the encoding

const all = stm.readAll();
console.log(Buffer.isBuffer(all), all.toString()); // true all at once
console.log(stm.readAll()); // null: the stream is at its end
```

--------------------------
### setEncoding
**Sets the [encoding](../../module/ifs/encoding.md) of the stream; subsequent read() calls return strings**

```JavaScript
Stream Stream.setEncoding(String encoding);
```

Parameters:
* encoding: String, the [encoding](../../module/ifs/encoding.md) to use, such as 'utf8', 'ascii', 'latin1' or 'utf16le'

Returns:
* Stream, returns the current stream [object](object.md)

Installs a streaming decoder used by `read` and by the `data` event, so
incomplete multi-byte sequences that straddle two chunks decode correctly.
`readBuffer`, `readAll` and [StreamReader](StreamReader.md) keep returning Buffers. The
decoder understands the text labels 'utf8', 'ascii', 'latin1' and
'utf16le' (and their aliases); other names, including '[hex](../../module/ifs/hex.md)', '[base64](../../module/ifs/base64.md)' and
'ucs2', are accepted here but decode to empty strings, and null or a
non-string throws [20005]. Node.js rejects an unknown name with
ERR_UNKNOWN_ENCODING. Returns the stream itself for chaining.

Example — switch to text reads, then back to binary:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('hello'));
stm.rewind();
stm.setEncoding('utf8');

console.log(stm.read()); // hello: read returns a string
stm.rewind();
console.log(stm.readBuffer().toString()); // hello: readBuffer stays binary
```

--------------------------
### writeBuffer
**Writes the given binary data to the stream**

```JavaScript
Stream.writeBuffer(Buffer data) async;
```

Parameters:
* data: [Buffer](Buffer.md), the [Buffer](Buffer.md) data to write

Queues the buffer and returns undefined (unlike `write`, no back-pressure
flag is reported); the direct call waits for the chunk to be written. The
string overload encodes the text as utf8, with no [encoding](../../module/ifs/encoding.md) argument.

--------------------------
**Writes the given binary data to the stream; a string data is encoded as utf8**

```JavaScript
Stream.writeBuffer(String data) async;
```

Parameters:
* data: String, the [Buffer](Buffer.md) data to write

String form of `writeBuffer`: the text is encoded with utf8 and queued as
binary data.

--------------------------
### write
**Writes the given data to the stream**

```JavaScript
Boolean Stream.write(Buffer data) async;
```

Parameters:
* data: [Buffer](Buffer.md), the data to write

Returns:
* Boolean, false when the caller should wait for the 'drain' event before

Queues the data and reports back pressure, mirroring Node.js: returns
false when the queued bytes reach the write high-water mark (16384 bytes)
and the caller should wait for the 'drain' event before writing more;
returns true while the queue has room. Writes are queued in FIFO order and
flushed one at a time. The direct call returns as soon as the chunk is
queued, a trailing callback receives the flag as its second argument, and
`await stm.write(data)` resolves to it. The [encoding](../../module/ifs/encoding.md) argument of the
[Buffer](Buffer.md) overload is ignored.

Example — stop writing when the queue is full and wait for drain:

```JavaScript
const io = require('io');
const coroutine = require('coroutine');

const stm = new io.MemoryStream();
const full = stm.write(Buffer.alloc(16384)); // false: wait for 'drain'
let drained = false;
stm.on('drain', () => {
    drained = true;
});
coroutine.sleep(20);

console.log(full, drained, stm.write('more')); // false true true
```

--------------------------
**Writes the given data to the stream**

```JavaScript
Boolean Stream.write(Buffer data,
    String encoding) async;
```

Parameters:
* data: [Buffer](Buffer.md), the data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md); this parameter is ignored because data is of type [Buffer](Buffer.md)

Returns:
* Boolean, false when the caller should wait for the 'drain' event before

[Buffer](Buffer.md) overload kept for Node compatibility: the [encoding](../../module/ifs/encoding.md) argument is
accepted and ignored, because [Buffer](Buffer.md) data is already binary.

--------------------------
**Writes the given string to the stream**

```JavaScript
Boolean Stream.write(String data,
    String encoding = "utf8") async;
```

Parameters:
* data: String, the string data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md) of the string, default is "utf8"

Returns:
* Boolean, false when the caller should wait for the 'drain' event before

Encodes the text with the given [encoding](../../module/ifs/encoding.md) (utf8 by default) and applies the
same queue and back-pressure rules as the [Buffer](Buffer.md) overload.

--------------------------
### resume
**Switches the stream to flowing read mode**

```JavaScript
Stream Stream.resume();
```

Returns:
* Stream, returns the current stream [object](object.md)

Starts the internal read loop: chunks are emitted through the `data`
event, or buffered and announced through `readable`. The switch is
permanent — pause() stops delivery, but the stream never returns to pull
mode. Registering a data/readable listener starts the loop as well, so
resume is only needed to restart delivery after pause. Returns the stream
itself.

--------------------------
### pause
**Pauses the automatic read mode of the stream**

```JavaScript
Stream Stream.pause();
```

Returns:
* Stream, returns the current stream [object](object.md)

Stops the flowing read loop after the current chunk: no further `data` or
`readable` events are delivered until resume(). Data already buffered is
kept. It has no effect in pull mode (before resume or a data/readable
listener) and does not undo flowing mode. Returns the stream itself.
Node.js pauses in the same way but exposes the state through isPaused().

--------------------------
### pipe
**Pipes stream data to the destination stream**

```JavaScript
Value Stream.pipe(Value destination,
    Object options = {});
```

Parameters:
* destination: Value, the destination stream [object](object.md)
* options: Object, pipe options, optional; only `end` is read (default true,

Returns:
* Value, returns the destination stream [object](object.md), supporting chained calls

[Event](Event.md)-driven copy with back pressure: every `data` chunk of the source is
written to the destination; when write() reports a full queue the source
is paused until the destination emits `drain`. At the end of the source
the destination is ended (unless options.end is false); a source error is
re-emitted on the destination, and a source close that is not an end
destroys the destination. The destination receives a `pipe` event with the
source as its argument. Only the `end` option is read; the other Node.js
pipe options are ignored. Returns the destination for chaining, while the
copy itself continues in the background — wait for the destination
`finish`/`close` before reading its result. See copyTo for a bounded
synchronous copy.

Example — pipe one stream into another:

```JavaScript
const io = require('io');
const coroutine = require('coroutine');

const src = new io.MemoryStream();
src.write(Buffer.from('piped data'));
src.rewind();

const dst = new io.MemoryStream();
const returned = src.pipe(dst);
coroutine.sleep(20);
dst.rewind();

console.log(returned === dst); // true: pipe returns the destination
console.log(dst.readAll().toString()); // piped data
```

--------------------------
### unpipe
**Removes all pipe destinations, or only the specified destination**

```JavaScript
Stream.unpipe(Stream destination = NULL);
```

Parameters:
* destination: Stream, the specific writable destination to unpipe

Compatibility no-op in fibjs: a piped copy stops by itself when the source
ends/errors/closes or the destination closes, and there is no way to
detach one destination from an active pipe. The argument is accepted and
ignored; Node.js also emits an `unpipe` event, which fibjs does not.

--------------------------
### end
**Ends the stream operation**

```JavaScript
Integer Stream.end() async;
```

Returns:
* Integer, returns 0 after the stream has been ended

Flushes the queued writes so far and closes the write side, emitting
`finish`; when the read side has ended as well the stream closes and emits
`close`. The direct call returns 0 after the stream has been ended, the
callback form receives null as its error argument, and `await stm.end()`
resolves to the same 0. Writing after end is not meaningful, because the
stream is being closed. The end(data) and end(data, [encoding](../../module/ifs/encoding.md)) overloads
write one last chunk, utf8 encoded by default, before the same shutdown.

Example — end a write stream and observe its events:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-end-'));
const file = path.join(dir, 'out.txt');

const stm = fs.createWriteStream(file);
const events = [];
stm.on('finish', () => events.push('finish'));
stm.on('close', () => events.push('close'));
stm.end('final data');

console.log(events.join(',')); // finish,close
console.log(fs.readFile(file, 'utf8')); // final data
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
**Writes the given file buffer to the stream and ends the stream operation**

```JavaScript
Integer Stream.end(Buffer data) async;
```

Parameters:
* data: [Buffer](Buffer.md), the file buffer data to write

Returns:
* Integer, returns 0 after the stream has been ended

Writes the buffer as the final chunk and then ends the stream, with the
same events and return value as `end()`.

--------------------------
**Writes the given file buffer to the stream and ends the stream operation**

```JavaScript
Integer Stream.end(Buffer data,
    String encoding) async;
```

Parameters:
* data: [Buffer](Buffer.md), the file buffer data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md); this parameter is ignored because data is of type [Buffer](Buffer.md)

Returns:
* Integer, returns 0 after the stream has been ended

[Buffer](Buffer.md) overload kept for Node compatibility: the [encoding](../../module/ifs/encoding.md) argument is
accepted and ignored.

--------------------------
**Writes the given string to the stream and ends the stream operation**

```JavaScript
Integer Stream.end(String data,
    String encoding = "utf8") async;
```

Parameters:
* data: String, the string data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md) of the string, default is "utf8"

Returns:
* Integer, returns 0 after the stream has been ended

Encodes the text with the given [encoding](../../module/ifs/encoding.md) (utf8 by default), writes it as
the final chunk and then ends the stream.

--------------------------
### flush
**Writes the file buffer content to the physical device**

```JavaScript
Stream.flush() async;
```

Compatibility call: [MemoryStream](MemoryStream.md) and [Socket](Socket.md) return immediately, and for a
[FileStream](FileStream.md) the implementation only checks that the handle is still open
(the underlying fflush is disabled), so it does not force data to disk.
Buffered transports such as the [process](../../module/ifs/process.md) standard streams wait for their
queued writes to be handed to the device. On a file stream whose handle is
already closed it throws [20009] with "[FileStream](FileStream.md): file is closed.".

--------------------------
### close
**Closes the current stream [object](object.md)**

```JavaScript
Stream.close() async;
```

Releases the operating-system handle or the transport. A successful call
does not emit 'close' by itself: the event comes from the auto-close after
the read flow ends, from destroy() or from the runtime. Reading or writing
a stream backed by a closed handle throws [20009]; [MemoryStream](MemoryStream.md) and
[Socket](Socket.md) tolerate a second close(), while a [FileStream](FileStream.md) rejects later
operations.

--------------------------
### copyTo
**Copies stream data to the destination stream**

```JavaScript
Long Stream.copyTo(Stream stm,
    Long bytes = -1) async;
```

Parameters:
* stm: Stream, the destination stream [object](object.md)
* bytes: Long, the number of bytes to copy

Returns:
* Long, returns the number of bytes copied

Copies at most `bytes` bytes (all remaining data by default) and returns
the number of bytes actually copied; a count of 0 copies nothing. The copy
runs in the current fiber and waits for the source to end when `bytes` is
-1, which makes it a simple way to move a whole stream. The destination is
not closed at the end (call end/close yourself), and a closed source or
destination throws [20009]. Node.js has no direct equivalent; use pipe or
stream.pipeline for the event-driven form.

Example — copy the first four bytes into another stream:

```JavaScript
const io = require('io');

const src = new io.MemoryStream();
src.write(Buffer.from('0123456789'));
src.rewind();

const dst = new io.MemoryStream();
console.log(src.copyTo(dst, 4)); // 4
dst.rewind();
console.log(dst.readAll().toString()); // 0123
```

--------------------------
### getReader
**Gets a reader for the stream, compatible with ReadableStreamDefaultReader**

```JavaScript
StreamReader Stream.getReader();
```

Returns:
* [StreamReader](StreamReader.md), returns a [StreamReader](StreamReader.md) [object](object.md)

Returns a new [StreamReader](StreamReader.md) that pulls chunks with read(). Each call creates
an independent reader; fibjs does not enforce the single-reader lock of
the Web Streams API, so coordinate access yourself. Creating a reader does
not switch the stream to flowing mode. See [StreamReader](StreamReader.md) for the reader
lifecycle.

Example — pull the chunks of a stream with a reader:

```JavaScript
const io = require('io');

(async () => {
    const stm = new io.MemoryStream();
    stm.write(Buffer.from('chunk'));
    stm.rewind();

    const reader = stm.getReader();
    console.log((await reader.read()).value.toString()); // chunk
    console.log((await reader.read()).done); // true
})();
```

--------------------------
### ref
**Keeps the fibjs [process](../../module/ifs/process.md) alive, preventing it from exiting while the [object](object.md) is bound**

```JavaScript
Stream Stream.ref();
```

Returns:
* Stream, returns the current [object](object.md)

The runtime references the isolate while a stream reader is active; unref
(or pause) allows the [process](../../module/ifs/process.md) to exit even when the stream has pending
work. Returns the stream itself for chaining.

--------------------------
### unref
**Allows the fibjs [process](../../module/ifs/process.md) to exit while the [object](object.md) is bound**

```JavaScript
Stream Stream.unref();
```

Returns:
* Stream, returns the current [object](object.md)

Counterpart of ref: drops the [process](../../module/ifs/process.md)-liveness reference held by the
stream. The data flow is not stopped; it just no longer prevents the
[process](../../module/ifs/process.md) from exiting. Returns the stream itself for chaining.

--------------------------
### destroy
**Destroys the stream. Optionally emits the 'error' event and emits the 'close' event.**

```JavaScript
Stream Stream.destroy(Value err = undefined) async;
```

Parameters:
* err: Value, optional error [object](object.md), emitted as the 'error' event

Returns:
* Stream, returns the current [object](object.md)

Marks the stream unusable, emits 'error' with the supplied value when err
is not null/undefined, then closes the stream and emits 'close'. It is
idempotent: destroying an already destroyed stream is a no-op. Concrete
classes react differently afterwards — [MemoryStream](MemoryStream.md) keeps buffered data
readable, a [FileStream](FileStream.md) rejects later operations with [20009] — so do not
use a destroyed stream.

Example — destroy with an error and watch the events:

```JavaScript
const io = require('io');
const coroutine = require('coroutine');

const stm = new io.MemoryStream();
stm.write(Buffer.from('data'));
stm.rewind();
stm.on('error', (err) => console.log('error:', err.message)); // error: broken
stm.on('close', () => console.log('closed')); // closed

stm.destroy(new Error('broken'));
coroutine.sleep(20);
```

--------------------------
### on
**Appends an event handler to the emitter**

```JavaScript
Object Stream.on(Value ev,
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
Object Stream.on(Object map);
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
Object Stream.addListener(Value ev,
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
Object Stream.addListener(Object map);
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
Object Stream.addEventListener(Value ev,
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
Object Stream.prependListener(Value ev,
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
Object Stream.prependListener(Object map);
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
Object Stream.once(Value ev,
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
Object Stream.once(Object map);
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
Object Stream.prependOnceListener(Value ev,
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
Object Stream.prependOnceListener(Object map);
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
Object Stream.off(Value ev,
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
Object Stream.off(Value ev);
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
Object Stream.off(Object map);
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
Object Stream.removeListener(Value ev,
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
Object Stream.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object Stream.removeListener(Object map);
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
Object Stream.removeEventListener(Value ev,
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
Object Stream.removeAllListeners(Value ev);
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
Object Stream.removeAllListeners(Array evs = []);
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
Stream.setMaxListeners(Integer n);
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
Integer Stream.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array Stream.listeners(Value ev);
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
Array Stream.rawListeners(Value ev);
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
Integer Stream.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer Stream.listenerCount(Value o,
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
Array Stream.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean Stream.emit(Value ev,
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
String Stream.toString();
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
Value Stream.toJSON(String key = "");
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
        
### data
**Queries and binds the stream data event, equivalent to on("data", func);**

```JavaScript
event Stream.data(Buffer data);
```

Parameters:
* data: [Buffer](Buffer.md), the data read

Emitted for every chunk once the stream is in flowing mode; attaching this
listener switches the stream to that mode. The payload is a [Buffer](Buffer.md), or a
string when setEncoding was called (the parameter is declared as [Buffer](Buffer.md) for
the binary case). A `readable` workflow consumes the same data through
read() and emits no data events. Node.js has the same flowing-mode
semantics.

--------------------------
### close
**Queries and binds the stream close event, equivalent to on("close", func);**

```JavaScript
event Stream.close();
```

Emitted once after the stream has been closed: at the end of a flowing
read (auto destroy), after destroy(), or when the runtime closes the
stream. A plain close() call releases the handle without emitting it.
Node.js emits close for the same destroy/autoDestroy cases.

--------------------------
### error
**Queries and binds the stream error event, equivalent to on("error", func);**

```JavaScript
event Stream.error(Integer code);
```

Parameters:
* code: Integer, the error value, usually an Error [object](object.md)

Emitted when a read or write fails and by destroy(err). The payload is the
error value, usually an Error [object](object.md) with `number` and `description`; the
declared Integer parameter name is historical (destroy(err) emits exactly
the value it was given, even a non-Error one). Node.js also emits Error
objects.

