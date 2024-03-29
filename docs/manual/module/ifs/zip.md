# 模块 zip
zip 模块是一个用于文件压缩和解压缩的模块。它提供了压缩、解压缩、查找和枚举 zip 文件中的文件列表等操作

通过 zip 模块，我们可以将多个文件打包成一个 zip 文件，也可以对 zip 文件进行解压缩以恢复原始文件。

下面是一些示例：

1.压缩文件：

```JavaScript
var zip = require('zip');
var zipfile = zip.open('/path/to/dest.zip', 'w');

zipfile.write('/path/to/src1', 'src1');
zipfile.write('/path/to/src2', 'src2');
zipfile.close();
```

2.解压缩文件：

```JavaScript
var zip = require('zip');
var zipfile = zip.open('/path/to/src.zip', 'r');

var filenames = zipfile.namelist();
for (var i = 0; i < filenames.length; ++i) {
    var filename = filenames[i];
    var data = zipfile.read(filename);
    console.log(filename + ': ' + data.length + ' bytes');
}
zipfile.close();
```

## 静态函数
        
### isZipFile
**判断文件是否是zip格式**

```JavaScript
static Boolean zip.isZipFile(String filename) async;
```

调用参数:
* filename: String, 文件名

返回结果:
* Boolean, 返回true代表文件是zip文件

--------------------------
### open
**打开一个zip文件**

```JavaScript
static ZipFile zip.open(String path,
    String mod = "r",
    String codec = "utf8") async;
```

调用参数:
* path: String, 文件路径
* mod: String, 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* codec: String, 设置 zip 文件编码方式，缺省为 "utf8"

返回结果:
* [ZipFile](../../object/ifs/ZipFile.md), 返回zip文件对象

--------------------------
**打开一个zip文件**

```JavaScript
static ZipFile zip.open(Buffer data,
    String mod = "r",
    String codec = "utf8") async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), zip文件数据
* mod: String, 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* codec: String, 设置 zip 文件编码方式，缺省为 "utf8"

返回结果:
* [ZipFile](../../object/ifs/ZipFile.md), 返回zip文件对象

--------------------------
**打开一个zip文件**

```JavaScript
static ZipFile zip.open(SeekableStream strm,
    String mod = "r",
    String codec = "utf8") async;
```

调用参数:
* strm: [SeekableStream](../../object/ifs/SeekableStream.md), zip文件流
* mod: String, 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* codec: String, 设置 zip 文件编码方式，缺省为 "utf8"

返回结果:
* [ZipFile](../../object/ifs/ZipFile.md), 返回zip文件对象

