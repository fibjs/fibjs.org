# 对象 HeapSnapshot
HeapSnapshots记录JS堆在某个时刻的状态

## 继承关系
<div class="inherits"><svg width="90pt" height="242pt" viewBox="0.00 0.00 90.14 242.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 238)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-238 86.139,-238 86.139,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="12.238,-145.5 12.238,-233.5 69.901,-233.5 69.901,-145.5 12.238,-145.5"/>
<text text-anchor="middle" x="41.0695" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="12.238,-213.5 69.901,-213.5 "/>
<text text-anchor="start" x="20.238" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="20.238" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="20.238" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="20.238" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="20.238" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HeapSnapshot -->
<g id="node2" class="node">
<title>HeapSnapshot</title>
<g id="a_node2"><a xlink:title="HeapSnapshot">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-108.5 82.139,-108.5 82.139,-.5 0,-.5"/>
<text text-anchor="middle" x="41.0695" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HeapSnapshot</text>
<polyline fill="none" stroke="#000000" points="0,-88.5 82.139,-88.5 "/>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">time</text>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">root</text>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">nodes</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 82.139,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">diff()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getNodeById()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">save()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HeapSnapshot -->
<g id="edge1" class="edge">
<title>object-&gt;HeapSnapshot</title>
<path fill="none" stroke="#000000" d="M41.0695,-135.2187C41.0695,-126.4825 41.0695,-117.439 41.0695,-108.7047"/>
<polygon fill="#000000" stroke="#000000" points="37.5696,-135.2959 41.0695,-145.296 44.5696,-135.296 37.5696,-135.2959"/>
</g>
</g>
</svg></div>

## 成员属性
        
### time
** Date, 时间信息 **

```JavaScript
readonly Date HeapSnapshot.time;
```

--------------------------
### root
** [HeapGraphNode](HeapGraphNode.md), 堆视图的根节点 **

```JavaScript
readonly HeapGraphNode HeapSnapshot.root;
```

--------------------------
### nodes
** [List](List.md), 堆视图节点组成的列表 **

```JavaScript
readonly List HeapSnapshot.nodes;
```

## 成员函数
        
### diff
** 和指定的堆快照进行比较 **

```JavaScript
Object HeapSnapshot.diff(HeapSnapshot before);
```

调用参数:
* before: HeapSnapshot, 待比较的堆快照

返回结果:
* Object, 返回堆快照的比较结果

--------------------------
### getNodeById
** 根据ID获取堆视图节点 **

```JavaScript
HeapGraphNode HeapSnapshot.getNodeById(Integer id);
```

调用参数:
* id: Integer, 数字类型的节点ID

返回结果:
* [HeapGraphNode](HeapGraphNode.md), 返回获取到的堆视图节点

--------------------------
### save
** 根据指定名称保存HeapSnapshot **

```JavaScript
HeapSnapshot.save(String fname) async;
```

调用参数:
* fname: String, 快照名称

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HeapSnapshot.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HeapSnapshot.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HeapSnapshot.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HeapSnapshot.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HeapSnapshot.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

