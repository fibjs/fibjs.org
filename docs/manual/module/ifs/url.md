# 模块 url
[url](/docs/manual/module/ifs/url.md.html) 处理模块

## 函数
        
### format
参数构造 [UrlObject](/docs/manual/object/ifs/urlobject.md.html) 对象
```JavaScript
static String url.format(Object args);
```

调用参数:
* args - 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash

### parse
解析一个 [url](/docs/manual/module/ifs/url.md.html) 字符串
```JavaScript
static UrlObject url.parse(String url,
                Boolean parseQueryString = false);
```

调用参数:
* url - 指定需要解析的 url 字符串
* parseQueryString - 指定是否解析 query

