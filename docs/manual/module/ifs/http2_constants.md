# 模块 http2_constants
[http2](http2.md) 模块常用常量定义模块

引用方法：

```JavaScript
var constants = require('http2').constants
```

## 常量
        
### DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL
**默认是否启用 CONNECT 协议扩展**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL = 0;
```

--------------------------
### DEFAULT_SETTINGS_ENABLE_PUSH
**默认是否启用服务端推送**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_ENABLE_PUSH = 1;
```

--------------------------
### DEFAULT_SETTINGS_HEADER_TABLE_SIZE
**默认头部表大小（字节）**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE = 4096;
```

--------------------------
### DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE
**默认初始流窗口大小（字节）**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE = 65535;
```

--------------------------
### DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS
**默认最大并发流数（无限制）**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS = 4294967295;
```

--------------------------
### DEFAULT_SETTINGS_MAX_FRAME_SIZE
**默认最大帧大小（字节）**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE = 16384;
```

--------------------------
### DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE
**默认最大头部列表大小（字节）**

```JavaScript
const http2_constants.DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE = 65535;
```

--------------------------
### HTTP_STATUS_CONTINUE
**HTTP 状态码：Continue**

```JavaScript
const http2_constants.HTTP_STATUS_CONTINUE = 100;
```

--------------------------
### HTTP_STATUS_SWITCHING_PROTOCOLS
**HTTP 状态码：Switching Protocols**

```JavaScript
const http2_constants.HTTP_STATUS_SWITCHING_PROTOCOLS = 101;
```

--------------------------
### HTTP_STATUS_PROCESSING
**HTTP 状态码：Processing**

```JavaScript
const http2_constants.HTTP_STATUS_PROCESSING = 102;
```

--------------------------
### HTTP_STATUS_EARLY_HINTS
**HTTP 状态码：Early Hints**

```JavaScript
const http2_constants.HTTP_STATUS_EARLY_HINTS = 103;
```

--------------------------
### HTTP_STATUS_OK
**HTTP 状态码：OK**

```JavaScript
const http2_constants.HTTP_STATUS_OK = 200;
```

--------------------------
### HTTP_STATUS_CREATED
**HTTP 状态码：Created**

```JavaScript
const http2_constants.HTTP_STATUS_CREATED = 201;
```

--------------------------
### HTTP_STATUS_ACCEPTED
**HTTP 状态码：Accepted**

```JavaScript
const http2_constants.HTTP_STATUS_ACCEPTED = 202;
```

--------------------------
### HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION
**HTTP 状态码：Non-Authoritative Information**

```JavaScript
const http2_constants.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION = 203;
```

--------------------------
### HTTP_STATUS_NO_CONTENT
**HTTP 状态码：No Content**

```JavaScript
const http2_constants.HTTP_STATUS_NO_CONTENT = 204;
```

--------------------------
### HTTP_STATUS_RESET_CONTENT
**HTTP 状态码：Reset Content**

```JavaScript
const http2_constants.HTTP_STATUS_RESET_CONTENT = 205;
```

--------------------------
### HTTP_STATUS_PARTIAL_CONTENT
**HTTP 状态码：Partial Content**

```JavaScript
const http2_constants.HTTP_STATUS_PARTIAL_CONTENT = 206;
```

--------------------------
### HTTP_STATUS_MULTI_STATUS
**HTTP 状态码：Multi-Status**

```JavaScript
const http2_constants.HTTP_STATUS_MULTI_STATUS = 207;
```

--------------------------
### HTTP_STATUS_ALREADY_REPORTED
**HTTP 状态码：Already Reported**

```JavaScript
const http2_constants.HTTP_STATUS_ALREADY_REPORTED = 208;
```

--------------------------
### HTTP_STATUS_IM_USED
**HTTP 状态码：IM Used**

```JavaScript
const http2_constants.HTTP_STATUS_IM_USED = 226;
```

--------------------------
### HTTP_STATUS_MULTIPLE_CHOICES
**HTTP 状态码：Multiple Choices**

```JavaScript
const http2_constants.HTTP_STATUS_MULTIPLE_CHOICES = 300;
```

--------------------------
### HTTP_STATUS_MOVED_PERMANENTLY
**HTTP 状态码：Moved Permanently**

```JavaScript
const http2_constants.HTTP_STATUS_MOVED_PERMANENTLY = 301;
```

--------------------------
### HTTP_STATUS_FOUND
**HTTP 状态码：Found**

```JavaScript
const http2_constants.HTTP_STATUS_FOUND = 302;
```

--------------------------
### HTTP_STATUS_SEE_OTHER
**HTTP 状态码：See Other**

```JavaScript
const http2_constants.HTTP_STATUS_SEE_OTHER = 303;
```

--------------------------
### HTTP_STATUS_NOT_MODIFIED
**HTTP 状态码：Not Modified**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_MODIFIED = 304;
```

--------------------------
### HTTP_STATUS_USE_PROXY
**HTTP 状态码：Use Proxy**

```JavaScript
const http2_constants.HTTP_STATUS_USE_PROXY = 305;
```

--------------------------
### HTTP_STATUS_TEMPORARY_REDIRECT
**HTTP 状态码：Temporary Redirect**

```JavaScript
const http2_constants.HTTP_STATUS_TEMPORARY_REDIRECT = 307;
```

--------------------------
### HTTP_STATUS_PERMANENT_REDIRECT
**HTTP 状态码：Permanent Redirect**

```JavaScript
const http2_constants.HTTP_STATUS_PERMANENT_REDIRECT = 308;
```

--------------------------
### HTTP_STATUS_BAD_REQUEST
**HTTP 状态码：Bad Request**

```JavaScript
const http2_constants.HTTP_STATUS_BAD_REQUEST = 400;
```

--------------------------
### HTTP_STATUS_UNAUTHORIZED
**HTTP 状态码：Unauthorized**

```JavaScript
const http2_constants.HTTP_STATUS_UNAUTHORIZED = 401;
```

--------------------------
### HTTP_STATUS_PAYMENT_REQUIRED
**HTTP 状态码：Payment Required**

```JavaScript
const http2_constants.HTTP_STATUS_PAYMENT_REQUIRED = 402;
```

--------------------------
### HTTP_STATUS_FORBIDDEN
**HTTP 状态码：Forbidden**

```JavaScript
const http2_constants.HTTP_STATUS_FORBIDDEN = 403;
```

--------------------------
### HTTP_STATUS_NOT_FOUND
**HTTP 状态码：Not Found**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_FOUND = 404;
```

--------------------------
### HTTP_STATUS_METHOD_NOT_ALLOWED
**HTTP 状态码：Method Not Allowed**

```JavaScript
const http2_constants.HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
```

--------------------------
### HTTP_STATUS_NOT_ACCEPTABLE
**HTTP 状态码：Not Acceptable**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_ACCEPTABLE = 406;
```

--------------------------
### HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED
**HTTP 状态码：Proxy Authentication Required**

```JavaScript
const http2_constants.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED = 407;
```

--------------------------
### HTTP_STATUS_REQUEST_TIMEOUT
**HTTP 状态码：Request Timeout**

```JavaScript
const http2_constants.HTTP_STATUS_REQUEST_TIMEOUT = 408;
```

--------------------------
### HTTP_STATUS_CONFLICT
**HTTP 状态码：Conflict**

```JavaScript
const http2_constants.HTTP_STATUS_CONFLICT = 409;
```

--------------------------
### HTTP_STATUS_GONE
**HTTP 状态码：Gone**

```JavaScript
const http2_constants.HTTP_STATUS_GONE = 410;
```

--------------------------
### HTTP_STATUS_LENGTH_REQUIRED
**HTTP 状态码：Length Required**

```JavaScript
const http2_constants.HTTP_STATUS_LENGTH_REQUIRED = 411;
```

--------------------------
### HTTP_STATUS_PRECONDITION_FAILED
**HTTP 状态码：Precondition Failed**

```JavaScript
const http2_constants.HTTP_STATUS_PRECONDITION_FAILED = 412;
```

--------------------------
### HTTP_STATUS_PAYLOAD_TOO_LARGE
**HTTP 状态码：Payload Too Large**

```JavaScript
const http2_constants.HTTP_STATUS_PAYLOAD_TOO_LARGE = 413;
```

--------------------------
### HTTP_STATUS_URI_TOO_LONG
**HTTP 状态码：URI Too Long**

```JavaScript
const http2_constants.HTTP_STATUS_URI_TOO_LONG = 414;
```

--------------------------
### HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
**HTTP 状态码：Unsupported Media Type**

```JavaScript
const http2_constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE = 415;
```

--------------------------
### HTTP_STATUS_RANGE_NOT_SATISFIABLE
**HTTP 状态码：Range Not Satisfiable**

```JavaScript
const http2_constants.HTTP_STATUS_RANGE_NOT_SATISFIABLE = 416;
```

--------------------------
### HTTP_STATUS_EXPECTATION_FAILED
**HTTP 状态码：Expectation Failed**

```JavaScript
const http2_constants.HTTP_STATUS_EXPECTATION_FAILED = 417;
```

--------------------------
### HTTP_STATUS_TEAPOT
**HTTP 状态码：I'm a Teapot**

```JavaScript
const http2_constants.HTTP_STATUS_TEAPOT = 418;
```

--------------------------
### HTTP_STATUS_MISDIRECTED_REQUEST
**HTTP 状态码：Misdirected Request**

```JavaScript
const http2_constants.HTTP_STATUS_MISDIRECTED_REQUEST = 421;
```

--------------------------
### HTTP_STATUS_UNPROCESSABLE_ENTITY
**HTTP 状态码：Unprocessable Entity**

```JavaScript
const http2_constants.HTTP_STATUS_UNPROCESSABLE_ENTITY = 422;
```

--------------------------
### HTTP_STATUS_LOCKED
**HTTP 状态码：Locked**

```JavaScript
const http2_constants.HTTP_STATUS_LOCKED = 423;
```

--------------------------
### HTTP_STATUS_FAILED_DEPENDENCY
**HTTP 状态码：Failed Dependency**

```JavaScript
const http2_constants.HTTP_STATUS_FAILED_DEPENDENCY = 424;
```

--------------------------
### HTTP_STATUS_TOO_EARLY
**HTTP 状态码：Too Early**

```JavaScript
const http2_constants.HTTP_STATUS_TOO_EARLY = 425;
```

--------------------------
### HTTP_STATUS_UPGRADE_REQUIRED
**HTTP 状态码：Upgrade Required**

```JavaScript
const http2_constants.HTTP_STATUS_UPGRADE_REQUIRED = 426;
```

--------------------------
### HTTP_STATUS_PRECONDITION_REQUIRED
**HTTP 状态码：Precondition Required**

```JavaScript
const http2_constants.HTTP_STATUS_PRECONDITION_REQUIRED = 428;
```

--------------------------
### HTTP_STATUS_TOO_MANY_REQUESTS
**HTTP 状态码：Too Many Requests**

```JavaScript
const http2_constants.HTTP_STATUS_TOO_MANY_REQUESTS = 429;
```

--------------------------
### HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE
**HTTP 状态码：Request Header Fields Too Large**

```JavaScript
const http2_constants.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
```

--------------------------
### HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS
**HTTP 状态码：Unavailable For Legal Reasons**

```JavaScript
const http2_constants.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS = 451;
```

--------------------------
### HTTP_STATUS_INTERNAL_SERVER_ERROR
**HTTP 状态码：Internal Server Error**

```JavaScript
const http2_constants.HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
```

--------------------------
### HTTP_STATUS_NOT_IMPLEMENTED
**HTTP 状态码：Not Implemented**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_IMPLEMENTED = 501;
```

--------------------------
### HTTP_STATUS_BAD_GATEWAY
**HTTP 状态码：Bad Gateway**

```JavaScript
const http2_constants.HTTP_STATUS_BAD_GATEWAY = 502;
```

--------------------------
### HTTP_STATUS_SERVICE_UNAVAILABLE
**HTTP 状态码：[Service](../../object/ifs/Service.md) Unavailable**

```JavaScript
const http2_constants.HTTP_STATUS_SERVICE_UNAVAILABLE = 503;
```

--------------------------
### HTTP_STATUS_GATEWAY_TIMEOUT
**HTTP 状态码：Gateway Timeout**

```JavaScript
const http2_constants.HTTP_STATUS_GATEWAY_TIMEOUT = 504;
```

--------------------------
### HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED
**HTTP 状态码：HTTP Version Not Supported**

```JavaScript
const http2_constants.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED = 505;
```

--------------------------
### HTTP_STATUS_VARIANT_ALSO_NEGOTIATES
**HTTP 状态码：Variant Also Negotiates**

```JavaScript
const http2_constants.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES = 506;
```

--------------------------
### HTTP_STATUS_INSUFFICIENT_STORAGE
**HTTP 状态码：Insufficient Storage**

```JavaScript
const http2_constants.HTTP_STATUS_INSUFFICIENT_STORAGE = 507;
```

--------------------------
### HTTP_STATUS_LOOP_DETECTED
**HTTP 状态码：Loop Detected**

```JavaScript
const http2_constants.HTTP_STATUS_LOOP_DETECTED = 508;
```

--------------------------
### HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED
**HTTP 状态码：Bandwidth Limit Exceeded**

```JavaScript
const http2_constants.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED = 509;
```

--------------------------
### HTTP_STATUS_NOT_EXTENDED
**HTTP 状态码：Not Extended**

```JavaScript
const http2_constants.HTTP_STATUS_NOT_EXTENDED = 510;
```

--------------------------
### HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED
**HTTP 状态码：Network Authentication Required**

```JavaScript
const http2_constants.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED = 511;
```

--------------------------
### HTTP2_HEADER_AUTHORITY
**HTTP/2 伪头部：:authority**

```JavaScript
const http2_constants.HTTP2_HEADER_AUTHORITY = ":authority";
```

--------------------------
### HTTP2_HEADER_ACCEPT
**HTTP/2 头部：accept**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT = "accept";
```

--------------------------
### HTTP2_HEADER_ACCEPT_CHARSET
**HTTP/2 头部：accept-charset**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_CHARSET = "accept-charset";
```

--------------------------
### HTTP2_HEADER_ACCEPT_ENCODING
**HTTP/2 头部：accept-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_ENCODING = "accept-encoding";
```

--------------------------
### HTTP2_HEADER_ACCEPT_LANGUAGE
**HTTP/2 头部：accept-language**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_LANGUAGE = "accept-language";
```

--------------------------
### HTTP2_HEADER_ACCEPT_RANGES
**HTTP/2 头部：accept-ranges**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCEPT_RANGES = "accept-ranges";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS
**HTTP/2 头部：access-control-allow-credentials**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS = "access-control-allow-credentials";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS
**HTTP/2 头部：access-control-allow-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS = "access-control-allow-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS
**HTTP/2 头部：access-control-allow-methods**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS = "access-control-allow-methods";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN
**HTTP/2 头部：access-control-allow-origin**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = "access-control-allow-origin";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS
**HTTP/2 头部：access-control-expose-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS = "access-control-expose-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE
**HTTP/2 头部：access-control-max-age**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE = "access-control-max-age";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS
**HTTP/2 头部：access-control-request-headers**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS = "access-control-request-headers";
```

--------------------------
### HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD
**HTTP/2 头部：access-control-request-method**

```JavaScript
const http2_constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD = "access-control-request-method";
```

--------------------------
### HTTP2_HEADER_AGE
**HTTP/2 头部：age**

```JavaScript
const http2_constants.HTTP2_HEADER_AGE = "age";
```

--------------------------
### HTTP2_HEADER_ALLOW
**HTTP/2 头部：allow**

```JavaScript
const http2_constants.HTTP2_HEADER_ALLOW = "allow";
```

--------------------------
### HTTP2_HEADER_ALT_SVC
**HTTP/2 头部：alt-svc**

```JavaScript
const http2_constants.HTTP2_HEADER_ALT_SVC = "alt-svc";
```

--------------------------
### HTTP2_HEADER_AUTHORIZATION
**HTTP/2 头部：authorization**

```JavaScript
const http2_constants.HTTP2_HEADER_AUTHORIZATION = "authorization";
```

--------------------------
### HTTP2_HEADER_CACHE_CONTROL
**HTTP/2 头部：cache-control**

```JavaScript
const http2_constants.HTTP2_HEADER_CACHE_CONTROL = "cache-control";
```

--------------------------
### HTTP2_HEADER_CONNECTION
**HTTP/2 头部：connection**

```JavaScript
const http2_constants.HTTP2_HEADER_CONNECTION = "connection";
```

--------------------------
### HTTP2_HEADER_CONTENT_DISPOSITION
**HTTP/2 头部：content-disposition**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_DISPOSITION = "content-disposition";
```

--------------------------
### HTTP2_HEADER_CONTENT_ENCODING
**HTTP/2 头部：content-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_ENCODING = "content-encoding";
```

--------------------------
### HTTP2_HEADER_CONTENT_LANGUAGE
**HTTP/2 头部：content-language**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LANGUAGE = "content-language";
```

--------------------------
### HTTP2_HEADER_CONTENT_LENGTH
**HTTP/2 头部：content-length**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LENGTH = "content-length";
```

--------------------------
### HTTP2_HEADER_CONTENT_LOCATION
**HTTP/2 头部：content-location**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_LOCATION = "content-location";
```

--------------------------
### HTTP2_HEADER_CONTENT_MD5
**HTTP/2 头部：content-md5**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_MD5 = "content-md5";
```

--------------------------
### HTTP2_HEADER_CONTENT_RANGE
**HTTP/2 头部：content-range**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_RANGE = "content-range";
```

--------------------------
### HTTP2_HEADER_CONTENT_SECURITY_POLICY
**HTTP/2 头部：content-security-policy**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_SECURITY_POLICY = "content-security-policy";
```

--------------------------
### HTTP2_HEADER_CONTENT_TYPE
**HTTP/2 头部：content-type**

```JavaScript
const http2_constants.HTTP2_HEADER_CONTENT_TYPE = "content-type";
```

--------------------------
### HTTP2_HEADER_COOKIE
**HTTP/2 头部：cookie**

```JavaScript
const http2_constants.HTTP2_HEADER_COOKIE = "cookie";
```

--------------------------
### HTTP2_HEADER_DATE
**HTTP/2 头部：date**

```JavaScript
const http2_constants.HTTP2_HEADER_DATE = "date";
```

--------------------------
### HTTP2_HEADER_DNT
**HTTP/2 头部：dnt**

```JavaScript
const http2_constants.HTTP2_HEADER_DNT = "dnt";
```

--------------------------
### HTTP2_HEADER_EARLY_DATA
**HTTP/2 头部：early-data**

```JavaScript
const http2_constants.HTTP2_HEADER_EARLY_DATA = "early-data";
```

--------------------------
### HTTP2_HEADER_ETAG
**HTTP/2 头部：etag**

```JavaScript
const http2_constants.HTTP2_HEADER_ETAG = "etag";
```

--------------------------
### HTTP2_HEADER_METHOD
**HTTP/2 伪头部：:method**

```JavaScript
const http2_constants.HTTP2_HEADER_METHOD = ":method";
```

--------------------------
### HTTP2_HEADER_EXPECT
**HTTP/2 头部：expect**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPECT = "expect";
```

--------------------------
### HTTP2_HEADER_EXPECT_CT
**HTTP/2 头部：expect-ct**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPECT_CT = "expect-ct";
```

--------------------------
### HTTP2_HEADER_EXPIRES
**HTTP/2 头部：expires**

```JavaScript
const http2_constants.HTTP2_HEADER_EXPIRES = "expires";
```

--------------------------
### HTTP2_HEADER_FORWARDED
**HTTP/2 头部：forwarded**

```JavaScript
const http2_constants.HTTP2_HEADER_FORWARDED = "forwarded";
```

--------------------------
### HTTP2_HEADER_FROM
**HTTP/2 头部：from**

```JavaScript
const http2_constants.HTTP2_HEADER_FROM = "from";
```

--------------------------
### HTTP2_HEADER_HOST
**HTTP/2 头部：host**

```JavaScript
const http2_constants.HTTP2_HEADER_HOST = "host";
```

--------------------------
### HTTP2_HEADER_HTTP2_SETTINGS
**HTTP/2 头部：[http2](http2.md)-settings**

```JavaScript
const http2_constants.HTTP2_HEADER_HTTP2_SETTINGS = "http2-settings";
```

--------------------------
### HTTP2_HEADER_IF_MATCH
**HTTP/2 头部：if-match**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_MATCH = "if-match";
```

--------------------------
### HTTP2_HEADER_IF_MODIFIED_SINCE
**HTTP/2 头部：if-modified-since**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_MODIFIED_SINCE = "if-modified-since";
```

--------------------------
### HTTP2_HEADER_IF_NONE_MATCH
**HTTP/2 头部：if-none-match**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_NONE_MATCH = "if-none-match";
```

--------------------------
### HTTP2_HEADER_IF_RANGE
**HTTP/2 头部：if-range**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_RANGE = "if-range";
```

--------------------------
### HTTP2_HEADER_IF_UNMODIFIED_SINCE
**HTTP/2 头部：if-unmodified-since**

```JavaScript
const http2_constants.HTTP2_HEADER_IF_UNMODIFIED_SINCE = "if-unmodified-since";
```

--------------------------
### HTTP2_HEADER_KEEP_ALIVE
**HTTP/2 头部：keep-alive**

```JavaScript
const http2_constants.HTTP2_HEADER_KEEP_ALIVE = "keep-alive";
```

--------------------------
### HTTP2_HEADER_LAST_MODIFIED
**HTTP/2 头部：last-modified**

```JavaScript
const http2_constants.HTTP2_HEADER_LAST_MODIFIED = "last-modified";
```

--------------------------
### HTTP2_HEADER_LINK
**HTTP/2 头部：link**

```JavaScript
const http2_constants.HTTP2_HEADER_LINK = "link";
```

--------------------------
### HTTP2_HEADER_LOCATION
**HTTP/2 头部：location**

```JavaScript
const http2_constants.HTTP2_HEADER_LOCATION = "location";
```

--------------------------
### HTTP2_HEADER_MAX_FORWARDS
**HTTP/2 头部：max-forwards**

```JavaScript
const http2_constants.HTTP2_HEADER_MAX_FORWARDS = "max-forwards";
```

--------------------------
### HTTP2_HEADER_ORIGIN
**HTTP/2 头部：origin**

```JavaScript
const http2_constants.HTTP2_HEADER_ORIGIN = "origin";
```

--------------------------
### HTTP2_HEADER_PATH
**HTTP/2 伪头部：:[path](path.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_PATH = ":path";
```

--------------------------
### HTTP2_HEADER_PREFER
**HTTP/2 头部：prefer**

```JavaScript
const http2_constants.HTTP2_HEADER_PREFER = "prefer";
```

--------------------------
### HTTP2_HEADER_PRIORITY
**HTTP/2 头部：priority**

```JavaScript
const http2_constants.HTTP2_HEADER_PRIORITY = "priority";
```

--------------------------
### HTTP2_HEADER_PROTOCOL
**HTTP/2 伪头部：:protocol**

```JavaScript
const http2_constants.HTTP2_HEADER_PROTOCOL = ":protocol";
```

--------------------------
### HTTP2_HEADER_PROXY_AUTHENTICATE
**HTTP/2 头部：proxy-authenticate**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_AUTHENTICATE = "proxy-authenticate";
```

--------------------------
### HTTP2_HEADER_PROXY_AUTHORIZATION
**HTTP/2 头部：proxy-authorization**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_AUTHORIZATION = "proxy-authorization";
```

--------------------------
### HTTP2_HEADER_PROXY_CONNECTION
**HTTP/2 头部：proxy-connection**

```JavaScript
const http2_constants.HTTP2_HEADER_PROXY_CONNECTION = "proxy-connection";
```

--------------------------
### HTTP2_HEADER_PURPOSE
**HTTP/2 头部：purpose**

```JavaScript
const http2_constants.HTTP2_HEADER_PURPOSE = "purpose";
```

--------------------------
### HTTP2_HEADER_RANGE
**HTTP/2 头部：range**

```JavaScript
const http2_constants.HTTP2_HEADER_RANGE = "range";
```

--------------------------
### HTTP2_HEADER_REFERER
**HTTP/2 头部：referer**

```JavaScript
const http2_constants.HTTP2_HEADER_REFERER = "referer";
```

--------------------------
### HTTP2_HEADER_REFRESH
**HTTP/2 头部：refresh**

```JavaScript
const http2_constants.HTTP2_HEADER_REFRESH = "refresh";
```

--------------------------
### HTTP2_HEADER_RETRY_AFTER
**HTTP/2 头部：retry-after**

```JavaScript
const http2_constants.HTTP2_HEADER_RETRY_AFTER = "retry-after";
```

--------------------------
### HTTP2_HEADER_SCHEME
**HTTP/2 伪头部：:scheme**

```JavaScript
const http2_constants.HTTP2_HEADER_SCHEME = ":scheme";
```

--------------------------
### HTTP2_HEADER_SERVER
**HTTP/2 头部：server**

```JavaScript
const http2_constants.HTTP2_HEADER_SERVER = "server";
```

--------------------------
### HTTP2_HEADER_SET_COOKIE
**HTTP/2 头部：set-cookie**

```JavaScript
const http2_constants.HTTP2_HEADER_SET_COOKIE = "set-cookie";
```

--------------------------
### HTTP2_HEADER_STATUS
**HTTP/2 伪头部：:status**

```JavaScript
const http2_constants.HTTP2_HEADER_STATUS = ":status";
```

--------------------------
### HTTP2_HEADER_STRICT_TRANSPORT_SECURITY
**HTTP/2 头部：strict-transport-security**

```JavaScript
const http2_constants.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY = "strict-transport-security";
```

--------------------------
### HTTP2_HEADER_TE
**HTTP/2 头部：te**

```JavaScript
const http2_constants.HTTP2_HEADER_TE = "te";
```

--------------------------
### HTTP2_HEADER_TIMING_ALLOW_ORIGIN
**HTTP/2 头部：timing-allow-origin**

```JavaScript
const http2_constants.HTTP2_HEADER_TIMING_ALLOW_ORIGIN = "timing-allow-origin";
```

--------------------------
### HTTP2_HEADER_TK
**HTTP/2 头部：tk**

```JavaScript
const http2_constants.HTTP2_HEADER_TK = "tk";
```

--------------------------
### HTTP2_HEADER_TRAILER
**HTTP/2 头部：trailer**

```JavaScript
const http2_constants.HTTP2_HEADER_TRAILER = "trailer";
```

--------------------------
### HTTP2_HEADER_TRANSFER_ENCODING
**HTTP/2 头部：transfer-[encoding](encoding.md)**

```JavaScript
const http2_constants.HTTP2_HEADER_TRANSFER_ENCODING = "transfer-encoding";
```

--------------------------
### HTTP2_HEADER_UPGRADE
**HTTP/2 头部：upgrade**

```JavaScript
const http2_constants.HTTP2_HEADER_UPGRADE = "upgrade";
```

--------------------------
### HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS
**HTTP/2 头部：upgrade-insecure-requests**

```JavaScript
const http2_constants.HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests";
```

--------------------------
### HTTP2_HEADER_USER_AGENT
**HTTP/2 头部：user-agent**

```JavaScript
const http2_constants.HTTP2_HEADER_USER_AGENT = "user-agent";
```

--------------------------
### HTTP2_HEADER_VARY
**HTTP/2 头部：vary**

```JavaScript
const http2_constants.HTTP2_HEADER_VARY = "vary";
```

--------------------------
### HTTP2_HEADER_VIA
**HTTP/2 头部：via**

```JavaScript
const http2_constants.HTTP2_HEADER_VIA = "via";
```

--------------------------
### HTTP2_HEADER_WARNING
**HTTP/2 头部：warning**

```JavaScript
const http2_constants.HTTP2_HEADER_WARNING = "warning";
```

--------------------------
### HTTP2_HEADER_WWW_AUTHENTICATE
**HTTP/2 头部：www-authenticate**

```JavaScript
const http2_constants.HTTP2_HEADER_WWW_AUTHENTICATE = "www-authenticate";
```

--------------------------
### HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS
**HTTP/2 头部：x-content-type-options**

```JavaScript
const http2_constants.HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS = "x-content-type-options";
```

--------------------------
### HTTP2_HEADER_X_FORWARDED_FOR
**HTTP/2 头部：x-forwarded-for**

```JavaScript
const http2_constants.HTTP2_HEADER_X_FORWARDED_FOR = "x-forwarded-for";
```

--------------------------
### HTTP2_HEADER_X_FRAME_OPTIONS
**HTTP/2 头部：x-frame-options**

```JavaScript
const http2_constants.HTTP2_HEADER_X_FRAME_OPTIONS = "x-frame-options";
```

--------------------------
### HTTP2_HEADER_X_XSS_PROTECTION
**HTTP/2 头部：x-xss-protection**

```JavaScript
const http2_constants.HTTP2_HEADER_X_XSS_PROTECTION = "x-xss-protection";
```

--------------------------
### HTTP2_METHOD_ACL
**HTTP/2 方法：ACL**

```JavaScript
const http2_constants.HTTP2_METHOD_ACL = "ACL";
```

--------------------------
### HTTP2_METHOD_BASELINE_CONTROL
**HTTP/2 方法：BASELINE-CONTROL**

```JavaScript
const http2_constants.HTTP2_METHOD_BASELINE_CONTROL = "BASELINE-CONTROL";
```

--------------------------
### HTTP2_METHOD_BIND
**HTTP/2 方法：BIND**

```JavaScript
const http2_constants.HTTP2_METHOD_BIND = "BIND";
```

--------------------------
### HTTP2_METHOD_CHECKIN
**HTTP/2 方法：CHECKIN**

```JavaScript
const http2_constants.HTTP2_METHOD_CHECKIN = "CHECKIN";
```

--------------------------
### HTTP2_METHOD_CHECKOUT
**HTTP/2 方法：CHECKOUT**

```JavaScript
const http2_constants.HTTP2_METHOD_CHECKOUT = "CHECKOUT";
```

--------------------------
### HTTP2_METHOD_CONNECT
**HTTP/2 方法：CONNECT**

```JavaScript
const http2_constants.HTTP2_METHOD_CONNECT = "CONNECT";
```

--------------------------
### HTTP2_METHOD_COPY
**HTTP/2 方法：COPY**

```JavaScript
const http2_constants.HTTP2_METHOD_COPY = "COPY";
```

--------------------------
### HTTP2_METHOD_DELETE
**HTTP/2 方法：DELETE**

```JavaScript
const http2_constants.HTTP2_METHOD_DELETE = "DELETE";
```

--------------------------
### HTTP2_METHOD_GET
**HTTP/2 方法：GET**

```JavaScript
const http2_constants.HTTP2_METHOD_GET = "GET";
```

--------------------------
### HTTP2_METHOD_HEAD
**HTTP/2 方法：HEAD**

```JavaScript
const http2_constants.HTTP2_METHOD_HEAD = "HEAD";
```

--------------------------
### HTTP2_METHOD_LABEL
**HTTP/2 方法：LABEL**

```JavaScript
const http2_constants.HTTP2_METHOD_LABEL = "LABEL";
```

--------------------------
### HTTP2_METHOD_LINK
**HTTP/2 方法：LINK**

```JavaScript
const http2_constants.HTTP2_METHOD_LINK = "LINK";
```

--------------------------
### HTTP2_METHOD_LOCK
**HTTP/2 方法：LOCK**

```JavaScript
const http2_constants.HTTP2_METHOD_LOCK = "LOCK";
```

--------------------------
### HTTP2_METHOD_MERGE
**HTTP/2 方法：MERGE**

```JavaScript
const http2_constants.HTTP2_METHOD_MERGE = "MERGE";
```

--------------------------
### HTTP2_METHOD_MKACTIVITY
**HTTP/2 方法：MKACTIVITY**

```JavaScript
const http2_constants.HTTP2_METHOD_MKACTIVITY = "MKACTIVITY";
```

--------------------------
### HTTP2_METHOD_MKCALENDAR
**HTTP/2 方法：MKCALENDAR**

```JavaScript
const http2_constants.HTTP2_METHOD_MKCALENDAR = "MKCALENDAR";
```

--------------------------
### HTTP2_METHOD_MKCOL
**HTTP/2 方法：MKCOL**

```JavaScript
const http2_constants.HTTP2_METHOD_MKCOL = "MKCOL";
```

--------------------------
### HTTP2_METHOD_MKREDIRECTREF
**HTTP/2 方法：MKREDIRECTREF**

```JavaScript
const http2_constants.HTTP2_METHOD_MKREDIRECTREF = "MKREDIRECTREF";
```

--------------------------
### HTTP2_METHOD_MKWORKSPACE
**HTTP/2 方法：MKWORKSPACE**

```JavaScript
const http2_constants.HTTP2_METHOD_MKWORKSPACE = "MKWORKSPACE";
```

--------------------------
### HTTP2_METHOD_MOVE
**HTTP/2 方法：MOVE**

```JavaScript
const http2_constants.HTTP2_METHOD_MOVE = "MOVE";
```

--------------------------
### HTTP2_METHOD_OPTIONS
**HTTP/2 方法：OPTIONS**

```JavaScript
const http2_constants.HTTP2_METHOD_OPTIONS = "OPTIONS";
```

--------------------------
### HTTP2_METHOD_ORDERPATCH
**HTTP/2 方法：ORDERPATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_ORDERPATCH = "ORDERPATCH";
```

--------------------------
### HTTP2_METHOD_PATCH
**HTTP/2 方法：PATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_PATCH = "PATCH";
```

--------------------------
### HTTP2_METHOD_POST
**HTTP/2 方法：POST**

```JavaScript
const http2_constants.HTTP2_METHOD_POST = "POST";
```

--------------------------
### HTTP2_METHOD_PRI
**HTTP/2 方法：PRI**

```JavaScript
const http2_constants.HTTP2_METHOD_PRI = "PRI";
```

--------------------------
### HTTP2_METHOD_PROPFIND
**HTTP/2 方法：PROPFIND**

```JavaScript
const http2_constants.HTTP2_METHOD_PROPFIND = "PROPFIND";
```

--------------------------
### HTTP2_METHOD_PROPPATCH
**HTTP/2 方法：PROPPATCH**

```JavaScript
const http2_constants.HTTP2_METHOD_PROPPATCH = "PROPPATCH";
```

--------------------------
### HTTP2_METHOD_PUT
**HTTP/2 方法：PUT**

```JavaScript
const http2_constants.HTTP2_METHOD_PUT = "PUT";
```

--------------------------
### HTTP2_METHOD_REBIND
**HTTP/2 方法：REBIND**

```JavaScript
const http2_constants.HTTP2_METHOD_REBIND = "REBIND";
```

--------------------------
### HTTP2_METHOD_REPORT
**HTTP/2 方法：REPORT**

```JavaScript
const http2_constants.HTTP2_METHOD_REPORT = "REPORT";
```

--------------------------
### HTTP2_METHOD_SEARCH
**HTTP/2 方法：SEARCH**

```JavaScript
const http2_constants.HTTP2_METHOD_SEARCH = "SEARCH";
```

--------------------------
### HTTP2_METHOD_TRACE
**HTTP/2 方法：TRACE**

```JavaScript
const http2_constants.HTTP2_METHOD_TRACE = "TRACE";
```

--------------------------
### HTTP2_METHOD_UNBIND
**HTTP/2 方法：UNBIND**

```JavaScript
const http2_constants.HTTP2_METHOD_UNBIND = "UNBIND";
```

--------------------------
### HTTP2_METHOD_UNCHECKOUT
**HTTP/2 方法：UNCHECKOUT**

```JavaScript
const http2_constants.HTTP2_METHOD_UNCHECKOUT = "UNCHECKOUT";
```

--------------------------
### HTTP2_METHOD_UNLINK
**HTTP/2 方法：UNLINK**

```JavaScript
const http2_constants.HTTP2_METHOD_UNLINK = "UNLINK";
```

--------------------------
### HTTP2_METHOD_UNLOCK
**HTTP/2 方法：UNLOCK**

```JavaScript
const http2_constants.HTTP2_METHOD_UNLOCK = "UNLOCK";
```

--------------------------
### HTTP2_METHOD_UPDATE
**HTTP/2 方法：UPDATE**

```JavaScript
const http2_constants.HTTP2_METHOD_UPDATE = "UPDATE";
```

--------------------------
### HTTP2_METHOD_UPDATEREDIRECTREF
**HTTP/2 方法：UPDATEREDIRECTREF**

```JavaScript
const http2_constants.HTTP2_METHOD_UPDATEREDIRECTREF = "UPDATEREDIRECTREF";
```

--------------------------
### HTTP2_METHOD_VERSION_CONTROL
**HTTP/2 方法：VERSION-CONTROL**

```JavaScript
const http2_constants.HTTP2_METHOD_VERSION_CONTROL = "VERSION-CONTROL";
```

--------------------------
### MAX_INITIAL_WINDOW_SIZE
**初始窗口大小最大值**

```JavaScript
const http2_constants.MAX_INITIAL_WINDOW_SIZE = 2147483647;
```

--------------------------
### MAX_MAX_FRAME_SIZE
**帧大小最大值**

```JavaScript
const http2_constants.MAX_MAX_FRAME_SIZE = 16777215;
```

--------------------------
### MIN_MAX_FRAME_SIZE
**帧大小最小值**

```JavaScript
const http2_constants.MIN_MAX_FRAME_SIZE = 16384;
```

--------------------------
### NGHTTP2_NO_ERROR
**NGHTTP2 错误：无错误**

```JavaScript
const http2_constants.NGHTTP2_NO_ERROR = 0;
```

--------------------------
### NGHTTP2_PROTOCOL_ERROR
**NGHTTP2 错误：协议错误**

```JavaScript
const http2_constants.NGHTTP2_PROTOCOL_ERROR = 1;
```

--------------------------
### NGHTTP2_INTERNAL_ERROR
**NGHTTP2 错误：内部错误**

```JavaScript
const http2_constants.NGHTTP2_INTERNAL_ERROR = 2;
```

--------------------------
### NGHTTP2_FLOW_CONTROL_ERROR
**NGHTTP2 错误：流量控制错误**

```JavaScript
const http2_constants.NGHTTP2_FLOW_CONTROL_ERROR = 3;
```

--------------------------
### NGHTTP2_STREAM_CLOSED
**NGHTTP2 错误：流已关闭**

```JavaScript
const http2_constants.NGHTTP2_STREAM_CLOSED = 5;
```

--------------------------
### NGHTTP2_FRAME_SIZE_ERROR
**NGHTTP2 错误：帧大小错误**

```JavaScript
const http2_constants.NGHTTP2_FRAME_SIZE_ERROR = 6;
```

--------------------------
### NGHTTP2_REFUSED_STREAM
**NGHTTP2 错误：流被拒绝**

```JavaScript
const http2_constants.NGHTTP2_REFUSED_STREAM = 7;
```

--------------------------
### NGHTTP2_CANCEL
**NGHTTP2 错误：取消**

```JavaScript
const http2_constants.NGHTTP2_CANCEL = 8;
```

--------------------------
### NGHTTP2_COMPRESSION_ERROR
**NGHTTP2 错误：压缩错误**

```JavaScript
const http2_constants.NGHTTP2_COMPRESSION_ERROR = 9;
```

--------------------------
### NGHTTP2_CONNECT_ERROR
**NGHTTP2 错误：连接错误**

```JavaScript
const http2_constants.NGHTTP2_CONNECT_ERROR = 10;
```

--------------------------
### NGHTTP2_ENHANCE_YOUR_CALM
**NGHTTP2 错误：请降速**

```JavaScript
const http2_constants.NGHTTP2_ENHANCE_YOUR_CALM = 11;
```

--------------------------
### NGHTTP2_INADEQUATE_SECURITY
**NGHTTP2 错误：安全性不足**

```JavaScript
const http2_constants.NGHTTP2_INADEQUATE_SECURITY = 12;
```

--------------------------
### NGHTTP2_HTTP_1_1_REQUIRED
**NGHTTP2 错误：需要 HTTP/1.1**

```JavaScript
const http2_constants.NGHTTP2_HTTP_1_1_REQUIRED = 13;
```

--------------------------
### NGHTTP2_ERR_FRAME_SIZE_ERROR
**NGHTTP2 内部错误：帧大小错误**

```JavaScript
const http2_constants.NGHTTP2_ERR_FRAME_SIZE_ERROR = -522;
```

--------------------------
### NGHTTP2_FLAG_NONE
**NGHTTP2 Flag：无标志**

```JavaScript
const http2_constants.NGHTTP2_FLAG_NONE = 0;
```

--------------------------
### NGHTTP2_FLAG_ACK
**NGHTTP2 Flag：ACK**

```JavaScript
const http2_constants.NGHTTP2_FLAG_ACK = 1;
```

--------------------------
### NGHTTP2_FLAG_END_STREAM
**NGHTTP2 Flag：END_STREAM**

```JavaScript
const http2_constants.NGHTTP2_FLAG_END_STREAM = 1;
```

--------------------------
### NGHTTP2_FLAG_END_HEADERS
**NGHTTP2 Flag：END_HEADERS**

```JavaScript
const http2_constants.NGHTTP2_FLAG_END_HEADERS = 4;
```

--------------------------
### NGHTTP2_FLAG_PADDED
**NGHTTP2 Flag：PADDED**

```JavaScript
const http2_constants.NGHTTP2_FLAG_PADDED = 8;
```

--------------------------
### NGHTTP2_FLAG_PRIORITY
**NGHTTP2 Flag：PRIORITY**

```JavaScript
const http2_constants.NGHTTP2_FLAG_PRIORITY = 32;
```

--------------------------
### NGHTTP2_DEFAULT_WEIGHT
**NGHTTP2 默认权重**

```JavaScript
const http2_constants.NGHTTP2_DEFAULT_WEIGHT = 16;
```

--------------------------
### NGHTTP2_SESSION_SERVER
**NGHTTP2 会话类型：服务端**

```JavaScript
const http2_constants.NGHTTP2_SESSION_SERVER = 0;
```

--------------------------
### NGHTTP2_SESSION_CLIENT
**NGHTTP2 会话类型：客户端**

```JavaScript
const http2_constants.NGHTTP2_SESSION_CLIENT = 1;
```

--------------------------
### NGHTTP2_SETTINGS_HEADER_TABLE_SIZE
**NGHTTP2 设置：头部表大小**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE = 1;
```

--------------------------
### NGHTTP2_SETTINGS_ENABLE_PUSH
**NGHTTP2 设置：是否启用推送**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_ENABLE_PUSH = 2;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS
**NGHTTP2 设置：最大并发流**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS = 3;
```

--------------------------
### NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE
**NGHTTP2 设置：初始窗口大小**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE = 4;
```

--------------------------
### NGHTTP2_SETTINGS_TIMEOUT
**NGHTTP2 设置：超时**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_TIMEOUT = 4;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_FRAME_SIZE
**NGHTTP2 设置：最大帧大小**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_FRAME_SIZE = 5;
```

--------------------------
### NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE
**NGHTTP2 设置：最大头部列表大小**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE = 6;
```

--------------------------
### NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL
**NGHTTP2 设置：启用 CONNECT 协议扩展**

```JavaScript
const http2_constants.NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL = 8;
```

--------------------------
### NGHTTP2_STREAM_STATE_IDLE
**NGHTTP2 流状态：idle**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_IDLE = 1;
```

--------------------------
### NGHTTP2_STREAM_STATE_OPEN
**NGHTTP2 流状态：open**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_OPEN = 2;
```

--------------------------
### NGHTTP2_STREAM_STATE_RESERVED_LOCAL
**NGHTTP2 流状态：reserved local**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_RESERVED_LOCAL = 3;
```

--------------------------
### NGHTTP2_STREAM_STATE_RESERVED_REMOTE
**NGHTTP2 流状态：reserved remote**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_RESERVED_REMOTE = 4;
```

--------------------------
### NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL
**NGHTTP2 流状态：half closed local**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL = 5;
```

--------------------------
### NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE
**NGHTTP2 流状态：half closed remote**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE = 6;
```

--------------------------
### NGHTTP2_STREAM_STATE_CLOSED
**NGHTTP2 流状态：closed**

```JavaScript
const http2_constants.NGHTTP2_STREAM_STATE_CLOSED = 7;
```

--------------------------
### PADDING_STRATEGY_NONE
**填充策略：不填充**

```JavaScript
const http2_constants.PADDING_STRATEGY_NONE = 0;
```

--------------------------
### PADDING_STRATEGY_ALIGNED
**填充策略：对齐**

```JavaScript
const http2_constants.PADDING_STRATEGY_ALIGNED = 1;
```

--------------------------
### PADDING_STRATEGY_CALLBACK
**填充策略：回调（等同于 ALIGNED）**

```JavaScript
const http2_constants.PADDING_STRATEGY_CALLBACK = 1;
```

--------------------------
### PADDING_STRATEGY_MAX
**填充策略：最大填充**

```JavaScript
const http2_constants.PADDING_STRATEGY_MAX = 2;
```

