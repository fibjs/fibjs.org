# 对象 HeapGraphEdge
HeapGraphEdge表示两个[HeapGraphNode](HeapGraphNode.md)节点间的关联，从上游节点到下游节点

## 继承关系
<div class="inherits"><svg width="93pt" height="238pt" viewBox="0.00 0.00 93.00 238.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 234)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-234 89,-234 89,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14,-138 14,-230 71,-230 71,-138 14,-138"/>
<polygon fill="none" stroke="#000000" points="14.5,-208 14.5,-230 71.5,-230 71.5,-208 14.5,-208"/>
<text text-anchor="start" x="29.6625" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14.5,-138 14.5,-208 71.5,-208 71.5,-138 14.5,-138"/>
<text text-anchor="start" x="19.5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- HeapGraphEdge -->
<g id="node2" class="node">
<title>HeapGraphEdge</title>
<g id="a_node2"><a xlink:title="HeapGraphEdge">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-102 85,-102 85,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-80 .5,-102 85.5,-102 85.5,-80 .5,-80"/>
<text text-anchor="start" x="5.4865" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HeapGraphEdge</text>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-80 85.5,-80 85.5,-34 .5,-34"/>
<text text-anchor="start" x="5.5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="5.5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="5.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> description</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 85.5,-34 85.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getFromNode()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getToNode()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HeapGraphEdge -->
<g id="edge1" class="edge">
<title>object-&gt;HeapGraphEdge</title>
<path fill="none" stroke="#000000" d="M42.5,-127.6477C42.5,-119.1551 42.5,-110.4363 42.5,-102.0632"/>
<polygon fill="#000000" stroke="#000000" points="39.0001,-127.8563 42.5,-137.8563 46.0001,-127.8563 39.0001,-127.8563"/>
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

