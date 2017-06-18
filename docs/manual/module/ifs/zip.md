# 模块 zip
zip 格式文件压缩解压模块

使用方法：
```JavaScript
var zip = require('zip');
```
## 函数
        
### isZipFile
判断文件是否是zip格式
```JavaScript
static Boolean zip.isZipFile(String filename) async;
```

调用参数:
* filename - 文件名

返回结果:
* 返回true代表文件是zip文件

### open
打开一个zip文件
```JavaScript
static ZipFile zip.open(String path,
                String mod = "r",
                Integer compress_type = ZIP_DEFLATED) async;
```

调用参数:
* path - 文件路径
* mod - 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

返回结果:
* 返回zip文件对象

--------------------------
打开一个zip文件
```JavaScript
static ZipFile zip.open(Buffer data,
                String mod = "r",
                Integer compress_type = ZIP_DEFLATED) async;
```

调用参数:
* data - zip文件数据
* mod - 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

返回结果:
* 返回zip文件对象

--------------------------
打开一个zip文件
```JavaScript
static ZipFile zip.open(SeekableStream strm,
                String mod = "r",
                Integer compress_type = ZIP_DEFLATED) async;
```

调用参数:
* strm - zip文件流
* mod - 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

返回结果:
* 返回zip文件对象

## 常量
        
### ZIP_STORED
压缩类型常量, 不压缩, 仅存储
```JavaScript
const zip.ZIP_STORED = 0;
```

### ZIP_DEFLATED
压缩类型常量, 需要依赖[zlib](zlib.md)库进行压缩
```JavaScript
const zip.ZIP_DEFLATED = 1;
```

