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
<div class="inherits"><svg width="108pt" height="454pt" viewBox="0.00 0.00 108.00 454.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 450)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-450 104,-450 104,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="21.5,-354 21.5,-446 78.5,-446 78.5,-354 21.5,-354"/>
<polygon fill="none" stroke="#000000" points="22,-424 22,-446 79,-446 79,-424 22,-424"/>
<text text-anchor="start" x="37.1625" y="-432" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="22,-354 22,-424 79,-424 79,-354 22,-354"/>
<text text-anchor="start" x="27" y="-410" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="27" y="-398" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="27" y="-386" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="27" y="-374" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="27" y="-362" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="9.5,-252 9.5,-318 90.5,-318 90.5,-252 9.5,-252"/>
<polygon fill="none" stroke="#000000" points="10,-296 10,-318 91,-318 91,-296 10,-296"/>
<text text-anchor="start" x="32.9985" y="-304" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points="10,-274 10,-296 91,-296 91,-274 10,-274"/>
<text text-anchor="start" x="15" y="-282" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points="10,-252 10,-274 91,-274 91,-252 10,-252"/>
<text text-anchor="start" x="15" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M50,-343.6502C50,-334.8735 50,-326.0612 50,-318.0314"/>
<polygon fill="#000000" stroke="#000000" points="46.5001,-343.8877 50,-353.8877 53.5001,-343.8878 46.5001,-343.8877"/>
</g>
<!-- HandlerEx -->
<g id="node3" class="node">
<title>HandlerEx</title>
<g id="a_node3"><a xlink:href="HandlerEx.md" xlink:title="HandlerEx">
<polygon fill="#ffffff" stroke="transparent" points="22,-138 22,-216 78,-216 78,-138 22,-138"/>
<polygon fill="none" stroke="#000000" points="22,-194 22,-216 78,-216 78,-194 22,-194"/>
<text text-anchor="start" x="26.664" y="-202" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HandlerEx</text>
<polygon fill="none" stroke="#000000" points="22,-160 22,-194 78,-194 78,-160 22,-160"/>
<text text-anchor="start" x="27" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="27" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="22,-138 22,-160 78,-160 78,-138 22,-138"/>
<text text-anchor="start" x="27" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;HandlerEx -->
<g id="edge2" class="edge">
<title>Handler-&gt;HandlerEx</title>
<path fill="none" stroke="#000000" d="M50,-241.6358C50,-233.1768 50,-224.3553 50,-216.0465"/>
<polygon fill="#000000" stroke="#000000" points="46.5001,-241.7152 50,-251.7152 53.5001,-241.7152 46.5001,-241.7152"/>
</g>
<!-- HttpHandler -->
<g id="node4" class="node">
<title>HttpHandler</title>
<g id="a_node4"><a xlink:title="HttpHandler">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-102 100,-102 100,0 0,0"/>
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
<path fill="none" stroke="#000000" d="M50,-127.7944C50,-119.3975 50,-110.6567 50,-102.2093"/>
<polygon fill="#000000" stroke="#000000" points="46.5001,-127.8235 50,-137.8235 53.5001,-127.8235 46.5001,-127.8235"/>
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

