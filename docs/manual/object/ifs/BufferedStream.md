# Object BufferedStream
A buffered reader over any [Stream](Stream.md), with text helpers

BufferedStream wraps a binary stream and reads it ahead in chunks, so text
operations such as readLine cost one underlying read per chunk instead of one
per line. It adds text reading and writing on top of [Stream](Stream.md), while `read`,
`readAll`, `write` and `close` pass through to the wrapped stream (`stream`).
The buffer belongs to the BufferedStream: once it has read ahead, the wrapped
stream has already advanced, so never read the wrapped stream directly while
this [object](object.md) is in use.

Concepts:

- **Read ahead**: the first read pulls a chunk (up to 64 KiB) from the wrapped
  stream into an internal buffer; later reads are served from that buffer
  until it is empty, then another chunk is pulled. The buffered data is
  implicitly shared by the binary and text reads of this [object](object.md).
- **Text [encoding](../../module/ifs/encoding.md)**: `charset` selects the [encoding](../../module/ifs/encoding.md) used by readText, readLine,
  readUntil and the write helpers (default "utf-8"). readText and readUntil
  count encoded bytes, not characters: a multi-byte character straddling the
  boundary decodes to the replacement character U+FFFD. writeText/writeLine
  return the encoded byte count.
- **Line ending**: `EOL` selects the separator for readLine/readLines and is
  appended by writeLine. Its default empty value auto-detects on every line:
  "\r\n" is preferred, a lone "\n" is accepted, a lone "\r" is not. Assign
  "\n", "\r\n" or "\r" to fix it; any other non-empty value throws [20004].
- **maxlen**: the maxlen argument of readLine/readUntil is a byte budget that
  includes the separator; exceeding it throws [20024]. A value of 0 or less
  means unlimited (note that this differs from readText where the size is
  mandatory and non-positive sizes read nothing).
- **Writes and close**: writes go straight to the wrapped stream, so nothing
  is buffered on the write [path](../../module/ifs/path.md); `flush` is a no-op here. `close` closes the
  wrapped stream, after which this [object](object.md) cannot read from it anymore.

Obtained from:
- `new [io.BufferedStream](../../module/ifs/io.md#BufferedStream)(stream)` — wrap any [Stream](Stream.md) ([MemoryStream](MemoryStream.md), [FileStream](FileStream.md),
  [Socket](Socket.md), [http](../../module/ifs/http.md) body);
- `fs.openTextStream([path](../../module/ifs/path.md)[, flags])` — open a file and wrap it in one call.

Example 1 — read a file line by line with mixed line endings:

```JavaScript
const fs = require('fs');
const io = require('io');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-buffered-'));
const file = path.join(dir, 'lines.txt');
fs.writeFile(file, 'first\nsecond\r\nthird\n');

const reader = new io.BufferedStream(fs.openFile(file));
while (true) {
    const line = reader.readLine();
    if (line === null) break;
    console.log(line); // first, then second, then third
}

reader.close();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — write text and read it back through the same buffer class:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
const writer = new io.BufferedStream(stm);
console.log(writer.writeText('a'), writer.writeLine('b')); // 1 2

stm.rewind();
const reader = new io.BufferedStream(stm);
console.log(reader.readLines()); // ['a', 'b']
```

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    Stream [tooltip="Stream", URL="Stream.md", label="{Stream|fd\lwritable\lreadable\l_readableState\l_writableState\l|read()\lreadBuffer()\lreadAll()\lsetEncoding()\lwriteBuffer()\lwrite()\lresume()\lpause()\lpipe()\lunpipe()\lend()\lflush()\lclose()\lcopyTo()\lgetReader()\lref()\lunref()\ldestroy()\l|event data\levent close\levent error\l}"];
    BufferedStream [tooltip="BufferedStream", fillcolor="lightgray", id="me", label="{BufferedStream|new BufferedStream()\l|stream\lcharset\lEOL\l|readText()\lreadLine()\lreadLines()\lreadUntil()\lwriteText()\lwriteLine()\l}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> Stream [dir=back];
    Stream -> BufferedStream [dir=back];
}
```

## Constructors
        
### BufferedStream
**BufferedStream constructor**

```JavaScript
new BufferedStream(Stream stm);
```

Parameters:
* stm: [Stream](Stream.md), the binary underlying stream [object](object.md) of the BufferedStream

Wraps an already open binary stream. Any [Stream](Stream.md) is accepted, including
[MemoryStream](MemoryStream.md), [FileStream](FileStream.md), [Socket](Socket.md) and [http](../../module/ifs/http.md) bodies. The wrapped stream is
exposed as `stream`: this [object](object.md) reads ahead from it and close() closes
it, so it must not be read directly while the buffer is in use (a direct
read would consume data the buffer is going to serve).

Example — wrap a memory stream and read its first line:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('hello\nworld\n'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readLine()); // hello
console.log(reader.stream === stm); // true
```

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object BufferedStream.addAbortListener(EventEmitter signal,
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
static Object BufferedStream.once(EventEmitter emitter,
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
static Object BufferedStream.on(EventEmitter emitter,
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
static Integer BufferedStream.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Properties
        
### stream
**[Stream](Stream.md), Queries the stream [object](object.md) used when the buffer was created**

```JavaScript
readonly Stream BufferedStream.stream;
```

The wrapped stream is the read/write target of this [object](object.md): writes pass
through to it, close() closes it and its `fd` (when it has one) is the
file descriptor behind this stream. Do not read it directly while the
buffer holds read-ahead data.

Example — compare the wrapped stream with the original [object](object.md):

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('x\n'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readText(1), reader.stream === stm); // x true
```

--------------------------
### charset
**String, Queries and sets the charset used when processing text, default is utf-8**

```JavaScript
String BufferedStream.charset;
```

The value is an [encoding](../../module/ifs/encoding.md) name accepted by the [encoding](../../module/ifs/encoding.md) [module](../../module/ifs/module.md), such as
"utf-8", "gbk" or "windows-1252"; the getter returns the canonical name
(for example "latin1" is reported as "windows-1252"). Assigning it
re-opens the converter used by all following text reads and writes; the
binary reads are not affected.

Example — switch the text [encoding](../../module/ifs/encoding.md) of an existing reader:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
const reader = new io.BufferedStream(stm);
reader.charset = 'latin1';
console.log(reader.charset); // windows-1252

reader.writeText('café');
stm.rewind();
console.log(reader.readText(4)); // café
```

--------------------------
### EOL
**String, Queries and sets the line ending marker; the default auto-detects "\r\n" or "\n"**

```JavaScript
String BufferedStream.EOL;
```

The default value is an empty string, which means auto-detect: every line
is scanned for "\r\n" and for a lone "\n" (whichever comes first; a lone
"\r" is not a separator). Assigning "\n", "\r\n" or "\r" fixes the
separator for readLine/readLines/readUntil, and writeLine appends it;
assigning any other non-empty value throws [20004]. The getter returns the
assigned value, or "" while auto-detection is active.

Example — force CRLF and read both lines:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('a\r\nb\r\n'));
stm.rewind();

const reader = new io.BufferedStream(stm);
reader.EOL = '\r\n';
console.log(reader.readLines()); // ['a', 'b']
```

--------------------------
### fd
**Integer, Queries the file descriptor value of the [Stream](Stream.md)**

```JavaScript
readonly Integer BufferedStream.fd;
```

Only streams backed by an operating-system handle implement it:
[FileStream](FileStream.md) (and the streams returned by [fs.openFile](../../module/ifs/fs.md#openFile), [fs.createReadStream](../../module/ifs/fs.md#createReadStream)
and [fs.createWriteStream](../../module/ifs/fs.md#createWriteStream)) reports the file descriptor, [net.Socket](../../module/ifs/net.md#Socket) and
[TLSSocket](TLSSocket.md) the socket descriptor and the [process](../../module/ifs/process.md) standard streams 0/1/2.
Streams without a handle ([MemoryStream](MemoryStream.md), [RangeStream](RangeStream.md), BufferedStream) throw
[20009] when the property is read. Node.js exposes `fd` on file streams
only and returns undefined elsewhere.

--------------------------
### writable
**Boolean, Queries whether the stream is writable**

```JavaScript
readonly Boolean BufferedStream.writable;
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
readonly Boolean BufferedStream.readable;
```

Node-compatible flag with the same caveats as `writable`: true until the
flowing read loop reaches the end of the stream or destroy() is called.
It does not track pause(), close(), or pull-mode reads that reached the
end of the stream.

--------------------------
### _readableState
**Object, Queries the readable state [object](object.md) of the stream**

```JavaScript
readonly Object BufferedStream._readableState;
```

A minimal Node-compatible view: an [object](object.md) with one `ended` property that
mirrors the internal ended flag, which becomes true when the flowing read
loop finishes or the stream is destroyed. It is not a full Node
ReadableState, and the other Node fields are absent.

--------------------------
### _writableState
**Object, Queries the writable state [object](object.md) of the stream**

```JavaScript
readonly Object BufferedStream._writableState;
```

Compatibility stub: fibjs returns an empty [object](object.md) and keeps no Node
WritableState. Use the return value of write() and the `drain` event for
back pressure instead.

## Methods
        
### readText
**Reads text of the specified number of characters**

```JavaScript
String BufferedStream.readText(Integer size) async;
```

Parameters:
* size: Integer, the number of text characters to read, measured in utf8 or the specified [encoding](../../module/ifs/encoding.md) bytes

Returns:
* String, returns the text string read; if there is no data to read, or the connection is interrupted, returns null

size counts encoded bytes, not Unicode characters (a multi-byte character
that straddles the boundary decodes to U+FFFD and its remaining bytes are
consumed). The text is decoded with the current charset. At the end of the
stream the remaining text is returned once, then null; size 0 or a
negative size read nothing and return null — to read everything left use
`readAll` instead. The call blocks until size bytes are available or the
stream ends, so readText never returns a short string before the end.

Example — read four bytes, then one more:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('hello world'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readText(4), reader.readText(1)); // hell o
```

--------------------------
### readLine
**Reads one line of text**

```JavaScript
String BufferedStream.readLine(Integer maxlen = -1) async;
```

Parameters:
* maxlen: Integer, the maximum string to read this time, measured in utf8 encoded bytes; by default the number of characters is not limited

Returns:
* String, returns the text string read; if there is no data to read, or the connection is interrupted, returns null

The line ends at the current EOL setting: with the default auto-detection
"\r\n" or a lone "\n", whichever appears first; the separator is consumed
and not part of the result. At the end of the stream the last unterminated
line is returned once, then null. maxlen is a byte budget for the line
including its separator; exceeding it throws [20024] and leaves the
buffered data untouched. A maxlen of 0 or less means unlimited.

Example — read two lines and then detect the end:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('one\ntwo\n'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readLine(), reader.readLine()); // one two
console.log(reader.readLine()); // null
```

--------------------------
### readLines
**Reads a group of text lines as an array**

```JavaScript
String BufferedStream.readLines(Integer maxlines = -1);
```

Parameters:
* maxlines: Integer, the maximum number of lines to read this time; by default all text lines are read

Returns:
* String, returns the array of text lines read; an empty array if there is no data to read, or the connection is interrupted

Reads up to maxlines lines (all of them by default) and returns them
without their separators, using the current EOL setting. The end of the
stream yields an empty array, never null, and maxlines = 0 returns an
empty array without reading. The array can be empty even when the stream
had data that was already consumed by other reads.

Example — read at most two lines, then the rest:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('1\n2\n3\n4\n'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readLines(2)); // ['1', '2']
console.log(reader.readLines()); // ['3', '4']
console.log(reader.readLines()); // []
```

--------------------------
### readUntil
**Reads a text string ending with the specified bytes**

```JavaScript
String BufferedStream.readUntil(String mk,
    Integer maxlen = -1) async;
```

Parameters:
* mk: String, the ending string
* maxlen: Integer, the maximum string to read this time, measured in utf8 encoded bytes; by default the number of characters is not limited

Returns:
* String, returns the text string read; if there is no data to read, or the connection is interrupted, returns null

Reads until the marker mk appears and returns the text before it; the
marker itself is consumed and not included. mk can be any string, not
just a line ending (for example a delimiter or a boundary token). If the
stream ends before the marker, the remaining text is returned and the next
read returns null; maxlen is a byte budget including the marker and
exceeding it throws [20024]. A maxlen of 0 or less means unlimited.

Example — split a stream on a custom separator:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
stm.write(Buffer.from('a::b::c'));
stm.rewind();

const reader = new io.BufferedStream(stm);
console.log(reader.readUntil('::'), reader.readUntil('::')); // a b
console.log(reader.readText(1)); // c
```

--------------------------
### writeText
**Writes a string**

```JavaScript
Integer BufferedStream.writeText(String txt) async;
```

Parameters:
* txt: String, the string to write

Returns:
* Integer, the number of bytes actually written

The string is encoded with the current charset and written to the wrapped
stream immediately (no write buffer is involved); the returned value is
the encoded byte count, not the character count. A read-only wrapped
stream rejects the write with [20009], and a closed one reports its own
error.

Example — write text and inspect the underlying stream:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
const writer = new io.BufferedStream(stm);
console.log(writer.writeText('你好')); // 6

stm.rewind();
console.log(stm.readAll().toString()); // 你好
```

--------------------------
### writeLine
**Writes a string and a newline character**

```JavaScript
Integer BufferedStream.writeLine(String txt) async;
```

Parameters:
* txt: String, the string to write

Returns:
* Integer, the number of bytes actually written

Encodes txt with the current charset, appends the EOL setting (a single
"\n" while EOL keeps its auto-detected default value) and writes both
parts. The returned count includes the separator, so it is the number of
bytes to skip when computing offsets.

Example — write CRLF-terminated lines:

```JavaScript
const io = require('io');

const stm = new io.MemoryStream();
const writer = new io.BufferedStream(stm);
writer.EOL = '\r\n';
console.log(writer.writeLine('ok')); // 4

stm.rewind();
console.log(JSON.stringify(stm.readAll().toString())); // "ok\r\n"
```

--------------------------
### read
**Reads data of the specified size from the stream**

```JavaScript
Variant BufferedStream.read(Integer bytes = -1) async;
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
Buffer BufferedStream.readBuffer(Integer bytes = -1) async;
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
Buffer BufferedStream.readAll() async;
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
Stream BufferedStream.setEncoding(String encoding);
```

Parameters:
* encoding: String, the [encoding](../../module/ifs/encoding.md) to use, such as 'utf8', 'ascii', 'latin1' or 'utf16le'

Returns:
* [Stream](Stream.md), returns the current stream [object](object.md)

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
BufferedStream.writeBuffer(Buffer data) async;
```

Parameters:
* data: [Buffer](Buffer.md), the [Buffer](Buffer.md) data to write

Queues the buffer and returns undefined (unlike `write`, no back-pressure
flag is reported); the direct call waits for the chunk to be written. The
string overload encodes the text as utf8, with no [encoding](../../module/ifs/encoding.md) argument.

--------------------------
**Writes the given binary data to the stream; a string data is encoded as utf8**

```JavaScript
BufferedStream.writeBuffer(String data) async;
```

Parameters:
* data: String, the [Buffer](Buffer.md) data to write

String form of `writeBuffer`: the text is encoded with utf8 and queued as
binary data.

--------------------------
### write
**Writes the given data to the stream**

```JavaScript
Boolean BufferedStream.write(Buffer data) async;
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
Boolean BufferedStream.write(Buffer data,
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
Boolean BufferedStream.write(String data,
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
Stream BufferedStream.resume();
```

Returns:
* [Stream](Stream.md), returns the current stream [object](object.md)

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
Stream BufferedStream.pause();
```

Returns:
* [Stream](Stream.md), returns the current stream [object](object.md)

Stops the flowing read loop after the current chunk: no further `data` or
`readable` events are delivered until resume(). Data already buffered is
kept. It has no effect in pull mode (before resume or a data/readable
listener) and does not undo flowing mode. Returns the stream itself.
Node.js pauses in the same way but exposes the state through isPaused().

--------------------------
### pipe
**Pipes stream data to the destination stream**

```JavaScript
Value BufferedStream.pipe(Value destination,
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
BufferedStream.unpipe(Stream destination = NULL);
```

Parameters:
* destination: [Stream](Stream.md), the specific writable destination to unpipe

Compatibility no-op in fibjs: a piped copy stops by itself when the source
ends/errors/closes or the destination closes, and there is no way to
detach one destination from an active pipe. The argument is accepted and
ignored; Node.js also emits an `unpipe` event, which fibjs does not.

--------------------------
### end
**Ends the stream operation**

```JavaScript
Integer BufferedStream.end() async;
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
Integer BufferedStream.end(Buffer data) async;
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
Integer BufferedStream.end(Buffer data,
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
Integer BufferedStream.end(String data,
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
BufferedStream.flush() async;
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
BufferedStream.close() async;
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
Long BufferedStream.copyTo(Stream stm,
    Long bytes = -1) async;
```

Parameters:
* stm: [Stream](Stream.md), the destination stream [object](object.md)
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
StreamReader BufferedStream.getReader();
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
Stream BufferedStream.ref();
```

Returns:
* [Stream](Stream.md), returns the current [object](object.md)

The runtime references the isolate while a stream reader is active; unref
(or pause) allows the [process](../../module/ifs/process.md) to exit even when the stream has pending
work. Returns the stream itself for chaining.

--------------------------
### unref
**Allows the fibjs [process](../../module/ifs/process.md) to exit while the [object](object.md) is bound**

```JavaScript
Stream BufferedStream.unref();
```

Returns:
* [Stream](Stream.md), returns the current [object](object.md)

Counterpart of ref: drops the [process](../../module/ifs/process.md)-liveness reference held by the
stream. The data flow is not stopped; it just no longer prevents the
[process](../../module/ifs/process.md) from exiting. Returns the stream itself for chaining.

--------------------------
### destroy
**Destroys the stream. Optionally emits the 'error' event and emits the 'close' event.**

```JavaScript
Stream BufferedStream.destroy(Value err = undefined) async;
```

Parameters:
* err: Value, optional error [object](object.md), emitted as the 'error' event

Returns:
* [Stream](Stream.md), returns the current [object](object.md)

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
Object BufferedStream.on(Value ev,
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
Object BufferedStream.on(Object map);
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
Object BufferedStream.addListener(Value ev,
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
Object BufferedStream.addListener(Object map);
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
Object BufferedStream.addEventListener(Value ev,
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
Object BufferedStream.prependListener(Value ev,
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
Object BufferedStream.prependListener(Object map);
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
Object BufferedStream.once(Value ev,
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
Object BufferedStream.once(Object map);
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
Object BufferedStream.prependOnceListener(Value ev,
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
Object BufferedStream.prependOnceListener(Object map);
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
Object BufferedStream.off(Value ev,
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
Object BufferedStream.off(Value ev);
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
Object BufferedStream.off(Object map);
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
Object BufferedStream.removeListener(Value ev,
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
Object BufferedStream.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object BufferedStream.removeListener(Object map);
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
Object BufferedStream.removeEventListener(Value ev,
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
Object BufferedStream.removeAllListeners(Value ev);
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
Object BufferedStream.removeAllListeners(Array evs = []);
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
BufferedStream.setMaxListeners(Integer n);
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
Integer BufferedStream.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array BufferedStream.listeners(Value ev);
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
Array BufferedStream.rawListeners(Value ev);
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
Integer BufferedStream.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer BufferedStream.listenerCount(Value o,
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
Array BufferedStream.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean BufferedStream.emit(Value ev,
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
String BufferedStream.toString();
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
Value BufferedStream.toJSON(String key = "");
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
event BufferedStream.data(Buffer data);
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
event BufferedStream.close();
```

Emitted once after the stream has been closed: at the end of a flowing
read (auto destroy), after destroy(), or when the runtime closes the
stream. A plain close() call releases the handle without emitting it.
Node.js emits close for the same destroy/autoDestroy cases.

--------------------------
### error
**Queries and binds the stream error event, equivalent to on("error", func);**

```JavaScript
event BufferedStream.error(Integer code);
```

Parameters:
* code: Integer, the error value, usually an Error [object](object.md)

Emitted when a read or write fails and by destroy(err). The payload is the
error value, usually an Error [object](object.md) with `number` and `description`; the
declared Integer parameter name is historical (destroy(err) emits exactly
the value it was given, even a non-Error one). Node.js also emits Error
objects.

