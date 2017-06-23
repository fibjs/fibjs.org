# 对象 HandlerEx
扩展消息处理器接口

## 继承关系
<div class="inherits"><svg width="258pt" height="454pt" viewBox="0.00 0.00 258.00 454.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 450)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-450 254,-450 254,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="88.5,-354 88.5,-446 145.5,-446 145.5,-354 88.5,-354"/>
<polygon fill="none" stroke="#000000" points="89,-424 89,-446 146,-446 146,-424 89,-424"/>
<text text-anchor="start" x="104.1625" y="-432" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="89,-354 89,-424 146,-424 146,-354 89,-354"/>
<text text-anchor="start" x="94" y="-410" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="94" y="-398" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="94" y="-386" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="94" y="-374" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="94" y="-362" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="76.5,-252 76.5,-318 157.5,-318 157.5,-252 76.5,-252"/>
<polygon fill="none" stroke="#000000" points="77,-296 77,-318 158,-318 158,-296 77,-296"/>
<text text-anchor="start" x="99.9985" y="-304" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points="77,-274 77,-296 158,-296 158,-274 77,-274"/>
<text text-anchor="start" x="82" y="-282" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points="77,-252 77,-274 158,-274 158,-252 77,-252"/>
<text text-anchor="start" x="82" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M117,-343.6502C117,-334.8735 117,-326.0612 117,-318.0314"/>
<polygon fill="#000000" stroke="#000000" points="113.5001,-343.8877 117,-353.8877 120.5001,-343.8878 113.5001,-343.8877"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:title="HandlerEx">
<polygon fill="#d3d3d3" stroke="transparent" points="89,-138 89,-216 145,-216 145,-138 89,-138"/>
<polygon fill="none" stroke="#000000" points="89,-194 89,-216 145,-216 145,-194 89,-194"/>
<text text-anchor="start" x="93.664" y="-202" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polygon fill="none" stroke="#000000" points="89,-160 89,-194 145,-194 145,-160 89,-160"/>
<text text-anchor="start" x="94" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="94" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="89,-138 89,-160 145,-160 145,-138 89,-138"/>
<text text-anchor="start" x="94" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M117,-241.6358C117,-233.1768 117,-224.3553 117,-216.0465"/>
<polygon fill="#000000" stroke="#000000" points="113.5001,-241.7152 117,-251.7152 120.5001,-241.7152 113.5001,-241.7152"/>
</g>
<!-- HttpHandler -->
<g id="node4" class="node">
<title>HttpHandler</title>
<g id="a_node4"><a xlink:href="HttpHandler.md" xlink:title="HttpHandler">
<polygon fill="#ffffff" stroke="transparent" points="0,0 0,-102 100,-102 100,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-80 0,-102 100,-102 100,-80 0,-80"/>
<text text-anchor="start" x="23.3305" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpHandler</text>
<polygon fill="none" stroke="#000000" points="0,-58 0,-80 100,-80 100,-58 0,-58"/>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpHandler()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-58 100,-58 100,0 0,0"/>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> crossDomain</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> forceGZIP</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxHeadersCount</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxUploadSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;HttpHandler -->
<g id="edge3" class="edge">
<title>HandlerEx-&gt;HttpHandler</title>
<path fill="none" stroke="#000000" d="M91.4228,-128.8997C86.779,-120.1665 81.9197,-111.0281 77.2303,-102.2093"/>
<polygon fill="#000000" stroke="#000000" points="88.3828,-130.6374 96.168,-137.8235 94.5633,-127.3509 88.3828,-130.6374"/>
</g>
<!-- WebSocketHandler -->
<g id="node5" class="node">
<title>WebSocketHandler</title>
<g id="a_node5"><a xlink:href="WebSocketHandler.md" xlink:title="WebSocketHandler">
<polygon fill="#ffffff" stroke="transparent" points="118,-18 118,-84 250,-84 250,-18 118,-18"/>
<polygon fill="none" stroke="#000000" points="118,-62 118,-84 250,-84 250,-62 118,-62"/>
<text text-anchor="start" x="140.937" y="-70" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketHandler</text>
<polygon fill="none" stroke="#000000" points="118,-40 118,-62 250,-62 250,-40 118,-40"/>
<text text-anchor="start" x="123" y="-48" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new WebSocketHandler()</text>
<polygon fill="none" stroke="#000000" points="118,-18 118,-40 250,-40 250,-18 118,-18"/>
<text text-anchor="start" x="123" y="-26" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;WebSocketHandler -->
<g id="edge4" class="edge">
<title>HandlerEx-&gt;WebSocketHandler</title>
<path fill="none" stroke="#000000" d="M142.6599,-128.744C150.5694,-113.8694 159.0967,-97.833 166.3404,-84.2106"/>
<polygon fill="#000000" stroke="#000000" points="139.4367,-127.3509 137.832,-137.8235 145.6172,-130.6374 139.4367,-127.3509"/>
</g>
</g>
</svg></div>

## 成员属性
        
### handler
** [Handler](Handler.md), [WebSocket](WebSocket.md) 协议转换处理器当前事件处理接口对象 **

```JavaScript
Handler HandlerEx.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询 [WebSocket](WebSocket.md) 包协议转换处理器的工作状态 **

```JavaScript
readonly Stats HandlerEx.stats;
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
HandlerEx.onerror(Object hdlrs);
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
Handler HandlerEx.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HandlerEx.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HandlerEx.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HandlerEx.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HandlerEx.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HandlerEx.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

