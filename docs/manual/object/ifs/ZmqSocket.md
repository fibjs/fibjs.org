# 对象 ZmqSocket
ZeroMQ 套接口对象

## 继承关系
<div class="inherits"><svg width="102pt" height="262pt" viewBox="0.00 0.00 102.34 262.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 258)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-258 98.337,-258 98.337,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="18.337,-165.5 18.337,-253.5 76,-253.5 76,-165.5 18.337,-165.5"/>
<text text-anchor="middle" x="47.1685" y="-240.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="18.337,-233.5 76,-233.5 "/>
<text text-anchor="start" x="26.337" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="26.337" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="26.337" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="26.337" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="26.337" y="-172.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- ZmqSocket -->
<g id="node2" class="node">
<title>ZmqSocket</title>
<g id="a_node2"><a xlink:title="ZmqSocket">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-128.5 94.337,-128.5 94.337,-.5 0,-.5"/>
<text text-anchor="middle" x="47.1685" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ZmqSocket</text>
<polyline fill="none" stroke="#000000" points="0,-108.5 94.337,-108.5 "/>
<text text-anchor="start" x="8" y="-95.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new ZmqSocket()</text>
<polyline fill="none" stroke="#000000" points="0,-88.5 94.337,-88.5 "/>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">type</text>
<polyline fill="none" stroke="#000000" points="0,-68.5 94.337,-68.5 "/>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">bind()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">connect()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">recv()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">send()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">close()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;ZmqSocket -->
<g id="edge1" class="edge">
<title>object-&gt;ZmqSocket</title>
<path fill="none" stroke="#000000" d="M47.1685,-155.2025C47.1685,-146.5059 47.1685,-137.4356 47.1685,-128.5377"/>
<polygon fill="#000000" stroke="#000000" points="43.6686,-155.2073 47.1685,-165.2073 50.6686,-155.2074 43.6686,-155.2073"/>
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

