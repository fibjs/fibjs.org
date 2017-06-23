# 对象 SubProcess
子进程对象

```JavaScript
var process = require("process");
var sub = process.open("ls");
```

## 继承关系
<div class="inherits"><svg width="124pt" height="574pt" viewBox="0.00 0.00 124.00 574.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 570)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-570 120,-570 120,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="29.5,-474 29.5,-566 86.5,-566 86.5,-474 29.5,-474"/>
<polygon fill="none" stroke="#000000" points="30,-544 30,-566 87,-566 87,-544 30,-544"/>
<text text-anchor="start" x="45.1625" y="-552" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="30,-474 30,-544 87,-544 87,-474 30,-474"/>
<text text-anchor="start" x="35" y="-530" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="35" y="-518" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="35" y="-506" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="35" y="-494" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="35" y="-482" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="transparent" points="30.5,-358 30.5,-438 85.5,-438 85.5,-358 30.5,-358"/>
<polygon fill="none" stroke="#000000" points="31,-416 31,-438 86,-438 86,-416 31,-416"/>
<text text-anchor="start" x="42.388" y="-424" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polygon fill="none" stroke="#000000" points="31,-358 31,-416 86,-416 86,-358 31,-358"/>
<text text-anchor="start" x="36" y="-402" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="36" y="-390" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="36" y="-378" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="36" y="-366" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M58,-463.8267C58,-455.1786 58,-446.4003 58,-438.193"/>
<polygon fill="#000000" stroke="#000000" points="54.5001,-463.877 58,-473.877 61.5001,-463.8771 54.5001,-463.877"/>
</g>
<!-- BufferedStream -->
<g id="node3" class="node">
<title>BufferedStream</title>
<g id="a_node3"><a xlink:href="BufferedStream.md" xlink:title="BufferedStream">
<polygon fill="#ffffff" stroke="transparent" points="0,-150 0,-322 116,-322 116,-150 0,-150"/>
<polygon fill="none" stroke="#000000" points="0,-300 0,-322 116,-322 116,-300 0,-300"/>
<text text-anchor="start" x="22.992" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BufferedStream</text>
<polygon fill="none" stroke="#000000" points="0,-278 0,-300 116,-300 116,-278 0,-278"/>
<text text-anchor="start" x="5" y="-286" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new BufferedStream()</text>
<polygon fill="none" stroke="#000000" points="0,-232 0,-278 116,-278 116,-232 0,-232"/>
<text text-anchor="start" x="5" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stream</text>
<text text-anchor="start" x="5" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> charset</text>
<text text-anchor="start" x="5" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> EOL</text>
<polygon fill="none" stroke="#000000" points="0,-150 0,-232 116,-232 116,-150 0,-150"/>
<text text-anchor="start" x="5" y="-218" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readText()</text>
<text text-anchor="start" x="5" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readLine()</text>
<text text-anchor="start" x="5" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readLines()</text>
<text text-anchor="start" x="5" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readUntil()</text>
<text text-anchor="start" x="5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeText()</text>
<text text-anchor="start" x="5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> writeLine()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;BufferedStream -->
<g id="edge2" class="edge">
<title>Stream-&gt;BufferedStream</title>
<path fill="none" stroke="#000000" d="M58,-347.8636C58,-339.6625 58,-330.9651 58,-322.186"/>
<polygon fill="#000000" stroke="#000000" points="54.5001,-347.955 58,-357.955 61.5001,-347.9551 54.5001,-347.955"/>
</g>
<!-- SubProcess -->
<g id="node4" class="node">
<title>SubProcess</title>
<g id="a_node4"><a xlink:title="SubProcess">
<polygon fill="#d3d3d3" stroke="transparent" points="21,0 21,-114 95,-114 95,0 21,0"/>
<polygon fill="none" stroke="#000000" points="21,-92 21,-114 95,-114 95,-92 21,-92"/>
<text text-anchor="start" x="31.0485" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SubProcess</text>
<polygon fill="none" stroke="#000000" points="21,-46 21,-92 95,-92 95,-46 21,-46"/>
<text text-anchor="start" x="26" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> pid</text>
<text text-anchor="start" x="26" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stdin</text>
<text text-anchor="start" x="26" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stdout</text>
<polygon fill="none" stroke="#000000" points="21,0 21,-46 95,-46 95,0 21,0"/>
<text text-anchor="start" x="26" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> kill()</text>
<text text-anchor="start" x="26" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> wait()</text>
<text text-anchor="start" x="26" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> findWindow()</text>
</a>
</g>
</g>
<!-- BufferedStream&#45;&gt;SubProcess -->
<g id="edge3" class="edge">
<title>BufferedStream-&gt;SubProcess</title>
<path fill="none" stroke="#000000" d="M58,-139.6306C58,-130.8931 58,-122.2434 58,-114.0173"/>
<polygon fill="#000000" stroke="#000000" points="54.5001,-139.9079 58,-149.908 61.5001,-139.908 54.5001,-139.9079"/>
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

