# 对象 Cipher
对称加密算法对象

Cipher 对象属于 crypto 模块，创建：
```JavaScript
var c = new crypto.Cipher(crypto.AES, crypto.ECB, ...);
```
## 构造函数
        
### Cipher
Cipher 构造函数，仅用于 ARC4 初始化
```JavaScript
 new Cipher(Integer provider,
                Buffer key);
```

调用参数:
* provider - 指定加密算法
* key - 指定加密解密密码

--------------------------
Cipher 构造函数
```JavaScript
 new Cipher(Integer provider,
                Integer mode,
                Buffer key);
```

调用参数:
* provider - 指定加密算法
* mode - 指定分组密码工作模式
* key - 指定加密解密密码

--------------------------
Cipher 构造函数
```JavaScript
 new Cipher(Integer provider,
                Integer mode,
                Buffer key,
                Buffer iv);
```

调用参数:
* provider - 指定加密算法
* mode - 指定分组密码工作模式
* key - 指定加密解密密码
* iv - 指定初始向量

## 函数
        
### paddingMode
使用填充模式
```JavaScript
Cipher.paddingMode(Integer mode);
```

调用参数:
* mode - 指定填充模式，缺省为 PADDING_PKCS7

### encrypt
使用当前算法密码加密数据
```JavaScript
Buffer Cipher.encrypt(Buffer data);
```

调用参数:
* data - 指定要加密的数据

返回结果:
* 返回加密后的数据

### decrypt
使用当前算法密码解密数据
```JavaScript
Buffer Cipher.decrypt(Buffer data);
```

调用参数:
* data - 指定要解密的数据

返回结果:
* 返回解密后的数据

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
Cipher.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean Cipher.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 &#34;[Native Object]&#34;，对象可以根据自己的特性重新实现
```JavaScript
String Cipher.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value Cipher.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value Cipher.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### name
返回当前算法名称
```JavaScript
readonly String Cipher.name;
```

### keySize
返回当前算法密码长度，以位为单位
```JavaScript
readonly Integer Cipher.keySize;
```

### ivSize
返回当前算法初始向量长度，以字节为单位
```JavaScript
readonly Integer Cipher.ivSize;
```

### blockSize
返回当前算法数据块长度，以字节为单位
```JavaScript
readonly Integer Cipher.blockSize;
```

