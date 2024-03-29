# 对象 HttpsServer
HttpsServer 是用于创建 https 服务器的对象，HttpsServer 对象可以使用 [HttpServer](HttpServer.md) 所有的接口函数和属性。HttpsServer 对象可以通过在创建时传入之前使用 openssl 生成的证书对象 ([X509Cert](X509Cert.md) 类型) 和密钥对象 ([PKey](PKey.md) 类型)，从而为客户端提供 [ssl](../../module/ifs/ssl.md) 加密保护的服务

https 服务器对象是将 [SslServer](SslServer.md) 和 [HttpHandler](HttpHandler.md) 组合封装的对象，方便快速搭建服务器，逻辑上相当于：

```JavaScript
var svr = new net.SslServer(crt, key, addr, port, new http.Handler(function(req) {
    ...
}));
```

下面是一个使用 HttpsServer 的示例代码：

```JavaScript
const http = require("http");
const crypto = require("crypto");

// load cert and key
const cert = crypto.loadCert("server.crt");
const key = crypto.loadPKey("server.key");

// create https server
const server = new http.HttpsServer(cert, key, 8443, function(req) {
    resp.response.write(`Hello, Fibjs!`);
});
server.start();
```

在上面的例子中，我们加载了一个名为 "server.crt" 和 "server.key" 的证书和私钥文件，然后使用 HttpsServer 对象创建了一个服务，并开启了监听 8443 端口的服务，当客户端通过"https://localhost:8443/" 访问服务时，就可以受到 [ssl](../../module/ifs/ssl.md) 加密保护。

需要注意的是，如果是需要让外部访问的话，需要确保证书是公信机构颁发的，否则客户端无法验证，降低了性能和安全，并可能触发安全警告。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer|new TcpServer()\l|socket\lhandler\l|start()\lstop()\l}"];
    HttpServer [tooltip="HttpServer", URL="HttpServer.md", label="{HttpServer|new HttpServer()\l|maxHeadersCount\lmaxHeaderSize\lmaxBodySize\lenableEncoding\lserverName\l|enableCrossOrigin()\l}"];
    HttpsServer [tooltip="HttpsServer", fillcolor="lightgray", id="me", label="{HttpsServer|new HttpsServer()\l|verification\lca\l}"];

    object -> TcpServer [dir=back];
    TcpServer -> HttpServer [dir=back];
    HttpServer -> HttpsServer [dir=back];
}
```

## 构造函数
        
### HttpsServer
**HttpsServer 构造函数，在所有本机地址侦听**

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
**HttpsServer 构造函数**

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
**HttpsServer 构造函数，在所有本机地址侦听**

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
**HttpsServer 构造函数**

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
**Integer, 设定证书验证模式，缺省为 VERIFY_NONE**

```JavaScript
Integer HttpsServer.verification;
```

--------------------------
### ca
**[X509Cert](X509Cert.md), 客户端证书验证 ca**

```JavaScript
readonly X509Cert HttpsServer.ca;
```

--------------------------
### maxHeadersCount
**Integer, 查询和设置最大请求头个数，缺省为 128**

```JavaScript
Integer HttpsServer.maxHeadersCount;
```

--------------------------
### maxHeaderSize
**Integer, 查询和设置最大请求头长度，缺省为 8192**

```JavaScript
Integer HttpsServer.maxHeaderSize;
```

--------------------------
### maxBodySize
**Integer, 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64**

```JavaScript
Integer HttpsServer.maxBodySize;
```

--------------------------
### enableEncoding
**Boolean, 自动解压缩功能开关，默认关闭**

```JavaScript
Boolean HttpsServer.enableEncoding;
```

--------------------------
### serverName
**String, 查询和设置服务器名称，缺省为：fibjs/0.x.0**

```JavaScript
String HttpsServer.serverName;
```

--------------------------
### socket
**[Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象**

```JavaScript
readonly Socket HttpsServer.socket;
```

--------------------------
### handler
**[Handler](Handler.md), 服务器当前事件处理接口对象**

```JavaScript
Handler HttpsServer.handler;
```

## 成员函数
        
### enableCrossOrigin
**允许跨域请求**

```JavaScript
HttpsServer.enableCrossOrigin(String allowHeaders = "Content-Type");
```

调用参数:
* allowHeaders: String, 指定接受的 [http](../../module/ifs/http.md) 头字段

--------------------------
### start
**启动当前服务器**

```JavaScript
HttpsServer.start();
```

--------------------------
### stop
**关闭 socket中止正在运行的服务器**

```JavaScript
HttpsServer.stop() async;
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpsServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpsServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

