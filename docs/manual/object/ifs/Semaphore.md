# 对象 Semaphore
纤程信号量对象

信号量对象管理一个内部计数器，此计数器调用 acquire 或者 wait 后减一，调用 release 或者 post 后加一。
计数器不会减至负数，因为 acquire 和 wait 在发现数值为 0 的时候，会休眠当前纤程，直至其它纤程通过 release 或 post 增加计数器的值。

信号量常用的场合是限制资源并发使用，以及生产者/消费者模式的应用。

以数据库请求为例，限制资源并发使用的情形：

```JavaScript
var maxconnections = 5;
var l = new coroutine.Semaphore(maxconnections);

......

l.acquire();
var conn = connectdb()
    .....
conn.close();
l.release();
```

生产者/消费者模式通常则将信号量与队列配合使用。生产者向队列中加入数据，并 post 一个信号，消费者则先 wait 信号，获取信号后去队查询取数据。

## 继承关系
<div class="inherits"><svg width="106pt" height="352pt" viewBox="0.00 0.00 106.00 352.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 348)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-348 102,-348 102,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="20.5,-252 20.5,-344 77.5,-344 77.5,-252 20.5,-252"/>
<polygon fill="none" stroke="#000000" points="21,-322 21,-344 78,-344 78,-322 21,-322"/>
<text text-anchor="start" x="36.1625" y="-330" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="21,-252 21,-322 78,-322 78,-252 21,-252"/>
<text text-anchor="start" x="26" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="26" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="26" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="26" y="-272" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="26" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:href="Lock.md" xlink:title="Lock">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-126 15.5,-216 82.5,-216 82.5,-126 15.5,-126"/>
<polygon fill="none" stroke="#000000" points="16,-194 16,-216 83,-216 83,-194 16,-194"/>
<text text-anchor="start" x="38.941" y="-202" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polygon fill="none" stroke="#000000" points="16,-172 16,-194 83,-194 83,-172 16,-172"/>
<text text-anchor="start" x="21" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Lock()</text>
<polygon fill="none" stroke="#000000" points="16,-126 16,-172 83,-172 83,-126 16,-126"/>
<text text-anchor="start" x="21" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> acquire()</text>
<text text-anchor="start" x="21" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> release()</text>
<text text-anchor="start" x="21" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M49,-241.5361C49,-233.0253 49,-224.3439 49,-216.1135"/>
<polygon fill="#000000" stroke="#000000" points="45.5001,-241.7908 49,-251.7908 52.5001,-241.7909 45.5001,-241.7908"/>
</g>
<!-- Semaphore -->
<g id="node3" class="node">
<title>Semaphore</title>
<g id="a_node3"><a xlink:title="Semaphore">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-90 98,-90 98,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-68 0,-90 98,-90 98,-68 0,-68"/>
<text text-anchor="start" x="23.1595" y="-76" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Semaphore</text>
<polygon fill="none" stroke="#000000" points="0,-46 0,-68 98,-68 98,-46 0,-46"/>
<text text-anchor="start" x="5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Semaphore()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-46 98,-46 98,0 0,0"/>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> post()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> trywait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Semaphore -->
<g id="edge2" class="edge">
<title>Lock-&gt;Semaphore</title>
<path fill="none" stroke="#000000" d="M49,-115.6465C49,-107.1565 49,-98.4784 49,-90.2414"/>
<polygon fill="#000000" stroke="#000000" points="45.5001,-115.867 49,-125.867 52.5001,-115.867 45.5001,-115.867"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Semaphore
** 信号量构造函数 **

```JavaScript
new Semaphore(Integer value = 1);
```

调用参数:
* value: Integer, 计数器初始数值

## 成员函数
        
### wait
** 等待一个信号量，等同于 acquire(true) **

```JavaScript
Semaphore.wait();
```

--------------------------
### post
** 释放一个信号量，等同于 release() **

```JavaScript
Semaphore.post();
```

--------------------------
### trywait
** 尝试获取一个信号，如不能获取，则立即返回并返回 false，等同于 acquire(false) **

```JavaScript
Boolean Semaphore.trywait();
```

返回结果:
* Boolean, 获取成功则返回 true

--------------------------
### acquire
** 获取锁的拥有权 **

```JavaScript
Boolean Semaphore.acquire(Boolean blocking = true);
```

调用参数:
* blocking: Boolean, 指定是否等待，为 true 时等待，缺省为真

返回结果:
* Boolean, 返回是否成功获取锁，为 true 表示成功获取

acquire 方法用于获取锁的拥有权，当锁处于可获取状态时，此方法立即返回 true。

当锁不可获取，且 blocking 为 true，则当前纤程进入休眠，当其他纤程释放锁后，此方法返回 true。

当锁不可获取，且 blocking 为 false，则方法返回 false。

--------------------------
### release
** 释放锁的拥有权 **

```JavaScript
Semaphore.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
** 查询当前等待任务数 **

```JavaScript
Integer Semaphore.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Semaphore.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Semaphore.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Semaphore.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Semaphore.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Semaphore.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

