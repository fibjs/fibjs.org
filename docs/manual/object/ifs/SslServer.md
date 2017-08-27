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
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\l}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer|new TcpServer()\l|socket\lhandler\lstats\l|run()\lasyncRun()\lstop()\l}"];
    SslServer [tooltip="SslServer", fillcolor="lightgray", label="{SslServer|new SslServer()\l|verification\lca\l}"];

    object -> TcpServer [dir=back];
    TcpServer -> SslServer [dir=back];
}
```

## 构造函数
        
### SslServer
**SslServer 构造函数，在所有本机地址侦听**

```JavaScript
new SslServer(Array certs,
    Integer port,
    Handler listener);
```

调用参数:
* certs: Array, 服务器证书列表
* port: Integer, 指定 [ssl](../../module/ifs/ssl.md) 服务器侦听端口
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

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
**SslServer 构造函数**

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
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

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
**SslServer 构造函数，在所有本机地址侦听**

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
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**SslServer 构造函数**

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
* listener: [Handler](Handler.md), 指定 [ssl](../../module/ifs/ssl.md) 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

## 成员属性
        
### verification
**Integer, 设定证书验证模式，缺省为 VERIFY_NONE**

```JavaScript
Integer SslServer.verification;
```

--------------------------
### ca
**[X509Cert](X509Cert.md), 客户端证书验证证书链**

```JavaScript
readonly X509Cert SslServer.ca;
```

--------------------------
### socket
**[Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象**

```JavaScript
readonly Socket SslServer.socket;
```

--------------------------
### handler
**[Handler](Handler.md), 服务器当前事件处理接口对象**

```JavaScript
Handler SslServer.handler;
```

--------------------------
### stats
**[Stats](Stats.md), 查询当前服务器运行状态**

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
**运行服务器并开始接收和分发连接，此函数不会返回**

```JavaScript
SslServer.run() async;
```

--------------------------
### asyncRun
**异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行**

```JavaScript
SslServer.asyncRun();
```

--------------------------
### stop
**关闭 socket中止正在运行的服务器**

```JavaScript
SslServer.stop() async;
```

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
SslServer.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean SslServer.equals(object expected);
```

调用参数:
* expected: [object](object.md), 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String SslServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value SslServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

