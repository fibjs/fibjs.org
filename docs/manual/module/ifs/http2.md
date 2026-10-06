# Module http2
the http2 [module](module.md) provides HTTP/2 client and server capabilities

The http2 [module](module.md) is the fibjs implementation of HTTP/2 (RFC 9113) over TLS: one
connection carries many concurrent request/response streams. It provides:

- **Servers**: `Server` (the `Http2Server` class) and `createServer` create an HTTP/2
  server; `listen`/`start`/`stop` come from the [TcpServer](../../object/ifs/TcpServer.md) base. A server requires a
  [SecureContext](../../object/ifs/SecureContext.md) (or the options used to create one) and should advertise the `h2` ALPN
  protocol (`alpnProtocols: ['h2']`), because HTTP/2 clients negotiate it with ALPN;
- **Clients**: `connect` opens a client session to an `https://` authority and returns
  the [Http2Session](../../object/ifs/Http2Session.md); `Http2Session.request` creates one [Http2Stream](../../object/ifs/Http2Stream.md) per request;
- **Sessions and streams**: `Http2Session` represents a connection (settings, ping,
  GOAWAY and lifecycle) and `Http2Stream` one request/response, a duplex [Stream](../../object/ifs/Stream.md) with
  `read`/`write`/`close` and the events `headers`/`trailers`;
- **General information**: `getDefaultSettings` returns the protocol defaults and
  `constants` exposes the nghttp2 error codes and flags (see [http2_constants](http2_constants.md)).

Concepts:

- **Multiplexing**: a session is a single TLS connection shared by many streams. HTTP/2
  splits requests and responses into frames, so several requests can be in flight at the
  same time without head-of-line blocking between streams. An [Http2Server](../../object/ifs/Http2Server.md) emits one
  `session` event per connection and each request is delivered as a `stream` event on
  that session; a client calls `session.request` to create a stream.
- **Streams and states**: each stream has a numeric `id` (odd for client-initiated
  streams, even for server-initiated ones) and an independent state. A stream becomes
  half-closed when one side ends its data (END_STREAM) and closed when both sides do or
  when either party sends RST_STREAM; `closed` and `destroyed` report the local view.
- **HPACK header compression**: header blocks are compressed with HPACK. The
  pseudo-headers `:method`, `:[path](path.md)`, `:scheme` and `:authority` come first, followed by
  regular headers (`content-type`, ...); in fibjs a headers [object](../../object/ifs/object.md) is a plain [object](../../object/ifs/object.md)
  whose pseudo-header keys start with a colon.
- **Settings and flow control**: the peers exchange SETTINGS frames (header table size,
  push, max concurrent streams, initial window size, max frame size, max header list
  size; see `getDefaultSettings`). DATA frames are limited by per-stream and
  connection-level windows, which fibjs enlarges automatically as data is consumed.
- **h2c and h2**: HTTP/2 runs in clear text (h2c) or over TLS with the ALPN protocol
  `h2`. fibjs exposes the TLS form only: an [Http2Server](../../object/ifs/Http2Server.md) wraps a [TLSServer](../../object/ifs/TLSServer.md) and `connect`
  requires an `https://` authority. There is no plaintext server and no `allowHTTP1`
  fallback to HTTP/1.1.
- **Call style**: fibjs is synchronous-first. `connect` and `read` block the current
  fiber until they finish; `request` creates the stream and sends the request headers
  immediately. The event style is the `session`/`stream`/`headers`/`trailers` events;
  `ping` and `close` are async and can also be awaited.
- **Node.js differences**: the secure form is the default (there is no
  `createSecureServer` and no h2c server); there is no server push API and no
  `session.close`/`goaway`/`error` event (the declared `goaway`/`error` events are not
  dispatched, watch `closed` instead); `ping()` returns 0 instead of reporting the
  round-trip time; the handler passed to a server constructor is accepted but not
  invoked, because requests arrive through the `session`/`stream` events; and a request
  body cannot be sent through the raw stream API (closing a client stream closes the
  whole stream), so use [HttpClient](../../object/ifs/HttpClient.md) for requests with a body.

Import:

```JavaScript
const http2 = require('http2');
```

Example 1 — a local server and one GET request:

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');

// a self-signed certificate chain for localhost (do not use in production)
const caKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const srvKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const ca = crypto.createCertificateRequest({
    key: caKey.privateKey,
    subject: {
        CN: 'fibjs.org'
    }
}).issue({
    key: caKey.privateKey,
    ca: true,
    issuer: {
        CN: 'fibjs.org'
    }
});
const crt = crypto.createCertificateRequest({
    key: srvKey.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: caKey.privateKey,
    issuer: {
        CN: 'fibjs.org'
    }
});
const ctx = tls.createSecureContext({
    key: srvKey.privateKey.export(),
    cert: crt.pem,
    requestCert: false,
    alpnProtocols: ['h2']
}, true);

// requests arrive as 'stream' events on the session of each connection
const server = new http2.Server(ctx, 0, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        stream.respond({
            ':status': 200,
            'content-type': 'text/plain'
        });
        stream.write('Hello ' + headers[':path']);
        stream.close();
    });
});
server.start();

const session = http2.connect('https://localhost:' + server.socket.localPort, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const stream = session.request({
    ':method': 'GET',
    ':path': '/world'
});
console.log(stream.read().toString()); // Hello /world
console.log(stream.headers[':status']); // 200

session.close();
server.stop();
```

Example 2 — three concurrent streams on one session:

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');

const caKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const srvKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const ca = crypto.createCertificateRequest({
    key: caKey.privateKey,
    subject: {
        CN: 'fibjs.org'
    }
}).issue({
    key: caKey.privateKey,
    ca: true,
    issuer: {
        CN: 'fibjs.org'
    }
});
const crt = crypto.createCertificateRequest({
    key: srvKey.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: caKey.privateKey,
    issuer: {
        CN: 'fibjs.org'
    }
});
const ctx = tls.createSecureContext({
    key: srvKey.privateKey.export(),
    cert: crt.pem,
    requestCert: false,
    alpnProtocols: ['h2']
}, true);

const server = new http2.Server(ctx, 0, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        stream.respond({
            ':status': 200,
            'content-type': 'text/plain'
        });
        stream.write('chunk-1;');
        stream.write('chunk-2;');
        stream.close();
    });
});
server.start();

const session = http2.connect('https://localhost:' + server.socket.localPort, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const paths = ['/a', '/b', '/c'];
const streams = paths.map((path) => session.request({
    ':method': 'GET',
    ':path': path
}));
streams.forEach((stream, i) => {
    console.log(paths[i], stream.id, stream.readAll().toString());
});

session.close();
server.stop();
```

Example 3 — a reset stream and a destroyed session:

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');

const caKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const srvKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const ca = crypto.createCertificateRequest({
    key: caKey.privateKey,
    subject: {
        CN: 'fibjs.org'
    }
}).issue({
    key: caKey.privateKey,
    ca: true,
    issuer: {
        CN: 'fibjs.org'
    }
});
const crt = crypto.createCertificateRequest({
    key: srvKey.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: caKey.privateKey,
    issuer: {
        CN: 'fibjs.org'
    }
});
const ctx = tls.createSecureContext({
    key: srvKey.privateKey.export(),
    cert: crt.pem,
    requestCert: false,
    alpnProtocols: ['h2']
}, true);

const server = new http2.Server(ctx, 0, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        if (headers[':path'] === '/reset') {
            stream.respond({
                ':status': 200
            });
            stream.rstStream(http2.constants.NGHTTP2_CANCEL);
        }
        // '/wait' is deliberately left unanswered
    });
});
server.start();

const session = http2.connect('https://localhost:' + server.socket.localPort, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const reset = session.request({
    ':method': 'GET',
    ':path': '/reset'
});
try {
    reset.read();
} catch (e) {
    console.log('read failed after RST_STREAM');
}
const waiting = session.request({
    ':method': 'GET',
    ':path': '/wait'
});
session.destroy(); // aborts the connection and every stream
console.log(waiting.read()); // null
console.log(session.closed, session.destroyed); // true true

server.stop();
```

## Objects
        
### Server
**the [Http2Server](../../object/ifs/Http2Server.md) constructor, see [Http2Server](../../object/ifs/Http2Server.md)**

```JavaScript
Http2Server http2.Server;
```

`http2.Server` is the constructor of the [Http2Server](../../object/ifs/Http2Server.md) class: `new http2.Server(...)`
accepts the [Http2Server](../../object/ifs/Http2Server.md) constructor forms (a [SecureContext](../../object/ifs/SecureContext.md) or the
[tls.createSecureContext](tls.md#createSecureContext) options, an optional address and port, and a handler). The
class itself is documented under the name [Http2Server](../../object/ifs/Http2Server.md).

--------------------------
### Http2Stream
**the [Http2Stream](../../object/ifs/Http2Stream.md) class, see [Http2Stream](../../object/ifs/Http2Stream.md)**

```JavaScript
Http2Stream http2.Http2Stream;
```

[Http2Stream](../../object/ifs/Http2Stream.md) instances are not constructed directly: a client obtains one from
[Http2Session.request](../../object/ifs/Http2Session.md#request) and a server receives them with the `stream` event of an
[Http2Session](../../object/ifs/Http2Session.md). The class and its members are documented in [Http2Stream](../../object/ifs/Http2Stream.md).

--------------------------
### Http2Session
**the [Http2Session](../../object/ifs/Http2Session.md) class, see [Http2Session](../../object/ifs/Http2Session.md)**

```JavaScript
Http2Session http2.Http2Session;
```

[Http2Session](../../object/ifs/Http2Session.md) instances are not constructed directly: a client obtains one from
[http2.connect](http2.md#connect) and a server receives one with the `session` event of [Http2Server](../../object/ifs/Http2Server.md).
The class and its members are documented in [Http2Session](../../object/ifs/Http2Session.md).

--------------------------
### constants
**the nghttp2 [constants](constants.md) of the http2 [module](module.md), see [http2_constants](http2_constants.md)**

```JavaScript
http2_constants http2.constants;
```

The [object](../../object/ifs/object.md) exposes the HTTP/2 error codes used by RST_STREAM/GOAWAY (NGHTTP2_NO_ERROR,
NGHTTP2_CANCEL, ...), the SETTINGS identifiers (NGHTTP2_SETTINGS_*) and the frame
flags, all documented in [http2_constants](http2_constants.md).

## Static Methods
        
### createServer
**creates an [Http2Server](../../object/ifs/Http2Server.md) from TLS options or a [SecureContext](../../object/ifs/SecureContext.md)**

```JavaScript
static Http2Server http2.createServer(Object | SecureContext options,
    Function(HttpRequest req, HttpResponse res) => Value hdlr);
```

Parameters:
* options: Object | [SecureContext](../../object/ifs/SecureContext.md), the TLS options or the [SecureContext](../../object/ifs/SecureContext.md) [object](../../object/ifs/object.md)
* hdlr: [Handler](../../object/ifs/Handler.md) | [Handler](../../object/ifs/Handler.md)[] | Function([HttpRequest](../../object/ifs/HttpRequest.md) req, [HttpResponse](../../object/ifs/HttpResponse.md) res) => Value | Object | String, the request handler, accepted for compatibility

Returns:
* [Http2Server](../../object/ifs/Http2Server.md), returns an [Http2Server](../../object/ifs/Http2Server.md) [object](../../object/ifs/object.md); call listen() to bind and serve

options may be a [SecureContext](../../object/ifs/SecureContext.md) [object](../../object/ifs/object.md) or the options used to create one with
[tls.createSecureContext](tls.md#createSecureContext) (key, cert, ca, requestCert, alpnProtocols, ...). The
returned server is not bound to a port: call listen(port[, addr]) before start(),
or use one of the [Http2Server](../../object/ifs/Http2Server.md) constructor forms that take a port.

hdlr accepts the same forms as [http.createServer](http.md#createServer) (a [Handler](../../object/ifs/Handler.md), an array of handlers, a
function, a routing map, or a [path](path.md)/address string), but the current HTTP/2
implementation does not invoke it. Requests are delivered as `stream` events on the
[Http2Session](../../object/ifs/Http2Session.md) emitted by the server `session` event; register
`session.on('stream', ...)` there.

Example — a server created from TLS options and bound with listen():

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');

const caKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const srvKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const ca = crypto.createCertificateRequest({
    key: caKey.privateKey,
    subject: {
        CN: 'fibjs.org'
    }
}).issue({
    key: caKey.privateKey,
    ca: true,
    issuer: {
        CN: 'fibjs.org'
    }
});
const crt = crypto.createCertificateRequest({
    key: srvKey.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: caKey.privateKey,
    issuer: {
        CN: 'fibjs.org'
    }
});
const options = {
    key: srvKey.privateKey.export(),
    cert: crt.pem,
    requestCert: false,
    alpnProtocols: ['h2']
};

const server = http2.createServer(options, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        stream.respond({
            ':status': 200
        });
        stream.write('created');
        stream.close();
    });
});
server.listen(0, '127.0.0.1');

const session = http2.connect('https://127.0.0.1:' + server.address().port, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const stream = session.request({
    ':method': 'GET',
    ':path': '/ping'
});
console.log(stream.read().toString()); // created

session.close();
server.stop();
```

--------------------------
### connect
**creates an HTTP/2 client session to the specified target**

```JavaScript
static Http2Session http2.connect(String authority,
    Object options = {}) async;
```

Parameters:
* authority: String, URL of the server to connect
* options: Object, connection options

Returns:
* [Http2Session](../../object/ifs/Http2Session.md), returns the connected [Http2Session](../../object/ifs/Http2Session.md)

authority must be an `https://host[:port]` URL; any other scheme throws
`[http2.connect](http2.md#connect): authority must use https:// scheme.`. options are the
[tls.createSecureContext](tls.md#createSecureContext) options (ca, cert, key, rejectUnauthorized, ...). `h2` is
added to alpnProtocols automatically when the option is absent; the caller's options
[object](../../object/ifs/object.md) is cloned, not modified.

The call blocks the current fiber through the TCP connect, the TLS handshake (ALPN
`h2`) and the first SETTINGS frame, then returns the connected [Http2Session](../../object/ifs/Http2Session.md). Use
session.request() to create streams and session.close()/destroy() to end the
session.

Example — connect and inspect the negotiated session:

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');

const caKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const srvKey = crypto.generateKeyPair('rsa', {
    modulusLength: 2048
});
const ca = crypto.createCertificateRequest({
    key: caKey.privateKey,
    subject: {
        CN: 'fibjs.org'
    }
}).issue({
    key: caKey.privateKey,
    ca: true,
    issuer: {
        CN: 'fibjs.org'
    }
});
const crt = crypto.createCertificateRequest({
    key: srvKey.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: caKey.privateKey,
    issuer: {
        CN: 'fibjs.org'
    }
});
const ctx = tls.createSecureContext({
    key: srvKey.privateKey.export(),
    cert: crt.pem,
    requestCert: false,
    alpnProtocols: ['h2']
}, true);

const server = new http2.Server(ctx, 0, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        stream.respond({
            ':status': 200
        });
        stream.write('ok');
        stream.close();
    });
});
server.start();

const session = http2.connect('https://localhost:' + server.socket.localPort, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const stream = session.request({
    ':method': 'GET',
    ':path': '/'
});
console.log(stream.read().toString()); // ok
console.log(session.alpnProtocol); // h2
console.log(session.remoteSettings.maxConcurrentStreams); // 100

session.close();
server.stop();
```

--------------------------
### getDefaultSettings
**returns the protocol default settings in a new [object](../../object/ifs/object.md)**

```JavaScript
static (Number headerTableSize, Boolean enablePush, Number maxConcurrentStreams, Number initialWindowSize, Number maxFrameSize, Number maxHeaderListSize) http2.getDefaultSettings();
```

Returns:
* (Number headerTableSize, Boolean enablePush, Number maxConcurrentStreams, Number initialWindowSize, Number maxFrameSize, Number maxHeaderListSize), returns an [object](../../object/ifs/object.md) containing the default settings

The [object](../../object/ifs/object.md) contains headerTableSize, enablePush, maxConcurrentStreams,
initialWindowSize, maxFrameSize and maxHeaderListSize with the protocol defaults
(4096, true, 100, 65535, 16384 and 65535). These are the defaults of a new session;
a live session advertises maxConcurrentStreams 100 but an initialWindowSize of
1 MiB in its own SETTINGS frame, and the negotiated values are reported by
[Http2Session.localSettings](../../object/ifs/Http2Session.md#localSettings)/remoteSettings.

Example — the default settings of the protocol:

```JavaScript
const http2 = require('http2');

const defaults = http2.getDefaultSettings();
console.log(defaults.maxConcurrentStreams, defaults.initialWindowSize); // 100 65535
```

