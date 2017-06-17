# 模块 io
输入输出处理模块

使用方法：
```JavaScript
var io = require('io');
```
## 对象
        
### MemoryStream
创建一个内存流对象，参见 MemoryStream
```JavaScript
MemoryStream io.MemoryStream;
```

### BufferedStream
创建一个缓存流读取对象，参见 BufferedStream
```JavaScript
BufferedStream io.BufferedStream;
```

## 函数
        
### copyStream
复制流数据到目标流中
```JavaScript
static Long io.copyStream(Stream from,
                Stream to,
                Long bytes = -1) async;
```

调用参数:
* from - 源流对象
* to - 目标流对象
* bytes - 复制的字节数

返回结果:
* 返回复制的字节数

### bridge
双向复制流数据，直到流中无数据，或者流被关闭
```JavaScript
static io.bridge(Stream stm1,
                Stream stm2) async;
```

调用参数:
* stm1 - 流对象一
* stm2 - 流对象二

