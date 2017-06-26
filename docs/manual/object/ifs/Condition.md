# 对象 Condition
条件变量对象

条件变量是利用纤程间共享的全局变量来进行同步的一种机制，主要包括两个动作：
1）一个线程等待某个条件成立，而将自己挂起；
2）另一个线程使条件成立，并通知等待的纤程向下执行。

为了防止竞争，每个条件变量都需要一个[Lock](Lock.md)的配合（[Lock](Lock.md)可自行显式创建并传递进来，也可交由fibjs为您创建）

通过使用条件变量，可以利用一个条件变量控制一批纤程的开关；

以下是两个纤程调度的实例：

```JavaScript
var coroutine = require("coroutine");
var cond = new coroutine.Condition();
var ready = false;
var state = "ready";

function funcwait() {
    cond.acquire();
    while (!ready)
        cond.wait();
    state = "go"
    cond.release();
}

coroutine.start(funcwait);

cond.acquire();
console.log(state)
ready = true;
cond.notify();
coroutine.sleep();
console.log(state);
```

will output:
```sh
ready
go
```

## 继承关系
<div class="inherits"><svg width="94pt" height="339pt" viewBox="0.00 0.00 94.01 339.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 335)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-335 90.005,-335 90.005,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="14.171,-242.5 14.171,-330.5 71.834,-330.5 71.834,-242.5 14.171,-242.5"/>
<text text-anchor="middle" x="43.0025" y="-317.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="14.171,-310.5 71.834,-310.5 "/>
<text text-anchor="start" x="22.171" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="22.171" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="22.171" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="22.171" y="-261.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="22.171" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Lock -->
<g id="node2" class="node">
<title>Lock</title>
<g id="a_node2"><a xlink:href="Lock.md" xlink:title="Lock">
<polygon fill="#ffffff" stroke="#000000" points="10.5565,-121.5 10.5565,-205.5 75.4485,-205.5 75.4485,-121.5 10.5565,-121.5"/>
<text text-anchor="middle" x="43.0025" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Lock</text>
<polyline fill="none" stroke="#000000" points="10.5565,-185.5 75.4485,-185.5 "/>
<text text-anchor="start" x="18.5565" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Lock()</text>
<polyline fill="none" stroke="#000000" points="10.5565,-165.5 75.4485,-165.5 "/>
<text text-anchor="start" x="18.5565" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">acquire()</text>
<text text-anchor="start" x="18.5565" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">release()</text>
<text text-anchor="start" x="18.5565" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">count()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Lock -->
<g id="edge1" class="edge">
<title>object-&gt;Lock</title>
<path fill="none" stroke="#000000" d="M43.0025,-232.4278C43.0025,-223.4407 43.0025,-214.2389 43.0025,-205.6051"/>
<polygon fill="#000000" stroke="#000000" points="39.5026,-232.4416 43.0025,-242.4416 46.5026,-232.4416 39.5026,-232.4416"/>
</g>
<!-- Condition -->
<g id="node3" class="node">
<title>Condition</title>
<g id="a_node3"><a xlink:title="Condition">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-84.5 86.005,-84.5 86.005,-.5 0,-.5"/>
<text text-anchor="middle" x="43.0025" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Condition</text>
<polyline fill="none" stroke="#000000" points="0,-64.5 86.005,-64.5 "/>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Condition()</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 86.005,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notify()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">notifyAll()</text>
</a>
</g>
</g>
<!-- Lock&#45;&gt;Condition -->
<g id="edge2" class="edge">
<title>Lock-&gt;Condition</title>
<path fill="none" stroke="#000000" d="M43.0025,-110.977C43.0025,-102.1562 43.0025,-93.1052 43.0025,-84.5917"/>
<polygon fill="#000000" stroke="#000000" points="39.5026,-111.18 43.0025,-121.1801 46.5026,-111.1801 39.5026,-111.18"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Condition
** 条件变量构造函数（条件变量所需的锁由fibjs内部构造） **

```JavaScript
new Condition();
```

--------------------------
** 条件变量构造函数 **

```JavaScript
new Condition(Lock lock);
```

调用参数:
* lock: [Lock](Lock.md), 使用自行构造的锁

## 成员函数
        
### wait
** 使纤程进入阻塞状态 **

```JavaScript
Condition.wait();
```

--------------------------
### notify
** 通知一个被阻塞的纤程（最后加入纤程池的）向下继续执行 **

```JavaScript
Condition.notify();
```

--------------------------
### notifyAll
** 通知所有被阻塞的纤程向下继续执行 **

```JavaScript
Condition.notifyAll();
```

--------------------------
### acquire
** 获取锁的拥有权 **

```JavaScript
Boolean Condition.acquire(Boolean blocking = true);
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
Condition.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
** 查询当前等待任务数 **

```JavaScript
Integer Condition.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Condition.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Condition.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Condition.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Condition.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Condition.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

