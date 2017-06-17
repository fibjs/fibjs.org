# 模块 json
json 编码与解码模块

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
var json = encoding.json;
@endcode
或者
@code
var json = require(&#39;json&#39;);
@endcode
## 函数
        
### encode
以 json 格式编码变量
```JavaScript
String json.encode(Value data);
```

** 调用参数: **
* data - 要编码的变量

** 返回结果:**
* 返回编码的字符串

### decode
以 json 方式解码字符串为一个变量
```JavaScript
Value json.decode(String data);
```

** 调用参数: **
* data - 要解码的字符串

** 返回结果:**
* 返回解码的变量

