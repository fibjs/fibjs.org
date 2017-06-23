# 对象 GridFS
[MongoDB](MongoDB.md) GridFS 分布式文件系统访问对象

使用 [MongoDB](MongoDB.md).[fs](../../module/ifs/fs.md) 获取，创建方式：

```JavaScript
var gfs = mdb.fs;
```

## 继承关系
<div class="inherits"><svg width="65pt" height="250pt" viewBox="0.00 0.00 65.00 250.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 246)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-246 61,-246 61,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="0,-150 0,-242 57,-242 57,-150 0,-150"/>
<polygon fill="none" stroke="#000000" points=".5,-220 .5,-242 57.5,-242 57.5,-220 .5,-220"/>
<text text-anchor="start" x="15.6625" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points=".5,-150 .5,-220 57.5,-220 57.5,-150 .5,-150"/>
<text text-anchor="start" x="5.5" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="5.5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="5.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="5.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="5.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- GridFS -->
<g id="node2" class="node">
<title>GridFS</title>
<g id="a_node2"><a xlink:title="GridFS">
<polygon fill="#d3d3d3" stroke="transparent" points=".5,0 .5,-114 56.5,-114 56.5,0 .5,0"/>
<polygon fill="none" stroke="#000000" points=".5,-92 .5,-114 56.5,-114 56.5,-92 .5,-92"/>
<text text-anchor="start" x="12.668" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">GridFS</text>
<polygon fill="none" stroke="#000000" points=".5,-58 .5,-92 56.5,-92 56.5,-58 .5,-58"/>
<text text-anchor="start" x="5.5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> files</text>
<text text-anchor="start" x="5.5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> chunks</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-58 56.5,-58 56.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> retrieve()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> store()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exists()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remove()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;GridFS -->
<g id="edge1" class="edge">
<title>object-&gt;GridFS</title>
<path fill="none" stroke="#000000" d="M28.5,-139.6526C28.5,-131.2672 28.5,-122.6167 28.5,-114.2136"/>
<polygon fill="#000000" stroke="#000000" points="25.0001,-139.715 28.5,-149.715 32.0001,-139.715 25.0001,-139.715"/>
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

