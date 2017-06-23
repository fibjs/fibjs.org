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
<div class="inherits"><svg width="100pt" height="386pt" viewBox="0.00 0.00 100.00 386.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 382)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-382 96,-382 96,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="17.5,-286 17.5,-378 74.5,-378 74.5,-286 17.5,-286"/>
<polygon fill="none" stroke="#000000" points="18,-356 18,-378 75,-378 75,-356 18,-356"/>
<text text-anchor="start" x="33.1625" y="-364" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="18,-286 18,-356 75,-356 75,-286 18,-286"/>
<text text-anchor="start" x="23" y="-342" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="23" y="-330" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="23" y="-318" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="23" y="-306" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="23" y="-294" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:href="TcpServer.md" xlink:title="TcpServer">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-250 92,-250 92,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points="0,-228 0,-250 92,-250 92,-228 0,-228"/>
<text text-anchor="start" x="22.9435" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polygon fill="none" stroke="#000000" points="0,-206 0,-228 92,-228 92,-206 0,-206"/>
<text text-anchor="start" x="5" y="-214" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new TcpServer()</text>
<polygon fill="none" stroke="#000000" points="0,-160 0,-206 92,-206 92,-160 0,-160"/>
<text text-anchor="start" x="5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> socket</text>
<text text-anchor="start" x="5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="5" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="0,-114 0,-160 92,-160 92,-114 0,-114"/>
<text text-anchor="start" x="5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> run()</text>
<text text-anchor="start" x="5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> asyncRun()</text>
<text text-anchor="start" x="5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M46,-275.7662C46,-267.4038 46,-258.7087 46,-250.1344"/>
<polygon fill="#000000" stroke="#000000" points="42.5001,-275.7711 46,-285.7711 49.5001,-275.7711 42.5001,-275.7711"/>
</g>
<!-- SslServer -->
<g id="node3" class="node">
<title>SslServer</title>
<g id="a_node3"><a xlink:title="SslServer">
<polygon fill="#d3d3d3" stroke="transparent" points="1.5,0 1.5,-78 90.5,-78 90.5,0 1.5,0"/>
<polygon fill="none" stroke="#000000" points="2,-56 2,-78 91,-78 91,-56 2,-56"/>
<text text-anchor="start" x="24.8335" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslServer</text>
<polygon fill="none" stroke="#000000" points="2,-34 2,-56 91,-56 91,-34 2,-34"/>
<text text-anchor="start" x="7" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new SslServer()</text>
<polygon fill="none" stroke="#000000" points="2,0 2,-34 91,-34 91,0 2,0"/>
<text text-anchor="start" x="7" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="7" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;SslServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;SslServer</title>
<path fill="none" stroke="#000000" d="M46,-103.8187C46,-94.9595 46,-86.2382 46,-78.2054"/>
<polygon fill="#000000" stroke="#000000" points="42.5001,-103.8504 46,-113.8505 49.5001,-103.8505 42.5001,-103.8504"/>
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

