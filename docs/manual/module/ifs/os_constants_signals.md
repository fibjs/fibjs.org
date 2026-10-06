# Module os_constants_signals
The signals table of [os.constants](os.md#constants): the signal numbers of the running platform

Reached through `require('[os](os.md)').constants.signals`. On POSIX the names and numbers match the
host's `<signal.h>` (verified against the Linux x86-64 headers) and include the aliases
SIGIOT = SIGABRT and SIGPOLL = SIGIO; SIGSTKFLT and SIGPWR exist only on Linux. Windows
exposes the same names (matching Node.js) but can deliver only a few of them.

Concepts:

- **Numbers feed the [process](process.md) APIs**: [process.kill](process.md#kill) and [ChildProcess](../../object/ifs/ChildProcess.md)#kill accept a name or a
  number, and this table provides the numbers. A [process](process.md) that dies from a signal reports the
  negated number as its exit code (SIGTERM gives -15), the 'exit' event receives the signal
  name, and join() returns the same negative value.
- **Delivery is limited**: in fibjs only SIGINT and SIGTERM reach a JavaScript listener
  registered with process.on; every other signal keeps the default action of the operating
  system. Sending SIGTERM or SIGKILL to a child is still the portable way to stop it.
- **Not the legacy numbers**: the [constants](constants.md) [module](module.md) ships a frozen BSD/macOS set (SIGUSR1 is
  30, SIGBUS is 10) whose values name different signals on Linux; always take the number
  from this table when it is passed to an API.
- **Windows**: numeric signals other than 0 are POSIX-only; on Windows kill terminates the
  [process](process.md) unconditionally instead of delivering the named signal.

Import:

```JavaScript
const signals = require('os').constants.signals;
```

Example 1 — stop a child [process](process.md) with SIGTERM:

```JavaScript
const child_process = require('child_process');
const signals = require('os').constants.signals;

// Start a fibjs child that lives until it is killed.
const child = child_process.spawn(process.execPath,
    ['-e', 'setTimeout(function () {}, 60000)'], {
        stdio: 'ignore'
    });

child.kill(signals.SIGTERM);
const code = child.join();

// A process killed by a signal reports the negated signal number.
console.log(code === -signals.SIGTERM, signals.SIGTERM); // true 15
```

Example 2 — the numbers and aliases of the common signals:

```JavaScript
const signals = require('os').constants.signals;

console.log(signals.SIGINT, signals.SIGKILL, signals.SIGSTOP); // 2 9 19
console.log(signals.SIGTERM, signals.SIGSEGV, signals.SIGPIPE); // 15 11 13
console.log(signals.SIGIO === signals.SIGPOLL); // true
console.log(signals.SIGSTKFLT, signals.SIGCHLD, signals.SIGSYS); // 16 17 31
```

Example 3 — name the signal behind an exit code:

```JavaScript
const signals = require('os').constants.signals;

// A child killed by SIGTERM exits with -15 (see ChildProcess#exitCode), so the
// wanted name is the one whose value is the negated code.
const code = -signals.SIGTERM;
const names = Object.keys(signals).filter((name) => signals[name] === -code);
console.log(names.join(', ')); // SIGTERM
```

## Constants
        
### SIGHUP
**Hangup signal, sent when the terminal is closed**

```JavaScript
const os_constants_signals.SIGHUP = 1;
```

--------------------------
### SIGINT
**Interrupt signal, usually triggered by CTRL+C**

```JavaScript
const os_constants_signals.SIGINT = 2;
```

--------------------------
### SIGQUIT
**Quit signal, usually triggered by CTRL+\**

```JavaScript
const os_constants_signals.SIGQUIT = 3;
```

--------------------------
### SIGILL
**Illegal instruction**

```JavaScript
const os_constants_signals.SIGILL = 4;
```

--------------------------
### SIGTRAP
**Trap signal, used for debugging**

```JavaScript
const os_constants_signals.SIGTRAP = 5;
```

--------------------------
### SIGABRT
**Abort signal, sent when abort() is called**

```JavaScript
const os_constants_signals.SIGABRT = 6;
```

--------------------------
### SIGIOT
**Same as SIGABRT**

```JavaScript
const os_constants_signals.SIGIOT = 6;
```

--------------------------
### SIGBUS
**Bus error**

```JavaScript
const os_constants_signals.SIGBUS = 7;
```

--------------------------
### SIGFPE
**Floating-point exception**

```JavaScript
const os_constants_signals.SIGFPE = 8;
```

--------------------------
### SIGKILL
**Kill signal, cannot be caught or ignored**

```JavaScript
const os_constants_signals.SIGKILL = 9;
```

--------------------------
### SIGUSR1
**User-defined signal 1**

```JavaScript
const os_constants_signals.SIGUSR1 = 10;
```

--------------------------
### SIGSEGV
**Segmentation fault, invalid memory access**

```JavaScript
const os_constants_signals.SIGSEGV = 11;
```

--------------------------
### SIGUSR2
**User-defined signal 2**

```JavaScript
const os_constants_signals.SIGUSR2 = 12;
```

--------------------------
### SIGPIPE
**Broken pipe, write to a pipe with no readers**

```JavaScript
const os_constants_signals.SIGPIPE = 13;
```

--------------------------
### SIGALRM
**[Timer](../../object/ifs/Timer.md) expired signal**

```JavaScript
const os_constants_signals.SIGALRM = 14;
```

--------------------------
### SIGTERM
**Termination signal, usually sent by the kill command**

```JavaScript
const os_constants_signals.SIGTERM = 15;
```

--------------------------
### SIGSTKFLT
**Coprocessor stack error**

```JavaScript
const os_constants_signals.SIGSTKFLT = 16;
```

--------------------------
### SIGCHLD
**Child [process](process.md) stopped or terminated**

```JavaScript
const os_constants_signals.SIGCHLD = 17;
```

--------------------------
### SIGCONT
**Continue a stopped [process](process.md)**

```JavaScript
const os_constants_signals.SIGCONT = 18;
```

--------------------------
### SIGSTOP
**Stop the [process](process.md), cannot be caught or ignored**

```JavaScript
const os_constants_signals.SIGSTOP = 19;
```

--------------------------
### SIGTSTP
**Terminal stop signal, usually triggered by CTRL+Z**

```JavaScript
const os_constants_signals.SIGTSTP = 20;
```

--------------------------
### SIGTTIN
**Background [process](process.md) reading from the terminal**

```JavaScript
const os_constants_signals.SIGTTIN = 21;
```

--------------------------
### SIGTTOU
**Background [process](process.md) writing to the terminal**

```JavaScript
const os_constants_signals.SIGTTOU = 22;
```

--------------------------
### SIGURG
**Urgent data available on the socket**

```JavaScript
const os_constants_signals.SIGURG = 23;
```

--------------------------
### SIGXCPU
**CPU time limit exceeded**

```JavaScript
const os_constants_signals.SIGXCPU = 24;
```

--------------------------
### SIGXFSZ
**[File](../../object/ifs/File.md) size limit exceeded**

```JavaScript
const os_constants_signals.SIGXFSZ = 25;
```

--------------------------
### SIGVTALRM
**Virtual timer expired**

```JavaScript
const os_constants_signals.SIGVTALRM = 26;
```

--------------------------
### SIGPROF
**Profiling timer expired**

```JavaScript
const os_constants_signals.SIGPROF = 27;
```

--------------------------
### SIGWINCH
**Terminal window size changed**

```JavaScript
const os_constants_signals.SIGWINCH = 28;
```

--------------------------
### SIGIO
**Asynchronous I/O is ready**

```JavaScript
const os_constants_signals.SIGIO = 29;
```

--------------------------
### SIGPOLL
**Same as SIGIO**

```JavaScript
const os_constants_signals.SIGPOLL = 29;
```

--------------------------
### SIGPWR
**Power failure**

```JavaScript
const os_constants_signals.SIGPWR = 30;
```

--------------------------
### SIGSYS
**Invalid system call**

```JavaScript
const os_constants_signals.SIGSYS = 31;
```

