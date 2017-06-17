# 模块 encoding
编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
@endcode
## 函数
        
### jsstr
将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本
```JavaScript
String encoding.jsstr(String str,
                Boolean json = false);
```

**调用参数:**
* str - 要编码的字符串
* json - 是否生成json兼容字符串

**返回结果:**
* 返回编码的字符串

### encodeURI
url 字符串安全编码
```JavaScript
String encoding.encodeURI(String url);
```

**调用参数:**
* url - 要编码的 url

**返回结果:**
* 返回编码的字符串

### encodeURIComponent
url 部件字符串安全编码
```JavaScript
String encoding.encodeURIComponent(String url);
```

**调用参数:**
* url - 要编码的 url

**返回结果:**
* 返回编码的字符串

### decodeURI
url 安全字符串解码
```JavaScript
String encoding.decodeURI(String url);
```

**调用参数:**
* url - 要解码的 url

**返回结果:**
* 返回解码的字符串

