# 对象 Worker
独立线程工作对象

## 继承关系
<div class="inherits"><svg width="127pt" height="487pt" viewBox="0.00 0.00 126.80 487.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 483)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-483 122.801,-483 122.801,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="30.569,-390.5 30.569,-478.5 88.232,-478.5 88.232,-390.5 30.569,-390.5"/>
<text text-anchor="middle" x="59.4005" y="-465.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="30.569,-458.5 88.232,-458.5 "/>
<text text-anchor="start" x="38.569" y="-445.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="38.569" y="-433.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="38.569" y="-421.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="38.569" y="-409.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="38.569" y="-397.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- EventEmitter -->
<g id="node2" class="node">
<title>EventEmitter</title>
<g id="a_node2"><a xlink:href="EventEmitter.md" xlink:title="EventEmitter">
<polygon fill="#ffffff" stroke="#000000" points="0,-117.5 0,-353.5 118.801,-353.5 118.801,-117.5 0,-117.5"/>
<text text-anchor="middle" x="59.4005" y="-340.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventEmitter</text>
<polyline fill="none" stroke="#000000" points="0,-333.5 118.801,-333.5 "/>
<text text-anchor="start" x="8" y="-320.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new EventEmitter()</text>
<polyline fill="none" stroke="#000000" points="0,-313.5 118.801,-313.5 "/>
<text text-anchor="start" x="8" y="-300.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">defaultMaxListeners</text>
<polyline fill="none" stroke="#000000" points="0,-293.5 118.801,-293.5 "/>
<text text-anchor="start" x="8" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">on()</text>
<text text-anchor="start" x="8" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">addListener()</text>
<text text-anchor="start" x="8" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">prependListener()</text>
<text text-anchor="start" x="8" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">once()</text>
<text text-anchor="start" x="8" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">prependOnceListener()</text>
<text text-anchor="start" x="8" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">off()</text>
<text text-anchor="start" x="8" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeListener()</text>
<text text-anchor="start" x="8" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeAllListeners()</text>
<text text-anchor="start" x="8" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setMaxListeners()</text>
<text text-anchor="start" x="8" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getMaxListeners()</text>
<text text-anchor="start" x="8" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listeners()</text>
<text text-anchor="start" x="8" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listenerCount()</text>
<text text-anchor="start" x="8" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">eventNames()</text>
<text text-anchor="start" x="8" y="-124.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">emit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventEmitter -->
<g id="edge1" class="edge">
<title>object-&gt;EventEmitter</title>
<path fill="none" stroke="#000000" d="M59.4005,-380.1104C59.4005,-371.7939 59.4005,-362.9442 59.4005,-353.8773"/>
<polygon fill="#000000" stroke="#000000" points="55.9006,-380.3354 59.4005,-390.3355 62.9006,-380.3355 55.9006,-380.3354"/>
</g>
<!-- Worker -->
<g id="node3" class="node">
<title>Worker</title>
<g id="a_node3"><a xlink:title="Worker">
<polygon fill="#d3d3d3" stroke="#000000" points="18.3405,-.5 18.3405,-80.5 100.4605,-80.5 100.4605,-.5 18.3405,-.5"/>
<text text-anchor="middle" x="59.4005" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Worker</text>
<polyline fill="none" stroke="#000000" points="18.3405,-60.5 100.4605,-60.5 "/>
<text text-anchor="start" x="26.3405" y="-47.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Worker()</text>
<polyline fill="none" stroke="#000000" points="18.3405,-40.5 100.4605,-40.5 "/>
<text text-anchor="start" x="26.3405" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onmessage</text>
<polyline fill="none" stroke="#000000" points="18.3405,-20.5 100.4605,-20.5 "/>
<text text-anchor="start" x="26.3405" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">postMessage()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;Worker -->
<g id="edge2" class="edge">
<title>EventEmitter-&gt;Worker</title>
<path fill="none" stroke="#000000" d="M59.4005,-107.2662C59.4005,-97.7816 59.4005,-88.7292 59.4005,-80.522"/>
<polygon fill="#000000" stroke="#000000" points="55.9006,-107.2892 59.4005,-117.2892 62.9006,-107.2893 55.9006,-107.2892"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Worker
** Worker 对象构造函数 **

```JavaScript
new Worker(String path,
    Object opts = {});
```

调用参数:
* path: String, 指定 Worker 入口脚本，只接受绝对路径
* opts: Object, 构造选项，暂未支持

## 静态属性
        
### defaultMaxListeners
** Integer, 默认全局最大监听器数 **

```JavaScript
static Integer Worker.defaultMaxListeners;
```

## 成员属性
        
### onmessage
** Function, 查询和绑定接受 postMessage 消息事件，相当于 on("message", func); **

```JavaScript
Function Worker.onmessage;
```

## 成员函数
        
### postMessage
** 向 Master 或 Worker 发送消息， **

```JavaScript
Worker.postMessage(Value data);
```

调用参数:
* data: Value, 指定发送的消息内容

--------------------------
### on
** 绑定一个事件处理函数到对象 **

```JavaScript
Object Worker.on(String ev,
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
Object Worker.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
** 绑定一个事件处理函数到对象 **

```JavaScript
Object Worker.addListener(String ev,
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
Object Worker.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object Worker.prependListener(String ev,
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
Object Worker.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
** 绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次 **

```JavaScript
Object Worker.once(String ev,
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
Object Worker.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object Worker.prependOnceListener(String ev,
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
Object Worker.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Worker.off(String ev,
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
Object Worker.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Worker.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Worker.removeListener(String ev,
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
Object Worker.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Worker.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
** 从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。 **

```JavaScript
Object Worker.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
** 监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Worker.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
** 获取监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Integer Worker.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
** 查询对象指定事件的监听器数组 **

```JavaScript
Array Worker.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
** 查询对象指定事件的监听器数量 **

```JavaScript
Integer Worker.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
** 查询监听器事件名称 **

```JavaScript
Array Worker.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
** 主动触发一个事件 **

```JavaScript
Boolean Worker.emit(String ev,
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
Worker.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Worker.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Worker.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Worker.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Worker.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

