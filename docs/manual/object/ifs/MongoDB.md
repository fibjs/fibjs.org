# 对象 MongoDB
mongodb 数据库连接对象

使用 [db.open](../../module/ifs/db.md#open) 或 [db.openMongoDB](../../module/ifs/db.md#openMongoDB) 创建，创建方式：

```JavaScript
var mdb = db.openMongoDB("mongodb://host/db");
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
[<this>MongoDB|operator\[String\]|getCollection();runCommand();oid();close()]

[object] <:- [MongoDB]
```

## 操作符
        
### operator[String]
**快速获取指定集合访问对象**

```JavaScript
readonly MongoCollection MongoDB[String];
```

用于使用属性快速获取集合对象，例如：

```JavaScript
var test = mdb.test;
```

## 成员函数
        
### getCollection
**获取指定集合访问对象**

```JavaScript
MongoCollection MongoDB.getCollection(String name);
```

调用参数:
* name: String, 指定集合的名称

返回结果:
* [MongoCollection](MongoCollection.md), 返回指定的集合对象

--------------------------
### runCommand
**指定一个 MongoDB 数据库命令**

```JavaScript
Object MongoDB.runCommand(Object cmd);
```

调用参数:
* cmd: Object, 指定命令和参数的字典对象

返回结果:
* Object, 返回命令执行结果

--------------------------
**指定一个简单的 MongoDB 数据库命令**

```JavaScript
Object MongoDB.runCommand(String cmd,
    Value arg);
```

调用参数:
* cmd: String, 指定命令名
* arg: Value, 指定命令参数

返回结果:
* Object, 返回命令执行结果

--------------------------
### oid
**生成一个 mongodb _objectid 对象**

```JavaScript
MongoID MongoDB.oid(String hexStr = "");
```

调用参数:
* hexStr: String, 初始化 16 进制字符串，缺省生成新的 id

返回结果:
* [MongoID](MongoID.md), 新 _objectid 对象

--------------------------
### close
**关闭当前数据库连接**

```JavaScript
MongoDB.close() async;
```

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String MongoDB.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value MongoDB.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

