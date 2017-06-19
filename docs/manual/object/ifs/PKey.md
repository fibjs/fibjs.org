# 对象 PKey
不对称加密算法对象

PKey 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：
```JavaScript
var k = new crypto.PKey();
```
## 构造函数
        
### PKey
PKey 构造函数
```JavaScript
 new PKey();
```

## 成员函数
        
### genRsaKey
生成一个 RSA 私钥
```JavaScript
PKey.genRsaKey(Integer size) async;
```

调用参数:
* size - 指定 RSA 密钥长度，bit 为单位

--------------------------
### genEcKey
生成一个 EC 私钥
```JavaScript
PKey.genEcKey(String curve = "secp521r1") async;
```

调用参数:
* curve - 指定预置椭圆曲线，可选值为："secp521r1", "brainpoolP512r1", "secp384r1", "brainpoolP384r1", "secp256r1", "secp256k1", "brainpoolP256r1", "secp224r1", "secp224k1", "secp192r1", "secp192k1"

--------------------------
### isPrivate
查询当前密钥是否为私钥
```JavaScript
Boolean PKey.isPrivate();
```

返回结果:
* 为 True 表示为私钥

--------------------------
### clone
复制当前密钥
```JavaScript
PKey PKey.clone();
```

返回结果:
* 当前密钥的复制对象

--------------------------
### importKey
加载一个 DER 格式的密钥
```JavaScript
PKey.importKey(Buffer DerKey,
                String password = "");
```

调用参数:
* DerKey - DER 格式的密钥
* password - 解密密码

--------------------------
加载一个 PEM 格式的密钥
```JavaScript
PKey.importKey(String pemKey,
                String password = "");
```

调用参数:
* pemKey - PEM 格式的密钥
* password - 解密密码

--------------------------
### importFile
加载一个 PEM/DER 格式的密钥文件
```JavaScript
PKey.importFile(String filename,
                String password = "");
```

调用参数:
* filename - 密钥文件名
* password - 解密密码

--------------------------
### exportPem
返回当前 key 的 PEM 格式编码
```JavaScript
String PKey.exportPem();
```

返回结果:
* 当前 key 的 PEM 格式编码

--------------------------
### exportDer
返回当前 key 的 DER 格式编码
```JavaScript
Buffer PKey.exportDer();
```

返回结果:
* 当前 key 的 DER 格式编码

--------------------------
### encrypt
使用当前算法密码公钥加密数据
```JavaScript
Buffer PKey.encrypt(Buffer data) async;
```

调用参数:
* data - 指定要加密的数据

返回结果:
* 返回加密后的数据

--------------------------
### decrypt
使用当前算法密码私钥解密数据
```JavaScript
Buffer PKey.decrypt(Buffer data) async;
```

调用参数:
* data - 指定要解密的数据

返回结果:
* 返回解密后的数据

--------------------------
### sign
使用当前算法密码私钥签名数据
```JavaScript
Buffer PKey.sign(Buffer data,
                Integer alg = 0) async;
```

调用参数:
* data - 指定要签名的数据
* alg - 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160

返回结果:
* 返回签名后的数据

--------------------------
### verify
使用当前算法密码公钥验证数据
```JavaScript
Boolean PKey.verify(Buffer sign,
                Buffer data) async;
```

调用参数:
* sign - 指定要验证的签名
* data - 指定要验证的数据

返回结果:
* 返回验证后的结果

--------------------------
### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
PKey.dispose();
```

--------------------------
### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean PKey.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

--------------------------
### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String PKey.toString();
```

返回结果:
* 返回对象的字符串表示

--------------------------
### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value PKey.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

--------------------------
### valueOf
返回对象本身的数值
```JavaScript
Value PKey.valueOf();
```

返回结果:
* 返回对象本身的数值

## 成员属性
        
### name
返回当前算法名称
```JavaScript
readonly String PKey.name;
```

--------------------------
### keySize
返回当前算法密码长度，以位为单位
```JavaScript
readonly Integer PKey.keySize;
```

--------------------------
### publicKey
返回当前密钥的公钥
```JavaScript
readonly PKey PKey.publicKey;
```

返回结果:
* 当前密钥的公钥

