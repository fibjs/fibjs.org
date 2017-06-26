# 对象 XmlNamedNodeMap
XmlNamedNodeMap 对象表示一个无顺序的属性列表

## 继承关系
<div class="inherits"><svg width="117pt" height="226pt" viewBox="0.00 0.00 116.78 226.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 222)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-222 112.785,-222 112.785,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="25.561,-129.5 25.561,-217.5 83.224,-217.5 83.224,-129.5 25.561,-129.5"/>
<text text-anchor="middle" x="54.3925" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="25.561,-197.5 83.224,-197.5 "/>
<text text-anchor="start" x="33.561" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="33.561" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="33.561" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="33.561" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="33.561" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- XmlNamedNodeMap -->
<g id="node2" class="node">
<title>XmlNamedNodeMap</title>
<g id="a_node2"><a xlink:title="XmlNamedNodeMap">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-92.5 108.785,-92.5 108.785,-.5 0,-.5"/>
<text text-anchor="middle" x="54.3925" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNamedNodeMap</text>
<polyline fill="none" stroke="#000000" points="0,-72.5 108.785,-72.5 "/>
<text text-anchor="start" x="8" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[]</text>
<polyline fill="none" stroke="#000000" points="0,-52.5 108.785,-52.5 "/>
<text text-anchor="start" x="8" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 108.785,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">item()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getNamedItem()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNamedNodeMap -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNamedNodeMap</title>
<path fill="none" stroke="#000000" d="M54.3925,-119.2071C54.3925,-110.3605 54.3925,-101.2704 54.3925,-92.6432"/>
<polygon fill="#000000" stroke="#000000" points="50.8926,-119.438 54.3925,-129.438 57.8926,-119.438 50.8926,-119.438"/>
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

