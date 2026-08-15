# 对象 HttpServer
HttpServer 是内置对象之一，它是用于创建 HTTP 服务器的对象。一个 HttpServer 对象包含两个必传的参数：端口和事件处理接口对象。在事件处理接口对象中，具体的实现方式可以是简单的回调函数，也可以使用复杂的路由、链式处理数组等方式

[http](../../module/ifs/http.md) 服务器对象是将 [TcpServer](TcpServer.md) 和 [HttpHandler](HttpHandler.md) 组合封装的对象，方便快速搭建服务器，逻辑上相当于：

```JavaScript
var svr = new net.TcpServer(addr, port, new http.Handler(function(req) {
    ...
}));
```

下面是一个最简单的 HttpServer 的应用示例，它仅仅是对所有请求，返回字符串 hello world。

```JavaScript
const http = require('http');
var svr = new http.Server(8080, (req) => {
    req.response.write('hello, world');
});
svr.start();
```

从代码中可以看到，首先，我们导入了内置的 [http](../../module/ifs/http.md) 模块。然后我们创建了一个新的 HttpServer 对象，并且传入了两个必要参数：一个是端口号，另一个是具体的事件处理接口对象。在这个例子中，我们使用了一个简单的回调函数作为事件处理接口，用来响应来自 HTTP 请求的数据。其中 ``req.response.write('hello, world')`` 用于将我们的字符串 hello world 响应到客户端。

在完成了 HttpServer 对象的创建之后，使用 ``svr.start()`` 来启动服务器，这样我们就能通过这个服务器接收来自 Internet 的 HTTP 请求了。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer|new TcpServer()\l|socket\ltimeout\lhandler\l|start()\llisten()\lstop()\lclose()\laddress()\l|event listening\levent connection\levent error\levent close\l}"];
    HttpServer [tooltip="HttpServer", fillcolor="lightgray", id="me", label="{HttpServer|new HttpServer()\l|maxHeadersCount\lmaxHeaderSize\lmaxBodySize\lenableEncoding\lserverName\l|enableCrossOrigin()\l}"];
    HttpsServer [tooltip="HttpsServer", URL="HttpsServer.md", label="{HttpsServer}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> TcpServer [dir=back];
    TcpServer -> HttpServer [dir=back];
    HttpServer -> HttpsServer [dir=back];
}
```

## 构造函数
        
### HttpServer
**HttpServer 构造函数，在所有本机地址侦听**

```JavaScript
new HttpServer(Integer port,
    Handler hdlr);
```

调用参数:
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**HttpServer 构造函数**

```JavaScript
new HttpServer(String addr,
    Integer port,
    Handler hdlr);
```

调用参数:
* addr: String, 指定 [http](../../module/ifs/http.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 [http](../../module/ifs/http.md) 服务器侦听端口
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**HttpServer 构造函数**

```JavaScript
new HttpServer(String addr,
    Handler hdlr);
```

调用参数:
* addr: String, 指定 [http](../../module/ifs/http.md) 服务器侦听地址，为 "" 则在本机所有地址侦听
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

--------------------------
**HttpServer 构造函数，不绑定端口，需调用 listen() 启动**

```JavaScript
new HttpServer(Handler hdlr);
```

调用参数:
* hdlr: [Handler](Handler.md), [http](../../module/ifs/http.md) 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

## 静态函数
        
### addAbortListener
**监听一个 [AbortSignal](AbortSignal.md) 的 abort 事件，返回一个可释放的对象**

```JavaScript
static Object HttpServer.addAbortListener(EventEmitter signal,
    Function func);
```

调用参数:
* signal: [EventEmitter](EventEmitter.md), 要监听的 [AbortSignal](AbortSignal.md) 对象
* func: Function, abort 事件的处理函数

返回结果:
* Object, 返回一个包含 `[Symbol.dispose]` 方法的 Disposable 对象

返回的对象包含 `[Symbol.dispose]()` 方法，调用后将移除监听器。如果信号已中止，则监听器会被立即调用。

--------------------------
### once
**创建一个 Promise，等待指定事件触发一次后解析**

```JavaScript
static Object HttpServer.once(EventEmitter emitter,
    Value ev,
    Object options = {});
```

调用参数:
* emitter: [EventEmitter](EventEmitter.md), 要监听的事件触发器对象
* ev: Value, 指定事件的名称
* options: Object, 可选参数对象

返回结果:
* Object, 返回 Promise，以事件参数数组解析

返回一个 Promise，当目标事件触发时以事件参数数组解析。如果在此期间触发 'error' 事件（且监听的不是 'error' 事件本身），Promise 将被拒绝。

options 参数可包含：
- signal: [AbortSignal](AbortSignal.md)，用于取消等待

--------------------------
### on
**创建一个异步迭代器，持续监听指定事件**

```JavaScript
static Object HttpServer.on(EventEmitter emitter,
    Value ev,
    Object options = {});
```

调用参数:
* emitter: [EventEmitter](EventEmitter.md), 要监听的事件触发器对象
* ev: Value, 指定事件的名称
* options: Object, 可选参数对象

返回结果:
* Object, 返回 AsyncIterator 对象

返回一个 AsyncIterator，每次事件触发时产出事件参数数组。如果触发 'error' 事件，迭代器将抛出错误。

options 参数可包含：
- signal: [AbortSignal](AbortSignal.md)，用于取消迭代
- close: 字符串数组，指定结束迭代的事件名称

## 静态属性
        
### defaultMaxListeners
**Integer, 默认全局最大监听器数**

```JavaScript
static Integer HttpServer.defaultMaxListeners;
```

## 成员属性
        
### maxHeadersCount
**Integer, 查询和设置最大请求头个数，缺省为 128**

```JavaScript
Integer HttpServer.maxHeadersCount;
```

--------------------------
### maxHeaderSize
**Integer, 查询和设置最大请求头长度，缺省为 8192**

```JavaScript
Integer HttpServer.maxHeaderSize;
```

--------------------------
### maxBodySize
**Integer, 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64**

```JavaScript
Integer HttpServer.maxBodySize;
```

--------------------------
### enableEncoding
**Boolean, 自动解压缩功能开关，默认关闭**

```JavaScript
Boolean HttpServer.enableEncoding;
```

--------------------------
### serverName
**String, 查询和设置服务器名称，缺省为：fibjs/0.x.0**

```JavaScript
String HttpServer.serverName;
```

--------------------------
### socket
**[Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象**

```JavaScript
readonly Socket HttpServer.socket;
```

--------------------------
### timeout
**Integer, 查询和设置超时时间，单位毫秒，此超时时间用于设置接收到的新连接**

```JavaScript
Integer HttpServer.timeout;
```

--------------------------
### handler
**[Handler](Handler.md), 服务器当前事件处理接口对象**

```JavaScript
Handler HttpServer.handler;
```

## 成员函数
        
### enableCrossOrigin
**允许跨域请求**

```JavaScript
HttpServer.enableCrossOrigin(String allowHeaders = "Content-Type");
```

调用参数:
* allowHeaders: String, 指定接受的 [http](../../module/ifs/http.md) 头字段

--------------------------
### start
**启动当前服务器**

```JavaScript
HttpServer.start();
```

--------------------------
### listen
**绑定地址和端口并开始侦听连接**

```JavaScript
HttpServer.listen(Integer port,
    String addr = "",
    Integer backlog = -1) async;
```

调用参数:
* port: Integer, 指定 TCP 服务器侦听端口
* addr: String, 指定 TCP 服务器侦听地址，"" 表示侦听本机所有地址
* backlog: Integer, 指定连接队列的最大长度，-1 表示使用系统默认值

--------------------------
### stop
**关闭 socket中止正在运行的服务器**

```JavaScript
HttpServer.stop() async;
```

--------------------------
### close
**关闭 socket中止正在运行的服务器，stop() 的别名**

```JavaScript
HttpServer.close() async;
```

--------------------------
### address
**返回一个包含服务器绑定地址、地址族和端口的对象。用于获取操作系统分配的地址时查找实际端口。**

```JavaScript
(String address, String family, Integer port) HttpServer.address();
```

返回结果:
* (String address, String family, Integer port), 返回服务器绑定的地址、地址族和端口

--------------------------
### on
**绑定一个事件处理函数到对象**

```JavaScript
Object HttpServer.on(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object HttpServer.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
**绑定一个事件处理函数到对象**

```JavaScript
Object HttpServer.addListener(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object HttpServer.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addEventListener
**绑定一个事件处理函数到对象**

```JavaScript
Object HttpServer.addEventListener(Value ev,
    Function func,
    Object options = {});
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数
* options: Object, 指定事件处理函数的选项

返回结果:
* Object, 返回事件对象本身，便于链式调用

options 参数是一个对象，它可以包含以下属性：
- once: 如果为 true，则事件处理函数只会触发一次，触发后会被移除

--------------------------
### prependListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object HttpServer.prependListener(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object HttpServer.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### once
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object HttpServer.once(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object HttpServer.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object HttpServer.prependOnceListener(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object HttpServer.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### off
**从对象处理队列中取消指定函数**

```JavaScript
Object HttpServer.off(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object HttpServer.off(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object HttpServer.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
**从对象处理队列中取消指定函数**

```JavaScript
Object HttpServer.removeListener(Value ev,
    Function func);
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object HttpServer.removeListener(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object HttpServer.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeEventListener
**从对象处理队列中取消指定函数**

```JavaScript
Object HttpServer.removeEventListener(Value ev,
    Function func,
    Object options = {});
```

调用参数:
* ev: Value, 指定事件的名称
* func: Function, 指定事件处理函数
* options: Object, 指定事件处理函数的选项

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object HttpServer.removeAllListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object HttpServer.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
**监听器的默认限制的数量，仅用于兼容**

```JavaScript
HttpServer.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
**获取监听器的默认限制的数量，仅用于兼容**

```JavaScript
Integer HttpServer.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
**查询对象指定事件的监听器数组**

```JavaScript
Array HttpServer.listeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### rawListeners
**查询对象指定事件的监听器数组，包含 once 包装函数**

```JavaScript
Array HttpServer.rawListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
**查询对象指定事件的监听器数量**

```JavaScript
Integer HttpServer.listenerCount(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
**查询对象指定事件的监听器数量**

```JavaScript
Integer HttpServer.listenerCount(Value o,
    Value ev);
```

调用参数:
* o: Value, 指定查询的对象
* ev: Value, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
**查询监听器事件名称**

```JavaScript
Array HttpServer.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
**主动触发一个事件**

```JavaScript
Boolean HttpServer.emit(Value ev,
    ...args);
```

调用参数:
* ev: Value, 事件名称
* args: ..., 事件参数，将会传递给事件处理函数

返回结果:
* Boolean, 返回事件触发状态，有响应事件返回 true，否则返回 false

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

## 事件
        
### listening
**调用 start() 并完成绑定后触发**

```JavaScript
event HttpServer.listening();
```

--------------------------
### connection
**建立新 TCP 连接时触发**

```JavaScript
event HttpServer.connection(Socket socket);
```

调用参数:
* socket: [Socket](Socket.md), 新建立的 [Socket](Socket.md) 连接对象

--------------------------
### error
**发生错误时触发**

```JavaScript
event HttpServer.error();
```

--------------------------
### close
**服务器关闭后触发**

```JavaScript
event HttpServer.close();
```

