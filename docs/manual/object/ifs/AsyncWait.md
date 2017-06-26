# 对象 AsyncWait
消息处理器异步等待对象

## 继承关系
<div class="inherits"><svg width="87pt" height="271pt" viewBox="0.00 0.00 86.78 271.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 267)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-267 82.777,-267 82.777,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="10.557,-174.5 10.557,-262.5 68.22,-262.5 68.22,-174.5 10.557,-174.5"/>
<text text-anchor="middle" x="39.3885" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="10.557,-242.5 68.22,-242.5 "/>
<text text-anchor="start" x="18.557" y="-229.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="18.557" y="-217.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="18.557" y="-205.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="18.557" y="-193.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="18.557" y="-181.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="0,-77.5 0,-137.5 78.777,-137.5 78.777,-77.5 0,-77.5"/>
<text text-anchor="middle" x="39.3885" y="-124.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="0,-117.5 78.777,-117.5 "/>
<text text-anchor="start" x="8" y="-104.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="0,-97.5 78.777,-97.5 "/>
<text text-anchor="start" x="8" y="-84.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M39.3885,-164.0719C39.3885,-154.9417 39.3885,-145.7729 39.3885,-137.5542"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-164.3109 39.3885,-174.3109 42.8886,-164.311 35.8886,-164.3109"/>
</g>
<!-- AsyncWait -->
<g id="node3" class="node">
<title>AsyncWait</title>
<g id="a_node3"><a xlink:title="AsyncWait">
<polygon fill="#d3d3d3" stroke="#000000" points="7.7765,-.5 7.7765,-40.5 71.0005,-40.5 71.0005,-.5 7.7765,-.5"/>
<text text-anchor="middle" x="39.3885" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">AsyncWait</text>
<polyline fill="none" stroke="#000000" points="7.7765,-20.5 71.0005,-20.5 "/>
<text text-anchor="start" x="15.7765" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">end()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;AsyncWait -->
<g id="edge2" class="edge">
<title>Handler-&gt;AsyncWait</title>
<path fill="none" stroke="#000000" d="M39.3885,-66.9382C39.3885,-57.8218 39.3885,-48.5324 39.3885,-40.6816"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-67.0716 39.3885,-77.0716 42.8886,-67.0717 35.8886,-67.0716"/>
</g>
</g>
</svg></div>

## 成员函数
        
### end
** 结束等待，继续处理消息 **

```JavaScript
AsyncWait.end();
```

--------------------------
### invoke
** 处理一个消息或对象 **

```JavaScript
Handler AsyncWait.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
AsyncWait.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean AsyncWait.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String AsyncWait.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value AsyncWait.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value AsyncWait.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

