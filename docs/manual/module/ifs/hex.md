# 模块 hex
[hex](/docs/manual/module/ifs/hex.md.html) 编码与解码模块

引用方式：
```JavaScript
var encoding = require('encoding');
var hex = encoding.hex;
```
或者
```JavaScript
var hex = require('hex');
```
## 函数
        
### encode
以 [hex](/docs/manual/module/ifs/hex.md.html) 方式编码数据
```JavaScript
static String hex.encode(Buffer data);
```

调用参数:
* data - 要编码的数据

返回结果:
* 返回编码的字符串

### decode
以 [hex](/docs/manual/module/ifs/hex.md.html) 方式解码字符串为二进制数据
```JavaScript
static Buffer hex.decode(String data);
```

调用参数:
* data - 要解码的字符串

返回结果:
* 返回解码的二进制数据

