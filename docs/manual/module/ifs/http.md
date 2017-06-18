# 模块 http
超文本传输协议模块，用以支持 http 协议处理

## 对象
        
### Request
创建一个 http 请求对象，参见 [HttpRequest](../../object/ifs/HttpRequest.md)
```JavaScript
HttpRequest http.Request;
```

--------------------------
### Response
创建一个 http 响应对象，参见 [HttpResponse](../../object/ifs/HttpResponse.md)
```JavaScript
HttpResponse http.Response;
```

--------------------------
### Cookie
创建一个 http cookie 对象，参见 [HttpCookie](../../object/ifs/HttpCookie.md)
```JavaScript
HttpCookie http.Cookie;
```

--------------------------
### Server
创建一个 http 服务器，参见 [HttpServer](../../object/ifs/HttpServer.md)
```JavaScript
HttpServer http.Server;
```

--------------------------
### Client
创建一个 http 客户端，参见 [HttpClient](../../object/ifs/HttpClient.md)
```JavaScript
HttpClient http.Client;
```

--------------------------
### HttpsServer
创建一个 https 服务器，参见 [HttpsServer](../../object/ifs/HttpsServer.md)
```JavaScript
HttpsServer http.HttpsServer;
```

--------------------------
### Handler
创建一个 http 协议处理器对象，参见 [HttpHandler](../../object/ifs/HttpHandler.md)
```JavaScript
HttpHandler http.Handler;
```

## 函数
        
### fileHandler
创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
```JavaScript
static Handler http.fileHandler(String root,
                Object mimes = {});
```

调用参数:
* root - 文件根路径
* mimes - 扩展 mime 设置

返回结果:
* 返回一个静态文件处理器用于处理 http 消息

fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
从而避免重复压缩带来服务器负载。
--------------------------
### request
发送 http 请求到指定的流对象，并返回结果
```JavaScript
static HttpResponse http.request(Stream conn,
                HttpRequest req) async;
```

调用参数:
* conn - 指定处理请求的流对象
* req - 要发送的 HttpRequest 对象

返回结果:
* 返回服务器响应

--------------------------
请求指定的 [url](url.md)，并返回结果
```JavaScript
static HttpResponse http.request(String method,
                String url,
                Object headers = {});
```

调用参数:
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
请求指定的 [url](url.md)，并返回结果
```JavaScript
static HttpResponse http.request(String method,
                String url,
                SeekableStream body,
                Map headers) async;
```

调用参数:
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头

返回结果:
* 返回服务器响应

--------------------------
请求指定的 [url](url.md)，并返回结果
```JavaScript
static HttpResponse http.request(String method,
                String url,
                SeekableStream body,
                Object headers = {});
```

调用参数:
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
请求指定的 [url](url.md)，并返回结果
```JavaScript
static HttpResponse http.request(String method,
                String url,
                Buffer body,
                Object headers = {});
```

调用参数:
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
### get
用 GET 方法请求指定的 [url](url.md)，并返回结果，等同于 request("GET", ...)
```JavaScript
static HttpResponse http.get(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
### post
用 POST 方法请求指定的 [url](url.md)，并返回结果，等同于 request("POST", ...)
```JavaScript
static HttpResponse http.post(String url,
                SeekableStream body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 POST 方法请求指定的 [url](url.md)，并返回结果，等同于 request("POST", ...)
```JavaScript
static HttpResponse http.post(String url,
                Buffer body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 POST 方法请求指定的 [url](url.md)，并返回结果，等同于 request("POST", ...)
```JavaScript
static HttpResponse http.post(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
### del
用 DELETE 方法请求指定的 [url](url.md)，并返回结果，等同于 request("DELETE", ...)
```JavaScript
static HttpResponse http.del(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
### put
用 PUT 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PUT", ...)
```JavaScript
static HttpResponse http.put(String url,
                SeekableStream body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 PUT 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PUT", ...)
```JavaScript
static HttpResponse http.put(String url,
                Buffer body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 PUT 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PUT", ...)
```JavaScript
static HttpResponse http.put(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
### patch
用 PATCH 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PATCH", ...)
```JavaScript
static HttpResponse http.patch(String url,
                SeekableStream body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 PATCH 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PATCH", ...)
```JavaScript
static HttpResponse http.patch(String url,
                Buffer body,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

--------------------------
用 PATCH 方法请求指定的 [url](url.md)，并返回结果，等同于 request("PATCH", ...)
```JavaScript
static HttpResponse http.patch(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

## 属性
        
### cookies
返回http客户端的 [HttpCookie](../../object/ifs/HttpCookie.md) 对象列表
```JavaScript
static readonly List http.cookies;
```

--------------------------
### timeout
查询和设置超时时间
```JavaScript
static Integer http.timeout;
```

--------------------------
### enableCookie
cookie功能开关，默认开启
```JavaScript
static Boolean http.enableCookie;
```

--------------------------
### autoRedirect
自动redirect功能开关，默认开启
```JavaScript
static Boolean http.autoRedirect;
```

--------------------------
### userAgent
查询和设置 http 请求中的浏览器标识
```JavaScript
static String http.userAgent;
```

