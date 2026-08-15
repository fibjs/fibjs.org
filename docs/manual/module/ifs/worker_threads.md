# 模块 worker_threads
worker 基础模块，提供线程间通信能力

模块的主要能力：

- **线程对象**：`Worker` 独立线程工作对象；
- **消息通信**：`MessagePort`、`MessageChannel` 消息通道，`receiveMessageOnPort` 同步接收消息；
- **线程信息**：`isMainThread`、`threadId`、`parentPort`、`workerData`；
- **兼容 API**：`markAsUncloneable`、`markAsUntransferable`、`isMarkedAsUntransferable`（提供既有生态兼容）。

引用方法：

```JavaScript
var worker_threads = require('worker_threads');
```

主线程中 `parentPort` 与 `workerData` 为 null；[Worker](../../object/ifs/Worker.md) 线程内通过 `parentPort` 与主线程通信。

## 对象
        
### Worker
**独立线程工作对象，参见 [Worker](../../object/ifs/Worker.md)**

```JavaScript
Worker worker_threads.Worker;
```

--------------------------
### MessagePort
**消息通道的一端，参见 [MessagePort](../../object/ifs/MessagePort.md)**

```JavaScript
MessagePort worker_threads.MessagePort;
```

--------------------------
### MessageChannel
**一对相连的 [MessagePort](../../object/ifs/MessagePort.md) 对象，参见 [MessageChannel](../../object/ifs/MessageChannel.md)**

```JavaScript
MessageChannel worker_threads.MessageChannel;
```

## 静态函数
        
### receiveMessageOnPort
**同步接收 [MessagePort](../../object/ifs/MessagePort.md) 上排队的下一条消息**

```JavaScript
static Value worker_threads.receiveMessageOnPort(MessagePort port);
```

调用参数:
* port: [MessagePort](../../object/ifs/MessagePort.md), 指定接收消息的 [MessagePort](../../object/ifs/MessagePort.md) 对象

返回结果:
* Value, 返回接收到的消息对象，端口为空时返回 undefined

端口上没有排队消息时返回 undefined；有消息时返回包含 `message` 字段的对象。

--------------------------
### markAsUncloneable
**将对象标记为不可克隆。如果对象被用作 port.postMessage() 调用的消息，**

```JavaScript
static worker_threads.markAsUncloneable(Value object);
```

调用参数:
* object: Value, 指定要标记的对象

   会抛出错误。对于原始值，此操作为无操作。

   注意：fibjs 使用 V8 的 ValueSerializer 进行 postMessage 序列化，
   不会检查 transfer mode 私有符号。该标记对 fibjs 的序列化
   行为没有影响，但提供此 API 是为了兼容依赖它的包（如 undici）在
   Web API 构造函数中调用。

--------------------------
### markAsUntransferable
**将对象标记为不可传输。如果对象出现在 port.postMessage() 调用的**

```JavaScript
static worker_threads.markAsUntransferable(Value object);
```

调用参数:
* object: Value, 指定要标记的对象

   传输列表中，将被忽略。

   注意：在 fibjs 中为无操作，为兼容既有 API 调用而提供。

--------------------------
### isMarkedAsUntransferable
**检查对象是否被标记为不可传输。**

```JavaScript
static Boolean worker_threads.isMarkedAsUntransferable(Value object);
```

调用参数:
* object: Value, 指定要检查的对象

返回结果:
* Boolean, 返回对象是否被标记为不可传输，fibjs 中始终为 false

   注意：在 fibjs 中始终返回 false，为兼容既有 API 调用而提供。

## 静态属性
        
### isMainThread
**Boolean, 查询当前 [Worker](../../object/ifs/Worker.md) 是不是主线程**

```JavaScript
static readonly Boolean worker_threads.isMainThread;
```

--------------------------
### threadId
**Integer, 查询当前执行上下文的逻辑 worker 标识**

```JavaScript
static readonly Integer worker_threads.threadId;
```

--------------------------
### parentPort
**[MessagePort](../../object/ifs/MessagePort.md), 查询当前 [Worker](../../object/ifs/Worker.md) 的父线程**

```JavaScript
static readonly MessagePort worker_threads.parentPort;
```

--------------------------
### workerData
**Value, 查询父线程通过 [Worker](../../object/ifs/Worker.md) 构造函数传给该线程的的数据的克隆**

```JavaScript
static readonly Value worker_threads.workerData;
```

