# 模块 crypto_constants
[crypto](crypto.md) 模块常用常量定义模块

引用方法：

```JavaScript
var constants = require('crypto').constants
```

## 常量
        
### RSA_PKCS1_PADDING
**PKCS#1 填充方式，最常用的 RSA 填充方式**

```JavaScript
const crypto_constants.RSA_PKCS1_PADDING = 1;
```

--------------------------
### RSA_NO_PADDING
**不使用填充，原始 RSA 加密方式**

```JavaScript
const crypto_constants.RSA_NO_PADDING = 3;
```

--------------------------
### RSA_PKCS1_OAEP_PADDING
**PKCS#1 OAEP 填充方式，提供更安全的加密方式**

```JavaScript
const crypto_constants.RSA_PKCS1_OAEP_PADDING = 4;
```

--------------------------
### RSA_X931_PADDING
**X9.31 填充方式**

```JavaScript
const crypto_constants.RSA_X931_PADDING = 5;
```

--------------------------
### RSA_PKCS1_PSS_PADDING
**PKCS#1 PSS 填充方式，用于数字签名**

```JavaScript
const crypto_constants.RSA_PKCS1_PSS_PADDING = 6;
```

--------------------------
### RSA_PSS_SALTLEN_DIGEST
**PSS 填充使用摘要长度作为盐长度**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_DIGEST = -1;
```

--------------------------
### RSA_PSS_SALTLEN_MAX_SIGN
**PSS 填充使用最大可能长度作为盐长度**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_MAX_SIGN = -2;
```

--------------------------
### RSA_PSS_SALTLEN_AUTO
**PSS 填充自动确定盐长度**

```JavaScript
const crypto_constants.RSA_PSS_SALTLEN_AUTO = -2;
```

