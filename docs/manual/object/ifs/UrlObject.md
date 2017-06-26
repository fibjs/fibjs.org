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
<div class="inherits"><svg width="93pt" height="406pt" viewBox="0.00 0.00 93.44 406.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 402)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-402 89.436,-402 89.436,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.8865,-309.5 13.8865,-397.5 71.5495,-397.5 71.5495,-309.5 13.8865,-309.5"/>
<text text-anchor="middle" x="42.718" y="-384.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.8865,-377.5 71.5495,-377.5 "/>
<text text-anchor="start" x="21.8865" y="-364.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.8865" y="-352.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.8865" y="-340.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.8865" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.8865" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- UrlObject -->
<g id="node2" class="node">
<title>UrlObject</title>
<g id="a_node2"><a xlink:title="UrlObject">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-272.5 85.436,-272.5 85.436,-.5 0,-.5"/>
<text text-anchor="middle" x="42.718" y="-259.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">UrlObject</text>
<polyline fill="none" stroke="#000000" points="0,-252.5 85.436,-252.5 "/>
<text text-anchor="start" x="8" y="-239.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new UrlObject()</text>
<polyline fill="none" stroke="#000000" points="0,-232.5 85.436,-232.5 "/>
<text text-anchor="start" x="8" y="-219.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">href</text>
<text text-anchor="start" x="8" y="-207.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">protocol</text>
<text text-anchor="start" x="8" y="-195.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">slashes</text>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">auth</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">username</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">password</text>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">host</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hostname</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">port</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">path</text>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">pathname</text>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">search</text>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">query</text>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hash</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 85.436,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">parse()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">format()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">resolve()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">normalize()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;UrlObject -->
<g id="edge1" class="edge">
<title>object-&gt;UrlObject</title>
<path fill="none" stroke="#000000" d="M42.718,-299.157C42.718,-290.8734 42.718,-282.0234 42.718,-272.8906"/>
<polygon fill="#000000" stroke="#000000" points="39.2181,-299.3252 42.718,-309.3253 46.2181,-299.3253 39.2181,-299.3252"/>
</g>
</g>
</svg></div>

## 构造函数
        
### UrlObject
** UrlObject 对象构造函数，使用参数构造 **

```JavaScript
new UrlObject(Object args);
```

调用参数:
* args: Object, 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, [hash](../../module/ifs/hash.md)

--------------------------
** UrlObject 对象构造函数，使用 [url](../../module/ifs/url.md) 字符串构造 **

```JavaScript
new UrlObject(String url = "",
    Boolean parseQueryString = false);
```

调用参数:
* url: String, 指定构造 [url](../../module/ifs/url.md) 字符串
* parseQueryString: Boolean, 指定是否解析 query

## 成员属性
        
### href
** String, 查询和设置当前 UrlObject 对象中的完整 [url](../../module/ifs/url.md) 地址描述，此描述由其他所有属性组装而成 **

```JavaScript
String UrlObject.href;
```

--------------------------
### protocol
** String, 查询和设置当前 UrlObject 对象中的协议名称 **

```JavaScript
String UrlObject.protocol;
```

--------------------------
### slashes
** Boolean, 查询和设置当前 UrlObject 对象是否包含双斜杠 **

```JavaScript
Boolean UrlObject.slashes;
```

--------------------------
### auth
** String, 查询和设置当前 UrlObject 对象中的完整验证字符串，由 username 和 password 属性组装而成 **

```JavaScript
String UrlObject.auth;
```

--------------------------
### username
** String, 查询和设置当前 UrlObject 对象中的验证用户 **

```JavaScript
String UrlObject.username;
```

--------------------------
### password
** String, 查询和设置当前 UrlObject 对象中的验证密码 **

```JavaScript
String UrlObject.password;
```

--------------------------
### host
** String, 查询和设置当前 UrlObject 对象中的完整主机描述，由 hastname 和 port 组装而成 **

```JavaScript
String UrlObject.host;
```

--------------------------
### hostname
** String, 查询和设置当前 UrlObject 对象中的主机名 **

```JavaScript
String UrlObject.hostname;
```

--------------------------
### port
** String, 查询和设置当前 UrlObject 对象中的端口号 **

```JavaScript
String UrlObject.port;
```

--------------------------
### path
** String, 查询和设置当前 UrlObject 对象中的请求完整路径（含请求），由 pathname 和 query 组装而成 **

```JavaScript
String UrlObject.path;
```

--------------------------
### pathname
** String, 查询和设置当前 UrlObject 对象中的路径 **

```JavaScript
String UrlObject.pathname;
```

--------------------------
### search
** String, 查询和设置当前 UrlObject 对象中的请求字符串（含“?”），等效于“?”+query **

```JavaScript
String UrlObject.search;
```

--------------------------
### query
** Value, 查询和设置当前 UrlObject 对象中的请求字符串（ 不含“?”） **

```JavaScript
Value UrlObject.query;
```

--------------------------
### hash
** String, 查询和设置当前 UrlObject 对象中的请求锚点（含“\#”） **

```JavaScript
String UrlObject.hash;
```

## 成员函数
        
### parse
** 解析一个 [url](../../module/ifs/url.md) 字符串 **

```JavaScript
UrlObject.parse(String url,
    Boolean parseQueryString = false);
```

调用参数:
* url: String, 指定需要解析的 [url](../../module/ifs/url.md) 字符串
* parseQueryString: Boolean, 指定是否解析 query

--------------------------
### format
** 使用指定的参数构造 UrlObject **

```JavaScript
UrlObject.format(Object args);
```

调用参数:
* args: Object, 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, [hash](../../module/ifs/hash.md)

--------------------------
### resolve
** 重定位 [url](../../module/ifs/url.md) 路径，自动识别新路径为相对路径还是绝对路径 **

```JavaScript
UrlObject UrlObject.resolve(String url);
```

调用参数:
* url: String, 指定新的路径

返回结果:
* UrlObject, 返回包含重定位数据的对象

--------------------------
### normalize
** 标准化路径 **

```JavaScript
UrlObject.normalize();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
UrlObject.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean UrlObject.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String UrlObject.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value UrlObject.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value UrlObject.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

