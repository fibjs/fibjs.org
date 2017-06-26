# 对象 HttpHandler
[http](../../module/ifs/http.md) 协议转换处理器

用以将数据流转换为 [http](../../module/ifs/http.md) 协议消息，创建方式：

```JavaScript
var hdlr = new mq.HttpHandler(...);
```

或者：

```JavaScript
var hdlr = new http.Handler(...);
```

## 继承关系
<div class="inherits"><svg width="107pt" height="436pt" viewBox="0.00 0.00 107.35 436.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 432)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-432 103.347,-432 103.347,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="20.842,-339.5 20.842,-427.5 78.505,-427.5 78.505,-339.5 20.842,-339.5"/>
<text text-anchor="middle" x="49.6735" y="-414.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="20.842,-407.5 78.505,-407.5 "/>
<text text-anchor="start" x="28.842" y="-394.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="28.842" y="-382.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="28.842" y="-370.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="28.842" y="-358.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="28.842" y="-346.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="10.285,-242.5 10.285,-302.5 89.062,-302.5 89.062,-242.5 10.285,-242.5"/>
<text text-anchor="middle" x="49.6735" y="-289.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="10.285,-282.5 89.062,-282.5 "/>
<text text-anchor="start" x="18.285" y="-269.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="10.285,-262.5 89.062,-262.5 "/>
<text text-anchor="start" x="18.285" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M49.6735,-329.0719C49.6735,-319.9417 49.6735,-310.7729 49.6735,-302.5542"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-329.3109 49.6735,-339.3109 53.1736,-329.311 46.1736,-329.3109"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:href="HandlerEx.md" xlink:title="HandlerEx">
<polygon fill="#ffffff" stroke="#000000" points="18.3375,-133.5 18.3375,-205.5 81.0095,-205.5 81.0095,-133.5 18.3375,-133.5"/>
<text text-anchor="middle" x="49.6735" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polyline fill="none" stroke="#000000" points="18.3375,-185.5 81.0095,-185.5 "/>
<text text-anchor="start" x="26.3375" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="26.3375" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="18.3375,-153.5 81.0095,-153.5 "/>
<text text-anchor="start" x="26.3375" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M49.6735,-232.3647C49.6735,-223.5502 49.6735,-214.2682 49.6735,-205.6227"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-232.4312 49.6735,-242.4312 53.1736,-232.4313 46.1736,-232.4312"/>
</g>
<!-- HttpHandler -->
<g id="node4" class="node">
<title>HttpHandler</title>
<g id="a_node4"><a xlink:title="HttpHandler">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-96.5 99.347,-96.5 99.347,-.5 0,-.5"/>
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
<path fill="none" stroke="#000000" d="M49.6735,-123.0005C49.6735,-114.4405 49.6735,-105.4848 49.6735,-96.8713"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-123.196 49.6735,-133.196 53.1736,-123.196 46.1736,-123.196"/>
</g>
</g>
</svg></div>

## 构造函数
        
### HttpHandler
** 创建一个 [http](../../module/ifs/http.md) 协议处理器对象，将流对象的数据转变为 [http](../../module/ifs/http.md) 消息对象 **

```JavaScript
new HttpHandler(Handler hdlr);
```

调用参数:
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

## 成员属性
        
### crossDomain
** Boolean, 查询和设置是否允许跨域请求，缺省为 false **

```JavaScript
Boolean HttpHandler.crossDomain;
```

--------------------------
### forceGZIP
** Boolean, 查询和设置是否允强制使用 gzip 压缩输出，缺省为 false **

```JavaScript
Boolean HttpHandler.forceGZIP;
```

--------------------------
### maxHeadersCount
** Integer, 查询和设置最大请求头个数，缺省为 128 **

```JavaScript
Integer HttpHandler.maxHeadersCount;
```

--------------------------
### maxUploadSize
** Integer, 查询和设置最大上传尺寸，以字节为单位，缺省为 67108864(64M) **

```JavaScript
Integer HttpHandler.maxUploadSize;
```

--------------------------
### handler
** [Handler](Handler.md), [WebSocket](WebSocket.md) 协议转换处理器当前事件处理接口对象 **

```JavaScript
Handler HttpHandler.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询 [WebSocket](WebSocket.md) 包协议转换处理器的工作状态 **

```JavaScript
readonly Stats HttpHandler.stats;
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
HttpHandler.onerror(Object hdlrs);
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
Handler HttpHandler.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpHandler.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpHandler.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpHandler.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpHandler.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpHandler.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

