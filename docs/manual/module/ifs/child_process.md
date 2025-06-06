# 模块 child_process
子进程管理模块

引用方式：

```JavaScript
var child_process = require("child_process");
var child = child_process.spawn("ls");
```

在创建子进程时，options.stdio 选项用于配置在父进程和子进程之间建立的管道。 默认情况下，子进程的 stdin、 stdout 和 stderr 会被重定向到 [ChildProcess](../../object/ifs/ChildProcess.md) 对象上相应的 stdin、stdout 和 stderr 流。 这相当于将 options.stdio 设置为 ['pipe', 'pipe', 'pipe']。

为方便起见， options.stdio 可以是以下字符串之一：

- 'pipe'：相当于 ['pipe', 'pipe', 'pipe']（默认值）。
- 'ignore'：相当于 ['ignore', 'ignore', 'ignore']。
- 'inherit'：相当于 ['inherit', 'inherit', 'inherit'] 或 [0, 1, 2]。
- 'pty'：相当于 ['pty', 'pty', 'pty']。不支持 Windows。

否则， options.stdio 的值需是数组（其中每个索引对应于子进程中的文件描述符）。 文件描述符 0、1 和 2 分别对应于 stdin、stdout 和 stderr。 其他的文件描述符可以被指定用于在父进程和子进程之间创建其他的管道。 值可以是以下之一：

1. 'pipe'：在子进程和父进程之间创建管道。 管道的父端作为 child_process 对象上的 stdio[fd] 属性暴露给父进程。 为文件描述符 0、1 和 2 创建的管道也可分别作为 stdin、stdout 和 stderr 使用。
2. 'ignore'：指示 fibjs 忽略子进程中的文件描述符。 虽然 fibjs 将会始终为其衍生的进程打开文件描述符 0、1 和 2，但将文件描述符设置为 'ignore' 可以使 fibjs 打开 /dev/null 并将其附加到子进程的文件描述符。
3. 'inherit'：将相应的 stdio 流传给父进程或从父进程传入。在前三个位置中，这分别相当于 [process.stdin](process.md#stdin)、 [process.stdout](process.md#stdout) 和 [process.stderr](process.md#stderr)。 在任何其他位置中，则相当于 'ignore'。
4. 'pty'：在子进程将在虚拟终端中执行。此时只有 stdin 和 stdout 有效。
5. 正整数：整数值会被解释为当前在父进程中打开的文件描述符。 它与子进程共享，类似于共享 <[Stream](../../object/ifs/Stream.md)> 对象的方式。 在 Windows 上不支持传入 socket。
6. null 或 undefined：使用默认值。 对于 stdio 的文件描述符 0、1 和 2（换句话说，stdin、stdout 和 stderr），将会创建管道。 对于文件描述符 3 及更大的值，则默认为 'ignore'。

```JavaScript
const {
    spawn
} = require('child_process');

// child process uses parent's stdio
spawn('prg', [], {
    stdio: 'inherit'
});

// child process uses parent's stderr
spawn('prg', [], {
    stdio: ['pipe', 'pipe', process.stderr]
});
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
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // configure the group identity of the process
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
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
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
### exec
**在 shell 中执行一个命令并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr, Integer exitCode) child_process.exec(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr, Integer exitCode), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // working directory of the child process, default to current directory
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "encoding": "utf8", // specify the character encoding used to decode the stdout and stderr output
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
### execFile
**直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr, Integer exitCode) child_process.execFile(String command,
    Array args,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr, Integer exitCode), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // working directory of the child process, default to current directory
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "encoding": "utf8", // specify the character encoding used to decode the stdout and stderr output
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
**直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象**

```JavaScript
static (Variant stdout, Variant stderr, Integer exitCode) child_process.execFile(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* (Variant stdout, Variant stderr, Integer exitCode), 返回子进程的 stdio 输出内容

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // working directory of the child process, default to current directory
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "encoding": "utf8", // specify the character encoding used to decode the stdout and stderr output
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
### spawnSync
**用给定的命令发布一个子进程**

```JavaScript
static (Integer pid, NArray output, Variant stdout, Variant stderr, Integer status, Variant error) child_process.spawnSync(String command,
    Array args,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* args: Array, 指定字符串参数列表
* options: Object, 指定创建参数

返回结果:
* (Integer pid, NArray output, Variant stdout, Variant stderr, Integer status, Variant error), 返回子进程运行结果

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // configure the group identity of the process
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
**用给定的命令发布一个子进程**

```JavaScript
static (Integer pid, NArray output, Variant stdout, Variant stderr, Integer status, Variant error) child_process.spawnSync(String command,
    Object options = {}) async;
```

调用参数:
* command: String, 指定要运行的命令
* options: Object, 指定创建参数

返回结果:
* (Integer pid, NArray output, Variant stdout, Variant stderr, Integer status, Variant error), 返回子进程运行结果

options 支持的内容如下：

```JavaScript
{
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
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
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
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
    "cwd": "", // working directory of the child process, default to current directory
    "stdio": Array | String, // configure the pipes that are established between the parent and child process
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
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
    "cwd": "", // working directory of the child process, default to current directory
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
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
    "cwd": "", // working directory of the child process, default to current directory
    "env": {}, // key-value pairs of environment variables to add to the child's environment
    "detached": false, // child process will be a leader of a new process group, default to false
    "uid": 0, // configure the user identity of the process
    "gid": 0, // con
    "windowsVerbatimArguments": false, // do not execute any quote or escape processing on Windows. Ignored on Unix. When specified, the command line string is passed directly to the underlying operating system shell without any processing whatsoever. This is set to true automatically when the shell option is specified and is CMD.
    "windowsHide": false // hide the subprocess console window that would normally be created on Windows systems. This option has no effect on non-Windows systems.
}
```

--------------------------
### sh
**用字符串模版语法在 shell 中执行一个命令并缓冲输出**

```JavaScript
static String child_process.sh(Array strings,
    ...args) async;
```

调用参数:
* strings: Array, 指定要运行的命令
* args: ..., 指定字符串参数列表

返回结果:
* String, 返回子进程的 stdio 输出内容

sh 是对 exec 方法的再次封装，用于快速执行 shell 命令，支持字符串模版语法，例如：

```JavaScript
const $ = require("child_process").sh;
var ret = $`ls -l`;
console.log(ret);
```

因为 sh 是个模版函数，所以可以很方便地在命令中使用模版，例如：

```JavaScript
const $ = require("child_process").sh;
var ret = $`ls -l ${__dirname}`;
console.log(ret);
```

你也可以很方便地在命令中引入数组，例如：

```JavaScript
const $ = require("child_process").sh;
const words = [
    "hello",
    "world"
]
var ret = $`echo ${words}`;
console.log(ret);
```

sh 会自动删除命令返回的最后一个换行，以方便在下一次命令中使用，例如：

```JavaScript
const $ = require("child_process").sh;
var world = $`echo world`;
var ret = $`echo hello ${world}`;
console.log(ret);
```

--------------------------
### ssh
**创建一个 ssh 执行函数**

```JavaScript
static Function child_process.ssh(String host,
    Object options = {});
```

调用参数:
* host: String, 指定远程主机地址
* options: Object, 指定 ssh 连接参数

返回结果:
* Function, 返回子进程对象

options 支持的内容如下：

```JavaScript
{
    "user": "", // ssh user
    "port": 22, // ssh port
}
```

ssh 是对 execFile 方法的再次封装，用于快速执行 ssh shell 命令，支持字符串模版语法，例如：

```JavaScript
const $ = require("child_process").ssh('remote');
var ret = $`ls -l`;
console.log(ret);
```

因为 sh 是个模版函数，所以可以很方便地在命令中使用模版，例如：

```JavaScript
const $ = require("child_process").ssh('remote');
var ret = $`ls -l ${__dirname}`;
console.log(ret);
```

你也可以很方便地在命令中引入数组，例如：

```JavaScript
const $ = require("child_process").ssh('remote');
const words = [
    "hello",
    "world"
]
var ret = $`echo ${words}`;
console.log(ret);
```

sh 会自动删除命令返回的最后一个换行，以方便在下一次命令中使用，例如：

```JavaScript
const $ = require("child_process").ssh('remote');
var world = $`echo world`;
var ret = $`echo hello ${world}`;
console.log(ret);
```

