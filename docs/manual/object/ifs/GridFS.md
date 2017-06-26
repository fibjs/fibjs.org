# 对象 GridFS
[MongoDB](MongoDB.md) GridFS 分布式文件系统访问对象

使用 [MongoDB](MongoDB.md).[fs](../../module/ifs/fs.md) 获取，创建方式：

```JavaScript
var gfs = mdb.fs;
```

## 继承关系
<div class="inherits"><svg width="66pt" height="242pt" viewBox="0.00 0.00 65.66 242.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 238)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-238 61.663,-238 61.663,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="0,-145.5 0,-233.5 57.663,-233.5 57.663,-145.5 0,-145.5"/>
<text text-anchor="middle" x="28.8315" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="0,-213.5 57.663,-213.5 "/>
<text text-anchor="start" x="8" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="8" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="8" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="8" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="8" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- GridFS -->
<g id="node2" class="node">
<title>GridFS</title>
<g id="a_node2"><a xlink:title="GridFS">
<polygon fill="#d3d3d3" stroke="#000000" points=".835,-.5 .835,-108.5 56.828,-108.5 56.828,-.5 .835,-.5"/>
<text text-anchor="middle" x="28.8315" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">GridFS</text>
<polyline fill="none" stroke="#000000" points=".835,-88.5 56.828,-88.5 "/>
<text text-anchor="start" x="8.835" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">files</text>
<text text-anchor="start" x="8.835" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">chunks</text>
<polyline fill="none" stroke="#000000" points=".835,-56.5 56.828,-56.5 "/>
<text text-anchor="start" x="8.835" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">retrieve()</text>
<text text-anchor="start" x="8.835" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">store()</text>
<text text-anchor="start" x="8.835" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">exists()</text>
<text text-anchor="start" x="8.835" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remove()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;GridFS -->
<g id="edge1" class="edge">
<title>object-&gt;GridFS</title>
<path fill="none" stroke="#000000" d="M28.8315,-135.2187C28.8315,-126.4825 28.8315,-117.439 28.8315,-108.7047"/>
<polygon fill="#000000" stroke="#000000" points="25.3316,-135.2959 28.8315,-145.296 32.3316,-135.296 25.3316,-135.2959"/>
</g>
</g>
</svg></div>

## 成员属性
        
### files
** [MongoCollection](MongoCollection.md), 查询 GridFS 的元数据表 **

```JavaScript
readonly MongoCollection GridFS.files;
```

--------------------------
### chunks
** [MongoCollection](MongoCollection.md), 查询 GridFS 的分块数据表 **

```JavaScript
readonly MongoCollection GridFS.chunks;
```

## 成员函数
        
### retrieve
** 获取一个文件 **

```JavaScript
MemoryStream GridFS.retrieve(String name);
```

调用参数:
* name: String, 指定获取的文件名

返回结果:
* [MemoryStream](MemoryStream.md), 返回获取的文件

--------------------------
### store
** 保存一个流到文件系统 **

```JavaScript
GridFS.store(String name,
    Stream src);
```

调用参数:
* name: String, 指定保存的文件名
* src: [Stream](Stream.md), 存放源数据的流对象

--------------------------
** 保存一个二进制数据块到文件系统 **

```JavaScript
GridFS.store(String name,
    Buffer data);
```

调用参数:
* name: String, 指定保存的文件名
* data: [Buffer](Buffer.md), 指定要保存的数据块

--------------------------
### exists
** 检测指定的文件是否存在 **

```JavaScript
Boolean GridFS.exists(String name);
```

调用参数:
* name: String, 指定要检测的文件名

返回结果:
* Boolean, 存在则返回 true

--------------------------
### remove
** 删除指定的文件 **

```JavaScript
GridFS.remove(String name);
```

调用参数:
* name: String, 指定要删除的文件名

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
GridFS.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean GridFS.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String GridFS.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value GridFS.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value GridFS.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

