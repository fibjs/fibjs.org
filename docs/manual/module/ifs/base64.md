# 模块 base64
base64 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var base64 = encoding.base64;
```

或者

```JavaScript
var base64 = require('base64');
```

## 静态函数
        
### encode
**以 base64 方式编码数据**

```JavaScript
static String base64.encode(Buffer data,
    Boolean url = false);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据
* url: Boolean, 指定是否使用 [url](url.md) 安全字符编码

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 base64 方式解码字符串为二进制数据**

```JavaScript
static Buffer base64.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

