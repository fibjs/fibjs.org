# 对象 HandlerEx
扩展消息处理器接口

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\l}"];
    Handler [tooltip="Handler", URL="Handler.md", label="{Handler|new Handler()\l|invoke()\l}"];
    HandlerEx [tooltip="HandlerEx", fillcolor="lightgray", label="{HandlerEx|handler\lstats\l|onerror()\l}"];
    HttpHandler [tooltip="HttpHandler", URL="HttpHandler.md", label="{HttpHandler|new HttpHandler()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxBodySize\lserverName\l}"];
    WebSocketHandler [tooltip="WebSocketHandler", URL="WebSocketHandler.md", label="{WebSocketHandler|new WebSocketHandler()\l|maxSize\l}"];

    object -> Handler [dir=back];
    Handler -> HandlerEx [dir=back];
    HandlerEx -> HttpHandler [dir=back];
    HandlerEx -> WebSocketHandler [dir=back];
}
```

## 成员属性
        
### handler
**[Handler](Handler.md), [WebSocket](WebSocket.md) 协议转换处理器当前事件处理接口对象**

```JavaScript
Handler HandlerEx.handler;
```

--------------------------
### stats
**[Stats](Stats.md), 查询 [WebSocket](WebSocket.md) 包协议转换处理器的工作状态**

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
**设置错误处理器**

```JavaScript
HandlerEx.onerror(Object hdlrs);
```

调用参数:
* hdlrs: Object, 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

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
**处理一个消息或对象**

```JavaScript
Handler HandlerEx.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* [Handler](Handler.md), 返回下一步的处理器

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
HandlerEx.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean HandlerEx.equals(object expected);
```

调用参数:
* expected: [object](object.md), 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HandlerEx.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HandlerEx.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

