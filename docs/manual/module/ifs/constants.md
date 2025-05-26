# 模块 constants
常用常量定义模块

引用方法：

```JavaScript
var constants = require('constants');
```

## 常量
        
### RTLD_LAZY
**动态库延迟加载**

```JavaScript
const constants.RTLD_LAZY = 1;
```

--------------------------
### RTLD_NOW
**动态库立即加载**

```JavaScript
const constants.RTLD_NOW = 2;
```

--------------------------
### RTLD_GLOBAL
**动态库全局作用域加载**

```JavaScript
const constants.RTLD_GLOBAL = 8;
```

--------------------------
### RTLD_LOCAL
**动态库局部作用域加载**

```JavaScript
const constants.RTLD_LOCAL = 4;
```

--------------------------
### E2BIG
**参数列表太长错误**

```JavaScript
const constants.E2BIG = 7;
```

--------------------------
### EACCES
**没有访问权限错误**

```JavaScript
const constants.EACCES = 13;
```

--------------------------
### EADDRINUSE
**地址已在使用错误**

```JavaScript
const constants.EADDRINUSE = 48;
```

--------------------------
### EADDRNOTAVAIL
**地址不可用错误**

```JavaScript
const constants.EADDRNOTAVAIL = 49;
```

--------------------------
### EAFNOSUPPORT
**地址族不支持错误**

```JavaScript
const constants.EAFNOSUPPORT = 47;
```

--------------------------
### EAGAIN
**资源暂时不可用错误**

```JavaScript
const constants.EAGAIN = 35;
```

--------------------------
### EALREADY
**连接已在进行中错误**

```JavaScript
const constants.EALREADY = 37;
```

--------------------------
### EBADF
**文件描述符错误**

```JavaScript
const constants.EBADF = 9;
```

--------------------------
### EBADMSG
**错误消息错误**

```JavaScript
const constants.EBADMSG = 94;
```

--------------------------
### EBUSY
**设备或资源忙错误**

```JavaScript
const constants.EBUSY = 16;
```

--------------------------
### ECANCELED
**操作取消错误**

```JavaScript
const constants.ECANCELED = 89;
```

--------------------------
### ECHILD
**没有子进程错误**

```JavaScript
const constants.ECHILD = 10;
```

--------------------------
### ECONNABORTED
**连接中止错误**

```JavaScript
const constants.ECONNABORTED = 53;
```

--------------------------
### ECONNREFUSED
**连接被拒绝错误**

```JavaScript
const constants.ECONNREFUSED = 61;
```

--------------------------
### ECONNRESET
**连接重置错误**

```JavaScript
const constants.ECONNRESET = 54;
```

--------------------------
### EDEADLK
**资源死锁避免错误**

```JavaScript
const constants.EDEADLK = 11;
```

--------------------------
### EDESTADDRREQ
**需要目标地址错误**

```JavaScript
const constants.EDESTADDRREQ = 39;
```

--------------------------
### EDOM
**数学参数超出域错误**

```JavaScript
const constants.EDOM = 33;
```

--------------------------
### EDQUOT
**超出配额错误**

```JavaScript
const constants.EDQUOT = 69;
```

--------------------------
### EEXIST
**文件已存在错误**

```JavaScript
const constants.EEXIST = 17;
```

--------------------------
### EFAULT
**错误地址错误**

```JavaScript
const constants.EFAULT = 14;
```

--------------------------
### EFBIG
**文件太大错误**

```JavaScript
const constants.EFBIG = 27;
```

--------------------------
### EHOSTUNREACH
**主机不可达错误**

```JavaScript
const constants.EHOSTUNREACH = 65;
```

--------------------------
### EIDRM
**标识符已移除错误**

```JavaScript
const constants.EIDRM = 90;
```

--------------------------
### EILSEQ
**非法字节序列错误**

```JavaScript
const constants.EILSEQ = 92;
```

--------------------------
### EINPROGRESS
**操作进行中错误**

```JavaScript
const constants.EINPROGRESS = 36;
```

--------------------------
### EINTR
**函数调用中断错误**

```JavaScript
const constants.EINTR = 4;
```

--------------------------
### EINVAL
**无效参数错误**

```JavaScript
const constants.EINVAL = 22;
```

--------------------------
### EIO
**输入/输出错误**

```JavaScript
const constants.EIO = 5;
```

--------------------------
### EISCONN
**套接字已连接错误**

```JavaScript
const constants.EISCONN = 56;
```

--------------------------
### EISDIR
**是目录错误**

```JavaScript
const constants.EISDIR = 21;
```

--------------------------
### ELOOP
**符号链接层次过多错误**

```JavaScript
const constants.ELOOP = 62;
```

--------------------------
### EMFILE
**打开文件过多错误**

```JavaScript
const constants.EMFILE = 24;
```

--------------------------
### EMLINK
**链接过多错误**

```JavaScript
const constants.EMLINK = 31;
```

--------------------------
### EMSGSIZE
**消息太长错误**

```JavaScript
const constants.EMSGSIZE = 40;
```

--------------------------
### EMULTIHOP
**多跳尝试错误**

```JavaScript
const constants.EMULTIHOP = 95;
```

--------------------------
### ENAMETOOLONG
**文件名太长错误**

```JavaScript
const constants.ENAMETOOLONG = 63;
```

--------------------------
### ENETDOWN
**网络已关闭错误**

```JavaScript
const constants.ENETDOWN = 50;
```

--------------------------
### ENETRESET
**网络连接重置错误**

```JavaScript
const constants.ENETRESET = 52;
```

--------------------------
### ENETUNREACH
**网络不可达错误**

```JavaScript
const constants.ENETUNREACH = 51;
```

--------------------------
### ENFILE
**系统打开文件过多错误**

```JavaScript
const constants.ENFILE = 23;
```

--------------------------
### ENOBUFS
**无缓冲区空间错误**

```JavaScript
const constants.ENOBUFS = 55;
```

--------------------------
### ENODATA
**无数据可用错误**

```JavaScript
const constants.ENODATA = 96;
```

--------------------------
### ENODEV
**无此设备错误**

```JavaScript
const constants.ENODEV = 19;
```

--------------------------
### ENOENT
**无此文件或目录错误**

```JavaScript
const constants.ENOENT = 2;
```

--------------------------
### ENOEXEC
**可执行文件格式错误**

```JavaScript
const constants.ENOEXEC = 8;
```

--------------------------
### ENOLCK
**无可用锁错误**

```JavaScript
const constants.ENOLCK = 77;
```

--------------------------
### ENOLINK
**链接已断开错误**

```JavaScript
const constants.ENOLINK = 97;
```

--------------------------
### ENOMEM
**内存不足错误**

```JavaScript
const constants.ENOMEM = 12;
```

--------------------------
### ENOMSG
**无所需类型消息错误**

```JavaScript
const constants.ENOMSG = 91;
```

--------------------------
### ENOPROTOOPT
**协议不可用错误**

```JavaScript
const constants.ENOPROTOOPT = 42;
```

--------------------------
### ENOSPC
**设备上无空间错误**

```JavaScript
const constants.ENOSPC = 28;
```

--------------------------
### ENOSR
**流资源不足错误**

```JavaScript
const constants.ENOSR = 98;
```

--------------------------
### ENOSTR
**设备不是流错误**

```JavaScript
const constants.ENOSTR = 99;
```

--------------------------
### ENOSYS
**功能未实现错误**

```JavaScript
const constants.ENOSYS = 78;
```

--------------------------
### ENOTCONN
**套接字未连接错误**

```JavaScript
const constants.ENOTCONN = 57;
```

--------------------------
### ENOTDIR
**不是目录错误**

```JavaScript
const constants.ENOTDIR = 20;
```

--------------------------
### ENOTEMPTY
**目录不为空错误**

```JavaScript
const constants.ENOTEMPTY = 66;
```

--------------------------
### ENOTSOCK
**套接字操作非套接字错误**

```JavaScript
const constants.ENOTSOCK = 38;
```

--------------------------
### ENOTSUP
**操作不支持错误**

```JavaScript
const constants.ENOTSUP = 45;
```

--------------------------
### ENOTTY
**不适当的I/O控制操作错误**

```JavaScript
const constants.ENOTTY = 25;
```

--------------------------
### ENXIO
**无此设备或地址错误**

```JavaScript
const constants.ENXIO = 6;
```

--------------------------
### EOPNOTSUPP
**套接字上不支持操作错误**

```JavaScript
const constants.EOPNOTSUPP = 102;
```

--------------------------
### EOVERFLOW
**值太大无法存储在数据类型错误**

```JavaScript
const constants.EOVERFLOW = 84;
```

--------------------------
### EPERM
**操作不允许错误**

```JavaScript
const constants.EPERM = 1;
```

--------------------------
### EPIPE
**管道破裂错误**

```JavaScript
const constants.EPIPE = 32;
```

--------------------------
### EPROTO
**协议错误**

```JavaScript
const constants.EPROTO = 100;
```

--------------------------
### EPROTONOSUPPORT
**协议不支持错误**

```JavaScript
const constants.EPROTONOSUPPORT = 43;
```

--------------------------
### EPROTOTYPE
**协议错误类型错误**

```JavaScript
const constants.EPROTOTYPE = 41;
```

--------------------------
### ERANGE
**结果太大错误**

```JavaScript
const constants.ERANGE = 34;
```

--------------------------
### EROFS
**只读文件系统错误**

```JavaScript
const constants.EROFS = 30;
```

--------------------------
### ESPIPE
**无效的查找错误**

```JavaScript
const constants.ESPIPE = 29;
```

--------------------------
### ESRCH
**无此进程错误**

```JavaScript
const constants.ESRCH = 3;
```

--------------------------
### ESTALE
**文件句柄过时错误**

```JavaScript
const constants.ESTALE = 70;
```

--------------------------
### ETIME
**定时器到期错误**

```JavaScript
const constants.ETIME = 101;
```

--------------------------
### ETIMEDOUT
**连接超时错误**

```JavaScript
const constants.ETIMEDOUT = 60;
```

--------------------------
### ETXTBSY
**文本文件忙错误**

```JavaScript
const constants.ETXTBSY = 26;
```

--------------------------
### EWOULDBLOCK
**操作会阻塞错误**

```JavaScript
const constants.EWOULDBLOCK = 35;
```

--------------------------
### EXDEV
**跨设备链接错误**

```JavaScript
const constants.EXDEV = 18;
```

--------------------------
### PRIORITY_LOW
**低优先级**

```JavaScript
const constants.PRIORITY_LOW = 19;
```

--------------------------
### PRIORITY_BELOW_NORMAL
**低于正常优先级**

```JavaScript
const constants.PRIORITY_BELOW_NORMAL = 10;
```

--------------------------
### PRIORITY_NORMAL
**正常优先级**

```JavaScript
const constants.PRIORITY_NORMAL = 0;
```

--------------------------
### PRIORITY_ABOVE_NORMAL
**高于正常优先级**

```JavaScript
const constants.PRIORITY_ABOVE_NORMAL = -7;
```

--------------------------
### PRIORITY_HIGH
**高优先级**

```JavaScript
const constants.PRIORITY_HIGH = -14;
```

--------------------------
### PRIORITY_HIGHEST
**最高优先级**

```JavaScript
const constants.PRIORITY_HIGHEST = -20;
```

--------------------------
### SIGHUP
**挂起信号**

```JavaScript
const constants.SIGHUP = 1;
```

--------------------------
### SIGINT
**中断信号**

```JavaScript
const constants.SIGINT = 2;
```

--------------------------
### SIGQUIT
**退出信号**

```JavaScript
const constants.SIGQUIT = 3;
```

--------------------------
### SIGILL
**非法指令信号**

```JavaScript
const constants.SIGILL = 4;
```

--------------------------
### SIGTRAP
**跟踪陷阱信号**

```JavaScript
const constants.SIGTRAP = 5;
```

--------------------------
### SIGABRT
**中止信号**

```JavaScript
const constants.SIGABRT = 6;
```

--------------------------
### SIGIOT
**IOT陷阱信号**

```JavaScript
const constants.SIGIOT = 6;
```

--------------------------
### SIGBUS
**总线错误信号**

```JavaScript
const constants.SIGBUS = 10;
```

--------------------------
### SIGFPE
**浮点异常信号**

```JavaScript
const constants.SIGFPE = 8;
```

--------------------------
### SIGKILL
**杀死信号**

```JavaScript
const constants.SIGKILL = 9;
```

--------------------------
### SIGUSR1
**用户定义信号1**

```JavaScript
const constants.SIGUSR1 = 30;
```

--------------------------
### SIGSEGV
**段错误信号**

```JavaScript
const constants.SIGSEGV = 11;
```

--------------------------
### SIGUSR2
**用户定义信号2**

```JavaScript
const constants.SIGUSR2 = 31;
```

--------------------------
### SIGPIPE
**管道破裂信号**

```JavaScript
const constants.SIGPIPE = 13;
```

--------------------------
### SIGALRM
**闹钟信号**

```JavaScript
const constants.SIGALRM = 14;
```

--------------------------
### SIGTERM
**终止信号**

```JavaScript
const constants.SIGTERM = 15;
```

--------------------------
### SIGCHLD
**子进程终止或停止信号**

```JavaScript
const constants.SIGCHLD = 20;
```

--------------------------
### SIGCONT
**继续执行信号**

```JavaScript
const constants.SIGCONT = 19;
```

--------------------------
### SIGSTOP
**停止执行信号**

```JavaScript
const constants.SIGSTOP = 17;
```

--------------------------
### SIGTSTP
**终端停止信号**

```JavaScript
const constants.SIGTSTP = 18;
```

--------------------------
### SIGTTIN
**后台进程尝试读取信号**

```JavaScript
const constants.SIGTTIN = 21;
```

--------------------------
### SIGTTOU
**后台进程尝试写入信号**

```JavaScript
const constants.SIGTTOU = 22;
```

--------------------------
### SIGURG
**套接字紧急条件信号**

```JavaScript
const constants.SIGURG = 16;
```

--------------------------
### SIGXCPU
**CPU时间限制超出信号**

```JavaScript
const constants.SIGXCPU = 24;
```

--------------------------
### SIGXFSZ
**文件大小限制超出信号**

```JavaScript
const constants.SIGXFSZ = 25;
```

--------------------------
### SIGVTALRM
**虚拟定时器到期信号**

```JavaScript
const constants.SIGVTALRM = 26;
```

--------------------------
### SIGPROF
**分析定时器到期信号**

```JavaScript
const constants.SIGPROF = 27;
```

--------------------------
### SIGWINCH
**窗口大小改变信号**

```JavaScript
const constants.SIGWINCH = 28;
```

--------------------------
### SIGIO
**I/O现在可能信号**

```JavaScript
const constants.SIGIO = 23;
```

--------------------------
### SIGINFO
**信息请求信号**

```JavaScript
const constants.SIGINFO = 29;
```

--------------------------
### SIGSYS
**错误的系统调用信号**

```JavaScript
const constants.SIGSYS = 12;
```

--------------------------
### UV_FS_SYMLINK_DIR
**符号链接到目录**

```JavaScript
const constants.UV_FS_SYMLINK_DIR = 1;
```

--------------------------
### UV_FS_SYMLINK_JUNCTION
**符号链接到连接点**

```JavaScript
const constants.UV_FS_SYMLINK_JUNCTION = 2;
```

--------------------------
### O_RDONLY
**仅打开读取**

```JavaScript
const constants.O_RDONLY = 0;
```

--------------------------
### O_WRONLY
**仅打开写入**

```JavaScript
const constants.O_WRONLY = 1;
```

--------------------------
### O_RDWR
**打开读取和写入**

```JavaScript
const constants.O_RDWR = 2;
```

--------------------------
### UV_DIRENT_UNKNOWN
**未知目录项类型**

```JavaScript
const constants.UV_DIRENT_UNKNOWN = 0;
```

--------------------------
### UV_DIRENT_FILE
**文件目录项类型**

```JavaScript
const constants.UV_DIRENT_FILE = 1;
```

--------------------------
### UV_DIRENT_DIR
**目录目录项类型**

```JavaScript
const constants.UV_DIRENT_DIR = 2;
```

--------------------------
### UV_DIRENT_LINK
**符号链接目录项类型**

```JavaScript
const constants.UV_DIRENT_LINK = 3;
```

--------------------------
### UV_DIRENT_FIFO
**FIFO目录项类型**

```JavaScript
const constants.UV_DIRENT_FIFO = 4;
```

--------------------------
### UV_DIRENT_SOCKET
**套接字目录项类型**

```JavaScript
const constants.UV_DIRENT_SOCKET = 5;
```

--------------------------
### UV_DIRENT_CHAR
**字符设备目录项类型**

```JavaScript
const constants.UV_DIRENT_CHAR = 6;
```

--------------------------
### UV_DIRENT_BLOCK
**块设备目录项类型**

```JavaScript
const constants.UV_DIRENT_BLOCK = 7;
```

--------------------------
### S_IFMT
**文件类型位字段的位掩码**

```JavaScript
const constants.S_IFMT = 61440;
```

--------------------------
### S_IFREG
**常规文件**

```JavaScript
const constants.S_IFREG = 32768;
```

--------------------------
### S_IFDIR
**目录**

```JavaScript
const constants.S_IFDIR = 16384;
```

--------------------------
### S_IFCHR
**字符设备**

```JavaScript
const constants.S_IFCHR = 8192;
```

--------------------------
### S_IFBLK
**块设备**

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
**符号链接**

```JavaScript
const constants.S_IFLNK = 40960;
```

--------------------------
### S_IFSOCK
**套接字**

```JavaScript
const constants.S_IFSOCK = 49152;
```

--------------------------
### O_CREAT
**如果文件不存在则创建文件**

```JavaScript
const constants.O_CREAT = 512;
```

--------------------------
### O_EXCL
**确保文件的独占创建**

```JavaScript
const constants.O_EXCL = 2048;
```

--------------------------
### UV_FS_O_FILEMAP
**文件映射标志**

```JavaScript
const constants.UV_FS_O_FILEMAP = 0;
```

--------------------------
### O_NOCTTY
**不分配控制终端**

```JavaScript
const constants.O_NOCTTY = 131072;
```

--------------------------
### O_TRUNC
**将文件截断为零长度**

```JavaScript
const constants.O_TRUNC = 1024;
```

--------------------------
### O_APPEND
**追加到文件末尾**

```JavaScript
const constants.O_APPEND = 8;
```

--------------------------
### O_DIRECTORY
**打开目录**

```JavaScript
const constants.O_DIRECTORY = 1048576;
```

--------------------------
### O_NOFOLLOW
**不跟随符号链接**

```JavaScript
const constants.O_NOFOLLOW = 256;
```

--------------------------
### O_SYNC
**同步I/O**

```JavaScript
const constants.O_SYNC = 128;
```

--------------------------
### O_DSYNC
**同步I/O数据完整性完成**

```JavaScript
const constants.O_DSYNC = 4194304;
```

--------------------------
### O_SYMLINK
**允许打开符号链接**

```JavaScript
const constants.O_SYMLINK = 2097152;
```

--------------------------
### O_NONBLOCK
**非阻塞模式**

```JavaScript
const constants.O_NONBLOCK = 4;
```

--------------------------
### S_IRWXU
**所有者读写执行权限**

```JavaScript
const constants.S_IRWXU = 448;
```

--------------------------
### S_IRUSR
**所有者读权限**

```JavaScript
const constants.S_IRUSR = 256;
```

--------------------------
### S_IWUSR
**所有者写权限**

```JavaScript
const constants.S_IWUSR = 128;
```

--------------------------
### S_IXUSR
**所有者执行权限**

```JavaScript
const constants.S_IXUSR = 64;
```

--------------------------
### S_IRWXG
**组读写执行权限**

```JavaScript
const constants.S_IRWXG = 56;
```

--------------------------
### S_IRGRP
**组读权限**

```JavaScript
const constants.S_IRGRP = 32;
```

--------------------------
### S_IWGRP
**组写权限**

```JavaScript
const constants.S_IWGRP = 16;
```

--------------------------
### S_IXGRP
**组执行权限**

```JavaScript
const constants.S_IXGRP = 8;
```

--------------------------
### S_IRWXO
**其他人读写执行权限**

```JavaScript
const constants.S_IRWXO = 7;
```

--------------------------
### S_IROTH
**其他人读权限**

```JavaScript
const constants.S_IROTH = 4;
```

--------------------------
### S_IWOTH
**其他人写权限**

```JavaScript
const constants.S_IWOTH = 2;
```

--------------------------
### S_IXOTH
**其他人执行权限**

```JavaScript
const constants.S_IXOTH = 1;
```

--------------------------
### F_OK
**测试文件是否存在**

```JavaScript
const constants.F_OK = 0;
```

--------------------------
### R_OK
**测试读权限**

```JavaScript
const constants.R_OK = 4;
```

--------------------------
### W_OK
**测试写权限**

```JavaScript
const constants.W_OK = 2;
```

--------------------------
### X_OK
**测试执行权限**

```JavaScript
const constants.X_OK = 1;
```

--------------------------
### UV_FS_COPYFILE_EXCL
**独占复制文件标志**

```JavaScript
const constants.UV_FS_COPYFILE_EXCL = 1;
```

--------------------------
### COPYFILE_EXCL
**独占复制文件标志**

```JavaScript
const constants.COPYFILE_EXCL = 1;
```

--------------------------
### UV_FS_COPYFILE_FICLONE
**文件克隆复制标志**

```JavaScript
const constants.UV_FS_COPYFILE_FICLONE = 2;
```

--------------------------
### COPYFILE_FICLONE
**文件克隆复制标志**

```JavaScript
const constants.COPYFILE_FICLONE = 2;
```

--------------------------
### UV_FS_COPYFILE_FICLONE_FORCE
**文件克隆强制复制标志**

```JavaScript
const constants.UV_FS_COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### COPYFILE_FICLONE_FORCE
**文件克隆强制复制标志**

```JavaScript
const constants.COPYFILE_FICLONE_FORCE = 4;
```

