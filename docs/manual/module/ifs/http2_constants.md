# Module http2_constants
The http2_constants [module](module.md) collects the HTTP/2 protocol [constants](constants.md) used by the [http2](http2.md)

[module](module.md): SETTINGS parameter ids and defaults, nghttp2 error codes, frame flags, stream
states, padding strategies, HTTP status codes, and the standard pseudo-header and header
names

The [module](module.md) mirrors the constant surface of the nghttp2 library bundled with fibjs and is
reached through the `constants` property of the [http2](http2.md) [module](module.md); it is not requireable on its
own. The exported names and values are identical to Node.js's `http2.constants` (240
entries, verified against Node.js v25.9.0):

- **SETTINGS**: `NGHTTP2_SETTINGS_*` ids (header table size, push, concurrent streams,
  initial window size, frame size, header list size, CONNECT protocol) and the matching
  `DEFAULT_SETTINGS_*` values assumed before a peer overrides them;
- **Error codes**: the `NGHTTP2_*` codes carried by RST_STREAM and GOAWAY frames, from
  `NGHTTP2_NO_ERROR` (0) to `NGHTTP2_HTTP_1_1_REQUIRED` (13); `NGHTTP2_ERR_FRAME_SIZE_ERROR`
  is an internal negative nghttp2 return value, not a wire code;
- **Frame flags**: the `NGHTTP2_FLAG_*` bit mask (ACK, END_STREAM, END_HEADERS, PADDED,
  PRIORITY) and `NGHTTP2_DEFAULT_WEIGHT`;
- **Streams**: `NGHTTP2_STREAM_STATE_*` state numbers;
- **Padding and session [types](types.md)**: `PADDING_STRATEGY_*` for outgoing DATA frames and
  `NGHTTP2_SESSION_SERVER` / `NGHTTP2_SESSION_CLIENT`;
- **Limits**: `MIN_MAX_FRAME_SIZE`, `MAX_MAX_FRAME_SIZE` and `MAX_INITIAL_WINDOW_SIZE`;
- **HTTP vocabulary**: `HTTP_STATUS_*`, `HTTP2_HEADER_*` (the pseudo-headers `:method`,
  `:[path](path.md)`, `:scheme`, `:authority`, `:status` and `:protocol` start with a colon) and
  `HTTP2_METHOD_*`.

Concepts:

- **SETTINGS negotiation**: each peer sends a SETTINGS frame when the connection starts; the
  id selects the parameter and the `DEFAULT_SETTINGS_*` values apply until the peer sends
  its own. `http2.getDefaultSettings()` maps the same defaults to parameter names, except
  that it reports `maxConcurrentStreams` 100, while the constant (and Node.js) use
  4294967295 for "unlimited".
- **Error codes**: RST_STREAM and GOAWAY carry an `NGHTTP2_*` code; 0 is NO_ERROR and the
  other defined values are 1..13. They are distinct from the internal negative
  `NGHTTP2_ERR_*` values, which surface as ordinary errors.
- **Flags are a bit mask**: END_STREAM and ACK share the value 1 because they belong to
  different frame [types](types.md); combine flags with the bitwise-or operator.
- **Pseudo-headers**: HTTP/2 header names are lowercase and pseudo-headers come before the
  regular headers; `HTTP2_HEADER_*` provides the conventional spellings.

Import:

```JavaScript
const constants = require('http2').constants;
```

Example 1 — the [constants](constants.md) in a local server round trip:

```JavaScript
const http2 = require('http2');
const tls = require('tls');
const crypto = require('crypto');
const constants = http2.constants;

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

const server = new http2.Server(ctx, 0, function() {});
server.on('session', (session) => {
    session.on('stream', (stream, headers) => {
        stream.respond({
            [constants.HTTP2_HEADER_STATUS]: constants.HTTP_STATUS_OK,
            [constants.HTTP2_HEADER_CONTENT_TYPE]: 'text/plain'
        });
        stream.write(constants.HTTP2_METHOD_GET + ' ' +
            headers[constants.HTTP2_HEADER_PATH]);
        stream.close();
    });
});
server.start();

const session = http2.connect('https://localhost:' + server.socket.localPort, {
    rejectUnauthorized: false,
    rejectUnverified: false
});
const stream = session.request({
    [constants.HTTP2_HEADER_METHOD]: constants.HTTP2_METHOD_GET,
    [constants.HTTP2_HEADER_PATH]: '/constants'
});
console.log(stream.readAll().toString()); // GET /constants
console.log(stream.headers[constants.HTTP2_HEADER_STATUS]); // 200

session.close();
server.stop();
```

Example 2 — SETTINGS ids and protocol defaults:

```JavaScript
const http2 = require('http2');
const constants = http2.constants;

// SETTINGS parameter ids (RFC 9113 section 6.5.2).
console.log(constants.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE); // 1
console.log(constants.NGHTTP2_SETTINGS_ENABLE_PUSH); // 2
console.log(constants.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS); // 3
console.log(constants.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE); // 4
console.log(constants.NGHTTP2_SETTINGS_MAX_FRAME_SIZE); // 5
console.log(constants.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE); // 6
console.log(constants.NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL); // 8

// Values assumed before the peer sends its own SETTINGS frame.
console.log(constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE); // 4096
console.log(constants.DEFAULT_SETTINGS_ENABLE_PUSH); // 1
console.log(constants.DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS); // 4294967295
console.log(constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE); // 65535
console.log(constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE); // 16384
console.log(constants.DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE); // 65535
console.log(constants.DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL); // 0

// getDefaultSettings() maps the same defaults to parameter names.
const settings = http2.getDefaultSettings();
console.log(settings.headerTableSize ===
    constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE); // true
console.log(settings.initialWindowSize ===
    constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE); // true
console.log(settings.maxFrameSize ===
    constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE); // true
console.log(settings.maxHeaderListSize ===
    constants.DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE); // true
```

Example 3 — error codes, flags and stream states:

```JavaScript
const constants = require('http2').constants;

// Error codes carried by RST_STREAM and GOAWAY frames.
console.log(constants.NGHTTP2_NO_ERROR, constants.NGHTTP2_PROTOCOL_ERROR,
    constants.NGHTTP2_FLOW_CONTROL_ERROR, constants.NGHTTP2_STREAM_CLOSED,
    constants.NGHTTP2_FRAME_SIZE_ERROR, constants.NGHTTP2_REFUSED_STREAM,
    constants.NGHTTP2_CANCEL, constants.NGHTTP2_ENHANCE_YOUR_CALM); // 0 1 3 5 6 7 8 11

// Frame flags are a bit mask; END_STREAM and ACK share 1 on different frame types.
console.log(constants.NGHTTP2_FLAG_END_STREAM |
    constants.NGHTTP2_FLAG_END_HEADERS); // 5
console.log(constants.NGHTTP2_FLAG_NONE, constants.NGHTTP2_FLAG_PADDED,
    constants.NGHTTP2_FLAG_PRIORITY); // 0 8 32

// Stream state numbers, frame limits and padding strategies.
console.log(constants.NGHTTP2_STREAM_STATE_IDLE, constants.NGHTTP2_STREAM_STATE_OPEN,
    constants.NGHTTP2_STREAM_STATE_CLOSED); // 1 2 7
console.log(constants.MIN_MAX_FRAME_SIZE, constants.MAX_MAX_FRAME_SIZE,
    constants.MAX_INITIAL_WINDOW_SIZE); // 16384 16777215 2147483647
console.log(constants.PADDING_STRATEGY_NONE, constants.PADDING_STRATEGY_ALIGNED,
    constants.PADDING_STRATEGY_CALLBACK,
    constants.PADDING_STRATEGY_MAX); // 0 1 1 2
```

## Constants
        
### DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL
**whether the CONNECT protocol extension is enabled by default**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL = 0;
```

--------------------------
### DEFAULT_SETTINGS_ENABLE_PUSH
**whether server push is enabled by default**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_ENABLE_PUSH = 1;
```

--------------------------
### DEFAULT_SETTINGS_HEADER_TABLE_SIZE
**default header table size (bytes)**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE = 4096;
```

--------------------------
### DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE
**default initial stream window size (bytes)**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE = 65535;
```

--------------------------
### DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS
**default maximum number of concurrent streams (unlimited)**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS = 4294967295;
```

--------------------------
### DEFAULT_SETTINGS_MAX_FRAME_SIZE
**default maximum frame size (bytes)**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE = 16384;
```

--------------------------
### DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE
**default maximum header list size (bytes)**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE = 65535;
```

--------------------------
### HTTP_STATUS_CONTINUE
**HTTP status code: Continue**

```JavaScript
const http2_constants.HTTP_STATUS_CONTINUE = 100;
```

--------------------------
### HTTP_STATUS_SWITCHING_PROTOCOLS
**HTTP status code: Switching Protocols**

```JavaScript
const http2_constants.HTTP_STATUS_SWITCHING_PROTOCOLS = 101;
```

--------------------------
### HTTP_STATUS_PROCESSING
**HTTP status code: Processing**

```JavaScript
const http2_constants.HTTP_STATUS_PROCESSING = 102;
```

--------------------------
### HTTP_STATUS_EARLY_HINTS
**HTTP status code: Early Hints**

```JavaScript
const http2_constants.HTTP_STATUS_EARLY_HINTS = 103;
```

--------------------------
### HTTP_STATUS_OK
**HTTP status code: OK**

```JavaScript
const http2_constants.HTTP_STATUS_OK = 200;
```

--------------------------
### HTTP_STATUS_CREATED
**HTTP status code: Created**

```JavaScript
const http2_constants.HTTP_STATUS_CREATED = 201;
```

--------------------------
### HTTP_STATUS_ACCEPTED
**HTTP status code: Accepted**

```JavaScript
const http2_constants.HTTP_STATUS_ACCEPTED = 202;
```

--------------------------
### HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION
**HTTP status code: Non-Authoritative Information**

```JavaScript
const http2_constants.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION = 203;
```

--------------------------
### HTTP_STATUS_NO_CONTENT
**HTTP status code: No Content**

```JavaScript
const http2_constants.HTTP_STATUS_NO_CONTENT = 204;
```

--------------------------
### HTTP_STATUS_RESET_CONTENT
**HTTP status code: Reset Content**

```JavaScript
const http2_constants.HTTP_STATUS_RESET_CONTENT = 205;
```

--------------------------
### HTTP_STATUS_PARTIAL_CONTENT
**HTTP status code: Partial Content**

```JavaScript
const http2_constants.HTTP_STATUS_PARTIAL_CONTENT = 206;
```

--------------------------
### HTTP_STATUS_MULTI_STATUS
**HTTP status code: Multi-Status**

```JavaScript
const http2_constants.HTTP_STATUS_MULTI_STATUS = 207;
```

--------------------------
### HTTP_STATUS_ALREADY_REPORTED
**HTTP status code: Already Reported**

```JavaScript
const http2_constants.HTTP_STATUS_ALREADY_REPORTED = 208;
```

--------------------------
### HTTP_STATUS_IM_USED
**HTTP status code: IM Used**

```JavaScript
const http2_constants.HTTP_STATUS_IM_USED = 226;
```

--------------------------
### HTTP_STATUS_MULTIPLE_CHOICES
**HTTP status code: Multiple Choices**

```JavaScript
const http2_constants.HTTP_STATUS_MULTIPLE_CHOICES = 300;
```

--------------------------
### HTTP_STATUS_MOVED_PERMANENTLY
**HTTP status code: Moved Permanently**

```JavaScript
const http2_constants.HTTP_STATUS_MOVED_PERMANENTLY = 301;
```

--------------------------
### HTTP_STATUS_FOUND
**HTTP status code: Found**

```JavaScript
const http2_constants.HTTP_STATUS_FOUND = 302;
```

--------------------------
### HTTP_STATUS_SEE_OTHER
**HTTP status code: See Other**

```JavaScript
const http2_constants.HTTP_STATUS_SEE_OTHER = 303;
```

--------------------------
### HTTP_STATUS_NOT_MODIFIED
**HTTP status code: Not Modified**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_MODIFIED = 304;
```

--------------------------
### HTTP_STATUS_USE_PROXY
**HTTP status code: Use Proxy**

```JavaScript
const http2_constants.HTTP_STATUS_USE_PROXY = 305;
```

--------------------------
### HTTP_STATUS_TEMPORARY_REDIRECT
**HTTP status code: Temporary Redirect**

```JavaScript
const http2_constants.HTTP_STATUS_TEMPORARY_REDIRECT = 307;
```

--------------------------
### HTTP_STATUS_PERMANENT_REDIRECT
**HTTP status code: Permanent Redirect**

```JavaScript
const http2_constants.HTTP_STATUS_PERMANENT_REDIRECT = 308;
```

--------------------------
### HTTP_STATUS_BAD_REQUEST
**HTTP status code: Bad Request**

```JavaScript
const http2_constants.HTTP_STATUS_BAD_REQUEST = 400;
```

--------------------------
### HTTP_STATUS_UNAUTHORIZED
**HTTP status code: Unauthorized**

```JavaScript
const http2_constants.HTTP_STATUS_UNAUTHORIZED = 401;
```

--------------------------
### HTTP_STATUS_PAYMENT_REQUIRED
**HTTP status code: Payment Required**

```JavaScript
const http2_constants.HTTP_STATUS_PAYMENT_REQUIRED = 402;
```

--------------------------
### HTTP_STATUS_FORBIDDEN
**HTTP status code: Forbidden**

```JavaScript
const http2_constants.HTTP_STATUS_FORBIDDEN = 403;
```

--------------------------
### HTTP_STATUS_NOT_FOUND
**HTTP status code: Not Found**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_FOUND = 404;
```

--------------------------
### HTTP_STATUS_METHOD_NOT_ALLOWED
**HTTP status code: Method Not Allowed**

```JavaScript
const http2_constants.HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
```

--------------------------
### HTTP_STATUS_NOT_ACCEPTABLE
**HTTP status code: Not Acceptable**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_ACCEPTABLE = 406;
```

--------------------------
### HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED
**HTTP status code: Proxy Authentication Required**

```JavaScript
const http2_constants.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED = 407;
```

--------------------------
### HTTP_STATUS_REQUEST_TIMEOUT
**HTTP status code: Request Timeout**

```JavaScript
const http2_constants.HTTP_STATUS_REQUEST_TIMEOUT = 408;
```

--------------------------
### HTTP_STATUS_CONFLICT
**HTTP status code: Conflict**

```JavaScript
const http2_constants.HTTP_STATUS_CONFLICT = 409;
```

--------------------------
### HTTP_STATUS_GONE
**HTTP status code: Gone**

```JavaScript
const http2_constants.HTTP_STATUS_GONE = 410;
```

--------------------------
### HTTP_STATUS_LENGTH_REQUIRED
**HTTP status code: Length Required**

```JavaScript
const http2_constants.HTTP_STATUS_LENGTH_REQUIRED = 411;
```

--------------------------
### HTTP_STATUS_PRECONDITION_FAILED
**HTTP status code: Precondition Failed**

```JavaScript
const http2_constants.HTTP_STATUS_PRECONDITION_FAILED = 412;
```

--------------------------
### HTTP_STATUS_PAYLOAD_TOO_LARGE
**HTTP status code: Payload Too Large**

```JavaScript
const http2_constants.HTTP_STATUS_PAYLOAD_TOO_LARGE = 413;
```

--------------------------
### HTTP_STATUS_URI_TOO_LONG
**HTTP status code: URI Too Long**

```JavaScript
const http2_constants.HTTP_STATUS_URI_TOO_LONG = 414;
```

--------------------------
### HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
**HTTP status code: Unsupported Media Type**

```JavaScript
const http2_constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE = 415;
```

--------------------------
### HTTP_STATUS_RANGE_NOT_SATISFIABLE
**HTTP status code: Range Not Satisfiable**

```JavaScript
const http2_constants.HTTP_STATUS_RANGE_NOT_SATISFIABLE = 416;
```

--------------------------
### HTTP_STATUS_EXPECTATION_FAILED
**HTTP status code: Expectation Failed**

```JavaScript
const http2_constants.HTTP_STATUS_EXPECTATION_FAILED = 417;
```

--------------------------
### HTTP_STATUS_TEAPOT
**HTTP status code: I'm a Teapot**

```JavaScript
const http2_constants.HTTP_STATUS_TEAPOT = 418;
```

--------------------------
### HTTP_STATUS_MISDIRECTED_REQUEST
**HTTP status code: Misdirected Request**

```JavaScript
const http2_constants.HTTP_STATUS_MISDIRECTED_REQUEST = 421;
```

--------------------------
### HTTP_STATUS_UNPROCESSABLE_ENTITY
**HTTP status code: Unprocessable Entity**

```JavaScript
const http2_constants.HTTP_STATUS_UNPROCESSABLE_ENTITY = 422;
```

--------------------------
### HTTP_STATUS_LOCKED
**HTTP status code: Locked**

```JavaScript
const http2_constants.HTTP_STATUS_LOCKED = 423;
```

--------------------------
### HTTP_STATUS_FAILED_DEPENDENCY
**HTTP status code: Failed Dependency**

```JavaScript
const http2_constants.HTTP_STATUS_FAILED_DEPENDENCY = 424;
```

--------------------------
### HTTP_STATUS_TOO_EARLY
**HTTP status code: Too Early**

```JavaScript
const http2_constants.HTTP_STATUS_TOO_EARLY = 425;
```

--------------------------
### HTTP_STATUS_UPGRADE_REQUIRED
**HTTP status code: Upgrade Required**

```JavaScript
const http2_constants.HTTP_STATUS_UPGRADE_REQUIRED = 426;
```

--------------------------
### HTTP_STATUS_PRECONDITION_REQUIRED
**HTTP status code: Precondition Required**

```JavaScript
const http2_constants.HTTP_STATUS_PRECONDITION_REQUIRED = 428;
```

--------------------------
### HTTP_STATUS_TOO_MANY_REQUESTS
**HTTP status code: Too Many Requests**

```JavaScript
const http2_constants.HTTP_STATUS_TOO_MANY_REQUESTS = 429;
```

--------------------------
### HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE
**HTTP status code: Request Header Fields Too Large**

```JavaScript
const http2_constants.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
```

--------------------------
### HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS
**HTTP status code: Unavailable For Legal Reasons**

```JavaScript
const http2_constants.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS = 451;
```

--------------------------
### HTTP_STATUS_INTERNAL_SERVER_ERROR
**HTTP status code: Internal Server Error**

```JavaScript
const http2_constants.HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
```

--------------------------
### HTTP_STATUS_NOT_IMPLEMENTED
**HTTP status code: Not Implemented**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_IMPLEMENTED = 501;
```

--------------------------
### HTTP_STATUS_BAD_GATEWAY
**HTTP status code: Bad Gateway**

```JavaScript
const http2_constants.HTTP_STATUS_BAD_GATEWAY = 502;
```

--------------------------
### HTTP_STATUS_SERVICE_UNAVAILABLE
**HTTP status code: [Service](../../object/ifs/Service.md) Unavailable**

```JavaScript
const http2_constants.HTTP_STATUS_SERVICE_UNAVAILABLE = 503;
```

--------------------------
### HTTP_STATUS_GATEWAY_TIMEOUT
**HTTP status code: Gateway Timeout**

```JavaScript
const http2_constants.HTTP_STATUS_GATEWAY_TIMEOUT = 504;
```

--------------------------
### HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED
**HTTP status code: HTTP Version Not Supported**

```JavaScript
const http2_constants.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED = 505;
```

--------------------------
### HTTP_STATUS_VARIANT_ALSO_NEGOTIATES
**HTTP status code: Variant Also Negotiates**

```JavaScript
const http2_constants.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES = 506;
```

--------------------------
### HTTP_STATUS_INSUFFICIENT_STORAGE
**HTTP status code: Insufficient Storage**

```JavaScript
const http2_constants.HTTP_STATUS_INSUFFICIENT_STORAGE = 507;
```

--------------------------
### HTTP_STATUS_LOOP_DETECTED
**HTTP status code: Loop Detected**

```JavaScript
const http2_constants.HTTP_STATUS_LOOP_DETECTED = 508;
```

--------------------------
### HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED
**HTTP status code: Bandwidth Limit Exceeded**

```JavaScript
const http2_constants.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED = 509;
```

--------------------------
### HTTP_STATUS_NOT_EXTENDED
**HTTP status code: Not Extended**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_EXTENDED = 510;
```

--------------------------
### HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED
**HTTP status code: Network Authentication Required**

```JavaScript
const http2_constants.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED = 511;
```

--------------------------
### HTTP2_HEADER_AUTHORITY
**HTTP/2 pseudo-header: :authority**

```JavaScript
const http2_constants.HTTP2_HEADER_AUTHORITY = ":authority";
```

--------------------------
### HTTP2_HEADER_ACCEPT
**HTTP/2 header: accept**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT = "accept";
```

--------------------------
### HTTP2_HEADER_ACCEPT_CHARSET
**HTTP/2 header: accept-charset**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_CHARSET = "accept-charset";
```

--------------------------
### HTTP2_HEADER_ACCEPT_ENCODING
**HTTP/2 header: accept-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_ENCODING = "accept-encoding";
```

--------------------------
### HTTP2_HEADER_ACCEPT_LANGUAGE
**HTTP/2 header: accept-language**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_LANGUAGE = "accept-language";
```

--------------------------
### HTTP2_HEADER_ACCEPT_RANGES
**HTTP/2 header: accept-ranges**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_RANGES = "accept-ranges";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS
**HTTP/2 header: access-control-allow-credentials**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS = "access-control-allow-credentials";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS
**HTTP/2 header: access-control-allow-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS = "access-control-allow-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS
**HTTP/2 header: access-control-allow-methods**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS = "access-control-allow-methods";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN
**HTTP/2 header: access-control-allow-origin**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = "access-control-allow-origin";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS
**HTTP/2 header: access-control-expose-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS = "access-control-expose-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE
**HTTP/2 header: access-control-max-age**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE = "access-control-max-age";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS
**HTTP/2 header: access-control-request-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS = "access-control-request-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD
**HTTP/2 header: access-control-request-method**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD = "access-control-request-method";
```

--------------------------
### HTTP2_HEADER_AGE
**HTTP/2 header: age**

```JavaScript
const http2_constants.HTTP2_HEADER_AGE = "age";
```

--------------------------
### HTTP2_HEADER_ALLOW
**HTTP/2 header: allow**

```JavaScript
const http2_constants.HTTP2_HEADER_ALLOW = "allow";
```

--------------------------
### HTTP2_HEADER_ALT_SVC
**HTTP/2 header: alt-svc**

```JavaScript
const http2_constants.HTTP2_HEADER_ALT_SVC = "alt-svc";
```

--------------------------
### HTTP2_HEADER_AUTHORIZATION
**HTTP/2 header: authorization**

```JavaScript
const http2_constants.HTTP2_HEADER_AUTHORIZATION = "authorization";
```

--------------------------
### HTTP2_HEADER_CACHE_CONTROL
**HTTP/2 header: cache-control**

```JavaScript
const http2_constants.HTTP2_HEADER_CACHE_CONTROL = "cache-control";
```

--------------------------
### HTTP2_HEADER_CONNECTION
**HTTP/2 header: connection**

```JavaScript
const http2_constants.HTTP2_HEADER_CONNECTION = "connection";
```

--------------------------
### HTTP2_HEADER_CONTENT_DISPOSITION
**HTTP/2 header: content-disposition**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_DISPOSITION = "content-disposition";
```

--------------------------
### HTTP2_HEADER_CONTENT_ENCODING
**HTTP/2 header: content-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_ENCODING = "content-encoding";
```

--------------------------
### HTTP2_HEADER_CONTENT_LANGUAGE
**HTTP/2 header: content-language**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LANGUAGE = "content-language";
```

--------------------------
### HTTP2_HEADER_CONTENT_LENGTH
**HTTP/2 header: content-length**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LENGTH = "content-length";
```

--------------------------
### HTTP2_HEADER_CONTENT_LOCATION
**HTTP/2 header: content-location**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LOCATION = "content-location";
```

--------------------------
### HTTP2_HEADER_CONTENT_MD5
**HTTP/2 header: content-md5**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_MD5 = "content-md5";
```

--------------------------
### HTTP2_HEADER_CONTENT_RANGE
**HTTP/2 header: content-range**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_RANGE = "content-range";
```

--------------------------
### HTTP2_HEADER_CONTENT_SECURITY_POLICY
**HTTP/2 header: content-security-policy**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_SECURITY_POLICY = "content-security-policy";
```

--------------------------
### HTTP2_HEADER_CONTENT_TYPE
**HTTP/2 header: content-type**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_TYPE = "content-type";
```

--------------------------
### HTTP2_HEADER_COOKIE
**HTTP/2 header: cookie**

```JavaScript
const http2_constants.HTTP2_HEADER_COOKIE = "cookie";
```

--------------------------
### HTTP2_HEADER_DATE
**HTTP/2 header: date**

```JavaScript
const http2_constants.HTTP2_HEADER_DATE = "date";
```

--------------------------
### HTTP2_HEADER_DNT
**HTTP/2 header: dnt**

```JavaScript
const http2_constants.HTTP2_HEADER_DNT = "dnt";
```

--------------------------
### HTTP2_HEADER_EARLY_DATA
**HTTP/2 header: early-data**

```JavaScript
const http2_constants.HTTP2_HEADER_EARLY_DATA = "early-data";
```

--------------------------
### HTTP2_HEADER_ETAG
**HTTP/2 header: etag**

```JavaScript
const http2_constants.HTTP2_HEADER_ETAG = "etag";
```

--------------------------
### HTTP2_HEADER_METHOD
**HTTP/2 pseudo-header: :method**

```JavaScript
const http2_constants.HTTP2_HEADER_METHOD = ":method";
```

--------------------------
### HTTP2_HEADER_EXPECT
**HTTP/2 header: expect**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPECT = "expect";
```

--------------------------
### HTTP2_HEADER_EXPECT_CT
**HTTP/2 header: expect-ct**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPECT_CT = "expect-ct";
```

--------------------------
### HTTP2_HEADER_EXPIRES
**HTTP/2 header: expires**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPIRES = "expires";
```

--------------------------
### HTTP2_HEADER_FORWARDED
**HTTP/2 header: forwarded**

```JavaScript
const http2_constants.HTTP2_HEADER_FORWARDED = "forwarded";
```

--------------------------
### HTTP2_HEADER_FROM
**HTTP/2 header: from**

```JavaScript
const http2_constants.HTTP2_HEADER_FROM = "from";
```

--------------------------
### HTTP2_HEADER_HOST
**HTTP/2 header: host**

```JavaScript
const http2_constants.HTTP2_HEADER_HOST = "host";
```

--------------------------
### HTTP2_HEADER_HTTP2_SETTINGS
**HTTP/2 header: [http2](http2.md)-settings**

```JavaScript
const http2_constants.HTTP2_HEADER_HTTP2_SETTINGS = "http2-settings";
```

--------------------------
### HTTP2_HEADER_IF_MATCH
**HTTP/2 header: if-match**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_MATCH = "if-match";
```

--------------------------
### HTTP2_HEADER_IF_MODIFIED_SINCE
**HTTP/2 header: if-modified-since**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_MODIFIED_SINCE = "if-modified-since";
```

--------------------------
### HTTP2_HEADER_IF_NONE_MATCH
**HTTP/2 header: if-none-match**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_NONE_MATCH = "if-none-match";
```

--------------------------
### HTTP2_HEADER_IF_RANGE
**HTTP/2 header: if-range**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_RANGE = "if-range";
```

--------------------------
### HTTP2_HEADER_IF_UNMODIFIED_SINCE
**HTTP/2 header: if-unmodified-since**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_UNMODIFIED_SINCE = "if-unmodified-since";
```

--------------------------
### HTTP2_HEADER_KEEP_ALIVE
**HTTP/2 header: keep-alive**

```JavaScript
const http2_constants.HTTP2_HEADER_KEEP_ALIVE = "keep-alive";
```

--------------------------
### HTTP2_HEADER_LAST_MODIFIED
**HTTP/2 header: last-modified**

```JavaScript
const http2_constants.HTTP2_HEADER_LAST_MODIFIED = "last-modified";
```

--------------------------
### HTTP2_HEADER_LINK
**HTTP/2 header: link**

```JavaScript
const http2_constants.HTTP2_HEADER_LINK = "link";
```

--------------------------
### HTTP2_HEADER_LOCATION
**HTTP/2 header: location**

```JavaScript
const http2_constants.HTTP2_HEADER_LOCATION = "location";
```

--------------------------
### HTTP2_HEADER_MAX_FORWARDS
**HTTP/2 header: max-forwards**

```JavaScript
const http2_constants.HTTP2_HEADER_MAX_FORWARDS = "max-forwards";
```

--------------------------
### HTTP2_HEADER_ORIGIN
**HTTP/2 header: origin**

```JavaScript
const http2_constants.HTTP2_HEADER_ORIGIN = "origin";
```

--------------------------
### HTTP2_HEADER_PATH
**HTTP/2 pseudo-header: :[path](path.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_PATH = ":path";
```

--------------------------
### HTTP2_HEADER_PREFER
**HTTP/2 header: prefer**

```JavaScript
const http2_constants.HTTP2_HEADER_PREFER = "prefer";
```

--------------------------
### HTTP2_HEADER_PRIORITY
**HTTP/2 header: priority**

```JavaScript
const http2_constants.HTTP2_HEADER_PRIORITY = "priority";
```

--------------------------
### HTTP2_HEADER_PROTOCOL
**HTTP/2 pseudo-header: :protocol**

```JavaScript
const http2_constants.HTTP2_HEADER_PROTOCOL = ":protocol";
```

--------------------------
### HTTP2_HEADER_PROXY_AUTHENTICATE
**HTTP/2 header: proxy-authenticate**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_AUTHENTICATE = "proxy-authenticate";
```

--------------------------
### HTTP2_HEADER_PROXY_AUTHORIZATION
**HTTP/2 header: proxy-authorization**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_AUTHORIZATION = "proxy-authorization";
```

--------------------------
### HTTP2_HEADER_PROXY_CONNECTION
**HTTP/2 header: proxy-connection**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_CONNECTION = "proxy-connection";
```

--------------------------
### HTTP2_HEADER_PURPOSE
**HTTP/2 header: purpose**

```JavaScript
const http2_constants.HTTP2_HEADER_PURPOSE = "purpose";
```

--------------------------
### HTTP2_HEADER_RANGE
**HTTP/2 header: range**

```JavaScript
const http2_constants.HTTP2_HEADER_RANGE = "range";
```

--------------------------
### HTTP2_HEADER_REFERER
**HTTP/2 header: referer**

```JavaScript
const http2_constants.HTTP2_HEADER_REFERER = "referer";
```

--------------------------
### HTTP2_HEADER_REFRESH
**HTTP/2 header: refresh**

```JavaScript
const http2_constants.HTTP2_HEADER_REFRESH = "refresh";
```

--------------------------
### HTTP2_HEADER_RETRY_AFTER
**HTTP/2 header: retry-after**

```JavaScript
const http2_constants.HTTP2_HEADER_RETRY_AFTER = "retry-after";
```

--------------------------
### HTTP2_HEADER_SCHEME
**HTTP/2 pseudo-header: :scheme**

```JavaScript
const http2_constants.HTTP2_HEADER_SCHEME = ":scheme";
```

--------------------------
### HTTP2_HEADER_SERVER
**HTTP/2 header: server**

```JavaScript
const http2_constants.HTTP2_HEADER_SERVER = "server";
```

--------------------------
### HTTP2_HEADER_SET_COOKIE
**HTTP/2 header: set-cookie**

```JavaScript
const http2_constants.HTTP2_HEADER_SET_COOKIE = "set-cookie";
```

--------------------------
### HTTP2_HEADER_STATUS
**HTTP/2 pseudo-header: :status**

```JavaScript
const http2_constants.HTTP2_HEADER_STATUS = ":status";
```

--------------------------
### HTTP2_HEADER_STRICT_TRANSPORT_SECURITY
**HTTP/2 header: strict-transport-security**

```JavaScript
const http2_constants.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY = "strict-transport-security";
```

--------------------------
### HTTP2_HEADER_TE
**HTTP/2 header: te**

```JavaScript
const http2_constants.HTTP2_HEADER_TE = "te";
```

--------------------------
### HTTP2_HEADER_TIMING_ALLOW_ORIGIN
**HTTP/2 header: timing-allow-origin**

```JavaScript
const http2_constants.HTTP2_HEADER_TIMING_ALLOW_ORIGIN = "timing-allow-origin";
```

--------------------------
### HTTP2_HEADER_TK
**HTTP/2 header: tk**

```JavaScript
const http2_constants.HTTP2_HEADER_TK = "tk";
```

--------------------------
### HTTP2_HEADER_TRAILER
**HTTP/2 header: trailer**

```JavaScript
const http2_constants.HTTP2_HEADER_TRAILER = "trailer";
```

--------------------------
### HTTP2_HEADER_TRANSFER_ENCODING
**HTTP/2 header: transfer-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_TRANSFER_ENCODING = "transfer-encoding";
```

--------------------------
### HTTP2_HEADER_UPGRADE
**HTTP/2 header: upgrade**

```JavaScript
const http2_constants.HTTP2_HEADER_UPGRADE = "upgrade";
```

--------------------------
### HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS
**HTTP/2 header: upgrade-insecure-requests**

```JavaScript
const http2_constants.HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests";
```

--------------------------
### HTTP2_HEADER_USER_AGENT
**HTTP/2 header: user-agent**

```JavaScript
const http2_constants.HTTP2_HEADER_USER_AGENT = "user-agent";
```

--------------------------
### HTTP2_HEADER_VARY
**HTTP/2 header: vary**

```JavaScript
const http2_constants.HTTP2_HEADER_VARY = "vary";
```

--------------------------
### HTTP2_HEADER_VIA
**HTTP/2 header: via**

```JavaScript
const http2_constants.HTTP2_HEADER_VIA = "via";
```

--------------------------
### HTTP2_HEADER_WARNING
**HTTP/2 header: warning**

```JavaScript
const http2_constants.HTTP2_HEADER_WARNING = "warning";
```

--------------------------
### HTTP2_HEADER_WWW_AUTHENTICATE
**HTTP/2 header: www-authenticate**

```JavaScript
const http2_constants.HTTP2_HEADER_WWW_AUTHENTICATE = "www-authenticate";
```

--------------------------
### HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS
**HTTP/2 header: x-content-type-options**

```JavaScript
const http2_constants.HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS = "x-content-type-options";
```

--------------------------
### HTTP2_HEADER_X_FORWARDED_FOR
**HTTP/2 header: x-forwarded-for**

```JavaScript
const http2_constants.HTTP2_HEADER_X_FORWARDED_FOR = "x-forwarded-for";
```

--------------------------
### HTTP2_HEADER_X_FRAME_OPTIONS
**HTTP/2 header: x-frame-options**

```JavaScript
const http2_constants.HTTP2_HEADER_X_FRAME_OPTIONS = "x-frame-options";
```

--------------------------
### HTTP2_HEADER_X_XSS_PROTECTION
**HTTP/2 header: x-xss-protection**

```JavaScript
const http2_constants.HTTP2_HEADER_X_XSS_PROTECTION = "x-xss-protection";
```

--------------------------
### HTTP2_METHOD_ACL
**HTTP/2 method: ACL**

```JavaScript
const http2_constants.HTTP2_METHOD_ACL = "ACL";
```

--------------------------
### HTTP2_METHOD_BASELINE_CONTROL
**HTTP/2 method: BASELINE-CONTROL**

```JavaScript
const http2_constants.HTTP2_METHOD_BASELINE_CONTROL = "BASELINE-CONTROL";
```

--------------------------
### HTTP2_METHOD_BIND
**HTTP/2 method: BIND**

```JavaScript
const http2_constants.HTTP2_METHOD_BIND = "BIND";
```

--------------------------
### HTTP2_METHOD_CHECKIN
**HTTP/2 method: CHECKIN**

```JavaScript
const http2_constants.HTTP2_METHOD_CHECKIN = "CHECKIN";
```

--------------------------
### HTTP2_METHOD_CHECKOUT
**HTTP/2 method: CHECKOUT**

```JavaScript
const http2_constants.HTTP2_METHOD_CHECKOUT = "CHECKOUT";
```

--------------------------
### HTTP2_METHOD_CONNECT
**HTTP/2 method: CONNECT**

```JavaScript
const http2_constants.HTTP2_METHOD_CONNECT = "CONNECT";
```

--------------------------
### HTTP2_METHOD_COPY
**HTTP/2 method: COPY**

```JavaScript
const http2_constants.HTTP2_METHOD_COPY = "COPY";
```

--------------------------
### HTTP2_METHOD_DELETE
**HTTP/2 method: DELETE**

```JavaScript
const http2_constants.HTTP2_METHOD_DELETE = "DELETE";
```

--------------------------
### HTTP2_METHOD_GET
**HTTP/2 method: GET**

```JavaScript
const http2_constants.HTTP2_METHOD_GET = "GET";
```

--------------------------
### HTTP2_METHOD_HEAD
**HTTP/2 method: HEAD**

```JavaScript
const http2_constants.HTTP2_METHOD_HEAD = "HEAD";
```

--------------------------
### HTTP2_METHOD_LABEL
**HTTP/2 method: LABEL**

```JavaScript
const http2_constants.HTTP2_METHOD_LABEL = "LABEL";
```

--------------------------
### HTTP2_METHOD_LINK
**HTTP/2 method: LINK**

```JavaScript
const http2_constants.HTTP2_METHOD_LINK = "LINK";
```

--------------------------
### HTTP2_METHOD_LOCK
**HTTP/2 method: LOCK**

```JavaScript
const http2_constants.HTTP2_METHOD_LOCK = "LOCK";
```

--------------------------
### HTTP2_METHOD_MERGE
**HTTP/2 method: MERGE**

```JavaScript
const http2_constants.HTTP2_METHOD_MERGE = "MERGE";
```

--------------------------
### HTTP2_METHOD_MKACTIVITY
**HTTP/2 method: MKACTIVITY**

```JavaScript
const http2_constants.HTTP2_METHOD_MKACTIVITY = "MKACTIVITY";
```

--------------------------
### HTTP2_METHOD_MKCALENDAR
**HTTP/2 method: MKCALENDAR**

```JavaScript
const http2_constants.HTTP2_METHOD_MKCALENDAR = "MKCALENDAR";
```

--------------------------
### HTTP2_METHOD_MKCOL
**HTTP/2 method: MKCOL**

```JavaScript
const http2_constants.HTTP2_METHOD_MKCOL = "MKCOL";
```

--------------------------
### HTTP2_METHOD_MKREDIRECTREF
**HTTP/2 method: MKREDIRECTREF**

```JavaScript
const http2_constants.HTTP2_METHOD_MKREDIRECTREF = "MKREDIRECTREF";
```

--------------------------
### HTTP2_METHOD_MKWORKSPACE
**HTTP/2 method: MKWORKSPACE**

```JavaScript
const http2_constants.HTTP2_METHOD_MKWORKSPACE = "MKWORKSPACE";
```

--------------------------
### HTTP2_METHOD_MOVE
**HTTP/2 method: MOVE**

```JavaScript
const http2_constants.HTTP2_METHOD_MOVE = "MOVE";
```

--------------------------
### HTTP2_METHOD_OPTIONS
**HTTP/2 method: OPTIONS**

```JavaScript
const http2_constants.HTTP2_METHOD_OPTIONS = "OPTIONS";
```

--------------------------
### HTTP2_METHOD_ORDERPATCH
**HTTP/2 method: ORDERPATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_ORDERPATCH = "ORDERPATCH";
```

--------------------------
### HTTP2_METHOD_PATCH
**HTTP/2 method: PATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_PATCH = "PATCH";
```

--------------------------
### HTTP2_METHOD_POST
**HTTP/2 method: POST**

```JavaScript
const http2_constants.HTTP2_METHOD_POST = "POST";
```

--------------------------
### HTTP2_METHOD_PRI
**HTTP/2 method: PRI**

```JavaScript
const http2_constants.HTTP2_METHOD_PRI = "PRI";
```

--------------------------
### HTTP2_METHOD_PROPFIND
**HTTP/2 method: PROPFIND**

```JavaScript
const http2_constants.HTTP2_METHOD_PROPFIND = "PROPFIND";
```

--------------------------
### HTTP2_METHOD_PROPPATCH
**HTTP/2 method: PROPPATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_PROPPATCH = "PROPPATCH";
```

--------------------------
### HTTP2_METHOD_PUT
**HTTP/2 method: PUT**

```JavaScript
const http2_constants.HTTP2_METHOD_PUT = "PUT";
```

--------------------------
### HTTP2_METHOD_REBIND
**HTTP/2 method: REBIND**

```JavaScript
const http2_constants.HTTP2_METHOD_REBIND = "REBIND";
```

--------------------------
### HTTP2_METHOD_REPORT
**HTTP/2 method: REPORT**

```JavaScript
const http2_constants.HTTP2_METHOD_REPORT = "REPORT";
```

--------------------------
### HTTP2_METHOD_SEARCH
**HTTP/2 method: SEARCH**

```JavaScript
const http2_constants.HTTP2_METHOD_SEARCH = "SEARCH";
```

--------------------------
### HTTP2_METHOD_TRACE
**HTTP/2 method: TRACE**

```JavaScript
const http2_constants.HTTP2_METHOD_TRACE = "TRACE";
```

--------------------------
### HTTP2_METHOD_UNBIND
**HTTP/2 method: UNBIND**

```JavaScript
const http2_constants.HTTP2_METHOD_UNBIND = "UNBIND";
```

--------------------------
### HTTP2_METHOD_UNCHECKOUT
**HTTP/2 method: UNCHECKOUT**

```JavaScript
const http2_constants.HTTP2_METHOD_UNCHECKOUT = "UNCHECKOUT";
```

--------------------------
### HTTP2_METHOD_UNLINK
**HTTP/2 method: UNLINK**

```JavaScript
const http2_constants.HTTP2_METHOD_UNLINK = "UNLINK";
```

--------------------------
### HTTP2_METHOD_UNLOCK
**HTTP/2 method: UNLOCK**

```JavaScript
const http2_constants.HTTP2_METHOD_UNLOCK = "UNLOCK";
```

--------------------------
### HTTP2_METHOD_UPDATE
**HTTP/2 method: UPDATE**

```JavaScript
const http2_constants.HTTP2_METHOD_UPDATE = "UPDATE";
```

--------------------------
### HTTP2_METHOD_UPDATEREDIRECTREF
**HTTP/2 method: UPDATEREDIRECTREF**

```JavaScript
const http2_constants.HTTP2_METHOD_UPDATEREDIRECTREF = "UPDATEREDIRECTREF";
```

--------------------------
### HTTP2_METHOD_VERSION_CONTROL
**HTTP/2 method: VERSION-CONTROL**

```JavaScript
const http2_constants.HTTP2_METHOD_VERSION_CONTROL = "VERSION-CONTROL";
```

--------------------------
### MAX_INITIAL_WINDOW_SIZE
**maximum value of the initial window size**

```JavaScript
const http2_constants.MAX_INITIAL_WINDOW_SIZE = 2147483647;
```

--------------------------
### MAX_MAX_FRAME_SIZE
**maximum frame size value**

```JavaScript
const http2_constants.MAX_MAX_FRAME_SIZE = 16777215;
```

--------------------------
### MIN_MAX_FRAME_SIZE
**minimum frame size value**

```JavaScript
const http2_constants.MIN_MAX_FRAME_SIZE = 16384;
```

--------------------------
### NGHTTP2_NO_ERROR
**NGHTTP2 error: no error**

```JavaScript
const http2_constants.NGHTTP2_NO_ERROR = 0;
```

--------------------------
### NGHTTP2_PROTOCOL_ERROR
**NGHTTP2 error: protocol error**

```JavaScript
const http2_constants.NGHTTP2_PROTOCOL_ERROR = 1;
```

--------------------------
### NGHTTP2_INTERNAL_ERROR
**NGHTTP2 error: internal error**

```JavaScript
const http2_constants.NGHTTP2_INTERNAL_ERROR = 2;
```

--------------------------
### NGHTTP2_FLOW_CONTROL_ERROR
**NGHTTP2 error: flow control error**

```JavaScript
const http2_constants.NGHTTP2_FLOW_CONTROL_ERROR = 3;
```

--------------------------
### NGHTTP2_STREAM_CLOSED
**NGHTTP2 error: stream closed**

```JavaScript
const http2_constants.NGHTTP2_STREAM_CLOSED = 5;
```

--------------------------
### NGHTTP2_FRAME_SIZE_ERROR
**NGHTTP2 error: frame size error**

```JavaScript
const http2_constants.NGHTTP2_FRAME_SIZE_ERROR = 6;
```

--------------------------
### NGHTTP2_REFUSED_STREAM
**NGHTTP2 error: stream refused**

```JavaScript
const http2_constants.NGHTTP2_REFUSED_STREAM = 7;
```

--------------------------
### NGHTTP2_CANCEL
**NGHTTP2 error: cancel**

```JavaScript
const http2_constants.NGHTTP2_CANCEL = 8;
```

--------------------------
### NGHTTP2_COMPRESSION_ERROR
**NGHTTP2 error: compression error**

```JavaScript
const http2_constants.NGHTTP2_COMPRESSION_ERROR = 9;
```

--------------------------
### NGHTTP2_CONNECT_ERROR
**NGHTTP2 error: connect error**

```JavaScript
const http2_constants.NGHTTP2_CONNECT_ERROR = 10;
```

--------------------------
### NGHTTP2_ENHANCE_YOUR_CALM
**NGHTTP2 error: enhance your calm**

```JavaScript
const http2_constants.NGHTTP2_ENHANCE_YOUR_CALM = 11;
```

--------------------------
### NGHTTP2_INADEQUATE_SECURITY
**NGHTTP2 error: inadequate security**

```JavaScript
const http2_constants.NGHTTP2_INADEQUATE_SECURITY = 12;
```

--------------------------
### NGHTTP2_HTTP_1_1_REQUIRED
**NGHTTP2 error: HTTP/1.1 required**

```JavaScript
const http2_constants.NGHTTP2_HTTP_1_1_REQUIRED = 13;
```

--------------------------
### NGHTTP2_ERR_FRAME_SIZE_ERROR
**NGHTTP2 internal error: frame size error**

```JavaScript
const http2_constants.NGHTTP2_ERR_FRAME_SIZE_ERROR = -522;
```

--------------------------
### NGHTTP2_FLAG_NONE
**NGHTTP2 Flag: no flag**

```JavaScript
const http2_constants.NGHTTP2_FLAG_NONE = 0;
```

--------------------------
### NGHTTP2_FLAG_ACK
**NGHTTP2 Flag: ACK**

```JavaScript
const http2_constants.NGHTTP2_FLAG_ACK = 1;
```

--------------------------
### NGHTTP2_FLAG_END_STREAM
**NGHTTP2 Flag: END_STREAM**

```JavaScript
const http2_constants.NGHTTP2_FLAG_END_STREAM = 1;
```

--------------------------
### NGHTTP2_FLAG_END_HEADERS
**NGHTTP2 Flag: END_HEADERS**

```JavaScript
const http2_constants.NGHTTP2_FLAG_END_HEADERS = 4;
```

--------------------------
### NGHTTP2_FLAG_PADDED
**NGHTTP2 Flag: PADDED**

```JavaScript
const http2_constants.NGHTTP2_FLAG_PADDED = 8;
```

--------------------------
### NGHTTP2_FLAG_PRIORITY
**NGHTTP2 Flag: PRIORITY**

```JavaScript
const http2_constants.NGHTTP2_FLAG_PRIORITY = 32;
```

--------------------------
### NGHTTP2_DEFAULT_WEIGHT
**NGHTTP2 default weight**

```JavaScript
const http2_constants.NGHTTP2_DEFAULT_WEIGHT = 16;
```

--------------------------
### NGHTTP2_SESSION_SERVER
**NGHTTP2 session type: server**

```JavaScript
const http2_constants.NGHTTP2_SESSION_SERVER = 0;
```

--------------------------
### NGHTTP2_SESSION_CLIENT
**NGHTTP2 session type: client**

```JavaScript
const http2_constants.NGHTTP2_SESSION_CLIENT = 1;
```

--------------------------
### NGHTTP2_SETTINGS_HEADER_TABLE_SIZE
**NGHTTP2 setting: header table size**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE = 1;
```

--------------------------
### NGHTTP2_SETTINGS_ENABLE_PUSH
**NGHTTP2 setting: whether push is enabled**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_ENABLE_PUSH = 2;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS
**NGHTTP2 setting: maximum concurrent streams**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS = 3;
```

--------------------------
### NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE
**NGHTTP2 setting: initial window size**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE = 4;
```

--------------------------
### NGHTTP2_SETTINGS_TIMEOUT
**nghttp2 error code: SETTINGS not acknowledged in time (not a SETTINGS id)**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_TIMEOUT = 4;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_FRAME_SIZE
**NGHTTP2 setting: maximum frame size**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_FRAME_SIZE = 5;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE
**NGHTTP2 setting: maximum header list size**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE = 6;
```

--------------------------
### NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL
**NGHTTP2 setting: enable CONNECT protocol extension**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL = 8;
```

--------------------------
### NGHTTP2_STREAM_STATE_IDLE
**NGHTTP2 stream state: idle**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_IDLE = 1;
```

--------------------------
### NGHTTP2_STREAM_STATE_OPEN
**NGHTTP2 stream state: open**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_OPEN = 2;
```

--------------------------
### NGHTTP2_STREAM_STATE_RESERVED_LOCAL
**NGHTTP2 stream state: reserved local**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_RESERVED_LOCAL = 3;
```

--------------------------
### NGHTTP2_STREAM_STATE_RESERVED_REMOTE
**NGHTTP2 stream state: reserved remote**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_RESERVED_REMOTE = 4;
```

--------------------------
### NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL
**NGHTTP2 stream state: half closed local**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL = 5;
```

--------------------------
### NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE
**NGHTTP2 stream state: half closed remote**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE = 6;
```

--------------------------
### NGHTTP2_STREAM_STATE_CLOSED
**NGHTTP2 stream state: closed**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_CLOSED = 7;
```

--------------------------
### PADDING_STRATEGY_NONE
**Padding strategy: none**

```JavaScript
const http2_constants.PADDING_STRATEGY_NONE = 0;
```

--------------------------
### PADDING_STRATEGY_ALIGNED
**Padding strategy: aligned**

```JavaScript
const http2_constants.PADDING_STRATEGY_ALIGNED = 1;
```

--------------------------
### PADDING_STRATEGY_CALLBACK
**Padding strategy: callback (same as ALIGNED)**

```JavaScript
const http2_constants.PADDING_STRATEGY_CALLBACK = 1;
```

--------------------------
### PADDING_STRATEGY_MAX
**Padding strategy: maximum padding**

```JavaScript
const http2_constants.PADDING_STRATEGY_MAX = 2;
```

