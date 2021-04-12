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
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>TcpServer|new TcpServer()|socket;handler|start();stop()]
[<this>SslServer|new SslServer()|verification;ca]

[object] <:- [TcpServer]
[TcpServer] <:- [SslServer]
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
        name: "fibjs.org",
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        name: "*.fibjs.org",
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
        name: "fibjs.org",
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        name: "*.fibjs.org",
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

## 成员函数
        
### start
**启动当前服务器**

```JavaScript
SslServer.start();
```

--------------------------
### stop
**关闭 socket中止正在运行的服务器**

```JavaScript
SslServer.stop() async;
```

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

