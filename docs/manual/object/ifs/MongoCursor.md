# 对象 MongoCursor
mongodb 数据库数据游标对象

## 继承关系
<div class="inherits"><svg width="85pt" height="294pt" viewBox="0.00 0.00 84.56 294.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 290)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-290 80.56,-290 80.56,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="9.4485,-197.5 9.4485,-285.5 67.1115,-285.5 67.1115,-197.5 9.4485,-197.5"/>
<text text-anchor="middle" x="38.28" y="-272.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="9.4485,-265.5 67.1115,-265.5 "/>
<text text-anchor="start" x="17.4485" y="-252.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="17.4485" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="17.4485" y="-228.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="17.4485" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="17.4485" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- MongoCursor -->
<g id="node2" class="node">
<title>MongoCursor</title>
<g id="a_node2"><a xlink:title="MongoCursor">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-160.5 76.56,-160.5 76.56,-.5 0,-.5"/>
<text text-anchor="middle" x="38.28" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MongoCursor</text>
<polyline fill="none" stroke="#000000" points="0,-140.5 76.56,-140.5 "/>
<text text-anchor="start" x="8" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">skip()</text>
<text text-anchor="start" x="8" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">limit()</text>
<text text-anchor="start" x="8" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sort()</text>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hasNext()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">next()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">count()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">forEach()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">map()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toArray()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hint()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;MongoCursor -->
<g id="edge1" class="edge">
<title>object-&gt;MongoCursor</title>
<path fill="none" stroke="#000000" d="M38.28,-186.9594C38.28,-178.4626 38.28,-169.5338 38.28,-160.6112"/>
<polygon fill="#000000" stroke="#000000" points="34.7801,-187.0798 38.28,-197.0799 41.7801,-187.0799 34.7801,-187.0798"/>
</g>
</g>
</svg></div>

## 成员函数
        
### skip
** 指定返回结果时跳过的记录数 **

```JavaScript
MongoCursor MongoCursor.skip(Integer num) async;
```

调用参数:
* num: Integer, 记录数

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### limit
** 指定返回结果的最大记录数 **

```JavaScript
MongoCursor MongoCursor.limit(Integer size) async;
```

调用参数:
* size: Integer, 记录数

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### sort
** 设定返回结果的排序 **

```JavaScript
MongoCursor MongoCursor.sort(Object opts);
```

调用参数:
* opts: Object, 指定排序条件

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### hasNext
** 查询当前游标是否有下一条记录 **

```JavaScript
Boolean MongoCursor.hasNext();
```

返回结果:
* Boolean, 有记录则返回 true

--------------------------
### next
** 返回当前游标的下一条记录 **

```JavaScript
Object MongoCursor.next();
```

返回结果:
* Object, 记录对象，无记录则返回 null

--------------------------
### count
** 查询游标的记录总数 **

```JavaScript
Integer MongoCursor.count(Boolean applySkipLimit = false);
```

调用参数:
* applySkipLimit: Boolean, 指定是否查询 skip 和 limit 后的记录数，缺省为 false，查询全部记录数

返回结果:
* Integer, 返回记录总数

--------------------------
### size
** 查询游标的记录总数，相当于 count(true) **

```JavaScript
Integer MongoCursor.size();
```

返回结果:
* Integer, 返回记录总数

--------------------------
### forEach
** 遍历全部记录并回调处理函数 **

```JavaScript
MongoCursor.forEach(Function func);
```

调用参数:
* func: Function, 指定处理函数

--------------------------
### map
** 遍历处理全部记录，并返回处理结果 **

```JavaScript
Array MongoCursor.map(Function func);
```

调用参数:
* func: Function, 指定处理函数

返回结果:
* Array, 返回处理结果数组

--------------------------
### toArray
** 返回当前游标全部记录的数组 **

```JavaScript
Array MongoCursor.toArray();
```

返回结果:
* Array, 返回包含全部数据的 Javascript 数组

--------------------------
### hint
** 修改 mongodb 服务器缺省索引策略，使用指定的索引进行查询 **

```JavaScript
MongoCursor MongoCursor.hint(Object opts);
```

调用参数:
* opts: Object, 指定强制使用的索引

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
MongoCursor.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MongoCursor.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MongoCursor.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MongoCursor.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MongoCursor.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

