# 对象 Service
系统服务管理对象

## 继承关系
<div class="inherits"><svg width="126pt" height="624pt" viewBox="0.00 0.00 126.00 624.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 620)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-620 122,-620 122,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="30.5,-524 30.5,-616 87.5,-616 87.5,-524 30.5,-524"/>
<polygon fill="none" stroke="#000000" points="31,-594 31,-616 88,-616 88,-594 31,-594"/>
<text text-anchor="start" x="46.1625" y="-602" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="31,-524 31,-594 88,-594 88,-524 31,-524"/>
<text text-anchor="start" x="36" y="-580" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="36" y="-568" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="36" y="-556" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="36" y="-544" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="36" y="-532" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- EventEmitter -->
<g id="node2" class="node">
<title>EventEmitter</title>
<g id="a_node2"><a xlink:href="EventEmitter.md" xlink:title="EventEmitter">
<polygon fill="#ffffff" stroke="transparent" points="0,-244 0,-488 118,-488 118,-244 0,-244"/>
<polygon fill="none" stroke="#000000" points="0,-466 0,-488 118,-488 118,-466 0,-466"/>
<text text-anchor="start" x="30.3855" y="-474" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventEmitter</text>
<polygon fill="none" stroke="#000000" points="0,-444 0,-466 118,-466 118,-444 0,-444"/>
<text text-anchor="start" x="5" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new EventEmitter()</text>
<polygon fill="none" stroke="#000000" points="0,-422 0,-444 118,-444 118,-422 0,-422"/>
<text text-anchor="start" x="5" y="-430" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> defaultMaxListeners</text>
<polygon fill="none" stroke="#000000" points="0,-244 0,-422 118,-422 118,-244 0,-244"/>
<text text-anchor="start" x="5" y="-408" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> on()</text>
<text text-anchor="start" x="5" y="-396" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> addListener()</text>
<text text-anchor="start" x="5" y="-384" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependListener()</text>
<text text-anchor="start" x="5" y="-372" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> once()</text>
<text text-anchor="start" x="5" y="-360" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependOnceListener()</text>
<text text-anchor="start" x="5" y="-348" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> off()</text>
<text text-anchor="start" x="5" y="-336" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeListener()</text>
<text text-anchor="start" x="5" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeAllListeners()</text>
<text text-anchor="start" x="5" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> setMaxListeners()</text>
<text text-anchor="start" x="5" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getMaxListeners()</text>
<text text-anchor="start" x="5" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listeners()</text>
<text text-anchor="start" x="5" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listenerCount()</text>
<text text-anchor="start" x="5" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> eventNames()</text>
<text text-anchor="start" x="5" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> emit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventEmitter -->
<g id="edge1" class="edge">
<title>object-&gt;EventEmitter</title>
<path fill="none" stroke="#000000" d="M59,-513.9235C59,-505.7711 59,-497.1241 59,-488.2645"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-513.964 59,-523.9641 62.5001,-513.9641 55.5001,-513.964"/>
</g>
<!-- Service -->
<g id="node3" class="node">
<title>Service</title>
<g id="a_node3"><a xlink:title="Service">
<polygon fill="#d3d3d3" stroke="transparent" points="19.5,0 19.5,-208 98.5,-208 98.5,0 19.5,0"/>
<polygon fill="none" stroke="#000000" points="20,-186 20,-208 99,-208 99,-186 20,-186"/>
<text text-anchor="start" x="42.8325" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Service</text>
<polygon fill="none" stroke="#000000" points="20,-164 20,-186 99,-186 99,-164 20,-164"/>
<text text-anchor="start" x="25" y="-172" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Service()</text>
<polygon fill="none" stroke="#000000" points="20,-106 20,-164 99,-164 99,-106 20,-106"/>
<text text-anchor="start" x="25" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="25" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onstop</text>
<text text-anchor="start" x="25" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onpause</text>
<text text-anchor="start" x="25" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> oncontinue</text>
<polygon fill="none" stroke="#000000" points="20,0 20,-106 99,-106 99,0 20,0"/>
<text text-anchor="start" x="25" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> install()</text>
<text text-anchor="start" x="25" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="25" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> start()</text>
<text text-anchor="start" x="25" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stop()</text>
<text text-anchor="start" x="25" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> restart()</text>
<text text-anchor="start" x="25" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> run()</text>
<text text-anchor="start" x="25" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isInstalled()</text>
<text text-anchor="start" x="25" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isRunning()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;Service -->
<g id="edge2" class="edge">
<title>EventEmitter-&gt;Service</title>
<path fill="none" stroke="#000000" d="M59,-233.7889C59,-225.2381 59,-216.6942 59,-208.3029"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-233.8212 59,-243.8212 62.5001,-233.8212 55.5001,-233.8212"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Service
** 系统服务管理对象构造函数 **

```JavaScript
new Service(String name,
    Function worker,
    Object event = {});
```

调用参数:
* name: String, 服务名称
* worker: Function, 服务运行函数
* event: Object, 服务事件处理

## 静态属性
        
### defaultMaxListeners
** Integer, 默认全局最大监听器数 **

```JavaScript
static Integer Service.defaultMaxListeners;
```

## 成员属性
        
### name
** String, 查询和设置服务名称 **

```JavaScript
String Service.name;
```

--------------------------
### onstop
** Function, 查询和绑定服务停止事件，相当于 on("stop", func); **

```JavaScript
Function Service.onstop;
```

--------------------------
### onpause
** Function, 查询和绑定服务暂停事件，相当于 on("pause", func); **

```JavaScript
Function Service.onpause;
```

--------------------------
### oncontinue
** Function, 查询和绑定服务恢复事件，相当于 on("continue", func); **

```JavaScript
Function Service.oncontinue;
```

## 成员函数
        
### install
** 安装服务到系统 **

```JavaScript
Service.install(String cmd,
    String displayName = "",
    String description = "");
```

调用参数:
* cmd: String, 服务命令行
* displayName: String, 服务显示名称
* description: String, 服务描述信息

--------------------------
### remove
** 从系统中卸载服务 **

```JavaScript
Service.remove();
```

--------------------------
### start
** 启动服务 **

```JavaScript
Service.start();
```

--------------------------
### stop
** 停止服务 **

```JavaScript
Service.stop();
```

--------------------------
### restart
** 重启服务 **

```JavaScript
Service.restart();
```

--------------------------
### run
** 开始运行服务实体 **

```JavaScript
Service.run() async;
```

--------------------------
### isInstalled
** 检测服务是否安装 **

```JavaScript
Boolean Service.isInstalled();
```

返回结果:
* Boolean, 服务安装返回 True

--------------------------
### isRunning
** 检测服务是否运行 **

```JavaScript
Boolean Service.isRunning();
```

返回结果:
* Boolean, 服务运行返回 True

--------------------------
### on
** 绑定一个事件处理函数到对象 **

```JavaScript
Object Service.on(String ev,
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
Object Service.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
** 绑定一个事件处理函数到对象 **

```JavaScript
Object Service.addListener(String ev,
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
Object Service.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object Service.prependListener(String ev,
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
Object Service.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
** 绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次 **

```JavaScript
Object Service.once(String ev,
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
Object Service.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object Service.prependOnceListener(String ev,
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
Object Service.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Service.off(String ev,
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
Object Service.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Service.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Service.removeListener(String ev,
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
Object Service.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object Service.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
** 从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。 **

```JavaScript
Object Service.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
** 监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Service.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
** 获取监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Integer Service.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
** 查询对象指定事件的监听器数组 **

```JavaScript
Array Service.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
** 查询对象指定事件的监听器数量 **

```JavaScript
Integer Service.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
** 查询监听器事件名称 **

```JavaScript
Array Service.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
** 主动触发一个事件 **

```JavaScript
Boolean Service.emit(String ev,
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
Service.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Service.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Service.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Service.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Service.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

