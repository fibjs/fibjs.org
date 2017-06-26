# 对象 SeekableStream
可移动当前指针的流对象接口

## 继承关系
<div class="inherits"><svg width="192pt" height="504pt" viewBox="0.00 0.00 192.05 504.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 500)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-500 188.0515,-500 188.0515,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="48.1685,-407.5 48.1685,-495.5 105.8315,-495.5 105.8315,-407.5 48.1685,-407.5"/>
<text text-anchor="middle" x="77" y="-482.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="48.1685,-475.5 105.8315,-475.5 "/>
<text text-anchor="start" x="56.1685" y="-462.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="56.1685" y="-450.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="56.1685" y="-438.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="56.1685" y="-426.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="56.1685" y="-414.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="#000000" points="49.278,-294.5 49.278,-370.5 104.722,-370.5 104.722,-294.5 49.278,-294.5"/>
<text text-anchor="middle" x="77" y="-357.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polyline fill="none" stroke="#000000" points="49.278,-350.5 104.722,-350.5 "/>
<text text-anchor="start" x="57.278" y="-337.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="57.278" y="-325.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="57.278" y="-313.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="57.278" y="-301.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M77,-397.1681C77,-388.1942 77,-379.0623 77,-370.5973"/>
<polygon fill="#000000" stroke="#000000" points="73.5001,-397.1888 77,-407.1888 80.5001,-397.1888 73.5001,-397.1888"/>
</g>
<!-- SeekableStream -->
<g id="node3" class="node">
<title>SeekableStream</title>
<g id="a_node3"><a xlink:title="SeekableStream">
<polygon fill="#d3d3d3" stroke="#000000" points="32.0465,-121.5 32.0465,-257.5 121.9535,-257.5 121.9535,-121.5 32.0465,-121.5"/>
<text text-anchor="middle" x="77" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SeekableStream</text>
<polyline fill="none" stroke="#000000" points="32.0465,-237.5 121.9535,-237.5 "/>
<text text-anchor="start" x="40.0465" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">seek()</text>
<text text-anchor="start" x="40.0465" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">tell()</text>
<text text-anchor="start" x="40.0465" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rewind()</text>
<text text-anchor="start" x="40.0465" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size()</text>
<text text-anchor="start" x="40.0465" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readAll()</text>
<text text-anchor="start" x="40.0465" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">truncate()</text>
<text text-anchor="start" x="40.0465" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">eof()</text>
<text text-anchor="start" x="40.0465" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">flush()</text>
<text text-anchor="start" x="40.0465" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stat()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SeekableStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;SeekableStream</title>
<path fill="none" stroke="#000000" d="M77,-284.1057C77,-275.6194 77,-266.6465 77,-257.7411"/>
<polygon fill="#000000" stroke="#000000" points="73.5001,-284.1786 77,-294.1786 80.5001,-284.1787 73.5001,-284.1786"/>
</g>
<!-- File -->
<g id="node4" class="node">
<title>File</title>
<g id="a_node4"><a xlink:href="File.md" xlink:title="File">
<polygon fill="#ffffff" stroke="#000000" points="0,-6.5 0,-78.5 54,-78.5 54,-6.5 0,-6.5"/>
<text text-anchor="middle" x="26.832" y="-65.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">File</text>
<polyline fill="none" stroke="#000000" points="0,-58.5 53.664,-58.5 "/>
<text text-anchor="start" x="8" y="-45.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-33.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">fd</text>
<polyline fill="none" stroke="#000000" points="0,-26.5 53.664,-26.5 "/>
<text text-anchor="start" x="8" y="-13.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">chmod()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;File -->
<g id="edge3" class="edge">
<title>SeekableStream-&gt;File</title>
<path fill="none" stroke="#000000" d="M50.4712,-111.5053C46.5641,-100.0184 42.7069,-88.6784 39.2834,-78.6132"/>
<polygon fill="#000000" stroke="#000000" points="47.2227,-112.8239 53.7565,-121.1642 53.8498,-110.5698 47.2227,-112.8239"/>
</g>
<!-- MemoryStream -->
<g id="node5" class="node">
<title>MemoryStream</title>
<g id="a_node5"><a xlink:href="MemoryStream.md" xlink:title="MemoryStream">
<polygon fill="#ffffff" stroke="#000000" points="71.9485,-.5 71.9485,-84.5 184.0515,-84.5 184.0515,-.5 71.9485,-.5"/>
<text text-anchor="middle" x="128" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MemoryStream</text>
<polyline fill="none" stroke="#000000" points="71.9485,-64.5 184.0515,-64.5 "/>
<text text-anchor="start" x="79.9485" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new MemoryStream()</text>
<polyline fill="none" stroke="#000000" points="71.9485,-44.5 184.0515,-44.5 "/>
<text text-anchor="start" x="79.9485" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setTime()</text>
<text text-anchor="start" x="79.9485" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clone()</text>
<text text-anchor="start" x="79.9485" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;MemoryStream -->
<g id="edge4" class="edge">
<title>SeekableStream-&gt;MemoryStream</title>
<path fill="none" stroke="#000000" d="M104.0533,-111.5229C107.2598,-102.2805 110.4335,-93.1328 113.3705,-84.6674"/>
<polygon fill="#000000" stroke="#000000" points="100.6795,-110.5694 100.7083,-121.1642 107.2928,-112.8638 100.6795,-110.5694"/>
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

