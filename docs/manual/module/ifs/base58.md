# 模块 base58
base58 编码与解码模块

`base58` 模块是一个用于对数据进行 Base58 编解码的模块。Base58 是一种数字与字母的组合表示方法，它不包含数字 0、字母 O、字母 I、字母 l 等易混淆字符，具有不易出错的特点。

该模块提供了 `encode` 和 `decode` 两个方法。`encode` 方法用于将给定的数据进行 Base58 编码，返回编码后的字符串。`decode` 方法用于将给定的 Base58 编码的字符串进行解码，返回解码后的二进制数据。

以下是 `base58` 模块的示例代码：

```JavaScript
var base58 = require('base58');

var data = "Hello, World!";
var encoded = base58.encode(data);
console.log(encoded); // => 'StV1DL6CwTryKyV'

var decoded = base58.decode(encoded);
console.log(decoded.toString()); // => 'hello world'
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

