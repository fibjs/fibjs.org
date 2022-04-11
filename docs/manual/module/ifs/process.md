# 模块 process
进程处理模块，用以管理当前进程的资源

引用方法：

```JavaScript
var process = require('process');
```

## 进程事件
process 模块对象是 [EventEmitter](../../object/ifs/EventEmitter.md) 的实例，可以通过注册事件监听器响应进程级别的事件。

### beforeExit 事件
**当 fibjs 的任务已经为空，并且没有额外的工作被添加进来，事件 `beforeExit` 会被触发**

```JavaScript
process.on('beforeExit', exitCode => {});
```

正常情况下，如果没有额外的工作被添加到任务队列，fibjs 进程会结束。但是如果 `beforeExit` 事件绑定的监听器的回调函数中，启动了一个新的任务，比如开启一个 fiber，那么 fibjs 进程会继续运行。

[process.exitCode](process.md#exitCode) 作为唯一的参数值传递给 `beforeExit` 事件监听器的回调函数。如果进程由于显式的原因而将要终止，例如直接调用 [process.exit](process.md#exit) 或抛出未捕获的异常，`beforeExit`事件不会被触发。

### exit 事件
**当 fibjs 退出时，事件 `exit` 会被触发，一旦所有与 `exit` 事件绑定的监听器执行完成，进程会终止**

```JavaScript
process.on('exit', exitCode => {});
```

`exit` 事件监听器的回调函数，只有一个入参，这个参数的值可以是 [process.exitCode](process.md#exitCode) 的属性值，或者是调用 [process.exit](process.md#exit) 方法时传入的 `exitCode` 值。

### Signal 事件
**当 fibjs 进程接收到一个信号时，会触发信号事件，目前支持的信号有 SIGINT 和 SIGTERM。每个事件名称，以信号名称的大写表示 (比如事件'SIGINT' 对应信号 SIGINT)。**

信号事件不同于其它进程事件，信号事件是抢占的，当信号发生时，无论当前在 [io](io.md) 操作，还是 JavaScript 运算，都会尽快触发相应事件。比如你可以用下面的代码，中断当前应用，并输出运行状态：

```JavaScript
var coroutine = require('coroutine');

process.on('SIGINT', () => {
    coroutine.fibers.forEach(f => console.error("Fiber %d:\n%s", f.id, f.stack));
    process.exit();
});
```

信号名称及其意义如下：
* SIGINT：在终端运行时，可以被所有平台支持，通常可以通过 CTRL+C 触发。
* SIGTERM：当进程被 kill 时触发此信号。Windows 下不支持。

## 静态函数
        
### umask
**改变当前的 umask，Windows 不支持此方法**

```JavaScript
static Integer process.umask(Integer mask);
```

调用参数:
* mask: Integer, 指定新的掩码

返回结果:
* Integer, 返回之前的 mask

--------------------------
**改变当前的 umask，Windows 不支持此方法**

```JavaScript
static Integer process.umask(String mask);
```

调用参数:
* mask: String, 指定新的掩码， 字符串类型八进制(e.g: "0664")

返回结果:
* Integer, 返回之前的 mask

--------------------------
**返回当前的 umask，Windows 不支持此方法**

```JavaScript
static Integer process.umask();
```

返回结果:
* Integer, 返回当前的 mask 值

--------------------------
### hrtime
**返回系统高精度时间，此时间与当前时间无关，仅用于高精度计时**

```JavaScript
static Array process.hrtime(Array diff = []);
```

调用参数:
* diff: Array, 用于比较的初始时间

返回结果:
* Array, 返回计时时间，格式为 [seconds, nanoseconds]

--------------------------
### exit
**退出当前进程，并返回 exitCode 作为进程结果**

```JavaScript
static process.exit();
```

--------------------------
**退出当前进程，并返回结果**

```JavaScript
static process.exit(Integer code);
```

调用参数:
* code: Integer, 返回进程结果

--------------------------
### cwd
**返回操作系统当前工作路径**

```JavaScript
static String process.cwd();
```

返回结果:
* String, 返回当前系统路径

--------------------------
### chdir
**修改操作系统当前工作路径**

```JavaScript
static process.chdir(String directory);
```

调用参数:
* directory: String, 指定设定的新路径

--------------------------
### uptime
**查询运行环境运行时间，以秒为单位**

```JavaScript
static Number process.uptime();
```

返回结果:
* Number, 返回表示时间的数值

--------------------------
### cpuUsage
**查询当前进程在用户和系统代码中花费的时间，其值为微秒值（百万分之一秒）**

```JavaScript
static Object process.cpuUsage(Object previousValue = {});
```

调用参数:
* previousValue: Object, 指定上一次查询的时间

返回结果:
* Object, 返回包含时间报告

内存报告生成类似以下结果：

```JavaScript
{
    "user": 132379,
    "system": 50507
}
```

其中：
- user 返回进程在用户代码中花费的时间
- system 返回进程在系统代码中花费的时间

--------------------------
### memoryUsage
**查询当前进程内存使用报告**

```JavaScript
static Object process.memoryUsage();
```

返回结果:
* Object, 返回包含内存报告

内存报告生成类似以下结果：

```JavaScript
{
    "rss": 8622080,
    "heapTotal": 4083456,
    "heapUsed": 1621800
}
```

其中：
- rss 返回进程当前占用物理内存大小
- heapTotal 返回 v8 引擎堆内存大小
- heapUsed 返回 v8 引擎正在使用堆内存大小

--------------------------
### nextTick
**启动一个纤程**

```JavaScript
static process.nextTick(Function func,
    ...args);
```

调用参数:
* func: Function, 制定纤程执行的函数
* args: ..., 可变参数序列，此序列会在纤程内传递给函数

--------------------------
### binding
**获取指定名称的内部模块**

```JavaScript
static Value process.binding(String name);
```

调用参数:
* name: String, 指定要查询的内部模块名称

返回结果:
* Value, 返回指定的内部模块

--------------------------
### disconnect
**关闭与父进程的 ipc 管道**

```JavaScript
static process.disconnect();
```

--------------------------
### send
**向父进程发送一个消息**

```JavaScript
static process.send(Value msg);
```

调用参数:
* msg: Value, 指定发送的消息

## 静态属性
        
### argv
**Array, 返回当前进程的命令行参数**

```JavaScript
static readonly Array process.argv;
```

--------------------------
### execArgv
**Array, 返回当前进程的特殊命令行参数，这些参数被 fibjs 用于设置运行环境**

```JavaScript
static readonly Array process.execArgv;
```

--------------------------
### version
**String, 返回 fibjs 版本字符串**

```JavaScript
static readonly String process.version;
```

--------------------------
### versions
**Object, 返回 fibjs 及组件的版本信息**

```JavaScript
static readonly Object process.versions;
```

--------------------------
### execPath
**String, 查询当前运行执行文件完整路径**

```JavaScript
static readonly String process.execPath;
```

--------------------------
### env
**Object, 查询当前进程的环境变量**

```JavaScript
static readonly Object process.env;
```

--------------------------
### arch
**String, 查询当前 cpu 环境，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'**

```JavaScript
static readonly String process.arch;
```

--------------------------
### platform
**String, 查询当前平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'**

```JavaScript
static readonly String process.platform;
```

--------------------------
### pid
**Integer, 读取当前对象指向的进程的 id**

```JavaScript
static readonly Integer process.pid;
```

--------------------------
### ppid
**Integer, 读取当前对象指向的父进程的 id**

```JavaScript
static readonly Integer process.ppid;
```

--------------------------
### stdin
**[Stream](../../object/ifs/Stream.md), 查询当前进程标准输入对象, 在 [tty](tty.md) 中为 [TTYInputStream](../../object/ifs/TTYInputStream.md), 否则为 [Stream](../../object/ifs/Stream.md)**

```JavaScript
static readonly Stream process.stdin;
```

--------------------------
### stdout
**[Stream](../../object/ifs/Stream.md), 查询当前进程标准输出对象, 在 [tty](tty.md) 中为 [TTYOutputStream](../../object/ifs/TTYOutputStream.md), 否则为 [Stream](../../object/ifs/Stream.md)**

```JavaScript
static readonly Stream process.stdout;
```

--------------------------
### stderr
**[Stream](../../object/ifs/Stream.md), 查询当前进程标准错误输出对象, 在 [tty](tty.md) 中为 [TTYOutputStream](../../object/ifs/TTYOutputStream.md), 否则为 [Stream](../../object/ifs/Stream.md)**

```JavaScript
static readonly Stream process.stderr;
```

--------------------------
### exitCode
**Integer, 查询和设置当前进程的退出码**

```JavaScript
static Integer process.exitCode;
```

--------------------------
### connected
**Boolean, 查询与父进程的管道是否正常连接**

```JavaScript
static readonly Boolean process.connected;
```

