# 模块 ssl
ssl 模块是 fibjs 内置的加密模块，可以用于建立网络连接的 SSL 超文本传输协议。该模块提供加密验证，客户端和服务器可以确保连接是安全的

ssl 模块中包含了多个对象和常量，可以用于一个完整的 SSL 客户端/服务器通信流程。常用的类别有：

1. [SslSocket](../../object/ifs/SslSocket.md)：基于底层 [Socket](../../object/ifs/Socket.md) 封装的 Ssl 套接字对象，可以用来与远程服务器端进行双向验证等通信操作。
2. [SslHandler](../../object/ifs/SslHandler.md)：SSL 协议转换处理器，用于将数据流转换为 SSL 流协议，适用于构建服务器端的服务。
3. [SslServer](../../object/ifs/SslServer.md)：SSL 服务器对象，方便搭建标准多纤程 SSL 服务器。

下面以 [ssl.Server](ssl.md#Server) 为例，介绍 ssl 模块的使用。

[ssl.Server](ssl.md#Server) 是一个基本的 SSL 服务器，它提供了一个基于 SSL 的网络服务。使用 [ssl.Server](ssl.md#Server) 类可以快速创建一个基于 SSL/TLS 的服务器，同时兼容 TCP/HTTP 服务的基本所有特性。它具有以下特点：

- 自带 X.509 证书管理器，支持多个域名证书、通配符、SAN 证书等功能。
- 拥有与 TCP 服务器完全一致的接口和使用方式，上层代码无需关心 SSL 连接和 TCP 连接区别。
- 使用内置的 OpenSSL 库实现了所有 SSL/TLS 安全协议。
- 支持 SNI 和 ALPN 等协议扩展功能。

下面是一个简单的示例：

```JavaScript
const ssl = require('ssl');
const http = require('http');
const crypto = require('crypto');

// read cert and key
let key = crypto.loadPKey('mycert.key');
let cert = crypto.loadCert('mycert.pem');
// create ssl server
const svr = new ssl.Server(cert, key, 8080, s => {
    var data;

    while (data = s.read()) {
        console.log(`received data: ${data.toString()}`);
        s.write(data.toString().toUpperCase());
    }
});

// start server
svr.start();
```

上面的代码中，我们首先读取了 SSL 证书和私钥文件，然后创建了一个 SSL 服务器实例。在服务器的回调函数中，接收到客户端数据后，将数据转换为大写，并通过 write 函数将数据返回给客户。

## 对象
        
### Socket
**创建一个 [SslSocket](../../object/ifs/SslSocket.md) 对象，参见 [SslSocket](../../object/ifs/SslSocket.md)**

```JavaScript
SslSocket ssl.Socket;
```

--------------------------
### Handler
**创建一个 [SslHandler](../../object/ifs/SslHandler.md) 对象，参见 [SslHandler](../../object/ifs/SslHandler.md)**

```JavaScript
SslHandler ssl.Handler;
```

--------------------------
### Server
**创建一个 [SslServer](../../object/ifs/SslServer.md) 对象，参见 [SslServer](../../object/ifs/SslServer.md)**

```JavaScript
SslServer ssl.Server;
```

## 静态函数
        
### connect
**创建一个 [SslSocket](../../object/ifs/SslSocket.md) 对象并建立连接**

```JavaScript
static Stream ssl.connect(String url,
    Integer timeout = 0) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：ssl://host:port
* timeout: Integer, 指定超时时间，单位是毫秒，默认为0

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [SslSocket](../../object/ifs/SslSocket.md) 对象

--------------------------
**创建一个 [SslSocket](../../object/ifs/SslSocket.md) 对象并建立连接**

```JavaScript
static Stream ssl.connect(String url,
    X509Cert crt,
    PKey key,
    Integer timeout = 0) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：ssl://host:port
* crt: [X509Cert](../../object/ifs/X509Cert.md), 证书，用于发送给服务器验证客户端
* key: [PKey](../../object/ifs/PKey.md), 私钥，用于与客户端会话
* timeout: Integer, 指定超时时间，单位是毫秒，默认为0

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [SslSocket](../../object/ifs/SslSocket.md) 对象

--------------------------
**创建一个 [SslSocket](../../object/ifs/SslSocket.md) 对象并建立连接**

```JavaScript
static Stream ssl.connect(String url,
    Integer verification,
    X509Cert crt,
    PKey key,
    Integer timeout = 0) async;
```

调用参数:
* url: String, 指定连接的协议，可以是：ssl://host:port
* verification: Integer, 证书验证模式
* crt: [X509Cert](../../object/ifs/X509Cert.md), 证书，用于发送给服务器验证客户端
* key: [PKey](../../object/ifs/PKey.md), 私钥，用于与客户端会话
* timeout: Integer, 指定超时时间，单位是毫秒，默认为0

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [SslSocket](../../object/ifs/SslSocket.md) 对象

--------------------------
### setClientCert
**设定缺省客户端证书**

```JavaScript
static ssl.setClientCert(X509Cert crt,
    PKey key);
```

调用参数:
* crt: [X509Cert](../../object/ifs/X509Cert.md), 证书，用于发送给服务器验证客户端
* key: [PKey](../../object/ifs/PKey.md), 私钥，用于与客户端会话

--------------------------
### loadRootCerts
**加载自带的缺省根证书，等同于 [ssl.ca](ssl.md#ca).loadRootCerts**

```JavaScript
static ssl.loadRootCerts();
```

此证书内容源自：http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt

## 静态属性
        
### ca
**[X509Cert](../../object/ifs/X509Cert.md), 全局证书，用于 ssl 客户端模式验证服务器证书**

```JavaScript
static readonly X509Cert ssl.ca;
```

--------------------------
### verification
**Integer, 设定证书验证模式，缺省为 VERIFY_REQUIRED**

```JavaScript
static Integer ssl.verification;
```

## 常量
        
### VERIFY_NONE
**证书验证模式，不验证**

```JavaScript
const ssl.VERIFY_NONE = 0;
```

--------------------------
### VERIFY_OPTIONAL
**证书验证模式，可选验证，允许验证不通过**

```JavaScript
const ssl.VERIFY_OPTIONAL = 1;
```

--------------------------
### VERIFY_REQUIRED
**证书验证模式，要求验证，验证不通过则中断**

```JavaScript
const ssl.VERIFY_REQUIRED = 2;
```

--------------------------
### BADCERT_EXPIRED
**证书验证结果，证书超时**

```JavaScript
const ssl.BADCERT_EXPIRED = 1;
```

--------------------------
### BADCERT_REVOKED
**证书验证结果，证书被撤销**

```JavaScript
const ssl.BADCERT_REVOKED = 2;
```

--------------------------
### BADCERT_CN_MISMATCH
**证书验证结果，证书名错误**

```JavaScript
const ssl.BADCERT_CN_MISMATCH = 4;
```

--------------------------
### BADCERT_NOT_TRUSTED
**证书验证结果，证书不可信**

```JavaScript
const ssl.BADCERT_NOT_TRUSTED = 8;
```

