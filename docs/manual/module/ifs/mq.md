# 模块 mq
消息队列模块

## 函数
        
### await
创建一个异步等待处理器
```JavaScript
Handler mq.await();
```

** 返回结果:**
* 返回创建的处理器

### nullHandler
创建一个空处理器对象，次处理对象不做任何处理直接返回
```JavaScript
Handler mq.nullHandler();
```

** 返回结果:**
* 返回空处理函数

### invoke
使用给定的处理器处理一个消息或对象
```JavaScript
mq.invoke(Handler hdlr,
                object v);
```

** 调用参数: **
* hdlr - 指定使用的处理器
* v - 指定要处理的消息或对象

