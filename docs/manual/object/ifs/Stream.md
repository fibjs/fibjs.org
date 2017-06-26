# 对象 Stream
流操作对象，用于二进制数据流读写

Stream 为基础对象，用于为流处理定义标准借口，不能独立创建

## 继承关系
<div class="inherits"><svg width="438pt" height="628pt" viewBox="0.00 0.00 438.01 628.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 624)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-624 434.009,-624 434.009,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="200.0635,-531.5 200.0635,-619.5 257.7265,-619.5 257.7265,-531.5 200.0635,-531.5"/>
<text text-anchor="middle" x="228.895" y="-606.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="200.0635,-599.5 257.7265,-599.5 "/>
<text text-anchor="start" x="208.0635" y="-586.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="208.0635" y="-574.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="208.0635" y="-562.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="208.0635" y="-550.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="208.0635" y="-538.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:title="Stream">
<polygon fill="#d3d3d3" stroke="#000000" points="201.173,-418.5 201.173,-494.5 256.617,-494.5 256.617,-418.5 201.173,-418.5"/>
<text text-anchor="middle" x="228.895" y="-481.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polyline fill="none" stroke="#000000" points="201.173,-474.5 256.617,-474.5 "/>
<text text-anchor="start" x="209.173" y="-461.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="209.173" y="-449.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="209.173" y="-437.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="209.173" y="-425.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M228.895,-521.1681C228.895,-512.1942 228.895,-503.0623 228.895,-494.5973"/>
<polygon fill="#000000" stroke="#000000" points="225.3951,-521.1888 228.895,-531.1888 232.3951,-521.1888 225.3951,-521.1888"/>
</g>
<!-- BufferedStream -->
<g id="node3" class="node">
<title>BufferedStream</title>
<g id="a_node3"><a xlink:href="BufferedStream.md" xlink:title="BufferedStream">
<polygon fill="#ffffff" stroke="#000000" points="0,-181.5 0,-345.5 113.79,-345.5 113.79,-181.5 0,-181.5"/>
<text text-anchor="middle" x="56.895" y="-332.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BufferedStream</text>
<polyline fill="none" stroke="#000000" points="0,-325.5 113.79,-325.5 "/>
<text text-anchor="start" x="8" y="-312.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new BufferedStream()</text>
<polyline fill="none" stroke="#000000" points="0,-305.5 113.79,-305.5 "/>
<text text-anchor="start" x="8" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stream</text>
<text text-anchor="start" x="8" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">charset</text>
<text text-anchor="start" x="8" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EOL</text>
<polyline fill="none" stroke="#000000" points="0,-261.5 113.79,-261.5 "/>
<text text-anchor="start" x="8" y="-248.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readText()</text>
<text text-anchor="start" x="8" y="-236.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readLine()</text>
<text text-anchor="start" x="8" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readLines()</text>
<text text-anchor="start" x="8" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readUntil()</text>
<text text-anchor="start" x="8" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">writeText()</text>
<text text-anchor="start" x="8" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">writeLine()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;BufferedStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;BufferedStream</title>
<path fill="none" stroke="#000000" d="M192.2822,-436.4744C170.258,-423.1325 142.7406,-404.0348 122.895,-382 113.0453,-371.0638 104.0712,-358.4044 96.1321,-345.515"/>
<polygon fill="#000000" stroke="#000000" points="190.6494,-439.575 201.0383,-441.6539 194.2133,-433.5502 190.6494,-439.575"/>
</g>
<!-- SeekableStream -->
<g id="node5" class="node">
<title>SeekableStream</title>
<g id="a_node5"><a xlink:href="SeekableStream.md" xlink:title="SeekableStream">
<polygon fill="#ffffff" stroke="#000000" points="131.9415,-195.5 131.9415,-331.5 221.8485,-331.5 221.8485,-195.5 131.9415,-195.5"/>
<text text-anchor="middle" x="176.895" y="-318.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SeekableStream</text>
<polyline fill="none" stroke="#000000" points="131.9415,-311.5 221.8485,-311.5 "/>
<text text-anchor="start" x="139.9415" y="-298.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">seek()</text>
<text text-anchor="start" x="139.9415" y="-286.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">tell()</text>
<text text-anchor="start" x="139.9415" y="-274.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">rewind()</text>
<text text-anchor="start" x="139.9415" y="-262.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size()</text>
<text text-anchor="start" x="139.9415" y="-250.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readAll()</text>
<text text-anchor="start" x="139.9415" y="-238.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">truncate()</text>
<text text-anchor="start" x="139.9415" y="-226.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">eof()</text>
<text text-anchor="start" x="139.9415" y="-214.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">flush()</text>
<text text-anchor="start" x="139.9415" y="-202.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stat()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SeekableStream -->
<g id="edge4" class="edge">
<title>Stream-&gt;SeekableStream</title>
<path fill="none" stroke="#000000" d="M215.9431,-408.4283C209.6934,-385.2324 202.0859,-356.9969 195.2517,-331.6316"/>
<polygon fill="#000000" stroke="#000000" points="212.6404,-409.6243 218.6215,-418.3694 219.3994,-407.8032 212.6404,-409.6243"/>
</g>
<!-- Socket -->
<g id="node8" class="node">
<title>Socket</title>
<g id="a_node8"><a xlink:href="Socket.md" xlink:title="Socket">
<polygon fill="#ffffff" stroke="#000000" points="240.0005,-145.5 240.0005,-381.5 323.7895,-381.5 323.7895,-145.5 240.0005,-145.5"/>
<text text-anchor="middle" x="281.895" y="-368.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Socket</text>
<polyline fill="none" stroke="#000000" points="240.0005,-361.5 323.7895,-361.5 "/>
<text text-anchor="start" x="248.0005" y="-348.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Socket()</text>
<polyline fill="none" stroke="#000000" points="240.0005,-341.5 323.7895,-341.5 "/>
<text text-anchor="start" x="248.0005" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">family</text>
<text text-anchor="start" x="248.0005" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="248.0005" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remoteAddress</text>
<text text-anchor="start" x="248.0005" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remotePort</text>
<text text-anchor="start" x="248.0005" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">localAddress</text>
<text text-anchor="start" x="248.0005" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">localPort</text>
<text text-anchor="start" x="248.0005" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<polyline fill="none" stroke="#000000" points="240.0005,-249.5 323.7895,-249.5 "/>
<text text-anchor="start" x="248.0005" y="-236.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">connect()</text>
<text text-anchor="start" x="248.0005" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">bind()</text>
<text text-anchor="start" x="248.0005" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listen()</text>
<text text-anchor="start" x="248.0005" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">accept()</text>
<text text-anchor="start" x="248.0005" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">recv()</text>
<text text-anchor="start" x="248.0005" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">recvfrom()</text>
<text text-anchor="start" x="248.0005" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">send()</text>
<text text-anchor="start" x="248.0005" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sendto()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;Socket -->
<g id="edge7" class="edge">
<title>Stream-&gt;Socket</title>
<path fill="none" stroke="#000000" d="M242.0865,-408.463C244.3966,-400.0509 246.8888,-390.9753 249.4597,-381.6136"/>
<polygon fill="#000000" stroke="#000000" points="238.6392,-407.7995 239.3661,-418.3694 245.3893,-409.6532 238.6392,-407.7995"/>
</g>
<!-- SslSocket -->
<g id="node9" class="node">
<title>SslSocket</title>
<g id="a_node9"><a xlink:href="SslSocket.md" xlink:title="SslSocket">
<polygon fill="#ffffff" stroke="#000000" points="341.781,-199.5 341.781,-327.5 430.009,-327.5 430.009,-199.5 341.781,-199.5"/>
<text text-anchor="middle" x="385.895" y="-314.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslSocket</text>
<polyline fill="none" stroke="#000000" points="341.781,-307.5 430.009,-307.5 "/>
<text text-anchor="start" x="349.781" y="-294.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new SslSocket()</text>
<polyline fill="none" stroke="#000000" points="341.781,-287.5 430.009,-287.5 "/>
<text text-anchor="start" x="349.781" y="-274.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="349.781" y="-262.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
<text text-anchor="start" x="349.781" y="-250.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">peerCert</text>
<text text-anchor="start" x="349.781" y="-238.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stream</text>
<polyline fill="none" stroke="#000000" points="341.781,-231.5 430.009,-231.5 "/>
<text text-anchor="start" x="349.781" y="-218.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">connect()</text>
<text text-anchor="start" x="349.781" y="-206.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">accept()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SslSocket -->
<g id="edge8" class="edge">
<title>Stream-&gt;SslSocket</title>
<path fill="none" stroke="#000000" d="M265.4864,-436.9283C287.3459,-423.7565 314.3725,-404.678 332.895,-382 345.9395,-366.0289 356.43,-346.3362 364.5258,-327.6226"/>
<polygon fill="#000000" stroke="#000000" points="263.6389,-433.9543 256.7812,-442.0303 267.1784,-439.9935 263.6389,-433.9543"/>
</g>
<!-- SubProcess -->
<g id="node4" class="node">
<title>SubProcess</title>
<g id="a_node4"><a xlink:href="SubProcess.md" xlink:title="SubProcess">
<polygon fill="#ffffff" stroke="#000000" points="19.731,-.5 19.731,-108.5 94.059,-108.5 94.059,-.5 19.731,-.5"/>
<text text-anchor="middle" x="56.895" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SubProcess</text>
<polyline fill="none" stroke="#000000" points="19.731,-88.5 94.059,-88.5 "/>
<text text-anchor="start" x="27.731" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">pid</text>
<text text-anchor="start" x="27.731" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stdin</text>
<text text-anchor="start" x="27.731" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stdout</text>
<polyline fill="none" stroke="#000000" points="19.731,-44.5 94.059,-44.5 "/>
<text text-anchor="start" x="27.731" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">kill()</text>
<text text-anchor="start" x="27.731" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">wait()</text>
<text text-anchor="start" x="27.731" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">findWindow()</text>
</a>
</g>
</g>
<!-- BufferedStream&#45;&gt;SubProcess -->
<g id="edge3" class="edge">
<title>BufferedStream-&gt;SubProcess</title>
<path fill="none" stroke="#000000" d="M56.895,-171.3774C56.895,-149.9346 56.895,-127.7866 56.895,-108.6136"/>
<polygon fill="#000000" stroke="#000000" points="53.3951,-171.4975 56.895,-181.4975 60.3951,-171.4976 53.3951,-171.4975"/>
</g>
<!-- File -->
<g id="node6" class="node">
<title>File</title>
<g id="a_node6"><a xlink:href="File.md" xlink:title="File">
<polygon fill="#ffffff" stroke="#000000" points="130.895,-18.5 130.895,-90.5 184.895,-90.5 184.895,-18.5 130.895,-18.5"/>
<text text-anchor="middle" x="157.727" y="-77.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">File</text>
<polyline fill="none" stroke="#000000" points="130.895,-70.5 184.559,-70.5 "/>
<text text-anchor="start" x="138.895" y="-57.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="138.895" y="-45.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">fd</text>
<polyline fill="none" stroke="#000000" points="130.895,-38.5 184.559,-38.5 "/>
<text text-anchor="start" x="138.895" y="-25.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">chmod()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;File -->
<g id="edge5" class="edge">
<title>SeekableStream-&gt;File</title>
<path fill="none" stroke="#000000" d="M169.7942,-185.3907C166.8366,-152.8573 163.547,-116.6722 161.1776,-90.6083"/>
<polygon fill="#000000" stroke="#000000" points="166.3089,-185.7128 170.7,-195.3548 173.2802,-185.0789 166.3089,-185.7128"/>
</g>
<!-- MemoryStream -->
<g id="node7" class="node">
<title>MemoryStream</title>
<g id="a_node7"><a xlink:href="MemoryStream.md" xlink:title="MemoryStream">
<polygon fill="#ffffff" stroke="#000000" points="202.8435,-12.5 202.8435,-96.5 314.9465,-96.5 314.9465,-12.5 202.8435,-12.5"/>
<text text-anchor="middle" x="258.895" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MemoryStream</text>
<polyline fill="none" stroke="#000000" points="202.8435,-76.5 314.9465,-76.5 "/>
<text text-anchor="start" x="210.8435" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new MemoryStream()</text>
<polyline fill="none" stroke="#000000" points="202.8435,-56.5 314.9465,-56.5 "/>
<text text-anchor="start" x="210.8435" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setTime()</text>
<text text-anchor="start" x="210.8435" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clone()</text>
<text text-anchor="start" x="210.8435" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- SeekableStream&#45;&gt;MemoryStream -->
<g id="edge6" class="edge">
<title>SeekableStream-&gt;MemoryStream</title>
<path fill="none" stroke="#000000" d="M207.4242,-185.6878C219.2578,-155.5265 232.3387,-122.1862 242.3522,-96.6641"/>
<polygon fill="#000000" stroke="#000000" points="204.0257,-184.7673 203.6314,-195.3548 210.5421,-187.324 204.0257,-184.7673"/>
</g>
</g>
</svg></div>

## 成员函数
        
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer Stream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
Stream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
Stream.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long Stream.copyTo(Stream stm,
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
Stream.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Stream.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Stream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Stream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Stream.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

