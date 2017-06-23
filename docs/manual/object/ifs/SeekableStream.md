# 对象 SeekableStream
可移动当前指针的流对象接口

## 继承关系
<div class="inherits"><svg width="194pt" height="518pt" viewBox="0.00 0.00 194.00 518.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 514)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-514 190,-514 190,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="49.5,-418 49.5,-510 106.5,-510 106.5,-418 49.5,-418"/>
<polygon fill="none" stroke="#000000" points="50,-488 50,-510 107,-510 107,-488 50,-488"/>
<text text-anchor="start" x="65.1625" y="-496" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="50,-418 50,-488 107,-488 107,-418 50,-418"/>
<text text-anchor="start" x="55" y="-474" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="55" y="-462" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="55" y="-450" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="55" y="-438" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="55" y="-426" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="transparent" points="50.5,-302 50.5,-382 105.5,-382 105.5,-302 50.5,-302"/>
<polygon fill="none" stroke="#000000" points="51,-360 51,-382 106,-382 106,-360 51,-360"/>
<text text-anchor="start" x="62.388" y="-368" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polygon fill="none" stroke="#000000" points="51,-302 51,-360 106,-360 106,-302 51,-302"/>
<text text-anchor="start" x="56" y="-346" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="56" y="-334" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="56" y="-322" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="56" y="-310" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M78,-407.8267C78,-399.1786 78,-390.4003 78,-382.193"/>
<polygon fill="#000000" stroke="#000000" points="74.5001,-407.877 78,-417.877 81.5001,-407.8771 74.5001,-407.877"/>
</g>
<!-- SeekableStream -->
<g id="node3" class="node">
<title>SeekableStream</title>
<g id="a_node3"><a xlink:title="SeekableStream">
<polygon fill="#d3d3d3" stroke="transparent" points="36.5,-126 36.5,-266 119.5,-266 119.5,-126 36.5,-126"/>
<polygon fill="none" stroke="#000000" points="37,-244 37,-266 120,-266 120,-244 37,-244"/>
<text text-anchor="start" x="41.5465" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SeekableStream</text>
<polygon fill="none" stroke="#000000" points="37,-126 37,-244 120,-244 120,-126 37,-126"/>
<text text-anchor="start" x="42" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> seek()</text>
<text text-anchor="start" x="42" y="-218" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> tell()</text>
<text text-anchor="start" x="42" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> rewind()</text>
<text text-anchor="start" x="42" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size()</text>
<text text-anchor="start" x="42" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="42" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> truncate()</text>
<text text-anchor="start" x="42" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> eof()</text>
<text text-anchor="start" x="42" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> flush()</text>
<text text-anchor="start" x="42" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stat()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SeekableStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;SeekableStream</title>
<path fill="none" stroke="#000000" d="M78,-291.5727C78,-283.356 78,-274.7162 78,-266.1293"/>
<polygon fill="#000000" stroke="#000000" points="74.5001,-291.7183 78,-301.7184 81.5001,-291.7184 74.5001,-291.7183"/>
</g>
<!-- File -->
<g id="node4" class="node">
<title>File</title>
<g id="a_node4"><a xlink:href="File.md" xlink:title="File">
<polygon fill="#ffffff" stroke="transparent" points="1,-6 1,-84 53,-84 53,-6 1,-6"/>
<polygon fill="none" stroke="#000000" points="1,-62 1,-84 53,-84 53,-62 1,-62"/>
<text text-anchor="start" x="18.947" y="-70" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">File</text>
<polygon fill="none" stroke="#000000" points="1,-28 1,-62 53,-62 53,-28 1,-28"/>
<text text-anchor="start" x="6" y="-48" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="6" y="-36" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> fd</text>
<polygon fill="none" stroke="#000000" points="1,-6 1,-28 53,-28 53,-6 1,-6"/>
<text text-anchor="start" x="6" y="-14" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> chmod()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;File -->
<g id="edge3" class="edge">
<title>SeekableStream-&gt;File</title>
<path fill="none" stroke="#000000" d="M50.998,-116.0528C47.2534,-104.9659 43.5522,-94.0074 40.2188,-84.1379"/>
<polygon fill="#000000" stroke="#000000" points="47.7757,-117.4505 54.2917,-125.8047 54.4077,-115.2105 47.7757,-117.4505"/>
</g>
<!-- MemoryStream -->
<g id="node5" class="node">
<title>MemoryStream</title>
<g id="a_node5"><a xlink:href="MemoryStream.md" xlink:title="MemoryStream">
<polygon fill="#ffffff" stroke="transparent" points="72,0 72,-90 186,-90 186,0 72,0"/>
<polygon fill="none" stroke="#000000" points="72,-68 72,-90 186,-90 186,-68 72,-68"/>
<text text-anchor="start" x="94.8355" y="-76" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MemoryStream</text>
<polygon fill="none" stroke="#000000" points="72,-46 72,-68 186,-68 186,-46 72,-46"/>
<text text-anchor="start" x="77" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new MemoryStream()</text>
<polygon fill="none" stroke="#000000" points="72,0 72,-46 186,-46 186,0 72,0"/>
<text text-anchor="start" x="77" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> setTime()</text>
<text text-anchor="start" x="77" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clone()</text>
<text text-anchor="start" x="77" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;MemoryStream -->
<g id="edge4" class="edge">
<title>SeekableStream-&gt;MemoryStream</title>
<path fill="none" stroke="#000000" d="M104.9886,-116.0925C108.0089,-107.1501 111.0013,-98.2903 113.7954,-90.0174"/>
<polygon fill="#000000" stroke="#000000" points="101.5923,-115.2105 101.7083,-125.8047 108.2243,-117.4505 101.5923,-115.2105"/>
</g>
</g>
</svg></div>

## 成员函数
        
### seek
** 移动文件当前操作位置 **

```JavaScript
SeekableStream.seek(Long offset,
    Integer whence);
```

调用参数:
* offset: Long, 指定新的位置
* whence: Integer, 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
** 查询流当前位置 **

```JavaScript
Long SeekableStream.tell();
```

返回结果:
* Long, 返回流当前位置

--------------------------
### rewind
** 移动当前位置到流开头 **

```JavaScript
SeekableStream.rewind();
```

--------------------------
### size
** 查询流尺寸 **

```JavaScript
Long SeekableStream.size();
```

返回结果:
* Long, 返回流尺寸

--------------------------
### readAll
** 从流内读取剩余的全部数据 **

```JavaScript
Buffer SeekableStream.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
** 修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断 **

```JavaScript
SeekableStream.truncate(Long bytes) async;
```

调用参数:
* bytes: Long, 新的文件尺寸

--------------------------
### eof
** 查询文件是否到结尾 **

```JavaScript
Boolean SeekableStream.eof();
```

返回结果:
* Boolean, 返回 True 表示结尾

--------------------------
### flush
** 将文件缓冲区内容写入物理设备 **

```JavaScript
SeekableStream.flush() async;
```

--------------------------
### stat
** 查询当前文件的基础信息 **

```JavaScript
Stat SeekableStream.stat() async;
```

返回结果:
* [Stat](Stat.md), 返回 [Stat](Stat.md) 对象描述文件信息

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer SeekableStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
SeekableStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
SeekableStream.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long SeekableStream.copyTo(Stream stm,
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
SeekableStream.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean SeekableStream.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String SeekableStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value SeekableStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value SeekableStream.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

