# 对象 HttpCookie
[http](../../module/ifs/http.md) Cookie 对象，用于添加和处理 cookie

## 继承关系
<div class="inherits"><svg width="104pt" height="308pt" viewBox="0.00 0.00 104.00 308.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 304)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-304 100,-304 100,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="19.5,-208 19.5,-300 76.5,-300 76.5,-208 19.5,-208"/>
<polygon fill="none" stroke="#000000" points="20,-278 20,-300 77,-300 77,-278 20,-278"/>
<text text-anchor="start" x="35.1625" y="-286" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="20,-208 20,-278 77,-278 77,-208 20,-208"/>
<text text-anchor="start" x="25" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="25" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="25" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="25" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="25" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- HttpCookie -->
<g id="node2" class="node">
<title>HttpCookie</title>
<g id="a_node2"><a xlink:title="HttpCookie">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-172 96,-172 96,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-150 0,-172 96,-172 96,-150 0,-150"/>
<text text-anchor="start" x="23.2745" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpCookie</text>
<polygon fill="none" stroke="#000000" points="0,-128 0,-150 96,-150 96,-128 0,-128"/>
<text text-anchor="start" x="5" y="-136" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpCookie()</text>
<polygon fill="none" stroke="#000000" points="0,-34 0,-128 96,-128 96,-34 0,-34"/>
<text text-anchor="start" x="5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> value</text>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> domain</text>
<text text-anchor="start" x="5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> path</text>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> expires</text>
<text text-anchor="start" x="5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> httpOnly</text>
<text text-anchor="start" x="5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> secure</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-34 96,-34 96,0 0,0"/>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> parse()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> match()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpCookie -->
<g id="edge1" class="edge">
<title>object-&gt;HttpCookie</title>
<path fill="none" stroke="#000000" d="M48,-197.5238C48,-189.3438 48,-180.7723 48,-172.1704"/>
<polygon fill="#000000" stroke="#000000" points="44.5001,-197.6485 48,-207.6485 51.5001,-197.6486 44.5001,-197.6485"/>
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

