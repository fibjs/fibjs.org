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
****

```JavaScript
const fs_constants.UV_FS_SYMLINK_DIR = 1;
```

--------------------------
### UV_FS_SYMLINK_JUNCTION
****

```JavaScript
const fs_constants.UV_FS_SYMLINK_JUNCTION = 2;
```

--------------------------
### O_RDONLY
****

```JavaScript
const fs_constants.O_RDONLY = 0;
```

--------------------------
### O_WRONLY
****

```JavaScript
const fs_constants.O_WRONLY = 1;
```

--------------------------
### O_RDWR
****

```JavaScript
const fs_constants.O_RDWR = 2;
```

--------------------------
### UV_DIRENT_UNKNOWN
****

```JavaScript
const fs_constants.UV_DIRENT_UNKNOWN = 0;
```

--------------------------
### UV_DIRENT_FILE
****

```JavaScript
const fs_constants.UV_DIRENT_FILE = 1;
```

--------------------------
### UV_DIRENT_DIR
****

```JavaScript
const fs_constants.UV_DIRENT_DIR = 2;
```

--------------------------
### UV_DIRENT_LINK
****

```JavaScript
const fs_constants.UV_DIRENT_LINK = 3;
```

--------------------------
### UV_DIRENT_FIFO
****

```JavaScript
const fs_constants.UV_DIRENT_FIFO = 4;
```

--------------------------
### UV_DIRENT_SOCKET
****

```JavaScript
const fs_constants.UV_DIRENT_SOCKET = 5;
```

--------------------------
### UV_DIRENT_CHAR
****

```JavaScript
const fs_constants.UV_DIRENT_CHAR = 6;
```

--------------------------
### UV_DIRENT_BLOCK
****

```JavaScript
const fs_constants.UV_DIRENT_BLOCK = 7;
```

--------------------------
### S_IFMT
****

```JavaScript
const fs_constants.S_IFMT = 61440;
```

--------------------------
### S_IFREG
****

```JavaScript
const fs_constants.S_IFREG = 32768;
```

--------------------------
### S_IFDIR
****

```JavaScript
const fs_constants.S_IFDIR = 16384;
```

--------------------------
### S_IFCHR
****

```JavaScript
const fs_constants.S_IFCHR = 8192;
```

--------------------------
### S_IFBLK
****

```JavaScript
const fs_constants.S_IFBLK = 24576;
```

--------------------------
### S_IFIFO
****

```JavaScript
const fs_constants.S_IFIFO = 4096;
```

--------------------------
### S_IFLNK
****

```JavaScript
const fs_constants.S_IFLNK = 40960;
```

--------------------------
### S_IFSOCK
****

```JavaScript
const fs_constants.S_IFSOCK = 49152;
```

--------------------------
### O_CREAT
****

```JavaScript
const fs_constants.O_CREAT = 512;
```

--------------------------
### O_EXCL
****

```JavaScript
const fs_constants.O_EXCL = 2048;
```

--------------------------
### UV_FS_O_FILEMAP
****

```JavaScript
const fs_constants.UV_FS_O_FILEMAP = 0;
```

--------------------------
### O_NOCTTY
****

```JavaScript
const fs_constants.O_NOCTTY = 131072;
```

--------------------------
### O_TRUNC
****

```JavaScript
const fs_constants.O_TRUNC = 1024;
```

--------------------------
### O_APPEND
****

```JavaScript
const fs_constants.O_APPEND = 8;
```

--------------------------
### O_DIRECTORY
****

```JavaScript
const fs_constants.O_DIRECTORY = 1048576;
```

--------------------------
### O_NOFOLLOW
****

```JavaScript
const fs_constants.O_NOFOLLOW = 256;
```

--------------------------
### O_SYNC
****

```JavaScript
const fs_constants.O_SYNC = 128;
```

--------------------------
### O_DSYNC
****

```JavaScript
const fs_constants.O_DSYNC = 4194304;
```

--------------------------
### O_SYMLINK
****

```JavaScript
const fs_constants.O_SYMLINK = 2097152;
```

--------------------------
### O_NONBLOCK
****

```JavaScript
const fs_constants.O_NONBLOCK = 4;
```

--------------------------
### S_IRWXU
****

```JavaScript
const fs_constants.S_IRWXU = 448;
```

--------------------------
### S_IRUSR
****

```JavaScript
const fs_constants.S_IRUSR = 256;
```

--------------------------
### S_IWUSR
****

```JavaScript
const fs_constants.S_IWUSR = 128;
```

--------------------------
### S_IXUSR
****

```JavaScript
const fs_constants.S_IXUSR = 64;
```

--------------------------
### S_IRWXG
****

```JavaScript
const fs_constants.S_IRWXG = 56;
```

--------------------------
### S_IRGRP
****

```JavaScript
const fs_constants.S_IRGRP = 32;
```

--------------------------
### S_IWGRP
****

```JavaScript
const fs_constants.S_IWGRP = 16;
```

--------------------------
### S_IXGRP
****

```JavaScript
const fs_constants.S_IXGRP = 8;
```

--------------------------
### S_IRWXO
****

```JavaScript
const fs_constants.S_IRWXO = 7;
```

--------------------------
### S_IROTH
****

```JavaScript
const fs_constants.S_IROTH = 4;
```

--------------------------
### S_IWOTH
****

```JavaScript
const fs_constants.S_IWOTH = 2;
```

--------------------------
### S_IXOTH
****

```JavaScript
const fs_constants.S_IXOTH = 1;
```

--------------------------
### F_OK
****

```JavaScript
const fs_constants.F_OK = 0;
```

--------------------------
### R_OK
****

```JavaScript
const fs_constants.R_OK = 4;
```

--------------------------
### W_OK
****

```JavaScript
const fs_constants.W_OK = 2;
```

--------------------------
### X_OK
****

```JavaScript
const fs_constants.X_OK = 1;
```

--------------------------
### UV_FS_COPYFILE_EXCL
****

```JavaScript
const fs_constants.UV_FS_COPYFILE_EXCL = 1;
```

--------------------------
### COPYFILE_EXCL
****

```JavaScript
const fs_constants.COPYFILE_EXCL = 1;
```

--------------------------
### UV_FS_COPYFILE_FICLONE
****

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE = 2;
```

--------------------------
### COPYFILE_FICLONE
****

```JavaScript
const fs_constants.COPYFILE_FICLONE = 2;
```

--------------------------
### UV_FS_COPYFILE_FICLONE_FORCE
****

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### COPYFILE_FICLONE_FORCE
****

```JavaScript
const fs_constants.COPYFILE_FICLONE_FORCE = 4;
```

