# 对象 ChildProcess
子进程对象

```JavaScript
var child_process = require("child_process");
var child = child_process.spawn("ls");
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
[<class>EventEmitter|new EventEmitter()|EventEmitter|defaultMaxListeners|on();addListener();prependListener();once();prependOnceListener();off();removeListener();removeAllListeners();setMaxListeners();getMaxListeners();listeners();listenerCount();eventNames();emit()]
[<this>ChildProcess|connected;pid;exitCode;stdin;stdout;stderr;onexit;onmessage|kill();join();disconnect();send();usage()]

[object] <:- [EventEmitter]
[EventEmitter] <:- [ChildProcess]
```

## 静态属性
        
### defaultMaxListeners
**Integer, 默认全局最大监听器数**

```JavaScript
static Integer ChildProcess.defaultMaxListeners;
```

## 成员属性
        
### connected
**Boolean, 查询与子进程的管道是否正常连接**

```JavaScript
readonly Boolean ChildProcess.connected;
```

--------------------------
### pid
**Integer, 读取当前对象指向的进程的 id**

```JavaScript
readonly Integer ChildProcess.pid;
```

--------------------------
### exitCode
**Integer, 查询和设置当前进程的退出码**

```JavaScript
readonly Integer ChildProcess.exitCode;
```

--------------------------
### stdin
**[Stream](Stream.md), 读取当前对象指向的进程的标准输入对象**

```JavaScript
readonly Stream ChildProcess.stdin;
```

--------------------------
### stdout
**[Stream](Stream.md), 读取当前对象指向的进程的标准输出对象**

```JavaScript
readonly Stream ChildProcess.stdout;
```

--------------------------
### stderr
**[Stream](Stream.md), 读取当前对象指向的进程的标准错误对象**

```JavaScript
readonly Stream ChildProcess.stderr;
```

--------------------------
### onexit
**Function, 查询和绑定进程退出事件，相当于 on("exit", func);**

```JavaScript
Function ChildProcess.onexit;
```

--------------------------
### onmessage
**Function, 查询和绑定子进程消息事件，相当于 on("message", func);**

```JavaScript
Function ChildProcess.onmessage;
```

## 成员函数
        
### kill
**杀掉当前对象指向的进程，并传递信号**

```JavaScript
ChildProcess.kill(Integer signal);
```

调用参数:
* signal: Integer, 传递的信号

--------------------------
**杀掉当前对象指向的进程，并传递信号**

```JavaScript
ChildProcess.kill(String signal);
```

调用参数:
* signal: String, 传递的信号

--------------------------
### join
**等待当前对象指向的进程结束，并返回进程结束代码**

```JavaScript
ChildProcess.join() async;
```

返回结果:
* 进程的结束代码

--------------------------
### disconnect
**关闭与子进程的 ipc 管道**

```JavaScript
ChildProcess.disconnect();
```

--------------------------
### send
**向当前子进程发送一个消息**

```JavaScript
ChildProcess.send(Value msg);
```

调用参数:
* msg: Value, 指定发送的消息

--------------------------
### usage
**查询当前进程占用的内存和花费的时间**

```JavaScript
Object ChildProcess.usage();
```

返回结果:
* Object, 返回包含时间报告

内存报告生成类似以下结果：

```JavaScript
{
    "user": 132379,
    "system": 50507,
    "rss": 8622080
}
```

其中：
- user 返回进程在用户代码中花费的时间，单位为微秒值（百万分之一秒）
- system 返回进程在系统代码中花费的时间，单位为微秒值（百万分之一秒）
- rss 返回进程当前占用物理内存大小

--------------------------
### on
**绑定一个事件处理函数到对象**

```JavaScript
Object ChildProcess.on(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object ChildProcess.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
**绑定一个事件处理函数到对象**

```JavaScript
Object ChildProcess.addListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象**

```JavaScript
Object ChildProcess.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object ChildProcess.prependListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object ChildProcess.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### once
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object ChildProcess.once(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次**

```JavaScript
Object ChildProcess.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
**绑定一个事件处理函数到对象起始**

```JavaScript
Object ChildProcess.prependOnceListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**绑定一个事件处理函数到对象起始**

```JavaScript
Object ChildProcess.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### off
**从对象处理队列中取消指定函数**

```JavaScript
Object ChildProcess.off(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object ChildProcess.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object ChildProcess.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
**从对象处理队列中取消指定函数**

```JavaScript
Object ChildProcess.removeListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**取消对象处理队列中的全部函数**

```JavaScript
Object ChildProcess.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消指定函数**

```JavaScript
Object ChildProcess.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object ChildProcess.removeAllListeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
**从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。**

```JavaScript
Object ChildProcess.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
**监听器的默认限制的数量，仅用于兼容**

```JavaScript
ChildProcess.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
**获取监听器的默认限制的数量，仅用于兼容**

```JavaScript
Integer ChildProcess.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
**查询对象指定事件的监听器数组**

```JavaScript
Array ChildProcess.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
**查询对象指定事件的监听器数量**

```JavaScript
Integer ChildProcess.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
**查询对象指定事件的监听器数量**

```JavaScript
Integer ChildProcess.listenerCount(Value o,
    String ev);
```

调用参数:
* o: Value, 指定查询的对象
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
**查询监听器事件名称**

```JavaScript
Array ChildProcess.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
**主动触发一个事件**

```JavaScript
Boolean ChildProcess.emit(String ev,
    ...args);
```

调用参数:
* ev: String, 事件名称
* args: ..., 事件参数，将会传递给事件处理函数

返回结果:
* Boolean, 返回事件触发状态，有响应事件返回 true，否则返回 false

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String ChildProcess.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value ChildProcess.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

