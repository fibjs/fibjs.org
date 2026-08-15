# 对象 EventEmitter
EventEmitter 是事件触发对象，它可以被用于建立观察者模式，支持事件触发的对象均继承于此

当一个事件被触发时，所有与该事件相关联的监听器会以异步方式被调用。它还允许我们创建具有高度可定制性和灵活性的代码。

常用函数包括：addListener/on、once、removeListener/off、removeAllListeners 和 emit。

下面是一个示例代码：

```JavaScript
var fs = require('fs');
var EventEmitter = require('events');
var event = new EventEmitter();

event.on('read_file', function(filename) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            event.emit('error', err);
            return;
        }
        event.emit('show_content', data);
    });
});

event.on('error', function(err) {
    console.log(`Error ${err}`);
});

event.on('show_content', function(content) {
    console.log(content);
});

event.emit('read_file', 'test.txt');
```

上述示例代码，当运行时，事件emitter实例event首先监听'read_file'事件，然后在事件触发时(`event.emit('read_file', 'test.txt')`)触发读取文件的操作。当读取成功后，会触发'show_content'事件，此时监听了'show_content'事件的函数就会被执行并显示文件内容。如果在读取文件过程中发生错误，则会触发'error'事件，此时操作失败的情况就得到了应对。

这种模式在应对异步操作的业务场景中具有很好的优越性。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", fillcolor="lightgray", id="me", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    AbortSignal [tooltip="AbortSignal", URL="AbortSignal.md", label="{AbortSignal}"];
    ChildProcess [tooltip="ChildProcess", URL="ChildProcess.md", label="{ChildProcess}"];
    DgramSocket [tooltip="DgramSocket", URL="DgramSocket.md", label="{DgramSocket}"];
    EventSource [tooltip="EventSource", URL="EventSource.md", label="{EventSource}"];
    FSWatcher [tooltip="FSWatcher", URL="FSWatcher.md", label="{FSWatcher}"];
    Http2Session [tooltip="Http2Session", URL="Http2Session.md", label="{Http2Session}"];
    HttpClient [tooltip="HttpClient", URL="HttpClient.md", label="{HttpClient}"];
    MenuItem [tooltip="MenuItem", URL="MenuItem.md", label="{MenuItem}"];
    Message [tooltip="Message", URL="Message.md", label="{Message}"];
    HttpMessage [tooltip="HttpMessage", URL="HttpMessage.md", label="{HttpMessage}"];
    HttpRequest [tooltip="HttpRequest", URL="HttpRequest.md", label="{HttpRequest}"];
    HttpResponse [tooltip="HttpResponse", URL="HttpResponse.md", label="{HttpResponse}"];
    WebSocketMessage [tooltip="WebSocketMessage", URL="WebSocketMessage.md", label="{WebSocketMessage}"];
    WorkerMessage [tooltip="WorkerMessage", URL="WorkerMessage.md", label="{WorkerMessage}"];
    MessagePort [tooltip="MessagePort", URL="MessagePort.md", label="{MessagePort}"];
    RTCDataChannel [tooltip="RTCDataChannel", URL="RTCDataChannel.md", label="{RTCDataChannel}"];
    RTCPeerConnection [tooltip="RTCPeerConnection", URL="RTCPeerConnection.md", label="{RTCPeerConnection}"];
    Service [tooltip="Service", URL="Service.md", label="{Service}"];
    StatsWatcher [tooltip="StatsWatcher", URL="StatsWatcher.md", label="{StatsWatcher}"];
    Stream [tooltip="Stream", URL="Stream.md", label="{Stream}"];
    BufferedStream [tooltip="BufferedStream", URL="BufferedStream.md", label="{BufferedStream}"];
    Http2Stream [tooltip="Http2Stream", URL="Http2Stream.md", label="{Http2Stream}"];
    SeekableStream [tooltip="SeekableStream", URL="SeekableStream.md", label="{SeekableStream}"];
    FileStream [tooltip="FileStream", URL="FileStream.md", label="{FileStream}"];
    MemoryStream [tooltip="MemoryStream", URL="MemoryStream.md", label="{MemoryStream}"];
    RangeStream [tooltip="RangeStream", URL="RangeStream.md", label="{RangeStream}"];
    Socket [tooltip="Socket", URL="Socket.md", label="{Socket}"];
    TLSSocket [tooltip="TLSSocket", URL="TLSSocket.md", label="{TLSSocket}"];
    TTYInputStream [tooltip="TTYInputStream", URL="TTYInputStream.md", label="{TTYInputStream}"];
    TTYOutputStream [tooltip="TTYOutputStream", URL="TTYOutputStream.md", label="{TTYOutputStream}"];
    TcpServer [tooltip="TcpServer", URL="TcpServer.md", label="{TcpServer}"];
    Http2Server [tooltip="Http2Server", URL="Http2Server.md", label="{Http2Server}"];
    HttpServer [tooltip="HttpServer", URL="HttpServer.md", label="{HttpServer}"];
    HttpsServer [tooltip="HttpsServer", URL="HttpsServer.md", label="{HttpsServer}"];
    TLSServer [tooltip="TLSServer", URL="TLSServer.md", label="{TLSServer}"];
    WebSocket [tooltip="WebSocket", URL="WebSocket.md", label="{WebSocket}"];
    WebView [tooltip="WebView", URL="WebView.md", label="{WebView}"];
    Worker [tooltip="Worker", URL="Worker.md", label="{Worker}"];
    ZlibCodec [tooltip="ZlibCodec", URL="ZlibCodec.md", label="{ZlibCodec}"];
    Deflate [tooltip="Deflate", URL="Deflate.md", label="{Deflate}"];
    DeflateRaw [tooltip="DeflateRaw", URL="DeflateRaw.md", label="{DeflateRaw}"];
    Gunzip [tooltip="Gunzip", URL="Gunzip.md", label="{Gunzip}"];
    Gzip [tooltip="Gzip", URL="Gzip.md", label="{Gzip}"];
    Inflate [tooltip="Inflate", URL="Inflate.md", label="{Inflate}"];
    InflateRaw [tooltip="InflateRaw", URL="InflateRaw.md", label="{InflateRaw}"];
    Unzip [tooltip="Unzip", URL="Unzip.md", label="{Unzip}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> AbortSignal [dir=back];
    EventEmitter -> ChildProcess [dir=back];
    EventEmitter -> DgramSocket [dir=back];
    EventEmitter -> EventSource [dir=back];
    EventEmitter -> FSWatcher [dir=back];
    EventEmitter -> Http2Session [dir=back];
    EventEmitter -> HttpClient [dir=back];
    EventEmitter -> MenuItem [dir=back];
    EventEmitter -> Message [dir=back];
    Message -> HttpMessage [dir=back];
    HttpMessage -> HttpRequest [dir=back];
    HttpMessage -> HttpResponse [dir=back];
    Message -> WebSocketMessage [dir=back];
    Message -> WorkerMessage [dir=back];
    EventEmitter -> MessagePort [dir=back];
    EventEmitter -> RTCDataChannel [dir=back];
    EventEmitter -> RTCPeerConnection [dir=back];
    EventEmitter -> Service [dir=back];
    EventEmitter -> StatsWatcher [dir=back];
    EventEmitter -> Stream [dir=back];
    Stream -> BufferedStream [dir=back];
    Stream -> Http2Stream [dir=back];
    Stream -> SeekableStream [dir=back];
    SeekableStream -> FileStream [dir=back];
    SeekableStream -> MemoryStream [dir=back];
    SeekableStream -> RangeStream [dir=back];
    Stream -> Socket [dir=back];
    Stream -> TLSSocket [dir=back];
    Stream -> TTYInputStream [dir=back];
    Stream -> TTYOutputStream [dir=back];
    EventEmitter -> TcpServer [dir=back];
    TcpServer -> Http2Server [dir=back];
    TcpServer -> HttpServer [dir=back];
    HttpServer -> HttpsServer [dir=back];
    TcpServer -> TLSServer [dir=back];
    EventEmitter -> WebSocket [dir=back];
    EventEmitter -> WebView [dir=back];
    EventEmitter -> Worker [dir=back];
    EventEmitter -> ZlibCodec [dir=back];
    ZlibCodec -> Deflate [dir=back];
    ZlibCodec -> DeflateRaw [dir=back];
    ZlibCodec -> Gunzip [dir=back];
    ZlibCodec -> Gzip [dir=back];
    ZlibCodec -> Inflate [dir=back];
    ZlibCodec -> InflateRaw [dir=back];
    ZlibCodec -> Unzip [dir=back];
}
```

## 构造函数
        
### EventEmitter
**构造函数**

```JavaScript
new EventEmitter(Object options = {});
```

调用参数:
* options: Object, 选项对象，支持 captureRejections 等

## 对象
        
**事件触发对象**

```JavaScript
EventEmitter new EventEmitter;
```

## 静态函数
        
### addAbortListener
**监听一个 [AbortSignal](AbortSignal.md) 的 abort 事件，返回一个可释放的对象**

```JavaScript
static Object EventEmitter.addAbortListener(EventEmitter signal,
    Function func);
```

调用参数:
* signal: EventEmitter, 要监听的 [AbortSignal](AbortSignal.md) 对象
* func: Function, abort 事件的处理函数

返回结果:
* Object, 返回一个包含 `[Symbol.dispose]` 方法的 Disposable 对象

返回的对象包含 `[Symbol.dispose]()` 方法，调用后将移除监听器。如果信号已中止，则监听器会被立即调用。

--------------------------
### once
**创建一个 Promise，等待指定事件触发一次后解析**

```JavaScript
static Object EventEmitter.once(EventEmitter emitter,
    Value ev,
    Object options = {});
```

调用参数:
* emitter: EventEmitter, 要监听的事件触发器对象
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
static Object EventEmitter.on(EventEmitter emitter,
    Value ev,
    Object options = {});
```

调用参数:
* emitter: EventEmitter, 要监听的事件触发器对象
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
static Integer EventEmitter.defaultMaxListeners;
```

## 成员函数
        
### on
**绑定一个事件处理函数到对象**

```JavaScript
Object EventEmitter.on(Value ev,
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
Object EventEmitter.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
**绑定一个事件处理函数到对象**

```JavaScript
Object EventEmitter.addListener(Value ev,
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
Object EventEmitter.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addEventListener
**绑定一个事件处理函数到对象**

```JavaScript
Object EventEmitter.addEventListener(Value ev,
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
Object EventEmitter.prependListener(Value ev,
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
Object EventEmitter.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### once
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object EventEmitter.once(Value ev,
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
Object EventEmitter.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object EventEmitter.prependOnceListener(Value ev,
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
Object EventEmitter.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### off
**从对象处理队列中取消指定函数**

```JavaScript
Object EventEmitter.off(Value ev,
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
Object EventEmitter.off(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object EventEmitter.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
**从对象处理队列中取消指定函数**

```JavaScript
Object EventEmitter.removeListener(Value ev,
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
Object EventEmitter.removeListener(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object EventEmitter.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeEventListener
**从对象处理队列中取消指定函数**

```JavaScript
Object EventEmitter.removeEventListener(Value ev,
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
Object EventEmitter.removeAllListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object EventEmitter.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
**监听器的默认限制的数量，仅用于兼容**

```JavaScript
EventEmitter.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
**获取监听器的默认限制的数量，仅用于兼容**

```JavaScript
Integer EventEmitter.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
**查询对象指定事件的监听器数组**

```JavaScript
Array EventEmitter.listeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### rawListeners
**查询对象指定事件的监听器数组，包含 once 包装函数**

```JavaScript
Array EventEmitter.rawListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
**查询对象指定事件的监听器数量**

```JavaScript
Integer EventEmitter.listenerCount(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
**查询对象指定事件的监听器数量**

```JavaScript
Integer EventEmitter.listenerCount(Value o,
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
Array EventEmitter.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
**主动触发一个事件**

```JavaScript
Boolean EventEmitter.emit(Value ev,
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
String EventEmitter.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value EventEmitter.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

