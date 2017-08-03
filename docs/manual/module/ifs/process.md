# 模块 process
进程处理模块，用以管理当前进程的资源

引用方法：

```JavaScript
var process = require('process');
```

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
**退出当前进程，并返回结果**

```JavaScript
static process.exit(Integer code = 0);
```

调用参数:
* code: Integer, 返回进程结果, 默认为 0

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
### open
**运行指定的命令行，接管进程输入输出流，并返回进程对象**

```JavaScript
static SubProcess process.open(String command,
    Array args,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* args: Array, 指定运行的参数列表
* opts: Object, 指定运行的选项

返回结果:
* [SubProcess](../../object/ifs/SubProcess.md), 返回包含运行结果的进程对象

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

--------------------------
**运行指定的命令行，接管进程输入输出流，并返回进程对象**

```JavaScript
static SubProcess process.open(String command,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* opts: Object, 指定运行的选项

返回结果:
* [SubProcess](../../object/ifs/SubProcess.md), 返回包含运行结果的进程对象

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

--------------------------
### start
**运行指定的命令行，并返回进程对象**

```JavaScript
static SubProcess process.start(String command,
    Array args,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* args: Array, 指定运行的参数列表
* opts: Object, 指定运行的选项

返回结果:
* [SubProcess](../../object/ifs/SubProcess.md), 返回包含运行结果的进程对象

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

--------------------------
**运行指定的命令行，并返回进程对象**

```JavaScript
static SubProcess process.start(String command,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* opts: Object, 指定运行的选项

返回结果:
* [SubProcess](../../object/ifs/SubProcess.md), 返回包含运行结果的进程对象

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

--------------------------
### run
**运行指定的命令行，并返回进程的结束代码**

```JavaScript
static Integer process.run(String command,
    Array args,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* args: Array, 指定运行的参数列表
* opts: Object, 指定运行的选项

返回结果:
* Integer, 返回命令的运行结果

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

--------------------------
**运行指定的命令行，并返回进程的结束代码**

```JavaScript
static Integer process.run(String command,
    Object opts = {});
```

调用参数:
* command: String, 指定运行的命令行
* opts: Object, 指定运行的选项

返回结果:
* Integer, 返回命令的运行结果

opts 支持的选项如下：

```JavaScript
{
    "timeout": 100, // 单位为 ms
    "envs": [] // 进程环境变量
}
```

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
**String, 返回fibjs版本字符串**

```JavaScript
static readonly String process.version;
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

