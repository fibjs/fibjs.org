# 模块 http2
http2 模块提供 HTTP/2 协议支持

http2 模块允许创建 HTTP/2 服务器和客户端，完整支持流多路复用、头部压缩和流量控制。

```JavaScript
const http2 = require('http2');

// 客户端示例
const session = http2.connect('https://example.com');
const stream = session.request({
    ':path': '/'
});
const response = stream.read();
session.close();

// 服务端示例
const server = http2.createServer({
    key: ...,
    cert: ...
}, function(req) {
    req.response.write('Hello, HTTP/2!');
});
server.listen(8443);
server.start();
```

## 对象
        
### Server
**创建 [Http2Server](../../object/ifs/Http2Server.md) 对象，参见 [Http2Server](../../object/ifs/Http2Server.md)**

```JavaScript
Http2Server http2.Server;
```

--------------------------
### Http2Stream
**[Http2Stream](../../object/ifs/Http2Stream.md) 对象，参见 [Http2Stream](../../object/ifs/Http2Stream.md)**

```JavaScript
Http2Stream http2.Http2Stream;
```

--------------------------
### Http2Session
**[Http2Session](../../object/ifs/Http2Session.md) 对象，参见 [Http2Session](../../object/ifs/Http2Session.md)**

```JavaScript
Http2Session http2.Http2Session;
```

--------------------------
### constants
**http2 模块的常量对象，参见 [http2_constants](http2_constants.md)**

```JavaScript
http2_constants http2.constants;
```

## 静态函数
        
### createServer
**创建 Http2 服务器**

```JavaScript
static Http2Server http2.createServer(Object options,
    Handler hdlr);
```

调用参数:
* options: Object, TLS 选项对象或 [SecureContext](../../object/ifs/SecureContext.md) 配置
* hdlr: [Handler](../../object/ifs/Handler.md), 请求处理函数

返回结果:
* [Http2Server](../../object/ifs/Http2Server.md), 返回 [Http2Server](../../object/ifs/Http2Server.md) 对象，调用 listen() 然后 start() 开始服务

--------------------------
**创建 Http2 服务器**

```JavaScript
static Http2Server http2.createServer(SecureContext context,
    Handler hdlr);
```

调用参数:
* context: [SecureContext](../../object/ifs/SecureContext.md), [SecureContext](../../object/ifs/SecureContext.md) 对象用于 TLS 配置
* hdlr: [Handler](../../object/ifs/Handler.md), 请求处理函数

返回结果:
* [Http2Server](../../object/ifs/Http2Server.md), 返回 [Http2Server](../../object/ifs/Http2Server.md) 对象，调用 listen() 然后 start() 开始服务

--------------------------
### connect
**创建到指定目标的 HTTP/2 客户端会话**

```JavaScript
static Http2Session http2.connect(String authority,
    Object options = {}) async;
```

调用参数:
* authority: String, 要连接的服务器 URL
* options: Object, 连接选项

返回结果:
* [Http2Session](../../object/ifs/Http2Session.md), 返回 [Http2Session](../../object/ifs/Http2Session.md) 客户端会话

authority 应为 URL 字符串，如 'https://example.com' 或 'https://example.com:8443'。

options 可包含：
- 所有 [SecureContext](../../object/ifs/SecureContext.md) 选项（key、cert、ca 等）

--------------------------
### getDefaultSettings
**返回默认的 HTTP/2 设置对象**

```JavaScript
static Object http2.getDefaultSettings();
```

返回结果:
* Object, 返回包含默认设置的对象

