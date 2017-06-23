# 对象 Lock
纤程锁对象

不同于操作系统的锁，纤程锁是纯逻辑实现，加锁与解锁负荷很小

```JavaScript
var l = new coroutine.Lock();
l.acquire();
.....
l.release();
```

## 继承关系
<div class="inherits"><svg width="302pt" height="376pt" viewBox="0.00 0.00 302.00 376.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 372)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-372 298,-372 298,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="113.5,-276 113.5,-368 170.5,-368 170.5,-276 113.5,-276"/>
<polygon fill="none" stroke="#000000" points="114,-346 114,-368 171,-368 171,-346 114,-346"/>
<text text-anchor="start" x="129.1625" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="114,-276 114,-346 171,-346 171,-276 114,-276"/>
<text text-anchor="start" x="119" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="119" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="119" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="119" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="119" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:title="Lock">
<polygon fill="#d3d3d3" stroke="transparent" points="108.5,-150 108.5,-240 175.5,-240 175.5,-150 108.5,-150"/>
<polygon fill="none" stroke="#000000" points="109,-218 109,-240 176,-240 176,-218 109,-218"/>
<text text-anchor="start" x="131.941" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polygon fill="none" stroke="#000000" points="109,-196 109,-218 176,-218 176,-196 109,-196"/>
<text text-anchor="start" x="114" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Lock()</text>
<polygon fill="none" stroke="#000000" points="109,-150 109,-196 176,-196 176,-150 109,-150"/>
<text text-anchor="start" x="114" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> acquire()</text>
<text text-anchor="start" x="114" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> release()</text>
<text text-anchor="start" x="114" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M142,-265.5361C142,-257.0253 142,-248.3439 142,-240.1135"/>
<polygon fill="#000000" stroke="#000000" points="138.5001,-265.7908 142,-275.7908 145.5001,-265.7909 138.5001,-265.7908"/>
</g>
<!-- Condition -->
<g id="node3" class="node">
<title>Condition</title>
<g id="a_node3"><a xlink:href="Condition.md" xlink:title="Condition">
<polygon fill="#ffffff" stroke="transparent" points="0,-12 0,-102 88,-102 88,-12 0,-12"/>
<polygon fill="none" stroke="#000000" points="0,-80 0,-102 88,-102 88,-80 0,-80"/>
<text text-anchor="start" x="22.8845" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Condition</text>
<polygon fill="none" stroke="#000000" points="0,-58 0,-80 88,-80 88,-58 0,-58"/>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Condition()</text>
<polygon fill="none" stroke="#000000" points="0,-12 0,-58 88,-58 88,-12 0,-12"/>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> notify()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> notifyAll()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Condition -->
<g id="edge2" class="edge">
<title>Lock-&gt;Condition</title>
<path fill="none" stroke="#000000" d="M103.9662,-141.4422C94.7787,-128.5048 85.0491,-114.8038 76.161,-102.2879"/>
<polygon fill="#000000" stroke="#000000" points="101.2674,-143.6869 109.9111,-149.8136 106.9747,-139.6338 101.2674,-143.6869"/>
</g>
<!-- Event -->
<g id="node4" class="node">
<title>Event</title>
<g id="a_node4"><a xlink:href="Event.md" xlink:title="Event">
<polygon fill="#ffffff" stroke="transparent" points="106,0 106,-114 178,-114 178,0 106,0"/>
<polygon fill="none" stroke="#000000" points="106,-92 106,-114 178,-114 178,-92 106,-92"/>
<text text-anchor="start" x="129.217" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Event</text>
<polygon fill="none" stroke="#000000" points="106,-70 106,-92 178,-92 178,-70 106,-70"/>
<text text-anchor="start" x="111" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Event()</text>
<polygon fill="none" stroke="#000000" points="106,0 106,-70 178,-70 178,0 106,0"/>
<text text-anchor="start" x="111" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isSet()</text>
<text text-anchor="start" x="111" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="111" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pulse()</text>
<text text-anchor="start" x="111" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="111" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Event -->
<g id="edge3" class="edge">
<title>Lock-&gt;Event</title>
<path fill="none" stroke="#000000" d="M142,-139.7882C142,-131.426 142,-122.7822 142,-114.3754"/>
<polygon fill="#000000" stroke="#000000" points="138.5001,-139.8136 142,-149.8136 145.5001,-139.8137 138.5001,-139.8136"/>
</g>
<!-- Semaphore -->
<g id="node5" class="node">
<title>Semaphore</title>
<g id="a_node5"><a xlink:href="Semaphore.md" xlink:title="Semaphore">
<polygon fill="#ffffff" stroke="transparent" points="196,-12 196,-102 294,-102 294,-12 196,-12"/>
<polygon fill="none" stroke="#000000" points="196,-80 196,-102 294,-102 294,-80 196,-80"/>
<text text-anchor="start" x="219.1595" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Semaphore</text>
<polygon fill="none" stroke="#000000" points="196,-58 196,-80 294,-80 294,-58 196,-58"/>
<text text-anchor="start" x="201" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Semaphore()</text>
<polygon fill="none" stroke="#000000" points="196,-12 196,-58 294,-58 294,-12 196,-12"/>
<text text-anchor="start" x="201" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
<text text-anchor="start" x="201" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> post()</text>
<text text-anchor="start" x="201" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> trywait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Semaphore -->
<g id="edge4" class="edge">
<title>Lock-&gt;Semaphore</title>
<path fill="none" stroke="#000000" d="M181.9743,-141.4422C191.6305,-128.5048 201.8566,-114.8038 211.1982,-102.2879"/>
<polygon fill="#000000" stroke="#000000" points="178.9026,-139.7062 175.7261,-149.8136 184.5124,-143.8932 178.9026,-139.7062"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Lock
** 构造函数 **

```JavaScript
new Lock();
```

## 成员函数
        
### acquire
** 获取锁的拥有权 **

```JavaScript
Boolean Lock.acquire(Boolean blocking = true);
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
Lock.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
** 查询当前等待任务数 **

```JavaScript
Integer Lock.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Lock.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Lock.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Lock.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Lock.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Lock.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

