# 对象 RedisSortedSet
Redis 数据库客户端 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 Redis 的 SortedSet 对象，创建方法：
@code
var db = require(&#34;db&#34;);
var rdb = new db.openRedis(&#34;redis-server&#34;);
var set = rdb.getSortedSet(&#34;test&#34;);
@endcode
## 函数
        
### add
将一个或多个 member 元素及其 score 值加入到有序集当中
```JavaScript
Integer RedisSortedSet.add(Object sms);
```

** 调用参数: **
* sms - 指定要添加的 member/score 对象

** 返回结果:**
* 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员

### add
将一个或多个 member 元素及其 score 值加入到有序集当中
```JavaScript
Integer RedisSortedSet.add(...);
```

** 调用参数: **
* ... - 指定要添加的 member/score 列表

** 返回结果:**
* 被成功添加的新成员的数量，不包括那些被更新的、已经存在的成员

### score
返回有序集中，成员 member 的 score 值
```JavaScript
Buffer RedisSortedSet.score(Buffer member);
```

** 调用参数: **
* member - 指定要查询的 member

** 返回结果:**
* member 成员的 score 值，以字符串形式表示

### incr
为有序集的成员 member 的 score 值加上增量 num
```JavaScript
Buffer RedisSortedSet.incr(Buffer member,
                Long num = 1);
```

** 调用参数: **
* member - 指定要修改的 member
* num - 指定要加上的数值

** 返回结果:**
* member 成员的新 score 值，以字符串形式表示

### remove
移除有序集中的一个或多个 member 元素
```JavaScript
Integer RedisSortedSet.remove(Array members);
```

** 调用参数: **
* members - 指定要移除的元素数组

** 返回结果:**
* 被成功移除的元素的数量，不包括被忽略的元素

### remove
移除有序集中的一个或多个 member 元素
```JavaScript
Integer RedisSortedSet.remove(...);
```

** 调用参数: **
* ... - 指定要移除的元素列表

** 返回结果:**
* 被成功移除的元素的数量，不包括被忽略的元素

### len
返回有序集中元素的数量
```JavaScript
Integer RedisSortedSet.len();
```

** 返回结果:**
* 返回有序集的长度

### count
返回有序集中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量
```JavaScript
Integer RedisSortedSet.count(Integer min,
                Integer max);
```

** 调用参数: **
* min - 指定统计的最小 score
* max - 指定统计的最大 score

** 返回结果:**
* score 值在 min 和 max 之间的成员的数量

### range
返回有序集中，指定区间内的成员，成员的位置按 score 值递增(从小到大)来排序
```JavaScript
List RedisSortedSet.range(Integer start,
                Integer stop,
                Boolean withScores = false);
```

** 调用参数: **
* start - 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop - 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
* withScores - 指定是否在结果中包含 score

** 返回结果:**
* 指定区间内，带有 score 值(可选)的有序集成员的列表

### rangeRev
返回有序集中，指定区间内的成员，成员的位置按 score 值递减(从大到小)来排序
```JavaScript
List RedisSortedSet.rangeRev(Integer start,
                Integer stop,
                Boolean withScores = false);
```

** 调用参数: **
* start - 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop - 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素
* withScores - 指定是否在结果中包含 score

** 返回结果:**
* 指定区间内，带有 score 值(可选)的有序集成员的列表

### rank
有序集中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列
```JavaScript
Integer RedisSortedSet.rank(Buffer member);
```

** 调用参数: **
* member - 指定要查询的 member

** 返回结果:**
* member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil

### rankRev
有序集中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)顺序排列
```JavaScript
Integer RedisSortedSet.rankRev(Buffer member);
```

** 调用参数: **
* member - 指定要查询的 member

** 返回结果:**
* member 如果 member 是有序集 key 的成员，返回 member 的排名。如果 member 不是有序集 key 的成员，返回 nil

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
RedisSortedSet.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean RedisSortedSet.equals(object expected);
```

** 调用参数: **
* expected - 制定比较的目标对象

** 返回结果:**
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String RedisSortedSet.toString();
```

** 返回结果:**
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value RedisSortedSet.toJSON(String key = "");
```

** 调用参数: **
* key - 未使用

** 返回结果:**
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value RedisSortedSet.valueOf();
```

** 返回结果:**
* 返回对象本身的数值

