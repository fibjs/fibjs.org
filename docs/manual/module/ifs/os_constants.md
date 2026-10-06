# Module os_constants
The constant [object](../../object/ifs/object.md) of the [os](os.md) [module](module.md): the errno, signal, priority and dlopen tables

plus libuv's UV_UDP_REUSEADDR

Reached through `require('[os](os.md)').[constants](constants.md)`, it groups the platform constant tables used by
the low-level APIs. `errno`, `signals`, `priority` and `dlopen` are the sub-objects
documented by [os_constants_errno](os_constants_errno.md), [os_constants_signals](os_constants_signals.md), [os_constants_priority](os_constants_priority.md) and
[os_constants_dlopen](os_constants_dlopen.md); UV_UDP_REUSEADDR (4) is libuv's socket address-reuse flag.

Concepts:

- **One table per API family**: use `errno` with error codes from [fs](fs.md)/[net](net.md)/[child_process](child_process.md),
  `signals` with [process.kill](process.md#kill), `dlopen` with [process.dlopen](process.md#dlopen) and `priority` with a
  scheduling API; the values describe the running platform and may differ between
  operating systems.
- **The [object](../../object/ifs/object.md) is read-only**: the tables are populated when the [module](module.md) is loaded and are
  shared by every reference to `os.constants`.
- **Legacy alternative**: the [constants](constants.md) [module](module.md) is the historical aggregate with frozen
  BSD/macOS values under the same names; prefer this [object](../../object/ifs/object.md) in new code.

Import:

```JavaScript
const constants = require('os').constants;
```

Example 1 — the tables and a representative entry of each:

```JavaScript
const C = require('os').constants;

console.log(C.UV_UDP_REUSEADDR, C.errno.EACCES, C.signals.SIGTERM); // 4 13 15
console.log(C.priority.PRIORITY_NORMAL, C.dlopen.RTLD_LAZY); // 0 1
console.log(Object.keys(C).length); // 5
```

Example 2 — decode a caught error with the errno table:

```JavaScript
const os = require('os');
const fs = require('fs');
const errno = os.constants.errno;

try {
    fs.open('/no-such-directory-fibjs/file.txt', 'r');
} catch (e) {
    // e.errno is the negated libuv code on POSIX; the table holds the positive value.
    const names = Object.keys(errno).filter((name) => errno[name] === -e.errno);
    console.log(e.code, names.join(','), names.indexOf(e.code) >= 0); // ENOENT ENOENT true
}
```

## Objects
        
### errno
**The POSIX error codes of the running platform**

```JavaScript
os_constants_errno os_constants.errno;
```

The table maps names such as `ENOENT` to the numeric code of the host (2 on Linux) and
is the same [object](../../object/ifs/object.md) documented by [os_constants_errno](os_constants_errno.md). A caught error carries the name in
`e.code` and the negated libuv code in `e.errno`, so compare `-e.errno` with the table
or [test](test.md) `e.code` directly.

--------------------------
### signals
**The signal numbers of the running platform**

```JavaScript
os_constants_signals os_constants.signals;
```

The table is the same [object](../../object/ifs/object.md) documented by [os_constants_signals](os_constants_signals.md) and provides the numbers
accepted by [process.kill](process.md#kill) and [ChildProcess](../../object/ifs/ChildProcess.md)#kill; a [process](process.md) that dies from a signal
reports the negated number as its exit code (SIGTERM gives -15). On Windows the names
are present but only a few signals can be delivered.

--------------------------
### priority
**The [process](process.md) scheduling levels of libuv**

```JavaScript
os_constants_priority os_constants.priority;
```

The table is the same [object](../../object/ifs/object.md) documented by [os_constants_priority](os_constants_priority.md): six levels ordered
from PRIORITY_LOW (19) to PRIORITY_HIGHEST (-20), where a lower number means a higher
priority on POSIX and the values map to the Windows priority classes. fibjs has no
os.getPriority/os.setPriority, so the table is currently informational.

--------------------------
### dlopen
**The dynamic loader flags accepted by [process.dlopen](process.md#dlopen)**

```JavaScript
os_constants_dlopen os_constants.dlopen;
```

The table is the same [object](../../object/ifs/object.md) documented by [os_constants_dlopen](os_constants_dlopen.md) and holds the flags of
the host loader (on glibc RTLD_LAZY 1, RTLD_NOW 2, RTLD_GLOBAL 256, RTLD_LOCAL 0,
RTLD_DEEPBIND 8); [process.dlopen](process.md#dlopen) passes the number straight to dlopen. The legacy
[constants](constants.md) [module](module.md) uses the same names for the old libuv/macOS numbers.

## Constants
        
### UV_UDP_REUSEADDR
**UDP address reuse flag**

```JavaScript
const os_constants.UV_UDP_REUSEADDR = 4;
```

