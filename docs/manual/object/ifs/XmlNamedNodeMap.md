# 对象 XmlNamedNodeMap
XmlNamedNodeMap 对象表示一个无顺序的属性列表

## 继承关系
<div class="inherits"><svg width="110pt" height="236pt" viewBox="0.00 0.00 110.00 236.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 232)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-232 106,-232 106,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="22.5,-136 22.5,-228 79.5,-228 79.5,-136 22.5,-136"/>
<polygon fill="none" stroke="#000000" points="23,-206 23,-228 80,-228 80,-206 23,-206"/>
<text text-anchor="start" x="38.1625" y="-214" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="23,-136 23,-206 80,-206 80,-136 23,-136"/>
<text text-anchor="start" x="28" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="28" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="28" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="28" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="28" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- XmlNamedNodeMap -->
<g id="node2" class="node">
<title>XmlNamedNodeMap</title>
<g id="a_node2"><a xlink:title="XmlNamedNodeMap">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-100 102,-100 102,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-78 0,-100 102,-100 102,-78 0,-78"/>
<text text-anchor="start" x="4.6075" y="-86" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNamedNodeMap</text>
<polygon fill="none" stroke="#000000" points="0,-56 0,-78 102,-78 102,-56 0,-56"/>
<text text-anchor="start" x="5" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[]</text>
<polygon fill="none" stroke="#000000" points="0,-34 0,-56 102,-56 102,-34 0,-34"/>
<text text-anchor="start" x="5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-34 102,-34 102,0 0,0"/>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> item()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getNamedItem()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNamedNodeMap -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNamedNodeMap</title>
<path fill="none" stroke="#000000" d="M51,-125.7219C51,-117.3143 51,-108.6916 51,-100.4155"/>
<polygon fill="#000000" stroke="#000000" points="47.5001,-125.8328 51,-135.8328 54.5001,-125.8328 47.5001,-125.8328"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 可使用下标直接访问数据 **

```JavaScript
readonly XmlAttr XmlNamedNodeMap[];
```

## 成员属性
        
### length
** Integer, 返回属性列表中的属性数目 **

```JavaScript
readonly Integer XmlNamedNodeMap.length;
```

## 成员函数
        
### item
** 返回属性列表中处于指定的索引号的属性 **

```JavaScript
XmlAttr XmlNamedNodeMap.item(Integer index);
```

调用参数:
* index: Integer, 指定要查询的索引

返回结果:
* [XmlAttr](XmlAttr.md), 指定索引号的属性

--------------------------
### getNamedItem
** 查询指定名称的属性 **

```JavaScript
XmlAttr XmlNamedNodeMap.getNamedItem(String name);
```

调用参数:
* name: String, 指定要查询的名称

返回结果:
* [XmlAttr](XmlAttr.md), 返回查询出的属性

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlNamedNodeMap.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlNamedNodeMap.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlNamedNodeMap.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlNamedNodeMap.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlNamedNodeMap.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

