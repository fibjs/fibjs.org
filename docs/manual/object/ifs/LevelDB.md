# 对象 LevelDB
LevelDB 数据库对象

用以创建和管理字典对象，创建方法：

```JavaScript
var db = require("db");
var test = new db.openLevelDB("test.db");
```

## 继承关系
<div class="inherits"><svg width="72pt" height="312pt" viewBox="0.00 0.00 72.00 312.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 308)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-308 68,-308 68,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="3.5,-212 3.5,-304 60.5,-304 60.5,-212 3.5,-212"/>
<polygon fill="none" stroke="#000000" points="4,-282 4,-304 61,-304 61,-282 4,-282"/>
<text text-anchor="start" x="19.1625" y="-290" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="4,-212 4,-282 61,-282 61,-212 4,-212"/>
<text text-anchor="start" x="9" y="-268" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="9" y="-256" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="9" y="-244" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="9" y="-232" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="9" y="-220" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- LevelDB -->
<g id="node2" class="node">
<title>LevelDB</title>
<g id="a_node2"><a xlink:title="LevelDB">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-176 64,-176 64,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-154 0,-176 64,-176 64,-154 0,-154"/>
<text text-anchor="start" x="13.108" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">LevelDB</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-154 64,-154 64,0 0,0"/>
<text text-anchor="start" x="5" y="-140" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> has()</text>
<text text-anchor="start" x="5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> get()</text>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> mget()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> set()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> mset()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> mremove()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> forEach()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> between()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> begin()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> commit()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;LevelDB -->
<g id="edge1" class="edge">
<title>object-&gt;LevelDB</title>
<path fill="none" stroke="#000000" d="M32,-201.8265C32,-193.6043 32,-184.974 32,-176.2979"/>
<polygon fill="#000000" stroke="#000000" points="28.5001,-201.9955 32,-211.9956 35.5001,-201.9956 28.5001,-201.9955"/>
</g>
</g>
</svg></div>

## 成员函数
        
### has
** 检查数据库内是否存在指定键值的数据 **

```JavaScript
Boolean LevelDB.has(Buffer key) async;
```

调用参数:
* key: [Buffer](Buffer.md), 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### get
** 查询指定键值的值 **

```JavaScript
Buffer LevelDB.get(Buffer key) async;
```

调用参数:
* key: [Buffer](Buffer.md), 指定要查询的键值

返回结果:
* [Buffer](Buffer.md), 返回键值所对应的值，若不存在，则返回 null

--------------------------
### mget
** 查询一组指定键值的值 **

```JavaScript
List LevelDB.mget(Array keys);
```

调用参数:
* keys: Array, 指定要查询的键值数组

返回结果:
* [List](List.md), 返回包含键值得数组

--------------------------
### set
** 设定一个键值数据，键值不存在则插入新数据 **

```JavaScript
LevelDB.set(Buffer key,
    Buffer value) async;
```

调用参数:
* key: [Buffer](Buffer.md), 指定要设定的键值
* value: [Buffer](Buffer.md), 指定要设定的数据

--------------------------
### mset
** 设定一组键值数据，键值不存在则插入新数据 **

```JavaScript
LevelDB.mset(Object map);
```

调用参数:
* map: Object, 指定要设定的键值数据字典

--------------------------
### mremove
** 删除一组指定键值的值 **

```JavaScript
LevelDB.mremove(Array keys);
```

调用参数:
* keys: Array, 指定要删除的键值数组

--------------------------
### remove
** 删除指定键值的全部值 **

```JavaScript
LevelDB.remove(Buffer key) async;
```

调用参数:
* key: [Buffer](Buffer.md), 指定要删除的键值

--------------------------
### forEach
** 枚举数据库中所有的键值对 **

```JavaScript
LevelDB.forEach(Function func);
```

调用参数:
* func: Function, 枚举回调函数

回调函数有两个参数，(value, key)

```JavaScript
var db = require("db");
var test = new db.openLevelDB("test.db");

test.forEach(function(value, key) {
    ...
});
```

--------------------------
### between
** 枚举数据库中键值在 from 和 to 之间的键值对 **

```JavaScript
LevelDB.between(Buffer from,
    Buffer to,
    Function func);
```

调用参数:
* from: [Buffer](Buffer.md), 枚举的最小键值，枚举时包含此键值
* to: [Buffer](Buffer.md), 枚举的最大键值，枚举时不包含此键值
* func: Function, 枚举回调函数

回调函数有两个参数，(value, key)

```JavaScript
var db = require("db");
var test = new db.openLevelDB("test.db");

test.between("aaa", "bbb", function(value, key) {
    ...
});
```

--------------------------
### begin
** 在当前数据库上开启一个事务 **

```JavaScript
LevelDB LevelDB.begin();
```

返回结果:
* LevelDB, 返回一个开启的事务对象

--------------------------
### commit
** 提交当前事务 **

```JavaScript
LevelDB.commit();
```

--------------------------
### close
** 关闭当前数据库连接或事务 **

```JavaScript
LevelDB.close() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
LevelDB.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean LevelDB.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String LevelDB.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value LevelDB.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value LevelDB.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

