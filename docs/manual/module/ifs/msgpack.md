# 模块 msgpack
msgpack 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var msgpack = encoding.msgpack;
```

或者

```JavaScript
var msgpack = require('msgpack');
```

## 静态函数
        
### encode
**以 msgpack 格式编码变量**

```JavaScript
static Buffer msgpack.encode(Value data);
```

调用参数:
* data: Value, 要编码的变量

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回编码的二进制数据

--------------------------
### decode
**以 msgpack 方式解码字符串为一个变量**

```JavaScript
static Value msgpack.decode(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 要解码的二进制数据

返回结果:
* Value, 返回解码的变量

