# 模块 ssl
ssl/tls 模块，模块别名：tls

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

