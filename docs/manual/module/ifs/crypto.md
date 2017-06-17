# 模块 crypto
加密算法模块

使用方法：
@code
var crypto = require(&#39;crypto&#39;);
@endcode
## 函数
        
### loadPKey
加载一个 PEM/DER 格式的密钥文件
```JavaScript
PKey crypto.loadPKey(String filename,
                String password = "");
```

**调用参数:**
* filename - 密钥文件名
* password - 解密密码

### loadCert
加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
```JavaScript
X509Cert crypto.loadCert(String filename);
```

**调用参数:**
* filename - 证书文件名

loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

### loadCrl
加载一个 PEM/DER 格式的撤销证书，可多次调用
```JavaScript
X509Crl crypto.loadCrl(String filename);
```

**调用参数:**
* filename - 撤销证书文件名

### loadReq
加载一个 PEM/DER 格式的证书请求，可多次调用
```JavaScript
X509Req crypto.loadReq(String filename);
```

**调用参数:**
* filename - 证书请求文件名

### randomBytes
生成指定尺寸的随机数，使用 havege 生成器
```JavaScript
Buffer crypto.randomBytes(Integer size);
```

**调用参数:**
* size - 指定生成的随机数尺寸

**返回结果:**
* 返回生成的随机数

### simpleRandomBytes
生成指定尺寸的低强度随机数，使用快速的算法
```JavaScript
Buffer crypto.simpleRandomBytes(Integer size);
```

**调用参数:**
* size - 指定生成的随机数尺寸

**返回结果:**
* 返回生成的随机数

### pseudoRandomBytes
生成指定尺寸的伪随机数，使用 entropy 生成器
```JavaScript
Buffer crypto.pseudoRandomBytes(Integer size);
```

**调用参数:**
* size - 指定生成的随机数尺寸

**返回结果:**
* 返回生成的随机数

### randomArt
生成给定数据的可视化字符图像
```JavaScript
String crypto.randomArt(Buffer data,
                String title,
                Integer size = 8);
```

**调用参数:**
* data - 指定要展示的数据
* title - 指定字符图像的标题，多字节字符会导致宽度错误
* size - 字符图像尺寸

**返回结果:**
* 返回生成的可视化字符串图像

### pbkdf1
依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
```JavaScript
Buffer crypto.pbkdf1(Buffer password,
                Buffer salt,
                Integer iterations,
                Integer size,
                Integer algo);
```

**调用参数:**
* password - 指定使用的密码
* salt - 指定 hmac 使用的 salt
* iterations - 指定迭代次数
* size - 指定钥匙尺寸
* algo - 指定要使用的 hash 算法，详见 hash 模块

**返回结果:**
* 返回生成的二进制钥匙

### pbkdf1
依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
```JavaScript
Buffer crypto.pbkdf1(Buffer password,
                Buffer salt,
                Integer iterations,
                Integer size,
                String algoName);
```

**调用参数:**
* password - 指定使用的密码
* salt - 指定 hmac 使用的 salt
* iterations - 指定迭代次数
* size - 指定钥匙尺寸
* algoName - 指定要使用的 hash 算法，详见 hash 模块

**返回结果:**
* 返回生成的二进制钥匙

### pbkdf2
依据 rfc2898 根据明文 password 生成要求的二进制钥匙
```JavaScript
Buffer crypto.pbkdf2(Buffer password,
                Buffer salt,
                Integer iterations,
                Integer size,
                Integer algo);
```

**调用参数:**
* password - 指定使用的密码
* salt - 指定 hmac 使用的 salt
* iterations - 指定迭代次数
* size - 指定钥匙尺寸
* algo - 指定要使用的 hash 算法，详见 hash 模块

**返回结果:**
* 返回生成的二进制钥匙

### pbkdf2
依据 rfc2898 根据明文 password 生成要求的二进制钥匙
```JavaScript
Buffer crypto.pbkdf2(Buffer password,
                Buffer salt,
                Integer iterations,
                Integer size,
                String algoName);
```

**调用参数:**
* password - 指定使用的密码
* salt - 指定 hmac 使用的 salt
* iterations - 指定迭代次数
* size - 指定钥匙尺寸
* algoName - 指定要使用的 hash 算法，详见 hash 模块

**返回结果:**
* 返回生成的二进制钥匙

### pbkdf2Sync
依据 rfc2898 根据明文 password 生成要求的二进制钥匙，是 pbkdf2 的同步版兼容接口
```JavaScript
Buffer crypto.pbkdf2Sync(Buffer password,
                Buffer salt,
                Integer iterations,
                Integer size,
                String algoName);
```

**调用参数:**
* password - 指定使用的密码
* salt - 指定 hmac 使用的 salt
* iterations - 指定迭代次数
* size - 指定钥匙尺寸
* algoName - 指定要使用的 hash 算法，详见 hash 模块

**返回结果:**
* 返回生成的二进制钥匙

## 常量
        
### AES
指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
```JavaScript
crypto.AES;
```

### CAMELLIA
指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
```JavaScript
crypto.CAMELLIA;
```

### DES
指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC
```JavaScript
crypto.DES;
```

### DES_EDE
指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC
```JavaScript
crypto.DES_EDE;
```

### DES_EDE3
指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC
```JavaScript
crypto.DES_EDE3;
```

### BLOWFISH
指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR
```JavaScript
crypto.BLOWFISH;
```

### ARC4
指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key
```JavaScript
crypto.ARC4;
```

### ECB
指定分组密码工作模式支持 ECB
```JavaScript
crypto.ECB;
```

### CBC
指定分组密码工作模式支持 CBC
```JavaScript
crypto.CBC;
```

### CFB64
指定分组密码工作模式支持 CFB64
```JavaScript
crypto.CFB64;
```

### CFB128
指定分组密码工作模式支持 CFB128
```JavaScript
crypto.CFB128;
```

### OFB
指定分组密码工作模式支持 OFB
```JavaScript
crypto.OFB;
```

### CTR
指定分组密码工作模式支持 CTR
```JavaScript
crypto.CTR;
```

### GCM
指定分组密码工作模式支持 GCM
```JavaScript
crypto.GCM;
```

### STREAM
指定流密码模式
```JavaScript
crypto.STREAM;
```

### CCM
指定分组密码工作模式支持 CCM
```JavaScript
crypto.CCM;
```

### PKCS7
指定填充模式为 PKCS7
```JavaScript
crypto.PKCS7;
```

### ONE_AND_ZEROS
指定填充模式为 ONE_AND_ZEROS
```JavaScript
crypto.ONE_AND_ZEROS;
```

### ZEROS_AND_LEN
指定填充模式为 ZEROS_AND_LEN
```JavaScript
crypto.ZEROS_AND_LEN;
```

### ZEROS
指定填充模式为 ZEROS
```JavaScript
crypto.ZEROS;
```

### NOPADDING
指定填充模式为 NOPADDING
```JavaScript
crypto.NOPADDING;
```

