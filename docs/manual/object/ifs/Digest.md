# 对象 Digest
信息摘要对象

## 继承关系
<div class="inherits"><svg width="66pt" height="206pt" viewBox="0.00 0.00 65.66 206.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 202)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-202 61.663,-202 61.663,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="0,-109.5 0,-197.5 57.663,-197.5 57.663,-109.5 0,-109.5"/>
<text text-anchor="middle" x="28.8315" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="0,-177.5 57.663,-177.5 "/>
<text text-anchor="start" x="8" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="8" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="8" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="8" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="8" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Digest -->
<g id="node2" class="node">
<title>Digest</title>
<g id="a_node2"><a xlink:title="Digest">
<polygon fill="#d3d3d3" stroke="#000000" points="1.8315,-.5 1.8315,-72.5 55.8315,-72.5 55.8315,-.5 1.8315,-.5"/>
<text text-anchor="middle" x="28.4475" y="-59.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Digest</text>
<polyline fill="none" stroke="#000000" points="1.8315,-52.5 55.0635,-52.5 "/>
<text text-anchor="start" x="9.8315" y="-39.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">size</text>
<polyline fill="none" stroke="#000000" points="1.8315,-32.5 55.0635,-32.5 "/>
<text text-anchor="start" x="9.8315" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">update()</text>
<text text-anchor="start" x="9.8315" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">digest()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Digest -->
<g id="edge1" class="edge">
<title>object-&gt;Digest</title>
<path fill="none" stroke="#000000" d="M28.8315,-99.2465C28.8315,-90.2805 28.8315,-81.1808 28.8315,-72.7957"/>
<polygon fill="#000000" stroke="#000000" points="25.3316,-99.2673 28.8315,-109.2673 32.3316,-99.2674 25.3316,-99.2673"/>
</g>
</g>
</svg></div>

## 成员属性
        
### size
** Integer, 查询当前信息摘要算法的摘要字节数 **

```JavaScript
readonly Integer Digest.size;
```

## 成员函数
        
### update
** 更新二进制摘要信息 **

```JavaScript
Digest.update(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 二进制数据块

--------------------------
### digest
** 计算并返回摘要 **

```JavaScript
Buffer Digest.digest(Buffer data);
```

调用参数:
* data: [Buffer](Buffer.md), 二进制数据块，此数据块将在计算前更新进摘要

返回结果:
* [Buffer](Buffer.md), 返回摘要的二进制数据

--------------------------
** 计算并返回摘要 **

```JavaScript
Buffer Digest.digest();
```

返回结果:
* [Buffer](Buffer.md), 返回摘要的二进制数据

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Digest.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Digest.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Digest.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Digest.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Digest.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

