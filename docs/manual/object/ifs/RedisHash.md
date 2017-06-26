# 对象 RedisHash
[Redis](Redis.md) 数据库客户端 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 Hash 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var hash = rdb.getHash("test");
```

## 继承关系
<div class="inherits"><svg width="73pt" height="294pt" viewBox="0.00 0.00 72.89 294.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 290)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-290 68.893,-290 68.893,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="3.615,-197.5 3.615,-285.5 61.278,-285.5 61.278,-197.5 3.615,-197.5"/>
<text text-anchor="middle" x="32.4465" y="-272.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="3.615,-265.5 61.278,-265.5 "/>
<text text-anchor="start" x="11.615" y="-252.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="11.615" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="11.615" y="-228.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="11.615" y="-216.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="11.615" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- RedisHash -->
<g id="node2" class="node">
<title>RedisHash</title>
<g id="a_node2"><a xlink:title="RedisHash">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-160.5 64.893,-160.5 64.893,-.5 0,-.5"/>
<text text-anchor="middle" x="32.4465" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">RedisHash</text>
<polyline fill="none" stroke="#000000" points="0,-140.5 64.893,-140.5 "/>
<text text-anchor="start" x="8" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">set()</text>
<text text-anchor="start" x="8" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setNX()</text>
<text text-anchor="start" x="8" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">mset()</text>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">get()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">mget()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">incr()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getAll()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">keys()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">len()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">exists()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">del()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;RedisHash -->
<g id="edge1" class="edge">
<title>object-&gt;RedisHash</title>
<path fill="none" stroke="#000000" d="M32.4465,-186.9594C32.4465,-178.4626 32.4465,-169.5338 32.4465,-160.6112"/>
<polygon fill="#000000" stroke="#000000" points="28.9466,-187.0798 32.4465,-197.0799 35.9466,-187.0799 28.9466,-187.0798"/>
</g>
</g>
</svg></div>

## 成员函数
        
### set
** 将哈希表中的域 field 的值设为 value，如果域 field 已经存在于哈希表中，旧值将被覆盖 **

```JavaScript
RedisHash.set(Buffer field,
    Buffer value);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要修改的 field
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### setNX
** 将哈希表中的域 field 的值设置为 value ，当且仅当域 field 不存在。若域 field 已经存在，该操作无效 **

```JavaScript
RedisHash.setNX(Buffer field,
    Buffer value);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要修改的 field
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### mset
** 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域 **

```JavaScript
RedisHash.mset(Object kvs);
```

调用参数:
* kvs: Object, 指定要设置的 field/value 对象

--------------------------
** 同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域 **

```JavaScript
RedisHash.mset(...);
```

调用参数:
* ...: 指定要设置的 field/value 列表

--------------------------
### get
** 返回哈希表中给定域 field 的值 **

```JavaScript
Buffer RedisHash.get(Buffer field);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要查询的 field

返回结果:
* [Buffer](Buffer.md), 给定域的值，当给定域不存在或是给定 key 不存在时，返回 null

--------------------------
### mget
** 返回哈希表中，一个或多个给定域的值 **

```JavaScript
List RedisHash.mget(Array fields);
```

调用参数:
* fields: Array, 指定要查询的域数组

返回结果:
* [List](List.md), 一个包含所有给定域的值的列表

--------------------------
** 返回哈希表中，一个或多个给定域的值 **

```JavaScript
List RedisHash.mget(...);
```

调用参数:
* ...: 指定要查询的域列表

返回结果:
* [List](List.md), 一个包含所有给定域的值的列表

--------------------------
### incr
** 将域所储存的值加上增量 **

```JavaScript
Long RedisHash.incr(Buffer field,
    Long num = 1);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要修改的域
* num: Long, 指定要加上的数值

返回结果:
* Long, 加上 num 之后，域的值

--------------------------
### getAll
** 返回哈希表中，所有的域和值 **

```JavaScript
List RedisHash.getAll();
```

返回结果:
* [List](List.md), 返回一个包含哈希表中所有域的列表

--------------------------
### keys
** 返回哈希表中的所有域 **

```JavaScript
List RedisHash.keys();
```

返回结果:
* [List](List.md), 返回值里，紧跟每个域名(field name)之后是域的值(value)，所以返回值的长度是哈希表大小的两倍

--------------------------
### len
** 返回哈希表中域的数量 **

```JavaScript
Integer RedisHash.len();
```

返回结果:
* Integer, 返回哈希表中域的数量

--------------------------
### exists
** 查看哈希表中，给定域 field 是否存在 **

```JavaScript
Boolean RedisHash.exists(Buffer field);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要查询的 field

返回结果:
* Boolean, 如果哈希表含有给定域，返回 true，如果哈希表不含有给定域，或 key 不存在，返回 false

--------------------------
### del
** 删除哈希表中的一个或多个指定域，不存在的域将被忽略 **

```JavaScript
Integer RedisHash.del(Array fields);
```

调用参数:
* fields: Array, 指定要删除的域数组

返回结果:
* Integer, 被删除域的数量

--------------------------
** 删除哈希表中的一个或多个指定域，不存在的域将被忽略 **

```JavaScript
Integer RedisHash.del(...);
```

调用参数:
* ...: 指定要删除的域列表

返回结果:
* Integer, 被删除域的数量

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
RedisHash.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean RedisHash.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String RedisHash.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value RedisHash.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value RedisHash.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

