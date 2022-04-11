# 模块 dgram
dgram 模块提供了 UDP 数据包 socket 的实现

基础模块，引用方式：

```JavaScript
var dgram = require('dgram');
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
    "type": "udp4" | "udp6", // 必填
    "reuseAddr": true | false, // 若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
    "ipv6Only": true | false, // 若设置为 true，socket.bind() 将只接收 IPv6 的数据包。 默认是 false
    "recvBufferSize": 1024, // 设置 SO_RCVBUF 套接字值
    "sendBufferSize": 1024 //设置 SO_RCVBUF 套接字值
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
    "type": "udp4" | "udp6", // 必填
    "reuseAddr": true | false, // 若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
    "ipv6Only": true | false, // 若设置为 true，socket.bind() 将只接收 IPv6 的数据包。 默认是 false
    "recvBufferSize": # # #, // 设置 SO_RCVBUF 套接字值
    "sendBufferSize": # # # //设置 SO_RCVBUF 套接字值
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

