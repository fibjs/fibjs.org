# 模块 json
json 编码与解码模块

引用方式：

```JavaScript
var encoding = require('encoding');
var json = encoding.json;
```

或者

```JavaScript
var json = require('json');
```

## 静态函数
        
### encode
**以 json 格式编码变量**

```JavaScript
static String json.encode(Value data);
```

调用参数:
* data: Value, 要编码的变量

返回结果:
* String, 返回编码的字符串

--------------------------
### decode
**以 json 方式解码字符串为一个变量**

```JavaScript
static Value json.decode(String data);
```

调用参数:
* data: String, 要解码的字符串

返回结果:
* Value, 返回解码的变量

