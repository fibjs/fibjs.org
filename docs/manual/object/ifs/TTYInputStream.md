# 对象 TTYInputStream
[tty](../../module/ifs/tty.md) 读流对象, 用于对 [tty](../../module/ifs/tty.md) 进行读取, 写入

没有途径可以单独创建该类, 全局只有 `process.stdin` 实例

```JavaScript
process.stdin.read(1)
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
[<this>TTYInputStream|isTTY;isRaw|setRawMode()]

[object] <:- [Stream]
[Stream] <:- [TTYInputStream]
```

## 成员属性
        
### isTTY
**Boolean, 恒为 true**

```JavaScript
readonly Boolean TTYInputStream.isTTY;
```

--------------------------
### isRaw
**Boolean, 查询是否是处于 raw mode, 为 true 时, 表示 [tty](../../module/ifs/tty.md) 被配置为以 raw device 操作时**

```JavaScript
readonly Boolean TTYInputStream.isRaw;
```

--------------------------
### fd
**Integer, 查询 [Stream](Stream.md) 对应的文件描述符值, 由子类实现**

```JavaScript
readonly Integer TTYInputStream.fd;
```

## 成员函数
        
### setRawMode
**设置 [tty](../../module/ifs/tty.md) 是否以 raw mode 工作**

```JavaScript
TTYInputStream TTYInputStream.setRawMode(Boolean isRawMode);
```

调用参数:
* isRawMode: Boolean, 为 true, 表示以 raw mode 工作; 否则以默认模式工作. `readStream.isRaw` 会受该方法设置

返回结果:
* TTYInputStream, 返回自身

--------------------------
### read
**从流内读取指定大小的数据**

```JavaScript
Buffer TTYInputStream.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**将给定的数据写入流**

```JavaScript
TTYInputStream.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### flush
**将文件缓冲区内容写入物理设备**

```JavaScript
TTYInputStream.flush() async;
```

--------------------------
### close
**关闭当前流对象**

```JavaScript
TTYInputStream.close() async;
```

--------------------------
### copyTo
**复制流数据到目标流中**

```JavaScript
Long TTYInputStream.copyTo(Stream stm,
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
String TTYInputStream.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value TTYInputStream.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

