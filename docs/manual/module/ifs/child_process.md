# 模块 child_process
子进程管理模块

引用方式：

```JavaScript
var child_process = require("child_process");
var child = child_process.spawn("ls");
```

对于同时使用 nodejs 的用户, 需注意
- fibjs 的 `child_process.exec(command, args)` 和 nodejs 的同名 api 功能类似, 但在 windows 上, 并不会自动将 cmd.exe 作为 command 参数的执行环境;
- fibjs 的 child_process.[spawn|exec|execFile|run] 是同步/回调一体的 async 风格函数:
  - 如果最后一个参数不是函数, 则是同步的
  - 如果传递了函数作为最后一个参数, 则是异步的;
- fibjs 的 child_process.[exec|execFile] 的返回结果是一个对象, 该对象和 nodejs 同名 api 返回的对象**完全不相同**
- fibjs 的 `child_process.run` 在 nodejs 中没有对应 API

## 静态函数
        
### spawn
**用给定的命令发布一个子进程**

```JavaScript
static ChildProcess child_process.spawn(String command,
    Array args,
    Object options = {});
```

调用参数:
* command: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* [ChildProcess](../../object/ifs/ChildProcess.md), 返回子进程对象

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "stdio": Array | String, // 子进程 stdio 配置
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
**用给定的命令发布一个子进程**

```JavaScript
static ChildProcess child_process.spawn(String command,
    Object options = {});
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* [ChildProcess](../../object/ifs/ChildProcess.md), 返回子进程对象

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "stdio": Array | String, // 子进程 stdio 配置
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
### exec
**在 shell 中执行一个命令并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr) child_process.exec(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "env": {}, // 环境变量的键值对
    "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
### execFile
**直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr) child_process.execFile(String command,
    Array args,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "env": {}, // 环境变量的键值对
    "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
**直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr) child_process.execFile(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "env": {}, // 环境变量的键值对
    "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
### fork
**在子进程中执行一个模块**

```JavaScript
static ChildProcess child_process.fork(String module,
    Array args,
    Object options = {});
```

调用参数:
* module: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* [ChildProcess](../../object/ifs/ChildProcess.md), 返回子进程对象

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "stdio": Array | String, // 子进程 stdio 配置
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
**在子进程中执行一个模块**

```JavaScript
static ChildProcess child_process.fork(String module,
    Object options = {});
```

调用参数:
* module: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* [ChildProcess](../../object/ifs/ChildProcess.md), 返回子进程对象

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "stdio": Array | String, // 子进程 stdio 配置
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
### run
**直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static Integer child_process.run(String command,
    Array args,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* Integer, 返回子进程的 exitCode

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

--------------------------
**直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static Integer child_process.run(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* Integer, 返回子进程的 exitCode

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
    "env": {}, // 环境变量的键值对
    "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
    "uid": 0, // 设置用户进程的ID
    "gid": 0, // 设置进程组的ID
    "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
    "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
}
```

