# 对象 Queue
FIFO（先进先出）队列对象

用以创建和管理先进先出数据队列，创建方法：

```JavaScript
var collection = require("collection");
var q = new collection.Queue(100);
```

## 继承关系
<div class="inherits"><svg width="109pt" height="422pt" viewBox="0.00 0.00 109.00 422.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 418)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-418 105,-418 105,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="22,-322 22,-414 79,-414 79,-322 22,-322"/>
<polygon fill="none" stroke="#000000" points="22.5,-392 22.5,-414 79.5,-414 79.5,-392 22.5,-392"/>
<text text-anchor="start" x="37.6625" y="-400" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="22.5,-322 22.5,-392 79.5,-392 79.5,-322 22.5,-322"/>
<text text-anchor="start" x="27.5" y="-378" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="27.5" y="-366" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="27.5" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="27.5" y="-342" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="27.5" y="-330" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Queue -->
<g id="node2" class="node">
<title>Queue</title>
<g id="a_node2"><a xlink:title="Queue">
<polygon fill="#d3d3d3" stroke="transparent" points="12.5,-114 12.5,-286 88.5,-286 88.5,-114 12.5,-114"/>
<polygon fill="none" stroke="#000000" points="12.5,-264 12.5,-286 88.5,-286 88.5,-264 12.5,-264"/>
<text text-anchor="start" x="35.4925" y="-272" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Queue</text>
<polygon fill="none" stroke="#000000" points="12.5,-242 12.5,-264 88.5,-264 88.5,-242 12.5,-242"/>
<text text-anchor="start" x="17.5" y="-250" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Queue()</text>
<polygon fill="none" stroke="#000000" points="12.5,-220 12.5,-242 88.5,-242 88.5,-220 12.5,-220"/>
<text text-anchor="start" x="17.5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<polygon fill="none" stroke="#000000" points="12.5,-114 12.5,-220 88.5,-220 88.5,-114 12.5,-114"/>
<text text-anchor="start" x="17.5" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> add()</text>
<text text-anchor="start" x="17.5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> offer()</text>
<text text-anchor="start" x="17.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="17.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> poll()</text>
<text text-anchor="start" x="17.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> element()</text>
<text text-anchor="start" x="17.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> peek()</text>
<text text-anchor="start" x="17.5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="17.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toArray()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Queue -->
<g id="edge1" class="edge">
<title>object-&gt;Queue</title>
<path fill="none" stroke="#000000" d="M50.5,-311.5238C50.5,-303.3438 50.5,-294.7723 50.5,-286.1704"/>
<polygon fill="#000000" stroke="#000000" points="47.0001,-311.6485 50.5,-321.6485 54.0001,-311.6486 47.0001,-311.6485"/>
</g>
<!-- BlockQueue -->
<g id="node3" class="node">
<title>BlockQueue</title>
<g id="a_node3"><a xlink:href="BlockQueue.md" xlink:title="BlockQueue">
<polygon fill="#ffffff" stroke="transparent" points="0,0 0,-78 101,-78 101,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-56 .5,-78 101.5,-78 101.5,-56 .5,-56"/>
<text text-anchor="start" x="23.769" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BlockQueue</text>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-56 101.5,-56 101.5,-34 .5,-34"/>
<text text-anchor="start" x="5.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new BlockQueue()</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 101.5,-34 101.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> put()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> take()</text>
</a>
</g>
</g>
<!-- Queue&#45;&gt;BlockQueue -->
<g id="edge2" class="edge">
<title>Queue-&gt;BlockQueue</title>
<path fill="none" stroke="#000000" d="M50.5,-103.728C50.5,-94.8469 50.5,-86.2324 50.5,-78.34"/>
<polygon fill="#000000" stroke="#000000" points="47.0001,-103.844 50.5,-113.844 54.0001,-103.844 47.0001,-103.844"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Queue
** 队列对象构造函数 **

```JavaScript
new Queue(Integer size);
```

调用参数:
* size: Integer, 指定队列尺寸

## 成员属性
        
### length
** Integer, 返回当前队列尺寸 **

```JavaScript
readonly Integer Queue.length;
```

## 成员函数
        
### add
** 插入一个新的元素到队列，成功返回 True，队列满则抛出错误 **

```JavaScript
Boolean Queue.add(Value e);
```

调用参数:
* e: Value, 要插入的元素

返回结果:
* Boolean, 成功返回 True

--------------------------
### offer
** 插入一个新的元素到队列，成功返回 True，队列满则返回 False **

```JavaScript
Boolean Queue.offer(Value e);
```

调用参数:
* e: Value, 要插入的元素

返回结果:
* Boolean, 成功返回 True

--------------------------
### remove
** 从队列中移除一个元素并返回，如果队列为空则抛出错误 **

```JavaScript
Value Queue.remove();
```

返回结果:
* Value, 返回取出的元素

--------------------------
### poll
** 从队列中移除一个元素并返回 **

```JavaScript
Value Queue.poll();
```

返回结果:
* Value, 返回取出的元素，队列为空则返回 Null

--------------------------
### element
** 从队列中返回一个元素，但不移除，队列为空则抛出错误 **

```JavaScript
Value Queue.element();
```

返回结果:
* Value, 返回取出的元素

--------------------------
### peek
** 从队列中返回一个元素，但不移除 **

```JavaScript
Value Queue.peek();
```

返回结果:
* Value, 返回取出的元素，队列为空则返回 Null

--------------------------
### clear
** 清除当前队列 **

```JavaScript
Queue.clear();
```

--------------------------
### toArray
** 返回队列的 js 数组 **

```JavaScript
Array Queue.toArray();
```

返回结果:
* Array, 包含数据的 js 数组

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Queue.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Queue.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Queue.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Queue.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Queue.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

