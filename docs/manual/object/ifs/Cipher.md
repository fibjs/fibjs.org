# 对象 Cipher
对称加密算法对象

Cipher 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var c = new crypto.Cipher(crypto.AES, crypto.ECB, ...);
```

## 继承关系
<div class="inherits"><svg width="91pt" height="284pt" viewBox="0.00 0.00 91.00 284.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 280)">
<title>%0</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-280 87,-280 87,4 -4,4"/>
<!-- object -->
<g id="node1" class="node">
<title>object</title>
<g id="a_node1"><a xlink:href="object.md" xlink:title="object">
<polygon fill="#ffffff" stroke="transparent" points="13,-184 13,-276 70,-276 70,-184 13,-184"/>
<polygon fill="none" stroke="#000000" points="13.5,-254 13.5,-276 70.5,-276 70.5,-254 13.5,-254"/>
<text text-anchor="start" x="28.6625" y="-262" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">object</text>
<polygon fill="none" stroke="#000000" points="13.5,-184 13.5,-254 70.5,-254 70.5,-184 13.5,-184"/>
<text text-anchor="start" x="18.5" y="-240" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> dispose()</text>
<text text-anchor="start" x="18.5" y="-228" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> equals()</text>
<text text-anchor="start" x="18.5" y="-216" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toString()</text>
<text text-anchor="start" x="18.5" y="-204" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> toJSON()</text>
<text text-anchor="start" x="18.5" y="-192" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> valueOf()</text>
</a>
</g>
</g>
<!-- Cipher -->
<g id="node2" class="node">
<title>Cipher</title>
<g id="a_node2"><a xlink:title="Cipher">
<polygon fill="#d3d3d3" stroke="transparent" points="0,0 0,-148 83,-148 83,0 0,0"/>
<polygon fill="none" stroke="#000000" points=".5,-126 .5,-148 83.5,-148 83.5,-126 .5,-126"/>
<text text-anchor="start" x="27.278" y="-134" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">Cipher</text>
<polygon fill="none" stroke="#000000" points=".5,-104 .5,-126 83.5,-126 83.5,-104 .5,-104"/>
<text text-anchor="start" x="5.5" y="-112" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000">  new Cipher()</text>
<polygon fill="none" stroke="#000000" points=".5,-46 .5,-104 83.5,-104 83.5,-46 .5,-46"/>
<text text-anchor="start" x="5.5" y="-90" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> name</text>
<text text-anchor="start" x="5.5" y="-78" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> keySize</text>
<text text-anchor="start" x="5.5" y="-66" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> ivSize</text>
<text text-anchor="start" x="5.5" y="-54" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> blockSize</text>
<polygon fill="none" stroke="#000000" points=".5,0 .5,-46 83.5,-46 83.5,0 .5,0"/>
<text text-anchor="start" x="5.5" y="-32" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> paddingMode()</text>
<text text-anchor="start" x="5.5" y="-20" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> encrypt()</text>
<text text-anchor="start" x="5.5" y="-8" font-family="Helvetica,sans-Serif" font-size="10.00" fill="#000000"> decrypt()</text>
</a>
</g>
</g>
<!-- object&#45;&gt;Cipher -->
<g id="edge1" class="edge">
<title>object-&gt;Cipher</title>
<path fill="none" stroke="#000000" d="M41.5,-173.455C41.5,-165.2637 41.5,-156.7302 41.5,-148.2558"/>
<polygon fill="#000000" stroke="#000000" points="38.0001,-173.6172 41.5,-183.6172 45.0001,-173.6173 38.0001,-173.6172"/>
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

