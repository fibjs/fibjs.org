# 对象 Message
基础消息对象

Message 对象兼容于 [mq](../../module/ifs/mq.md) 各个模块，可用于构建自定义消息处理系统，创建方法：

```JavaScript
var mq = require("mq");
var m = new mq.Message();
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
[<this>Message|new Message()|TEXT;BINARY|value;params;type;data;body;length;stream;lastError|read();readAll();write();json();pack();end();isEnded();clear();sendTo();readFrom()]
[<class>HttpMessage]
[<class>HttpRequest]
[<class>HttpResponse]
[<class>WebSocketMessage]

[object] <:- [Message]
[Message] <:- [HttpMessage]
[HttpMessage] <:- [HttpRequest]
[HttpMessage] <:- [HttpResponse]
[Message] <:- [WebSocketMessage]
```

## 构造函数
        
### Message
**消息对象构造函数**

```JavaScript
new Message();
```

## 常量
        
### TEXT
**指定消息类型 1，代表一个文本类型**

```JavaScript
const Message.TEXT = 1;
```

--------------------------
### BINARY
**指定消息类型 2，代表一个二进制类型**

```JavaScript
const Message.BINARY = 2;
```

## 成员属性
        
### value
**String, 消息的基本内容**

```JavaScript
String Message.value;
```

--------------------------
### params
**NArray, 消息的基本参数**

```JavaScript
readonly NArray Message.params;
```

--------------------------
### type
**Integer, 消息类型**

```JavaScript
Integer Message.type;
```

--------------------------
### data
**Value, 查询消息的数据，此属性会根据 content-type 返回不同数据，为 text 时，返回文本，为 [json](../../module/ifs/json.md) 时返回 [json](../../module/ifs/json.md)，其它时候返回二进制**

```JavaScript
readonly Value Message.data;
```

--------------------------
### body
**[SeekableStream](SeekableStream.md), 包含消息数据部分的流对象**

```JavaScript
SeekableStream Message.body;
```

--------------------------
### length
**Long, 消息数据部分的长度**

```JavaScript
readonly Long Message.length;
```

--------------------------
### stream
**[Stream](Stream.md), 查询消息 readFrom 时的流对象**

```JavaScript
readonly Stream Message.stream;
```

--------------------------
### lastError
**String, 查询和设置消息处理的最后错误**

```JavaScript
String Message.lastError;
```

## 成员函数
        
### read
**从流内读取指定大小的数据，此方法为 body 相应方法的别名**

```JavaScript
Buffer Message.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
**从流内读取剩余的全部数据，此方法为 body 相应方法的别名**

```JavaScript
Buffer Message.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**写入给定的数据，此方法为 body 相应方法的别名**

```JavaScript
Message.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### json
**以 JSON 编码写入给定的数据**

```JavaScript
Value Message.json(Value data);
```

调用参数:
* data: Value, 给定要写入的数据

返回结果:
* Value, 此方法不会返回数据

--------------------------
**以 JSON 编码解析消息中的数据**

```JavaScript
Value Message.json();
```

返回结果:
* Value, 返回解析的结果

--------------------------
### pack
**以 [msgpack](../../module/ifs/msgpack.md) 编码写入给定的数据**

```JavaScript
Value Message.pack(Value data);
```

调用参数:
* data: Value, 给定要写入的数据

返回结果:
* Value, 此方法不会返回数据

--------------------------
**以 [msgpack](../../module/ifs/msgpack.md) 编码解析消息中的数据**

```JavaScript
Value Message.pack();
```

返回结果:
* Value, 返回解析的结果

--------------------------
### end
**设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务**

```JavaScript
Message.end();
```

--------------------------
### isEnded
**查询当前消息是否结束**

```JavaScript
Boolean Message.isEnded();
```

返回结果:
* Boolean, 结束则返回 true

--------------------------
### clear
**清除消息的内容**

```JavaScript
Message.clear();
```

--------------------------
### sendTo
**发送格式化消息到给定的流对象**

```JavaScript
Message.sendTo(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### readFrom
**从给定的缓存流对象中读取格式化消息，并解析填充对象**

```JavaScript
Message.readFrom(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定读取格式化消息的流对象

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Message.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Message.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

