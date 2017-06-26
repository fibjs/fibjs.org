# 对象 HttpCookie
[http](../../module/ifs/http.md) Cookie 对象，用于添加和处理 cookie

## 继承关系
<div class="inherits"><svg width="101pt" height="298pt" viewBox="0.00 0.00 101.22 298.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 294)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-294 97.225,-294 97.225,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="17.781,-201.5 17.781,-289.5 75.444,-289.5 75.444,-201.5 17.781,-201.5"/>
<text text-anchor="middle" x="46.6125" y="-276.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="17.781,-269.5 75.444,-269.5 "/>
<text text-anchor="start" x="25.781" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="25.781" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="25.781" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="25.781" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="25.781" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HttpCookie -->
<g id="node2" class="node">
<title>HttpCookie</title>
<g id="a_node2"><a xlink:title="HttpCookie">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-164.5 93.225,-164.5 93.225,-.5 0,-.5"/>
<text text-anchor="middle" x="46.6125" y="-151.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpCookie</text>
<polyline fill="none" stroke="#000000" points="0,-144.5 93.225,-144.5 "/>
<text text-anchor="start" x="8" y="-131.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpCookie()</text>
<polyline fill="none" stroke="#000000" points="0,-124.5 93.225,-124.5 "/>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">value</text>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">domain</text>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">path</text>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">expires</text>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">httpOnly</text>
<text text-anchor="start" x="8" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">secure</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 93.225,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">parse()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">match()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpCookie -->
<g id="edge1" class="edge">
<title>object-&gt;HttpCookie</title>
<path fill="none" stroke="#000000" d="M46.6125,-191.2135C46.6125,-182.6629 46.6125,-173.6609 46.6125,-164.6482"/>
<polygon fill="#000000" stroke="#000000" points="43.1126,-191.3898 46.6125,-201.3899 50.1126,-191.3899 43.1126,-191.3898"/>
</g>
</g>
</svg></div>

## 构造函数
        
### HttpCookie
** HttpCookie 构造函数，创建一个新的 HttpCookie 对象 **

```JavaScript
new HttpCookie(Object opts = {});
```

调用参数:
* opts: Object, 指定创建的 cookie 的属性

--------------------------
** HttpCookie 构造函数，创建一个新的 HttpCookie 对象 **

```JavaScript
new HttpCookie(String name,
    String value,
    Object opts = {});
```

调用参数:
* name: String, 指定创建的 cookie 名称
* value: String, 指定创建的 cookie 值
* opts: Object, 指定创建的 cookie 的其它属性

## 成员属性
        
### name
** String, 查询和设置 cookie 名称 **

```JavaScript
String HttpCookie.name;
```

--------------------------
### value
** String, 查询和设置 cookie 的值 **

```JavaScript
String HttpCookie.value;
```

--------------------------
### domain
** String, 查询和设置 cookie 的域名范围 **

```JavaScript
String HttpCookie.domain;
```

--------------------------
### path
** String, 查询和设置 cookie 的路径范围 **

```JavaScript
String HttpCookie.path;
```

--------------------------
### expires
** Date, 查询和设置 cookie 的过期时间 **

```JavaScript
Date HttpCookie.expires;
```

--------------------------
### httpOnly
** Boolean, 查询和设置 cookie 是否仅允许 [http](../../module/ifs/http.md) 请求，缺省 false **

```JavaScript
Boolean HttpCookie.httpOnly;
```

--------------------------
### secure
** Boolean, 查询和设置 cookie 是否仅通过 https 传递，缺省 false **

```JavaScript
Boolean HttpCookie.secure;
```

## 成员函数
        
### parse
** 解析给定的字符串，填充 cookie 对象 **

```JavaScript
HttpCookie.parse(String header);
```

调用参数:
* header: String, 指定需要解析的 header 字符串

--------------------------
### match
** 检测给定的 [url](../../module/ifs/url.md) 是否匹配当前设置 **

```JavaScript
Boolean HttpCookie.match(String url);
```

调用参数:
* url: String, 指定测试的 [url](../../module/ifs/url.md)

返回结果:
* Boolean, 匹配成功返回 true

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpCookie.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpCookie.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpCookie.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpCookie.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpCookie.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

