# 对象 Socket
网络套接口对象

Socket 属于 [net](../../module/ifs/net.md) 模块，创建方法

```JavaScript
var s = new net.Socket();
```

## 继承关系
<div class="inherits"><svg width="91pt" height="496pt" viewBox="0.00 0.00 91.00 496.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 492)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-492 87,-492 87,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="13,-396 13,-488 70,-488 70,-396 13,-396"/>
<polygon fill="none" stroke="#000000" points="13.5,-466 13.5,-488 70.5,-488 70.5,-466 13.5,-466"/>
<text text-anchor="start" x="28.6625" y="-474" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="13.5,-396 13.5,-466 70.5,-466 70.5,-396 13.5,-396"/>
<text text-anchor="start" x="18.5" y="-452" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="18.5" y="-440" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="18.5" y="-428" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="18.5" y="-416" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="18.5" y="-404" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="transparent" points="14,-280 14,-360 69,-360 69,-280 14,-280"/>
<polygon fill="none" stroke="#000000" points="14.5,-338 14.5,-360 69.5,-360 69.5,-338 14.5,-338"/>
<text text-anchor="start" x="25.888" y="-346" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polygon fill="none" stroke="#000000" points="14.5,-280 14.5,-338 69.5,-338 69.5,-280 14.5,-280"/>
<text text-anchor="start" x="19.5" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="19.5" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="19.5" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="19.5" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M41.5,-385.8267C41.5,-377.1786 41.5,-368.4003 41.5,-360.193"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-385.877 41.5,-395.877 45.0001,-385.8771 38.0001,-385.877"/>
</g>
<!-- Socket -->
<g id="node3" class="node">
<title>Socket</title>
<g id="a_node3"><a xlink:title="Socket">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-244 83,-244 83,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-222 .5,-244 83.5,-244 83.5,-222 .5,-222"/>
<text text-anchor="start" x="26.717" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Socket</text>
<polygon fill="none" stroke="#000000" points=".5,-200 .5,-222 83.5,-222 83.5,-200 .5,-200"/>
<text text-anchor="start" x="5.5" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Socket()</text>
<polygon fill="none" stroke="#000000" points=".5,-106 .5,-200 83.5,-200 83.5,-106 .5,-106"/>
<text text-anchor="start" x="5.5" y="-186" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> family</text>
<text text-anchor="start" x="5.5" y="-174" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<text text-anchor="start" x="5.5" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remoteAddress</text>
<text text-anchor="start" x="5.5" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> remotePort</text>
<text text-anchor="start" x="5.5" y="-138" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> localAddress</text>
<text text-anchor="start" x="5.5" y="-126" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> localPort</text>
<text text-anchor="start" x="5.5" y="-114" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> timeout</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-106 83.5,-106 83.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> connect()</text>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> bind()</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> listen()</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> accept()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> recv()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> recvfrom()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> send()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sendto()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;Socket -->
<g id="edge2" class="edge">
<title>Stream-&gt;Socket</title>
<path fill="none" stroke="#000000" d="M41.5,-269.7402C41.5,-261.7188 41.5,-253.1286 41.5,-244.2751"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-269.9317 41.5,-279.9317 45.0001,-269.9318 38.0001,-269.9317"/>
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

