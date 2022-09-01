# 模块 multibase
multibase 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var multibase = encoding.multibase;
```

或者

```JavaScript
var multibase = require('multibase');
```

## 静态函数
        
### encode
**以 multibase 方式编码数据**

```JavaScript
static String multibase.encode(Buffer data,
    String codec);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据
* codec: String, 指定编码方式

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 multibase 方式解码字符串为二进制数据**

```JavaScript
static Buffer multibase.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

