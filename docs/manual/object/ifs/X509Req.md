# 对象 X509Req
x509 证书请求对象

X509Req 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.X509Req();
```

## 继承关系
<div class="inherits"><svg width="96pt" height="284pt" viewBox="0.00 0.00 96.00 284.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 280)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-280 92,-280 92,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="15.5,-184 15.5,-276 72.5,-276 72.5,-184 15.5,-184"/>
<polygon fill="none" stroke="#000000" points="16,-254 16,-276 73,-276 73,-254 16,-254"/>
<text text-anchor="start" x="31.1625" y="-262" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="16,-184 16,-254 73,-254 73,-184 16,-184"/>
<text text-anchor="start" x="21" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="21" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="21" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="21" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="21" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- X509Req -->
<g id="node2" class="node">
<title>X509Req</title>
<g id="a_node2"><a xlink:title="X509Req">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-148 88,-148 88,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-126 0,-148 88,-148 88,-126 0,-126"/>
<text text-anchor="start" x="23.1585" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">X509Req</text>
<polygon fill="none" stroke="#000000" points="0,-104 0,-126 88,-126 88,-104 0,-104"/>
<text text-anchor="start" x="5" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new X509Req()</text>
<polygon fill="none" stroke="#000000" points="0,-70 0,-104 88,-104 88,-70 0,-70"/>
<text text-anchor="start" x="5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> subject</text>
<text text-anchor="start" x="5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> publicKey</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-70 88,-70 88,0 0,0"/>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> load()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> loadFile()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exportPem()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exportDer()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sign()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;X509Req -->
<g id="edge1" class="edge">
<title>object-&gt;X509Req</title>
<path fill="none" stroke="#000000" d="M44,-173.455C44,-165.2637 44,-156.7302 44,-148.2558"/>
<polygon fill="#000000" stroke="#000000" points="40.5001,-173.6172 44,-183.6172 47.5001,-173.6173 40.5001,-173.6172"/>
</g>
</g>
</svg></div>

## 构造函数
        
### X509Req
** X509Req 构造函数 **

```JavaScript
new X509Req();
```

--------------------------
** X509Req 构造函数，根据给定的信息创建一个证书请求 **

```JavaScript
new X509Req(String subject,
    PKey key,
    Integer hash = hash.SHA1);
```

调用参数:
* subject: String, 证书的主题可分辨名称
* key: [PKey](PKey.md), 证书的公钥
* hash: Integer, 证书摘要算法，缺省为 [hash](../../module/ifs/hash.md).SHA1

## 成员属性
        
### subject
** String, 获取证书的主题可分辨名称 **

```JavaScript
readonly String X509Req.subject;
```

--------------------------
### publicKey
** [PKey](PKey.md), 获取证书的公钥 **

```JavaScript
readonly PKey X509Req.publicKey;
```

## 成员函数
        
### load
** 加载一个 DER 格式的证书请求 **

```JavaScript
X509Req.load(Buffer derReq);
```

调用参数:
* derReq: [Buffer](Buffer.md), DER 格式的证书请求

--------------------------
** 加载一个 PEM 格式的证书请求 **

```JavaScript
X509Req.load(String pemReq);
```

调用参数:
* pemReq: String, PEM 格式的证书请求

--------------------------
### loadFile
** 加载一个 PEM/DER 格式的证书请求，可多次调用 **

```JavaScript
X509Req.loadFile(String filename);
```

调用参数:
* filename: String, 证书请求文件名

--------------------------
### exportPem
** 返回当前证书请求的 PEM 格式编码 **

```JavaScript
String X509Req.exportPem();
```

返回结果:
* String, 当前证书请求的 PEM 格式编码

--------------------------
### exportDer
** 返回当前证书请求的 DER 格式编码 **

```JavaScript
Buffer X509Req.exportDer();
```

返回结果:
* [Buffer](Buffer.md), 当前证书请求的 DER 格式编码

--------------------------
### sign
** 签名当前证书请求为正式证书 **

```JavaScript
X509Cert X509Req.sign(String issuer,
    PKey key,
    Object opts = {}) async;
```

调用参数:
* issuer: String, 签名机构的可分辨名称
* key: [PKey](PKey.md), 签名机构的私钥
* opts: Object, 其他可选参数

返回结果:
* [X509Cert](X509Cert.md), 返回签名后的正式证书

opts 接收的字段如下：

```JavaScript
{
    ca: false, // 证书为 ca，缺省为 false
    pathlen: -1, // 证书深度，缺省为 -1
    notBefore: "", // 证书生效时间，缺省为当前时间
    notAfter: "", // 证书失效时间，缺省为 notBefore 后一年
    usage: "", // 证书使用范围，接收：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
    type: "" // 证书 Netscape 证书类型，接收：client, server, email, objsign, reserved, sslCA, emailCA, objCA
}
```

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
X509Req.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean X509Req.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String X509Req.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value X509Req.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value X509Req.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

