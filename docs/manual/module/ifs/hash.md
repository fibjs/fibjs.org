# 模块 hash
hash 模块主要用于实现消息摘要算法，是实现加密算法中，非常重要的一个子模块。同时，消息摘要算法也是许多加密算法的基础。

在使用 `hash` 子模块之前，需要使用 `require('hash');` 加载该模块。

在 `hash` 模块中，主要包含以下几个类 `Digest`、`Hmac`。其中，`Digest` 类用于计算消息摘要算法，`Hmac` 类用于计算带密钥的哈希消息。

以下是一个简单的使用 `Digest` 类计算 `MD5` 摘要的示例代码：

```JavaScript
const hash = require('hash');

// create a MD5 digest object
const digest = hash.digest(hash.MD5);

// update digest with data
const data = 'hello, world';
digest.update(data);

// output result in hex
const result = digest.digest('hex');
console.log(result);
```

在以上示例代码中，我们首先使用 `hash.digest([hash.MD5](hash.md#MD5))` 将一个 `Digest` 对象初始化为 `MD5` 模式。然后，我们使用 `update()` 方法向 Digest 对象添加需要进行摘要计算的数据。接着，我们使用 `digest()` 方法计算摘要结果，并返回通过参数指定的编码方式（这里使用的是 十六进制编码）。最后，输出计算出的摘要结果。

除了 `MD5` 以外，`Digest` 类还支持其他摘要算法，比如 `SHA-1`、`SHA-256`、`SHA-512`等。 在使用时需要将 `md5` 参数改成对应的摘要算法即可。

## 静态函数
        
### digest
**根据指定的算法标识创建一个信息摘要运算对象**

```JavaScript
static Digest hash.digest(Integer algo,
    Buffer data = NULL);
```

调用参数:
* algo: Integer, 指定摘要运算算法
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### md5
**创建一个 MD5 信息摘要运算对象**

```JavaScript
static Digest hash.md5(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha1
**创建一个 SHA1 信息摘要运算对象**

```JavaScript
static Digest hash.sha1(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha224
**创建一个 SHA224 信息摘要运算对象**

```JavaScript
static Digest hash.sha224(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha256
**创建一个 SHA256 信息摘要运算对象**

```JavaScript
static Digest hash.sha256(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha384
**创建一个 SHA384 信息摘要运算对象**

```JavaScript
static Digest hash.sha384(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha512
**创建一个 SHA512 信息摘要运算对象**

```JavaScript
static Digest hash.sha512(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### ripemd160
**创建一个 RIPEMD160 信息摘要运算对象**

```JavaScript
static Digest hash.ripemd160(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sm3
**创建一个 SM3 信息摘要运算对象**

```JavaScript
static Digest hash.sm3(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
**创建一个 SM3 信息摘要运算对象并进行预处理**

```JavaScript
static Digest hash.sm3(PKey pubKey,
    String id,
    Buffer data = NULL);
```

调用参数:
* pubKey: [PKey](../../object/ifs/PKey.md), 签名公钥
* id: String, 签名 ID
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### keccak256
**创建一个 KECCAK256 信息摘要运算对象**

```JavaScript
static Digest hash.keccak256(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### keccak384
**创建一个 KECCAK384 信息摘要运算对象**

```JavaScript
static Digest hash.keccak384(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### keccak512
**创建一个 KECCAK512 信息摘要运算对象**

```JavaScript
static Digest hash.keccak512(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### blake2s
**创建一个 BLAKE2S 信息摘要运算对象**

```JavaScript
static Digest hash.blake2s(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### blake2b
**创建一个 BLAKE2B 信息摘要运算对象**

```JavaScript
static Digest hash.blake2b(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### blake2sp
**创建一个 BLAKE2SP 信息摘要运算对象**

```JavaScript
static Digest hash.blake2sp(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### blake2bp
**创建一个 BLAKE2BP 信息摘要运算对象**

```JavaScript
static Digest hash.blake2bp(Buffer data = NULL);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac
**根据指定的算法标识创建一个信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac(Integer algo,
    Buffer key,
    Buffer data = NULL);
```

调用参数:
* algo: Integer, 指定摘要运算算法
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_md5
**创建一个 MD5 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_md5(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha1
**创建一个 SHA1 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha1(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha224
**创建一个 SHA224 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha224(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha256
**创建一个 SHA256 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha256(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha384
**创建一个 SHA384 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha384(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha512
**创建一个 SHA512 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha512(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_ripemd160
**创建一个 RIPEMD160 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_ripemd160(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sm3
**创建一个 SM3 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sm3(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
**创建一个 SM3 信息摘要签名运算对象并进行预处理**

```JavaScript
static Digest hash.hmac_sm3(PKey pubKey,
    String id,
    Buffer key,
    Buffer data = NULL);
```

调用参数:
* pubKey: [PKey](../../object/ifs/PKey.md), 签名公钥
* id: String, 签名 ID
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_keccak256
**创建一个 KECCAK256 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_keccak256(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_keccak384
**创建一个 KECCAK384 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_keccak384(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_keccak512
**创建一个 KECCAK512 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_keccak512(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_blake2s
**创建一个 BLAKE2S 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_blake2s(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_blake2b
**创建一个 BLAKE2B 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_blake2b(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_blake2sp
**创建一个 BLAKE2SP 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_blake2sp(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_blake2bp
**创建一个 BLAKE2BP 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_blake2bp(Buffer key,
    Buffer data = NULL);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据，缺省为 null，不更新数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

## 常量
        
### MD5
**MD5 信息摘要算法标识常量**

```JavaScript
const hash.MD5 = 1;
```

--------------------------
### SHA1
**SHA1 信息摘要算法标识常量**

```JavaScript
const hash.SHA1 = 2;
```

--------------------------
### SHA224
**SHA224 信息摘要算法标识常量**

```JavaScript
const hash.SHA224 = 3;
```

--------------------------
### SHA256
**SHA256 信息摘要算法标识常量**

```JavaScript
const hash.SHA256 = 4;
```

--------------------------
### SHA384
**SHA384 信息摘要算法标识常量**

```JavaScript
const hash.SHA384 = 5;
```

--------------------------
### SHA512
**SHA512 信息摘要算法标识常量**

```JavaScript
const hash.SHA512 = 6;
```

--------------------------
### RIPEMD160
**RIPEMD160 信息摘要算法标识常量**

```JavaScript
const hash.RIPEMD160 = 7;
```

--------------------------
### SM3
**SM3 信息摘要算法标识常量**

```JavaScript
const hash.SM3 = 8;
```

--------------------------
### KECCAK256
**KECCAK256 信息摘要算法标识常量**

```JavaScript
const hash.KECCAK256 = 9;
```

--------------------------
### KECCAK384
**KECCAK384 信息摘要算法标识常量**

```JavaScript
const hash.KECCAK384 = 10;
```

--------------------------
### KECCAK512
**KECCAK512 信息摘要算法标识常量**

```JavaScript
const hash.KECCAK512 = 11;
```

--------------------------
### BLAKE2S
**BLAKE2S 信息摘要算法标识常量**

```JavaScript
const hash.BLAKE2S = 12;
```

--------------------------
### BLAKE2B
**BLAKE2B 信息摘要算法标识常量**

```JavaScript
const hash.BLAKE2B = 13;
```

--------------------------
### BLAKE2SP
**BLAKE2SP 信息摘要算法标识常量**

```JavaScript
const hash.BLAKE2SP = 14;
```

--------------------------
### BLAKE2BP
**BLAKE2BP 信息摘要算法标识常量**

```JavaScript
const hash.BLAKE2BP = 15;
```

