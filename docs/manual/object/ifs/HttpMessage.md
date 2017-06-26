# 对象 HttpMessage
[http](../../module/ifs/http.md) 基础消息对象

## 继承关系
<div class="inherits"><svg width="232pt" height="812pt" viewBox="0.00 0.00 232.23 812.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 808)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-808 228.234,-808 228.234,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="80.8405,-715.5 80.8405,-803.5 138.5035,-803.5 138.5035,-715.5 80.8405,-715.5"/>
<text text-anchor="middle" x="109.672" y="-790.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="80.8405,-783.5 138.5035,-783.5 "/>
<text text-anchor="start" x="88.8405" y="-770.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="88.8405" y="-758.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="88.8405" y="-746.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="88.8405" y="-734.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="88.8405" y="-722.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Message -->
<g id="node2" class="node">
<title>Message</title>
<g id="a_node2"><a xlink:href="Message.md" xlink:title="Message">
<polygon fill="#ffffff" stroke="#000000" points="67.5025,-386.5 67.5025,-678.5 151.8415,-678.5 151.8415,-386.5 67.5025,-386.5"/>
<text text-anchor="middle" x="109.672" y="-665.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Message</text>
<polyline fill="none" stroke="#000000" points="67.5025,-658.5 151.8415,-658.5 "/>
<text text-anchor="start" x="75.5025" y="-645.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Message()</text>
<polyline fill="none" stroke="#000000" points="67.5025,-638.5 151.8415,-638.5 "/>
<text text-anchor="start" x="75.5025" y="-625.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TEXT</text>
<text text-anchor="start" x="75.5025" y="-613.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">BINARY</text>
<polyline fill="none" stroke="#000000" points="67.5025,-606.5 151.8415,-606.5 "/>
<text text-anchor="start" x="75.5025" y="-593.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">value</text>
<text text-anchor="start" x="75.5025" y="-581.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">params</text>
<text text-anchor="start" x="75.5025" y="-569.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="75.5025" y="-557.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data</text>
<text text-anchor="start" x="75.5025" y="-545.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">body</text>
<text text-anchor="start" x="75.5025" y="-533.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">length</text>
<text text-anchor="start" x="75.5025" y="-521.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stream</text>
<text text-anchor="start" x="75.5025" y="-509.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">response</text>
<text text-anchor="start" x="75.5025" y="-497.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">lastError</text>
<polyline fill="none" stroke="#000000" points="67.5025,-490.5 151.8415,-490.5 "/>
<text text-anchor="start" x="75.5025" y="-477.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="75.5025" y="-465.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readAll()</text>
<text text-anchor="start" x="75.5025" y="-453.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="75.5025" y="-441.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">end()</text>
<text text-anchor="start" x="75.5025" y="-429.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isEnded()</text>
<text text-anchor="start" x="75.5025" y="-417.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
<text text-anchor="start" x="75.5025" y="-405.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sendTo()</text>
<text text-anchor="start" x="75.5025" y="-393.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">readFrom()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Message -->
<g id="edge1" class="edge">
<title>object-&gt;Message</title>
<path fill="none" stroke="#000000" d="M109.672,-705.2285C109.672,-696.8815 109.672,-687.9408 109.672,-678.6829"/>
<polygon fill="#000000" stroke="#000000" points="106.1721,-705.4629 109.672,-715.463 113.1721,-705.463 106.1721,-705.4629"/>
</g>
<!-- HttpMessage -->
<g id="node3" class="node">
<title>HttpMessage</title>
<g id="a_node3"><a xlink:title="HttpMessage">
<polygon fill="#d3d3d3" stroke="#000000" points="59.9985,-157.5 59.9985,-349.5 159.3455,-349.5 159.3455,-157.5 59.9985,-157.5"/>
<text text-anchor="middle" x="109.672" y="-336.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpMessage</text>
<polyline fill="none" stroke="#000000" points="59.9985,-329.5 159.3455,-329.5 "/>
<text text-anchor="start" x="67.9985" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">protocol</text>
<text text-anchor="start" x="67.9985" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">headers</text>
<text text-anchor="start" x="67.9985" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">keepAlive</text>
<text text-anchor="start" x="67.9985" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">upgrade</text>
<text text-anchor="start" x="67.9985" y="-268.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxHeadersCount</text>
<text text-anchor="start" x="67.9985" y="-256.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxUploadSize</text>
<text text-anchor="start" x="67.9985" y="-244.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">socket</text>
<polyline fill="none" stroke="#000000" points="59.9985,-237.5 159.3455,-237.5 "/>
<text text-anchor="start" x="67.9985" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">hasHeader()</text>
<text text-anchor="start" x="67.9985" y="-212.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">firstHeader()</text>
<text text-anchor="start" x="67.9985" y="-200.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">allHeader()</text>
<text text-anchor="start" x="67.9985" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">addHeader()</text>
<text text-anchor="start" x="67.9985" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">setHeader()</text>
<text text-anchor="start" x="67.9985" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">removeHeader()</text>
</a>
</g>
</g>
<!-- Message&#45;&gt;HttpMessage -->
<g id="edge2" class="edge">
<title>Message-&gt;HttpMessage</title>
<path fill="none" stroke="#000000" d="M109.672,-376.2126C109.672,-367.1622 109.672,-358.2075 109.672,-349.5038"/>
<polygon fill="#000000" stroke="#000000" points="106.1721,-376.463 109.672,-386.4631 113.1721,-376.4631 106.1721,-376.463"/>
</g>
<!-- HttpRequest -->
<g id="node4" class="node">
<title>HttpRequest</title>
<g id="a_node4"><a xlink:href="HttpRequest.md" xlink:title="HttpRequest">
<polygon fill="#ffffff" stroke="#000000" points="0,-.5 0,-120.5 99.344,-120.5 99.344,-.5 0,-.5"/>
<text text-anchor="middle" x="49.672" y="-107.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpRequest</text>
<polyline fill="none" stroke="#000000" points="0,-100.5 99.344,-100.5 "/>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpRequest()</text>
<polyline fill="none" stroke="#000000" points="0,-80.5 99.344,-80.5 "/>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">method</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">address</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">queryString</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">cookies</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">form</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">query</text>
</a>
</g>
</g>
<!-- HttpMessage&#45;&gt;HttpRequest -->
<g id="edge3" class="edge">
<title>HttpMessage-&gt;HttpRequest</title>
<path fill="none" stroke="#000000" d="M76.7671,-147.6558C73.9033,-138.444 71.0752,-129.3469 68.3884,-120.7044"/>
<polygon fill="#000000" stroke="#000000" points="73.4489,-148.7726 79.7599,-157.2827 80.1334,-146.6945 73.4489,-148.7726"/>
</g>
<!-- HttpResponse -->
<g id="node5" class="node">
<title>HttpResponse</title>
<g id="a_node5"><a xlink:href="HttpResponse.md" xlink:title="HttpResponse">
<polygon fill="#ffffff" stroke="#000000" points="117.11,-2.5 117.11,-118.5 224.234,-118.5 224.234,-2.5 117.11,-2.5"/>
<text text-anchor="middle" x="170.672" y="-105.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpResponse</text>
<polyline fill="none" stroke="#000000" points="117.11,-98.5 224.234,-98.5 "/>
<text text-anchor="start" x="125.11" y="-85.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpResponse()</text>
<polyline fill="none" stroke="#000000" points="117.11,-78.5 224.234,-78.5 "/>
<text text-anchor="start" x="125.11" y="-65.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">status</text>
<text text-anchor="start" x="125.11" y="-53.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">cookies</text>
<polyline fill="none" stroke="#000000" points="117.11,-46.5 224.234,-46.5 "/>
<text text-anchor="start" x="125.11" y="-33.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">addCookie()</text>
<text text-anchor="start" x="125.11" y="-21.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">redirect()</text>
<text text-anchor="start" x="125.11" y="-9.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sendHeader()</text>
</a>
</g>
</g>
<!-- HttpMessage&#45;&gt;HttpResponse -->
<g id="edge4" class="edge">
<title>HttpMessage-&gt;HttpResponse</title>
<path fill="none" stroke="#000000" d="M143.1142,-147.6911C146.2673,-137.715 149.378,-127.8729 152.3099,-118.5965"/>
<polygon fill="#000000" stroke="#000000" points="139.7591,-146.6928 140.0826,-157.2827 146.4337,-148.8024 139.7591,-146.6928"/>
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

