# 对象 Chain
消息处理器链处理对象

消息处理器链处理对象用于链接一系列消息处理器，按照指定的顺序链式处理。创建方法：

```JavaScript
var chain = new mq.Chain([
    func1, func2
]);
```

## 继承关系
<div class="inherits"><svg width="87pt" height="291pt" viewBox="0.00 0.00 86.78 291.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 287)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-287 82.777,-287 82.777,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="10.557,-194.5 10.557,-282.5 68.22,-282.5 68.22,-194.5 10.557,-194.5"/>
<text text-anchor="middle" x="39.3885" y="-269.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="10.557,-262.5 68.22,-262.5 "/>
<text text-anchor="start" x="18.557" y="-249.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="18.557" y="-237.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="18.557" y="-225.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="18.557" y="-213.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="18.557" y="-201.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="#000000" points="0,-97.5 0,-157.5 78.777,-157.5 78.777,-97.5 0,-97.5"/>
<text text-anchor="middle" x="39.3885" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polyline fill="none" stroke="#000000" points="0,-137.5 78.777,-137.5 "/>
<text text-anchor="start" x="8" y="-124.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Handler()</text>
<polyline fill="none" stroke="#000000" points="0,-117.5 78.777,-117.5 "/>
<text text-anchor="start" x="8" y="-104.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M39.3885,-184.0719C39.3885,-174.9417 39.3885,-165.7729 39.3885,-157.5542"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-184.3109 39.3885,-194.3109 42.8886,-184.311 35.8886,-184.3109"/>
</g>
<!-- Chain -->
<g id="node3" class="node">
<title>Chain</title>
<g id="a_node3"><a xlink:title="Chain">
<polygon fill="#d3d3d3" stroke="#000000" points="4.444,-.5 4.444,-60.5 74.333,-60.5 74.333,-.5 4.444,-.5"/>
<text text-anchor="middle" x="39.3885" y="-47.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Chain</text>
<polyline fill="none" stroke="#000000" points="4.444,-40.5 74.333,-40.5 "/>
<text text-anchor="start" x="12.444" y="-27.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Chain()</text>
<polyline fill="none" stroke="#000000" points="4.444,-20.5 74.333,-20.5 "/>
<text text-anchor="start" x="12.444" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">append()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;Chain -->
<g id="edge2" class="edge">
<title>Handler-&gt;Chain</title>
<path fill="none" stroke="#000000" d="M39.3885,-87.1653C39.3885,-78.2876 39.3885,-69.0341 39.3885,-60.641"/>
<polygon fill="#000000" stroke="#000000" points="35.8886,-87.3403 39.3885,-97.3403 42.8886,-87.3403 35.8886,-87.3403"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Chain
** 构造一个消息处理器链处理对象 **

```JavaScript
new Chain(Array hdlrs);
```

调用参数:
* hdlrs: Array, 处理器数组

## 成员函数
        
### append
** 添加处理器数组 **

```JavaScript
Chain.append(Array hdlrs);
```

调用参数:
* hdlrs: Array, 处理器数组

--------------------------
** 添加处理器 **

```JavaScript
Chain.append(Handler hdlr);
```

调用参数:
* hdlr: [Handler](Handler.md), 内置消息处理器，处理函数，链式处理数组，路由对象，详见 [mq](../../module/ifs/mq.md).[Handler](Handler.md)

--------------------------
### invoke
** 处理一个消息或对象 **

```JavaScript
Handler Chain.invoke(object v) async;
```

调用参数:
* v: [object](object.md), 指定处理的消息或对象

返回结果:
* Handler, 返回下一步的处理器

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Chain.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Chain.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Chain.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Chain.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Chain.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

