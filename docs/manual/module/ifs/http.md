# 模块 http
http 模块提供 HTTP 服务端与客户端能力，可用于创建 HTTP/HTTPS 服务器、发起 HTTP 请求、处理请求与响应消息、管理 Cookie 等场景

模块的主要能力：

- **服务端**：`http.Server`、`http.HttpsServer`、`http.createServer` 创建服务器；`http.fileHandler` 以静态文件响应请求；`http.Repeater` 转发请求；
- **客户端**：`http.Client` 创建带 Cookie 管理的客户端；`http.requestSync`、`http.getSync` 等函数同步发起请求；`[http.request](http.md#request)`、`[http.get](http.md#get)` 等事件风格请求；`http.fetch` 按 Web Fetch 标准发送请求；
- **消息对象**：`http.Request`([HttpRequest](../../object/ifs/HttpRequest.md))、`http.Response`([HttpResponse](../../object/ifs/HttpResponse.md))、`http.Headers`、`http.Cookie`；
- **通用信息**：`http.STATUS_CODES` 状态码集合、`http.METHODS` 方法列表。

模块级属性(`keepAlive`、`timeout`、`enableCookie`、`autoRedirect`、`enableEncoding`、`enableH2`、`maxHeadersCount`、`maxHeaderSize`、`maxChunkSize`、`maxBodySize`、`userAgent`、`poolTimeout`、`maxFreeSockets`)为所有 [HttpClient](../../object/ifs/HttpClient.md) 的默认配置，修改后对后续请求全局生效。

客户端请求提供两种风格：

- **同步风格**：`http.requestSync`、`http.getSync`、`http.postSync` 等函数，直接返回 [HttpResponse](../../object/ifs/HttpResponse.md) 对象；
- **事件风格**：`http.request`、`http.get`、`http.post` 等函数，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象，需调用 `end()` 发送请求，通过回调或 `'response'` 事件接收响应。

下面是一个简单的例子，创建一个 Web 服务器，返回一个 hello world 的响应信息：

```JavaScript
const http = require('http');

const server = new http.Server(8080, function(request) {
    request.response.write('Hello World!');
});

server.start();
```

这个例子中，我们引入 http 模块，然后定义了一个 http 服务器对象，并绑定到本地 8080 端口号。当有请求发送到这个端口号，响应会被设置为字符串 “Hello World!”。

客户端请求示例：

```JavaScript
var http = require('http');

// 同步请求，直接返回响应
var resp = http.getSync('http://fibjs.org');
console.log(resp.body.readAll().toString());

// 事件风格请求，需调用 end() 发送
var req = http.get('http://fibjs.org', {}, function(resp) {
    console.log(resp.body.readAll().toString());
});
req.end();
```

https 模块是 http 模块的别名，使用 `require('https')` 同样可以得到 http 模块。

## 对象
        
### Request
**创建一个 http 请求对象，参见 [HttpRequest](../../object/ifs/HttpRequest.md)**

```JavaScript
HttpRequest http.Request;
```

--------------------------
### IncomingMessage
**兼容别名，等同于 [HttpRequest](../../object/ifs/HttpRequest.md)**

```JavaScript
HttpRequest http.IncomingMessage;
```

--------------------------
### Response
**创建一个 http 响应对象，参见 [HttpResponse](../../object/ifs/HttpResponse.md)**

```JavaScript
HttpResponse http.Response;
```

--------------------------
### ServerResponse
**兼容别名，等同于 [HttpResponse](../../object/ifs/HttpResponse.md)**

```JavaScript
HttpResponse http.ServerResponse;
```

--------------------------
### Headers
**创建一个 [Headers](../../object/ifs/Headers.md) 对象，参见 [Headers](../../object/ifs/Headers.md)**

```JavaScript
Headers http.Headers;
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
### Agent
**创建一个 http 代理，HttpAgent 是 [HttpClient](../../object/ifs/HttpClient.md) 的别名**

```JavaScript
HttpClient http.Agent;
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

## 静态函数
        
### createServer
**创建一个 http 服务器**

```JavaScript
static HttpServer http.createServer(Handler hdlr);
```

调用参数:
* hdlr: [Handler](../../object/ifs/Handler.md), 请求处理函数，接收 (req, res) 参数

返回结果:
* [HttpServer](../../object/ifs/HttpServer.md), 返回未绑定端口的 [HttpServer](../../object/ifs/HttpServer.md) 对象，需调用 listen() 启动

--------------------------
**创建一个 https 服务器**

```JavaScript
static HttpServer http.createServer(SecureContext context,
    Handler hdlr);
```

调用参数:
* context: [SecureContext](../../object/ifs/SecureContext.md), [SecureContext](../../object/ifs/SecureContext.md) 对象，用于 TLS 配置
* hdlr: [Handler](../../object/ifs/Handler.md), 请求处理函数，接收 (req, res) 参数

返回结果:
* [HttpServer](../../object/ifs/HttpServer.md), 返回未绑定端口的 [HttpsServer](../../object/ifs/HttpsServer.md) 对象，需调用 listen() 启动

--------------------------
**创建一个 https 服务器**

```JavaScript
static HttpServer http.createServer(Object options,
    Handler hdlr);
```

调用参数:
* options: Object, TLS 选项对象，用于创建 [SecureContext](../../object/ifs/SecureContext.md)
* hdlr: [Handler](../../object/ifs/Handler.md), 请求处理函数，接收 (req, res) 参数

返回结果:
* [HttpServer](../../object/ifs/HttpServer.md), 返回未绑定端口的 [HttpsServer](../../object/ifs/HttpsServer.md) 对象，需调用 listen() 启动

--------------------------
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
static HttpRequest http.request(Stream conn,
    HttpRequest req);
```

调用参数:
* conn: [Stream](../../object/ifs/Stream.md), 指定处理请求的流对象
* req: [HttpRequest](../../object/ifs/HttpRequest.md), 要发送的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回服务器响应

--------------------------
### requestSync
**请求指定的 [url](url.md)，并返回结果**

```JavaScript
static HttpResponse http.requestSync(String method,
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
    "path": "", // pathname 的别名，用于 request 选项。
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
static HttpResponse http.requestSync(Object opts) async;
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
**用 GET 方法请求指定的 [url](url.md)，并返回结果，等同于 request("GET", ...)**

```JavaScript
static HttpResponse http.requestSync(String url,
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
### request
**请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Object opts = {});
```

调用参数:
* method: String, 指定 http 请求方法：GET, POST 等
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
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
    "path": "", // pathname 的别名，用于 request 选项。
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**请求 opts 指定的 [url](url.md)，并返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(Object opts);
```

调用参数:
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
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
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**请求指定的 [url](url.md)，并返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
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
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Object opts,
    Function callback);
```

调用参数:
* method: String, 指定 http 请求方法：GET, POST 等
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**请求 opts 指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(Object opts,
    Function callback);
```

调用参数:
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.request(String method,
    String url,
    Function callback);
```

调用参数:
* method: String, 指定 http 请求方法：GET, POST 等
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### getSync
**用 GET 方法请求指定的 [url](url.md)，并返回结果，等同于 request("GET", ...)**

```JavaScript
static HttpResponse http.getSync(String url,
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
### get
**用 GET 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.get(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

缺省为 {}，不包含任何附加信息

--------------------------
**用 GET 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.get(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 GET 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.get(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### postSync
**用 POST 方法请求指定的 [url](url.md)，并返回结果，等同于 request("POST", ...)**

```JavaScript
static HttpResponse http.postSync(String url,
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
**用 POST 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.post(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**用 POST 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.post(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 POST 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.post(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### delSync
**用 DELETE 方法请求指定的 [url](url.md)，并返回结果，等同于 request("DELETE", ...)**

```JavaScript
static HttpResponse http.delSync(String url,
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
**用 DELETE 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.del(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

缺省为 {}，不包含任何附加信息

--------------------------
**用 DELETE 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.del(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 DELETE 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.del(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### putSync
**用 PUT 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PUT", ...)**

```JavaScript
static HttpResponse http.putSync(String url,
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
**用 PUT 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.put(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**用 PUT 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.put(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 PUT 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.put(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### patchSync
**用 PATCH 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PATCH", ...)**

```JavaScript
static HttpResponse http.patchSync(String url,
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
**用 PATCH 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.patch(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "body": SeekableStream | Buffer | String | {},
    "json": {},
    "pack": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不包含任何附加信息

--------------------------
**用 PATCH 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.patch(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 PATCH 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.patch(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### headSync
**用 HEAD 方法请求指定的 [url](url.md)，并返回结果，等同于 request("HEAD", ...)**

```JavaScript
static HttpResponse http.headSync(String url,
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
**用 HEAD 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.head(String url,
    Object opts = {});
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象（可监听 'response' 事件接收响应）

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收；也可监听返回对象的 `'response'` 事件。
opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "protocol": "http",
    "slashes": true,
    "username": "",
    "password": "",
    "hostname": "",
    "port": "",
    "pathname": "",
    "keepAlive": unknown, // If not specified, the default settings of the client will be used.
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "query": {},
    "headers": {},
    "signal": AbortSignal // 用于取消请求的 AbortSignal 对象
}
```

缺省为 {}，不包含任何附加信息

--------------------------
**用 HEAD 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.head(String url,
    Object opts,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* opts: Object, 指定附加信息
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
**用 HEAD 方法请求指定的 [url](url.md)，注册回调接收响应，返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象**

```JavaScript
static HttpRequest http.head(String url,
    Function callback);
```

调用参数:
* url: String, 指定 [url](url.md)，必须是包含主机的完整 [url](url.md)
* callback: Function, 响应回调函数，接收 [HttpResponse](../../object/ifs/HttpResponse.md) 作为参数

返回结果:
* [HttpRequest](../../object/ifs/HttpRequest.md), 返回 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象需调用 `end()` 发送请求，响应通过回调接收。

--------------------------
### setGlobalProxyFromEnv
**根据环境变量动态配置代理支持**

```JavaScript
static Function http.setGlobalProxyFromEnv(Object proxyEnv = {});
```

调用参数:
* proxyEnv: Object, 包含代理配置的对象。如果未提供，则会读取 [process.env](process.md#env)。

返回结果:
* Function, 可调用的函数，用于恢复原始代理配置

当调用此函数时，会从环境变量（HTTP_PROXY、HTTPS_PROXY、NO_PROXY 及其小写形式）读取代理配置并全局应用。
可用于在运行时动态启用代理支持，作为 --use-env-proxy 标志的替代方案。

--------------------------
### fetch
**使用 Web Fetch 标准发送请求，返回 [HttpResponse](../../object/ifs/HttpResponse.md) 对象**

```JavaScript
static HttpResponse http.fetch(String url,
    Object opts = {}) async;
```

调用参数:
* url: String, 请求目标 URL
* opts: Object, 请求选项，支持 method、headers、body 等属性

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回 [HttpResponse](../../object/ifs/HttpResponse.md) 对象

--------------------------
**使用 Web Fetch 标准发送请求，以 [HttpRequest](../../object/ifs/HttpRequest.md) 对象作为请求源，返回 [HttpResponse](../../object/ifs/HttpResponse.md) 对象**

```JavaScript
static HttpResponse http.fetch(HttpRequest request,
    Object opts = {}) async;
```

调用参数:
* request: [HttpRequest](../../object/ifs/HttpRequest.md), 请求源对象，提供 [url](url.md)、method、headers、body 等基础信息
* opts: Object, 指定附加信息，可覆盖 request 中的对应字段

返回结果:
* [HttpResponse](../../object/ifs/HttpResponse.md), 返回服务器响应，包含 status、headers、body、ok、redirected、[url](url.md)、type 等属性

opts 可覆盖 request 中的请求字段，支持的内容如下：

```JavaScript
{
    "method": "GET", // 覆盖 request 中的请求方法
    "headers": {}, // 与 request.headers 合并，opts 中的同名头覆盖 request 中的
    "body": SeekableStream | Buffer | String | {}, // 覆盖 request.body
    "keepAlive": unknown, // 覆盖连接保持设置
    "timeout": 0, // 请求超时时间（毫秒），缺省使用客户端默认设置
    "redirect": "follow", // 重定向模式："follow"（默认）| "error" | "manual"
    "signal": AbortSignal, // 用于取消请求的 AbortSignal 对象
    "streaming": false // 是否以流模式返回响应体
}
```

其中 body，[json](json.md)，pack 不得同时出现。缺省为 {}，不覆盖任何 request 中的信息

## 静态属性
        
### STATUS_CODES
**Object, 返回标准的 HTTP 响应状态码的集合，以及各自的简短描述。**

```JavaScript
static readonly Object http.STATUS_CODES;
```

--------------------------
### METHODS
**Array, 返回 HTTP 协议支持的所有方法名称（大写）的数组。**

```JavaScript
static readonly Array http.METHODS;
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
### enableH2
**Boolean, HTTP/2 自动升级开关，默认关闭**

```JavaScript
static Boolean http.enableH2;
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
### poolTimeout
**Integer, 查询和设置 keep-alive 缓存连接超时时间，缺省 10000 ms**

```JavaScript
static Integer http.poolTimeout;
```

--------------------------
### maxFreeSockets
**Integer, 查询和设置每个主机的最大空闲连接数，缺省为 256**

```JavaScript
static Integer http.maxFreeSockets;
```

