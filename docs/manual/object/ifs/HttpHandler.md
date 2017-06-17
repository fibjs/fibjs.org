# 对象 HttpHandler
[http](/docs/manual/module/ifs/http.md.html) 协议转换处理器

用以将数据流转换为 [http](/docs/manual/module/ifs/http.md.html) 协议消息，创建方式：
```JavaScript
var hdlr = new mq.HttpHandler(...);
```
或者：
```JavaScript
var hdlr = new http.Handler(...);
```
## 构造函数
        
### HttpHandler
创建一个 [http](/docs/manual/module/ifs/http.md.html) 协议处理器对象，将流对象的数据转变为 [http](/docs/manual/module/ifs/http.md.html) 消息对象
```JavaScript
 new HttpHandler(Handler hdlr);
```

调用参数:
* hdlr - 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler

## 函数
        
### onerror
设置错误处理器
```JavaScript
HttpHandler.onerror(Object hdlrs);
```

调用参数:
* hdlrs - 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler

使用方式：
```JavaScript
hdlr.onerror({
    "404": function(v)
        {
            ...
        },
    "500": new mq.Routing(...)
})
```

### invoke
处理一个消息或对象
```JavaScript
Handler HttpHandler.invoke(object v) async;
```

调用参数:
* v - 指定处理的消息或对象

返回结果:
* 返回下一步的处理器

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpHandler.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpHandler.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String HttpHandler.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpHandler.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpHandler.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### crossDomain
查询和设置是否允许跨域请求，缺省为 false
```JavaScript
Boolean HttpHandler.crossDomain;
```

### forceGZIP
查询和设置是否允强制使用 gzip 压缩输出，缺省为 false
```JavaScript
Boolean HttpHandler.forceGZIP;
```

### maxHeadersCount
查询和设置最大请求头个数，缺省为 128
```JavaScript
Integer HttpHandler.maxHeadersCount;
```

### maxUploadSize
查询和设置最大上传尺寸，以字节为单位，缺省为 67108864(64M)
```JavaScript
Integer HttpHandler.maxUploadSize;
```

### handler
[WebSocket](/docs/manual/object/ifs/websocket.md.html) 协议转换处理器当前事件处理接口对象
```JavaScript
Handler HttpHandler.handler;
```

### stats
查询 [WebSocket](/docs/manual/object/ifs/websocket.md.html) 包协议转换处理器的工作状态
```JavaScript
readonly Stats HttpHandler.stats;
```

返回的结果为一个 [Stats](/docs/manual/object/ifs/stats.md.html) 对象，结构如下：
```JavaScript
{
    total : 1000,    // 总计处理的请求
    pendding : 100,  // 当前正在处理的请求
    request : 10,    // 新建的请求
    response : 10,   // 发送的响应
    error : 100      // 发生的错误
}
```

