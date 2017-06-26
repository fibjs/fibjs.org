# 对象 XmlNodeList
XmlNodeList 对象代表一个有顺序的节点列表

## 继承关系
<div class="inherits"><svg width="81pt" height="214pt" viewBox="0.00 0.00 80.67 214.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 210)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-210 76.67,-210 76.67,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="7.5035,-117.5 7.5035,-205.5 65.1665,-205.5 65.1665,-117.5 7.5035,-117.5"/>
<text text-anchor="middle" x="36.335" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="7.5035,-185.5 65.1665,-185.5 "/>
<text text-anchor="start" x="15.5035" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="15.5035" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="15.5035" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="15.5035" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="15.5035" y="-124.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- XmlNodeList -->
<g id="node2" class="node">
<title>XmlNodeList</title>
<g id="a_node2"><a xlink:title="XmlNodeList">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-80.5 72.67,-80.5 72.67,-.5 0,-.5"/>
<text text-anchor="middle" x="36.335" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">XmlNodeList</text>
<polyline fill="none" stroke="#000000" points="0,-60.5 72.67,-60.5 "/>
<text text-anchor="start" x="8" y="-47.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[]</text>
<polyline fill="none" stroke="#000000" points="0,-40.5 72.67,-40.5 "/>
<text text-anchor="start" x="8" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<polyline fill="none" stroke="#000000" points="0,-20.5 72.67,-20.5 "/>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">item()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;XmlNodeList -->
<g id="edge1" class="edge">
<title>object-&gt;XmlNodeList</title>
<path fill="none" stroke="#000000" d="M36.335,-107.4395C36.335,-98.4414 36.335,-89.2511 36.335,-80.677"/>
<polygon fill="#000000" stroke="#000000" points="32.8351,-107.4739 36.335,-117.4739 39.8351,-107.474 32.8351,-107.4739"/>
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

