# 模块 http
http 模块封装了 HTTP 请求和响应的处理，让我们可以轻松地创建一个 http 服务器，也可以模拟客户端发起 http 请求。使用 http 模块，开发者可以很方便地编写和处理 HTTP 协议相关的代码

下面是一个简单的例子，创建一个 Web 服务器，返回一个 hello world 的响应信息：

```JavaScript
const http = require('http');

const server = new http.Server(8080, function(request) {
    request.response.write('Hello World!');
});

server.start();
```

这个例子中，我们引入 http 模块，然后定义了一个 http 服务器对象，并绑定到本地 8080 端口号。当有请求发送到这个端口号，响应会被设置为字符串 “Hello World!”。

同时 http 模块还包含客户端对象，[http.Client](http.md#Client) 模拟浏览器环境缓存 cookie，并在访问 [url](url.md) 的时候携带对应的 cookie 的 http 客户端对象。你可以用 [http.Client](http.md#Client) 访问 http 接口请求、进行 http 下载等等一系列 http 相关的操作。下面是 [http.Client](http.md#Client) 的应用示例：

```JavaScript
var http = require('http');

var httpClient = new http.Client();
httpClient.get('http://fibjs.org');
```

在上面的示例中，创建了一个 [http.Client](http.md#Client) 对象，然后调用 `get` 方法想 fibjs.org 发起了 http GET 请求。

另外，[http.Client](http.md#Client) 还有其他一些属性和方法可以被调用，如 `cookies` 等

https 模块是 http 模块的别名，使用 `require('https')` 同样可以得到 http 模块。

## 对象
        
### Request
**创建一个 http 请求对象，参见 [HttpRequest](../../object/ifs/HttpRequest.md)**

```JavaScript
HttpRequest http.Request;
```

--------------------------
### Response
**创建一个 http 响应对象，参见 [HttpResponse](../../object/ifs/HttpResponse.md)**

```JavaScript
HttpResponse http.Response;
```

--------------------------
### Cookie
**创建一个 http cookie 对象，参见 [HttpCookie](../../object/ifs/HttpCookie.md)**

```JavaScript
HttpCookie http.Cookie;
```

--------------------------
### Server
**创建一个 http 服务器，参见 [HttpServer](../../object/ifs/HttpServer.md)**

```JavaScript
HttpServer http.Server;
```

--------------------------
### Client
**创建一个 http 客户端，参见 [HttpClient](../../object/ifs/HttpClient.md)**

```JavaScript
HttpClient http.Client;
```

--------------------------
### HttpsServer
**创建一个 https 服务器，参见 [HttpsServer](../../object/ifs/HttpsServer.md)**

```JavaScript
HttpsServer http.HttpsServer;
```

--------------------------
### Handler
**创建一个 http 协议处理器对象，参见 [HttpHandler](../../object/ifs/HttpHandler.md)**

```JavaScript
HttpHandler http.Handler;
```

--------------------------
### Repeater
**创建一个 http 请求转发处理器对象，参见 [HttpRepeater](../../object/ifs/HttpRepeater.md)**

```JavaScript
HttpRepeater http.Repeater;
```

--------------------------
### EventSource
**创建一个事件源接口，用于服务器推送事件，参见 [EventSource](../../object/ifs/EventSource.md)**

```JavaScript
EventSource http.EventSource;
```

## 静态函数
        
### fileHandler
**创建一个 http 静态文件处理器，用以用静态文件响应 http 消息**

```JavaScript
static Handler http.fileHandler(String root,
    Boolean autoIndex = false);
```

调用参数:
* root: String, 文件根路径
* autoIndex: Boolean, 是否支持浏览目录文件，缺省为 false，不支持

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回一个静态文件处理器用于处理 http 消息

fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
从而避免重复压缩带来服务器负载。

--------------------------
### request
**发送 http 请求到指定的流对象，并返回结果**

```JavaScript
static HttpResponse http.request(Stream conn,
    HttpRequest req) async;
```

调用参数:
* conn: [Stream](../../object/ifs/Stream.md), 指定处理请求的流对象
* req: [HttpRequest](../../object/ifs/HttpRequest.md), 要发送的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

--------------------------
**发送 http 请求到指定的流对象，并返回结果**

```JavaScript
static HttpResponse http.request(Stream conn,
    HttpRequest req,
    SeekableStream response_body) async;
```

调用参数:
* conn: [Stream](../../object/ifs/Stream.md), 指定处理请求的流对象
* req: [HttpRequest](../../object/ifs/HttpRequest.md), 要发送的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象
* response_body: [SeekableStream](../../object/ifs/SeekableStream.md), 指定 response.body 的流

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

--------------------------
**请求指定的 [url](url.md)，并返回结果**

```JavaScript
static HttpResponse http.request(String method,
    String url,
    Object opts = {}) async;
```

调用参数:
* method: String, 指定 http 请求方法：GET, POST 等
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "response_body": SeekableStream // specify response.body stream
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**用 GET 方法请求指定的 [url](url.md)，并返回结果，等同于 request("GET", ...)**

```JavaScript
static HttpResponse http.request(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**请求 opts 指定的 [url](url.md)，并返回结果**

```JavaScript
static HttpResponse http.request(Object opts) async;
```

调用参数:
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### get
**用 GET 方法请求指定的 [url](url.md)，并返回结果，等同于 request("GET", ...)**

```JavaScript
static HttpResponse http.get(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### post
**用 POST 方法请求指定的 [url](url.md)，并返回结果，等同于 request("POST", ...)**

```JavaScript
static HttpResponse http.post(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### del
**用 DELETE 方法请求指定的 [url](url.md)，并返回结果，等同于 request("DELETE", ...)**

```JavaScript
static HttpResponse http.del(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### put
**用 PUT 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PUT", ...)**

```JavaScript
static HttpResponse http.put(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### patch
**用 PATCH 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PATCH", ...)**

```JavaScript
static HttpResponse http.patch(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
### head
**用 HEAD 方法请求指定的 [url](url.md)，并返回结果，等同于 request("HEAD", ...)**

```JavaScript
static HttpResponse http.head(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "method": "GET", // specify the http request method: GET, POST, etc, default: GET.
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {}
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

## 静态属性
        
### STATUS_CODES
**Object, 返回标准的 HTTP 响应状态码的集合，以及各自的简短描述。**

```JavaScript
static readonly Object http.STATUS_CODES;
```

--------------------------
### cookies
**NArray, 返回http客户端的 [HttpCookie](../../object/ifs/HttpCookie.md) 对象列表**

```JavaScript
static readonly NArray http.cookies;
```

--------------------------
### keepAlive
**Boolean, 查询和设定是否保持连接**

```JavaScript
static Boolean http.keepAlive;
```

--------------------------
### timeout
**Integer, 查询和设置超时时间**

```JavaScript
static Integer http.timeout;
```

--------------------------
### enableCookie
**Boolean, cookie 功能开关，默认开启**

```JavaScript
static Boolean http.enableCookie;
```

--------------------------
### autoRedirect
**Boolean, 自动 redirect 功能开关，默认开启**

```JavaScript
static Boolean http.autoRedirect;
```

--------------------------
### enableEncoding
**Boolean, 自动解压缩功能开关，默认开启**

```JavaScript
static Boolean http.enableEncoding;
```

--------------------------
### maxHeadersCount
**Integer, 查询和设置最大请求头个数，缺省为 128**

```JavaScript
static Integer http.maxHeadersCount;
```

--------------------------
### maxHeaderSize
**Integer, 查询和设置最大请求头长度，缺省为 8192**

```JavaScript
static Integer http.maxHeaderSize;
```

--------------------------
### maxChunkSize
**Integer, 查询和设置 chunk 最大尺寸，以 MB 为单位，缺省为 2**

```JavaScript
static Integer http.maxChunkSize;
```

--------------------------
### maxBodySize
**Integer, 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 -1，不限制尺寸**

```JavaScript
static Integer http.maxBodySize;
```

--------------------------
### userAgent
**String, 查询和设置 http 请求中的浏览器标识**

```JavaScript
static String http.userAgent;
```

--------------------------
### poolSize
**Integer, 查询和设置 keep-alive 最大缓存连接数，缺省 128**

```JavaScript
static Integer http.poolSize;
```

--------------------------
### poolTimeout
**Integer, 查询和设置 keep-alive 缓存连接超时时间，缺省 10000 ms**

```JavaScript
static Integer http.poolTimeout;
```

--------------------------
### http_proxy
**String, 查询和设置 http 请求代理，支持 http/https/socks5 代理**

```JavaScript
static String http.http_proxy;
```

--------------------------
### https_proxy
**String, 查询和设置 https 请求代理，支持 http/https/socks5 代理，不设置，或者设置为空，则复用 http_proxy**

```JavaScript
static String http.https_proxy;
```

