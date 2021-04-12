# 对象 Stat
文件的基础信息对象

Stat 对象通过 [fs.stat](../../module/ifs/fs.md#stat), [File.stat](File.md#stat), [fs.readdir](../../module/ifs/fs.md#readdir) 查询，不可独立创建

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Stat|name;dev;ino;mode;nlink;uid;gid;rdev;size;blksize;blocks;mtime;mtimeMs;atime;atimeMs;ctime;ctimeMs;birthtime;birthtimeMs|isWritable();isReadable();isExecutable();isHidden();isBlockDevice();isCharacterDevice();isDirectory();isFIFO();isFile();isSymbolicLink();isMemory();isSocket()]

[object] <:- [Stat]
```

## 成员属性
        
### name
**String, 文件名称**

```JavaScript
readonly String Stat.name;
```

--------------------------
### dev
**Integer, 包含该文件的设备 ID**

```JavaScript
readonly Integer Stat.dev;
```

--------------------------
### ino
**Integer, 文件中的 Inode 数量**

```JavaScript
readonly Integer Stat.ino;
```

--------------------------
### mode
**Integer, 文件权限，Windows 不支持此属性**

```JavaScript
readonly Integer Stat.mode;
```

--------------------------
### nlink
**Integer, 与此文件相关联的硬链接数量**

```JavaScript
readonly Integer Stat.nlink;
```

--------------------------
### uid
**Integer, 文件拥有者的id**

```JavaScript
readonly Integer Stat.uid;
```

--------------------------
### gid
**Integer, 文件所属的组id**

```JavaScript
readonly Integer Stat.gid;
```

--------------------------
### rdev
**Integer, 对于特殊类型的文件, 包含该文件的设备 ID**

```JavaScript
readonly Integer Stat.rdev;
```

--------------------------
### size
**Number, 文件尺寸**

```JavaScript
readonly Number Stat.size;
```

--------------------------
### blksize
**Integer, 在 I/O 操作中文件系统区块大小**

```JavaScript
readonly Integer Stat.blksize;
```

--------------------------
### blocks
**Integer, 分配给该文件的区块数量**

```JavaScript
readonly Integer Stat.blocks;
```

--------------------------
### mtime
**Date, 文件最后修改时间**

```JavaScript
readonly Date Stat.mtime;
```

--------------------------
### mtimeMs
**Number, 文件最后修改时间(ms)**

```JavaScript
readonly Number Stat.mtimeMs;
```

--------------------------
### atime
**Date, 文件最后访问时间**

```JavaScript
readonly Date Stat.atime;
```

--------------------------
### atimeMs
**Number, 文件最后访问时间(ms)**

```JavaScript
readonly Number Stat.atimeMs;
```

--------------------------
### ctime
**Date, 文件创建时间**

```JavaScript
readonly Date Stat.ctime;
```

--------------------------
### ctimeMs
**Number, 文件创建时间(ms)**

```JavaScript
readonly Number Stat.ctimeMs;
```

--------------------------
### birthtime
**Date, 文件产生时间**

```JavaScript
readonly Date Stat.birthtime;
```

--------------------------
### birthtimeMs
**Number, 文件产生时间(ms)**

```JavaScript
readonly Number Stat.birthtimeMs;
```

## 成员函数
        
### isWritable
**查询文件是否有写入权限**

```JavaScript
Boolean Stat.isWritable();
```

返回结果:
* Boolean, 为 true 则有写入权限

--------------------------
### isReadable
**查询文件是否有读权限**

```JavaScript
Boolean Stat.isReadable();
```

返回结果:
* Boolean, 为 true 则有读权限

--------------------------
### isExecutable
**查询文件是否有执行权限**

```JavaScript
Boolean Stat.isExecutable();
```

返回结果:
* Boolean, 为 true 则有执行权限

--------------------------
### isHidden
**查询文件是否隐藏**

```JavaScript
Boolean Stat.isHidden();
```

返回结果:
* Boolean, 为 true 则隐藏

--------------------------
### isBlockDevice
**查询 Stat 是否描述了一个 block device**

```JavaScript
Boolean Stat.isBlockDevice();
```

返回结果:
* Boolean, 为 true 表示描述了一个 block device

--------------------------
### isCharacterDevice
**查询 Stat 是否描述了一个 character device**

```JavaScript
Boolean Stat.isCharacterDevice();
```

返回结果:
* Boolean, 为 true 表示描述了一个 character device

--------------------------
### isDirectory
**查询文件是否是目录**

```JavaScript
Boolean Stat.isDirectory();
```

返回结果:
* Boolean, 为 true 则是目录

--------------------------
### isFIFO
**查询 Stat 是否描述了一个 FIFO 管道**

```JavaScript
Boolean Stat.isFIFO();
```

返回结果:
* Boolean, 为 true 表示描述了一个 FIFO 管道

--------------------------
### isFile
**查询文件是否是文件**

```JavaScript
Boolean Stat.isFile();
```

返回结果:
* Boolean, 为 true 则是文件

--------------------------
### isSymbolicLink
**查询文件是否是符号链接**

```JavaScript
Boolean Stat.isSymbolicLink();
```

返回结果:
* Boolean, 为 true 则是符号链接

--------------------------
### isMemory
**查询文件是否是内存文件**

```JavaScript
Boolean Stat.isMemory();
```

返回结果:
* Boolean, 为 true 则是内存文件

--------------------------
### isSocket
**查询文件是否是 [Socket](Socket.md)**

```JavaScript
Boolean Stat.isSocket();
```

返回结果:
* Boolean, 为 true 则是 [Socket](Socket.md)

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Stat.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Stat.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

