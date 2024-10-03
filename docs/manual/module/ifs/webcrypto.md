# 模块 webcrypto
WebCrypto API 模块

WebCrypto API 模块提供了一组用于加密和解密的函数。可以通过 [global](global.md) 对象的 webcrypto 属性或者 require("[crypto](crypto.md)").webcrypto 来获取。

## 对象
        
### CryptoKey
**[CryptoKey](../../object/ifs/CryptoKey.md) 类来表示对称或非对称密钥，每种密钥公开不同的功能**

```JavaScript
CryptoKey webcrypto.CryptoKey;
```

--------------------------
### subtle
**提供对 SubtleCrypto API 的访问**

```JavaScript
subtle webcrypto.subtle;
```

## 静态函数
        
### getRandomValues
**生成随机数**

```JavaScript
static TypedArray webcrypto.getRandomValues(TypedArray data);
```

调用参数:
* data: TypedArray, 一个 TypedArray 对象，用于存放生成的随机数。

返回结果:
* TypedArray, 返回 data 对象。

--------------------------
### randomUUID
**生成一个 UUID**

```JavaScript
static String webcrypto.randomUUID();
```

返回结果:
* String, 返回生成的 UUID 字符串。

