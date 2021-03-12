# 模块 path_posix
文件路径处理模块

引用方法：

```JavaScript
var path = require('path').posix;
```

## 静态函数
        
### normalize
**标准化路径，处理路径中父目录等信息**

```JavaScript
static String path_posix.normalize(String path);
```

调用参数:
* path: String, 给定的未处理的路径

返回结果:
* String, 返回经过处理的路径

--------------------------
### basename
**查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名**

```JavaScript
static String path_posix.basename(String path,
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
static String path_posix.extname(String path);
```

调用参数:
* path: String, 给定查询的路径

返回结果:
* String, 返回得到的扩展名

--------------------------
### format
**尝试将一个对象格式化为路径**

```JavaScript
static String path_posix.format(Object pathObject);
```

调用参数:
* pathObject: Object, 指定参数

返回结果:
* String, 返回格式化后的路径

pathObject 支持的字段如下：

```JavaScript
{
    "dir": "", // 指定路径的目录
    "root": "", // 指定路径的根目录
    "base": "", // 指定路径的文件名，等同于 ${name}.${ext}
    "name": "", // 指定路径的主文件名
    "ext": "", // 指定路径的扩展名
}
```

--------------------------
### parse
**解析路径为路径对象**

```JavaScript
static NObject path_posix.parse(String path);
```

调用参数:
* path: String, 路径

返回结果:
* NObject, 返回pathObject 对象

--------------------------
### dirname
**查询路径中的目录路径**

```JavaScript
static String path_posix.dirname(String path);
```

调用参数:
* path: String, 给定查询的路径

返回结果:
* String, 返回得到的目录的路径

--------------------------
### fullpath
**转换给定路径为全路径**

```JavaScript
static String path_posix.fullpath(String path);
```

调用参数:
* path: String, 给定转换的路径

返回结果:
* String, 返回转换的全路径

--------------------------
### isAbsolute
**识别给定的路径是否是绝对路径**

```JavaScript
static Boolean path_posix.isAbsolute(String path);
```

调用参数:
* path: String, 给定需要识别的路径

返回结果:
* Boolean, 是绝对路径则返回 true

--------------------------
### join
**合并一系列路径成为一个单一路径**

```JavaScript
static String path_posix.join(...ps);
```

调用参数:
* ps: ..., 一个或多个相关的路径

返回结果:
* String, 返回得到的新路径

--------------------------
### resolve
**合并一系列路径成为一个绝对路径**

```JavaScript
static String path_posix.resolve(...ps);
```

调用参数:
* ps: ..., 一个或多个相关的路径

返回结果:
* String, 返回得到的新路径

--------------------------
### relative
**求 _from 到 to 的相对路径**

```JavaScript
static String path_posix.relative(String _from,
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
static Value path_posix.toNamespacedPath(Value path = undefined);
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
static readonly String path_posix.sep;
```

--------------------------
### delimiter
**String, 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回  ';'**

```JavaScript
static readonly String path_posix.delimiter;
```

--------------------------
### posix
**Object, posix 实现，参见 path_posix**

```JavaScript
static readonly Object path_posix.posix;
```

--------------------------
### win32
**Object, windows 实现，参见 [path_win32](path_win32.md)**

```JavaScript
static readonly Object path_posix.win32;
```

