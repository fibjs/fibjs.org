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
<div class="inherits"><svg width="89pt" height="376pt" viewBox="0.00 0.00 89.00 376.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 372)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-372 85,-372 85,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="12,-276 12,-368 69,-368 69,-276 12,-276"/>
<polygon fill="none" stroke="#000000" points="12.5,-346 12.5,-368 69.5,-368 69.5,-346 12.5,-346"/>
<text text-anchor="start" x="27.6625" y="-354" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="12.5,-276 12.5,-346 69.5,-346 69.5,-276 12.5,-276"/>
<text text-anchor="start" x="17.5" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="17.5" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="17.5" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="17.5" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="17.5" y="-284" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="0,-174 0,-240 81,-240 81,-174 0,-174"/>
<polygon fill="none" stroke="#000000" points=".5,-218 .5,-240 81.5,-240 81.5,-218 .5,-218"/>
<text text-anchor="start" x="23.4985" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points=".5,-196 .5,-218 81.5,-218 81.5,-196 .5,-196"/>
<text text-anchor="start" x="5.5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points=".5,-174 .5,-196 81.5,-196 81.5,-174 .5,-174"/>
<text text-anchor="start" x="5.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M40.5,-265.6502C40.5,-256.8735 40.5,-248.0612 40.5,-240.0314"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-265.8877 40.5,-275.8877 44.0001,-265.8878 37.0001,-265.8877"/>
</g>
<!-- Routing -->
<g id="node3" class="node">
<title>Routing</title>
<g id="a_node3"><a xlink:title="Routing">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-138 81,-138 81,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-116 .5,-138 81.5,-138 81.5,-116 .5,-116"/>
<text text-anchor="start" x="23.7735" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Routing</text>
<polygon fill="none" stroke="#000000" points=".5,-94 .5,-116 81.5,-116 81.5,-94 .5,-94"/>
<text text-anchor="start" x="5.5" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Routing()</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-94 81.5,-94 81.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> append()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> all()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> post()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> del()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> put()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> patch()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;Routing -->
<g id="edge2" class="edge">
<title>Handler-&gt;Routing</title>
<path fill="none" stroke="#000000" d="M40.5,-163.8956C40.5,-155.686 40.5,-146.9043 40.5,-138.12"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-163.9455 40.5,-173.9456 44.0001,-163.9456 37.0001,-163.9455"/>
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

