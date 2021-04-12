# 对象 RedisHash
[Redis](Redis.md) 数据库客户端 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库

用以操作 [Redis](Redis.md) 的 Hash 对象，创建方法：

```JavaScript
var db = require("db");
var rdb = new db.openRedis("redis-server");
var hash = rdb.getHash("test");
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
[<this>RedisHash|set();setNX();mset();get();mget();incr();getAll();keys();len();exists();del()]

[object] <:- [RedisHash]
```

## 成员函数
        
### set
**将哈希表中的域 field 的值设为 value，如果域 field 已经存在于哈希表中，旧值将被覆盖**

```JavaScript
RedisHash.set(Buffer field,
    Buffer value);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要修改的 field
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### setNX
**将哈希表中的域 field 的值设置为 value ，当且仅当域 field 不存在。若域 field 已经存在，该操作无效**

```JavaScript
RedisHash.setNX(Buffer field,
    Buffer value);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要修改的 field
* value: [Buffer](Buffer.md), 指定要修改的数据

--------------------------
### mset
**同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域**

```JavaScript
RedisHash.mset(Object kvs);
```

调用参数:
* kvs: Object, 指定要设置的 field/value 对象

--------------------------
**同时将多个 field-value (域-值)对设置到哈希表中，此命令会覆盖哈希表中已存在的域**

```JavaScript
RedisHash.mset(...kvs);
```

调用参数:
* kvs: ..., 指定要设置的 field/value 列表

--------------------------
### get
**返回哈希表中给定域 field 的值**

```JavaScript
Buffer RedisHash.get(Buffer field);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要查询的 field

返回结果:
* [Buffer](Buffer.md), 给定域的值，当给定域不存在或是给定 key 不存在时，返回 null

--------------------------
### mget
**返回哈希表中，一个或多个给定域的值**

```JavaScript
NArray RedisHash.mget(Array fields);
```

调用参数:
* fields: Array, 指定要查询的域数组

返回结果:
* NArray, 一个包含所有给定域的值的列表

--------------------------
**返回哈希表中，一个或多个给定域的值**

```JavaScript
NArray RedisHash.mget(...fields);
```

调用参数:
* fields: ..., 指定要查询的域列表

返回结果:
* NArray, 一个包含所有给定域的值的列表

--------------------------
### incr
**将域所储存的值加上增量**

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
**返回哈希表中，所有的域和值**

```JavaScript
NArray RedisHash.getAll();
```

返回结果:
* NArray, 返回一个包含哈希表中所有域的列表

--------------------------
### keys
**返回哈希表中的所有域**

```JavaScript
NArray RedisHash.keys();
```

返回结果:
* NArray, 返回值里，紧跟每个域名(field name)之后是域的值(value)，所以返回值的长度是哈希表大小的两倍

--------------------------
### len
**返回哈希表中域的数量**

```JavaScript
Integer RedisHash.len();
```

返回结果:
* Integer, 返回哈希表中域的数量

--------------------------
### exists
**查看哈希表中，给定域 field 是否存在**

```JavaScript
Boolean RedisHash.exists(Buffer field);
```

调用参数:
* field: [Buffer](Buffer.md), 指定要查询的 field

返回结果:
* Boolean, 如果哈希表含有给定域，返回 true，如果哈希表不含有给定域，或 key 不存在，返回 false

--------------------------
### del
**删除哈希表中的一个或多个指定域，不存在的域将被忽略**

```JavaScript
Integer RedisHash.del(Array fields);
```

调用参数:
* fields: Array, 指定要删除的域数组

返回结果:
* Integer, 被删除域的数量

--------------------------
**删除哈希表中的一个或多个指定域，不存在的域将被忽略**

```JavaScript
Integer RedisHash.del(...fields);
```

调用参数:
* fields: ..., 指定要删除的域列表

返回结果:
* Integer, 被删除域的数量

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String RedisHash.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value RedisHash.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

