# 模块 fs_constants
[fs](fs.md) 模块常用常量定义模块

引用方法：

```JavaScript
var constants = require('fs').constants
```

## 常量
        
### SEEK_SET
**seek 方式常量，移动到绝对位置**

```JavaScript
const fs_constants.SEEK_SET = 0;
```

--------------------------
### SEEK_CUR
**seek 方式常量，移动到当前位置的相对位置**

```JavaScript
const fs_constants.SEEK_CUR = 1;
```

--------------------------
### SEEK_END
**seek 方式常量，移动到文件结尾的相对位置**

```JavaScript
const fs_constants.SEEK_END = 2;
```

--------------------------
### UV_FS_SYMLINK_DIR
**符号链接到目录**

```JavaScript
const fs_constants.UV_FS_SYMLINK_DIR = 1;
```

--------------------------
### UV_FS_SYMLINK_JUNCTION
**符号链接到连接点**

```JavaScript
const fs_constants.UV_FS_SYMLINK_JUNCTION = 2;
```

--------------------------
### O_RDONLY
**仅打开读取**

```JavaScript
const fs_constants.O_RDONLY = 0;
```

--------------------------
### O_WRONLY
**仅打开写入**

```JavaScript
const fs_constants.O_WRONLY = 1;
```

--------------------------
### O_RDWR
**打开读取和写入**

```JavaScript
const fs_constants.O_RDWR = 2;
```

--------------------------
### UV_DIRENT_UNKNOWN
**未知目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_UNKNOWN = 0;
```

--------------------------
### UV_DIRENT_FILE
**文件目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_FILE = 1;
```

--------------------------
### UV_DIRENT_DIR
**目录目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_DIR = 2;
```

--------------------------
### UV_DIRENT_LINK
**符号链接目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_LINK = 3;
```

--------------------------
### UV_DIRENT_FIFO
**FIFO目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_FIFO = 4;
```

--------------------------
### UV_DIRENT_SOCKET
**套接字目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_SOCKET = 5;
```

--------------------------
### UV_DIRENT_CHAR
**字符设备目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_CHAR = 6;
```

--------------------------
### UV_DIRENT_BLOCK
**块设备目录项类型**

```JavaScript
const fs_constants.UV_DIRENT_BLOCK = 7;
```

--------------------------
### S_IFMT
**文件类型位字段的位掩码**

```JavaScript
const fs_constants.S_IFMT = 61440;
```

--------------------------
### S_IFREG
**常规文件**

```JavaScript
const fs_constants.S_IFREG = 32768;
```

--------------------------
### S_IFDIR
**目录**

```JavaScript
const fs_constants.S_IFDIR = 16384;
```

--------------------------
### S_IFCHR
**字符设备**

```JavaScript
const fs_constants.S_IFCHR = 8192;
```

--------------------------
### S_IFBLK
**块设备**

```JavaScript
const fs_constants.S_IFBLK = 24576;
```

--------------------------
### S_IFIFO
**FIFO**

```JavaScript
const fs_constants.S_IFIFO = 4096;
```

--------------------------
### S_IFLNK
**符号链接**

```JavaScript
const fs_constants.S_IFLNK = 40960;
```

--------------------------
### S_IFSOCK
**套接字**

```JavaScript
const fs_constants.S_IFSOCK = 49152;
```

--------------------------
### O_CREAT
**如果文件不存在则创建文件**

```JavaScript
const fs_constants.O_CREAT = 512;
```

--------------------------
### O_EXCL
**确保文件的独占创建**

```JavaScript
const fs_constants.O_EXCL = 2048;
```

--------------------------
### UV_FS_O_FILEMAP
**文件映射标志**

```JavaScript
const fs_constants.UV_FS_O_FILEMAP = 0;
```

--------------------------
### O_NOCTTY
**不分配控制终端**

```JavaScript
const fs_constants.O_NOCTTY = 131072;
```

--------------------------
### O_TRUNC
**将文件截断为零长度**

```JavaScript
const fs_constants.O_TRUNC = 1024;
```

--------------------------
### O_APPEND
**追加到文件末尾**

```JavaScript
const fs_constants.O_APPEND = 8;
```

--------------------------
### O_DIRECTORY
**打开目录**

```JavaScript
const fs_constants.O_DIRECTORY = 1048576;
```

--------------------------
### O_NOFOLLOW
**不跟随符号链接**

```JavaScript
const fs_constants.O_NOFOLLOW = 256;
```

--------------------------
### O_SYNC
**同步I/O**

```JavaScript
const fs_constants.O_SYNC = 128;
```

--------------------------
### O_DSYNC
**同步I/O数据完整性完成**

```JavaScript
const fs_constants.O_DSYNC = 4194304;
```

--------------------------
### O_SYMLINK
**允许打开符号链接**

```JavaScript
const fs_constants.O_SYMLINK = 2097152;
```

--------------------------
### O_NONBLOCK
**非阻塞模式**

```JavaScript
const fs_constants.O_NONBLOCK = 4;
```

--------------------------
### S_IRWXU
**所有者读写执行权限**

```JavaScript
const fs_constants.S_IRWXU = 448;
```

--------------------------
### S_IRUSR
**所有者读权限**

```JavaScript
const fs_constants.S_IRUSR = 256;
```

--------------------------
### S_IWUSR
**所有者写权限**

```JavaScript
const fs_constants.S_IWUSR = 128;
```

--------------------------
### S_IXUSR
**所有者执行权限**

```JavaScript
const fs_constants.S_IXUSR = 64;
```

--------------------------
### S_IRWXG
**组读写执行权限**

```JavaScript
const fs_constants.S_IRWXG = 56;
```

--------------------------
### S_IRGRP
**组读权限**

```JavaScript
const fs_constants.S_IRGRP = 32;
```

--------------------------
### S_IWGRP
**组写权限**

```JavaScript
const fs_constants.S_IWGRP = 16;
```

--------------------------
### S_IXGRP
**组执行权限**

```JavaScript
const fs_constants.S_IXGRP = 8;
```

--------------------------
### S_IRWXO
**其他人读写执行权限**

```JavaScript
const fs_constants.S_IRWXO = 7;
```

--------------------------
### S_IROTH
**其他人读权限**

```JavaScript
const fs_constants.S_IROTH = 4;
```

--------------------------
### S_IWOTH
**其他人写权限**

```JavaScript
const fs_constants.S_IWOTH = 2;
```

--------------------------
### S_IXOTH
**其他人执行权限**

```JavaScript
const fs_constants.S_IXOTH = 1;
```

--------------------------
### F_OK
**测试文件是否存在**

```JavaScript
const fs_constants.F_OK = 0;
```

--------------------------
### R_OK
**测试读权限**

```JavaScript
const fs_constants.R_OK = 4;
```

--------------------------
### W_OK
**测试写权限**

```JavaScript
const fs_constants.W_OK = 2;
```

--------------------------
### X_OK
**测试执行权限**

```JavaScript
const fs_constants.X_OK = 1;
```

--------------------------
### UV_FS_COPYFILE_EXCL
**独占复制文件标志**

```JavaScript
const fs_constants.UV_FS_COPYFILE_EXCL = 1;
```

--------------------------
### COPYFILE_EXCL
**独占复制文件标志**

```JavaScript
const fs_constants.COPYFILE_EXCL = 1;
```

--------------------------
### UV_FS_COPYFILE_FICLONE
**文件克隆复制标志**

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE = 2;
```

--------------------------
### COPYFILE_FICLONE
**文件克隆复制标志**

```JavaScript
const fs_constants.COPYFILE_FICLONE = 2;
```

--------------------------
### UV_FS_COPYFILE_FICLONE_FORCE
**文件克隆强制复制标志**

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### COPYFILE_FICLONE_FORCE
**文件克隆强制复制标志**

```JavaScript
const fs_constants.COPYFILE_FICLONE_FORCE = 4;
```

