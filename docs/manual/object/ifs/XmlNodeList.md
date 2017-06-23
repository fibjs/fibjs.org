# 对象 XmlNodeList
XmlNodeList 对象代表一个有顺序的节点列表

## 继承关系
<div class="inherits"><svg width="74pt" height="224pt" viewBox="0.00 0.00 74.00 224.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 220)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-220 70,-220 70,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="4.5,-124 4.5,-216 61.5,-216 61.5,-124 4.5,-124"/>
<polygon fill="none" stroke="#000000" points="5,-194 5,-216 62,-216 62,-194 5,-194"/>
<text text-anchor="start" x="20.1625" y="-202" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="5,-124 5,-194 62,-194 62,-124 5,-124"/>
<text text-anchor="start" x="10" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="10" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="10" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="10" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="10" y="-132" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- XmlNodeList -->
<g id="node2" class="node">
<title>XmlNodeList</title>
<g id="a_node2"><a xlink:title="XmlNodeList">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-88 66,-88 66,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-66 0,-88 66,-88 66,-66 0,-66"/>
<text text-anchor="start" x="4.665" y="-74" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNodeList</text>
<polygon fill="none" stroke="#000000" points="0,-44 0,-66 66,-66 66,-44 0,-44"/>
<text text-anchor="start" x="5" y="-52" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[]</text>
<polygon fill="none" stroke="#000000" points="0,-22 0,-44 66,-44 66,-22 0,-22"/>
<text text-anchor="start" x="5" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-22 66,-22 66,0 0,0"/>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> item()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNodeList -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNodeList</title>
<path fill="none" stroke="#000000" d="M33,-113.5222C33,-104.9977 33,-96.3123 33,-88.0991"/>
<polygon fill="#000000" stroke="#000000" points="29.5001,-113.7977 33,-123.7977 36.5001,-113.7977 29.5001,-113.7977"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 可使用下标直接访问数据 **

```JavaScript
readonly XmlNode XmlNodeList[];
```

## 成员属性
        
### length
** Integer, 返回节点列表中的节点数目 **

```JavaScript
readonly Integer XmlNodeList.length;
```

## 成员函数
        
### item
** 返回节点列表中处于指定的索引号的节点 **

```JavaScript
XmlNode XmlNodeList.item(Integer index);
```

调用参数:
* index: Integer, 指定要查询的索引

返回结果:
* [XmlNode](XmlNode.md), 指定索引号的节点

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
XmlNodeList.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean XmlNodeList.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String XmlNodeList.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value XmlNodeList.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value XmlNodeList.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

