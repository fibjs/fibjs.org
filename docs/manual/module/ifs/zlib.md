# 模块 zlib
zlib 压缩解压模块

使用方法：

```JavaScript
var zlib = require('zlib');
```

## 静态函数
        
### deflate
**使用 deflate 算法压缩数据(zlib格式)**

```JavaScript
static Buffer zlib.deflate(Buffer data,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回压缩后的二进制数据

--------------------------
### deflateTo
**使用 deflate 算法压缩数据到流对象中(zlib格式)**

```JavaScript
static zlib.deflateTo(Buffer data,
    Stream stm,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

--------------------------
**使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)**

```JavaScript
static zlib.deflateTo(Stream src,
    Stream stm,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

--------------------------
### inflate
**解压缩 deflate 算法压缩的数据(zlib格式)**

```JavaScript
static Buffer zlib.inflate(Buffer data) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### inflateTo
**解压缩 deflate 算法压缩的数据到流对象中(zlib格式)**

```JavaScript
static zlib.inflateTo(Buffer data,
    Stream stm) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

--------------------------
**解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)**

```JavaScript
static zlib.inflateTo(Stream src,
    Stream stm) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

--------------------------
### gzip
**使用 gzip 算法压缩数据**

```JavaScript
static Buffer zlib.gzip(Buffer data) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回压缩后的二进制数据

--------------------------
### gzipTo
**使用 gzip 算法压缩数据到流对象中**

```JavaScript
static zlib.gzipTo(Buffer data,
    Stream stm) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流

--------------------------
**使用 gzip 算法压缩源流中的数据到流对象中**

```JavaScript
static zlib.gzipTo(Stream src,
    Stream stm) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流

--------------------------
### gunzip
**解压缩 gzip 算法压缩的数据**

```JavaScript
static Buffer zlib.gunzip(Buffer data) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### gunzipTo
**解压缩 gzip 算法压缩的数据到流对象中**

```JavaScript
static zlib.gunzipTo(Buffer data,
    Stream stm) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

--------------------------
**解压缩源流中 gzip 算法压缩的数据到流对象中**

```JavaScript
static zlib.gunzipTo(Stream src,
    Stream stm) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

--------------------------
### deflateRaw
**使用 deflate 算法压缩数据(deflateRaw)**

```JavaScript
static Buffer zlib.deflateRaw(Buffer data,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回压缩后的二进制数据

--------------------------
### deflateRawTo
**使用 deflate 算法压缩数据到流对象中(deflateRaw)**

```JavaScript
static zlib.deflateRawTo(Buffer data,
    Stream stm,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

--------------------------
**使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)**

```JavaScript
static zlib.deflateRawTo(Stream src,
    Stream stm,
    Integer level = DEFAULT_COMPRESSION) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储压缩数据的流
* level: Integer, 指定压缩级别，缺省为 DEFAULT_COMPRESSION

--------------------------
### inflateRaw
**解压缩 deflate 算法压缩的数据(inflateRaw)**

```JavaScript
static Buffer zlib.inflateRaw(Buffer data) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### inflateRawTo
**解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)**

```JavaScript
static zlib.inflateRawTo(Buffer data,
    Stream stm) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

--------------------------
**解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)**

```JavaScript
static zlib.inflateRawTo(Stream src,
    Stream stm) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流

## 常量
        
### NO_COMPRESSION
**deflate 压缩级别，设定不压缩**

```JavaScript
const zlib.NO_COMPRESSION = 0;
```

--------------------------
### BEST_SPEED
**deflate 压缩级别，设定最快压缩**

```JavaScript
const zlib.BEST_SPEED = 1;
```

--------------------------
### BEST_COMPRESSION
**deflate 压缩级别，设定最高压缩**

```JavaScript
const zlib.BEST_COMPRESSION = 9;
```

--------------------------
### DEFAULT_COMPRESSION
**deflate 压缩级别，设定缺省设置**

```JavaScript
const zlib.DEFAULT_COMPRESSION = -1;
```

