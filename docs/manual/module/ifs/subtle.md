# 模块 subtle
提供对 SubtleCrypto API 的访问

SubtleCrypto API 模块提供了一组用于加密和解密的函数。可以通过 global.webcrypto.subtle 属性或者 require("[crypto](crypto.md)").[webcrypto.subtle](webcrypto.md#subtle) 来获取。

## 静态函数
        
### digest
**计算给定数据的哈希值**

```JavaScript
static Buffer subtle.digest(String algorithm,
    Buffer data) promise;
```

调用参数:
* algorithm: String, 指定哈希算法
* data: [Buffer](../../object/ifs/Buffer.md), 指定要计算哈希值的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回计算得到的哈希值

--------------------------
**计算给定数据的哈希值**

```JavaScript
static Buffer subtle.digest(Object algorithm,
    Buffer data) promise;
```

调用参数:
* algorithm: Object, 指定哈希算法
* data: [Buffer](../../object/ifs/Buffer.md), 指定要计算哈希值的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回计算得到的哈希值

algorithm 的 name 属性指定哈希算法，例如：
```
{
    name: "SHA-256"
}
```

--------------------------
### exportKey
**导出 key 的信息，如果 key 不可导出，则返回一个错误**

```JavaScript
static Variant subtle.exportKey(String format,
    CryptoKey key) promise;
```

调用参数:
* format: String, 导出的格式，可以是 'raw'，'pkcs8'，'spki' 或 'jwk'.
* key: [CryptoKey](../../object/ifs/CryptoKey.md), 要导出的 key

返回结果:
* Variant, 返回导出的 key 信息

--------------------------
### generateKey
**生成一个新的 key**

```JavaScript
static Variant subtle.generateKey(Object algorithm,
    Boolean extractable,
    Array usages) promise;
```

调用参数:
* algorithm: Object, 指定生成 key 的算法
* extractable: Boolean, 指定 key 是否可以导出到外部
* usages: Array, 指定 key 的用途

返回结果:
* Variant, 返回生成的 key

--------------------------
### importKey
**导入 key**

```JavaScript
static CryptoKey subtle.importKey(String format,
    Value keyData,
    Object algorithm,
    Boolean extractable,
    Array usages) promise;
```

调用参数:
* format: String, 导入的格式，可以是 'raw'，'pkcs8'，'spki' 或 'jwk'.
* keyData: Value, 包含 key 数据的对象
* algorithm: Object, 指定 key 的算法
* extractable: Boolean, 指定 key 是否可以导出到外部
* usages: Array, 指定 key 的用途

返回结果:
* [CryptoKey](../../object/ifs/CryptoKey.md), 返回导入的 key

--------------------------
### sign
**使用 key 对数据进行签名**

```JavaScript
static Buffer subtle.sign(Object algorithm,
    CryptoKey key,
    Buffer data) promise;
```

调用参数:
* algorithm: Object, 指定签名算法
* key: [CryptoKey](../../object/ifs/CryptoKey.md), 指定用于签名的 key
* data: [Buffer](../../object/ifs/Buffer.md), 指定要签名的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

--------------------------
### verify
**使用 key 对数据进行验签**

```JavaScript
static Boolean subtle.verify(Object algorithm,
    CryptoKey key,
    Buffer signature,
    Buffer data) promise;
```

调用参数:
* algorithm: Object, 指定签名算法
* key: [CryptoKey](../../object/ifs/CryptoKey.md), 指定用于验签的 key
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据
* data: [Buffer](../../object/ifs/Buffer.md), 指定要验签的数据

返回结果:
* Boolean, 返回验签结果

