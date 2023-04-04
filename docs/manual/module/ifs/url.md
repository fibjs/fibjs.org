# 模块 url
url 处理模块，url 模块提供了 Url 类，用于处理 URL 相关的操作，包括解析、组装、拼接等

Url 类的常用属性和方法如下：

属性：

- href：返回完整的 URL 字符串。
- protocol：URL 的协议部分。
- host：URL 的主机部分。
- auth：URL 的认证部分。
- hostname：URL 的主机名部分。
- port：URL 的端口部分。
- pathname：URL 的路径部分。
- search：URL 的查询参数字符串。
- [hash](hash.md)：URL 的 [hash](hash.md) 部分。

方法：

- resolve(from, to)：将解析 to（或 to 与 from 的组合）为一个绝对 URL，并返回解析后的 URL 对象。
- parse(urlString)：将 URL 字符串解析为 URL 对象并返回该对象。
- format(urlObject)：将 URL 对象格式化为 URL 字符串并返回。

下面是一个 url 模块的示例：

```JavaScript
const {
    Url
} = require('url');

const url = new Url('http://www.baidu.com/s?ie=UTF-8&wd=fibjs#hash');
console.log(url.protocol); // 'http:'
console.log(url.host); // 'www.baidu.com'
console.log(url.path); // '/s?ie=UTF-8&wd=fibjs'
console.log(url.hash); // '#hash'

console.log(url.href); // 'http://www.baidu.com/s?ie=UTF-8&wd=fibjs&query=fibjs#hash'
```

在这个例子中，我们演示了如何使用 url 模块来解析 url 字符串，再重新组装成新的 url 字符串。

## 对象
        
### URL
**创建一个 [UrlObject](../../object/ifs/UrlObject.md) 请求对象，参见 [UrlObject](../../object/ifs/UrlObject.md)**

```JavaScript
UrlObject url.URL;
```

## 静态函数
        
### format
**参数构造 [UrlObject](../../object/ifs/UrlObject.md) 对象**

```JavaScript
static String url.format(Object args);
```

调用参数:
* args: Object, 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, [hash](hash.md)

返回结果:
* String, 返回构造成功的字符串

--------------------------
### parse
**解析一个 url 字符串**

```JavaScript
static UrlObject url.parse(String url,
    Boolean parseQueryString = false,
    Boolean slashesDenoteHost = false);
```

调用参数:
* url: String, 指定需要解析的 url 字符串
* parseQueryString: Boolean, 指定是否解析 query
* slashesDenoteHost: Boolean, 默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}

返回结果:
* [UrlObject](../../object/ifs/UrlObject.md), 返回包含解析数据的对象

--------------------------
### resolve
**合并相对路径成为一个绝对路径**

```JavaScript
static String url.resolve(String _from,
    String to);
```

调用参数:
* _from: String, 源路径
* to: String, 相对路径

返回结果:
* String, 返回得到的绝对路径

