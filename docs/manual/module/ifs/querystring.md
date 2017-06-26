# 模块 querystring
[http](http.md) query 处理模块

引用方法：

```JavaScript
var querystring = require('querystring');
```

## 静态函数
        
### escape
**[url](url.md) 部件字符串安全编码**

```JavaScript
static String querystring.escape(String str);
```

调用参数:
* str: String, 要编码的 [url](url.md)

返回结果:
* String, 返回编码的字符串

--------------------------
### unescape
**[url](url.md) 安全字符串解码**

```JavaScript
static String querystring.unescape(String str);
```

调用参数:
* str: String, 要解码的 [url](url.md)

返回结果:
* String, 返回解码的字符串

--------------------------
### parse
**解析 query 字符串**

```JavaScript
static HttpCollection querystring.parse(String str,
    String sep = "&",
    String eq = "=",
    Object opt = {});
```

调用参数:
* str: String, 要解析的字符串
* sep: String, 解析时使用的分割字符串，缺省为 &
* eq: String, 解析时使用的赋值字符串，缺省为 =
* opt: Object, 解析参数，暂未支持

返回结果:
* [HttpCollection](../../object/ifs/HttpCollection.md), 返回解码的对象

--------------------------
### stringify
**序列化一个对象为 query 字符串**

```JavaScript
static String querystring.stringify(Object obj,
    String sep = "&",
    String eq = "=",
    Object opt = {});
```

调用参数:
* obj: Object, 要序列化的对象
* sep: String, 序列化时使用的分割字符串，缺省为 &
* eq: String, 序列化时使用的赋值字符串，缺省为 =
* opt: Object, 解析参数，暂未支持

返回结果:
* String, 返回序列化后的字符串

