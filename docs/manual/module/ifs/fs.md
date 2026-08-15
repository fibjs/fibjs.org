# 模块 fs
fs 模块提供文件系统操作能力，包括文件与目录的读写、创建、删除、权限修改、状态查询、路径解析、文件监视等，可用于构建文件管理、日志、配置持久化等场景

模块的主要能力：

- **路径与存在性**：`exists`、`access`、`realpath`、`readlink`、`symlink`、`link`；
- **目录操作**：`mkdir`、`mkdtemp`、`rmdir`、`rm`、`readdir`、`glob`；
- **文件操作**：`readFile`、`writeFile`、`appendFile`、`rename`、`copyFile`、`cp`、`truncate`、`unlink`、`chmod`、`chown`、`utimes`；
- **文件描述符操作**：`open`、`close`、`read`、`write`、`fstat`、`fsync`、`fchmod` 等；
- **文件流**：`openFile`、`openTextStream`、`createReadStream`、`createWriteStream`；
- **文件监视**：`watch`、`watchFile`、`unwatchFile`；
- **[zip](zip.md) 虚拟文件系统**：`setZipFS`、`clearZipFS`。

模块内函数均为同步/回调一体的 async 风格：不传回调函数时同步执行并返回结果；传入回调函数时异步执行，回调接收 `(err, result)` 参数：

```JavaScript
var fs = require('fs');

// 同步方式
var content = fs.readFile('test.txt', 'utf8');
console.log(content);

// 回调方式
fs.readFile('test.txt', 'utf8', (err, content) => {
    if (err) throw err;
    console.log(content);
});
```

文件读写函数遵循以下约定：

- `readFile` 缺省返回 [Buffer](../../object/ifs/Buffer.md) 对象，指定 `encoding` 后按编码解码返回字符串；
- `writeFile` 缺省以覆盖方式写入，`appendFile` 以追加方式写入；
- 打开文件的 `flags` 参数支持 `'r'`、`'r+'`、`'w'`、`'w+'`、`'a'`、`'a+'` 六种方式，也可使用 `fs.constants` 中的整数标志按位组合。

文件监视能力由两组 API 提供：

- `fs.watch(filename)` 返回 [FSWatcher](../../object/ifs/FSWatcher.md) 对象，监听文件系统事件，支持 `'change'`、`'changeonly'`、`'renameonly'` 三个事件；
- `fs.watchFile(target)` 返回 [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象，周期性检查文件状态变化，回调接收 `(curStats, prevStats)` 参数；`fs.unwatchFile(target)` 停止监视。

示例：

```JavaScript
var fs = require('fs');

// 写入并读取文本文件
fs.writeFile('hello.txt', 'hello, world!');
console.log(fs.readFile('hello.txt', 'utf8'));

// 创建目录并列出内容
fs.mkdir('data', {
    recursive: true
});
var files = fs.readdir('data');
console.log(files);
```

一些注意点:

- 运行 `fs.watch(filename)` 会返回一个继承自 [EventEmitter](../../object/ifs/EventEmitter.md) 的 watcher, 它支持 'change', 'changeonly', 'renameonly' 三个事件
- `fs.watchFile(target)` 和 `fs.unwatchFile(target)` 依然可以成对使用
- `fs.watchFile(target)` 会返回一个继承自 [EventEmitter](../../object/ifs/EventEmitter.md) 的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象, 调用 `fs.unwatchFile(target)` 等价于调用 `StatsWatcher.close()`.
- 因为 uv 在 Linux 上的实现, `fs.watch` 的 `recursive` 选项仅在 win32/darwin 被稳定支持. 你依然可以尝试在 Linux 中尝试使用 `fs.watch('/[path](path.md)/to', { recursive: true }, handler)`, 但可能会发现 `handler` 被回调的时机与你预期的有差异

## 对象
        
### constants
**fs模块的常量对象，参见 [fs_constants](fs_constants.md)**

```JavaScript
fs_constants fs.constants;
```

--------------------------
### Stats
**[Stat](../../object/ifs/Stat.md) 类的别名，参见 [Stat](../../object/ifs/Stat.md)**

```JavaScript
Stat fs.Stats;
```

## 静态函数
        
### exists
**查询指定的文件或目录是否存在**

```JavaScript
static Boolean fs.exists(String path) async;
```

调用参数:
* path: String, 指定要查询的路径

返回结果:
* Boolean, 返回 True 表示文件或目录存在

路径不存在时返回 false 而非抛出异常。

--------------------------
### access
**查询用户对指定的文件的权限**

```JavaScript
static fs.access(String path,
    Integer mode = 0) async;
```

调用参数:
* path: String, 指定要查询的路径
* mode: Integer, 指定查询的权限，默认为文件是否存在

mode 指定要检查的权限，取值为 [fs.constants](fs.md#constants) 中 F_OK、R_OK、W_OK、X_OK 的组合，缺省为 F_OK（检查文件是否存在）。权限检查失败时抛出异常。

--------------------------
### link
**创建硬链接文件，Windows 不支持此方法**

```JavaScript
static fs.link(String oldPath,
    String newPath) async;
```

调用参数:
* oldPath: String, 源文件
* newPath: String, 将要被创建的文件

--------------------------
### unlink
**删除指定的文件**

```JavaScript
static fs.unlink(String path) async;
```

调用参数:
* path: String, 指定要删除的路径

文件不存在时抛出异常。若路径指向目录，行为由平台决定，删除目录请使用 rmdir 或 rm。

--------------------------
### mkdir
**创建一个目录**

```JavaScript
static fs.mkdir(String path,
    Integer mode = 0777) async;
```

调用参数:
* path: String, 指定要创建的目录名
* mode: Integer, 指定文件权限，Windows 忽略此参数，默认值: 0777

mode 指定目录权限，Windows 忽略此参数；目录已存在时抛出异常，可通过 recursive 选项创建多级目录。

--------------------------
**创建一个目录**

```JavaScript
static fs.mkdir(String path,
    Object opt) async;
```

调用参数:
* path: String, 指定要创建的目录名
* opt: Object, 指定创建参数

创建参数可以包含以下值：

```JavaScript
{
    recursive: false, // specify whether parent directories should be created. Default: false
    mode: 0777 // specify the file mode. Default: 0777
}
```

--------------------------
### mkdtemp
**创建一个唯一的临时目录**

```JavaScript
static String fs.mkdtemp(String prefix) async;
```

调用参数:
* prefix: String, 指定临时目录名称的前缀

返回结果:
* String, 返回创建的临时目录的路径

临时目录创建在系统的临时目录下，目录名以 prefix 开头并附加随机后缀。

--------------------------
### rmdir
**删除一个目录**

```JavaScript
static fs.rmdir(String path,
    Object opt = {}) async;
```

调用参数:
* path: String, 指定要删除的目录名
* opt: Object, 指定删除参数

删除参数可以包含以下值：

```JavaScript
{
    recursive: false // specify whether all subdirectories and files should be removed. Default: false
}
```

--------------------------
### rm
**删除一个文件或目录**

```JavaScript
static fs.rm(String path,
    Object opt = {}) async;
```

调用参数:
* path: String, 指定要删除的目录名
* opt: Object, 指定删除参数

删除参数可以包含以下值：

```JavaScript
{
    recursive: false // specify whether all subdirectories and files should be removed. Default: false
}
```

recursive 为 false 时，文件与空目录均可被删除；recursive 为 true 时递归删除目录及其全部内容。路径不存在时抛出异常。

--------------------------
### rename
**重新命名一个文件**

```JavaScript
static fs.rename(String from,
    String to) async;
```

调用参数:
* from: String, 指定更名的文件
* to: String, 指定要修改的新文件名

文件不存在或目标已存在时抛出异常。

--------------------------
### copyFile
**将 src 拷贝到 dest。 默认情况下，如果 dest 已经存在，则覆盖它。**

```JavaScript
static fs.copyFile(String from,
    String to,
    Integer mode = 0) async;
```

调用参数:
* from: String, 指定要拷贝的源文件名
* to: String, 指定要拷贝的目标文件名
* mode: Integer, 指定拷贝操作的修饰符，缺省为 0

mode 是一个可选的整数，指定拷贝操作的行为。 可以创建由两个或更多个值按位或组成的掩码（比如 [fs.constants](fs.md#constants).COPYFILE_EXCL | [fs.constants](fs.md#constants).COPYFILE_FICLONE）。
- [fs.constants](fs.md#constants).COPYFILE_EXCL - 如果 dest 已存在，则拷贝操作将失败。
- [fs.constants](fs.md#constants).COPYFILE_FICLONE - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
- [fs.constants](fs.md#constants).COPYFILE_FICLONE_FORCE - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。

--------------------------
### cp
**将 src 异步地复制到 dest，包括子目录和文件。**

```JavaScript
static fs.cp(String src,
    String dest,
    Object opts = {}) async;
```

调用参数:
* src: String, 指定要复制的源路径
* dest: String, 指定要复制到的目标路径
* opts: Object, 指定复制参数

如果 src 是一个目录，则默认情况下不会递归复制目录，需要设置 recursive 为 true。

opts 支持的选项如下：

```JavaScript
{
    recursive: false, // recursively copy directories. Default: false
    force: true, // overwrite existing files or directories. Default: true
    mode: 0 // modifiers for copy operation. Default: 0
}
```

--------------------------
### chmod
**设置指定文件的访问权限，Windows 不支持此方法**

```JavaScript
static fs.chmod(String path,
    Integer mode) async;
```

调用参数:
* path: String, 指定操作的文件
* mode: Integer, 指定设定的访问权限

--------------------------
### lchmod
**设置指定文件的访问权限，若文件是软连接则不改变指向文件的权限，只在macOS、BSD 系列平台上可用**

```JavaScript
static fs.lchmod(String path,
    Integer mode) async;
```

调用参数:
* path: String, 指定操作的文件
* mode: Integer, 指定设定的访问权限

--------------------------
### chown
**设置指定文件的拥有者，Windows 不支持此方法**

```JavaScript
static fs.chown(String path,
    Integer uid,
    Integer gid) async;
```

调用参数:
* path: String, 指定设置的文件
* uid: Integer, 文件拥有者用户id
* gid: Integer, 文件拥有者组id

--------------------------
### lchown
**设置指定文件的拥有者，如果指定的文件是软连接则不会改变其指向文件的拥有者，Windows 不支持此方法**

```JavaScript
static fs.lchown(String path,
    Integer uid,
    Integer gid) async;
```

调用参数:
* path: String, 指定设置的文件
* uid: Integer, 文件拥有者用户id
* gid: Integer, 文件拥有者组id

--------------------------
### utimes
**修改指定文件的访问时间和修改时间**

```JavaScript
static fs.utimes(String path,
    Number atime,
    Number mtime) async;
```

调用参数:
* path: String, 指定设置的文件
* atime: Number, 文件的最后访问时间，Unix 时间戳（秒）
* mtime: Number, 文件的最后修改时间，Unix 时间戳（秒）

时间参数为 Unix 时间戳，以秒为单位。

--------------------------
### lutimes
**修改指定软连接文件本身的访问时间和修改时间，不跟随软连接**

```JavaScript
static fs.lutimes(String path,
    Number atime,
    Number mtime) async;
```

调用参数:
* path: String, 指定设置的软连接文件
* atime: Number, 文件的最后访问时间，Unix 时间戳（秒）
* mtime: Number, 文件的最后修改时间，Unix 时间戳（秒）

--------------------------
### stat
**查询指定文件的基础信息**

```JavaScript
static Stat fs.stat(String path) async;
```

调用参数:
* path: String, 指定查询的文件

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

路径不存在时抛出异常。

--------------------------
**查询指定文件的基础信息**

```JavaScript
static Stat fs.stat(String path,
    Object options) async;
```

调用参数:
* path: String, 指定查询的文件
* options: Object, 指定查询选项

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

options 支持的选项如下：

```JavaScript
{
    "bigint": false // 当为 true 时，返回的 Stat 对象中的数值类型将是 BigInt. 默认: false
}
```

--------------------------
### lstat
**查询指定文件的基础信息, 和stat不同的是, 当[path](path.md)是一个软连接的时候，返回的将是这个软连接的信息而不是指向的文件的信息**

```JavaScript
static Stat fs.lstat(String path) async;
```

调用参数:
* path: String, 指定查询的文件

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

--------------------------
**查询指定文件的基础信息, 和stat不同的是, 当[path](path.md)是一个软连接的时候，返回的将是这个软连接的信息而不是指向的文件的信息**

```JavaScript
static Stat fs.lstat(String path,
    Object options) async;
```

调用参数:
* path: String, 指定查询的文件
* options: Object, 指定查询选项

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

options 支持的选项如下：

```JavaScript
{
    "bigint": false // 当为 true 时，返回的 Stat 对象中的数值类型将是 BigInt. 默认: false
}
```

--------------------------
### fstat
**查询指定文件的基础信息**

```JavaScript
static Stat fs.fstat(FileHandle fd) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

--------------------------
**查询指定文件的基础信息**

```JavaScript
static Stat fs.fstat(FileHandle fd,
    Object options) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* options: Object, 指定查询选项

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

options 支持的选项如下：

```JavaScript
{
    "bigint": false // 当为 true 时，返回的 Stat 对象中的数值类型将是 BigInt. 默认: false
}
```

--------------------------
### readlink
**读取指定的软连接文件，返回软连接指向的目标路径，Windows 不支持此方法**

```JavaScript
static String fs.readlink(String path) async;
```

调用参数:
* path: String, 指定读取的软连接文件

返回结果:
* String, 返回软连接指向的文件名

--------------------------
### realpath
**返回指定路径的绝对路径，如果指定路径中包含相对路径也会被展开，路径中的软连接会被解析**

```JavaScript
static String fs.realpath(String path) async;
```

调用参数:
* path: String, 指定读取的路径

返回结果:
* String, 返回处理后的绝对路径

--------------------------
### symlink
**创建软连接文件**

```JavaScript
static fs.symlink(String target,
    String linkpath,
    String type = "file") async;
```

调用参数:
* target: String, 目标文件，可以是文件、目录、或不存在的路径
* linkpath: String, 将被创建的软连接文件
* type: String, 创建的软连接类型, 可选类型为'file', 'dir', 'junction', 默认为'file', 该参数只在windows上有效，当为'junction'的时候将要创建的目标路径linkpath必须为绝对路径, 而target则会被自动转化为绝对路径。

--------------------------
### truncate
**修改文件尺寸，如果指定的长度大于源文件大小则用'\0'填充，否则多于的文件内容将丢失**

```JavaScript
static fs.truncate(String path,
    Integer len) async;
```

调用参数:
* path: String, 指定被修改文件的路径
* len: Integer, 指定修改后文件的大小

--------------------------
### read
**根据文件描述符，读取文件内容**

```JavaScript
static Integer fs.read(FileHandle fd,
    Buffer buffer,
    Integer offset = 0,
    Integer length = 0,
    Integer position = -1) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* buffer: [Buffer](../../object/ifs/Buffer.md), 读取结果写入的 [Buffer](../../object/ifs/Buffer.md) 对象
* offset: Integer, [Buffer](../../object/ifs/Buffer.md) 写入偏移量， 默认为 0
* length: Integer, 文件读取字节数，默认为 0
* position: Integer, 文件读取位置，默认为当前文件位置

返回结果:
* Integer, 实际读取的字节数

length 缺省为 0，表示不读取数据；读取时需显式指定长度。position 缺省为 -1，表示从当前文件位置读取；指定 position 时，读取前将文件指针移动到该位置。

--------------------------
### fchmod
**根据文件描述符，改变文件模式。只在 POSIX 系统有效。**

```JavaScript
static fs.fchmod(FileHandle fd,
    Integer mode) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* mode: Integer, 文件的模式

--------------------------
### fchown
**根据文件描述符，改变所有者。只在 POSIX 系统有效。**

```JavaScript
static fs.fchown(FileHandle fd,
    Integer uid,
    Integer gid) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* uid: Integer, 用户id
* gid: Integer, 组id

--------------------------
### futimes
**根据文件描述符，修改文件的访问时间和修改时间**

```JavaScript
static fs.futimes(FileHandle fd,
    Number atime,
    Number mtime) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* atime: Number, 文件的最后访问时间，Unix 时间戳（秒）
* mtime: Number, 文件的最后修改时间，Unix 时间戳（秒）

--------------------------
### fdatasync
**根据文件描述符，同步数据到磁盘**

```JavaScript
static fs.fdatasync(FileHandle fd) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象

仅同步文件数据部分，不包含文件元数据，比 fsync 开销更小。

--------------------------
### fsync
**根据文件描述符，同步数据到磁盘**

```JavaScript
static fs.fsync(FileHandle fd) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象

同步文件数据与元数据，确保写入内容持久化。

--------------------------
### readdir
**读取指定目录的文件信息**

```JavaScript
static NArray fs.readdir(String path) async;
```

调用参数:
* path: String, 指定查询的目录

返回结果:
* NArray, 返回目录的文件信息数组

返回目录下的文件名数组，不含子目录内容。

--------------------------
**读取指定目录的文件信息**

```JavaScript
static NArray fs.readdir(String path,
    Object opts = {}) async;
```

调用参数:
* path: String, 指定查询的目录
* opts: Object, 指定参数

返回结果:
* NArray, 返回目录的文件信息数组

参数 opts 支持的选项如下：

```JavaScript
{
    "recursive": false, // specify whether all subdirectories should be watched or only the current directory
    "withFileTypes": false // specify whether to return DirEntry objects. Default: false
}
```

withFileTypes 为 true 时返回 [DirEntry](../../object/ifs/DirEntry.md) 对象数组，否则返回文件名数组。

--------------------------
### glob
**根据文件名模式，搜索指定目录的文件列表**

```JavaScript
static NArray fs.glob(String pattern,
    Object opts = {}) async;
```

调用参数:
* pattern: String, 指定文件名模式
* opts: Object, 指定参数

返回结果:
* NArray, 返回文件列表

参数 opts 支持的选项如下：

```JavaScript
{
    "cwd": "", // specify a different working directory, default to current directory
    "withFileTypes": false // specify whether to return Dirent objects. Default: false
}
```

模式支持 `*`、`?`、`**` 等通配符，返回匹配文件的绝对路径列表。

--------------------------
**根据一组文件名模式，搜索指定目录的文件列表**

```JavaScript
static NArray fs.glob(String patterns[],
    Object opts = {}) async;
```

调用参数:
* patterns[]: String, 指定一组文件名模式
* opts: Object, 指定参数

返回结果:
* NArray, 返回文件列表

参数 opts 支持的选项如下：

```JavaScript
{
    "cwd": "", // specify a different working directory, default to current directory
    "withFileTypes": false // specify whether to return Dirent objects. Default: false
}
```

多个模式的匹配结果合并返回，重复文件只出现一次。

--------------------------
### createReadStream
**创建可读文件流**

```JavaScript
static SeekableStream fs.createReadStream(String fname,
    Object options = {}) async;
```

调用参数:
* fname: String, 指定文件名
* options: Object, 读取选项

返回结果:
* [SeekableStream](../../object/ifs/SeekableStream.md), 返回文件流对象

options 支持的选项如下：

```JavaScript
{
    "flags": "r", // 文件打开方式，缺省为 "r"，只读方式
    "start": 0, // 读取起始位置
    "end": undefined // 读取结束位置（含），缺省为文件末尾
}
```

指定 start 或 end 时，返回的流仅覆盖 [start, end] 区间（含边界）的数据。

--------------------------
### createWriteStream
**打开文件，创建可写流对象**

```JavaScript
static SeekableStream fs.createWriteStream(String fname,
    Object options = {}) async;
```

调用参数:
* fname: String, 指定文件名
* options: Object, 写入选项，支持 flags（默认 'w'）

返回结果:
* [SeekableStream](../../object/ifs/SeekableStream.md), 返回文件流对象

--------------------------
### openFile
**打开文件，用于读取，写入，或者同时读写**

```JavaScript
static SeekableStream fs.openFile(String fname,
    String flags = "r") async;
```

调用参数:
* fname: String, 指定文件名
* flags: String, 指定文件打开方式，缺省为 "r"，只读方式

返回结果:
* [SeekableStream](../../object/ifs/SeekableStream.md), 返回打开的文件对象

参数 flags 支持的方式如下：
- 'r' 只读方式，文件不存在则抛出错误。
- 'r+' 读写方式，文件不存在则抛出错误。
- 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
- 'w+' 读写方式，文件不存在则自动创建。
- 'a' 只写添加方式，文件不存在则自动创建。
- 'a+' 读写添加方式，文件不存在则自动创建。

返回的文件流支持 seek、tell、rewind 等定位操作。

--------------------------
**打开文件，用于读取，写入，或者同时读写，使用 [fs.constants](fs.md#constants) 整数 flags**

```JavaScript
static SeekableStream fs.openFile(String fname,
    Integer flags) async;
```

调用参数:
* fname: String, 指定文件名
* flags: Integer, 整数 flags，[fs.constants](fs.md#constants) 值的组合（如 [fs.constants](fs.md#constants).O_WRONLY | [fs.constants](fs.md#constants).O_CREAT）

返回结果:
* [SeekableStream](../../object/ifs/SeekableStream.md), 返回打开的文件对象

--------------------------
### open
**打开文件描述符**

```JavaScript
static FileHandle fs.open(String fname,
    String flags = "r",
    Integer mode = 0666) async;
```

调用参数:
* fname: String, 指定文件名
* flags: String, 指定文件打开方式，缺省为 "r"，只读方式
* mode: Integer, 当创建文件的时候，指定文件的模式，默认 0666

返回结果:
* [FileHandle](../../object/ifs/FileHandle.md), 返回打开的文件描述符

参数 flags 支持的方式如下：
- 'r' 只读方式，文件不存在则抛出错误。
- 'r+' 读写方式，文件不存在则抛出错误。
- 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
- 'w+' 读写方式，文件不存在则自动创建。
- 'a' 只写添加方式，文件不存在则自动创建。
- 'a+' 读写添加方式，文件不存在则自动创建。

返回的 [FileHandle](../../object/ifs/FileHandle.md) 对象可配合 [fs.read](fs.md#read)、[fs.write](fs.md#write)、[fs.fstat](fs.md#fstat) 等描述符函数使用。

--------------------------
**打开文件描述符，使用 [fs.constants](fs.md#constants) 整数 flags**

```JavaScript
static FileHandle fs.open(String fname,
    Integer flags,
    Integer mode = 0666) async;
```

调用参数:
* fname: String, 指定文件名
* flags: Integer, 整数 flags，[fs.constants](fs.md#constants) 值的组合（如 [fs.constants](fs.md#constants).O_WRONLY | [fs.constants](fs.md#constants).O_CREAT）
* mode: Integer, 当创建文件的时候，指定文件的模式，默认 0666

返回结果:
* [FileHandle](../../object/ifs/FileHandle.md), 返回打开的文件描述符

--------------------------
### close
**关闭文件描述符**

```JavaScript
static fs.close(FileHandle fd) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象

--------------------------
### openTextStream
**打开文本文件，用于读取，写入，或者同时读写**

```JavaScript
static BufferedStream fs.openTextStream(String fname,
    String flags = "r") async;
```

调用参数:
* fname: String, 指定文件名
* flags: String, 指定文件打开方式，缺省为 "r"，只读方式

返回结果:
* [BufferedStream](../../object/ifs/BufferedStream.md), 返回打开的文件对象

参数 flags 支持的方式如下：
- 'r' 只读方式，文件不存在则抛出错误。
- 'r+' 读写方式，文件不存在则抛出错误。
- 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
- 'w+' 读写方式，文件不存在则自动创建。
- 'a' 只写添加方式，文件不存在则自动创建。
- 'a+' 读写添加方式，文件不存在则自动创建。

返回的 [BufferedStream](../../object/ifs/BufferedStream.md) 以行为单位读写文本，可通过 EOL 属性设置行结尾标识。

--------------------------
### readTextFile
**打开文本文件，并读取内容**

```JavaScript
static String fs.readTextFile(String fname) async;
```

调用参数:
* fname: String, 指定文件名

返回结果:
* String, 返回文件文本内容

文件内容按 utf-8 解码返回。

--------------------------
### readFile
**打开文件，并读取内容**

```JavaScript
static Variant fs.readFile(String fname,
    String encoding = "") async;
```

调用参数:
* fname: String, 指定文件名
* encoding: String, 指定解码方式，缺省不解码

返回结果:
* Variant, 返回文件文本内容

[encoding](encoding.md) 缺省为空，返回 [Buffer](../../object/ifs/Buffer.md) 对象；指定编码后返回解码后的字符串。

--------------------------
**打开文件，并读取内容**

```JavaScript
static Variant fs.readFile(String fname,
    Object options) async;
```

调用参数:
* fname: String, 指定文件名
* options: Object, 指定读取选项

返回结果:
* Variant, 返回文件文本内容

options 支持的选项如下：

```JavaScript
{
    "encoding": "utf8" // specify the encoding, default is utf8.
}
```

--------------------------
### readLines
**打开文件，以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:"\n"；windows:"\r\n"**

```JavaScript
static Array fs.readLines(String fname,
    Integer maxlines = -1);
```

调用参数:
* fname: String, 指定文件名
* maxlines: Integer, 指定此次读取的最大行数，缺省读取全部文本行

返回结果:
* Array, 返回读取的文本行数组，若文件为空或无可读数据，返回空数组

--------------------------
### write
**根据文件描述符，向文件写入内容**

```JavaScript
static Integer fs.write(FileHandle fd,
    Buffer buffer,
    Integer offset = 0,
    Integer length = -1,
    Integer position = -1) async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* buffer: [Buffer](../../object/ifs/Buffer.md), 待写入的 [Buffer](../../object/ifs/Buffer.md) 对象
* offset: Integer, [Buffer](../../object/ifs/Buffer.md) 数据读取偏移量， 默认为 0
* length: Integer, 文件写入字节数，默认为 -1
* position: Integer, 文件写入取位置，默认为当前文件位置

返回结果:
* Integer, 实际写入的字节数

length 缺省为 -1，表示写入 buffer 从 offset 起的全部剩余数据。position 缺省为 -1，表示从当前文件位置写入。

--------------------------
**根据文件描述符，向文件写入内容**

```JavaScript
static Integer fs.write(FileHandle fd,
    String string,
    Integer position = -1,
    String encoding = "utf8") async;
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件描述符对象
* string: String, 待写入的字符串
* position: Integer, 文件写入取位置，默认为当前文件位置
* encoding: String, 指定解码方式，缺省解码 utf8

返回结果:
* Integer, 实际写入的字节数

position 缺省为 -1，表示从当前文件位置写入。字符串按 [encoding](encoding.md) 编码后写入。

--------------------------
### writeTextFile
**创建文本文件，并写入内容**

```JavaScript
static Integer fs.writeTextFile(String fname,
    String txt) async;
```

调用参数:
* fname: String, 指定文件名
* txt: String, 指定要写入的字符串

返回结果:
* Integer, 实际写入的字节数

文件以覆盖方式打开，已存在的内容将被清空。

--------------------------
### writeFile
**创建二进制文件，并写入内容**

```JavaScript
static Integer fs.writeFile(String fname,
    Buffer data,
    String opt = "binary") async;
```

调用参数:
* fname: String, 指定文件名
* data: [Buffer](../../object/ifs/Buffer.md), 指定要写入的二进制数据
* opt: String, 指定写入选项，将被忽略

返回结果:
* Integer, 实际写入的字节数

opt 参数被忽略，文件以覆盖方式打开。

--------------------------
**创建二进制文件，并写入内容**

```JavaScript
static Integer fs.writeFile(String fname,
    Buffer data,
    Object options) async;
```

调用参数:
* fname: String, 指定文件名
* data: [Buffer](../../object/ifs/Buffer.md), 指定要写入的二进制数据
* options: Object, 指定写入选项，将被忽略

返回结果:
* Integer, 实际写入的字节数

options 参数被忽略，文件以覆盖方式打开。

--------------------------
**创建文件，并写入内容**

```JavaScript
static Integer fs.writeFile(String fname,
    String data,
    String opt = "utf8") async;
```

调用参数:
* fname: String, 指定文件名
* data: String, 指定要写入的数据
* opt: String, 指定写入选项

返回结果:
* Integer, 实际写入的字节数

opt 指定写入文本的编码，缺省为 utf8。

--------------------------
**创建文件，并写入内容**

```JavaScript
static Integer fs.writeFile(String fname,
    String data,
    Object options) async;
```

调用参数:
* fname: String, 指定文件名
* data: String, 指定要写入的数据
* options: Object, 指定写入选项

返回结果:
* Integer, 实际写入的字节数

options 支持的选项如下：

```JavaScript
{
    "encoding": "utf8" // specify the encoding, default is utf8.
}
```

--------------------------
### appendFile
**创建二进制文件，并以追加方式写入内容**

```JavaScript
static Integer fs.appendFile(String fname,
    Buffer data) async;
```

调用参数:
* fname: String, 指定文件名
* data: [Buffer](../../object/ifs/Buffer.md), 指定要写入的二进制数据

返回结果:
* Integer, 实际写入的字节数

文件不存在时自动创建。

--------------------------
### setZipFS
**设置 [zip](zip.md) 虚拟文件映射**

```JavaScript
static fs.setZipFS(String fname,
    Buffer data);
```

调用参数:
* fname: String, 指定映射路径
* data: [Buffer](../../object/ifs/Buffer.md), 指定映射的 [zip](zip.md) 文件数据

将 [zip](zip.md) 文件数据映射到指定路径，之后对该路径的文件访问均从映射的 [zip](zip.md) 中读取。

--------------------------
### clearZipFS
**清除 [zip](zip.md) 虚拟文件映射**

```JavaScript
static fs.clearZipFS(String fname = "");
```

调用参数:
* fname: String, 指定映射路径，缺省清除全部缓存

--------------------------
### watch
**观察一个文件, 返回对应的 watcher 对象**

```JavaScript
static FSWatcher fs.watch(String fname);
```

调用参数:
* fname: String, 指定要观察的文件对象

返回结果:
* [FSWatcher](../../object/ifs/FSWatcher.md), [FSWatcher](../../object/ifs/FSWatcher.md) 对象

--------------------------
**观察一个文件, 返回对应的 watcher 对象**

```JavaScript
static FSWatcher fs.watch(String fname,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* callback: Function, `(evtType: 'change' | 'rename', filename: string) => any` 当文件对象发生变化时的处理回调

返回结果:
* [FSWatcher](../../object/ifs/FSWatcher.md), [FSWatcher](../../object/ifs/FSWatcher.md) 对象

--------------------------
**观察一个文件, 返回对应的 watcher 对象**

```JavaScript
static FSWatcher fs.watch(String fname,
    Object options);
```

调用参数:
* fname: String, 指定要观察的文件对象
* options: Object, 观察选项

返回结果:
* [FSWatcher](../../object/ifs/FSWatcher.md), [FSWatcher](../../object/ifs/FSWatcher.md) 对象

options 支持的选项如下：

```JavaScript
{
    "persistent": true, // specify whether the process should continue to run as long as files are being watched
    "recursive": false, // specify whether all subdirectories should be watched or only the current directory
    "encoding": "utf8", // specify the encoding, default is utf8.
}
```

--------------------------
**观察一个文件, 返回对应的 watcher 对象**

```JavaScript
static FSWatcher fs.watch(String fname,
    Object options,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* options: Object, 观察选项
* callback: Function, `(evtType: 'change' | 'rename', filename: string) => any` 当文件对象发生变化时的处理回调

返回结果:
* [FSWatcher](../../object/ifs/FSWatcher.md), [FSWatcher](../../object/ifs/FSWatcher.md) 对象

options 支持的选项如下：

```JavaScript
{
    "persistent": true, // specify whether the process should continue to run as long as files are being watched
    "recursive": false, // specify whether all subdirectories should be watched or only the current directory
    "encoding": "utf8", // specify the encoding, default is utf8.
}
```

--------------------------
### watchFile
**观察一个文件, 返回对应的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象**

```JavaScript
static StatsWatcher fs.watchFile(String fname,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* callback: Function, `(curStats: Stats, prevStats: Stats) => any` 当文件对象的 stats 发生变化时的处理回调

返回结果:
* [StatsWatcher](../../object/ifs/StatsWatcher.md), [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象

周期性地检查文件状态，状态发生变化时调用回调，回调参数为变化前后的 [Stat](../../object/ifs/Stat.md) 对象。

--------------------------
**观察一个文件, 返回对应的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象**

```JavaScript
static StatsWatcher fs.watchFile(String fname,
    Object options,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* options: Object, 观察选项
* callback: Function, `(curStats: Stats, prevStats: Stats) => any` 当文件对象的 stats 发生变化时的处理回调

返回结果:
* [StatsWatcher](../../object/ifs/StatsWatcher.md), [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象

options 支持的选项如下：

```JavaScript
{
    "persistent": true, // specify whether the process should continue to run as long as files are being watched
    "bigint": false, // specify whether the numeric values in the returned Stat objects should be bigint. Default: false
    "interval": 100 // specify the time interval in milliseconds at which the file's stats should be polled. Default: 100
}
```

--------------------------
### unwatchFile
**从观察 fname 的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 中移除所有观察事件的回调**

```JavaScript
static fs.unwatchFile(String fname);
```

调用参数:
* fname: String, 指定要观察的文件对象

没有正在监视该文件时不产生任何影响。

--------------------------
**从观察 fname 的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 的观察事件回调中移除 `callback` 回调**

```JavaScript
static fs.unwatchFile(String fname,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* callback: Function, 要移除的回调

即便 callback 不再 [StatsWatcher](../../object/ifs/StatsWatcher.md) 的观察事件回调中也不会报错。

## 常量
        
### SEEK_SET
**seek 方式常量，移动到绝对位置**

```JavaScript
const fs.SEEK_SET = 0;
```

--------------------------
### SEEK_CUR
**seek 方式常量，移动到当前位置的相对位置**

```JavaScript
const fs.SEEK_CUR = 1;
```

--------------------------
### SEEK_END
**seek 方式常量，移动到文件结尾的相对位置**

```JavaScript
const fs.SEEK_END = 2;
```

