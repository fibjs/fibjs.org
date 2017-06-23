# 对象 AsyncWait
消息处理器异步等待对象

## 继承关系
<div class="inherits"><svg width="89pt" height="282pt" viewBox="0.00 0.00 89.00 282.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 278)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-278 85,-278 85,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="12,-182 12,-274 69,-274 69,-182 12,-182"/>
<polygon fill="none" stroke="#000000" points="12.5,-252 12.5,-274 69.5,-274 69.5,-252 12.5,-252"/>
<text text-anchor="start" x="27.6625" y="-260" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="12.5,-182 12.5,-252 69.5,-252 69.5,-182 12.5,-182"/>
<text text-anchor="start" x="17.5" y="-238" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="17.5" y="-226" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="17.5" y="-214" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="17.5" y="-202" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="17.5" y="-190" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Handler -->
<g id="node2" class="node">
<title>Handler</title>
<g id="a_node2"><a xlink:href="Handler.md" xlink:title="Handler">
<polygon fill="#ffffff" stroke="transparent" points="0,-80 0,-146 81,-146 81,-80 0,-80"/>
<polygon fill="none" stroke="#000000" points=".5,-124 .5,-146 81.5,-146 81.5,-124 .5,-124"/>
<text text-anchor="start" x="23.4985" y="-132" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Handler</text>
<polygon fill="none" stroke="#000000" points=".5,-102 .5,-124 81.5,-124 81.5,-102 .5,-102"/>
<text text-anchor="start" x="5.5" y="-110" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Handler()</text>
<polygon fill="none" stroke="#000000" points=".5,-80 .5,-102 81.5,-102 81.5,-80 .5,-80"/>
<text text-anchor="start" x="5.5" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> invoke()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Handler -->
<g id="edge1" class="edge">
<title>object-&gt;Handler</title>
<path fill="none" stroke="#000000" d="M40.5,-171.6502C40.5,-162.8735 40.5,-154.0612 40.5,-146.0314"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-171.8877 40.5,-181.8877 44.0001,-171.8878 37.0001,-171.8877"/>
</g>
<!-- AsyncWait -->
<g id="node3" class="node">
<title>AsyncWait</title>
<g id="a_node3"><a xlink:title="AsyncWait">
<polygon fill="#d3d3d3" stroke="transparent" points="12,0 12,-44 69,-44 69,0 12,0"/>
<polygon fill="none" stroke="#000000" points="12.5,-22 12.5,-44 69.5,-44 69.5,-22 12.5,-22"/>
<text text-anchor="start" x="17.388" y="-30" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">AsyncWait</text>
<polygon fill="none" stroke="#000000" points="12.5,0 12.5,-22 69.5,-22 69.5,0 12.5,0"/>
<text text-anchor="start" x="17.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> end()</text>
</a>
</g>
</g>
<!-- Handler&#45;&gt;AsyncWait -->
<g id="edge2" class="edge">
<title>Handler-&gt;AsyncWait</title>
<path fill="none" stroke="#000000" d="M40.5,-69.6461C40.5,-60.8096 40.5,-51.865 40.5,-44.1493"/>
<polygon fill="#000000" stroke="#000000" points="37.0001,-69.8895 40.5,-79.8895 44.0001,-69.8895 37.0001,-69.8895"/>
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

