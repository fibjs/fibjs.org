# 对象 TTYOutputStream
[tty](../../module/ifs/tty.md) 写流对象, 用于处理 [tty](../../module/ifs/tty.md) 输出

没有途径可以单独创建该类, 全局只有 `process.stdout` 实例

```JavaScript
// 清除屏幕上光标以右的内容
process.stdout.clearLine(1)
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
[<this>TTYOutputStream|isTTY;columns;rows|clearLine();clearScreenDown();getWindowSize()]

[object] <:- [Stream]
[Stream] <:- [TTYOutputStream]
```

## 成员属性
        
### isTTY
**Boolean, 恒为 true**

```JavaScript
readonly Boolean TTYOutputStream.isTTY;
```

--------------------------
### columns
**Integer, 返回此 TTYOutputStream 对应的终端的列数**

```JavaScript
readonly Integer TTYOutputStream.columns;
```

--------------------------
### rows
**Integer, 返回此 TTYOutputStream 对应的终端的行数**

```JavaScript
readonly Integer TTYOutputStream.rows;
```

--------------------------
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer TTYOutputStream.fd;
```

## 成员函数
        
### clearLine
**根据 dir 指示的方向 clear line**

```JavaScript
TTYOutputStream.clearLine(Integer dir = 0);
```

调用参数:
* dir: Integer, 清理方向

dir 的方向:
- -1: 从光标起往行起始清理
- 0: 清理整行
- 1: 从光标起往行结尾清理

--------------------------
### clearScreenDown
**清除从光标处起到屏幕结尾的字符**

```JavaScript
TTYOutputStream.clearScreenDown();
```

--------------------------
### getWindowSize
**返回此 TTYOutputStream 对应的终端的尺寸**

```JavaScript
NArray TTYOutputStream.getWindowSize();
```

返回结果:
* NArray, 返回数组 [numColumns, numRows]，其中 numColumns 和 numRows 表示相应终端中的列数和行数

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Buffer TTYOutputStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**将给定的数据写入流**

```JavaScript
TTYOutputStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
TTYOutputStream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
TTYOutputStream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long TTYOutputStream.copyTo(Stream stm,
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
String TTYOutputStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value TTYOutputStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

