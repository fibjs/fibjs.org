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
<div class="inherits"><svg width="103pt" height="339pt" viewBox="0.00 0.00 103.46 339.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 335)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-335 99.455,-335 99.455,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="18.896,-242.5 18.896,-330.5 76.559,-330.5 76.559,-242.5 18.896,-242.5"/>
<text text-anchor="middle" x="47.7275" y="-317.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="18.896,-310.5 76.559,-310.5 "/>
<text text-anchor="start" x="26.896" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="26.896" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="26.896" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="26.896" y="-261.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="26.896" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:href="Lock.md" xlink:title="Lock">
<polygon fill="#ffffff" stroke="#000000" points="15.2815,-121.5 15.2815,-205.5 80.1735,-205.5 80.1735,-121.5 15.2815,-121.5"/>
<text text-anchor="middle" x="47.7275" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polyline fill="none" stroke="#000000" points="15.2815,-185.5 80.1735,-185.5 "/>
<text text-anchor="start" x="23.2815" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Lock()</text>
<polyline fill="none" stroke="#000000" points="15.2815,-165.5 80.1735,-165.5 "/>
<text text-anchor="start" x="23.2815" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">acquire()</text>
<text text-anchor="start" x="23.2815" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">release()</text>
<text text-anchor="start" x="23.2815" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M47.7275,-232.4278C47.7275,-223.4407 47.7275,-214.2389 47.7275,-205.6051"/>
<polygon fill="#000000" stroke="#000000" points="44.2276,-232.4416 47.7275,-242.4416 51.2276,-232.4416 44.2276,-232.4416"/>
</g>
<!-- Semaphore -->
<g id="node3" class="node">
<title>Semaphore</title>
<g id="a_node3"><a xlink:title="Semaphore">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-84.5 95.455,-84.5 95.455,-.5 0,-.5"/>
<text text-anchor="middle" x="47.7275" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Semaphore</text>
<polyline fill="none" stroke="#000000" points="0,-64.5 95.455,-64.5 "/>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Semaphore()</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 95.455,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">post()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">trywait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Semaphore -->
<g id="edge2" class="edge">
<title>Lock-&gt;Semaphore</title>
<path fill="none" stroke="#000000" d="M47.7275,-110.977C47.7275,-102.1562 47.7275,-93.1052 47.7275,-84.5917"/>
<polygon fill="#000000" stroke="#000000" points="44.2276,-111.18 47.7275,-121.1801 51.2276,-111.1801 44.2276,-111.18"/>
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

