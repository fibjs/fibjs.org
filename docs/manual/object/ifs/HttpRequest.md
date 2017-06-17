# 对象 HttpRequest
http 请求消息对象

## 构造函数
        
### HttpRequest
HttpRequest 构造函数，创建一个新的 HttpRequest 对象
```JavaScript
 new HttpRequest();
```

## 函数
        
### hasHeader
检查是否存在指定键值的消息头
```JavaScript
Boolean HttpRequest.hasHeader(String name);
```

调用参数:
* name - 指定要检查的键值

返回结果:
* 返回键值是否存在

### firstHeader
查询指定键值的第一个消息头
```JavaScript
Variant HttpRequest.firstHeader(String name);
```

调用参数:
* name - 指定要查询的键值

返回结果:
* 返回键值所对应的值，若不存在，则返回 undefined

### allHeader
查询指定键值的全部消息头
```JavaScript
List HttpRequest.allHeader(String name);
```

调用参数:
* name - 指定要查询的键值

返回结果:
* 返回键值所对应全部值的数组，若数据不存在，则返回 null

### addHeader
添加一个消息头，添加数据并不修改已存在的键值的消息头
```JavaScript
HttpRequest.addHeader(Map map);
```

调用参数:
* map - 指定要添加的键值数据字典

--------------------------
添加一个消息头，添加数据并不修改已存在的键值的消息头
```JavaScript
HttpRequest.addHeader(String name,
                Variant value);
```

调用参数:
* name - 指定要添加的键值
* value - 指定要添加的数据

### setHeader
设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
```JavaScript
HttpRequest.setHeader(Map map);
```

调用参数:
* map - 指定要设定的键值数据字典

--------------------------
设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头
```JavaScript
HttpRequest.setHeader(String name,
                Variant value);
```

调用参数:
* name - 指定要设定的键值
* value - 指定要设定的数据

### removeHeader
删除指定键值的全部消息头
```JavaScript
HttpRequest.removeHeader(String name);
```

调用参数:
* name - 指定要删除的键值

### read
从流内读取指定大小的数据，此方法为 body 相应方法的别名
```JavaScript
Buffer HttpRequest.read(Integer bytes = -1) async;
```

调用参数:
* bytes - 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

### readAll
从流内读取剩余的全部数据，此方法为 body 相应方法的别名
```JavaScript
Buffer HttpRequest.readAll() async;
```

返回结果:
* 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

### write
写入给定的数据，此方法为 body 相应方法的别名
```JavaScript
HttpRequest.write(Buffer data) async;
```

调用参数:
* data - 给定要写入的数据

### end
设置当前消息处理结束，Chain 处理器不再继续后面的事务
```JavaScript
HttpRequest.end();
```

### isEnded
查询当前消息是否结束
```JavaScript
Boolean HttpRequest.isEnded();
```

返回结果:
* 结束则返回 true

### clear
清除消息的内容
```JavaScript
HttpRequest.clear();
```

### sendTo
发送格式化消息到给定的流对象
```JavaScript
HttpRequest.sendTo(Stream stm) async;
```

调用参数:
* stm - 指定接收格式化消息的流对象

### readFrom
从给定的缓存流对象中读取格式化消息，并解析填充对象
```JavaScript
HttpRequest.readFrom(Stream stm) async;
```

调用参数:
* stm - 指定读取格式化消息的流对象

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
HttpRequest.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean HttpRequest.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String HttpRequest.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value HttpRequest.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value HttpRequest.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### method
查询和设置请求方法
```JavaScript
String HttpRequest.method;
```

### address
查询和设置请求地址
```JavaScript
String HttpRequest.address;
```

### queryString
查询和设置请求查询字符串
```JavaScript
String HttpRequest.queryString;
```

### cookies
获取包含消息 cookies 的容器
```JavaScript
readonly HttpCollection HttpRequest.cookies;
```

### form
获取包含消息 form 的容器
```JavaScript
readonly HttpCollection HttpRequest.form;
```

### query
获取包含消息 query 的容器
```JavaScript
readonly HttpCollection HttpRequest.query;
```

### protocol
协议版本信息，允许的格式为：HTTP/#.#
```JavaScript
String HttpRequest.protocol;
```

### headers
包含消息中 http 消息头的容器，只读属性
```JavaScript
readonly HttpCollection HttpRequest.headers;
```

### keepAlive
查询和设定是否保持连接
```JavaScript
Boolean HttpRequest.keepAlive;
```

### upgrade
查询和设定是否是升级协议
```JavaScript
Boolean HttpRequest.upgrade;
```

### maxHeadersCount
查询和设置最大请求头个数，缺省为 128
```JavaScript
Integer HttpRequest.maxHeadersCount;
```

### maxUploadSize
查询和设置最大上传尺寸，以字节为单位，缺省为 67108864(64M)
```JavaScript
Integer HttpRequest.maxUploadSize;
```

### socket
查询当前对象的来源 socket
```JavaScript
readonly Stream HttpRequest.socket;
```

### value
消息的基本内容
```JavaScript
String HttpRequest.value;
```

### params
消息的基本参数
```JavaScript
List HttpRequest.params;
```

### type
消息类型
```JavaScript
Integer HttpRequest.type;
```

### data
查询消息的数据
```JavaScript
readonly Value HttpRequest.data;
```

### body
包含消息数据部分的流对象
```JavaScript
SeekableStream HttpRequest.body;
```

### length
消息数据部分的长度
```JavaScript
readonly Long HttpRequest.length;
```

### stream
查询消息 readFrom 时的流对象
```JavaScript
readonly Stream HttpRequest.stream;
```

### response
获取响应消息对象
```JavaScript
readonly Message HttpRequest.response;
```

### lastError
查询和设置消息处理的最后错误
```JavaScript
String HttpRequest.lastError;
```

## 常量
        
### TEXT
指定消息类型 1，代表一个文本类型
```JavaScript
const HttpRequest.TEXT = 1;
```

### BINARY
指定消息类型 2，代表一个二进制类型
```JavaScript
const HttpRequest.BINARY = 2;
```

