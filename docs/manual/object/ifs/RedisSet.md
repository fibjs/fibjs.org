# 对象 RedisSet
[Redis](Redis.md) 数据库客户端 Set 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 Set 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var set = rdb.getSet("test");
```

## 继承关系
<div class="inherits"><svg width="87pt" height="252pt" viewBox="0.00 0.00 87.00 252.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 248)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-248 83,-248 83,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="11,-152 11,-244 68,-244 68,-152 11,-152"/>
<polygon fill="none" stroke="#000000" points="11.5,-222 11.5,-244 68.5,-244 68.5,-222 11.5,-222"/>
<text text-anchor="start" x="26.6625" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="11.5,-152 11.5,-222 68.5,-222 68.5,-152 11.5,-152"/>
<text text-anchor="start" x="16.5" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="16.5" y="-196" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="16.5" y="-184" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="16.5" y="-172" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="16.5" y="-160" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- RedisSet -->
<g id="node2" class="node">
<title>RedisSet</title>
<g id="a_node2"><a xlink:title="RedisSet">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-116 79,-116 79,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-94 .5,-116 79.5,-116 79.5,-94 .5,-94"/>
<text text-anchor="start" x="19.7185" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">RedisSet</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-94 79.5,-94 79.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> add()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> len()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exists()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> members()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pop()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> randMember()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;RedisSet -->
<g id="edge1" class="edge">
<title>object-&gt;RedisSet</title>
<path fill="none" stroke="#000000" d="M39.5,-141.7612C39.5,-133.4172 39.5,-124.8016 39.5,-116.4142"/>
<polygon fill="#000000" stroke="#000000" points="36.0001,-141.7707 39.5,-151.7708 43.0001,-141.7708 36.0001,-141.7707"/>
</g>
</g>
</svg></div>

## 成员函数
        
### add
** 将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略 **

```JavaScript
Integer RedisSet.add(Array members);
```

调用参数:
* members: Array, 指定要添加的元素数组

返回结果:
* Integer, 被添加到集合中的新元素的数量，不包括被忽略的元素

--------------------------
** 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域 **

```JavaScript
Integer RedisSet.add(...);
```

调用参数:
* ...: 指定要添加的元素列表

返回结果:
* Integer, 被添加到集合中的新元素的数量，不包括被忽略的元素

--------------------------
### remove
** 移除集合中的一个或多个 member 元素 **

```JavaScript
Integer RedisSet.remove(Array members);
```

调用参数:
* members: Array, 指定要移除的元素数组

返回结果:
* Integer, 被成功移除的元素的数量，不包括被忽略的元素

--------------------------
** 移除集合中的一个或多个 member 元素 **

```JavaScript
Integer RedisSet.remove(...);
```

调用参数:
* ...: 指定要移除的元素列表

返回结果:
* Integer, 被成功移除的元素的数量，不包括被忽略的元素

--------------------------
### len
** 返回集合中元素的数量 **

```JavaScript
Integer RedisSet.len();
```

返回结果:
* Integer, 返回集合的长度

--------------------------
### exists
** 判断 member 元素是否集合的成员 **

```JavaScript
Boolean RedisSet.exists(Buffer member);
```

调用参数:
* member: [Buffer](Buffer.md), 指定检查的 member

返回结果:
* Boolean, 如果 member 元素是集合的成员，返回 true

--------------------------
### members
** 返回集合中的所有成员 **

```JavaScript
List RedisSet.members();
```

返回结果:
* [List](List.md), 集合中所有成员的列表

--------------------------
### pop
** 移除并返回集合中的一个随机元素 **

```JavaScript
Buffer RedisSet.pop();
```

返回结果:
* [Buffer](Buffer.md), 被移除的随机元素。当集合是空集时，返回 null

--------------------------
### randMember
** 从集合中获取随机的一个元素 **

```JavaScript
Value RedisSet.randMember();
```

返回结果:
* Value, 返回一个元素；如果集合为空，返回 null

--------------------------
** 从集合中获取随机的若干元素 **

```JavaScript
Value RedisSet.randMember(Integer count);
```

调用参数:
* count: Integer, 指定返回的元素个数。正数，返回一个包含 count 个元素的数组；负数，返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值

返回结果:
* Value, 返回一个列表；如果集合为空，返回空列表

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
RedisSet.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean RedisSet.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String RedisSet.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value RedisSet.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value RedisSet.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

