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
```dot
digraph {
    node [fontname="Helvetica,sans-Serif", fontsize=10, shape="record", style="filled", fillcolor="white"];

    object [tooltip="object", URL="object.md", label="{object|toString()\ltoJSON()\l}"];
    Handler [tooltip="Handler", URL="Handler.md", label="{Handler|new Handler()\l|isRouting()\linvoke()\l}"];
    HttpHandler [tooltip="HttpHandler", fillcolor="lightgray", id="me", label="{HttpHandler|new HttpHandler()\l|maxHeadersCount\lmaxHeaderSize\lmaxBodySize\lenableEncoding\lserverName\lhandler\l|enableCrossOrigin()\l}"];

    object -> Handler [dir=back];
    Handler -> HttpHandler [dir=back];
}
```

## 构造函数
        
### HttpHandler
**创建一个 [http](../../module/ifs/http.md) 协议处理器对象，将流对象的数据转变为 [http](../../module/ifs/http.md) 消息对象**

```JavaScript
new HttpHandler(Handler hdlr);
```

调用参数:
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq.Handler](../../module/ifs/mq.md#Handler)

## 成员属性
        
### maxHeadersCount
**Integer, 查询和设置最大请求头个数，缺省为 128**

```JavaScript
Integer HttpHandler.maxHeadersCount;
```

--------------------------
### maxHeaderSize
**Integer, 查询和设置最大请求头长度，缺省为 8192**

```JavaScript
Integer HttpHandler.maxHeaderSize;
```

--------------------------
### maxBodySize
**Integer, 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64**

```JavaScript
Integer HttpHandler.maxBodySize;
```

--------------------------
### enableEncoding
**Boolean, 自动解压缩功能开关，默认关闭**

```JavaScript
Boolean HttpHandler.enableEncoding;
```

--------------------------
### serverName
**String, 查询和设置服务器名称，缺省为：fibjs/0.x.0**

```JavaScript
String HttpHandler.serverName;
```

--------------------------
### handler
**[Handler](Handler.md), [http](../../module/ifs/http.md) 协议转换处理器当前事件处理接口对象**

```JavaScript
Handler HttpHandler.handler;
```

## 成员函数
        
### enableCrossOrigin
**允许跨域请求**

```JavaScript
HttpHandler.enableCrossOrigin(String allowHeaders = "Content-Type");
```

调用参数:
* allowHeaders: String, 指定接受的 [http](../../module/ifs/http.md) 头字段

--------------------------
### isRouting
**查询当前处理器是否支持路由**

```JavaScript
Boolean HttpHandler.isRouting();
```

返回结果:
* Boolean, 返回当前处理器是否支持路由

--------------------------
### invoke
**处理一个消息或对象**

```JavaScript
Handler HttpHandler.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* [Handler](Handler.md), 返回下一步的处理器

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpHandler.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpHandler.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

