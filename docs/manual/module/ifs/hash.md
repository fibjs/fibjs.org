# 模块 hash
信息摘要计算模块，可用于计算信息摘要和摘要签名

## 静态函数
        
### digest
**根据指定的算法标识创建一个信息摘要运算对象**

```JavaScript
static Digest hash.digest(Integer algo,
    Buffer data);
```

调用参数:
* algo: Integer, 指定摘要运算算法
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
**根据指定的算法标识创建一个信息摘要运算对象**

```JavaScript
static Digest hash.digest(Integer algo);
```

调用参数:
* algo: Integer, 指定摘要运算算法

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### md2
**创建一个 MD2 信息摘要运算对象**

```JavaScript
static Digest hash.md2(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### md4
**创建一个 MD4 信息摘要运算对象**

```JavaScript
static Digest hash.md4(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### md5
**创建一个 MD5 信息摘要运算对象**

```JavaScript
static Digest hash.md5(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha1
**创建一个 SHA1 信息摘要运算对象**

```JavaScript
static Digest hash.sha1(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha224
**创建一个 SHA224 信息摘要运算对象**

```JavaScript
static Digest hash.sha224(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha256
**创建一个 SHA256 信息摘要运算对象**

```JavaScript
static Digest hash.sha256(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha384
**创建一个 SHA384 信息摘要运算对象**

```JavaScript
static Digest hash.sha384(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### sha512
**创建一个 SHA512 信息摘要运算对象**

```JavaScript
static Digest hash.sha512(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### ripemd160
**创建一个 RIPEMD160 信息摘要运算对象**

```JavaScript
static Digest hash.ripemd160(Buffer data);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 创建同时更新的二进制数据

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac
**根据指定的算法标识创建一个信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac(Integer algo,
    Buffer key);
```

调用参数:
* algo: Integer, 指定摘要运算算法
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_md2
**创建一个 MD2 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_md2(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_md4
**创建一个 MD4 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_md4(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_md5
**创建一个 MD5 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_md5(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha1
**创建一个 SHA1 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha1(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha224
**创建一个 SHA224 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha224(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha256
**创建一个 SHA256 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha256(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha384
**创建一个 SHA384 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha384(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_sha512
**创建一个 SHA512 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_sha512(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

--------------------------
### hmac_ripemd160
**创建一个 RIPEMD160 信息摘要签名运算对象**

```JavaScript
static Digest hash.hmac_ripemd160(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回构造的信息摘要对象

## 常量
        
### MD2
**MD2 信息摘要算法标识常量**

```JavaScript
const hash.MD2 = 1;
```

--------------------------
### MD4
**MD4 信息摘要算法标识常量**

```JavaScript
const hash.MD4 = 2;
```

--------------------------
### MD5
**MD5 信息摘要算法标识常量**

```JavaScript
const hash.MD5 = 3;
```

--------------------------
### SHA1
**SHA1 信息摘要算法标识常量**

```JavaScript
const hash.SHA1 = 4;
```

--------------------------
### SHA224
**SHA224 信息摘要算法标识常量**

```JavaScript
const hash.SHA224 = 5;
```

--------------------------
### SHA256
**SHA256 信息摘要算法标识常量**

```JavaScript
const hash.SHA256 = 6;
```

--------------------------
### SHA384
**SHA384 信息摘要算法标识常量**

```JavaScript
const hash.SHA384 = 7;
```

--------------------------
### SHA512
**SHA512 信息摘要算法标识常量**

```JavaScript
const hash.SHA512 = 8;
```

--------------------------
### RIPEMD160
**RIPEMD160 信息摘要算法标识常量**

```JavaScript
const hash.RIPEMD160 = 9;
```

