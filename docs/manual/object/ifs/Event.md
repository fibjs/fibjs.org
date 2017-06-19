# 对象 Event
事件对象

通过一个事件达到对一组纤程进行控制的目的（事件对象的状态为bool类型）
## 构造函数
        
### Event
事件对象构造函数
```JavaScript
 new Event(Boolean value = false);
```

调用参数:
* value - 指定是否等待，为 true 时等待，缺省为 false

## 成员函数
        
### isSet
判断事件对象是否为true
```JavaScript
Boolean Event.isSet();
```

--------------------------
### set
激活事件（将事件状态改为true），并调用pulse()
```JavaScript
Event.set();
```

--------------------------
### pulse
激活等待该事件的所有纤程
```JavaScript
Event.pulse();
```

--------------------------
### clear
重置事件（将事件状态改为false）
```JavaScript
Event.clear();
```

--------------------------
### wait
等待一个事件
```JavaScript
Event.wait();
```

--------------------------
### acquire
获取锁的拥有权
```JavaScript
Boolean Event.acquire(Boolean blocking = true);
```

调用参数:
* blocking - 指定是否等待，为 true 时等待，缺省为真

返回结果:
* 返回是否成功获取锁，为 true 表示成功获取

acquire 方法用于获取锁的拥有权，当锁处于可获取状态时，此方法立即返回 true。

当锁不可获取，且 blocking 为 true，则当前纤程进入休眠，当其他纤程释放锁后，此方法返回 true。

当锁不可获取，且 blocking 为 false，则方法返回 false。

--------------------------
### release
释放锁的拥有权
```JavaScript
Event.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
查询当前等待任务数
```JavaScript
Integer Event.count();
```

返回结果:
* 返回任务数

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Event.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Event.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String Event.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Event.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value Event.valueOf();
```

返回结果:
* 返回对象本身的数值
