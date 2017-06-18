# 模块 bson
bson 编码与解码模块

引用方式：
```JavaScript
var encoding = require('encoding');
var bson = encoding.bson;
```
或者
```JavaScript
var bson = require('bson');
```
## 函数
        
### encode
以 bson 格式编码变量
```JavaScript
static Buffer bson.encode(Object data);
```

调用参数:
* data - 要编码的变量

返回结果:
* 返回编码的二进制数据

### decode
以 bson 方式解码字符串为一个变量
```JavaScript
static Object bson.decode(Buffer data);
```

调用参数:
* data - 要解码的二进制数据

返回结果:
* 返回解码的变量

