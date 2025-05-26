# 模块 zlib_constants
[zlib](zlib.md) 模块常用常量定义模块

引用方法：

```JavaScript
var constants = require('zlib').constants
```

## 常量
        
### Z_NO_FLUSH
**不执行刷新操作**

```JavaScript
const zlib_constants.Z_NO_FLUSH = 0;
```

--------------------------
### Z_PARTIAL_FLUSH
**执行部分刷新操作**

```JavaScript
const zlib_constants.Z_PARTIAL_FLUSH = 1;
```

--------------------------
### Z_SYNC_FLUSH
**同步刷新，等待所有待处理的输出被刷新**

```JavaScript
const zlib_constants.Z_SYNC_FLUSH = 2;
```

--------------------------
### Z_FULL_FLUSH
**完全刷新，等待所有输出被刷新并重置内部状态**

```JavaScript
const zlib_constants.Z_FULL_FLUSH = 3;
```

--------------------------
### Z_FINISH
**完成压缩或解压缩操作**

```JavaScript
const zlib_constants.Z_FINISH = 4;
```

--------------------------
### Z_BLOCK
**在当前块结束时停止压缩**

```JavaScript
const zlib_constants.Z_BLOCK = 5;
```

--------------------------
### Z_OK
**操作成功完成**

```JavaScript
const zlib_constants.Z_OK = 0;
```

--------------------------
### Z_STREAM_END
**压缩或解压缩流结束**

```JavaScript
const zlib_constants.Z_STREAM_END = 1;
```

--------------------------
### Z_NEED_DICT
**需要字典才能继续操作**

```JavaScript
const zlib_constants.Z_NEED_DICT = 2;
```

--------------------------
### Z_ERRNO
**发生系统错误**

```JavaScript
const zlib_constants.Z_ERRNO = -1;
```

--------------------------
### Z_STREAM_ERROR
**流状态不一致或参数无效**

```JavaScript
const zlib_constants.Z_STREAM_ERROR = -2;
```

--------------------------
### Z_DATA_ERROR
**输入数据损坏**

```JavaScript
const zlib_constants.Z_DATA_ERROR = -3;
```

--------------------------
### Z_MEM_ERROR
**内存分配失败**

```JavaScript
const zlib_constants.Z_MEM_ERROR = -4;
```

--------------------------
### Z_BUF_ERROR
**缓冲区错误**

```JavaScript
const zlib_constants.Z_BUF_ERROR = -5;
```

--------------------------
### Z_VERSION_ERROR
**版本不匹配**

```JavaScript
const zlib_constants.Z_VERSION_ERROR = -6;
```

--------------------------
### Z_NO_COMPRESSION
**不压缩**

```JavaScript
const zlib_constants.Z_NO_COMPRESSION = 0;
```

--------------------------
### Z_BEST_SPEED
**最快速度压缩**

```JavaScript
const zlib_constants.Z_BEST_SPEED = 1;
```

--------------------------
### Z_BEST_COMPRESSION
**最高压缩率**

```JavaScript
const zlib_constants.Z_BEST_COMPRESSION = 9;
```

--------------------------
### Z_DEFAULT_COMPRESSION
**默认压缩级别**

```JavaScript
const zlib_constants.Z_DEFAULT_COMPRESSION = -1;
```

--------------------------
### Z_FILTERED
**过滤器压缩策略**

```JavaScript
const zlib_constants.Z_FILTERED = 1;
```

--------------------------
### Z_HUFFMAN_ONLY
**仅使用Huffman编码**

```JavaScript
const zlib_constants.Z_HUFFMAN_ONLY = 2;
```

--------------------------
### Z_RLE
**运行长度编码**

```JavaScript
const zlib_constants.Z_RLE = 3;
```

--------------------------
### Z_FIXED
**固定哈夫曼编码**

```JavaScript
const zlib_constants.Z_FIXED = 4;
```

--------------------------
### Z_DEFAULT_STRATEGY
**默认压缩策略**

```JavaScript
const zlib_constants.Z_DEFAULT_STRATEGY = 0;
```

--------------------------
### ZLIB_VERNUM
**[zlib](zlib.md) 版本号**

```JavaScript
const zlib_constants.ZLIB_VERNUM = 4800;
```

--------------------------
### DEFLATE
**deflate 压缩**

```JavaScript
const zlib_constants.DEFLATE = 1;
```

--------------------------
### INFLATE
**inflate 解压缩**

```JavaScript
const zlib_constants.INFLATE = 2;
```

--------------------------
### GZIP
**gzip 压缩**

```JavaScript
const zlib_constants.GZIP = 3;
```

--------------------------
### GUNZIP
**gunzip 解压缩**

```JavaScript
const zlib_constants.GUNZIP = 4;
```

--------------------------
### DEFLATERAW
**deflateRaw 压缩**

```JavaScript
const zlib_constants.DEFLATERAW = 5;
```

--------------------------
### INFLATERAW
**inflateRaw 解压缩**

```JavaScript
const zlib_constants.INFLATERAW = 6;
```

--------------------------
### UNZIP
**unzip 解压缩**

```JavaScript
const zlib_constants.UNZIP = 7;
```

--------------------------
### BROTLI_DECODE
**Brotli 解码**

```JavaScript
const zlib_constants.BROTLI_DECODE = 8;
```

--------------------------
### BROTLI_ENCODE
**Brotli 编码**

```JavaScript
const zlib_constants.BROTLI_ENCODE = 9;
```

--------------------------
### Z_MIN_WINDOWBITS
**最小窗口大小**

```JavaScript
const zlib_constants.Z_MIN_WINDOWBITS = 8;
```

--------------------------
### Z_MAX_WINDOWBITS
**最大窗口大小**

```JavaScript
const zlib_constants.Z_MAX_WINDOWBITS = 15;
```

--------------------------
### Z_DEFAULT_WINDOWBITS
**默认窗口大小**

```JavaScript
const zlib_constants.Z_DEFAULT_WINDOWBITS = 15;
```

--------------------------
### Z_MIN_CHUNK
**最小块大小**

```JavaScript
const zlib_constants.Z_MIN_CHUNK = 64;
```

--------------------------
### Z_MAX_CHUNK
**最大块大小**

```JavaScript
const zlib_constants.Z_MAX_CHUNK = -1;
```

--------------------------
### Z_DEFAULT_CHUNK
**默认块大小**

```JavaScript
const zlib_constants.Z_DEFAULT_CHUNK = 16384;
```

--------------------------
### Z_MIN_MEMLEVEL
**最小内存级别**

```JavaScript
const zlib_constants.Z_MIN_MEMLEVEL = 1;
```

--------------------------
### Z_MAX_MEMLEVEL
**最大内存级别**

```JavaScript
const zlib_constants.Z_MAX_MEMLEVEL = 9;
```

--------------------------
### Z_DEFAULT_MEMLEVEL
**默认内存级别**

```JavaScript
const zlib_constants.Z_DEFAULT_MEMLEVEL = 8;
```

--------------------------
### Z_MIN_LEVEL
**最低压缩级别**

```JavaScript
const zlib_constants.Z_MIN_LEVEL = -1;
```

--------------------------
### Z_MAX_LEVEL
**最高压缩级别**

```JavaScript
const zlib_constants.Z_MAX_LEVEL = 9;
```

--------------------------
### Z_DEFAULT_LEVEL
**默认压缩级别**

```JavaScript
const zlib_constants.Z_DEFAULT_LEVEL = -1;
```

