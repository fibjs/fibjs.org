# 模块 url
url 处理模块

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
    Boolean parseQueryString = false);
```

调用参数:
* url: String, 指定需要解析的 url 字符串
* parseQueryString: Boolean, 指定是否解析 query

返回结果:
* [UrlObject](../../object/ifs/UrlObject.md), 返回包含解析数据的对象

