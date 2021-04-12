# 对象 BufferedStream
缓存读取对象

BufferedReader 对象用于对二进制流对象数据进行缓存，并提供文本读取能力，仅支持 utf-8 格式转换。创建方法：

```JavaScript
var reader = new io.BufferedStream(stream);
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>Stream|fd|read();write();flush();close();copyTo()]
[<this>BufferedStream|new BufferedStream()|stream;charset;EOL|readText();readLine();readLines();readUntil();writeText();writeLine()]

[object] <:- [Stream]
[Stream] <:- [BufferedStream]
```

## 构造函数
        
### BufferedStream
**BufferedStream 构造函数**

```JavaScript
new BufferedStream(Stream stm);
```

调用参数:
* stm: [Stream](Stream.md), BufferedStream 的二进制基础流对象

## 成员属性
        
### stream
**[Stream](Stream.md), 查询创建缓存对象时的流对象**

```JavaScript
readonly Stream BufferedStream.stream;
```

--------------------------
### charset
**String, 查询和设置当前对象处理文本时的字符集，缺省为 utf-8**

```JavaScript
String BufferedStream.charset;
```

--------------------------
### EOL
**String, 查询和设置行结尾标识，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"**

```JavaScript
String BufferedStream.EOL;
```

--------------------------
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer BufferedStream.fd;
```

## 成员函数
        
### readText
**读取指定字符的文本**

```JavaScript
String BufferedStream.readText(Integer size) async;
```

调用参数:
* size: Integer, 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### readLine
**读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"**

```JavaScript
String BufferedStream.readLine(Integer maxlen = -1) async;
```

调用参数:
* maxlen: Integer, 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### readLines
**以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"**

```JavaScript
Array BufferedStream.readLines(Integer maxlines = -1);
```

调用参数:
* maxlines: Integer, 指定此次读取的最大行数，缺省读取全部文本行

返回结果:
* Array, 返回读取的文本行数组，若无数据可读，或者连接中断，空数组

--------------------------
### readUntil
**读取一个文本字符串，以指定的字节为结尾**

```JavaScript
String BufferedStream.readUntil(String mk,
    Integer maxlen = -1) async;
```

调用参数:
* mk: String, 指定结尾的字符串
* maxlen: Integer, 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数

返回结果:
* String, 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null

--------------------------
### writeText
**写入一个字符串**

```JavaScript
BufferedStream.writeText(String txt) async;
```

调用参数:
* txt: String, 指定写入的字符串

--------------------------
### writeLine
**写入一个字符串，并写入换行符**

```JavaScript
BufferedStream.writeLine(String txt) async;
```

调用参数:
* txt: String, 指定写入的字符串

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Buffer BufferedStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**将给定的数据写入流**

```JavaScript
BufferedStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
BufferedStream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
BufferedStream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long BufferedStream.copyTo(Stream stm,
    Long bytes = -1) async;
```

调用参数:
* stm: [Stream](Stream.md), 目标流对象
* bytes: Long, 复制的字节数

返回结果:
* Long, 返回复制的字节数

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String BufferedStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value BufferedStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

