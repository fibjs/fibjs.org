# 模块 base64vlq
base64vlq 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var base64vlq = encoding.base64vlq;
```

或者

```JavaScript
var base64vlq = require('base64vlq');
```

## 静态函数
        
### encode
**以 base64vlq 方式编码数据**

```JavaScript
static String base64vlq.encode(Integer data);
```

调用参数:
* data: Integer, 要编码的数据

返回结果:
* String, 返回编码的字符串

--------------------------
**以 base64vlq 方式编码数据**

```JavaScript
static String base64vlq.encode(Array data);
```

调用参数:
* data: Array, 要编码的数据

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 base64vlq 方式解码字符串为二进制数据**

```JavaScript
static Array base64vlq.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* Array, 返回解码的二进制数据

