# 对象 RedisList
[Redis](Redis.md) 数据库客户端 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 List 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var list = rdb.getList("test");
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
[<this>RedisList|push();pop();rpush();rpop();set();get();insertBefore();insertAfter();remove();trim();len();range()]

[object] <:- [RedisList]
```

## 成员函数
        
### push
**将一个或多个值 value 插入到列表的表头**

```JavaScript
Integer RedisList.push(Array values);
```

调用参数:
* values: Array, 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
**将一个或多个值 value 插入到列表的表头**

```JavaScript
Integer RedisList.push(...values);
```

调用参数:
* values: ..., 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### pop
**移除并返回列表 key 的头元素**

```JavaScript
Buffer RedisList.pop();
```

返回结果:
* [Buffer](Buffer.md), 列表的头元素，如果列表为空则返回 null

--------------------------
### rpush
**将一个或多个值 value 插入到列表的表尾(最右边)**

```JavaScript
Integer RedisList.rpush(Array values);
```

调用参数:
* values: Array, 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
**将一个或多个值 value 插入到列表的表尾(最右边)**

```JavaScript
Integer RedisList.rpush(...values);
```

调用参数:
* values: ..., 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### rpop
**移除并返回列表 key 的表尾(最右边)元素**

```JavaScript
Buffer RedisList.rpop();
```

返回结果:
* [Buffer](Buffer.md), 列表的头元素，如果列表为空则返回 null

--------------------------
### set
**将列表下标为 index 的元素的值设置为 value**

```JavaScript
RedisList.set(Integer index,
    Buffer value);
```

调用参数:
* index: Integer, 指定要修改的下标
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### get
**返回列表中，下标为 index 的元素**

```JavaScript
Buffer RedisList.get(Integer index);
```

调用参数:
* index: Integer, 指定要查询的下标

返回结果:
* [Buffer](Buffer.md), 列表中下标为 index 的元素

--------------------------
### insertBefore
**将值 value 插入到列表当中，位于值 pivot 之前**

```JavaScript
Integer RedisList.insertBefore(Buffer pivot,
    Buffer value);
```

调用参数:
* pivot: [Buffer](Buffer.md), 指定插入时查找的数据
* value: [Buffer](Buffer.md), 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### insertAfter
**将值 value 插入到列表当中，位于值 pivot 之后**

```JavaScript
Integer RedisList.insertAfter(Buffer pivot,
    Buffer value);
```

调用参数:
* pivot: [Buffer](Buffer.md), 指定插入时查找的数据
* value: [Buffer](Buffer.md), 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### remove
**根据参数 count 的值，移除列表中与参数 value 相等的元素**

```JavaScript
Integer RedisList.remove(Integer count,
    Buffer value);
```

调用参数:
* count: Integer, 指定删除的元素数量
* value: [Buffer](Buffer.md), 指定要删除的数值

返回结果:
* Integer, 被移除元素的数量

--------------------------
### trim
**对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除**

```JavaScript
RedisList.trim(Integer start,
    Integer stop);
```

调用参数:
* start: Integer, 指定修剪的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定修剪的结束下标，0 表示第一个元素，-1 表示最后一个元素

--------------------------
### len
**返回列表的长度**

```JavaScript
Integer RedisList.len();
```

返回结果:
* Integer, 返回列表的长度

--------------------------
### range
**返回列表中指定区间内的元素，区间以偏移量 start 和 stop 指定，包含 start 和 stop 的元素**

```JavaScript
NArray RedisList.range(Integer start,
    Integer stop);
```

调用参数:
* start: Integer, 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素

返回结果:
* NArray, 包含指定区间内的元素的数组

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String RedisList.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value RedisList.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

