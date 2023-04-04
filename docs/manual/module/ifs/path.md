# 模块 path
path 模块是一个核心模块，它提供了一些工具函数来处理文件和目录的路径。它不会检查路径是否存在或是否是有效路径，而是只提供了处理路径的方法

path 模块提供的方法很多，最常用的是：
- join()：将给定的路径片段连接在一起，并处理成标准的路径格式。
- resolve()：将路径或路径片段的序列解析为一个绝对路径。
- basename()：返回路径中路径的最后一部分。
- dirname()：返回指定路径的目录名。
- extname()：返回路径中文件的扩展名。

以下是这些方法的示例代码：

```JavaScript
const path = require('path');

// 连接两个路径片段，并处理成标准的路径格式
console.log(path.join('/usr', 'local', 'bin')); // 输出：/usr/local/bin

// 将路径 /foo/bar 和 baz 解析为 /foo/bar/baz
console.log(path.resolve('/foo/bar', './baz')); // 输出：/foo/bar/baz

// 返回路径 /foo/bar/baz 的最后一部分 baz
console.log(path.basename('/foo/bar/baz')); // 输出：baz

// 返回路径 /foo/bar/baz 的目录名 /foo/bar
console.log(path.dirname('/foo/bar/baz')); // 输出：/foo/bar

// 返回路径 /foo/bar/baz 中的扩展名 .txt
console.log(path.extname('/foo/bar/baz.txt')); // 输出：.txt
```

除了上述方法，path 模块还提供了很多其他的方法，如 normalize()、delimiter、posix、win32 等等，用于处理路径的规范化、路径分隔符、路径格式的处理等等。这些方法在实际开发中也经常用到。

path 模块为我们处理路径提供了很多方便的工具函数，可以使我们更加方便地处理文件和目录路径，是开发中不可或缺的工具之一。

## 静态函数
        
### normalize
**标准化路径，处理路径中父目录等信息**

```JavaScript
static String path.normalize(String path);
```

调用参数:
* path: String, 给定的未处理的路径

返回结果:
* String, 返回经过处理的路径

--------------------------
### basename
**查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名**

```JavaScript
static String path.basename(String path,
    String ext = "");
```

调用参数:
* path: String, 给定查询的路径
* ext: String, 指定扩展名，若文件名中有符合条件的扩展名，将自动取消

返回结果:
* String, 返回文件名称

--------------------------
### extname
**查询路径中的文件扩展名**

```JavaScript
static String path.extname(String path);
```

调用参数:
* path: String, 给定查询的路径

返回结果:
* String, 返回得到的扩展名

--------------------------
### format
**尝试将一个对象格式化为路径**

```JavaScript
static String path.format(Object pathObject);
```

调用参数:
* pathObject: Object, 对象

返回结果:
* String, 返回格式化后的路径

pathObject 支持的参数如下：

```JavaScript
{
    "root": "/",
    "dir": "/a/b",
    "base": "c.ext",
    "ext": ".ext",
    "name": "c"
}
```

--------------------------
### parse
**解析路径为路径对象**

```JavaScript
static NObject path.parse(String path);
```

调用参数:
* path: String, 路径

返回结果:
* NObject, 返回 pathObject 对象

--------------------------
### dirname
**查询路径中的目录路径**

```JavaScript
static String path.dirname(String path);
```

调用参数:
* path: String, 给定查询的路径

返回结果:
* String, 返回得到的目录的路径

--------------------------
### fullpath
**转换给定路径为全路径**

```JavaScript
static String path.fullpath(String path);
```

调用参数:
* path: String, 给定转换的路径

返回结果:
* String, 返回转换的全路径

--------------------------
### isAbsolute
**识别给定的路径是否是绝对路径**

```JavaScript
static Boolean path.isAbsolute(String path);
```

调用参数:
* path: String, 给定需要识别的路径

返回结果:
* Boolean, 是绝对路径则返回 true

--------------------------
### join
**合并一系列路径成为一个单一路径**

```JavaScript
static String path.join(...ps);
```

调用参数:
* ps: ..., 一个或多个相关的路径

返回结果:
* String, 返回得到的新路径

--------------------------
### resolve
**合并一系列路径成为一个绝对路径**

```JavaScript
static String path.resolve(...ps);
```

调用参数:
* ps: ..., 一个或多个相关的路径

返回结果:
* String, 返回得到的新路径

--------------------------
### relative
**求 _from 到 to 的相对路径**

```JavaScript
static String path.relative(String _from,
    String to);
```

调用参数:
* _from: String, 源路径
* to: String, 目标路径

返回结果:
* String, 返回得到的相对路径

--------------------------
### toNamespacedPath
**转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。**

```JavaScript
static Value path.toNamespacedPath(Value path = undefined);
```

调用参数:
* path: Value, 给定的路径。

返回结果:
* Value, 返回得到的新路径

see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces

## 静态属性
        
### sep
**String, 查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回  '\\'**

```JavaScript
static readonly String path.sep;
```

--------------------------
### delimiter
**String, 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回  ';'**

```JavaScript
static readonly String path.delimiter;
```

--------------------------
### posix
**Object, posix 实现，参见 [path_posix](path_posix.md)**

```JavaScript
static readonly Object path.posix;
```

--------------------------
### win32
**Object, windows 实现，参见 [path_win32](path_win32.md)**

```JavaScript
static readonly Object path.win32;
```

