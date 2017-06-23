# 对象 Event
事件对象

通过一个事件达到对一组纤程进行控制的目的（事件对象的状态为bool类型）

## 继承关系
<div class="inherits"><svg width="80pt" height="376pt" viewBox="0.00 0.00 80.00 376.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 372)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-372 76,-372 76,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="7.5,-276 7.5,-368 64.5,-368 64.5,-276 7.5,-276"/>
<polygon fill="none" stroke="#000000" points="8,-346 8,-368 65,-368 65,-346 8,-346"/>
<text text-anchor="start" x="23.1625" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="8,-276 8,-346 65,-346 65,-276 8,-276"/>
<text text-anchor="start" x="13" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="13" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="13" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="13" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="13" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:href="Lock.md" xlink:title="Lock">
<polygon fill="#ffffff" stroke="transparent" points="2.5,-150 2.5,-240 69.5,-240 69.5,-150 2.5,-150"/>
<polygon fill="none" stroke="#000000" points="3,-218 3,-240 70,-240 70,-218 3,-218"/>
<text text-anchor="start" x="25.941" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polygon fill="none" stroke="#000000" points="3,-196 3,-218 70,-218 70,-196 3,-196"/>
<text text-anchor="start" x="8" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Lock()</text>
<polygon fill="none" stroke="#000000" points="3,-150 3,-196 70,-196 70,-150 3,-150"/>
<text text-anchor="start" x="8" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> acquire()</text>
<text text-anchor="start" x="8" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> release()</text>
<text text-anchor="start" x="8" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M36,-265.5361C36,-257.0253 36,-248.3439 36,-240.1135"/>
<polygon fill="#000000" stroke="#000000" points="32.5001,-265.7908 36,-275.7908 39.5001,-265.7909 32.5001,-265.7908"/>
</g>
<!-- Event -->
<g id="node3" class="node">
<title>Event</title>
<g id="a_node3"><a xlink:title="Event">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-114 72,-114 72,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-92 0,-114 72,-114 72,-92 0,-92"/>
<text text-anchor="start" x="23.217" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Event</text>
<polygon fill="none" stroke="#000000" points="0,-70 0,-92 72,-92 72,-70 0,-70"/>
<text text-anchor="start" x="5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Event()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-70 72,-70 72,0 0,0"/>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isSet()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pulse()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Event -->
<g id="edge2" class="edge">
<title>Lock-&gt;Event</title>
<path fill="none" stroke="#000000" d="M36,-139.7882C36,-131.426 36,-122.7822 36,-114.3754"/>
<polygon fill="#000000" stroke="#000000" points="32.5001,-139.8136 36,-149.8136 39.5001,-139.8137 32.5001,-139.8136"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Event
** 事件对象构造函数 **

```JavaScript
new Event(Boolean value = false);
```

调用参数:
* value: Boolean, 指定是否等待，为 true 时等待，缺省为 false

## 成员函数
        
### isSet
** 判断事件对象是否为真 **

```JavaScript
Boolean Event.isSet();
```

返回结果:
* Boolean, 如果事件为真，返回 true

--------------------------
### set
** 激活事件（将事件状态改为true），并调用pulse() **

```JavaScript
Event.set();
```

--------------------------
### pulse
** 激活等待该事件的所有纤程 **

```JavaScript
Event.pulse();
```

--------------------------
### clear
** 重置事件（将事件状态改为false） **

```JavaScript
Event.clear();
```

--------------------------
### wait
** 等待一个事件 **

```JavaScript
Event.wait();
```

--------------------------
### acquire
** 获取锁的拥有权 **

```JavaScript
Boolean Event.acquire(Boolean blocking = true);
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
Event.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
** 查询当前等待任务数 **

```JavaScript
Integer Event.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Event.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Event.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Event.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Event.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Event.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

