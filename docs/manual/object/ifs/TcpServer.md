# 对象 TcpServer
tcp 服务器对象，可方便创建一个标准多纤程 tcp 服务器

使用 TcpServer 对象可以迅速创建一个多纤程并发处理的 tcp 服务器。

```JavaScript
function func(conn) {
    var data;

    while (data = conn.read())
        conn.write(data);

    conn.close();
}

new net.TcpServer(8080, func).start();
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>TcpServer|new TcpServer()|socket;handler|start();stop()]
[<class>HttpServer]
[<class>HttpsServer]
[<class>SslServer]

[object] <:- [TcpServer]
[TcpServer] <:- [HttpServer]
[HttpServer] <:- [HttpsServer]
[TcpServer] <:- [SslServer]
```

## 构造函数
        
### TcpServer
**TcpServer 构造函数，在所有本机地址侦听**

```JavaScript
new TcpServer(Integer port,
    Handler listener);
```

调用参数:
* port: Integer, 指定 tcp 服务器侦听端口
* listener: [Handler](Handler.md), 指定 tcp 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**TcpServer 构造函数**

```JavaScript
new TcpServer(String addr,
    Integer port,
    Handler listener);
```

调用参数:
* addr: String, 指定 tcp 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 tcp 服务器侦听端口
* listener: [Handler](Handler.md), 指定 tcp 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**TcpServer 构造函数**

```JavaScript
new TcpServer(String addr,
    Handler listener);
```

调用参数:
* addr: String, 指定 unix socket 或者 Windows pipe 服务器侦听地址
* listener: [Handler](Handler.md), 指定 tcp 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

## 成员属性
        
### socket
**[Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象**

```JavaScript
readonly Socket TcpServer.socket;
```

--------------------------
### handler
**[Handler](Handler.md), 服务器当前事件处理接口对象**

```JavaScript
Handler TcpServer.handler;
```

## 成员函数
        
### start
**启动当前服务器**

```JavaScript
TcpServer.start();
```

--------------------------
### stop
**关闭 socket中止正在运行的服务器**

```JavaScript
TcpServer.stop() async;
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String TcpServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value TcpServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

