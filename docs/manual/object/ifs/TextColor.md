# 对象 TextColor
终端输出颜色配置对象

## 继承关系
<div class="inherits"><svg width="67pt" height="210pt" viewBox="0.00 0.00 67.33 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 206)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-206 63.332,-206 63.332,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points=".8345,-113.5 .8345,-201.5 58.4975,-201.5 58.4975,-113.5 .8345,-113.5"/>
<text text-anchor="middle" x="29.666" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points=".8345,-181.5 58.4975,-181.5 "/>
<text text-anchor="start" x="8.8345" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="8.8345" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="8.8345" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="8.8345" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="8.8345" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- TextColor -->
<g id="node2" class="node">
<title>TextColor</title>
<g id="a_node2"><a xlink:title="TextColor">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-76.5 59.332,-76.5 59.332,-.5 0,-.5"/>
<text text-anchor="middle" x="29.666" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TextColor</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 59.332,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notice</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">warn</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">error</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">highLight</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TextColor -->
<g id="edge1" class="edge">
<title>object-&gt;TextColor</title>
<path fill="none" stroke="#000000" d="M29.666,-103.1681C29.666,-94.1942 29.666,-85.0623 29.666,-76.5973"/>
<polygon fill="#000000" stroke="#000000" points="26.1661,-103.1888 29.666,-113.1888 33.1661,-103.1888 26.1661,-103.1888"/>
</g>
</g>
</svg></div>

## 成员属性
        
### notice
** String, 指定 [console](../../module/ifs/console.md).notice 颜色 **

```JavaScript
String TextColor.notice;
```

--------------------------
### warn
** String, 指定 [console](../../module/ifs/console.md).warn 颜色 **

```JavaScript
String TextColor.warn;
```

--------------------------
### error
** String, 指定 [console](../../module/ifs/console.md).error 颜色 **

```JavaScript
String TextColor.error;
```

--------------------------
### highLight
** String, 指定 highLight 颜色 **

```JavaScript
String TextColor.highLight;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
TextColor.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean TextColor.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String TextColor.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value TextColor.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value TextColor.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

