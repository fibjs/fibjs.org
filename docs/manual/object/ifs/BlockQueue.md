# 对象 BlockQueue
阻塞 FIFO（先进先出）队列对象

用以创建和管理阻塞先进先出数据队列，创建方法：

```JavaScript
var coroutine = require("coroutine");
var q = new coroutine.BlockQueue(100);
```

## 继承关系
<div class="inherits"><svg width="106pt" height="407pt" viewBox="0.00 0.00 106.24 407.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 403)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-403 102.236,-403 102.236,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="20.2865,-310.5 20.2865,-398.5 77.9495,-398.5 77.9495,-310.5 20.2865,-310.5"/>
<text text-anchor="middle" x="49.118" y="-385.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="20.2865,-378.5 77.9495,-378.5 "/>
<text text-anchor="start" x="28.2865" y="-365.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="28.2865" y="-353.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="28.2865" y="-341.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="28.2865" y="-329.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="28.2865" y="-317.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Queue -->
<g id="node2" class="node">
<title>Queue</title>
<g id="a_node2"><a xlink:href="Queue.md" xlink:title="Queue">
<polygon fill="#ffffff" stroke="#000000" points="12.2235,-109.5 12.2235,-273.5 86.0125,-273.5 86.0125,-109.5 12.2235,-109.5"/>
<text text-anchor="middle" x="49.118" y="-260.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Queue</text>
<polyline fill="none" stroke="#000000" points="12.2235,-253.5 86.0125,-253.5 "/>
<text text-anchor="start" x="20.2235" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Queue()</text>
<polyline fill="none" stroke="#000000" points="12.2235,-233.5 86.0125,-233.5 "/>
<text text-anchor="start" x="20.2235" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<polyline fill="none" stroke="#000000" points="12.2235,-213.5 86.0125,-213.5 "/>
<text text-anchor="start" x="20.2235" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">add()</text>
<text text-anchor="start" x="20.2235" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">offer()</text>
<text text-anchor="start" x="20.2235" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
<text text-anchor="start" x="20.2235" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">poll()</text>
<text text-anchor="start" x="20.2235" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">element()</text>
<text text-anchor="start" x="20.2235" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">peek()</text>
<text text-anchor="start" x="20.2235" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="20.2235" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toArray()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Queue -->
<g id="edge1" class="edge">
<title>object-&gt;Queue</title>
<path fill="none" stroke="#000000" d="M49.118,-300.2135C49.118,-291.6629 49.118,-282.6609 49.118,-273.6482"/>
<polygon fill="#000000" stroke="#000000" points="45.6181,-300.3898 49.118,-310.3899 52.6181,-300.3899 45.6181,-300.3898"/>
</g>
<!-- BlockQueue -->
<g id="node3" class="node">
<title>BlockQueue</title>
<g id="a_node3"><a xlink:title="BlockQueue">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-72.5 98.236,-72.5 98.236,-.5 0,-.5"/>
<text text-anchor="middle" x="49.118" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BlockQueue</text>
<polyline fill="none" stroke="#000000" points="0,-52.5 98.236,-52.5 "/>
<text text-anchor="start" x="8" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new BlockQueue()</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 98.236,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">put()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">take()</text>
</a>
</g>
</g>
<!-- Queue&#45;&gt;BlockQueue -->
<g id="edge2" class="edge">
<title>Queue-&gt;BlockQueue</title>
<path fill="none" stroke="#000000" d="M49.118,-99.224C49.118,-89.8724 49.118,-80.819 49.118,-72.6358"/>
<polygon fill="#000000" stroke="#000000" points="45.6181,-99.4613 49.118,-109.4613 52.6181,-99.4613 45.6181,-99.4613"/>
</g>
</g>
</svg></div>

## 构造函数
        
### BlockQueue
** 队列对象构造函数 **

```JavaScript
new BlockQueue(Integer size);
```

调用参数:
* size: Integer, 指定队列尺寸

## 成员属性
        
### length
** Integer, 返回当前队列尺寸 **

```JavaScript
readonly Integer BlockQueue.length;
```

## 成员函数
        
### put
** 插入一个新的元素到队列，成功返回 True，队列满则等待 **

```JavaScript
BlockQueue.put(Value e);
```

调用参数:
* e: Value, 要插入的元素

--------------------------
### take
** 从队列中移除一个元素并返回，如果队列为空则等待 **

```JavaScript
Value BlockQueue.take();
```

返回结果:
* Value, 返回取出的元素

--------------------------
### add
** 插入一个新的元素到队列，成功返回 True，队列满则抛出错误 **

```JavaScript
Boolean BlockQueue.add(Value e);
```

调用参数:
* e: Value, 要插入的元素

返回结果:
* Boolean, 成功返回 True

--------------------------
### offer
** 插入一个新的元素到队列，成功返回 True，队列满则返回 False **

```JavaScript
Boolean BlockQueue.offer(Value e);
```

调用参数:
* e: Value, 要插入的元素

返回结果:
* Boolean, 成功返回 True

--------------------------
### remove
** 从队列中移除一个元素并返回，如果队列为空则抛出错误 **

```JavaScript
Value BlockQueue.remove();
```

返回结果:
* Value, 返回取出的元素

--------------------------
### poll
** 从队列中移除一个元素并返回 **

```JavaScript
Value BlockQueue.poll();
```

返回结果:
* Value, 返回取出的元素，队列为空则返回 Null

--------------------------
### element
** 从队列中返回一个元素，但不移除，队列为空则抛出错误 **

```JavaScript
Value BlockQueue.element();
```

返回结果:
* Value, 返回取出的元素

--------------------------
### peek
** 从队列中返回一个元素，但不移除 **

```JavaScript
Value BlockQueue.peek();
```

返回结果:
* Value, 返回取出的元素，队列为空则返回 Null

--------------------------
### clear
** 清除当前队列 **

```JavaScript
BlockQueue.clear();
```

--------------------------
### toArray
** 返回队列的 js 数组 **

```JavaScript
Array BlockQueue.toArray();
```

返回结果:
* Array, 包含数据的 js 数组

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
BlockQueue.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean BlockQueue.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String BlockQueue.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value BlockQueue.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value BlockQueue.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

