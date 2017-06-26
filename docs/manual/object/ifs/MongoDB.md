# 对象 MongoDB
mongodb 数据库连接对象

使用 [db](../../module/ifs/db.md).open 或 [db](../../module/ifs/db.md).openMongoDB 创建，创建方式：

```JavaScript
var mdb = db.openMongoDB("mongodb://host/db");
```

## 继承关系
<div class="inherits"><svg width="93pt" height="250pt" viewBox="0.00 0.00 92.90 250.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 246)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-246 88.904,-246 88.904,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.6205,-153.5 13.6205,-241.5 71.2835,-241.5 71.2835,-153.5 13.6205,-153.5"/>
<text text-anchor="middle" x="42.452" y="-228.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.6205,-221.5 71.2835,-221.5 "/>
<text text-anchor="start" x="21.6205" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.6205" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.6205" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.6205" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.6205" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- MongoDB -->
<g id="node2" class="node">
<title>MongoDB</title>
<g id="a_node2"><a xlink:title="MongoDB">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-116.5 84.904,-116.5 84.904,-.5 0,-.5"/>
<text text-anchor="middle" x="42.452" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MongoDB</text>
<polyline fill="none" stroke="#000000" points="0,-96.5 84.904,-96.5 "/>
<text text-anchor="start" x="8" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">operator[String]</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 84.904,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">fs</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 84.904,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">getCollection()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">runCommand()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">oid()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;MongoDB -->
<g id="edge1" class="edge">
<title>object-&gt;MongoDB</title>
<path fill="none" stroke="#000000" d="M42.452,-143.1283C42.452,-134.443 42.452,-125.4263 42.452,-116.6573"/>
<polygon fill="#000000" stroke="#000000" points="38.9521,-143.1373 42.452,-153.1374 45.9521,-143.1374 38.9521,-143.1373"/>
</g>
</g>
</svg></div>

## 下标操作
        
** 快速获取指定集合访问对象 **

```JavaScript
readonly MongoCollection MongoDB[String];
```

用于使用属性快速获取集合对象，例如：

```JavaScript
var test = mdb.test;
```

## 成员属性
        
### fs
** [GridFS](GridFS.md), 获取 [GridFS](GridFS.md) 访问对象 **

```JavaScript
readonly GridFS MongoDB.fs;
```

## 成员函数
        
### getCollection
** 获取指定集合访问对象 **

```JavaScript
MongoCollection MongoDB.getCollection(String name);
```

调用参数:
* name: String, 指定集合的名称

返回结果:
* [MongoCollection](MongoCollection.md), 返回指定的集合对象

--------------------------
### runCommand
** 指定一个 MongoDB 数据库命令 **

```JavaScript
Object MongoDB.runCommand(Object cmd);
```

调用参数:
* cmd: Object, 指定命令和参数的字典对象

返回结果:
* Object, 返回命令执行结果

--------------------------
** 指定一个简单的 MongoDB 数据库命令 **

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
** 生成一个 mongodb _objectid 对象 **

```JavaScript
MongoID MongoDB.oid(String hexStr = "");
```

调用参数:
* hexStr: String, 初始化 16 进制字符串，缺省生成新的 id

返回结果:
* [MongoID](MongoID.md), 新 _objectid 对象

--------------------------
### close
** 关闭当前数据库连接 **

```JavaScript
MongoDB.close() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
MongoDB.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MongoDB.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MongoDB.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MongoDB.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MongoDB.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

