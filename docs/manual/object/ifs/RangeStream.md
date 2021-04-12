# 对象 RangeStream
Range 查询流读取对象

RangeStream 对象用于对 [SeekableStream](SeekableStream.md) 对象数据进行截取。创建方法：

```JavaScript
var stm = new io.RangeStream(stream, '0-10');
stm.end // 11

var stm = new io.RangeStream(stream, 0, 10);
stm.end // 10
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
[<class>SeekableStream|seek();tell();rewind();size();readAll();truncate();eof();stat()]
[<this>RangeStream|new RangeStream()|begin;end]

[object] <:- [Stream]
[Stream] <:- [SeekableStream]
[SeekableStream] <:- [RangeStream]
```

## 构造函数
        
### RangeStream
**RangeStream 构造函数**

```JavaScript
new RangeStream(SeekableStream stm,
    String range);
```

调用参数:
* stm: [SeekableStream](SeekableStream.md), RangeStream 的二进制基础流对象, 必须是 [SeekableStream](SeekableStream.md)
* range: String, 描述 range 的字符串, 格式为 'begin-[end]', '[begin]-end'

--------------------------
**RangeStream 构造函数**

```JavaScript
new RangeStream(SeekableStream stm,
    Long begin,
    Long end);
```

调用参数:
* stm: [SeekableStream](SeekableStream.md), RangeStream 的二进制基础流对象, 必须是 [SeekableStream](SeekableStream.md)
* begin: Long, 从 stm 读取内容的起始位置
* end: Long, 从 stm 读取内容的结束位置

## 成员属性
        
### begin
**Long, 查询 range 开始值**

```JavaScript
readonly Long RangeStream.begin;
```

--------------------------
### end
**Long, 查询 range 结束值**

```JavaScript
readonly Long RangeStream.end;
```

--------------------------
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer RangeStream.fd;
```

## 成员函数
        
### seek
**移动文件当前操作位置**

```JavaScript
RangeStream.seek(Long offset,
    Integer whence = fs.SEEK_SET);
```

调用参数:
* offset: Long, 指定新的位置
* whence: Integer, 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
**查询流当前位置**

```JavaScript
Long RangeStream.tell();
```

返回结果:
* Long, 返回流当前位置

--------------------------
### rewind
**移动当前位置到流开头**

```JavaScript
RangeStream.rewind();
```

--------------------------
### size
**查询流尺寸**

```JavaScript
Long RangeStream.size();
```

返回结果:
* Long, 返回流尺寸

--------------------------
### readAll
**从流内读取剩余的全部数据**

```JavaScript
Buffer RangeStream.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
**修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断**

```JavaScript
RangeStream.truncate(Long bytes) async;
```

调用参数:
* bytes: Long, 新的文件尺寸

--------------------------
### eof
**查询文件是否到结尾**

```JavaScript
Boolean RangeStream.eof();
```

返回结果:
* Boolean, 返回 True 表示结尾

--------------------------
### stat
**查询当前文件的基础信息**

```JavaScript
Stat RangeStream.stat() async;
```

返回结果:
* [Stat](Stat.md), 返回 [Stat](Stat.md) 对象描述文件信息

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Buffer RangeStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**将给定的数据写入流**

```JavaScript
RangeStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
RangeStream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
RangeStream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long RangeStream.copyTo(Stream stm,
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
String RangeStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value RangeStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

