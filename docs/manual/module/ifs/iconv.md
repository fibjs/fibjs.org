# 模块 iconv
iconv 编码与解码模块

引用方式：
@code
var encoding = require(&#39;encoding&#39;);
var iconv = encoding.iconv;
@endcode
或者
@code
var iconv = require(&#39;iconv&#39;);
@endcode
## 函数
        
### encode
用 iconv 将文本转换为二进制数据
```JavaScript
Buffer iconv.encode(String charset,
                String data);
```

** 调用参数: **
* charset - 指定字符集
* data - 要转换的文本

** 返回结果:**
* 返回解码的二进制数据

### decode
用 iconv 将 Buffer 内容转换为文本
```JavaScript
String iconv.decode(String charset,
                Buffer data);
```

** 调用参数: **
* charset - 指定字符集
* data - 要转换的二进制数据

** 返回结果:**
* 返回编码的字符串

