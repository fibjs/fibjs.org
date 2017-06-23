# 对象 ZipInfo
[zip](../../module/ifs/zip.md) 文件访问对象

## 继承关系
<div class="inherits"><svg width="91pt" height="252pt" viewBox="0.00 0.00 91.00 252.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 248)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-248 87,-248 87,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="13,-152 13,-244 70,-244 70,-152 13,-152"/>
<polygon fill="none" stroke="#000000" points="13.5,-222 13.5,-244 70.5,-244 70.5,-222 13.5,-222"/>
<text text-anchor="start" x="28.6625" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="13.5,-152 13.5,-222 70.5,-222 70.5,-152 13.5,-152"/>
<text text-anchor="start" x="18.5" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="18.5" y="-196" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="18.5" y="-184" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="18.5" y="-172" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="18.5" y="-160" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- ZipInfo -->
<g id="node2" class="node">
<title>ZipInfo</title>
<g id="a_node2"><a xlink:title="ZipInfo">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-116 83,-116 83,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-94 .5,-116 83.5,-116 83.5,-94 .5,-94"/>
<text text-anchor="start" x="26.7185" y="-102" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ZipInfo</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-94 83.5,-94 83.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> filename</text>
<text text-anchor="start" x="5.5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> date</text>
<text text-anchor="start" x="5.5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> compress_type</text>
<text text-anchor="start" x="5.5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> compress_size</text>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> file_size</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> password</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> data</text>
</a>
</g>
</g>
<!-- object&#45;&gt;ZipInfo -->
<g id="edge1" class="edge">
<title>object-&gt;ZipInfo</title>
<path fill="none" stroke="#000000" d="M41.5,-141.7612C41.5,-133.4172 41.5,-124.8016 41.5,-116.4142"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-141.7707 41.5,-151.7708 45.0001,-141.7708 38.0001,-141.7707"/>
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

