# 模块 fs
文件系统处理模块

使用方法：

```JavaScript
var fs = require('fs');
```

一些注意点:

- 运行 `fs.watch(filename)` 会返回一个继承自 [EventEmitter](../../object/ifs/EventEmitter.md) 的 watcher, 它支持 'change', 'changeonly', 'renameonly' 三个事件
- `fs.watchFile(target)` 和 `fs.unwatchFile(target)` 依然可以成对使用
- `fs.watchFile(target)` 会返回一个继承自 [EventEmitter](../../object/ifs/EventEmitter.md) 的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象, 调用 `fs.unwatchFile(target)` 等价于调用 `StatsWatcher.close()`.
- 因为 uv 在 Linux 上的实现, `fs.watch` 的 `recursive` 选项仅在 win32/darwin 被稳定支持. 你依然可以尝试在 Linux 中尝试使用 `fs.watch('/[path](path.md)/to', { recursive: true }, handler)`, 但可能会发现 `handler` 被回调的时机与你预期的有差异

## 对象
        
### constants
**fs模块的常量对象**

```JavaScript
fs_constants fs.constants;
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

--------------------------
### access
**查询用户对指定的文件的权限**

```JavaScript
static fs.access(String path,
    Integer mode = 0) async;
```

调用参数:
* path: String, 指定要查询的路径
* mode: Integer, 指定查询的权限,默认为文件是否存在

--------------------------
### link
**创建硬链接文件, windows 下不支持此方法**

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
    recursive: false, // 指定是否父目录不存在是是否自动创建，默认值: false
    mode: 0777 // 指定文件权限，Windows 忽略此参数，默认值: 0777
}
```

--------------------------
### rmdir
**删除一个目录**

```JavaScript
static fs.rmdir(String path) async;
```

调用参数:
* path: String, 指定要删除的目录名

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
### stat
**查询指定文件的基础信息**

```JavaScript
static Stat fs.stat(String path) async;
```

调用参数:
* path: String, 指定查询的文件

返回结果:
* [Stat](../../object/ifs/Stat.md), 返回文件的基础信息

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
### readlink
**读取指定的软连接文件, windows 下不支持此方法**

```JavaScript
static String fs.readlink(String path) async;
```

调用参数:
* path: String, 指定读取的软连接文件

返回结果:
* String, 返回软连接指向的文件名

--------------------------
### realpath
**返回指定路径的绝对路径，如果指定路径中包含相对路径也会被展开**

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
**修改文件尺寸,如果指定的长度大于源文件大小则用'\0'填充，否则多于的文件内容将丢失**

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
static Integer fs.read(Integer fd,
    Buffer buffer,
    Integer offset = 0,
    Integer length = 0,
    Integer position = -1) async;
```

调用参数:
* fd: Integer, 文件描述符
* buffer: [Buffer](../../object/ifs/Buffer.md), 读取结果写入的 [Buffer](../../object/ifs/Buffer.md) 对象
* offset: Integer, [Buffer](../../object/ifs/Buffer.md) 写入偏移量， 默认为 0
* length: Integer, 文件读取字节数，默认为 0
* position: Integer, 文件读取位置，默认为当前文件位置

返回结果:
* Integer, 实际读取的字节数

--------------------------
### fchmod
**根据文件描述符，改变文件模式。只在 POSIX 系统有效。**

```JavaScript
static fs.fchmod(Integer fd,
    Integer mode) async;
```

调用参数:
* fd: Integer, 文件描述符
* mode: Integer, 文件的模式

--------------------------
### fchown
**根据文件描述符，改变所有者。只在 POSIX 系统有效。**

```JavaScript
static fs.fchown(Integer fd,
    Integer uid,
    Integer gid) async;
```

调用参数:
* fd: Integer, 文件描述符
* uid: Integer, 用户id
* gid: Integer, 组id

--------------------------
### fdatasync
**根据文件描述符，同步数据到磁盘**

```JavaScript
static fs.fdatasync(Integer fd) async;
```

调用参数:
* fd: Integer, 文件描述符

--------------------------
### fsync
**根据文件描述符，同步数据到磁盘**

```JavaScript
static fs.fsync(Integer fd) async;
```

调用参数:
* fd: Integer, 文件描述符

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

--------------------------
**读取指定目录的文件信息**

```JavaScript
static NArray fs.readdir(String path,
    Object opts) async;
```

调用参数:
* path: String, 指定查询的目录
* opts: Object, 指定参数，暂时不支持

返回结果:
* NArray, 返回目录的文件信息数组

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

--------------------------
### open
**打开文件描述符**

```JavaScript
static Integer fs.open(String fname,
    String flags = "r",
    Integer mode = 0666) async;
```

调用参数:
* fname: String, 指定文件名
* flags: String, 指定文件打开方式，缺省为 "r"，只读方式
* mode: Integer, 当创建文件的时候，指定文件的模式，默认 0666

返回结果:
* Integer, 返回打开的文件描述符

参数 flags 支持的方式如下：
- 'r' 只读方式，文件不存在则抛出错误。
- 'r+' 读写方式，文件不存在则抛出错误。
- 'w' 只写方式，文件不存在则自动创建，存在则将被清空。
- 'w+' 读写方式，文件不存在则自动创建。
- 'a' 只写添加方式，文件不存在则自动创建。
- 'a+' 读写添加方式，文件不存在则自动创建。

--------------------------
### close
**关闭文件描述符**

```JavaScript
static fs.close(Integer fd) async;
```

调用参数:
* fd: Integer, 文件描述符

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
    "encoding": "utf8" // 指定解码方式，缺省不解码
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
* Array, 返回读取的文本行数组，若无数据可读，或者连接中断，空数组

--------------------------
### writeTextFile
**创建文本文件，并写入内容**

```JavaScript
static fs.writeTextFile(String fname,
    String txt) async;
```

调用参数:
* fname: String, 指定文件名
* txt: String, 指定要写入的字符串

--------------------------
### writeFile
**创建二进制文件，并写入内容**

```JavaScript
static fs.writeFile(String fname,
    Buffer data) async;
```

调用参数:
* fname: String, 指定文件名
* data: [Buffer](../../object/ifs/Buffer.md), 指定要写入的二进制数据

--------------------------
### appendFile
**创建二进制文件，并写入内容**

```JavaScript
static fs.appendFile(String fname,
    Buffer data) async;
```

调用参数:
* fname: String, 指定文件名
* data: [Buffer](../../object/ifs/Buffer.md), 指定要写入的二进制数据

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
    "persistent": true, // {boolean} default: true 是否只要目标文件还在被观察, 进程就不退出
    "recursive": false, // {boolean} default: false 对于 fname 为文件夹的情况, 是否递归地观察其下所有的子目录
    "encoding": "utf8", // {enum} default: 'utf8' 指定解析传入的 fname 的字符编码
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
    "persistent": true, // {boolean} default: true 是否只要目标文件还在被观察, 进程就不退出
    "recursive": false, // {boolean} default: false 对于 fname 为文件夹的情况, 是否递归地观察其下所有的子目录
    "encoding": "utf8", // {enum} default: 'utf8' 指定解析传入的 fname 的字符编码
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
    "persistent": true, // {boolean} default: true 是否只要目标文件还在被观察, 进程就不退出
    "recursive": false, // {boolean} default: false 对于 fname 为文件夹的情况, 是否递归地观察其下所有的子目录
    "encoding": "utf8", // {enum} default: 'utf8' 指定解析传入的 fname 的字符编码
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

返回结果:
* [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象

--------------------------
**从观察 fname 的 [StatsWatcher](../../object/ifs/StatsWatcher.md) 的观察事件回调中移除 `callback` 回调**

```JavaScript
static fs.unwatchFile(String fname,
    Function callback);
```

调用参数:
* fname: String, 指定要观察的文件对象
* callback: Function, 要移除的回调

返回结果:
* [StatsWatcher](../../object/ifs/StatsWatcher.md) 对象

即便 callback 不再 [StatsWatcher](../../object/ifs/StatsWatcher.md) 的观察事件回调中也不会报错

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

