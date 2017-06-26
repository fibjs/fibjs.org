# 对象 WebSocketHandler
[WebSocket](WebSocket.md) 包协议转换处理器

用以将 Http 协议转换为 [WebSocket](WebSocket.md) 包协议消息。创建方式：

```JavaScript
var ws = require("ws");

var pkghdlr = new ws.WebSocketHandler(...);
```

## 继承关系
<div class="inherits"><svg width="138pt" height="400pt" viewBox="0.00 0.00 137.90 400.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 396)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-396 133.9,-396 133.9,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="36.1185,-303.5 36.1185,-391.5 93.7815,-391.5 93.7815,-303.5 36.1185,-303.5"/>
<text text-anchor="middle" x="64.95" y="-378.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="36.1185,-371.5 93.7815,-371.5 "/>
<text text-anchor="start" x="44.1185" y="-358.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="44.1185" y="-346.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="44.1185" y="-334.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="44.1185" y="-322.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="44.1185" y="-310.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="25.5615,-206.5 25.5615,-266.5 104.3385,-266.5 104.3385,-206.5 25.5615,-206.5"/>
<text text-anchor="middle" x="64.95" y="-253.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="25.5615,-246.5 104.3385,-246.5 "/>
<text text-anchor="start" x="33.5615" y="-233.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="25.5615,-226.5 104.3385,-226.5 "/>
<text text-anchor="start" x="33.5615" y="-213.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M64.95,-293.0719C64.95,-283.9417 64.95,-274.7729 64.95,-266.5542"/>
<polygon fill="#000000" stroke="#000000" points="61.4501,-293.3109 64.95,-303.3109 68.4501,-293.311 61.4501,-293.3109"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:href="HandlerEx.md" xlink:title="HandlerEx">
<polygon fill="#ffffff" stroke="#000000" points="33.614,-97.5 33.614,-169.5 96.286,-169.5 96.286,-97.5 33.614,-97.5"/>
<text text-anchor="middle" x="64.95" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polyline fill="none" stroke="#000000" points="33.614,-149.5 96.286,-149.5 "/>
<text text-anchor="start" x="41.614" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="41.614" y="-124.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="33.614,-117.5 96.286,-117.5 "/>
<text text-anchor="start" x="41.614" y="-104.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M64.95,-196.3647C64.95,-187.5502 64.95,-178.2682 64.95,-169.6227"/>
<polygon fill="#000000" stroke="#000000" points="61.4501,-196.4312 64.95,-206.4312 68.4501,-196.4313 61.4501,-196.4312"/>
</g>
<!-- WebSocketHandler -->
<g id="node4" class="node">
<title>WebSocketHandler</title>
<g id="a_node4"><a xlink:title="WebSocketHandler">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-60.5 129.9,-60.5 129.9,-.5 0,-.5"/>
<text text-anchor="middle" x="64.95" y="-47.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketHandler</text>
<polyline fill="none" stroke="#000000" points="0,-40.5 129.9,-40.5 "/>
<text text-anchor="start" x="8" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new WebSocketHandler()</text>
<polyline fill="none" stroke="#000000" points="0,-20.5 129.9,-20.5 "/>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;WebSocketHandler -->
<g id="edge3" class="edge">
<title>HandlerEx-&gt;WebSocketHandler</title>
<path fill="none" stroke="#000000" d="M64.95,-87.3585C64.95,-78.2582 64.95,-68.9324 64.95,-60.5341"/>
<polygon fill="#000000" stroke="#000000" points="61.4501,-87.4756 64.95,-97.4756 68.4501,-87.4756 61.4501,-87.4756"/>
</g>
</g>
</svg></div>

## 构造函数
        
### WebSocketHandler
** [WebSocket](WebSocket.md) 包处理器构造函数 **

```JavaScript
new WebSocketHandler(Handler hdlr);
```

调用参数:
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

## 成员属性
        
### maxSize
** Integer, 查询和设置最大包尺寸，以 MB 为单位，缺省为 64 **

```JavaScript
Integer WebSocketHandler.maxSize;
```

--------------------------
### handler
** [Handler](Handler.md), [WebSocket](WebSocket.md) 协议转换处理器当前事件处理接口对象 **

```JavaScript
Handler WebSocketHandler.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询 [WebSocket](WebSocket.md) 包协议转换处理器的工作状态 **

```JavaScript
readonly Stats WebSocketHandler.stats;
```

返回的结果为一个 [Stats](Stats.md) 对象，结构如下：

```JavaScript
{
    total: 1000, // 总计处理的请求
    pendding: 100, // 当前正在处理的请求
    request: 10, // 新建的请求
    response: 10, // 发送的响应
    error: 100 // 发生的错误
}
```

## 成员函数
        
### onerror
** 设置错误处理器 **

```JavaScript
WebSocketHandler.onerror(Object hdlrs);
```

调用参数:
* hdlrs: Object, 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

使用方式：

```JavaScript
hdlr.onerror({
    "404": function(v) {
        ...
    },
    "500": new mq.Routing(...)
})
```

--------------------------
### invoke
** 处理一个消息或对象 **

```JavaScript
Handler WebSocketHandler.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
WebSocketHandler.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean WebSocketHandler.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String WebSocketHandler.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value WebSocketHandler.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value WebSocketHandler.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

