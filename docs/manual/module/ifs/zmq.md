# 模块 zmq
zeroMQ 消息队列模块

基础模块。提供 zeroMQ 消息队列支撑。
\code
var zmq = require(&#39;zmq&#39;);
\endcode
## 常量
        
### PAIR

```JavaScript
zmq.PAIR;
```

### PUB
发布类型，所发送的消息将会分发给所有订阅者。
```JavaScript
zmq.PUB;
```

### SUB
订阅类型，用于接收 PUB 分发的消息。
```JavaScript
zmq.SUB;
```

### REQ
请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。
```JavaScript
zmq.REQ;
```

### REP
响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。
```JavaScript
zmq.REP;
```

### DEALER

```JavaScript
zmq.DEALER;
```

### ROUTER

```JavaScript
zmq.ROUTER;
```

### PULL
获取消息类型，上游推送的消息将被公平的分发到此类接口。
```JavaScript
zmq.PULL;
```

### PUSH
推送类型，推送的消息将均衡发送到下游接口。
```JavaScript
zmq.PUSH;
```

### XPUB

```JavaScript
zmq.XPUB;
```

### XSUB

```JavaScript
zmq.XSUB;
```

