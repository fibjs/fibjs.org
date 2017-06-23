# 对象 MongoCollection
mongodb 数据库数据集对象

使用 [MongoDB](MongoDB.md).getCollection 创建：

```JavaScript
var col1 = mdb.getCollection('test');
var col = mdb.test;
```

## 继承关系
<div class="inherits"><svg width="94pt" height="370pt" viewBox="0.00 0.00 94.00 370.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 366)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-366 90,-366 90,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="14.5,-270 14.5,-362 71.5,-362 71.5,-270 14.5,-270"/>
<polygon fill="none" stroke="#000000" points="15,-340 15,-362 72,-362 72,-340 15,-340"/>
<text text-anchor="start" x="30.1625" y="-348" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="15,-270 15,-340 72,-340 72,-270 15,-270"/>
<text text-anchor="start" x="20" y="-326" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="20" y="-314" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="20" y="-302" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="20" y="-290" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="20" y="-278" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- MongoCollection -->
<g id="node2" class="node">
<title>MongoCollection</title>
<g id="a_node2"><a xlink:title="MongoCollection">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-234 86,-234 86,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-212 0,-234 86,-234 86,-212 0,-212"/>
<text text-anchor="start" x="5.772" y="-220" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MongoCollection</text>
<polygon fill="none" stroke="#000000" points="0,-190 0,-212 86,-212 86,-190 0,-190"/>
<text text-anchor="start" x="5" y="-198" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> operator[String]</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-190 86,-190 86,0 0,0"/>
<text text-anchor="start" x="5" y="-176" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> find()</text>
<text text-anchor="start" x="5" y="-164" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> findOne()</text>
<text text-anchor="start" x="5" y="-152" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> findAndModify()</text>
<text text-anchor="start" x="5" y="-140" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> insert()</text>
<text text-anchor="start" x="5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> save()</text>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> update()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> runCommand()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> drop()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ensureIndex()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> reIndex()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dropIndex()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dropIndexes()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getIndexes()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getCollection()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;MongoCollection -->
<g id="edge1" class="edge">
<title>object-&gt;MongoCollection</title>
<path fill="none" stroke="#000000" d="M43,-259.8311C43,-251.7059 43,-243.1016 43,-234.3054"/>
<polygon fill="#000000" stroke="#000000" points="39.5001,-259.8452 43,-269.8452 46.5001,-259.8452 39.5001,-259.8452"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 以属性方式快速获取当前集合子命名空间的集合对象 **

```JavaScript
readonly MongoCollection MongoCollection[String];
```

返回结果:
* 返回新集合对象

## 成员函数
        
### find
** 根据给定的查询条件和返回字段设定，建立游标对象 **

```JavaScript
MongoCursor MongoCollection.find(Object query = {},
    Object projection = {});
```

调用参数:
* query: Object, 指定查询条件的对象
* projection: Object, 指定返回字段的对象

返回结果:
* [MongoCursor](MongoCursor.md), 返回游标对象

--------------------------
### findOne
** 根据给定的查询条件和返回字段设定，查询一条结果 **

```JavaScript
Object MongoCollection.findOne(Object query = {},
    Object projection = {});
```

调用参数:
* query: Object, 指定查询条件的对象
* projection: Object, 指定返回字段的对象

返回结果:
* Object, 返回第一条结果

--------------------------
### findAndModify
** 查询并修改 **

```JavaScript
Object MongoCollection.findAndModify(Object query);
```

调用参数:
* query: Object, 指定查询条件，修改数据

返回结果:
* Object, 返回修改前的结果及其他信息

--------------------------
### insert
** 插入一组数据 **

```JavaScript
MongoCollection.insert(Array documents);
```

调用参数:
* documents: Array, 指定要插入的数据数组

--------------------------
** 插入一条数据 **

```JavaScript
MongoCollection.insert(Object document);
```

调用参数:
* document: Object, 指定要插入的数据

--------------------------
### save
** 保存一条数据，若数据包含 _id 字段，则为更新，否则为插入 **

```JavaScript
MongoCollection.save(Object document);
```

调用参数:
* document: Object, 指定要保存的数据

--------------------------
### update
** 根据给定的查询条件更新数据 **

```JavaScript
MongoCollection.update(Object query,
    Object document,
    Boolean upsert = false,
    Boolean multi = false);
```

调用参数:
* query: Object, 指定查询条件的对象
* document: Object, 指定要更新的数据
* upsert: Boolean, 数据不存在时，插入一条新数据，缺省为 false，不插入
* multi: Boolean, 当符合条件的数据多于一条时，更新所有数据，缺省为 false，只更新第一条

--------------------------
** 根据给定的查询条件更新数据 **

```JavaScript
MongoCollection.update(Object query,
    Object document,
    Object options);
```

调用参数:
* query: Object, 指定查询条件的对象
* document: Object, 指定要更新的数据
* options: Object, 以对象字段传递的 upsert 和 multi 选项

--------------------------
### remove
** 根据给定的查询条件删除数据 **

```JavaScript
MongoCollection.remove(Object query);
```

调用参数:
* query: Object, 指定查询条件的对象

--------------------------
### runCommand
** 执行数据库命令 **

```JavaScript
Object MongoCollection.runCommand(Object cmd);
```

调用参数:
* cmd: Object, 给定命令对象

返回结果:
* Object, 返回命令返回结果

--------------------------
** 执行数据库命令 **

```JavaScript
Object MongoCollection.runCommand(String cmd,
    Object arg = {});
```

调用参数:
* cmd: String, 给定命令名称
* arg: Object, 给定命令参数选项

返回结果:
* Object, 返回命令返回结果

--------------------------
### drop
** 删除当前集合 **

```JavaScript
MongoCollection.drop();
```

--------------------------
### ensureIndex
** 在当前集合上创建索引 **

```JavaScript
MongoCollection.ensureIndex(Object keys,
    Object options = {});
```

调用参数:
* keys: Object, 给定索引字段、顺序和方向
* options: Object, 给定索引的选项，唯一索引等

--------------------------
### reIndex
** 重建当前集合的索引 **

```JavaScript
Object MongoCollection.reIndex();
```

返回结果:
* Object, 返回命令执行结果

--------------------------
### dropIndex
** 删除当前集合指定名称的索引 **

```JavaScript
Object MongoCollection.dropIndex(String name);
```

调用参数:
* name: String, 给定要删除的索引名称

返回结果:
* Object, 返回命令执行结果

--------------------------
### dropIndexes
** 删除当前集合全部索引 **

```JavaScript
Object MongoCollection.dropIndexes();
```

返回结果:
* Object, 返回命令执行结果

--------------------------
### getIndexes
** 查询当前集合全部索引 **

```JavaScript
MongoCursor MongoCollection.getIndexes();
```

返回结果:
* [MongoCursor](MongoCursor.md), 返回包含索引的结果集

--------------------------
### getCollection
** 获取当前集合子命名空间的集合对象 **

```JavaScript
MongoCollection MongoCollection.getCollection(String name);
```

调用参数:
* name: String, 子命名空间名称

返回结果:
* MongoCollection, 返回新集合对象

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
MongoCollection.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MongoCollection.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MongoCollection.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MongoCollection.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MongoCollection.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

