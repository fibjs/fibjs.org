# 模块 base64vlq
base64vlq 编码与解码模块

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
var base64vlq = encoding.base64vlq;
@endcode
或者
@code
var base64vlq = require(&#39;base64vlq&#39;);
@endcode
## 函数
        
### encode
以 base64vlq 方式编码数据
```JavaScript
String base64vlq.encode(Integer data);
```

** 调用参数: **
* data - 要编码的数据

** 返回结果:**
* 返回编码的字符串

### encode
以 base64vlq 方式编码数据
```JavaScript
String base64vlq.encode(Array data);
```

** 调用参数: **
* data - 要编码的数据

** 返回结果:**
* 返回编码的字符串

### decode
以 base64vlq 方式解码字符串为二进制数据
```JavaScript
Array base64vlq.decode(String data);
```

** 调用参数: **
* data - 要解码的字符串

** 返回结果:**
* 返回解码的二进制数据

