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
<div class="inherits"><svg width="107pt" height="558pt" viewBox="0.00 0.00 107.00 558.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 554)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-554 103,-554 103,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="21,-458 21,-550 78,-550 78,-458 21,-458"/>
<polygon fill="none" stroke="#000000" points="21.5,-528 21.5,-550 78.5,-550 78.5,-528 21.5,-528"/>
<text text-anchor="start" x="36.6625" y="-536" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="21.5,-458 21.5,-528 78.5,-528 78.5,-458 21.5,-458"/>
<text text-anchor="start" x="26.5" y="-514" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="26.5" y="-502" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="26.5" y="-490" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="26.5" y="-478" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="26.5" y="-466" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:href="TcpServer.md" xlink:title="TcpServer">
<polygon fill="#ffffff" stroke="transparent" points="3.5,-286 3.5,-422 95.5,-422 95.5,-286 3.5,-286"/>
<polygon fill="none" stroke="#000000" points="3.5,-400 3.5,-422 95.5,-422 95.5,-400 3.5,-400"/>
<text text-anchor="start" x="26.4435" y="-408" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polygon fill="none" stroke="#000000" points="3.5,-378 3.5,-400 95.5,-400 95.5,-378 3.5,-378"/>
<text text-anchor="start" x="8.5" y="-386" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new TcpServer()</text>
<polygon fill="none" stroke="#000000" points="3.5,-332 3.5,-378 95.5,-378 95.5,-332 3.5,-332"/>
<text text-anchor="start" x="8.5" y="-364" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> socket</text>
<text text-anchor="start" x="8.5" y="-352" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="8.5" y="-340" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="3.5,-286 3.5,-332 95.5,-332 95.5,-286 3.5,-286"/>
<text text-anchor="start" x="8.5" y="-318" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> run()</text>
<text text-anchor="start" x="8.5" y="-306" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> asyncRun()</text>
<text text-anchor="start" x="8.5" y="-294" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M49.5,-447.7662C49.5,-439.4038 49.5,-430.7087 49.5,-422.1344"/>
<polygon fill="#000000" stroke="#000000" points="46.0001,-447.7711 49.5,-457.7711 53.0001,-447.7711 46.0001,-447.7711"/>
</g>
<!-- HttpServer -->
<g id="node3" class="node">
<title>HttpServer</title>
<g id="a_node3"><a xlink:href="HttpServer.md" xlink:title="HttpServer">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-250 99,-250 99,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points=".5,-228 .5,-250 99.5,-250 99.5,-228 .5,-228"/>
<text text-anchor="start" x="26.1095" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpServer</text>
<polygon fill="none" stroke="#000000" points=".5,-206 .5,-228 99.5,-228 99.5,-206 .5,-206"/>
<text text-anchor="start" x="5.5" y="-214" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpServer()</text>
<polygon fill="none" stroke="#000000" points=".5,-136 .5,-206 99.5,-206 99.5,-136 .5,-136"/>
<text text-anchor="start" x="5.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> crossDomain</text>
<text text-anchor="start" x="5.5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> forceGZIP</text>
<text text-anchor="start" x="5.5" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxHeadersCount</text>
<text text-anchor="start" x="5.5" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxUploadSize</text>
<text text-anchor="start" x="5.5" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> httpStats</text>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-136 99.5,-136 99.5,-114 .5,-114"/>
<text text-anchor="start" x="5.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror()</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;HttpServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;HttpServer</title>
<path fill="none" stroke="#000000" d="M49.5,-275.3631C49.5,-266.9746 49.5,-258.4919 49.5,-250.2376"/>
<polygon fill="#000000" stroke="#000000" points="46.0001,-275.5268 49.5,-285.5268 53.0001,-275.5269 46.0001,-275.5268"/>
</g>
<!-- HttpsServer -->
<g id="node4" class="node">
<title>HttpsServer</title>
<g id="a_node4"><a xlink:title="HttpsServer">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-78 99,-78 99,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-56 .5,-78 99.5,-78 99.5,-56 .5,-56"/>
<text text-anchor="start" x="23.6095" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpsServer</text>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-56 99.5,-56 99.5,-34 .5,-34"/>
<text text-anchor="start" x="5.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpsServer()</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 99.5,-34 99.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
</a>
</g>
</g>
<!-- HttpServer&#45;&gt;HttpsServer -->
<g id="edge3" class="edge">
<title>HttpServer-&gt;HttpsServer</title>
<path fill="none" stroke="#000000" d="M49.5,-103.8187C49.5,-94.9595 49.5,-86.2382 49.5,-78.2054"/>
<polygon fill="#000000" stroke="#000000" points="46.0001,-103.8504 49.5,-113.8505 53.0001,-103.8505 46.0001,-103.8504"/>
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

