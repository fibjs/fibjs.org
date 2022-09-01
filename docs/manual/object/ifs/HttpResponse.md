# 对象 HttpResponse
[http](../../module/ifs/http.md) 响应消息对象

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<class>Message|new Message()|TEXT;BINARY|value;params;type;data;body;length;stream;lastError|read();readAll();write();json();pack();end();isEnded();clear();sendTo();readFrom()]
[<class>HttpMessage|protocol;headers;keepAlive;upgrade;maxHeadersCount;maxBodySize;socket|hasHeader();firstHeader();allHeader();addHeader();setHeader();removeHeader()]
[<this>HttpResponse|new HttpResponse()|statusCode;statusMessage;ok;cookies|writeHead();addCookie();redirect();sendHeader()]

[object] <:- [Message]
[Message] <:- [HttpMessage]
[HttpMessage] <:- [HttpResponse]
```

## 构造函数
        
### HttpResponse
**HttpResponse 构造函数，创建一个新的 HttpResponse 对象**

```JavaScript
new HttpResponse();
```

## 常量
        
### TEXT
**指定消息类型 1，代表一个文本类型**

```JavaScript
const HttpResponse.TEXT = 1;
```

--------------------------
### BINARY
**指定消息类型 2，代表一个二进制类型**

```JavaScript
const HttpResponse.BINARY = 2;
```

## 成员属性
        
### statusCode
**Integer, 查询和设置响应消息的返回状态**

```JavaScript
Integer HttpResponse.statusCode;
```

--------------------------
### statusMessage
**String, 查询和设置响应消息的返回消息**

```JavaScript
String HttpResponse.statusMessage;
```

--------------------------
### ok
**Boolean, 查询当前响应是否正常**

```JavaScript
readonly Boolean HttpResponse.ok;
```

--------------------------
### cookies
**NArray, 返回当前消息的 [HttpCookie](HttpCookie.md) 对象列表**

```JavaScript
readonly NArray HttpResponse.cookies;
```

--------------------------
### protocol
**String, 协议版本信息，允许的格式为：HTTP/#.#**

```JavaScript
String HttpResponse.protocol;
```

--------------------------
### headers
**[HttpCollection](HttpCollection.md), 包含消息中 [http](../../module/ifs/http.md) 消息头的容器，只读属性**

```JavaScript
readonly HttpCollection HttpResponse.headers;
```

--------------------------
### keepAlive
**Boolean, 查询和设定是否保持连接**

```JavaScript
Boolean HttpResponse.keepAlive;
```

--------------------------
### upgrade
**Boolean, 查询和设定是否是升级协议**

```JavaScript
Boolean HttpResponse.upgrade;
```

--------------------------
### maxHeadersCount
**Integer, 查询和设置最大请求头个数，缺省为 128**

```JavaScript
Integer HttpResponse.maxHeadersCount;
```

--------------------------
### maxBodySize
**Integer, 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64**

```JavaScript
Integer HttpResponse.maxBodySize;
```

--------------------------
### socket
**[Stream](Stream.md), 查询当前对象的来源 socket**

```JavaScript
readonly Stream HttpResponse.socket;
```

--------------------------
### value
**String, 消息的基本内容**

```JavaScript
String HttpResponse.value;
```

--------------------------
### params
**NArray, 消息的基本参数**

```JavaScript
readonly NArray HttpResponse.params;
```

--------------------------
### type
**Integer, 消息类型**

```JavaScript
Integer HttpResponse.type;
```

--------------------------
### data
**Value, 查询消息的数据，此属性会根据 content-type 返回不同数据，为 text 时，返回文本，为 [json](../../module/ifs/json.md) 时返回 [json](../../module/ifs/json.md)，其它时候返回二进制**

```JavaScript
readonly Value HttpResponse.data;
```

--------------------------
### body
**[SeekableStream](SeekableStream.md), 包含消息数据部分的流对象**

```JavaScript
SeekableStream HttpResponse.body;
```

--------------------------
### length
**Long, 消息数据部分的长度**

```JavaScript
readonly Long HttpResponse.length;
```

--------------------------
### stream
**[Stream](Stream.md), 查询消息 readFrom 时的流对象**

```JavaScript
readonly Stream HttpResponse.stream;
```

--------------------------
### lastError
**String, 查询和设置消息处理的最后错误**

```JavaScript
String HttpResponse.lastError;
```

## 成员函数
        
### writeHead
**设置响应消息的返回状态，返回消息，并添加响应头**

```JavaScript
HttpResponse.writeHead(Integer statusCode,
    String statusMessage,
    Object headers = {});
```

调用参数:
* statusCode: Integer, 指定响应消息的返回状态
* statusMessage: String, 指定响应消息的返回消息
* headers: Object, 指定响应消息添加的响应头

--------------------------
**设置响应消息的返回状态，返回消息，并添加响应头**

```JavaScript
HttpResponse.writeHead(Integer statusCode,
    Object headers = {});
```

调用参数:
* statusCode: Integer, 指定响应消息的返回状态
* headers: Object, 指定响应消息添加的响应头

--------------------------
### addCookie
**向 cookies 添加一个 [HttpCookie](HttpCookie.md) 对象**

```JavaScript
HttpResponse.addCookie(HttpCookie cookie);
```

调用参数:
* cookie: [HttpCookie](HttpCookie.md), 指定要添加的 [HttpCookie](HttpCookie.md) 对象

--------------------------
### redirect
**发送重定向到客户端**

```JavaScript
HttpResponse.redirect(String url);
```

调用参数:
* url: String, 重定向的地址

--------------------------
**发送重定向到客户端**

```JavaScript
HttpResponse.redirect(Integer statusCode,
    String url);
```

调用参数:
* statusCode: Integer, 指定响应消息的返回状态，接受的状态为：301, 302, 307
* url: String, 重定向的地址

--------------------------
### sendHeader
**仅发送格式化 [http](../../module/ifs/http.md) 头到给定的流对象**

```JavaScript
HttpResponse.sendHeader(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### hasHeader
**检查是否存在指定键值的消息头**

```JavaScript
Boolean HttpResponse.hasHeader(String name);
```

调用参数:
* name: String, 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### firstHeader
**查询指定键值的第一个消息头**

```JavaScript
String HttpResponse.firstHeader(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* String, 返回键值所对应的值，若不存在，则返回 undefined

--------------------------
### allHeader
**查询指定键值的全部消息头**

```JavaScript
NObject HttpResponse.allHeader(String name = "");
```

调用参数:
* name: String, 指定要查询的键值，传递空字符串返回全部键值的结果

返回结果:
* NObject, 返回键值所对应全部值的数组，若数据不存在，则返回 null

--------------------------
### addHeader
**添加一个消息头，添加数据并不修改已存在的键值的消息头**

```JavaScript
HttpResponse.addHeader(Object map);
```

调用参数:
* map: Object, 指定要添加的键值数据字典

--------------------------
**添加指定名称的一组消息头，添加数据并不修改已存在的键值的消息头**

```JavaScript
HttpResponse.addHeader(String name,
    Array values);
```

调用参数:
* name: String, 指定要添加的键值
* values: Array, 指定要添加的一组数据

--------------------------
**添加一个消息头，添加数据并不修改已存在的键值的消息头**

```JavaScript
HttpResponse.addHeader(String name,
    String value);
```

调用参数:
* name: String, 指定要添加的键值
* value: String, 指定要添加的数据

--------------------------
### setHeader
**设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头**

```JavaScript
HttpResponse.setHeader(Object map);
```

调用参数:
* map: Object, 指定要设定的键值数据字典

--------------------------
**设定指定名称的一组消息头，设定数据将修改键值所对应的数值，并清除相同键值的其余消息头**

```JavaScript
HttpResponse.setHeader(String name,
    Array values);
```

调用参数:
* name: String, 指定要设定的键值
* values: Array, 指定要设定的一组数据

--------------------------
**设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头**

```JavaScript
HttpResponse.setHeader(String name,
    String value);
```

调用参数:
* name: String, 指定要设定的键值
* value: String, 指定要设定的数据

--------------------------
### removeHeader
**删除指定键值的全部消息头**

```JavaScript
HttpResponse.removeHeader(String name);
```

调用参数:
* name: String, 指定要删除的键值

--------------------------
### read
**从流内读取指定大小的数据，此方法为 body 相应方法的别名**

```JavaScript
Buffer HttpResponse.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
**从流内读取剩余的全部数据，此方法为 body 相应方法的别名**

```JavaScript
Buffer HttpResponse.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
**写入给定的数据，此方法为 body 相应方法的别名**

```JavaScript
HttpResponse.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### json
**以 JSON 编码写入给定的数据**

```JavaScript
Value HttpResponse.json(Value data);
```

调用参数:
* data: Value, 给定要写入的数据

返回结果:
* Value, 此方法不会返回数据

--------------------------
**以 JSON 编码解析消息中的数据**

```JavaScript
Value HttpResponse.json();
```

返回结果:
* Value, 返回解析的结果

--------------------------
### pack
**以 [msgpack](../../module/ifs/msgpack.md) 编码写入给定的数据**

```JavaScript
Value HttpResponse.pack(Value data);
```

调用参数:
* data: Value, 给定要写入的数据

返回结果:
* Value, 此方法不会返回数据

--------------------------
**以 [msgpack](../../module/ifs/msgpack.md) 编码解析消息中的数据**

```JavaScript
Value HttpResponse.pack();
```

返回结果:
* Value, 返回解析的结果

--------------------------
### end
**设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务**

```JavaScript
HttpResponse.end();
```

--------------------------
### isEnded
**查询当前消息是否结束**

```JavaScript
Boolean HttpResponse.isEnded();
```

返回结果:
* Boolean, 结束则返回 true

--------------------------
### clear
**清除消息的内容**

```JavaScript
HttpResponse.clear();
```

--------------------------
### sendTo
**发送格式化消息到给定的流对象**

```JavaScript
HttpResponse.sendTo(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### readFrom
**从给定的缓存流对象中读取格式化消息，并解析填充对象**

```JavaScript
HttpResponse.readFrom(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定读取格式化消息的流对象

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String HttpResponse.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value HttpResponse.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

