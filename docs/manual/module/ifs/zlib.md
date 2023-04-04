# 模块 zlib
zlib 是内置的压缩模块，支持 gzip、deflate、zlib 等多种压缩格式和模式

zlib 主要由以下 3 个函数组成：

- deflate：压缩数据；
- inflate：解压数据；
- gzip：gzip 压缩格式。

在使用 zlib 前，需要先根据需要使用的压缩算法选择其中一种。可以参考 zlib 的常量定义模块 `constants` 中的常量来选择相应的压缩算法。比如，我们使用 deflate 压缩算法进行模块说明：

```JavaScript
const zlib = require('zlib');
const {
    NO_COMPRESSION,
    BEST_SPEED,
    BEST_COMPRESSION,
    DEFAULT_COMPRESSION
} = require('constants'); // 省略引用常量的方法

// 压缩数据
const deflated = zlib.deflate('hello, world', BEST_SPEED);
console.log(deflated.toString());

// 解压数据
const inflated = zlib.inflate(deflated);
console.log(inflated.toString());
```

上面的代码展示了如何压缩和解压数据，先用 `zlib.deflate` 方法压缩 `hello, world` 这个字符串，并传入 `BEST_SPEED` 作为压缩级别选项，然后用 `zlib.inflate` 方法解压缩该数据，输出的结果应该与原始字符串相同。

`zlib.deflate` 和 `zlib.inflate` 都支持定义压缩级别，压缩级别是一个数字，取值范围为 `[NO_COMPRESSION, BEST_SPEED, DEFAULT_COMPRESSION, BEST_COMPRESSION]`，默认值为 `DEFAULT_COMPRESSION`。关于这 4 种压缩级别的含义，可以参考下面的 table：

| Compression Level | Meaning                                                                      |
| ----------------- | ---------------------------------------------------------------------------- |
| [zlib.NO_COMPRESSION](zlib.md#NO_COMPRESSION) | 不压缩数据（含有压缩头完成的支持）                                    |
| [zlib.BEST_SPEED](zlib.md#BEST_SPEED)     | 最快的压缩速度；但是压缩比也相应的差一些                           |
| [zlib.DEFAULT_COMPRESSION](zlib.md#DEFAULT_COMPRESSION) | 根据压缩算法的默认值，通常情况下比 BEST_SPEED 的压缩速度慢但压缩率更高 |
| [zlib.BEST_COMPRESSION](zlib.md#BEST_COMPRESSION)   | 最高压缩比，但压缩速度也相应较慢。                                   |

在使用 `zlib` 模块时需要注意的是，如果要同时压缩和解压数据，建议先使用 `deflate` 对数据进行压缩之后再使用 `inflate` 对数据进行解压缩，避免出现错误。而对于不同的压缩格式和算法，还有其他的类和方法进行压缩和解压缩，可以参考以下文档进行使用。

## 静态函数
        
### createDeflate
**创建一个 deflate 流对象**

```JavaScript
static Stream zlib.createDeflate(Stream to);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
### createDeflateRaw
**创建一个 deflateRaw 流对象**

```JavaScript
static Stream zlib.createDeflateRaw(Stream to);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
### createGunzip
**创建一个 gunzip 流对象**

```JavaScript
static Stream zlib.createGunzip(Stream to,
    Integer maxSize = -1);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
### createGzip
**创建一个 gzip 流对象**

```JavaScript
static Stream zlib.createGzip(Stream to);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
### createInflate
**创建一个 inflate 流对象**

```JavaScript
static Stream zlib.createInflate(Stream to,
    Integer maxSize = -1);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
### createInflateRaw
**创建一个 inflateRaw 流对象**

```JavaScript
static Stream zlib.createInflateRaw(Stream to,
    Integer maxSize = -1);
```

调用参数:
* to: [Stream](../../object/ifs/Stream.md), 用于存储处理结果的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Stream](../../object/ifs/Stream.md), 返回封装过的流对象

--------------------------
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
static Buffer zlib.inflate(Buffer data,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### inflateTo
**解压缩 deflate 算法压缩的数据到流对象中(zlib格式)**

```JavaScript
static zlib.inflateTo(Buffer data,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

--------------------------
**解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)**

```JavaScript
static zlib.inflateTo(Stream src,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

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
static Buffer zlib.gunzip(Buffer data,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### gunzipTo
**解压缩 gzip 算法压缩的数据到流对象中**

```JavaScript
static zlib.gunzipTo(Buffer data,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

--------------------------
**解压缩源流中 gzip 算法压缩的数据到流对象中**

```JavaScript
static zlib.gunzipTo(Stream src,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

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
static Buffer zlib.inflateRaw(Buffer data,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定压缩后的数据
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解压缩后的二进制数据

--------------------------
### inflateRawTo
**解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)**

```JavaScript
static zlib.inflateRawTo(Buffer data,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 给定要解压缩的数据
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

--------------------------
**解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)**

```JavaScript
static zlib.inflateRawTo(Stream src,
    Stream stm,
    Integer maxSize = -1) async;
```

调用参数:
* src: [Stream](../../object/ifs/Stream.md), 给定要解压缩的数据所在的流
* stm: [Stream](../../object/ifs/Stream.md), 指定存储解压缩数据的流
* maxSize: Integer, 指定解压缩尺寸限制，缺省为 -1，不限制

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

