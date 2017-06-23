# 对象 File
文件操作对象，用于二进制文件读写

文件操作对象用于对二进制文件进行操作，可使用 [fs](../../module/ifs/fs.md) 模块打开和创建文件：

```JavaScript
var f = fs.openFile('test.txt');
```

## 继承关系
<div class="inherits"><svg width="91pt" height="506pt" viewBox="0.00 0.00 91.00 506.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 502)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-502 87,-502 87,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="13,-406 13,-498 70,-498 70,-406 13,-406"/>
<polygon fill="none" stroke="#000000" points="13.5,-476 13.5,-498 70.5,-498 70.5,-476 13.5,-476"/>
<text text-anchor="start" x="28.6625" y="-484" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="13.5,-406 13.5,-476 70.5,-476 70.5,-406 13.5,-406"/>
<text text-anchor="start" x="18.5" y="-462" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="18.5" y="-450" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="18.5" y="-438" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="18.5" y="-426" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="18.5" y="-414" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="transparent" points="14,-290 14,-370 69,-370 69,-290 14,-290"/>
<polygon fill="none" stroke="#000000" points="14.5,-348 14.5,-370 69.5,-370 69.5,-348 14.5,-348"/>
<text text-anchor="start" x="25.888" y="-356" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polygon fill="none" stroke="#000000" points="14.5,-290 14.5,-348 69.5,-348 69.5,-290 14.5,-290"/>
<text text-anchor="start" x="19.5" y="-334" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="19.5" y="-322" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="19.5" y="-310" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="19.5" y="-298" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M41.5,-395.8267C41.5,-387.1786 41.5,-378.4003 41.5,-370.193"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-395.877 41.5,-405.877 45.0001,-395.8771 38.0001,-395.877"/>
</g>
<!-- SeekableStream -->
<g id="node3" class="node">
<title>SeekableStream</title>
<g id="a_node3"><a xlink:href="SeekableStream.md" xlink:title="SeekableStream">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-254 83,-254 83,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points=".5,-232 .5,-254 83.5,-254 83.5,-232 .5,-232"/>
<text text-anchor="start" x="5.0465" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SeekableStream</text>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-232 83.5,-232 83.5,-114 .5,-114"/>
<text text-anchor="start" x="5.5" y="-218" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> seek()</text>
<text text-anchor="start" x="5.5" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> tell()</text>
<text text-anchor="start" x="5.5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rewind()</text>
<text text-anchor="start" x="5.5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size()</text>
<text text-anchor="start" x="5.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="5.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> truncate()</text>
<text text-anchor="start" x="5.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> eof()</text>
<text text-anchor="start" x="5.5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> flush()</text>
<text text-anchor="start" x="5.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stat()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SeekableStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;SeekableStream</title>
<path fill="none" stroke="#000000" d="M41.5,-279.5727C41.5,-271.356 41.5,-262.7162 41.5,-254.1293"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-279.7183 41.5,-289.7184 45.0001,-279.7184 38.0001,-279.7183"/>
</g>
<!-- File -->
<g id="node4" class="node">
<title>File</title>
<g id="a_node4"><a xlink:title="File">
<polygon fill="#d3d3d3" stroke="transparent" points="15.5,0 15.5,-78 67.5,-78 67.5,0 15.5,0"/>
<polygon fill="none" stroke="#000000" points="15.5,-56 15.5,-78 67.5,-78 67.5,-56 15.5,-56"/>
<text text-anchor="start" x="33.447" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">File</text>
<polygon fill="none" stroke="#000000" points="15.5,-22 15.5,-56 67.5,-56 67.5,-22 15.5,-22"/>
<text text-anchor="start" x="20.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="20.5" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> fd</text>
<polygon fill="none" stroke="#000000" points="15.5,0 15.5,-22 67.5,-22 67.5,0 15.5,0"/>
<text text-anchor="start" x="20.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> chmod()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;File -->
<g id="edge3" class="edge">
<title>SeekableStream-&gt;File</title>
<path fill="none" stroke="#000000" d="M41.5,-103.407C41.5,-94.7393 41.5,-86.2278 41.5,-78.3765"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-103.6237 41.5,-113.6238 45.0001,-103.6238 38.0001,-103.6237"/>
</g>
</g>
</svg></div>

## 成员属性
        
### name
** String, 查询当前文件名 **

```JavaScript
readonly String File.name;
```

--------------------------
### fd
** Integer, 查询当前文件描述符 **

```JavaScript
readonly Integer File.fd;
```

## 成员函数
        
### chmod
** 查询当前文件的访问权限，Windows 不支持此方法 **

```JavaScript
File.chmod(Integer mode) async;
```

调用参数:
* mode: Integer, 指定设定的访问权限

--------------------------
### seek
** 移动文件当前操作位置 **

```JavaScript
File.seek(Long offset,
    Integer whence);
```

调用参数:
* offset: Long, 指定新的位置
* whence: Integer, 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
** 查询流当前位置 **

```JavaScript
Long File.tell();
```

返回结果:
* Long, 返回流当前位置

--------------------------
### rewind
** 移动当前位置到流开头 **

```JavaScript
File.rewind();
```

--------------------------
### size
** 查询流尺寸 **

```JavaScript
Long File.size();
```

返回结果:
* Long, 返回流尺寸

--------------------------
### readAll
** 从流内读取剩余的全部数据 **

```JavaScript
Buffer File.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
** 修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断 **

```JavaScript
File.truncate(Long bytes) async;
```

调用参数:
* bytes: Long, 新的文件尺寸

--------------------------
### eof
** 查询文件是否到结尾 **

```JavaScript
Boolean File.eof();
```

返回结果:
* Boolean, 返回 True 表示结尾

--------------------------
### flush
** 将文件缓冲区内容写入物理设备 **

```JavaScript
File.flush() async;
```

--------------------------
### stat
** 查询当前文件的基础信息 **

```JavaScript
Stat File.stat() async;
```

返回结果:
* [Stat](Stat.md), 返回 [Stat](Stat.md) 对象描述文件信息

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer File.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
File.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
File.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long File.copyTo(Stream stm,
    Long bytes = -1) async;
```

调用参数:
* stm: Stream, 目标流对象
* bytes: Long, 复制的字节数

返回结果:
* Long, 返回复制的字节数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
File.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean File.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String File.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value File.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value File.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

