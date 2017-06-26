# 模块 base32
base32 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var base32 = encoding.base32;
```

或者

```JavaScript
var base32 = require('base32');
```

## 静态函数
        
### encode
**以 base32 方式编码数据**

```JavaScript
static String base32.encode(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 base32 方式解码字符串为二进制数据**

```JavaScript
static Buffer base32.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

