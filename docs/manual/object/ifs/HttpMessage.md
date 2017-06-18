# 对象 HttpMessage
[http](../../module/ifs/http.md) 基础消息对象

## 函数
        
### hasHeader
检查是否存在指定键值的消息头
```JavaScript
Boolean HttpMessage.hasHeader(String name);
```

调用参数:
* name - 指定要检查的键值

返回结果:
* 返回键值是否存在

### firstHeader
查询指定键值的第一个消息头
```JavaScript
Variant HttpMessage.firstHeader(String name);
```

调用参数:
* name - 指定要查询的键值

返回结果:
* 返回键值所对应的值，若不存在，则返回 undefined

### allHeader
查询指定键值的全部消息头
```JavaScript
List HttpMessage.allHeader(String name);
```

调用参数:
* name - 指定要查询的键值

返回结果:
* 返回键值所对应全部值的数组，若数据不存在，则返回 null

### addHeader
添加一个消息头，添加数据并不修改已存在的键值的消息头
```JavaScript
HttpMessage.addHeader(Map map);
```

调用参数:
* map - 指定要添加的键值数据字典

--------------------------
添加一个消息头，添加数据并不修改已存在的键值的消息头
```JavaScript
HttpMessage.addHeader(String name,
                Variant value);
```

调用参数:
* name - 指定要添加的键值
* value - 指定要添加的数据

### setHeader
设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
```JavaScript
HttpMessage.setHeader(Map map);
```

调用参数:
* map - 指定要设定的键值数据字典

--------------------------
设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
```JavaScript
HttpMessage.setHeader(String name,
                Variant value);
```

调用参数:
* name - 指定要设定的键值
* value - 指定要设定的数据

### removeHeader
删除指定键值的全部消息头
```JavaScript
HttpMessage.removeHeader(String name);
```

调用参数:
* name - 指定要删除的键值

### read
从流内读取指定大小的数据，此方法为 body 相应方法的别名
```JavaScript
Buffer HttpMessage.read(Integer bytes = -1) async;
```

调用参数:
* bytes - 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

### readAll
从流内读取剩余的全部数据，此方法为 body 相应方法的别名
```JavaScript
Buffer HttpMessage.readAll() async;
```

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

### write
写入给定的数据，此方法为 body 相应方法的别名
```JavaScript
HttpMessage.write(Buffer data) async;
```

调用参数:
* data - 给定要写入的数据

### end
设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务
```JavaScript
HttpMessage.end();
```

### isEnded
查询当前消息是否结束
```JavaScript
Boolean HttpMessage.isEnded();
```

返回结果:
* 结束则返回 true

### clear
清除消息的内容
```JavaScript
HttpMessage.clear();
```

### sendTo
发送格式化消息到给定的流对象
```JavaScript
HttpMessage.sendTo(Stream stm) async;
```

调用参数:
* stm - 指定接收格式化消息的流对象

### readFrom
从给定的缓存流对象中读取格式化消息，并解析填充对象
```JavaScript
HttpMessage.readFrom(Stream stm) async;
```

调用参数:
* stm - 指定读取格式化消息的流对象

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpMessage.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpMessage.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String HttpMessage.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpMessage.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpMessage.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### protocol
协议版本信息，允许的格式为：HTTP/#.#
```JavaScript
String HttpMessage.protocol;
```

### headers
包含消息中 [http](../../module/ifs/http.md) 消息头的容器，只读属性
```JavaScript
readonly HttpCollection HttpMessage.headers;
```

### keepAlive
查询和设定是否保持连接
```JavaScript
Boolean HttpMessage.keepAlive;
```

### upgrade
查询和设定是否是升级协议
```JavaScript
Boolean HttpMessage.upgrade;
```

### maxHeadersCount
查询和设置最大请求头个数，缺省为 128
```JavaScript
Integer HttpMessage.maxHeadersCount;
```

### maxUploadSize
查询和设置最大上传尺寸，以字节为单位，缺省为 67108864(64M)
```JavaScript
Integer HttpMessage.maxUploadSize;
```

### socket
查询当前对象的来源 socket
```JavaScript
readonly Stream HttpMessage.socket;
```

### value
消息的基本内容
```JavaScript
String HttpMessage.value;
```

### params
消息的基本参数
```JavaScript
List HttpMessage.params;
```

### type
消息类型
```JavaScript
Integer HttpMessage.type;
```

### data
查询消息的数据
```JavaScript
readonly Value HttpMessage.data;
```

### body
包含消息数据部分的流对象
```JavaScript
SeekableStream HttpMessage.body;
```

### length
消息数据部分的长度
```JavaScript
readonly Long HttpMessage.length;
```

### stream
查询消息 readFrom 时的流对象
```JavaScript
readonly Stream HttpMessage.stream;
```

### response
获取响应消息对象
```JavaScript
readonly Message HttpMessage.response;
```

### lastError
查询和设置消息处理的最后错误
```JavaScript
String HttpMessage.lastError;
```

## 常量
        
### TEXT
指定消息类型 1，代表一个文本类型
```JavaScript
const HttpMessage.TEXT = 1;
```

### BINARY
指定消息类型 2，代表一个二进制类型
```JavaScript
const HttpMessage.BINARY = 2;
```

