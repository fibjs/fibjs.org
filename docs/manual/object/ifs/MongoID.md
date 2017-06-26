# 对象 MongoID
mongodb 数据库数据唯一标识对象，用于存储传递 oid

## 继承关系
<div class="inherits"><svg width="66pt" height="170pt" viewBox="0.00 0.00 65.66 170.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 166)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-166 61.663,-166 61.663,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="0,-73.5 0,-161.5 57.663,-161.5 57.663,-73.5 0,-73.5"/>
<text text-anchor="middle" x="28.8315" y="-148.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="0,-141.5 57.663,-141.5 "/>
<text text-anchor="start" x="8" y="-128.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="8" y="-116.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="8" y="-104.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="8" y="-92.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="8" y="-80.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- MongoID -->
<g id="node2" class="node">
<title>MongoID</title>
<g id="a_node2"><a xlink:title="MongoID">
<polygon fill="#d3d3d3" stroke="#000000" points=".55,-.5 .55,-36.5 57.113,-36.5 57.113,-.5 .55,-.5"/>
<text text-anchor="middle" x="28.8315" y="-15.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MongoID</text>
</a>
</g>
</g>
<!-- object&#45;&gt;MongoID -->
<g id="edge1" class="edge">
<title>object-&gt;MongoID</title>
<path fill="none" stroke="#000000" d="M28.8315,-63.0034C28.8315,-53.6233 28.8315,-44.485 28.8315,-36.9543"/>
<polygon fill="#000000" stroke="#000000" points="25.3316,-63.2121 28.8315,-73.2121 32.3316,-63.2121 25.3316,-63.2121"/>
</g>
</g>
</svg></div>

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
MongoID.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean MongoID.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String MongoID.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value MongoID.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value MongoID.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

