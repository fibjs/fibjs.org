# 对象 UrlObject
Url 处理对象

基础模块。提供 [url](../../module/ifs/url.md) 的格式化，解析与拼装

```JavaScript
var url = new net.Url('http://www.xici.net/');
var url = new net.Url({
    protocol: 'http:',
    hostname: 'www.xici.net',
    pathname: '/'
});
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>UrlObject|new UrlObject()|href;protocol;slashes;auth;username;password;host;hostname;port;path;pathname;search;query;hash;searchParams|parse();format();resolve();normalize()]

[object] <:- [UrlObject]
```

## 构造函数
        
### UrlObject
**UrlObject 对象构造函数，使用参数构造**

```JavaScript
new UrlObject(Object args);
```

调用参数:
* args: Object, 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, [hash](../../module/ifs/hash.md)

--------------------------
**UrlObject 对象构造函数，使用 [url](../../module/ifs/url.md) 字符串构造**

```JavaScript
new UrlObject(String url = "",
    Boolean parseQueryString = false,
    Boolean slashesDenoteHost = false);
```

调用参数:
* url: String, 指定构造 [url](../../module/ifs/url.md) 字符串
* parseQueryString: Boolean, 指定是否解析 query
* slashesDenoteHost: Boolean, 默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}

## 成员属性
        
### href
**String, 查询和设置当前 UrlObject 对象中的完整 [url](../../module/ifs/url.md) 地址描述，此描述由其他所有属性组装而成**

```JavaScript
String UrlObject.href;
```

--------------------------
### protocol
**String, 查询和设置当前 UrlObject 对象中的协议名称**

```JavaScript
String UrlObject.protocol;
```

--------------------------
### slashes
**Boolean, 查询和设置当前 UrlObject 对象是否包含双斜杠**

```JavaScript
Boolean UrlObject.slashes;
```

--------------------------
### auth
**String, 查询和设置当前 UrlObject 对象中的完整验证字符串，由 username 和 password 属性组装而成**

```JavaScript
String UrlObject.auth;
```

--------------------------
### username
**String, 查询和设置当前 UrlObject 对象中的验证用户**

```JavaScript
String UrlObject.username;
```

--------------------------
### password
**String, 查询和设置当前 UrlObject 对象中的验证密码**

```JavaScript
String UrlObject.password;
```

--------------------------
### host
**String, 查询和设置当前 UrlObject 对象中的完整主机描述，由 hastname 和 port 组装而成**

```JavaScript
String UrlObject.host;
```

--------------------------
### hostname
**String, 查询和设置当前 UrlObject 对象中的主机名**

```JavaScript
String UrlObject.hostname;
```

--------------------------
### port
**String, 查询和设置当前 UrlObject 对象中的端口号**

```JavaScript
String UrlObject.port;
```

--------------------------
### path
**String, 查询和设置当前 UrlObject 对象中的请求完整路径（含请求），由 pathname 和 query 组装而成**

```JavaScript
String UrlObject.path;
```

--------------------------
### pathname
**String, 查询和设置当前 UrlObject 对象中的路径**

```JavaScript
String UrlObject.pathname;
```

--------------------------
### search
**String, 查询和设置当前 UrlObject 对象中的请求字符串（含“?”），等效于“?”+query**

```JavaScript
String UrlObject.search;
```

--------------------------
### query
**Value, 查询和设置当前 UrlObject 对象中的请求字符串（ 不含“?”）**

```JavaScript
Value UrlObject.query;
```

--------------------------
### hash
**String, 查询和设置当前 UrlObject 对象中的请求锚点（含“\#”）**

```JavaScript
String UrlObject.hash;
```

--------------------------
### searchParams
**[HttpCollection](HttpCollection.md), 查询当前 UrlObject 对象中的请求字符串（ 不含“?”）**

```JavaScript
readonly HttpCollection UrlObject.searchParams;
```

## 成员函数
        
### parse
**解析一个 [url](../../module/ifs/url.md) 字符串**

```JavaScript
UrlObject.parse(String url,
    Boolean parseQueryString = false,
    Boolean slashesDenoteHost = false);
```

调用参数:
* url: String, 指定需要解析的 [url](../../module/ifs/url.md) 字符串
* parseQueryString: Boolean, 指定是否解析 query
* slashesDenoteHost: Boolean, 默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}

--------------------------
### format
**使用指定的参数构造 UrlObject**

```JavaScript
UrlObject.format(Object args);
```

调用参数:
* args: Object, 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, [hash](../../module/ifs/hash.md)

--------------------------
### resolve
**重定位 [url](../../module/ifs/url.md) 路径，自动识别新路径为相对路径还是绝对路径**

```JavaScript
UrlObject UrlObject.resolve(String url);
```

调用参数:
* url: String, 指定新的路径

返回结果:
* UrlObject, 返回包含重定位数据的对象

--------------------------
### normalize
**标准化路径**

```JavaScript
UrlObject.normalize();
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String UrlObject.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value UrlObject.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

