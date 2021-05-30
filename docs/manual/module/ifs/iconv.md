# 模块 iconv
iconv 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var iconv = encoding.iconv;
```

或者

```JavaScript
var iconv = require('iconv');
```

iconv 会使用系统已安装的编码进行处理，iconv 模块同时还支持以下内置编码集：

```JavaScript
"utf8", "utf-8",

"ucs2", "ucs-2", "utf16", "utf-16",
"ucs2le", "ucs-2le", "utf16le", "utf-16le",
"ucs2be", "ucs-2be", "utf16be", "utf-16be",

"ucs4", "ucs-4", "utf32", "utf-32",
"ucs4le", "ucs-4le", "utf32le", "utf-32le",
"ucs4be", "ucs-4be", "utf32be", "utf-32be"
```

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

