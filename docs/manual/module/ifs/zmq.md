# 模块 zmq
zeroMQ 消息队列模块

基础模块。提供 zeroMQ 消息队列支撑。

```JavaScript
var zmq = require('zmq');
```

## 对象
        
### Socket
**[ZmqSocket](../../object/ifs/ZmqSocket.md) 对象，参见 [ZmqSocket](../../object/ifs/ZmqSocket.md)**

```JavaScript
ZmqSocket zmq.Socket;
```

## 常量
        
### PAIR
****

```JavaScript
const zmq.PAIR = 0;
```

--------------------------
### PUB
**发布类型，所发送的消息将会分发给所有订阅者。**

```JavaScript
const zmq.PUB = 1;
```

--------------------------
### SUB
**订阅类型，用于接收 PUB 分发的消息。**

```JavaScript
const zmq.SUB = 2;
```

--------------------------
### REQ
**请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。**

```JavaScript
const zmq.REQ = 3;
```

--------------------------
### REP
**响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。**

```JavaScript
const zmq.REP = 4;
```

--------------------------
### DEALER
****

```JavaScript
const zmq.DEALER = 5;
```

--------------------------
### ROUTER
****

```JavaScript
const zmq.ROUTER = 6;
```

--------------------------
### PULL
**获取消息类型，上游推送的消息将被公平的分发到此类接口。**

```JavaScript
const zmq.PULL = 7;
```

--------------------------
### PUSH
**推送类型，推送的消息将均衡发送到下游接口。**

```JavaScript
const zmq.PUSH = 8;
```

--------------------------
### XPUB
****

```JavaScript
const zmq.XPUB = 9;
```

--------------------------
### XSUB
****

```JavaScript
const zmq.XSUB = 10;
```

