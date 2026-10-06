# Module constants
The legacy aggregate constants [module](module.md): dynamic library flags, error codes, [process](process.md)

priorities, signal numbers and the file system flags in one [object](../../object/ifs/object.md)

The [module](module.md) predates the split of the constant surface into [os_constants](os_constants.md) and [fs_constants](fs_constants.md) and
mirrors the historical Node.js `constants` [module](module.md). Its numbers are a frozen BSD/macOS set
shared by every platform, so they are not the native values of the host: use
`[os.constants](os.md#constants).errno`, `[os.constants](os.md#constants).signals`, `[os.constants](os.md#constants).priority` and
`[os.constants](os.md#constants).dlopen` for the numbers the system APIs actually use, and [fs_constants](fs_constants.md) (or the
[fs](fs.md) [module](module.md)) for file flags. The file open flags, seek modes, type bits, permission bits and
copy flags carry the same portable values as [fs_constants](fs_constants.md) and are accepted by [fs.open](fs.md#open).

Concepts:

- **Frozen BSD numbering**: the error and signal values follow the BSD/macOS convention
  (EAGAIN is 35, SIGUSR1 is 30, SIGBUS is 10), not the host's `<errno.h>`/`<signal.h>` (on
  Linux EAGAIN is 11, SIGUSR1 is 10, SIGBUS is 7). A value that coincides on two systems
  (EACCES is 13) does not make the [module](module.md) portable: compare against the [os.constants](os.md#constants) table
  that belongs to the API that produced or consumes the number.
- **Portable file flags**: O_RDONLY/O_WRONLY/O_RDWR are 0/1/2, O_APPEND 8, O_CREAT 512,
  O_TRUNC 1024, O_EXCL 2048, O_NONBLOCK 4, O_SYNC 128, O_DSYNC 4194304, O_NOCTTY 131072,
  O_DIRECTORY 1048576, O_NOFOLLOW 256 and O_SYMLINK 2097152; [fs.open](fs.md#open) translates them to the
  flags of the host, so pass the constant rather than a native system literal.
- **Library loading flags**: RTLD_LAZY/RTLD_NOW are 1/2, but RTLD_GLOBAL is 8 and
  RTLD_LOCAL is 4 instead of the POSIX dlfcn values 256/0; do not pass them to
  [process.dlopen](process.md#dlopen) (8 is RTLD_DEEPBIND on glibc) - use `[os.constants](os.md#constants).dlopen` there.
- **Shared file objects**: the S_IF* type bits, the S_IRWX* permission bits,
  F_OK/R_OK/W_OK/X_OK for [fs.access](fs.md#access), the UV_DIRENT_* directory entry ids and the
  COPYFILE_* flags all match [fs_constants](fs_constants.md) and the [fs](fs.md) [module](module.md).

Import:

```JavaScript
const constants = require('constants');
```

Example 1 — open a file with the portable flags:

```JavaScript
const constants = require('constants');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-constants-'));
const file = path.join(dir, 'note.txt');

// O_WRONLY | O_CREAT | O_TRUNC is built from the BSD values 1, 512 and 1024.
const handle = fs.open(file, constants.O_WRONLY | constants.O_CREAT |
    constants.O_TRUNC, 0o644);
handle.write('hello constants');
handle.close();

console.log(fs.readFile(file, 'utf8')); // hello constants
console.log(constants.O_CREAT === fs.constants.O_CREAT); // true

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — classify paths by the S_IF* type bits:

```JavaScript
const constants = require('constants');
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-constants-'));
fs.writeFile(path.join(dir, 'data.bin'), 'x');
fs.mkdir(path.join(dir, 'sub'));
fs.symlink(path.join(dir, 'data.bin'), path.join(dir, 'link'));

function kind(file) {
    const mode = fs.lstat(file).mode;
    if ((mode & constants.S_IFMT) === constants.S_IFLNK) return 'link';
    if ((mode & constants.S_IFMT) === constants.S_IFDIR) return 'dir';
    return 'file';
}
console.log(kind(path.join(dir, 'data.bin')), kind(path.join(dir, 'sub')),
    kind(path.join(dir, 'link'))); // file dir link

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 3 — the frozen numbers next to the platform ones:

```JavaScript
const constants = require('constants');
const os = require('os');

// The module keeps the BSD/macOS numbers on every platform.
console.log(constants.EAGAIN, constants.EWOULDBLOCK); // 35 35
console.log(constants.SIGUSR1, constants.SIGTERM); // 30 15

// os.constants reports the numbers of the running platform.
console.log(os.constants.errno.EAGAIN, os.constants.signals.SIGUSR1); // 11 10 on Linux
console.log(constants.EACCES === os.constants.errno.EACCES); // true, 13 on both

// Use os.constants for values that cross an API boundary.
```

The [module](module.md) is kept for compatibility only; prefer [os.constants](os.md#constants) and [fs.constants](fs.md#constants) in new code.

## Constants
        
### RTLD_LAZY
**Lazy loading of a dynamic library**

```JavaScript
const constants.RTLD_LAZY = 1;
```

--------------------------
### RTLD_NOW
**Immediate loading of a dynamic library**

```JavaScript
const constants.RTLD_NOW = 2;
```

--------------------------
### RTLD_GLOBAL
**Loading a dynamic library in the [global](global.md) scope**

```JavaScript
const constants.RTLD_GLOBAL = 8;
```

--------------------------
### RTLD_LOCAL
**Loading a dynamic library in the local scope**

```JavaScript
const constants.RTLD_LOCAL = 4;
```

--------------------------
### E2BIG
**Argument list too long error**

```JavaScript
const constants.E2BIG = 7;
```

--------------------------
### EACCES
**Permission denied error**

```JavaScript
const constants.EACCES = 13;
```

--------------------------
### EADDRINUSE
**Address already in use error**

```JavaScript
const constants.EADDRINUSE = 48;
```

--------------------------
### EADDRNOTAVAIL
**Address not available error**

```JavaScript
const constants.EADDRNOTAVAIL = 49;
```

--------------------------
### EAFNOSUPPORT
**Address family not supported error**

```JavaScript
const constants.EAFNOSUPPORT = 47;
```

--------------------------
### EAGAIN
**Resource temporarily unavailable error**

```JavaScript
const constants.EAGAIN = 35;
```

--------------------------
### EALREADY
**Connection already in progress error**

```JavaScript
const constants.EALREADY = 37;
```

--------------------------
### EBADF
**Bad file descriptor error**

```JavaScript
const constants.EBADF = 9;
```

--------------------------
### EBADMSG
**Bad message error**

```JavaScript
const constants.EBADMSG = 94;
```

--------------------------
### EBUSY
**Device or resource busy error**

```JavaScript
const constants.EBUSY = 16;
```

--------------------------
### ECANCELED
**Operation canceled error**

```JavaScript
const constants.ECANCELED = 89;
```

--------------------------
### ECHILD
**No child processes error**

```JavaScript
const constants.ECHILD = 10;
```

--------------------------
### ECONNABORTED
**Connection aborted error**

```JavaScript
const constants.ECONNABORTED = 53;
```

--------------------------
### ECONNREFUSED
**Connection refused error**

```JavaScript
const constants.ECONNREFUSED = 61;
```

--------------------------
### ECONNRESET
**Connection reset error**

```JavaScript
const constants.ECONNRESET = 54;
```

--------------------------
### EDEADLK
**Resource deadlock avoided error**

```JavaScript
const constants.EDEADLK = 11;
```

--------------------------
### EDESTADDRREQ
**Destination address required error**

```JavaScript
const constants.EDESTADDRREQ = 39;
```

--------------------------
### EDOM
**Numerical argument out of domain error**

```JavaScript
const constants.EDOM = 33;
```

--------------------------
### EDQUOT
**Disk quota exceeded error**

```JavaScript
const constants.EDQUOT = 69;
```

--------------------------
### EEXIST
**[File](../../object/ifs/File.md) exists error**

```JavaScript
const constants.EEXIST = 17;
```

--------------------------
### EFAULT
**Bad address error**

```JavaScript
const constants.EFAULT = 14;
```

--------------------------
### EFBIG
**[File](../../object/ifs/File.md) too large error**

```JavaScript
const constants.EFBIG = 27;
```

--------------------------
### EHOSTUNREACH
**Host unreachable error**

```JavaScript
const constants.EHOSTUNREACH = 65;
```

--------------------------
### EIDRM
**Identifier removed error**

```JavaScript
const constants.EIDRM = 90;
```

--------------------------
### EILSEQ
**Illegal byte sequence error**

```JavaScript
const constants.EILSEQ = 92;
```

--------------------------
### EINPROGRESS
**Operation now in progress error**

```JavaScript
const constants.EINPROGRESS = 36;
```

--------------------------
### EINTR
**Interrupted system call error**

```JavaScript
const constants.EINTR = 4;
```

--------------------------
### EINVAL
**Invalid argument error**

```JavaScript
const constants.EINVAL = 22;
```

--------------------------
### EIO
**Input/output error**

```JavaScript
const constants.EIO = 5;
```

--------------------------
### EISCONN
**[Socket](../../object/ifs/Socket.md) is connected error**

```JavaScript
const constants.EISCONN = 56;
```

--------------------------
### EISDIR
**Is a directory error**

```JavaScript
const constants.EISDIR = 21;
```

--------------------------
### ELOOP
**Too many levels of symbolic links error**

```JavaScript
const constants.ELOOP = 62;
```

--------------------------
### EMFILE
**Too many open files error**

```JavaScript
const constants.EMFILE = 24;
```

--------------------------
### EMLINK
**Too many links error**

```JavaScript
const constants.EMLINK = 31;
```

--------------------------
### EMSGSIZE
**[Message](../../object/ifs/Message.md) too long error**

```JavaScript
const constants.EMSGSIZE = 40;
```

--------------------------
### EMULTIHOP
**Multihop attempted error**

```JavaScript
const constants.EMULTIHOP = 95;
```

--------------------------
### ENAMETOOLONG
**[File](../../object/ifs/File.md) name too long error**

```JavaScript
const constants.ENAMETOOLONG = 63;
```

--------------------------
### ENETDOWN
**Network is down error**

```JavaScript
const constants.ENETDOWN = 50;
```

--------------------------
### ENETRESET
**Network connection reset error**

```JavaScript
const constants.ENETRESET = 52;
```

--------------------------
### ENETUNREACH
**Network is unreachable error**

```JavaScript
const constants.ENETUNREACH = 51;
```

--------------------------
### ENFILE
**Too many open files in system error**

```JavaScript
const constants.ENFILE = 23;
```

--------------------------
### ENOBUFS
**No buffer space available error**

```JavaScript
const constants.ENOBUFS = 55;
```

--------------------------
### ENODATA
**No data available error**

```JavaScript
const constants.ENODATA = 96;
```

--------------------------
### ENODEV
**No such device error**

```JavaScript
const constants.ENODEV = 19;
```

--------------------------
### ENOENT
**No such file or directory error**

```JavaScript
const constants.ENOENT = 2;
```

--------------------------
### ENOEXEC
**Exec format error**

```JavaScript
const constants.ENOEXEC = 8;
```

--------------------------
### ENOLCK
**No locks available error**

```JavaScript
const constants.ENOLCK = 77;
```

--------------------------
### ENOLINK
**Link has been severed error**

```JavaScript
const constants.ENOLINK = 97;
```

--------------------------
### ENOMEM
**Out of memory error**

```JavaScript
const constants.ENOMEM = 12;
```

--------------------------
### ENOMSG
**No message of desired type error**

```JavaScript
const constants.ENOMSG = 91;
```

--------------------------
### ENOPROTOOPT
**Protocol not available error**

```JavaScript
const constants.ENOPROTOOPT = 42;
```

--------------------------
### ENOSPC
**No space left on device error**

```JavaScript
const constants.ENOSPC = 28;
```

--------------------------
### ENOSR
**Out of streams resources error**

```JavaScript
const constants.ENOSR = 98;
```

--------------------------
### ENOSTR
**Device not a stream error**

```JavaScript
const constants.ENOSTR = 99;
```

--------------------------
### ENOSYS
**Function not implemented error**

```JavaScript
const constants.ENOSYS = 78;
```

--------------------------
### ENOTCONN
**[Socket](../../object/ifs/Socket.md) is not connected error**

```JavaScript
const constants.ENOTCONN = 57;
```

--------------------------
### ENOTDIR
**Not a directory error**

```JavaScript
const constants.ENOTDIR = 20;
```

--------------------------
### ENOTEMPTY
**Directory not empty error**

```JavaScript
const constants.ENOTEMPTY = 66;
```

--------------------------
### ENOTSOCK
**[Socket](../../object/ifs/Socket.md) operation on non-socket error**

```JavaScript
const constants.ENOTSOCK = 38;
```

--------------------------
### ENOTSUP
**Operation not supported error**

```JavaScript
const constants.ENOTSUP = 45;
```

--------------------------
### ENOTTY
**Inappropriate I/O control operation error**

```JavaScript
const constants.ENOTTY = 25;
```

--------------------------
### ENXIO
**No such device or address error**

```JavaScript
const constants.ENXIO = 6;
```

--------------------------
### EOPNOTSUPP
**Operation not supported on socket error**

```JavaScript
const constants.EOPNOTSUPP = 102;
```

--------------------------
### EOVERFLOW
**Value too large for the data type error**

```JavaScript
const constants.EOVERFLOW = 84;
```

--------------------------
### EPERM
**Operation not permitted error**

```JavaScript
const constants.EPERM = 1;
```

--------------------------
### EPIPE
**Broken pipe error**

```JavaScript
const constants.EPIPE = 32;
```

--------------------------
### EPROTO
**Protocol error**

```JavaScript
const constants.EPROTO = 100;
```

--------------------------
### EPROTONOSUPPORT
**Protocol not supported error**

```JavaScript
const constants.EPROTONOSUPPORT = 43;
```

--------------------------
### EPROTOTYPE
**Protocol wrong type error**

```JavaScript
const constants.EPROTOTYPE = 41;
```

--------------------------
### ERANGE
**Result too large error**

```JavaScript
const constants.ERANGE = 34;
```

--------------------------
### EROFS
**Read-only file system error**

```JavaScript
const constants.EROFS = 30;
```

--------------------------
### ESPIPE
**Invalid seek error**

```JavaScript
const constants.ESPIPE = 29;
```

--------------------------
### ESRCH
**No such [process](process.md) error**

```JavaScript
const constants.ESRCH = 3;
```

--------------------------
### ESTALE
**Stale file handle error**

```JavaScript
const constants.ESTALE = 70;
```

--------------------------
### ETIME
**[Timer](../../object/ifs/Timer.md) expired error**

```JavaScript
const constants.ETIME = 101;
```

--------------------------
### ETIMEDOUT
**Connection timed out error**

```JavaScript
const constants.ETIMEDOUT = 60;
```

--------------------------
### ETXTBSY
**Text file busy error**

```JavaScript
const constants.ETXTBSY = 26;
```

--------------------------
### EWOULDBLOCK
**Operation would block error**

```JavaScript
const constants.EWOULDBLOCK = 35;
```

--------------------------
### EXDEV
**Cross-device link error**

```JavaScript
const constants.EXDEV = 18;
```

--------------------------
### PRIORITY_LOW
**Low priority**

```JavaScript
const constants.PRIORITY_LOW = 19;
```

--------------------------
### PRIORITY_BELOW_NORMAL
**Below normal priority**

```JavaScript
const constants.PRIORITY_BELOW_NORMAL = 10;
```

--------------------------
### PRIORITY_NORMAL
**Normal priority**

```JavaScript
const constants.PRIORITY_NORMAL = 0;
```

--------------------------
### PRIORITY_ABOVE_NORMAL
**Above normal priority**

```JavaScript
const constants.PRIORITY_ABOVE_NORMAL = -7;
```

--------------------------
### PRIORITY_HIGH
**High priority**

```JavaScript
const constants.PRIORITY_HIGH = -14;
```

--------------------------
### PRIORITY_HIGHEST
**Highest priority**

```JavaScript
const constants.PRIORITY_HIGHEST = -20;
```

--------------------------
### SIGHUP
**Hangup signal**

```JavaScript
const constants.SIGHUP = 1;
```

--------------------------
### SIGINT
**Interrupt signal**

```JavaScript
const constants.SIGINT = 2;
```

--------------------------
### SIGQUIT
**Quit signal**

```JavaScript
const constants.SIGQUIT = 3;
```

--------------------------
### SIGILL
**Illegal instruction signal**

```JavaScript
const constants.SIGILL = 4;
```

--------------------------
### SIGTRAP
**Trace trap signal**

```JavaScript
const constants.SIGTRAP = 5;
```

--------------------------
### SIGABRT
**Abort signal**

```JavaScript
const constants.SIGABRT = 6;
```

--------------------------
### SIGIOT
**IOT trap signal**

```JavaScript
const constants.SIGIOT = 6;
```

--------------------------
### SIGBUS
**Bus error signal**

```JavaScript
const constants.SIGBUS = 10;
```

--------------------------
### SIGFPE
**Floating point exception signal**

```JavaScript
const constants.SIGFPE = 8;
```

--------------------------
### SIGKILL
**Kill signal**

```JavaScript
const constants.SIGKILL = 9;
```

--------------------------
### SIGUSR1
**User defined signal 1**

```JavaScript
const constants.SIGUSR1 = 30;
```

--------------------------
### SIGSEGV
**Segmentation fault signal**

```JavaScript
const constants.SIGSEGV = 11;
```

--------------------------
### SIGUSR2
**User defined signal 2**

```JavaScript
const constants.SIGUSR2 = 31;
```

--------------------------
### SIGPIPE
**Broken pipe signal**

```JavaScript
const constants.SIGPIPE = 13;
```

--------------------------
### SIGALRM
**Alarm clock signal**

```JavaScript
const constants.SIGALRM = 14;
```

--------------------------
### SIGTERM
**Termination signal**

```JavaScript
const constants.SIGTERM = 15;
```

--------------------------
### SIGCHLD
**Child [process](process.md) terminated or stopped signal**

```JavaScript
const constants.SIGCHLD = 20;
```

--------------------------
### SIGCONT
**Continue execution signal**

```JavaScript
const constants.SIGCONT = 19;
```

--------------------------
### SIGSTOP
**Stop execution signal**

```JavaScript
const constants.SIGSTOP = 17;
```

--------------------------
### SIGTSTP
**Terminal stop signal**

```JavaScript
const constants.SIGTSTP = 18;
```

--------------------------
### SIGTTIN
**Background [process](process.md) attempts to read signal**

```JavaScript
const constants.SIGTTIN = 21;
```

--------------------------
### SIGTTOU
**Background [process](process.md) attempts to write signal**

```JavaScript
const constants.SIGTTOU = 22;
```

--------------------------
### SIGURG
**[Socket](../../object/ifs/Socket.md) urgent condition signal**

```JavaScript
const constants.SIGURG = 16;
```

--------------------------
### SIGXCPU
**CPU time limit exceeded signal**

```JavaScript
const constants.SIGXCPU = 24;
```

--------------------------
### SIGXFSZ
**[File](../../object/ifs/File.md) size limit exceeded signal**

```JavaScript
const constants.SIGXFSZ = 25;
```

--------------------------
### SIGVTALRM
**Virtual timer expired signal**

```JavaScript
const constants.SIGVTALRM = 26;
```

--------------------------
### SIGPROF
**Profiling timer expired signal**

```JavaScript
const constants.SIGPROF = 27;
```

--------------------------
### SIGWINCH
**Window size change signal**

```JavaScript
const constants.SIGWINCH = 28;
```

--------------------------
### SIGIO
**I/O now possible signal**

```JavaScript
const constants.SIGIO = 23;
```

--------------------------
### SIGINFO
**Information request signal**

```JavaScript
const constants.SIGINFO = 29;
```

--------------------------
### SIGSYS
**Bad system call signal**

```JavaScript
const constants.SIGSYS = 12;
```

--------------------------
### UV_FS_SYMLINK_DIR
**Symbolic link to a directory**

```JavaScript
const constants.UV_FS_SYMLINK_DIR = 1;
```

--------------------------
### UV_FS_SYMLINK_JUNCTION
**Symbolic link to a junction point**

```JavaScript
const constants.UV_FS_SYMLINK_JUNCTION = 2;
```

--------------------------
### O_RDONLY
**Open for reading only**

```JavaScript
const constants.O_RDONLY = 0;
```

--------------------------
### O_WRONLY
**Open for writing only**

```JavaScript
const constants.O_WRONLY = 1;
```

--------------------------
### O_RDWR
**Open for reading and writing**

```JavaScript
const constants.O_RDWR = 2;
```

--------------------------
### UV_DIRENT_UNKNOWN
**Unknown directory entry type**

```JavaScript
const constants.UV_DIRENT_UNKNOWN = 0;
```

--------------------------
### UV_DIRENT_FILE
**[File](../../object/ifs/File.md) directory entry type**

```JavaScript
const constants.UV_DIRENT_FILE = 1;
```

--------------------------
### UV_DIRENT_DIR
**Directory directory entry type**

```JavaScript
const constants.UV_DIRENT_DIR = 2;
```

--------------------------
### UV_DIRENT_LINK
**Symbolic link directory entry type**

```JavaScript
const constants.UV_DIRENT_LINK = 3;
```

--------------------------
### UV_DIRENT_FIFO
**FIFO directory entry type**

```JavaScript
const constants.UV_DIRENT_FIFO = 4;
```

--------------------------
### UV_DIRENT_SOCKET
**[Socket](../../object/ifs/Socket.md) directory entry type**

```JavaScript
const constants.UV_DIRENT_SOCKET = 5;
```

--------------------------
### UV_DIRENT_CHAR
**Character device directory entry type**

```JavaScript
const constants.UV_DIRENT_CHAR = 6;
```

--------------------------
### UV_DIRENT_BLOCK
**Block device directory entry type**

```JavaScript
const constants.UV_DIRENT_BLOCK = 7;
```

--------------------------
### S_IFMT
**Bit mask of the file type bit field**

```JavaScript
const constants.S_IFMT = 61440;
```

--------------------------
### S_IFREG
**Regular file**

```JavaScript
const constants.S_IFREG = 32768;
```

--------------------------
### S_IFDIR
**Directory**

```JavaScript
const constants.S_IFDIR = 16384;
```

--------------------------
### S_IFCHR
**Character device**

```JavaScript
const constants.S_IFCHR = 8192;
```

--------------------------
### S_IFBLK
**Block device**

```JavaScript
const constants.S_IFBLK = 24576;
```

--------------------------
### S_IFIFO
**FIFO**

```JavaScript
const constants.S_IFIFO = 4096;
```

--------------------------
### S_IFLNK
**Symbolic link**

```JavaScript
const constants.S_IFLNK = 40960;
```

--------------------------
### S_IFSOCK
**[Socket](../../object/ifs/Socket.md)**

```JavaScript
const constants.S_IFSOCK = 49152;
```

--------------------------
### O_CREAT
**Create the file if it does not exist**

```JavaScript
const constants.O_CREAT = 512;
```

--------------------------
### O_EXCL
**Ensure exclusive creation of the file**

```JavaScript
const constants.O_EXCL = 2048;
```

--------------------------
### UV_FS_O_FILEMAP
**[File](../../object/ifs/File.md) mapping flag**

```JavaScript
const constants.UV_FS_O_FILEMAP = 0;
```

--------------------------
### O_NOCTTY
**Do not allocate a controlling terminal**

```JavaScript
const constants.O_NOCTTY = 131072;
```

--------------------------
### O_TRUNC
**Truncate the file to zero length**

```JavaScript
const constants.O_TRUNC = 1024;
```

--------------------------
### O_APPEND
**Append to the end of the file**

```JavaScript
const constants.O_APPEND = 8;
```

--------------------------
### O_DIRECTORY
**Open a directory**

```JavaScript
const constants.O_DIRECTORY = 1048576;
```

--------------------------
### O_NOFOLLOW
**Do not follow symbolic links**

```JavaScript
const constants.O_NOFOLLOW = 256;
```

--------------------------
### O_SYNC
**Synchronous I/O**

```JavaScript
const constants.O_SYNC = 128;
```

--------------------------
### O_DSYNC
**Synchronous I/O data integrity completion**

```JavaScript
const constants.O_DSYNC = 4194304;
```

--------------------------
### O_SYMLINK
**Allow opening symbolic links**

```JavaScript
const constants.O_SYMLINK = 2097152;
```

--------------------------
### O_NONBLOCK
**Non-blocking mode**

```JavaScript
const constants.O_NONBLOCK = 4;
```

--------------------------
### S_IRWXU
**Owner read, write and execute permission**

```JavaScript
const constants.S_IRWXU = 448;
```

--------------------------
### S_IRUSR
**Owner read permission**

```JavaScript
const constants.S_IRUSR = 256;
```

--------------------------
### S_IWUSR
**Owner write permission**

```JavaScript
const constants.S_IWUSR = 128;
```

--------------------------
### S_IXUSR
**Owner execute permission**

```JavaScript
const constants.S_IXUSR = 64;
```

--------------------------
### S_IRWXG
**Group read, write and execute permission**

```JavaScript
const constants.S_IRWXG = 56;
```

--------------------------
### S_IRGRP
**Group read permission**

```JavaScript
const constants.S_IRGRP = 32;
```

--------------------------
### S_IWGRP
**Group write permission**

```JavaScript
const constants.S_IWGRP = 16;
```

--------------------------
### S_IXGRP
**Group execute permission**

```JavaScript
const constants.S_IXGRP = 8;
```

--------------------------
### S_IRWXO
**Others read, write and execute permission**

```JavaScript
const constants.S_IRWXO = 7;
```

--------------------------
### S_IROTH
**Others read permission**

```JavaScript
const constants.S_IROTH = 4;
```

--------------------------
### S_IWOTH
**Others write permission**

```JavaScript
const constants.S_IWOTH = 2;
```

--------------------------
### S_IXOTH
**Others execute permission**

```JavaScript
const constants.S_IXOTH = 1;
```

--------------------------
### F_OK
**Test whether the file exists**

```JavaScript
const constants.F_OK = 0;
```

--------------------------
### R_OK
**Test read permission**

```JavaScript
const constants.R_OK = 4;
```

--------------------------
### W_OK
**Test write permission**

```JavaScript
const constants.W_OK = 2;
```

--------------------------
### X_OK
**Test execute permission**

```JavaScript
const constants.X_OK = 1;
```

--------------------------
### UV_FS_COPYFILE_EXCL
**Exclusive copy file flag**

```JavaScript
const constants.UV_FS_COPYFILE_EXCL = 1;
```

--------------------------
### COPYFILE_EXCL
**Exclusive copy file flag**

```JavaScript
const constants.COPYFILE_EXCL = 1;
```

--------------------------
### UV_FS_COPYFILE_FICLONE
**[File](../../object/ifs/File.md) clone copy flag**

```JavaScript
const constants.UV_FS_COPYFILE_FICLONE = 2;
```

--------------------------
### COPYFILE_FICLONE
**[File](../../object/ifs/File.md) clone copy flag**

```JavaScript
const constants.COPYFILE_FICLONE = 2;
```

--------------------------
### UV_FS_COPYFILE_FICLONE_FORCE
**[File](../../object/ifs/File.md) clone force copy flag**

```JavaScript
const constants.UV_FS_COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### COPYFILE_FICLONE_FORCE
**[File](../../object/ifs/File.md) clone force copy flag**

```JavaScript
const constants.COPYFILE_FICLONE_FORCE = 4;
```

