# 模块 dgram
dgram 基础模块之一，主要用于实现 UDP 数据包 socket 的封装。

使用步骤：

1. 首先，通过下面的语句引入 dgram 模块。
```
var dgram = require('dgram');
```

2. 创建 UDP 数据包 socket 实例。
```
var sock = dgram.createSocket('udp4');
```

3. 为 UDP 数据包 socket 注册数据接收事件消息回调函数。
```
sock.on('message', function (msg, rinfo) {
// process received message
});
```

4. 发送 UDP 数据包消息到指定目标地址。
```
var msg = ...; // message to send
var port = ...; // destination port
var host = ...; // destination host
var bytes = sock.send(msg, 0, msg.length, port, host);
console.log('UDP message sent to ' + host + ':' + port);
```

## 对象
        
### Socket
**[dgram.Socket](dgram.md#Socket) 对象是一个封装了数据包函数功能的 [EventEmitter](../../object/ifs/EventEmitter.md)。参见 [DgramSocket](../../object/ifs/DgramSocket.md)**

```JavaScript
DgramSocket dgram.Socket;
```

[dgram.Socket](dgram.md#Socket) 实例是由 [dgram.createSocket](dgram.md#createSocket)() 创建的。创建 [dgram.Socket](dgram.md#Socket) 实例不需要使用 new 关键字。

## 静态函数
        
### createSocket
**创建一个 [dgram.Socket](dgram.md#Socket) 对象**

```JavaScript
static DgramSocket dgram.createSocket(Object opts);
```

调用参数:
* opts: Object, 

返回结果:
* [DgramSocket](../../object/ifs/DgramSocket.md), 返回创建的 [Socket](../../object/ifs/Socket.md) 对象

opts 允许的选项是:

```JavaScript
{
    "type": "udp4" | "udp6", // socket type
    "reuseAddr": true | false, // reuse address, default is false
    "ipv6Only": true | false, // only accept IPv6 packets, default is false
    "recvBufferSize": 1024, // specify the size of the receive buffer
    "sendBufferSize": 1024 // specify the size of the send buffer
}
```

--------------------------
**创建一个 [dgram.Socket](dgram.md#Socket) 对象**

```JavaScript
static DgramSocket dgram.createSocket(Object opts,
    Function callback);
```

调用参数:
* opts: Object, 
* callback: Function, 为 'message' 事件添加一个监听器。

返回结果:
* [DgramSocket](../../object/ifs/DgramSocket.md), 返回创建的 [Socket](../../object/ifs/Socket.md) 对象

opts 允许的选项是:

```JavaScript
{
    "type": "udp4" | "udp6", // socket type
    "reuseAddr": true | false, // reuse address, default is false
    "ipv6Only": true | false, // only accept IPv6 packets, default is false
    "recvBufferSize": 1024, // specify the size of the receive buffer
    "sendBufferSize": 1024 // specify the size of the send buffer
}
```

--------------------------
**创建一个 [dgram.Socket](dgram.md#Socket) 对象**

```JavaScript
static DgramSocket dgram.createSocket(String type);
```

调用参数:
* type: String, 套接字族，'udp4' 或 'udp6'。

返回结果:
* [DgramSocket](../../object/ifs/DgramSocket.md), 返回创建的 [Socket](../../object/ifs/Socket.md) 对象

--------------------------
**创建一个 [dgram.Socket](dgram.md#Socket) 对象**

```JavaScript
static DgramSocket dgram.createSocket(String type,
    Function callback);
```

调用参数:
* type: String, 套接字族，'udp4' 或 'udp6'。
* callback: Function, 为 'message' 事件添加一个监听器。

返回结果:
* [DgramSocket](../../object/ifs/DgramSocket.md), 返回创建的 [Socket](../../object/ifs/Socket.md) 对象

