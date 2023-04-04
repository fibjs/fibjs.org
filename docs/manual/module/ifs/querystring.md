# 模块 querystring
querystring 模块提供了一些用于解析和序列化 URL 查询参数的实用函数，使用 querystring 模块可以方便地将 URL 查询参数解析为对象或字符串，也可以将对象序列化为 URL 查询参数字符串

以下是 `querystring` 模块的常用函数：

- `querystring.parse(str[, sep[, eq[, options]]])`: 将 URL 查询参数解析为对象
- `querystring.stringify(obj[, sep[, eq[, options]]])`: 将对象序列化为 URL 查询参数字符串

其中，`str` 是要解析的 URL 查询参数字符串，`obj` 是要序列化的对象。

以下示例说明如何使用 `querystring` 模块从 URL 中解析查询参数为对象：

```JavaScript
const querystring = require('querystring');

const url = 'https://www.example.com/path/to/page?foo=bar&baz=qux';

const search = new URL(url).search; // 获取 URL 中的查询参数部分
const query = querystring.parse(search.slice(1)); // 解析查询参数为对象

console.log(query); // 输出 { foo: 'bar', baz: 'qux' }
```

以上代码先获取了一个 URL，然后从中提取出查询参数部分，并使用 `querystring.parse()` 函数将其解析为对象，最后将对象打印出来。

接下来，示例说明如何使用 `querystring` 模块将对象序列化为 URL 查询参数字符串：

```JavaScript
const querystring = require('querystring');

const obj = {
    foo: 'bar',
    baz: 'qux'
};

const query = querystring.stringify(obj);

console.log(query); // 输出 "foo=bar&baz=qux"
```

以上代码中，首先定义了一个对象，然后使用 `querystring.stringify()` 函数将其序列化为 URL 查询参数字符串，最后将字符串打印出来。

可以发现，使用 `querystring` 模块可以方便地对 URL 查询参数进行解析和序列化，减少了对字符串的繁琐处理，提高了代码的可读性和可维护性。

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

