# 模块 hash
信息摘要计算模块，可用于计算信息摘要和摘要签名

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

