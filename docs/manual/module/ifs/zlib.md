# 模块 zlib
zlib 压缩解压模块

使用方法：
@code
var zlib = require(&#39;zlib&#39;);
@endcode
## 函数
        
### deflate
使用 deflate 算法压缩数据(zlib格式)
```JavaScript
Buffer zlib.deflate(Buffer data,
                Integer level = undefined);
```

** 调用参数: **
* data - 给定要压缩的数据
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

** 返回结果:**
* 返回压缩后的二进制数据

### deflateTo
使用 deflate 算法压缩数据到流对象中(zlib格式)
```JavaScript
zlib.deflateTo(Buffer data,
                Stream stm,
                Integer level = undefined);
```

** 调用参数: **
* data - 给定要压缩的数据
* stm - 指定存储压缩数据的流
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

### deflateTo
使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)
```JavaScript
zlib.deflateTo(Stream src,
                Stream stm,
                Integer level = undefined);
```

** 调用参数: **
* src - 给定要压缩的数据所在的流
* stm - 指定存储压缩数据的流
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

### inflate
解压缩 deflate 算法压缩的数据(zlib格式)
```JavaScript
Buffer zlib.inflate(Buffer data);
```

** 调用参数: **
* data - 给定压缩后的数据

** 返回结果:**
* 返回解压缩后的二进制数据

### inflateTo
解压缩 deflate 算法压缩的数据到流对象中(zlib格式)
```JavaScript
zlib.inflateTo(Buffer data,
                Stream stm);
```

** 调用参数: **
* data - 给定要解压缩的数据
* stm - 指定存储解压缩数据的流

### inflateTo
解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)
```JavaScript
zlib.inflateTo(Stream src,
                Stream stm);
```

** 调用参数: **
* src - 给定要解压缩的数据所在的流
* stm - 指定存储解压缩数据的流

### gzip
使用 gzip 算法压缩数据
```JavaScript
Buffer zlib.gzip(Buffer data);
```

** 调用参数: **
* data - 给定要压缩的数据

** 返回结果:**
* 返回压缩后的二进制数据

### gzipTo
使用 gzip 算法压缩数据到流对象中
```JavaScript
zlib.gzipTo(Buffer data,
                Stream stm);
```

** 调用参数: **
* data - 给定要压缩的数据
* stm - 指定存储压缩数据的流

### gzipTo
使用 gzip 算法压缩源流中的数据到流对象中
```JavaScript
zlib.gzipTo(Stream src,
                Stream stm);
```

** 调用参数: **
* src - 给定要压缩的数据所在的流
* stm - 指定存储压缩数据的流

### gunzip
解压缩 gzip 算法压缩的数据
```JavaScript
Buffer zlib.gunzip(Buffer data);
```

** 调用参数: **
* data - 给定压缩后的数据

** 返回结果:**
* 返回解压缩后的二进制数据

### gunzipTo
解压缩 gzip 算法压缩的数据到流对象中
```JavaScript
zlib.gunzipTo(Buffer data,
                Stream stm);
```

** 调用参数: **
* data - 给定要解压缩的数据
* stm - 指定存储解压缩数据的流

### gunzipTo
解压缩源流中 gzip 算法压缩的数据到流对象中
```JavaScript
zlib.gunzipTo(Stream src,
                Stream stm);
```

** 调用参数: **
* src - 给定要解压缩的数据所在的流
* stm - 指定存储解压缩数据的流

### deflateRaw
使用 deflate 算法压缩数据(deflateRaw)
```JavaScript
Buffer zlib.deflateRaw(Buffer data,
                Integer level = undefined);
```

** 调用参数: **
* data - 给定要压缩的数据
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

** 返回结果:**
* 返回压缩后的二进制数据

### deflateRawTo
使用 deflate 算法压缩数据到流对象中(deflateRaw)
```JavaScript
zlib.deflateRawTo(Buffer data,
                Stream stm,
                Integer level = undefined);
```

** 调用参数: **
* data - 给定要压缩的数据
* stm - 指定存储压缩数据的流
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

### deflateRawTo
使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)
```JavaScript
zlib.deflateRawTo(Stream src,
                Stream stm,
                Integer level = undefined);
```

** 调用参数: **
* src - 给定要压缩的数据所在的流
* stm - 指定存储压缩数据的流
* level - 指定压缩级别，缺省为 DEFAULT_COMPRESSION

### inflateRaw
解压缩 deflate 算法压缩的数据(inflateRaw)
```JavaScript
Buffer zlib.inflateRaw(Buffer data);
```

** 调用参数: **
* data - 给定压缩后的数据

** 返回结果:**
* 返回解压缩后的二进制数据

### inflateRawTo
解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)
```JavaScript
zlib.inflateRawTo(Buffer data,
                Stream stm);
```

** 调用参数: **
* data - 给定要解压缩的数据
* stm - 指定存储解压缩数据的流

### inflateRawTo
解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)
```JavaScript
zlib.inflateRawTo(Stream src,
                Stream stm);
```

** 调用参数: **
* src - 给定要解压缩的数据所在的流
* stm - 指定存储解压缩数据的流

## 常量
        
### NO_COMPRESSION
deflate 压缩级别，设定不压缩
```JavaScript
zlib.NO_COMPRESSION;
```

### BEST_SPEED
deflate 压缩级别，设定最快压缩
```JavaScript
zlib.BEST_SPEED;
```

### BEST_COMPRESSION
deflate 压缩级别，设定最高压缩
```JavaScript
zlib.BEST_COMPRESSION;
```

### DEFAULT_COMPRESSION
deflate 压缩级别，设定缺省设置
```JavaScript
zlib.DEFAULT_COMPRESSION;
```

