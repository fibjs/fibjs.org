# 对象 RedisSortedSet
[Redis](Redis.md) 数据库客户端 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 SortedSet 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var set = rdb.getSortedSet("test");
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
[<this>RedisSortedSet|add();score();incr();remove();len();count();range();rangeRev();rank();rankRev()]

[object] <:- [RedisSortedSet]
```

## 成员函数
        
### add
**将一个或多个 member 元素及其 score 值加入到有序集当中**

```JavaScript
Integer RedisSortedSet.add(Object sms);
```

调用参数:
* sms: Object, 指定要添加的 member/score 对象

返回结果:
* Integer, 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员

--------------------------
**将一个或多个 member 元素及其 score 值加入到有序集当中**

```JavaScript
Integer RedisSortedSet.add(...sms);
```

调用参数:
* sms: ..., 指定要添加的 member/score 列表

返回结果:
* Integer, 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员

--------------------------
### score
**返回有序集中，成员 member 的 score 值**

```JavaScript
Buffer RedisSortedSet.score(Buffer member);
```

调用参数:
* member: [Buffer](Buffer.md), 指定要查询的 member

返回结果:
* [Buffer](Buffer.md), member 成员的 score 值，以字符串形式表示

--------------------------
### incr
**为有序集的成员 member 的 score 值加上增量 num**

```JavaScript
Buffer RedisSortedSet.incr(Buffer member,
    Long num = 1);
```

调用参数:
* member: [Buffer](Buffer.md), 指定要修改的 member
* num: Long, 指定要加上的数值

返回结果:
* [Buffer](Buffer.md), member 成员的新 score 值，以字符串形式表示

--------------------------
### remove
**移除有序集中的一个或多个 member 元素**

```JavaScript
Integer RedisSortedSet.remove(Array members);
```

调用参数:
* members: Array, 指定要移除的元素数组

返回结果:
* Integer, 被成功移除的元素的数量，不包括被忽略的元素

--------------------------
**移除有序集中的一个或多个 member 元素**

```JavaScript
Integer RedisSortedSet.remove(...members);
```

调用参数:
* members: ..., 指定要移除的元素列表

返回结果:
* Integer, 被成功移除的元素的数量，不包括被忽略的元素

--------------------------
### len
**返回有序集中元素的数量**

```JavaScript
Integer RedisSortedSet.len();
```

返回结果:
* Integer, 返回有序集的长度

--------------------------
### count
**返回有序集中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量**

```JavaScript
Integer RedisSortedSet.count(Integer min,
    Integer max);
```

调用参数:
* min: Integer, 指定统计的最小 score
* max: Integer, 指定统计的最大 score

返回结果:
* Integer, score 值在 min 和 max 之间的成员的数量

--------------------------
### range
**返回有序集中，指定区间内的成员，成员的位置按 score 值递增(从小到大)来排序**

```JavaScript
NArray RedisSortedSet.range(Integer start,
    Integer stop,
    Boolean withScores = false);
```

调用参数:
* start: Integer, 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
* withScores: Boolean, 指定是否在结果中包含 score

返回结果:
* NArray, 指定区间内，带有 score 值(可选)的有序集成员的列表

--------------------------
### rangeRev
**返回有序集中，指定区间内的成员，成员的位置按 score 值递减(从大到小)来排序**

```JavaScript
NArray RedisSortedSet.rangeRev(Integer start,
    Integer stop,
    Boolean withScores = false);
```

调用参数:
* start: Integer, 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
* withScores: Boolean, 指定是否在结果中包含 score

返回结果:
* NArray, 指定区间内，带有 score 值(可选)的有序集成员的列表

--------------------------
### rank
**有序集中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列**

```JavaScript
Integer RedisSortedSet.rank(Buffer member);
```

调用参数:
* member: [Buffer](Buffer.md), 指定要查询的 member

返回结果:
* Integer, member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil

--------------------------
### rankRev
**有序集中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)顺序排列**

```JavaScript
Integer RedisSortedSet.rankRev(Buffer member);
```

调用参数:
* member: [Buffer](Buffer.md), 指定要查询的 member

返回结果:
* Integer, member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String RedisSortedSet.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value RedisSortedSet.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

