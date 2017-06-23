# 对象 MongoID
mongodb 数据库数据唯一标识对象，用于存储传递 oid

## 继承关系
<div class="inherits"><svg width="65pt" height="172pt" viewBox="0.00 0.00 65.00 172.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 168)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-168 61,-168 61,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="0,-72 0,-164 57,-164 57,-72 0,-72"/>
<polygon fill="none" stroke="#000000" points=".5,-142 .5,-164 57.5,-164 57.5,-142 .5,-142"/>
<text text-anchor="start" x="15.6625" y="-150" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points=".5,-72 .5,-142 57.5,-142 57.5,-72 .5,-72"/>
<text text-anchor="start" x="5.5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="5.5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="5.5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="5.5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- MongoID -->
<g id="node2" class="node">
<title>MongoID</title>
<g id="a_node2"><a xlink:title="MongoID">
<polygon fill="#d3d3d3" stroke="transparent" points="3.5,-7 3.5,-29 53.5,-29 53.5,-7 3.5,-7"/>
<polygon fill="none" stroke="#000000" points="3.5,-7 3.5,-29 53.5,-29 53.5,-7 3.5,-7"/>
<text text-anchor="start" x="8.2185" y="-15" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">MongoID</text>
</a>
</g>
</g>
<!-- object&#45;&gt;MongoID -->
<g id="edge1" class="edge">
<title>object-&gt;MongoID</title>
<path fill="none" stroke="#000000" d="M28.5,-61.684C28.5,-52.4061 28.5,-43.4231 28.5,-36.0405"/>
<polygon fill="#000000" stroke="#000000" points="25.0001,-61.8053 28.5,-71.8053 32.0001,-61.8054 25.0001,-61.8053"/>
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

