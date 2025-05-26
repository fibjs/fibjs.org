# 模块 crypto
`crypto` 模块是 `fibjs` 内置的加密算法模块。它提供了对称加密、非对称加密、摘要算法、密码学随机数生成器等功能。在使用之前，需要通过 `require('crypto')` 加载该模块

## 对象
        
### constants
**crypto 模块的常量对象，参见 [crypto_constants](crypto_constants.md)**

```JavaScript
crypto_constants crypto.constants;
```

--------------------------
### KeyObject
**[KeyObject](../../object/ifs/KeyObject.md) 对象，参见 [KeyObject](../../object/ifs/KeyObject.md)**

```JavaScript
KeyObject crypto.KeyObject;
```

--------------------------
### X509Certificate
**[X509Certificate](../../object/ifs/X509Certificate.md) 构造函数，参见 [X509Certificate](../../object/ifs/X509Certificate.md)**

```JavaScript
X509Certificate crypto.X509Certificate;
```

--------------------------
### webcrypto
**WebCrypto API 模块**

```JavaScript
webcrypto crypto.webcrypto;
```

--------------------------
### subtle
**提供对 SubtleCrypto API 的访问**

```JavaScript
subtle crypto.subtle;
```

## 静态函数
        
### getHashes
**获取 crypto 模块支持的的 hash(摘要) 算法**

```JavaScript
static Array crypto.getHashes();
```

返回结果:
* Array, 返回支持的 hash 算法数组

--------------------------
### createHash
**根据给定的算法名称创建一个信息摘要对象**

```JavaScript
static Digest crypto.createHash(String algo);
```

调用参数:
* algo: String, 指定信息摘要对象的算法

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回信息摘要对象

--------------------------
### createHmac
**根据给定的算法名称创建一个 hmac 信息摘要对象**

```JavaScript
static Digest crypto.createHmac(String algo,
    Buffer key);
```

调用参数:
* algo: String, 指定信息摘要对象的算法
* key: [Buffer](../../object/ifs/Buffer.md), 二进制签名密钥

返回结果:
* [Digest](../../object/ifs/Digest.md), 返回信息摘要对象

--------------------------
### getCiphers
**获取 crypto 模块支持的的对称加密算法**

```JavaScript
static Array crypto.getCiphers();
```

返回结果:
* Array, 返回支持的对称加密算法数组

--------------------------
### createCipher
**创建一个对称加密的加密对象**

```JavaScript
static Cipher crypto.createCipher(String algorithm,
    Buffer key,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [Buffer](../../object/ifs/Buffer.md), 指定加密解密密码
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的加密对象

--------------------------
### createCipheriv
**创建一个对称加密的加密对象**

```JavaScript
static Cipher crypto.createCipheriv(String algorithm,
    Buffer key,
    Buffer iv,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [Buffer](../../object/ifs/Buffer.md), 指定加密解密密码
* iv: [Buffer](../../object/ifs/Buffer.md), 指定初始向量
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的加密对象

--------------------------
**创建一个对称加密的加密对象**

```JavaScript
static Cipher crypto.createCipheriv(String algorithm,
    KeyObject key,
    Buffer iv,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [KeyObject](../../object/ifs/KeyObject.md), 指定加密解密密码
* iv: [Buffer](../../object/ifs/Buffer.md), 指定初始向量
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的加密对象

--------------------------
### createDecipher
**创建一个对称加密的解密对象**

```JavaScript
static Cipher crypto.createDecipher(String algorithm,
    Buffer key,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [Buffer](../../object/ifs/Buffer.md), 指定加密解密密码
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的解密对象

--------------------------
### createDecipheriv
**创建一个对称加密的解密对象**

```JavaScript
static Cipher crypto.createDecipheriv(String algorithm,
    Buffer key,
    Buffer iv,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [Buffer](../../object/ifs/Buffer.md), 指定加密解密密码
* iv: [Buffer](../../object/ifs/Buffer.md), 指定初始向量
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的解密对象

--------------------------
**创建一个对称加密的解密对象**

```JavaScript
static Cipher crypto.createDecipheriv(String algorithm,
    KeyObject key,
    Buffer iv,
    Object options = {});
```

调用参数:
* algorithm: String, 指定加密算法
* key: [KeyObject](../../object/ifs/KeyObject.md), 指定加密解密密码
* iv: [Buffer](../../object/ifs/Buffer.md), 指定初始向量
* options: Object, 指定加密选项

返回结果:
* [Cipher](../../object/ifs/Cipher.md), 返回对称加密的解密对象

--------------------------
### getCurves
**获取 crypto 模块支持的的 ecc 曲线**

```JavaScript
static Array crypto.getCurves();
```

返回结果:
* Array, 返回支持的 ecc 曲线

--------------------------
### createPrivateKey
**创建一个新的密钥对象，其中包含非对称加密的私钥**

```JavaScript
static KeyObject crypto.createPrivateKey(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 指定 pem 格式的私钥

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回私钥的密钥对象

--------------------------
**创建一个新的密钥对象，其中包含非对称加密的私钥**

```JavaScript
static KeyObject crypto.createPrivateKey(Object key);
```

调用参数:
* key: Object, 创建私钥的配置属性

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回私钥的密钥对象

参数 key 用于指定创建私钥的配置属性，支持的属性包括:
- key: PEM 字符串，DER 二进制 或者 JWK 格式对象
- format: 必须是 'pem', 'der', 'jwk' 或 'raw'。默认值: 'pem'。Bls12381G1/Bls12381G2 仅支持 'raw'
- type: 必须是 'pkcs1', 'pkcs8' 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
- namedCurve: 当 format 为 'raw' 时用于指定 key 的曲线名称，可以是 EC 曲线名，或者 SM2/Ed25519/Ed448/X25519/X448/Bls12381G1/Bls12381G2
- passphrase: 用于解密的密码字符串
- [encoding](encoding.md): 当 key 是字符串时使用的字符串编码

--------------------------
### createPublicKey
**创建一个新的密钥对象，其中包含非对称加密的公钥**

```JavaScript
static KeyObject crypto.createPublicKey(Buffer key);
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 指定 pem 格式的公钥

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回公钥的密钥对象

--------------------------
**基于给定的私钥创建一个新的密钥对象，其中包含给定私钥对应的公钥**

```JavaScript
static KeyObject crypto.createPublicKey(KeyObject key);
```

调用参数:
* key: [KeyObject](../../object/ifs/KeyObject.md), 指定一个非对称加密的私钥

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回公钥的密钥对象

--------------------------
**创建一个新的密钥对象，其中包含非对称加密的公钥**

```JavaScript
static KeyObject crypto.createPublicKey(Object key);
```

调用参数:
* key: Object, 创建公钥的配置属性

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回公钥的密钥对象

参数 key 用于指定创建公钥的配置属性，支持的属性包括:
- key: PEM 字符串，DER 二进制 或者 JWK 格式对象
- format: 必须是 'pem', 'der', 'jwk' 或 'raw'。默认值: 'pem'
- type: 必须是 'pkcs1', 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
- namedCurve: 当 format 为 'raw' 时用于指定 key 的曲线名称，可以是 EC 曲线名，或者 SM2/Ed25519/Ed448/X25519/X448/Bls12381G1/Bls12381G2
- [encoding](encoding.md): 当 key 是字符串时使用的字符串编码

--------------------------
### createSign
**基于 algorithm 指定的算法创建一个新的签名对象**

```JavaScript
static Sign crypto.createSign(String algorithm,
    Object options = {});
```

调用参数:
* algorithm: String, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* options: Object, 指定签名选项，未使用

返回结果:
* [Sign](../../object/ifs/Sign.md), 返回签名对象

--------------------------
### createVerify
**基于 algorithm 指定的算法创建一个新的验签对象**

```JavaScript
static Verify crypto.createVerify(String algorithm,
    Object options = {});
```

调用参数:
* algorithm: String, 指定验签算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* options: Object, 指定验签选项，未使用

返回结果:
* [Verify](../../object/ifs/Verify.md), 返回验签对象

--------------------------
### createSecretKey
**创建一个新的密钥对象，其中包含对称加密或 Hmac 的密钥**

```JavaScript
static KeyObject crypto.createSecretKey(Buffer key,
    String encoding = "buffer");
```

调用参数:
* key: [Buffer](../../object/ifs/Buffer.md), 指定加密解密密码
* encoding: String, 指定密码的编码，缺省为 "buffer"

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回对称加密的解密对象

--------------------------
**创建一个新的密钥对象，其中包含对称加密或 Hmac 的密钥**

```JavaScript
static KeyObject crypto.createSecretKey(String key,
    String encoding);
```

调用参数:
* key: String, 指定加密解密密码
* encoding: String, 指定密码的编码，缺省为 "buffer"

返回结果:
* [KeyObject](../../object/ifs/KeyObject.md), 返回对称加密的解密对象

--------------------------
### createCertificateRequest
**创建一个新的证书请求对象**

```JavaScript
static X509CertificateRequest crypto.createCertificateRequest(Buffer csr);
```

调用参数:
* csr: [Buffer](../../object/ifs/Buffer.md), 指定 PEM 格式的证书请求的数据

返回结果:
* [X509CertificateRequest](../../object/ifs/X509CertificateRequest.md), 返回证书请求对象

--------------------------
**创建一个新的证书请求对象**

```JavaScript
static X509CertificateRequest crypto.createCertificateRequest(Object options);
```

调用参数:
* options: Object, 指定创建证书请求的选项

返回结果:
* [X509CertificateRequest](../../object/ifs/X509CertificateRequest.md), 返回证书请求对象

options 内的参数会用于调用 [crypto.createPrivateKey](crypto.md#createPrivateKey) 创建私钥对象，此外还支持指定 subject 和 hashAlgorithm。示例如下：

```JavaScript
var pk = crypto.createPrivateKey(rsa4096_pem);
var req = crypto.createCertificateRequest({
    key: pk,
    hashAlgorithm: 'sha256', // 缺省为 'sha256'，如果 key 是 SM2 类型，缺省为 'sm3'
    subject: {
        C: "CN",
        O: "baoz.cn",
        CN: "baoz.me"
    }
});
```

--------------------------
### diffieHellman
**基于 privateKey 和 publicKey 计算 Diffie-Hellman 密钥**

```JavaScript
static Buffer crypto.diffieHellman(Object options);
```

调用参数:
* options: Object, 指定 Diffie-Hellman 密钥计算的选项

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回 Diffie-Hellman 密钥

options 支持以下属性:
 - privateKey: 用于计算的私钥
 - publicKey: 用于计算的公钥

--------------------------
### hash
**用于创建数据的一次性哈希摘要的实用程序。当散列少量可用的数据（<= 5MB）时，它比基于对象的 [crypto.createHash](crypto.md#createHash)() 更快。如果数据很大或者是流式传输，仍然建议使用 [crypto.createHash](crypto.md#createHash)()**

```JavaScript
static Value crypto.hash(String algorithm,
    Buffer data,
    String outputEncoding = "hex");
```

调用参数:
* algorithm: String, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要签名的数据
* outputEncoding: String, 指定输出编码，缺省为 "[hex](hex.md)"

返回结果:
* Value, 返回散列后的数据

--------------------------
### randomBytes
**生成指定尺寸的随机数，使用 havege 生成器**

```JavaScript
static Buffer crypto.randomBytes(Integer size = 16) async;
```

调用参数:
* size: Integer, 指定生成的随机数尺寸

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的随机数

--------------------------
### randomFill
**使用随机数填充指定的 [Buffer](../../object/ifs/Buffer.md)，使用 havege 生成器**

```JavaScript
static Buffer crypto.randomFill(Buffer buffer,
    Integer offset = 0,
    Integer size = -1) async;
```

调用参数:
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定生成的 [Buffer](../../object/ifs/Buffer.md)
* offset: Integer, 指定起始偏移，缺省为 0
* size: Integer, 指定生成的随机数尺寸，缺省为 buffer.length - offset

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的随机数

--------------------------
### generateKeyPair
**生成给定 type 的新非对称密钥对。目前支持 RSA、RSA-PSS、DSA、EC、Ed25519、Ed448、X25519、X448、SM2、Bls12381G1、Bls12381G2**

```JavaScript
static (Variant publicKey, Variant privateKey) crypto.generateKeyPair(String type,
    Object options = {}) async;
```

调用参数:
* type: String, 指定要生成的密钥类型，必须是 'rsa'、'rsa-pss'、'dsa'、'ec'、'ed25519'、'x25519'、'x448'、'sm2'、'Bls12381G1'、'Bls12381G2'
* options: Object, 指定生成密钥的选项

返回结果:
* (Variant publicKey, Variant privateKey), 返回包含生成密钥对的对象

options 支持以下属性:
- modulusLength: 密钥大小（以位为单位）（RSA、DSA）。
- publicExponent: 公共指数 (RSA)。默认值: 0x10001。
- hashAlgorithm: 消息摘要的名称 (RSA-PSS)。
- mgf1HashAlgorithm: MGF1 (RSA-PSS) 使用的消息摘要的名称。
- saltLength: 最小盐长度（以字节为单位）（RSA-PSS）。
- divisorLength: q 的大小（以位 (DSA) 为单位）。
- namedCurve: 要使用的曲线名称 (EC)。
- prime: 主要参数 (DH)。
- primeLength: 质数长度（以位 (DH) 为单位）。
- generator: 自定义生成器 (DH)。默认值: 2。
- groupName: <字符串> Diffie-Hellman 组名称 (DH)。请参阅 crypto.getDiffieHellman。
- paramEncoding: 必须是 'named' 或 'explicit'(EC)。默认值: 'named'。
- publicKeyEncoding: 请参阅 keyObject.export。
- privateKeyEncoding: 请参阅 keyObject.export。

--------------------------
### hkdf
**依据 rfc5869 根据明文 password 生成要求的二进制钥匙**

```JavaScript
static Buffer crypto.hkdf(String algoName,
    Buffer password,
    Buffer salt,
    Buffer info,
    Integer size) async;
```

调用参数:
* algoName: String, 指定要使用的 hash 算法，详见 hash 模块
* password: [Buffer](../../object/ifs/Buffer.md), 指定使用的密码
* salt: [Buffer](../../object/ifs/Buffer.md), 指定 khdf 使用的 salt
* info: [Buffer](../../object/ifs/Buffer.md), 指定 khdf 使用的 info
* size: Integer, 指定钥匙尺寸

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的二进制钥匙

--------------------------
### pbkdf2
**依据 rfc2898 根据明文 password 生成要求的二进制钥匙**

```JavaScript
static Buffer crypto.pbkdf2(Buffer password,
    Buffer salt,
    Integer iterations,
    Integer size,
    String algoName) async;
```

调用参数:
* password: [Buffer](../../object/ifs/Buffer.md), 指定使用的密码
* salt: [Buffer](../../object/ifs/Buffer.md), 指定 hmac 使用的 salt
* iterations: Integer, 指定迭代次数
* size: Integer, 指定钥匙尺寸
* algoName: String, 指定要使用的 hash 算法，详见 hash 模块

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的二进制钥匙

--------------------------
### privateDecrypt
**使用 privateKey 解密 buffer。buffer 之前已使用相应的公钥进行加密**

```JavaScript
static Buffer crypto.privateDecrypt(Buffer privateKey,
    Buffer buffer);
```

调用参数:
* privateKey: [Buffer](../../object/ifs/Buffer.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
**使用 privateKey 解密 buffer。buffer 之前已使用相应的公钥进行加密**

```JavaScript
static Buffer crypto.privateDecrypt(KeyObject privateKey,
    Buffer buffer);
```

调用参数:
* privateKey: [KeyObject](../../object/ifs/KeyObject.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
**使用 key 指定的私钥和配置解密 buffer。buffer 之前已使用相应的公钥进行加密**

```JavaScript
static Buffer crypto.privateDecrypt(Object key,
    Value buffer);
```

调用参数:
* key: Object, 指定私钥和配置
* buffer: Value, 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
### privateEncrypt
**使用 privateKey 加密 buffer。返回的数据可以使用相应的公钥进行解密**

```JavaScript
static Buffer crypto.privateEncrypt(Buffer privateKey,
    Buffer buffer);
```

调用参数:
* privateKey: [Buffer](../../object/ifs/Buffer.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
**使用 privateKey 加密 buffer。返回的数据可以使用相应的公钥进行解密**

```JavaScript
static Buffer crypto.privateEncrypt(KeyObject privateKey,
    Buffer buffer);
```

调用参数:
* privateKey: [KeyObject](../../object/ifs/KeyObject.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
**使用 key 指定的私钥和配置加密 buffer。返回的数据可以使用相应的公钥进行解密**

```JavaScript
static Buffer crypto.privateEncrypt(Object key,
    Value buffer);
```

调用参数:
* key: Object, 指定私钥和配置
* buffer: Value, 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
### publicDecrypt
**使用 publicKey 解密 buffer。buffer 之前已使用相应的私钥加密**

```JavaScript
static Buffer crypto.publicDecrypt(Buffer publicKey,
    Buffer buffer);
```

调用参数:
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定公钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
**使用 publicKey 解密 buffer。buffer 之前已使用相应的私钥加密**

```JavaScript
static Buffer crypto.publicDecrypt(KeyObject publicKey,
    Buffer buffer);
```

调用参数:
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定公钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
**使用 key 指定的公钥和配置解密 buffer。buffer 之前已使用相应的私钥加密**

```JavaScript
static Buffer crypto.publicDecrypt(Object key,
    Value buffer);
```

调用参数:
* key: Object, 指定公钥和配置
* buffer: Value, 指定要解密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回解密后的数据

--------------------------
### publicEncrypt
**使用 publicKey 加密 buffer。返回的数据可以使用相应的私钥进行解密**

```JavaScript
static Buffer crypto.publicEncrypt(Buffer publicKey,
    Buffer buffer);
```

调用参数:
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
**使用 publicKey 加密 buffer。返回的数据可以使用相应的私钥进行解密**

```JavaScript
static Buffer crypto.publicEncrypt(KeyObject publicKey,
    Buffer buffer);
```

调用参数:
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定私钥
* buffer: [Buffer](../../object/ifs/Buffer.md), 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
**使用 key 指定的私钥和配置加密 buffer。返回的数据可以使用相应的私钥进行解密**

```JavaScript
static Buffer crypto.publicEncrypt(Object key,
    Value buffer);
```

调用参数:
* key: Object, 指定私钥和配置
* buffer: Value, 指定要加密的数据

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回加密后的数据

--------------------------
### sign
**使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Buffer crypto.sign(Value algorithm,
    Buffer data,
    Buffer privateKey) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要签名的数据
* privateKey: [Buffer](../../object/ifs/Buffer.md), 指定私钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

--------------------------
**使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Buffer crypto.sign(Value algorithm,
    Buffer data,
    KeyObject privateKey) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要签名的数据
* privateKey: [KeyObject](../../object/ifs/KeyObject.md), 指定私钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

--------------------------
**使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Buffer crypto.sign(Value algorithm,
    Buffer data,
    Object key) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要签名的数据
* key: Object, 指定私钥和签名参数

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

key 内的参数会用于调用 [crypto.createPrivateKey](crypto.md#createPrivateKey) 创建私钥对象，此外还支持以下签名参数：
- dsaEncoding 对于 DSA 和 ECDSA，此选项指定生成的签名的格式。它可以是以下之一:
 - 'der'（默认）: DER 编码的 ASN.1 签名结构编码 (r, s)
 - 'ieee-p1363' : IEEE-P1363 中提议的签名格式 r || s
- padding RSA 的可选填充值，以下之一:
 - RSA_PKCS1_PADDING（默认）
 - RSA_PKCS1_PSS_PADDING，RSA_PKCS1_PSS_PADDING 将使用 MGF1，其哈希函数与用于对 RFC 4055 第 3.1 节中指定的消息进行签名的哈希函数相同
- saltLength 当填充为 RSA_PKCS1_PSS_PADDING 时的盐长度。特殊值 RSA_PSS_SALTLEN_DIGEST 将盐长度设置为摘要大小，RSA_PSS_SALTLEN_MAX_SIGN（默认）将其设置为最大允许值

--------------------------
### verify
**使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Boolean crypto.verify(Value algorithm,
    Buffer data,
    Buffer publicKey,
    Buffer signature) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要验证的数据
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定公钥
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Boolean crypto.verify(Value algorithm,
    Buffer data,
    KeyObject publicKey,
    Buffer signature) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要验证的数据
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定公钥
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）**

```JavaScript
static Boolean crypto.verify(Value algorithm,
    Buffer data,
    Object key,
    Buffer signature) async;
```

调用参数:
* algorithm: Value, 指定签名算法，使用 [crypto.getHashes](crypto.md#getHashes) 获取可用摘要算法的名称
* data: [Buffer](../../object/ifs/Buffer.md), 指定要验证的数据
* key: Object, 指定私钥和签名参数
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

key 内的参数会用于调用 [crypto.createPublicKey](crypto.md#createPublicKey) 创建私钥对象，此外还支持以下签名参数：
- dsaEncoding 对于 DSA 和 ECDSA，此选项指定生成的签名的格式。它可以是以下之一:
 - 'der'（默认）: DER 编码的 ASN.1 签名结构编码 (r, s)
 - 'ieee-p1363' : IEEE-P1363 中提议的签名格式 r || s
- padding RSA 的可选填充值，以下之一:
 - RSA_PKCS1_PADDING（默认）
 - RSA_PKCS1_PSS_PADDING，RSA_PKCS1_PSS_PADDING 将使用 MGF1，其哈希函数与用于对 RFC 4055 第 3.1 节中指定的消息进行签名的哈希函数相同
- saltLength 当填充为 RSA_PKCS1_PSS_PADDING 时的盐长度。特殊值 RSA_PSS_SALTLEN_DIGEST 将盐长度设置为摘要大小，RSA_PSS_SALTLEN_MAX_SIGN（默认）将其设置为最大允许值

--------------------------
### timingSafeEqual
**比较给定的两个数据是否相等，使用时间常量比较，防止时间侧信道攻击**

```JavaScript
static Boolean crypto.timingSafeEqual(Buffer a,
    Buffer b);
```

调用参数:
* a: [Buffer](../../object/ifs/Buffer.md), 指定要比较的数据
* b: [Buffer](../../object/ifs/Buffer.md), 指定要比较的数据

返回结果:
* Boolean, 返回比较结果

--------------------------
### bbsSign
**使用 Bls12381G2 进行 BBS 签名的函数**

```JavaScript
static Buffer crypto.bbsSign(Buffer messages[],
    Buffer privateKey) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* privateKey: [Buffer](../../object/ifs/Buffer.md), 指定私钥，必须是 Bls12381G2 的私钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

--------------------------
**使用 Bls12381G2 进行 BBS 签名的函数**

```JavaScript
static Buffer crypto.bbsSign(Buffer messages[],
    KeyObject privateKey) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* privateKey: [KeyObject](../../object/ifs/KeyObject.md), 指定私钥，必须是 Bls12381G2 的私钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

--------------------------
**使用 Bls12381G2 进行 BBS 签名的函数**

```JavaScript
static Buffer crypto.bbsSign(Buffer messages[],
    Object key) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* key: Object, 指定私钥和选项

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回签名后的数据

key 内的参数会用于调用 [crypto.createPrivateKey](crypto.md#createPrivateKey) 创建私钥对象，此外还支持以下签名参数：
 - suite: 必须是 'Bls12381Sha256', 'Bls12381Shake256'。默认值: 'Bls12381Sha256'
 - header: 用于签名的附加数据

--------------------------
### bbsVerify
**使用 Bls12381G2 进行 BBS 验证的函数**

```JavaScript
static Boolean crypto.bbsVerify(Buffer messages[],
    Buffer publicKey,
    Buffer signature) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定公钥，必须是 Bls12381G2 的公钥
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用 Bls12381G2 进行 BBS 验证的函数**

```JavaScript
static Boolean crypto.bbsVerify(Buffer messages[],
    KeyObject publicKey,
    Buffer signature) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定公钥，必须是 Bls12381G2 的公钥
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用 Bls12381G2 进行 BBS 验证的函数**

```JavaScript
static Boolean crypto.bbsVerify(Buffer messages[],
    Object key,
    Buffer signature) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* key: Object, 指定公钥和选项
* signature: [Buffer](../../object/ifs/Buffer.md), 指定签名数据

返回结果:
* Boolean, 返回验证结果

key 内的参数会用于调用 [crypto.createPublicKey](crypto.md#createPublicKey) 创建公钥对象，此外还支持以下签名参数：
 - suite: 必须是 'Bls12381Sha256', 'Bls12381Shake256'。默认值: 'Bls12381Sha256'
 - header: 用于签名的附加数据

--------------------------
### proofGen
**使用 Bls12381G2 生成 BBS 选择证明的函数**

```JavaScript
static Buffer crypto.proofGen(Buffer signature,
    Buffer messages[],
    Integer index[],
    Buffer publicKey) async;
```

调用参数:
* signature: [Buffer](../../object/ifs/Buffer.md), 指定 BBS 签名
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* index[]: Integer, 指定要选择的证明的索引
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定公钥，必须是 Bls12381G2 的公钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回证明数据

--------------------------
**使用 Bls12381G2 生成 BBS 选择证明的函数**

```JavaScript
static Buffer crypto.proofGen(Buffer signature,
    Buffer messages[],
    Integer index[],
    KeyObject publicKey) async;
```

调用参数:
* signature: [Buffer](../../object/ifs/Buffer.md), 指定 BBS 签名
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* index[]: Integer, 指定要选择的证明的索引
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定公钥，必须是 Bls12381G2 的公钥

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回证明数据

--------------------------
**使用 Bls12381G2 生成 BBS 选择证明的函数**

```JavaScript
static Buffer crypto.proofGen(Buffer signature,
    Buffer messages[],
    Integer index[],
    Object key) async;
```

调用参数:
* signature: [Buffer](../../object/ifs/Buffer.md), 指定 BBS 签名
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要签名的一组消息
* index[]: Integer, 指定要选择的证明的索引
* key: Object, 指定公钥和选项

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回证明数据

key 内的参数会用于调用 [crypto.createPublicKey](crypto.md#createPublicKey) 创建公钥对象，此外还支持以下签名参数：
 - suite: 必须是 'Bls12381Sha256', 'Bls12381Shake256'。默认值: 'Bls12381Sha256'
 - header: 用于签名的附加数据
 - proof_header: 用于证明的附加数据

--------------------------
### proofVerify
**使用 Bls12381G2 验证 BBS 选择证明的函数**

```JavaScript
static Boolean crypto.proofVerify(Buffer messages[],
    Integer index[],
    Buffer publicKey,
    Buffer proof) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* index[]: Integer, 指定要选择的证明的索引
* publicKey: [Buffer](../../object/ifs/Buffer.md), 指定公钥，必须是 Bls12381G2 的公钥
* proof: [Buffer](../../object/ifs/Buffer.md), 指定证明数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用 Bls12381G2 验证 BBS 选择证明的函数**

```JavaScript
static Boolean crypto.proofVerify(Buffer messages[],
    Integer index[],
    KeyObject publicKey,
    Buffer proof) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* index[]: Integer, 指定要选择的证明的索引
* publicKey: [KeyObject](../../object/ifs/KeyObject.md), 指定公钥，必须是 Bls12381G2 的公钥
* proof: [Buffer](../../object/ifs/Buffer.md), 指定证明数据

返回结果:
* Boolean, 返回验证结果

--------------------------
**使用 Bls12381G2 验证 BBS 选择证明的函数**

```JavaScript
static Boolean crypto.proofVerify(Buffer messages[],
    Integer index[],
    Object key,
    Buffer proof) async;
```

调用参数:
* messages[]: [Buffer](../../object/ifs/Buffer.md), 指定要验证的一组消息
* index[]: Integer, 指定要选择的证明的索引
* key: Object, 指定公钥和选项
* proof: [Buffer](../../object/ifs/Buffer.md), 指定证明数据

返回结果:
* Boolean, 返回验证结果

key 内的参数会用于调用 [crypto.createPublicKey](crypto.md#createPublicKey) 创建公钥对象，此外还支持以下签名参数：
 - suite: 必须是 'Bls12381Sha256', 'Bls12381Shake256'。默认值: 'Bls12381Sha256'
 - header: 用于签名的附加数据
 - proof_header: 用于证明的附加数据

