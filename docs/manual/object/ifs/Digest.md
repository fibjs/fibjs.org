# 对象 Digest
信息摘要对象

## 继承关系
<div class="inherits"><svg width="65pt" height="214pt" viewBox="0.00 0.00 65.00 214.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 210)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-210 61,-210 61,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="0,-114 0,-206 57,-206 57,-114 0,-114"/>
<polygon fill="none" stroke="#000000" points=".5,-184 .5,-206 57.5,-206 57.5,-184 .5,-184"/>
<text text-anchor="start" x="15.6625" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points=".5,-114 .5,-184 57.5,-184 57.5,-114 .5,-114"/>
<text text-anchor="start" x="5.5" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="5.5" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="5.5" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="5.5" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="5.5" y="-122" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Digest -->
<g id="node2" class="node">
<title>Digest</title>
<g id="a_node2"><a xlink:title="Digest">
<polygon fill="#d3d3d3" stroke="transparent" points="2,0 2,-78 55,-78 55,0 2,0"/>
<polygon fill="none" stroke="#000000" points="2.5,-56 2.5,-78 55.5,-78 55.5,-56 2.5,-56"/>
<text text-anchor="start" x="14.8325" y="-64" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Digest</text>
<polygon fill="none" stroke="#000000" points="2.5,-34 2.5,-56 55.5,-56 55.5,-34 2.5,-34"/>
<text text-anchor="start" x="7.5" y="-42" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> size</text>
<polygon fill="none" stroke="#000000" points="2.5,0 2.5,-34 55.5,-34 55.5,0 2.5,0"/>
<text text-anchor="start" x="7.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> update()</text>
<text text-anchor="start" x="7.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> digest()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Digest -->
<g id="edge1" class="edge">
<title>object-&gt;Digest</title>
<path fill="none" stroke="#000000" d="M28.5,-103.852C28.5,-95.2011 28.5,-86.4309 28.5,-78.2539"/>
<polygon fill="#000000" stroke="#000000" points="25.0001,-103.9099 28.5,-113.9099 32.0001,-103.9099 25.0001,-103.9099"/>
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

