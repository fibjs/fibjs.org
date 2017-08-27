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
### loadPKey
**加载一个 PEM/DER 格式的密钥文件**

```JavaScript
static PKey crypto.loadPKey(String filename,
    String password = "");
```

调用参数:
* filename: String, 密钥文件名
* password: String, 解密密码

返回结果:
* [PKey](../../object/ifs/PKey.md), 返回包含密钥的对象

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

loadFile 加载 mozilla 的 certdata,txt， 可于 [http](http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

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

## 常量
        
### AES
**指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM**

```JavaScript
const crypto.AES = 1;
```

--------------------------
### CAMELLIA
**指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM**

```JavaScript
const crypto.CAMELLIA = 2;
```

--------------------------
### DES
**指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.DES = 3;
```

--------------------------
### DES_EDE
**指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.DES_EDE = 4;
```

--------------------------
### DES_EDE3
**指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC**

```JavaScript
const crypto.DES_EDE3 = 5;
```

--------------------------
### BLOWFISH
**指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR**

```JavaScript
const crypto.BLOWFISH = 6;
```

--------------------------
### ARC4
**指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key**

```JavaScript
const crypto.ARC4 = 7;
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

