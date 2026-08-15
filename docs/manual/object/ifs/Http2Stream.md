# 对象 Http2Stream
Http2Stream 是表示 [Http2Session](Http2Session.md) 中单个 HTTP/2 流的对象

每个 Http2Stream 实例是一个双工流。写入流的数据作为 DATA 帧发送，接收到的数据作为来自远端的 DATA 帧提供。

Http2Stream 实例由 [Http2Session](Http2Session.md) 创建，不应直接构造。

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    EventEmitter [tooltip="EventEmitter", URL="EventEmitter.md", label="{EventEmitter|new EventEmitter()\l|EventEmitter\l|addAbortListener()\lonce()\lon()\l|defaultMaxListeners\l|on()\laddListener()\laddEventListener()\lprependListener()\lonce()\lprependOnceListener()\loff()\lremoveListener()\lremoveEventListener()\lremoveAllListeners()\lsetMaxListeners()\lgetMaxListeners()\llisteners()\lrawListeners()\llistenerCount()\leventNames()\lemit()\l}"];
    Stream [tooltip="Stream", URL="Stream.md", label="{Stream|fd\lwritable\lreadable\l_readableState\l_writableState\l|read()\lreadBuffer()\lreadAll()\lsetEncoding()\lwriteBuffer()\lwrite()\lresume()\lpause()\lpipe()\lunpipe()\lend()\lflush()\lclose()\lcopyTo()\lgetReader()\lref()\lunref()\ldestroy()\l|event data\levent close\levent error\l}"];
    Http2Stream [tooltip="Http2Stream", fillcolor="lightgray", id="me", label="{Http2Stream|id\lclosed\ldestroyed\lheaders\l|respond()\ladditionalHeaders()\lsendTrailers()\lrstStream()\l|event headers\levent trailers\l}"];

    object -> EventEmitter [dir=back];
    EventEmitter -> Stream [dir=back];
    Stream -> Http2Stream [dir=back];
}
```

## 静态函数
        
### addAbortListener
**监听一个 [AbortSignal](AbortSignal.md) 的 abort 事件，返回一个可释放的对象**

```JavaScript
static Object Http2Stream.addAbortListener(EventEmitter signal,
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
static Object Http2Stream.once(EventEmitter emitter,
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
static Object Http2Stream.on(EventEmitter emitter,
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
static Integer Http2Stream.defaultMaxListeners;
```

## 成员属性
        
### id
**Integer, 查询此 Http2Stream 实例的数字流标识符**

```JavaScript
readonly Integer Http2Stream.id;
```

--------------------------
### closed
**Boolean, 查询此 Http2Stream 实例是否已关闭**

```JavaScript
readonly Boolean Http2Stream.closed;
```

--------------------------
### destroyed
**Boolean, 查询此 Http2Stream 实例是否已销毁**

```JavaScript
readonly Boolean Http2Stream.destroyed;
```

--------------------------
### headers
**NObject, 查询此流接收到的头部对象**

```JavaScript
readonly NObject Http2Stream.headers;
```

--------------------------
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer Http2Stream.fd;
```

--------------------------
### writable
**Boolean, 查询流是否可写**

```JavaScript
readonly Boolean Http2Stream.writable;
```

--------------------------
### readable
**Boolean, 查询流是否可读**

```JavaScript
readonly Boolean Http2Stream.readable;
```

--------------------------
### _readableState
**Object, 查询流的可读状态对象**

```JavaScript
readonly Object Http2Stream._readableState;
```

--------------------------
### _writableState
**Object, 查询流的可写状态对象**

```JavaScript
readonly Object Http2Stream._writableState;
```

## 成员函数
        
### respond
**向远端发送响应头**

```JavaScript
Http2Stream.respond(Object headers = {});
```

调用参数:
* headers: Object, 包含头部名值对的对象

--------------------------
### additionalHeaders
**向远端发送额外的信息性 (1xx) 头部**

```JavaScript
Http2Stream.additionalHeaders(Object headers);
```

调用参数:
* headers: Object, 包含头部名值对的对象

--------------------------
### sendTrailers
**向远端发送尾部头，标志流的结束**

```JavaScript
Http2Stream.sendTrailers(Object headers);
```

调用参数:
* headers: Object, 包含尾部头名值对的对象

--------------------------
### rstStream
**向远端发送 RST_STREAM 帧，关闭流**

```JavaScript
Http2Stream.rstStream(Integer code = 0);
```

调用参数:
* code: Integer, RST_STREAM 错误码，默认为 NGHTTP2_NO_ERROR (0)

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Variant Http2Stream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* Variant, 返回从流内读取的数据。若设置了编码则返回字符串，否则返回 [Buffer](Buffer.md)。若无数据可读，或者连接中断，则返回 null

--------------------------
### readBuffer
**从流内读取指定大小的数据，以 [Buffer](Buffer.md) 形式返回**

```JavaScript
Buffer Http2Stream.readBuffer(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的 [Buffer](Buffer.md) 数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
**从流内读取剩余的全部数据**

```JavaScript
Buffer Http2Stream.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### setEncoding
**设置流的编码方式。设置后 read() 将返回字符串而非 [Buffer](Buffer.md) 对象**

```JavaScript
Stream Http2Stream.setEncoding(String encoding);
```

调用参数:
* encoding: String, 要使用的编码，如 'utf8'、'ascii'、'[hex](../../module/ifs/hex.md)' 等。传入 null 恢复为 [Buffer](Buffer.md) 模式

返回结果:
* [Stream](Stream.md), 返回当前流对象

--------------------------
### writeBuffer
**将给定的二进制数据写入流**

```JavaScript
Http2Stream.writeBuffer(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的 [Buffer](Buffer.md) 数据

--------------------------
### write
**将给定的数据写入流**

```JavaScript
Boolean Http2Stream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

返回结果:
* Boolean, 如果流希望调用代码在继续写入其他数据之前等待 'drain' 事件，则返回 true；否则返回 false

--------------------------
**将给定的数据写入流**

```JavaScript
Boolean Http2Stream.write(Buffer data,
    String encoding) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据
* encoding: String, 指定的编码方式，因为 data 为 [Buffer](Buffer.md) 类型，此参数将被忽略

返回结果:
* Boolean, 如果流希望调用代码在继续写入其他数据之前等待 'drain' 事件，则返回 true；否则返回 false

--------------------------
**将给定的字符串写入流**

```JavaScript
Boolean Http2Stream.write(String data,
    String encoding = "utf8") async;
```

调用参数:
* data: String, 给定要写入的字符串数据
* encoding: String, 指定字符串的编码方式，缺省为 "utf8"

返回结果:
* Boolean, 如果流希望调用代码在继续写入其他数据之前等待 'drain' 事件，则返回 true；否则返回 false

--------------------------
### resume
**将流切换到流动读取模式。在 fibjs 下，切换到流动读取模式是不可逆的，不能再切换回非流动读取模式。**

```JavaScript
Stream Http2Stream.resume();
```

返回结果:
* [Stream](Stream.md), 返回当前流对象

--------------------------
### pause
**暂停流的自动读取模式。此方法仅为兼容，目前调用此方法不会有任何效果**

```JavaScript
Stream Http2Stream.pause();
```

返回结果:
* [Stream](Stream.md), 返回当前流对象

--------------------------
### pipe
**将流数据管道传输到目标流。数据通过事件驱动方式从源流传输到目标流，支持背压控制**

```JavaScript
Value Http2Stream.pipe(Value destination,
    Object options = {});
```

调用参数:
* destination: Value, 目标流对象
* options: Object, 管道选项，可选

返回结果:
* Value, 返回目标流对象，支持链式调用

--------------------------
### unpipe
**移除所有管道目标，或仅移除指定的目标。此方法仅为兼容，目前调用此方法不会有任何效果**

```JavaScript
Http2Stream.unpipe(Stream destination = NULL);
```

调用参数:
* destination: [Stream](Stream.md), 要取消管道的特定可写目标

--------------------------
### end
**结束流操作，可选择性地写入最后的数据**

```JavaScript
Integer Http2Stream.end() async;
```

返回结果:
* Integer, 返回一个异步对象

--------------------------
**将给定的文件缓冲区写入流并结束流操作**

```JavaScript
Integer Http2Stream.end(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的文件缓冲区数据

返回结果:
* Integer, 返回一个异步对象

--------------------------
**将给定的文件缓冲区写入流并结束流操作**

```JavaScript
Integer Http2Stream.end(Buffer data,
    String encoding) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的文件缓冲区数据
* encoding: String, 指定的编码方式，因为 data 为 [Buffer](Buffer.md) 类型，此参数将被忽略

返回结果:
* Integer, 返回一个异步对象

--------------------------
**将给定的字符串写入流并结束流操作**

```JavaScript
Integer Http2Stream.end(String data,
    String encoding = "utf8") async;
```

调用参数:
* data: String, 给定要写入的字符串数据
* encoding: String, 指定字符串的编码方式，缺省为 "utf8"

返回结果:
* Integer, 返回一个异步对象

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
Http2Stream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
Http2Stream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long Http2Stream.copyTo(Stream stm,
    Long bytes = -1) async;
```

调用参数:
* stm: [Stream](Stream.md), 目标流对象
* bytes: Long, 复制的字节数

返回结果:
* Long, 返回复制的字节数

--------------------------
### getReader
**获取流的读取器，兼容 WHATWG ReadableStreamDefaultReader 接口**

```JavaScript
StreamReader Http2Stream.getReader();
```

返回结果:
* [StreamReader](StreamReader.md), 返回 [StreamReader](StreamReader.md) 对象

--------------------------
### ref
**维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出**

```JavaScript
Stream Http2Stream.ref();
```

返回结果:
* [Stream](Stream.md), 返回当前对象

--------------------------
### unref
**允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出**

```JavaScript
Stream Http2Stream.unref();
```

返回结果:
* [Stream](Stream.md), 返回当前对象

--------------------------
### destroy
**销毁流。可选地触发 'error' 事件，并触发 'close' 事件。**

```JavaScript
Stream Http2Stream.destroy(Value err = undefined) async;
```

调用参数:
* err: Value, 可选的错误对象，将作为 'error' 事件触发

返回结果:
* [Stream](Stream.md), 返回当前对象

调用后，流将不再可用。

--------------------------
### on
**绑定一个事件处理函数到对象**

```JavaScript
Object Http2Stream.on(Value ev,
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
Object Http2Stream.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
**绑定一个事件处理函数到对象**

```JavaScript
Object Http2Stream.addListener(Value ev,
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
Object Http2Stream.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addEventListener
**绑定一个事件处理函数到对象**

```JavaScript
Object Http2Stream.addEventListener(Value ev,
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
Object Http2Stream.prependListener(Value ev,
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
Object Http2Stream.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### once
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object Http2Stream.once(Value ev,
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
Object Http2Stream.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object Http2Stream.prependOnceListener(Value ev,
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
Object Http2Stream.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### off
**从对象处理队列中取消指定函数**

```JavaScript
Object Http2Stream.off(Value ev,
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
Object Http2Stream.off(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object Http2Stream.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
**从对象处理队列中取消指定函数**

```JavaScript
Object Http2Stream.removeListener(Value ev,
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
Object Http2Stream.removeListener(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object Http2Stream.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeEventListener
**从对象处理队列中取消指定函数**

```JavaScript
Object Http2Stream.removeEventListener(Value ev,
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
Object Http2Stream.removeAllListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object Http2Stream.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
**监听器的默认限制的数量，仅用于兼容**

```JavaScript
Http2Stream.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
**获取监听器的默认限制的数量，仅用于兼容**

```JavaScript
Integer Http2Stream.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
**查询对象指定事件的监听器数组**

```JavaScript
Array Http2Stream.listeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### rawListeners
**查询对象指定事件的监听器数组，包含 once 包装函数**

```JavaScript
Array Http2Stream.rawListeners(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
**查询对象指定事件的监听器数量**

```JavaScript
Integer Http2Stream.listenerCount(Value ev);
```

调用参数:
* ev: Value, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
**查询对象指定事件的监听器数量**

```JavaScript
Integer Http2Stream.listenerCount(Value o,
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
Array Http2Stream.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
**主动触发一个事件**

```JavaScript
Boolean Http2Stream.emit(Value ev,
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
String Http2Stream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Http2Stream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

## 事件
        
### headers
**当接收到响应头时触发（客户端）**

```JavaScript
event Http2Stream.headers(Object headers);
```

调用参数:
* headers: Object, 响应头对象

--------------------------
### trailers
**当接收到尾部头时触发**

```JavaScript
event Http2Stream.trailers(Object headers);
```

调用参数:
* headers: Object, 尾部头对象

--------------------------
### data
**查询和绑定流数据事件，相当于 on("data", func);**

```JavaScript
event Http2Stream.data(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 读取到的数据

--------------------------
### close
**查询和绑定流关闭事件，相当于 on("close", func);**

```JavaScript
event Http2Stream.close();
```

--------------------------
### error
**查询和绑定流错误事件，相当于 on("error", func);**

```JavaScript
event Http2Stream.error(Integer code);
```

调用参数:
* code: Integer, 错误码

