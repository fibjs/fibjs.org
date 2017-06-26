# 模块 ws
websocket 支持模块

使用方法：

```JavaScript
var ws = require('ws');
```

## 对象
        
### Message
**创建一个 websocket 消息对象，参见 [WebSocketMessage](../../object/ifs/WebSocketMessage.md)**

```JavaScript
WebSocketMessage ws.Message;
```

--------------------------
### Handler
**创建一个 websocket 包协议转换处理器，参见 [WebSocketHandler](../../object/ifs/WebSocketHandler.md)**

```JavaScript
WebSocketHandler ws.Handler;
```

--------------------------
### Socket
**[WebSocket](../../object/ifs/WebSocket.md) 对象，参见 [WebSocket](../../object/ifs/WebSocket.md)**

```JavaScript
WebSocket ws.Socket;
```

## 静态函数
        
### connect
**创建一个 websocket 连接，并返回握手成功的 [Stream](../../object/ifs/Stream.md) 对象**

```JavaScript
static Stream ws.connect(String url,
    String origin = "") async;
```

调用参数:
* url: String, 指定连接的 [url](url.md)，支持 ws:// 和 wss:// 协议
* origin: String, 指定连接的授权域名

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回连接成功的 [Stream](../../object/ifs/Stream.md) 对象，可能为 [Socket](../../object/ifs/Socket.md) 或者 [SslSocket](../../object/ifs/SslSocket.md)

--------------------------
### upgrade
**创建一个 websocket 协议处理器，从 [http](http.md) 接收 upgrade 请求并握手，生成 [WebSocket](../../object/ifs/WebSocket.md) 对象**

```JavaScript
static Handler ws.upgrade(Function accept);
```

调用参数:
* accept: Function, 连接成功处理函数，参数为 [WebSocket](../../object/ifs/WebSocket.md) 对象

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回协议处理器，可与 [HttpServer](../../object/ifs/HttpServer.md), [Chain](../../object/ifs/Chain.md), [Routing](../../object/ifs/Routing.md) 等对接

## 常量
        
### CONTINUE
**指定 websocket 消息类型 0，代表一个继续帧**

```JavaScript
const ws.CONTINUE = 0;
```

--------------------------
### TEXT
**指定 websocket 消息类型 1，代表一个文本帧**

```JavaScript
const ws.TEXT = 1;
```

--------------------------
### BINARY
**指定 websocket 消息类型 2，代表一个二进制帧**

```JavaScript
const ws.BINARY = 2;
```

--------------------------
### CLOSE
**指定 websocket 消息类型 8，连接关闭**

```JavaScript
const ws.CLOSE = 8;
```

--------------------------
### PING
**指定 websocket 消息类型 9，代表一个 ping 帧**

```JavaScript
const ws.PING = 9;
```

--------------------------
### PONG
**指定 websocket 消息类型 10，代表一个 pong 帧**

```JavaScript
const ws.PONG = 10;
```

--------------------------
### CONNECTING
**指定 [WebSocket](../../object/ifs/WebSocket.md) 状态，表示正在连接中**

```JavaScript
const ws.CONNECTING = 0;
```

--------------------------
### OPEN
**指定 [WebSocket](../../object/ifs/WebSocket.md) 状态，表示打开状态**

```JavaScript
const ws.OPEN = 1;
```

--------------------------
### CLOSING
**指定 [WebSocket](../../object/ifs/WebSocket.md) 状态，表示已发送 CLOSE 消息，等待关闭中**

```JavaScript
const ws.CLOSING = 2;
```

--------------------------
### CLOSED
**指定 [WebSocket](../../object/ifs/WebSocket.md) 状态，表示已经关闭**

```JavaScript
const ws.CLOSED = 3;
```

