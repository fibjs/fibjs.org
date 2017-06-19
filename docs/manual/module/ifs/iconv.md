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
## 静态函数
        
### encode
用 iconv 将文本转换为二进制数据
```JavaScript
static Buffer iconv.encode(String charset,
                String data);
```

调用参数:
* charset - 指定字符集
* data - 要转换的文本

返回结果:
* 返回解码的二进制数据

--------------------------
### decode
用 iconv 将 [Buffer](../../object/ifs/Buffer.md) 内容转换为文本
```JavaScript
static String iconv.decode(String charset,
                Buffer data);
```

调用参数:
* charset - 指定字符集
* data - 要转换的二进制数据

返回结果:
* 返回编码的字符串
