# 对象 X509Crl
x509 撤销证书对象

X509Crl 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Crl();
```

## 继承关系
<div class="inherits"><svg width="90pt" height="238pt" viewBox="0.00 0.00 90.00 238.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 234)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-234 86,-234 86,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="12.5,-138 12.5,-230 69.5,-230 69.5,-138 12.5,-138"/>
<polygon fill="none" stroke="#000000" points="13,-208 13,-230 70,-230 70,-208 13,-208"/>
<text text-anchor="start" x="28.1625" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="13,-138 13,-208 70,-208 70,-138 13,-138"/>
<text text-anchor="start" x="18" y="-194" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="18" y="-182" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="18" y="-170" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="18" y="-158" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="18" y="-146" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- X509Crl -->
<g id="node2" class="node">
<title>X509Crl</title>
<g id="a_node2"><a xlink:title="X509Crl">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-102 82,-102 82,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-80 0,-102 82,-102 82,-80 0,-80"/>
<text text-anchor="start" x="22.9435" y="-88" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">X509Crl</text>
<polygon fill="none" stroke="#000000" points="0,-58 0,-80 82,-80 82,-58 0,-58"/>
<text text-anchor="start" x="5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new X509Crl()</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-58 82,-58 82,0 0,0"/>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> load()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> loadFile()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dump()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clear()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;X509Crl -->
<g id="edge1" class="edge">
<title>object-&gt;X509Crl</title>
<path fill="none" stroke="#000000" d="M41,-127.6477C41,-119.1551 41,-110.4363 41,-102.0632"/>
<polygon fill="#000000" stroke="#000000" points="37.5001,-127.8563 41,-137.8563 44.5001,-127.8563 37.5001,-127.8563"/>
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

