# 对象 TcpServer
tcp 服务器对象，可方便创建一个标准多纤程 tcp 服务器

使用 TcpServer 对象可以迅速创建一个多纤程并发处理的 tcp 服务器。

```JavaScript
function func(conn) {
    var data;

    while (data = conn.read())
        conn.write(data);

    conn.close();
}

new net.TcpServer(8080, func).run();
```

## 继承关系
<div class="inherits"><svg width="212pt" height="536pt" viewBox="0.00 0.00 212.23 536.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 532)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-532 208.227,-532 208.227,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="75.842,-439.5 75.842,-527.5 133.505,-527.5 133.505,-439.5 75.842,-439.5"/>
<text text-anchor="middle" x="104.6735" y="-514.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="75.842,-507.5 133.505,-507.5 "/>
<text text-anchor="start" x="83.842" y="-494.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="83.842" y="-482.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="83.842" y="-470.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="83.842" y="-458.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="83.842" y="-446.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:title="TcpServer">
<polygon fill="#d3d3d3" stroke="#000000" points="59.73,-274.5 59.73,-402.5 149.617,-402.5 149.617,-274.5 59.73,-274.5"/>
<text text-anchor="middle" x="104.6735" y="-389.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polyline fill="none" stroke="#000000" points="59.73,-382.5 149.617,-382.5 "/>
<text text-anchor="start" x="67.73" y="-369.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new TcpServer()</text>
<polyline fill="none" stroke="#000000" points="59.73,-362.5 149.617,-362.5 "/>
<text text-anchor="start" x="67.73" y="-349.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">socket</text>
<text text-anchor="start" x="67.73" y="-337.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">handler</text>
<text text-anchor="start" x="67.73" y="-325.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stats</text>
<polyline fill="none" stroke="#000000" points="59.73,-318.5 149.617,-318.5 "/>
<text text-anchor="start" x="67.73" y="-305.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">run()</text>
<text text-anchor="start" x="67.73" y="-293.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">asyncRun()</text>
<text text-anchor="start" x="67.73" y="-281.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M104.6735,-429.2025C104.6735,-420.5059 104.6735,-411.4356 104.6735,-402.5377"/>
<polygon fill="#000000" stroke="#000000" points="101.1736,-429.2073 104.6735,-439.2073 108.1736,-429.2074 101.1736,-429.2073"/>
</g>
<!-- HttpServer -->
<g id="node3" class="node">
<title>HttpServer</title>
<g id="a_node3"><a xlink:href="HttpServer.md" xlink:title="HttpServer">
<polygon fill="#ffffff" stroke="#000000" points="0,-109.5 0,-237.5 99.347,-237.5 99.347,-109.5 0,-109.5"/>
<text text-anchor="middle" x="49.6735" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpServer</text>
<polyline fill="none" stroke="#000000" points="0,-217.5 99.347,-217.5 "/>
<text text-anchor="start" x="8" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpServer()</text>
<polyline fill="none" stroke="#000000" points="0,-197.5 99.347,-197.5 "/>
<text text-anchor="start" x="8" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">crossDomain</text>
<text text-anchor="start" x="8" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">forceGZIP</text>
<text text-anchor="start" x="8" y="-160.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxHeadersCount</text>
<text text-anchor="start" x="8" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">maxUploadSize</text>
<text text-anchor="start" x="8" y="-136.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">httpStats</text>
<polyline fill="none" stroke="#000000" points="0,-129.5 99.347,-129.5 "/>
<text text-anchor="start" x="8" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">onerror()</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;HttpServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;HttpServer</title>
<path fill="none" stroke="#000000" d="M80.0232,-264.5492C77.0253,-255.5554 73.9817,-246.4245 71.037,-237.5904"/>
<polygon fill="#000000" stroke="#000000" points="76.7688,-265.8542 83.2516,-274.2342 83.4096,-263.6406 76.7688,-265.8542"/>
</g>
<!-- SslServer -->
<g id="node5" class="node">
<title>SslServer</title>
<g id="a_node5"><a xlink:href="SslServer.md" xlink:title="SslServer">
<polygon fill="#ffffff" stroke="#000000" points="117.12,-137.5 117.12,-209.5 204.227,-209.5 204.227,-137.5 117.12,-137.5"/>
<text text-anchor="middle" x="160.6735" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslServer</text>
<polyline fill="none" stroke="#000000" points="117.12,-189.5 204.227,-189.5 "/>
<text text-anchor="start" x="125.12" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new SslServer()</text>
<polyline fill="none" stroke="#000000" points="117.12,-169.5 204.227,-169.5 "/>
<text text-anchor="start" x="125.12" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="125.12" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;SslServer -->
<g id="edge4" class="edge">
<title>TcpServer-&gt;SslServer</title>
<path fill="none" stroke="#000000" d="M129.739,-264.6463C136.2082,-245.5852 142.8887,-225.9016 148.3787,-209.7259"/>
<polygon fill="#000000" stroke="#000000" points="126.3845,-263.6399 126.4849,-274.2342 133.0132,-265.8896 126.3845,-263.6399"/>
</g>
<!-- HttpsServer -->
<g id="node4" class="node">
<title>HttpsServer</title>
<g id="a_node4"><a xlink:href="HttpsServer.md" xlink:title="HttpsServer">
<polygon fill="#ffffff" stroke="#000000" points="1.396,-.5 1.396,-72.5 97.951,-72.5 97.951,-.5 1.396,-.5"/>
<text text-anchor="middle" x="49.6735" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpsServer</text>
<polyline fill="none" stroke="#000000" points="1.396,-52.5 97.951,-52.5 "/>
<text text-anchor="start" x="9.396" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new HttpsServer()</text>
<polyline fill="none" stroke="#000000" points="1.396,-32.5 97.951,-32.5 "/>
<text text-anchor="start" x="9.396" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verification</text>
<text text-anchor="start" x="9.396" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ca</text>
</a>
</g>
</g>
<!-- HttpServer&#45;&gt;HttpsServer -->
<g id="edge3" class="edge">
<title>HttpServer-&gt;HttpsServer</title>
<path fill="none" stroke="#000000" d="M49.6735,-99.3022C49.6735,-90.0059 49.6735,-80.8505 49.6735,-72.5273"/>
<polygon fill="#000000" stroke="#000000" points="46.1736,-99.4123 49.6735,-109.4123 53.1736,-99.4124 46.1736,-99.4123"/>
</g>
</g>
</svg></div>

## 构造函数
        
### TcpServer
** TcpServer 构造函数，在所有本机地址侦听 **

```JavaScript
new TcpServer(Integer port,
    Handler listener);
```

调用参数:
* port: Integer, 指定 tcp 服务器侦听端口
* listener: [Handler](Handler.md), 指定 tcp 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
** TcpServer 构造函数 **

```JavaScript
new TcpServer(String addr,
    Integer port,
    Handler listener);
```

调用参数:
* addr: String, 指定 tcp 服务器侦听地址，为 "" 则在本机所有地址侦听
* port: Integer, 指定 tcp 服务器侦听端口
* listener: [Handler](Handler.md), 指定 tcp 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

## 成员属性
        
### socket
** [Socket](Socket.md), 服务器当前侦听的 [Socket](Socket.md) 对象 **

```JavaScript
readonly Socket TcpServer.socket;
```

--------------------------
### handler
** [Handler](Handler.md), 服务器当前事件处理接口对象 **

```JavaScript
Handler TcpServer.handler;
```

--------------------------
### stats
** [Stats](Stats.md), 查询当前服务器运行状态 **

```JavaScript
readonly Stats TcpServer.stats;
```

返回的结果为一个 [Stats](Stats.md) 对象，初始化计数器如下：

```JavaScript
{
    total: 1000, // 总计处理的连接
    connections: 100, // 当前正在处理的连接
    accept: 10, // 上次查询后新建的连接
    close: 10 // 上次查询后关闭的连接
}
```

## 成员函数
        
### run
** 运行服务器并开始接收和分发连接，此函数不会返回 **

```JavaScript
TcpServer.run() async;
```

--------------------------
### asyncRun
** 异步运行服务器并开始接收和分发连接，调用后立即返回，服务器在后台运行 **

```JavaScript
TcpServer.asyncRun();
```

--------------------------
### stop
** 关闭 socket中止正在运行的服务器 **

```JavaScript
TcpServer.stop() async;
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
TcpServer.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean TcpServer.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String TcpServer.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value TcpServer.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value TcpServer.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

