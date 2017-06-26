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
<div class="inherits"><svg width="96pt" height="322pt" viewBox="0.00 0.00 95.66 322.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 318)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-318 91.664,-318 91.664,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="15.0005,-225.5 15.0005,-313.5 72.6635,-313.5 72.6635,-225.5 15.0005,-225.5"/>
<text text-anchor="middle" x="43.832" y="-300.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="15.0005,-293.5 72.6635,-293.5 "/>
<text text-anchor="start" x="23.0005" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="23.0005" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="23.0005" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="23.0005" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="23.0005" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HttpClient -->
<g id="node2" class="node">
<title>HttpClient</title>
<g id="a_node2"><a xlink:title="HttpClient">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-188.5 87.664,-188.5 87.664,-.5 0,-.5"/>
<text text-anchor="middle" x="43.832" y="-175.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpClient</text>
<polyline fill="none" stroke="#000000" points="0,-168.5 87.664,-168.5 "/>
<text text-anchor="start" x="8" y="-155.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpClient()</text>
<polyline fill="none" stroke="#000000" points="0,-148.5 87.664,-148.5 "/>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">cookies</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">enableCookie</text>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">autoRedirect</text>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">userAgent</text>
<polyline fill="none" stroke="#000000" points="0,-80.5 87.664,-80.5 "/>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">request()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">get()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">post()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">del()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">put()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">patch()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpClient -->
<g id="edge1" class="edge">
<title>object-&gt;HttpClient</title>
<path fill="none" stroke="#000000" d="M43.832,-215.2069C43.832,-206.6764 43.832,-197.6515 43.832,-188.5315"/>
<polygon fill="#000000" stroke="#000000" points="40.3321,-215.3401 43.832,-225.3401 47.3321,-215.3401 40.3321,-215.3401"/>
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

