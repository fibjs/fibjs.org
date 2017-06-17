# 模块 ws
websocket 支持模块

使用方法：
@code
var ws = require(&#39;ws&#39;);
@endcode
## 函数
        
### connect
创建一个 websocket 连接，并返回握手成功的 Stream 对象
```JavaScript
Stream ws.connect(String url,
                String origin = "");
```

**调用参数:**
* url - 指定连接的 url，支持 ws:// 和 wss:// 协议
* origin - 指定连接的授权域名

**返回结果:**
* 返回连接成功的 Stream 对象，可能为 Socket 或者 SslSocket

### upgrade
创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象
```JavaScript
Handler ws.upgrade(Function accept);
```

**调用参数:**
* accept - 连接成功处理函数，参数为 WebSocket 对象

**返回结果:**
* 返回协议处理器，可与 HttpServer, Chain, Routing 等对接

## 常量
        
### CONTINUE
指定 websocket 消息类型 0，代表一个继续帧
```JavaScript
ws.CONTINUE;
```

### TEXT
指定 websocket 消息类型 1，代表一个文本帧
```JavaScript
ws.TEXT;
```

### BINARY
指定 websocket 消息类型 2，代表一个二进制帧
```JavaScript
ws.BINARY;
```

### CLOSE
指定 websocket 消息类型 8，连接关闭
```JavaScript
ws.CLOSE;
```

### PING
指定 websocket 消息类型 9，代表一个 ping 帧
```JavaScript
ws.PING;
```

### PONG
指定 websocket 消息类型 10，代表一个 pong 帧
```JavaScript
ws.PONG;
```

### CONNECTING

```JavaScript
ws.CONNECTING;
```

### OPEN

```JavaScript
ws.OPEN;
```

### CLOSING

```JavaScript
ws.CLOSING;
```

### CLOSED

```JavaScript
ws.CLOSED;
```

