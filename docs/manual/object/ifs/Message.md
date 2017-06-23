# 对象 Message
基础消息对象

Message 对象兼容于 [mq](../../module/ifs/mq.md) 各个模块，可用于构建自定义消息处理系统，创建方法：

```JavaScript
var mq = require("mq");
var m = new mq.Message();
```

## 继承关系
<div class="inherits"><svg width="327pt" height="834pt" viewBox="0.00 0.00 327.00 834.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 830)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-830 323,-830 323,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="152.5,-734 152.5,-826 209.5,-826 209.5,-734 152.5,-734"/>
<polygon fill="none" stroke="#000000" points="153,-804 153,-826 210,-826 210,-804 153,-804"/>
<text text-anchor="start" x="168.1625" y="-812" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="153,-734 153,-804 210,-804 210,-734 153,-734"/>
<text text-anchor="start" x="158" y="-790" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="158" y="-778" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="158" y="-766" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="158" y="-754" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="158" y="-742" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Message -->
<g id="node2" class="node">
<title>Message</title>
<g id="a_node2"><a xlink:title="Message">
<polygon fill="#d3d3d3" stroke="transparent" points="137.5,-396 137.5,-698 224.5,-698 224.5,-396 137.5,-396"/>
<polygon fill="none" stroke="#000000" points="138,-676 138,-698 225,-698 225,-676 138,-676"/>
<text text-anchor="start" x="161.2175" y="-684" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Message</text>
<polygon fill="none" stroke="#000000" points="138,-654 138,-676 225,-676 225,-654 138,-654"/>
<text text-anchor="start" x="143" y="-662" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Message()</text>
<polygon fill="none" stroke="#000000" points="138,-620 138,-654 225,-654 225,-620 138,-620"/>
<text text-anchor="start" x="143" y="-640" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> TEXT</text>
<text text-anchor="start" x="143" y="-628" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> BINARY</text>
<polygon fill="none" stroke="#000000" points="138,-502 138,-620 225,-620 225,-502 138,-502"/>
<text text-anchor="start" x="143" y="-606" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> value</text>
<text text-anchor="start" x="143" y="-594" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> params</text>
<text text-anchor="start" x="143" y="-582" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="143" y="-570" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="143" y="-558" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> body</text>
<text text-anchor="start" x="143" y="-546" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<text text-anchor="start" x="143" y="-534" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stream</text>
<text text-anchor="start" x="143" y="-522" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> response</text>
<text text-anchor="start" x="143" y="-510" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lastError</text>
<polygon fill="none" stroke="#000000" points="138,-396 138,-502 225,-502 225,-396 138,-396"/>
<text text-anchor="start" x="143" y="-488" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="143" y="-476" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="143" y="-464" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="143" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> end()</text>
<text text-anchor="start" x="143" y="-440" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isEnded()</text>
<text text-anchor="start" x="143" y="-428" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="143" y="-416" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sendTo()</text>
<text text-anchor="start" x="143" y="-404" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readFrom()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Message -->
<g id="edge1" class="edge">
<title>object-&gt;Message</title>
<path fill="none" stroke="#000000" d="M181,-723.9524C181,-715.8013 181,-707.104 181,-698.1038"/>
<polygon fill="#000000" stroke="#000000" points="177.5001,-723.9667 181,-733.9667 184.5001,-723.9667 177.5001,-723.9667"/>
</g>
<!-- HttpMessage -->
<g id="node3" class="node">
<title>HttpMessage</title>
<g id="a_node3"><a xlink:href="HttpMessage.md" xlink:title="HttpMessage">
<polygon fill="#ffffff" stroke="transparent" points="63.5,-162 63.5,-360 162.5,-360 162.5,-162 63.5,-162"/>
<polygon fill="none" stroke="#000000" points="64,-338 64,-360 163,-360 163,-338 64,-338"/>
<text text-anchor="start" x="84.0495" y="-346" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpMessage</text>
<polygon fill="none" stroke="#000000" points="64,-244 64,-338 163,-338 163,-244 64,-244"/>
<text text-anchor="start" x="69" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> protocol</text>
<text text-anchor="start" x="69" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> headers</text>
<text text-anchor="start" x="69" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> keepAlive</text>
<text text-anchor="start" x="69" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> upgrade</text>
<text text-anchor="start" x="69" y="-276" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxHeadersCount</text>
<text text-anchor="start" x="69" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxUploadSize</text>
<text text-anchor="start" x="69" y="-252" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> socket</text>
<polygon fill="none" stroke="#000000" points="64,-162 64,-244 163,-244 163,-162 64,-162"/>
<text text-anchor="start" x="69" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> hasHeader()</text>
<text text-anchor="start" x="69" y="-218" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> firstHeader()</text>
<text text-anchor="start" x="69" y="-206" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> allHeader()</text>
<text text-anchor="start" x="69" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> addHeader()</text>
<text text-anchor="start" x="69" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> setHeader()</text>
<text text-anchor="start" x="69" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> removeHeader()</text>
</a>
</g>
</g>
<!-- Message&#45;&gt;HttpMessage -->
<g id="edge2" class="edge">
<title>Message-&gt;HttpMessage</title>
<path fill="none" stroke="#000000" d="M142.6628,-385.7581C140.5916,-377.0469 138.5422,-368.4275 136.5461,-360.0321"/>
<polygon fill="#000000" stroke="#000000" points="139.2905,-386.7062 145.0088,-395.6254 146.1007,-385.0869 139.2905,-386.7062"/>
</g>
<!-- WebSocketMessage -->
<g id="node6" class="node">
<title>WebSocketMessage</title>
<g id="a_node6"><a xlink:href="WebSocketMessage.md" xlink:title="WebSocketMessage">
<polygon fill="#ffffff" stroke="transparent" points="181,-222 181,-300 319,-300 319,-222 181,-222"/>
<polygon fill="none" stroke="#000000" points="181,-278 181,-300 319,-300 319,-278 181,-278"/>
<text text-anchor="start" x="204.156" y="-286" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">WebSocketMessage</text>
<polygon fill="none" stroke="#000000" points="181,-256 181,-278 319,-278 319,-256 181,-256"/>
<text text-anchor="start" x="186" y="-264" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new WebSocketMessage()</text>
<polygon fill="none" stroke="#000000" points="181,-222 181,-256 319,-256 319,-222 181,-222"/>
<text text-anchor="start" x="186" y="-242" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> masked</text>
<text text-anchor="start" x="186" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxSize</text>
</a>
</g>
</g>
<!-- Message&#45;&gt;WebSocketMessage -->
<g id="edge5" class="edge">
<title>Message-&gt;WebSocketMessage</title>
<path fill="none" stroke="#000000" d="M219.9146,-385.7019C227.6037,-353.8309 234.9955,-323.1928 240.528,-300.2609"/>
<polygon fill="#000000" stroke="#000000" points="216.4634,-385.0834 217.5205,-395.6254 223.2682,-386.7251 216.4634,-385.0834"/>
</g>
<!-- HttpRequest -->
<g id="node4" class="node">
<title>HttpRequest</title>
<g id="a_node4"><a xlink:href="HttpRequest.md" xlink:title="HttpRequest">
<polygon fill="#ffffff" stroke="transparent" points="0,0 0,-126 102,-126 102,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-104 0,-126 102,-126 102,-104 0,-104"/>
<text text-anchor="start" x="23.215" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpRequest</text>
<polygon fill="none" stroke="#000000" points="0,-82 0,-104 102,-104 102,-82 0,-82"/>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpRequest()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-82 102,-82 102,0 0,0"/>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> method</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> address</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> queryString</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> cookies</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> form</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> query</text>
</a>
</g>
</g>
<!-- HttpMessage&#45;&gt;HttpRequest -->
<g id="edge3" class="edge">
<title>HttpMessage-&gt;HttpRequest</title>
<path fill="none" stroke="#000000" d="M78.9041,-152.1132C76.1429,-143.2951 73.4147,-134.5826 70.8085,-126.2594"/>
<polygon fill="#000000" stroke="#000000" points="75.5808,-153.2128 81.9092,-161.71 82.261,-151.121 75.5808,-153.2128"/>
</g>
<!-- HttpResponse -->
<g id="node5" class="node">
<title>HttpResponse</title>
<g id="a_node5"><a xlink:href="HttpResponse.md" xlink:title="HttpResponse">
<polygon fill="#ffffff" stroke="transparent" points="120,-1 120,-125 230,-125 230,-1 120,-1"/>
<polygon fill="none" stroke="#000000" points="120,-103 120,-125 230,-125 230,-103 120,-103"/>
<text text-anchor="start" x="143.325" y="-111" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpResponse</text>
<polygon fill="none" stroke="#000000" points="120,-81 120,-103 230,-103 230,-81 120,-81"/>
<text text-anchor="start" x="125" y="-89" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpResponse()</text>
<polygon fill="none" stroke="#000000" points="120,-47 120,-81 230,-81 230,-47 120,-47"/>
<text text-anchor="start" x="125" y="-67" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> status</text>
<text text-anchor="start" x="125" y="-55" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> cookies</text>
<polygon fill="none" stroke="#000000" points="120,-1 120,-47 230,-47 230,-1 120,-1"/>
<text text-anchor="start" x="125" y="-33" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> addCookie()</text>
<text text-anchor="start" x="125" y="-21" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> redirect()</text>
<text text-anchor="start" x="125" y="-9" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sendHeader()</text>
</a>
</g>
</g>
<!-- HttpMessage&#45;&gt;HttpResponse -->
<g id="edge4" class="edge">
<title>HttpMessage-&gt;HttpResponse</title>
<path fill="none" stroke="#000000" d="M147.1008,-152.0975C149.9807,-142.9004 152.8245,-133.8185 155.5315,-125.1736"/>
<polygon fill="#000000" stroke="#000000" points="143.739,-151.121 144.0908,-161.71 150.4192,-153.2128 143.739,-151.121"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Message
** 消息对象构造函数 **

```JavaScript
new Message();
```

## 常量
        
### TEXT
** 指定消息类型 1，代表一个文本类型 **

```JavaScript
const Message.TEXT = 1;
```

--------------------------
### BINARY
** 指定消息类型 2，代表一个二进制类型 **

```JavaScript
const Message.BINARY = 2;
```

## 成员属性
        
### value
** String, 消息的基本内容 **

```JavaScript
String Message.value;
```

--------------------------
### params
** [List](List.md), 消息的基本参数 **

```JavaScript
List Message.params;
```

--------------------------
### type
** Integer, 消息类型 **

```JavaScript
Integer Message.type;
```

--------------------------
### data
** Value, 查询消息的数据 **

```JavaScript
readonly Value Message.data;
```

--------------------------
### body
** [SeekableStream](SeekableStream.md), 包含消息数据部分的流对象 **

```JavaScript
SeekableStream Message.body;
```

--------------------------
### length
** Long, 消息数据部分的长度 **

```JavaScript
readonly Long Message.length;
```

--------------------------
### stream
** [Stream](Stream.md), 查询消息 readFrom 时的流对象 **

```JavaScript
readonly Stream Message.stream;
```

--------------------------
### response
** Message, 获取响应消息对象 **

```JavaScript
readonly Message Message.response;
```

--------------------------
### lastError
** String, 查询和设置消息处理的最后错误 **

```JavaScript
String Message.lastError;
```

## 成员函数
        
### read
** 从流内读取指定大小的数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer Message.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
** 从流内读取剩余的全部数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer Message.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 写入给定的数据，此方法为 body 相应方法的别名 **

```JavaScript
Message.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### end
** 设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务 **

```JavaScript
Message.end();
```

--------------------------
### isEnded
** 查询当前消息是否结束 **

```JavaScript
Boolean Message.isEnded();
```

返回结果:
* Boolean, 结束则返回 true

--------------------------
### clear
** 清除消息的内容 **

```JavaScript
Message.clear();
```

--------------------------
### sendTo
** 发送格式化消息到给定的流对象 **

```JavaScript
Message.sendTo(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### readFrom
** 从给定的缓存流对象中读取格式化消息，并解析填充对象 **

```JavaScript
Message.readFrom(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定读取格式化消息的流对象

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Message.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Message.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Message.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Message.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Message.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

