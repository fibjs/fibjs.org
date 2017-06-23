# 对象 HttpClient
[http](../../module/ifs/http.md)客户端对象

[http](../../module/ifs/http.md)客户端对象模拟浏览器环境缓存cookie，并在访问[url](../../module/ifs/url.md)的时候携带对应的cookie，不同的[http](../../module/ifs/http.md)客户端对象是相互隔离的，提供[http](../../module/ifs/http.md)的request、get、post等方法。
用法如下：

```JavaScript
var http = require('http');
var httpClient = new http.Client();
httpClient.request('GET', 'http://fibjs.org');
```

## 继承关系
<div class="inherits"><svg width="98pt" height="332pt" viewBox="0.00 0.00 98.00 332.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 328)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-328 94,-328 94,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="16.5,-232 16.5,-324 73.5,-324 73.5,-232 16.5,-232"/>
<polygon fill="none" stroke="#000000" points="17,-302 17,-324 74,-324 74,-302 17,-302"/>
<text text-anchor="start" x="32.1625" y="-310" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="17,-232 17,-302 74,-302 74,-232 17,-232"/>
<text text-anchor="start" x="22" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="22" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="22" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="22" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="22" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- HttpClient -->
<g id="node2" class="node">
<title>HttpClient</title>
<g id="a_node2"><a xlink:title="HttpClient">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-196 90,-196 90,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-174 0,-196 90,-196 90,-174 0,-174"/>
<text text-anchor="start" x="23.055" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpClient</text>
<polygon fill="none" stroke="#000000" points="0,-152 0,-174 90,-174 90,-152 0,-152"/>
<text text-anchor="start" x="5" y="-160" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpClient()</text>
<polygon fill="none" stroke="#000000" points="0,-82 0,-152 90,-152 90,-82 0,-82"/>
<text text-anchor="start" x="5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> cookies</text>
<text text-anchor="start" x="5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> timeout</text>
<text text-anchor="start" x="5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> enableCookie</text>
<text text-anchor="start" x="5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> autoRedirect</text>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> userAgent</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-82 90,-82 90,0 0,0"/>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> request()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> post()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> del()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> put()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> patch()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpClient -->
<g id="edge1" class="edge">
<title>object-&gt;HttpClient</title>
<path fill="none" stroke="#000000" d="M45,-221.5308C45,-213.3434 45,-204.7241 45,-196.0037"/>
<polygon fill="#000000" stroke="#000000" points="41.5001,-221.6455 45,-231.6455 48.5001,-221.6456 41.5001,-221.6455"/>
</g>
</g>
</svg></div>

## 构造函数
        
### HttpClient
** HttpClient 构造函数，创建一个新的HttpClient对象 **

```JavaScript
new HttpClient();
```

## 成员属性
        
### cookies
** [List](List.md), 返回[http](../../module/ifs/http.md)客户端的 [HttpCookie](HttpCookie.md) 对象列表 **

```JavaScript
readonly List HttpClient.cookies;
```

--------------------------
### timeout
** Integer, 查询和设置超时时间 单位毫秒 **

```JavaScript
Integer HttpClient.timeout;
```

--------------------------
### enableCookie
** Boolean, cookie功能开关，默认开启 **

```JavaScript
Boolean HttpClient.enableCookie;
```

--------------------------
### autoRedirect
** Boolean, 自动redirect功能开关，默认开启 **

```JavaScript
Boolean HttpClient.autoRedirect;
```

--------------------------
### userAgent
** String, 查询和设置 [http](../../module/ifs/http.md) 请求中的浏览器标识 **

```JavaScript
String HttpClient.userAgent;
```

## 成员函数
        
### request
** 发送 [http](../../module/ifs/http.md) 请求到指定的流对象，并返回结果 **

```JavaScript
HttpResponse HttpClient.request(Stream conn,
    HttpRequest req) async;
```

调用参数:
* conn: [Stream](Stream.md), 指定处理请求的流对象
* req: [HttpRequest](HttpRequest.md), 要发送的 [HttpRequest](HttpRequest.md) 对象

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 请求指定的 [url](../../module/ifs/url.md)，并返回结果 **

```JavaScript
HttpResponse HttpClient.request(String method,
    String url,
    Object headers = {});
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法：GET, POST 等
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 请求指定的 [url](../../module/ifs/url.md)，并返回结果 **

```JavaScript
HttpResponse HttpClient.request(String method,
    String url,
    SeekableStream body,
    Map headers) async;
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法：GET, POST 等
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [SeekableStream](SeekableStream.md), 指定发送的 body 内容
* headers: [Map](Map.md), 指定附加的 [http](../../module/ifs/http.md) 头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 请求指定的 [url](../../module/ifs/url.md)，并返回结果 **

```JavaScript
HttpResponse HttpClient.request(String method,
    String url,
    SeekableStream body,
    Object headers = {});
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法：GET, POST 等
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [SeekableStream](SeekableStream.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 请求指定的 [url](../../module/ifs/url.md)，并返回结果 **

```JavaScript
HttpResponse HttpClient.request(String method,
    String url,
    Buffer body,
    Object headers = {});
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法：GET, POST 等
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [Buffer](Buffer.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### get
** 用 GET 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("GET", ...) **

```JavaScript
HttpResponse HttpClient.get(String url,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### post
** 用 POST 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("POST", ...) **

```JavaScript
HttpResponse HttpClient.post(String url,
    SeekableStream body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [SeekableStream](SeekableStream.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 POST 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("POST", ...) **

```JavaScript
HttpResponse HttpClient.post(String url,
    Buffer body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [Buffer](Buffer.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 POST 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("POST", ...) **

```JavaScript
HttpResponse HttpClient.post(String url,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### del
** 用 DELETE 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("DELETE", ...) **

```JavaScript
HttpResponse HttpClient.del(String url,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### put
** 用 PUT 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PUT", ...) **

```JavaScript
HttpResponse HttpClient.put(String url,
    SeekableStream body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [SeekableStream](SeekableStream.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 PUT 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PUT", ...) **

```JavaScript
HttpResponse HttpClient.put(String url,
    Buffer body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [Buffer](Buffer.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 PUT 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PUT", ...) **

```JavaScript
HttpResponse HttpClient.put(String url,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### patch
** 用 PATCH 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PATCH", ...) **

```JavaScript
HttpResponse HttpClient.patch(String url,
    SeekableStream body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [SeekableStream](SeekableStream.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 PATCH 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PATCH", ...) **

```JavaScript
HttpResponse HttpClient.patch(String url,
    Buffer body,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* body: [Buffer](Buffer.md), 指定发送的 body 内容
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
** 用 PATCH 方法请求指定的 [url](../../module/ifs/url.md)，并返回结果，等同于 request("PATCH", ...) **

```JavaScript
HttpResponse HttpClient.patch(String url,
    Object headers = {});
```

调用参数:
* url: String, 指定 [url](../../module/ifs/url.md)，必须是包含主机的完整 [url](../../module/ifs/url.md)
* headers: Object, 指定附加的 [http](../../module/ifs/http.md) 头，缺省无附加头

返回结果:
* [HttpResponse](HttpResponse.md), 返回服务器响应

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpClient.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpClient.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpClient.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpClient.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpClient.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

