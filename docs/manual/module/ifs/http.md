# 模块 http
超文本传输协议模块，用以支持 http 协议处理

## 函数
        
### fileHandler
创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
```JavaScript
Handler http.fileHandler(String root,
                Object mimes = {});
```

**调用参数:**
* root - 文件根路径
* mimes - 扩展 mime 设置

**返回结果:**
* 返回一个静态文件处理器用于处理 http 消息

### request
发送 http 请求到指定的流对象，并返回结果
```JavaScript
HttpResponse http.request(Stream conn,
                HttpRequest req);
```

**调用参数:**
* conn - 指定处理请求的流对象
* req - 要发送的 HttpRequest 对象

**返回结果:**
* 返回服务器响应

### request
请求指定的 url，并返回结果
```JavaScript
HttpResponse http.request(String method,
                String url,
                Object headers = {});
```

**调用参数:**
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### request
请求指定的 url，并返回结果
```JavaScript
HttpResponse http.request(String method,
                String url,
                SeekableStream body,
                Map headers);
```

**调用参数:**
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头

**返回结果:**
* 返回服务器响应

### request
请求指定的 url，并返回结果
```JavaScript
HttpResponse http.request(String method,
                String url,
                SeekableStream body,
                Object headers = {});
```

**调用参数:**
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### request
请求指定的 url，并返回结果
```JavaScript
HttpResponse http.request(String method,
                String url,
                Buffer body,
                Object headers = {});
```

**调用参数:**
* method - 指定 http 请求方法：GET, POST 等
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### get
用 GET 方法请求指定的 url，并返回结果，等同于 request(&#34;GET&#34;, ...)
```JavaScript
HttpResponse http.get(String url,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### post
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse http.post(String url,
                SeekableStream body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### post
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse http.post(String url,
                Buffer body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### post
用 POST 方法请求指定的 url，并返回结果，等同于 request(&#34;POST&#34;, ...)
```JavaScript
HttpResponse http.post(String url,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### del
用 DELETE 方法请求指定的 url，并返回结果，等同于 request(&#34;DELETE&#34;, ...)
```JavaScript
HttpResponse http.del(String url,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### put
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse http.put(String url,
                SeekableStream body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### put
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse http.put(String url,
                Buffer body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### put
用 PUT 方法请求指定的 url，并返回结果，等同于 request(&#34;PUT&#34;, ...)
```JavaScript
HttpResponse http.put(String url,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### patch
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse http.patch(String url,
                SeekableStream body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### patch
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse http.patch(String url,
                Buffer body,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* body - 指定发送的 body 内容
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

### patch
用 PATCH 方法请求指定的 url，并返回结果，等同于 request(&#34;PATCH&#34;, ...)
```JavaScript
HttpResponse http.patch(String url,
                Object headers = {});
```

**调用参数:**
* url - 指定 url，必须是包含主机的完整 url
* headers - 指定附加的 http 头，缺省无附加头

**返回结果:**
* 返回服务器响应

## 属性
        
### cookies
返回http客户端的 HttpCookie 对象列表
```JavaScript
readonly List http.cookies;
```

### timeout
查询和设置超时时间
```JavaScript
Integer http.timeout;
```

### enableCookie
cookie功能开关，默认开启
```JavaScript
Boolean http.enableCookie;
```

### autoRedirect
自动redirect功能开关，默认开启
```JavaScript
Boolean http.autoRedirect;
```

### userAgent
查询和设置 http 请求中的浏览器标识
```JavaScript
String http.userAgent;
```

