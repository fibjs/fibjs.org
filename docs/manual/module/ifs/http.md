# Module http
The http [module](module.md) provides HTTP client and server capabilities: creating HTTP/HTTPS servers, sending requests, handling requests and responses, cookies, proxies and compression

Main capabilities:

- **Servers**: `Server` and `createServer` create HTTP servers, `HttpsServer` serves HTTPS with a
  [SecureContext](../../object/ifs/SecureContext.md); `fileHandler` serves a directory as static files, `Repeater` forwards requests to
  another address and `Handler` wraps a handler for reuse;
- **Clients**: `Client` (alias `Agent`) creates an independent client with its own connection pool,
  cookies and defaults; `requestSync`, `getSync`, `postSync`, `delSync`, `putSync`, `patchSync` and
  `headSync` send requests synchronously and return an [HttpResponse](../../object/ifs/HttpResponse.md); `request`, `get`, `post`,
  `del`, `put`, `patch` and `head` send requests asynchronously and deliver the response through a
  callback or the `'response'` event; `fetch` implements the Web Fetch API, including `file:` URLs;
- **Messages**: `Request` (alias `IncomingMessage`), `Response` (alias `ServerResponse`), `Headers`
  and `Cookie`;
- **General information**: `STATUS_CODES` maps a status code to its reason phrase and `METHODS`
  lists the request methods supported by the parser.

Module-level properties (`keepAlive`, `timeout`, `enableCookie`, `autoRedirect`, `enableEncoding`,
`enableH2`, `maxHeadersCount`, `maxHeaderSize`, `maxChunkSize`, `maxBodySize`, `userAgent`,
`poolTimeout`, `maxFreeSockets`) configure the [module](module.md)-level client used by the functions above:
a change affects later requests, but [HttpClient](../../object/ifs/HttpClient.md) instances created with `new Client(...)` keep
their own settings.

Concepts:

- **Call styles**: fibjs is synchronous-first. `requestSync`/`getSync`/... block the current fiber
  and return the [HttpResponse](../../object/ifs/HttpResponse.md) directly. The event-style `request`/`get`/... return an [HttpRequest](../../object/ifs/HttpRequest.md)
  immediately and deliver the response later through the callback argument or the `'response'`
  event; `get` and `head` send automatically like Node.js `http.get`, while `request` and
  post/put/del/patch wait for `end()` before sending. Each returned [HttpRequest](../../object/ifs/HttpRequest.md) keeps the response
  in its `response` property as well.
- **keep-alive and connection reuse**: with `keepAlive` enabled (the default) a client returns a
  finished HTTP/1.1 connection to its pool and reuses it for later requests to the same host.
  Idle pooled connections expire after `poolTimeout` milliseconds and at most `maxFreeSockets`
  are kept. Set `keepAlive` to false for one connection per request. HTTP/2 sessions are cached
  separately and shared [process](process.md)-wide by origin, proxy, SNI and TLS identity (`enableH2`).
- **Chunked transfer [encoding](encoding.md)**: a request or response without a known `Content-Length` is sent
  with `Transfer-Encoding: chunked`; the body is streamed chunk by chunk and ends with the zero
  chunk. fibjs exposes the body as a stream in both directions, so large messages need not be
  buffered in memory.
- **Streaming**: request bodies can be a [SeekableStream](../../object/ifs/SeekableStream.md) (a rewindable stream such as
  [io.MemoryStream](io.md#MemoryStream) or [fs.createReadStream](fs.md#createReadStream)) or any value converted to a buffer; response bodies are
  read from `response.body` with `read`/`readAll`. A [SeekableStream](../../object/ifs/SeekableStream.md) body must be rewindable
  because a redirected request may be sent again.
- **Redirects**: with `autoRedirect` enabled (the default) the client follows 301, 302, 303, 307
  and 308 responses; 303 switches the method to GET and drops the body, other statuses keep the
  method and body. There is no redirect count limit: a URL seen before raises a cyclic redirect
  error. Set `autoRedirect` to false to receive the redirect response itself.
- **Timeouts**: `timeout` is the maximum time of a whole request in milliseconds; 0 (the default)
  means no timeout. The per-request `timeout` option overrides the client setting, and a timeout
  fails the request with error number 20021. `poolTimeout` only controls how long an idle pooled
  connection may be reused. An `AbortSignal` can cancel a request at any time and fails it with
  an AbortError (or a TimeoutError for [AbortSignal.timeout](../../object/ifs/AbortSignal.md#timeout)).
- **Compression**: with `enableEncoding` enabled (the default) the client sends
  `Accept-Encoding: gzip, deflate` and transparently decompresses gzip/deflate response bodies,
  removing the `Content-Encoding` and `Content-Length` headers. Set it to false to receive the
  compressed bytes. `fileHandler` can serve pre-compressed `file.ext.gz` files directly.
- **Cookies**: a client with `enableCookie` enabled (the default) stores the `Set-Cookie` headers
  of every response in its `cookies` list and sends the matching cookies back on later requests
  to the same domain and [path](path.md); cookies marked `secure` are only sent over HTTPS.
- **Proxy**: a client routes requests through the proxy from its `proxyEnv` [object](../../object/ifs/object.md) or, when
  `setGlobalProxyFromEnv` is called, from the [process](process.md) environment. `HTTP_PROXY`/`http_proxy`,
  `HTTPS_PROXY`/`https_proxy` and `NO_PROXY`/`no_proxy` are recognized. Connections to
  localhost, 127.0.0.1 and ::1 always bypass the proxy.
- **TLS options**: [HttpClient](../../object/ifs/HttpClient.md) accepts the options of [tls.createSecureContext](tls.md#createSecureContext) (such as `ca`,
  `cert`, `key`, `passphrase`, `ciphers`, `secureProtocol` and `rejectUnauthorized`), so an HTTPS
  client can trust a private CA or present a client certificate. Passing a [SecureContext](../../object/ifs/SecureContext.md) [object](../../object/ifs/object.md)
  creates the client directly from it.
- **Node.js differences**: `require('https')` returns this same [module](module.md), there is no separate
  https [module](module.md) and no `globalAgent`; the sync functions have no Node equivalent; Node has no
  cookie jar and does not follow redirects or decompress bodies automatically; a Node-style
  `request.setTimeout` only emits an event while a fibjs timeout fails the request; and Node
  options such as `auth`, `createConnection`, `lookup`, `family`, `insecureHTTPParser`,
  `joinDuplicateHeaders`, `localPort` and `socketPath` are not supported (basic authentication
  can be written into the URL as `http://user:pass@host/`).

Import:

```JavaScript
const http = require('http');
const https = require('https'); // require('https') === require('http')
```

Example 1 — a local server and a synchronous request:

```JavaScript
const http = require('http');

// port 0 lets the system choose a free port
const server = new http.Server(0, (req) => {
    req.response.write('Hello ' + req.address);
});

server.start();
const port = server.socket.localPort;

const resp = http.getSync('http://127.0.0.1:' + port + '/world');
console.log(resp.statusCode, resp.text()); // 200 Hello /world

server.stop();
```

Example 2 — POST JSON and read the response as JSON:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    const body = req.body ? req.body.readAll().toString() : '{}';
    req.response.json({
        method: req.method,
        received: JSON.parse(body)
    });
});

server.start();
const port = server.socket.localPort;
const url = 'http://127.0.0.1:' + port + '/api';

const resp = http.postSync(url, {
    json: {
        name: 'fibjs'
    }
});
console.log(resp.json()); // { method: 'POST', received: { name: 'fibjs' } }

server.stop();
```

Example 3 — event-style request and streaming response:

```JavaScript
const http = require('http');
const coroutine = require('coroutine');

const server = new http.Server(0, (req) => {
    req.response.write('first');
    req.response.write('second');
});

server.start();
const port = server.socket.localPort;

const done = new coroutine.Event();
// get() sends the request automatically; request()/post() need end()
http.get('http://127.0.0.1:' + port + '/stream', (resp) => {
    console.log(resp.body.read(5).toString()); // first
    console.log(resp.body.readAll().toString()); // second
    done.set();
});
done.wait();

server.stop();
```

Example 4 — redirects and per-request timeouts:

```JavaScript
const http = require('http');
const coroutine = require('coroutine');

const server = new http.Server(0, (req) => {
    if (req.address === '/old') {
        req.response.redirect('/new');
    } else if (req.address === '/slow') {
        coroutine.sleep(500);
        req.response.write('slow');
    } else {
        req.response.write('new target');
    }
});

server.start();
const port = server.socket.localPort;
const url = 'http://127.0.0.1:' + port;

console.log(http.getSync(url + '/old').text()); // new target

// a shorter client timeout fails with error 20021
const client = new http.Client({
    timeout: 100
});
try {
    client.getSync(url + '/slow');
} catch (e) {
    console.log(e.number, e.message);
}
client.destroy();

server.stop();
```

Notes:

- `requestSync` and its siblings return an [HttpResponse](../../object/ifs/HttpResponse.md) whose body is already available; the
  event-style functions return an [HttpRequest](../../object/ifs/HttpRequest.md), and its `response` property is filled when the
  response arrives.
- `maxChunkSize` (default 2 MB) limits one chunk of a chunked message; `maxBodySize` (default -1)
  limits the whole body in MB and `maxHeadersCount`/`maxHeaderSize` limit the request headers.
  A body that exceeds `maxBodySize` fails with error 20024.
- `http.cookies`, the [module](module.md) properties and the [module](module.md)-level request functions all operate on one
  hidden [global](global.md) client, so `http.cookies` only contains the cookies collected through them.
- `fileHandler` generates `Cache-Control`, `Last-Modified` and the gzip variants of files when
  asked to; see its own documentation for the options.

## Objects
        
### Request
**The [HttpRequest](../../object/ifs/HttpRequest.md) class, used to create request objects**

```JavaScript
HttpRequest http.Request;
```

Same [object](../../object/ifs/object.md) as the [HttpRequest](../../object/ifs/HttpRequest.md) class: `new [http.Request](http.md#Request)()` creates an empty request and
`new [http.Request](http.md#Request)([url](url.md), opts)` creates one from a URL and options following the Fetch Request
constructor. Node.js exposes the client-side counterpart as http.ClientRequest and the
server-side received message as [http.IncomingMessage](http.md#IncomingMessage) (the `IncomingMessage` alias below).

--------------------------
### IncomingMessage
**Compatibility alias, equivalent to [HttpRequest](../../object/ifs/HttpRequest.md)**

```JavaScript
HttpRequest http.IncomingMessage;
```

Provided so that code written for the Node.js name [http.IncomingMessage](http.md#IncomingMessage) keeps working; the
[object](../../object/ifs/object.md) is the [HttpRequest](../../object/ifs/HttpRequest.md) class itself, not a separate class.

--------------------------
### Response
**The [HttpResponse](../../object/ifs/HttpResponse.md) class, used to create response objects**

```JavaScript
HttpResponse http.Response;
```

Same [object](../../object/ifs/object.md) as the [HttpResponse](../../object/ifs/HttpResponse.md) class: servers build the reply through the `response`
property of an [HttpRequest](../../object/ifs/HttpRequest.md), and clients receive one from the sync request functions or from
`fetch`. Node.js calls the server-side reply [http.ServerResponse](http.md#ServerResponse) (the `ServerResponse` alias
below) and the client-side reply [http.IncomingMessage](http.md#IncomingMessage).

--------------------------
### ServerResponse
**Compatibility alias, equivalent to [HttpResponse](../../object/ifs/HttpResponse.md)**

```JavaScript
HttpResponse http.ServerResponse;
```

Provided so that code written for the Node.js name [http.ServerResponse](http.md#ServerResponse) keeps working; the
[object](../../object/ifs/object.md) is the [HttpResponse](../../object/ifs/HttpResponse.md) class itself, not a separate class.

--------------------------
### Headers
**The [Headers](../../object/ifs/Headers.md) class, a case-insensitive name/value collection**

```JavaScript
Headers http.Headers;
```

Same [object](../../object/ifs/object.md) as the [global](global.md) `Headers` class (the WHATWG Fetch interface) and as the `headers`
property of every [HttpMessage](../../object/ifs/HttpMessage.md). Name lookup is case-insensitive and duplicate names keep
their values in order; see the [Headers](../../object/ifs/Headers.md) interface for `get`/`set`/`append`/`has`/`delete`
and the iteration helpers.

--------------------------
### Cookie
**The [HttpCookie](../../object/ifs/HttpCookie.md) class, used to create cookie objects**

```JavaScript
HttpCookie http.Cookie;
```

Same [object](../../object/ifs/object.md) as the [HttpCookie](../../object/ifs/HttpCookie.md) class: `new [http.Cookie](http.md#Cookie)(name, value, opts)` creates one from
its parts, and every [HttpMessage](../../object/ifs/HttpMessage.md) exposes the cookies it carries through the `cookies`
property. Node.js has no cookie class; the cookie jar is a fibjs feature of [HttpClient](../../object/ifs/HttpClient.md).

--------------------------
### Server
**The [HttpServer](../../object/ifs/HttpServer.md) class, used to create HTTP servers**

```JavaScript
HttpServer http.Server;
```

Same [object](../../object/ifs/object.md) as the [HttpServer](../../object/ifs/HttpServer.md) class, which derives from [TcpServer](../../object/ifs/TcpServer.md): `new [http.Server](http.md#Server)(port,
handler)` binds a port immediately and `new [http.Server](http.md#Server)(handler)` requires `listen()` before
it serves. Use `HttpsServer` for TLS; Node.js exposes the same role as [http.Server](http.md#Server) with
`createServer`.

--------------------------
### Client
**The [HttpClient](../../object/ifs/HttpClient.md) class, used to create independent HTTP clients**

```JavaScript
HttpClient http.Client;
```

`new [http.Client](http.md#Client)(options)` creates a client with its own connection pool, cookie jar and
defaults; the [module](module.md)-level request functions use a hidden client with the [module](module.md) properties
as its configuration. Node.js splits this role between [http.Agent](http.md#Agent) (connection pooling) and
http.globalAgent (the shared default), which fibjs has no direct equivalent of.

--------------------------
### Agent
**Compatibility alias, equivalent to [HttpClient](../../object/ifs/HttpClient.md)**

```JavaScript
HttpClient http.Agent;
```

Provided so that code written for the Node.js name [http.Agent](http.md#Agent) keeps working; the [object](../../object/ifs/object.md) is
the [HttpClient](../../object/ifs/HttpClient.md) class itself. A client can be passed to a single request with the `agent`
option instead of being used for every request.

--------------------------
### HttpsServer
**The [HttpsServer](../../object/ifs/HttpsServer.md) class, used to create HTTPS servers**

```JavaScript
HttpsServer http.HttpsServer;
```

Same [object](../../object/ifs/object.md) as the [HttpsServer](../../object/ifs/HttpsServer.md) class, which combines [TcpServer](../../object/ifs/TcpServer.md) with a [SecureContext](../../object/ifs/SecureContext.md);
Node.js exposes the same role through https.createServer and https.Server.

--------------------------
### Handler
**Creates an http protocol handler [object](../../object/ifs/object.md), see [HttpHandler](../../object/ifs/HttpHandler.md)**

```JavaScript
HttpHandler http.Handler;
```

Same [object](../../object/ifs/object.md) as the [HttpHandler](../../object/ifs/HttpHandler.md) class, which wraps a plain function into a handler [object](../../object/ifs/object.md)
that can be mounted on a server, a [Chain](../../object/ifs/Chain.md) or a [Routing](../../object/ifs/Routing.md); Node.js has no equivalent class.

--------------------------
### Repeater
**Creates an http request repeater [object](../../object/ifs/object.md), see [HttpRepeater](../../object/ifs/HttpRepeater.md)**

```JavaScript
HttpRepeater http.Repeater;
```

Same [object](../../object/ifs/object.md) as the [HttpRepeater](../../object/ifs/HttpRepeater.md) class, which forwards requests to another http(s) address;
Node.js has no equivalent class.

## Static Methods
        
### createServer
**Creates an http server**

```JavaScript
static HttpServer http.createServer(Function(HttpRequest req, HttpResponse res) => Value hdlr);
```

Parameters:
* hdlr: [Handler](../../object/ifs/Handler.md) | [Handler](../../object/ifs/Handler.md)[] | Function([HttpRequest](../../object/ifs/HttpRequest.md) req, [HttpResponse](../../object/ifs/HttpResponse.md) res) => Value | Object | String, the request handler

Returns:
* [HttpServer](../../object/ifs/HttpServer.md), returns an [HttpServer](../../object/ifs/HttpServer.md) [object](../../object/ifs/object.md) that is not bound to a port; call listen() to start it

hdlr may be given in any of these forms:
- a [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md), invoked as it is;
- an array of handlers, wrapped in a [Chain](../../object/ifs/Chain.md) and invoked in order;
- a handler function `(req, res) => any`, called with the [HttpRequest](../../object/ifs/HttpRequest.md) and the [HttpResponse](../../object/ifs/HttpResponse.md) of each request;
- a routing map [object](../../object/ifs/object.md), whose keys are match patterns and whose values are handlers in these same forms (see [mq.Routing](mq.md#Routing)); a function value is called as `(req, ...captures, res) => any`, with the captured groups between the request and the response (also readable as req.params);
- a [path](path.md) or address string: a directory served as static files, or an `http(s)://` address forwarded by a repeater.

The returned server is not bound to a port: call `listen(port)` (or `start()` after a port
was given to the constructor) to serve requests. Node.js `http.createServer` accepts only
the function form and returns a server that must be started with `listen()` as well.

Example — a router map with captured segments:

```JavaScript
const http = require('http');

const server = http.createServer({
    '/hello/:name': (req, name) => {
        req.response.write('Hello ' + name);
    }
});

server.listen(0);
const port = server.socket.localPort;
console.log(http.getSync('http://127.0.0.1:' + port + '/hello/fibjs').text());

server.stop();
```

--------------------------
**Creates an https server**

```JavaScript
static HttpServer http.createServer(Object | SecureContext options,
    Function(HttpRequest req, HttpResponse res) => Value hdlr);
```

Parameters:
* options: Object | [SecureContext](../../object/ifs/SecureContext.md), the secure context or the TLS options used to create one
* hdlr: [Handler](../../object/ifs/Handler.md) | [Handler](../../object/ifs/Handler.md)[] | Function([HttpRequest](../../object/ifs/HttpRequest.md) req, [HttpResponse](../../object/ifs/HttpResponse.md) res) => Value | Object | String, the request handler

Returns:
* [HttpServer](../../object/ifs/HttpServer.md), returns an [HttpsServer](../../object/ifs/HttpsServer.md) [object](../../object/ifs/object.md) that is not bound to a port; call listen() to start it

options configures the TLS connection: the [SecureContext](../../object/ifs/SecureContext.md) [object](../../object/ifs/object.md) used by the server,
or the TLS options [object](../../object/ifs/object.md) used to create one (the same [object](../../object/ifs/object.md) [tls.createSecureContext](tls.md#createSecureContext)
accepts, for example `cert`, `key`, `ca` and `passphrase`).

hdlr may be given in the same forms as [http.createServer](http.md#createServer):
- a [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md), invoked as it is;
- an array of handlers, wrapped in a [Chain](../../object/ifs/Chain.md) and invoked in order;
- a handler function `(req, res) => any`, called with the [HttpRequest](../../object/ifs/HttpRequest.md) and the [HttpResponse](../../object/ifs/HttpResponse.md) of each request;
- a routing map [object](../../object/ifs/object.md), whose keys are match patterns and whose values are handlers in these same forms (see [mq.Routing](mq.md#Routing)); a function value is called as `(req, ...captures, res) => any`, with the captured groups between the request and the response (also readable as req.params);
- a [path](path.md) or address string: a directory served as static files, or an `http(s)://` address forwarded by a repeater.

--------------------------
### fileHandler
**Creates an http static file handler to respond to http messages with static files**

```JavaScript
static Handler http.fileHandler(String root,
    Boolean autoIndex = false);
```

Parameters:
* root: String, file root [path](path.md)
* autoIndex: Boolean, whether browsing directory files is supported, default false, not supported

Returns:
* [Handler](../../object/ifs/Handler.md), returns a static file handler for processing http messages

fileHandler supports gzip pre-compression: when the request accepts gzip [encoding](encoding.md) and a filename.ext.gz file exists at the same [path](path.md), this file is returned directly,
thus avoiding server load caused by repeated compression. Directory requests serve
index.html when it exists, and `autoIndex` additionally allows listing the directory when
no index file is found.

--------------------------
**Creates an http static file handler to respond to http messages with static files**

```JavaScript
static Handler http.fileHandler(String root,
    Object options = {});
```

Parameters:
* root: String, file root [path](path.md)
* options: Object, configuration options, see above for the fields

Returns:
* [Handler](../../object/ifs/Handler.md), returns a static file handler for processing http messages

fileHandler supports gzip pre-compression: when the request accepts gzip [encoding](encoding.md) and a filename.ext.gz file exists at the same [path](path.md), this file is returned directly,
thus avoiding server load caused by repeated compression.

Meanings of the options fields:
- autoIndex: Boolean, whether browsing directory files is supported, default false, not supported
- maxAge: Integer, cache time in seconds, default 0, meaning cache-related response headers are not generated automatically
- immutable: Boolean, when true, appends the immutable directive to the automatically generated Cache-Control, default false
- cacheControl: Boolean, whether to generate Cache-Control automatically, default true; generated as public, max-age=N only when maxAge is greater than 0 and the response does not already carry Cache-Control
- headers: Object, declares response headers by glob pattern, in the form { '<pattern>': { '<header-name>': '<value>' } }; patterns match request paths relative to root
  (without a leading /, directory requests match as index.html), with the same glob semantics as [path.matchesGlob](path.md#matchesGlob) (* does not cross directories, ** can cross any level);
  rules match in declaration order, the first match takes effect

For example, to make the entry page non-cacheable and long-cache static assets with a hash:

```JavaScript
// fragment: options
http.fileHandler('/home/frontend/assets/', {
    maxAge: 31536000,
    immutable: true,
    headers: {
        'index.html': {
            'Cache-Control': 'no-cache'
        },
        'sw.js': {
            'Cache-Control': 'no-cache'
        }
    }
})
```

Example — serve a temporary directory:

```JavaScript
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-http-'));
fs.writeFile(path.join(dir, 'index.html'), '<h1>hello</h1>');

const server = new http.Server(0, http.fileHandler(dir));
server.start();
const port = server.socket.localPort;

const resp = http.getSync('http://127.0.0.1:' + port + '/index.html');
console.log(resp.statusCode, resp.firstHeader('Content-Type'));

server.stop();
fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### request
**Sends an [HttpRequest](../../object/ifs/HttpRequest.md) over an existing stream and returns it with the response**

```JavaScript
static HttpRequest http.request(Stream conn,
    HttpRequest req);
```

Parameters:
* conn: [Stream](../../object/ifs/Stream.md), the stream [object](../../object/ifs/object.md) to [process](process.md) the request
* req: [HttpRequest](../../object/ifs/HttpRequest.md), the [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) to send

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns req, whose response property receives the server response

This low-level form writes `req` to `conn` — any connected [Stream](../../object/ifs/Stream.md) such as a [net.Socket](net.md#Socket) or a
[TLSSocket](../../object/ifs/TLSSocket.md) — instead of creating a connection from a URL; it blocks until the response is
received and returns the same [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) whose `response` property holds the reply.

The option-based overloads below are the usual entry points:
- `request(opts)`, `request([url](url.md), opts)` and `request(method, [url](url.md), opts)` return an [HttpRequest](../../object/ifs/HttpRequest.md)
  without sending it; `end()` sends it and the response arrives through the callback or the
  `'response'` event;
- the forms taking a callback register it before returning the request.

opts supports the following fields:

```JavaScript
// fragment: options
({
    method: 'GET', // request method, used by the opts-only form
    protocol: 'http', // URL override fields: protocol/host/hostname/port/pathname/path/query/auth
    hostname: '',
    port: 80,
    pathname: '/',
    query: {},
    headers: {}, // Headers object or plain object, added to the generated headers
    body: null, // SeekableStream | Buffer | String | Object | FormData | URLSearchParams | Blob
    json: null, // encoded as JSON, Content-Type: application/json
    pack: null, // encoded as msgpack, Content-Type: application/msgpack
    keepAlive: undefined, // overrides the client keepAlive for this request
    timeout: undefined, // request timeout in ms, overrides the client timeout
    signal: null, // AbortSignal used to cancel the request
    agent: null // HttpClient that sends this request
})
```

body, [json](json.md) and pack are mutually exclusive; `query` replaces the query string of the URL
instead of merging with it. A string body is sent as application/x-www-form-urlencoded, a
[Buffer](../../object/ifs/Buffer.md) as application/octet-stream, a plain [object](../../object/ifs/object.md) or [FormData](../../object/ifs/FormData.md) as multipart/form-data with a
generated boundary, and [URLSearchParams](../../object/ifs/URLSearchParams.md) as application/x-www-form-urlencoded.

Example — the event style, sending with end():

```JavaScript
const http = require('http');
const coroutine = require('coroutine');

const server = new http.Server(0, (req) => {
    req.response.write('received: ' + (req.body ? req.body.readAll().toString() : ''));
});
server.start();
const port = server.socket.localPort;

const done = new coroutine.Event();
const req = http.request('POST', 'http://127.0.0.1:' + port + '/echo', (resp) => {
    console.log(resp.text()); // received: hello
    done.set();
});
req.end('hello'); // request() does not send before end()
done.wait();

server.stop();
```

--------------------------
### requestSync
**Requests the [url](url.md) specified by opts and returns the result**

```JavaScript
static HttpResponse http.requestSync(Object opts) async;
```

Parameters:
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

The request is sent through the [module](module.md)-level client and blocks the current fiber until the
response is received; the returned [HttpResponse](../../object/ifs/HttpResponse.md) has its body ready to read. All URL fields
can be given in opts instead of a [url](url.md) argument.

opts supports the following fields:

```JavaScript
// fragment: options
({
    method: 'GET', // request method, used by the opts-only form
    protocol: 'http', // URL override fields: protocol/host/hostname/port/pathname/path/query/auth
    hostname: '',
    port: 80,
    pathname: '/',
    query: {},
    headers: {}, // Headers object or plain object, added to the generated headers
    body: null, // SeekableStream | Buffer | String | Object | FormData | URLSearchParams | Blob
    json: null, // encoded as JSON, Content-Type: application/json
    pack: null, // encoded as msgpack, Content-Type: application/msgpack
    keepAlive: undefined, // overrides the client keepAlive for this request
    timeout: undefined, // request timeout in ms, overrides the client timeout
    signal: null, // AbortSignal used to cancel the request
    agent: null // HttpClient that sends this request
})
```

body, [json](json.md) and pack are mutually exclusive. A string body is sent as
application/x-www-form-urlencoded, a [Buffer](../../object/ifs/Buffer.md) as application/octet-stream, a plain [object](../../object/ifs/object.md) or
[FormData](../../object/ifs/FormData.md) as multipart/form-data with a generated boundary, and [URLSearchParams](../../object/ifs/URLSearchParams.md) as
application/x-www-form-urlencoded; a [SeekableStream](../../object/ifs/SeekableStream.md) is sent as it is and must be rewindable
because a redirect may send it again. `query` replaces the query string of the URL instead
of merging with it. Without body/[json](json.md)/pack the request carries no body.

Example — a synchronous POST with a JSON body and a query string:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.json({
        method: req.method,
        url: req.url,
        body: req.json()
    });
});
server.start();
const port = server.socket.localPort;

const resp = http.requestSync('POST', 'http://127.0.0.1:' + port + '/items', {
    json: {
        name: 'book'
    },
    query: {
        page: '1'
    }
});
console.log(resp.statusCode, resp.json());

server.stop();
```

--------------------------
**Requests the specified [url](url.md) with the GET method and returns the result, equivalent to request("GET", ...)**

```JavaScript
static HttpResponse http.requestSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. The opts fields of
requestSync(opts) apply here as well: [url](url.md) provides protocol, host, port and [path](path.md), and the
fields in opts override the corresponding parts of it.

--------------------------
**Requests the specified [url](url.md) and returns the result**

```JavaScript
static HttpResponse http.requestSync(String method,
    String url,
    Object opts = {}) async;
```

Parameters:
* method: String, the http request method: GET, POST, etc.
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. This is the general form:
method selects the request method (default GET) and opts carries the option fields
documented on requestSync(opts).

Example — send a DELETE request:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.write(req.method + ' ' + req.address);
});
server.start();
const port = server.socket.localPort;

const resp = http.requestSync('DELETE', 'http://127.0.0.1:' + port + '/items/1');
console.log(resp.text()); // DELETE /items/1

server.stop();
```

--------------------------
### request
**Requests the [url](url.md) specified by opts and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(Object opts);
```

Parameters:
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end()` to send it. The response arrives through the
callback given here or registered later, or through the `'response'` event; it is also
stored in the `response` property. The opts fields are documented on request([Stream](../../object/ifs/Stream.md),
[HttpRequest](../../object/ifs/HttpRequest.md)), which is the first request overload; unlike `get`, a request built by this
function or by post/put/del/patch is not sent automatically.

--------------------------
**Requests the [url](url.md) specified by opts, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The callback is called with the [HttpResponse](../../object/ifs/HttpResponse.md) when the response arrives. The returned
request must still be sent with `end()`; see the first request overload for the opts fields.

--------------------------
**Requests the specified [url](url.md), registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The method defaults to GET. The returned request must still be sent with `end()`; the
callback receives the [HttpResponse](../../object/ifs/HttpResponse.md) when the response arrives.

--------------------------
**Requests the specified [url](url.md) and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end()` to send it; the response is delivered to the
callback (when given), to the `'response'` event and to the `response` property. This form
is the async counterpart of requestSync([url](url.md), opts); use `get([url](url.md), opts)` when the method is
GET and the request should be sent automatically.

--------------------------
**Requests the specified [url](url.md), registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The method defaults to GET and the returned request must still be sent with `end()`; the
callback is called with the [HttpResponse](../../object/ifs/HttpResponse.md). See the first request overload for the opts fields.

--------------------------
**Requests the specified [url](url.md), registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* method: String, the http request method: GET, POST, etc.
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback is called with the
[HttpResponse](../../object/ifs/HttpResponse.md) when it arrives.

--------------------------
**Requests the specified [url](url.md), registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Object opts = {});
```

Parameters:
* method: String, the http request method: GET, POST, etc.
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The general option form of the request family; the returned request must still be sent with
`end()`. See the first request overload for the opts fields.

--------------------------
**Requests the specified [url](url.md), registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* method: String, the http request method: GET, POST, etc.
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback is called with the
[HttpResponse](../../object/ifs/HttpResponse.md). See the first request overload for the opts fields.

--------------------------
### getSync
**Requests the specified [url](url.md) with the GET method and returns the result, equivalent to request("GET", ...)**

```JavaScript
static HttpResponse http.getSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. A GET request carries no
body, so body/[json](json.md)/pack are not accepted; the other opts fields of requestSync(opts) apply.

opts supports the following fields:

```JavaScript
// fragment: options
({
    protocol: 'http', // URL override fields: protocol/host/hostname/port/pathname/path/query/auth
    hostname: '',
    port: 80,
    pathname: '/',
    query: {},
    headers: {}, // Headers object or plain object, added to the generated headers
    keepAlive: undefined, // overrides the client keepAlive for this request
    timeout: undefined, // request timeout in ms, overrides the client timeout
    signal: null, // AbortSignal used to cancel the request
    agent: null // HttpClient that sends this request
})
```

Example — a GET request with a query string:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.write('search: ' + req.query.get('q'));
});
server.start();
const port = server.socket.localPort;

const resp = http.getSync('http://127.0.0.1:' + port + '/search', {
    query: {
        q: 'fibjs'
    }
});
console.log(resp.text()); // search: fibjs

server.stop();
```

--------------------------
### get
**Requests the specified [url](url.md) with the GET method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.get(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

Like Node.js [http.get](http.md#get), the returned request is sent automatically without calling `end()`;
the response is delivered to the callback or the `'response'` event and stored in the
`response` property. A GET request carries no body.

opts supports the following fields:

```JavaScript
// fragment: options
({
    protocol: 'http', // URL override fields: protocol/host/hostname/port/pathname/path/query/auth
    hostname: '',
    port: 80,
    pathname: '/',
    query: {},
    headers: {}, // Headers object or plain object, added to the generated headers
    keepAlive: undefined, // overrides the client keepAlive for this request
    timeout: undefined, // request timeout in ms, overrides the client timeout
    signal: null, // AbortSignal used to cancel the request
    agent: null // HttpClient that sends this request
})
```

--------------------------
**Requests the specified [url](url.md) with the GET method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.get(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The request is sent automatically (no `end()` needed), like Node.js [http.get](http.md#get); the callback
receives the [HttpResponse](../../object/ifs/HttpResponse.md) when it arrives. See the get([url](url.md), opts) overload for the options.

--------------------------
**Requests the specified [url](url.md) with the GET method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.get(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The request is sent automatically without calling `end()`; the callback receives the
[HttpResponse](../../object/ifs/HttpResponse.md) when it arrives, the same behavior as `http.get` in Node.js.

--------------------------
### postSync
**Requests the specified [url](url.md) with the POST method and returns the result, equivalent to request("POST", ...)**

```JavaScript
static HttpResponse http.postSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. The request body is given
by body, [json](json.md) or pack.

opts supports the following fields:

```JavaScript
// fragment: options
({
    protocol: 'http', // URL override fields: protocol/host/hostname/port/pathname/path/query/auth
    hostname: '',
    port: 80,
    pathname: '/',
    query: {},
    headers: {}, // Headers object or plain object, added to the generated headers
    body: null, // SeekableStream | Buffer | String | Object | FormData | URLSearchParams | Blob
    json: null, // encoded as JSON, Content-Type: application/json
    pack: null, // encoded as msgpack, Content-Type: application/msgpack
    keepAlive: undefined, // overrides the client keepAlive for this request
    timeout: undefined, // request timeout in ms, overrides the client timeout
    signal: null, // AbortSignal used to cancel the request
    agent: null // HttpClient that sends this request
})
```

body, [json](json.md) and pack are mutually exclusive. A string body is sent as
application/x-www-form-urlencoded, a [Buffer](../../object/ifs/Buffer.md) as application/octet-stream, a plain [object](../../object/ifs/object.md) or
[FormData](../../object/ifs/FormData.md) as multipart/form-data with a generated boundary, and [URLSearchParams](../../object/ifs/URLSearchParams.md) as
application/x-www-form-urlencoded.

Example — post JSON and read the JSON response:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.json({
        echo: req.json()
    });
});
server.start();
const port = server.socket.localPort;

const resp = http.postSync('http://127.0.0.1:' + port + '/echo', {
    json: {
        n: 1
    }
});
console.log(resp.json()); // { echo: { n: 1 } }

server.stop();
```

--------------------------
### post
**Requests the specified [url](url.md) with the POST method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.post(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end(data)` or `end()` to send it (the body may also
be given by the body/[json](json.md)/pack options); the response is delivered to the callback or the
`'response'` event. See the request([Stream](../../object/ifs/Stream.md), [HttpRequest](../../object/ifs/HttpRequest.md)) overload for the opts fields.

--------------------------
**Requests the specified [url](url.md) with the POST method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.post(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md).
The body may be passed to `end(data)` or given by the body/[json](json.md)/pack options.

--------------------------
**Requests the specified [url](url.md) with the POST method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.post(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md)
when it arrives.

--------------------------
### delSync
**Requests the specified [url](url.md) with the DELETE method and returns the result, equivalent to request("DELETE", ...)**

```JavaScript
static HttpResponse http.delSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. A DELETE request normally
has no body, but a body may be given like with postSync. The opts fields are the same as
postSync([url](url.md), opts); see requestSync(opts) for the field list.

--------------------------
### del
**Requests the specified [url](url.md) with the DELETE method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.del(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end()` to send it. The opts fields are the same as
post([url](url.md), opts); see the first request overload for the field list.

--------------------------
**Requests the specified [url](url.md) with the DELETE method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.del(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md).

--------------------------
**Requests the specified [url](url.md) with the DELETE method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.del(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md)
when it arrives.

--------------------------
### putSync
**Requests the specified [url](url.md) with the PUT method and returns the result, equivalent to request("PUT", ...)**

```JavaScript
static HttpResponse http.putSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. PUT replaces the target
resource with the request body, which is given by the body/[json](json.md)/pack fields like with
postSync; see requestSync(opts) for the field list.

--------------------------
### put
**Requests the specified [url](url.md) with the PUT method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.put(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end(data)` or `end()` to send it. The opts fields
are the same as post([url](url.md), opts).

--------------------------
**Requests the specified [url](url.md) with the PUT method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.put(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md).

--------------------------
**Requests the specified [url](url.md) with the PUT method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.put(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md)
when it arrives.

--------------------------
### patchSync
**Requests the specified [url](url.md) with the PATCH method and returns the result, equivalent to request("PATCH", ...)**

```JavaScript
static HttpResponse http.patchSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. PATCH applies a partial
update with the request body, which is given by the body/[json](json.md)/pack fields like with
postSync; see requestSync(opts) for the field list.

--------------------------
### patch
**Requests the specified [url](url.md) with the PATCH method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.patch(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

The returned request is not sent: call `end(data)` or `end()` to send it. The opts fields
are the same as post([url](url.md), opts).

--------------------------
**Requests the specified [url](url.md) with the PATCH method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.patch(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md).

--------------------------
**Requests the specified [url](url.md) with the PATCH method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.patch(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The returned request must still be sent with `end()`; the callback receives the [HttpResponse](../../object/ifs/HttpResponse.md)
when it arrives.

--------------------------
### headSync
**Requests the specified [url](url.md) with the HEAD method and returns the result, equivalent to request("HEAD", ...)**

```JavaScript
static HttpResponse http.headSync(String url,
    Object opts = {}) async;
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response

Blocks the current fiber and returns the [HttpResponse](../../object/ifs/HttpResponse.md) directly. A HEAD response carries the
status and headers of the equivalent GET but no body, so `resp.body` is empty; unlike GET,
a HEAD response with a large Content-Length is not rejected by maxBodySize. The opts fields
are the same as getSync([url](url.md), opts).

--------------------------
### head
**Requests the specified [url](url.md) with the HEAD method and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.head(String url,
    Object opts = {});
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md) (listen to the 'response' event to receive the response)

Like get(), the returned request is sent automatically without calling `end()`; only the
status and headers of the response are received. See the get([url](url.md), opts) overload for the
options.

--------------------------
**Requests the specified [url](url.md) with the HEAD method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.head(String url,
    Object opts,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* opts: Object, the additional information
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The request is sent automatically without calling `end()`; the callback receives the
[HttpResponse](../../object/ifs/HttpResponse.md) when the headers arrive. See the get([url](url.md), opts) overload for the options.

--------------------------
**Requests the specified [url](url.md) with the HEAD method, registers a callback to receive the response, and returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpRequest http.head(String url,
    Function(HttpResponse resp) callback);
```

Parameters:
* url: String, the [url](url.md) to request; must be a complete [url](url.md) including the host
* callback: Function([HttpResponse](../../object/ifs/HttpResponse.md) resp), response callback function, receives [HttpResponse](../../object/ifs/HttpResponse.md) as a parameter

Returns:
* [HttpRequest](../../object/ifs/HttpRequest.md), returns an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md)

The request is sent automatically without calling `end()`; the callback receives the
[HttpResponse](../../object/ifs/HttpResponse.md) when it arrives.

--------------------------
### setGlobalProxyFromEnv
**Dynamically configures proxy support from environment variables**

```JavaScript
static Function() => Value http.setGlobalProxyFromEnv(Object proxyEnv = {});
```

Parameters:
* proxyEnv: Object, [object](../../object/ifs/object.md) containing the proxy configuration. If not provided, [process.env](process.md#env) is read.

Returns:
* Function() => Value, a callable function used to restore the original proxy configuration

Reads the proxy configuration and applies it to the [module](module.md)-level client, as an alternative
to starting the [process](process.md) with the --use-env-proxy flag. When proxyEnv is omitted or empty
the real [process](process.md) environment is read (the lowercase name wins when both cases are set);
when proxyEnv has properties, only they are used and an empty value clears the setting.
The recognized names are http_proxy/HTTP_PROXY, https_proxy/HTTPS_PROXY and
no_proxy/NO_PROXY. Connections to localhost, 127.0.0.1 and ::1 always bypass the proxy;
no_proxy entries support `*`, an exact host, a `.domain` suffix, a `*.domain` wildcard and
a `host:port` form. Existing [HttpClient](../../object/ifs/HttpClient.md) instances are not affected.

Example — apply a proxy configuration and restore the previous one:

```JavaScript
const http = require('http');

const restore = http.setGlobalProxyFromEnv({
    http_proxy: 'http://127.0.0.1:9999',
    https_proxy: ''
});

// localhost always bypasses the proxy, so this request stays direct
const server = new http.Server(0, (req) => req.response.write('direct'));
server.start();
console.log(http.getSync('http://127.0.0.1:' + server.socket.localPort + '/').text());
server.stop();

restore();
```

--------------------------
### fetch
**Sends a request using the Web Fetch standard and returns an [HttpResponse](../../object/ifs/HttpResponse.md) [object](../../object/ifs/object.md)**

```JavaScript
static HttpResponse http.fetch(HttpRequest | String request,
    Object opts = {}) async;
```

Parameters:
* request: [HttpRequest](../../object/ifs/HttpRequest.md) | String, the request source
* opts: Object, the additional information, can override the corresponding fields in request

Returns:
* [HttpResponse](../../object/ifs/HttpResponse.md), returns the server response, containing properties such as status, headers, body, ok, redirected, [url](url.md) and type

request is the request source: an [HttpRequest](../../object/ifs/HttpRequest.md) [object](../../object/ifs/object.md), or the target URL of the request; when it
is a URL string the URL-override fields of opts are honoured as well. opts overrides the request
fields (`new Request(request, init)` semantics); the supported contents are as follows:

```JavaScript
// fragment: options
({
    method: 'GET', // overrides the request method; the method of an HttpRequest source is kept when not given
    headers: {}, // when present it replaces the headers of the request source, like `new Request(request, init)`
    body: null, // overrides the request body; a string body is sent as text/plain;charset=UTF-8
    keepAlive: undefined, // overrides the keep-alive setting
    timeout: undefined, // request timeout in ms, uses the client default settings by default
    redirect: 'follow', // redirect mode: 'follow' (default) | 'error' | 'manual'
    signal: null, // AbortSignal object used to cancel the request
    streaming: false // whether to expose the response body as a stream instead of buffering it
})
```

Following the Fetch standard a GET or HEAD request must not carry a body (a TypeError is
thrown), a string body is sent as `text/plain;charset=UTF-8`, and `headers` replaces the
headers of the request source instead of merging them. `redirect: 'error'` fails with a
TypeError when the server redirects, and `redirect: 'manual'` returns the redirect response
as it is, with `redirected` false; otherwise redirects are followed according to the client
`autoRedirect` setting. fetch also accepts `file:` URLs and reads the file directly, but only
for GET and HEAD. An aborted request fails with an AbortError (a TimeoutError for
[AbortSignal.timeout](../../object/ifs/AbortSignal.md#timeout)).

Example — fetch a JSON API served by a local server:

```JavaScript
const http = require('http');

const server = new http.Server(0, (req) => {
    req.response.json({
        ok: true,
        path: req.address
    });
});
server.start();
const port = server.socket.localPort;

const resp = http.fetch('http://127.0.0.1:' + port + '/status');
console.log(resp.status, resp.ok, resp.redirected); // 200 true false
console.log(resp.json()); // { ok: true, path: '/status' }

server.stop();
```

## Static Properties
        
### STATUS_CODES
**Object, Returns the collection of standard HTTP response status codes and their short descriptions**

```JavaScript
static readonly Object http.STATUS_CODES;
```

An [object](../../object/ifs/object.md) whose keys are the three-digit status codes and whose values are the reason
phrases, for example STATUS_CODES[404] === 'Not Found'; same shape as the Node.js
[http.STATUS_CODES](http.md#STATUS_CODES) [object](../../object/ifs/object.md).

--------------------------
### METHODS
**String, Returns an array of all method names (in uppercase) supported by the HTTP protocol**

```JavaScript
static readonly String http.METHODS;
```

The parser accepts any token method, but this is the list it knows by name (currently 34
entries such as 'GET', 'POST' and 'HEAD'), the same role as the Node.js [http.METHODS](http.md#METHODS) list.

--------------------------
### cookies
**[HttpCookie](../../object/ifs/HttpCookie.md), Returns the [HttpCookie](../../object/ifs/HttpCookie.md) [object](../../object/ifs/object.md) list of the [module](module.md)-level client**

```JavaScript
static readonly HttpCookie http.cookies;
```

Contains the cookies collected by the request functions of the [module](module.md) (the hidden client);
a client created with `new [http.Client](http.md#Client)()` has its own list. The array itself is live: its
entries are updated when the same cookie is set again.

--------------------------
### keepAlive
**Boolean, Queries and sets whether the [module](module.md)-level client keeps connections alive**

```JavaScript
static Boolean http.keepAlive;
```

Enabled by default. When enabled, a connection that finished a request is kept in the
client pool and reused for later requests to the same host until `poolTimeout` expires.
Set to false to open one connection per request. A per-request `keepAlive` option overrides
this setting. Node.js defaults its Agent to keepAlive false instead.

--------------------------
### timeout
**Integer, Queries and sets the request timeout in milliseconds**

```JavaScript
static Integer http.timeout;
```

Default 0, which means no timeout. The timeout covers a whole request; when it expires the
request fails with error number 20021. A per-request `timeout` option overrides this
setting. Node.js only emits a 'timeout' event and leaves the request running.

--------------------------
### enableCookie
**Boolean, Cookie feature switch of the [module](module.md)-level client, enabled by default**

```JavaScript
static Boolean http.enableCookie;
```

When enabled, Set-Cookie headers are stored in `cookies` and matching cookies are sent
back with later requests. Set to false to ignore cookies completely. Node.js http has no
cookie handling; libraries manage cookies themselves.

--------------------------
### autoRedirect
**Boolean, Automatic redirect feature switch, enabled by default**

```JavaScript
static Boolean http.autoRedirect;
```

When enabled, 301, 302, 303, 307 and 308 responses are followed automatically; 303 switches
the request to GET and drops the body. There is no redirect count limit, but a URL visited
twice raises a cyclic redirect error. When disabled, the redirect response itself is
returned. Node.js never follows redirects automatically.

--------------------------
### enableEncoding
**Boolean, Automatic decompression feature switch, enabled by default**

```JavaScript
static Boolean http.enableEncoding;
```

When enabled, requests send `Accept-Encoding: gzip, deflate` and responses compressed with
gzip or deflate are decompressed transparently, removing the Content-Encoding and
Content-Length headers. When disabled, the raw compressed bytes are returned.

--------------------------
### enableH2
**Boolean, HTTP/2 automatic upgrade switch, enabled by default**

```JavaScript
static Boolean http.enableH2;
```

When enabled, an HTTPS request negotiates the protocol through ALPN and uses HTTP/2 when
the server supports it; the switch has no effect on plain HTTP requests. HTTP/2 sessions
are cached and shared by origin, proxy, SNI and TLS identity, and `destroy()` clears the
cache. Set to false to use HTTP/1.1 only.

--------------------------
### maxHeadersCount
**Integer, Queries and sets the maximum number of request headers, default 128**

```JavaScript
static Integer http.maxHeadersCount;
```

Applies to the messages parsed and generated by the [module](module.md)-level client; a message can
override it through its own `maxHeadersCount` property. Node.js defaults to 1000.

--------------------------
### maxHeaderSize
**Integer, Queries and sets the maximum request header size in bytes, default 8192**

```JavaScript
static Integer http.maxHeaderSize;
```

A request whose headers exceed the limit is rejected. Node.js defaults to 16384 bytes and
allows per-server or per-request overrides, which fibjs does not expose at this level.

--------------------------
### maxChunkSize
**Integer, Queries and sets the maximum chunk size in MB, default 2**

```JavaScript
static Integer http.maxChunkSize;
```

Limits one chunk of a chunked request or response body; a chunk larger than the limit is
rejected. Not a Node.js option.

--------------------------
### maxBodySize
**Integer, Queries and sets the maximum body size in MB, default -1, no size limit**

```JavaScript
static Integer http.maxBodySize;
```

A response whose body exceeds the limit fails with error number 20024; 0 rejects every
body. Requests with a body larger than the limit are also rejected. A HEAD response is
exempt because it has no body. Not a Node.js option.

--------------------------
### userAgent
**String, Queries and sets the browser identifier in http requests**

```JavaScript
static String http.userAgent;
```

Default 'curl/8.14.1'. Sent as the User-Agent header when the request does not set one;
assign an empty string to omit the header. Node.js sends no User-Agent by default.

--------------------------
### poolTimeout
**Integer, Queries and sets the keep-alive cached connection timeout, default 10000 ms**

```JavaScript
static Integer http.poolTimeout;
```

An idle pooled connection older than this is closed when the client looks for a free
connection or stores one. Setting it to 0 disables connection reuse.

--------------------------
### maxFreeSockets
**Integer, Queries and sets the maximum number of idle connections, default 256**

```JavaScript
static Integer http.maxFreeSockets;
```

The [module](module.md)-level client keeps one idle list for all hosts and drops the oldest entries
beyond this number; Node.js applies maxFreeSockets per host instead.

