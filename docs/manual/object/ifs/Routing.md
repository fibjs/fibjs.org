# 对象 Routing
消息处理器路由对象

路由对象是 [http](../../module/ifs/http.md) 消息处理的核心对象，服务器根据路由的设定，匹配 [url](../../module/ifs/url.md) 和 method，并将 [http](../../module/ifs/http.md) 消息转发到相应的处理器，以完成不同的事务。

一个简单的路由，可以直接以 JSON 对象的形式提供，比如：

```JavaScript
var http = require('http');

var svr = new http.Server(8080, {
    '/': r => r.response.write('home'),
    '/help': r => r.response.write('help')
});

svr.start();
```

如果需要更复杂的路由定制，可以自行创建 Routing 对象并根据需要处理路由策略：

```JavaScript
var http = require('http');
var mq = require('mq');

var app = new mq.Routing();

app.get('/', r => r.response.write('home'));
app.get('/help', r => r.response.write('help'));

app.post('/help', r => r.response.write('post a help.'));

app.get('/home/:user', (r, user) => r.response.write('hello ' + user));

app.get('/user/:id(\\d+)', (r, id) => r.response.write('get ' + id));

app.get('/actions', {
    '/run': r => r.response.write('running'),
    '/sleep': r => r.response.write('sleeping'),
    '(.*)': r => r.response.write('........')
});

var svr = new http.Server(8080, app);
svr.start();
```

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
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>Handler|new Handler()|invoke()]
[<this>Routing|new Routing()|append();host();all();get();post();del();put();patch();find()]

[object] <:- [Handler]
[Handler] <:- [Routing]
```

## 构造函数
        
### Routing
**创建一个消息处理器路由对象**

```JavaScript
new Routing(Object map = {});
```

调用参数:
* map: Object, 初始化路由参数

--------------------------
**创建一个消息处理器路由对象**

```JavaScript
new Routing(String method,
    Object map);
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法，"*" 接受所有方法
* map: Object, 初始化路由参数

## 成员函数
        
### append
**从已有路由对象中添加规则，添加后原路由将被清空**

```JavaScript
Routing Routing.append(Routing route);
```

调用参数:
* route: Routing, 已经初始化的路由对象

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一组路由规则**

```JavaScript
Routing Routing.append(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条路由规则**

```JavaScript
Routing Routing.append(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条路由规则**

```JavaScript
Routing Routing.append(String method,
    String pattern,
    Handler hdlr);
```

调用参数:
* method: String, 指定 [http](../../module/ifs/http.md) 请求方法，"*" 接受所有方法，"host" 指定虚拟域名
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### host
**添加一组 [http](../../module/ifs/http.md) 域名的路由规则**

```JavaScript
Routing Routing.host(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) 域名的路由规则**

```JavaScript
Routing Routing.host(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### all
**添加一组接受所有 [http](../../module/ifs/http.md) 方法路由规则**

```JavaScript
Routing Routing.all(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受所有 [http](../../module/ifs/http.md) 方法路由规则**

```JavaScript
Routing Routing.all(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### get
**添加一组 GET 方法路由规则**

```JavaScript
Routing Routing.get(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) GET 方法路由规则**

```JavaScript
Routing Routing.get(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### post
**添加一组接受 [http](../../module/ifs/http.md) POST 方法路由规则**

```JavaScript
Routing Routing.post(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) POST 方法路由规则**

```JavaScript
Routing Routing.post(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### del
**添加一组接受 [http](../../module/ifs/http.md) DELETE 方法路由规则**

```JavaScript
Routing Routing.del(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) DELETE 方法路由规则**

```JavaScript
Routing Routing.del(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### put
**添加一组 PUT 方法路由规则**

```JavaScript
Routing Routing.put(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) PUT 方法路由规则**

```JavaScript
Routing Routing.put(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### patch
**添加一组 PATCH 方法路由规则**

```JavaScript
Routing Routing.patch(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) PATCH 方法路由规则**

```JavaScript
Routing Routing.patch(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### find
**添加一组 FIND 方法路由规则**

```JavaScript
Routing Routing.find(Object map);
```

调用参数:
* map: Object, 路由参数

返回结果:
* Routing, 返回路由对象本身

--------------------------
**添加一条接受 [http](../../module/ifs/http.md) FIND 方法路由规则**

```JavaScript
Routing Routing.find(String pattern,
    Handler hdlr);
```

调用参数:
* pattern: String, 消息匹配格式
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

返回结果:
* Routing, 返回路由对象本身

--------------------------
### invoke
**处理一个消息或对象**

```JavaScript
Handler Routing.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* [Handler](Handler.md), 返回下一步的处理器

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Routing.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Routing.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

