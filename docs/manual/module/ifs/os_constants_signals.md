# 模块 os_constants_signals
[os_constants](os_constants.md) signals 子模块，包含 POSIX 信号常量

引用方法：

```JavaScript
var signals = require('os').constants.signals
```

## 常量
        
### SIGHUP
**挂断信号，终端关闭时发送**

```JavaScript
const os_constants_signals.SIGHUP = 1;
```

--------------------------
### SIGINT
**中断信号，通常由 CTRL+C 触发**

```JavaScript
const os_constants_signals.SIGINT = 2;
```

--------------------------
### SIGQUIT
**退出信号，通常由 CTRL+\ 触发**

```JavaScript
const os_constants_signals.SIGQUIT = 3;
```

--------------------------
### SIGILL
**非法指令**

```JavaScript
const os_constants_signals.SIGILL = 4;
```

--------------------------
### SIGTRAP
**陷阱信号，用于调试**

```JavaScript
const os_constants_signals.SIGTRAP = 5;
```

--------------------------
### SIGABRT
**中止信号，调用 abort() 时发送**

```JavaScript
const os_constants_signals.SIGABRT = 6;
```

--------------------------
### SIGIOT
**与 SIGABRT 相同**

```JavaScript
const os_constants_signals.SIGIOT = 6;
```

--------------------------
### SIGBUS
**总线错误**

```JavaScript
const os_constants_signals.SIGBUS = 7;
```

--------------------------
### SIGFPE
**浮点异常**

```JavaScript
const os_constants_signals.SIGFPE = 8;
```

--------------------------
### SIGKILL
**强制终止信号，不可捕获或忽略**

```JavaScript
const os_constants_signals.SIGKILL = 9;
```

--------------------------
### SIGUSR1
**用户自定义信号 1**

```JavaScript
const os_constants_signals.SIGUSR1 = 10;
```

--------------------------
### SIGSEGV
**段错误，访问无效内存**

```JavaScript
const os_constants_signals.SIGSEGV = 11;
```

--------------------------
### SIGUSR2
**用户自定义信号 2**

```JavaScript
const os_constants_signals.SIGUSR2 = 12;
```

--------------------------
### SIGPIPE
**管道破裂，写入无读取端的管道**

```JavaScript
const os_constants_signals.SIGPIPE = 13;
```

--------------------------
### SIGALRM
**定时器到期信号**

```JavaScript
const os_constants_signals.SIGALRM = 14;
```

--------------------------
### SIGTERM
**终止信号，通常由 kill 命令发送**

```JavaScript
const os_constants_signals.SIGTERM = 15;
```

--------------------------
### SIGSTKFLT
**协处理器栈错误**

```JavaScript
const os_constants_signals.SIGSTKFLT = 16;
```

--------------------------
### SIGCHLD
**子进程停止或终止**

```JavaScript
const os_constants_signals.SIGCHLD = 17;
```

--------------------------
### SIGCONT
**继续运行被停止的进程**

```JavaScript
const os_constants_signals.SIGCONT = 18;
```

--------------------------
### SIGSTOP
**停止进程，不可捕获或忽略**

```JavaScript
const os_constants_signals.SIGSTOP = 19;
```

--------------------------
### SIGTSTP
**终端停止信号，通常由 CTRL+Z 触发**

```JavaScript
const os_constants_signals.SIGTSTP = 20;
```

--------------------------
### SIGTTIN
**后台进程读取终端**

```JavaScript
const os_constants_signals.SIGTTIN = 21;
```

--------------------------
### SIGTTOU
**后台进程写入终端**

```JavaScript
const os_constants_signals.SIGTTOU = 22;
```

--------------------------
### SIGURG
**套接字上有紧急数据**

```JavaScript
const os_constants_signals.SIGURG = 23;
```

--------------------------
### SIGXCPU
**CPU 时间超限**

```JavaScript
const os_constants_signals.SIGXCPU = 24;
```

--------------------------
### SIGXFSZ
**文件大小超限**

```JavaScript
const os_constants_signals.SIGXFSZ = 25;
```

--------------------------
### SIGVTALRM
**虚拟定时器到期**

```JavaScript
const os_constants_signals.SIGVTALRM = 26;
```

--------------------------
### SIGPROF
**性能剖析定时器到期**

```JavaScript
const os_constants_signals.SIGPROF = 27;
```

--------------------------
### SIGWINCH
**终端窗口大小变化**

```JavaScript
const os_constants_signals.SIGWINCH = 28;
```

--------------------------
### SIGIO
**异步 I/O 就绪**

```JavaScript
const os_constants_signals.SIGIO = 29;
```

--------------------------
### SIGPOLL
**与 SIGIO 相同**

```JavaScript
const os_constants_signals.SIGPOLL = 29;
```

--------------------------
### SIGPWR
**电源故障**

```JavaScript
const os_constants_signals.SIGPWR = 30;
```

--------------------------
### SIGSYS
**无效的系统调用**

```JavaScript
const os_constants_signals.SIGSYS = 31;
```

