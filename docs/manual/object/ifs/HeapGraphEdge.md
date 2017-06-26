# 对象 HeapGraphEdge
HeapGraphEdge表示两个[HeapGraphNode](HeapGraphNode.md)节点间的关联，从上游节点到下游节点

## 继承关系
<div class="inherits"><svg width="99pt" height="230pt" viewBox="0.00 0.00 99.03 230.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 226)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-226 95.027,-226 95.027,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="16.682,-133.5 16.682,-221.5 74.345,-221.5 74.345,-133.5 16.682,-133.5"/>
<text text-anchor="middle" x="45.5135" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="16.682,-201.5 74.345,-201.5 "/>
<text text-anchor="start" x="24.682" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="24.682" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="24.682" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="24.682" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="24.682" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HeapGraphEdge -->
<g id="node2" class="node">
<title>HeapGraphEdge</title>
<g id="a_node2"><a xlink:title="HeapGraphEdge">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-96.5 91.027,-96.5 91.027,-.5 0,-.5"/>
<text text-anchor="middle" x="45.5135" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HeapGraphEdge</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 91.027,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">description</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 91.027,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getFromNode()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getToNode()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HeapGraphEdge -->
<g id="edge1" class="edge">
<title>object-&gt;HeapGraphEdge</title>
<path fill="none" stroke="#000000" d="M45.5135,-123.2875C45.5135,-114.4791 45.5135,-105.4079 45.5135,-96.7541"/>
<polygon fill="#000000" stroke="#000000" points="42.0136,-123.4663 45.5135,-133.4663 49.0136,-123.4664 42.0136,-123.4663"/>
</g>
</g>
</svg></div>

## 成员属性
        
### type
** Integer, 下游节点的链接方式，可能的值： **

```JavaScript
readonly Integer HeapGraphEdge.type;
```

- [profiler](../../module/ifs/profiler.md).Edge_ContextVariable,  函数中的变量
- [profiler](../../module/ifs/profiler.md).Edge_Element,          数组中的元素
- [profiler](../../module/ifs/profiler.md).Edge_Property,         有名对象的属性
- [profiler](../../module/ifs/profiler.md).Edge_Internal,         JS无法进入的链接
- [profiler](../../module/ifs/profiler.md).Edge_Hidden,           指向需要事先计算出空间大小的节点
- [profiler](../../module/ifs/profiler.md).Edge_Shortcut,         指向无法事先计算出空间大小的节点
- [profiler](../../module/ifs/profiler.md).Edge_Weak,             一个弱引用（被GC忽视）

--------------------------
### name
** String, 链接名称 **

```JavaScript
readonly String HeapGraphEdge.name;
```

--------------------------
### description
** String, 链接的描述 **

```JavaScript
readonly String HeapGraphEdge.description;
```

## 成员函数
        
### getFromNode
** 获取HeapGraphEdge的上游[HeapGraphNode](HeapGraphNode.md)节点 **

```JavaScript
HeapGraphNode HeapGraphEdge.getFromNode();
```

返回结果:
* [HeapGraphNode](HeapGraphNode.md), 返回源[HeapGraphNode](HeapGraphNode.md)节点

--------------------------
### getToNode
** 获取HeapGraphEdge的下游[HeapGraphNode](HeapGraphNode.md)节点 **

```JavaScript
HeapGraphNode HeapGraphEdge.getToNode();
```

返回结果:
* [HeapGraphNode](HeapGraphNode.md), 返回目的[HeapGraphNode](HeapGraphNode.md)节点

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HeapGraphEdge.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HeapGraphEdge.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HeapGraphEdge.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HeapGraphEdge.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HeapGraphEdge.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

