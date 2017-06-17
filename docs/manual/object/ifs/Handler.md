# 对象 Handler
消息处理器接口

## 构造函数
        
### Handler
构造一个消息处理器链处理对象
```JavaScript
 new Handler(Array hdlrs);
```

调用参数:
* hdlrs - 处理器数组

--------------------------
创建一个消息处理器路由对象
```JavaScript
 new Handler(Object map);
```

调用参数:
* map - 初始化路由参数

--------------------------
创建一个 JavaSvript 消息处理器
```JavaScript
 new Handler(Function hdlr);
```

调用参数:
* hdlr - JavaScript 处理器函数

## 函数
        
### invoke
处理一个消息或对象
```JavaScript
Handler Handler.invoke(object v);
```

调用参数:
* v - 指定处理的消息或对象

返回结果:
* 返回下一步的处理器

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Handler.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Handler.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Handler.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Handler.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Handler.valueOf();
```

返回结果:
* 返回对象本身的数值

