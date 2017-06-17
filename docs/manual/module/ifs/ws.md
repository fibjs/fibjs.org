# 模块 ws
websocket 支持模块

使用方法：
```JavaScript
var ws = require('ws');
```
## 对象
        
### Message
创建一个 websocket 消息对象，参见 WebSocketMessage
```JavaScript
WebSocketMessage ws.Message;
```

### Handler
创建一个 websocket 包协议转换处理器，参见 WebSocketHandler
```JavaScript
WebSocketHandler ws.Handler;
```

### Socket

```JavaScript
WebSocket ws.Socket;
```

## 函数
        
### connect
创建一个 websocket 连接，并返回握手成功的 Stream 对象
```JavaScript
static Stream ws.connect(String url,
                String origin = "") async;
```

调用参数:
* url - 指定连接的 url，支持 ws:// 和 wss:// 协议
* origin - 指定连接的授权域名

返回结果:
* 返回连接成功的 Stream 对象，可能为 Socket 或者 SslSocket

### upgrade
创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象
```JavaScript
static Handler ws.upgrade(Function accept);
```

调用参数:
* accept - 连接成功处理函数，参数为 WebSocket 对象

返回结果:
* 返回协议处理器，可与 HttpServer, Chain, Routing 等对接

## 常量
        
### CONTINUE
指定 websocket 消息类型 0，代表一个继续帧
```JavaScript
const ws.CONTINUE = 0;
```

### TEXT
指定 websocket 消息类型 1，代表一个文本帧
```JavaScript
const ws.TEXT = 1;
```

### BINARY
指定 websocket 消息类型 2，代表一个二进制帧
```JavaScript
const ws.BINARY = 2;
```

### CLOSE
指定 websocket 消息类型 8，连接关闭
```JavaScript
const ws.CLOSE = 8;
```

### PING
指定 websocket 消息类型 9，代表一个 ping 帧
```JavaScript
const ws.PING = 9;
```

### PONG
指定 websocket 消息类型 10，代表一个 pong 帧
```JavaScript
const ws.PONG = 10;
```

### CONNECTING

```JavaScript
const ws.CONNECTING = 0;
```

### OPEN

```JavaScript
const ws.OPEN = 1;
```

### CLOSING

```JavaScript
const ws.CLOSING = 2;
```

### CLOSED

```JavaScript
const ws.CLOSED = 3;
```

