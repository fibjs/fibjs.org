# 模块 zip
zip 格式文件压缩解压模块

使用方法：
@code
var zip = require(&#39;zip&#39;);
@endcode
## 函数
        
### isZipFile
判断文件是否是zip格式
```JavaScript
Boolean zip.isZipFile(String filename);
```

** 调用参数: **
* filename - 文件名

** 返回结果:**
* 返回true代表文件是zip文件

### open
打开一个zip文件
```JavaScript
ZipFile zip.open(String path,
                String mod = "r",
                Integer compress_type = undefined);
```

** 调用参数: **
* path - 文件路径
* mod - 打开文件模式, &#34;r&#34;代表读取, &#34;w&#34;代表创建, &#34;a&#34;代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

** 返回结果:**
* 返回zip文件对象

### open
打开一个zip文件
```JavaScript
ZipFile zip.open(Buffer data,
                String mod = "r",
                Integer compress_type = undefined);
```

** 调用参数: **
* data - zip文件数据
* mod - 打开文件模式, &#34;r&#34;代表读取, &#34;w&#34;代表创建, &#34;a&#34;代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

** 返回结果:**
* 返回zip文件对象

### open
打开一个zip文件
```JavaScript
ZipFile zip.open(SeekableStream strm,
                String mod = "r",
                Integer compress_type = undefined);
```

** 调用参数: **
* strm - zip文件流
* mod - 打开文件模式, &#34;r&#34;代表读取, &#34;w&#34;代表创建, &#34;a&#34;代表在zip文件后追加
* compress_type - 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。

** 返回结果:**
* 返回zip文件对象

## 常量
        
### ZIP_STORED
压缩类型常量, 不压缩, 仅存储
```JavaScript
zip.ZIP_STORED;
```

### ZIP_DEFLATED
压缩类型常量, 需要依赖zlib库进行压缩
```JavaScript
zip.ZIP_DEFLATED;
```

