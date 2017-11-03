# 模块 mq
消息队列模块

## 对象
        
### Message
**创建一个消息对象，参见 [Message](../../object/ifs/Message.md)**

```JavaScript
Message mq.Message;
```

--------------------------
### HttpHandler
**创建一个 [http](http.md) 协议处理器对象，参见 [HttpHandler](../../object/ifs/HttpHandler.md)**

```JavaScript
HttpHandler mq.HttpHandler;
```

--------------------------
### Handler
**创建一个消息处理器对象，传递值内置处理器则直接返回**

```JavaScript
Handler mq.Handler;
```

返回结果:
* 返回封装了处理函数的处理器

hdlr 接受内置消息处理器，处理函数，链式处理数组，路由对象：
- Function javascript 函数，将使用此函数进行处理
- [Handler](../../object/ifs/Handler.md) 内置处理器，将使用此处理器进行处理
- 链式处理数组，等同于返回 new [mq.Chain](mq.md#Chain)(hdlr)，参见 [Chain](../../object/ifs/Chain.md)
- 路由对象，等同于返回 new [mq.Routing](mq.md#Routing)(hdlr)，参见 [Routing](../../object/ifs/Routing.md)

消息处理函数语法如下：

```JavaScript
function func(v) {}
```

参数 v 为正在处理的消息，返回结果允许有四种:
- Function javascript 函数，将使用此函数进行下一阶段处理
- [Handler](../../object/ifs/Handler.md) 内置处理器，将使用此处理器进行下一阶段处理
- 链式处理数组，等同于 new [mq.Chain](mq.md#Chain)(v)，参见 [Chain](../../object/ifs/Chain.md)
- 路由对象，等同于 new [mq.Routing](mq.md#Routing)(v)，参见 [Routing](../../object/ifs/Routing.md)

无返回或者其他的返回结果将结束消息处理。

--------------------------
### Chain
**创建一个消息处理器链处理对象，参见 [Chain](../../object/ifs/Chain.md)**

```JavaScript
Chain mq.Chain;
```

--------------------------
### Routing
**创建一个消息处理器路由对象，参见 [Routing](../../object/ifs/Routing.md)**

```JavaScript
Routing mq.Routing;
```

## 静态函数
        
### nullHandler
**创建一个空处理器对象，次处理对象不做任何处理直接返回**

```JavaScript
static Handler mq.nullHandler();
```

返回结果:
* [Handler](../../object/ifs/Handler.md), 返回空处理函数

--------------------------
### invoke
**使用给定的处理器处理一个消息或对象**

```JavaScript
static mq.invoke(Handler hdlr,
    object v) async;
```

调用参数:
* hdlr: [Handler](../../object/ifs/Handler.md), 指定使用的处理器
* v: [object](../../object/ifs/object.md), 指定要处理的消息或对象

不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。

