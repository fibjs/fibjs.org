# 模块 sse
Server-Sent Events (SSE) 模块，实现基于 HTTP 的服务器推送功能

SSE 模块提供了标准的 [EventSource](../../object/ifs/EventSource.md) 接口实现，支持服务器向客户端实时推送数据流。
该模块遵循 W3C Server-Sent Events 规范，提供了完整的客户端和服务器端实现：

客户端功能：
- [EventSource](../../object/ifs/EventSource.md) 接口：创建与服务器的持久连接，接收实时事件流
- 事件解析：支持 data、event、id、retry 等标准字段

服务器端功能：
- 协议升级处理：将 HTTP 请求升级为 SSE 连接
- 事件发送：向客户端推送格式化的事件数据
- 连接管理：维护多个客户端连接的生命周期

连接状态：
- CONNECTING (0)：正在建立连接
- OPEN (1)：连接已建立，可以收发数据
- CLOSED (2)：连接已关闭
- SENDER (3)：发送模式，用于服务器端推送

事件类型：
- open：连接建立成功
- message：接收到服务器消息
- error：连接错误或数据解析错误
- close：连接关闭

## 对象
        
### EventSource
**创建一个事件源接口，用于服务器推送事件，参见 [EventSource](../../object/ifs/EventSource.md)**

```JavaScript
EventSource sse.EventSource;
```

## 静态函数
        
### upgrade
**创建一个 sse 协议处理器，从 [http](http.md) 接收 upgrade 请求并握手，生成 [EventSource](../../object/ifs/EventSource.md) 对象**

```JavaScript
static Handler sse.upgrade(Function accept);
```

调用参数:
* accept: Function, 连接成功处理函数，回调将传递两个参数，第一个参数为接收到的 [EventSource](../../object/ifs/EventSource.md) 对象，第二个参数为握手时的 [HttpRequest](../../object/ifs/HttpRequest.md) 对象

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回协议处理器，可与 [HttpServer](../../object/ifs/HttpServer.md), [Chain](../../object/ifs/Chain.md), [Routing](../../object/ifs/Routing.md) 等对接
```

## 常量
        
### CONNECTING
**事件源状态：连接中**

```JavaScript
const sse.CONNECTING = 0;
```

--------------------------
### OPEN
**事件源状态：已连接**

```JavaScript
const sse.OPEN = 1;
```

--------------------------
### CLOSED
**事件源状态：已关闭**

```JavaScript
const sse.CLOSED = 2;
```

--------------------------
### SENDER
**事件源状态：发送模式**

```JavaScript
const sse.SENDER = 3;
```

