# 对象 ZipInfo
[zip](../../module/ifs/zip.md) 文件访问对象

## 继承关系
<div class="inherits"><svg width="92pt" height="246pt" viewBox="0.00 0.00 91.79 246.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 242)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-242 87.791,-242 87.791,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="13.064,-149.5 13.064,-237.5 70.727,-237.5 70.727,-149.5 13.064,-149.5"/>
<text text-anchor="middle" x="41.8955" y="-224.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="13.064,-217.5 70.727,-217.5 "/>
<text text-anchor="start" x="21.064" y="-204.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="21.064" y="-192.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="21.064" y="-180.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="21.064" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="21.064" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- ZipInfo -->
<g id="node2" class="node">
<title>ZipInfo</title>
<g id="a_node2"><a xlink:title="ZipInfo">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-112.5 83.791,-112.5 83.791,-.5 0,-.5"/>
<text text-anchor="middle" x="41.8955" y="-99.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ZipInfo</text>
<polyline fill="none" stroke="#000000" points="0,-92.5 83.791,-92.5 "/>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">filename</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">date</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">compress_type</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">compress_size</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">file_size</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">password</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">data</text>
</a>
</g>
</g>
<!-- object&#45;&gt;ZipInfo -->
<g id="edge1" class="edge">
<title>object-&gt;ZipInfo</title>
<path fill="none" stroke="#000000" d="M41.8955,-139.2743C41.8955,-130.4908 41.8955,-121.3795 41.8955,-112.5536"/>
<polygon fill="#000000" stroke="#000000" points="38.3956,-139.3982 41.8955,-149.3982 45.3956,-139.3983 38.3956,-139.3982"/>
</g>
</g>
</svg></div>

## 成员属性
        
### filename
** String, 只读属性成员, 文件名 **

```JavaScript
readonly String ZipInfo.filename;
```

--------------------------
### date
** Date, 只读属性成员, 文件日期 **

```JavaScript
readonly Date ZipInfo.date;
```

--------------------------
### compress_type
** String, 只读属性成员, 文件压缩类型 **

```JavaScript
readonly String ZipInfo.compress_type;
```

--------------------------
### compress_size
** Long, 只读属性成员, 文件压缩后大小 **

```JavaScript
readonly Long ZipInfo.compress_size;
```

--------------------------
### file_size
** Long, 只读属性成员, 文件大小 **

```JavaScript
readonly Long ZipInfo.file_size;
```

--------------------------
### password
** Boolean, 只读属性成员, 密码 **

```JavaScript
readonly Boolean ZipInfo.password;
```

--------------------------
### data
** [Buffer](Buffer.md), 只读属性成员, 文件数据 **

```JavaScript
readonly Buffer ZipInfo.data;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
ZipInfo.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean ZipInfo.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String ZipInfo.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value ZipInfo.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value ZipInfo.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

