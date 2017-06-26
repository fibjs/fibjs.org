# 对象 SubProcess
子进程对象

```JavaScript
var process = require("process");
var sub = process.open("ls");
```

## 继承关系
<div class="inherits"><svg width="122pt" height="556pt" viewBox="0.00 0.00 121.79 556.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 552)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-552 117.79,-552 117.79,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="28.0635,-459.5 28.0635,-547.5 85.7265,-547.5 85.7265,-459.5 28.0635,-459.5"/>
<text text-anchor="middle" x="56.895" y="-534.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="28.0635,-527.5 85.7265,-527.5 "/>
<text text-anchor="start" x="36.0635" y="-514.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="36.0635" y="-502.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="36.0635" y="-490.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="36.0635" y="-478.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="36.0635" y="-466.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="#000000" points="29.173,-346.5 29.173,-422.5 84.617,-422.5 84.617,-346.5 29.173,-346.5"/>
<text text-anchor="middle" x="56.895" y="-409.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polyline fill="none" stroke="#000000" points="29.173,-402.5 84.617,-402.5 "/>
<text text-anchor="start" x="37.173" y="-389.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="37.173" y="-377.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="37.173" y="-365.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="37.173" y="-353.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M56.895,-449.1681C56.895,-440.1942 56.895,-431.0623 56.895,-422.5973"/>
<polygon fill="#000000" stroke="#000000" points="53.3951,-449.1888 56.895,-459.1888 60.3951,-449.1888 53.3951,-449.1888"/>
</g>
<!-- BufferedStream -->
<g id="node3" class="node">
<title>BufferedStream</title>
<g id="a_node3"><a xlink:href="BufferedStream.md" xlink:title="BufferedStream">
<polygon fill="#ffffff" stroke="#000000" points="0,-145.5 0,-309.5 113.79,-309.5 113.79,-145.5 0,-145.5"/>
<text text-anchor="middle" x="56.895" y="-296.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BufferedStream</text>
<polyline fill="none" stroke="#000000" points="0,-289.5 113.79,-289.5 "/>
<text text-anchor="start" x="8" y="-276.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new BufferedStream()</text>
<polyline fill="none" stroke="#000000" points="0,-269.5 113.79,-269.5 "/>
<text text-anchor="start" x="8" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stream</text>
<text text-anchor="start" x="8" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">charset</text>
<text text-anchor="start" x="8" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">EOL</text>
<polyline fill="none" stroke="#000000" points="0,-225.5 113.79,-225.5 "/>
<text text-anchor="start" x="8" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readText()</text>
<text text-anchor="start" x="8" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readLine()</text>
<text text-anchor="start" x="8" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readLines()</text>
<text text-anchor="start" x="8" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readUntil()</text>
<text text-anchor="start" x="8" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">writeText()</text>
<text text-anchor="start" x="8" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">writeLine()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;BufferedStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;BufferedStream</title>
<path fill="none" stroke="#000000" d="M56.895,-336.3867C56.895,-327.8412 56.895,-318.7276 56.895,-309.5492"/>
<polygon fill="#000000" stroke="#000000" points="53.3951,-336.4946 56.895,-346.4947 60.3951,-336.4947 53.3951,-336.4946"/>
</g>
<!-- SubProcess -->
<g id="node4" class="node">
<title>SubProcess</title>
<g id="a_node4"><a xlink:title="SubProcess">
<polygon fill="#d3d3d3" stroke="#000000" points="19.731,-.5 19.731,-108.5 94.059,-108.5 94.059,-.5 19.731,-.5"/>
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
<path fill="none" stroke="#000000" d="M56.895,-135.1456C56.895,-126.1594 56.895,-117.2578 56.895,-108.8312"/>
<polygon fill="#000000" stroke="#000000" points="53.3951,-135.3065 56.895,-145.3065 60.3951,-135.3066 53.3951,-135.3065"/>
</g>
</g>
</svg></div>

## 成员属性
        
### pid
** Integer, 读取当前对象指向的进程的 id **

```JavaScript
readonly Integer SubProcess.pid;
```

--------------------------
### stdin
** [BufferedStream](BufferedStream.md), 读取当前对象指向的进程的标准输入对象 **

```JavaScript
readonly BufferedStream SubProcess.stdin;
```

--------------------------
### stdout
** [BufferedStream](BufferedStream.md), 读取当前对象指向的进程的标准输出对象 **

```JavaScript
readonly BufferedStream SubProcess.stdout;
```

--------------------------
### stream
** [Stream](Stream.md), 查询创建缓存对象时的流对象 **

```JavaScript
readonly Stream SubProcess.stream;
```

--------------------------
### charset
** String, 查询和设置当前对象处理文本时的字符集，缺省为 utf-8 **

```JavaScript
String SubProcess.charset;
```

--------------------------
### EOL
** String, 查询和设置行结尾标识，缺省时，posix:\"\\n\"；windows:\"\\r\\n\" **

```JavaScript
String SubProcess.EOL;
```

## 成员函数
        
### kill
** 杀掉当前对象指向的进程，并传递信号 **

```JavaScript
SubProcess.kill(Integer signal);
```

调用参数:
* signal: Integer, 传递的信号

--------------------------
### wait
** 等待当前对象指向的进程结束，并返回进程结束代码 **

```JavaScript
Integer SubProcess.wait() async;
```

返回结果:
* Integer, 进程的结束代码

--------------------------
### findWindow
** 查询当前对象所指向的进程是否存在指定名称的窗口，仅限 windows **

```JavaScript
Value SubProcess.findWindow(String name);
```

调用参数:
* name: String, 窗口名称

返回结果:
* Value, 窗口存在则返回窗口的 rect，否则返回 undefined

--------------------------
### readText
** 读取指定字符的文本 **

```JavaScript
String SubProcess.readText(Integer size) async;
```

调用参数:
* size: Integer, 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### readLine
** 读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\" **

```JavaScript
String SubProcess.readLine(Integer maxlen = -1) async;
```

调用参数:
* maxlen: Integer, 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### readLines
** 以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\" **

```JavaScript
Array SubProcess.readLines(Integer maxlines = -1);
```

调用参数:
* maxlines: Integer, 指定此次读取的最大行数，缺省读取全部文本行

返回结果:
* Array, 返回读取的文本行数组，若无数据可读，或者连接中断，空数组

--------------------------
### readUntil
** 读取一个文本字符串，以指定的字节为结尾 **

```JavaScript
String SubProcess.readUntil(String mk,
    Integer maxlen = -1) async;
```

调用参数:
* mk: String, 指定结尾的字符串
* maxlen: Integer, 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### writeText
** 写入一个字符串 **

```JavaScript
SubProcess.writeText(String txt) async;
```

调用参数:
* txt: String, 指定写入的字符串

--------------------------
### writeLine
** 写入一个字符串，并写入换行符 **

```JavaScript
SubProcess.writeLine(String txt) async;
```

调用参数:
* txt: String, 指定写入的字符串

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer SubProcess.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
SubProcess.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
SubProcess.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long SubProcess.copyTo(Stream stm,
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
SubProcess.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean SubProcess.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String SubProcess.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value SubProcess.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value SubProcess.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

