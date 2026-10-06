# Module fs
The fs [module](module.md) provides file system operations: reading and writing files and directories, creating and removing them, changing permissions, querying status, resolving paths and watching files; useful for file management, logging and persisted configuration

Main capabilities:

- **Paths and existence**: `exists`, `access`, `realpath`, `readlink`, `symlink`, `link`;
- **Directory operations**: `mkdir`, `mkdtemp`, `rmdir`, `rm`, `readdir`, `glob`;
- **[File](../../object/ifs/File.md) operations**: `readFile`, `writeFile`, `appendFile`, `rename`, `copyFile`, `cp`,
  `truncate`, `unlink`, `chmod`, `chown`, `utimes`;
- **[File](../../object/ifs/File.md) descriptor operations**: `open`, `close`, `read`, `write`, `fstat`, `fsync`, `fchmod`
  and more;
- **[File](../../object/ifs/File.md) streams**: `openFile`, `openTextStream`, `createReadStream`, `createWriteStream`;
- **[File](../../object/ifs/File.md) watching**: `watch`, `watchFile`, `unwatchFile`;
- **[zip](zip.md) virtual file system**: `setZipFS`, `clearZipFS`.

Concepts:

- **Call forms**: every function works synchronously without a callback and asynchronously with a
  trailing `(err, result)` callback. `Sync`-suffixed aliases (such as `readFileSync`) and the
  promise-based `fs.promises` namespace are also available.
- **[File](../../object/ifs/File.md) descriptors and position**: `open` returns a [FileHandle](../../object/ifs/FileHandle.md) wrapping a descriptor; `read`
  and `write` take an explicit `position` and use the current file position when it is negative,
  so one descriptor can serve both sequential and random access. readFile/writeFile/appendFile do
  not close a descriptor; release it with `close`.
- **flags**: the `flags` argument of the open functions accepts the strings `'r'`, `'r+'`, `'w'`,
  `'w+'`, `'a'`, `'a+'` or a bitwise combination of the integer flags in `fs.constants`; the
  full list is documented in the [fs_constants](fs_constants.md) [module](module.md).
- **Symbolic links**: stat follows a link and describes its target, while lstat describes the
  link itself (`isSymbolicLink()` is true); unlink and rm remove the link, not its target.
- **Watching**: watch uses the platform notification service and reports the `'change'`,
  `'changeonly'` and `'renameonly'` events; watchFile polls the status and passes
  `(curStats, prevStats)` to the callback. The `recursive` option of watch is only stable on
  win32/darwin; on Linux it is forwarded to the uv backend but may report events at unexpected
  times.
- **[zip](zip.md) VFS**: setZipFS maps [zip](zip.md) data onto a [path](path.md); entries are then read through the mapping
  [path](path.md) with a `$` suffix, for example `/archive.zip$/dir/file.txt`.
- **Streams**: createReadStream/createWriteStream open a file as a [SeekableStream](../../object/ifs/SeekableStream.md), and
  createReadStream accepts an inclusive `[start, end]` range; see the [io](io.md) [module](module.md) for stream
  positioning and back pressure.

Import:

```JavaScript
const fs = require('fs');
```

Example 1 — synchronous write, read and stat in a temporary directory:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fs-'));
const file = path.join(dir, 'hello.txt');

fs.writeFile(file, 'hello, world!');
console.log(fs.readFile(file, 'utf8')); // hello, world!
console.log(fs.stat(file).size); // 13

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Example 2 — callback and stream forms of the same operations:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fs-'));
const file = path.join(dir, 'async.txt');

fs.writeFile(file, 'written with a callback', 'utf8', (err) => {
    if (err) throw err;
    fs.readFile(file, 'utf8', (err, text) => {
        if (err) throw err;
        console.log(text);
        // a read stream exposes the whole file through readAll()
        console.log(fs.createReadStream(file).readAll().toString());
        fs.rmSync(dir, {
            recursive: true,
            force: true
        });
    });
});
```

Example 3 — create, list and remove a directory tree:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-fs-'));
fs.writeFile(path.join(dir, 'notes.txt'), 'note');
fs.mkdir(path.join(dir, 'images'));

fs.readdir(dir, {
    withFileTypes: true
}).forEach((entry) => {
    console.log(entry.name, entry.isDirectory() ? 'dir' : 'file');
});

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

Notes:

- `readFile` returns a [Buffer](../../object/ifs/Buffer.md) by default and a string when an [encoding](encoding.md) is given; a descriptor
  read with an options [object](../../object/ifs/object.md) defaults to utf8.
- writeFile(fd) seeks to the beginning and truncates the file before writing, which differs from
  Node.js where a descriptor write starts at the current position.
- The Node.js `bigint` option is accepted in the options of the stat and watch functions but is
  not implemented: the `Ns` properties of [Stat](../../object/ifs/Stat.md) are always numbers holding the nanosecond part.
- watch returns a watcher deriving from [EventEmitter](../../object/ifs/EventEmitter.md) and watchFile returns a [StatsWatcher](../../object/ifs/StatsWatcher.md)
  deriving from [EventEmitter](../../object/ifs/EventEmitter.md); calling `fs.unwatchFile(target)` is equivalent to calling
  `StatsWatcher.close()`.

## Objects
        
### constants
**The [constants](constants.md) [object](../../object/ifs/object.md) of the fs [module](module.md), see [fs_constants](fs_constants.md)**

```JavaScript
fs_constants fs.constants;
```

It exposes the file access (F_OK, R_OK, W_OK, X_OK), copy (COPYFILE_*), open (O_*),
file type (S_IF*) and permission (S_I*) [constants](constants.md) used across the [module](module.md); the full list
is documented in the [fs_constants](fs_constants.md) [module](module.md).

--------------------------
### Stats
**The alias of the [Stat](../../object/ifs/Stat.md) class, see [Stat](../../object/ifs/Stat.md)**

```JavaScript
Stat fs.Stats;
```

[Stat](../../object/ifs/Stat.md) objects are returned by stat/lstat/fstat; Node.js exposes the same class as [fs.Stats](fs.md#Stats),
while readdir with `withFileTypes` returns [DirEntry](../../object/ifs/DirEntry.md) objects instead.

--------------------------
### Dirent
**The alias of the [DirEntry](../../object/ifs/DirEntry.md) class, see [DirEntry](../../object/ifs/DirEntry.md)**

```JavaScript
DirEntry fs.Dirent;
```

A directory entry pairs a file name with its type, as returned by readdir with the
`withFileTypes` option; Node.js exposes the same class as [fs.Dirent](fs.md#Dirent).

--------------------------
### Dir
**The alias of the [Dir](../../object/ifs/Dir.md) class, see [Dir](../../object/ifs/Dir.md)**

```JavaScript
Dir fs.Dir;
```

The directory iterator returned by opendir; entries can be read one by one with
read/readSync or with `for await...of`. Node.js exposes the same class as [fs.Dir](fs.md#Dir).

## Static Methods
        
### exists
**Checks whether the given file or directory exists**

```JavaScript
static Boolean fs.exists(String path) async;
```

Parameters:
* path: String, the [path](path.md) to check

Returns:
* Boolean, true when the file or directory exists

Returns false instead of throwing when the [path](path.md) does not exist.

--------------------------
**Checks whether the given file exists**

```JavaScript
static Boolean fs.exists(String path,
    Object options) async;
```

Parameters:
* path: String, the [path](path.md) to check
* options: Object, the check options (ignored)

Returns:
* Boolean, true when the file exists

The options parameter is kept for Node.js compatibility only and is ignored for now.

--------------------------
### access
**Checks the permissions of the current user on the given file**

```JavaScript
static fs.access(String path,
    Integer mode = 0) async;
```

Parameters:
* path: String, the [path](path.md) to check
* mode: Integer, the permissions to check, file existence by default

mode specifies the permissions to check, a combination of F_OK, R_OK, W_OK and X_OK from [fs.constants](fs.md#constants), F_OK (file existence) by default. A failed check throws an exception.

--------------------------
### link
**Creates a hard link; not supported on Windows**

```JavaScript
static fs.link(String oldPath,
    String newPath) async;
```

Parameters:
* oldPath: String, the source file
* newPath: String, the file to create

oldPath and newPath then refer to the same file content and share one inode, so removing
one name does not remove the other. Throws EEXIST when newPath already exists.

--------------------------
### unlink
**Removes the given file**

```JavaScript
static fs.unlink(String path) async;
```

Parameters:
* path: String, the [path](path.md) to remove

Throws when the file does not exist. When the [path](path.md) points to a directory the behavior is platform dependent; use rmdir or rm to remove directories.

--------------------------
### mkdir
**Creates a directory**

```JavaScript
static Variant fs.mkdir(String path,
    Integer | Object | Variant mode = 0777) async;
```

Parameters:
* path: String, the directory to create
* mode: Integer | Object | Variant, the file mode or the creation options

Returns:
* Variant, the [path](path.md) of the first created directory when recursive is true and a directory was actually created

mode specifies the directory permissions and is ignored on Windows; an existing directory throws, unless the recursive option is used to create parent directories. A string mode is an octal number (such as '755' or '0755'), consistent with Node.js; an invalid mode throws.

The options [object](../../object/ifs/object.md) may contain:

```JavaScript
// fragment: options
({
    recursive: false, // specify whether parent directories should be created. Default: false
    mode: 0777 // specify the file mode. Default: 0777
})
```

When recursive is true, the [path](path.md) of the first created directory is returned, consistent with Node.js; when the directory already exists, undefined is returned.

--------------------------
### mkdtemp
**Creates a unique temporary directory**

```JavaScript
static String fs.mkdtemp(String prefix) async;
```

Parameters:
* prefix: String, the prefix of the temporary directory name

Returns:
* String, the [path](path.md) of the created temporary directory

The directory is created under the system temporary directory, its name starts with prefix and ends with a random suffix.

Example — create a temporary directory and remove it afterwards:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-tmp-'));
console.log(fs.stat(dir).isDirectory()); // true

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### rmdir
**Removes a directory**

```JavaScript
static fs.rmdir(String path,
    Object opt = {}) async;
```

Parameters:
* path: String, the directory to remove
* opt: Object, the removal options

The options may contain:

```JavaScript
// fragment: options
({
    recursive: false // remove all subdirectories and files. Default: false
})
```

--------------------------
### rm
**Removes a file or directory**

```JavaScript
static fs.rm(String path,
    Object opt = {}) async;
```

Parameters:
* path: String, the directory to remove
* opt: Object, the removal options

The options may contain:

```JavaScript
// fragment: options
({
    recursive: false, // remove all subdirectories and files. Default: false
    force: false // whether to ignore nonexistent paths. Default: false
})
```

When recursive is false, only files and symbolic links can be removed; removing a directory throws EISDIR. When recursive is true, the directory and all its content are removed recursively; a symbolic link is removed itself without following the target. A nonexistent [path](path.md) throws ENOENT, unless force is true, which ignores nonexistent paths.

--------------------------
### rename
**Renames a file**

```JavaScript
static fs.rename(String from,
    String to) async;
```

Parameters:
* from: String, the file to rename
* to: String, the new file name

Throws when the file does not exist or the target already exists.

--------------------------
### copyFile
**Copies src to dest. By default dest is overwritten when it already exists.**

```JavaScript
static fs.copyFile(String from,
    String to,
    Integer mode = 0) async;
```

Parameters:
* from: String, the source file name
* to: String, the target file name
* mode: Integer, the modifiers of the copy operation, 0 by default

mode is an optional integer specifying the copy behavior. A mask can be built by bitwise-or of two or more values (for example [fs.constants](fs.md#constants).COPYFILE_EXCL | [fs.constants](fs.md#constants).COPYFILE_FICLONE).
- [fs.constants](fs.md#constants).COPYFILE_EXCL - the copy fails when dest already exists.
- [fs.constants](fs.md#constants).COPYFILE_FICLONE - the copy tries to create a copy-on-write link. When the platform does not support copy-on-write, the fallback copy mechanism is used.
- [fs.constants](fs.md#constants).COPYFILE_FICLONE_FORCE - the copy tries to create a copy-on-write link. When the platform does not support copy-on-write, the copy fails.

--------------------------
### cp
**Copies src to dest asynchronously, including subdirectories and files.**

```JavaScript
static fs.cp(String src,
    String dest,
    Object opts = {}) async;
```

Parameters:
* src: String, the source [path](path.md) to copy
* dest: String, the target [path](path.md) to copy to
* opts: Object, the copy options

When src is a directory, it is not copied recursively by default; set recursive to true for that.

opts supports the following options:

```JavaScript
// fragment: options
({
    recursive: false, // recursively copy directories. Default: false
    force: true, // overwrite existing files or directories. Default: true
    mode: 0 // modifiers for copy operation. Default: 0
})
```

Copying a directory with recursive set to false throws, consistent with Node.js; an existing
destination is overwritten unless force is false.

--------------------------
### chmod
**Sets the access permissions of the given file; not supported on Windows**

```JavaScript
static fs.chmod(String path,
    Integer | Variant mode) async;
```

Parameters:
* path: String, the file to operate on, a string is encoded as utf8
* mode: Integer | Variant, the access permissions

mode may be a number or an octal string (such as '755' or '0755'), consistent with Node.js.

--------------------------
### lchmod
**Sets the access permissions of the given file without changing the target of a symbolic link; available on macOS and BSD platforms only**

```JavaScript
static fs.lchmod(String path,
    Integer | Variant mode) async;
```

Parameters:
* path: String, the file to operate on, a string is encoded as utf8
* mode: Integer | Variant, the access permissions

mode may be a number or an octal string (such as '755' or '0755'), consistent with Node.js.

--------------------------
### chown
**Sets the owner of the given file; not supported on Windows**

```JavaScript
static fs.chown(String path,
    Integer uid,
    Integer gid) async;
```

Parameters:
* path: String, the file to set
* uid: Integer, the user id of the owner
* gid: Integer, the group id of the owner

Both uid and gid are required; pass -1 to keep the current value of one of them, the same
convention as Node.js. Changing the owner usually requires elevated privileges.

--------------------------
### lchown
**Sets the owner of the given file without changing the target of a symbolic link; not supported on Windows**

```JavaScript
static fs.lchown(String path,
    Integer uid,
    Integer gid) async;
```

Parameters:
* path: String, the file to set
* uid: Integer, the user id of the owner
* gid: Integer, the group id of the owner

Identical to chown except that when [path](path.md) is a symbolic link the link itself is modified;
pass -1 for uid or gid to keep that value unchanged.

--------------------------
### utimes
**Changes the access and modification time of the given file**

```JavaScript
static fs.utimes(String path,
    Variant atime,
    Variant mtime) async;
```

Parameters:
* path: String, the file to set
* atime: Variant, the last access time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string
* mtime: Variant, the last modification time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string

The time arguments may be a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string, consistent with Node.js.

--------------------------
### lutimes
**Changes the access and modification time of the symbolic link itself, without following it**

```JavaScript
static fs.lutimes(String path,
    Variant atime,
    Variant mtime) async;
```

Parameters:
* path: String, the symbolic link to set
* atime: Variant, the last access time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string
* mtime: Variant, the last modification time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string

The time arguments may be a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string, consistent with Node.js.

--------------------------
### stat
**Queries the basic information of the given file**

```JavaScript
static Stat fs.stat(String path) async;
```

Parameters:
* path: String, the file to query

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file, or undefined when `throwIfNoEntry` is false and

Follows symbolic links: when [path](path.md) is a link the returned [Stat](../../object/ifs/Stat.md) [object](../../object/ifs/object.md) describes its target,
use lstat to describe the link itself.

The options overload accepts:

```JavaScript
// fragment: options
({
    // throw when the path does not exist; false returns undefined instead. Default: true
    "throwIfNoEntry": true
})
```

`throwIfNoEntry` works like Node.js and only takes effect for synchronous (no callback)
calls; the asynchronous form always throws.

Example — inspect a text file created in a temporary directory:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-stat-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'hello');

const st = fs.stat(file);
console.log(st.name, st.size, st.isFile()); // data.txt 5 true

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
**Queries the basic information of the given file**

```JavaScript
static Stat fs.stat(String path,
    Object options) async;
```

Parameters:
* path: String, the file to query
* options: Object, the query options

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file, or undefined when `throwIfNoEntry` is false and the [path](path.md) does not exist

The options [object](../../object/ifs/object.md) (throwIfNoEntry, default true) is described on the first overload; it
only takes effect for synchronous (no callback) calls, the asynchronous form always throws.

--------------------------
### lstat
**Queries the basic information of the given file; unlike stat, when [path](path.md) is a symbolic link, the information of the link itself is returned instead of its target**

```JavaScript
static Stat fs.lstat(String path) async;
```

Parameters:
* path: String, the file to query

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file, or undefined when `throwIfNoEntry` is false and

The described entry is the link itself: isSymbolicLink() returns true and
isFile()/isDirectory() report the link, not its target.

The options overload accepts:

```JavaScript
// fragment: options
({
    // throw when the path does not exist; false returns undefined instead. Default: true
    "throwIfNoEntry": true
})
```

`throwIfNoEntry` works like Node.js and only takes effect for synchronous (no callback)
calls; the asynchronous form always throws.

--------------------------
**Queries the basic information of the given file; unlike stat, when [path](path.md) is a symbolic link, the information of the link itself is returned instead of its target**

```JavaScript
static Stat fs.lstat(String path,
    Object options) async;
```

Parameters:
* path: String, the file to query
* options: Object, the query options

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file, or undefined when `throwIfNoEntry` is false and the [path](path.md) does not exist

The options [object](../../object/ifs/object.md) (throwIfNoEntry, default true) is described on the first overload; it
only takes effect for synchronous (no callback) calls, the asynchronous form always throws.

--------------------------
### fstat
**Queries the basic information of the given file**

```JavaScript
static Stat fs.fstat(Integer | FileHandle fd) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); both address the same open file.
The options overload accepts an [object](../../object/ifs/object.md) for Node.js compatibility; no option is effective yet.

--------------------------
**Queries the basic information of the given file**

```JavaScript
static Stat fs.fstat(Integer | FileHandle fd,
    Object options) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* options: Object, the query options

Returns:
* [Stat](../../object/ifs/Stat.md), the basic information of the file

options currently has no effective option and is kept for Node.js compatibility only.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); both address the same open file.

--------------------------
### readlink
**Reads the given symbolic link and returns the target [path](path.md) it points to; not supported on Windows**

```JavaScript
static Variant fs.readlink(String path) async;
```

Parameters:
* path: String, the symbolic link to read

Returns:
* Variant, the file name the symbolic link points to

The target is returned as stored in the link and may be relative or point to a nonexistent
[path](path.md); the link itself must exist.

The options overload accepts either an [encoding](encoding.md) string or:

```JavaScript
// fragment: options
({
    // the returned value encoding; 'buffer' returns a Buffer. Default: utf8
    "encoding": "utf8"
})
```

--------------------------
**Reads the given symbolic link and returns the target [path](path.md) it points to; not supported on Windows**

```JavaScript
static Variant fs.readlink(String path,
    Object | String options) async;
```

Parameters:
* path: String, the symbolic link to read
* options: Object | String, the read options or the [encoding](encoding.md) of the returned value

Returns:
* Variant, the decoded string when an [encoding](encoding.md) is given, or a [Buffer](../../object/ifs/Buffer.md) for 'buffer'

The [encoding](encoding.md) is described on the first overload; it may be passed as a string or in an
options [object](../../object/ifs/object.md), and 'buffer' returns a [Buffer](../../object/ifs/Buffer.md).

--------------------------
### realpath
**Returns the absolute [path](path.md) of the given [path](path.md), unfolding relative segments and resolving symbolic links**

```JavaScript
static Variant fs.realpath(String path) async;
```

Parameters:
* path: String, the [path](path.md) to read

Returns:
* Variant, the resolved absolute [path](path.md)

Unfolds `.` and `..` segments and resolves every symbolic link, like Node.js; throws ENOENT
when the [path](path.md) does not exist.

The options overload accepts either an [encoding](encoding.md) string or:

```JavaScript
// fragment: options
({
    // the returned value encoding; 'buffer' returns a Buffer. Default: utf8
    "encoding": "utf8"
})
```

--------------------------
**Returns the absolute [path](path.md) of the given [path](path.md), unfolding relative segments and resolving symbolic links**

```JavaScript
static Variant fs.realpath(String path,
    Object | String options) async;
```

Parameters:
* path: String, the [path](path.md) to read
* options: Object | String, the read options or the [encoding](encoding.md) of the returned value

Returns:
* Variant, the decoded string when an [encoding](encoding.md) is given, or a [Buffer](../../object/ifs/Buffer.md) for 'buffer'

The [encoding](encoding.md) is described on the first overload; it may be passed as a string or in an
options [object](../../object/ifs/object.md), and 'buffer' returns a [Buffer](../../object/ifs/Buffer.md).

--------------------------
### symlink
**Creates a symbolic link**

```JavaScript
static fs.symlink(String target,
    String linkpath,
    String type = "file") async;
```

Parameters:
* target: String, the target, which may be a file, a directory or a nonexistent [path](path.md)
* linkpath: String, the symbolic link to create
* type: String, the type of the symbolic link: 'file', 'dir' or 'junction', 'file' by default; this parameter is only effective on Windows, and for 'junction' the target [path](path.md) linkpath must be absolute, while target is converted to an absolute [path](path.md) automatically.

On POSIX systems the link stores target as given and type is ignored; a relative target is
interpreted relative to the directory of linkpath. On Windows type selects 'file', 'dir' or
'junction', and a junction target must be absolute. Throws EEXIST when linkpath exists.

--------------------------
### truncate
**Changes the size of a file; when the given length is larger than the source file, it is padded with '\0', otherwise the exceeding content is lost**

```JavaScript
static fs.truncate(String path,
    Integer len) async;
```

Parameters:
* path: String, the [path](path.md) of the file to change
* len: Integer, the new size of the file

The file must exist and be writable; this is the [path](path.md)-based counterpart of ftruncate.

--------------------------
### read
**Reads the content of a file by its file descriptor**

```JavaScript
static Integer fs.read(Integer | FileHandle fd,
    Buffer buffer,
    Integer offset = 0,
    Integer length = 0,
    Integer position = -1) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* buffer: [Buffer](../../object/ifs/Buffer.md), the [Buffer](../../object/ifs/Buffer.md) the result is written into
* offset: Integer, the write offset in the [Buffer](../../object/ifs/Buffer.md), 0 by default
* length: Integer, the number of bytes to read, 0 by default
* position: Integer, the read position, the current file position by default

Returns:
* Integer, the number of bytes actually read

length defaults to 0, which reads no data; a length must be given explicitly to read. position defaults to -1, which reads from the current file position; when position is given, the file pointer is moved there before reading.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); position addresses that descriptor's file position.

--------------------------
### fchmod
**Changes the file mode by its file descriptor. Effective on POSIX systems only.**

```JavaScript
static fs.fchmod(Integer | FileHandle fd,
    Integer mode) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* mode: Integer, the file mode

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the mode is applied to the file it addresses.

--------------------------
### fchown
**Changes the owner by the file descriptor. Effective on POSIX systems only.**

```JavaScript
static fs.fchown(Integer | FileHandle fd,
    Integer uid,
    Integer gid) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* uid: Integer, the user id
* gid: Integer, the group id

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the owner is changed on the file it addresses.

--------------------------
### futimes
**Changes the access and modification time of a file by its file descriptor**

```JavaScript
static fs.futimes(Integer | FileHandle fd,
    Variant atime,
    Variant mtime) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* atime: Variant, the last access time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string
* mtime: Variant, the last modification time: a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string

The time arguments may be a Date [object](../../object/ifs/object.md), a Unix timestamp in seconds, or a date string, consistent with Node.js.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the times are applied to the file it addresses.

--------------------------
### fdatasync
**Synchronizes data to disk by the file descriptor**

```JavaScript
static fs.fdatasync(Integer | FileHandle fd) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor

Only the file data is synchronized, not the metadata, which costs less than fsync.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the data of that descriptor is flushed.

--------------------------
### fsync
**Synchronizes data to disk by the file descriptor**

```JavaScript
static fs.fsync(Integer | FileHandle fd) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor

Synchronizes both the file data and the metadata, making sure the written content is persisted.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the data and metadata of that descriptor are flushed.

--------------------------
### ftruncate
**Changes the size of a file by its file descriptor**

```JavaScript
static fs.ftruncate(Integer | FileHandle fd,
    Integer len = 0) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* len: Integer, the new size of the file, 0 by default

Consistent with Node.js: a length of 0 empties the file, and negative values are treated as 0.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); the file it addresses is resized.

--------------------------
### statfs
**Queries the information of the file system**

```JavaScript
static (Number type, Number bsize, Number blocks, Number bfree, Number bavail, Number files, Number ffree) fs.statfs(String path) async;
```

Parameters:
* path: String, the [path](path.md) to query

Returns:
* (Number type, Number bsize, Number blocks, Number bfree, Number bavail, Number files, Number ffree), the file system information [object](../../object/ifs/object.md)

The returned [object](../../object/ifs/object.md) contains the type, bsize, blocks, bfree, bavail, files and ffree fields, consistent with Node.js.

--------------------------
### readdir
**Reads the entries of the given directory**

```JavaScript
static NArray fs.readdir(String path) async;
```

Parameters:
* path: String, the directory to query

Returns:
* NArray, the array of directory entries

Returns an array of file names under the directory, without the content of subdirectories.
The overload with opts can list subdirectories recursively and return [DirEntry](../../object/ifs/DirEntry.md) objects.

--------------------------
### opendir
**Opens a directory for iteration**

```JavaScript
static Dir fs.opendir(String path) async;
```

Parameters:
* path: String, the directory to iterate

Returns:
* [Dir](../../object/ifs/Dir.md), the directory iteration [object](../../object/ifs/object.md)

Returns a [Dir](../../object/ifs/Dir.md) [object](../../object/ifs/object.md); entries can be read one by one with read/readSync, or iterated with for await...of.

--------------------------
### readdir
**Reads the entries of the given directory**

```JavaScript
static NArray fs.readdir(String path,
    Object | String opts = {}) async;
```

Parameters:
* path: String, the directory to query
* opts: Object | String, the options or the [encoding](encoding.md) of the returned file names

Returns:
* NArray, the array of directory entries

The opts parameter supports the following options, or a string is used as the [encoding](encoding.md) of the file names directly:

```JavaScript
// fragment: options
({
    "recursive": false, // whether the content of subdirectories is listed too. Default: false
    "withFileTypes": false, // specify whether to return DirEntry objects. Default: false
    // the encoding of the file names; 'buffer' returns Buffer objects. Default: utf8
    "encoding": "utf8"
})
```

When withFileTypes is true an array of [DirEntry](../../object/ifs/DirEntry.md) objects is returned, otherwise an array of
file names. A string [encoding](encoding.md) is equivalent to passing it in the options; 'buffer' returns
an array of [Buffer](../../object/ifs/Buffer.md) objects, consistent with Node.js, but it cannot be combined with
withFileTypes (an error is thrown, while Node.js returns Dirent objects with [Buffer](../../object/ifs/Buffer.md) names).
With recursive set to true the entries of subdirectories are included as paths relative to
the queried directory.

Example — list a directory with names and with [types](types.md):

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-readdir-'));
fs.writeFile(path.join(dir, 'a.txt'), 'a');
fs.mkdir(path.join(dir, 'sub'));

fs.readdir(dir).forEach((name) => console.log(name));
fs.readdir(dir, {
    withFileTypes: true
}).forEach((entry) => {
    console.log(entry.name, entry.isDirectory());
});

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

--------------------------
### glob
**Searches the given directory for files matching a name pattern**

```JavaScript
static NArray fs.glob(String pattern,
    Object opts = {}) async;
```

Parameters:
* pattern: String, the file name pattern
* opts: Object, the options

Returns:
* NArray, the file list

The opts parameter supports the following options:

```JavaScript
// fragment: options
({
    "cwd": "", // specify a different working directory, default to current directory
    "withFileTypes": false // specify whether to return Dirent objects. Default: false
})
```

The pattern supports the `*`, `?`, `**` and other wildcards; the absolute paths of the matching files are returned. When `cwd` is given, the matches of a relative pattern are returned relative to that directory.

--------------------------
**Searches the given directory for files matching a set of name patterns**

```JavaScript
static NArray fs.glob(String patterns[],
    Object opts = {}) async;
```

Parameters:
* patterns[]: String, the file name patterns
* opts: Object, the options

Returns:
* NArray, the file list

The opts parameter supports the following options:

```JavaScript
// fragment: options
({
    "cwd": "", // specify a different working directory, default to current directory
    "withFileTypes": false // specify whether to return Dirent objects. Default: false
})
```

The matches of all patterns are merged; a duplicate file appears only once. When `cwd` is
given, the matches of relative patterns are returned relative to that directory.

--------------------------
### createReadStream
**Creates a readable file stream**

```JavaScript
static SeekableStream fs.createReadStream(String fname,
    Object options = {}) async;
```

Parameters:
* fname: String, the file name
* options: Object, the read options

Returns:
* [SeekableStream](../../object/ifs/SeekableStream.md), the file stream [object](../../object/ifs/object.md)

options supports the following options:

```JavaScript
// fragment: options
({
    "flags": "r", // the open mode, "r" (read only) by default
    "start": 0, // the start position of the read
    "end": undefined // end position of the read (inclusive). Default: end of file
})
```

When start or end is given, the returned stream only covers the [start, end] range (boundaries included); the same stream can be used for reading at explicit positions.

--------------------------
### createWriteStream
**Opens a file and creates a writable stream**

```JavaScript
static SeekableStream fs.createWriteStream(String fname,
    Object options = {}) async;
```

Parameters:
* fname: String, the file name
* options: Object, the write options, supporting flags ('w' by default)

Returns:
* [SeekableStream](../../object/ifs/SeekableStream.md), the file stream [object](../../object/ifs/object.md)

The stream writes from the beginning of the file and truncates existing content by default;
use an 'r+' flag to write into an existing file instead. See [SeekableStream](../../object/ifs/SeekableStream.md) for the
positioning and write methods.

options supports:

```JavaScript
// fragment: options
({
    "flags": "w" // the open mode, "w" (create or truncate) by default
})
```

--------------------------
### openFile
**Opens a file for reading, writing, or both**

```JavaScript
static SeekableStream fs.openFile(String fname,
    String | Integer flags = "r") async;
```

Parameters:
* fname: String, the file name
* flags: String | Integer, the open mode

Returns:
* [SeekableStream](../../object/ifs/SeekableStream.md), the opened file [object](../../object/ifs/object.md)

The flags parameter supports integer [fs.constants](fs.md#constants) flags (a combination of values such as [fs.constants](fs.md#constants).O_WRONLY | [fs.constants](fs.md#constants).O_CREAT), or one of the following strings:
- 'r' read only; throws when the file does not exist.
- 'r+' read and write; throws when the file does not exist.
- 'w' write only; the file is created when missing and truncated when existing.
- 'w+' read and write; the file is created when missing.
- 'a' write only, appending; the file is created when missing.
- 'a+' read and write, appending; the file is created when missing.

The returned file stream supports positioning operations such as seek, tell and rewind.

flags may be the integer [fs.constants](fs.md#constants) flags, or a string; "r" (read only) is the default.

--------------------------
### open
**Opens a file descriptor, using integer [fs.constants](fs.md#constants) flags**

```JavaScript
static FileHandle fs.open(String fname,
    Integer flags,
    Integer mode = 0666) async;
```

Parameters:
* fname: String, the file name
* flags: Integer, integer flags, a combination of [fs.constants](fs.md#constants) values (such as [fs.constants](fs.md#constants).O_WRONLY | [fs.constants](fs.md#constants).O_CREAT)
* mode: Integer, the file mode when the file is created, 0666 by default

Returns:
* [FileHandle](../../object/ifs/FileHandle.md), the opened file descriptor

The same operation is available with a string-flags form taking an octal string mode and a
string-flags form taking a numeric mode defaulting to 0666. `open` returns a [FileHandle](../../object/ifs/FileHandle.md) that
wraps the descriptor; use read, write, fstat and close on it. Consistent with Node.js, the
[FileHandle](../../object/ifs/FileHandle.md) is not a [Stream](../../object/ifs/Stream.md), use createReadStream/createWriteStream for streams.

--------------------------
**Opens a file**

```JavaScript
static FileHandle fs.open(String fname,
    String flags,
    Variant mode) async;
```

Parameters:
* fname: String, the file name
* flags: String, the open mode
* mode: Variant, the file permissions, a number or an octal string

Returns:
* [FileHandle](../../object/ifs/FileHandle.md), the file handle [object](../../object/ifs/object.md)

mode may be a number or an octal string (such as '600', '0600', '0o600'), consistent with Node.js; an invalid mode throws.

--------------------------
**Opens a file descriptor**

```JavaScript
static FileHandle fs.open(String fname,
    String flags = "r",
    Integer mode = 0666) async;
```

Parameters:
* fname: String, the file name
* flags: String, the open mode, "r" (read only) by default
* mode: Integer, the file mode when the file is created, 0666 by default

Returns:
* [FileHandle](../../object/ifs/FileHandle.md), the opened file descriptor

The flags parameter supports:
- 'r' read only; throws when the file does not exist.
- 'r+' read and write; throws when the file does not exist.
- 'w' write only; the file is created when missing and truncated when existing.
- 'w+' read and write; the file is created when missing.
- 'a' write only, appending; the file is created when missing.
- 'a+' read and write, appending; the file is created when missing.

The returned [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md) works with the descriptor functions [fs.read](fs.md#read), [fs.write](fs.md#write), [fs.fstat](fs.md#fstat) and so on.

--------------------------
### close
**Closes the file descriptor**

```JavaScript
static fs.close(Integer | FileHandle fd) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); both close the same underlying descriptor.

--------------------------
### openTextStream
**Opens a text file for reading, writing, or both**

```JavaScript
static BufferedStream fs.openTextStream(String fname,
    String flags = "r") async;
```

Parameters:
* fname: String, the file name
* flags: String, the open mode, "r" (read only) by default

Returns:
* [BufferedStream](../../object/ifs/BufferedStream.md), the opened file [object](../../object/ifs/object.md)

The flags parameter supports:
- 'r' read only; throws when the file does not exist.
- 'r+' read and write; throws when the file does not exist.
- 'w' write only; the file is created when missing and truncated when existing.
- 'w+' read and write; the file is created when missing.
- 'a' write only, appending; the file is created when missing.
- 'a+' read and write, appending; the file is created when missing.

The returned [BufferedStream](../../object/ifs/BufferedStream.md) reads and writes text line by line; the line ending can be set through the EOL property.

--------------------------
### readTextFile
**Opens a text file and reads its content**

```JavaScript
static String fs.readTextFile(String fname) async;
```

Parameters:
* fname: String, the file name

Returns:
* String, the text content of the file

The content is decoded as utf-8 and returned.

--------------------------
### readFile
**Reads the whole content of a file, by its file descriptor or by its name**

```JavaScript
static Variant fs.readFile(FileHandle | String | Integer fname,
    Object | String options = "") async;
```

Parameters:
* fname: [FileHandle](../../object/ifs/FileHandle.md) | String | Integer, the file to read
* options: Object | String, the decoding or the read options

Returns:
* Variant, the file content

options supports the following options:

```JavaScript
// fragment: options
({
    "encoding": "utf8" // specify the encoding, default is utf8.
})
```

Example — read the same file as a string and as a [Buffer](../../object/ifs/Buffer.md):

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-read-'));
const file = path.join(dir, 'data.txt');
fs.writeFile(file, 'plain text');

console.log(fs.readFile(file, 'utf8')); // plain text
console.log(Buffer.isBuffer(fs.readFile(file))); // true

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

An [encoding](encoding.md) string is empty by default, nothing is decoded and a [Buffer](../../object/ifs/Buffer.md) [object](../../object/ifs/object.md) is returned;
when an [encoding](encoding.md) is given, the decoded string is returned. Consistent with Node.js: a file
descriptor is not closed after reading, and reading starts at the current position of the
descriptor and advances it.

fname may be the file name, an integer file descriptor, or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md).
options may be the decoding string, or the read options [object](../../object/ifs/object.md); a descriptor read with an options [object](../../object/ifs/object.md) defaults to utf8, the other forms return a [Buffer](../../object/ifs/Buffer.md) unless an [encoding](encoding.md) is given.

--------------------------
### readLines
**Opens a file and reads a set of text lines into an array; the line ending follows the EOL property: "\n" on posix and "\r\n" on windows by default**

```JavaScript
static String fs.readLines(String fname,
    Integer maxlines = -1);
```

Parameters:
* fname: String, the file name
* maxlines: Integer, the maximum number of lines to read, all lines by default

Returns:
* String, the array of text lines read; an empty array when the file is empty or has no readable data

Reads up to maxlines lines; a trailing line ending does not produce an extra empty entry.

--------------------------
### write
**Writes content into a file by its file descriptor**

```JavaScript
static Integer fs.write(Integer | FileHandle fd,
    Buffer buffer,
    Integer offset = 0,
    Integer length = -1,
    Integer position = -1) async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* buffer: [Buffer](../../object/ifs/Buffer.md), the [Buffer](../../object/ifs/Buffer.md) [object](../../object/ifs/object.md) to write
* offset: Integer, the read offset in the [Buffer](../../object/ifs/Buffer.md), 0 by default
* length: Integer, the number of bytes to write, -1 by default
* position: Integer, the write position, the current file position by default

Returns:
* Integer, the number of bytes actually written

length defaults to -1, which writes all the remaining data of buffer from offset. position defaults to -1, which writes from the current file position.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); position addresses that descriptor's file position.

--------------------------
**Writes content into a file by its file descriptor**

```JavaScript
static Integer fs.write(Integer | FileHandle fd,
    String string,
    Integer position = -1,
    String encoding = "utf8") async;
```

Parameters:
* fd: Integer | [FileHandle](../../object/ifs/FileHandle.md), the file descriptor
* string: String, the string to write
* position: Integer, the write position, the current file position by default
* encoding: String, the decoding, utf8 by default

Returns:
* Integer, the number of bytes actually written

position defaults to -1, which writes from the current file position. The string is encoded with [encoding](encoding.md) before writing.

fd may be an integer descriptor or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md); position addresses that descriptor's file position.

--------------------------
### writeTextFile
**Creates a text file and writes content into it**

```JavaScript
static Integer fs.writeTextFile(String fname,
    String txt) async;
```

Parameters:
* fname: String, the file name
* txt: String, the string to write

Returns:
* Integer, the number of bytes actually written

The file is opened for overwriting; existing content is truncated.

--------------------------
### writeFile
**Writes content into a file, by its file descriptor or by its name**

```JavaScript
static Integer fs.writeFile(FileHandle | String | Integer fname,
    Buffer | String data,
    Object | String opt = "utf8") async;
```

Parameters:
* fname: [FileHandle](../../object/ifs/FileHandle.md) | String | Integer, the file to write
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to write
* opt: Object | String, the [encoding](encoding.md) of text data or the write options

Returns:
* Integer, the number of bytes actually written

The file is opened for overwriting, existing content is truncated. opt is the [encoding](encoding.md) of text data, utf8 by default; an options [object](../../object/ifs/object.md) carries the write options instead:

```JavaScript
// fragment: options
({
    "encoding": "utf8", // specify the encoding, default is utf8.
    "mode": 0666, // specify the file mode. Default: 0666
    "flag": "w" // specify the open flag. Default: w
})
```

Example — overwriting an existing file:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-write-'));
const file = path.join(dir, 'data.txt');

fs.writeFile(file, 'first');
fs.writeFile(file, 'second'); // replaces the previous content
console.log(fs.readFile(file, 'utf8')); // second

fs.rmSync(dir, {
    recursive: true,
    force: true
});
```

A file descriptor ignores the options [object](../../object/ifs/object.md) and encodes text data as utf8. Unlike Node.js,
which writes at the current position of a descriptor, the fibjs descriptor form seeks to the
beginning and truncates the file first.

fname may be the file name, an integer file descriptor, or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md).

--------------------------
### appendFile
**Appends content to a file, by its file descriptor or by its name**

```JavaScript
static Integer fs.appendFile(FileHandle | String | Integer fname,
    Buffer | String data,
    Object | String options = "") async;
```

Parameters:
* fname: [FileHandle](../../object/ifs/FileHandle.md) | String | Integer, the file to append to
* data: [Buffer](../../object/ifs/Buffer.md) | String, the data to write
* options: Object | String, the [encoding](encoding.md) or the write options

Returns:
* Integer, the number of bytes actually written

The file is created when it does not exist. options is the [encoding](encoding.md) of the data to append; an options [object](../../object/ifs/object.md) carries the write options instead:

```JavaScript
// fragment: options
({
    "encoding": "utf8", // specify the encoding of string data. Default: utf8
    "mode": 0666, // specify the file mode. Default: 0666
    "flag": "a" // specify the open flag. Default: a
})
```

Consistent with Node.js, `flag` defaults to 'a' (append) and may be 'w'/'wx'/'ax' and so on. The [encoding](encoding.md) of an options [object](../../object/ifs/object.md) only validates the label, the data is appended as it is; a file descriptor ignores the options [object](../../object/ifs/object.md) and appends string data as utf8, at the current position of the descriptor rather than necessarily at the end of the file.

fname may be the file name, an integer file descriptor, or a [FileHandle](../../object/ifs/FileHandle.md) [object](../../object/ifs/object.md).

--------------------------
### setZipFS
**Sets a [zip](zip.md) virtual file mapping**

```JavaScript
static fs.setZipFS(String fname,
    Buffer | String data);
```

Parameters:
* fname: String, the mapping [path](path.md), a string is encoded as utf8
* data: [Buffer](../../object/ifs/Buffer.md) | String, the [zip](zip.md) data to map

The [zip](zip.md) data is mapped onto the given [path](path.md); file accesses to that [path](path.md) are then read from the mapped [zip](zip.md). Entries inside the [zip](zip.md) are reached by appending `$` to the mapping [path](path.md), for example `/archive.zip$/dir/file.txt`.

data may be a [Buffer](../../object/ifs/Buffer.md) holding the [zip](zip.md), or a string; a string is encoded as utf8.

--------------------------
### clearZipFS
**Clears [zip](zip.md) virtual file mappings**

```JavaScript
static fs.clearZipFS(String fname = "");
```

Parameters:
* fname: String, the mapping [path](path.md), all caches are cleared by default

When fname is omitted every mapping is cleared; afterwards accesses to those paths fall back
to the real file system.

--------------------------
### watch
**Watches a file and returns the corresponding watcher [object](../../object/ifs/object.md)**

```JavaScript
static FSWatcher fs.watch(String fname);
```

Parameters:
* fname: String, the file to watch

Returns:
* [FSWatcher](../../object/ifs/FSWatcher.md), the [FSWatcher](../../object/ifs/FSWatcher.md) [object](../../object/ifs/object.md)

Equivalent to watch(fname, {}, callback) without a callback; attach the handler with
`watcher.on('change', ...)` or pass it to another overload.

The options [object](../../object/ifs/object.md) supports:

```JavaScript
// fragment: options
({
    "persistent": true, // keep the process running while files are watched
    "recursive": false, // watch subdirectories too, false by default
    "encoding": "utf8", // file name encoding; 'buffer' passes a Buffer
})
```

On Linux the recursive option is only stable on win32/darwin; it is forwarded to the uv
backend but the handler may be invoked at times you do not expect. Use watchFile when the
platform notification service is unreliable.

Example — watch a directory and stop after the first change:

```JavaScript
const fs = require('fs');
const os = require('os');
const path = require('path');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fibjs-watch-'));
let closed = false;
const watcher = fs.watch(dir, (eventType, filename) => {
    console.log(eventType, filename);
    if (closed) return;
    closed = true;
    watcher.close();
    fs.rmSync(dir, {
        recursive: true,
        force: true
    });
});
fs.writeFile(path.join(dir, 'trigger.txt'), 'x');
```

--------------------------
**Watches a file and returns the corresponding watcher [object](../../object/ifs/object.md)**

```JavaScript
static FSWatcher fs.watch(String fname,
    Function(String eventType, String | Buffer filename) callback);
```

Parameters:
* fname: String, the file to watch
* callback: Function(String eventType, String | [Buffer](../../object/ifs/Buffer.md) filename), `(evtType: 'change' | 'rename', filename: string) => any` the handler called when the file changes

Returns:
* [FSWatcher](../../object/ifs/FSWatcher.md), the [FSWatcher](../../object/ifs/FSWatcher.md) [object](../../object/ifs/object.md)

The callback receives `(eventType, filename)`, where eventType is 'change' or 'rename' and
filename may be null when the platform does not report it; it is called for every event.

--------------------------
**Watches a file and returns the corresponding watcher [object](../../object/ifs/object.md)**

```JavaScript
static FSWatcher fs.watch(String fname,
    Object options);
```

Parameters:
* fname: String, the file to watch
* options: Object, the watch options

Returns:
* [FSWatcher](../../object/ifs/FSWatcher.md), the [FSWatcher](../../object/ifs/FSWatcher.md) [object](../../object/ifs/object.md)

The options (persistent, recursive, [encoding](encoding.md)) are described on the first overload.

--------------------------
**Watches a file and returns the corresponding watcher [object](../../object/ifs/object.md)**

```JavaScript
static FSWatcher fs.watch(String fname,
    Object options,
    Function(String eventType, String | Buffer filename) callback);
```

Parameters:
* fname: String, the file to watch
* options: Object, the watch options
* callback: Function(String eventType, String | [Buffer](../../object/ifs/Buffer.md) filename), `(evtType: 'change' | 'rename', filename: string) => any` the handler called when the file changes

Returns:
* [FSWatcher](../../object/ifs/FSWatcher.md), the [FSWatcher](../../object/ifs/FSWatcher.md) [object](../../object/ifs/object.md)

options supports the following options:

```JavaScript
// fragment: options
({
    "persistent": true, // keep the process running while files are watched
    "recursive": false, // watch subdirectories too, false by default
    "encoding": "utf8", // file name encoding; 'buffer' passes a Buffer
})
```

--------------------------
### watchFile
**Watches a file and returns the corresponding [StatsWatcher](../../object/ifs/StatsWatcher.md) [object](../../object/ifs/object.md)**

```JavaScript
static StatsWatcher fs.watchFile(String fname,
    Function(Stat curStats, Stat prevStats) callback);
```

Parameters:
* fname: String, the file to watch
* callback: Function([Stat](../../object/ifs/Stat.md) curStats, [Stat](../../object/ifs/Stat.md) prevStats), `(curStats: Stats, prevStats: Stats) => any` the handler called when the stats of the file change

Returns:
* [StatsWatcher](../../object/ifs/StatsWatcher.md), the [StatsWatcher](../../object/ifs/StatsWatcher.md) [object](../../object/ifs/object.md)

The file status is checked periodically; the callback is called when it changes, receiving the [Stat](../../object/ifs/Stat.md) objects before and after the change. Returns a [StatsWatcher](../../object/ifs/StatsWatcher.md) deriving from [EventEmitter](../../object/ifs/EventEmitter.md); [fs.unwatchFile](fs.md#unwatchFile)(fname) or [StatsWatcher.close](../../object/ifs/StatsWatcher.md#close)() stops watching.

The options [object](../../object/ifs/object.md) supports:

```JavaScript
// fragment: options
({
    "persistent": true, // keep the process running while files are watched
    "bigint": false, // accepted for Node.js compatibility, not implemented
    "interval": 5007 // poll period in milliseconds. Default: 5007
})
```

An interval smaller than 20 milliseconds falls back to the default.

--------------------------
**Watches a file and returns the corresponding [StatsWatcher](../../object/ifs/StatsWatcher.md) [object](../../object/ifs/object.md)**

```JavaScript
static StatsWatcher fs.watchFile(String fname,
    Object options,
    Function(Stat curStats, Stat prevStats) callback);
```

Parameters:
* fname: String, the file to watch
* options: Object, the watch options
* callback: Function([Stat](../../object/ifs/Stat.md) curStats, [Stat](../../object/ifs/Stat.md) prevStats), `(curStats: Stats, prevStats: Stats) => any` the handler called when the stats of the file change

Returns:
* [StatsWatcher](../../object/ifs/StatsWatcher.md), the [StatsWatcher](../../object/ifs/StatsWatcher.md) [object](../../object/ifs/object.md)

The options (persistent, bigint, interval) are described on the first overload; watchFile
uses stat polling, [fs.watch](fs.md#watch) is preferred when the platform notification service is available.

--------------------------
### unwatchFile
**Removes all watch event handlers from the [StatsWatcher](../../object/ifs/StatsWatcher.md) watching fname**

```JavaScript
static fs.unwatchFile(String fname);
```

Parameters:
* fname: String, the file to watch

Has no effect when the file is not being watched.

--------------------------
**Removes the `callback` handler from the watch event handlers of the [StatsWatcher](../../object/ifs/StatsWatcher.md) watching fname**

```JavaScript
static fs.unwatchFile(String fname,
    Function(Stat curStats, Stat prevStats) callback);
```

Parameters:
* fname: String, the file to watch
* callback: Function([Stat](../../object/ifs/Stat.md) curStats, [Stat](../../object/ifs/Stat.md) prevStats), the handler to remove

No error is raised even when callback is not among the watch event handlers of the [StatsWatcher](../../object/ifs/StatsWatcher.md).

## Constants
        
### SEEK_SET
**Seek method constant, moves to an absolute position**

```JavaScript
const fs.SEEK_SET = 0;
```

--------------------------
### SEEK_CUR
**Seek method constant, moves relative to the current position**

```JavaScript
const fs.SEEK_CUR = 1;
```

--------------------------
### SEEK_END
**Seek method constant, moves relative to the end of the file**

```JavaScript
const fs.SEEK_END = 2;
```

--------------------------
### F_OK
**[File](../../object/ifs/File.md) existence check constant, see [fs_constants](fs_constants.md)**

```JavaScript
const fs.F_OK = 0;
```

--------------------------
### R_OK
**Read permission check constant, see [fs_constants](fs_constants.md)**

```JavaScript
const fs.R_OK = 4;
```

--------------------------
### W_OK
**Write permission check constant, see [fs_constants](fs_constants.md)**

```JavaScript
const fs.W_OK = 2;
```

--------------------------
### X_OK
**Execute permission check constant, see [fs_constants](fs_constants.md)**

```JavaScript
const fs.X_OK = 1;
```

