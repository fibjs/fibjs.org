# 对象 Lock
纤程锁对象

不同于操作系统的锁，纤程锁是纯逻辑实现，加锁与解锁负荷很小

```JavaScript
var l = new coroutine.Lock();
l.acquire();
.....
l.release();
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Lock|new Lock()|acquire();release();count()]
[<class>Condition]
[<class>Event]
[<class>Semaphore]

[object] <:- [Lock]
[Lock] <:- [Condition]
[Lock] <:- [Event]
[Lock] <:- [Semaphore]
```

## 构造函数
        
### Lock
**构造函数**

```JavaScript
new Lock();
```

## 成员函数
        
### acquire
**获取锁的拥有权**

```JavaScript
Boolean Lock.acquire(Boolean blocking = true);
```

调用参数:
* blocking: Boolean, 指定是否等待，为 true 时等待，缺省为真

返回结果:
* Boolean, 返回是否成功获取锁，为 true 表示成功获取

acquire 方法用于获取锁的拥有权，当锁处于可获取状态时，此方法立即返回 true。

当锁不可获取，且 blocking 为 true，则当前纤程进入休眠，当其他纤程释放锁后，此方法返回 true。

当锁不可获取，且 blocking 为 false，则方法返回 false。

--------------------------
### release
**释放锁的拥有权**

```JavaScript
Lock.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
**查询当前等待任务数**

```JavaScript
Integer Lock.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Lock.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Lock.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

