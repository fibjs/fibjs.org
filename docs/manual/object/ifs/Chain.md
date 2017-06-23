# 对象 Chain
消息处理器链处理对象

消息处理器链处理对象用于链接一系列消息处理器，按照指定的顺序链式处理。创建方法：

```JavaScript
var chain = new mq.Chain([
    func1, func2
]);
```

## 继承关系
<div class="inherits"><svg width="89pt" height="304pt" viewBox="0.00 0.00 89.00 304.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 300)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-300 85,-300 85,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="12,-204 12,-296 69,-296 69,-204 12,-204"/>
<polygon fill="none" stroke="#000000" points="12.5,-274 12.5,-296 69.5,-296 69.5,-274 12.5,-274"/>
<text text-anchor="start" x="27.6625" y="-282" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="12.5,-204 12.5,-274 69.5,-274 69.5,-204 12.5,-204"/>
<text text-anchor="start" x="17.5" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="17.5" y="-248" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="17.5" y="-236" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="17.5" y="-224" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="17.5" y="-212" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="0,-102 0,-168 81,-168 81,-102 0,-102"/>
<polygon fill="none" stroke="#000000" points=".5,-146 .5,-168 81.5,-168 81.5,-146 .5,-146"/>
<text text-anchor="start" x="23.4985" y="-154" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points=".5,-124 .5,-146 81.5,-146 81.5,-124 .5,-124"/>
<text text-anchor="start" x="5.5" y="-132" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points=".5,-102 .5,-124 81.5,-124 81.5,-102 .5,-102"/>
<text text-anchor="start" x="5.5" y="-110" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M40.5,-193.6502C40.5,-184.8735 40.5,-176.0612 40.5,-168.0314"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-193.8877 40.5,-203.8877 44.0001,-193.8878 37.0001,-193.8877"/>
</g>
<!-- Chain -->
<g id="node3" class="node">
<title>Chain</title>
<g id="a_node3"><a xlink:title="Chain">
<polygon fill="#d3d3d3" stroke="transparent" points="4.5,0 4.5,-66 76.5,-66 76.5,0 4.5,0"/>
<polygon fill="none" stroke="#000000" points="4.5,-44 4.5,-66 76.5,-66 76.5,-44 4.5,-44"/>
<text text-anchor="start" x="27.4425" y="-52" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Chain</text>
<polygon fill="none" stroke="#000000" points="4.5,-22 4.5,-44 76.5,-44 76.5,-22 4.5,-22"/>
<text text-anchor="start" x="9.5" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Chain()</text>
<polygon fill="none" stroke="#000000" points="4.5,0 4.5,-22 76.5,-22 76.5,0 4.5,0"/>
<text text-anchor="start" x="9.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> append()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;Chain -->
<g id="edge2" class="edge">
<title>Handler-&gt;Chain</title>
<path fill="none" stroke="#000000" d="M40.5,-91.7197C40.5,-83.2142 40.5,-74.4154 40.5,-66.2994"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-91.8835 40.5,-101.8835 44.0001,-91.8836 37.0001,-91.8835"/>
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

