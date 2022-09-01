# 模块 base58
base58 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var base58 = encoding.base58;
```

或者

```JavaScript
var base58 = require('base58');
```

## 静态函数
        
### encode
**以 base58 方式编码数据**

```JavaScript
static String base58.encode(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据

返回结果:
* String, 返回编码的字符串

--------------------------
**以 base58check 方式编码数据**

```JavaScript
static String base58.encode(Buffer data,
    Integer chk_ver);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要编码的数据
* chk_ver: Integer, 指定校验版本

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 base58 方式解码字符串为二进制数据**

```JavaScript
static Buffer base58.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

--------------------------
**以 base58check 方式解码字符串为二进制数据**

```JavaScript
static Buffer base58.decode(String data,
    Integer chk_ver);
```

调用参数:
* data: String, 要解码的字符串
* chk_ver: Integer, 指定校验版本

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解码的二进制数据

