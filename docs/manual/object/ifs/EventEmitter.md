# 对象 EventEmitter
事件触发对象，可用于建立观察者模式，支持事件触发的对象均继承于此，同一事件的同一函数只会产生一次回调

[Event](Event.md) 对象可独立创建，以用于组建自定义的事件系统：

```JavaScript
var EventEmitter = require('events');

var e = new EventEmitter();
```

## 继承关系
<div class="inherits"><svg width="399pt" height="607pt" viewBox="0.00 0.00 398.61 607.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 603)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-603 394.6145,-603 394.6145,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="166.723,-510.5 166.723,-598.5 224.386,-598.5 224.386,-510.5 166.723,-510.5"/>
<text text-anchor="middle" x="195.5545" y="-585.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="166.723,-578.5 224.386,-578.5 "/>
<text text-anchor="start" x="174.723" y="-565.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="174.723" y="-553.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="174.723" y="-541.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="174.723" y="-529.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="174.723" y="-517.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- EventEmitter -->
<g id="node2" class="node">
<title>EventEmitter</title>
<g id="a_node2"><a xlink:title="EventEmitter">
<polygon fill="#d3d3d3" stroke="#000000" points="136.154,-237.5 136.154,-473.5 254.955,-473.5 254.955,-237.5 136.154,-237.5"/>
<text text-anchor="middle" x="195.5545" y="-460.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventEmitter</text>
<polyline fill="none" stroke="#000000" points="136.154,-453.5 254.955,-453.5 "/>
<text text-anchor="start" x="144.154" y="-440.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new EventEmitter()</text>
<polyline fill="none" stroke="#000000" points="136.154,-433.5 254.955,-433.5 "/>
<text text-anchor="start" x="144.154" y="-420.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">defaultMaxListeners</text>
<polyline fill="none" stroke="#000000" points="136.154,-413.5 254.955,-413.5 "/>
<text text-anchor="start" x="144.154" y="-400.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">on()</text>
<text text-anchor="start" x="144.154" y="-388.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">addListener()</text>
<text text-anchor="start" x="144.154" y="-376.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">prependListener()</text>
<text text-anchor="start" x="144.154" y="-364.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">once()</text>
<text text-anchor="start" x="144.154" y="-352.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">prependOnceListener()</text>
<text text-anchor="start" x="144.154" y="-340.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">off()</text>
<text text-anchor="start" x="144.154" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeListener()</text>
<text text-anchor="start" x="144.154" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeAllListeners()</text>
<text text-anchor="start" x="144.154" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setMaxListeners()</text>
<text text-anchor="start" x="144.154" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getMaxListeners()</text>
<text text-anchor="start" x="144.154" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listeners()</text>
<text text-anchor="start" x="144.154" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listenerCount()</text>
<text text-anchor="start" x="144.154" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">eventNames()</text>
<text text-anchor="start" x="144.154" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">emit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventEmitter -->
<g id="edge1" class="edge">
<title>object-&gt;EventEmitter</title>
<path fill="none" stroke="#000000" d="M195.5545,-500.1104C195.5545,-491.7939 195.5545,-482.9442 195.5545,-473.8773"/>
<polygon fill="#000000" stroke="#000000" points="192.0546,-500.3354 195.5545,-510.3355 199.0546,-500.3355 192.0546,-500.3354"/>
</g>
<!-- Service -->
<g id="node3" class="node">
<title>Service</title>
<g id="a_node3"><a xlink:href="Service.md" xlink:title="Service">
<polygon fill="#ffffff" stroke="#000000" points="0,-.5 0,-200.5 77.109,-200.5 77.109,-.5 0,-.5"/>
<text text-anchor="middle" x="38.5545" y="-187.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Service</text>
<polyline fill="none" stroke="#000000" points="0,-180.5 77.109,-180.5 "/>
<text text-anchor="start" x="8" y="-167.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Service()</text>
<polyline fill="none" stroke="#000000" points="0,-160.5 77.109,-160.5 "/>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onstop</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onpause</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">oncontinue</text>
<polyline fill="none" stroke="#000000" points="0,-104.5 77.109,-104.5 "/>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">install()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">start()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stop()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">restart()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">run()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isInstalled()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isRunning()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;Service -->
<g id="edge2" class="edge">
<title>EventEmitter-&gt;Service</title>
<path fill="none" stroke="#000000" d="M130.0961,-268.1568C115.0675,-246.6606 99.6662,-223.3785 86.5545,-201 83.3777,-195.578 80.2339,-189.9129 77.1659,-184.1538"/>
<polygon fill="#000000" stroke="#000000" points="127.4348,-270.4566 136.0549,-276.6166 133.1577,-266.4256 127.4348,-270.4566"/>
</g>
<!-- WebSocket -->
<g id="node4" class="node">
<title>WebSocket</title>
<g id="a_node4"><a xlink:href="WebSocket.md" xlink:title="WebSocket">
<polygon fill="#ffffff" stroke="#000000" points="95.106,-12.5 95.106,-188.5 190.003,-188.5 190.003,-12.5 95.106,-12.5"/>
<text text-anchor="middle" x="142.5545" y="-175.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocket</text>
<polyline fill="none" stroke="#000000" points="95.106,-168.5 190.003,-168.5 "/>
<text text-anchor="start" x="103.106" y="-155.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new WebSocket()</text>
<polyline fill="none" stroke="#000000" points="95.106,-148.5 190.003,-148.5 "/>
<text text-anchor="start" x="103.106" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">url</text>
<text text-anchor="start" x="103.106" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">protocol</text>
<text text-anchor="start" x="103.106" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">origin</text>
<text text-anchor="start" x="103.106" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readyState</text>
<text text-anchor="start" x="103.106" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onopen</text>
<text text-anchor="start" x="103.106" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onmessage</text>
<text text-anchor="start" x="103.106" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onclose</text>
<text text-anchor="start" x="103.106" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror</text>
<polyline fill="none" stroke="#000000" points="95.106,-44.5 190.003,-44.5 "/>
<text text-anchor="start" x="103.106" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="103.106" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">send()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;WebSocket -->
<g id="edge3" class="edge">
<title>EventEmitter-&gt;WebSocket</title>
<path fill="none" stroke="#000000" d="M168.9114,-227.3114C166.1861,-214.1994 163.4629,-201.0971 160.857,-188.5592"/>
<polygon fill="#000000" stroke="#000000" points="165.5321,-228.2525 170.9939,-237.331 172.3856,-226.8279 165.5321,-228.2525"/>
</g>
<!-- WebView -->
<g id="node5" class="node">
<title>WebView</title>
<g id="a_node5"><a xlink:href="WebView.md" xlink:title="WebView">
<polygon fill="#ffffff" stroke="#000000" points="208.4945,-16.5 208.4945,-184.5 290.6145,-184.5 290.6145,-16.5 208.4945,-16.5"/>
<text text-anchor="middle" x="249.5545" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebView</text>
<polyline fill="none" stroke="#000000" points="208.4945,-164.5 290.6145,-164.5 "/>
<text text-anchor="start" x="216.4945" y="-151.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">visible</text>
<text text-anchor="start" x="216.4945" y="-139.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onload</text>
<text text-anchor="start" x="216.4945" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onmove</text>
<text text-anchor="start" x="216.4945" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onresize</text>
<text text-anchor="start" x="216.4945" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onclose</text>
<text text-anchor="start" x="216.4945" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onmessage</text>
<polyline fill="none" stroke="#000000" points="208.4945,-84.5 290.6145,-84.5 "/>
<text text-anchor="start" x="216.4945" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setHtml()</text>
<text text-anchor="start" x="216.4945" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">print()</text>
<text text-anchor="start" x="216.4945" y="-47.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="216.4945" y="-35.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="216.4945" y="-23.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">postMessage()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;WebView -->
<g id="edge4" class="edge">
<title>EventEmitter-&gt;WebView</title>
<path fill="none" stroke="#000000" d="M222.6925,-227.3481C225.7483,-212.918 228.8018,-198.4989 231.6963,-184.8304"/>
<polygon fill="#000000" stroke="#000000" points="219.2262,-226.8228 220.5785,-237.331 226.0744,-228.273 219.2262,-226.8228"/>
</g>
<!-- Worker -->
<g id="node6" class="node">
<title>Worker</title>
<g id="a_node6"><a xlink:href="Worker.md" xlink:title="Worker">
<polygon fill="#ffffff" stroke="#000000" points="308.4945,-60.5 308.4945,-140.5 390.6145,-140.5 390.6145,-60.5 308.4945,-60.5"/>
<text text-anchor="middle" x="349.5545" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Worker</text>
<polyline fill="none" stroke="#000000" points="308.4945,-120.5 390.6145,-120.5 "/>
<text text-anchor="start" x="316.4945" y="-107.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Worker()</text>
<polyline fill="none" stroke="#000000" points="308.4945,-100.5 390.6145,-100.5 "/>
<text text-anchor="start" x="316.4945" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onmessage</text>
<polyline fill="none" stroke="#000000" points="308.4945,-80.5 390.6145,-80.5 "/>
<text text-anchor="start" x="316.4945" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">postMessage()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;Worker -->
<g id="edge5" class="edge">
<title>EventEmitter-&gt;Worker</title>
<path fill="none" stroke="#000000" d="M260.7725,-262.8496C274.1006,-242.7657 287.6718,-221.4178 299.5545,-201 310.8273,-181.6303 322.062,-159.3824 331.0181,-140.751"/>
<polygon fill="#000000" stroke="#000000" points="257.7235,-261.1132 255.0811,-271.3732 263.545,-265.0004 257.7235,-261.1132"/>
</g>
</g>
</svg></div>

## 构造函数
        
### EventEmitter
** 构造函数 **

```JavaScript
new EventEmitter();
```

## 静态属性
        
### defaultMaxListeners
** Integer, 默认全局最大监听器数 **

```JavaScript
static Integer EventEmitter.defaultMaxListeners;
```

## 成员函数
        
### on
** 绑定一个事件处理函数到对象 **

```JavaScript
Object EventEmitter.on(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
** 绑定一个事件处理函数到对象 **

```JavaScript
Object EventEmitter.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
** 绑定一个事件处理函数到对象 **

```JavaScript
Object EventEmitter.addListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 绑定一个事件处理函数到对象 **

```JavaScript
Object EventEmitter.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object EventEmitter.prependListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object EventEmitter.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
** 绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次 **

```JavaScript
Object EventEmitter.once(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次 **

```JavaScript
Object EventEmitter.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object EventEmitter.prependOnceListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object EventEmitter.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
** 从对象处理队列中取消指定函数 **

```JavaScript
Object EventEmitter.off(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 取消对象处理队列中的全部函数 **

```JavaScript
Object EventEmitter.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object EventEmitter.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
** 从对象处理队列中取消指定函数 **

```JavaScript
Object EventEmitter.removeListener(String ev,
    Function func);
```

调用参数:
* ev: String, 指定事件的名称
* func: Function, 指定事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 取消对象处理队列中的全部函数 **

```JavaScript
Object EventEmitter.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object EventEmitter.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
** 从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。 **

```JavaScript
Object EventEmitter.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
** 监听器的默认限制的数量，仅用于兼容 **

```JavaScript
EventEmitter.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
** 获取监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Integer EventEmitter.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
** 查询对象指定事件的监听器数组 **

```JavaScript
Array EventEmitter.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
** 查询对象指定事件的监听器数量 **

```JavaScript
Integer EventEmitter.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
** 查询监听器事件名称 **

```JavaScript
Array EventEmitter.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
** 主动触发一个事件 **

```JavaScript
Boolean EventEmitter.emit(String ev,
    ...);
```

调用参数:
* ev: String, 事件名称
* ...: 事件参数，将会传递给事件处理函数

返回结果:
* Boolean, 返回事件触发状态，有响应事件返回 true，否则返回 false

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
EventEmitter.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean EventEmitter.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String EventEmitter.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value EventEmitter.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value EventEmitter.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

