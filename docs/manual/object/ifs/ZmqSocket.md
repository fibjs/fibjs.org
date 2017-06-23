# 对象 ZmqSocket
ZeroMQ 套接口对象

## 继承关系
<div class="inherits"><svg width="105pt" height="272pt" viewBox="0.00 0.00 105.00 272.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 268)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-268 101,-268 101,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="20,-172 20,-264 77,-264 77,-172 20,-172"/>
<polygon fill="none" stroke="#000000" points="20.5,-242 20.5,-264 77.5,-264 77.5,-242 20.5,-242"/>
<text text-anchor="start" x="35.6625" y="-250" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="20.5,-172 20.5,-242 77.5,-242 77.5,-172 20.5,-172"/>
<text text-anchor="start" x="25.5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="25.5" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="25.5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="25.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="25.5" y="-180" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- ZmqSocket -->
<g id="node2" class="node">
<title>ZmqSocket</title>
<g id="a_node2"><a xlink:title="ZmqSocket">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-136 97,-136 97,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-136 97.5,-136 97.5,-114 .5,-114"/>
<text text-anchor="start" x="23.7185" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ZmqSocket</text>
<polygon fill="none" stroke="#000000" points=".5,-92 .5,-114 97.5,-114 97.5,-92 .5,-92"/>
<text text-anchor="start" x="5.5" y="-100" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new ZmqSocket()</text>
<polygon fill="none" stroke="#000000" points=".5,-70 .5,-92 97.5,-92 97.5,-70 .5,-70"/>
<text text-anchor="start" x="5.5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> type</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-70 97.5,-70 97.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> bind()</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> connect()</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> recv()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> send()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> close()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;ZmqSocket -->
<g id="edge1" class="edge">
<title>object-&gt;ZmqSocket</title>
<path fill="none" stroke="#000000" d="M48.5,-161.7662C48.5,-153.4038 48.5,-144.7087 48.5,-136.1344"/>
<polygon fill="#000000" stroke="#000000" points="45.0001,-161.7711 48.5,-171.7711 52.0001,-161.7711 45.0001,-161.7711"/>
</g>
</g>
</svg></div>

## 构造函数
        
### ZmqSocket
** ZmqSocket 对象构造函数 **

```JavaScript
new ZmqSocket(Integer type = zmq.PAIR);
```

调用参数:
* type: Integer, 指定 socket 类型，缺省为 [zmq](../../module/ifs/zmq.md).PAIR

## 成员属性
        
### type
** Integer, 查询当前 socket 类型 **

```JavaScript
readonly Integer ZmqSocket.type;
```

## 成员函数
        
### bind
** 绑定指定地址和端口 **

```JavaScript
ZmqSocket.bind(String addr);
```

调用参数:
* addr: String, 指定绑定的地址，如："tcp://*:3000"

--------------------------
### connect
** 连接到指定地址的服务器 **

```JavaScript
ZmqSocket.connect(String addr);
```

调用参数:
* addr: String, 指定连接的地址，如："tcp://*:3000"

--------------------------
### recv
** 接收一个数据包 **

```JavaScript
Buffer ZmqSocket.recv() async;
```

返回结果:
* [Buffer](Buffer.md), 返回接收到的数据包

--------------------------
### send
** 发送一个数据包 **

```JavaScript
ZmqSocket.send(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 指定发送的数据包

--------------------------
### close
** 关闭当前 socket **

```JavaScript
ZmqSocket.close();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
ZmqSocket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean ZmqSocket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String ZmqSocket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value ZmqSocket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value ZmqSocket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

