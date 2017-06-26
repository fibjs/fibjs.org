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
<div class="inherits"><svg width="295pt" height="363pt" viewBox="0.00 0.00 294.73 363.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 359)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-359 290.73,-359 290.73,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="110.171,-266.5 110.171,-354.5 167.834,-354.5 167.834,-266.5 110.171,-266.5"/>
<text text-anchor="middle" x="139.0025" y="-341.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="110.171,-334.5 167.834,-334.5 "/>
<text text-anchor="start" x="118.171" y="-321.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="118.171" y="-309.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="118.171" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="118.171" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="118.171" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:title="Lock">
<polygon fill="#d3d3d3" stroke="#000000" points="106.5565,-145.5 106.5565,-229.5 171.4485,-229.5 171.4485,-145.5 106.5565,-145.5"/>
<text text-anchor="middle" x="139.0025" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polyline fill="none" stroke="#000000" points="106.5565,-209.5 171.4485,-209.5 "/>
<text text-anchor="start" x="114.5565" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Lock()</text>
<polyline fill="none" stroke="#000000" points="106.5565,-189.5 171.4485,-189.5 "/>
<text text-anchor="start" x="114.5565" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">acquire()</text>
<text text-anchor="start" x="114.5565" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">release()</text>
<text text-anchor="start" x="114.5565" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M139.0025,-256.4278C139.0025,-247.4407 139.0025,-238.2389 139.0025,-229.6051"/>
<polygon fill="#000000" stroke="#000000" points="135.5026,-256.4416 139.0025,-266.4416 142.5026,-256.4416 135.5026,-256.4416"/>
</g>
<!-- Condition -->
<g id="node3" class="node">
<title>Condition</title>
<g id="a_node3"><a xlink:href="Condition.md" xlink:title="Condition">
<polygon fill="#ffffff" stroke="#000000" points="0,-12.5 0,-96.5 86.005,-96.5 86.005,-12.5 0,-12.5"/>
<text text-anchor="middle" x="43.0025" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Condition</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 86.005,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Condition()</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 86.005,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notify()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notifyAll()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Condition -->
<g id="edge2" class="edge">
<title>Lock-&gt;Condition</title>
<path fill="none" stroke="#000000" d="M102.7325,-137.251C93.1014,-123.9078 82.799,-109.6348 73.5094,-96.7648"/>
<polygon fill="#000000" stroke="#000000" points="99.9368,-139.358 108.6275,-145.418 105.6127,-135.2611 99.9368,-139.358"/>
</g>
<!-- Event -->
<g id="node4" class="node">
<title>Event</title>
<g id="a_node4"><a xlink:href="Event.md" xlink:title="Event">
<polygon fill="#ffffff" stroke="#000000" points="104.3325,-.5 104.3325,-108.5 173.6725,-108.5 173.6725,-.5 104.3325,-.5"/>
<text text-anchor="middle" x="139.0025" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Event</text>
<polyline fill="none" stroke="#000000" points="104.3325,-88.5 173.6725,-88.5 "/>
<text text-anchor="start" x="112.3325" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Event()</text>
<polyline fill="none" stroke="#000000" points="104.3325,-68.5 173.6725,-68.5 "/>
<text text-anchor="start" x="112.3325" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isSet()</text>
<text text-anchor="start" x="112.3325" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="112.3325" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">pulse()</text>
<text text-anchor="start" x="112.3325" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="112.3325" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Event -->
<g id="edge3" class="edge">
<title>Lock-&gt;Event</title>
<path fill="none" stroke="#000000" d="M139.0025,-135.2898C139.0025,-126.4915 139.0025,-117.343 139.0025,-108.5003"/>
<polygon fill="#000000" stroke="#000000" points="135.5026,-135.4179 139.0025,-145.418 142.5026,-135.418 135.5026,-135.4179"/>
</g>
<!-- Semaphore -->
<g id="node5" class="node">
<title>Semaphore</title>
<g id="a_node5"><a xlink:href="Semaphore.md" xlink:title="Semaphore">
<polygon fill="#ffffff" stroke="#000000" points="191.275,-12.5 191.275,-96.5 286.73,-96.5 286.73,-12.5 191.275,-12.5"/>
<text text-anchor="middle" x="239.0025" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Semaphore</text>
<polyline fill="none" stroke="#000000" points="191.275,-76.5 286.73,-76.5 "/>
<text text-anchor="start" x="199.275" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Semaphore()</text>
<polyline fill="none" stroke="#000000" points="191.275,-56.5 286.73,-56.5 "/>
<text text-anchor="start" x="199.275" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="199.275" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">post()</text>
<text text-anchor="start" x="199.275" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">trywait()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Semaphore -->
<g id="edge4" class="edge">
<title>Lock-&gt;Semaphore</title>
<path fill="none" stroke="#000000" d="M176.7837,-137.251C186.8162,-123.9078 197.5478,-109.6348 207.2245,-96.7648"/>
<polygon fill="#000000" stroke="#000000" points="173.8553,-135.3218 170.6431,-145.418 179.4503,-139.5285 173.8553,-135.3218"/>
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

