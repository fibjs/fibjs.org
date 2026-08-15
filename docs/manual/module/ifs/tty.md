# 模块 tty
tty 模块

使用方法：

```JavaScript
const tty = require('tty');
```

## 对象
        
### ReadStream
**TTY 输入流对象，参见 [TTYInputStream](../../object/ifs/TTYInputStream.md)**

```JavaScript
TTYInputStream tty.ReadStream;
```

--------------------------
### WriteStream
**TTY 输出流对象，参见 [TTYOutputStream](../../object/ifs/TTYOutputStream.md)**

```JavaScript
TTYOutputStream tty.WriteStream;
```

## 静态函数
        
### isatty
**查询是否是命令交互窗口**

```JavaScript
static Boolean tty.isatty(Integer fd);
```

调用参数:
* fd: Integer, 文件描述符

返回结果:
* Boolean, 如果文件描述符同一个终端窗口关联则返回 true ，否则返回 false

--------------------------
**查询是否是命令交互窗口**

```JavaScript
static Boolean tty.isatty(FileHandle fd);
```

调用参数:
* fd: [FileHandle](../../object/ifs/FileHandle.md), 文件句柄对象

返回结果:
* Boolean, 如果文件句柄同一个终端窗口关联则返回 true ，否则返回 false

