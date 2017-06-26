# 对象 Routing
消息处理器路由对象

路由对象根据设定的规则匹配消息，将消息传递给符合规则的第一个处理器。后加入的路由规则优先匹配。创建方法：

```JavaScript
var routing = new mq.Routing({
    "^/func1(/.*)$": func1,
    "^/func2(/.*)$": func2
});
```

正则表达式匹配的项目修改消息的 value 属性，子项目存入消息的 params 属性。例如：

```JavaScript
var routing = new mq.Routing({
    "^/func1(/([0-9]+)/([0-9]+)\.html)$": func1,
});
```

匹配消息 "/func1/123/456.html" 后，value == "/123/456.html"，params == ["123", "456"];

如果匹配的结果没有子项，则 value 为空，params 为空。例如：

```JavaScript
var routing = new mq.Routing({
    "^/func1/[0-9]+/[0-9]+\.html$": func1,
});
```

匹配消息 "/func1/123/456.html" 后，value == ""，params == [];

如果匹配的结果第一级有多个子项，则 value 为空，params 为第一级子项。例如：

```JavaScript
var routing = new mq.Routing({
    "^/func1/([0-9]+)/([0-9]+)\.html$": func1,
});
```

匹配消息 "/func1/123/456.html" 后，value == ""，params == ["123", "456"];

如果匹配的结果只有一个子项，并且无下级子项，则 value 和 params 均为此子项。例如：

```JavaScript
var routing = new mq.Routing({
    "^/func1/([0-9]+)/[0-9]+\.html$": func1,
});
```

匹配消息 "/func1/123/456.html" 后，value == "123"，params == ["123"];

## 继承关系
<div class="inherits"><svg width="87pt" height="363pt" viewBox="0.00 0.00 86.78 363.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 359)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-359 82.777,-359 82.777,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="10.557,-266.5 10.557,-354.5 68.22,-354.5 68.22,-266.5 10.557,-266.5"/>
<text text-anchor="middle" x="39.3885" y="-341.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="10.557,-334.5 68.22,-334.5 "/>
<text text-anchor="start" x="18.557" y="-321.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="18.557" y="-309.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="18.557" y="-297.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="18.557" y="-285.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="18.557" y="-273.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="0,-169.5 0,-229.5 78.777,-229.5 78.777,-169.5 0,-169.5"/>
<text text-anchor="middle" x="39.3885" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="0,-209.5 78.777,-209.5 "/>
<text text-anchor="start" x="8" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="0,-189.5 78.777,-189.5 "/>
<text text-anchor="start" x="8" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M39.3885,-256.0719C39.3885,-246.9417 39.3885,-237.7729 39.3885,-229.5542"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-256.3109 39.3885,-266.3109 42.8886,-256.311 35.8886,-256.3109"/>
</g>
<!-- Routing -->
<g id="node3" class="node">
<title>Routing</title>
<g id="a_node3"><a xlink:title="Routing">
<polygon fill="#d3d3d3" stroke="#000000" points=".275,-.5 .275,-132.5 78.502,-132.5 78.502,-.5 .275,-.5"/>
<text text-anchor="middle" x="39.3885" y="-119.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Routing</text>
<polyline fill="none" stroke="#000000" points=".275,-112.5 78.502,-112.5 "/>
<text text-anchor="start" x="8.275" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Routing()</text>
<polyline fill="none" stroke="#000000" points=".275,-92.5 78.502,-92.5 "/>
<text text-anchor="start" x="8.275" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">append()</text>
<text text-anchor="start" x="8.275" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">all()</text>
<text text-anchor="start" x="8.275" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">get()</text>
<text text-anchor="start" x="8.275" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">post()</text>
<text text-anchor="start" x="8.275" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">del()</text>
<text text-anchor="start" x="8.275" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">put()</text>
<text text-anchor="start" x="8.275" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">patch()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;Routing -->
<g id="edge2" class="edge">
<title>Handler-&gt;Routing</title>
<path fill="none" stroke="#000000" d="M39.3885,-159.1073C39.3885,-150.7273 39.3885,-141.6898 39.3885,-132.6606"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-159.3202 39.3885,-169.3202 42.8886,-159.3203 35.8886,-159.3202"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Routing
** 创建一个消息处理器路由对象 **

```JavaScript
new Routing(Object map = {});
```

调用参数:
* map: Object, 初始化路由参数

--------------------------
** 创建一个消息处理器路由对象 **

```JavaScript
new Routing(String method,
    Object map);
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法，"*" 接受所有方法
* map: Object, 初始化路由参数

## 成员函数
        
### append
** 从已有路由对象中添加规则，添加后原路由将被清空 **

```JavaScript
Routing.append(Routing route);
```

调用参数:
* route: Routing, 已经初始化的路由对象

--------------------------
** 添加一组路由规则 **

```JavaScript
Routing.append(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条路由规则 **

```JavaScript
Routing.append(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
** 添加一组路由规则 **

```JavaScript
Routing.append(String method,
    Object map);
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法，"*" 接受所有方法
* map: Object, 路由参数

--------------------------
** 添加一条路由规则 **

```JavaScript
Routing.append(String method,
    String pattern,
    Handler hdlr);
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法，"*" 接受所有方法
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### all
** 添加一组接受所有 [http](../../module/ifs/http.md) 方法路由规则 **

```JavaScript
Routing.all(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受所有 [http](../../module/ifs/http.md) 方法路由规则 **

```JavaScript
Routing.all(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### get
** 添加一组 GET 方法路由规则 **

```JavaScript
Routing.get(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受 [http](../../module/ifs/http.md) GET 方法路由规则 **

```JavaScript
Routing.get(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### post
** 添加一组接受 [http](../../module/ifs/http.md) POST 方法路由规则 **

```JavaScript
Routing.post(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受 [http](../../module/ifs/http.md) POST 方法路由规则 **

```JavaScript
Routing.post(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### del
** 添加一组接受 [http](../../module/ifs/http.md) DELETE 方法路由规则 **

```JavaScript
Routing.del(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受 [http](../../module/ifs/http.md) DELETE 方法路由规则 **

```JavaScript
Routing.del(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### put
** 添加一组 PUT 方法路由规则 **

```JavaScript
Routing.put(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受 [http](../../module/ifs/http.md) PUT 方法路由规则 **

```JavaScript
Routing.put(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### patch
** 添加一组 PATCH 方法路由规则 **

```JavaScript
Routing.patch(Object map);
```

调用参数:
* map: Object, 路由参数

--------------------------
** 添加一条接受 [http](../../module/ifs/http.md) PATCH 方法路由规则 **

```JavaScript
Routing.patch(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### invoke
** 处理一个消息或对象 **

```JavaScript
Handler Routing.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Routing.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Routing.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Routing.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Routing.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Routing.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

