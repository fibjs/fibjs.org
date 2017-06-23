# 对象 PKey
不对称加密算法对象

PKey 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var k = new crypto.PKey();
```

## 继承关系
<div class="inherits"><svg width="82pt" height="380pt" viewBox="0.00 0.00 82.00 380.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 376)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-376 78,-376 78,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="8.5,-280 8.5,-372 65.5,-372 65.5,-280 8.5,-280"/>
<polygon fill="none" stroke="#000000" points="9,-350 9,-372 66,-372 66,-350 9,-350"/>
<text text-anchor="start" x="24.1625" y="-358" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="9,-280 9,-350 66,-350 66,-280 9,-280"/>
<text text-anchor="start" x="14" y="-336" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="14" y="-324" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="14" y="-312" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="14" y="-300" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="14" y="-288" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- PKey -->
<g id="node2" class="node">
<title>PKey</title>
<g id="a_node2"><a xlink:title="PKey">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-244 74,-244 74,0 0,0"/>
<polygon fill="none" stroke="#000000" points="0,-222 0,-244 74,-244 74,-222 0,-222"/>
<text text-anchor="start" x="25.0515" y="-230" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">PKey</text>
<polygon fill="none" stroke="#000000" points="0,-200 0,-222 74,-222 74,-200 0,-200"/>
<text text-anchor="start" x="5" y="-208" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new PKey()</text>
<polygon fill="none" stroke="#000000" points="0,-154 0,-200 74,-200 74,-154 0,-154"/>
<text text-anchor="start" x="5" y="-186" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="5" y="-174" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> keySize</text>
<text text-anchor="start" x="5" y="-162" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> publicKey</text>
<polygon fill="none" stroke="#000000" points="0,0 0,-154 74,-154 74,0 0,0"/>
<text text-anchor="start" x="5" y="-140" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> genRsaKey()</text>
<text text-anchor="start" x="5" y="-128" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> genEcKey()</text>
<text text-anchor="start" x="5" y="-116" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> isPrivate()</text>
<text text-anchor="start" x="5" y="-104" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> clone()</text>
<text text-anchor="start" x="5" y="-92" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> importKey()</text>
<text text-anchor="start" x="5" y="-80" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> importFile()</text>
<text text-anchor="start" x="5" y="-68" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exportPem()</text>
<text text-anchor="start" x="5" y="-56" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> exportDer()</text>
<text text-anchor="start" x="5" y="-44" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> encrypt()</text>
<text text-anchor="start" x="5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> decrypt()</text>
<text text-anchor="start" x="5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> sign()</text>
<text text-anchor="start" x="5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> verify()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;PKey -->
<g id="edge1" class="edge">
<title>object-&gt;PKey</title>
<path fill="none" stroke="#000000" d="M37,-269.9235C37,-261.7711 37,-253.1241 37,-244.2645"/>
<polygon fill="#000000" stroke="#000000" points="33.5001,-269.964 37,-279.9641 40.5001,-269.9641 33.5001,-269.964"/>
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

