# 对象 X509Crl
x509 撤销证书对象

X509Crl 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Crl();
```

## 继承关系
<div class="inherits"><svg width="88pt" height="230pt" viewBox="0.00 0.00 87.89 230.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 226)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-226 83.887,-226 83.887,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="11.112,-133.5 11.112,-221.5 68.775,-221.5 68.775,-133.5 11.112,-133.5"/>
<text text-anchor="middle" x="39.9435" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="11.112,-201.5 68.775,-201.5 "/>
<text text-anchor="start" x="19.112" y="-188.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="19.112" y="-176.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="19.112" y="-164.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="19.112" y="-152.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="19.112" y="-140.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- X509Crl -->
<g id="node2" class="node">
<title>X509Crl</title>
<g id="a_node2"><a xlink:title="X509Crl">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-96.5 79.887,-96.5 79.887,-.5 0,-.5"/>
<text text-anchor="middle" x="39.9435" y="-83.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">X509Crl</text>
<polyline fill="none" stroke="#000000" points="0,-76.5 79.887,-76.5 "/>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new X509Crl()</text>
<polyline fill="none" stroke="#000000" points="0,-56.5 79.887,-56.5 "/>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">load()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">loadFile()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dump()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;X509Crl -->
<g id="edge1" class="edge">
<title>object-&gt;X509Crl</title>
<path fill="none" stroke="#000000" d="M39.9435,-123.2875C39.9435,-114.4791 39.9435,-105.4079 39.9435,-96.7541"/>
<polygon fill="#000000" stroke="#000000" points="36.4436,-123.4663 39.9435,-133.4663 43.4436,-123.4664 36.4436,-123.4663"/>
</g>
</g>
</svg></div>

## 构造函数
        
### X509Crl
** X509Crl 构造函数 **

```JavaScript
new X509Crl();
```

## 成员函数
        
### load
** 加载一个 DER 格式的撤销证书，可多次调用 **

```JavaScript
X509Crl.load(Buffer derCrl);
```

调用参数:
* derCrl: [Buffer](Buffer.md), DER 格式的撤销证书

--------------------------
** 加载一个 PEM 格式的撤销证书，可多次调用 **

```JavaScript
X509Crl.load(String pemCrl);
```

调用参数:
* pemCrl: String, PEM 格式的撤销证书

--------------------------
### loadFile
** 加载一个 PEM/DER 格式的撤销证书，可多次调用 **

```JavaScript
X509Crl.loadFile(String filename);
```

调用参数:
* filename: String, 撤销证书文件名

--------------------------
### dump
** 导出已经加载的撤销证书 **

```JavaScript
Array X509Crl.dump();
```

返回结果:
* Array, 以数组方式导出撤销证书链

--------------------------
### clear
** 清空已经加载的撤销证书 **

```JavaScript
X509Crl.clear();
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
X509Crl.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean X509Crl.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String X509Crl.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value X509Crl.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value X509Crl.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

