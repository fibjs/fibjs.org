# 对象 WebSocketMessage
websocket 消息对象

创建方法：

```JavaScript
var ws = require("ws");

var msg = new ws.Message();
```

## 继承关系
<div class="inherits"><svg width="146pt" height="552pt" viewBox="0.00 0.00 146.00 552.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 548)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-548 142,-548 142,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="40.5,-452 40.5,-544 97.5,-544 97.5,-452 40.5,-452"/>
<polygon fill="none" stroke="#000000" points="41,-522 41,-544 98,-544 98,-522 41,-522"/>
<text text-anchor="start" x="56.1625" y="-530" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="41,-452 41,-522 98,-522 98,-452 41,-452"/>
<text text-anchor="start" x="46" y="-508" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="46" y="-496" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="46" y="-484" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="46" y="-472" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="46" y="-460" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Message -->
<g id="node2" class="node">
<title>Message</title>
<g id="a_node2"><a xlink:href="Message.md" xlink:title="Message">
<polygon fill="#ffffff" stroke="transparent" points="25.5,-114 25.5,-416 112.5,-416 112.5,-114 25.5,-114"/>
<polygon fill="none" stroke="#000000" points="26,-394 26,-416 113,-416 113,-394 26,-394"/>
<text text-anchor="start" x="49.2175" y="-402" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Message</text>
<polygon fill="none" stroke="#000000" points="26,-372 26,-394 113,-394 113,-372 26,-372"/>
<text text-anchor="start" x="31" y="-380" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Message()</text>
<polygon fill="none" stroke="#000000" points="26,-338 26,-372 113,-372 113,-338 26,-338"/>
<text text-anchor="start" x="31" y="-358" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> TEXT</text>
<text text-anchor="start" x="31" y="-346" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> BINARY</text>
<polygon fill="none" stroke="#000000" points="26,-220 26,-338 113,-338 113,-220 26,-220"/>
<text text-anchor="start" x="31" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> value</text>
<text text-anchor="start" x="31" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> params</text>
<text text-anchor="start" x="31" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="31" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="31" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> body</text>
<text text-anchor="start" x="31" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<text text-anchor="start" x="31" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stream</text>
<text text-anchor="start" x="31" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> response</text>
<text text-anchor="start" x="31" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lastError</text>
<polygon fill="none" stroke="#000000" points="26,-114 26,-220 113,-220 113,-114 26,-114"/>
<text text-anchor="start" x="31" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="31" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="31" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="31" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> end()</text>
<text text-anchor="start" x="31" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isEnded()</text>
<text text-anchor="start" x="31" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="31" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sendTo()</text>
<text text-anchor="start" x="31" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readFrom()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Message -->
<g id="edge1" class="edge">
<title>object-&gt;Message</title>
<path fill="none" stroke="#000000" d="M69,-441.9524C69,-433.8013 69,-425.104 69,-416.1038"/>
<polygon fill="#000000" stroke="#000000" points="65.5001,-441.9667 69,-451.9667 72.5001,-441.9667 65.5001,-441.9667"/>
</g>
<!-- WebSocketMessage -->
<g id="node3" class="node">
<title>WebSocketMessage</title>
<g id="a_node3"><a xlink:title="WebSocketMessage">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-78 138,-78 138,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-56 0,-78 138,-78 138,-56 0,-56"/>
<text text-anchor="start" x="23.156" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketMessage</text>
<polygon fill="none" stroke="#000000" points="0,-34 0,-56 138,-56 138,-34 0,-34"/>
<text text-anchor="start" x="5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new WebSocketMessage()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-34 138,-34 138,0 0,0"/>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> masked</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxSize</text>
</a>
</g>
</g>
<!-- Message&#45;&gt;WebSocketMessage -->
<g id="edge2" class="edge">
<title>Message-&gt;WebSocketMessage</title>
<path fill="none" stroke="#000000" d="M69,-103.8267C69,-94.6795 69,-86.0505 69,-78.2532"/>
<polygon fill="#000000" stroke="#000000" points="65.5001,-103.9408 69,-113.9408 72.5001,-103.9408 65.5001,-103.9408"/>
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

