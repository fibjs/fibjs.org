# 对象 MemoryStream
内存流对象

MemoryStream 对象创建一个基于内存的流对象，创建方法：

```JavaScript
var ms = new io.MemoryStream();
```

## 继承关系
<div class="inherits"><svg width="120pt" height="504pt" viewBox="0.00 0.00 120.10 504.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 500)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-500 116.103,-500 116.103,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="27.22,-407.5 27.22,-495.5 84.883,-495.5 84.883,-407.5 27.22,-407.5"/>
<text text-anchor="middle" x="56.0515" y="-482.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="27.22,-475.5 84.883,-475.5 "/>
<text text-anchor="start" x="35.22" y="-462.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="35.22" y="-450.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="35.22" y="-438.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="35.22" y="-426.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="35.22" y="-414.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="#000000" points="28.3295,-294.5 28.3295,-370.5 83.7735,-370.5 83.7735,-294.5 28.3295,-294.5"/>
<text text-anchor="middle" x="56.0515" y="-357.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polyline fill="none" stroke="#000000" points="28.3295,-350.5 83.7735,-350.5 "/>
<text text-anchor="start" x="36.3295" y="-337.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="36.3295" y="-325.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="36.3295" y="-313.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="36.3295" y="-301.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M56.0515,-397.1681C56.0515,-388.1942 56.0515,-379.0623 56.0515,-370.5973"/>
<polygon fill="#000000" stroke="#000000" points="52.5516,-397.1888 56.0515,-407.1888 59.5516,-397.1888 52.5516,-397.1888"/>
</g>
<!-- SeekableStream -->
<g id="node3" class="node">
<title>SeekableStream</title>
<g id="a_node3"><a xlink:href="SeekableStream.md" xlink:title="SeekableStream">
<polygon fill="#ffffff" stroke="#000000" points="11.098,-121.5 11.098,-257.5 101.005,-257.5 101.005,-121.5 11.098,-121.5"/>
<text text-anchor="middle" x="56.0515" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SeekableStream</text>
<polyline fill="none" stroke="#000000" points="11.098,-237.5 101.005,-237.5 "/>
<text text-anchor="start" x="19.098" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">seek()</text>
<text text-anchor="start" x="19.098" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">tell()</text>
<text text-anchor="start" x="19.098" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rewind()</text>
<text text-anchor="start" x="19.098" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size()</text>
<text text-anchor="start" x="19.098" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readAll()</text>
<text text-anchor="start" x="19.098" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">truncate()</text>
<text text-anchor="start" x="19.098" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">eof()</text>
<text text-anchor="start" x="19.098" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">flush()</text>
<text text-anchor="start" x="19.098" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stat()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SeekableStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;SeekableStream</title>
<path fill="none" stroke="#000000" d="M56.0515,-284.1057C56.0515,-275.6194 56.0515,-266.6465 56.0515,-257.7411"/>
<polygon fill="#000000" stroke="#000000" points="52.5516,-284.1786 56.0515,-294.1786 59.5516,-284.1787 52.5516,-284.1786"/>
</g>
<!-- MemoryStream -->
<g id="node4" class="node">
<title>MemoryStream</title>
<g id="a_node4"><a xlink:title="MemoryStream">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-84.5 112.103,-84.5 112.103,-.5 0,-.5"/>
<text text-anchor="middle" x="56.0515" y="-71.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MemoryStream</text>
<polyline fill="none" stroke="#000000" points="0,-64.5 112.103,-64.5 "/>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new MemoryStream()</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 112.103,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setTime()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clone()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;MemoryStream -->
<g id="edge3" class="edge">
<title>SeekableStream-&gt;MemoryStream</title>
<path fill="none" stroke="#000000" d="M56.0515,-110.9393C56.0515,-101.8956 56.0515,-92.9546 56.0515,-84.6674"/>
<polygon fill="#000000" stroke="#000000" points="52.5516,-111.1641 56.0515,-121.1642 59.5516,-111.1642 52.5516,-111.1641"/>
</g>
</g>
</svg></div>

## 构造函数
        
### MemoryStream
** MemoryStream 构造函数 **

```JavaScript
new MemoryStream();
```

## 成员函数
        
### setTime
** 强制设定内存流对象的最后更新时间 **

```JavaScript
MemoryStream.setTime(Date d);
```

调用参数:
* d: Date, 指定要设定的时间

--------------------------
### clone
** 创建当前内存流的一个只读副本 **

```JavaScript
MemoryStream MemoryStream.clone();
```

返回结果:
* MemoryStream, 返回只读的内存流对象

--------------------------
### clear
** 清空内存文件数据，复位指针 **

```JavaScript
MemoryStream.clear();
```

--------------------------
### seek
** 移动文件当前操作位置 **

```JavaScript
MemoryStream.seek(Long offset,
    Integer whence);
```

调用参数:
* offset: Long, 指定新的位置
* whence: Integer, 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
** 查询流当前位置 **

```JavaScript
Long MemoryStream.tell();
```

返回结果:
* Long, 返回流当前位置

--------------------------
### rewind
** 移动当前位置到流开头 **

```JavaScript
MemoryStream.rewind();
```

--------------------------
### size
** 查询流尺寸 **

```JavaScript
Long MemoryStream.size();
```

返回结果:
* Long, 返回流尺寸

--------------------------
### readAll
** 从流内读取剩余的全部数据 **

```JavaScript
Buffer MemoryStream.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
** 修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断 **

```JavaScript
MemoryStream.truncate(Long bytes) async;
```

调用参数:
* bytes: Long, 新的文件尺寸

--------------------------
### eof
** 查询文件是否到结尾 **

```JavaScript
Boolean MemoryStream.eof();
```

返回结果:
* Boolean, 返回 True 表示结尾

--------------------------
### flush
** 将文件缓冲区内容写入物理设备 **

```JavaScript
MemoryStream.flush() async;
```

--------------------------
### stat
** 查询当前文件的基础信息 **

```JavaScript
Stat MemoryStream.stat() async;
```

返回结果:
* [Stat](Stat.md), 返回 [Stat](Stat.md) 对象描述文件信息

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer MemoryStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
MemoryStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
MemoryStream.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long MemoryStream.copyTo(Stream stm,
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
MemoryStream.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MemoryStream.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MemoryStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MemoryStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MemoryStream.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

