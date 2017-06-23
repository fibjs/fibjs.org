# 对象 HttpMessage
[http](../../module/ifs/http.md) 基础消息对象

## 继承关系
<div class="inherits"><svg width="238pt" height="834pt" viewBox="0.00 0.00 238.00 834.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 830)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-830 234,-830 234,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="84.5,-734 84.5,-826 141.5,-826 141.5,-734 84.5,-734"/>
<polygon fill="none" stroke="#000000" points="85,-804 85,-826 142,-826 142,-804 85,-804"/>
<text text-anchor="start" x="100.1625" y="-812" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="85,-734 85,-804 142,-804 142,-734 85,-734"/>
<text text-anchor="start" x="90" y="-790" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="90" y="-778" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="90" y="-766" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="90" y="-754" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="90" y="-742" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Message -->
<g id="node2" class="node">
<title>Message</title>
<g id="a_node2"><a xlink:href="Message.md" xlink:title="Message">
<polygon fill="#ffffff" stroke="transparent" points="69.5,-396 69.5,-698 156.5,-698 156.5,-396 69.5,-396"/>
<polygon fill="none" stroke="#000000" points="70,-676 70,-698 157,-698 157,-676 70,-676"/>
<text text-anchor="start" x="93.2175" y="-684" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Message</text>
<polygon fill="none" stroke="#000000" points="70,-654 70,-676 157,-676 157,-654 70,-654"/>
<text text-anchor="start" x="75" y="-662" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Message()</text>
<polygon fill="none" stroke="#000000" points="70,-620 70,-654 157,-654 157,-620 70,-620"/>
<text text-anchor="start" x="75" y="-640" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> TEXT</text>
<text text-anchor="start" x="75" y="-628" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> BINARY</text>
<polygon fill="none" stroke="#000000" points="70,-502 70,-620 157,-620 157,-502 70,-502"/>
<text text-anchor="start" x="75" y="-606" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> value</text>
<text text-anchor="start" x="75" y="-594" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> params</text>
<text text-anchor="start" x="75" y="-582" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="75" y="-570" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="75" y="-558" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> body</text>
<text text-anchor="start" x="75" y="-546" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> length</text>
<text text-anchor="start" x="75" y="-534" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stream</text>
<text text-anchor="start" x="75" y="-522" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> response</text>
<text text-anchor="start" x="75" y="-510" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> lastError</text>
<polygon fill="none" stroke="#000000" points="70,-396 70,-502 157,-502 157,-396 70,-396"/>
<text text-anchor="start" x="75" y="-488" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="75" y="-476" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readAll()</text>
<text text-anchor="start" x="75" y="-464" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="75" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> end()</text>
<text text-anchor="start" x="75" y="-440" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isEnded()</text>
<text text-anchor="start" x="75" y="-428" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
<text text-anchor="start" x="75" y="-416" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sendTo()</text>
<text text-anchor="start" x="75" y="-404" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> readFrom()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Message -->
<g id="edge1" class="edge">
<title>object-&gt;Message</title>
<path fill="none" stroke="#000000" d="M113,-723.9524C113,-715.8013 113,-707.104 113,-698.1038"/>
<polygon fill="#000000" stroke="#000000" points="109.5001,-723.9667 113,-733.9667 116.5001,-723.9667 109.5001,-723.9667"/>
</g>
<!-- HttpMessage -->
<g id="node3" class="node">
<title>HttpMessage</title>
<g id="a_node3"><a xlink:title="HttpMessage">
<polygon fill="#d3d3d3" stroke="transparent" points="63.5,-162 63.5,-360 162.5,-360 162.5,-162 63.5,-162"/>
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
<path fill="none" stroke="#000000" d="M113,-385.4772C113,-376.8616 113,-368.3372 113,-360.0321"/>
<polygon fill="#000000" stroke="#000000" points="109.5001,-385.6253 113,-395.6254 116.5001,-385.6254 109.5001,-385.6253"/>
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

## 常量
        
### TEXT
** 指定消息类型 1，代表一个文本类型 **

```JavaScript
const HttpMessage.TEXT = 1;
```

--------------------------
### BINARY
** 指定消息类型 2，代表一个二进制类型 **

```JavaScript
const HttpMessage.BINARY = 2;
```

## 成员属性
        
### protocol
** String, 协议版本信息，允许的格式为：HTTP/#.# **

```JavaScript
String HttpMessage.protocol;
```

--------------------------
### headers
** [HttpCollection](HttpCollection.md), 包含消息中 [http](../../module/ifs/http.md) 消息头的容器，只读属性 **

```JavaScript
readonly HttpCollection HttpMessage.headers;
```

--------------------------
### keepAlive
** Boolean, 查询和设定是否保持连接 **

```JavaScript
Boolean HttpMessage.keepAlive;
```

--------------------------
### upgrade
** Boolean, 查询和设定是否是升级协议 **

```JavaScript
Boolean HttpMessage.upgrade;
```

--------------------------
### maxHeadersCount
** Integer, 查询和设置最大请求头个数，缺省为 128 **

```JavaScript
Integer HttpMessage.maxHeadersCount;
```

--------------------------
### maxUploadSize
** Integer, 查询和设置最大上传尺寸，以字节为单位，缺省为 67108864(64M) **

```JavaScript
Integer HttpMessage.maxUploadSize;
```

--------------------------
### socket
** [Stream](Stream.md), 查询当前对象的来源 socket **

```JavaScript
readonly Stream HttpMessage.socket;
```

--------------------------
### value
** String, 消息的基本内容 **

```JavaScript
String HttpMessage.value;
```

--------------------------
### params
** [List](List.md), 消息的基本参数 **

```JavaScript
List HttpMessage.params;
```

--------------------------
### type
** Integer, 消息类型 **

```JavaScript
Integer HttpMessage.type;
```

--------------------------
### data
** Value, 查询消息的数据 **

```JavaScript
readonly Value HttpMessage.data;
```

--------------------------
### body
** [SeekableStream](SeekableStream.md), 包含消息数据部分的流对象 **

```JavaScript
SeekableStream HttpMessage.body;
```

--------------------------
### length
** Long, 消息数据部分的长度 **

```JavaScript
readonly Long HttpMessage.length;
```

--------------------------
### stream
** [Stream](Stream.md), 查询消息 readFrom 时的流对象 **

```JavaScript
readonly Stream HttpMessage.stream;
```

--------------------------
### response
** Message, 获取响应消息对象 **

```JavaScript
readonly Message HttpMessage.response;
```

--------------------------
### lastError
** String, 查询和设置消息处理的最后错误 **

```JavaScript
String HttpMessage.lastError;
```

## 成员函数
        
### hasHeader
** 检查是否存在指定键值的消息头 **

```JavaScript
Boolean HttpMessage.hasHeader(String name);
```

调用参数:
* name: String, 指定要检查的键值

返回结果:
* Boolean, 返回键值是否存在

--------------------------
### firstHeader
** 查询指定键值的第一个消息头 **

```JavaScript
Variant HttpMessage.firstHeader(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* Variant, 返回键值所对应的值，若不存在，则返回 undefined

--------------------------
### allHeader
** 查询指定键值的全部消息头 **

```JavaScript
List HttpMessage.allHeader(String name);
```

调用参数:
* name: String, 指定要查询的键值

返回结果:
* [List](List.md), 返回键值所对应全部值的数组，若数据不存在，则返回 null

--------------------------
### addHeader
** 添加一个消息头，添加数据并不修改已存在的键值的消息头 **

```JavaScript
HttpMessage.addHeader(Map map);
```

调用参数:
* map: [Map](Map.md), 指定要添加的键值数据字典

--------------------------
** 添加一个消息头，添加数据并不修改已存在的键值的消息头 **

```JavaScript
HttpMessage.addHeader(String name,
    Variant value);
```

调用参数:
* name: String, 指定要添加的键值
* value: Variant, 指定要添加的数据

--------------------------
### setHeader
** 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头 **

```JavaScript
HttpMessage.setHeader(Map map);
```

调用参数:
* map: [Map](Map.md), 指定要设定的键值数据字典

--------------------------
** 设定一个消息头，设定数据将修改键值所对应的第一个数值，并清除相同键值的其余消息头 **

```JavaScript
HttpMessage.setHeader(String name,
    Variant value);
```

调用参数:
* name: String, 指定要设定的键值
* value: Variant, 指定要设定的数据

--------------------------
### removeHeader
** 删除指定键值的全部消息头 **

```JavaScript
HttpMessage.removeHeader(String name);
```

调用参数:
* name: String, 指定要删除的键值

--------------------------
### read
** 从流内读取指定大小的数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer HttpMessage.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### readAll
** 从流内读取剩余的全部数据，此方法为 body 相应方法的别名 **

```JavaScript
Buffer HttpMessage.readAll() async;
```

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 写入给定的数据，此方法为 body 相应方法的别名 **

```JavaScript
HttpMessage.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### end
** 设置当前消息处理结束，[Chain](Chain.md) 处理器不再继续后面的事务 **

```JavaScript
HttpMessage.end();
```

--------------------------
### isEnded
** 查询当前消息是否结束 **

```JavaScript
Boolean HttpMessage.isEnded();
```

返回结果:
* Boolean, 结束则返回 true

--------------------------
### clear
** 清除消息的内容 **

```JavaScript
HttpMessage.clear();
```

--------------------------
### sendTo
** 发送格式化消息到给定的流对象 **

```JavaScript
HttpMessage.sendTo(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定接收格式化消息的流对象

--------------------------
### readFrom
** 从给定的缓存流对象中读取格式化消息，并解析填充对象 **

```JavaScript
HttpMessage.readFrom(Stream stm) async;
```

调用参数:
* stm: [Stream](Stream.md), 指定读取格式化消息的流对象

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpMessage.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpMessage.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpMessage.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpMessage.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpMessage.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

