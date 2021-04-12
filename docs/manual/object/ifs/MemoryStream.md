# 对象 MemoryStream
内存流对象

MemoryStream 对象创建一个基于内存的流对象，创建方法：

```JavaScript
var ms = new io.MemoryStream();
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
[<this>MemoryStream|new MemoryStream()|setTime();clone();clear()]

[object] <:- [Stream]
[Stream] <:- [SeekableStream]
[SeekableStream] <:- [MemoryStream]
```

## 构造函数
        
### MemoryStream
**MemoryStream 构造函数**

```JavaScript
new MemoryStream();
```

## 成员属性
        
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer MemoryStream.fd;
```

## 成员函数
        
### setTime
**强制设定内存流对象的最后更新时间**

```JavaScript
MemoryStream.setTime(Date d);
```

调用参数:
* d: Date, 指定要设定的时间

--------------------------
### clone
**创建当前内存流的一个只读副本**

```JavaScript
MemoryStream MemoryStream.clone();
```

返回结果:
* MemoryStream, 返回只读的内存流对象

--------------------------
### clear
**清空内存文件数据，复位指针**

```JavaScript
MemoryStream.clear();
```

--------------------------
### seek
**移动文件当前操作位置**

```JavaScript
MemoryStream.seek(Long offset,
    Integer whence = fs.SEEK_SET);
```

调用参数:
* offset: Long, 指定新的位置
* whence: Integer, 指定位置基准，允许的值为：SEEK_SET, SEEK_CUR, SEEK_END

--------------------------
### tell
**查询流当前位置**

```JavaScript
Long MemoryStream.tell();
```

返回结果:
* Long, 返回流当前位置

--------------------------
### rewind
**移动当前位置到流开头**

```JavaScript
MemoryStream.rewind();
```

--------------------------
### size
**查询流尺寸**

```JavaScript
Long MemoryStream.size();
```

返回结果:
* Long, 返回流尺寸

--------------------------
### readAll
**从流内读取剩余的全部数据**

```JavaScript
Buffer MemoryStream.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### truncate
**修改文件尺寸，如果新尺寸小于原尺寸，则文件被截断**

```JavaScript
MemoryStream.truncate(Long bytes) async;
```

调用参数:
* bytes: Long, 新的文件尺寸

--------------------------
### eof
**查询文件是否到结尾**

```JavaScript
Boolean MemoryStream.eof();
```

返回结果:
* Boolean, 返回 True 表示结尾

--------------------------
### stat
**查询当前文件的基础信息**

```JavaScript
Stat MemoryStream.stat() async;
```

返回结果:
* [Stat](Stat.md), 返回 [Stat](Stat.md) 对象描述文件信息

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Buffer MemoryStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**将给定的数据写入流**

```JavaScript
MemoryStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
MemoryStream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
MemoryStream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long MemoryStream.copyTo(Stream stm,
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
String MemoryStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value MemoryStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

