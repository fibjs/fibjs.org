# 模块 mq
消息队列模块

## 函数
        
### await
创建一个异步等待处理器
```JavaScript
Handler mq.await();
```

返回结果:
* 返回创建的处理器

异步等待处理器用于需要异步处理的消息处理模式，示例如下：
```JavaScript
function func(v){
    var await = mq.await();

    call_some_async_func(v1, v2, v3, function() {
            await.end();
        });

    return await;
}
```
示例是一个 javascript 消息处理函数，当函数返回时，消息处理引擎将等待 await，直到 await.end 被调用，才继续下一阶段的处理。

### nullHandler
创建一个空处理器对象，次处理对象不做任何处理直接返回
```JavaScript
Handler mq.nullHandler();
```

返回结果:
* 返回空处理函数

### invoke
使用给定的处理器处理一个消息或对象
```JavaScript
mq.invoke(Handler hdlr,
                object v);
```

调用参数:
* hdlr - 指定使用的处理器
* v - 指定要处理的消息或对象

不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。

