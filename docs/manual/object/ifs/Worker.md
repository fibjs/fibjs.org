# 对象 Worker
独立线程工作对象

## 继承关系
<div class="inherits"><svg width="126pt" height="504pt" viewBox="0.00 0.00 126.00 504.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 500)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-500 122,-500 122,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="30.5,-404 30.5,-496 87.5,-496 87.5,-404 30.5,-404"/>
<polygon fill="none" stroke="#000000" points="31,-474 31,-496 88,-496 88,-474 31,-474"/>
<text text-anchor="start" x="46.1625" y="-482" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="31,-404 31,-474 88,-474 88,-404 31,-404"/>
<text text-anchor="start" x="36" y="-460" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="36" y="-448" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="36" y="-436" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="36" y="-424" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="36" y="-412" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- EventEmitter -->
<g id="node2" class="node">
<title>EventEmitter</title>
<g id="a_node2"><a xlink:href="EventEmitter.md" xlink:title="EventEmitter">
<polygon fill="#ffffff" stroke="transparent" points="0,-124 0,-368 118,-368 118,-124 0,-124"/>
<polygon fill="none" stroke="#000000" points="0,-346 0,-368 118,-368 118,-346 0,-346"/>
<text text-anchor="start" x="30.3855" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventEmitter</text>
<polygon fill="none" stroke="#000000" points="0,-324 0,-346 118,-346 118,-324 0,-324"/>
<text text-anchor="start" x="5" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new EventEmitter()</text>
<polygon fill="none" stroke="#000000" points="0,-302 0,-324 118,-324 118,-302 0,-302"/>
<text text-anchor="start" x="5" y="-310" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> defaultMaxListeners</text>
<polygon fill="none" stroke="#000000" points="0,-124 0,-302 118,-302 118,-124 0,-124"/>
<text text-anchor="start" x="5" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> on()</text>
<text text-anchor="start" x="5" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> addListener()</text>
<text text-anchor="start" x="5" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependListener()</text>
<text text-anchor="start" x="5" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> once()</text>
<text text-anchor="start" x="5" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependOnceListener()</text>
<text text-anchor="start" x="5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> off()</text>
<text text-anchor="start" x="5" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeListener()</text>
<text text-anchor="start" x="5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeAllListeners()</text>
<text text-anchor="start" x="5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> setMaxListeners()</text>
<text text-anchor="start" x="5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getMaxListeners()</text>
<text text-anchor="start" x="5" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listeners()</text>
<text text-anchor="start" x="5" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listenerCount()</text>
<text text-anchor="start" x="5" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> eventNames()</text>
<text text-anchor="start" x="5" y="-132" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> emit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventEmitter -->
<g id="edge1" class="edge">
<title>object-&gt;EventEmitter</title>
<path fill="none" stroke="#000000" d="M59,-393.9235C59,-385.7711 59,-377.1241 59,-368.2645"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-393.964 59,-403.9641 62.5001,-393.9641 55.5001,-393.964"/>
</g>
<!-- Worker -->
<g id="node3" class="node">
<title>Worker</title>
<g id="a_node3"><a xlink:title="Worker">
<polygon fill="#d3d3d3" stroke="transparent" points="18,0 18,-88 100,-88 100,0 18,0"/>
<polygon fill="none" stroke="#000000" points="18,-66 18,-88 100,-88 100,-66 18,-66"/>
<text text-anchor="start" x="42.8925" y="-74" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Worker</text>
<polygon fill="none" stroke="#000000" points="18,-44 18,-66 100,-66 100,-44 18,-44"/>
<text text-anchor="start" x="23" y="-52" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Worker()</text>
<polygon fill="none" stroke="#000000" points="18,-22 18,-44 100,-44 100,-22 18,-22"/>
<text text-anchor="start" x="23" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onmessage</text>
<polygon fill="none" stroke="#000000" points="18,0 18,-22 100,-22 100,0 18,0"/>
<text text-anchor="start" x="23" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> postMessage()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;Worker -->
<g id="edge2" class="edge">
<title>EventEmitter-&gt;Worker</title>
<path fill="none" stroke="#000000" d="M59,-113.5967C59,-104.6501 59,-96.0686 59,-88.1737"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-113.8357 59,-123.8357 62.5001,-113.8358 55.5001,-113.8357"/>
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

