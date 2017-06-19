# 对象 UrlObject
Url 处理对象

基础模块。提供 [url](../../module/ifs/url.md) 的格式化，解析与拼装
```JavaScript
var url = new net.Url('http://www.xici.net/');
var url = new net.Url({protocol: 'http:', hostname:'www.xici.net', pathname:'/'});
```
## 构造函数
        
### UrlObject
UrlObject 对象构造函数，使用参数构造
```JavaScript
 new UrlObject(Object args);
```

调用参数:
* args - 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash

--------------------------
UrlObject 对象构造函数，使用 [url](../../module/ifs/url.md) 字符串构造
```JavaScript
 new UrlObject(String url = "",
                Boolean parseQueryString = false);
```

调用参数:
* url - 指定构造 url 字符串
* parseQueryString - 指定是否解析 query

## 成员函数
        
### parse
解析一个 [url](../../module/ifs/url.md) 字符串
```JavaScript
UrlObject.parse(String url,
                Boolean parseQueryString = false);
```

调用参数:
* url - 指定需要解析的 url 字符串
* parseQueryString - 指定是否解析 query

--------------------------
### format
使用指定的参数构造 UrlObject
```JavaScript
UrlObject.format(Object args);
```

调用参数:
* args - 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash

--------------------------
### resolve
重定位 [url](../../module/ifs/url.md) 路径，自动识别新路径为相对路径还是绝对路径
```JavaScript
UrlObject UrlObject.resolve(String url);
```

调用参数:
* url - 指定新的路径

--------------------------
### normalize
标准化路径
```JavaScript
UrlObject.normalize();
```

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
UrlObject.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean UrlObject.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String UrlObject.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value UrlObject.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value UrlObject.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### href
查询和设置当前 UrlObject 对象中的完整 [url](../../module/ifs/url.md) 地址描述，此描述由其他所有属性组装而成
```JavaScript
String UrlObject.href;
```

--------------------------
### protocol
查询和设置当前 UrlObject 对象中的协议名称
```JavaScript
String UrlObject.protocol;
```

--------------------------
### slashes
查询和设置当前 UrlObject 对象是否包含双斜杠
```JavaScript
Boolean UrlObject.slashes;
```

--------------------------
### auth
查询和设置当前 UrlObject 对象中的完整验证字符串，由 username 和 password 属性组装而成
```JavaScript
String UrlObject.auth;
```

--------------------------
### username
查询和设置当前 UrlObject 对象中的验证用户
```JavaScript
String UrlObject.username;
```

--------------------------
### password
查询和设置当前 UrlObject 对象中的验证密码
```JavaScript
String UrlObject.password;
```

--------------------------
### host
查询和设置当前 UrlObject 对象中的完整主机描述，由 hastname 和 port 组装而成
```JavaScript
String UrlObject.host;
```

--------------------------
### hostname
查询和设置当前 UrlObject 对象中的主机名
```JavaScript
String UrlObject.hostname;
```

--------------------------
### port
查询和设置当前 UrlObject 对象中的端口号
```JavaScript
String UrlObject.port;
```

--------------------------
### path
查询和设置当前 UrlObject 对象中的请求完整路径（含请求），由 pathname 和 query 组装而成
```JavaScript
String UrlObject.path;
```

--------------------------
### pathname
查询和设置当前 UrlObject 对象中的路径
```JavaScript
String UrlObject.pathname;
```

--------------------------
### search
查询和设置当前 UrlObject 对象中的请求字符串（含“?”），等效于“?”+query
```JavaScript
String UrlObject.search;
```

--------------------------
### query
查询和设置当前 UrlObject 对象中的请求字符串（ 不含“?”）
```JavaScript
Value UrlObject.query;
```

--------------------------
### hash
查询和设置当前 UrlObject 对象中的请求锚点（含“\#”）
```JavaScript
String UrlObject.hash;
```

