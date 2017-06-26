# 对象 PKey
不对称加密算法对象

PKey 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.PKey();
```

## 继承关系
<div class="inherits"><svg width="82pt" height="370pt" viewBox="0.00 0.00 82.34 370.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 366)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-366 78.341,-366 78.341,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="8.339,-273.5 8.339,-361.5 66.002,-361.5 66.002,-273.5 8.339,-273.5"/>
<text text-anchor="middle" x="37.1705" y="-348.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="8.339,-341.5 66.002,-341.5 "/>
<text text-anchor="start" x="16.339" y="-328.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="16.339" y="-316.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="16.339" y="-304.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="16.339" y="-292.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="16.339" y="-280.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- PKey -->
<g id="node2" class="node">
<title>PKey</title>
<g id="a_node2"><a xlink:title="PKey">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-236.5 74.341,-236.5 74.341,-.5 0,-.5"/>
<text text-anchor="middle" x="37.1705" y="-223.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">PKey</text>
<polyline fill="none" stroke="#000000" points="0,-216.5 74.341,-216.5 "/>
<text text-anchor="start" x="8" y="-203.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new PKey()</text>
<polyline fill="none" stroke="#000000" points="0,-196.5 74.341,-196.5 "/>
<text text-anchor="start" x="8" y="-183.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-171.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">keySize</text>
<text text-anchor="start" x="8" y="-159.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">publicKey</text>
<polyline fill="none" stroke="#000000" points="0,-152.5 74.341,-152.5 "/>
<text text-anchor="start" x="8" y="-139.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">genRsaKey()</text>
<text text-anchor="start" x="8" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">genEcKey()</text>
<text text-anchor="start" x="8" y="-115.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">isPrivate()</text>
<text text-anchor="start" x="8" y="-103.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">clone()</text>
<text text-anchor="start" x="8" y="-91.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">importKey()</text>
<text text-anchor="start" x="8" y="-79.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">importFile()</text>
<text text-anchor="start" x="8" y="-67.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">exportPem()</text>
<text text-anchor="start" x="8" y="-55.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">exportDer()</text>
<text text-anchor="start" x="8" y="-43.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">encrypt()</text>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">decrypt()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">sign()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">verify()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;PKey -->
<g id="edge1" class="edge">
<title>object-&gt;PKey</title>
<path fill="none" stroke="#000000" d="M37.1705,-263.1104C37.1705,-254.7939 37.1705,-245.9442 37.1705,-236.8773"/>
<polygon fill="#000000" stroke="#000000" points="33.6706,-263.3354 37.1705,-273.3355 40.6706,-263.3355 33.6706,-263.3354"/>
</g>
</g>
</svg></div>

## 构造函数
        
### PKey
** PKey 构造函数 **

```JavaScript
new PKey();
```

## 成员属性
        
### name
** String, 返回当前算法名称 **

```JavaScript
readonly String PKey.name;
```

--------------------------
### keySize
** Integer, 返回当前算法密码长度，以位为单位 **

```JavaScript
readonly Integer PKey.keySize;
```

--------------------------
### publicKey
** PKey, 返回当前密钥的公钥 **

```JavaScript
readonly PKey PKey.publicKey;
```

返回结果:
* 当前密钥的公钥

## 成员函数
        
### genRsaKey
** 生成一个 RSA 私钥 **

```JavaScript
PKey.genRsaKey(Integer size) async;
```

调用参数:
* size: Integer, 指定 RSA 密钥长度，bit 为单位

--------------------------
### genEcKey
** 生成一个 EC 私钥 **

```JavaScript
PKey.genEcKey(String curve = "secp521r1") async;
```

调用参数:
* curve: String, 指定预置椭圆曲线，可选值为："secp521r1", "brainpoolP512r1", "secp384r1", "brainpoolP384r1", "secp256r1", "secp256k1", "brainpoolP256r1", "secp224r1", "secp224k1", "secp192r1", "secp192k1"

--------------------------
### isPrivate
** 查询当前密钥是否为私钥 **

```JavaScript
Boolean PKey.isPrivate();
```

返回结果:
* Boolean, 为 True 表示为私钥

--------------------------
### clone
** 复制当前密钥 **

```JavaScript
PKey PKey.clone();
```

返回结果:
* PKey, 当前密钥的复制对象

--------------------------
### importKey
** 加载一个 DER 格式的密钥 **

```JavaScript
PKey.importKey(Buffer DerKey,
    String password = "");
```

调用参数:
* DerKey: [Buffer](Buffer.md), DER 格式的密钥
* password: String, 解密密码

--------------------------
** 加载一个 PEM 格式的密钥 **

```JavaScript
PKey.importKey(String pemKey,
    String password = "");
```

调用参数:
* pemKey: String, PEM 格式的密钥
* password: String, 解密密码

--------------------------
### importFile
** 加载一个 PEM/DER 格式的密钥文件 **

```JavaScript
PKey.importFile(String filename,
    String password = "");
```

调用参数:
* filename: String, 密钥文件名
* password: String, 解密密码

--------------------------
### exportPem
** 返回当前 key 的 PEM 格式编码 **

```JavaScript
String PKey.exportPem();
```

返回结果:
* String, 当前 key 的 PEM 格式编码

--------------------------
### exportDer
** 返回当前 key 的 DER 格式编码 **

```JavaScript
Buffer PKey.exportDer();
```

返回结果:
* [Buffer](Buffer.md), 当前 key 的 DER 格式编码

--------------------------
### encrypt
** 使用当前算法密码公钥加密数据 **

```JavaScript
Buffer PKey.encrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](Buffer.md), 返回加密后的数据

--------------------------
### decrypt
** 使用当前算法密码私钥解密数据 **

```JavaScript
Buffer PKey.decrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](Buffer.md), 返回解密后的数据

--------------------------
### sign
** 使用当前算法密码私钥签名数据 **

```JavaScript
Buffer PKey.sign(Buffer data,
    Integer alg = 0) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要签名的数据
* alg: Integer, 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160

返回结果:
* [Buffer](Buffer.md), 返回签名后的数据

--------------------------
### verify
** 使用当前算法密码公钥验证数据 **

```JavaScript
Boolean PKey.verify(Buffer sign,
    Buffer data) async;
```

调用参数:
* sign: [Buffer](Buffer.md), 指定要验证的签名
* data: [Buffer](Buffer.md), 指定要验证的数据

返回结果:
* Boolean, 返回验证后的结果

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
PKey.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean PKey.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String PKey.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value PKey.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value PKey.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

