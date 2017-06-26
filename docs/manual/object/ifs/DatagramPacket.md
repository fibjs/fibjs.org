# 对象 DatagramPacket
UDP 数据包

## 继承关系
<div class="inherits"><svg width="98pt" height="198pt" viewBox="0.00 0.00 98.46 198.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 194)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-194 94.458,-194 94.458,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="16.3975,-101.5 16.3975,-189.5 74.0605,-189.5 74.0605,-101.5 16.3975,-101.5"/>
<text text-anchor="middle" x="45.229" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="16.3975,-169.5 74.0605,-169.5 "/>
<text text-anchor="start" x="24.3975" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="24.3975" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="24.3975" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="24.3975" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="24.3975" y="-108.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- DatagramPacket -->
<g id="node2" class="node">
<title>DatagramPacket</title>
<g id="a_node2"><a xlink:title="DatagramPacket">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-64.5 90.458,-64.5 90.458,-.5 0,-.5"/>
<text text-anchor="middle" x="45.229" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">DatagramPacket</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 90.458,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">address</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">port</text>
</a>
</g>
</g>
<!-- object&#45;&gt;DatagramPacket -->
<g id="edge1" class="edge">
<title>object-&gt;DatagramPacket</title>
<path fill="none" stroke="#000000" d="M45.229,-91.2875C45.229,-82.1784 45.229,-72.9898 45.229,-64.671"/>
<polygon fill="#000000" stroke="#000000" points="41.7291,-91.4876 45.229,-101.4877 48.7291,-91.4877 41.7291,-91.4876"/>
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

