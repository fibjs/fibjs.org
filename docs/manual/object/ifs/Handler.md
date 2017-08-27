# 对象 Handler
消息处理器接口

## 继承关系
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|dispose()\lequals()\ltoString()\ltoJSON()\l}"];
    Handler [tooltip="Handler", fillcolor="lightgray", label="{Handler|new Handler()\l|invoke()\l}"];
    AsyncWait [tooltip="AsyncWait", URL="AsyncWait.md", label="{AsyncWait|end()\l}"];
    Chain [tooltip="Chain", URL="Chain.md", label="{Chain|new Chain()\l|append()\l}"];
    HandlerEx [tooltip="HandlerEx", URL="HandlerEx.md", label="{HandlerEx|handler\lstats\l|onerror()\l}"];
    HttpHandler [tooltip="HttpHandler", URL="HttpHandler.md", label="{HttpHandler|new HttpHandler()\l|crossDomain\lforceGZIP\lmaxHeadersCount\lmaxBodySize\lserverName\l}"];
    WebSocketHandler [tooltip="WebSocketHandler", URL="WebSocketHandler.md", label="{WebSocketHandler|new WebSocketHandler()\l|maxSize\l}"];
    Routing [tooltip="Routing", URL="Routing.md", label="{Routing|new Routing()\l|append()\lall()\lget()\lpost()\ldel()\lput()\lpatch()\l}"];
    SslHandler [tooltip="SslHandler", URL="SslHandler.md", label="{SslHandler|new SslHandler()\l|verification\lca\lhandler\l}"];

    object -> Handler [dir=back];
    Handler -> AsyncWait [dir=back];
    Handler -> Chain [dir=back];
    Handler -> HandlerEx [dir=back];
    HandlerEx -> HttpHandler [dir=back];
    HandlerEx -> WebSocketHandler [dir=back];
    Handler -> Routing [dir=back];
    Handler -> SslHandler [dir=back];
}
```

## 构造函数
        
### Handler
**构造一个消息处理器链处理对象**

```JavaScript
new Handler(Array hdlrs);
```

调用参数:
* hdlrs: Array, 处理器数组

--------------------------
**创建一个消息处理器路由对象**

```JavaScript
new Handler(Object map);
```

调用参数:
* map: Object, 初始化路由参数

--------------------------
**创建一个 JavaSvript 消息处理器**

```JavaScript
new Handler(Function hdlr);
```

调用参数:
* hdlr: Function, JavaScript 处理器函数

## 成员函数
        
### invoke
**处理一个消息或对象**

```JavaScript
Handler Handler.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
**强制回收对象，调用此方法后，对象资源将立即释放**

```JavaScript
Handler.dispose();
```

--------------------------
### equals
**比较当前对象与给定的对象是否相等**

```JavaScript
Boolean Handler.equals(object expected);
```

调用参数:
* expected: [object](object.md), 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Handler.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Handler.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

