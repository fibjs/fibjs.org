# 对象 HttpUploadData
包含 multipart 的一个条目数据

## 继承关系
<div class="inherits"><svg width="136pt" height="210pt" viewBox="0.00 0.00 135.70 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 206)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-206 131.7,-206 131.7,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="35.0185,-113.5 35.0185,-201.5 92.6815,-201.5 92.6815,-113.5 35.0185,-113.5"/>
<text text-anchor="middle" x="63.85" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="35.0185,-181.5 92.6815,-181.5 "/>
<text text-anchor="start" x="43.0185" y="-168.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="43.0185" y="-156.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="43.0185" y="-144.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="43.0185" y="-132.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="43.0185" y="-120.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- HttpUploadData -->
<g id="node2" class="node">
<title>HttpUploadData</title>
<g id="a_node2"><a xlink:title="HttpUploadData">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-76.5 127.7,-76.5 127.7,-.5 0,-.5"/>
<text text-anchor="middle" x="63.85" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">HttpUploadData</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 127.7,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">fileName</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">contentType</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">contentTransferEncoding</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">body</text>
</a>
</g>
</g>
<!-- object&#45;&gt;HttpUploadData -->
<g id="edge1" class="edge">
<title>object-&gt;HttpUploadData</title>
<path fill="none" stroke="#000000" d="M63.85,-103.1681C63.85,-94.1942 63.85,-85.0623 63.85,-76.5973"/>
<polygon fill="#000000" stroke="#000000" points="60.3501,-103.1888 63.85,-113.1888 67.3501,-103.1888 60.3501,-103.1888"/>
</g>
</g>
</svg></div>

## 成员属性
        
### fileName
** String, 包含本条目数据的文件名 **

```JavaScript
readonly String HttpUploadData.fileName;
```

--------------------------
### contentType
** String, 包含本条目数据的类型 **

```JavaScript
readonly String HttpUploadData.contentType;
```

--------------------------
### contentTransferEncoding
** String, 包含本条目数据的传输编码类型 **

```JavaScript
readonly String HttpUploadData.contentTransferEncoding;
```

--------------------------
### body
** [SeekableStream](SeekableStream.md), 包含本条目数据部分的流对象 **

```JavaScript
readonly SeekableStream HttpUploadData.body;
```

## 成员函数
        
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
HttpUploadData.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean HttpUploadData.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String HttpUploadData.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value HttpUploadData.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value HttpUploadData.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

