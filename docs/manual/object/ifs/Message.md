# 对象 Message
基础消息对象

Message 对象兼容于 [mq](../../module/ifs/mq.md) 各个模块，可用于构建自定义消息处理系统，创建方法：
```JavaScript
var mq = require("mq");
var m = new mq.Message();
```
## 构造函数
        
### Message
消息对象构造函数
```JavaScript
 new Message();
```

## 函数
        
### read
从流内读取指定大小的数据，此方法为 body 相应方法的别名
```JavaScript
Buffer Message.read(Integer bytes = -1) async;
```

调用参数:
* bytes - 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
从流内读取剩余的全部数据，此方法为 body 相应方法的别名
```JavaScript
Buffer Message.readAll() async;
```

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
写入给定的数据，此方法为 body 相应方法的别名
```JavaScript
Message.write(Buffer data) async;
```

调用参数:
* data - 给定要写入的数据

--------------------------
### end
设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务
```JavaScript
Message.end();
```

--------------------------
### isEnded
查询当前消息是否结束
```JavaScript
Boolean Message.isEnded();
```

返回结果:
* 结束则返回 true

--------------------------
### clear
清除消息的内容
```JavaScript
Message.clear();
```

--------------------------
### sendTo
发送格式化消息到给定的流对象
```JavaScript
Message.sendTo(Stream stm) async;
```

调用参数:
* stm - 指定接收格式化消息的流对象

--------------------------
### readFrom
从给定的缓存流对象中读取格式化消息，并解析填充对象
```JavaScript
Message.readFrom(Stream stm) async;
```

调用参数:
* stm - 指定读取格式化消息的流对象

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Message.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Message.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String Message.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Message.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value Message.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### value
消息的基本内容
```JavaScript
String Message.value;
```

--------------------------
### params
消息的基本参数
```JavaScript
List Message.params;
```

--------------------------
### type
消息类型
```JavaScript
Integer Message.type;
```

--------------------------
### data
查询消息的数据
```JavaScript
readonly Value Message.data;
```

--------------------------
### body
包含消息数据部分的流对象
```JavaScript
SeekableStream Message.body;
```

--------------------------
### length
消息数据部分的长度
```JavaScript
readonly Long Message.length;
```

--------------------------
### stream
查询消息 readFrom 时的流对象
```JavaScript
readonly Stream Message.stream;
```

--------------------------
### response
获取响应消息对象
```JavaScript
readonly Message Message.response;
```

--------------------------
### lastError
查询和设置消息处理的最后错误
```JavaScript
String Message.lastError;
```

## 常量
        
### TEXT
指定消息类型 1，代表一个文本类型
```JavaScript
const Message.TEXT = 1;
```

--------------------------
### BINARY
指定消息类型 2，代表一个二进制类型
```JavaScript
const Message.BINARY = 2;
```

