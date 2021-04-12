# 对象 Semaphore
纤程信号量对象

信号量对象管理一个内部计数器，此计数器调用 acquire 或者 wait 后减一，调用 release 或者 post 后加一。
计数器不会减至负数，因为 acquire 和 wait 在发现数值为 0 的时候，会休眠当前纤程，直至其它纤程通过 release 或 post 增加计数器的值。

信号量常用的场合是限制资源并发使用，以及生产者/消费者模式的应用。

以数据库请求为例，限制资源并发使用的情形：

```JavaScript
var maxconnections = 5;
var l = new coroutine.Semaphore(maxconnections);

......

l.acquire();
var conn = connectdb()
    .....
conn.close();
l.release();
```

生产者/消费者模式通常则将信号量与队列配合使用。生产者向队列中加入数据，并 post 一个信号，消费者则先 wait 信号，获取信号后去队查询取数据。

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>Lock|new Lock()|acquire();release();count()]
[<this>Semaphore|new Semaphore()|wait();post();trywait()]

[object] <:- [Lock]
[Lock] <:- [Semaphore]
```

## 构造函数
        
### Semaphore
**信号量构造函数**

```JavaScript
new Semaphore(Integer value = 1);
```

调用参数:
* value: Integer, 计数器初始数值

## 成员函数
        
### wait
**等待一个信号量，等同于 acquire(true)**

```JavaScript
Semaphore.wait();
```

--------------------------
### post
**释放一个信号量，等同于 release()**

```JavaScript
Semaphore.post();
```

--------------------------
### trywait
**尝试获取一个信号，如不能获取，则立即返回并返回 false，等同于 acquire(false)**

```JavaScript
Boolean Semaphore.trywait();
```

返回结果:
* Boolean, 获取成功则返回 true

--------------------------
### acquire
**获取锁的拥有权**

```JavaScript
Boolean Semaphore.acquire(Boolean blocking = true);
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
Semaphore.release();
```

此方法将释放对锁的拥有权，如果当前纤程未拥有锁，此方法将抛出错误。

--------------------------
### count
**查询当前等待任务数**

```JavaScript
Integer Semaphore.count();
```

返回结果:
* Integer, 返回任务数

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Semaphore.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Semaphore.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

