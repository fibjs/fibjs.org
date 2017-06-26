# 对象 SslServer
[ssl](../../module/ifs/ssl.md) 服务器对象，可方便创建一个标准多纤程 [ssl](../../module/ifs/ssl.md) 服务器

SslServer 对象是将 [TcpServer](TcpServer.md) 和 [SslHandler](SslHandler.md) 组合封装的对象，方便快速搭建服务器，逻辑上相当于：

```JavaScript
var svr = new net.SslServer(addr, port, new ssl.Handler(crt, key, function(req) {
    ...
}));
```

创建方法：

```JavaScript
var ssl = require("ssl");
var svr = new http.Server(crt, key, function(req) {
    ...
});
```

## 继承关系
<div class="inherits"><svg width="98pt" height="371pt" viewBox="0.00 0.00 97.89 371.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 367)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-367 93.887,-367 93.887,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="16.112,-274.5 16.112,-362.5 73.775,-362.5 73.775,-274.5 16.112,-274.5"/>
<text text-anchor="middle" x="44.9435" y="-349.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="16.112,-342.5 73.775,-342.5 "/>
<text text-anchor="start" x="24.112" y="-329.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="24.112" y="-317.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="24.112" y="-305.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="24.112" y="-293.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="24.112" y="-281.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:href="TcpServer.md" xlink:title="TcpServer">
<polygon fill="#ffffff" stroke="#000000" points="0,-109.5 0,-237.5 89.887,-237.5 89.887,-109.5 0,-109.5"/>
<text text-anchor="middle" x="44.9435" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polyline fill="none" stroke="#000000" points="0,-217.5 89.887,-217.5 "/>
<text text-anchor="start" x="8" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new TcpServer()</text>
<polyline fill="none" stroke="#000000" points="0,-197.5 89.887,-197.5 "/>
<text text-anchor="start" x="8" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">socket</text>
<text text-anchor="start" x="8" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="8" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="0,-153.5 89.887,-153.5 "/>
<text text-anchor="start" x="8" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">run()</text>
<text text-anchor="start" x="8" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">asyncRun()</text>
<text text-anchor="start" x="8" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M44.9435,-264.2025C44.9435,-255.5059 44.9435,-246.4356 44.9435,-237.5377"/>
<polygon fill="#000000" stroke="#000000" points="41.4436,-264.2073 44.9435,-274.2073 48.4436,-264.2074 41.4436,-264.2073"/>
</g>
<!-- SslServer -->
<g id="node3" class="node">
<title>SslServer</title>
<g id="a_node3"><a xlink:title="SslServer">
<polygon fill="#d3d3d3" stroke="#000000" points="1.39,-.5 1.39,-72.5 88.497,-72.5 88.497,-.5 1.39,-.5"/>
<text text-anchor="middle" x="44.9435" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslServer</text>
<polyline fill="none" stroke="#000000" points="1.39,-52.5 88.497,-52.5 "/>
<text text-anchor="start" x="9.39" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new SslServer()</text>
<polyline fill="none" stroke="#000000" points="1.39,-32.5 88.497,-32.5 "/>
<text text-anchor="start" x="9.39" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="9.39" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;SslServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;SslServer</title>
<path fill="none" stroke="#000000" d="M44.9435,-99.3022C44.9435,-90.0059 44.9435,-80.8505 44.9435,-72.5273"/>
<polygon fill="#000000" stroke="#000000" points="41.4436,-99.4123 44.9435,-109.4123 48.4436,-99.4124 41.4436,-99.4123"/>
</g>
</g>
</svg></div>

## 构造函数
        
### SslServer
** SslServer 构造函数，在所有本机地址侦听 **

```JavaScript
new SslServer(Array certs,
    Integer port,
    Handler listener);
```

调用参数:
* certs: Array, 服务器证书列表
* port: Integer, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听端口
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

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
** SslServer 构造函数 **

```JavaScript
new SslServer(Array certs,
    String addr,
    Integer port,
    Handler listener);
```

调用参数:
* certs: Array, 服务器证书列表
* addr: String, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听端口
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

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
** SslServer 构造函数，在所有本机地址侦听 **

```JavaScript
new SslServer(X509Cert crt,
    PKey key,
    Integer port,
    Handler listener);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话
* port: Integer, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听端口
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
** SslServer 构造函数 **

```JavaScript
new SslServer(X509Cert crt,
    PKey key,
    String addr,
    Integer port,
    Handler listener);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话
* addr: String, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听端口
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

## 成员属性
        
### verification
** Integer, 设定证书验证模式，缺省为 VERIFY_NONE **

```JavaScript
Integer SslServer.verification;
```

--------------------------
### ca
** [X509Cert](X509Cert.md), 客户端证书验证证书链 **

```JavaScript
readonly X509Cert SslServer.ca;
```

--------------------------
### socket
** [Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象 **

```JavaScript
readonly Socket SslServer.socket;
```

--------------------------
### handler
** [Handler](Handler.md), 服务器当前事件处理接口对象 **

```JavaScript
Handler SslServer.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询当前服务器运行状态 **

```JavaScript
readonly Stats SslServer.stats;
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
        
### run
** 运行服务器并开始接收和分发连接，此函数不会返回 **

```JavaScript
SslServer.run() async;
```

--------------------------
### asyncRun
** 异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行 **

```JavaScript
SslServer.asyncRun();
```

--------------------------
### stop
** 关闭 socket中止正在运行的服务器 **

```JavaScript
SslServer.stop() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
SslServer.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean SslServer.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String SslServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value SslServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value SslServer.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

