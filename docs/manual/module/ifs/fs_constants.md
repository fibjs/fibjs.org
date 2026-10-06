# Module fs_constants
The [constants](constants.md) of the [fs](fs.md) [module](module.md): file open, access, seek, type, permission and copy

flags plus the libuv directory entry type ids

Reach the [object](../../object/ifs/object.md) through `require('[fs](fs.md)').[constants](constants.md)` or `require('[fs](fs.md)/promises').[constants](constants.md)`
(the same [object](../../object/ifs/object.md)); it is not requireable on its own. [fs](fs.md), [FileHandle](../../object/ifs/FileHandle.md) and the promise API
accept these values.

Concepts:

- **Portable open flags**: the O_* values use the BSD/macOS numbering (O_APPEND 8, O_CREAT
  512, O_TRUNC 1024, O_EXCL 2048, O_NONBLOCK 4, O_SYNC 128, O_DSYNC 4194304, O_NOCTTY
  131072, O_DIRECTORY 1048576, O_NOFOLLOW 256, O_SYMLINK 2097152) and [fs.open](fs.md#open) translates
  them to the flags of the host. They differ from `<fcntl.h>` values (on Linux O_CREAT is
  64, O_TRUNC 512, O_APPEND 1024, O_NONBLOCK 2048): always combine these [constants](constants.md) instead
  of native literals, or a flag ends up meaning something else.
- **Access flags**: F_OK/R_OK/W_OK/X_OK are the mode bits of [fs.access](fs.md#access); F_OK only checks
  existence, and X_OK behaves like F_OK on Windows.
- **[File](../../object/ifs/File.md) [types](types.md) and modes**: S_IFMT extracts the type bits of [Stat](../../object/ifs/Stat.md)#mode and S_IF* name them;
  the S_IRWXU/S_IRUSR/... groups are the permission bits of chmod and of the mode argument
  of [fs.open](fs.md#open).
- **Seek modes**: SEEK_SET/SEEK_CUR/SEEK_END (0/1/2) are exported for compatibility, but no
  current fibjs API takes a whence argument: positioned reads and writes take an absolute
  position, and a position of -1 means the current position.
- **Copy flags**: COPYFILE_EXCL, COPYFILE_FICLONE and COPYFILE_FICLONE_FORCE (1/2/4) select
  the behavior of [fs.copyFile](fs.md#copyFile): EXCL fails when the destination exists, and the FICLONE pair
  requests a copy-on-write reflink (with a fallback copy unless FORCE is set).
- **Directory entries**: the UV_DIRENT_* ids are the libuv uv_dirent_type_t values reported
  by the directory scan; [fs.Dirent](fs.md#Dirent) exposes the same information through isXxx().
- **Extensions and gaps**: O_SYMLINK, SEEK_*, the EXTENSIONLESS_FORMAT_* pair (reserved
  format ids that mirror Node.js internals) and UV_FS_O_FILEMAP (0 here) are fibjs-specific;
  Node's O_DIRECT and O_NOATIME are not provided.

Import:

```JavaScript
const fs = require('fs');
const constants = fs.constants; // also require('fs/promises').constants
```

Example 1 — create a file with the portable open flags:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const C = fs.constants;

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fsflags-'));
const file = path.join(dir, 'note.txt');

// O_WRONLY | O_CREAT | O_TRUNC: 1 | 512 | 1024, translated by fs.open.
const handle = fs.open(file, C.O_WRONLY | C.O_CREAT | C.O_TRUNC, 0o644);
handle.write('written with portable flags');
handle.close();

console.log(fs.readFile(file, 'utf8')); // written with portable flags
console.log(C.O_CREAT, C.O_TRUNC, C.O_APPEND); // 512 1024 8

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — exclusive creation and append mode:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const C = fs.constants;

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fsflags-'));
const file = path.join(dir, 'log.txt');

// O_EXCL makes the second open of the same path fail.
const first = fs.open(file, C.O_WRONLY | C.O_CREAT | C.O_EXCL, 0o644);
first.write('first');
first.close();

try {
    fs.open(file, C.O_WRONLY | C.O_CREAT | C.O_EXCL, 0o644);
} catch (e) {
    console.log(e.code); // EEXIST
}

// O_APPEND writes at the end without an explicit position.
const appender = fs.open(file, C.O_WRONLY | C.O_APPEND);
appender.write(' second');
appender.close();
console.log(fs.readFile(file, 'utf8')); // first second

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 3 — file [types](types.md), access checks and directory entry ids:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');
const C = fs.constants;

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fsflags-'));
fs.writeFile(path.join(dir, 'data.bin'), 'x');
fs.mkdir(path.join(dir, 'sub'));
fs.symlink(path.join(dir, 'data.bin'), path.join(dir, 'link'));

// S_IFMT extracts the S_IF* type bits of a Stat#mode.
function kind(file) {
    const mode = fs.lstat(file).mode;
    if ((mode & C.S_IFMT) === C.S_IFLNK) return 'link';
    if ((mode & C.S_IFMT) === C.S_IFDIR) return 'dir';
    return 'file';
}
console.log(kind(path.join(dir, 'data.bin')), kind(path.join(dir, 'sub')),
    kind(path.join(dir, 'link'))); // file dir link

// F_OK checks existence; R_OK/W_OK/X_OK check the access of the current user.
fs.access(path.join(dir, 'data.bin'), C.F_OK | C.R_OK);
console.log('readable');
try {
    fs.access(path.join(dir, 'data.bin'), C.X_OK);
} catch (e) {
    console.log('not executable:', e.code); // not executable: EACCES (POSIX)
}

// The directory scan reports the UV_DIRENT_* ids for fs.Dirent.
console.log(C.UV_DIRENT_FILE, C.UV_DIRENT_DIR, C.UV_DIRENT_LINK); // 1 2 3

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

## Constants
        
### SEEK_SET
**Seek method constant, moves to an absolute position**

```JavaScript
const fs_constants.SEEK_SET = 0;
```

--------------------------
### SEEK_CUR
**Seek method constant, moves relative to the current position**

```JavaScript
const fs_constants.SEEK_CUR = 1;
```

--------------------------
### SEEK_END
**Seek method constant, moves relative to the end of the file**

```JavaScript
const fs_constants.SEEK_END = 2;
```

--------------------------
### UV_FS_SYMLINK_DIR
**Symbolic link to a directory**

```JavaScript
const fs_constants.UV_FS_SYMLINK_DIR = 1;
```

--------------------------
### UV_FS_SYMLINK_JUNCTION
**Symbolic link to a junction**

```JavaScript
const fs_constants.UV_FS_SYMLINK_JUNCTION = 2;
```

--------------------------
### O_RDONLY
**Open for reading only**

```JavaScript
const fs_constants.O_RDONLY = 0;
```

--------------------------
### O_WRONLY
**Open for writing only**

```JavaScript
const fs_constants.O_WRONLY = 1;
```

--------------------------
### O_RDWR
**Open for reading and writing**

```JavaScript
const fs_constants.O_RDWR = 2;
```

--------------------------
### UV_DIRENT_UNKNOWN
**Unknown directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_UNKNOWN = 0;
```

--------------------------
### UV_DIRENT_FILE
**[File](../../object/ifs/File.md) directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_FILE = 1;
```

--------------------------
### UV_DIRENT_DIR
**Directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_DIR = 2;
```

--------------------------
### UV_DIRENT_LINK
**Symbolic link directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_LINK = 3;
```

--------------------------
### UV_DIRENT_FIFO
**FIFO directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_FIFO = 4;
```

--------------------------
### UV_DIRENT_SOCKET
**[Socket](../../object/ifs/Socket.md) directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_SOCKET = 5;
```

--------------------------
### UV_DIRENT_CHAR
**Character device directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_CHAR = 6;
```

--------------------------
### UV_DIRENT_BLOCK
**Block device directory entry type**

```JavaScript
const fs_constants.UV_DIRENT_BLOCK = 7;
```

--------------------------
### S_IFMT
**Bit mask for the file type bit field**

```JavaScript
const fs_constants.S_IFMT = 61440;
```

--------------------------
### S_IFREG
**Regular file**

```JavaScript
const fs_constants.S_IFREG = 32768;
```

--------------------------
### S_IFDIR
**Directory**

```JavaScript
const fs_constants.S_IFDIR = 16384;
```

--------------------------
### S_IFCHR
**Character device**

```JavaScript
const fs_constants.S_IFCHR = 8192;
```

--------------------------
### S_IFBLK
**Block device**

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
**Symbolic link**

```JavaScript
const fs_constants.S_IFLNK = 40960;
```

--------------------------
### S_IFSOCK
**[Socket](../../object/ifs/Socket.md)**

```JavaScript
const fs_constants.S_IFSOCK = 49152;
```

--------------------------
### O_CREAT
**Create the file when it does not exist**

```JavaScript
const fs_constants.O_CREAT = 512;
```

--------------------------
### O_EXCL
**Ensure exclusive creation of the file**

```JavaScript
const fs_constants.O_EXCL = 2048;
```

--------------------------
### UV_FS_O_FILEMAP
**[File](../../object/ifs/File.md) mapping flag; 0 in fibjs (used by libuv on Windows only)**

```JavaScript
const fs_constants.UV_FS_O_FILEMAP = 0;
```

--------------------------
### O_NOCTTY
**Do not assign a controlling terminal**

```JavaScript
const fs_constants.O_NOCTTY = 131072;
```

--------------------------
### O_TRUNC
**Truncate the file to zero length**

```JavaScript
const fs_constants.O_TRUNC = 1024;
```

--------------------------
### O_APPEND
**Append to the end of the file**

```JavaScript
const fs_constants.O_APPEND = 8;
```

--------------------------
### O_DIRECTORY
**Open a directory**

```JavaScript
const fs_constants.O_DIRECTORY = 1048576;
```

--------------------------
### O_NOFOLLOW
**Do not follow symbolic links**

```JavaScript
const fs_constants.O_NOFOLLOW = 256;
```

--------------------------
### O_SYNC
**Synchronous I/O**

```JavaScript
const fs_constants.O_SYNC = 128;
```

--------------------------
### O_DSYNC
**Synchronous I/O data integrity completion**

```JavaScript
const fs_constants.O_DSYNC = 4194304;
```

--------------------------
### O_SYMLINK
**Allow opening a symbolic link**

```JavaScript
const fs_constants.O_SYMLINK = 2097152;
```

--------------------------
### O_NONBLOCK
**Non-blocking mode**

```JavaScript
const fs_constants.O_NONBLOCK = 4;
```

--------------------------
### S_IRWXU
**Owner read, write and execute permission**

```JavaScript
const fs_constants.S_IRWXU = 448;
```

--------------------------
### S_IRUSR
**Owner read permission**

```JavaScript
const fs_constants.S_IRUSR = 256;
```

--------------------------
### S_IWUSR
**Owner write permission**

```JavaScript
const fs_constants.S_IWUSR = 128;
```

--------------------------
### S_IXUSR
**Owner execute permission**

```JavaScript
const fs_constants.S_IXUSR = 64;
```

--------------------------
### S_IRWXG
**Group read, write and execute permission**

```JavaScript
const fs_constants.S_IRWXG = 56;
```

--------------------------
### S_IRGRP
**Group read permission**

```JavaScript
const fs_constants.S_IRGRP = 32;
```

--------------------------
### S_IWGRP
**Group write permission**

```JavaScript
const fs_constants.S_IWGRP = 16;
```

--------------------------
### S_IXGRP
**Group execute permission**

```JavaScript
const fs_constants.S_IXGRP = 8;
```

--------------------------
### S_IRWXO
**Others read, write and execute permission**

```JavaScript
const fs_constants.S_IRWXO = 7;
```

--------------------------
### S_IROTH
**Others read permission**

```JavaScript
const fs_constants.S_IROTH = 4;
```

--------------------------
### S_IWOTH
**Others write permission**

```JavaScript
const fs_constants.S_IWOTH = 2;
```

--------------------------
### S_IXOTH
**Others execute permission**

```JavaScript
const fs_constants.S_IXOTH = 1;
```

--------------------------
### F_OK
**Test whether the file exists**

```JavaScript
const fs_constants.F_OK = 0;
```

--------------------------
### R_OK
**Test read permission**

```JavaScript
const fs_constants.R_OK = 4;
```

--------------------------
### W_OK
**Test write permission**

```JavaScript
const fs_constants.W_OK = 2;
```

--------------------------
### X_OK
**Test execute permission**

```JavaScript
const fs_constants.X_OK = 1;
```

--------------------------
### UV_FS_COPYFILE_EXCL
**Exclusive file copy flag**

```JavaScript
const fs_constants.UV_FS_COPYFILE_EXCL = 1;
```

--------------------------
### COPYFILE_EXCL
**Exclusive file copy flag**

```JavaScript
const fs_constants.COPYFILE_EXCL = 1;
```

--------------------------
### UV_FS_COPYFILE_FICLONE
**[File](../../object/ifs/File.md) clone copy flag**

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE = 2;
```

--------------------------
### COPYFILE_FICLONE
**[File](../../object/ifs/File.md) clone copy flag**

```JavaScript
const fs_constants.COPYFILE_FICLONE = 2;
```

--------------------------
### UV_FS_COPYFILE_FICLONE_FORCE
**Forced file clone copy flag**

```JavaScript
const fs_constants.UV_FS_COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### COPYFILE_FICLONE_FORCE
**Forced file clone copy flag**

```JavaScript
const fs_constants.COPYFILE_FICLONE_FORCE = 4;
```

--------------------------
### EXTENSIONLESS_FORMAT_JAVASCRIPT
**Extensionless format id for JavaScript (reserved; mirrors Node.js internals)**

```JavaScript
const fs_constants.EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
```

--------------------------
### EXTENSIONLESS_FORMAT_WASM
**Extensionless format id for WebAssembly (reserved; mirrors Node.js internals)**

```JavaScript
const fs_constants.EXTENSIONLESS_FORMAT_WASM = 1;
```

