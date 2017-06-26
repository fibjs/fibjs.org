# 对象 Socket
网络套接口对象

Socket 属于 [net](../../module/ifs/net.md) 模块，创建方法

```JavaScript
var s = new net.Socket();
```

## 继承关系
<div class="inherits"><svg width="92pt" height="483pt" viewBox="0.00 0.00 91.79 483.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 479)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-479 87.789,-479 87.789,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.063,-386.5 13.063,-474.5 70.726,-474.5 70.726,-386.5 13.063,-386.5"/>
<text text-anchor="middle" x="41.8945" y="-461.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.063,-454.5 70.726,-454.5 "/>
<text text-anchor="start" x="21.063" y="-441.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.063" y="-429.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.063" y="-417.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.063" y="-405.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.063" y="-393.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="#000000" points="14.1725,-273.5 14.1725,-349.5 69.6165,-349.5 69.6165,-273.5 14.1725,-273.5"/>
<text text-anchor="middle" x="41.8945" y="-336.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polyline fill="none" stroke="#000000" points="14.1725,-329.5 69.6165,-329.5 "/>
<text text-anchor="start" x="22.1725" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">read()</text>
<text text-anchor="start" x="22.1725" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">write()</text>
<text text-anchor="start" x="22.1725" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
<text text-anchor="start" x="22.1725" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M41.8945,-376.1681C41.8945,-367.1942 41.8945,-358.0623 41.8945,-349.5973"/>
<polygon fill="#000000" stroke="#000000" points="38.3946,-376.1888 41.8945,-386.1888 45.3946,-376.1888 38.3946,-376.1888"/>
</g>
<!-- Socket -->
<g id="node3" class="node">
<title>Socket</title>
<g id="a_node3"><a xlink:title="Socket">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-236.5 83.789,-236.5 83.789,-.5 0,-.5"/>
<text text-anchor="middle" x="41.8945" y="-223.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Socket</text>
<polyline fill="none" stroke="#000000" points="0,-216.5 83.789,-216.5 "/>
<text text-anchor="start" x="8" y="-203.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Socket()</text>
<polyline fill="none" stroke="#000000" points="0,-196.5 83.789,-196.5 "/>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">family</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remoteAddress</text>
<text text-anchor="start" x="8" y="-147.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">remotePort</text>
<text text-anchor="start" x="8" y="-135.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">localAddress</text>
<text text-anchor="start" x="8" y="-123.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">localPort</text>
<text text-anchor="start" x="8" y="-111.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">timeout</text>
<polyline fill="none" stroke="#000000" points="0,-104.5 83.789,-104.5 "/>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">connect()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">bind()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">listen()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">accept()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">recv()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">recvfrom()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">send()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sendto()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;Socket -->
<g id="edge2" class="edge">
<title>Stream-&gt;Socket</title>
<path fill="none" stroke="#000000" d="M41.8945,-263.1855C41.8945,-254.8514 41.8945,-245.8724 41.8945,-236.6136"/>
<polygon fill="#000000" stroke="#000000" points="38.3946,-263.3694 41.8945,-273.3694 45.3946,-263.3694 38.3946,-263.3694"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Socket
** Socket 构造函数，创建一个新的 Socket 对象 **

```JavaScript
new Socket(Integer family = net.AF_INET,
    Integer type = net.SOCK_STREAM);
```

调用参数:
* family: Integer, 指定地址集，缺省为 AF_INET，ipv4
* type: Integer, 指定协议族，缺省为 SOCK_STREAM，tcp

## 成员属性
        
### family
** Integer, 查询当前 Socket 对象的地址集 **

```JavaScript
readonly Integer Socket.family;
```

--------------------------
### type
** Integer, 查询当前 Socket 对象的协议族 **

```JavaScript
readonly Integer Socket.type;
```

--------------------------
### remoteAddress
** String, 查询当前连接的对方地址 **

```JavaScript
readonly String Socket.remoteAddress;
```

--------------------------
### remotePort
** Integer, 查询当前连接的对方端口 **

```JavaScript
readonly Integer Socket.remotePort;
```

--------------------------
### localAddress
** String, 查询当前连接的本地地址 **

```JavaScript
readonly String Socket.localAddress;
```

--------------------------
### localPort
** Integer, 查询当前连接的本地端口 **

```JavaScript
readonly Integer Socket.localPort;
```

--------------------------
### timeout
** Integer, 查询和设置超时时间 单位毫秒 **

```JavaScript
Integer Socket.timeout;
```

## 成员函数
        
### connect
** 建立一个 tcp 连接 **

```JavaScript
Socket.connect(String host,
    Integer port) async;
```

调用参数:
* host: String, 指定对方地址或主机名
* port: Integer, 指定对方端口

--------------------------
### bind
** 将当前 Socket 绑定至本地所有地址的指定端口 **

```JavaScript
Socket.bind(Integer port,
    Boolean allowIPv4 = true) async;
```

调用参数:
* port: Integer, 指定绑定的端口
* allowIPv4: Boolean, 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统

--------------------------
** 将当前 Socket 绑定至指定地址的指定端口 **

```JavaScript
Socket.bind(String addr,
    Integer port,
    Boolean allowIPv4 = true) async;
```

调用参数:
* addr: String, 指定绑定的地址
* port: Integer, 指定绑定的端口
* allowIPv4: Boolean, 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统

--------------------------
### listen
** 开始监听连接请求 **

```JavaScript
Socket.listen(Integer backlog = 120) async;
```

调用参数:
* backlog: Integer, 指定请求队列长度，超出的请求将被拒绝，缺省为 120

--------------------------
### accept
** 等待并接受一个连接 **

```JavaScript
Socket Socket.accept() async;
```

返回结果:
* Socket, 返回接收到得连接对象

--------------------------
### recv
** 从连接读取指定大小的数据，不同于 read 方法，recv 并不保证读完要求的数据，而是在读取到数据后立即返回 **

```JavaScript
Buffer Socket.recv(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省读取任意尺寸的数据

返回结果:
* [Buffer](Buffer.md), 返回从连接读取的数据

--------------------------
### recvfrom
** 读取一个 UDP 包 **

```JavaScript
DatagramPacket Socket.recvfrom(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省读取任意尺寸的数据

返回结果:
* [DatagramPacket](DatagramPacket.md), 返回从连接读取的数据包

--------------------------
### send
** 将给定的数据写入连接，此方法等效于 write 方法 **

```JavaScript
Socket.send(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### sendto
** 向给定 ip:port 发送一个 UDP 包 **

```JavaScript
Socket.sendto(Buffer data,
    String host,
    Integer port) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据
* host: String, 指定目标 ip 或主机名
* port: Integer, 指定目标端口

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer Socket.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
Socket.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
Socket.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long Socket.copyTo(Stream stm,
    Long bytes = -1) async;
```

调用参数:
* stm: Stream, 目标流对象
* bytes: Long, 复制的字节数

返回结果:
* Long, 返回复制的字节数

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Socket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Socket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Socket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Socket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Socket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

