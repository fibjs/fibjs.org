# 对象 RedisList
[Redis](Redis.md) 数据库客户端 [List](List.md) 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 [List](List.md) 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var list = rdb.getList("test");
```

## 继承关系
<div class="inherits"><svg width="84pt" height="312pt" viewBox="0.00 0.00 84.00 312.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 308)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-308 80,-308 80,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="9.5,-212 9.5,-304 66.5,-304 66.5,-212 9.5,-212"/>
<polygon fill="none" stroke="#000000" points="10,-282 10,-304 67,-304 67,-282 10,-282"/>
<text text-anchor="start" x="25.1625" y="-290" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="10,-212 10,-282 67,-282 67,-212 10,-212"/>
<text text-anchor="start" x="15" y="-268" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="15" y="-256" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="15" y="-244" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="15" y="-232" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="15" y="-220" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- RedisList -->
<g id="node2" class="node">
<title>RedisList</title>
<g id="a_node2"><a xlink:title="RedisList">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-176 76,-176 76,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-154 0,-176 76,-176 76,-154 0,-154"/>
<text text-anchor="start" x="17.4435" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">RedisList</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-154 76,-154 76,0 0,0"/>
<text text-anchor="start" x="5" y="-140" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> push()</text>
<text text-anchor="start" x="5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pop()</text>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rpush()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rpop()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertBefore()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insertAfter()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> trim()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> len()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> range()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;RedisList -->
<g id="edge1" class="edge">
<title>object-&gt;RedisList</title>
<path fill="none" stroke="#000000" d="M38,-201.8265C38,-193.6043 38,-184.974 38,-176.2979"/>
<polygon fill="#000000" stroke="#000000" points="34.5001,-201.9955 38,-211.9956 41.5001,-201.9956 34.5001,-201.9955"/>
</g>
</g>
</svg></div>

## 成员函数
        
### push
** 将一个或多个值 value 插入到列表的表头 **

```JavaScript
Integer RedisList.push(Array values);
```

调用参数:
* values: Array, 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
** 将一个或多个值 value 插入到列表的表头 **

```JavaScript
Integer RedisList.push(...);
```

调用参数:
* ...: 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### pop
** 移除并返回列表 key 的头元素 **

```JavaScript
Buffer RedisList.pop();
```

返回结果:
* [Buffer](Buffer.md), 列表的头元素，如果列表为空则返回 null

--------------------------
### rpush
** 将一个或多个值 value 插入到列表的表尾(最右边) **

```JavaScript
Integer RedisList.rpush(Array values);
```

调用参数:
* values: Array, 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
** 将一个或多个值 value 插入到列表的表尾(最右边) **

```JavaScript
Integer RedisList.rpush(...);
```

调用参数:
* ...: 指定要插入的数据

返回结果:
* Integer, 插入后，列表的长度

--------------------------
### rpop
** 移除并返回列表 key 的表尾(最右边)元素 **

```JavaScript
Buffer RedisList.rpop();
```

返回结果:
* [Buffer](Buffer.md), 列表的头元素，如果列表为空则返回 null

--------------------------
### set
** 将列表下标为 index 的元素的值设置为 value **

```JavaScript
RedisList.set(Integer index,
    Buffer value);
```

调用参数:
* index: Integer, 指定要修改的下标
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### get
** 返回列表中，下标为 index 的元素 **

```JavaScript
Buffer RedisList.get(Integer index);
```

调用参数:
* index: Integer, 指定要查询的下标

返回结果:
* [Buffer](Buffer.md), 列表中下标为 index 的元素

--------------------------
### insertBefore
** 将值 value 插入到列表当中，位于值 pivot 之前 **

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
** 将值 value 插入到列表当中，位于值 pivot 之后 **

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
** 根据参数 count 的值，移除列表中与参数 value 相等的元素 **

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
** 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除 **

```JavaScript
RedisList.trim(Integer start,
    Integer stop);
```

调用参数:
* start: Integer, 指定修剪的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定修剪的结束下标，0 表示第一个元素，-1 表示最后一个元素

--------------------------
### len
** 返回列表的长度 **

```JavaScript
Integer RedisList.len();
```

返回结果:
* Integer, 返回列表的长度

--------------------------
### range
** 返回列表中指定区间内的元素，区间以偏移量 start 和 stop 指定，包含 start 和 stop 的元素 **

```JavaScript
List RedisList.range(Integer start,
    Integer stop);
```

调用参数:
* start: Integer, 指定查询的起始下标，0 表示第一个元素，-1 表示最后一个元素
* stop: Integer, 指定查询的结束下标，0 表示第一个元素，-1 表示最后一个元素

返回结果:
* [List](List.md), 包含指定区间内的元素的数组

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
RedisList.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean RedisList.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String RedisList.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value RedisList.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value RedisList.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

