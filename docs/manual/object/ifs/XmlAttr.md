# 对象 XmlAttr
XmlAttr 对象表示 [XmlElement](XmlElement.md) 对象的属性

## 继承关系
<div class="inherits"><svg width="93pt" height="246pt" viewBox="0.00 0.00 92.90 246.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 242)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-242 88.9,-242 88.9,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6185,-149.5 13.6185,-237.5 71.2815,-237.5 71.2815,-149.5 13.6185,-149.5"/>
<text text-anchor="middle" x="42.45" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6185,-217.5 71.2815,-217.5 "/>
<text text-anchor="start" x="21.6185" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6185" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6185" y="-180.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6185" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6185" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- XmlAttr -->
<g id="node2" class="node">
<title>XmlAttr</title>
<g id="a_node2"><a xlink:title="XmlAttr">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-112.5 84.9,-112.5 84.9,-.5 0,-.5"/>
<text text-anchor="middle" x="42.45" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlAttr</text>
<polyline fill="none" stroke="#000000" points="0,-92.5 84.9,-92.5 "/>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">localName</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">value</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">namespaceURI</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">prefix</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeName</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodeValue</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlAttr -->
<g id="edge1" class="edge">
<title>object-&gt;XmlAttr</title>
<path fill="none" stroke="#000000" d="M42.45,-139.2743C42.45,-130.4908 42.45,-121.3795 42.45,-112.5536"/>
<polygon fill="#000000" stroke="#000000" points="38.9501,-139.3982 42.45,-149.3982 45.9501,-139.3983 38.9501,-139.3982"/>
</g>
</g>
</svg></div>

## 成员属性
        
### localName
** String, 查询元素的本地名称。如果选定的节点无命名空间，则该属性等同于 nodeName **

```JavaScript
readonly String XmlAttr.localName;
```

--------------------------
### value
** String, 属性的值 **

```JavaScript
String XmlAttr.value;
```

--------------------------
### name
** String, 属性的名称 **

```JavaScript
readonly String XmlAttr.name;
```

--------------------------
### namespaceURI
** String, 查询元素的命名空间的 URI。如果选定的节点无命名空间，则该属性返回 NULL **

```JavaScript
readonly String XmlAttr.namespaceURI;
```

--------------------------
### prefix
** String, 查询和设置元素的命名空间前缀。如果选定的节点无命名空间，则该属性返回 NULL **

```JavaScript
String XmlAttr.prefix;
```

--------------------------
### nodeName
** String, 属性的名称，为兼容的目的 **

```JavaScript
readonly String XmlAttr.nodeName;
```

--------------------------
### nodeValue
** String, 属性的值，为兼容的目的 **

```JavaScript
String XmlAttr.nodeValue;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlAttr.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlAttr.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlAttr.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlAttr.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlAttr.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

