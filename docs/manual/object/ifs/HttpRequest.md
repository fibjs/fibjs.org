# Object HttpRequest
The HTTP request message: what a server receives and what a client sends

An HttpRequest carries the request line (method, address, query string), the header
collection and the body, plus the live [HttpResponse](HttpResponse.md) it belongs to. The body API, the
header API and the connection metadata come from [HttpMessage](HttpMessage.md) and [Message](Message.md). In an
[http.Server](../../module/ifs/http.md#Server) handler the first argument is an HttpRequest and its response is the [object](object.md)
to answer with. Node.js exposes the server side as [http.IncomingMessage](../../module/ifs/http.md#IncomingMessage) and the client
side as http.ClientRequest; fibjs uses one class for both ([http.IncomingMessage](../../module/ifs/http.md#IncomingMessage) is an
alias) and adds the parsed query, cookies, form and href members.

Concepts:

- **Request line**: method is the verb, address is the [path](../../module/ifs/path.md) part (`/a/b`), queryString is
  the text after `?` and [url](../../module/ifs/url.md) joins the two; assigning [url](../../module/ifs/url.md) splits it at the first `?`.
  href rebuilds the absolute URL from X-Forwarded-Proto (or the TLS socket), the Host
  header and address/query, which is the fibjs equivalent of the WHATWG Request.url.
- **Parsed request data**: query is a [URLSearchParams](URLSearchParams.md) built from queryString, cookies is
  an [HttpCollection](HttpCollection.md) built from the Cookie header and form is a [FormData](FormData.md) built from the
  body according to Content-Type; each is parsed on first access and cached, so later
  changes of queryString or of the Cookie header do not refresh them.
- **Body**: inherited from [Message](Message.md); read, readAll, text, [json](../../module/ifs/json.md), pack, formData, bytes and
  blob consume the body in order and bodyUsed records that a streaming read happened. A
  body received from the network belongs to the connection; rewind req.body before
  reading it twice. The query/cookies/form getters parse without consuming the caller's
  view of the body.
- **Server side**: the parsed request is reused for every keep-alive request on the same
  connection; req.response is the same [HttpResponse](HttpResponse.md) the handler receives as its second
  argument, and req.socket/req.stream expose the connection.
- **Client side**: [http.request](../../module/ifs/http.md#request), [http.get](../../module/ifs/http.md#get) and the other asynchronous functions return the
  HttpRequest they queued; after completion its response property holds the same
  [HttpResponse](HttpResponse.md) delivered to the callback. abort() cancels that request.

Obtained from:
- the handler of an [http.Server](../../module/ifs/http.md#Server) — the first argument of every handler form;
- `new [http.Request](../../module/ifs/http.md#Request)()` — an empty request, filled by readFrom() or by direct assignment;
- `new [http.Request](../../module/ifs/http.md#Request)([url](../../module/ifs/url.md), options)` — a Fetch-style request for [http.fetch](../../module/ifs/http.md#fetch)() and the
  [http.Client](../../module/ifs/http.md#Client) methods; the whole URL is stored in address;
- `http.request(...)`, `http.get(...)` and their siblings — the queued client request
  whose response property receives the answer.

Example 1 — build a request and inspect the derived members:

```JavaScript
const http = require('http');

const req = new http.Request();
req.method = 'POST';
req.url = '/submit?tag=a&tag=b';
req.setHeader('Host', 'example.com');
req.appendHeader('Cookie', 'session=42');

console.log(req.address, req.queryString); // /submit tag=a&tag=b
console.log(req.query.getAll('tag').join(',')); // a,b
console.log(req.cookies.get('session')); // 42
console.log(req.href); // http://example.com/submit?tag=a&tag=b
```

Example 2 — a handler reads the query, the cookies and an urlencoded body:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    const res = req.response;
    if (req.address === '/echo') {
        res.json({
            q: req.query.get('q'),
            cookie: req.cookies.get('sid'),
            user: req.form.get('user')
        });
        return;
    }
    res.write('hi ' + req.query.get('name'));
});
server.start();
const port = server.socket.localPort;

console.log(http.getSync('http://127.0.0.1:' + port + '/?name=fibjs').text()); // hi fibjs

const echo = http.postSync('http://127.0.0.1:' + port + '/echo?q=1', {
    headers: {
        Cookie: 'sid=abc',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'user=lion'
});
console.log(JSON.stringify(echo.json())); // {"q":"1","cookie":"abc","user":"lion"}

server.stop();
```

Example 3 — a Fetch-style request handed to [http.fetch](../../module/ifs/http.md#fetch)():

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.write(req.method + ' ' + req.text());
});
server.start();
const port = server.socket.localPort;

const req = new http.Request('http://127.0.0.1:' + port + '/api', {
    method: 'POST',
    body: 'payload'
});
const res = http.fetch(req);
console.log(res.statusCode); // 200
console.log(res.text()); // POST payload

server.stop();
```

Notes:
- [Headers](Headers.md) parsed from the wire keep their original names; lookup through hasHeader,
  firstHeader and the [Headers](Headers.md) collection is case-insensitive.
- A Request built from a URL keeps the whole URL in address; use readFrom() when the
  message comes from a stream.

## Inheritance
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    Message [tooltip="Message", URL="Message.md", label="{Message|new Message()\l|TEXT\lBINARY\l|sent\lvalue\lparams\ltype\lbody\lbodyUsed\llength\lstream\llastError\l|read()\lreadAll()\lsetEncoding()\lwrite()\ltext()\larrayBuffer()\lblob()\lbytes()\ljson()\lpack()\lend()\lisEnded()\lclear()\lsendTo()\lreadFrom()\lclone()\lresume()\lpause()\lpipe()\lunpipe()\l|event data\levent close\levent error\l}"];
    HttpMessage [tooltip="HttpMessage", URL="HttpMessage.md", label="{HttpMessage|protocol\lheaders\lkeepAlive\lupgrade\lmaxHeadersCount\lmaxHeaderSize\lmaxChunkSize\lmaxBodySize\lsocket\lheadersSent\ltrailers\l|hasHeader()\lfirstHeader()\lallHeader()\lappendHeader()\lsetHeader()\lremoveHeader()\lgetHeader()\lgetHeaders()\laddTrailers()\lformData()\l}"];
    HttpRequest [tooltip="HttpRequest", fillcolor="lightgray", id="me", label="{HttpRequest|new HttpRequest()\l|response\lmethod\laddress\lurl\lhref\lqueryString\lcookies\lform\lquery\l|abort()\l}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> Message [dir=back];
    Message -> HttpMessage [dir=back];
    HttpMessage -> HttpRequest [dir=back];
}
```

## Constructors
        
### HttpRequest
**Creates an empty request**

```JavaScript
new HttpRequest();
```

The message starts as a GET request for "/" with no query string, protocol HTTP/1.1
and keepAlive on; the body is empty and the response [object](object.md) is created on first
access. Assign the members directly, or fill the request from a stream with the
inherited readFrom(). Use the URL or the copy constructor for the Web Request forms.

--------------------------
**Copies an existing request, optionally overriding members (Fetch API)**

```JavaScript
new HttpRequest(HttpRequest request,
    Object options = {});
```

Parameters:
* request: HttpRequest, the existing HttpRequest [object](object.md)
* options: Object, the override options; method, headers, body and keepAlive are read

The copy keeps method, address, query string, headers and body of the source; every
member present in options overrides it. An explicit headers value replaces the whole
header set of the copy (an empty [object](object.md) clears it) while undefined members keep the
source values, following WebIDL. A GET or HEAD result must not carry a body and
throws a TypeError (20024); a body is cloneable only when it is a seekable stream.
Matches the WHATWG `new Request(request, init)` form.

--------------------------
**Creates a client request from a URL and options (Fetch API)**

```JavaScript
new HttpRequest(String url,
    Object options = {});
```

Parameters:
* url: String, the request URL
* options: Object, the request options; see the detail for the keys that are read

The URL is stored in address exactly as given, because the client functions read the
target from that property. method defaults to GET; options accepts headers ([object](object.md)
or [Headers](Headers.md)), body, [json](../../module/ifs/json.md), pack, keepAlive, timeout, redirect, signal, streaming and
agent. A string body defaults to text/plain;charset=UTF-8 here, while the [http](../../module/ifs/http.md)
client functions use application/x-www-form-urlencoded for strings. A body with GET
or HEAD throws a TypeError (20024). Hand the request to [http.fetch](../../module/ifs/http.md#fetch)() or a Client.

## Static Methods
        
### addAbortListener
**Registers a one-shot abort handler on an [AbortSignal](AbortSignal.md)**

```JavaScript
static Object HttpRequest.addAbortListener(EventEmitter signal,
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
static Object HttpRequest.once(EventEmitter emitter,
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
static Object HttpRequest.on(EventEmitter emitter,
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
static Integer HttpRequest.defaultMaxListeners;
```

Defaults to 10. Assigning a value changes getMaxListeners() for every emitter that never
called setMaxListeners(); an emitter with an explicit limit keeps it. The limit is
informational: fibjs never warns when the number of listeners exceeds it.

## Constants
        
### TEXT
**[Message](Message.md) type 1, representing a text type**

```JavaScript
const HttpRequest.TEXT = 1;
```

Set `type` to this value on messages whose payload is text: [WebSocketMessage](WebSocketMessage.md) then delivers
`data` as a String, and application handlers can decode the body as text. The default type
of a new message is BINARY.

--------------------------
### BINARY
**[Message](Message.md) type 2, representing a binary type**

```JavaScript
const HttpRequest.BINARY = 2;
```

The default type of a new message. The payload is treated as raw bytes; a [WebSocketMessage](WebSocketMessage.md)
with this type delivers `data` as a [Buffer](Buffer.md).

## Properties
        
### response
**[HttpResponse](HttpResponse.md), The [HttpResponse](HttpResponse.md) bound to this request, read-only**

```JavaScript
readonly HttpResponse HttpRequest.response;
```

Server side: created on first access and the same [object](object.md) the handler receives as its
second argument, so either name writes the same reply. Client side: the asynchronous
[http](../../module/ifs/http.md) functions fill it with the response and deliver the same [object](object.md) to the callback,
so the property can be read after completion. A request built in memory and never
sent simply owns an empty 200 response.

Example — the response property of an asynchronous client request:

```JavaScript
const http = require('http');
const coroutine = require('coroutine');

const server = new http.Server(0, (req) => {
    req.response.write('pong');
});
server.start();
const port = server.socket.localPort;

let delivered = null;
const req = http.get('http://127.0.0.1:' + port + '/ping', (res) => {
    delivered = res;
});
while (delivered === null)
    coroutine.sleep(10);

console.log(req.response === delivered); // true
console.log(req.response.text()); // pong

server.stop();
```

--------------------------
### method
**String, Queries and sets the request method**

```JavaScript
String HttpRequest.method;
```

The value is stored verbatim: no uppercasing and no validation. The parser sets it
from the request line and the constructors default it to GET. [Routing](Routing.md), HEAD handling
and the [WebSocket](WebSocket.md) upgrade check compare it case-insensitively. Node.js exposes the
same value as IncomingMessage.method.

--------------------------
### address
**String, Queries and sets the request address, the [path](../../module/ifs/path.md) part of the request line**

```JavaScript
String HttpRequest.address;
```

A parsed server request stores only the [path](../../module/ifs/path.md) (`/a/b`) here and routing maps match
against it; the Fetch-style constructors store the whole URL instead because the
client functions read the target from this property. Changing it does not touch
queryString. Node.js IncomingMessage.url contains [path](../../module/ifs/path.md) and query together.

--------------------------
### url
**String, Queries and sets the [path](../../module/ifs/path.md) and query string together, as in /[path](../../module/ifs/path.md)?key=value**

```JavaScript
String HttpRequest.url;
```

Reading joins address and '?' + queryString when the query is not empty; assigning
splits the value at the first '?' and a value without '?' clears the query string.
Nothing is normalized or encoded here. Node.js IncomingMessage.url has the same read
shape but is not assignable.

--------------------------
### href
**String, The absolute URL of the request, read-only**

```JavaScript
readonly String HttpRequest.href;
```

Rebuilt on each access: the protocol comes from the X-Forwarded-Proto header when
present, otherwise from the TLS socket (https) or plain TCP ([http](../../module/ifs/http.md)); the authority
comes from the Host header, falling back to localhost, and the address and query
string are appended. It is the fibjs equivalent of the WHATWG Request.url.

Example — href follows the forwarded protocol and the Host header:

```JavaScript
const http = require('http');

const req = new http.Request();
req.url = '/items?page=2';
console.log(req.href); // http://localhost/items?page=2

req.setHeader('Host', 'api.example.com');
req.setHeader('X-Forwarded-Proto', 'https');
console.log(req.href); // https://api.example.com/items?page=2
```

--------------------------
### queryString
**String, Queries and sets the raw query string, the text after the ? character**

```JavaScript
String HttpRequest.queryString;
```

Stored without the leading '?', for example "a=1&b=2"; the parser fills it from the
request line and the setters of [url](../../module/ifs/url.md) update it. Assigning it does not refresh an
already parsed query [object](object.md). Node.js keeps the same text inside
IncomingMessage.url.

--------------------------
### cookies
**[HttpCollection](HttpCollection.md), The request cookies as an [HttpCollection](HttpCollection.md), read-only**

```JavaScript
readonly HttpCollection HttpRequest.cookies;
```

Parsed from the Cookie header on first access and cached; get(name) and all(name)
read the values while duplicate names keep every value. Changing the Cookie header
after the first access does not refresh the collection. Node.js does not parse
cookies on IncomingMessage.

--------------------------
### form
**[FormData](FormData.md), The request body parsed as a [FormData](FormData.md) [object](object.md), read-only**

```JavaScript
readonly FormData HttpRequest.form;
```

Parsed on first access according to Content-Type: application/x-www-form-urlencoded
and multipart/form-data (with a boundary) are accepted. A missing Content-Type
throws "Content-Type is missing", another type throws "unknown form format" and an
empty body gives an empty [FormData](FormData.md) (error 20024). The parse rewinds the seekable
body and does not set bodyUsed, so the body remains readable afterwards. Node.js has
no built-in form parsing.

Example — read an urlencoded form posted to a server:

```JavaScript
const http = require('http');

const req = new http.Request();
req.method = 'POST';
req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
req.write('name=lion&role=dev');

console.log(req.form.get('name')); // lion
console.log(req.form.get('role')); // dev
```

--------------------------
### query
**[URLSearchParams](URLSearchParams.md), The parsed query string as a [URLSearchParams](URLSearchParams.md) [object](object.md), read-only**

```JavaScript
readonly URLSearchParams HttpRequest.query;
```

Built once from queryString on first access and cached; get, getAll, has and the
iteration helpers read it, but changes made through the [URLSearchParams](URLSearchParams.md) [object](object.md) are
not written back to the request. Change queryString or [url](../../module/ifs/url.md) before the first access to
affect it. Node.js exposes no parsed query on IncomingMessage.

--------------------------
### protocol
**String, protocol version information, the allowed format is: HTTP/#.#**

```JavaScript
String HttpRequest.protocol;
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
readonly Headers HttpRequest.headers;
```

The live [Headers](Headers.md) collection of the message: the property itself cannot be replaced, but
the collection can be modified with its own methods (set, append, delete, ...) and the
change is reflected in the wire output. Parsed messages store keys lowercase, lookup is
case-insensitive either way. Node.js uses a plain [object](object.md) plus rawHeaders instead.

--------------------------
### keepAlive
**Boolean, queries and sets whether to keep the connection alive**

```JavaScript
Boolean HttpRequest.keepAlive;
```

Default true. Setting protocol above 1.0 turns it on and 1.0 turns it off, and appending
or parsing a Connection header updates it ('close' clears, 'keep-alive' and 'upgrade' set).
On output the value selects the Connection header written by sendTo. Node's IncomingMessage
has no such property, persistence belongs to the Agent.

--------------------------
### upgrade
**Boolean, queries and sets whether the protocol is upgraded**

```JavaScript
Boolean HttpRequest.upgrade;
```

Default false. Set when a Connection: Upgrade header is appended or parsed; the [WebSocket](WebSocket.md)
handshake relies on it. Node.js reports the same condition through the 'upgrade' event.

--------------------------
### maxHeadersCount
**Integer, queries and sets the maximum number of request headers, default is 128**

```JavaScript
Integer HttpRequest.maxHeadersCount;
```

The parser fails with error 20024 when a message carries more header lines than this; it
is used when reading requests. A negative value throws a RangeError (20006). Node.js has
an [http.Server](../../module/ifs/http.md#Server).maxHeadersCount property instead of a per-message one.

--------------------------
### maxHeaderSize
**Integer, queries and sets the maximum request header length, default is 8192**

```JavaScript
Integer HttpRequest.maxHeaderSize;
```

The maximum size in bytes of one header line accepted by the parser; a longer line fails
with error 20024. A negative value throws a RangeError (20006). Node.js supports the
[process](../../module/ifs/process.md)-wide --max-[http](../../module/ifs/http.md)-header-size setting instead.

--------------------------
### maxChunkSize
**Integer, queries and sets the maximum chunk size in MB, default is 2**

```JavaScript
Integer HttpRequest.maxChunkSize;
```

Bounds a single chunk of a chunked body while it is parsed: a larger chunk fails with
error 20024 ("[HttpMessage](HttpMessage.md): chunk is too huge."). 0 is accepted. Node.js has no equivalent
per-message setting.

--------------------------
### maxBodySize
**Integer, queries and sets the maximum body size in MB, default is 64**

```JavaScript
Integer HttpRequest.maxBodySize;
```

While parsing, a Content-Length or chunked body larger than this fails with error 20024
("[HttpMessage](HttpMessage.md): body is too huge."); -1 disables the limit and 0 reads no body at all. Set
it before readFrom. Node.js has no per-message body limit.

--------------------------
### socket
**[Stream](Stream.md), queries the source socket of the current [object](object.md)**

```JavaScript
readonly Stream HttpRequest.socket;
```

The underlying device stream the message was read from; null when the message was built in
memory and reset by clear(). It differs from stream (inherited from [Message](Message.md)), the buffered
wrapper the parser consumed. Node.js exposes socket on IncomingMessage only.

--------------------------
### headersSent
**Boolean, queries whether the headers have been sent**

```JavaScript
readonly Boolean HttpRequest.headersSent;
```

False for a message built in memory; sendTo and send set it to true when the start line
and headers were written to a stream. On a server response it is true once the reply left
the handler pipeline. Node's ServerResponse.headersSent has the same meaning.

--------------------------
### trailers
**[Headers](Headers.md), container holding the [http](../../module/ifs/http.md) trailer headers of the message, read-only property**

```JavaScript
readonly Headers HttpRequest.trailers;
```

A live [Headers](Headers.md) collection filled with the trailer section of a parsed chunked body and
used to queue outgoing trailers together with addTrailers; empty for messages without
trailers and reset by clear().

--------------------------
### sent
**Boolean, Whether the current message has been sent**

```JavaScript
readonly Boolean HttpRequest.sent;
```

The base [Message](Message.md) and [WebSocketMessage](WebSocketMessage.md) always report false; [HttpMessage](HttpMessage.md) reports the real
flag, which sendTo and send set when the message was written to a stream. Node.js has no
equivalent property on IncomingMessage.

--------------------------
### value
**String, The basic content of the message**

```JavaScript
String HttpRequest.value;
```

A free-form string that carries the value a handler dispatches on: [mq.Routing](../../module/ifs/mq.md#Routing) stores the
matched [path](../../module/ifs/path.md) or the captured value in it, and an HttpRequest mirrors its [path](../../module/ifs/path.md). Default is
an empty string.

--------------------------
### params
**NArray, The basic parameters of the message**

```JavaScript
readonly NArray HttpRequest.params;
```

Holds the capture groups that [mq.Routing](../../module/ifs/mq.md#Routing) fills when a pattern with capture groups matches;
the handler receives them here and as extra function arguments. The array is a read view:
writing into it from JavaScript does not change the message.

--------------------------
### type
**Integer, [Message](Message.md) type**

```JavaScript
Integer HttpRequest.type;
```

TEXT (1) or BINARY (2), BINARY by default; any integer is accepted. [WebSocketMessage](WebSocketMessage.md) uses
the value to decide whether `data` is a String or a [Buffer](Buffer.md), and [HttpResponse](HttpResponse.md) overrides the
property with the Fetch response type string ('basic', 'cors', 'error').

--------------------------
### body
**[Stream](Stream.md), The stream [object](object.md) containing the data part of the message**

```JavaScript
Stream HttpRequest.body;
```

A buffered body is seekable and can be read from the beginning more than once; assigning a
non-seekable stream makes the body streaming, so it can be consumed only once. The getter
returns null when the message has no body or when the buffered body is empty (size 0).

--------------------------
### bodyUsed
**Boolean, Queries whether the body of the message has been consumed**

```JavaScript
readonly Boolean HttpRequest.bodyUsed;
```

Set by the consuming readers (text, [json](../../module/ifs/json.md), pack, bytes, arrayBuffer, blob and, on an
[HttpMessage](HttpMessage.md), formData). A buffered body can still be read again after the flag is set; a
streaming body rejects a second consume with TypeError 20024 "body has already been
consumed". read and readAll do not set the flag.

--------------------------
### length
**Long, The length of the data part of the message**

```JavaScript
readonly Long HttpRequest.length;
```

The size in bytes of the buffered body, 0 when the message has no body. It is also 0 for a
streaming body (a response body received from a client), whose size is unknown until it is
read; Node.js exposes the size through the Content-Length header instead of a property.

--------------------------
### stream
**[Stream](Stream.md), Queries the stream [object](object.md) used when the message was read from**

```JavaScript
readonly Stream HttpRequest.stream;
```

The base [Message](Message.md) throws 20009; on an [HttpMessage](HttpMessage.md) and a [WebSocketMessage](WebSocketMessage.md) it is the buffered
stream the message was parsed from, and null when the message was built in memory. It is
distinct from socket, the underlying device stream of an HTTP message.

--------------------------
### lastError
**String, Queries and sets the last error of message processing**

```JavaScript
String HttpRequest.lastError;
```

A free-form string, empty by default; the base message never writes it, handler layers
such as [Chain](Chain.md) record a failure here. clear() preserves it.

## Methods
        
### abort
**Aborts the request and closes the underlying connection**

```JavaScript
HttpRequest.abort();
```

Closes the TCP socket or TLS stream the message was read from; a message built in
memory has no socket and the call is a no-op. On an asynchronous client request it
cancels the pending operation, which fails with error 20022 (Operation was aborted);
on a server request it drops the connection to the client.

--------------------------
### hasHeader
**checks whether a header of the specified key exists**

```JavaScript
Boolean HttpRequest.hasHeader(String name);
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
String HttpRequest.firstHeader(String name);
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
NObject HttpRequest.allHeader(String name = "");
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
HttpRequest.appendHeader(Object map);
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
HttpRequest.appendHeader(Headers headers);
```

Parameters:
* headers: [Headers](Headers.md), specifies the [Headers](Headers.md) [object](object.md) to append

Appends every value of the given collection in order, duplicates included; useful to merge
another message's headers into this one.

--------------------------
**appends a group of headers with the specified name; appending data does not modify the headers of an existing key**

```JavaScript
HttpRequest.appendHeader(String name,
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
HttpRequest.appendHeader(String name,
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
HttpRequest.setHeader(Object map);
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
HttpRequest.setHeader(Headers headers);
```

Parameters:
* headers: [Headers](Headers.md), specifies the [Headers](Headers.md) [object](object.md) to set

Clears every existing header first and copies the given collection, so the result contains
exactly its entries (duplicates preserved).

--------------------------
**sets a group of headers with the specified name; setting data modifies the value of the key and clears the remaining headers with the same key**

```JavaScript
HttpRequest.setHeader(String name,
    Array values);
```

Parameters:
* name: String, specifies the key to set
* values: Array, specifies the group of data to set

Replaces all values of the key with the given array.

--------------------------
**sets a header; setting data modifies the first value of the key and clears the remaining headers with the same key**

```JavaScript
HttpRequest.setHeader(String name,
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
HttpRequest.removeHeader(String name);
```

Parameters:
* name: String, specifies the key to delete

Case-insensitive; a missing key is ignored. Returns no data, like Node's
response.removeHeader.

--------------------------
### getHeader
**queries the first header of the specified key**

```JavaScript
Value HttpRequest.getHeader(String name);
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
NObject HttpRequest.getHeaders();
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
HttpRequest.addTrailers(Object headers);
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
FormData HttpRequest.formData() async;
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
Buffer HttpRequest.read(Integer bytes = -1) async;
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
Buffer HttpRequest.readAll() async;
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
Message HttpRequest.setEncoding(String encoding);
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
Integer HttpRequest.write(Buffer | String data) async;
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
String HttpRequest.text(String data) async;
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
String HttpRequest.text() async;
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
ArrayBuffer HttpRequest.arrayBuffer() async;
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
Blob HttpRequest.blob(String type = "") async;
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
Buffer HttpRequest.bytes() async;
```

Returns:
* [Buffer](Buffer.md), returns a [Buffer](Buffer.md) containing the data part of the message, or an empty [Buffer](Buffer.md) if there is no data

Consumes the body; a missing or empty body returns a zero-length [Buffer](Buffer.md). A second call on a
streaming body throws TypeError 20024, while a buffered body can be read again.

--------------------------
### json
**Writes the given data with JSON [encoding](../../module/ifs/encoding.md)**

```JavaScript
Variant HttpRequest.json(Value data) async;
```

Parameters:
* data: Value, the data to write

Returns:
* Variant, this method does not return data

Replaces the body with the JSON text produced by the [json](../../module/ifs/json.md) [module](../../module/ifs/module.md) (see [json.encode](../../module/ifs/json.md#encode)) and,
on an [HttpMessage](HttpMessage.md), sets the Content-Type header to application/[json](../../module/ifs/json.md). Throws when the value
cannot be encoded (for example a circular [object](object.md)). Returns no data.

--------------------------
**Parses the data in the message as JSON**

```JavaScript
Variant HttpRequest.json() async;
```

Returns:
* Variant, returns the parsing result

Consumes the body and parses it with the [json](../../module/ifs/json.md) [module](../../module/ifs/module.md); a missing body returns null and
invalid JSON throws a SyntaxError. On an [HttpMessage](HttpMessage.md) the Content-Type header must contain
"[json](../../module/ifs/json.md)", otherwise error 20024 is raised ("Content-Type is missing." or "Invalid content
type.").

--------------------------
### pack
**Writes the given data with [msgpack](../../module/ifs/msgpack.md) [encoding](../../module/ifs/encoding.md)**

```JavaScript
Variant HttpRequest.pack(Value data) async;
```

Parameters:
* data: Value, the data to write

Returns:
* Variant, this method does not return data

Replaces the body with the [msgpack](../../module/ifs/msgpack.md) [encoding](../../module/ifs/encoding.md) produced by the [msgpack](../../module/ifs/msgpack.md) [module](../../module/ifs/module.md) and, on an
[HttpMessage](HttpMessage.md), sets the Content-Type header to application/[msgpack](../../module/ifs/msgpack.md). Throws when the value
cannot be encoded. Returns no data.

--------------------------
**Parses the data in the message as [msgpack](../../module/ifs/msgpack.md)**

```JavaScript
Variant HttpRequest.pack() async;
```

Returns:
* Variant, returns the parsing result

Consumes the body and decodes it with the [msgpack](../../module/ifs/msgpack.md) [module](../../module/ifs/module.md); a missing body returns null and
invalid data throws. On an [HttpMessage](HttpMessage.md) the Content-Type header must be
application/[msgpack](../../module/ifs/msgpack.md) (parameters such as charset are ignored), otherwise error 20024 is
raised.

--------------------------
### end
**Marks the message as ended**

```JavaScript
Integer HttpRequest.end() async;
```

Returns:
* Integer, returns 0 on success

Sets the end flag and returns 0; it writes nothing and does not stop handler chains, the
flag is a state marker for application code, readable with isEnded. An HttpRequest reports
the state of its response when one is attached.

--------------------------
**Writes the given data and sets the end of current message processing**

```JavaScript
Integer HttpRequest.end(Buffer data) async;
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
Integer HttpRequest.end(Buffer data,
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
Integer HttpRequest.end(String data,
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
Boolean HttpRequest.isEnded();
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
HttpRequest.clear();
```

Resets the value, params, body and the end flag; type and lastError are preserved. An
[HttpMessage](HttpMessage.md) additionally resets protocol (back to HTTP/1.1), keepAlive, headers, trailers,
stream and socket state.

--------------------------
### sendTo
**Sends a formatted message to the given stream [object](object.md)**

```JavaScript
HttpRequest.sendTo(Stream stm,
    Object options = {}) async;
```

Parameters:
* stm: [Stream](Stream.md), the stream [object](object.md) that receives the formatted message
* options: Object, the sending options

The base [Message](Message.md) does not implement the wire format and throws 20009; HttpRequest,
[HttpResponse](HttpResponse.md) and [WebSocketMessage](WebSocketMessage.md) override it. For an [HttpResponse](HttpResponse.md) the options may contain
header_only (write the start line and the headers only, default false) and content_length
(add the Content-Length header when header_only is true, default true; it is an error
otherwise). HttpRequest ignores the options and always writes the complete request.

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
HttpRequest.readFrom(Stream stm,
    Object options = {}) async;
```

Parameters:
* stm: [Stream](Stream.md), the stream [object](object.md) from which the formatted message is read
* options: Object, the reading options

The base [Message](Message.md) does not implement the wire format and throws 20009; HttpRequest,
[HttpResponse](HttpResponse.md) and [WebSocketMessage](WebSocketMessage.md) override it. The HTTP implementations require a
[BufferedStream](BufferedStream.md) (error 20024 otherwise); the [HttpResponse](HttpResponse.md) options may contain header_only
(parse the status line and the headers without the body, default false).

--------------------------
### clone
**Copies the current message [object](object.md)**

```JavaScript
Message HttpRequest.clone();
```

Returns:
* [Message](Message.md), returns the copied message [object](object.md)

The base [Message](Message.md) and [HttpMessage](HttpMessage.md) are not cloneable directly and throw 20009; HttpRequest,
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
Message HttpRequest.resume();
```

Returns:
* [Message](Message.md), returns the message [object](object.md)

The body starts emitting `data` events and pipe destinations receive data; a buffered body
is read from its current position. Returns the message itself, so the call can be chained.

--------------------------
### pause
**Pauses the automatic reading mode of the message body stream**

```JavaScript
Message HttpRequest.pause();
```

Returns:
* [Message](Message.md), returns the message [object](object.md)

Kept for Node.js compatibility; like [Stream.pause](Stream.md#pause) it currently has no effect. The method
still returns the message so chainable code keeps working.

--------------------------
### pipe
**Pipes the message body stream data to a destination stream**

```JavaScript
Value HttpRequest.pipe(Value destination,
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
HttpRequest.unpipe(Stream destination = NULL);
```

Parameters:
* destination: [Stream](Stream.md), a specific writable destination to unpipe

Kept for Node.js compatibility; like [Stream.unpipe](Stream.md#unpipe) it currently has no effect on the pipes
already established.

--------------------------
### on
**Appends an event handler to the emitter**

```JavaScript
Object HttpRequest.on(Value ev,
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
Object HttpRequest.on(Object map);
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
Object HttpRequest.addListener(Value ev,
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
Object HttpRequest.addListener(Object map);
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
Object HttpRequest.addEventListener(Value ev,
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
Object HttpRequest.prependListener(Value ev,
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
Object HttpRequest.prependListener(Object map);
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
Object HttpRequest.once(Value ev,
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
Object HttpRequest.once(Object map);
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
Object HttpRequest.prependOnceListener(Value ev,
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
Object HttpRequest.prependOnceListener(Object map);
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
Object HttpRequest.off(Value ev,
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
Object HttpRequest.off(Value ev);
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
Object HttpRequest.off(Object map);
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
Object HttpRequest.removeListener(Value ev,
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
Object HttpRequest.removeListener(Value ev);
```

Parameters:
* ev: Value, the event name to unbind

Returns:
* Object, returns the event [object](object.md) itself for chaining

Alias of off(ev), provided for Node.js compatibility.

--------------------------
**Removes several event handlers from the emitter**

```JavaScript
Object HttpRequest.removeListener(Object map);
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
Object HttpRequest.removeEventListener(Value ev,
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
Object HttpRequest.removeAllListeners(Value ev);
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
Object HttpRequest.removeAllListeners(Array evs = []);
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
HttpRequest.setMaxListeners(Integer n);
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
Integer HttpRequest.getMaxListeners();
```

Returns:
* Integer, returns the default limit

Returns the value set by setMaxListeners(), or the [process](../../module/ifs/process.md)-wide defaultMaxListeners (10)
when no explicit value was set.

--------------------------
### listeners
**Returns a copy of the listener array of an event**

```JavaScript
Array HttpRequest.listeners(Value ev);
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
Array HttpRequest.rawListeners(Value ev);
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
Integer HttpRequest.listenerCount(Value ev);
```

Parameters:
* ev: Value, the event name to query

Returns:
* Integer, returns the number of listeners of the specified event

One-shot listeners count as one and an unknown event returns 0.

--------------------------
**Returns the number of listeners of an event on another [object](object.md)**

```JavaScript
Integer HttpRequest.listenerCount(Value o,
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
Array HttpRequest.eventNames();
```

Returns:
* Array, returns the array of event names

Only string-keyed events are reported; symbol-keyed events are omitted and numeric event
names are returned as numbers (Node.js also reports symbol events).

--------------------------
### emit
**Emits an event and returns whether a listener was called**

```JavaScript
Boolean HttpRequest.emit(Value ev,
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
String HttpRequest.toString();
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
Value HttpRequest.toJSON(String key = "");
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
event HttpRequest.data(Buffer data);
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
event HttpRequest.close();
```

Forwarded from the body stream when it is closed; a message built in memory does not emit
it by itself.

--------------------------
### error
**Queries and binds the stream error event, equivalent to on("error", func);**

```JavaScript
event HttpRequest.error(Integer code);
```

Parameters:
* code: Integer, error code

Forwarded from the body stream; the listener receives the error payload of the stream,
whose code is the error number.

