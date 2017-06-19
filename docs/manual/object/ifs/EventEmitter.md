# 对象 EventEmitter
事件触发对象，可用于建立观察者模式，支持事件触发的对象均继承于此，同一事件的同一函数只会产生一次回调

[Event](Event.md) 对象可独立创建，以用于组建自定义的事件系统：
```JavaScript
var EventEmitter = require('events');

var e = new EventEmitter();
```
## 构造函数
        
### EventEmitter
构造函数
```JavaScript
 new EventEmitter();
```

## 静态属性
        
### defaultMaxListeners
默认全局最大监听器数
```JavaScript
static Integer EventEmitter.defaultMaxListeners;
```

## 成员函数
        
### on
绑定一个事件处理函数到对象
```JavaScript
Object EventEmitter.on(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
绑定一个事件处理函数到对象
```JavaScript
Object EventEmitter.on(Object map);
```

调用参数:
* map - 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### addListener
绑定一个事件处理函数到对象
```JavaScript
Object EventEmitter.addListener(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
绑定一个事件处理函数到对象
```JavaScript
Object EventEmitter.addListener(Object map);
```

调用参数:
* map - 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### prependListener
绑定一个事件处理函数到对象起始
```JavaScript
Object EventEmitter.prependListener(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
绑定一个事件处理函数到对象起始
```JavaScript
Object EventEmitter.prependListener(Object map);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### once
绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次
```JavaScript
Object EventEmitter.once(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
绑定一个一次性事件处理函数到对象，一次性处理函数只会触发一次
```JavaScript
Object EventEmitter.once(Object map);
```

调用参数:
* map - 指定事件映射关系，对象属性名称将作为事件名称，属性的值将作为事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### prependOnceListener
绑定一个事件处理函数到对象起始
```JavaScript
Object EventEmitter.prependOnceListener(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
绑定一个事件处理函数到对象起始
```JavaScript
Object EventEmitter.prependOnceListener(Object map);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回成功绑定的数量，如果函数已绑定则返回 0

--------------------------
### off
从对象处理队列中取消指定函数
```JavaScript
Object EventEmitter.off(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
取消对象处理队列中的全部函数
```JavaScript
Object EventEmitter.off(String ev);
```

调用参数:
* ev - 指定事件的名称

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
从对象处理队列中取消指定函数
```JavaScript
Object EventEmitter.off(Object map);
```

调用参数:
* map - 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### removeListener
从对象处理队列中取消指定函数
```JavaScript
Object EventEmitter.removeListener(String ev,
                Function func);
```

调用参数:
* ev - 指定事件的名称
* func - 指定事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
取消对象处理队列中的全部函数
```JavaScript
Object EventEmitter.removeListener(String ev);
```

调用参数:
* ev - 指定事件的名称

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
从对象处理队列中取消指定函数
```JavaScript
Object EventEmitter.removeListener(Object map);
```

调用参数:
* map - 指定事件映射关系，对象属性名称作为事件名称，属性的值作为事件处理函数

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### removeAllListeners
从对象处理队列中取消所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
```JavaScript
Object EventEmitter.removeAllListeners(Array evs = []);
```

调用参数:
* evs - 指定事件的名称

返回结果:
* 返回事件对象本身，便于链式调用

--------------------------
### setMaxListeners
监听器的默认限制的数量，仅用于兼容
```JavaScript
EventEmitter.setMaxListeners(Integer n);
```

调用参数:
* n - 指定事件的数量

--------------------------
### getMaxListeners
获取监听器的默认限制的数量，仅用于兼容
```JavaScript
Integer EventEmitter.getMaxListeners();
```

--------------------------
### listeners
查询对象指定事件的监听器数组
```JavaScript
Array EventEmitter.listeners(String ev);
```

调用参数:
* ev - 指定事件的名称

返回结果:
* 返回指定事件的监听器数组

--------------------------
### listenerCount
查询对象指定事件的监听器数量
```JavaScript
Integer EventEmitter.listenerCount(String ev);
```

调用参数:
* ev - 指定事件的名称

返回结果:
* 返回指定事件的监听器数量

--------------------------
### eventNames
查询监听器事件名称
```JavaScript
Array EventEmitter.eventNames();
```

返回结果:
* 返回事件名称数组

--------------------------
### emit
主动触发一个事件
```JavaScript
Boolean EventEmitter.emit(String ev,
                ...);
```

调用参数:
* ev - 事件名称
* ... - 事件参数，将会传递给事件处理函数

返回结果:
* 返回事件触发状态，有响应事件返回 true，否则返回 false

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
EventEmitter.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean EventEmitter.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String EventEmitter.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value EventEmitter.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value EventEmitter.valueOf();
```

返回结果:
* 返回对象本身的数值
