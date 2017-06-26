# 对象 WebSocketMessage
websocket 消息对象

创建方法：

```JavaScript
var ws = require("ws");

var msg = new ws.Message();
```

## 继承关系
<div class="inherits"><svg width="143pt" height="535pt" viewBox="0.00 0.00 143.46 535.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 531)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-531 139.462,-531 139.462,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="38.8995,-438.5 38.8995,-526.5 96.5625,-526.5 96.5625,-438.5 38.8995,-438.5"/>
<text text-anchor="middle" x="67.731" y="-513.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="38.8995,-506.5 96.5625,-506.5 "/>
<text text-anchor="start" x="46.8995" y="-493.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="46.8995" y="-481.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="46.8995" y="-469.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="46.8995" y="-457.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="46.8995" y="-445.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Message -->
<g id="node2" class="node">
<title>Message</title>
<g id="a_node2"><a xlink:href="Message.md" xlink:title="Message">
<polygon fill="#ffffff" stroke="#000000" points="25.5615,-109.5 25.5615,-401.5 109.9005,-401.5 109.9005,-109.5 25.5615,-109.5"/>
<text text-anchor="middle" x="67.731" y="-388.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Message</text>
<polyline fill="none" stroke="#000000" points="25.5615,-381.5 109.9005,-381.5 "/>
<text text-anchor="start" x="33.5615" y="-368.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Message()</text>
<polyline fill="none" stroke="#000000" points="25.5615,-361.5 109.9005,-361.5 "/>
<text text-anchor="start" x="33.5615" y="-348.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TEXT</text>
<text text-anchor="start" x="33.5615" y="-336.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BINARY</text>
<polyline fill="none" stroke="#000000" points="25.5615,-329.5 109.9005,-329.5 "/>
<text text-anchor="start" x="33.5615" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">value</text>
<text text-anchor="start" x="33.5615" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">params</text>
<text text-anchor="start" x="33.5615" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="33.5615" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data</text>
<text text-anchor="start" x="33.5615" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">body</text>
<text text-anchor="start" x="33.5615" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<text text-anchor="start" x="33.5615" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stream</text>
<text text-anchor="start" x="33.5615" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">response</text>
<text text-anchor="start" x="33.5615" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lastError</text>
<polyline fill="none" stroke="#000000" points="25.5615,-213.5 109.9005,-213.5 "/>
<text text-anchor="start" x="33.5615" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="33.5615" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readAll()</text>
<text text-anchor="start" x="33.5615" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="33.5615" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">end()</text>
<text text-anchor="start" x="33.5615" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isEnded()</text>
<text text-anchor="start" x="33.5615" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="33.5615" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sendTo()</text>
<text text-anchor="start" x="33.5615" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readFrom()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Message -->
<g id="edge1" class="edge">
<title>object-&gt;Message</title>
<path fill="none" stroke="#000000" d="M67.731,-428.2285C67.731,-419.8815 67.731,-410.9408 67.731,-401.6829"/>
<polygon fill="#000000" stroke="#000000" points="64.2311,-428.4629 67.731,-438.463 71.2311,-428.463 64.2311,-428.4629"/>
</g>
<!-- WebSocketMessage -->
<g id="node3" class="node">
<title>WebSocketMessage</title>
<g id="a_node3"><a xlink:title="WebSocketMessage">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-72.5 135.462,-72.5 135.462,-.5 0,-.5"/>
<text text-anchor="middle" x="67.731" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketMessage</text>
<polyline fill="none" stroke="#000000" points="0,-52.5 135.462,-52.5 "/>
<text text-anchor="start" x="8" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new WebSocketMessage()</text>
<polyline fill="none" stroke="#000000" points="0,-32.5 135.462,-32.5 "/>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">masked</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxSize</text>
</a>
</g>
</g>
<!-- Message&#45;&gt;WebSocketMessage -->
<g id="edge2" class="edge">
<title>Message-&gt;WebSocketMessage</title>
<path fill="none" stroke="#000000" d="M67.731,-99.2864C67.731,-89.7457 67.731,-80.7872 67.731,-72.7901"/>
<polygon fill="#000000" stroke="#000000" points="64.2311,-99.4238 67.731,-109.4238 71.2311,-99.4239 64.2311,-99.4238"/>
</g>
</g>
</svg></div>

## 构造函数
        
### WebSocketMessage
** 包处理消息对象构造函数 **

```JavaScript
new WebSocketMessage(Integer type = ws.BINARY,
    Boolean masked = true,
    Integer maxSize = 67108864);
```

调用参数:
* type: Integer, websocket 消息类型，缺省为 websocket.BINARY
* masked: Boolean, websocket 消息掩码，缺省为 true
* maxSize: Integer, 最大包尺寸，以 MB 为单位，缺省为 67108864(64M)

## 常量
        
### TEXT
** 指定消息类型 1，代表一个文本类型 **

```JavaScript
const WebSocketMessage.TEXT = 1;
```

--------------------------
### BINARY
** 指定消息类型 2，代表一个二进制类型 **

```JavaScript
const WebSocketMessage.BINARY = 2;
```

## 成员属性
        
### masked
** Boolean, 查询和读取 websocket 掩码标记，缺省为 true **

```JavaScript
Boolean WebSocketMessage.masked;
```

--------------------------
### maxSize
** Integer, 查询和设置最大包尺寸，以字节为单位，缺省为 67108864(64M) **

```JavaScript
Integer WebSocketMessage.maxSize;
```

--------------------------
### value
** String, 消息的基本内容 **

```JavaScript
String WebSocketMessage.value;
```

--------------------------
### params
** [List](List.md), 消息的基本参数 **

```JavaScript
List WebSocketMessage.params;
```

--------------------------
### type
** Integer, 消息类型 **

```JavaScript
Integer WebSocketMessage.type;
```

--------------------------
### data
** Value, 查询消息的数据 **

```JavaScript
readonly Value WebSocketMessage.data;
```

--------------------------
### body
** [SeekableStream](SeekableStream.md), 包含消息数据部分的流对象 **

```JavaScript
SeekableStream WebSocketMessage.body;
```

--------------------------
### length
** Long, 消息数据部分的长度 **

```JavaScript
readonly Long WebSocketMessage.length;
```

--------------------------
### stream
** [Stream](Stream.md), 查询消息 readFrom 时的流对象 **

```JavaScript
readonly Stream WebSocketMessage.stream;
```

--------------------------
### response
** Message, 获取响应消息对象 **

```JavaScript
readonly Message WebSocketMessage.response;
```

--------------------------
### lastError
** String, 查询和设置消息处理的最后错误 **

```JavaScript
String WebSocketMessage.lastError;
```

## 成员函数
        
### read
** 从流内读取指定大小的数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer WebSocketMessage.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
** 从流内读取剩余的全部数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer WebSocketMessage.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 写入给定的数据，此方法为 body 相应方法的别名 **

```JavaScript
WebSocketMessage.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### end
** 设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务 **

```JavaScript
WebSocketMessage.end();
```

--------------------------
### isEnded
** 查询当前消息是否结束 **

```JavaScript
Boolean WebSocketMessage.isEnded();
```

返回结果:
* Boolean, 结束则返回 true

--------------------------
### clear
** 清除消息的内容 **

```JavaScript
WebSocketMessage.clear();
```

--------------------------
### sendTo
** 发送格式化消息到给定的流对象 **

```JavaScript
WebSocketMessage.sendTo(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### readFrom
** 从给定的缓存流对象中读取格式化消息，并解析填充对象 **

```JavaScript
WebSocketMessage.readFrom(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定读取格式化消息的流对象

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
WebSocketMessage.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean WebSocketMessage.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String WebSocketMessage.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value WebSocketMessage.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value WebSocketMessage.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

