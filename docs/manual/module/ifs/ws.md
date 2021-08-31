# 模块 ws
websocket 支持模块

使用方法：

```JavaScript
var ws = require('ws');
```

创建一个服务器：

```JavaScript
var ws = require('ws');
var http = require('http');

var svr = new http.Server(80, {
    '/ws': ws.upgrade((conn, req) => {
        conn.onmessage = e => console.log(e.data);
    })
});
svr.start();
```

使用 [WebSocket](../../object/ifs/WebSocket.md) 客户端：

```JavaScript
var ws = require('ws');

var conn = new ws.Socket('ws://127.0.0.1/ws');
conn.onmessage = e => console.log(e.data);
```

## 对象
        
### Message
**创建一个 websocket 消息对象，参见 [WebSocketMessage](../../object/ifs/WebSocketMessage.md)**

```JavaScript
WebSocketMessage ws.Message;
```

--------------------------
### Socket
**[WebSocket](../../object/ifs/WebSocket.md) 对象，参见 [WebSocket](../../object/ifs/WebSocket.md)**

```JavaScript
WebSocket ws.Socket;
```

## 静态函数
        
### upgrade
**创建一个 websocket 协议处理器，从 [http](http.md) 接收 upgrade 请求并握手，生成 [WebSocket](../../object/ifs/WebSocket.md) 对象**

```JavaScript
static Handler ws.upgrade(Function accept);
```

调用参数:
* accept: Function, 连接成功处理函数，回调将传递两个参数，第一个参数为接收到的 [WebSocket](../../object/ifs/WebSocket.md) 对象，第二个参数为握手时的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回协议处理器，可与 [HttpServer](../../object/ifs/HttpServer.md), [Chain](../../object/ifs/Chain.md), [Routing](../../object/ifs/Routing.md) 等对接
```

--------------------------
**创建一个 websocket 协议处理器，从 [http](http.md) 接收 upgrade 请求并握手，生成 [WebSocket](../../object/ifs/WebSocket.md) 对象**

```JavaScript
static Handler ws.upgrade(Object opts,
    Function accept);
```

调用参数:
* opts: Object, 连接选项，缺省是 {}
* accept: Function, 连接成功处理函数，回调将传递两个参数，第一个参数为接收到的 [WebSocket](../../object/ifs/WebSocket.md) 对象，第二个参数为握手时的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回协议处理器，可与 [HttpServer](../../object/ifs/HttpServer.md), [Chain](../../object/ifs/Chain.md), [Routing](../../object/ifs/Routing.md) 等对接

opts 包含请求的附加选项，支持的内容如下：

```JavaScript
{
    "perMessageDeflate": false, // 指定是否支持压缩，缺省不支持
    "maxPayload": 67108864 // 指定最大数据包尺寸，缺省为 67108864
}
```

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

