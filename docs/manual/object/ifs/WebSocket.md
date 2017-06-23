# 对象 WebSocket
WebSocket 包协议转换处理器

用以将 Http 协议转换为 WebSocket 包协议消息。创建方式：

```JavaScript
var ws = require("ws");

var sock = new ws.WebSocket(...);
```

## 继承关系
<div class="inherits"><svg width="126pt" height="600pt" viewBox="0.00 0.00 126.00 600.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 596)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-596 122,-596 122,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="30.5,-500 30.5,-592 87.5,-592 87.5,-500 30.5,-500"/>
<polygon fill="none" stroke="#000000" points="31,-570 31,-592 88,-592 88,-570 31,-570"/>
<text text-anchor="start" x="46.1625" y="-578" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="31,-500 31,-570 88,-570 88,-500 31,-500"/>
<text text-anchor="start" x="36" y="-556" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="36" y="-544" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="36" y="-532" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="36" y="-520" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="36" y="-508" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- EventEmitter -->
<g id="node2" class="node">
<title>EventEmitter</title>
<g id="a_node2"><a xlink:href="EventEmitter.md" xlink:title="EventEmitter">
<polygon fill="#ffffff" stroke="transparent" points="0,-220 0,-464 118,-464 118,-220 0,-220"/>
<polygon fill="none" stroke="#000000" points="0,-442 0,-464 118,-464 118,-442 0,-442"/>
<text text-anchor="start" x="30.3855" y="-450" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EventEmitter</text>
<polygon fill="none" stroke="#000000" points="0,-420 0,-442 118,-442 118,-420 0,-420"/>
<text text-anchor="start" x="5" y="-428" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new EventEmitter()</text>
<polygon fill="none" stroke="#000000" points="0,-398 0,-420 118,-420 118,-398 0,-398"/>
<text text-anchor="start" x="5" y="-406" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> defaultMaxListeners</text>
<polygon fill="none" stroke="#000000" points="0,-220 0,-398 118,-398 118,-220 0,-220"/>
<text text-anchor="start" x="5" y="-384" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> on()</text>
<text text-anchor="start" x="5" y="-372" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> addListener()</text>
<text text-anchor="start" x="5" y="-360" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependListener()</text>
<text text-anchor="start" x="5" y="-348" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> once()</text>
<text text-anchor="start" x="5" y="-336" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> prependOnceListener()</text>
<text text-anchor="start" x="5" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> off()</text>
<text text-anchor="start" x="5" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeListener()</text>
<text text-anchor="start" x="5" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeAllListeners()</text>
<text text-anchor="start" x="5" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> setMaxListeners()</text>
<text text-anchor="start" x="5" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getMaxListeners()</text>
<text text-anchor="start" x="5" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listeners()</text>
<text text-anchor="start" x="5" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listenerCount()</text>
<text text-anchor="start" x="5" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> eventNames()</text>
<text text-anchor="start" x="5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> emit()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;EventEmitter -->
<g id="edge1" class="edge">
<title>object-&gt;EventEmitter</title>
<path fill="none" stroke="#000000" d="M59,-489.9235C59,-481.7711 59,-473.1241 59,-464.2645"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-489.964 59,-499.9641 62.5001,-489.9641 55.5001,-489.964"/>
</g>
<!-- WebSocket -->
<g id="node3" class="node">
<title>WebSocket</title>
<g id="a_node3"><a xlink:title="WebSocket">
<polygon fill="#d3d3d3" stroke="transparent" points="10.5,0 10.5,-184 107.5,-184 107.5,0 10.5,0"/>
<polygon fill="none" stroke="#000000" points="11,-162 11,-184 108,-184 108,-162 11,-162"/>
<text text-anchor="start" x="33.9385" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocket</text>
<polygon fill="none" stroke="#000000" points="11,-140 11,-162 108,-162 108,-140 11,-140"/>
<text text-anchor="start" x="16" y="-148" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new WebSocket()</text>
<polygon fill="none" stroke="#000000" points="11,-34 11,-140 108,-140 108,-34 11,-34"/>
<text text-anchor="start" x="16" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> url</text>
<text text-anchor="start" x="16" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> protocol</text>
<text text-anchor="start" x="16" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> origin</text>
<text text-anchor="start" x="16" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readyState</text>
<text text-anchor="start" x="16" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onopen</text>
<text text-anchor="start" x="16" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onmessage</text>
<text text-anchor="start" x="16" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onclose</text>
<text text-anchor="start" x="16" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror</text>
<polygon fill="none" stroke="#000000" points="11,0 11,-34 108,-34 108,0 11,0"/>
<text text-anchor="start" x="16" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="16" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> send()</text>
</a>
</g>
</g>
<!-- EventEmitter&#45;&gt;WebSocket -->
<g id="edge2" class="edge">
<title>EventEmitter-&gt;WebSocket</title>
<path fill="none" stroke="#000000" d="M59,-209.7865C59,-201.1557 59,-192.5709 59,-184.1975"/>
<polygon fill="#000000" stroke="#000000" points="55.5001,-209.9294 59,-219.9294 62.5001,-209.9295 55.5001,-209.9294"/>
</g>
</g>
</svg></div>

## 构造函数
        
### WebSocket
** WebSocket 构造函数 **

```JavaScript
new WebSocket(String url,
    String protocol = "",
    String origin = "");
```

调用参数:
* url: String, 指定连接的服务器
* protocol: String, 指定握手协议，缺省为 ""
* origin: String, 指定握手时模拟的源

## 静态属性
        
### defaultMaxListeners
** Integer, 默认全局最大监听器数 **

```JavaScript
static Integer WebSocket.defaultMaxListeners;
```

## 成员属性
        
### url
** String, 查询当前对象连接的服务器 **

```JavaScript
readonly String WebSocket.url;
```

--------------------------
### protocol
** String, 查询当前对象连接时的协议 **

```JavaScript
readonly String WebSocket.protocol;
```

--------------------------
### origin
** String, 查询当前对象连接的源 **

```JavaScript
readonly String WebSocket.origin;
```

--------------------------
### readyState
** Integer, 查询当前对象的连接状态，参见 [ws](../../module/ifs/ws.md) **

```JavaScript
readonly Integer WebSocket.readyState;
```

--------------------------
### onopen
** Function, 查询和绑定连接成功事件，相当于 on("open", func); **

```JavaScript
Function WebSocket.onopen;
```

--------------------------
### onmessage
** Function, 查询和绑定接受到对方消息的事件，相当于 on("message", func); **

```JavaScript
Function WebSocket.onmessage;
```

--------------------------
### onclose
** Function, 查询和绑定连接关闭的事件，相当于 on("close", func); **

```JavaScript
Function WebSocket.onclose;
```

--------------------------
### onerror
** Function, 查询和绑定错误发生的事件，相当于 on("error", func); **

```JavaScript
Function WebSocket.onerror;
```

## 成员函数
        
### close
** 关闭当前连接，此操作会向对方发送 CLOSE 数据包，并等待对方响应 **

```JavaScript
WebSocket.close(Integer code = 1000,
    String reason = "");
```

调用参数:
* code: Integer, 指定关闭的代码，允许值为 3000-4999 或者 1000，缺省为 1000
* reason: String, 指定关闭的原因，缺省为 ""

--------------------------
### send
** 向对方发送一段文本 **

```JavaScript
WebSocket.send(String data);
```

调用参数:
* data: String, 指定发送的文本

--------------------------
** 向对方发送一段二进制数据 **

```JavaScript
WebSocket.send(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 指定发送的二进制数据

--------------------------
### on
** 绑定一个事件处理函数到对象 **

```JavaScript
Object WebSocket.on(String ev,
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
Object WebSocket.on(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### addListener
** 绑定一个事件处理函数到对象 **

```JavaScript
Object WebSocket.addListener(String ev,
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
Object WebSocket.addListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object WebSocket.prependListener(String ev,
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
Object WebSocket.prependListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
** 绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次 **

```JavaScript
Object WebSocket.once(String ev,
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
Object WebSocket.once(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
** 绑定一个事件处理函数到对象起始 **

```JavaScript
Object WebSocket.prependOnceListener(String ev,
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
Object WebSocket.prependOnceListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* Object, 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
** 从对象处理队列中取消指定函数 **

```JavaScript
Object WebSocket.off(String ev,
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
Object WebSocket.off(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object WebSocket.off(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeListener
** 从对象处理队列中取消指定函数 **

```JavaScript
Object WebSocket.removeListener(String ev,
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
Object WebSocket.removeListener(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
** 从对象处理队列中取消指定函数 **

```JavaScript
Object WebSocket.removeListener(Object map);
```

调用参数:
* map: Object, 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
** 从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。 **

```JavaScript
Object WebSocket.removeAllListeners(Array evs = []);
```

调用参数:
* evs: Array, 指定事件的名称

返回结果:
* Object, 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
** 监听器的默认限制的数量，仅用于兼容 **

```JavaScript
WebSocket.setMaxListeners(Integer n);
```

调用参数:
* n: Integer, 指定事件的数量

--------------------------
### getMaxListeners
** 获取监听器的默认限制的数量，仅用于兼容 **

```JavaScript
Integer WebSocket.getMaxListeners();
```

返回结果:
* Integer, 返回默认限制数量

--------------------------
### listeners
** 查询对象指定事件的监听器数组 **

```JavaScript
Array WebSocket.listeners(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Array, 返回指定事件的监听器数组

--------------------------
### listenerCount
** 查询对象指定事件的监听器数量 **

```JavaScript
Integer WebSocket.listenerCount(String ev);
```

调用参数:
* ev: String, 指定事件的名称

返回结果:
* Integer, 返回指定事件的监听器数量

--------------------------
### eventNames
** 查询监听器事件名称 **

```JavaScript
Array WebSocket.eventNames();
```

返回结果:
* Array, 返回事件名称数组

--------------------------
### emit
** 主动触发一个事件 **

```JavaScript
Boolean WebSocket.emit(String ev,
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
WebSocket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean WebSocket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String WebSocket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value WebSocket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value WebSocket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

