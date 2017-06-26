# 对象 HeapGraphNode
HeapGraphNode表示堆视图中的一个节点

## 继承关系
<div class="inherits"><svg width="100pt" height="234pt" viewBox="0.00 0.00 99.58 234.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 230)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-230 95.577,-230 95.577,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="16.957,-137.5 16.957,-225.5 74.62,-225.5 74.62,-137.5 16.957,-137.5"/>
<text text-anchor="middle" x="45.7885" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="16.957,-205.5 74.62,-205.5 "/>
<text text-anchor="start" x="24.957" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="24.957" y="-180.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="24.957" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="24.957" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="24.957" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HeapGraphNode -->
<g id="node2" class="node">
<title>HeapGraphNode</title>
<g id="a_node2"><a xlink:title="HeapGraphNode">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-100.5 91.577,-100.5 91.577,-.5 0,-.5"/>
<text text-anchor="middle" x="45.7885" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HeapGraphNode</text>
<polyline fill="none" stroke="#000000" points="0,-80.5 91.577,-80.5 "/>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">description</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">id</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">shallowSize</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">childs</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HeapGraphNode -->
<g id="edge1" class="edge">
<title>object-&gt;HeapGraphNode</title>
<path fill="none" stroke="#000000" d="M45.7885,-127.0523C45.7885,-118.3123 45.7885,-109.3019 45.7885,-100.6681"/>
<polygon fill="#000000" stroke="#000000" points="42.2886,-127.1493 45.7885,-137.1494 49.2886,-127.1494 42.2886,-127.1493"/>
</g>
</g>
</svg></div>

## 成员属性
        
### type
** Integer, 节点类型，可能的值： **

```JavaScript
readonly Integer HeapGraphNode.type;
```

- [profiler](../../module/ifs/profiler.md).Node_Hidden,         隐藏节点，当显示给用户时可以被过滤掉
- [profiler](../../module/ifs/profiler.md).Node_Array,          数组
- [profiler](../../module/ifs/profiler.md).Node_String,         字符串
- [profiler](../../module/ifs/profiler.md).Node_Object,         JS对象（字符串和数组除外）
- [profiler](../../module/ifs/profiler.md).Node_Code,           编译后的代码
- [profiler](../../module/ifs/profiler.md).Node_Closure,        函数闭包
- [profiler](../../module/ifs/profiler.md).Node_RegExp,         正则表达式
- [profiler](../../module/ifs/profiler.md).Node_HeapNumber,     堆中排好序的数字
- [profiler](../../module/ifs/profiler.md).Node_Native,         Native对象（非v8堆上的）
- [profiler](../../module/ifs/profiler.md).Node_Synthetic,      Synthetic对象
- [profiler](../../module/ifs/profiler.md).Node_ConsString,     拼接的字符串
- [profiler](../../module/ifs/profiler.md).Node_SlicedString,   分割的字符串
- [profiler](../../module/ifs/profiler.md).Node_Symbol,         符号（ES6）
- [profiler](../../module/ifs/profiler.md).Node_SimdValue,      堆中排好序的SIMD值(ES7)

--------------------------
### name
** String, 节点名称 **

```JavaScript
readonly String HeapGraphNode.name;
```

--------------------------
### description
** String, 节点的描述 **

```JavaScript
readonly String HeapGraphNode.description;
```

--------------------------
### id
** Integer, 节点ID **

```JavaScript
readonly Integer HeapGraphNode.id;
```

--------------------------
### shallowSize
** Integer, 节点大小，单位为字节 **

```JavaScript
readonly Integer HeapGraphNode.shallowSize;
```

--------------------------
### childs
** [List](List.md), 子节点列表，由[HeapGraphEdge](HeapGraphEdge.md)类型对象组成 **

```JavaScript
readonly List HeapGraphNode.childs;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HeapGraphNode.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HeapGraphNode.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HeapGraphNode.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HeapGraphNode.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HeapGraphNode.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

