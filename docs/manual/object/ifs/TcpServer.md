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
<div class="inherits"><svg width="214pt" height="558pt" viewBox="0.00 0.00 214.00 558.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 554)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-554 210,-554 210,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="77,-458 77,-550 134,-550 134,-458 77,-458"/>
<polygon fill="none" stroke="#000000" points="77.5,-528 77.5,-550 134.5,-550 134.5,-528 77.5,-528"/>
<text text-anchor="start" x="92.6625" y="-536" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="77.5,-458 77.5,-528 134.5,-528 134.5,-458 77.5,-458"/>
<text text-anchor="start" x="82.5" y="-514" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="82.5" y="-502" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="82.5" y="-490" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="82.5" y="-478" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="82.5" y="-466" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- TcpServer -->
<g id="node2" class="node">
<title>TcpServer</title>
<g id="a_node2"><a xlink:title="TcpServer">
<polygon fill="#d3d3d3" stroke="transparent" points="59.5,-286 59.5,-422 151.5,-422 151.5,-286 59.5,-286"/>
<polygon fill="none" stroke="#000000" points="59.5,-400 59.5,-422 151.5,-422 151.5,-400 59.5,-400"/>
<text text-anchor="start" x="82.4435" y="-408" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">TcpServer</text>
<polygon fill="none" stroke="#000000" points="59.5,-378 59.5,-400 151.5,-400 151.5,-378 59.5,-378"/>
<text text-anchor="start" x="64.5" y="-386" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new TcpServer()</text>
<polygon fill="none" stroke="#000000" points="59.5,-332 59.5,-378 151.5,-378 151.5,-332 59.5,-332"/>
<text text-anchor="start" x="64.5" y="-364" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> socket</text>
<text text-anchor="start" x="64.5" y="-352" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> handler</text>
<text text-anchor="start" x="64.5" y="-340" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stats</text>
<polygon fill="none" stroke="#000000" points="59.5,-286 59.5,-332 151.5,-332 151.5,-286 59.5,-286"/>
<text text-anchor="start" x="64.5" y="-318" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> run()</text>
<text text-anchor="start" x="64.5" y="-306" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> asyncRun()</text>
<text text-anchor="start" x="64.5" y="-294" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> stop()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;TcpServer -->
<g id="edge1" class="edge">
<title>object-&gt;TcpServer</title>
<path fill="none" stroke="#000000" d="M105.5,-447.7662C105.5,-439.4038 105.5,-430.7087 105.5,-422.1344"/>
<polygon fill="#000000" stroke="#000000" points="102.0001,-447.7711 105.5,-457.7711 109.0001,-447.7711 102.0001,-447.7711"/>
</g>
<!-- HttpServer -->
<g id="node3" class="node">
<title>HttpServer</title>
<g id="a_node3"><a xlink:href="HttpServer.md" xlink:title="HttpServer">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-250 99,-250 99,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points=".5,-228 .5,-250 99.5,-250 99.5,-228 .5,-228"/>
<text text-anchor="start" x="26.1095" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpServer</text>
<polygon fill="none" stroke="#000000" points=".5,-206 .5,-228 99.5,-228 99.5,-206 .5,-206"/>
<text text-anchor="start" x="5.5" y="-214" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpServer()</text>
<polygon fill="none" stroke="#000000" points=".5,-136 .5,-206 99.5,-206 99.5,-136 .5,-136"/>
<text text-anchor="start" x="5.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> crossDomain</text>
<text text-anchor="start" x="5.5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> forceGZIP</text>
<text text-anchor="start" x="5.5" y="-168" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxHeadersCount</text>
<text text-anchor="start" x="5.5" y="-156" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> maxUploadSize</text>
<text text-anchor="start" x="5.5" y="-144" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> httpStats</text>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-136 99.5,-136 99.5,-114 .5,-114"/>
<text text-anchor="start" x="5.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> onerror()</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;HttpServer -->
<g id="edge2" class="edge">
<title>TcpServer-&gt;HttpServer</title>
<path fill="none" stroke="#000000" d="M80.0773,-275.916C77.2876,-267.3475 74.4634,-258.6733 71.7169,-250.2376"/>
<polygon fill="#000000" stroke="#000000" points="76.7824,-277.1017 83.2064,-285.5268 83.4385,-274.9345 76.7824,-277.1017"/>
</g>
<!-- SslServer -->
<g id="node5" class="node">
<title>SslServer</title>
<g id="a_node5"><a xlink:href="SslServer.md" xlink:title="SslServer">
<polygon fill="#ffffff" stroke="transparent" points="117,-143 117,-221 206,-221 206,-143 117,-143"/>
<polygon fill="none" stroke="#000000" points="117.5,-199 117.5,-221 206.5,-221 206.5,-199 117.5,-199"/>
<text text-anchor="start" x="140.3335" y="-207" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">SslServer</text>
<polygon fill="none" stroke="#000000" points="117.5,-177 117.5,-199 206.5,-199 206.5,-177 117.5,-177"/>
<text text-anchor="start" x="122.5" y="-185" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new SslServer()</text>
<polygon fill="none" stroke="#000000" points="117.5,-143 117.5,-177 206.5,-177 206.5,-143 117.5,-143"/>
<text text-anchor="start" x="122.5" y="-163" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="122.5" y="-151" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
</a>
</g>
</g>
<!-- TcpServer&#45;&gt;SslServer -->
<g id="edge4" class="edge">
<title>TcpServer-&gt;SslServer</title>
<path fill="none" stroke="#000000" d="M130.9147,-275.9405C137.1131,-256.9026 143.4819,-237.3413 148.7922,-221.0311"/>
<polygon fill="#000000" stroke="#000000" points="127.5615,-274.9345 127.7936,-285.5268 134.2176,-277.1017 127.5615,-274.9345"/>
</g>
<!-- HttpsServer -->
<g id="node4" class="node">
<title>HttpsServer</title>
<g id="a_node4"><a xlink:href="HttpsServer.md" xlink:title="HttpsServer">
<polygon fill="#ffffff" stroke="transparent" points="0,0 0,-78 99,-78 99,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-56 .5,-78 99.5,-78 99.5,-56 .5,-56"/>
<text text-anchor="start" x="23.6095" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpsServer</text>
<polygon fill="none" stroke="#000000" points=".5,-34 .5,-56 99.5,-56 99.5,-34 .5,-34"/>
<text text-anchor="start" x="5.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new HttpsServer()</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-34 99.5,-34 99.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verification</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ca</text>
</a>
</g>
</g>
<!-- HttpServer&#45;&gt;HttpsServer -->
<g id="edge3" class="edge">
<title>HttpServer-&gt;HttpsServer</title>
<path fill="none" stroke="#000000" d="M49.5,-103.8187C49.5,-94.9595 49.5,-86.2382 49.5,-78.2054"/>
<polygon fill="#000000" stroke="#000000" points="46.0001,-103.8504 49.5,-113.8505 53.0001,-103.8505 46.0001,-103.8504"/>
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

