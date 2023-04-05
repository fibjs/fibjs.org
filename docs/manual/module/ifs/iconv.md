# 模块 iconv
`iconv` 是内置的一个转换模块，用于实现各种不同编码之间的数据转换

iconv 是调用底层系统的编码功能来实现的，同时也支持一些内置编码集，例如 "utf8", "utf-8", "ucs2", "ucs-2", "utf16", "utf-16", "ucs2le", "ucs-2le", "utf16le", "utf-16le", "ucs2be", "ucs-2be", "utf16be", "utf-16be", "ucs4", "ucs-4", "utf32", "utf-32", "ucs4le", "ucs-4le", "utf32le", "utf-32le", "ucs4be", "ucs-4be", "utf32be", "utf-32be"

`iconv` 模块提供了两个核心方法：

1. `iconv.encode(charset, data)`：将文本数据转换为二进制数据
2. `iconv.decode(charset, data)`：将二进制数据转换为文本数据

这两个方法非常易于使用和理解，比如对于一个 "utf-8" 编码的字符串 "hello"，我们可以通过以下代码将其转换为 "gbk" 编码：
```
const iconv = require('iconv');

const utf8String = 'hello';
const gbkString = iconv.decode('gbk', iconv.encode('utf-8', utf8String));
console.log(gbkString);  // output "你好"
```

注意：`encode` 和 `decode` 方法的第一个参数 charset 都是指定要使用的编码。

## 静态函数
        
### encode
**用 iconv 将文本转换为二进制数据**

```JavaScript
static Buffer iconv.encode(String charset,
    String data);
```

调用参数:
* charset: String, 指定字符集
* data: String, 要转换的文本

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

--------------------------
### decode
**用 iconv 将 [Buffer](../../object/ifs/Buffer.md) 内容转换为文本**

```JavaScript
static String iconv.decode(String charset,
    Buffer data);
```

调用参数:
* charset: String, 指定字符集
* data: [Buffer](../../object/ifs/Buffer.md), 要转换的二进制数据

返回结果:
* String, 返回编码的字符串

--------------------------
### isEncoding
**检测字符集是否被支持**

```JavaScript
static Boolean iconv.isEncoding(String charset);
```

调用参数:
* charset: String, 指定字符集

返回结果:
* Boolean, 返回是否支持该字符集

