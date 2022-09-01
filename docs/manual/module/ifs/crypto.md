# 模块 crypto
加密算法模块

使用方法：

```JavaScript
var crypto = require('crypto');
```

## 对象
        
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
### loadCert
**加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用**

```JavaScript
static X509Cert crypto.loadCert(String filename);
```

调用参数:
* filename: String, 证书文件名

返回结果:
* [X509Cert](../../object/ifs/X509Cert.md), 返回包含证书的对象

loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

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
### randomBytes
**生成指定尺寸的随机数，使用 havege 生成器**

```JavaScript
static Buffer crypto.randomBytes(Integer size) async;
```

调用参数:
* size: Integer, 指定生成的随机数尺寸

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的随机数

--------------------------
### simpleRandomBytes
**生成指定尺寸的低强度随机数，使用快速的算法**

```JavaScript
static Buffer crypto.simpleRandomBytes(Integer size) async;
```

调用参数:
* size: Integer, 指定生成的随机数尺寸

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的随机数

--------------------------
### pseudoRandomBytes
**生成指定尺寸的伪随机数，使用 entropy 生成器**

```JavaScript
static Buffer crypto.pseudoRandomBytes(Integer size) async;
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
### randomArt
**生成给定数据的可视化字符图像**

```JavaScript
static String crypto.randomArt(Buffer data,
    String title,
    Integer size = 8);
```

调用参数:
* data: [Buffer](../../object/ifs/Buffer.md), 指定要展示的数据
* title: String, 指定字符图像的标题，多字节字符会导致宽度错误
* size: Integer, 字符图像尺寸

返回结果:
* String, 返回生成的可视化字符串图像

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

curve 可选的曲线包含 NIST 曲线和别名如下：

| 曲线 | 别名 |
| ----------- | ----------- |
| NIST P-192 | 'NIST P-192', 'p192', 'P-192', 'prime192v1', 'secp192r1' |
| NIST P-224 | 'NIST P-224', 'p224', 'P-224', 'prime224v1', 'secp224r1' |
| NIST P-256 | 'NIST P-256', 'p256', 'P-256', 'prime256v1', 'secp256r1' |
| NIST P-384 | 'NIST P-384', 'p384', 'P-384', 'prime384v1', 'secp384r1' |
| NIST P-521 | 'NIST P-521', 'p521', 'P-521', 'prime521v1', 'secp521r1' |

其它支持的曲线包括：
"brainpoolP512r1", "brainpoolP384r1", "secp256k1", "P-256K", "brainpoolP256r1",
"sm2p256r1", "SM2", "Ed25519", "BLS12381_G1", "BLS12381_G2"

--------------------------
### pbkdf1
**依据 pbkdf1 根据明文 password 生成要求的二进制钥匙**

```JavaScript
static Buffer crypto.pbkdf1(Buffer password,
    Buffer salt,
    Integer iterations,
    Integer size,
    Integer algo) async;
```

调用参数:
* password: [Buffer](../../object/ifs/Buffer.md), 指定使用的密码
* salt: [Buffer](../../object/ifs/Buffer.md), 指定 hmac 使用的 salt
* iterations: Integer, 指定迭代次数
* size: Integer, 指定钥匙尺寸
* algo: Integer, 指定要使用的 [hash](hash.md) 算法，详见 [hash](hash.md) 模块

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的二进制钥匙

--------------------------
**依据 pbkdf1 根据明文 password 生成要求的二进制钥匙**

```JavaScript
static Buffer crypto.pbkdf1(Buffer password,
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
### pbkdf2
**依据 rfc2898 根据明文 password 生成要求的二进制钥匙**

```JavaScript
static Buffer crypto.pbkdf2(Buffer password,
    Buffer salt,
    Integer iterations,
    Integer size,
    Integer algo) async;
```

调用参数:
* password: [Buffer](../../object/ifs/Buffer.md), 指定使用的密码
* salt: [Buffer](../../object/ifs/Buffer.md), 指定 hmac 使用的 salt
* iterations: Integer, 指定迭代次数
* size: Integer, 指定钥匙尺寸
* algo: Integer, 指定要使用的 [hash](hash.md) 算法，详见 [hash](hash.md) 模块

返回结果:
* [Buffer](../../object/ifs/Buffer.md), 返回生成的二进制钥匙

--------------------------
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
### getHashes
**获取 crypto 模块支持的的 [hash](hash.md)(摘要) 算法, 比如 'md5', 'sha224'**

```JavaScript
static Array crypto.getHashes();
```

返回结果:
* Array, 返回 fibjs 支持的 [hash](hash.md) 算法数组

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

