# 对象 X509Cert
x509 证书对象

X509Cert 对象属于 [crypto](../../module/ifs/crypto.md) 模块，创建：
```JavaScript
var k = new crypto.X509Cert();
```
## 构造函数
        
### X509Cert
X509Cert 构造函数
```JavaScript
 new X509Cert();
```

## 函数
        
### load
加载一个 DER 格式的证书，可多次调用
```JavaScript
X509Cert.load(Buffer derCert);
```

调用参数:
* derCert - DER 格式的证书

--------------------------
加载一个 CRT/PEM/TXT 格式的证书，可多次调用
```JavaScript
X509Cert.load(String txtCert);
```

调用参数:
* txtCert - PEM 格式的证书

load 加载 mozilla 的 certdata,txt， 可于 [http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

### loadFile
加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
```JavaScript
X509Cert.loadFile(String filename);
```

调用参数:
* filename - 证书文件名

loadFile 加载 mozilla 的 certdata,txt， 可于 [http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用

### loadRootCerts
加载自带的缺省根证书，此证书内容源自：[http](../../module/ifs/http.md)://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
```JavaScript
X509Cert.loadRootCerts();
```

### verify
使用当前证书链验证给定的证书
```JavaScript
Boolean X509Cert.verify(X509Cert cert) async;
```

调用参数:
* cert - 给定需要验证的证书

返回结果:
* 如果验证成功则返回 True

### dump
导出已经加载的证书
```JavaScript
Array X509Cert.dump();
```

返回结果:
* 以数组方式导出证书链

### clear
清空已经加载的证书
```JavaScript
X509Cert.clear();
```

### dispose
强制回收对象，调用此方法后，对象资源将立即释放
```JavaScript
X509Cert.dispose();
```

### equals
比较当前对象与给定的对象是否相等
```JavaScript
Boolean X509Cert.equals(object expected);
```

调用参数:
* expected - 制定比较的目标对象

返回结果:
* 返回对象比较的结果

### toString
返回对象的字符串表示，一般返回 "[Native Object]"，对象可以根据自己的特性重新实现
```JavaScript
String X509Cert.toString();
```

返回结果:
* 返回对象的字符串表示

### toJSON
返回对象的 JSON 格式表示，一般返回对象定义的可读属性集合
```JavaScript
Value X509Cert.toJSON(String key = "");
```

调用参数:
* key - 未使用

返回结果:
* 返回包含可 JSON 序列化的值

### valueOf
返回对象本身的数值
```JavaScript
Value X509Cert.valueOf();
```

返回结果:
* 返回对象本身的数值

## 属性
        
### version
获取证书的版本
```JavaScript
readonly Integer X509Cert.version;
```

### serial
获取证书的序列号
```JavaScript
readonly String X509Cert.serial;
```

### issuer
获取证书颁发者的可分辨名称
```JavaScript
readonly String X509Cert.issuer;
```

### subject
获取证书的主题可分辨名称
```JavaScript
readonly String X509Cert.subject;
```

### notBefore
获取证书的生效时间
```JavaScript
readonly Date X509Cert.notBefore;
```

### notAfter
获取证书的到期时间
```JavaScript
readonly Date X509Cert.notAfter;
```

### ca
获取证书是否是 ca 证书
```JavaScript
readonly Boolean X509Cert.ca;
```

### pathlen
获取证书的 pathlen
```JavaScript
readonly Integer X509Cert.pathlen;
```

### usage
获取证书的使用范围
```JavaScript
readonly String X509Cert.usage;
```

结果为全部或部分以下内容：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign

### type
获取证书的 Netscape 证书类型
```JavaScript
readonly String X509Cert.type;
```

结果为全部或部分以下内容：client, server, email, objsign, reserved, sslCA, emailCA, objCA

### publicKey
获取证书的公钥
```JavaScript
readonly PKey X509Cert.publicKey;
```

### next
获取证书链中得下一个证书
```JavaScript
readonly X509Cert X509Cert.next;
```

