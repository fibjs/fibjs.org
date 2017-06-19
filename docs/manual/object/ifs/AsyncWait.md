# 对象 AsyncWait
消息处理器异步等待对象

## 成员函数
        
### end
结束等待，继续处理消息
```JavaScript
AsyncWait.end();
```

--------------------------
### invoke
处理一个消息或对象
```JavaScript
Handler AsyncWait.invoke(object v) async;
```

调用参数:
* v - 指定处理的消息或对象

返回结果:
* 返回下一步的处理器

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
AsyncWait.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean AsyncWait.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String AsyncWait.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value AsyncWait.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value AsyncWait.valueOf();
```

返回结果:
* 返回对象本身的数值
