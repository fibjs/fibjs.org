# 模块 bson
bson 编码与解码模块

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
var bson = encoding.bson;
@endcode
或者
@code
var bson = require(&#39;bson&#39;);
@endcode
## 函数
        
### encode
以 bson 格式编码变量
```JavaScript
Buffer bson.encode(Object data);
```

**调用参数:**
* data - 要编码的变量

**返回结果:**
* 返回编码的二进制数据

### decode
以 bson 方式解码字符串为一个变量
```JavaScript
Object bson.decode(Buffer data);
```

**调用参数:**
* data - 要解码的二进制数据

**返回结果:**
* 返回解码的变量

