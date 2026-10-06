# Module os_constants_errno
The errno table of [os.constants](os.md#constants): the POSIX error codes of the running platform

The [object](../../object/ifs/object.md) is reached through `require('[os](os.md)').constants.errno` and is not requireable on its
own. The names follow the C library and libuv; the numbers are the values of the host (on
Linux x86-64 they match `<asm-generic/errno-base.h>` and `<asm-generic/errno.h>` exactly).
Convert a numeric error into its name with this table, and use it to document the errors an
operation can raise; the table itself is read-only.

Concepts:

- **Errors carry the name**: a failed call throws an Error whose `code` is the symbolic name
  ('ENOENT'), so compare `e.code` rather than a number. On POSIX `e.errno` is the negated
  libuv code (-2 for ENOENT) while this table holds the positive system value (2): compare
  `-e.errno` with the table, or rely on `e.code`.
- **Aliases**: EAGAIN and EWOULDBLOCK share one value, and so do ENOTSUP and EOPNOTSUPP
  (11 and 95 on Linux); POSIX allows the unsupported-operation pair to differ, so [test](test.md) both
  names when the code is not known.
- **Platform**: the numbers are platform-specific; on Windows libuv uses its own mapping and
  adds the WSA* codes. Never hardcode a number in portable code - look it up here at
  runtime or compare names.

Import:

```JavaScript
const errno = require('os').constants.errno;
```

Example 1 — turn a caught error into its table entry:

```JavaScript
const errno = require('os').constants.errno;
const fs = require('fs');

try {
    fs.unlink('/no-such-file-fibjs.txt');
} catch (e) {
    console.log(e.code); // ENOENT
    console.log(-e.errno, errno.ENOENT); // 2 2
    console.log(-e.errno === errno.ENOENT); // true
}
```

Example 2 — common failures and their codes:

```JavaScript
const errno = require('os').constants.errno;
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-errno-'));
fs.mkdir(path.join(dir, 'sub'));
fs.writeFile(path.join(dir, 'sub', 'file.txt'), 'x');

function codeOf(fn) {
    try {
        fn();
    } catch (e) {
        return e.code;
    }
    return 'no error';
}
console.log(codeOf(() => fs.mkdir(path.join(dir, 'sub')))); // EEXIST
console.log(codeOf(() => fs.rmdir(path.join(dir, 'sub')))); // ENOTEMPTY
console.log(codeOf(() => fs.unlink(path.join(dir, 'missing')))); // ENOENT
console.log(errno.EEXIST, errno.ENOTEMPTY); // 17 39

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 3 — representative values and aliases:

```JavaScript
const errno = require('os').constants.errno;

// Permission, existence and timeout codes as reported by the host.
console.log(errno.EACCES, errno.ENOENT, errno.ETIMEDOUT); // 13 2 110

// Each alias pair shares a single value.
console.log(errno.EAGAIN === errno.EWOULDBLOCK); // true
console.log(errno.ENOTSUP === errno.EOPNOTSUPP); // true
console.log(Object.keys(errno).length); // 79 on Linux
```

## Constants
        
### E2BIG
**Argument list too long**

```JavaScript
const os_constants_errno.E2BIG = 7;
```

--------------------------
### EACCES
**Permission denied**

```JavaScript
const os_constants_errno.EACCES = 13;
```

--------------------------
### EADDRINUSE
**Address already in use**

```JavaScript
const os_constants_errno.EADDRINUSE = 98;
```

--------------------------
### EADDRNOTAVAIL
**Address not available**

```JavaScript
const os_constants_errno.EADDRNOTAVAIL = 99;
```

--------------------------
### EAFNOSUPPORT
**Address family not supported**

```JavaScript
const os_constants_errno.EAFNOSUPPORT = 97;
```

--------------------------
### EAGAIN
**Resource temporarily unavailable, try again**

```JavaScript
const os_constants_errno.EAGAIN = 11;
```

--------------------------
### EALREADY
**Operation already in progress**

```JavaScript
const os_constants_errno.EALREADY = 114;
```

--------------------------
### EBADF
**Bad file descriptor**

```JavaScript
const os_constants_errno.EBADF = 9;
```

--------------------------
### EBADMSG
**Bad message**

```JavaScript
const os_constants_errno.EBADMSG = 74;
```

--------------------------
### EBUSY
**Device or resource busy**

```JavaScript
const os_constants_errno.EBUSY = 16;
```

--------------------------
### ECANCELED
**Operation canceled**

```JavaScript
const os_constants_errno.ECANCELED = 125;
```

--------------------------
### ECHILD
**No child processes**

```JavaScript
const os_constants_errno.ECHILD = 10;
```

--------------------------
### ECONNABORTED
**Connection aborted**

```JavaScript
const os_constants_errno.ECONNABORTED = 103;
```

--------------------------
### ECONNREFUSED
**Connection refused**

```JavaScript
const os_constants_errno.ECONNREFUSED = 111;
```

--------------------------
### ECONNRESET
**Connection reset**

```JavaScript
const os_constants_errno.ECONNRESET = 104;
```

--------------------------
### EDEADLK
**Resource deadlock avoided**

```JavaScript
const os_constants_errno.EDEADLK = 35;
```

--------------------------
### EDESTADDRREQ
**Destination address required**

```JavaScript
const os_constants_errno.EDESTADDRREQ = 89;
```

--------------------------
### EDOM
**Mathematics argument out of domain of function**

```JavaScript
const os_constants_errno.EDOM = 33;
```

--------------------------
### EDQUOT
**Disk quota exceeded**

```JavaScript
const os_constants_errno.EDQUOT = 122;
```

--------------------------
### EEXIST
**[File](../../object/ifs/File.md) exists**

```JavaScript
const os_constants_errno.EEXIST = 17;
```

--------------------------
### EFAULT
**Bad address**

```JavaScript
const os_constants_errno.EFAULT = 14;
```

--------------------------
### EFBIG
**[File](../../object/ifs/File.md) too large**

```JavaScript
const os_constants_errno.EFBIG = 27;
```

--------------------------
### EHOSTUNREACH
**Host is unreachable**

```JavaScript
const os_constants_errno.EHOSTUNREACH = 113;
```

--------------------------
### EIDRM
**Identifier removed**

```JavaScript
const os_constants_errno.EIDRM = 43;
```

--------------------------
### EILSEQ
**Illegal byte sequence**

```JavaScript
const os_constants_errno.EILSEQ = 84;
```

--------------------------
### EINPROGRESS
**Operation in progress**

```JavaScript
const os_constants_errno.EINPROGRESS = 115;
```

--------------------------
### EINTR
**Interrupted system call**

```JavaScript
const os_constants_errno.EINTR = 4;
```

--------------------------
### EINVAL
**Invalid argument**

```JavaScript
const os_constants_errno.EINVAL = 22;
```

--------------------------
### EIO
**I/O error**

```JavaScript
const os_constants_errno.EIO = 5;
```

--------------------------
### EISCONN
**[Socket](../../object/ifs/Socket.md) is connected**

```JavaScript
const os_constants_errno.EISCONN = 106;
```

--------------------------
### EISDIR
**Is a directory**

```JavaScript
const os_constants_errno.EISDIR = 21;
```

--------------------------
### ELOOP
**Too many levels of symbolic links**

```JavaScript
const os_constants_errno.ELOOP = 40;
```

--------------------------
### EMFILE
**Too many open files**

```JavaScript
const os_constants_errno.EMFILE = 24;
```

--------------------------
### EMLINK
**Too many links**

```JavaScript
const os_constants_errno.EMLINK = 31;
```

--------------------------
### EMSGSIZE
**[Message](../../object/ifs/Message.md) too long**

```JavaScript
const os_constants_errno.EMSGSIZE = 90;
```

--------------------------
### EMULTIHOP
**Multihop attempted**

```JavaScript
const os_constants_errno.EMULTIHOP = 72;
```

--------------------------
### ENAMETOOLONG
**[File](../../object/ifs/File.md) name too long**

```JavaScript
const os_constants_errno.ENAMETOOLONG = 36;
```

--------------------------
### ENETDOWN
**Network is down**

```JavaScript
const os_constants_errno.ENETDOWN = 100;
```

--------------------------
### ENETRESET
**Network dropped connection on reset**

```JavaScript
const os_constants_errno.ENETRESET = 102;
```

--------------------------
### ENETUNREACH
**Network is unreachable**

```JavaScript
const os_constants_errno.ENETUNREACH = 101;
```

--------------------------
### ENFILE
**Too many open files in system**

```JavaScript
const os_constants_errno.ENFILE = 23;
```

--------------------------
### ENOBUFS
**No buffer space available**

```JavaScript
const os_constants_errno.ENOBUFS = 105;
```

--------------------------
### ENODATA
**No data available**

```JavaScript
const os_constants_errno.ENODATA = 61;
```

--------------------------
### ENODEV
**No such device**

```JavaScript
const os_constants_errno.ENODEV = 19;
```

--------------------------
### ENOENT
**No such file or directory**

```JavaScript
const os_constants_errno.ENOENT = 2;
```

--------------------------
### ENOEXEC
**Exec format error**

```JavaScript
const os_constants_errno.ENOEXEC = 8;
```

--------------------------
### ENOLCK
**No locks available**

```JavaScript
const os_constants_errno.ENOLCK = 37;
```

--------------------------
### ENOLINK
**Link has been severed**

```JavaScript
const os_constants_errno.ENOLINK = 67;
```

--------------------------
### ENOMEM
**Out of memory**

```JavaScript
const os_constants_errno.ENOMEM = 12;
```

--------------------------
### ENOMSG
**No message of desired type**

```JavaScript
const os_constants_errno.ENOMSG = 42;
```

--------------------------
### ENOPROTOOPT
**Protocol not available**

```JavaScript
const os_constants_errno.ENOPROTOOPT = 92;
```

--------------------------
### ENOSPC
**No space left on device**

```JavaScript
const os_constants_errno.ENOSPC = 28;
```

--------------------------
### ENOSR
**No STREAM resources**

```JavaScript
const os_constants_errno.ENOSR = 63;
```

--------------------------
### ENOSTR
**Not a STREAM**

```JavaScript
const os_constants_errno.ENOSTR = 60;
```

--------------------------
### ENOSYS
**Function not implemented**

```JavaScript
const os_constants_errno.ENOSYS = 38;
```

--------------------------
### ENOTCONN
**[Socket](../../object/ifs/Socket.md) is not connected**

```JavaScript
const os_constants_errno.ENOTCONN = 107;
```

--------------------------
### ENOTDIR
**Not a directory**

```JavaScript
const os_constants_errno.ENOTDIR = 20;
```

--------------------------
### ENOTEMPTY
**Directory not empty**

```JavaScript
const os_constants_errno.ENOTEMPTY = 39;
```

--------------------------
### ENOTSOCK
**Not a socket**

```JavaScript
const os_constants_errno.ENOTSOCK = 88;
```

--------------------------
### ENOTSUP
**Operation not supported**

```JavaScript
const os_constants_errno.ENOTSUP = 95;
```

--------------------------
### ENOTTY
**Inappropriate ioctl for device**

```JavaScript
const os_constants_errno.ENOTTY = 25;
```

--------------------------
### ENXIO
**No such device or address**

```JavaScript
const os_constants_errno.ENXIO = 6;
```

--------------------------
### EOPNOTSUPP
**Operation not supported on socket**

```JavaScript
const os_constants_errno.EOPNOTSUPP = 95;
```

--------------------------
### EOVERFLOW
**Value too large to be stored in data type**

```JavaScript
const os_constants_errno.EOVERFLOW = 75;
```

--------------------------
### EPERM
**Operation not permitted**

```JavaScript
const os_constants_errno.EPERM = 1;
```

--------------------------
### EPIPE
**Broken pipe**

```JavaScript
const os_constants_errno.EPIPE = 32;
```

--------------------------
### EPROTO
**Protocol error**

```JavaScript
const os_constants_errno.EPROTO = 71;
```

--------------------------
### EPROTONOSUPPORT
**Protocol not supported**

```JavaScript
const os_constants_errno.EPROTONOSUPPORT = 93;
```

--------------------------
### EPROTOTYPE
**Protocol wrong type for socket**

```JavaScript
const os_constants_errno.EPROTOTYPE = 91;
```

--------------------------
### ERANGE
**Numerical result out of range**

```JavaScript
const os_constants_errno.ERANGE = 34;
```

--------------------------
### EROFS
**Read-only file system**

```JavaScript
const os_constants_errno.EROFS = 30;
```

--------------------------
### ESPIPE
**Invalid seek**

```JavaScript
const os_constants_errno.ESPIPE = 29;
```

--------------------------
### ESRCH
**No such [process](process.md)**

```JavaScript
const os_constants_errno.ESRCH = 3;
```

--------------------------
### ESTALE
**Stale file handle**

```JavaScript
const os_constants_errno.ESTALE = 116;
```

--------------------------
### ETIME
**[Timer](../../object/ifs/Timer.md) expired**

```JavaScript
const os_constants_errno.ETIME = 62;
```

--------------------------
### ETIMEDOUT
**Connection timed out**

```JavaScript
const os_constants_errno.ETIMEDOUT = 110;
```

--------------------------
### ETXTBSY
**Text file busy**

```JavaScript
const os_constants_errno.ETXTBSY = 26;
```

--------------------------
### EWOULDBLOCK
**Operation would block**

```JavaScript
const os_constants_errno.EWOULDBLOCK = 11;
```

--------------------------
### EXDEV
**Cross-device link**

```JavaScript
const os_constants_errno.EXDEV = 18;
```

