# 对象 Event
事件对象

通过一个事件达到对一组纤程进行控制的目的（事件对象的状态为bool类型）

## 继承关系
<div class="inherits"><svg width="77pt" height="363pt" viewBox="0.00 0.00 77.34 363.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 359)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-359 73.34,-359 73.34,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="5.8385,-266.5 5.8385,-354.5 63.5015,-354.5 63.5015,-266.5 5.8385,-266.5"/>
<text text-anchor="middle" x="34.67" y="-341.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="5.8385,-334.5 63.5015,-334.5 "/>
<text text-anchor="start" x="13.8385" y="-321.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="13.8385" y="-309.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="13.8385" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="13.8385" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="13.8385" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:href="Lock.md" xlink:title="Lock">
<polygon fill="#ffffff" stroke="#000000" points="2.224,-145.5 2.224,-229.5 67.116,-229.5 67.116,-145.5 2.224,-145.5"/>
<text text-anchor="middle" x="34.67" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polyline fill="none" stroke="#000000" points="2.224,-209.5 67.116,-209.5 "/>
<text text-anchor="start" x="10.224" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Lock()</text>
<polyline fill="none" stroke="#000000" points="2.224,-189.5 67.116,-189.5 "/>
<text text-anchor="start" x="10.224" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">acquire()</text>
<text text-anchor="start" x="10.224" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">release()</text>
<text text-anchor="start" x="10.224" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M34.67,-256.4278C34.67,-247.4407 34.67,-238.2389 34.67,-229.6051"/>
<polygon fill="#000000" stroke="#000000" points="31.1701,-256.4416 34.67,-266.4416 38.1701,-256.4416 31.1701,-256.4416"/>
</g>
<!-- Event -->
<g id="node3" class="node">
<title>Event</title>
<g id="a_node3"><a xlink:title="Event">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-108.5 69.34,-108.5 69.34,-.5 0,-.5"/>
<text text-anchor="middle" x="34.67" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Event</text>
<polyline fill="none" stroke="#000000" points="0,-88.5 69.34,-88.5 "/>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Event()</text>
<polyline fill="none" stroke="#000000" points="0,-68.5 69.34,-68.5 "/>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isSet()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">pulse()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Event -->
<g id="edge2" class="edge">
<title>Lock-&gt;Event</title>
<path fill="none" stroke="#000000" d="M34.67,-135.2898C34.67,-126.4915 34.67,-117.343 34.67,-108.5003"/>
<polygon fill="#000000" stroke="#000000" points="31.1701,-135.4179 34.67,-145.418 38.1701,-135.418 31.1701,-135.4179"/>
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

