# 模块 iconv
[iconv](/docs/manual/module/ifs/iconv.md.html) 编码与解码模块

引用方式：
```JavaScript
var encoding = require('encoding');
var iconv = encoding.iconv;
```
或者
```JavaScript
var iconv = require('iconv');
```
## 函数
        
### encode
用 [iconv](/docs/manual/module/ifs/iconv.md.html) 将文本转换为二进制数据
```JavaScript
static Buffer iconv.encode(String charset,
                String data);
```

调用参数:
* charset - 指定字符集
* data - 要转换的文本

返回结果:
* 返回解码的二进制数据

### decode
用 [iconv](/docs/manual/module/ifs/iconv.md.html) 将 [Buffer](/docs/manual/object/ifs/buffer.md.html) 内容转换为文本
```JavaScript
static String iconv.decode(String charset,
                Buffer data);
```

调用参数:
* charset - 指定字符集
* data - 要转换的二进制数据

返回结果:
* 返回编码的字符串

