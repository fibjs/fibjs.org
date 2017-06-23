# 对象 WebSocketHandler
[WebSocket](WebSocket.md) 包协议转换处理器

用以将 Http 协议转换为 [WebSocket](WebSocket.md) 包协议消息。创建方式：

```JavaScript
var ws = require("ws");

var pkghdlr = new ws.WebSocketHandler(...);
```

## 继承关系
<div class="inherits"><svg width="140pt" height="418pt" viewBox="0.00 0.00 140.00 418.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 414)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-414 136,-414 136,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="37.5,-318 37.5,-410 94.5,-410 94.5,-318 37.5,-318"/>
<polygon fill="none" stroke="#000000" points="38,-388 38,-410 95,-410 95,-388 38,-388"/>
<text text-anchor="start" x="53.1625" y="-396" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="38,-318 38,-388 95,-388 95,-318 38,-318"/>
<text text-anchor="start" x="43" y="-374" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="43" y="-362" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="43" y="-350" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="43" y="-338" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="43" y="-326" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="25.5,-216 25.5,-282 106.5,-282 106.5,-216 25.5,-216"/>
<polygon fill="none" stroke="#000000" points="26,-260 26,-282 107,-282 107,-260 26,-260"/>
<text text-anchor="start" x="48.9985" y="-268" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points="26,-238 26,-260 107,-260 107,-238 26,-238"/>
<text text-anchor="start" x="31" y="-246" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points="26,-216 26,-238 107,-238 107,-216 26,-216"/>
<text text-anchor="start" x="31" y="-224" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M66,-307.6502C66,-298.8735 66,-290.0612 66,-282.0314"/>
<polygon fill="#000000" stroke="#000000" points="62.5001,-307.8877 66,-317.8877 69.5001,-307.8878 62.5001,-307.8877"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:href="HandlerEx.md" xlink:title="HandlerEx">
<polygon fill="#ffffff" stroke="transparent" points="38,-102 38,-180 94,-180 94,-102 38,-102"/>
<polygon fill="none" stroke="#000000" points="38,-158 38,-180 94,-180 94,-158 38,-158"/>
<text text-anchor="start" x="42.664" y="-166" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polygon fill="none" stroke="#000000" points="38,-124 38,-158 94,-158 94,-124 38,-124"/>
<text text-anchor="start" x="43" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="43" y="-132" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="38,-102 38,-124 94,-124 94,-102 38,-102"/>
<text text-anchor="start" x="43" y="-110" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M66,-205.6358C66,-197.1768 66,-188.3553 66,-180.0465"/>
<polygon fill="#000000" stroke="#000000" points="62.5001,-205.7152 66,-215.7152 69.5001,-205.7152 62.5001,-205.7152"/>
</g>
<!-- WebSocketHandler -->
<g id="node4" class="node">
<title>WebSocketHandler</title>
<g id="a_node4"><a xlink:title="WebSocketHandler">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-66 132,-66 132,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-44 0,-66 132,-66 132,-44 0,-44"/>
<text text-anchor="start" x="22.937" y="-52" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketHandler</text>
<polygon fill="none" stroke="#000000" points="0,-22 0,-44 132,-44 132,-22 0,-22"/>
<text text-anchor="start" x="5" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new WebSocketHandler()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-22 132,-22 132,0 0,0"/>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;WebSocketHandler -->
<g id="edge3" class="edge">
<title>HandlerEx-&gt;WebSocketHandler</title>
<path fill="none" stroke="#000000" d="M66,-91.6492C66,-82.9748 66,-74.1392 66,-66.0467"/>
<polygon fill="#000000" stroke="#000000" points="62.5001,-91.704 66,-101.704 69.5001,-91.704 62.5001,-91.704"/>
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

