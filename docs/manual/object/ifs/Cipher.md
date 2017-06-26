# 对象 Cipher
对称加密算法对象

Cipher 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var c = new crypto.Cipher(crypto.AES, crypto.ECB, ...);
```

## 继承关系
<div class="inherits"><svg width="91pt" height="274pt" viewBox="0.00 0.00 91.24 274.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 270)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-270 87.237,-270 87.237,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="#000000" points="12.787,-177.5 12.787,-265.5 70.45,-265.5 70.45,-177.5 12.787,-177.5"/>
<text text-anchor="middle" x="41.6185" y="-252.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polyline fill="none" stroke="#000000" points="12.787,-245.5 70.45,-245.5 "/>
<text text-anchor="start" x="20.787" y="-232.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">dispose()</text>
<text text-anchor="start" x="20.787" y="-220.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">equals()</text>
<text text-anchor="start" x="20.787" y="-208.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toString()</text>
<text text-anchor="start" x="20.787" y="-196.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">toJSON()</text>
<text text-anchor="start" x="20.787" y="-184.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">valueOf()</text>
</a>
</g>
</g>
<!-- Cipher -->
<g id="node2" class="node">
<title>Cipher</title>
<g id="a_node2"><a xlink:title="Cipher">
<polygon fill="#d3d3d3" stroke="#000000" points="0,-.5 0,-140.5 83.237,-140.5 83.237,-.5 0,-.5"/>
<text text-anchor="middle" x="41.6185" y="-127.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Cipher</text>
<polyline fill="none" stroke="#000000" points="0,-120.5 83.237,-120.5 "/>
<text text-anchor="start" x="8" y="-107.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">new Cipher()</text>
<polyline fill="none" stroke="#000000" points="0,-100.5 83.237,-100.5 "/>
<text text-anchor="start" x="8" y="-87.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">name</text>
<text text-anchor="start" x="8" y="-75.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">keySize</text>
<text text-anchor="start" x="8" y="-63.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">ivSize</text>
<text text-anchor="start" x="8" y="-51.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">blockSize</text>
<polyline fill="none" stroke="#000000" points="0,-44.5 83.237,-44.5 "/>
<text text-anchor="start" x="8" y="-31.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">paddingMode()</text>
<text text-anchor="start" x="8" y="-19.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">encrypt()</text>
<text text-anchor="start" x="8" y="-7.5" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">decrypt()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Cipher -->
<g id="edge1" class="edge">
<title>object-&gt;Cipher</title>
<path fill="none" stroke="#000000" d="M41.6185,-167.191C41.6185,-158.6178 41.6185,-149.6478 41.6185,-140.7746"/>
<polygon fill="#000000" stroke="#000000" points="38.1186,-167.4186 41.6185,-177.4186 45.1186,-167.4187 38.1186,-167.4186"/>
</g>
</g>
</svg></div>

## 构造函数
        
### Cipher
** Cipher 构造函数，仅用于 ARC4 初始化 **

```JavaScript
new Cipher(Integer provider,
    Buffer key);
```

调用参数:
* provider: Integer, 指定加密算法
* key: [Buffer](Buffer.md), 指定加密解密密码

--------------------------
** Cipher 构造函数 **

```JavaScript
new Cipher(Integer provider,
    Integer mode,
    Buffer key);
```

调用参数:
* provider: Integer, 指定加密算法
* mode: Integer, 指定分组密码工作模式
* key: [Buffer](Buffer.md), 指定加密解密密码

--------------------------
** Cipher 构造函数 **

```JavaScript
new Cipher(Integer provider,
    Integer mode,
    Buffer key,
    Buffer iv);
```

调用参数:
* provider: Integer, 指定加密算法
* mode: Integer, 指定分组密码工作模式
* key: [Buffer](Buffer.md), 指定加密解密密码
* iv: [Buffer](Buffer.md), 指定初始向量

## 成员属性
        
### name
** String, 返回当前算法名称 **

```JavaScript
readonly String Cipher.name;
```

--------------------------
### keySize
** Integer, 返回当前算法密码长度，以位为单位 **

```JavaScript
readonly Integer Cipher.keySize;
```

--------------------------
### ivSize
** Integer, 返回当前算法初始向量长度，以字节为单位 **

```JavaScript
readonly Integer Cipher.ivSize;
```

--------------------------
### blockSize
** Integer, 返回当前算法数据块长度，以字节为单位 **

```JavaScript
readonly Integer Cipher.blockSize;
```

## 成员函数
        
### paddingMode
** 使用填充模式 **

```JavaScript
Cipher.paddingMode(Integer mode);
```

调用参数:
* mode: Integer, 指定填充模式，缺省为 PADDING_PKCS7

--------------------------
### encrypt
** 使用当前算法密码加密数据 **

```JavaScript
Buffer Cipher.encrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](Buffer.md), 返回加密后的数据

--------------------------
### decrypt
** 使用当前算法密码解密数据 **

```JavaScript
Buffer Cipher.decrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](Buffer.md), 返回解密后的数据

--------------------------
### dispose
** 强制回收对象，调用此方法后，对象资源将立即释放 **

```JavaScript
Cipher.dispose();
```

--------------------------
### equals
** 比较当前对象与给定的对象是否相等 **

```JavaScript
Boolean Cipher.equals(object expected);
```

调用参数:
* expected: object, 制定比较的目标对象

返回结果:
* Boolean, 返回对象比较的结果

--------------------------
### toString
** 返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现 **

```JavaScript
String Cipher.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
** 返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合 **

```JavaScript
Value Cipher.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

--------------------------
### valueOf
** 返回对象本身的数值 **

```JavaScript
Value Cipher.valueOf();
```

返回结果:
* Value, 返回对象本身的数值

