# 对象 DatagramPacket
UDP 数据包

## 继承关系
<div class="inherits"><svg width="92pt" height="204pt" viewBox="0.00 0.00 92.00 204.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 200)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-200 88,-200 88,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="13.5,-104 13.5,-196 70.5,-196 70.5,-104 13.5,-104"/>
<polygon fill="none" stroke="#000000" points="14,-174 14,-196 71,-196 71,-174 14,-174"/>
<text text-anchor="start" x="29.1625" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="14,-104 14,-174 71,-174 71,-104 14,-104"/>
<text text-anchor="start" x="19" y="-160" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="19" y="-148" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="19" y="-136" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="19" y="-124" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="19" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- DatagramPacket -->
<g id="node2" class="node">
<title>DatagramPacket</title>
<g id="a_node2"><a xlink:title="DatagramPacket">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-68 84,-68 84,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-46 0,-68 84,-68 84,-46 0,-46"/>
<text text-anchor="start" x="4.771" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DatagramPacket</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-46 84,-46 84,0 0,0"/>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> address</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> port</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DatagramPacket -->
<g id="edge1" class="edge">
<title>object-&gt;DatagramPacket</title>
<path fill="none" stroke="#000000" d="M42,-93.6813C42,-84.9846 42,-76.2375 42,-68.2229"/>
<polygon fill="#000000" stroke="#000000" points="38.5001,-93.8204 42,-103.8204 45.5001,-93.8205 38.5001,-93.8204"/>
</g>
</g>
</svg></div>

## 成员属性
        
### data
** [Buffer](Buffer.md), 查询返回的数据 **

```JavaScript
readonly Buffer DatagramPacket.data;
```

--------------------------
### address
** String, 查询数据包来源地址 **

```JavaScript
readonly String DatagramPacket.address;
```

--------------------------
### port
** Integer, 查询数据包来源端口 **

```JavaScript
readonly Integer DatagramPacket.port;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
DatagramPacket.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean DatagramPacket.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String DatagramPacket.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value DatagramPacket.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value DatagramPacket.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

