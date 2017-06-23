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
<div class="inherits"><svg width="96pt" height="416pt" viewBox="0.00 0.00 96.00 416.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 412)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-412 92,-412 92,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-316 15.5,-408 72.5,-408 72.5,-316 15.5,-316"/>
<polygon fill="none" stroke="#000000" points="16,-386 16,-408 73,-408 73,-386 16,-386"/>
<text text-anchor="start" x="31.1625" y="-394" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="16,-316 16,-386 73,-386 73,-316 16,-316"/>
<text text-anchor="start" x="21" y="-372" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="21" y="-360" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="21" y="-348" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="21" y="-336" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="21" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- UrlObject -->
<g id="node2" class="node">
<title>UrlObject</title>
<g id="a_node2"><a xlink:title="UrlObject">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-280 88,-280 88,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-258 0,-280 88,-280 88,-258 0,-258"/>
<text text-anchor="start" x="23.169" y="-266" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">UrlObject</text>
<polygon fill="none" stroke="#000000" points="0,-236 0,-258 88,-258 88,-236 0,-236"/>
<text text-anchor="start" x="5" y="-244" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new UrlObject()</text>
<polygon fill="none" stroke="#000000" points="0,-58 0,-236 88,-236 88,-58 0,-58"/>
<text text-anchor="start" x="5" y="-222" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> href</text>
<text text-anchor="start" x="5" y="-210" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> protocol</text>
<text text-anchor="start" x="5" y="-198" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> slashes</text>
<text text-anchor="start" x="5" y="-186" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> auth</text>
<text text-anchor="start" x="5" y="-174" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> username</text>
<text text-anchor="start" x="5" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> password</text>
<text text-anchor="start" x="5" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> host</text>
<text text-anchor="start" x="5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hostname</text>
<text text-anchor="start" x="5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> port</text>
<text text-anchor="start" x="5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> path</text>
<text text-anchor="start" x="5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pathname</text>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> search</text>
<text text-anchor="start" x="5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> query</text>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hash</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-58 88,-58 88,0 0,0"/>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> parse()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> format()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> resolve()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> normalize()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;UrlObject -->
<g id="edge1" class="edge">
<title>object-&gt;UrlObject</title>
<path fill="none" stroke="#000000" d="M44,-305.5289C44,-297.5321 44,-289.033 44,-280.2719"/>
<polygon fill="#000000" stroke="#000000" points="40.5001,-305.7317 44,-315.7318 47.5001,-305.7318 40.5001,-305.7317"/>
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

