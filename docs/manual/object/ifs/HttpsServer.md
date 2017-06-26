# 对象 HttpsServer
https 服务器对象

https 服务器对象是将 [SslServer](SslServer.md) 和 [HttpHandler](HttpHandler.md) 组合封装的对象，方便快速搭建服务器，逻辑上相当于：

```JavaScript
var svr = new net.SslServer(crt, key, addr, port, new http.Handler(function(req) {
    ...
}));
```

创建方法：

```JavaScript
var http = require("http");
var svr = new http.HttpsServer(crt, key, 443, function(req) {
    ...
});
```

## 继承关系
<div class="inherits"><svg width="107pt" height="536pt" viewBox="0.00 0.00 107.35 536.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 532)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-532 103.347,-532 103.347,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="20.842,-439.5 20.842,-527.5 78.505,-527.5 78.505,-439.5 20.842,-439.5"/>
<text text-anchor="middle" x="49.6735" y="-514.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="20.842,-507.5 78.505,-507.5 "/>
<text text-anchor="start" x="28.842" y="-494.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="28.842" y="-482.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="28.842" y="-470.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="28.842" y="-458.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="28.842" y="-446.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:href="TcpServer.md" xlink:title="TcpServer">
<polygon fill="#ffffff" stroke="#000000" points="4.73,-274.5 4.73,-402.5 94.617,-402.5 94.617,-274.5 4.73,-274.5"/>
<text text-anchor="middle" x="49.6735" y="-389.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polyline fill="none" stroke="#000000" points="4.73,-382.5 94.617,-382.5 "/>
<text text-anchor="start" x="12.73" y="-369.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new TcpServer()</text>
<polyline fill="none" stroke="#000000" points="4.73,-362.5 94.617,-362.5 "/>
<text text-anchor="start" x="12.73" y="-349.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">socket</text>
<text text-anchor="start" x="12.73" y="-337.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="12.73" y="-325.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="4.73,-318.5 94.617,-318.5 "/>
<text text-anchor="start" x="12.73" y="-305.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">run()</text>
<text text-anchor="start" x="12.73" y="-293.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">asyncRun()</text>
<text text-anchor="start" x="12.73" y="-281.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M49.6735,-429.2025C49.6735,-420.5059 49.6735,-411.4356 49.6735,-402.5377"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-429.2073 49.6735,-439.2073 53.1736,-429.2074 46.1736,-429.2073"/>
</g>
<!-- HttpServer -->
<g id="node3" class="node">
<title>HttpServer</title>
<g id="a_node3"><a xlink:href="HttpServer.md" xlink:title="HttpServer">
<polygon fill="#ffffff" stroke="#000000" points="0,-109.5 0,-237.5 99.347,-237.5 99.347,-109.5 0,-109.5"/>
<text text-anchor="middle" x="49.6735" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpServer</text>
<polyline fill="none" stroke="#000000" points="0,-217.5 99.347,-217.5 "/>
<text text-anchor="start" x="8" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpServer()</text>
<polyline fill="none" stroke="#000000" points="0,-197.5 99.347,-197.5 "/>
<text text-anchor="start" x="8" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">crossDomain</text>
<text text-anchor="start" x="8" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">forceGZIP</text>
<text text-anchor="start" x="8" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxHeadersCount</text>
<text text-anchor="start" x="8" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxUploadSize</text>
<text text-anchor="start" x="8" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">httpStats</text>
<polyline fill="none" stroke="#000000" points="0,-129.5 99.347,-129.5 "/>
<text text-anchor="start" x="8" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror()</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;HttpServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;HttpServer</title>
<path fill="none" stroke="#000000" d="M49.6735,-263.975C49.6735,-255.1669 49.6735,-246.2365 49.6735,-237.5904"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-264.2342 49.6735,-274.2342 53.1736,-264.2343 46.1736,-264.2342"/>
</g>
<!-- HttpsServer -->
<g id="node4" class="node">
<title>HttpsServer</title>
<g id="a_node4"><a xlink:title="HttpsServer">
<polygon fill="#d3d3d3" stroke="#000000" points="1.396,-.5 1.396,-72.5 97.951,-72.5 97.951,-.5 1.396,-.5"/>
<text text-anchor="middle" x="49.6735" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpsServer</text>
<polyline fill="none" stroke="#000000" points="1.396,-52.5 97.951,-52.5 "/>
<text text-anchor="start" x="9.396" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpsServer()</text>
<polyline fill="none" stroke="#000000" points="1.396,-32.5 97.951,-32.5 "/>
<text text-anchor="start" x="9.396" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="9.396" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
</a>
</g>
</g>
<!-- HttpServer&#45;&gt;HttpsServer -->
<g id="edge3" class="edge">
<title>HttpServer-&gt;HttpsServer</title>
<path fill="none" stroke="#000000" d="M49.6735,-99.3022C49.6735,-90.0059 49.6735,-80.8505 49.6735,-72.5273"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-99.4123 49.6735,-109.4123 53.1736,-99.4124 46.1736,-99.4123"/>
</g>
</g>
</svg></div>

## 构造函数
        
### HttpsServer
** HttpsServer 构造函数，在所有本机地址侦听 **

```JavaScript
new HttpsServer(Array certs,
    Integer port,
    Handler hdlr);
```

调用参数:
* certs: Array, 服务器证书列表
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见

certs 格式为：

```JavaScript
[{
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        crt: [X509Cert object],
        key: [PKey object]
    }
]
```

--------------------------
** HttpsServer 构造函数 **

```JavaScript
new HttpsServer(Array certs,
    String addr,
    Integer port,
    Handler hdlr);
```

调用参数:
* certs: Array, 服务器证书列表
* addr: String, 指定 [http](../../module/ifs/http.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见

certs 格式为：

```JavaScript
[{
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        crt: [X509Cert object],
        key: [PKey object]
    }
]
```

--------------------------
** HttpsServer 构造函数，在所有本机地址侦听 **

```JavaScript
new HttpsServer(X509Cert crt,
    PKey key,
    Integer port,
    Handler hdlr);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见

--------------------------
** HttpsServer 构造函数 **

```JavaScript
new HttpsServer(X509Cert crt,
    PKey key,
    String addr,
    Integer port,
    Handler hdlr);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话
* addr: String, 指定 [http](../../module/ifs/http.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见

## 成员属性
        
### verification
** Integer, 设定证书验证模式，缺省为 VERIFY_NONE **

```JavaScript
Integer HttpsServer.verification;
```

--------------------------
### ca
** [X509Cert](X509Cert.md), 客户端证书验证 ca **

```JavaScript
readonly X509Cert HttpsServer.ca;
```

--------------------------
### crossDomain
** Boolean, 查询和设置是否允许跨域请求，缺省为 false **

```JavaScript
Boolean HttpsServer.crossDomain;
```

--------------------------
### forceGZIP
** Boolean, 查询和设置是否允强制使用 gzip 压缩输出，缺省为 false **

```JavaScript
Boolean HttpsServer.forceGZIP;
```

--------------------------
### maxHeadersCount
** Integer, 查询和设置最大请求头个数，缺省为 128 **

```JavaScript
Integer HttpsServer.maxHeadersCount;
```

--------------------------
### maxUploadSize
** Integer, 查询和设置最大上传尺寸，以 MB 为单位，缺省为 64 **

```JavaScript
Integer HttpsServer.maxUploadSize;
```

--------------------------
### httpStats
** [Stats](Stats.md), 查询 [http](../../module/ifs/http.md) 协议转换处理器的工作状态 **

```JavaScript
readonly Stats HttpsServer.httpStats;
```

返回的结果为一个 [Stats](Stats.md) 对象，结构如下：

```JavaScript
{
    total: 1000, // 总计处理的请求
    pendding: 100, // 当前正在处理的请求
    request: 10, // 新建的请求
    response: 10, // 发送的响应
    error: 100, // 发生的错误（不计入 404）
    error_400: 10, // 发生的请求错误
    error_404: 12, // 文件未找到的数量
    error_500: 2 // 内部处理错误
}
```

--------------------------
### socket
** [Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象 **

```JavaScript
readonly Socket HttpsServer.socket;
```

--------------------------
### handler
** [Handler](Handler.md), 服务器当前事件处理接口对象 **

```JavaScript
Handler HttpsServer.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询当前服务器运行状态 **

```JavaScript
readonly Stats HttpsServer.stats;
```

返回的结果为一个 [Stats](Stats.md) 对象，初始化计数器如下：

```JavaScript
{
    total: 1000, // 总计处理的连接
    connections: 100, // 当前正在处理的连接
    accept: 10, // 上次查询后新建的连接
    close: 10 // 上次查询后关闭的连接
}
```

## 成员函数
        
### onerror
** 设置错误处理器 **

```JavaScript
HttpsServer.onerror(Object hdlrs);
```

调用参数:
* hdlrs: Object, 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

使用方式：

```JavaScript
hdlr.onerror({
    "404": function(v) {
        ...
    },
    "500": new mq.Routing(...)
})
```

--------------------------
### run
** 运行服务器并开始接收和分发连接，此函数不会返回 **

```JavaScript
HttpsServer.run() async;
```

--------------------------
### asyncRun
** 异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行 **

```JavaScript
HttpsServer.asyncRun();
```

--------------------------
### stop
** 关闭 socket中止正在运行的服务器 **

```JavaScript
HttpsServer.stop() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpsServer.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpsServer.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpsServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpsServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpsServer.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

