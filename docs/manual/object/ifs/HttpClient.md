# 对象 HttpClient
http客户端对象

http客户端对象模拟浏览器环境缓存cookie，并在访问url的时候携带对应的cookie，不同的http客户端对象是相互隔离的，提供http的request、get、post等方法。
用法如下：

```JavaScript
var http = require('http');
var httpClient = new http.Client();
httpClient.request('GET', 'http://fibjs.org');
```
## 构造函数
        
### HttpClient
HttpClient 构造函数，创建一个新的HttpClient对象
```JavaScript
 new HttpClient();
```

## 函数
        
### request
发送 http 请求到指定的流对象，并返回结果
```JavaScript
HttpResponse HttpClient.request(Stream conn,
                HttpRequest req);
```

调用参数:
* conn - 指定处理请求的流对象
* req - 要发送的 HttpRequest 对象

返回结果:
* 返回服务器响应

--------------------------
请求指定的 url，并返回结果
```JavaScript
HttpResponse HttpClient.request(String method,
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
请求指定的 url，并返回结果
```JavaScript
HttpResponse HttpClient.request(String method,
                String url,
                SeekableStream body,
                Map headers);
```

调用参数:
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头

返回结果:
* 返回服务器响应

--------------------------
请求指定的 url，并返回结果
```JavaScript
HttpResponse HttpClient.request(String method,
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
请求指定的 url，并返回结果
```JavaScript
HttpResponse HttpClient.request(String method,
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

### get
用 GET 方法请求指定的 url，并返回结果，等同于 request(&#34;GET&#34;, ...)
```JavaScript
HttpResponse HttpClient.get(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

### post
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse HttpClient.post(String url,
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
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse HttpClient.post(String url,
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
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse HttpClient.post(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

### del
用 DELETE 方法请求指定的 url，并返回结果，等同于 request(&#34;DELETE&#34;, ...)
```JavaScript
HttpResponse HttpClient.del(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

### put
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse HttpClient.put(String url,
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
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse HttpClient.put(String url,
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
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse HttpClient.put(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

### patch
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse HttpClient.patch(String url,
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
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse HttpClient.patch(String url,
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
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse HttpClient.patch(String url,
                Object headers = {});
```

调用参数:
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

返回结果:
* 返回服务器响应

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpClient.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpClient.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String HttpClient.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpClient.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpClient.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### cookies
返回http客户端的 HttpCookie 对象列表
```JavaScript
readonly List HttpClient.cookies;
```

### timeout
查询和设置超时时间 单位毫秒
```JavaScript
Integer HttpClient.timeout;
```

### enableCookie
cookie功能开关，默认开启
```JavaScript
Boolean HttpClient.enableCookie;
```

### autoRedirect
自动redirect功能开关，默认开启
```JavaScript
Boolean HttpClient.autoRedirect;
```

### userAgent
查询和设置 http 请求中的浏览器标识
```JavaScript
String HttpClient.userAgent;
```

