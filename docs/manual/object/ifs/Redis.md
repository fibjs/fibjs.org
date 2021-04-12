# 对象 Redis
Redis 数据库客户端对象

用以创建和管理 Redis 数据库，创建方法：

```JavaScript
var db = require("db");
var test = new db.openRedis("redis-server");
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
[<this>Redis|onsuberror|command();set();setNX();setXX();mset();msetNX();append();setRange();getRange();strlen();bitcount();get();mget();getset();decr();incr();setBit();getBit();exists();type();keys();del();expire();ttl();persist();rename();renameNX();sub();unsub();psub();unpsub();pub();getHash();getList();getSet();getSortedSet();dump();restore();close()]

[object] <:- [Redis]
```

## 成员属性
        
### onsuberror
**Function, 查询和设置错误处理函数，当 sub 出现错误或者网络中断时回调，当回调发生后，本对象的一切 sub 都将中止**

```JavaScript
Function Redis.onsuberror;
```

## 成员函数
        
### command
**redis 基础命令方法**

```JavaScript
Value Redis.command(String cmd,
    ...args);
```

调用参数:
* cmd: String, 指定发送的命令
* args: ..., 指定发送的参数

返回结果:
* Value, 返回服务器返回的结果

--------------------------
### set
**将字符串值 value 关联到 key，如果 key 已经持有其他值， SET 就覆写旧值，无视类型**

```JavaScript
Redis.set(Buffer key,
    Buffer value,
    Long ttl = 0);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要关联的 key
* value: [Buffer](Buffer.md), 指定要关联的数据
* ttl: Long, 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间

--------------------------
### setNX
**将 key 的值设为 value ，当且仅当 key 不存在。若给定的 key 已经存在，则 SETNX 不做任何动作。**

```JavaScript
Redis.setNX(Buffer key,
    Buffer value,
    Long ttl = 0);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要关联的 key
* value: [Buffer](Buffer.md), 指定要关联的数据
* ttl: Long, 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间

--------------------------
### setXX
**将 key 的值设为 value，只在键已经存在时，才对键进行设置操作。**

```JavaScript
Redis.setXX(Buffer key,
    Buffer value,
    Long ttl = 0);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要关联的 key
* value: [Buffer](Buffer.md), 指定要关联的数据
* ttl: Long, 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间

--------------------------
### mset
**同时设置一个或多个 key-value 对。如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值**

```JavaScript
Redis.mset(Object kvs);
```

调用参数:
* kvs: Object, 指定要设置的 key/value 对象

--------------------------
**同时设置一个或多个 key-value 对。如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值**

```JavaScript
Redis.mset(...kvs);
```

调用参数:
* kvs: ..., 指定要设置的 key/value 列表

--------------------------
### msetNX
**同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在**

```JavaScript
Redis.msetNX(Object kvs);
```

调用参数:
* kvs: Object, 指定要设置的 key/value 对象

--------------------------
**同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在**

```JavaScript
Redis.msetNX(...kvs);
```

调用参数:
* kvs: ..., 指定要设置的 key/value 列表

--------------------------
### append
**如果 key 已经存在并且是一个字符串，append 命令将 value 追加到 key 原来的值的末尾。如果 key 不存在，append 就简单地将给定 key 设为 value**

```JavaScript
Integer Redis.append(Buffer key,
    Buffer value);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要追加的 key
* value: [Buffer](Buffer.md), 指定要追加的数据

返回结果:
* Integer, 追加 value 之后， key 中字符串的长度

--------------------------
### setRange
**用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始**

```JavaScript
Integer Redis.setRange(Buffer key,
    Integer offset,
    Buffer value);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要修改的 key
* offset: Integer, 指定修改的字节偏移
* value: [Buffer](Buffer.md), 指定要覆盖的数据

返回结果:
* Integer, 被修改之后，字符串的长度

--------------------------
### getRange
**返回 key 中字符串值的子字符串，字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内)**

```JavaScript
Buffer Redis.getRange(Buffer key,
    Integer start,
    Integer end);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询的 key
* start: Integer, 指定查询的起始字节偏移
* end: Integer, 指定查询的结束字节偏移

返回结果:
* [Buffer](Buffer.md), 截取得出的子字符串

--------------------------
### strlen
**返回 key 所储存的字符串值的长度。当 key 储存的不是字符串值时，返回一个错误**

```JavaScript
Integer Redis.strlen(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要计算的 key

返回结果:
* Integer, 字符串值的长度。当 key 不存在时，返回 0

--------------------------
### bitcount
**计算给定字符串中，被设置为 1 的比特位的数量**

```JavaScript
Integer Redis.bitcount(Buffer key,
    Integer start = 0,
    Integer end = -1);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要计算的 key
* start: Integer, 指定要计算的起始字节，可以使用负数值，-1 表示最后一个字节，而 -2 表示倒数第二个字节，以此类推
* end: Integer, 指定要计算的结束字节，可以使用负数值，-1 表示最后一个字节，而 -2 表示倒数第二个字节，以此类推

返回结果:
* Integer, 被设置为 1 的位的数量

--------------------------
### get
**返回 key 所关联的字符串值，如果 key 不存在那么返回特殊值 Null**

```JavaScript
Buffer Redis.get(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要关联的 key

返回结果:
* [Buffer](Buffer.md), 当 key 不存在时，返回 Null ，否则，返回 key 的值

--------------------------
### mget
**返回所有(一个或多个)给定 key 的值。如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。**

```JavaScript
NArray Redis.mget(Array keys);
```

调用参数:
* keys: Array, 指定要查询的 key 数组

返回结果:
* NArray, 一个包含所有给定 key 的值的列表

--------------------------
**返回所有(一个或多个)给定 key 的值。如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。**

```JavaScript
NArray Redis.mget(...keys);
```

调用参数:
* keys: ..., 指定要查询的 key 列表

返回结果:
* NArray, 一个包含所有给定 key 的值的列表

--------------------------
### getset
**将给定 key 的值设为 value ，并返回 key 的旧值(old value)**

```JavaScript
Buffer Redis.getset(Buffer key,
    Buffer value);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询修改的 key
* value: [Buffer](Buffer.md), 指定修改的数值

返回结果:
* [Buffer](Buffer.md), 返回给定 key 的旧值

--------------------------
### decr
**将 key 所储存的值减去减量**

```JavaScript
Long Redis.decr(Buffer key,
    Long num = 1);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要修改的 key
* num: Long, 指定要减去的数值

返回结果:
* Long, 减去 num 之后，key 的值

--------------------------
### incr
**将 key 所储存的值加上增量**

```JavaScript
Long Redis.incr(Buffer key,
    Long num = 1);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要修改的 key
* num: Long, 指定要加上的数值

返回结果:
* Long, 加上 num 之后，key 的值

--------------------------
### setBit
**对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)**

```JavaScript
Integer Redis.setBit(Buffer key,
    Integer offset,
    Integer value);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要修改的 key
* offset: Integer, 指定修改的位偏移
* value: Integer, 指定设置或清除的参数，可以是 0 也可以是 1

返回结果:
* Integer, 指定偏移量原来储存的位

--------------------------
### getBit
**对 key 所储存的字符串值，获取指定偏移量上的位(bit)**

```JavaScript
Integer Redis.getBit(Buffer key,
    Integer offset);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询的 key
* offset: Integer, 指定查询的位偏移

返回结果:
* Integer, 字符串值指定偏移量上的位(bit)

--------------------------
### exists
**检查给定 key 是否存在**

```JavaScript
Boolean Redis.exists(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要关联的 key

返回结果:
* Boolean, 若 key 存在，返回 True，否则返回 False

--------------------------
### type
**返回 key 所储存的值的类型**

```JavaScript
String Redis.type(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询的 key

返回结果:
* String, 返回 key 所储存的值的类型，可能的值为 none(key不存在) string(字符串) list(列表) set(集合) zset(有序集) [hash](../../module/ifs/hash.md)(哈希表)

--------------------------
### keys
**查找所有符合给定模式 pattern 的 key**

```JavaScript
NArray Redis.keys(String pattern);
```

调用参数:
* pattern: String, 指定查询模式

返回结果:
* NArray, 符合给定模式的 key 列表

--------------------------
### del
**删除给定的一个或多个 key，不存在的 key 会被忽略**

```JavaScript
Integer Redis.del(Array keys);
```

调用参数:
* keys: Array, 指定要删除的 key 数组

返回结果:
* Integer, 被删除 key 的数量

--------------------------
**删除给定的一个或多个 key，不存在的 key 会被忽略**

```JavaScript
Integer Redis.del(...keys);
```

调用参数:
* keys: ..., 指定要删除的 key 列表

返回结果:
* Integer, 被删除 key 的数量

--------------------------
### expire
**为给定 key 设置生存时间，当 key 过期时，它会被自动删除**

```JavaScript
Boolean Redis.expire(Buffer key,
    Long ttl);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要设定的 key
* ttl: Long, 以毫秒为单位为 key 设置生存时间

返回结果:
* Boolean, 若 key 存在，返回 True，否则返回 False

--------------------------
### ttl
**返回给定 key 的剩余生存时间**

```JavaScript
Long Redis.ttl(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询的 key

返回结果:
* Long, 以毫秒为单位，返回 key 的剩余生存时间，当 key 不存在时，返回 -2，当 key 存在但没有设置剩余生存时间时，返回 -1

--------------------------
### persist
**移除给定 key 的生存时间，将这个 key 从『易失的』(带生存时间 key )转换成『持久的』(一个不带生存时间、永不过期的 key)**

```JavaScript
Boolean Redis.persist(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要设定的 key

返回结果:
* Boolean, 若 key 存在，返回 True，否则返回 False

--------------------------
### rename
**将 key 改名为 newkey，当 key 和 newkey 相同，或者 key 不存在时，返回一个错误**

```JavaScript
Redis.rename(Buffer key,
    Buffer newkey);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要改名的 key
* newkey: [Buffer](Buffer.md), 指定要改名的目的 key

--------------------------
### renameNX
**当且仅当 newkey 不存在时，将 key 改名为 newkey，当 key 不存在时，返回一个错误**

```JavaScript
Boolean Redis.renameNX(Buffer key,
    Buffer newkey);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要改名的 key
* newkey: [Buffer](Buffer.md), 指定要改名的目的 key

返回结果:
* Boolean, 修改成功时，返回 True，如果 newkey 已经存在，返回 False

--------------------------
### sub
**订阅给定的一个频道的信息，当消息发生时自动调用 func，func 包含两个参数，依次为 channel 和 message，同一频道同一函数只会回调一次**

```JavaScript
Redis.sub(Buffer channel,
    Function func);
```

调用参数:
* channel: [Buffer](Buffer.md), 指定订阅的频道名称
* func: Function, 指定回调函数

--------------------------
**订阅给定的一组频道的信息，当消息发生时自动调用相应的回调函数，同一频道同一函数只会回调一次**

```JavaScript
Redis.sub(Object map);
```

调用参数:
* map: Object, 指定频道映射关系，对象属性名称将作为频道名称，属性的值将作为回调函数

--------------------------
### unsub
**退订给定的频道的全部回调**

```JavaScript
Redis.unsub(Buffer channel);
```

调用参数:
* channel: [Buffer](Buffer.md), 指定退订的频道名称

--------------------------
**退订给定的频道的指定回调函数**

```JavaScript
Redis.unsub(Buffer channel,
    Function func);
```

调用参数:
* channel: [Buffer](Buffer.md), 指定退订的频道名称
* func: Function, 指定退订的回调函数

--------------------------
**退订一组给定的频道的全部回调**

```JavaScript
Redis.unsub(Array channels);
```

调用参数:
* channels: Array, 指定退订的频道数组

--------------------------
**退订给定的一组频道的指定回调函数**

```JavaScript
Redis.unsub(Object map);
```

调用参数:
* map: Object, 指定频道映射关系，对象属性名称将作为频道名称，属性的值将作为回调函数

--------------------------
### psub
**按照模板订阅一组频道的信息，当消息发生时自动调用 func，func 包含三个参数，依次为 channel，message 和 pattern，同一模板同一函数只会回调一次**

```JavaScript
Redis.psub(String pattern,
    Function func);
```

调用参数:
* pattern: String, 指定订阅的频道模板
* func: Function, 指定回调函数

--------------------------
**订阅给定的一组频道模板的信息，当消息发生时自动调用相应的 func，同一频道同一函数只会回调一次**

```JavaScript
Redis.psub(Object map);
```

调用参数:
* map: Object, 指定频道映射关系，对象属性名称将作为频道模板，属性的值将作为回调函数

--------------------------
### unpsub
**退订给定模板的频道的全部回调**

```JavaScript
Redis.unpsub(String pattern);
```

调用参数:
* pattern: String, 指定退订的频道模板

--------------------------
**退订给定模板的频道的指定回调函数**

```JavaScript
Redis.unpsub(String pattern,
    Function func);
```

调用参数:
* pattern: String, 指定退订的频道模板
* func: Function, 指定退订的回调函数

--------------------------
**退订一组给定模板的频道的全部回调**

```JavaScript
Redis.unpsub(Array patterns);
```

调用参数:
* patterns: Array, 指定发布的频道模板数组

--------------------------
**退订一组模板的频道的指定回调函数**

```JavaScript
Redis.unpsub(Object map);
```

调用参数:
* map: Object, 指定频道映射关系，对象属性名称将作为频道模板，属性的值将作为回调函数

--------------------------
### pub
**将信息 message 发送到指定的频道 channel**

```JavaScript
Integer Redis.pub(Buffer channel,
    Buffer message);
```

调用参数:
* channel: [Buffer](Buffer.md), 指定发布的频道
* message: [Buffer](Buffer.md), 指定发布的消息

返回结果:
* Integer, 接收此消息的客户端数量

--------------------------
### getHash
**获取指定 key 的 Hash 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库**

```JavaScript
RedisHash Redis.getHash(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要获取的 key

返回结果:
* [RedisHash](RedisHash.md), 返回包含指定 key 的 Hash 对象

--------------------------
### getList
**获取指定 key 的 List 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库**

```JavaScript
RedisList Redis.getList(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要获取的 key

返回结果:
* [RedisList](RedisList.md), 返回包含指定 key 的 List 对象

--------------------------
### getSet
**获取指定 key 的 Set 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库**

```JavaScript
RedisSet Redis.getSet(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要获取的 key

返回结果:
* [RedisSet](RedisSet.md), 返回包含指定 key 的 Set 对象

--------------------------
### getSortedSet
**获取指定 key 的 SortedSet 对象，此对象为包含指定 key 的客户端，只有调用其方法才会操作数据库**

```JavaScript
RedisSortedSet Redis.getSortedSet(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要获取的 key

返回结果:
* [RedisSortedSet](RedisSortedSet.md), 返回包含指定 key 的 SortedSet 对象

--------------------------
### dump
**序列化给定 key ，并返回被序列化的值，使用 restore 命令可以将这个值反序列化为 Redis 键**

```JavaScript
Buffer Redis.dump(Buffer key);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要序列化的 key

返回结果:
* [Buffer](Buffer.md), 返回序列化之后的值，如果 key 不存在，那么返回 null

--------------------------
### restore
**反序列化给定的序列化值，并将它和给定的 key 关联**

```JavaScript
Redis.restore(Buffer key,
    Buffer data,
    Long ttl = 0);
```

调用参数:
* key: [Buffer](Buffer.md), 指定要反序列化的 key
* data: [Buffer](Buffer.md), 指定要反序列化的数据
* ttl: Long, 以毫秒为单位为 key 设置生存时间；如果 ttl 为 0 ，那么不设置生存时间

--------------------------
### close
**关闭当前数据库连接或事务**

```JavaScript
Redis.close();
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Redis.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Redis.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

