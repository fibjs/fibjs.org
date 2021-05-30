# 模块 url
url 处理模块

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

