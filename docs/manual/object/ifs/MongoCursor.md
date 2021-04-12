# 对象 MongoCursor
mongodb 数据库数据游标对象

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>MongoCursor|skip();limit();sort();hasNext();next();count();size();forEach();map();toArray();hint()]

[object] <:- [MongoCursor]
```

## 成员函数
        
### skip
**指定返回结果时跳过的记录数**

```JavaScript
MongoCursor MongoCursor.skip(Integer num) async;
```

调用参数:
* num: Integer, 记录数

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### limit
**指定返回结果的最大记录数**

```JavaScript
MongoCursor MongoCursor.limit(Integer size) async;
```

调用参数:
* size: Integer, 记录数

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### sort
**设定返回结果的排序**

```JavaScript
MongoCursor MongoCursor.sort(Object opts);
```

调用参数:
* opts: Object, 指定排序条件

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### hasNext
**查询当前游标是否有下一条记录**

```JavaScript
Boolean MongoCursor.hasNext();
```

返回结果:
* Boolean, 有记录则返回 true

--------------------------
### next
**返回当前游标的下一条记录**

```JavaScript
Object MongoCursor.next();
```

返回结果:
* Object, 记录对象，无记录则返回 null

--------------------------
### count
**查询游标的记录总数**

```JavaScript
Integer MongoCursor.count(Boolean applySkipLimit = false);
```

调用参数:
* applySkipLimit: Boolean, 指定是否查询 skip 和 limit 后的记录数，缺省为 false，查询全部记录数

返回结果:
* Integer, 返回记录总数

--------------------------
### size
**查询游标的记录总数，相当于 count(true)**

```JavaScript
Integer MongoCursor.size();
```

返回结果:
* Integer, 返回记录总数

--------------------------
### forEach
**遍历全部记录并回调处理函数**

```JavaScript
MongoCursor.forEach(Function func);
```

调用参数:
* func: Function, 指定处理函数

--------------------------
### map
**遍历处理全部记录，并返回处理结果**

```JavaScript
Array MongoCursor.map(Function func);
```

调用参数:
* func: Function, 指定处理函数

返回结果:
* Array, 返回处理结果数组

--------------------------
### toArray
**返回当前游标全部记录的数组**

```JavaScript
Array MongoCursor.toArray();
```

返回结果:
* Array, 返回包含全部数据的 Javascript 数组

--------------------------
### hint
**修改 mongodb 服务器缺省索引策略，使用指定的索引进行查询**

```JavaScript
MongoCursor MongoCursor.hint(Object opts);
```

调用参数:
* opts: Object, 指定强制使用的索引

返回结果:
* MongoCursor, 返回游标对象本身便于链式调用

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String MongoCursor.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value MongoCursor.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

