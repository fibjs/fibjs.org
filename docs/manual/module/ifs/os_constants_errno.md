# 模块 os_constants_errno
[os_constants](os_constants.md) errno 子模块，包含 POSIX 错误码常量

引用方法：

```JavaScript
var errno = require('os').constants.errno
```

## 常量
        
### E2BIG
**参数列表过长**

```JavaScript
const os_constants_errno.E2BIG = 7;
```

--------------------------
### EACCES
**权限不足**

```JavaScript
const os_constants_errno.EACCES = 13;
```

--------------------------
### EADDRINUSE
**地址已被占用**

```JavaScript
const os_constants_errno.EADDRINUSE = 98;
```

--------------------------
### EADDRNOTAVAIL
**地址不可用**

```JavaScript
const os_constants_errno.EADDRNOTAVAIL = 99;
```

--------------------------
### EAFNOSUPPORT
**地址族不受支持**

```JavaScript
const os_constants_errno.EAFNOSUPPORT = 97;
```

--------------------------
### EAGAIN
**资源暂时不可用，可重试**

```JavaScript
const os_constants_errno.EAGAIN = 11;
```

--------------------------
### EALREADY
**操作已在执行中**

```JavaScript
const os_constants_errno.EALREADY = 114;
```

--------------------------
### EBADF
**无效的文件描述符**

```JavaScript
const os_constants_errno.EBADF = 9;
```

--------------------------
### EBADMSG
**无效的消息**

```JavaScript
const os_constants_errno.EBADMSG = 74;
```

--------------------------
### EBUSY
**设备或资源忙**

```JavaScript
const os_constants_errno.EBUSY = 16;
```

--------------------------
### ECANCELED
**操作已取消**

```JavaScript
const os_constants_errno.ECANCELED = 125;
```

--------------------------
### ECHILD
**没有子进程**

```JavaScript
const os_constants_errno.ECHILD = 10;
```

--------------------------
### ECONNABORTED
**连接被中止**

```JavaScript
const os_constants_errno.ECONNABORTED = 103;
```

--------------------------
### ECONNREFUSED
**连接被拒绝**

```JavaScript
const os_constants_errno.ECONNREFUSED = 111;
```

--------------------------
### ECONNRESET
**连接被重置**

```JavaScript
const os_constants_errno.ECONNRESET = 104;
```

--------------------------
### EDEADLK
**资源死锁**

```JavaScript
const os_constants_errno.EDEADLK = 35;
```

--------------------------
### EDESTADDRREQ
**需要目标地址**

```JavaScript
const os_constants_errno.EDESTADDRREQ = 89;
```

--------------------------
### EDOM
**数学参数超出函数定义域**

```JavaScript
const os_constants_errno.EDOM = 33;
```

--------------------------
### EDQUOT
**磁盘配额超限**

```JavaScript
const os_constants_errno.EDQUOT = 122;
```

--------------------------
### EEXIST
**文件已存在**

```JavaScript
const os_constants_errno.EEXIST = 17;
```

--------------------------
### EFAULT
**无效的内存地址**

```JavaScript
const os_constants_errno.EFAULT = 14;
```

--------------------------
### EFBIG
**文件过大**

```JavaScript
const os_constants_errno.EFBIG = 27;
```

--------------------------
### EHOSTUNREACH
**主机不可达**

```JavaScript
const os_constants_errno.EHOSTUNREACH = 113;
```

--------------------------
### EIDRM
**标识符已删除**

```JavaScript
const os_constants_errno.EIDRM = 43;
```

--------------------------
### EILSEQ
**非法字节序列**

```JavaScript
const os_constants_errno.EILSEQ = 84;
```

--------------------------
### EINPROGRESS
**操作正在进行中**

```JavaScript
const os_constants_errno.EINPROGRESS = 115;
```

--------------------------
### EINTR
**被信号中断**

```JavaScript
const os_constants_errno.EINTR = 4;
```

--------------------------
### EINVAL
**无效的参数**

```JavaScript
const os_constants_errno.EINVAL = 22;
```

--------------------------
### EIO
**I/O 错误**

```JavaScript
const os_constants_errno.EIO = 5;
```

--------------------------
### EISCONN
**套接字已连接**

```JavaScript
const os_constants_errno.EISCONN = 106;
```

--------------------------
### EISDIR
**路径是目录**

```JavaScript
const os_constants_errno.EISDIR = 21;
```

--------------------------
### ELOOP
**符号链接层数过多**

```JavaScript
const os_constants_errno.ELOOP = 40;
```

--------------------------
### EMFILE
**打开的文件过多**

```JavaScript
const os_constants_errno.EMFILE = 24;
```

--------------------------
### EMLINK
**链接数过多**

```JavaScript
const os_constants_errno.EMLINK = 31;
```

--------------------------
### EMSGSIZE
**消息过长**

```JavaScript
const os_constants_errno.EMSGSIZE = 90;
```

--------------------------
### EMULTIHOP
**多跳尝试**

```JavaScript
const os_constants_errno.EMULTIHOP = 72;
```

--------------------------
### ENAMETOOLONG
**文件名过长**

```JavaScript
const os_constants_errno.ENAMETOOLONG = 36;
```

--------------------------
### ENETDOWN
**网络已关闭**

```JavaScript
const os_constants_errno.ENETDOWN = 100;
```

--------------------------
### ENETRESET
**连接被网络重置**

```JavaScript
const os_constants_errno.ENETRESET = 102;
```

--------------------------
### ENETUNREACH
**网络不可达**

```JavaScript
const os_constants_errno.ENETUNREACH = 101;
```

--------------------------
### ENFILE
**系统文件表溢出**

```JavaScript
const os_constants_errno.ENFILE = 23;
```

--------------------------
### ENOBUFS
**无可用缓冲区**

```JavaScript
const os_constants_errno.ENOBUFS = 105;
```

--------------------------
### ENODATA
**无可用数据**

```JavaScript
const os_constants_errno.ENODATA = 61;
```

--------------------------
### ENODEV
**无此设备**

```JavaScript
const os_constants_errno.ENODEV = 19;
```

--------------------------
### ENOENT
**文件或目录不存在**

```JavaScript
const os_constants_errno.ENOENT = 2;
```

--------------------------
### ENOEXEC
**可执行文件格式错误**

```JavaScript
const os_constants_errno.ENOEXEC = 8;
```

--------------------------
### ENOLCK
**无可用锁**

```JavaScript
const os_constants_errno.ENOLCK = 37;
```

--------------------------
### ENOLINK
**链接已断开**

```JavaScript
const os_constants_errno.ENOLINK = 67;
```

--------------------------
### ENOMEM
**内存不足**

```JavaScript
const os_constants_errno.ENOMEM = 12;
```

--------------------------
### ENOMSG
**没有指定类型的消息**

```JavaScript
const os_constants_errno.ENOMSG = 42;
```

--------------------------
### ENOPROTOOPT
**协议不可用**

```JavaScript
const os_constants_errno.ENOPROTOOPT = 92;
```

--------------------------
### ENOSPC
**设备上没有剩余空间**

```JavaScript
const os_constants_errno.ENOSPC = 28;
```

--------------------------
### ENOSR
**没有可用的流资源**

```JavaScript
const os_constants_errno.ENOSR = 63;
```

--------------------------
### ENOSTR
**不是流设备**

```JavaScript
const os_constants_errno.ENOSTR = 60;
```

--------------------------
### ENOSYS
**功能未实现**

```JavaScript
const os_constants_errno.ENOSYS = 38;
```

--------------------------
### ENOTCONN
**套接字未连接**

```JavaScript
const os_constants_errno.ENOTCONN = 107;
```

--------------------------
### ENOTDIR
**路径不是目录**

```JavaScript
const os_constants_errno.ENOTDIR = 20;
```

--------------------------
### ENOTEMPTY
**目录非空**

```JavaScript
const os_constants_errno.ENOTEMPTY = 39;
```

--------------------------
### ENOTSOCK
**不是套接字**

```JavaScript
const os_constants_errno.ENOTSOCK = 88;
```

--------------------------
### ENOTSUP
**不支持的操作**

```JavaScript
const os_constants_errno.ENOTSUP = 95;
```

--------------------------
### ENOTTY
**不适当的 ioctl 操作**

```JavaScript
const os_constants_errno.ENOTTY = 25;
```

--------------------------
### ENXIO
**无此设备或地址**

```JavaScript
const os_constants_errno.ENXIO = 6;
```

--------------------------
### EOPNOTSUPP
**套接字不支持的操作**

```JavaScript
const os_constants_errno.EOPNOTSUPP = 95;
```

--------------------------
### EOVERFLOW
**数值过大**

```JavaScript
const os_constants_errno.EOVERFLOW = 75;
```

--------------------------
### EPERM
**操作不允许**

```JavaScript
const os_constants_errno.EPERM = 1;
```

--------------------------
### EPIPE
**管道破裂**

```JavaScript
const os_constants_errno.EPIPE = 32;
```

--------------------------
### EPROTO
**协议错误**

```JavaScript
const os_constants_errno.EPROTO = 71;
```

--------------------------
### EPROTONOSUPPORT
**协议不受支持**

```JavaScript
const os_constants_errno.EPROTONOSUPPORT = 93;
```

--------------------------
### EPROTOTYPE
**套接字协议类型错误**

```JavaScript
const os_constants_errno.EPROTOTYPE = 91;
```

--------------------------
### ERANGE
**结果超出范围**

```JavaScript
const os_constants_errno.ERANGE = 34;
```

--------------------------
### EROFS
**只读文件系统**

```JavaScript
const os_constants_errno.EROFS = 30;
```

--------------------------
### ESPIPE
**无效的 seek 操作**

```JavaScript
const os_constants_errno.ESPIPE = 29;
```

--------------------------
### ESRCH
**没有此进程**

```JavaScript
const os_constants_errno.ESRCH = 3;
```

--------------------------
### ESTALE
**过期的文件句柄**

```JavaScript
const os_constants_errno.ESTALE = 116;
```

--------------------------
### ETIME
**定时器过期**

```JavaScript
const os_constants_errno.ETIME = 62;
```

--------------------------
### ETIMEDOUT
**操作超时**

```JavaScript
const os_constants_errno.ETIMEDOUT = 110;
```

--------------------------
### ETXTBSY
**文本文件忙**

```JavaScript
const os_constants_errno.ETXTBSY = 26;
```

--------------------------
### EWOULDBLOCK
**操作会阻塞**

```JavaScript
const os_constants_errno.EWOULDBLOCK = 11;
```

--------------------------
### EXDEV
**跨设备链接**

```JavaScript
const os_constants_errno.EXDEV = 18;
```

