# Object HttpMessage
HTTP message base [object](object.md): the protocol metadata shared by [HttpRequest](HttpRequest.md) and [HttpResponse](HttpResponse.md)

HttpMessage is the abstract base class of the two HTTP payload [types](../../module/ifs/types.md), [HttpRequest](HttpRequest.md) and
[HttpResponse](HttpResponse.md). It extends [Message](Message.md) with the HTTP protocol metadata: the protocol version, the
header collection, keep-alive and upgrade flags, the size limits used by the parser and the
trailer collection; the body reading/writing API and the routing metadata are inherited from
[Message](Message.md).

The class cannot be instantiated and is not reachable as a [global](../../module/ifs/global.md): a server receives an
[HttpRequest](HttpRequest.md), handlers build the reply through `request.response` (an [HttpResponse](HttpResponse.md)), and the
client functions return an [HttpResponse](HttpResponse.md). Use those concrete classes for member examples and
for real code.

Concepts:

- **[Headers](Headers.md)**: every HTTP message carries a case-insensitive [Headers](Headers.md) collection exposed as
  `headers`. Multi-value keys such as Set-Cookie keep their values in order; hasHeader,
  firstHeader, allHeader, appendHeader, setHeader, removeHeader, getHeader and getHeaders are
  the member forms of the same collection and follow the Node.js names. appendHeader adds
  values, setHeader replaces every value of a key (an [object](object.md) argument only touches the keys it
  contains, a [Headers](Headers.md) argument replaces the whole set), removeHeader deletes the key.
- **Protocol and persistence**: `protocol` is the HTTP version string; setting a version above
  1.0 turns `keepAlive` on and 1.0 turns it off, and appending or parsing a Connection:
  keep-alive / Connection: Upgrade header updates keepAlive / upgrade accordingly.
- **Limits**: maxHeadersCount (default 128) and maxHeaderSize (default 8192 bytes for one
  header line) bound the parsed header block; maxChunkSize (default 2 MB) bounds one chunk of
  a chunked body and maxBodySize (default 64 MB) bounds the whole body, both in megabytes
  (-1 disables the body limit, 0 reads no body). The [http](../../module/ifs/http.md) [module](../../module/ifs/module.md) exposes [module](../../module/ifs/module.md)-level
  counterparts for the client side.
- **Wire format**: sendTo writes the start line, the headers and (unless header_only) the body
  to a stream; readFrom parses a message from a [BufferedStream](BufferedStream.md). The members are inherited from
  [Message](Message.md); the base implementation throws, so they are only usable on Request/Response.
- **Trailers**: trailer headers are held in `trailers` and queued with addTrailers; they are
  sent after a chunked body and parsed back into `trailers` on the receiving side.
- **[Socket](Socket.md) and stream**: for a message read from the network, `socket` is the underlying
  device stream and `stream` (inherited from [Message](Message.md)) is the buffered stream the parser read
  from; both are null for messages built in memory and are reset by clear().
- **formData**: parses the body according to Content-Type; only multipart/form-data (with a
  boundary) and application/x-www-form-urlencoded are accepted, any other type raises a
  TypeError, matching the Fetch Body mixin (MDN).
- **Node.js differences**: Node has no shared base class exporting these members;
  [http.IncomingMessage](../../module/ifs/http.md#IncomingMessage) carries headers/method/[url](../../module/ifs/url.md) and [http.ServerResponse](../../module/ifs/http.md#ServerResponse) carries
  headersSent/setHeader/getHeaders/addTrailers. Node headers are plain objects with array
  values, while fibjs exposes the WHATWG-style [Headers](Headers.md) collection plus the firstHeader and
  allHeader helpers.

Obtained from:
- `new [http.Request](../../module/ifs/http.md#Request)()` — a request message, as received by a server or built for a client;
- `new [http.Response](../../module/ifs/http.md#Response)()` — a response message, as built by a server or received from a client;
- the handler of an [http.Server](../../module/ifs/http.md#Server) — `req` is an [HttpRequest](HttpRequest.md) and `req.response` an [HttpResponse](HttpResponse.md);
- `http.getSync(...)`, `http.requestSync(...)`, `http.fetch(...)` and the other client
  functions — they return an [HttpResponse](HttpResponse.md).

Example 1 — parse an HTTP request from an in-memory stream:

```JavaScript
const http = require('http');
const io = require('io');

const ms = new io.MemoryStream();
const bs = new io.BufferedStream(ms);
bs.EOL = '\r\n';
bs.writeText('POST /submit HTTP/1.1\r\nHost: example.com\r\nContent-Length: 7\r\n\r\npayload');
ms.rewind();

const req = new http.Request();
req.readFrom(bs);

console.log(req.method, req.address, req.protocol); // POST /submit HTTP/1.1
console.log(req.firstHeader('Host'), req.length, req.text()); // example.com 7 payload
console.log(req.stream !== null, req.socket !== null); // true true
```

Example 2 — build and serialize an HTTP response:

```JavaScript
const http = require('http');
const io = require('io');

const res = new http.Response();
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.write('ok');

const wire = new io.MemoryStream();
res.sendTo(wire);
console.log(res.headersSent); // true

wire.rewind();
console.log(wire.readAll().toString());
// HTTP/1.1 200 OK with Content-Type, Connection and Content-Length, then the body 'ok'
```

Example 3 — a Request/Response round trip through a server:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.setHeader('X-Path', req.address);
    req.response.write('hello');
});
server.start();
const port = server.socket.localPort;

const resp = http.getSync('http://127.0.0.1:' + port + '/world');
console.log(resp.statusCode, resp.firstHeader('X-Path')); // 200 /world
console.log(resp.keepAlive, resp.protocol); // true HTTP/1.1
console.log(resp.text()); // hello

server.stop();
```

Notes:

- The parser normalizes parsed header names to lowercase, but hasHeader/firstHeader and the
  [Headers](Headers.md) methods are case-insensitive either way; the wire format written by sendTo uses the
  stored casing.
- content_length and header_only belong to the sendTo/readFrom options, not to the message
  state; the limit properties are read by the parser and the writer only.

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    Message [tooltip="Message", URL="Message.md", label="{Message|new Message()\l|TEXT\lBINARY\l|sent\lvalue\lparams\ltype\lbody\lbodyUsed\llength\lstream\llastError\l|read()\lreadAll()\lsetEncoding()\lwrite()\ltext()\larrayBuffer()\lblob()\lbytes()\ljson()\lpack()\lend()\lisEnded()\lclear()\lsendTo()\lreadFrom()\lclone()\lresume()\lpause()\lpipe()\lunpipe()\l|event data\levent close\levent error\l}"];
    HttpMessage [tooltip="HttpMessage", fillcolor="lightgray", id="me", label="{HttpMessage|protocol\lheaders\lkeepAlive\lupgrade\lmaxHeadersCount\lmaxHeaderSize\lmaxChunkSize\lmaxBodySize\lsocket\lheadersSent\ltrailers\l|hasHeader()\lfirstHeader()\lallHeader()\lappendHeader()\lsetHeader()\lremoveHeader()\lgetHeader()\lgetHeaders()\laddTrailers()\lformData()\l}"];
    HttpRequest [tooltip="HttpRequest", URL="HttpRequest.md", label="{HttpRequest}"];
    HttpResponse [tooltip="HttpResponse", URL="HttpResponse.md", label="{HttpResponse}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> Message [dir=back];
    Message -> HttpMessage [dir=back];
    HttpMessage -> HttpRequest [dir=back];
    HttpMessage -> HttpResponse [dir=back];
}
```

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object HttpMessage.addAbortListener(EventEmitter signal,
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
static Object HttpMessage.once(EventEmitter emitter,
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
static Object HttpMessage.on(EventEmitter emitter,
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
static Integer HttpMessage.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Constants
        
### TEXT
**[Message](Message.md) type 1, representing a text type**

```JavaScript
const HttpMessage.TEXT = 1;
```

Set `type` to this value on messages whose payload is text: [WebSocketMessage](WebSocketMessage.md) then delivers
`data` as a String, and application handlers can decode the body as text. The default type
of a new message is BINARY.

--------------------------
### BINARY
**[Message](Message.md) type 2, representing a binary type**

```JavaScript
const HttpMessage.BINARY = 2;
```

The default type of a new message. The payload is treated as raw bytes; a [WebSocketMessage](WebSocketMessage.md)
with this type delivers `data` as a [Buffer](Buffer.md).

## Properties
        
### protocol
**String, protocol version information, the allowed format is: HTTP/#.#**

```JavaScript
String HttpMessage.protocol;
```

Default HTTP/1.1. The setter validates the form and throws error 20024 for anything else;
a version above 1.0 enables keepAlive and 1.0 disables it. A parsed message sets the
version from its start line. Node.js exposes the same value as httpVersion on
IncomingMessage and ServerResponse.

Example — the version drives keep-alive:

```JavaScript
const http = require('http');

const req = new http.Request();
console.log(req.protocol, req.keepAlive); // HTTP/1.1 true

req.protocol = 'HTTP/1.0';
console.log(req.protocol, req.keepAlive); // HTTP/1.0 false

req.appendHeader('Connection', 'keep-alive');
console.log(req.keepAlive); // true
```

--------------------------
### headers
**[Headers](Headers.md), container holding the [http](../../module/ifs/http.md) headers of the message, read-only property**

```JavaScript
readonly Headers HttpMessage.headers;
```

The live [Headers](Headers.md) collection of the message: the property itself cannot be replaced, but
the collection can be modified with its own methods (set, append, delete, ...) and the
change is reflected in the wire output. Parsed messages store keys lowercase, lookup is
case-insensitive either way. Node.js uses a plain [object](object.md) plus rawHeaders instead.

--------------------------
### keepAlive
**Boolean, queries and sets whether to keep the connection alive**

```JavaScript
Boolean HttpMessage.keepAlive;
```

Default true. Setting protocol above 1.0 turns it on and 1.0 turns it off, and appending
or parsing a Connection header updates it ('close' clears, 'keep-alive' and 'upgrade' set).
On output the value selects the Connection header written by sendTo. Node's IncomingMessage
has no such property, persistence belongs to the Agent.

--------------------------
### upgrade
**Boolean, queries and sets whether the protocol is upgraded**

```JavaScript
Boolean HttpMessage.upgrade;
```

Default false. Set when a Connection: Upgrade header is appended or parsed; the [WebSocket](WebSocket.md)
handshake relies on it. Node.js reports the same condition through the 'upgrade' event.

--------------------------
### maxHeadersCount
**Integer, queries and sets the maximum number of request headers, default is 128**

```JavaScript
Integer HttpMessage.maxHeadersCount;
```

The parser fails with error 20024 when a message carries more header lines than this; it
is used when reading requests. A negative value throws a RangeError (20006). Node.js has
an [http.Server](../../module/ifs/http.md#Server).maxHeadersCount property instead of a per-message one.

--------------------------
### maxHeaderSize
**Integer, queries and sets the maximum request header length, default is 8192**

```JavaScript
Integer HttpMessage.maxHeaderSize;
```

The maximum size in bytes of one header line accepted by the parser; a longer line fails
with error 20024. A negative value throws a RangeError (20006). Node.js supports the
[process](../../module/ifs/process.md)-wide --max-[http](../../module/ifs/http.md)-header-size setting instead.

--------------------------
### maxChunkSize
**Integer, queries and sets the maximum chunk size in MB, default is 2**

```JavaScript
Integer HttpMessage.maxChunkSize;
```

Bounds a single chunk of a chunked body while it is parsed: a larger chunk fails with
error 20024 ("HttpMessage: chunk is too huge."). 0 is accepted. Node.js has no equivalent
per-message setting.

--------------------------
### maxBodySize
**Integer, queries and sets the maximum body size in MB, default is 64**

```JavaScript
Integer HttpMessage.maxBodySize;
```

While parsing, a Content-Length or chunked body larger than this fails with error 20024
("HttpMessage: body is too huge."); -1 disables the limit and 0 reads no body at all. Set
it before readFrom. Node.js has no per-message body limit.

--------------------------
### socket
**[Stream](Stream.md), queries the source socket of the current [object](object.md)**

```JavaScript
readonly Stream HttpMessage.socket;
```

The underlying device stream the message was read from; null when the message was built in
memory and reset by clear(). It differs from stream (inherited from [Message](Message.md)), the buffered
wrapper the parser consumed. Node.js exposes socket on IncomingMessage only.

--------------------------
### headersSent
**Boolean, queries whether the headers have been sent**

```JavaScript
readonly Boolean HttpMessage.headersSent;
```

False for a message built in memory; sendTo and send set it to true when the start line
and headers were written to a stream. On a server response it is true once the reply left
the handler pipeline. Node's ServerResponse.headersSent has the same meaning.

--------------------------
### trailers
**[Headers](Headers.md), container holding the [http](../../module/ifs/http.md) trailer headers of the message, read-only property**

```JavaScript
readonly Headers HttpMessage.trailers;
```

A live [Headers](Headers.md) collection filled with the trailer section of a parsed chunked body and
used to queue outgoing trailers together with addTrailers; empty for messages without
trailers and reset by clear().

--------------------------
### sent
**Boolean, Whether the current message has been sent**

```JavaScript
readonly Boolean HttpMessage.sent;
```

The base [Message](Message.md) and [WebSocketMessage](WebSocketMessage.md) always report false; HttpMessage reports the real
flag, which sendTo and send set when the message was written to a stream. Node.js has no
equivalent property on IncomingMessage.

--------------------------
### value
**String, The basic content of the message**

```JavaScript
String HttpMessage.value;
```

A free-form string that carries the value a handler dispatches on: [mq.Routing](../../module/ifs/mq.md#Routing) stores the
matched [path](../../module/ifs/path.md) or the captured value in it, and an [HttpRequest](HttpRequest.md) mirrors its [path](../../module/ifs/path.md). Default is
an empty string.

--------------------------
### params
**NArray, The basic parameters of the message**

```JavaScript
readonly NArray HttpMessage.params;
```

Holds the capture groups that [mq.Routing](../../module/ifs/mq.md#Routing) fills when a pattern with capture groups matches;
the handler receives them here and as extra function arguments. The array is a read view:
writing into it from JavaScript does not change the message.

--------------------------
### type
**Integer, [Message](Message.md) type**

```JavaScript
Integer HttpMessage.type;
```

TEXT (1) or BINARY (2), BINARY by default; any integer is accepted. [WebSocketMessage](WebSocketMessage.md) uses
the value to decide whether `data` is a String or a [Buffer](Buffer.md), and [HttpResponse](HttpResponse.md) overrides the
property with the Fetch response type string ('basic', 'cors', 'error').

--------------------------
### body
**[Stream](Stream.md), The stream [object](object.md) containing the data part of the message**

```JavaScript
Stream HttpMessage.body;
```

A buffered body is seekable and can be read from the beginning more than once; assigning a
non-seekable stream makes the body streaming, so it can be consumed only once. The getter
returns null when the message has no body or when the buffered body is empty (size 0).

--------------------------
### bodyUsed
**Boolean, Queries whether the body of the message has been consumed**

```JavaScript
readonly Boolean HttpMessage.bodyUsed;
```

Set by the consuming readers (text, [json](../../module/ifs/json.md), pack, bytes, arrayBuffer, blob and, on an
HttpMessage, formData). A buffered body can still be read again after the flag is set; a
streaming body rejects a second consume with TypeError 20024 "body has already been
consumed". read and readAll do not set the flag.

--------------------------
### length
**Long, The length of the data part of the message**

```JavaScript
readonly Long HttpMessage.length;
```

The size in bytes of the buffered body, 0 when the message has no body. It is also 0 for a
streaming body (a response body received from a client), whose size is unknown until it is
read; Node.js exposes the size through the Content-Length header instead of a property.

--------------------------
### stream
**[Stream](Stream.md), Queries the stream [object](object.md) used when the message was read from**

```JavaScript
readonly Stream HttpMessage.stream;
```

The base [Message](Message.md) throws 20009; on an HttpMessage and a [WebSocketMessage](WebSocketMessage.md) it is the buffered
stream the message was parsed from, and null when the message was built in memory. It is
distinct from socket, the underlying device stream of an HTTP message.

--------------------------
### lastError
**String, Queries and sets the last error of message processing**

```JavaScript
String HttpMessage.lastError;
```

A free-form string, empty by default; the base message never writes it, handler layers
such as [Chain](Chain.md) record a failure here. clear() preserves it.

## Methods
        
### hasHeader
**checks whether a header of the specified key exists**

```JavaScript
Boolean HttpMessage.hasHeader(String name);
```

Parameters:
* name: String, specifies the key to check

Returns:
* Boolean, returns whether the key exists

Lookup is case-insensitive; returns false when the key was never set. See the headers
property for the collection itself.

--------------------------
### firstHeader
**queries the first header of the specified key**

```JavaScript
String HttpMessage.firstHeader(String name);
```

Parameters:
* name: String, specifies the key to query

Returns:
* String, returns the value corresponding to the key, or null if it does not exist

Returns the first value when the key was appended more than once; a missing key returns
null (not undefined). Use getHeader for the Node.js-style undefined result and allHeader
for every value.

--------------------------
### allHeader
**queries all headers of the specified key**

```JavaScript
NObject HttpMessage.allHeader(String name = "");
```

Parameters:
* name: String, specifies the key to query; passing an empty string returns the result of all keys

Returns:
* NObject, returns an array of all values corresponding to the key, or an empty array if the data does not exist

Returns the values in append order as an array; a missing key returns an empty array. With
an empty name the whole header set is returned as an [object](object.md) whose multi-value keys are
arrays and whose single-value keys are strings, the shape getHeaders() returns.

--------------------------
### appendHeader
**appends a header; appending data does not modify the headers of an existing key**

```JavaScript
HttpMessage.appendHeader(Object map);
```

Parameters:
* map: Object, specifies the key-value data dictionary to append

Appends every entry of the [object](object.md); existing values of the same key are kept, so a key can
end up with several values (Set-Cookie and friends). The overloads cover an [object](object.md) map, a
[Headers](Headers.md) collection, a name with an array of values and a name with a single value; a
Connection entry updates keepAlive/upgrade as it is appended.

Example — append keeps duplicates, setHeader replaces them:

```JavaScript
const http = require('http');

const req = new http.Request();
req.appendHeader('X-Tag', 'a');
req.appendHeader('X-Tag', 'b');
req.appendHeader({
    'X-Tag': 'c'
});

console.log(req.allHeader('X-Tag').join(',')); // a,b,c
console.log(req.firstHeader('X-Tag')); // a

const extra = new http.Headers();
extra.append('X-Tag', 'd');
extra.append('Content-Type', 'text/plain');
req.appendHeader(extra);
console.log(req.allHeader('X-Tag').join(',')); // a,b,c,d
```

--------------------------
**appends headers; appending data does not modify the headers of an existing key**

```JavaScript
HttpMessage.appendHeader(Headers headers);
```

Parameters:
* headers: [Headers](Headers.md), specifies the [Headers](Headers.md) [object](object.md) to append

Appends every value of the given collection in order, duplicates included; useful to merge
another message's headers into this one.

--------------------------
**appends a group of headers with the specified name; appending data does not modify the headers of an existing key**

```JavaScript
HttpMessage.appendHeader(String name,
    Array values);
```

Parameters:
* name: String, specifies the key to append
* values: Array, specifies the group of data to append

Every element of the array is appended as a separate value of the key; non-string scalars
are rendered as strings.

--------------------------
**appends a header; appending data does not modify the headers of an existing key**

```JavaScript
HttpMessage.appendHeader(String name,
    Variant value);
```

Parameters:
* name: String, specifies the key to append
* value: Variant, specifies the data to append

Appends one value; a non-string scalar (number, boolean, Date) is rendered as its string
form. The same effect is available through headers.append(name, value).

--------------------------
### setHeader
**sets a header; setting data modifies the first value of the key and clears the remaining headers with the same key**

```JavaScript
HttpMessage.setHeader(Object map);
```

Parameters:
* map: Object, specifies the key-value data dictionary to set

Sets each key of the [object](object.md), replacing all of its existing values; keys not present in the
[object](object.md) are left untouched. The setHeader([Headers](Headers.md)) overload replaces the whole header set
instead. See appendHeader for the appending counterpart.

Example — replace, set and remove headers:

```JavaScript
const http = require('http');

const res = new http.Response();
res.setHeader('X-Mode', 'a');
res.appendHeader('X-Mode', 'b');
console.log(res.allHeader('X-Mode').join(',')); // a,b

res.setHeader('X-Mode', 'c');
console.log(res.allHeader('X-Mode').join(',')); // c

res.setHeader({
    'X-Extra': '1'
});
res.removeHeader('X-Mode');
console.log(res.hasHeader('X-Mode'), res.getHeader('X-Mode')); // false undefined
console.log(res.firstHeader('X-Extra')); // 1
```

--------------------------
**sets headers; setting data modifies the value of the key and clears the remaining headers with the same key**

```JavaScript
HttpMessage.setHeader(Headers headers);
```

Parameters:
* headers: [Headers](Headers.md), specifies the [Headers](Headers.md) [object](object.md) to set

Clears every existing header first and copies the given collection, so the result contains
exactly its entries (duplicates preserved).

--------------------------
**sets a group of headers with the specified name; setting data modifies the value of the key and clears the remaining headers with the same key**

```JavaScript
HttpMessage.setHeader(String name,
    Array values);
```

Parameters:
* name: String, specifies the key to set
* values: Array, specifies the group of data to set

Replaces all values of the key with the given array.

--------------------------
**sets a header; setting data modifies the first value of the key and clears the remaining headers with the same key**

```JavaScript
HttpMessage.setHeader(String name,
    Variant value);
```

Parameters:
* name: String, specifies the key to set
* value: Variant, specifies the data to set

Replaces all values of the key with the single value.

--------------------------
### removeHeader
**deletes all headers of the specified key**

```JavaScript
HttpMessage.removeHeader(String name);
```

Parameters:
* name: String, specifies the key to delete

Case-insensitive; a missing key is ignored. Returns no data, like Node's
response.removeHeader.

--------------------------
### getHeader
**queries the first header of the specified key**

```JavaScript
Value HttpMessage.getHeader(String name);
```

Parameters:
* name: String, specifies the key to query

Returns:
* Value, returns the value corresponding to the key, or undefined if it does not exist

Returns the first value as a string, or undefined when the key does not exist
(Node.js-style). firstHeader returns null instead and allHeader returns every value.

--------------------------
### getHeaders
**queries all headers**

```JavaScript
NObject HttpMessage.getHeaders();
```

Returns:
* NObject, returns the key-value pairs of all headers

Returns one [object](object.md) with every header: a key with one value maps to the string, a key with
several values maps to an array; the same shape as allHeader(""). Node's
response.getHeaders() returns arrays for every key instead.

--------------------------
### addTrailers
**adds trailer headers, which will be sent after the body**

```JavaScript
HttpMessage.addTrailers(Object headers);
```

Parameters:
* headers: Object, specifies the trailer headers to add

Appends (not replaces) the entries of the [object](object.md) to the trailers collection; the trailer
section is written after a chunked body. Node's response.addTrailers has the same shape.

Example — queue a trailer and read it back:

```JavaScript
const http = require('http');

const res = new http.Response();
res.write('body');
res.addTrailers({
    'X-Checksum': 'abc123'
});

console.log(res.trailers.get('X-Checksum')); // abc123
```

--------------------------
### formData
**parses the message body into [FormData](FormData.md) according to Content-Type**

```JavaScript
FormData HttpMessage.formData() async;
```

Returns:
* [FormData](FormData.md), returns the parsed [FormData](FormData.md) [object](object.md)

Only multipart/form-data (with a boundary parameter in Content-Type) and
application/x-www-form-urlencoded are supported; any other type throws a TypeError 20024
("the Content-Type is not a form type"), a multipart type without a boundary throws "the
multipart Content-Type is missing a boundary" and an empty body throws "the body is
empty". The body is consumed (bodyUsed is set), a buffered body can still be read again;
this mirrors the Fetch Body mixin (MDN).

Example — parse an urlencoded response body:

```JavaScript
const http = require('http');

const res = new http.Response('name=fibjs&mode=fast', {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

const form = res.formData();
console.log(form.get('name'), form.get('mode')); // fibjs fast
console.log(res.bodyUsed); // true
```

--------------------------
### read
**Reads the specified amount of data from the stream; this method is an alias of the corresponding body method**

```JavaScript
Buffer HttpMessage.read(Integer bytes = -1) async;
```

Parameters:
* bytes: Integer, the amount of data to read; the default is to read a data block of random size, and the size of the data read depends on the device

Returns:
* [Buffer](Buffer.md), returns the data read from the stream, or null if no data is available or the connection is interrupted

Reads from the current position of the body: a freshly written message is positioned at the
end and returns null until the body is rewound, while a message parsed with readFrom is
rewound and can be read sequentially. Reading a streaming body consumes it. Use readAll to
rewind a buffered body and take everything.

--------------------------
### readAll
**Reads all remaining data from the stream; this method is an alias of the corresponding body method**

```JavaScript
Buffer HttpMessage.readAll() async;
```

Returns:
* [Buffer](Buffer.md), returns the data read from the stream, or null if no data is available or the connection is interrupted

A buffered body is rewound first, so the call returns the whole body even after it was
read; a streaming body is read to the end and returns null on a second call. Returns null
when the message has no body.

--------------------------
### setEncoding
**Sets the [encoding](../../module/ifs/encoding.md) of the message body; this method is an alias of the corresponding body method**

```JavaScript
Message HttpMessage.setEncoding(String encoding);
```

Parameters:
* encoding: String, the [encoding](../../module/ifs/encoding.md) to use, such as 'utf8', 'ascii', '[hex](../../module/ifs/hex.md)', etc.

Returns:
* [Message](Message.md), returns the current message [object](object.md)

The [encoding](../../module/ifs/encoding.md) is handed to the body stream, so the `data` event then delivers strings
instead of Buffers; for the built-in memory-backed bodies `read` still returns a [Buffer](Buffer.md),
unlike Node's IncomingMessage.setEncoding, which makes read() return strings. Passing null
or an unsupported [encoding](../../module/ifs/encoding.md) throws a TypeError.

Example — the data event decodes after setEncoding:

```JavaScript
const mq = require('mq');
const io = require('io');
const coroutine = require('coroutine');

const msg = new mq.Message();
const ms = new io.MemoryStream();
ms.write('hello');
ms.rewind();
msg.body = ms;

const chunks = [];
msg.setEncoding('utf8');
msg.on('data', (chunk) => chunks.push(chunk));
msg.resume();
coroutine.sleep(10);

console.log(chunks.length, typeof chunks[0], chunks[0]); // 1 string hello
```

--------------------------
### write
**Writes the given data; this method is an alias of the corresponding body method; a string data is encoded as utf8**

```JavaScript
Integer HttpMessage.write(Buffer | String data) async;
```

Parameters:
* data: [Buffer](Buffer.md) | String, the data to write

Returns:
* Integer, returns the number of bytes actually written

Appends to the buffered body, creating an empty one when needed; it does not replace the
existing content and does not mark the message ended. The count returned for a buffered
body is not filled reliably by the current implementation, so use length for the body
size; Node's writable.write returns a boolean backpressure flag instead.

Example — write appends and readAll rewinds:

```JavaScript
const mq = require('mq');

const msg = new mq.Message();
msg.write('hello');
msg.write(' world');
console.log(msg.length); // 11

msg.body.rewind();
console.log(msg.read(5).toString()); // hello
console.log(msg.readAll().toString()); // hello world (readAll rewinds again)
```

--------------------------
### text
**Writes the given text data**

```JavaScript
String HttpMessage.text(String data) async;
```

Parameters:
* data: String, the data to write

Returns:
* String, this method does not return data

Replaces the body with the utf8 bytes of the string (write appends instead). The method
returns no data; it is the writing counterpart of text() and follows the Fetch Body mixin
shape.

--------------------------
**Parses the data in the message as text [encoding](../../module/ifs/encoding.md)**

```JavaScript
String HttpMessage.text() async;
```

Returns:
* String, returns the parsing result

Decodes the body as utf8 and consumes it (a buffered body is rewound first); an empty or
missing body returns an empty string. A second call on a streaming body throws TypeError
20024.

--------------------------
### arrayBuffer
**Returns the data part of the message in binary form**

```JavaScript
ArrayBuffer HttpMessage.arrayBuffer() async;
```

Returns:
* ArrayBuffer, returns an ArrayBuffer [object](object.md) containing the data part of the message

Consumes the body and returns its bytes as an ArrayBuffer; a missing or empty body returns
a zero-length ArrayBuffer. A second call on a streaming body throws TypeError 20024.
Matches the Fetch Body mixin (MDN Body.arrayBuffer()).

--------------------------
### blob
**Returns the data part of the message as a [Blob](Blob.md)**

```JavaScript
Blob HttpMessage.blob(String type = "") async;
```

Parameters:
* type: String, the MIME type of the [Blob](Blob.md), default is an empty string

Returns:
* [Blob](Blob.md), returns a [Blob](Blob.md) [object](object.md) containing the data part of the message

Consumes the body; a missing or empty body returns an empty [Blob](Blob.md). The argument is the MIME
type of the result and is not taken from the Content-Type header (fibjs extension: MDN
Body.blob() falls back to the header when the type is omitted).

--------------------------
### bytes
**Returns the data part of the message as a [Buffer](Buffer.md)**

```JavaScript
Buffer HttpMessage.bytes() async;
```

Returns:
* [Buffer](Buffer.md), returns a [Buffer](Buffer.md) containing the data part of the message, or an empty [Buffer](Buffer.md) if there is no data

Consumes the body; a missing or empty body returns a zero-length [Buffer](Buffer.md). A second call on a
streaming body throws TypeError 20024, while a buffered body can be read again.

--------------------------
### json
**Writes the given data with JSON [encoding](../../module/ifs/encoding.md)**

```JavaScript
Variant HttpMessage.json(Value data) async;
```

Parameters:
* data: Value, the data to write

Returns:
* Variant, this method does not return data

Replaces the body with the JSON text produced by the [json](../../module/ifs/json.md) [module](../../module/ifs/module.md) (see [json.encode](../../module/ifs/json.md#encode)) and,
on an HttpMessage, sets the Content-Type header to application/[json](../../module/ifs/json.md). Throws when the value
cannot be encoded (for example a circular [object](object.md)). Returns no data.

--------------------------
**Parses the data in the message as JSON**

```JavaScript
Variant HttpMessage.json() async;
```

Returns:
* Variant, returns the parsing result

Consumes the body and parses it with the [json](../../module/ifs/json.md) [module](../../module/ifs/module.md); a missing body returns null and
invalid JSON throws a SyntaxError. On an HttpMessage the Content-Type header must contain
"[json](../../module/ifs/json.md)", otherwise error 20024 is raised ("Content-Type is missing." or "Invalid content
type.").

--------------------------
### pack
**Writes the given data with [msgpack](../../module/ifs/msgpack.md) [encoding](../../module/ifs/encoding.md)**

```JavaScript
Variant HttpMessage.pack(Value data) async;
```

Parameters:
* data: Value, the data to write

Returns:
* Variant, this method does not return data

Replaces the body with the [msgpack](../../module/ifs/msgpack.md) [encoding](../../module/ifs/encoding.md) produced by the [msgpack](../../module/ifs/msgpack.md) [module](../../module/ifs/module.md) and, on an
HttpMessage, sets the Content-Type header to application/[msgpack](../../module/ifs/msgpack.md). Throws when the value
cannot be encoded. Returns no data.

--------------------------
**Parses the data in the message as [msgpack](../../module/ifs/msgpack.md)**

```JavaScript
Variant HttpMessage.pack() async;
```

Returns:
* Variant, returns the parsing result

Consumes the body and decodes it with the [msgpack](../../module/ifs/msgpack.md) [module](../../module/ifs/module.md); a missing body returns null and
invalid data throws. On an HttpMessage the Content-Type header must be
application/[msgpack](../../module/ifs/msgpack.md) (parameters such as charset are ignored), otherwise error 20024 is
raised.

--------------------------
### end
**Marks the message as ended**

```JavaScript
Integer HttpMessage.end() async;
```

Returns:
* Integer, returns 0 on success

Sets the end flag and returns 0; it writes nothing and does not stop handler chains, the
flag is a state marker for application code, readable with isEnded. An [HttpRequest](HttpRequest.md) reports
the state of its response when one is attached.

--------------------------
**Writes the given data and sets the end of current message processing**

```JavaScript
Integer HttpMessage.end(Buffer data) async;
```

Parameters:
* data: [Buffer](Buffer.md), the data to write

Returns:
* Integer, returns 0 on success

Appends the buffer to the buffered body (like write) and marks the message as ended; no
data is sent.

--------------------------
**Writes the given data and sets the end of current message processing**

```JavaScript
Integer HttpMessage.end(Buffer data,
    String encoding) async;
```

Parameters:
* data: [Buffer](Buffer.md), the data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md) to use; since data is a [Buffer](Buffer.md), this parameter is ignored

Returns:
* Integer, returns 0 on success

Same as end(data) for a [Buffer](Buffer.md); the [encoding](../../module/ifs/encoding.md) parameter is ignored because the data is
already binary and is kept for overload compatibility.

--------------------------
**Writes the given string data and sets the end of current message processing**

```JavaScript
Integer HttpMessage.end(String data,
    String encoding = "utf8") async;
```

Parameters:
* data: String, the string data to write
* encoding: String, the [encoding](../../module/ifs/encoding.md) of the string, default is "utf8"

Returns:
* Integer, returns 0 on success

Encodes the string with the given [encoding](../../module/ifs/encoding.md) (utf8 by default), appends it to the buffered
body and marks the message as ended; end('616263', '[hex](../../module/ifs/hex.md)') appends the bytes of 'abc'.

--------------------------
### isEnded
**Queries whether the current message has ended**

```JavaScript
Boolean HttpMessage.isEnded();
```

Returns:
* Boolean, returns true if ended

True after any end() overload. It is not used by [Chain](Chain.md) or [Routing](Routing.md) to decide whether to
continue; [HttpRequest.isEnded](HttpRequest.md#isEnded) reports the state of its response when one is attached,
otherwise the request message state.

--------------------------
### clear
**Clears the content of the message**

```JavaScript
HttpMessage.clear();
```

Resets the value, params, body and the end flag; type and lastError are preserved. An
HttpMessage additionally resets protocol (back to HTTP/1.1), keepAlive, headers, trailers,
stream and socket state.

--------------------------
### sendTo
**Sends a formatted message to the given stream [object](object.md)**

```JavaScript
HttpMessage.sendTo(Stream stm,
    Object options = {}) async;
```

Parameters:
* stm: [Stream](Stream.md), the stream [object](object.md) that receives the formatted message
* options: Object, the sending options

The base [Message](Message.md) does not implement the wire format and throws 20009; [HttpRequest](HttpRequest.md),
[HttpResponse](HttpResponse.md) and [WebSocketMessage](WebSocketMessage.md) override it. For an [HttpResponse](HttpResponse.md) the options may contain
header_only (write the start line and the headers only, default false) and content_length
(add the Content-Length header when header_only is true, default true; it is an error
otherwise). [HttpRequest](HttpRequest.md) ignores the options and always writes the complete request.

Example — serialize a request and parse it back (on [http.Request](../../module/ifs/http.md#Request), which implements the
member; the same round trip works on [http.Response](../../module/ifs/http.md#Response)):

```JavaScript
const http = require('http');
const io = require('io');

const req = new http.Request();
req.address = '/ping';
req.appendHeader('X-Trace', 'demo');

const wire = new io.MemoryStream();
req.sendTo(wire);
console.log(req.headersSent); // true

wire.rewind();
const bs = new io.BufferedStream(wire);
bs.EOL = '\r\n';
const parsed = new http.Request();
parsed.readFrom(bs);
console.log(parsed.address, parsed.firstHeader('X-Trace')); // /ping demo
```

--------------------------
### readFrom
**Reads a formatted message from the given cached stream [object](object.md) and parses and fills the [object](object.md)**

```JavaScript
HttpMessage.readFrom(Stream stm,
    Object options = {}) async;
```

Parameters:
* stm: [Stream](Stream.md), the stream [object](object.md) from which the formatted message is read
* options: Object, the reading options

The base [Message](Message.md) does not implement the wire format and throws 20009; [HttpRequest](HttpRequest.md),
[HttpResponse](HttpResponse.md) and [WebSocketMessage](WebSocketMessage.md) override it. The HTTP implementations require a
[BufferedStream](BufferedStream.md) (error 20024 otherwise); the [HttpResponse](HttpResponse.md) options may contain header_only
(parse the status line and the headers without the body, default false).

--------------------------
### clone
**Copies the current message [object](object.md)**

```JavaScript
Message HttpMessage.clone();
```

Returns:
* [Message](Message.md), returns the copied message [object](object.md)

The base [Message](Message.md) and HttpMessage are not cloneable directly and throw 20009; [HttpRequest](HttpRequest.md),
[HttpResponse](HttpResponse.md) and [WebSocketMessage](WebSocketMessage.md) return a deep copy with its own body, headers and
metadata, so the copy can be read and modified independently.

Example — clone a response and read both copies:

```JavaScript
const http = require('http');

const res = new http.Response();
res.statusCode = 201;
res.appendHeader('X-Id', '7');
res.write('created');

const copy = res.clone();
console.log(copy.statusCode, copy.firstHeader('X-Id'), copy.text()); // 201 7 created
console.log(res.text()); // created (the original is unchanged)
```

--------------------------
### resume
**Switches the message body stream to flowing read mode**

```JavaScript
Message HttpMessage.resume();
```

Returns:
* [Message](Message.md), returns the message [object](object.md)

The body starts emitting `data` events and pipe destinations receive data; a buffered body
is read from its current position. Returns the message itself, so the call can be chained.

--------------------------
### pause
**Pauses the automatic reading mode of the message body stream**

```JavaScript
Message HttpMessage.pause();
```

Returns:
* [Message](Message.md), returns the message [object](object.md)

Kept for Node.js compatibility; like [Stream.pause](Stream.md#pause) it currently has no effect. The method
still returns the message so chainable code keeps working.

--------------------------
### pipe
**Pipes the message body stream data to a destination stream**

```JavaScript
Value HttpMessage.pipe(Value destination,
    Object options = {});
```

Parameters:
* destination: Value, the destination stream [object](object.md)
* options: Object, pipe options, optional

Returns:
* Value, returns the destination stream [object](object.md)

Data is forwarded through the `data` events of the body, so a streaming body flows
automatically while a buffered body is copied from its current position (rewind it first
when it was just written). The options are handed to the underlying pipe helper; end:
false leaves the destination open when the body ends. Returns the destination, like Node's
readable.pipe.

Example — copy a buffered body into another stream:

```JavaScript
const mq = require('mq');
const io = require('io');
const coroutine = require('coroutine');

const ms = new io.MemoryStream();
ms.write('piped data');
ms.rewind();

const msg = new mq.Message();
msg.body = ms;

const dst = new io.MemoryStream();
console.log(msg.pipe(dst) === dst); // true
coroutine.sleep(20);

dst.rewind();
console.log(dst.readAll().toString()); // piped data
```

--------------------------
### unpipe
**Removes all pipe destinations of the message body stream**

```JavaScript
HttpMessage.unpipe(Stream destination = NULL);
```

Parameters:
* destination: [Stream](Stream.md), a specific writable destination to unpipe

Kept for Node.js compatibility; like [Stream.unpipe](Stream.md#unpipe) it currently has no effect on the pipes
already established.

--------------------------
### on
**Appends an event handler to the emitter**

```JavaScript
Object HttpMessage.on(Value ev,
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
Object HttpMessage.on(Object map);
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
Object HttpMessage.addListener(Value ev,
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
Object HttpMessage.addListener(Object map);
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
Object HttpMessage.addEventListener(Value ev,
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
Object HttpMessage.prependListener(Value ev,
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
Object HttpMessage.prependListener(Object map);
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
Object HttpMessage.once(Value ev,
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
Object HttpMessage.once(Object map);
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
Object HttpMessage.prependOnceListener(Value ev,
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
Object HttpMessage.prependOnceListener(Object map);
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
Object HttpMessage.off(Value ev,
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
Object HttpMessage.off(Value ev);
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
Object HttpMessage.off(Object map);
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
Object HttpMessage.removeListener(Value ev,
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
Object HttpMessage.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object HttpMessage.removeListener(Object map);
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
Object HttpMessage.removeEventListener(Value ev,
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
Object HttpMessage.removeAllListeners(Value ev);
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
Object HttpMessage.removeAllListeners(Array evs = []);
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
HttpMessage.setMaxListeners(Integer n);
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
Integer HttpMessage.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array HttpMessage.listeners(Value ev);
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
Array HttpMessage.rawListeners(Value ev);
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
Integer HttpMessage.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer HttpMessage.listenerCount(Value o,
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
Array HttpMessage.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean HttpMessage.emit(Value ev,
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
String HttpMessage.toString();
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
Value HttpMessage.toJSON(String key = "");
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
event HttpMessage.data(Buffer data);
```

Parameters:
* data: [Buffer](Buffer.md), the data read

Forwarded from the message body stream; it fires while the body is flowing (`resume`,
`pipe`, or a listener attached before the data is produced). The argument is a [Buffer](Buffer.md), or a
String once setEncoding was called.

--------------------------
### close
**Queries and binds the stream close event, equivalent to on("close", func);**

```JavaScript
event HttpMessage.close();
```

Forwarded from the body stream when it is closed; a message built in memory does not emit
it by itself.

--------------------------
### error
**Queries and binds the stream error event, equivalent to on("error", func);**

```JavaScript
event HttpMessage.error(Integer code);
```

Parameters:
* code: Integer, error code

Forwarded from the body stream; the listener receives the error payload of the stream,
whose code is the error number.

