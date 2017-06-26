# 对象 HandlerEx
扩展消息处理器接口

## 继承关系
<div class="inherits"><svg width="256pt" height="436pt" viewBox="0.00 0.00 255.62 436.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 432)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-432 251.6235,-432 251.6235,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="86.842,-339.5 86.842,-427.5 144.505,-427.5 144.505,-339.5 86.842,-339.5"/>
<text text-anchor="middle" x="115.6735" y="-414.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="86.842,-407.5 144.505,-407.5 "/>
<text text-anchor="start" x="94.842" y="-394.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="94.842" y="-382.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="94.842" y="-370.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="94.842" y="-358.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="94.842" y="-346.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="76.285,-242.5 76.285,-302.5 155.062,-302.5 155.062,-242.5 76.285,-242.5"/>
<text text-anchor="middle" x="115.6735" y="-289.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="76.285,-282.5 155.062,-282.5 "/>
<text text-anchor="start" x="84.285" y="-269.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="76.285,-262.5 155.062,-262.5 "/>
<text text-anchor="start" x="84.285" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M115.6735,-329.0719C115.6735,-319.9417 115.6735,-310.7729 115.6735,-302.5542"/>
<polygon fill="#000000" stroke="#000000" points="112.1736,-329.3109 115.6735,-339.3109 119.1736,-329.311 112.1736,-329.3109"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:title="HandlerEx">
<polygon fill="#d3d3d3" stroke="#000000" points="84.3375,-133.5 84.3375,-205.5 147.0095,-205.5 147.0095,-133.5 84.3375,-133.5"/>
<text text-anchor="middle" x="115.6735" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polyline fill="none" stroke="#000000" points="84.3375,-185.5 147.0095,-185.5 "/>
<text text-anchor="start" x="92.3375" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="92.3375" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="84.3375,-153.5 147.0095,-153.5 "/>
<text text-anchor="start" x="92.3375" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M115.6735,-232.3647C115.6735,-223.5502 115.6735,-214.2682 115.6735,-205.6227"/>
<polygon fill="#000000" stroke="#000000" points="112.1736,-232.4312 115.6735,-242.4312 119.1736,-232.4313 112.1736,-232.4312"/>
</g>
<!-- HttpHandler -->
<g id="node4" class="node">
<title>HttpHandler</title>
<g id="a_node4"><a xlink:href="HttpHandler.md" xlink:title="HttpHandler">
<polygon fill="#ffffff" stroke="#000000" points="0,-.5 0,-96.5 99.347,-96.5 99.347,-.5 0,-.5"/>
<text text-anchor="middle" x="49.6735" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpHandler</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 99.347,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpHandler()</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 99.347,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">crossDomain</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">forceGZIP</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxHeadersCount</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxUploadSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;HttpHandler -->
<g id="edge3" class="edge">
<title>HandlerEx-&gt;HttpHandler</title>
<path fill="none" stroke="#000000" d="M91.0777,-124.4078C86.1784,-115.4257 81.0143,-105.9581 76.0578,-96.8713"/>
<polygon fill="#000000" stroke="#000000" points="88.0101,-126.093 95.8713,-133.196 94.1554,-122.741 88.0101,-126.093"/>
</g>
<!-- WebSocketHandler -->
<g id="node5" class="node">
<title>WebSocketHandler</title>
<g id="a_node5"><a xlink:href="WebSocketHandler.md" xlink:title="WebSocketHandler">
<polygon fill="#ffffff" stroke="#000000" points="117.7235,-18.5 117.7235,-78.5 247.6235,-78.5 247.6235,-18.5 117.7235,-18.5"/>
<text text-anchor="middle" x="182.6735" y="-65.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketHandler</text>
<polyline fill="none" stroke="#000000" points="117.7235,-58.5 247.6235,-58.5 "/>
<text text-anchor="start" x="125.7235" y="-45.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new WebSocketHandler()</text>
<polyline fill="none" stroke="#000000" points="117.7235,-38.5 247.6235,-38.5 "/>
<text text-anchor="start" x="125.7235" y="-25.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxSize</text>
</a>
</g>
</g>
<!-- HandlerEx&#45;&gt;WebSocketHandler -->
<g id="edge4" class="edge">
<title>HandlerEx-&gt;WebSocketHandler</title>
<path fill="none" stroke="#000000" d="M140.6438,-124.4044C149.0943,-109.143 158.3206,-92.4806 165.9704,-78.6653"/>
<polygon fill="#000000" stroke="#000000" points="137.558,-122.7521 135.7757,-133.196 143.6818,-126.1431 137.558,-122.7521"/>
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

