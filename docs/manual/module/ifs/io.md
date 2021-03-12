# 模块 io
输入输出处理模块

使用方法：

```JavaScript
var io = require('io');
```

## 对象
        
### MemoryStream
**创建一个内存流对象，参见 [MemoryStream](../../object/ifs/MemoryStream.md)**

```JavaScript
MemoryStream io.MemoryStream;
```

--------------------------
### BufferedStream
**创建一个缓存流读取对象，参见 [BufferedStream](../../object/ifs/BufferedStream.md)**

```JavaScript
BufferedStream io.BufferedStream;
```

--------------------------
### RangeStream
**创建一个 Range 查询流读取对象，参见 [RangeStream](../../object/ifs/RangeStream.md)**

```JavaScript
RangeStream io.RangeStream;
```

## 静态函数
        
### copyStream
**复制流数据到目标流中**

```JavaScript
static Long io.copyStream(Stream from,
    Stream to,
    Long bytes = -1) async;
```

调用参数:
* from: [Stream](../../object/ifs/Stream.md), 源流对象
* to: [Stream](../../object/ifs/Stream.md), 目标流对象
* bytes: Long, 复制的字节数

返回结果:
* Long, 返回复制的字节数

--------------------------
### bridge
**双向复制流数据，直到流中无数据，或者流被关闭**

```JavaScript
static io.bridge(Stream stm1,
    Stream stm2) async;
```

调用参数:
* stm1: [Stream](../../object/ifs/Stream.md), 流对象一
* stm2: [Stream](../../object/ifs/Stream.md), 流对象二

