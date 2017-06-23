# 对象 HeapSnapshot
HeapSnapshots记录JS堆在某个时刻的状态

## 继承关系
<div class="inherits"><svg width="88pt" height="250pt" viewBox="0.00 0.00 88.00 250.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 246)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-246 84,-246 84,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="11.5,-150 11.5,-242 68.5,-242 68.5,-150 11.5,-150"/>
<polygon fill="none" stroke="#000000" points="12,-220 12,-242 69,-242 69,-220 12,-220"/>
<text text-anchor="start" x="27.1625" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="12,-150 12,-220 69,-220 69,-150 12,-150"/>
<text text-anchor="start" x="17" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="17" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="17" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="17" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="17" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- HeapSnapshot -->
<g id="node2" class="node">
<title>HeapSnapshot</title>
<g id="a_node2"><a xlink:title="HeapSnapshot">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-114 80,-114 80,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-92 0,-114 80,-114 80,-92 0,-92"/>
<text text-anchor="start" x="6.9305" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HeapSnapshot</text>
<polygon fill="none" stroke="#000000" points="0,-46 0,-92 80,-92 80,-46 0,-46"/>
<text text-anchor="start" x="5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> time</text>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> root</text>
<text text-anchor="start" x="5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> nodes</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-46 80,-46 80,0 0,0"/>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> diff()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getNodeById()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> save()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HeapSnapshot -->
<g id="edge1" class="edge">
<title>object-&gt;HeapSnapshot</title>
<path fill="none" stroke="#000000" d="M40,-139.6526C40,-131.2672 40,-122.6167 40,-114.2136"/>
<polygon fill="#000000" stroke="#000000" points="36.5001,-139.715 40,-149.715 43.5001,-139.715 36.5001,-139.715"/>
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

