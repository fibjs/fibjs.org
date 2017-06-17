# 模块 hex
hex 编码与解码模块

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
var hex = encoding.hex;
@endcode
或者
@code
var hex = require(&#39;hex&#39;);
@endcode
## 函数
        
### encode
以 hex 方式编码数据
```JavaScript
String hex.encode(Buffer data);
```

** 调用参数: **
* data - 要编码的数据

** 返回结果:**
* 返回编码的字符串

### decode
以 hex 方式解码字符串为二进制数据
```JavaScript
Buffer hex.decode(String data);
```

** 调用参数: **
* data - 要解码的字符串

** 返回结果:**
* 返回解码的二进制数据

