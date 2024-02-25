# 模块 crypto
`crypto` 模块是 `fibjs` 内置的加密算法模块。它提供了对称加密、非对称加密、摘要算法、密码学随机数生成器等功能。在使用之前，需要通过 `require('crypto')` 加载该模块。

在 `crypto` 模块中，有很多对象可以使用，比如:

- `PKey`: 不对称加密算法对象
- `X509Cert`: 用于操作 X.509 证书的对象
- `Cipher`: 用于实现对称加密的对象
- `Digest`: 用于实现摘要算法的对象

在使用加密算法之前，需要先创建一个密钥对象，比如以下创建一个 `AES` 密钥对象的示例:

```JavaScript
const crypto = require('crypto');
const key = crypto.randomBytes(16); // generate a 16-byte random key
```

接下来，使用 `Cipher` 对象来对明文进行加密:

```JavaScript
const c = new crypto.Cipher(crypto.AES, crypto.ECB, key);
const data = 'hello, world';
const encrypted = c.encrypt(data).hex();
console.log(encrypted); // output encrypted data
```

以上示例中，创建了一个 `AES` 加密的 `Cipher` 对象，使用 `encrypt` 方法对明文进行加密，并返回加密结果。

除了对称加密算法，`crypto` 模块还可以支持非对称加密算法和摘要算法。比如以下示例是使用 `PKey` 和 `Digest` 对象实现 SHA256 加密的代码:

```JavaScript
const privateKey = crypto.loadPKey('private.pem'); // read private key from file
const data = 'hello, world';
const digest = new crypto.Digest(hash.SHA256);
digest.update(data);
const signature = privateKey.sign(digest.digest());
console.log(signature); // output signature
```

在以上示例中，首先读取了一个私钥文件，并准备了输入数据。然后，创建了一个 SHA256 的 `Digest` 对象，使用 `update` 方法把数据加入到 Hash 计算中。在计算完成后，使用 `privateKey.sign` 方法进行签名，并输出签名结果。

综上所述，`crypto` 模块提供了多种加密算法、摘要算法以及相关对象，这些功能可以帮助我们实现多方面的安全需求，比如对称和非对称加密、数字签名和加密验证等。

## 对象
        
### constants
**crypto 模块的常量对象，参见 [crypto_constants](crypto_constants.md)**

```JavaScript
crypto_constants crypto.constants;
```

--------------------------
### Cipher
**[Cipher](../../object/ifs/Cipher.md) 构造函数，参见 [Cipher](../../object/ifs/Cipher.md)**

```JavaScript
Cipher crypto.Cipher;
```

--------------------------
### PKey
**[PKey](../../object/ifs/PKey.md) 构造函数，参见 [PKey](../../object/ifs/PKey.md)**

```JavaScript
PKey crypto.PKey;
```

--------------------------
### ECKey
**[ECKey](../../object/ifs/ECKey.md) 构造函数，参见 [ECKey](../../object/ifs/ECKey.md)**

```JavaScript
ECKey crypto.ECKey;
```

--------------------------
### BlsKey
**[BlsKey](../../object/ifs/BlsKey.md) 构造函数，参见 [BlsKey](../../object/ifs/BlsKey.md)**

```JavaScript
BlsKey crypto.BlsKey;
```

--------------------------
### X509Cert
**[X509Cert](../../object/ifs/X509Cert.md) 构造函数，参见 [X509Cert](../../object/ifs/X509Cert.md)**

```JavaScript
X509Cert crypto.X509Cert;
```

--------------------------
### X509Crl
**[X509Crl](../../object/ifs/X509Crl.md) 构造函数，参见 [X509Crl](../../object/ifs/X509Crl.md)**

```JavaScript
X509Crl crypto.X509Crl;
```

--------------------------
### X509Req
**[X509Req](../../object/ifs/X509Req.md) 构造函数，参见 [X509Req](../../object/ifs/X509Req.md)**

```JavaScript
X509Req crypto.X509Req;
```

## 静态函数
        
### getHashes
**获取 crypto 模块支持的的 [hash](hash.md)(摘要) 算法**

```JavaScript
static Array crypto.getHashes();
```

返回结果:
* Array, 返回支持的 [hash](hash.md) 算法数组

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
- format: 必须是 'pem', 'der' 或 'jwk'。默认值: 'pem'
- type: 必须是 'pkcs1', 'pkcs8' 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
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
- format: 必须是 'pem', 'der' 或 'jwk'。默认值: 'pem'
- type: 必须是 'pkcs1', 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
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
### loadCert
**加载一个 CRT/PEM/DER 格式的证书，可多次调用**

```JavaScript
static X509Cert crypto.loadCert(String filename);
```

调用参数:
* filename: String, 证书文件名

返回结果:
* [X509Cert](../../object/ifs/X509Cert.md), 返回包含证书的对象

--------------------------
### loadCrl
**加载一个 PEM/DER 格式的撤销证书，可多次调用**

```JavaScript
static X509Crl crypto.loadCrl(String filename);
```

调用参数:
* filename: String, 撤销证书文件名

返回结果:
* [X509Crl](../../object/ifs/X509Crl.md), 返回包含撤销证书的对象

--------------------------
### loadReq
**加载一个 PEM/DER 格式的证书请求，可多次调用**

```JavaScript
static X509Req crypto.loadReq(String filename);
```

调用参数:
* filename: String, 证书请求文件名

返回结果:
* [X509Req](../../object/ifs/X509Req.md), 返回包含请求证书的对象

--------------------------
### loadPKey
**加载一个 CRT/PEM/DER 格式的非对称公钥或者私钥**

```JavaScript
static PKey crypto.loadPKey(String filename);
```

调用参数:
* filename: String, 公钥或者私钥文件名

返回结果:
* [PKey](../../object/ifs/PKey.md), 返回包含 [PKey](../../object/ifs/PKey.md) 的对象

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
### generateKey
**生成一个 RSA 私钥**

```JavaScript
static PKey crypto.generateKey(Integer size) async;
```

调用参数:
* size: Integer, 指定 RSA 密钥长度，bit 为单位

返回结果:
* [PKey](../../object/ifs/PKey.md), 返回包含生成私钥的对象

--------------------------
**生成一个椭圆曲线私钥**

```JavaScript
static PKey crypto.generateKey(String curve = "secp521r1") async;
```

调用参数:
* curve: String, 指定预置椭圆曲线，缺省为 'secp256r1'

返回结果:
* [PKey](../../object/ifs/PKey.md), 返回包含生成私钥的对象

curve 可选的曲线包含 NIST 曲线和别名如下:

| 曲线 | 别名 |
| ----------- | ----------- |
| NIST P-192 | 'NIST P-192', 'p192', 'P-192', 'prime192v1', 'secp192r1' |
| NIST P-224 | 'NIST P-224', 'p224', 'P-224', 'prime224v1', 'secp224r1' |
| NIST P-256 | 'NIST P-256', 'p256', 'P-256', 'prime256v1', 'secp256r1' |
| NIST P-384 | 'NIST P-384', 'p384', 'P-384', 'prime384v1', 'secp384r1' |
| NIST P-521 | 'NIST P-521', 'p521', 'P-521', 'prime521v1', 'secp521r1' |

其它支持的曲线包括:
"brainpoolP512r1", "brainpoolP384r1", "secp256k1", "P-256K", "brainpoolP256r1",
"sm2p256r1", "SM2", "Ed25519", "BLS12381_G1", "BLS12381_G2"

--------------------------
### generateKeyPair
**生成给定 type 的新非对称密钥对。目前支持 RSA、RSA-PSS、DSA、EC、Ed25519、Ed448、X25519、X448、SM2**

```JavaScript
static (Variant publicKey, Variant privateKey) crypto.generateKeyPair(String type,
    Object options = {}) async;
```

调用参数:
* type: String, 指定要生成的密钥类型，必须是 'rsa'、'rsa-pss'、'dsa'、'ec'、'ed25519'、'x25519'、'x448' 或 'sm2'
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
* algoName: String, 指定要使用的 [hash](hash.md) 算法，详见 [hash](hash.md) 模块
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
* algoName: String, 指定要使用的 [hash](hash.md) 算法，详见 [hash](hash.md) 模块

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
    Buffer privateKey);
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
    KeyObject privateKey);
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
    Object key);
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
    Buffer signature);
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
    Buffer signature);
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
    Buffer signature);
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

## 常量
        
### AES
**指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM，XTS**

```JavaScript
const crypto.AES = 1;
```

--------------------------
### DES
**指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.DES = 2;
```

--------------------------
### DES_EDE3
**指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.DES_EDE3 = 3;
```

--------------------------
### CAMELLIA
**指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM**

```JavaScript
const crypto.CAMELLIA = 4;
```

--------------------------
### ARIA
**指定对称加密算法 ARIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM**

```JavaScript
const crypto.ARIA = 5;
```

--------------------------
### CHACHA20
**指定对称加密算法 CHACHA20，支持 256 位 key，分组密码工作模式支持 POLY1305**

```JavaScript
const crypto.CHACHA20 = 6;
```

--------------------------
### SM4
**指定对称加密算法 SM4, 分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.SM4 = 7;
```

--------------------------
### ECB
**指定分组密码工作模式支持 ECB**

```JavaScript
const crypto.ECB = 1;
```

--------------------------
### CBC
**指定分组密码工作模式支持 CBC**

```JavaScript
const crypto.CBC = 2;
```

--------------------------
### CFB64
**指定分组密码工作模式支持 CFB64**

```JavaScript
const crypto.CFB64 = 3;
```

--------------------------
### CFB128
**指定分组密码工作模式支持 CFB128**

```JavaScript
const crypto.CFB128 = 4;
```

--------------------------
### OFB
**指定分组密码工作模式支持 OFB**

```JavaScript
const crypto.OFB = 5;
```

--------------------------
### CTR
**指定分组密码工作模式支持 CTR**

```JavaScript
const crypto.CTR = 6;
```

--------------------------
### GCM
**指定分组密码工作模式支持 GCM**

```JavaScript
const crypto.GCM = 7;
```

--------------------------
### STREAM
**指定流密码模式**

```JavaScript
const crypto.STREAM = 8;
```

--------------------------
### CCM
**指定分组密码工作模式支持 CCM**

```JavaScript
const crypto.CCM = 9;
```

--------------------------
### XTS
**指定分组密码工作模式支持 XTS**

```JavaScript
const crypto.XTS = 10;
```

--------------------------
### POLY1305
**指定分组密码工作模式支持 POLY1305**

```JavaScript
const crypto.POLY1305 = 11;
```

--------------------------
### PKCS7
**指定填充模式为 PKCS7**

```JavaScript
const crypto.PKCS7 = 0;
```

--------------------------
### ONE_AND_ZEROS
**指定填充模式为 ONE_AND_ZEROS**

```JavaScript
const crypto.ONE_AND_ZEROS = 1;
```

--------------------------
### ZEROS_AND_LEN
**指定填充模式为 ZEROS_AND_LEN**

```JavaScript
const crypto.ZEROS_AND_LEN = 2;
```

--------------------------
### ZEROS
**指定填充模式为 ZEROS**

```JavaScript
const crypto.ZEROS = 3;
```

--------------------------
### NOPADDING
**指定填充模式为 NOPADDING**

```JavaScript
const crypto.NOPADDING = 4;
```

