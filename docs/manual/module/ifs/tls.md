# Module tls
The tls [module](module.md) adds TLS/SSL encryption to stream connections: it creates secure contexts, TLS servers and TLS clients, and verifies peer certificates

Main capabilities:

- **Secure contexts**: `createSecureContext` builds a [SecureContext](../../object/ifs/SecureContext.md) holding the CA list,
  certificate chain, private key, protocol versions, ALPN list and verification flags shared by
  connections; `secureContext` is the [process](process.md)-wide default context used when none is given;
- **Servers**: `createServer` creates a [TLSServer](../../object/ifs/TLSServer.md) (a [TcpServer](../../object/ifs/TcpServer.md) whose per-connection handler
  receives a [TLSSocket](../../object/ifs/TLSSocket.md)) from a [SecureContext](../../object/ifs/SecureContext.md) or TLS options plus a listener; `Server` is the
  class itself;
- **Clients**: `connect` establishes a TLS connection given an options [object](../../object/ifs/object.md), a host/port pair
  or an `ssl://` URL, in blocking, listener and promise forms;
- **Objects**: `TLSSocket` is the encrypted stream endpoint and `Handler` (a [TLSHandler](../../object/ifs/TLSHandler.md)) turns a
  raw stream handler into a TLS one so it can be used with [net.TcpServer](net.md#TcpServer) or another stream
  server;
- **Class aliases**: the classes are exposed as `TLSSocket`, `Handler` and `Server` (there is no
  `tls.TLSServer` or `tls.TLSHandler` export).

Concepts:

- **Handshake**: `connect`, `[TLSSocket](../../object/ifs/TLSSocket.md)#connect` and `[TLSSocket](../../object/ifs/TLSSocket.md)#accept` perform the TLS handshake
  first: the peers negotiate the protocol version and cipher suite, exchange certificates and
  verify them. Without a listener the call blocks the current fiber and throws on failure; with
  a listener it returns immediately and reports the outcome through the `'connect'` event or an
  `'error'` event carrying an Error with `code` and `args.servername`. No application data can
  be read or written before the handshake completes.
- **Certificates and trust**: `cert` is the PEM chain (leaf first, then the intermediates,
  without the root) and `key` its private key; `ca` replaces the trusted CA list, which by
  default is the well-known Mozilla root store bundled with fibjs. A self-signed certificate is
  its own CA and must be passed through `ca` to be trusted; otherwise the handshake fails with a
  code such as `DEPTH_ZERO_SELF_SIGNED_CERT`. Verification errors are Error objects whose
  `code` is the X509_V_ERR name (for example `CERT_HAS_EXPIRED`) and whose `args.servername`
  holds the name that was verified, so they can be handled in one branch.
- **Verification options**: `requestCert` (default true) asks the peer for a certificate,
  `rejectUnauthorized` (default true on the client, false on the server) additionally requires
  one, and `rejectUnverified` (default true) fails the handshake when the presented certificate
  does not verify. Setting `rejectUnverified` to false accepts any certificate, which is the
  fibjs equivalent of Node.js `rejectUnauthorized: false`; the `rejectUnauthorized` option
  alone does not disable client-side certificate verification in fibjs.
- **SNI**: a client sends the target host name as the server name indication and verifies the
  server certificate against it; a name mismatch reports `HOSTNAME_MISMATCH` and an IP literal
  without a matching IP SAN reports `IP_ADDRESS_MISMATCH`. A server resolves the name through
  `SNIResolver` or the contexts registered with [SecureContext](../../object/ifs/SecureContext.md)#setSNIContext, and
  `[TLSSocket](../../object/ifs/TLSSocket.md)#connect(socket, server_name)` sets the name explicitly for connections that bypass
  `connect`.
- **ALPN**: `alpnProtocols` lists the protocols a context offers (for example `['h2',
  '[http](http.md)/1.1']`); a server selects one from the client list and `[TLSSocket](../../object/ifs/TLSSocket.md)#alpnProtocol` reports
  the negotiated value, or undefined when ALPN was not used.
- **Sessions and tickets**: `sessionTimeout` controls how long a server-side session stays
  resumable (default 7200 seconds). fibjs exposes no session [object](../../object/ifs/object.md): there is no `getSession`,
  `setSession` or `isSessionReused`, and a session cannot be saved and reused by hand.
- **Calling forms**: every async method may be called synchronously (the call blocks the fiber
  and throws on failure), with a callback, or through the promise namespace; `connectSync`,
  `connectAsync` and `tls.promises.connect` are the generated variants of `connect`.
- **Node.js differences**: the classes are exported as `tls.Server` and `tls.Handler`;
  `createServer` requires a listener; `connect` blocks and throws without one while Node.js
  always returns immediately and uses the `'secureConnect'` event; the URL form requires an
  `ssl:` scheme; sessions are not exposed; and `checkServerIdentity`, `rootCertificates`,
  `getCiphers`, `DEFAULT_MIN_VERSION` and the other Node.js [constants](constants.md) do not exist.

Import:

```JavaScript
const tls = require('tls');
```

Example 1 — a self-signed echo server and a blocking client:

```JavaScript
const tls = require('tls');
const crypto = require('crypto');

// a self-signed certificate for localhost, generated in memory
const pk = crypto.generateKeyPair('ec', {
    namedCurve: 'secp256r1'
});
const cert = crypto.createCertificateRequest({
    key: pk.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: pk.privateKey,
    issuer: {
        CN: 'localhost'
    },
    validFrom: new Date(Date.now() - 1000),
    days: 1
});

const server = tls.createServer({
    key: pk.privateKey,
    cert
}, (conn) => {
    conn.write(conn.read());
    conn.close();
});
server.listen(0, '127.0.0.1');

// trust the self-signed certificate through ca; the name must match the
// certificate, so connect to 'localhost' rather than 127.0.0.1
const client = tls.connect(server.address().port, 'localhost', {
    ca: cert.pem
});
client.write('ping');
console.log(client.read().toString()); // ping

client.close();
server.stop();
```

Example 2 — a custom [SecureContext](../../object/ifs/SecureContext.md) with ALPN, shared by server and client:

```JavaScript
const tls = require('tls');
const crypto = require('crypto');

const pk = crypto.generateKeyPair('ec', {
    namedCurve: 'secp256r1'
});
const cert = crypto.createCertificateRequest({
    key: pk.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: pk.privateKey,
    issuer: {
        CN: 'localhost'
    },
    validFrom: new Date(Date.now() - 1000),
    days: 1
});

// one server context and one client context: the options are validated when a
// context is created, so bad PEM material fails here and not at handshake time
const serverCtx = tls.createSecureContext({
    key: pk.privateKey,
    cert,
    alpnProtocols: ['h2', 'http/1.1']
}, true);
const clientCtx = tls.createSecureContext({
    ca: cert.pem,
    alpnProtocols: ['h2']
});

const server = tls.createServer(serverCtx, (conn) => {
    conn.write(conn.read());
    conn.close();
});
server.listen(0, '127.0.0.1');

const client = tls.connect(server.address().port, 'localhost', {
    secureContext: clientCtx
});
client.write('secure');
console.log(client.read().toString()); // secure
console.log(client.alpnProtocol); // h2, selected from both protocol lists
console.log(client.getProtocol()); // TLSv1.3

client.close();
server.stop();
```

Example 3 — handling a certificate verification failure:

```JavaScript
const tls = require('tls');
const crypto = require('crypto');

const pk = crypto.generateKeyPair('ec', {
    namedCurve: 'secp256r1'
});
const cert = crypto.createCertificateRequest({
    key: pk.privateKey,
    subject: {
        CN: 'localhost'
    }
}).issue({
    key: pk.privateKey,
    issuer: {
        CN: 'localhost'
    },
    validFrom: new Date(Date.now() - 1000),
    days: 1
});

const server = tls.createServer({
    key: pk.privateKey,
    cert
}, (conn) => {
    conn.write(conn.read());
    conn.close();
});
server.listen(0, '127.0.0.1');
const port = server.address().port;

// the default context trusts only the well-known CAs, so the self-signed
// certificate is rejected during the handshake, before any application data
try {
    tls.connect(port, 'localhost');
    console.log('unexpectedly connected');
} catch (err) {
    console.log(err.code); // DEPTH_ZERO_SELF_SIGNED_CERT
    console.log(err.args.servername); // localhost
}

// trusting the certificate through ca makes the same connection succeed
const client = tls.connect(port, 'localhost', {
    ca: cert.pem
});
client.write('trusted');
console.log(client.read().toString()); // trusted

client.close();
server.stop();
```

Notes:

- All examples run against the local machine; a certificate generated at runtime with the [crypto](crypto.md)
  [module](module.md) is self-signed, so a client must trust it explicitly through `ca`, or skip verification
  with `requestCert: false` or `rejectUnverified: false`.
- Servers should bind port 0 and read the assigned port from `address()` or `socket.localPort`,
  and call `stop()` when done; accepted connections are not closed by `stop()`.
- [net.connect](net.md#connect) accepts `ssl://` URLs and hands them over to this [module](module.md), so an encrypted client
  can also be created through the [net](net.md) [module](module.md).

## Objects
        
### TLSSocket
**The [TLSSocket](../../object/ifs/TLSSocket.md) class entry point, see [TLSSocket](../../object/ifs/TLSSocket.md)**

```JavaScript
TLSSocket tls.TLSSocket;
```

The same class as the sockets returned by connect and handed to [TLSServer](../../object/ifs/TLSServer.md) handlers; use it
directly to wrap an existing stream or to drive the handshake step by step.

--------------------------
### Handler
**The [TLSHandler](../../object/ifs/TLSHandler.md) class entry point, see [TLSHandler](../../object/ifs/TLSHandler.md)**

```JavaScript
TLSHandler tls.Handler;
```

A handler that upgrades every accepted raw stream to TLS and then invokes the wrapped
handler; pass it to [net.createServer](net.md#createServer) or new [net.TcpServer](net.md#TcpServer) to build a TLS protocol server.

--------------------------
### Server
**The [TLSServer](../../object/ifs/TLSServer.md) class entry point, see [TLSServer](../../object/ifs/TLSServer.md)**

```JavaScript
TLSServer tls.Server;
```

The class of the servers created by createServer; it combines [net.TcpServer](net.md#TcpServer) with [TLSHandler](../../object/ifs/TLSHandler.md)
and can also be created with new [tls.Server](tls.md#Server)(context, listener). Node.js names its class
[tls.Server](tls.md#Server) as well; neither environment exports tls.TLSServer.

## Static Methods
        
### createServer
**Creates a TLS server from a secure context or the options used to create one**

```JavaScript
static TLSServer tls.createServer(Object | SecureContext options,
    Function(TLSSocket socket) => Value listener);
```

Parameters:
* options: Object | [SecureContext](../../object/ifs/SecureContext.md), the secure context or the options used to create one
* listener: [Handler](../../object/ifs/Handler.md) | [Handler](../../object/ifs/Handler.md)[] | Function([TLSSocket](../../object/ifs/TLSSocket.md) socket) => Value | Object | String, the connection handler

Returns:
* [TLSServer](../../object/ifs/TLSServer.md), returns a [TLSServer](../../object/ifs/TLSServer.md) [object](../../object/ifs/object.md) with no port bound, which needs listen() to start

options may be a ready [SecureContext](../../object/ifs/SecureContext.md) or an options [object](../../object/ifs/object.md) accepted by createSecureContext.
The returned server has no port bound: call listen() (or bind elsewhere and then start())
before it accepts clients, and stop() when done. Unlike the [TLSServer](../../object/ifs/TLSServer.md) options constructor,
an `address` or `port` key in options is not bound here, so [tls.createServer](tls.md#createServer)({port: 8443},
listener) still requires listen().

listener may be given in any of these forms:
- a [Handler](../../object/ifs/Handler.md) [object](../../object/ifs/object.md), invoked as it is;
- an array of handlers, wrapped in a [Chain](../../object/ifs/Chain.md) and invoked in order;
- a handler function `(socket) => any`, called with each accepted TLS connection (a [TLSSocket](../../object/ifs/TLSSocket.md); it extends [Stream](../../object/ifs/Stream.md), not [Socket](../../object/ifs/Socket.md));
- a routing map [object](../../object/ifs/object.md), whose keys are match patterns and whose values are handlers in these same forms (see [mq.Routing](mq.md#Routing)); it matches messages, so a raw connection cannot be routed;
- a [path](path.md)/address string: a directory or an `http(s)://` address, converted through the [Handler](../../object/ifs/Handler.md) constructor.
Node.js [tls.createServer](tls.md#createServer)() accepts a missing listener and reports connections through the
'secureConnection' event, while fibjs requires the listener and hands each [TLSSocket](../../object/ifs/TLSSocket.md) to it
directly; a missing listener throws a parameter-not-optional error.

--------------------------
### createSecureContext
**Creates a [SecureContext](../../object/ifs/SecureContext.md) that holds the certificates, protocol versions and verification flags shared by TLS connections**

```JavaScript
static SecureContext tls.createSecureContext(Object options,
    Boolean isServer = false);
```

Parameters:
* options: Object, the options for creating the secure context
* isServer: Boolean, whether it is in server mode, default is false

Returns:
* [SecureContext](../../object/ifs/SecureContext.md), returns the created secure context

A context is validated while it is created: an unknown version name, a conflicting
secureProtocol/minVersion combination and unparsable or mismatching certificate material
fail here instead of at handshake time (invalid PEM material reports error 20024). Without
options an empty context is built. With isServer false (the default) the context behaves as
a client: it inherits the default Mozilla trust store and requires a verified server
certificate, while a server context has no CA of its own and does not require a client
certificate. When options carries a `secureContext` key, that ready context is returned and
the other TLS keys are ignored; this is how the connect forms accept {secureContext: ctx}.

options supports the following options:

```JavaScript
// fragment: options
({
    "ca": null, // trusted CAs: PEM string/Buffer/X509Certificate or an array
    "cert": null, // PEM certificate chain: leaf first, then intermediates
    "key": null, // PEM private key matching cert; needs passphrase if encrypted
    "passphrase": null, // passphrase of an encrypted private key or PFX
    "requestCert": true, // ask the peer for a certificate
    "rejectUnverified": true, // fail the handshake if that certificate does not verify
    "rejectUnauthorized": undefined, // require a peer certificate; client true, server false
    "minVersion": null, // 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3'
    "maxVersion": null, // 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3'
    "secureProtocol": null, // legacy method name, e.g. 'TLSv1_2_method'
    "sessionTimeout": 7200, // server-side resumable session lifetime in seconds
    "alpnProtocols": [], // protocol names offered through ALPN
    "SNIResolver": null, // (servername) => SecureContext, server only
    "SNICacheSize": 1024, // number of cached SNI contexts
    "SNICacheTimeout": 300, // lifetime of a cached SNI context in seconds
    "SNICacheIdleTimeout": 300, // idle lifetime of a cached SNI context in seconds
    "secureContext": null // a ready context; when set, the other TLS keys are ignored
})
```

ca/cert accept a PEM string, a [Buffer](../../object/ifs/Buffer.md), an [X509Certificate](../../object/ifs/X509Certificate.md) or an array of them; a PEM string
may concatenate several certificates. key and cert must be provided together, and the key is
checked to match the certificate. Supplying ca completely replaces the Mozilla store, so the
peer certificate must chain to one of the given CAs. requestCert, rejectUnverified and
rejectUnauthorized control the verification described in the [module](module.md) concepts. minVersion
and maxVersion cannot be combined with a legacy secureProtocol value that already fixes a
version. sessionTimeout only affects a server context. The SNI options configure the
server-side cache used by getSNIContext and are ignored on a client context. Node.js
accepts many more keys (ciphers, ecdhCurve, honorCipherOrder, ...), which fibjs ignores.

--------------------------
**Creates an empty [SecureContext](../../object/ifs/SecureContext.md), optionally with the defaults of a server**

```JavaScript
static SecureContext tls.createSecureContext(Boolean isServer = false);
```

Parameters:
* isServer: Boolean, whether it is in server mode, default is false

Returns:
* [SecureContext](../../object/ifs/SecureContext.md), returns the created secure context

Shorthand for createSecureContext({}, isServer). With isServer false the context trusts the
default Mozilla roots and requires a verified server certificate; with true it behaves as a
server: rejectUnauthorized defaults to false and the SNI callback is installed, so the
context can serve setSNIContext/getSNIContext lookups.

--------------------------
### connect
**Creates a TLS connection from an options [object](../../object/ifs/object.md) and waits for the handshake**

```JavaScript
static Stream tls.connect(Object options) async;
```

Parameters:
* options: Object, specifies the connection options

Returns:
* [Stream](../../object/ifs/Stream.md), returns the tls/ssl connection [object](../../object/ifs/object.md)

The [object](../../object/ifs/object.md) is read twice: as connection options it uses `host` (default 'localhost'), `port`
(default 0) and `timeout` (connect timeout in milliseconds, default 0), while the remaining
keys are the TLS options of createSecureContext (`ca`, `cert`, `key`, `rejectUnverified`,
`secureContext`, ...). host is also the server name sent as SNI and verified against the
server certificate. The call blocks the current fiber, returns the connected [TLSSocket](../../object/ifs/TLSSocket.md) (the
declared [Stream](../../object/ifs/Stream.md) type is its base interface) and throws an Error with a verification code on
failure. Node.js [tls.connect](tls.md#connect)() instead returns immediately and reports readiness through
the 'secureConnect' event; use the listener or promise form for the same non-blocking style.

--------------------------
**Creates a TLS connection without blocking and reports the outcome through events**

```JavaScript
static Stream tls.connect(Object | String | Integer options,
    Function(Object ev) connectListener) async;
```

Parameters:
* options: Object | String | Integer, the connection target
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

options selects one of the other entry forms: an options [object](../../object/ifs/object.md) (host/port/timeout plus the
TLS options), an `ssl://` URL, or the remote port, in which case the host defaults to
'localhost'. The call returns immediately; on success the 'connect' event fires with the
[TLSSocket](../../object/ifs/TLSSocket.md), and on failure an 'error' event carries an Error with `code` and
`args.servername` instead of throwing. Listen for the 'error' event, otherwise a failed
handshake becomes an unhandled error.

--------------------------
**Creates a non-blocking TLS connection to a port from an options [object](../../object/ifs/object.md)**

```JavaScript
static Stream tls.connect(Integer port,
    Object options,
    Function(Object ev) connectListener) async;
```

Parameters:
* port: Integer, specifies the port number to connect
* options: Object, specifies the connection options
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

The port is fixed, the host defaults to 'localhost' and options is the same [object](../../object/ifs/object.md) as in the
blocking (port, host, options) form, so `host` inside it overrides the default. It returns
immediately and reports the handshake through the 'connect'/'error' events.

--------------------------
**Creates a non-blocking TLS connection to a host and port**

```JavaScript
static Stream tls.connect(Integer port,
    String host,
    Function(Object ev) connectListener) async;
```

Parameters:
* port: Integer, specifies the port number to connect
* host: String, specifies the hostname to connect
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

The default context is used and the host is both the TCP target and the verified SNI name.
The call returns immediately and reports the handshake through the 'connect'/'error' events.

--------------------------
**Creates a non-blocking TLS connection to a host and port with explicit options**

```JavaScript
static Stream tls.connect(Integer port,
    String host,
    Object options,
    Function(Object ev) connectListener) async;
```

Parameters:
* port: Integer, specifies the port number to connect
* host: String, specifies the hostname to connect
* options: Object, specifies the connection options
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

The full listener form: options supplies the TLS keys and the connect timeout, host is both
the TCP target and the verified SNI name. It returns immediately and reports the handshake
through the 'connect'/'error' events.

--------------------------
**Creates a blocking TLS connection to a host and port**

```JavaScript
static Stream tls.connect(Integer port,
    String host = "localhost",
    Object options = {}) async;
```

Parameters:
* port: Integer, specifies the port number to connect
* host: String, specifies the hostname to connect, default is "localhost"
* options: Object, specifies the connection options

Returns:
* [Stream](../../object/ifs/Stream.md), returns the tls/ssl connection [object](../../object/ifs/object.md)

The synchronous workhorse: connect(port), connect(port, host) and connect(port, host,
options) all land here. host defaults to 'localhost' and options to an empty [object](../../object/ifs/object.md), so
connect(port, {ca}) is not a valid form - pass the host explicitly or use an options [object](../../object/ifs/object.md)
as the single argument. The host is both the TCP target and the verified SNI name.

--------------------------
**Creates a blocking TLS connection from an `ssl://` URL**

```JavaScript
static Stream tls.connect(String url,
    Integer timeout = 0) async;
```

Parameters:
* url: String, specifies the URL to connect
* timeout: Integer, specifies the connection timeout, default is 0

Returns:
* [Stream](../../object/ifs/Stream.md), returns the tls/ssl connection [object](../../object/ifs/object.md)

The URL must carry the `ssl:` scheme and an explicit port, otherwise an invalid-argument
error is thrown ("[url](url.md) must start with 'ssl:'" or "missing port in [url](url.md)"); the host part is
the TCP target, the SNI name and the verified name. The default context supplies the trust
store, so pass a [SecureContext](../../object/ifs/SecureContext.md) or an options [object](../../object/ifs/object.md) when the server certificate is not
signed by a well-known CA. Node.js has no URL string form.

--------------------------
**Creates a blocking TLS connection from an `ssl://` URL with an explicit context**

```JavaScript
static Stream tls.connect(String url,
    SecureContext secureContext,
    Integer timeout = 0) async;
```

Parameters:
* url: String, specifies the URL to connect
* secureContext: [SecureContext](../../object/ifs/SecureContext.md), specifies the secure context
* timeout: Integer, specifies the connection timeout, default is 0

Returns:
* [Stream](../../object/ifs/Stream.md), returns the tls/ssl connection [object](../../object/ifs/object.md)

Same as the plain URL form, but the given [SecureContext](../../object/ifs/SecureContext.md) supplies the trust store, the client
certificate and the ALPN list instead of the default context.

--------------------------
**Creates a blocking TLS connection from an `ssl://` URL and an options [object](../../object/ifs/object.md)**

```JavaScript
static Stream tls.connect(String url,
    Object options) async;
```

Parameters:
* url: String, specifies the URL to connect
* options: Object, specifies the connection options

Returns:
* [Stream](../../object/ifs/Stream.md), returns the tls/ssl connection [object](../../object/ifs/object.md)

The TLS keys of options build the context as in the options-[object](../../object/ifs/object.md) form; its `host` and
`port` keys are ignored because the URL provides both, while `timeout` still bounds the
connect. A `secureContext` key inside options is honored.

--------------------------
**Creates a non-blocking connection from an `ssl://` URL, with a connect listener**

```JavaScript
static Stream tls.connect(String url,
    Integer timeout,
    Function(Object ev) connectListener) async;
```

Parameters:
* url: String, specifies the URL to connect
* timeout: Integer, specifies the connection timeout, default is 0
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

Returns immediately; the outcome is delivered through the 'connect'/'error' events. timeout
bounds only the connect attempt (0 means no limit).

--------------------------
**Creates a non-blocking connection from an `ssl://` URL with an explicit context**

```JavaScript
static Stream tls.connect(String url,
    SecureContext secureContext,
    Function(Object ev) connectListener) async;
```

Parameters:
* url: String, specifies the URL to connect
* secureContext: [SecureContext](../../object/ifs/SecureContext.md), specifies the secure context
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

Returns immediately; the given [SecureContext](../../object/ifs/SecureContext.md) is used for the handshake and the outcome is
delivered through the 'connect'/'error' events.

--------------------------
**Creates a non-blocking connection from an `ssl://` URL with a context and a timeout**

```JavaScript
static Stream tls.connect(String url,
    SecureContext secureContext,
    Integer timeout,
    Function(Object ev) connectListener) async;
```

Parameters:
* url: String, specifies the URL to connect
* secureContext: [SecureContext](../../object/ifs/SecureContext.md), specifies the secure context
* timeout: Integer, specifies the connection timeout, default is 0
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

The most explicit URL listener form: secureContext supplies the handshake configuration,
timeout bounds the connect attempt and the outcome is delivered through the
'connect'/'error' events.

--------------------------
**Creates a non-blocking connection from an `ssl://` URL and an options [object](../../object/ifs/object.md)**

```JavaScript
static Stream tls.connect(String url,
    Object options,
    Function(Object ev) connectListener) async;
```

Parameters:
* url: String, specifies the URL to connect
* options: Object, specifies the connection options
* connectListener: Function(Object ev), specifies the once connect event listener

Returns:
* [Stream](../../object/ifs/Stream.md), returns the connected [Socket](../../object/ifs/Socket.md) [object](../../object/ifs/object.md)

Returns immediately; the TLS keys of options build the context while its `host`, `port` and
`timeout` keys are ignored (the URL provides the target), and the outcome is delivered
through the 'connect'/'error' events.

## Static Properties
        
### secureContext
**[SecureContext](../../object/ifs/SecureContext.md), The [process](process.md)-wide default [SecureContext](../../object/ifs/SecureContext.md)**

```JavaScript
static readonly SecureContext tls.secureContext;
```

Used when connect, new [TLSSocket](../../object/ifs/TLSSocket.md)() or createSecureContext() is called without an explicit
context. It is a client context, so the Mozilla roots are trusted; the same [object](../../object/ifs/object.md) is
exposed here for inspection or reuse. Node.js has no equivalent property, it exposes
rootCertificates and the DEFAULT_* [constants](constants.md) instead.

