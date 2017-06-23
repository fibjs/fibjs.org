# 对象 SslSocket
[ssl](../../module/ifs/ssl.md) 网络套接口对象

SslSocket 属于 [ssl](../../module/ifs/ssl.md) 模块，创建方法

```JavaScript
var s = new ssl.Socket();
```

## 继承关系
<div class="inherits"><svg width="99pt" height="388pt" viewBox="0.00 0.00 99.00 388.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 384)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-384 95,-384 95,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="17,-288 17,-380 74,-380 74,-288 17,-288"/>
<polygon fill="none" stroke="#000000" points="17.5,-358 17.5,-380 74.5,-380 74.5,-358 17.5,-358"/>
<text text-anchor="start" x="32.6625" y="-366" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="17.5,-288 17.5,-358 74.5,-358 74.5,-288 17.5,-288"/>
<text text-anchor="start" x="22.5" y="-344" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="22.5" y="-332" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="22.5" y="-320" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="22.5" y="-308" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="22.5" y="-296" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Stream -->
<g id="node2" class="node">
<title>Stream</title>
<g id="a_node2"><a xlink:href="Stream.md" xlink:title="Stream">
<polygon fill="#ffffff" stroke="transparent" points="18,-172 18,-252 73,-252 73,-172 18,-172"/>
<polygon fill="none" stroke="#000000" points="18.5,-230 18.5,-252 73.5,-252 73.5,-230 18.5,-230"/>
<text text-anchor="start" x="29.888" y="-238" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Stream</text>
<polygon fill="none" stroke="#000000" points="18.5,-172 18.5,-230 73.5,-230 73.5,-172 18.5,-172"/>
<text text-anchor="start" x="23.5" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> read()</text>
<text text-anchor="start" x="23.5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> write()</text>
<text text-anchor="start" x="23.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
<text text-anchor="start" x="23.5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> copyTo()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Stream -->
<g id="edge1" class="edge">
<title>object-&gt;Stream</title>
<path fill="none" stroke="#000000" d="M45.5,-277.8267C45.5,-269.1786 45.5,-260.4003 45.5,-252.193"/>
<polygon fill="#000000" stroke="#000000" points="42.0001,-277.877 45.5,-287.877 49.0001,-277.8771 42.0001,-277.877"/>
</g>
<!-- SslSocket -->
<g id="node3" class="node">
<title>SslSocket</title>
<g id="a_node3"><a xlink:title="SslSocket">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-136 91,-136 91,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-136 91.5,-136 91.5,-114 .5,-114"/>
<text text-anchor="start" x="23.773" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslSocket</text>
<polygon fill="none" stroke="#000000" points=".5,-92 .5,-114 91.5,-114 91.5,-92 .5,-92"/>
<text text-anchor="start" x="5.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new SslSocket()</text>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-92 91.5,-92 91.5,-34 .5,-34"/>
<text text-anchor="start" x="5.5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="5.5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
<text text-anchor="start" x="5.5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> peerCert</text>
<text text-anchor="start" x="5.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stream</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 91.5,-34 91.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> connect()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> accept()</text>
</a>
</g>
</g>
<!-- Stream&#45;&gt;SslSocket -->
<g id="edge2" class="edge">
<title>Stream-&gt;SslSocket</title>
<path fill="none" stroke="#000000" d="M45.5,-161.6556C45.5,-153.3696 45.5,-144.6618 45.5,-136.0302"/>
<polygon fill="#000000" stroke="#000000" points="42.0001,-161.8879 45.5,-171.888 49.0001,-161.888 42.0001,-161.8879"/>
</g>
</g>
</svg></div>

## 构造函数
        
### SslSocket
** SslSocket 构造函数，创建一个新的 SslSocket 对象 **

```JavaScript
new SslSocket(Array certs = []);
```

调用参数:
* certs: Array, 服务器证书列表

certs 格式为：

```JavaScript
[{
        crt: [X509Cert object],
        key: [PKey object]
    },
    {
        crt: [X509Cert object],
        key: [PKey object]
    }
]
```

--------------------------
** SslSocket 构造函数，创建一个新的 SslSocket 对象 **

```JavaScript
new SslSocket(X509Cert crt,
    PKey key);
```

调用参数:
* crt: [X509Cert](X509Cert.md), [X509Cert](X509Cert.md) 证书，用于客户端验证服务器
* key: [PKey](PKey.md), [PKey](PKey.md) 私钥，用于与客户端会话

## 成员属性
        
### verification
** Integer, 设定证书验证模式，缺省为 VERIFY_REQUIRED **

```JavaScript
Integer SslSocket.verification;
```

--------------------------
### ca
** [X509Cert](X509Cert.md), 证书链，客户端模式 connect 时自动引用 [ssl](../../module/ifs/ssl.md).ca，服务器模式 accept 生成 SslSocket 自动引用当前 SslSocket 的 ca **

```JavaScript
readonly X509Cert SslSocket.ca;
```

--------------------------
### peerCert
** [X509Cert](X509Cert.md), 连接对方的证书 **

```JavaScript
readonly X509Cert SslSocket.peerCert;
```

--------------------------
### stream
** [Stream](Stream.md), 查询消息 [ssl](../../module/ifs/ssl.md) 建立时的下层流对象 **

```JavaScript
readonly Stream SslSocket.stream;
```

## 成员函数
        
### connect
** 在给定的连接上连接 [ssl](../../module/ifs/ssl.md) 连接，客户端模式 **

```JavaScript
Integer SslSocket.connect(Stream s,
    String server_name = "") async;
```

调用参数:
* s: [Stream](Stream.md), 给定的底层连接
* server_name: String, 指定服务器名称，可缺省

返回结果:
* Integer, 连接成功返回 0，证书可选验证时，验证不成功则返回非 0，详细错误见 [ssl](../../module/ifs/ssl.md) 模块

--------------------------
### accept
** 在给定的连接上接收一个 [ssl](../../module/ifs/ssl.md) 连接，并生成一个新的 SslSocket **

```JavaScript
SslSocket SslSocket.accept(Stream s) async;
```

调用参数:
* s: [Stream](Stream.md), 给定的底层连接

返回结果:
* SslSocket, 返回新建立的 SslSocket 对象

--------------------------
### read
** 从流内读取指定大小的数据 **

```JavaScript
Buffer SslSocket.read(Integer bytes = -1) async;
```

调用参数:
* bytes: Integer, 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备

返回结果:
* [Buffer](Buffer.md), 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null

--------------------------
### write
** 将给定的数据写入流 **

```JavaScript
SslSocket.write(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 给定要写入的数据

--------------------------
### close
** 关闭当前流对象 **

```JavaScript
SslSocket.close() async;
```

--------------------------
### copyTo
** 复制流数据到目标流中 **

```JavaScript
Long SslSocket.copyTo(Stream stm,
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
SslSocket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean SslSocket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String SslSocket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value SslSocket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value SslSocket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

