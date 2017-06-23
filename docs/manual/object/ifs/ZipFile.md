# 对象 ZipFile
[zip](../../module/ifs/zip.md) 文件访问对象

## 继承关系
<div class="inherits"><svg width="71pt" height="276pt" viewBox="0.00 0.00 71.00 276.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 272)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-272 67,-272 67,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="3,-176 3,-268 60,-268 60,-176 3,-176"/>
<polygon fill="none" stroke="#000000" points="3.5,-246 3.5,-268 60.5,-268 60.5,-246 3.5,-246"/>
<text text-anchor="start" x="18.6625" y="-254" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="3.5,-176 3.5,-246 60.5,-246 60.5,-176 3.5,-176"/>
<text text-anchor="start" x="8.5" y="-232" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="8.5" y="-220" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="8.5" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="8.5" y="-196" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="8.5" y="-184" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- ZipFile -->
<g id="node2" class="node">
<title>ZipFile</title>
<g id="a_node2"><a xlink:title="ZipFile">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-140 63,-140 63,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-118 .5,-140 63.5,-140 63.5,-118 .5,-118"/>
<text text-anchor="start" x="17.0035" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ZipFile</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-118 63.5,-118 63.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> namelist()</text>
<text text-anchor="start" x="5.5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> infolist()</text>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> getinfo()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> extract()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> extractAll()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;ZipFile -->
<g id="edge1" class="edge">
<title>object-&gt;ZipFile</title>
<path fill="none" stroke="#000000" d="M31.5,-165.9751C31.5,-157.6048 31.5,-148.8865 31.5,-140.2671"/>
<polygon fill="#000000" stroke="#000000" points="28.0001,-165.9825 31.5,-175.9825 35.0001,-165.9825 28.0001,-165.9825"/>
</g>
</g>
</svg></div>

## 成员函数
        
### namelist
** 获取文件名列表 **

```JavaScript
List ZipFile.namelist() async;
```

返回结果:
* [List](List.md), 返回包含文件名的列表对象

--------------------------
### infolist
** 获取文件信息列表 **

```JavaScript
List ZipFile.infolist() async;
```

返回结果:
* [List](List.md), 返回包含文件信息的列表对象

--------------------------
### getinfo
** 获取文件信息 **

```JavaScript
ZipInfo ZipFile.getinfo(String member) async;
```

调用参数:
* member: String, 指定要获取信息的文件名

返回结果:
* [ZipInfo](ZipInfo.md), 返回文件信息对象

--------------------------
### read
** 返回从压缩文件读取的数据 **

```JavaScript
Buffer ZipFile.read(String member,
    String password = "") async;
```

调用参数:
* member: String, 指定要读取的文件名
* password: String, 解压密码, 默认没有密码

返回结果:
* [Buffer](Buffer.md), 返回文件的所有数据

--------------------------
### readAll
** 解压所有文件 **

```JavaScript
List ZipFile.readAll(String password = "") async;
```

调用参数:
* password: String, 解压密码, 默认没有密码

返回结果:
* [List](List.md), 包含所有文件数据及信息的列表

--------------------------
### extract
** 解压指定文件 **

```JavaScript
ZipFile.extract(String member,
    String path,
    String password = "") async;
```

调用参数:
* member: String, 指定要解压的文件名
* path: String, 指定要解压到的路径
* password: String, 解压密码, 默认没有密码

--------------------------
** 解压指定文件到流 **

```JavaScript
ZipFile.extract(String member,
    SeekableStream strm,
    String password = "") async;
```

调用参数:
* member: String, 指定要解压的文件名
* strm: [SeekableStream](SeekableStream.md), 指定要解压到的流
* password: String, 解压密码, 默认没有密码

--------------------------
### extractAll
** 解压所有文件到指定路径 **

```JavaScript
ZipFile.extractAll(String path,
    String password = "") async;
```

调用参数:
* path: String, 指定要解压到的路径
* password: String, 解压密码, 默认没有密码

--------------------------
### write
** 写入指定文件到压缩文件 **

```JavaScript
ZipFile.write(String filename,
    String inZipName,
    String password = "") async;
```

调用参数:
* filename: String, 指定要写入的文件
* inZipName: String, 压缩在[zip](../../module/ifs/zip.md)文件内的文件名
* password: String, 解压密码, 默认没有密码

--------------------------
** 写入指定文件到压缩文件 **

```JavaScript
ZipFile.write(Buffer data,
    String inZipName,
    String password = "") async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要写入的文件数据
* inZipName: String, 压缩在[zip](../../module/ifs/zip.md)文件内的文件名
* password: String, 解压密码, 默认没有密码

--------------------------
** 写入指定文件到压缩文件 **

```JavaScript
ZipFile.write(SeekableStream strm,
    String inZipName,
    String password = "") async;
```

调用参数:
* strm: [SeekableStream](SeekableStream.md), 指定要写入文件数据流
* inZipName: String, 压缩在[zip](../../module/ifs/zip.md)文件内的文件名
* password: String, 解压密码, 默认没有密码

--------------------------
### close
** 关闭打开的[zip](../../module/ifs/zip.md)文件 **

```JavaScript
ZipFile.close() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
ZipFile.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean ZipFile.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String ZipFile.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value ZipFile.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value ZipFile.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

