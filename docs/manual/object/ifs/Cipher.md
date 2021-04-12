# 对象 Cipher
对称加密算法对象

Cipher 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：

```JavaScript
var c = new crypto.Cipher(crypto.AES, crypto.ECB, ...);
```

## 继承关系
```uml
#lineWidth: 1.5
#font: Helvetica,sans-Serif
#fontSize: 10
#leading: 1.6
#.this: fill=lightgray
#.class: fill=white

[<class>object|toString();toJSON()]
[<this>Cipher|new Cipher()|name;keySize;ivSize;blockSize|paddingMode();encrypt();decrypt()]

[object] <:- [Cipher]
```

## 构造函数
        
### Cipher
**Cipher 构造函数，仅用于 ARC4 初始化**

```JavaScript
new Cipher(Integer provider,
    Buffer key);
```

调用参数:
* provider: Integer, 指定加密算法
* key: [Buffer](Buffer.md), 指定加密解密密码

--------------------------
**Cipher 构造函数**

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
**Cipher 构造函数**

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
**String, 返回当前算法名称**

```JavaScript
readonly String Cipher.name;
```

--------------------------
### keySize
**Integer, 返回当前算法密码长度，以位为单位**

```JavaScript
readonly Integer Cipher.keySize;
```

--------------------------
### ivSize
**Integer, 返回当前算法初始向量长度，以字节为单位**

```JavaScript
readonly Integer Cipher.ivSize;
```

--------------------------
### blockSize
**Integer, 返回当前算法数据块长度，以字节为单位**

```JavaScript
readonly Integer Cipher.blockSize;
```

## 成员函数
        
### paddingMode
**使用填充模式**

```JavaScript
Cipher.paddingMode(Integer mode);
```

调用参数:
* mode: Integer, 指定填充模式，缺省为 PADDING_PKCS7

--------------------------
### encrypt
**使用当前算法密码加密数据**

```JavaScript
Buffer Cipher.encrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](Buffer.md), 返回加密后的数据

--------------------------
### decrypt
**使用当前算法密码解密数据**

```JavaScript
Buffer Cipher.decrypt(Buffer data) async;
```

调用参数:
* data: [Buffer](Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](Buffer.md), 返回解密后的数据

--------------------------
### toString
**返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现**

```JavaScript
String Cipher.toString();
```

返回结果:
* String, 返回对象的字符串表示

--------------------------
### toJSON
**返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合**

```JavaScript
Value Cipher.toJSON(String key = "");
```

调用参数:
* key: String, 未使用

返回结果:
* Value, 返回包含可 JSON 序列化的值

